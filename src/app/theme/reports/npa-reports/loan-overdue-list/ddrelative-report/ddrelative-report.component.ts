import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import * as moment from 'moment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ddrelative-report',
  templateUrl: './ddrelative-report.component.html',
  styleUrls: ['./ddrelative-report.component.scss']
})
export class DDRelativeReportComponent implements OnInit {
//fromgroup
ngForm:FormGroup
//ngmodul
ngbranch: any = null;
schemeCode: any = null;
//date
defaultDate: any
maxDate: Date;
minDate: Date;
bsValue: any;
fromdate: any;
SchemeCodeDropdownDropdown: any[];
 
//ngfor
branchOption: any;
branch_code

clicked:boolean=false;
showRepo: boolean = false;
showLoading:boolean = false;
formSubmitted = false;
iframeurl5: any = ' ';
url = environment.base_url;
  report_url = environment.report_url;

  constructor(
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public SchemeCodeDropdownService: SchemeCodeDropdownService,
  
    private systemParameter:SystemMasterParametersService,
    private sanitizer: DomSanitizer,
     
  ) {
    this.defaultDate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
   }



  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE:  ['', [Validators.pattern, Validators.required]],
      Scheme_code: ["", [Validators.pattern, Validators.required]],
      FROM_DATE:  ['', [ Validators.required]],
     

    });
  }
  ngOnInit(): void {
    this.createForm()
     //branch list
     this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })
    this.SchemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {       
      var filtered = data.filter(function (scheme) {
        return (  scheme.name == 'LN'  );
      });
      this.SchemeCodeDropdownDropdown = filtered;
    })
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE;
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
  getschemename: any

  getIntro(event) {
    this.getschemename = event.name
    // this.getIntroducer()
  }

  view(event){

   
      
    this.showLoading = true;
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME;

    if(this.ngForm.valid){
      let obj = this.ngForm.value
      this.showRepo = true;
  // let date = moment(obj.FROM_DATE).format('DD/MM/YYYY');
  var sdate = moment(obj.FROM_DATE).startOf('quarter').format('DD/MM/YYYY');

  let date:any;
 if (this.defaultDate == obj.FROM_DATE) {
  date = moment(this.defaultDate,'DD/MM/YYYY').format('DD/MM/YYYY')
 }else{ 
  date = moment(this.defaultDate,'DD/MM/YYYY').format('DD/MM/YYYY')
 };

  let scheme = obj.Scheme_code
  
  let branch = obj.BRANCH_CODE
 
          
 this.iframeurl5= this.report_url+ "examples/BalanceBook.php?&date='"+date +"&scheme='" + scheme +"'&sdate='" + sdate +  "'&branch='"+ branch  + "&bankName=" + bankName + "";
 this.iframeurl5=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl5);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }

  }
  close(){
this.resetForm()
  }
  resetForm() {
  
    this.ngForm.controls.Scheme_code.reset();
    
    this.showRepo = false;
    this.clicked=false;
  }
}
