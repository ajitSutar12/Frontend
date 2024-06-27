import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import { VoucherEntryService } from '../../transaction/voucher-entry/voucher-entry.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {NumberToWordsService} from './NumberToWordsService.service';

@Component({
  selector: 'app-td-recipt-printing',
  templateUrl: './td-recipt-printing.component.html',
  styleUrls: ['./td-recipt-printing.component.scss']
})
export class TdReciptPrintingComponent implements OnInit {
  ngForm: FormGroup
  bsValue = new Date();
  BranchCode
  schemeCode
  firstno
  fromdate
  todate
  acnumber
  lastno
  scheme
  isTdsForm: boolean;
  branch_code: any;
  obj: any;
  introducerACNo: any;
  selectedBranch: any;
  narrationList: any;
  getschemename: any
  allScheme //account type for introducer
  formSubmitted = false;
  report_url = environment.report_url;
  showRepo: boolean = false;
  clicked: boolean = false;
  iframe5url: any = '';
  Scheme
  ngFnarration: any;
  schemeACNo
  transferSchemeDetails: any;
  schemeType: string = 'TD'
  city: any;
  Ncity: any;
  defaultDate: any;
  ngbranch: any;
  branchName: any;
  getbankAcNo: any;
  letterTemplate: string = ''
  // textareaWidth: number = 1300;
  fontSize: number = 24;
  url = environment.base_url;
  amountInWords: string;
  isTextareaVisible: boolean = false;
  constructor(
    private fb: FormBuilder,
    private _service: VoucherEntryService,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private savingMasterService: SavingMasterService,private numberToWordsService: NumberToWordsService,
    private _SchemeCodeDropdown: SchemeCodeDropdownService,private http: HttpClient,
    private sanitizer: DomSanitizer, private systemParameter: SystemMasterParametersService,

  ) { }

  ngOnInit(): void {
    this.createForm()
    let user = JSON.parse(localStorage.getItem('user'));
    //branchcode
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.BranchCode = user.branchId;
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.Scheme = data;
    });
    this._SchemeCodeDropdown.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'TD');
      });
      this.allScheme = filtered;
    })
    //Narration List
    this._service.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })

    //display defalut date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE;
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }
  }

  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      FIRST_NO: ['', [Validators.required]],
      // LAST_NO: ['', [Validators.required]],
      FROM_DATE: ['',],
      TO_DATE: ['',],

    });
  }

schemenm
  accdetails
  getIntro(event) {
this.schemenm=event.label
    let obj={
      "actype":event.value,
      "branch":  this.BranchCode,
    }
    this.http.post(this.url+'/term-deposits-master/getreciptacc', obj).subscribe(
      (data: any) => {
          this.introducerACNo = data;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
    this.getschemename = event.name
  }
  getIntTranscus(event) {
    this.getbankAcNo = event.bankacno
  }

 
  isReceivedTds($event) {

    if ($event.target.checked) {
      this.isTdsForm = true;

    } else {
      this.isTdsForm = false;
    }
  }

  AC_NAME
  OPDATE
AC_EXPDT
AC_DAYS
AC_MONTHS
AC_MATUAMT
AC_SCHMAMT
AC_ASON_DATE
AC_REF_RECEIPTNO
AC_NO
CITY_NAME
AC_INTRATE
AC_NNAME
  getIntTrans(event) {
    this.firstno = event.BANKACNO
    this.AC_ASON_DATE=event.AC_ASON_DATE
    this.AC_NAME=event.AC_NAME
    this.OPDATE=event.AC_OPDATE
    this.AC_EXPDT=event.AC_EXPDT
    this.AC_DAYS=event.AC_DAYS
    this.AC_MONTHS=event.AC_MONTHS
    this.AC_MATUAMT=event.AC_MATUAMT
    this.AC_SCHMAMT=event.AC_SCHMAMT
    this.AC_REF_RECEIPTNO=event.AC_REF_RECEIPTNO
    this.AC_NO=event.AC_NO
    this.CITY_NAME=event.CITY_NAME
    this.AC_INTRATE=event.AC_INTRATE
    this.AC_NNAME=event.AC_NNAME
  }  
  getIntTrans1(event) {
    this.lastno = event.BANKACNO
  }
  view() {

    // event.preventDefault();
    // this.formSubmitted = true;
    this.isTextareaVisible = true;
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.ngForm.valid) {
      let obj = this.ngForm.value
      this.showRepo = true;

      if (this.defaultDate == userData.branch.syspara.CURRENT_DATE) {
        obj['FROM_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.defaultDate).format('DD/MM/YYYY');
        let tDate = moment(date, 'DD/MM/YYYY')
        obj['FROM_DATE'] = date
      }
      let scheme = obj.AC_TYPE
      let branch = obj.BRANCH_CODE
      let firstno = this.firstno
      let lastno = this.lastno

      let AC_NAME= this.AC_NAME
      let AC_EXPDT=this.AC_EXPDT
      let OPDATE=this.OPDATE
      let AC_DAYS=this.AC_DAYS
      let AC_MONTHS=this.AC_MONTHS
      let schemenm=this.schemenm
      let AC_ASON_DATE=this.AC_ASON_DATE
      let AC_MATUAMT=this.AC_MATUAMT
      let AC_SCHMAMT=this.AC_SCHMAMT
      // let AC_REF_RECEIPTNO=this.AC_REF_RECEIPTNO
      let AC_NO=this.AC_NO
      let CITY_NAME=this.CITY_NAME
      let AC_INTRATE=this.AC_INTRATE
      let AC_NNAME=this.AC_NNAME
      let AC_REF_RECEIPTNO = this.AC_REF_RECEIPTNO ? this.AC_REF_RECEIPTNO : this.AC_NO;
      this.amountInWords = this.numberToWordsService.convertToWords(this.AC_SCHMAMT);
      this.letterTemplate = `                                                                                         
  ठेव प्रकार : ${schemenm}                     पावती नं: ${AC_REF_RECEIPTNO}                          जमा तारीख: ${OPDATE}      

  खाते नं:  ${AC_NO}                                                                   नूतनीकरण तारीख: ${AC_ASON_DATE}

                                                                                 परत फेडीची तारीख: ${AC_EXPDT}

  श्री/सौ/श्रीमती:  ${AC_NAME}                                    रा. ${CITY_NAME}            यांचेकडून 

  ठेव रक्कम रुपये ${AC_SCHMAMT}    (अक्षरी रुपये ${this.amountInWords} फक्त).

  द.सा.द.शे. ${AC_INTRATE} % व्याजदराने मुदत महिने - ${AC_MONTHS} , दिवस - ${AC_DAYS} , मुदतीने स्वीकारली आहे. 

  मुदतीनंतर मिळणारी रक्कम:  ${AC_MATUAMT}.

  वारस:  ${AC_NNAME}
                                                        
                        `;
      // console.log(this.letterTemplate);
    }


  }
  close() {
    this.resetForm()
    this.isTextareaVisible = false;


  }
  resetForm() {
    this.ngForm.controls.AC_TYPE.reset();
    this.ngForm.controls.FIRST_NO.reset();
    this.showRepo = false;
    this.clicked = false;
  }
  getBranch(event) {
    // this.getIntroducer()
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  printTextArea() {

    const printWindow = window.open();
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<pre>' + this.letterTemplate + '</pre>');
    printWindow.document.write('</body></html>');
    printWindow.print();
    printWindow.close();

    // this.showViewButton = false;
    // this.showCancelButton = true;

  }


}




