import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { DeadstockmasterService } from 'src/app/theme/master/customer/dead-stock-master/dead-stock-master.service';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@Component({
  selector: 'app-bnk-dedsk-bal-list-depre',
  templateUrl: './bnk-dedsk-bal-list-depre.component.html',
  styleUrls: ['./bnk-dedsk-bal-list-depre.component.scss'],
  providers: [OwnbranchMasterService, DeadstockmasterService]
})
export class BnkDedskBalListDepreComponent implements OnInit {

  iframeurl: any = '';
  clicked:boolean=false;
  //for date
  maxDate: Date;
  minDate: Date;
  date: any = null

    //account
    memFrom
    memTo
    branch
    mem:any

  //form Group
  ngForm: FormGroup;
  //dropdown
  scheme: any[];
  startingacc: any[];
  endingacc: any[];
  branchOption: any[];
  // for dropdown ng module

  ngbranch: any = null;
  schemeCode: any = null;
  obj: any;
  startingAccount: any = null;
  EndingAccount: any = null;

  formSubmitted = false;

  showRepo: boolean = false;

  //api
  url = environment.base_url;
  report_url = environment.report_url;

  id: any;
  Cust_ID: any[] //customer id from idmaster
  newcustid: any = null;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private systemParameter:SystemMasterParametersService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private sanitizer: DomSanitizer,
    private deadstockmasterService: DeadstockmasterService
  ) {
    this.date = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.date = data.CURRENT_DATE;
    })

    //dead stock 
    this.deadstockmasterService.getDeadstockList().pipe(first()).subscribe(data => {
      this.startingacc = data;
      this.endingacc = data;
      console.log(data)
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
  src: any;
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  view(event) {
// debugger
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value
      // let date = moment(obj.Date).format('DD/MM/YYYY');

      let date:any;
      if (this.date == obj.Date) {
        date = moment(this.date,'DD/MM/YYYY').format('DD/MM/YYYY')
      }else{ 
        date = moment(this.date,'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let branch = obj.BRANCH_CODE;
      let startingcode = obj.Starting_Account;
      let endingcode = obj.Ending_Account;

      let branchName = userData.branch.NAME


      this.iframeurl = this.report_url +"examples/BnkDeadbalDepr.php?date='" + date + "'&branch=" +  this.ngbranch  + "&startingcode=" + startingcode + "&endingcode=" + endingcode + "&bankName=" + bankName + "&branchName="+branchName+"";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }

  }



  // validations for ngForm
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],

      Starting_Account: ['', [Validators.required]],
      Ending_Account: ['', [Validators.required]],
      Date: ['', [Validators.required]],

    });
  }

  getschemename
  //load acno according start and end acno
loadAcno() {
this.memFrom = this.ngForm.controls['Starting_Account'].value
this.memTo = this.ngForm.controls['Ending_Account'].value
this.branch = this.ngForm.controls['BRANCH_CODE'].value
if (this.ngForm.controls['Starting_Account'].value < this.ngForm.controls['Ending_Account'].value) {
  this.mem = [this.memFrom, this.memTo, this.branch]
  if (this.getschemename ) {
    this.http.get(this.url + '/dead-stock-master' + this.mem).subscribe((data) => {
    });
  }
  
 


 
}
else {
  Swal.fire('Info', 'Ending Account Number Must Greater Than Starting  Account Number', 'info')
}
}

close(){
  this.resetForm()
  }

  resetForm() {
    // this.createForm()
    this.ngForm.controls.Starting_Account.reset();
    this.ngForm.controls.Ending_Account.reset();
    this.showRepo = false;
    this.clicked=false;
  }
}
