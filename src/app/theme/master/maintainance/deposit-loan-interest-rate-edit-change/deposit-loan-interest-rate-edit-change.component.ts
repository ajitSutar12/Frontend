import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from '../../../../../environments/environment'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { first } from 'rxjs/operators';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service';
import { HttpClient } from "@angular/common/http";
import { DepositLoanInterestRateEditChangeService } from './deposit-loan-interest-rate-edit-change.service'
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { NgSelectComponent } from '@ng-select/ng-select';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'

@Component({
  selector: 'app-deposit-loan-interest-rate-edit-change',
  templateUrl: './deposit-loan-interest-rate-edit-change.component.html',
  styleUrls: ['./deposit-loan-interest-rate-edit-change.component.scss']
})

export class DepositLoanInterestRateEditChangeComponent implements OnInit, OnDestroy {
  angForm: FormGroup;
  url = environment.base_url;
  //Datatable
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  formSubmitted = false;

  showButton: boolean = true;
  updateShow: boolean = false;
  minDate: any;
  bsValue
  schemeCode: any = null
  ngAcnoFrom: any = null
  allScheme: any = null
  ngBranchCode: any = null
  ngAcnoTo: any = null
  startAcNo: any
  endAcNo: any
  branch_code: any
  obj: any
  getschemename: any
  showTable: boolean = false
  tableArr: any
  mem: any
  interestList = []
  memFrom
  memTo
  branch
  InterestRate: string
  gridData: any;

  modalClass: string = 'modalHide';
  constructor(private fb: FormBuilder, private _SchemeCodeDropdown: SchemeCodeDropdownService,
    private http: HttpClient, private _schemeAccountNoService: SchemeAccountNoService,
    private _ownbranchMasterService: OwnbranchMasterService,
    private systemParameter: SystemMasterParametersService,
    private _interestRateChange: DepositLoanInterestRateEditChangeService) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.minDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.minDate = this.minDate._d
    })
  }

  ngOnInit(): void {
    this.createForm();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'ftip'
    };
    this._SchemeCodeDropdown.getAllSchemeListINT().pipe(first()).subscribe(data => {
      this.allScheme = data;
    })
    this._ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH'].enable()
      this.ngBranchCode = result.branch.id

    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.angForm.patchValue({
        'BRANCH': result.branch.id
      })
      this.ngBranchCode = result.branch.id

    }
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      EFFECT_DATE: ['', [Validators.required]],
      AC_NOFrom: ['', [Validators.required]],
      AC_NOTo: ['', [Validators.required]],
      INT_RATE: ['', [Validators.pattern, Validators.required, Validators.max(20)]]
    });
  }

  //function to get ac no according branch
  getBranch() {
    this.getInterestTransfer()
  }
  scheme
  //get acnotype from selected scheme
  getIntTrans(event) {
    this.getschemename = event.name
    this.scheme = event.value
    this.getInterestTransfer()
  }
  //check effect date form existing data in LNACINTRATE table
  checkeffectDate() {
    if (this.getschemename == 'LN') {
      let effectDate = moment(this.angForm.controls['EFFECT_DATE'].value).format('YYYY-DD-MM')
      this._interestRateChange.getLNData().subscribe(data => {
        if (data?.length != 0) {
          if (data.find(data => data['EFFECT_DATE'] != (effectDate == ''))) {
            if (data.find(data => data['EFFECT_DATE'] == effectDate)) {
              Swal.fire({
                icon: 'info',
                title: 'This Effect Date is Already Exist For Loan Accounts',
              })
              this.angForm.controls['EFFECT_DATE'].reset();
            }
          }
        }
      })
    }
    else if (this.getschemename == 'CC') {
      let effectDate = moment(this.angForm.controls['EFFECT_DATE'].value).format('YYYY-DD-MM')
      this._interestRateChange.getCCData().subscribe(data => {
        if (data?.length != 0) {
          if (data.find(data => data['EFFECT_DATE'] != (effectDate == ''))) {
            if (data.find(data => data['EFFECT_DATE'] == effectDate)) {
              Swal.fire({
                icon: 'info',
                title: 'This Effect Date is Already Exist For Cash Credit Accounts',
              })
              this.angForm.controls['EFFECT_DATE'].reset();
            }
          }
        }
      })
    }
  }
  //fetch acno list according scheme and branch code
  getInterestTransfer() {
    this.ngAcnoFrom = null
    this.ngAcnoTo = null
    this.startAcNo = [];
    this.endAcNo = [];
    this.tableArr = []
    this.obj = [this.schemeCode, this.ngBranchCode]
    switch (this.getschemename) {
      case 'LN':
        this._interestRateChange.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'TD':
        this._interestRateChange.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'CC':
        this._schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;
    }
  }
  //select content of field
  selectAllContent($event) {
    $event.target.select();
  }
  //checks percentage of interest rate
  checkInt(event) {
    if (Number(event) > 20) {
      Swal.fire('Info', 'Please Input Interest upto 20', 'info')
      this.angForm.patchValue({
        INT_RATE: ''
      })
    }
  }
  //load acno according start and end acno
  loadAcno() {
    this.memFrom = this.angForm.controls['AC_NOFrom'].value
    this.memTo = this.angForm.controls['AC_NOTo'].value
    this.branch = this.angForm.controls['BRANCH'].value
    if (this.angForm.controls['AC_NOFrom'].value <= this.angForm.controls['AC_NOTo'].value) {
      this.dtTrigger.unsubscribe();
      this.mem = [this.memFrom, this.memTo, this.branch, this.scheme]
      if (this.getschemename == 'TD') {
        this.http.get(this.url + '/term-deposits-master/interest/' + this.mem).subscribe((data) => {
          this.tableArr = data;
          this.gridData = data;
        });
      }
      else if (this.getschemename == 'CC') {
        this.http.get(this.url + '/cash-credit-master/interest/' + this.mem).subscribe((data) => {
          this.tableArr = data;
          this.gridData = data;
        });
      }
      else if (this.getschemename == 'LN') {
        this.http.get(this.url + '/term-loan-master/interest/' + this.mem).subscribe((data) => {
          this.tableArr = data;
          this.gridData = data;
        });
      }
      this.dtTrigger.next();
    }
    else {
      Swal.fire('Info', 'Ending Account Number Must Greater Than Starting  Account Number', 'info')
    }
  }
  //table show or hide
  viewCurrentInt() {
    this.modalClass = 'modalShow';
    if (this.angForm.controls['AC_NOFrom'].value <= this.angForm.controls['AC_NOTo'].value) {
      this.modalClass = 'modalHide';
      this.showTable = true
    }
    else {
      Swal.fire('Info', 'Ending Account Number Must Greater Than Starting  Account Number', 'info')
      this.modalClass = 'modalHide';
      this.showTable = false
    }
  }
  //filter object
  filterObject(ele, type) {
    let matchArray = new Array()
    this.tableArr = [];
    this.gridData.forEach(element => {
      if (type == 'AC_NAME') {
        if (JSON.stringify(element?.termLoan?.AC_NAME || element.AC_NAME).includes(ele.target.value.toUpperCase())) {
          this.tableArr.push(element);
        }
      }
      else {
        if (JSON.stringify(element.BANKACNO).includes(ele.target.value)) {
          this.tableArr.push(element);
        }
      }
    });
  }
  //radio button selection variable 
  changeInterestRate(value) {
    if (value == 1) {
      this.InterestRate = "Add"
    }
    else if (value == 2) {
      this.InterestRate = "Sub"
    }
    else if (value == 3) {
      this.InterestRate = "Assign"
    }
    else {
      this.InterestRate = ""
    }
  }
  //submit function 
  submit() {
    this.formSubmitted = true;
    if (this.angForm.valid) {
      if (this.getschemename == 'TD') {
        const dataToSend = {
          'InterestArr': this.tableArr,
          'Interest': this.InterestRate,
          'InterestRate': this.angForm.controls['INT_RATE'].value
        }
        this._interestRateChange.updateData(dataToSend).subscribe(data => {
          Swal.fire('Success!', 'Record Updated Successfully !', 'success');
          this.formSubmitted = false;
        }, (error) => {
          console.log(error)
        })
      }
      else if (this.getschemename == 'LN' || this.getschemename == 'CC') {
        let effectDate = moment(this.angForm.controls['EFFECT_DATE'].value).format('YYYY-DD-MM')
        this.interestList = [this.memFrom, this.memTo, this.branch, this.getschemename, this.schemeCode, effectDate]
        const dataToSend = {
          'InterestArr': this.tableArr,
          'Interest': this.InterestRate,
          'InterestRate': this.angForm.controls['INT_RATE'].value,
          'EFFECT_DATE': effectDate,
          'MemList': this.mem,
          'InterestList': this.interestList
        }
        this._interestRateChange.postData(dataToSend).subscribe(data => {
          Swal.fire('Success!', 'Record Added Successfully !', 'success');
          this.formSubmitted = false;
        }, (error) => {
          console.log(error)
        })
      }
    }
    this.resetForm()
  }
  //resetForm form after submit function
  resetForm() {
    this.tableArr = []
    this.showTable = false
    this.schemeCode = null
    this.ngAcnoFrom = null
    this.ngAcnoTo = null
    this.ngBranchCode = null
    this.createForm()
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH'].enable()
      this.ngBranchCode = result.branch.id

    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.angForm.patchValue({
        'BRANCH': result.branch.id
      })
      this.ngBranchCode = result.branch.id

    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
}
