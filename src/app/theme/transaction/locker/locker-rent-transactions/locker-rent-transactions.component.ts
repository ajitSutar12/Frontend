import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-locker-rent-transactions',
  templateUrl: './locker-rent-transactions.component.html',
  styleUrls: ['./locker-rent-transactions.component.scss']
})
export class LockerRentTransactionsComponent implements OnInit {
  @Input() childMessage: string;
  @Output() reloadTablePassing = new EventEmitter<string>();

  url = environment.base_url;

  ngForm: FormGroup;
  //for date
  maxDate: any;
  minDate: Date;
  bsValue = new Date();

  //ngmodel
  transaction: any;
  scheme
  scheme1
  acnumber
  acnumber1
  BranchCode
  TransactionDate

  submitShow: boolean = true;
  rejectShow: boolean =false;
  approveShow: boolean = false;
  unapproveShow: boolean = false;


  //dropdown
  schemeType: string = 'SH'
  transferAccountDetails
  branchOption
  selectedBranch
  schemeCode
  Scheme
  Schemea


  schemeACNo
  obj: any;
  introducerACNo
  transferSchemeDetails: any;
  isRent: boolean;
  isTransfer: boolean;

  constructor(private http: HttpClient, private fb: FormBuilder, private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private _ownbranchmasterservice: OwnbranchMasterService,
  ) {

    this.systemParameter.getFormData(1).subscribe(data => {
      this.TransactionDate = data.CURRENT_DATE;
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
    if (this.childMessage != undefined) {
      this.editClickHandler(this.childMessage);
    }
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

    let user = JSON.parse(localStorage.getItem('user'));

    //branchOption

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      this.selectedBranch = user.branchId;

    })


    //Scheme Code

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.scheme1 = data

      this.schemeCode = data[0].value
      this.getIntroducer()

    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'LK')
      });
      this.Scheme = allscheme;
      this.schemeCode = data[0].value
      this.getIntroducer()
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'GL' || scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'GS' )
      });
      this.Schemea = allscheme;
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
      // case 'SB': 
      //   this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
      //     this.schemeACNo = data;
      //   }) 
      //   break;

      // case 'CA':
      //   this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
      //     this.schemeACNo = data;
      //   })
      //   break;

      // case 'LN':
      //   this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
      //     this.schemeACNo = data;
      //   })
      //   break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      // case 'DS':
      //   this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
      //     this.schemeACNo = data;
      //   })
      //   break;

      // case 'CC':
      //   this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
      //     this.schemeACNo = data;
      //   })
      //   break;

      // case 'PG':
      //   this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
      //     this.schemeACNo = data;
      //   })
      //   break;

      // case 'GL':
      //   this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
      //     this.schemeACNo = data;
      //   })
      //   break;
    }
  }

  //transfer and cash radio button effect
  isFormA(value) {
    if (value == 1) {
      this.isRent = true
    }
    else if (value == 2) {
      this.isRent = false
    }
  }

  isFormB(value) {
    if (value == 1) {
      this.isTransfer = false
    }
    else if (value == 2) {
      this.isTransfer = true
    }
  }

  createForm() {
    this.ngForm = this.fb.group({

      TRAN_DATE: ['', [Validators.required]],
      TRANSACTION: ['', [Validators.required]],
      T_TYPE: ['ACCLOSE'],
      TRN_TYPE: ['CS'], 
      BRANCH_CODE: ['', [Validators.required]],
      SCHEME: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      ACNT_NO: ['', [Validators.required]],
      RACK_NO: ['', [Validators.required]],
      LOC_NO: ['', [Validators.required]],
      LOC_SIZE: ['', [Validators.required]],
      LAST_RENT_DATE: ['', [Validators.required]],
      RENT_AMOUNT: ['', [Validators.required]],
      RECEIPT_NO: ['', [Validators.required]],
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

  submit() {
    const formVal = this.ngForm.value;
    let object = {
      TRAN_DATE: formVal.TRAN_DATE,
      TRANSACTION: formVal.TRANSACTION, 
      T_TYPE: formVal.T_TYPE,
      TRN_TYPE: formVal.TRN_TYPE,
      BRANCH_CODE: formVal.BRANCH_CODE,
      SCHEME: formVal.SCHEME,
      AC_NO: formVal.AC_NO,
      RACK_NO: formVal.RACK_NO,
      LOC_NO: formVal.LOC_NO,
      LOC_SIZE: formVal.LOC_SIZE,
      LAST_RENT_DATE: formVal.LAST_RENT_DATE,
      RENT_AMOUNT: formVal.RENT_AMOUNT,
      RECEIPT_NO: formVal.RECEIPT_NO,
      DEF_RENT: formVal.DEF_RENT,
      RENT_F_DATE: formVal.RENT_F_DATE,
      UP_TO_DATE: formVal.UP_TO_DATE,
      LEDGER_BALANCE: formVal.LEDGER_BALANCE,
    }
    console.log(object);
    // '/locker-rent-transaction/insert'
    this.http.post(this.url + "/locker-rent-transaction/insert", object).subscribe(data => {
      Swal.fire(
        'Success',
        'Data Successfully Added!',
        'success'
      );
      })
  }
  updateID
  editClickHandler(id) {

    this.http.get(this.url + '/locker-rent-transaction/' + id).subscribe((data: any) => { 
    this.updateID = id
    if (id.TRAN_STATUS == 0) {
      this.approveShow = true;
      this.rejectShow = true
      this.unapproveShow = false

    }
    else if (id.TRAN_STATUS != 0) {
      this.approveShow = false;
      this.rejectShow = false
      this.unapproveShow = true

    }

    })

  }

  approve() {
    let obj = {
      id: this.updateID,
      // USER_CODE: ,
      // MODE: ,
      // BRANCH_CODE : this.BranchCode
      // TRANSACTIONMODE : ,
    }
    this.http.post(this.url + '/locker-rent-transaction/approve', obj).subscribe(data => {
      Swal.fire(
        'success', "Data Approved Successfully!!", 'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
 
  }
  reject() {
    let obj = {
      id: this.updateID,
      // USER_CODE:
    }
    '/locker-rent-transaction/reject'
    this.http.post(this.url + '/locker-rent-transaction/reject', obj).subscribe(data => {
      Swal.fire(
        'success', "Data Rejected Successfully!!", 'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  unapprove() {
    let obj = {
      id: this.updateID,
      // LOG_DATE: ,
      // user: 
    }
    this.http.post(this.url + '/locker-rent-transaction/unapprove ', obj).subscribe(data => {
      Swal.fire(
        'success', "Data Unapproved Successfully!!", 'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
 
  }

} 
