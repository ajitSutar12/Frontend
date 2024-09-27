import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { event } from 'jquery';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import { EditInterestCalculationService } from './edit-interest-calculation.service';
import Swal from 'sweetalert2';
import { SystemMasterParametersService } from '../../../scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-edit-interest-calculation',
  templateUrl: './edit-interest-calculation.component.html',
  styleUrls: ['./edit-interest-calculation.component.scss']
})
export class EditInterestCalculationComponent implements OnInit {

  formSubmitted = false;
  //api
  url = environment.base_url;


  // date variables
  maxDate: Date;
  minDate: Date;
  ngintDate: any = null
  warrentDate: any


  // dropdown variables
  ngBranchCode: any = null
  ngscheme: any = null
  ngfromac: any = null
  ngtoac: any = null

  // Formgroup variable
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  branch_code: any;
  selectedWarrentDate: any;
  selectedDivFromYear: any;
  selectedDivToYear: any;
  getschemename: any;
  schemeedit: any;
  obj: any[];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  arrTable: Object;
  // InterestArr: any[];
  mem: any[];
  fromAc: any[];
  toAc: any[];
  scheme: any[];
  showButton: boolean = true;
  submitData: boolean = false;
  setLang: string;


  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
    private _service: EditInterestCalculationService,
    private systemParameter: SystemMasterParametersService,
    private translate:TranslateService
  ) { 
    this.systemParameter.getFormData(1).subscribe(data => {
    

      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));

    this.createForm()

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = user.branchId
    })

    this._service.interestDate().subscribe((data) => {
      // debugger
      this.warrentDate = data
      console.log(this.warrentDate)
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.scheme = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      INT_DATE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]],
      normalint: [],
      overdraftint: [],
      overdueint: [],
      penalint: [],
      recpayint: [],
    });
  }
  getIntDetails(event) {

    this.selectedWarrentDate = event.WARRENT_DATE
    this.selectedDivFromYear = event.DIV_FROM_YEAR
    this.selectedDivToYear = event.DIV_TO_YEAR
  }

  getBranch() {
    this.ngscheme = null
    this.ngfromac = null
    this.ngtoac = null

  }

  schemechange(event) {
    this.InterestTableData = null
    this.ngfromac = null
    this.showButton = true
    this.submitData = false
    this.ngtoac = null
    this.getschemename = event.name
    this.schemeedit = event.value
    this.getIntroducer()
  }
  getIntroducer() {
    this.obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;
      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;
      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;

      case 'CC':

        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data

        })
        break;
      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;
      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;
      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;

      case 'LN':

        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data


        })
        break;
      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;
      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;
      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAc = data;
          this.toAc = data
        })
        break;
    }
  }

  // Method to insert data into database through NestJS
  InterestTableData = new Array()
  submit(event) {
    //To clear form
    if (this.angForm.status == 'INVALID') {
      Swal.fire(`${this.translate.instant('Swal_Msg.Oops...')}`, `${this.translate.instant('Swal_Msg.select_required_field')}`, "error");
    } else {
      //fetch data
      let angValue = this.angForm.value;
      let object = {
        branch_code: angValue.BRANCH,
        intDate: angValue.INT_DATE,
        ac_type: angValue.AC_TYPE,
        from_acno: angValue.FROM_AC,
        to_acno: angValue.TO_AC
      }
      this._service.interestTranData(object).subscribe(data => {
        this.InterestTableData = data;
        let AMOUNT = 0
        let RECPAY_INT_AMOUNT = 0
        let PENAL_INT_AMOUNT = 0
        let ODUE_INT_AMOUNT = 0
        let OD_INT_AMOUNT = 0
        this.InterestTableData.sort(function (a: any, b: any) {
          a['sortColumn'] = a.TRAN_ACNO == null || a.TRAN_ACNO == "" ? a.BANKACNO : a.TRAN_ACNO
          b['sortColumn'] = b.TRAN_ACNO == null || b.TRAN_ACNO == "" ? b.BANKACNO : b.TRAN_ACNO
          let p = Number(a['sortColumn']);
          let q = Number(b['sortColumn']);
          return (p < q) ? -1 : ((p > q) ? 1 : 0)
        });
        for (let ent of (data)) {
          AMOUNT = AMOUNT + Number(ent['TRAN_AMOUNT'])
          RECPAY_INT_AMOUNT = RECPAY_INT_AMOUNT + Number(ent['RECPAY_INT_AMOUNT'])
          PENAL_INT_AMOUNT = PENAL_INT_AMOUNT + Number(ent['PENAL_INT_AMOUNT'])
          OD_INT_AMOUNT = OD_INT_AMOUNT + Number(ent['OD_INT_AMOUNT'])
          ODUE_INT_AMOUNT = ODUE_INT_AMOUNT + Number(ent['ODUE_INT_AMOUNT'])
        }
        this.angForm.patchValue({
          normalint: (AMOUNT).toFixed(2),
          overdraftint: OD_INT_AMOUNT.toFixed(2),
          overdueint: ODUE_INT_AMOUNT.toFixed(2),
          penalint: PENAL_INT_AMOUNT.toFixed(2),
          recpayint: RECPAY_INT_AMOUNT.toFixed(2)
        })
        this.showButton = false;
        this.submitData = true;
      }, err => {
        console.log(err);
      })
    }
  }

  AlterData() {
    if (this.InterestTableData.length == 0) {
      Swal.fire(`${this.translate.instant('Swal_Msg.Oops...')}`, `${this.translate.instant('Swal_Msg.Something_went_wrong')}`, "error");
    } else {
      this._service.submitAlterData(this.InterestTableData).subscribe(data => {
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Interest_Cal_Edit_uccessfully')}`, 'success');
        this.angForm.reset();
        this.InterestTableData = [];
      }, err => {
        console.log(err);
      })
    }
  }
  selectAllContent($event) {
    $event.target.select();
  }

  addNewData() {
    this.showButton = true;

    this.resetForm();
  }

  changeData(ele, index, column) {
    this.InterestTableData[index][column] = ele.target.value;
    console.log(this.InterestTableData);
  }

  resetForm() {
    this.ngscheme = null;
    this.ngfromac = null;
    this.ngtoac = null;

  }

  select() {
    // this.InterestArr = []

    if (this.angForm.controls['FROM_AC'].value > this.angForm.controls['TO_AC'].value && this.ngtoac != null) {
      Swal.fire(`${this.translate.instant('Swal_Msg.Ac_Gre_Than_equal')}`);
      // this.InterestArr = []
      this.angForm.patchValue({
        TO_AC: ''
      })
      this.InterestTableData = null
      this.ngtoac = null
      this.showButton = true
      this.submitData = false
    }
  }

  getIntrestDetails() {
    console.log(this.angForm);

  }
}
