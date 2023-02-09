import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-locker-close-transaction',
  templateUrl: './locker-close-transaction.component.html',
  styleUrls: ['./locker-close-transaction.component.scss']
})
export class LockerCloseTransactionComponent implements OnInit {
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

  transferSchemeDetails
  ngacno: any = null
  transferAccountDetails

  selectedTransScheme: any = null

  values

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


    this.http.get(this.url + '/user-defination').subscribe(data => {
      this.values = data
    })
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        TRAN_DATE: data.CURRENT_DATE
      })
    });


  }
  getIntroducer() {

    this.obj = [this.schemeCode, this.selectedBranch]


    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })
  }
  list
  getTransferAccountList() {
    this.obj = [this.selectedTransScheme, this.selectedBranch]
    this.ngacno = null
    if (this.selectedTransScheme != null) {
      this.schemeAccountNoService.getLokcerSchemeList1(this.obj).subscribe((data1: any) => {
        this.list = data1;
        let obj = {
          BRANCH_CODE: this.selectedBranch,
          data: data1
        }
        this.http.post(this.url + '/locker-tran/getList', obj).subscribe((data: any) => {
          this.schemeACNo = data;
        })
      })
    }
  }
  updateId
  getTransferAccountDeatil(event) {
    // this.transferAccountDetails = event
    if (this.ngacno != null) {
      this.updateId = event.locid
      let obj = {
        BRANCH_CODE: this.selectedBranch,
        TRAN_ACNO: this.ngacno
      }
      this.http.post(this.url + '/locker-rent-transaction/lockeraccountDetails', obj).subscribe(data => {
        this.angForm.patchValue({
          KEY_NO: data['dpmasterData'].AC_KEYWORD,
          LOC_SIZE: data['locerrent'].SIZE_NAME,
          LOC_NO: data['lockerrackwise'].LOCKER_NO,
          RACK_NO: data['lockerrackwise'].RACK_NO,
          LOC_OPBY: this.ngacno
        })
      })
    }
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
      CTIME: ['', [Validators.required]],

    })
    this.angForm.patchValue({
      CTIME: moment().format("hh:mm:ss A")
    })
  }

  submit() {
    const formVal = this.angForm.value;
    let obj = {
      AC_KEYWORD: formVal.KEY_NO,
      TRAN_ACNO: this.ngacno,
      id: this.updateId,
      LOCKER_CLOSING_TIME: formVal.CTIME,
      CLOSING_USER_CODE: formVal.LOC_OPBY
    }
    this.http.post(this.url + "/locker-tran/closeLocker", obj).subscribe(data => {
      Swal.fire(
        'Success',
        'Locker Closed Successfully!',
        'success'
      );
      this.createForm()
    })
  }
}
