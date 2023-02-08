import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { glMasterService } from '../../../../shared/elements/gl-master.service';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-locker-open-transaction',
  templateUrl: './locker-open-transaction.component.html',
  styleUrls: ['./locker-open-transaction.component.scss']
})
export class LockerOpenTransactionComponent implements OnInit {

  angForm: FormGroup;
  url = environment.base_url;


  selectedBranch
  branchOption: any;
  scheme
  schemeCode
  schemeType: string = 'SH'
  obj: any;
  Scheme: any;



  type: any;
  ngIntroducer: any = null
  introducerACNo
  schemeACNo
  bankacno

  debitcredit
  selectedScheme: any = null

  values = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
  ];


  constructor(private http: HttpClient, private config: NgSelectConfig, private systemParameter: SystemMasterParametersService, private fb: FormBuilder, private _ownbranchmasterservice: OwnbranchMasterService, private schemeCodeDropdownService: SchemeCodeDropdownService, private schemeAccountNoService: SchemeAccountNoService,) { }

  ngOnInit(): void {
    this.createForm()
    let user = JSON.parse(localStorage.getItem('user'));
    this.type = 'tranfer';
    //   // this.tranModeList = this.TranModeCash;

    //   // BranchCode Dropdown
    this._ownbranchmasterservice.getOwnbranchList().subscribe(data => {
      this.branchOption = data;
      this.selectedBranch = user.branchId;
    })

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
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

    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        TRAN_DATE: data.CURRENT_DATE
      })
    });
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        OTIME: moment().format("hh:mm:ss A")
      })
    })
  }

  getIntroducer() {
    this.obj = [this.schemeCode, this.selectedBranch]
    this.schemeAccountNoService.getLokcerSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })
  }
  transferSchemeDetails
  ngacno: any = null
  transferAccountDetails
  selectedTransScheme: any = null
  getTransferAccountList() {
    // this.transferSchemeDetails = event
    this.obj = [this.selectedTransScheme, this.selectedBranch]
    this.ngacno = null
    // switch (event.name) {
    //   case 'LK':
    if (this.selectedTransScheme != null)
      this.schemeAccountNoService.getLokcerSchemeList1(this.obj).subscribe(data => {
        this.schemeACNo = data;
      })
    //     break;
    // }
  }

  getTransferAccountDeatil() {
    let obj = {
      BRANCH_CODE: this.selectedBranch,
      TRAN_ACNO: this.ngacno
    }
    this.http.post(this.url + '/locker-rent-transaction/lockeraccountDetails', obj).subscribe(data => {
      this.transferAccountDetails = data
    })
  }
  createForm() {
    this.angForm = this.fb.group({
      TRAN_DATE: ['', [Validators.required]],
      BRANCH_CODE: ['', [Validators.required]],
      SCHEME_CODE: ['', [Validators.required]],
      ACCOUNT_NO: ['', [Validators.required]],
      RACK_NO: ['', [Validators.required]],
      LOC_NO: ['', [Validators.required]],
      LOC_SIZE: ['', [Validators.required]],
      KEY_NO: ['', [Validators.required]],
      LOC_OPBY: ['', [Validators.required]],
      OTIME: ['', [Validators.required]],
    })
  }

  submit() {
    // debugger
    const formVal = this.angForm.value;
    var obj = {
      TRAN_DATE: formVal.TRAN_DATE,
      BRANCH_CODE: formVal.BRANCH_CODE,
      TRAN_ACTYPE: formVal.SCHEME_CODE,
      TRAN_ACNO: formVal.ACCOUNT_NO,
      OPENING_USER_CODE: formVal.ACCOUNT_NO,
      LOCKER_OPENING_TIME: formVal.OTIME,
      //   USER_CODE
    }
    console.log(obj);
    this.http.post(this.url + "locker-tran/openLocker", obj).subscribe(data => {
      Swal.fire(
        'Success',
        'Data Successfully Added!',
        'success'
      );
    })
    // 'locker-tran/openLocker'
  }



}

