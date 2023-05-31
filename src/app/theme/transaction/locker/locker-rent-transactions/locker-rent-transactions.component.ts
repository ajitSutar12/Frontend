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
  LOG_DATE
  //ngmodel
  transaction: any;
  scheme
  scheme1
  acnumber
  acnumber1
  BranchCode
  TransactionDate

  submitShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  unapproveShow: boolean = false;
  closeShow: boolean = false;


  //dropdown
  schemeType: string = 'SH'
  transferAccountDetails
  branchOption
  selectedBranch
  schemeCode
  Scheme
  Schew
  rentfromDate

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
      this.LOG_DATE = data.CURRENT_DATE
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
      this.BranchCode = result.branch.id

    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.BranchCode = result.branch.id
    }

    let user = JSON.parse(localStorage.getItem('user'));

    //branchOption

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      this.BranchCode = user.branchId;

    })


    //Scheme Code

    // this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
    //   this.scheme = data
    //   this.scheme1 = data

    //   this.schemeCode = data[0].value
    //   this.getIntroducer()

    // })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'LK')
      });
      this.Scheme = allscheme;

      this.schemeCode = data[0].value
      this.getIntroducer()
    })

    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data1 => {
      console.log(data1);

      var allsche = data1.filter(function (scheme) {
        return (scheme.name == 'GL' || scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'GS')
      });
      this.Schew = allsche.slice(5);

    });



  }

  getIntroducer() {
    if (this.scheme != null) {
      this.obj = [this.scheme, this.BranchCode]
      this.schemeAccountNoService.getLokcerSchemeList1(this.obj).subscribe(data => {
        this.introducerACNo = data;
      })
    }
  }

  //get account no according scheme for transfer
  getTransferAccountList(event) {
    this.TRF_ACNOTYPE = event.name
    this.obj = [this.scheme1, this.BranchCode]
    this.acnumber1 = null
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

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
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
      TRF_ACTYPE: ['']
    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.BranchCode = result.branch.id

    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.BranchCode = result.branch.id
    }
  }

  getLedgerBalance() {
    let obj = {
      SCHEME: this.scheme1,
      BANKACNO: this.acnumber1,
      BARNCH_CODE: this.BranchCode
    }
    this.http.post(this.url + '/locker-rent-transaction/LedgerBal', obj).subscribe((data: any) => {
      if (data >= 0) {

        Swal.fire(
          'Oops',
          'Balance is insufficient!',
          'warning'
        );
        this.ngForm.patchValue({
          LEDGER_BALANCE: 0
        })
      }
      else {
        this.ngForm.patchValue({
          LEDGER_BALANCE: Math.abs(data)
        })
      }
    })
  }
  leger(event: any) {
    this.acnumber1 = event.value;
    console.log(this.acnumber1);

  }
  decimalAllContent($event) {
    var t = $event.target.value;
    $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }

  getAccountDetails() {
    if (this.acnumber != null) {
      let obj = {
        BRANCH_CODE: this.BranchCode,
        TRAN_ACNO: this.acnumber
      }
      this.http.post(this.url + '/locker-rent-transaction/lockeraccountDetails', obj).subscribe(data => {
        if (data['lockerAcCloseList'].length != 0) {
          Swal.fire('Oops', 'Already Locker account closed', 'warning')
          this.acnumber = null
        }
        else {
          this.ngForm.patchValue({
            KEY_NO: data['dpmasterData'].AC_KEYWORD,
            LOC_SIZE: data['locerrent'].SIZE_NAME,
            LOC_NO: data['lockerrackwise'].LOCKER_NO,
            RACK_NO: data['lockerrackwise'].RACK_NO,
            LAST_RENT_DATE: data['lastrentDate'],
            RENT_AMOUNT: data['locerrent'].RENT,
            DEF_RENT: data['locerrent'].RENT,
          })
        }
      })
    }
  }

  TRF_ACNOTYPE
  submit() {
    const formVal = this.ngForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let fromDate = moment(formVal.RENT_F_DATE, 'DD/MM/YYYY')
    let rentfromDate = moment(fromDate).format('DD/MM/YYYY')
    let toDate = moment(formVal.RENT_F_DATE, 'DD/MM/YYYY')
    let renttoDate = moment(toDate).format('DD/MM/YYYY')
    let obj =
    {
      TRAN_ACTYPE: this.scheme,
      TRAN_DATE: this.TransactionDate,
      BRANCH_CODE: this.BranchCode,
      TRAN_ACNO: this.acnumber,
      USER_CODE: result.id,
      MODE: formVal.T_TYPE,
      TRANSACTIONMODE: formVal.TRN_TYPE,
      TRAN_AMOUNT: formVal.RENT_AMOUNT,
      RENT_FROM_DATE: rentfromDate,
      RENT_UPTO_DATE: renttoDate,
      RECEIPT_NO: formVal.RECEIPT_NO,
      TRF_ACNOTYPE: this.TRF_ACNOTYPE,
      TRF_ACTYPE: formVal.TRF_ACTYPE,
      TRF_ACNO: formVal.ACNT_NO,
    }
    if (formVal.RENT_AMOUNT > formVal.LEDGER_BALANCE) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Balance is insufficient! for this Account',
      })
    }
    else {
      this.http.post(this.url + "/locker-rent-transaction/insert", obj).subscribe(data => {
        Swal.fire(
          'Success',
          'Data Successfully Added!',
          'success'
        );
        this.createForm()
        let data1: any = localStorage.getItem('user');
        let result = JSON.parse(data1);
        this.BranchCode = result.branch.id
      })
    }
  }
  updateID
  editClickHandler(id) {
    this.http.get(this.url + '/locker-rent-transaction/' + id).subscribe((data: any) => {
      this.updateID = id
      if (data.TRAN_STATUS == 0) {
        this.approveShow = true;
        this.rejectShow = true
        this.unapproveShow = false
        this.closeShow = true
        this.submitShow = false
      }
      else if (data.TRAN_STATUS != 0) {
        this.approveShow = false;
        this.rejectShow = false
        this.unapproveShow = true
        this.closeShow = true
        this.submitShow = false
      }
      this.BranchCode = data.BRANCH_CODE
      this.scheme = Number(data.TRAN_ACTYPE)
      this.getIntroducer()
      this.TransactionDate = data.TRAN_DATE
      this.ngForm.patchValue({
        RENT_F_DATE: data.RENT_FROM_DATE,
        UP_TO_DATE: data.RENT_UPTO_DATE,
        TRF_ACTYPE: data.TRF_ACTYPE,
        RECEIPT_NO: data.RECEIPT_NO,
        RENT_AMOUNT: data.TRAN_AMOUNT,
        TRN_TYPE: data.TRAN_TYPE == 'CS' ? 'CS' : 'TR',
        T_TYPE: data.TRAN_MODE == '2' ? 'ACCLOSE' : 'RENT',
      })
      data.TRAN_MODE == '2' ? this.isRent = false : this.isRent = true
      this.TRF_ACNOTYPE = Number(data.TRF_ACNOTYPE)
      this.acnumber = data.TRAN_ACNO
      data.TRAN_TYPE == 'CS' ? this.isTransfer = false : this.isTransfer = true
      let obj = {
        BRANCH_CODE: this.BranchCode,
        TRAN_ACNO: this.acnumber
      }
      this.http.post(this.url + '/locker-rent-transaction/lockeraccountDetails', obj).subscribe(data => {
        this.ngForm.patchValue({
          KEY_NO: data['dpmasterData'].AC_KEYWORD,
          LOC_SIZE: data['locerrent'].SIZE_NAME,
          LOC_NO: data['lockerrackwise'].LOCKER_NO,
          RACK_NO: data['lockerrackwise'].RACK_NO,
          LAST_RENT_DATE: data['lastrentDate'],
          RENT_AMOUNT: data['locerrent'].RENT,
          DEF_RENT: data['locerrent'].RENT,
        })
      })
      this.obj = [this.scheme1, this.BranchCode]
      this.acnumber1 = null
      switch (this.TRF_ACNOTYPE) {
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

        case 'GS':
          this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
            this.schemeACNo = data;
          })
          break;

        case 'GL':
          this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
            this.schemeACNo = data;
          })
          break;
      }
      this.acnumber1 = data.TRF_ACNO
    })
  }

  approve() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    const formVal = this.ngForm.value;
    let obj = {
      id: this.updateID,
      USER_CODE: result.id,
      MODE: formVal.T_TYPE,
      BRANCH_CODE: this.BranchCode,
      TRANSACTIONMODE: formVal.TRN_TYPE,
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
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let obj = {
      id: this.updateID,
      USER_CODE: result.id
    }
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
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let obj = {
      id: this.updateID,
      LOG_DATE: this.LOG_DATE,
      user: result.id
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
  closeModal() {
    var button = document.getElementById('trigger');
    button.click();
    this.reloadTablePassing.emit();
  }
  getTransferAccountList1() {
    this.acnumber = null
    if (this.scheme != null) {
      this.obj = [this.scheme, this.BranchCode]
      this.schemeAccountNoService.getLokcerSchemeList1(this.obj).subscribe(data => {
        this.introducerACNo = data;
      })
    }
  }
} 
