import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
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
  minDate: Date;
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

  constructor(private fb: FormBuilder, private _SchemeCodeDropdown: SchemeCodeDropdownService,
    private http: HttpClient, private _schemeAccountNoService: SchemeAccountNoService,
    private _ownbranchMasterService: OwnbranchMasterService,
    private _interestRateChange: DepositLoanInterestRateEditChangeService) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
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

  getBranch() {
    this.getInterestTransfer()
  }

  getIntTrans(event) {
    this.getschemename = event.name
    this.getInterestTransfer()
  }

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
          console.log('ln acno', data)
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'TD':
        this._interestRateChange.getTermDepositSchemeList1(this.obj).subscribe(data => {
          console.log('TD acno', data)
          this.startAcNo = data;
          this.endAcNo = data;
        })
        break;

      case 'CC':
        this._schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          console.log('CC acno', data)
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
  //checks percentage of unsecured
  checkInt(event) {
    if (Number(event) > 20) {
      Swal.fire('Info', 'Please Input Interest upto 20', 'info')
      this.angForm.patchValue({
        INT_RATE: ''
      })
    }
  }

  loadAcno() {
    var memFrom = this.angForm.controls['AC_NOFrom'].value
    var memTo = this.angForm.controls['AC_NOTo'].value
    if (this.angForm.controls['AC_NOFrom'].value < this.angForm.controls['AC_NOTo'].value) {
      this.mem = [memFrom, memTo]
      if (this.getschemename == 'TD') {
        this.http.get(this.url + '/term-deposits-master/interest/' + this.mem).subscribe((data) => {
          this.tableArr = data;
          console.log('td table', this.tableArr)
        });
      }
      else if (this.getschemename == 'CC') {
        this.http.get(this.url + '/cash-credit-master/interest/' + this.mem).subscribe((data) => {
          this.tableArr = data;
          console.log('cc table', this.tableArr)
        });
      }
      else if (this.getschemename == 'LN') {
        this.http.get(this.url + '/term-loan-master/interest/' + this.mem).subscribe((data) => {
          this.tableArr = data;
          console.log('ln table', this.tableArr)
        });
      }
      this.dtTrigger.next();
    }
  }

  viewCurrentInt() {
    this.showTable = true
  }

  InterestRate: string
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

  submit() {
    this.formSubmitted = true;
    if (this.angForm.valid) {
      console.log(this.angForm.value);
      if (this.getschemename == 'TD') {
        const dataToSend = {
          'InterestArr': this.tableArr,
          'Interest': this.InterestRate,
          'InterestRate': this.angForm.controls['INT_RATE'].value
        }
        console.log("dataToSend", dataToSend)
        this._interestRateChange.updateData(dataToSend).subscribe(data => {
          console.log(data, "submit data")
          Swal.fire('Success!', 'Record Updated Successfully !', 'success');
          this.formSubmitted = false;
        }, (error) => {
          console.log(error)
        })
      }
      else if (this.getschemename == 'LN' || this.getschemename == 'CC') {
        const dataToSend = {
          'InterestArr': this.tableArr,
          'Interest': this.InterestRate,
          'InterestRate': this.angForm.controls['INT_RATE'].value,
          'EFFECT_DATE': moment(this.angForm.controls['EFFECT_DATE'].value).format('DD/MM/YYYY'),
          'MemList': this.mem
        }
        this._interestRateChange.postData(dataToSend).subscribe(data => {
          console.log(data, "submit data")
          Swal.fire('Success!', 'Record Added Successfully !', 'success');
          this.formSubmitted = false;
        }, (error) => {
          console.log(error)
        })
      }
    }
    this.resetForm()
  }

  resetForm() {
    this.tableArr = []
    this.showTable = false
    this.schemeCode = null
    this.ngAcnoFrom = null
    this.ngAcnoTo = null
    this.ngBranchCode = null
    this.createForm()
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
