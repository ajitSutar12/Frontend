import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators,FormControl} from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { DomSanitizer} from '@angular/platform-browser';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { CustomerIdService } from 'src/app/theme/master/customer/customer-id/customer-id.service';
import { SavingMasterService } from 'src/app/theme/master/customer/saving-master/saving-master.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-custidwise-deposit-list',
  templateUrl: './custidwise-deposit-list.component.html',
  styleUrls: ['./custidwise-deposit-list.component.scss']
})
export class CustidwiseDepositListComponent implements OnInit {
// Created Form Group
ngForm: FormGroup;
 //dropdown
  branchOption: any[];
  Cust_ID
  // for dropdown ng module
  ngbranch: any = null;
  ngcust: any = null;
   // Date variables
 todate: any = null;
 fromdate: any = null
 maxDate: Date;
 minDate: Date;
 bsValue = new Date();
 equal: any
 startfrom
 startto
 isTdsForm: boolean = false;
 acno: any = null
 code: any = null
 obj: any
 getschemename: any

 //iframe
 formSubmitted = false;
 clicked:boolean=false;
 showRepo: boolean = false;
   //api
   url = environment.base_url;
   report_url = environment.report_url;
   iframe5url: any = ' ';
  introducerACNo: any;
  ngIntroducer: any;
  setLang: string;
  constructor( private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private customerID: CustomerIDMasterDropdownService,   
     private savingMasterService: SavingMasterService,

    public customerIdService: CustomerIdService,
    private sanitizer: DomSanitizer,
    private translate:TranslateService) 
    {
      this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate()) }

  ngOnInit(): void {
    this.createForm()
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
     this.branchOption = data;
   });
   //customer Id
   this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
    this.Cust_ID = data;
  })
  //for starting and ending date
   this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
    this.todate = data.CURRENT_DATE;
  });

  this.systemParameter.getFormData(1).subscribe(data => {
    let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
    this.todate = data.CURRENT_DATE
    this.setLang = data.SET_LANGUAGE
    this.translate.setDefaultLang(this.setLang);
    
    this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
    this.fromdate = this.fromdate._d
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

  //validation
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      CUST_ID: ["", [Validators.pattern, Validators.required]],
      START_DATE: ["", [Validators.required]],
      SUBMISSION:  new FormControl('SUBMISSION'),
      Show_Only_Top:[''],
      INPUT: [""]
    });
} 

getBranch() {
  this.getIntroducer()
}

// getIntro(event) {
//   this.getschemename = event.name
//   this.getIntroducer()
// }

//get account no according scheme for introducer
getIntroducer() {
  this.obj = [this.ngbranch]
  this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          // this.ngIntroducer = null
        })
  // switch (this.getschemename) {
  //   case 'SB':
  //     this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
  //       this.introducerACNo = data;
  //       this.ngIntroducer = null
  //     })
  //     break;

  //   case 'SH':
  //     this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
  //       this.introducerACNo = data;
  //       this.ngIntroducer = null
  //     })
  //     break;

  //   case 'CA':
  //     this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
  //       this.introducerACNo = data;
  //       this.ngIntroducer = null
  //     })
  //     break;

  //   case 'LN':
  //     this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
  //       this.introducerACNo = data;
  //       this.ngIntroducer = null
  //     })
  //     break;

  //   case 'TD':
  //     this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
  //       this.introducerACNo = data;
  //       this.ngIntroducer = null
  //     })
  //     break;

  //   case 'DS':
  //     this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
  //       this.introducerACNo = data;
  //       this.ngIntroducer = null
  //     })
  //     break;

  //   case 'CC':
  //     this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
  //       this.introducerACNo = data;
  //       this.ngIntroducer = null
  //     })
  //     break;

  //   case 'GS':
  //     this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
  //       this.introducerACNo = data;
  //       this.ngIntroducer = null
  //     })
  //     break;

  //   case 'PG':
  //     this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
  //       this.introducerACNo = data;
  //       this.ngIntroducer = null
  //     })
  //     break;

  //   case 'AG':
  //     this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
  //       this.introducerACNo = data;
  //       this.ngIntroducer = null
  //     })
  //     break;

  //   case 'IV':
  //     this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
  //       this.introducerACNo = data;
  //       this.ngIntroducer = null
  //     })
  //     break;
  // }
}


scrollToTop() {
  window.scrollTo({ top: 200, behavior: 'smooth' });
} 

src: any;
view(event) {
  event.preventDefault();
  this.formSubmitted = true;

  let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME

  if(this.ngForm.valid){
  let obj = this.ngForm.value
  this.showRepo = true;

  let date =  moment(obj.FROM_DATE).format('DD/MM/YYYY'); 
  if(this.fromdate == userData.branch.syspara.CURRENT_DATE)
    {
      obj['START_DATE'] =userData.branch.syspara.CURRENT_DATE
    }
    else{
    let date = moment(this.fromdate).format('DD/MM/YYYY');
    let tDate = moment(date, 'DD/MM/YYYY')
    obj['START_DATE']=date 
  }
  
  let custid = obj.CUST_ID
  let branch = obj.BRANCH_CODE

  // this.iframe5url=this.report_url+"examples/CustomerIDWiseDepositList.php?START_DATE='" +obj.START_DATE + "'&END_DATE='" + obj.START_DATE + "'&BRANCH='"+ branchName +"'&AC_TYPE='7'&AC_ACNOTYPE='TD'&AC_OPDATE='"+obj.START_DATE +"'&FLAG1='0'&FLAG2='1'&FLAG3='2'&TRAN_DRCR='D'&CUST_ID='"+ custid +"'"; 
  this.iframe5url=this.report_url+"examples/CustomerIDWiseDepositList.php?START_DATE='" +obj.START_DATE + "'&END_DATE='" + obj.START_DATE + "'&BRANCH='"+ branchName +"'&AC_TYPE='7'&AC_ACNOTYPE='TD'&AC_OPDATE='"+obj.START_DATE +"'&FLAG1=0&BRANCH_CODE="+ branch +"&TRAN_DRCR='D'&CUST_ID='"+ custid +"'&BANK_NAME='"+ bankName +"'"
  console.log( this.iframe5url);
  this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
  
 
}
else {
  Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Mandatory_Field')}`, 'warning').then(()=>{ this.clicked=false});
}

}

close(){
this.resetForm()
}

// if (data.Show_Only_Top == true) {
//   this.isTdsForm = true;
 
// }
// else {
//   this.isTdsForm = false;
 
// }

// Reset Function
resetForm() {
this.ngForm.controls.CUST_ID.reset();
this.showRepo = false;
this.clicked=false;
}
}