import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import { TermDepositeAcRenewalService } from './term-deposite-ac-renewal.service';
import * as moment from 'moment';

@Component({
  selector: 'app-term-deposite-ac-renewal',
  templateUrl: './term-deposite-ac-renewal.component.html',
  styleUrls: ['./term-deposite-ac-renewal.component.scss']
})
export class TermDepositeAcRenewalComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;


  selectedBranch: any;
  selectedIntCate:any;
  selectedCode: any;
  selectedScheme: any;
  customer: any;
  selectedCodeNormal: any;
  selectedSchemeNormal: any;
  customerNormal: any;
  selectedCodePayable: any;
  selectedSchemePayable: any;
  renewalAsOnDate:any;
  customerPayable: any;
  angForm: FormGroup;

  date: any;
  branch_code: any;
  introducerACNo
  introducerACNoNormal
  introducerACNoPayable
  obj: any
  allScheme = new Array()//from schme master
  master: any;
  allSchemeCode: any//from schme master
  allSchemeCodeNormal:any;
  allSchemeCodePayable:any;
  isture: boolean = true;

  NormalCheck:boolean = true;
  transferShowNormal:boolean = false;
  payableTranferShow:boolean = false;
  InterestDate : any;
  current_date : any;

  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  InterestCategoryData : any;


  constructor(private fb: FormBuilder,
    private multiService: MultiVoucherService,
    private ownbranchMasterService: OwnbranchMasterService,
    private savingMasterService: SavingMasterService,
    private Multiservice: MultiVoucherService,
    private _service: TermDepositeAcRenewalService,
  ) { 
    if (this.childMessage != undefined) {
      this.editClickHandler(this.childMessage);
    }
  }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      branch_code: [''],
      date: [''],
      scheme_type: [''],
      scheme: [''],
      account_no: [''],
      NormalInt:[''],
      IntUpto:[''],
      NormalIntRadio:[''],
      PayableCheck:[''],
      new_matu_date:[''],
      new_maturity_amt:[''],
      new_last_date:[''],
      new_rate:[''],
      new_deposit:[''],
      new_receipt:[''],
      new_day:[''],
      new_month:[''],
      new_ason_date:[''],
      new_category:[''],
      renewal_tran_no:[''],
      payable_account_no:[''],
      payable_scheme:[''],
      payable_scheme_type:[''],
      PayableIntRadio:[''],
      payableCheck:[''],
      normal_account_no:[''],
      normal_scheme:[''],
      normal_scheme_type:[''],
      old_last_trn_date:[''],
      old_int_cate:[''],
      old_last_int_date:[''],
      old_total_int_paid:[''],
      old_intrate:[''],
      old_month:[''],
      old_receipt_no:[''],
      old_ac_ason_date:[''],
      old_ac_matuamt:[''],
      old_ac_expdt:[''],
      old_Ac_op_date:[''],
      old_deposit_Amt:[''],
      payableInt:['']
    })
    let user = JSON.parse(localStorage.getItem('user'));

    this.current_date = user.branch.syspara.CURRENT_DATE;
    console.log(this.current_date);

    //get syspara details
    this.multiService.getSysParaData().subscribe(data => {
      debugger
      // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
      this.date = data[0].CURRENT_DATE;
    })

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.selectedBranch = user.branchId;
    })

    //Scheme Code
    this.Multiservice.getSchemeCodeList().subscribe(data => {
      this.master = data;
      this.allSchemeCode       = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()];
      this.allSchemeCodeNormal = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()];
      this.allSchemeCodePayable= [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()];
      this.selectedCode = 'TD';
      this.selectedSchemeCode()
    })

    //Data
    this._service.interestCategory().subscribe(data=>{
      this.InterestCategoryData = data;
      console.log(this.InterestCategoryData);
    })
  }

  //Customer change function
  TotalDays : number;
  getVoucherData() {
    console.log(this.customer);
    this.selectedIntCate = this.customer.AC_INTCATA;
    this.renewalAsOnDate = this.customer.AC_EXPDT;
    this.angForm.patchValue({
      'new_month':this.customer.AC_MONTHS,
      'new_day' : this.customer.AC_DAYS,
      'new_deposit' : this.customer.AC_SCHMAMT,
      'new_rate': this.customer.AC_INTRATE,
      'new_last_date': this.customer.AC_LINTEDT,
      'new_maturity_amt': this.customer.AC_MATUAMT,
    })

    //Calculate Total Days
    let total = Number(this.customer.AC_MONTHS) / 12 * 365;
    this.TotalDays = total + Number(this.customer.AC_DAYS);

  }

  //get account no according scheme for introducer
  async getIntroducer() {
    this.introducerACNo = [];
    this.obj = [this.selectedScheme.id, this.selectedBranch]
    switch (this.selectedCode) {
      case 'SB':
        this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'SH':
        this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'CA':
        this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'LN':
        this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          debugger
          this.introducerACNo = data;
          console.log(this.introducerACNo);
        })
        break;

      case 'DS':
        this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'CC':
        this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'GS':
        this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'PG':
        this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'AG':
        this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'IV':
        this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;
    }


  }

  getIntroducerNormal() {
    debugger
    this.introducerACNoNormal = [];
    this.obj = [this.selectedSchemeNormal.id, this.selectedBranch]
    switch (this.selectedCodeNormal) {
      case 'SB':
        this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'SH':
        this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'CA':
        this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'LN':
        this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          debugger
          this.introducerACNoNormal = data;
          console.log(this.introducerACNoNormal);
        })
        break;

      case 'DS':
        this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'CC':
        this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'GS':
        this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'PG':
        this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'AG':
        this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;

      case 'IV':
        this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoNormal = data;
        })
        break;
    }
  }

  getIntroducerPayable() {
    this.introducerACNoPayable = [];
    this.obj = [this.selectedSchemePayable.id, this.selectedBranch]
    switch (this.selectedCodePayable) {
      case 'SB':
        this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'SH':
        this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'CA':
        this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'LN':
        this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          debugger
          this.introducerACNoPayable = data;
          console.log(this.introducerACNoPayable);
        })
        break;

      case 'DS':
        this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'CC':
        this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'GS':
        this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'PG':
        this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'AG':
        this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;

      case 'IV':
        this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNoPayable = data;
        })
        break;
    }
  }
  selectedSchemeCode() {
    this.allScheme = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCode) {
        this.allScheme.push(element)
      }
    });
  }

  allSchemeNormal :any;
  selectedSchemeCodeNormal() {
    this.allSchemeNormal = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCodeNormal) {
        this.allSchemeNormal.push(element)
      }
    });
  }
  allSchemePayable:any;
  selectedSchemeCodePayable(){
    this.allSchemePayable = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCodePayable) {
        this.allSchemePayable.push(element)
      }
    });
  }
  editClickHandler(id) {}

  changeNormal(ele){
    if(ele.target.value == 'transfer'){
      this.transferShowNormal = true;
    }
    else if(ele.target.value == 'AddInDeposit'){
        let depositeAmount  = this.angForm.controls['new_deposit'].value;
        let intValue        = this.angForm.controls['NormalInt'].value;

        let Int =  Number(depositeAmount) + Number(intValue);

        this.angForm.patchValue({
          'new_deposit' : Int
        })
    }
    else{
      this.transferShowNormal = false;
    }
  }

  normalCheck(ele){
    if(ele.target.checked){
      this.NormalCheck = false;
      this.InterestDate = this.current_date;
    }
  }

  PayableCheck:boolean = true;
  payableInt(ele){
    if(ele.target.checked){
      this.PayableCheck = false;
    }
  }

  payableStatus(ele){
    if(ele.target.value == 'transfer'){
      this.payableTranferShow = true;
    }else if(ele.target.value == 'AddInDeposit'){
      let depositeAmount = Number(this.angForm.controls['new_deposit'].value);
      let IntAmt         = Number(this.angForm.controls['payableInt'].value);

      let Int =  depositeAmount +  IntAmt;

      this.angForm.patchValue({
        'new_deposit': Int
      })
    }
    else{
      this.payableTranferShow = false;
    }
  }

  submit(){


    let obj = this.angForm.value;
    obj['current_date'] =  this.date;
    obj['user'] = JSON.parse(localStorage.getItem('user'))
    this._service.postData(obj).subscribe(data=>{
      alert('Data insert succssfully');
    },err=>{
      console.log(err?.error?.message)
    })
  }
}
