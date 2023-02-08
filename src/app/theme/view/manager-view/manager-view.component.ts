import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { NgSelectConfig } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { ManagerViewService } from './manager-view.service';
import { animate, style, transition, trigger } from '@angular/animations';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ManagerViewComponent implements OnInit {
  // variable for validation
  formSubmitted = false;
  // Created Form Group
  angForm: FormGroup;
  // branch name 
  selectedBranch: number;
  branch_codeList: any = null
  branch_code: any[]//from ownbranchmaster
  branchCode: any = null
  ngBranchCode
  // sysparadate
  date
  isture: boolean = true;
  isHidden: boolean = true;
  // variables for button
  showButton: boolean = true;
  updateShow: boolean;
  newbtnShow: boolean;
  totalAmt: string;
  iframe1url: any = '';
  report_url = environment.report_url;
  clicked = false;

  bsValue
  allpdetails: boolean = true;
  dayscrollpd: boolean = true;
  rejectpd: boolean = true;
  transferpd: boolean = true;
  cashpd: boolean = true;
  showAllPendingDetails: boolean = false;
  showDayScrollPendingDetails: boolean = false;
  showRejectedPendingDetails: boolean = false;
  showTransferPendingDetails: boolean = false;
  showCashPendingDetails: boolean = false;
  CASH_CLOSING
  TOTAL_CREDIT
  TOTAL_DEBIT
  TRANSFER_CREDIT
  TRANSFER_DEBIT
  CASH_DEBIT
  CASH_CREDIT
  CASH_OPENING
  maxDate
  value = 0.00;
  checkDate
  showRepo: boolean = false;
  url = environment.base_url;
  constructor(
    private fb: FormBuilder,
    private config: NgSelectConfig,
    private _service: ManagerViewService,
    private ownbranchMasterService: OwnbranchMasterService,
    private sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,
    private http: HttpClient,
  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      // this.maxDate = this.maxDate.subtract(1, "days");
      this.maxDate = this.maxDate._d
      this.date = data.CURRENT_DATE
      this.checkDate = data.CURRENT_DATE
    })
  }

  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      SYSPARADATE: [''],
      CASH_CREDIT: [''],
      CASH_DEBIT: [''],
      TRANSFER_CREDIT: [''],
      TRANSFER_DEBIT: [''],
      TOTAL_CREDIT: [''],
      TOTAL_DEBIT: [''],
      CASH_OPENING: [''],
      CASH_CLOSING: [''],
      NDTL_AMT: [''],
      LIQUID_ASSET: [''],
      CASH_RESERV_a: [''],
      LIQUID_ASSET_a: [''],
      CASH_RESERV_b: [''],
      LIQUID_ASSET_b: [''],
      CASH_RESERV_c: [''],
      LIQUID_ASSET_c: [''],
      CASH_RESERV: [''],
      Liquidity_ratio: [''],
      DepositeDr: [''],
      Depositeper: [''],
      BankOD: [''],
      BankODper: [''],
      Bankcurrentdr: [''],
      Bankcurrentper: [''],
      bankcdr: [''],
      bankcper: [''],
      // bankcdr: [''],
    })
  }



  ngOnInit(): void {
    this.createForm();

    //get syspara details
    this._service.getSysParaData().subscribe(data => {

      // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
      this.date = data[0].CURRENT_DATE;
      this.checkDate = data[0].CURRENT_DATE;
      console.log(this.date);
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
    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.ngBranchCode = data[0].value
    })
    this.getManagerView()
  }

  id: any = 'f1';

  accordian(ids: any) {
    if (this.id == ids) {
      this.id = '';
    }
    else {
      this.id = ids;
    }
  }



  //submit Form
  submit() {
    // debugger
    // let user   = JSON.parse(localStorage.getItem('user'));
    // let obj    = this.angForm.value;
    // obj['user']= user;
    // obj['InputHead'] = this.headData;
    // console.log(obj);

  }

  //get Amount Details
  getAmt(ele) {
    this.totalAmt = ele.target.value + '.00';
  }

  decimalAllContent($event) {
    let value = Number($event.target.value);
    let data = value.toFixed(2);
    $event.target.value = data;
  }

  AllPendingDetails($event) {
    this.allpdetails = true
    if (this.allpdetails === true) {
      this.showAllPendingDetails = true;
      this.showCashPendingDetails = false;
      this.showTransferPendingDetails = false;
      this.showRejectedPendingDetails = false;
      this.showDayScrollPendingDetails = false;
    } else {
      this.showAllPendingDetails = false;
      this.showCashPendingDetails = false;
      this.showTransferPendingDetails = false;
      this.showRejectedPendingDetails = false;
      this.showDayScrollPendingDetails = false;
    }
  }
  CashPendingDetails() {
    this.allpdetails = true
    if (this.allpdetails === true) {
      this.showCashPendingDetails = true;
      this.showAllPendingDetails = false;
      this.showTransferPendingDetails = false;
      this.showRejectedPendingDetails = false;
      this.showDayScrollPendingDetails = false;
    } else {
      this.showCashPendingDetails = false;
      this.showAllPendingDetails = false;
      this.showTransferPendingDetails = false;
      this.showRejectedPendingDetails = false;
      this.showDayScrollPendingDetails = false;
    }
  }
  TransferPendingDetails() {
    this.allpdetails = true
    if (this.allpdetails === true) {
      this.showTransferPendingDetails = true;
      this.showCashPendingDetails = false;
      this.showAllPendingDetails = false;
      this.showRejectedPendingDetails = false;
      this.showDayScrollPendingDetails = false;
    } else {
      this.showTransferPendingDetails = false;
      this.showCashPendingDetails = false;
      this.showAllPendingDetails = false;
      this.showRejectedPendingDetails = false;
      this.showDayScrollPendingDetails = false;
    }

  }
  RejectedPendingDetails() {
    this.allpdetails = true
    if (this.allpdetails === true) {
      this.showRejectedPendingDetails = true;
      this.showCashPendingDetails = false;
      this.showAllPendingDetails = false;
      this.showTransferPendingDetails = false;
      this.showDayScrollPendingDetails = false;
    } else {
      this.showRejectedPendingDetails = false;
      this.showCashPendingDetails = false;
      this.showAllPendingDetails = false;
      this.showTransferPendingDetails = false;
      this.showDayScrollPendingDetails = false;
    }
  }
  DayScrollPendingDetails() {
    this.allpdetails = true
    if (this.allpdetails === true) {
      this.showDayScrollPendingDetails = true;
      this.showCashPendingDetails = false;
      this.showAllPendingDetails = false;
      this.showTransferPendingDetails = false;
      this.showRejectedPendingDetails = false;
    } else {
      this.showDayScrollPendingDetails = false;
      this.showCashPendingDetails = false;
      this.showAllPendingDetails = false;
      this.showTransferPendingDetails = false;
      this.showRejectedPendingDetails = false;
    }

  }

  src: any;
  view(event) {

    debugger
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    let type = 'Detail';
    this.showRepo = true;

    // let Date = this.date;
    this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + this.date + "&Branch=" + this.ngBranchCode + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
    console.log(this.iframe1url);
    this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);



  }

  mangerViewDetails
  disableBtn: boolean = false
  getManagerView() {

    if (this.date != undefined) {
      let toDate = moment(this.date, 'DD/MM/YYYY')
      let expiry = moment(toDate).format('DD/MM/YYYY')
      let obj = {
        BRANCH_CODE: this.ngBranchCode,
        TRAN_DATE: expiry,
        daily: expiry == this.checkDate ? true : false
      }
      expiry == this.checkDate ? this.disableBtn = false : this.disableBtn = true
      this.http.post<any>(this.url + '/ledger-view/managerView', obj).subscribe((data) => {
        this.mangerViewDetails = data
      })
    }
  }


}
