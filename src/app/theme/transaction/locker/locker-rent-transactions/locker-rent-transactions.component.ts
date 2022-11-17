import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-locker-rent-transactions',
  templateUrl: './locker-rent-transactions.component.html',
  styleUrls: ['./locker-rent-transactions.component.scss']
})
export class LockerRentTransactionsComponent implements OnInit {

 
  ngForm: FormGroup;
//for date
  maxDate: any;
  minDate: Date;
  bsValue = new Date();

  //ngmodel
  transaction:any;
  scheme
  scheme1
  acnumber
  acnumber1
  BranchCode
  TransactionDate

  //dropdown
  schemeType: string = 'SH'
  transferAccountDetails
  branchOption
  selectedBranch
  schemeCode
  Scheme
  
  schemeACNo
  obj: any;
  introducerACNo
  transferSchemeDetails: any;

  constructor(private fb: FormBuilder,    private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private _ownbranchmasterservice: OwnbranchMasterService,
    ) {

    this.systemParameter.getFormData(1).subscribe(data => {
      this.TransactionDate = data.CURRENT_DATE;
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
   } 

  ngOnInit(): void {

    this.createForm()


    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.selectedBranch = result.branch.id

    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.selectedBranch = result.branch.id
    }

    // let user = JSON.parse(localStorage.getItem('user'));

    //branchOption

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;

    })


    //Scheme Code

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.scheme1 = data

      this.schemeCode = data[0].value
      this.getIntroducer()

    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.Scheme = data;
    });

  }

  getIntroducer() {
    this.obj = [this.selectedBranch, this.schemeCode]

    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })
    
  }

 //get account no according scheme for transfer

 getTransferAccountList(event) {
  this.transferSchemeDetails = event
  this.obj = [this.scheme, this.selectedBranch]
  this.acnumber = null
  // this.acnumber1 = null

  switch (event.name) {
    case 'SB': 
      this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
        this.schemeACNo = data;
      }) 
      break;

    case 'CA':
      this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
        this.schemeACNo = data;
      })
      break;

    case 'LN':
      this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
        this.schemeACNo = data;
      })
      break;

    case 'TD':
      this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
        this.schemeACNo = data;
      })
      break;

    case 'DS':
      this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
        this.schemeACNo = data;
      })
      break;

    case 'CC':
      this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
        this.schemeACNo = data;
      })
      break;

    case 'PG':
      this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
        this.schemeACNo = data;
      })
      break;

    case 'GL':
      this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
        this.schemeACNo = data;
      })
      break;
  }
}
// getTransferAccountDeatil(event) 
// {
//   this.transferAccountDetails = event
// }


  createForm()
  {
    this.ngForm = this.fb.group({
    
      TRAN_DATE: ['', [Validators.required]],
      TRANSACTION : ['', [Validators.required]],
      T_TYPE: ['Rent Receipt'],
      TRN_TYPE: ['cash'],
      BRANCH_CODE: ['', [Validators.required]],
      SCHEME : ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      RACK_NO: ['', [Validators.required]],
      LOC_NO : ['', [Validators.required]],
      LOC_SIZE : ['', [Validators.required]],
      LAST_RENT_DATE: ['', [Validators.required]],
      RENT_AMOUNT: ['', [Validators.required]],
      RECEIPT_NO : ['', [Validators.required]],
      DEF_RENT: ['', [Validators.required]],
      RENT_F_DATE: ['', [Validators.required]],
      UP_TO_DATE: ['', [Validators.required]],
      LEDGER_BALANCE: ['', [Validators.required]],

    });
  }

  decimalAllContent($event) {
    // let value = Number($event.target.value);
    //   let data = value.toFixed(2);
    //   $event.target.value = data;
      var t = $event.target.value;
      $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }


} 
