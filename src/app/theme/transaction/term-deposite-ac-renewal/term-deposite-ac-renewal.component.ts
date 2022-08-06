import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import { TermDepositeAcRenewalService } from './term-deposite-ac-renewal.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-term-deposite-ac-renewal',
  templateUrl: './term-deposite-ac-renewal.component.html',
  styleUrls: ['./term-deposite-ac-renewal.component.scss']
})
export class TermDepositeAcRenewalComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  updateID: number = 0;

  selectedBranch: any;
  selectedIntCate: any;
  selectedCode: any;
  selectedScheme: any;
  customer: any;
  selectedCodeNormal: any;
  selectedSchemeNormal: any;
  customerNormal: any;
  selectedCodePayable: any;
  selectedSchemePayable: any;
  renewalAsOnDate: any;
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
  allSchemeCodeNormal: any;
  allSchemeCodePayable: any;
  isture: boolean = true;

  NormalCheck: boolean = true;
  transferShowNormal: boolean = false;
  payableTranferShow: boolean = false;
  InterestDate: any;
  current_date: any;

  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  InterestCategoryData: any;
  maxDate: Date;

  constructor(private fb: FormBuilder,
    private multiService: MultiVoucherService,
    private ownbranchMasterService: OwnbranchMasterService,
    private savingMasterService: SavingMasterService,
    private Multiservice: MultiVoucherService,
    private _service: TermDepositeAcRenewalService,
  ) {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
    if (this.childMessage != undefined) {
      this.editClickHandler(this.childMessage);
    }
  }

  ngOnInit(): void {
    this.createForm()

    let user = JSON.parse(localStorage.getItem('user'));

    this.current_date = user.branch.syspara.CURRENT_DATE;

    //get syspara details
    this.multiService.getSysParaData().subscribe(data => {
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
      this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()];
      this.allSchemeCodeNormal = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()];
      this.allSchemeCodePayable = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()];
      this.selectedCode = 'TD';
      this.selectedSchemeCode()
    })

    //Data
    this._service.interestCategory().subscribe(data => {
      this.InterestCategoryData = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      branch_code: ['', [Validators.required]],
      date: [''],
      scheme_type: ['', [Validators.required]],
      scheme: ['', [Validators.required]],
      account_no: ['', [Validators.required]],
      NormalInt: [''],
      NormalIntCheck: [''],
      payableInterestcheck: [''],
      IntUpto: [''],
      NormalIntRadio: [''],
      PayableCheck: [''],
      new_matu_date: [''],
      new_maturity_amt: [''],
      new_last_date: [''],
      new_rate: [''],
      new_deposit: [''],
      new_receipt: [''],
      new_day: [''],
      new_month: [''],
      new_ason_date: [''],
      new_category: [''],
      renewal_tran_no: [''],
      payable_account_no: ['', [Validators.required]],
      payable_scheme: ['', [Validators.required]],
      payable_scheme_type: ['', [Validators.required]],
      PayableIntRadio: [''],
      payableCheck: [''],
      normal_account_no: ['', [Validators.required]],
      normal_scheme: ['', [Validators.required]],
      normal_scheme_type: ['', [Validators.required]],
      old_last_trn_date: [''],
      old_int_cate: [''],
      old_last_int_date: [''],
      old_total_int_paid: [''],
      old_intrate: [''],
      old_month: [''],
      old_days: [''],
      old_receipt_no: [''],
      old_ac_ason_date: [''],
      old_ac_matuamt: [''],
      old_ac_expdt: [''],
      old_Ac_op_date: [''],
      old_deposit_Amt: [''],
      payableInt: [0],
      AC_RENEWAL_COUNTER: [0],
      TRAN_NO: [0]
    })
  }

  //Customer change function
  TotalDays: number;
  funAmtPayableInterest = 0
  funInterestRate = 0
  funAmtNormalInterest = 0
  isCalulateMaturityAmountFlag: boolean = false
  ledgerBalance = 0
  getVoucherData() {
    this.selectedIntCate = Number(this.customer.AC_INTCATA);
    this.renewalAsOnDate = this.customer.AC_EXPDT;
    this.angForm.patchValue({
      'new_month': this.customer.AC_MONTHS,
      'new_day': this.customer.AC_DAYS,
      'new_deposit': this.customer.AC_SCHMAMT,
      'new_rate': this.customer.AC_INTRATE,
      'new_last_date': this.customer.AC_LINTEDT,
      'new_maturity_amt': this.customer.AC_MATUAMT,
    })

    //Calculate Total Days
    let total = Number(this.customer.AC_MONTHS) / 12 * 365;
    this.TotalDays = Math.round(total + Number(this.customer.AC_DAYS));
    this.getMaturityDate()
    let obj = {
      Scheme: this.selectedScheme.S_APPL,
      AC_TYPE: this.selectedScheme.id,
      BANKACNO: this.customer.BANKACNO,
      Date: this.date,
    }
    this._service.getAccountDeatils(obj).subscribe(data => {
      this.angForm.patchValue({
        old_total_int_paid: data.totalinterest,
        new_rate:data.InterestRate
      })
      this.funAmtNormalInterest = data.normalInterest
      this.funAmtPayableInterest = data.paybableInterest
      this.isCalulateMaturityAmountFlag = data.isCalulateMaturityAmountFlag
      this.funInterestRate = data.InterestRate
      this.ledgerBalance = data.ledgerBal
      let cust = data
      this.getMaturityAmount()
    })

  }

  getMaturityAmount() {
    if (this.isCalulateMaturityAmountFlag) {
      this.angForm.patchValue({
        new_deposit: this.ledgerBalance
      })
    }
    else {
      this.angForm.patchValue({
        new_deposit: this.ledgerBalance
      })
    }
  }

  getTotalDays() {
    //Calculate Total Days
    let total = Number(this.angForm.controls['new_month'].value) / 12 * 365;
    this.TotalDays = Math.round(total + Number(this.angForm.controls['new_day'].value));
    this.getMaturityDate()
  }

  getMaturityDate() {
    let date = moment(this.renewalAsOnDate, 'DD/MM/YYYY').add(this.TotalDays, 'days').format('DD/MM/YYYY')
    this.angForm.patchValue({
      new_ason_date: date
    })
  }

  //get account no according scheme for introducer
  async getIntroducer() {
    this.customer = null
    this.introducerACNo = [];
    this.obj = [this.selectedScheme.id, this.selectedBranch]
    switch (this.selectedCode) {
      case 'TD':
        this._service.termDepositExpiryAccount(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;
    }
  }

  getIntroducerNormal() {
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
          this.introducerACNoNormal = data;
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
          this.introducerACNoPayable = data;
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

  allSchemeNormal: any;
  selectedSchemeCodeNormal() {
    this.allSchemeNormal = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCodeNormal) {
        this.allSchemeNormal.push(element)
      }
    });
  }
  allSchemePayable: any;
  selectedSchemeCodePayable() {
    this.allSchemePayable = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCodePayable) {
        this.allSchemePayable.push(element)
      }
    });
  }
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  updatecheckdata
  editClickHandler(id) {

    this._service.getFormData(id).subscribe((data) => {
      this.updatecheckdata = data
      if (data.SYSCHNG_LOGIN == null) {
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
      } else {
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
      }
      this.updateID = data.id;
      this.date = data.RENEWAL_DATE
      let normalType
      if (data.NORMAL_INT_TRTYPE == 'DP') {
        normalType = 'AddInDeposit'
      }
      else if (data.NORMAL_INT_TRTYPE == 'CS') {
        normalType = 'cash';
      } else if (data.NormalIntRadio == 'TR') {
        normalType = 'transfer';
      } else {
        normalType = 'KP';
      }
      this.selectedScheme = Number(data.AC_TYPE)
      this.updateID = data.id
      this.angForm.patchValue({
        branch_code: data.BRANCH_CODE,
        old_month: data.OLD_MONTH,
        old_ac_expdt: data.OLD_EXPIRY_DATE,
        date: data.RENEWAL_DATE,
        scheme_type: data.AC_ACNOTYPE,
        // scheme: Number(data.AC_TYPE),
        account_no: data.AC_NO,
        new_deposit: data.RENEWAL_AMOUNT,
        new_month: data.NEW_MONTH,
        new_day: data.NEW_DAYS,
        new_ason_date: data.NEW_ASON_DATE,
        NormalIntRadio: normalType,
        AC_RENEWAL_COUNTER: data.AC_RENEWAL_COUNTER,
        TRAN_NO: data.TRAN_NO
      })
    })
  }

  updateData() {
    let billDate
    let chequeDate
    let obj = this.angForm.value;
    let dataToSend = this.angForm.value
    if (this.updatecheckdata.NEW_EXPIRY_DATE != obj.new_matu_date) {
      (obj.new_matu_date == 'Invalid date' || obj.new_matu_date == '' || obj.new_matu_date == null) ? (billDate = '', obj['new_matu_date'] = billDate) : (billDate = obj.new_matu_date, dataToSend['new_matu_date'] = moment(billDate).format('DD/MM/YYYY'))
    } else {
      dataToSend['new_matu_date'] = obj.new_matu_date
    }
    dataToSend['current_date'] = this.date;
    dataToSend['user'] = JSON.parse(localStorage.getItem('user'))
    dataToSend['id'] = this.updateID,
      this._service.updateData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Updated Successfully !", "success");
          this.resetForm()
          var button = document.getElementById('triggerhide');
          button.click();
        },
        (error) => {
          console.log(error);
        }
      );

  }
  //approve account
  Approve() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      TRAN_NO: this.angForm.controls['TRAN_NO'].value
    }
    this._service.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Term Deposit Account Renewal approved successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();

    }, err => {
      console.log('something is wrong');
    })
  }


  //reject account
  reject() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      TRAN_NO: this.angForm.controls['TRAN_NO'].value
    }
    this._service.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Term Deposit Account Renewal rejected successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
    }, err => {
      console.log('something is wrong');
    })
  }

  resetForm() {
    this.createForm()
  }

  isNormalIntAdded: boolean = false
  changeNormal(ele) {
    if (ele.target.value == 'transfer') {
      this.transferShowNormal = true;
      if (this.isNormalIntAdded) {
        let depositeAmount = this.angForm.controls['new_deposit'].value;
        let intValue = this.angForm.controls['NormalInt'].value;
        let Int = Number(depositeAmount) - Number(intValue);
        this.angForm.patchValue({
          'new_deposit': Int
        })
        this.isNormalIntAdded = false
      }
    }
    else if (ele.target.value == 'AddInDeposit') {
      let depositeAmount = this.angForm.controls['new_deposit'].value;
      let intValue = this.angForm.controls['NormalInt'].value;

      let Int = Number(depositeAmount) + Number(intValue);

      this.angForm.patchValue({
        'new_deposit': Int
      })
      this.isNormalIntAdded = true
      this.transferShowNormal = false;
    }
    else {
      this.transferShowNormal = false;
      if (this.isNormalIntAdded) {
        let depositeAmount = this.angForm.controls['new_deposit'].value;
        let intValue = this.angForm.controls['NormalInt'].value;
        let Int = Number(depositeAmount) - Number(intValue);
        this.angForm.patchValue({
          'new_deposit': Int
        })
        this.isNormalIntAdded = false
      }
    }
  }

  getnormalCheck(ele) {
    if (ele.target.checked) {
      this.NormalCheck = false;
      this.InterestDate = this.current_date;
      this.angForm.patchValue({
        NormalInt: this.funAmtNormalInterest,
        NormalIntRadio: 'cash'
      })
    }
    else {
      this.NormalCheck = true;
      this.InterestDate = null;
      this.angForm.patchValue({
        NormalInt: null,
        NormalIntRadio: ''
      })
    }
  }

  PayableCheck: boolean = true;
  getpayableInterest(ele) {
    if (ele.target.checked) {
      this.PayableCheck = false;
      this.angForm.patchValue({
        payableInt: this.funAmtPayableInterest,
        PayableIntRadio: 'cash'
      })
    }
    else {
      this.PayableCheck = true;
      this.angForm.patchValue({
        payableInt: null,
        PayableIntRadio: ''
      })
    }
  }
  isPayableIntAdded: boolean = false
  payableStatus(ele) {
    if (ele.target.value == 'transfer') {
      this.payableTranferShow = true;
      if (this.isPayableIntAdded) {
        let depositeAmount = Number(this.angForm.controls['new_deposit'].value);
        let IntAmt = Number(this.angForm.controls['payableInt'].value);
        let Int = depositeAmount - IntAmt;
        this.angForm.patchValue({
          'new_deposit': Int
        })
        this.isPayableIntAdded = false
      }
    } else if (ele.target.value == 'AddInDeposit') {
      let depositeAmount = Number(this.angForm.controls['new_deposit'].value);
      let IntAmt = Number(this.angForm.controls['payableInt'].value);

      let Int = depositeAmount + IntAmt;

      this.angForm.patchValue({
        'new_deposit': Int
      })
      this.isPayableIntAdded = true
      this.payableTranferShow = false;
    }
    else {
      if (this.isPayableIntAdded) {
        let depositeAmount = Number(this.angForm.controls['new_deposit'].value);
        let IntAmt = Number(this.angForm.controls['payableInt'].value);
        let Int = depositeAmount - IntAmt;
        this.angForm.patchValue({
          'new_deposit': Int
        })
        this.isPayableIntAdded = false
      }
      this.payableTranferShow = false;
    }
  }

  submit() {
    let obj = this.angForm.value;
    obj['current_date'] = this.date;
    obj['user'] = JSON.parse(localStorage.getItem('user'))
    this._service.postData(obj).subscribe(data => {
      alert('Data insert succssfully');
    }, err => {
      console.log(err?.error?.message)
    })
  }
}
