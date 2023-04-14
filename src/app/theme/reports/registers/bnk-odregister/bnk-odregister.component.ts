import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bnk-odregister',
  templateUrl: './bnk-odregister.component.html',
  styleUrls: ['./bnk-odregister.component.scss']
})
export class BnkODRegisterComponent implements OnInit {
  iframe3url: any = '';
  report_url = environment.report_url;
  // Created Form Group
  angForm: FormGroup;
  //  variable for validation
  formSubmitted = false;

  // loader:boolean=false;
  clicked:boolean=false;
  // branch name 
  selectedBranch: number;
  branch_codeList: any = null
  branch_code: any[]//from ownbranchmaster
  branchCode: any = null
  ngBranchCode
  ngscheme

  //dropdwon
  Startingcode:any=null;
  Endingcode:any=null;
  schemeCode: any = null;
  obj: any;
  startingCode: any[];
  endingCode: any[];
  scheme: any[];
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  selectedCode: any;
  showRepo: boolean = false;
  
  ngacno: any = null;


     //account
     memFrom
     memTo
     branch
     mem:any
  //api
  url = environment.base_url;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,    private systemParameter: SystemMasterParametersService,

  ) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      Scheme_code: ['', [Validators.required]],
      OD_TEMP: new FormControl ('TemporaryOverDraft'),
      // Starting_Account: ['', [Validators.required]],
      // Ending_Account: ['', [Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]], 


    })
  }
  ngOnInit(): void {
    this.createForm()
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }
    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.ngBranchCode = data[0].value
    })


  // Scheme Code
  this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    var filtered = data.filter(function (scheme) {
      return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS' || scheme.name =='SB');
    });
    this.scheme = filtered;

  })
  // const iframe = document.getElementById("test");
  // iframe.addEventListener("load", function() {
  //     console.log("Finish");
  // });
 //display date
 this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
  this.todate = data.CURRENT_DATE;
});
//for starting and ending date
this.systemParameter.getFormData(1).subscribe(data => {
  let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
  this.todate = data.CURRENT_DATE
  this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
  this.fromdate = this.fromdate._d
})
  }



   //For Starting account and Ending Account dropdown
   getschemename: any

   getBranch() {
     this.getIntroducer()
   }
   getIntro(event) {
     this.getschemename = event.name
     this.getIntroducer()
   }
 
 
   getIntroducer() {
 
     let data: any = localStorage.getItem('user');
     let result = JSON.parse(data);
     let branchCode = result.branch.id;
     this.obj = [this.schemeCode, branchCode]
     switch (this.getschemename) {
 
 
       case 'LN':
         this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
           this.startingCode = data;
           this.Startingcode = null
           this.endingCode = data;
           this.Endingcode = null
         })
         break;
       case 'CC':
         this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.startingCode = data;
          this.Startingcode = null
          this.endingCode = data;
          this.Endingcode = null
         })
         break;
       case 'DS':
         this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.startingCode = data;
          this.Startingcode = null
          this.endingCode = data;
          this.Endingcode = null
         })
         break;
 
     }
   }

 //load acno according start and end acno
 loadAcno() {
  this.memFrom = this.angForm.controls['Starting_Account'].value
  this.memTo = this.angForm.controls['Ending_Account'].value
  this.branch = this.angForm.controls['BRANCH_CODE'].value
  if (this.angForm.controls['Starting_Account'].value < this.angForm.controls['Ending_Account'].value) {
    this.mem = [this.memFrom, this.memTo, this.branch]
   
    if (this.getschemename == 'LN') {
      this.http.get(this.url + '/term-loan-master/scheme/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'CC') {
      this.http.get(this.url + '/cash-credit-master/scheme/' + this.mem).subscribe((data) => {
      });
    }
    else if (this.getschemename == 'DS') {
      this.http.get(this.url + '/dispute-loan-master/scheme/' + this.mem).subscribe((data) => {
      });
    }
   
  
  }
  else {
    Swal.fire('Info', 'Ending Account Number Must Greater Than Starting  Account Number', 'info')
  }
}

  src: any;
  view(event) {
    debugger
    // this.loader=true;
    event.preventDefault();
    this.formSubmitted = true;
  //  loader = true;
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME
    
    if (this.angForm.valid) {

      this.showRepo = true;
      let obj = this.angForm.value
      let branch = obj.BRANCH_CODE;
      let startingcode = obj.Starting_Account;
      let endingcode = obj.Ending_Account;
      let schemecode = obj.Scheme_code;
      let tem_perOD = obj.OD_TEMP;
      let sdate     = obj.sdate;
      let edate     = obj.edate;
     
      this.iframe3url = this.report_url+`examples/ODRegister.php?startingcode='${startingcode}'&endingcode='${endingcode}'&branch='${branch}'&schemecode='${schemecode}'&flag='${tem_perOD}'&bankName='${bankName}'&startDate='${sdate}'&endDate='${edate}'&NAME=''`; 
      this.iframe3url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe3url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }

    // setTimeout(()=>{
    //   this.loader=false;
    // },3000);

  }

  close() {
    this.resetForm()
  }

  resetForm() {
    // this.createForm()
    // this.angForm.controls.Scheme_code.reset();
    // // this.angForm.controls.OD_TEMP.reset();
    // this.angForm.controls.Starting_Account.reset();
    // this.angForm.controls.Ending_Account.reset();
    this.angForm.reset()
    this.showRepo = false;
    this.clicked=false;
  }

  loadIframe(){
    console.log('iframe data load')
  }


}