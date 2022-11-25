import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import{DeadstockmasterService} from 'src/app/theme/master/customer/dead-stock-master/dead-stock-master.service';
import { first } from 'rxjs/operators';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { ReportFrameComponent } from "../../report-frame/report-frame.component";
import { environment } from "src/environments/environment";
import { DomSanitizer} from '@angular/platform-browser';
import Swal from "sweetalert2";

@Component({
  selector: 'app-bnk-sub-summary',
  templateUrl: './bnk-sub-summary.component.html',
  styleUrls: ['./bnk-sub-summary.component.scss'],
  providers: [ OwnbranchMasterService,DeadstockmasterService]

})
export class BnkSubSummaryComponent implements OnInit {
  iframeurl:any='';
  clicked:boolean=false;
  @ViewChild(ReportFrameComponent ) child: ReportFrameComponent ; 
formSubmitted = false;
showRepo: boolean = false;
url = environment.base_url;
report_url = environment.report_url;
showLoading:boolean = false;
 
  ngForm:FormGroup;
// for dropdown ng module

ngbranch: any = null;
//dropdown
branchOption: any[];
//date
dates: any = null
maxDate: Date;
  minDate: Date;
  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter:SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    
  ) {
    this.dates = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
   }



  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
    
      // Starting_Account: ['', [Validators.required]],
      // Ending_Account: ['', [Validators.required]],
      date: ['', [Validators.required]],
  
    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
    }
  ngOnInit(): void {
    this.createForm()
    //branch list
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.dates = data.CURRENT_DATE;
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
  
  }
  view(event) {
  
    this.showLoading = true;

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if(this.ngForm.valid){

   this.showRepo = true;
    let obj = this.ngForm.value
    let Date = moment(obj.date).format('DD/MM/YYYY');
    
    let branch = obj.BRANCH_CODE;
    //  let startingcode= obj.Starting_Account;
    // let endingcode =obj.Ending_Account;
    

   this.iframeurl=this.report_url+ "examples/DeadstockBalanceList.php?Date='" + Date + "'&branch="+branch +"&bankName=" + bankName + " ";
   this.iframeurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
  }
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
  }
  
  }
  close(){
    this.resetForm()
    }
    resetForm() {
      // this.createForm()
      // this.ngForm.controls.BRANCH_CODE.reset();
      // this.ngForm.controls.Starting_Account.reset();
      // this.ngForm.controls.Ending_Account.reset();
      this.showRepo = false;
      this.clicked=false;
    }
    onLoad(){
    this.showLoading = false;

    }
}
