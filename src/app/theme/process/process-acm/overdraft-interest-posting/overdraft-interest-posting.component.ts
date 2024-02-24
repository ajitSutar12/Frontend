import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { ProcessAcmService } from '../process-acm.service';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-overdraft-interest-posting',
  templateUrl: './overdraft-interest-posting.component.html',
  styleUrls: ['./overdraft-interest-posting.component.scss']
})
export class OverdraftInterestPostingComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;
  modalClass: string = 'modalHide';
  // dropdown variaqbles
  branch_code: any;
  ngBranchCode: any = null
  schemeedit: any = null
  ngfromac: any = null
  ngtoac: any = null
  ngGlAC: any = null
  scheme: any[];
  fromAC: any[];
  ToAC: any[];
  GLACNooption: any[];
  schemeACNo: any[];

  // date variables
  maxDate: any;
  minDate: Date;

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ACMasterDropdownService: ACMasterDropdownService,
    private config: NgSelectConfig,
    private _service: ProcessAcmService,
    private systemParameter: SystemMasterParametersService,private translate:TranslateService
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate
    })
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    this.createForm();
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = user.branchId
    })
    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      this.scheme = data;
    })

    this.ACMasterDropdownService.getACMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.GLACNooption = data;
      });
  }

  createForm() {

    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]],
      CAL_DATE: ['', [Validators.required]],
      GL_ACNO: ['', [Validators.required]],
      PARTICULAR: [''],
      TOTAL_CHARGE: [''],
      AUTO_TRAN: [''],

    })
  }

  getBranch() {
    this.schemeedit = null
    this.ngfromac = null
    this.ngtoac = null

  }
  schemechange(event) {

    this.getschemename = event.name
    this.schemeedit = event.value
    this.getIntroducer()


  }
  obj: any
  getschemename: any


  //get account no according scheme for introducer

  getIntroducer() {
    this.obj = [this.schemeedit, this.ngBranchCode]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;

      case 'CC':

        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data

        })
        break;
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;

      case 'LN':

        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data


        })
        break;
      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
        })
        break;
    }
  }

  //decimal content show purpose wrote below function
  decimalAllContent($event) {
    let value = Number($event.target.value);
    let data = value.toFixed(2);
    $event.target.value = data;
  }

  select() {
    if (this.angForm.controls['FROM_AC'].value > this.angForm.controls['TO_AC'].value && this.ngtoac != '' && this.ngtoac != null) {
      Swal.fire(`${this.translate.instant('Swal_Msg.From_Account_Number')}`);
    }
  }

  submit() {
    let data = this.angForm.value;
    data['user'] = JSON.parse(localStorage.getItem('user'));
    this.modalClass = 'modalShow';
    this._service.OverdraftPosting(data).subscribe(ele => {
      if (ele.type == 'error') {
        Swal.fire(`${this.translate.instant('Swal_Msg.Info')}`, ele.msg, 'warning');
      } else {
        Swal.fire(`${this.translate.instant('Swal_Msg.Done')}`, ele.msg, 'success');
      }
      this.angForm.reset();
      this.modalClass = 'modalHide';
    })
  }
}
