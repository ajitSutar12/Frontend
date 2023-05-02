import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { VoucherEntryService } from '../voucher-entry/voucher-entry.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

import { ReportFrameComponent } from "../../reports/report-frame/report-frame.component";

 


@Component({
  selector: 'app-term-deposit-receipt-printing',
  templateUrl: './term-deposit-receipt-printing.component.html',
  styleUrls: ['./term-deposit-receipt-printing.component.scss']
})
export class TermDepositReceiptPrintingComponent implements OnInit {
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;

  @ViewChild(ReportFrameComponent ) child: ReportFrameComponent ; 

    //for Formgroup
    ngForm: FormGroup
    
    bsValue = new Date();

    //ngModel
    BranchCode
    schemeCode
    firstno
    fromdate
    todate
    acnumber
    lastno
    scheme
  isTdsForm: boolean;
  branch_code: any;
  
  obj: any;
  introducerACNo: any;
  selectedBranch: any;
  narrationList: any;
  getschemename: any
  allScheme //account type for introducer
  formSubmitted = false;
  report_url = environment.report_url;
 showRepo: boolean = false;
 clicked:boolean=false;
 iframe5url: any = '';
  Scheme 
  ngFnarration: any;

  schemeACNo
  transferSchemeDetails : any;
  schemeType: string = 'TD'
  city: any;
  Ncity: any;
  defaultDate: any;
  ngbranch: any;
  branchName: any;

  constructor(  
    private fb: FormBuilder,
    private _service: VoucherEntryService,

     private ownbranchMasterService : OwnbranchMasterService,
    private schemeCodeDropdownService : SchemeCodeDropdownService,
    private schemeAccountNoService : SchemeAccountNoService,
    private savingMasterService: SavingMasterService,
    private _SchemeCodeDropdown: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer,    private systemParameter:SystemMasterParametersService,





  ) { }

  ngOnInit(): void {
    this.createForm()

    let user = JSON.parse(localStorage.getItem('user'));

    //branchcode
        this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
          this.branch_code = data;
          this.BranchCode = user.branchId;
        })

this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
  this.scheme = data

  
  this.schemeCode = data[0].value
  this.getIntroducer()

})

this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
  this.Scheme = data;
});
this._SchemeCodeDropdown.getAllSchemeList().pipe(first()).subscribe(data => {
  this.allScheme = data;
})
  //Narration List
  this._service.getNarrationMaster().subscribe(data => {
    this.narrationList = data;
  })

    //display defalut date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE;
    })
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      if (result.RoleDefine[0].Role.id == 1) {
        this.ngbranch = result.branch.id
        this.ngForm.controls['BRANCH_CODE'].enable()
        this.branchName = result.branch.NAME
  
      }
      else {
        this.ngForm.controls['BRANCH_CODE'].disable()
        this.ngbranch = result.branch.id
        this.branchName = result.branch.NAME
  
      }
}

// getIntroducer() {
// this.obj = [this.schemeCode,this.BranchCode]


// this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
  
//   this.introducerACNo = data;
// })

// }

  createForm()
  {
    this.ngForm = this.fb.group({

      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      FIRST_NO: ['', [Validators.required]],
      LAST_NO: ['', [Validators.required]],
      FROM_DATE : ['',],
      TO_DATE: ['', ],
      // AC_NO: ['', [Validators.required]],
      // PRINT_NO: ['', [Validators.required]],
      // Fnarration : ['']
    });
  }
  
  

  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }

  //get account no according scheme for introducer
  getIntroducer() { 
    this.obj = [this.schemeCode,this.BranchCode, ]
    switch (this.getschemename) {
      case 'SB':
        this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
          
        })
        break;

      case 'SH':
        this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'CA':
        this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'LN':
        this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'DS':
        this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'CC':
        this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'GS':
        this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'PG':
        this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'AG':
        this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;

      case 'IV':
        this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.firstno = null
          this.lastno = null
        })
        break;
    }
  }



  isReceivedTds($event) {

    if ($event.target.checked) {
      this.isTdsForm = true;
     
    } else {
      this.isTdsForm = false;
    }
  }

  getNarration(ele) {
    this.ngFnarration = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  view(event) {

    event.preventDefault();
    this.formSubmitted = true;
  
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    
    if(this.ngForm.valid){
    let obj = this.ngForm.value
    this.showRepo = true;
  
    if(this.defaultDate == userData.branch.syspara.CURRENT_DATE)
    {
      obj['FROM_DATE'] =userData.branch.syspara.CURRENT_DATE
    }
    else{
    let date = moment(this.defaultDate).format('DD/MM/YYYY');
    let tDate = moment(date, 'DD/MM/YYYY')
    obj['FROM_DATE']=date 
  }
    // let startDate = moment(obj.FROM_DATE).format('DD/MM/YYYY');
    // var sdate = moment(obj.FROM_DATE).startOf('quarter').format('DD/MM/YYYY');
  
    let scheme = obj.Scheme_code 
    let branch = obj.BRANCH_CODE
         
   this.iframe5url= this.report_url+"examples/TDReceiptPrint.php/?&Date='"+ obj.FROM_DATE +"'&scheme='"+ scheme +"'&branchname='"+ this.branchName +"'&BRANCH_CODE='"+ branch +"'&Bankname='"+ bankName +"'"
   console.log(this.iframe5url);
   this.iframe5url=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
   
   
   
  }
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
  }
  
  } 
  close(){
    this.resetForm()
    }
    
    // Reset Function
    resetForm() {
    this.ngForm.controls.AC_TYPE.reset();
    this.showRepo = false;
    this.clicked=false;
    }
  getBranch(event) {
    this.getIntroducer()
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
}




