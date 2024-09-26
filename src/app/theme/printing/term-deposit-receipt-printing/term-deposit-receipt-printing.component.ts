import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { VoucherEntryService } from '../../transaction/voucher-entry/voucher-entry.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

import { ReportFrameComponent } from "../../reports/report-frame/report-frame.component";
import { HttpClient } from '@angular/common/http';
import { TranslateService } from "@ngx-translate/core";




@Component({
  selector: 'app-term-deposit-receipt-printing',
  templateUrl: './term-deposit-receipt-printing.component.html',
  styleUrls: ['./term-deposit-receipt-printing.component.scss']
})
export class TermDepositReceiptPrintingComponent implements OnInit {
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;

  @ViewChild(ReportFrameComponent) child: ReportFrameComponent;

  //for Formgroup
  ngForm: FormGroup

  bsValue = new Date();

  //ngModel
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
  SAPPL: any;
  receiptAmt: any;
  ledgerBalance: number;
  setLang: any;
  result
  constructor(
    private fb: FormBuilder,
    private _service: VoucherEntryService,

    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private savingMasterService: SavingMasterService,
    private _SchemeCodeDropdown: SchemeCodeDropdownService,
    private sanitizer: DomSanitizer, private systemParameter: SystemMasterParametersService,
    private http: HttpClient,
    private translate: TranslateService


  ) { }

  ngOnInit(): void {
    this.createForm()

    let user = JSON.parse(localStorage.getItem('user'));

    //branchcode
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.BranchCode = user.branchId;
    })

    // this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
    //   this.scheme = data


    //   this.schemeCode = data[0].value
    //   this.getIntroducer()

    // })

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
     this.result = JSON.parse(data);
    if (this.result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = this.result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.branchName = this.result.branch.NAME

      //Translation
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = this.result.branch.id
      this.branchName = this.result.branch.NAME
      this.BranchCode = this.result.branch.CODE

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



  getIntro(event) {
    this.getschemename = event.name
    this.SAPPL = event.id


    this.getIntroducer()

  }
  getIntTranscus(event) {
    this.getbankAcNo = event.bankacno
  }

  //get account no according scheme for introducer
  getIntroducer() {
    this.obj = [this.schemeCode, this.BranchCode,]
    switch (this.getschemename) {
      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;

        })
        break;

    }
  }
  isReceivedTds($event) {

    if ($event.target.checked) {
      this.isTdsForm = true;

    } else {
      this.isTdsForm = false;
    }
  }

  getNarration(ele) {
    this.ngFnarration = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }
  getIntTrans(event) {
    this.firstno = event.BANKACNO
    this.receiptAmt = event.AC_SCHMAMT

  }
  getIntTrans1(event) {
    this.lastno = event.BANKACNO
  }
  
  iframeVisible: boolean = false;
  view(event): void {
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.ngForm.valid) {
      let obj = this.ngForm.value;
      this.showRepo = true;

      if (this.defaultDate === userData.branch.syspara.CURRENT_DATE) {
        obj['FROM_DATE'] = userData.branch.syspara.CURRENT_DATE;
      } else {
        let date = moment(this.defaultDate).format('DD/MM/YYYY');
        obj['FROM_DATE'] = date;
      }

      let scheme = this.getschemename;
      let branch = obj.BRANCH_CODE;

      let firstno = this.firstno;
      let lastno = this.lastno;

      // Call the API to get ledger balance
      let obj1 = {
        scheme: this.SAPPL,
        acno: this.firstno,
        date: obj.FROM_DATE,
        branch: this.result.RoleDefine[0].Role.id == 1 ? obj.BRANCH_CODE : this.BranchCode, 

      }

      this._service.getledgerbalance(obj1).subscribe(data => {
        this.ledgerBalance = Math.abs(data);
        console.log("Ledger Balance", this.ledgerBalance);
        let depositAmount = parseInt(this.receiptAmt.replace(/\.\d+$/, ''), 10);

        if (this.ledgerBalance === depositAmount) {
          this.iframe5url = this.report_url + "examples/TDReceiptPrint.php/?&Date='" + obj.FROM_DATE + "'&scheme='" + scheme + "'&branchname='" + branchName + "'&BRANCH_CODE='" + branch + "'&Bankname='" + bankName + "'&AC_ACNOTYPE='" + scheme + "'&BANKACNO1='" + firstno + "'&BANKACNO2='" + lastno + "'";
          console.log(this.iframe5url);
          this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
          this.iframeVisible = true;
        } else {
          Swal.fire('Warning!', 'Deposit amount and ledger balance do not match!', 'warning').then(() => {
            this.clicked = false;
          });
          this.iframeVisible = false;
        }
      },
        (error) => {
          console.error("Error fetching ledger balance", error);
        }
      );
    } else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => {
        this.clicked = false;
      });
    }
  }

  close() {
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.ngForm.controls.AC_TYPE.reset();
    this.showRepo = false;
    this.clicked = false;
  }
  getBranch(event) {
    this.getIntroducer()
    this.ngbranch = event.value
    this.branchName = event.branchName
  }


}




