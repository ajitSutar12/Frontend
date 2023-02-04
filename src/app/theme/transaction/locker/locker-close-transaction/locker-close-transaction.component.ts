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
        CTIME: moment().format("hh:mm:ss A")
      })
    })
  }
  getIntroducer() {
    
    this.obj = [this.schemeCode, this.selectedBranch]


    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })
  }
  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.obj = [this.selectedTransScheme, this.selectedBranch]
    this.ngacno = null
    switch (event.name) {
      case 'LK':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

    }
  }


  getTransferAccountDeatil(event) {
    this.transferAccountDetails = event
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

  submit() {debugger
    const formVal = this.angForm.value;
    var object={
      TRAN_DATE: formVal.TRAN_DATE,
      BRANCH_CODE: formVal.BRANCH_CODE,
      SCHEME_CODE: formVal.SCHEME_CODE,
      ACCOUNT_NO: formVal.ACCOUNT_NO,
      RACK_NO: formVal.RACK_NO,
      LOC_NO: formVal.LOC_NO,
      LOC_SIZE: formVal.LOC_SIZE,
      KEY_NO: formVal.KEY_NO,
      LOC_OPBY: formVal.LOC_OPBY,
      CTIME: formVal.OTIME,
    }
     console.log(object);
        this.http.post(this.url + "locker-tran/closeLocker", object).subscribe(data => {
          Swal.fire(
            'Success',
            'Data Successfully Added!',
            'success'
          );
          })
  }
  //   accountlist: 
  // let obj = {
  //   BRANCH_CODE:
  // }
  // endpoint: '/locker-tran/getList',obj
  // ac close submit
  // let obj={
  //   AC_KEYWORD
  //   TRAN_ACNO
  //   id
  // }
  // 'locker-tran/closeLocker'

}
