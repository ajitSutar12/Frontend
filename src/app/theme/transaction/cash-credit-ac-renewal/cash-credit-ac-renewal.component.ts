import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import Swal from 'sweetalert2';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { IntrestCategoryMasterDropdownService } from 'src/app/shared/dropdownService/interest-category-master-dropdown.service';
import { CashCreditLoanRenewalService } from './cash-credit-loan-renewal.service'
import *  as moment from 'moment';
import { NgSelectComponent } from '@ng-select/ng-select'
import { TranslateService } from '@ngx-translate/core';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface CashCreditLoanRenewal {
  id: number;
  BRANCH_CODE: string
  AC_TYPE: string
  AC_NO: number
  REN_DATE: Date
  AC_OPENING_DATE: Date
  AC_RENEWAL_COUNTER: Date

}



@Component({
  selector: 'app-cash-credit-ac-renewal',
  templateUrl: './cash-credit-ac-renewal.component.html',
  styleUrls: ['./cash-credit-ac-renewal.component.scss']
})
export class CashCreditAcRenewalComponent implements OnInit {
  @Output() reloadTablePassing = new EventEmitter<string>();
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  formSubmitted = false;
  //api
  url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;
  // cashcreditloanrenewalForm: FormGroup;

  // Variables for hide/show add and update button
  showButton: boolean = true;

  // interface variable
  cashcreditloanrenewal: CashCreditLoanRenewal[];
  updateID: number = 0;
  // dropdown variables
  ngscheme: any = null
  ngBranchCode: any = null
  ngacno: any = null
  getschemename: any;
  schemeACNo: any
  scheme: any[];
  obj: any;
  int_category: any = null
  branch_code: any[];
  intCat: any[];

  // date variables
  maxDate: any;
  minDate: Date;
  renewaldate: any = null
  acopeningdate: any = null
  ngexpirydate: any = null
  ngsansctiondate: any = null
  nglastintdate: any = null
  ngeffectivedate: any = null


  logDate


  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  setLang:any;

  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private _service: CashCreditLoanRenewalService,
    private interstCate: IntrestCategoryMasterDropdownService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
    private translate:TranslateService
    ) {

    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.minDate = this.maxDate
      this.logDate = data.CURRENT_DATE
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
  }


  ngOnInit(): void {
    this.getSystemParaDate()
    this.createForm();

    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC');
      });
      this.scheme = filtered;
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.ngBranchCode = data[0].value

    })
    this.interstCate.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.intCat = data;
    })
  }
  createForm() {

    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      RENEWAL_DATE: ['',],
      AC_OPDATE: ['',],
      AC_RENEWAL_COUNTER: ['',],
      OLDAC_MONTHS: [''],
      OLDAC_EXPIRE_DATE: [''],
      OLDAC_SANCTION_AMOUNT: [''],
      OLDAC_SANCTION_DATE: [''],
      OLDAC_SECURITY_AMT: [''],
      OLDAC_DRAWPOWER_AMT: [''],
      OLDAC_INSTALLMENT: [''],
      AC_MONTHS: ['', [Validators.required, Validators.pattern]],
      AC_EXPIRE_DATE: ['', [Validators.required]],
      AC_SANCTION_AMOUNT: ['', [Validators.required, Validators.pattern]],
      AC_SANCTION_DATE: ['', [Validators.required]],
      AC_SECURITY_AMT: ['', [Validators.required, Validators.pattern]],
      AC_DRAWPOWER_AMT: ['', [Validators.required, Validators.pattern]],
      AC_INSTALLMENT: ['', [Validators.required, Validators.pattern]],
      AC_INTCATA: ['',],
      LAST_INTDATE: [''],
      AC_RESO_NO: ['', [Validators.required, Validators.pattern]],
      AC_RESO_DATE: ['', [Validators.required]],
      INT_RATE: ['', [Validators.required, Validators.pattern]],
      PENAL_INT_RATE: [0, [Validators.pattern]],
      EFFECT_DATE: ['', [Validators.required]],
    });
    this.angForm.controls['AC_INTCATA'].disable()
    this.angForm.controls['LAST_INTDATE'].disable()
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.angForm.patchValue({
        'BRANCH_CODE': result.branch.id
      })
      this.ngBranchCode = result.branch.id
    }
    this.getSystemParaDate()
  }
  addNewData() {
    var button = document.getElementById('triggerhide');
    button.click();
    this.reloadTablePassing.emit();

  }
  resetForm() {
    this.createForm()
    this.ngscheme = null
    this.ngacno = null
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.angForm.patchValue({
        'BRANCH_CODE': result.branch.id
      })
      this.ngBranchCode = result.branch.id
    }

  }

  getBranch() {
    this.getAccountNumber()
  }
  schemechange(event) {
    this.getschemename = event.name
    this.ngscheme = event.value
    this.schemeACNo = null
    this.getAccountNumber()
  }

  //get account no according scheme
  getAccountNumber() {
    let obj = [this.ngscheme, this.getschemename, this.ngBranchCode]
    this.http.get(this.url + '/cash-credit-ac-renewal/accounts/' + obj).subscribe((data) => {
      this.schemeACNo = data;
    })
  }
  bankacno
  LNMASTERID

  expiryDate
  AC_NO
  getAccountDetails(event) {
    this.AC_NO = event.AC_NO
    this.bankacno = event.BANKACNO
    this.LNMASTERID = event.id
    this.http.get(this.url + '/cash-credit-ac-renewal/details/' + event.BANKACNO).subscribe((data) => {
      this.angForm.patchValue({
        AC_OPDATE: data[0].AC_OPDATE,
        OLDAC_MONTHS: data[0].AC_MONTHS,
        OLDAC_EXPIRE_DATE: data[0].AC_EXPIRE_DATE,
        OLDAC_SANCTION_AMOUNT: Number(data[0].AC_SANCTION_AMOUNT).toFixed(2),
        OLDAC_SANCTION_DATE: data[0].AC_SANCTION_DATE,
        OLDAC_SECURITY_AMT: Number(data[0].AC_SECURITY_AMT).toFixed(2),
        OLDAC_DRAWPOWER_AMT: Number(data[0].AC_DRAWPOWER_AMT).toFixed(2),
        OLDAC_INSTALLMENT: Number(data[0].AC_INSTALLMENT).toFixed(2),
        AC_MONTHS: data[0].AC_MONTHS,
        // AC_EXPIRE_DATE: data[0].AC_EXPIRE_DATE,
        AC_SANCTION_AMOUNT: Number(data[0].AC_SANCTION_AMOUNT).toFixed(2),
        AC_SANCTION_DATE: this.sysparaData.CURRENT_DATE,

        AC_RESO_DATE: this.sysparaData.CURRENT_DATE,
        EFFECT_DATE: this.sysparaData.CURRENT_DATE,
        AC_SECURITY_AMT: Number(data[0].AC_SECURITY_AMT).toFixed(2),
        AC_DRAWPOWER_AMT: Number(data[0].AC_DRAWPOWER_AMT).toFixed(2),
        AC_INSTALLMENT: Number(data[0].AC_INSTALLMENT).toFixed(2),
        LAST_INTDATE: data[0].AC_LINTEDT == null || data[0].AC_LINTEDT == '' ? data[0].AC_OPDATE : data[0].AC_LINTEDT
      })
      this.int_category = Number(data[0].AC_INTCATA)

      var TranDT = moment(data[0].AC_EXPIRE_DATE, "DD/MM/YYYY");
      var DivTODate = moment(TranDT, 'DD/MM/YYYY').add(data[0].AC_MONTHS, 'M').format('DD/MM/YYYY')
      this.expiryDate = DivTODate
      this.angForm.patchValue({
        AC_EXPIRE_DATE: DivTODate
      })
    })
    this.http.get(this.url + '/cash-credit-ac-renewal/renewCount/' + event.BANKACNO).subscribe((data) => {
      this.angForm.patchValue({
        AC_RENEWAL_COUNTER: data
      })

    })
    let mem = [event.AC_NO, this.ngBranchCode, this.getschemename, this.ngscheme]
    this.http.get(this.url + '/cash-credit-ac-renewal/interest/' + mem).subscribe((data) => {
      this.angForm.patchValue({
        INT_RATE: data[0]?.INT_RATE,
        PENAL_INT_RATE: data[0]?.PENAL_INT_RATE
      })
    })
  }

  getEditAccountDetails() {
    this.http.get(this.url + '/cash-credit-ac-renewal/details/' + this.bankacno).subscribe((data) => {
      this.angForm.patchValue({
        AC_OPDATE: data[0].AC_OPDATE,
        OLDAC_MONTHS: data[0].AC_MONTHS,
        OLDAC_EXPIRE_DATE: data[0].AC_EXPIRE_DATE,
        OLDAC_SANCTION_AMOUNT: Number(data[0].AC_SANCTION_AMOUNT).toFixed(2),
        OLDAC_SANCTION_DATE: data[0].AC_SANCTION_DATE,
        OLDAC_SECURITY_AMT: Number(data[0].AC_SECURITY_AMT).toFixed(2),
        OLDAC_DRAWPOWER_AMT: Number(data[0].AC_DRAWPOWER_AMT).toFixed(2),
        OLDAC_INSTALLMENT: Number(data[0].AC_INSTALLMENT).toFixed(2),
        AC_MONTHS: data[0].AC_MONTHS,
        // AC_EXPIRE_DATE: data[0].AC_EXPIRE_DATE,
        AC_SANCTION_AMOUNT: Number(data[0].AC_SANCTION_AMOUNT).toFixed(2),
        AC_SANCTION_DATE: this.sysparaData.CURRENT_DATE,

        AC_RESO_DATE: this.sysparaData.CURRENT_DATE,
        EFFECT_DATE: this.sysparaData.CURRENT_DATE,
        AC_SECURITY_AMT: Number(data[0].AC_SECURITY_AMT).toFixed(2),
        AC_DRAWPOWER_AMT: Number(data[0].AC_DRAWPOWER_AMT).toFixed(2),
        AC_INSTALLMENT: Number(data[0].AC_INSTALLMENT).toFixed(2),
        LAST_INTDATE: data[0].AC_LINTEDT == null || data[0].AC_LINTEDT == '' ? data[0].AC_OPDATE : data[0].AC_LINTEDT
      })
      this.int_category = Number(data[0].AC_INTCATA)

      var TranDT = moment(data[0].AC_EXPIRE_DATE, "DD/MM/YYYY");
      var DivTODate = moment(TranDT, 'DD/MM/YYYY').add(data[0].AC_MONTHS, 'M').format('DD/MM/YYYY')
      this.expiryDate = DivTODate
      this.angForm.patchValue({
        AC_EXPIRE_DATE: DivTODate
      })
    })
    this.http.get(this.url + '/cash-credit-ac-renewal/renewCount/' + this.bankacno).subscribe((data) => {
      this.angForm.patchValue({
        AC_RENEWAL_COUNTER: data
      })

    })
    let mem = [this.AC_NO, this.ngBranchCode, this.getschemename, this.ngscheme]
    this.http.get(this.url + '/cash-credit-ac-renewal/interest/' + mem).subscribe((data) => {
      this.angForm.patchValue({
        INT_RATE: data[0]?.INT_RATE,
        PENAL_INT_RATE: data[0]?.PENAL_INT_RATE
      })
    })
  }

  getExpiryDate() {
    if (this.angForm.controls['AC_MONTHS'].value != '') {
      var TranDT = moment(this.angForm.controls['OLDAC_EXPIRE_DATE'].value, "DD/MM/YYYY");
      var DivTODate = moment(TranDT, 'DD/MM/YYYY').add(this.angForm.controls['AC_MONTHS'].value, 'M').format('DD/MM/YYYY')
      this.angForm.patchValue({
        AC_EXPIRE_DATE: DivTODate
      })
      this.expiryDate = DivTODate
    }
  }
  sysparaData
  //get sys para current date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.sysparaData = data
      this.angForm.patchValue({
        'RENEWAL_DATE': data.CURRENT_DATE,
      })
    })
  }

  selectAllContent($event) {
    $event.target.select();
  }

  submit() {
    this.formSubmitted = true
    if (this.angForm.valid) {
      const formVal = this.angForm.value;
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let resoDate
      let sancationDate
      let expiryDate
      const dataToSend = {
        AC_NO: this.AC_NO,
        BANKACNO: this.bankacno,
        EFFECT_DATE: formVal.EFFECT_DATE,
        AC_ACNOTYPE: this.getschemename,
        AC_TYPE: this.ngscheme,
        BRANCH_CODE: this.ngBranchCode,
        LNMASTERID: this.LNMASTERID,
        INT_RATE: formVal.INT_RATE,
        AC_MONTHS: formVal.AC_MONTHS,
        PENAL_INT_RATE: formVal.PENAL_INT_RATE,
        AC_SANCTION_AMOUNT: formVal.AC_SANCTION_AMOUNT,
        AC_SECURITY_AMT: formVal.AC_SECURITY_AMT,
        AC_DRAWPOWER_AMT: formVal.AC_DRAWPOWER_AMT,
        AC_INSTALLMENT: formVal.AC_INSTALLMENT,
        //disable fields value

        AC_OPDATE: formVal.AC_OPDATE,
        AC_RESO_NO: formVal.AC_RESO_NO,
        RENEWAL_DATE: formVal.RENEWAL_DATE,
        OLD_MONTH: formVal.OLDAC_MONTHS,
        OLD_EXPIRY_DATE: formVal.OLDAC_EXPIRE_DATE,
        OLD_SANCTION_LIMIT: formVal.OLDAC_SANCTION_AMOUNT,
        OLD_SANCTION_DATE: formVal.OLDAC_SANCTION_DATE,
        OLD_SECURITY_AMOUNT: formVal.OLDAC_SECURITY_AMT,
        OLD_DRAWING_POWER: formVal.OLDAC_DRAWPOWER_AMT,
        OLD_AC_INSTALLMENT: formVal.OLDAC_INSTALLMENT,
        USER: result.USER_NAME,
      }
      dataToSend['LAST_INTDATE'] = formVal.LAST_INTDATE
      if (this.sysparaData.CURRENT_DATE == formVal.AC_SANCTION_DATE) {
        dataToSend['AC_SANCTION_DATE'] = formVal.AC_SANCTION_DATE
      }
      else {
        dataToSend['AC_SANCTION_DATE'] = (formVal.AC_SANCTION_DATE == '' || formVal.AC_SANCTION_DATE == 'Invalid date' || formVal.AC_SANCTION_DATE == null || formVal.AC_SANCTION_DATE == undefined) ? sancationDate = '' : sancationDate = moment(formVal.AC_SANCTION_DATE).format('DD/MM/YYYY')
      }

      if (this.sysparaData.CURRENT_DATE == formVal.AC_RESO_DATE) {
        dataToSend['AC_RESO_DATE'] = formVal.AC_RESO_DATE
      }
      else {
        dataToSend['AC_RESO_DATE'] = (formVal.AC_RESO_DATE == '' || formVal.AC_RESO_DATE == 'Invalid date' || formVal.AC_RESO_DATE == null || formVal.AC_RESO_DATE == undefined) ? resoDate = '' : resoDate = moment(formVal.AC_RESO_DATE).format('DD/MM/YYYY')
      }

      if (this.expiryDate == formVal.AC_EXPIRE_DATE) {
        dataToSend['AC_EXPIRE_DATE'] = formVal.AC_EXPIRE_DATE
      }
      else {
        dataToSend['AC_EXPIRE_DATE'] = (formVal.AC_EXPIRE_DATE == '' || formVal.AC_EXPIRE_DATE == 'Invalid date' || formVal.AC_EXPIRE_DATE == null || formVal.AC_EXPIRE_DATE == undefined) ? expiryDate = '' : expiryDate = moment(formVal.AC_EXPIRE_DATE).format('DD/MM/YYYY')
      }
      this._service.postData(dataToSend).subscribe(data => {
        this.formSubmitted = false;
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Tran_Msg')}`, "success");
      })
      this.formSubmitted = false
      if (result.RoleDefine[0].Role.id == 1) {
        this.angForm.controls['BRANCH_CODE'].enable()
        this.ngBranchCode = result.branch.id
      }
      else {
        this.angForm.controls['BRANCH_CODE'].disable()
        this.ngBranchCode = result.branch.id
      }
      this.resetForm()
    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Citywise_Npa')}`, `${this.translate.instant('Swal_Msg.Citywise_Npa_Msg')}`, 'warning');
    }
  }
  editClickHandler(id) {
    this._service.getFormData(id).subscribe((data) => {
      this.angForm.disable()
      if (data.SYSCHNG_LOGIN != null) {
        this.unapproveShow = true
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
      }
      else if (data.SYSCHNG_LOGIN == null) {
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = true;
        this.rejectShow = true;
      }
      else {
        this.approveShow = false;
        this.rejectShow = false;
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
      }
      this.updateID = data.id;
      this.ngscheme = data.AC_TYPE
      this.ngBranchCode = data.BRANCH_CODE
      this.getschemename = data.AC_ACNOTYPE
      this.getAccountNumber()
      this.ngacno = data.LNMASTERID
      this.AC_NO = data.Acc_NO
      this.LNMASTERID = data.LNMASTERID
      this.bankacno = data.AC_NO
      this.getEditAccountDetails()
      this.angForm.patchValue({
        //disable fields value
        AC_OPDATE: data.AC_OPDATE,
        RENEWAL_DATE: data.NEW_ASON_DATE,
        OLDAC_MONTHS: data.OLD_MONTH,
        OLDAC_EXPIRE_DATE: data.OLD_EXPIRY_DATE,
        OLDAC_SANCTION_AMOUNT: data.OLD_SANCTION_LIMIT,
        OLDAC_SANCTION_DATE: data.OLD_SANCTION_DATE,
        OLDAC_SECURITY_AMT: data.OLD_SECURITY_AMOUNT,
        OLDAC_DRAWPOWER_AMT: data.OLD_DRAWING_POWER,
        OLDAC_INSTALLMENT: data.OLD_AC_INSTALLMENT,
        // AC_TYPE: data.AC_TYPE,
        // AC_NO: data.AC_NO,
        BANKACNO: data.AC_NO,
        EFFECT_DATE: data.EFFECT_DATE,
        BRANCH_CODE: data.BRANCH_CODE,
        INT_RATE: data.NEW_INTEREST_RATE,
        AC_MONTHS: data.NEW_MONTH,
        PENAL_INT_RATE: data.PENAL_INTEREST,
        AC_SANCTION_AMOUNT: data.AC_SANCTION_AMOUNT,
        AC_SECURITY_AMT: data.AC_SECURITY_AMT,
        AC_DRAWPOWER_AMT: data.AC_DRAWPOWER_AMT,
        AC_INSTALLMENT: data.AC_INSTALLMENT,
        AC_RENEWAL_COUNTER: data.AC_RENEWAL_COUNTER,
        AC_RESO_NO: data.AC_RESO_NO,
        AC_RESO_DATE: data.AC_RESO_DATE,
        AC_EXPIRE_DATE: data.NEW_EXPIRY_DATE,
        AC_SANCTION_DATE: data.NEW_OPEN_DATE
      })
    })
  }

  //approve account
  Approve() {
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let resoDate
    let sancationDate
    let expiryDate
    const dataToSend = {
      AC_NO: this.AC_NO,
      BANKACNO: this.bankacno,
      EFFECT_DATE: formVal.EFFECT_DATE,
      AC_ACNOTYPE: this.getschemename,
      AC_TYPE: this.ngscheme,
      BRANCH_CODE: this.ngBranchCode,
      LNMASTERID: this.LNMASTERID,
      INT_RATE: formVal.INT_RATE,
      AC_MONTHS: formVal.AC_MONTHS,
      PENAL_INT_RATE: formVal.PENAL_INT_RATE,
      AC_SANCTION_AMOUNT: formVal.AC_SANCTION_AMOUNT,
      AC_SECURITY_AMT: formVal.AC_SECURITY_AMT,
      AC_DRAWPOWER_AMT: formVal.AC_DRAWPOWER_AMT,
      AC_INSTALLMENT: formVal.AC_INSTALLMENT,

      //disable fields value

      AC_OPDATE: formVal.AC_OPDATE,
      AC_RESO_NO: formVal.AC_RESO_NO,
      RENEWAL_DATE: formVal.RENEWAL_DATE,
      OLD_MONTH: formVal.OLDAC_MONTHS,
      OLD_EXPIRY_DATE: formVal.OLDAC_EXPIRE_DATE,
      OLD_SANCTION_LIMIT: formVal.OLDAC_SANCTION_AMOUNT,
      OLD_SANCTION_DATE: formVal.OLDAC_SANCTION_DATE,
      OLD_SECURITY_AMOUNT: formVal.OLDAC_SECURITY_AMT,
      OLD_DRAWING_POWER: formVal.OLDAC_DRAWPOWER_AMT,
      OLD_AC_INSTALLMENT: formVal.OLDAC_INSTALLMENT,
      USER: result.USER_NAME,
      id: this.updateID,
      user: result.id
    }
    dataToSend['LAST_INTDATE'] = formVal.LAST_INTDATE
    if (this.sysparaData.CURRENT_DATE == formVal.AC_SANCTION_DATE) {
      dataToSend['AC_SANCTION_DATE'] = formVal.AC_SANCTION_DATE
    }
    else {
      dataToSend['AC_SANCTION_DATE'] = (formVal.AC_SANCTION_DATE == '' || formVal.AC_SANCTION_DATE == 'Invalid date' || formVal.AC_SANCTION_DATE == null || formVal.AC_SANCTION_DATE == undefined) ? sancationDate = '' : sancationDate = moment(formVal.AC_SANCTION_DATE).format('DD/MM/YYYY')
    }

    if (this.sysparaData.CURRENT_DATE == formVal.AC_RESO_DATE) {
      dataToSend['AC_RESO_DATE'] = formVal.AC_RESO_DATE
    }
    else {
      dataToSend['AC_RESO_DATE'] = (formVal.AC_RESO_DATE == '' || formVal.AC_RESO_DATE == 'Invalid date' || formVal.AC_RESO_DATE == null || formVal.AC_RESO_DATE == undefined) ? resoDate = '' : resoDate = moment(formVal.AC_RESO_DATE).format('DD/MM/YYYY')
    }

    if (this.expiryDate == formVal.AC_EXPIRE_DATE) {
      dataToSend['AC_EXPIRE_DATE'] = formVal.AC_EXPIRE_DATE
    }
    else {
      dataToSend['AC_EXPIRE_DATE'] = (formVal.AC_EXPIRE_DATE == '' || formVal.AC_EXPIRE_DATE == 'Invalid date' || formVal.AC_EXPIRE_DATE == null || formVal.AC_EXPIRE_DATE == undefined) ? expiryDate = '' : expiryDate = moment(formVal.AC_EXPIRE_DATE).format('DD/MM/YYYY')
    }
    this._service.approve(dataToSend).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Approve')}`,
        `${this.translate.instant('Swal_Msg.A_Msg')}`,
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }


  //reject account
  reject() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this._service.reject(obj).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Reject')}`,
        `${this.translate.instant('Swal_Msg.R_Msg')}`,
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }
  public visibleAnimate = false;
  public visible = false;
  updateShow: boolean = false;
  newbtnShow: boolean = false;

  unapproveShow: boolean = false
  unApprove() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      LOG_DATE: this.logDate
    }
    this._service.unapprove(obj).subscribe(data => {
      this.angForm.enable()
      Swal.fire(
        `${this.translate.instant('Swal_Msg.Unapprove')}`,
        `${this.translate.instant('Swal_Msg.U_Msg')}`,
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
  }

  onOpen(select: NgSelectComponent) {
    //debugger
    select.open()
  }

  onClose(select: NgSelectComponent) {
    select.close()
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }

  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  //check  if margin values are below 100
  checkmargin(ele: any) {
    //check  if given value  is below 100
    if (ele.target.value <= 50) {
    } else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.Input_Limit_50')}`, "error");
      ele.target.value = 0
    }
  }
  closeModal() {
    var button = document.getElementById('triggerhide');
    button.click();
    this.reloadTablePassing.emit();
  }
}