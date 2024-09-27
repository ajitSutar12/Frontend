import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { Observable } from 'rxjs/Rx';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { TranslateService } from "@ngx-translate/core";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

@Component({
  selector: 'app-npaprocess',
  templateUrl: './npaprocess.component.html',
  styleUrls: ['./npaprocess.component.scss']
})
export class NPAProcessComponent implements OnInit {
  // variable for validation
  formSubmitted = false;
  // Created Form Group
  angForm: FormGroup;
  url = environment.base_url;
  public liveNotification: string;
  public liveNotificationClass: string;

  public profileNotification: string;
  public profileNotificationClass: string;
  // dropdown variables
  scheme
  ngscheme: any = null
  nasf: any = null
  ngBranchCode: any = null
  glaccount: any = null;
  schemeACNo: any[];
  branch_code: any[];
  schemeedit: any;
  ACMasterDropdown: any[];
  fromAC
  ngfromac: any = null
  ngtoac: any = null
  ToAC
  NPAdate
  // variables for button
  showButton: boolean = true;
  updateShow: boolean;
  newbtnShow: boolean;
  glDetails
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  chatSlideInOut: string;
  selectedIds: any;
  setLang: any;
  constructor(
    private fb: FormBuilder,
    private config: NgSelectConfig,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private http: HttpClient,
    private translate: TranslateService,
    private systemParameter: SystemMasterParametersService
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      //Translation
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())


  }



  ngOnInit(): void {
    this.createForm()
    this.getNPAProcessData()
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        // return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
        return (scheme.name == 'LN' || scheme.name == 'CC');
      });
      this.scheme = allscheme;
    })
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = data[0].value
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      NPA_DATE: ['', [Validators.required]],
      NPA_DATE1: [''],
      FROM_AC: [''],
      TO_AC: [''],
      RECOVER_AMT: [''],
      ALL_AC: [''],
    });
  }

  hideInputField: boolean = false
  showInputField: boolean = true
  isCheckBoxTrue() {
    let formVal = this.angForm.value
    if (formVal.ALL_AC == true) {
      this.hideInputField = false
      this.showInputField = true
    }
    else {
      this.hideInputField = true
      this.showInputField = false
    }

  }

  gettingDate(event) {
    this.npaProcessedDate = event.REPORT_DATE
  }

  fromAccNo
  toAccNo
  getFromAccNo(event) {
    this.fromAccNo = event.bankacno
  }
  getToAccNo(event) {
    this.toAccNo = event.bankacno
  }

  npaProcessedDate
  npaDate
  isLoder: boolean = false

  posting() {

    const formVal = this.angForm.value;
    this.npaDate = moment(formVal.NPA_DATE, 'YYYY-MM-DD').format('DD/MM/YYYY')
    // this.npaProcessedDate = moment(formVal.NPA_DATE1, 'YYYY-MM-DD').format('DD/MM/YYYY')
    let CHECKBOX_VALUE
    if (formVal.RECOVER_AMT) {
      CHECKBOX_VALUE = '0';
    }
    else {
      CHECKBOX_VALUE = '1';
    }

    let checkFromAcc = formVal.ALL_AC ? this.startAcc : this.fromAccNo
    let checkToAcc = formVal.ALL_AC ? this.endAcc : this.toAccNo

    let obj = {
      "vSchemecode": this.vSchemecode,
      "AcNoFrom": checkFromAcc,
      "AcNoTo": checkToAcc,
      "vCalcNPADate": this.npaDate,
      "cmCurrentProvDate": this.npaDate,
      "cmSchemeCd": this.ngscheme,
      "ChkTobeRecover": CHECKBOX_VALUE,
      "rsLNMaster": {
        "AC_INSTALLMENT": "1"
      },
      "branch": formVal.BRANCH_CODE
    }

    if (this.glDetails.some(detail => detail.REPORT_DATE === this.npaDate)) {

      Swal.fire({
        icon: 'warning',
        title: `${this.translate.instant('Swal_Msg.Process_Already_Exist')}`,
        text: `${this.translate.instant('Swal_Msg.NPA_Date_Process_Already_Exists')}`,
      });

      this.angForm.controls.NPA_DATE.reset()

    } else {

      this.isLoder = true

      this.http.post(this.url + '/voucher/npaprocess', obj).subscribe((response: any) => {

        this.isLoder = false

        if (response.message == "success") {
          Swal.fire({
            icon: 'success',
            title:`${this.translate.instant('Swal_Msg.Process_Completed')}`,
            text: `${this.translate.instant('Swal_Msg.NPA_Process_Completed')}`,
          });

        }
        else {
          Swal.fire({
            icon: 'error',
            text: `${this.translate.instant('Swal_Msg.Process_Failed')}`,
          });
        }

      })
    }
  }


  vSchemecode

  schemechange(event) {

    const formVal = this.angForm.value;

    this.getschemename = event.name
    this.ngscheme = event.value
    this.vSchemecode = event.id
    this.getIntroducer()

    let obj = {
      AC_TYPE: this.ngscheme,
      BRANCH_CODE: formVal.BRANCH_CODE,
    }

    //NPA DATE
    this.http.post(this.url + '/npa-classification-master/data', obj).subscribe((data) => {
      this.glDetails = data
    })
  }
  obj: any
  getschemename: any
  startAcc
  endAcc
  //get account no according scheme for introducer
  getIntroducer() {
    this.obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          console.log(this.fromAC)
          this.ToAC = data

          this.startAcc = this.fromAC[0].bankacno
          this.endAcc = this.fromAC[this.fromAC.length - 1].bankacno
        })
        break;
      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.fromAC = data;
          this.ToAC = data
          this.startAcc = this.fromAC[0].bankacno
          this.endAcc = this.fromAC[this.fromAC.length - 1].bankacno
        })
        break
    }
  }
  accDetails: any[]



  getACmastercode() { }

  getNPAProcessData() {

    let obj = {
      "Date": null
    }

    this.http.post('http://192.168.1.185:7276/npa-classification-master/npadata', obj).subscribe((data) => {
      this.glDetails = data
      console.log(data)
    })
  }

  showDate: boolean = false
  hideDate: boolean = true
  npaProcessedDateFunction() {
    this.showDate = true
    this.hideDate = false
  }

  openModal() {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block'
    }
  }

  closeModal(): void {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }


}
