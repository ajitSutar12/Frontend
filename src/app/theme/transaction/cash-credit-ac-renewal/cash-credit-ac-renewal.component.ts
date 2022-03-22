import { Component, OnInit } from '@angular/core';
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
  maxDate: Date;
  minDate: Date;
  renewaldate: any = null
  acopeningdate: any = null
  ngexpirydate: any = null
  ngsansctiondate: any = null
  nglastintdate: any = null
  ngeffectivedate: any = null






  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private _service: CashCreditLoanRenewalService,
    private interstCate: IntrestCategoryMasterDropdownService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,) {

    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
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
      PENAL_INT_RATE: ['', [Validators.pattern]],
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
      this.ngBranchCode = result.branch.id
    }
  }
  addNewData() {
    this.showButton = true;
    this.resetForm();
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
      this.ngBranchCode = result.branch.id
    }
  
  }

  getBranch() {
    this.getAccountNumber()
  }
  schemechange(event) {
    this.getschemename = event.name
    this.ngscheme = event.value
    this.getAccountNumber()
  }

  //get account no according scheme
  getAccountNumber() {
    let obj = [this.ngscheme, this.getschemename, this.ngBranchCode]
    this.http.get(this.url + '/cash-credit-ac-renewal/accounts/' + obj).subscribe((data) => {
      console.log(data)
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
        OLDAC_SANCTION_AMOUNT: data[0].AC_SANCTION_AMOUNT,
        OLDAC_SANCTION_DATE: data[0].AC_SANCTION_DATE,
        OLDAC_SECURITY_AMT: data[0].AC_SECURITY_AMT,
        OLDAC_DRAWPOWER_AMT: data[0].AC_DRAWPOWER_AMT,
        OLDAC_INSTALLMENT: data[0].AC_INSTALLMENT,
        AC_MONTHS: data[0].AC_MONTHS,
        // AC_EXPIRE_DATE: data[0].AC_EXPIRE_DATE,
        AC_SANCTION_AMOUNT: data[0].AC_SANCTION_AMOUNT,
        AC_SANCTION_DATE: this.sysparaData.CURRENT_DATE,

        AC_RESO_DATE: this.sysparaData.CURRENT_DATE,
        EFFECT_DATE: this.sysparaData.CURRENT_DATE,
        AC_SECURITY_AMT: data[0].AC_SECURITY_AMT,
        AC_DRAWPOWER_AMT: data[0].AC_DRAWPOWER_AMT,
        AC_INSTALLMENT: data[0].AC_INSTALLMENT,
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

  getExpiryDate() {
    var TranDT = moment(this.angForm.controls['OLDAC_EXPIRE_DATE'].value, "DD/MM/YYYY");
    var DivTODate = moment(TranDT, 'DD/MM/YYYY').add(this.angForm.controls['AC_MONTHS'].value, 'M').format('DD/MM/YYYY')
    this.angForm.patchValue({
      AC_EXPIRE_DATE: DivTODate
    })
    this.expiryDate = DivTODate
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

  submit() {
    this.formSubmitted = true
    if (this.angForm.valid) {
      console.log(this.angForm.valid)
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
        Swal.fire("Success!", "Data Updated Successfully !", "success");
      })
      this.resetForm()
      this.formSubmitted = false
      if (result.RoleDefine[0].Role.id == 1) {
        this.angForm.controls['BRANCH_CODE'].enable()
        this.ngBranchCode = result.branch.id
      }
      else {
        this.angForm.controls['BRANCH_CODE'].disable()
        this.ngBranchCode = result.branch.id
      }

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }

}