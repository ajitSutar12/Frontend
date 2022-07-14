import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service'
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { data } from 'jquery';

@Component({
  selector: 'app-account-enquiry',
  templateUrl: './account-enquiry.component.html',
  styleUrls: ['./account-enquiry.component.scss']
})
export class AccountEnquiryComponent implements OnInit {
  angForm: FormGroup;
  formSubmitted = false;
  //api 
  url = environment.base_url;
  // dropdown variables
  ngscheme: any = null
  accountedit: any = null
  allScheme: any[]
  schemeACNo: any;
  scheme: any[];
  GLACNooption: any[];
  branch_code//from ownbranchmaster
  ngBranchCode: any = null
  // Date variables
  todate: any = null;
  fromdate: any = null
  accountOpenDate: any = null
  maxDate: any = null;
  minDate: Date;
  bsValue = new Date();
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // for grid variable declaration
  dormantac: boolean = false
  acclosedon: boolean = false
  freezeac: boolean = false
  obj: any
  getschemename: any
  bankacno
  acCloseDate
  guardianName
  jointHolderName = ''
  freezStataus
  transactions
  tableData = []
  accFromDate

  GLRecordShow: boolean = false

  isrecurringScheme: boolean = false
  REBATE_INTRATE
  idmaster
  opendate
  accountData
  overdraftAmt
  // openingBal = 1000
  // tdsAmount = 100
  // totalCloseBal = 100
  // passedAmount = 1000
  // unpassedAmt = 1000
  // overdraftInt = 10
  // payableInt = 10
  // currentInt = 10
  // penalInt = 10
  // totalInt = 10
  // intOnMonth = 10
  // intOnDays = 10
  // closingBal = 22100
  // passbookBal = 20000
  // expectedInstallment = 5
  // receivedInstallment = 4
  // dueInstallment = 1
  interestOnMonth: boolean = false
  interestOnDays: boolean = false
  isATypeMemNo: boolean = false
  isOpeningDetails: boolean = true
  isTotalProducts: boolean = false
  isPigmyDetails: boolean = false
  isAgentScheme: boolean = false
  isAgentCode: boolean = false
  isRenewalDate: boolean = false
  isLastTranDate: boolean = false
  isIntroducer: boolean = false
  isBankBranch: boolean = false
  totalProducts = 10

  previewImg: string;
  PreviewDiv: boolean = false;
  schemeCode
  customerImg: string = '../../../../assets/images/user-card/img-round4.jpg';
  signture: string = '../../../../assets/sign/signture.jpg';


  LAST_OD_DATE
  AC_NO
  nominee

  //view variables
  attorneyView: boolean = false
  nomineeView: boolean = false
  interestPaidHistoryView: boolean = false
  interestPostedHistoryView: boolean = false
  interestInstructionView: boolean = false
  intrestProjectionView: boolean = false
  payableInterestView: boolean = false
  lienInformationView: boolean = false
  tdsDetailsView: boolean = false
  productView: boolean = false
  oldDepositsView: boolean = false
  npaView: boolean = false
  jointHolderView: boolean = false
  accountInformationView: boolean = false
  documentsView: boolean = false
  customerIdView: boolean = false

  securityView: boolean = false
  interestReceivedHistoryView: boolean = false
  securityDetailsView: boolean = false
  gaurantorView: boolean = false
  receivableInterestView: boolean = false
  coborrowerView: boolean = false

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ACMasterDropdownService: ACMasterDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,) {
    var date = moment();
    date = date.subtract(1, "days");
    this.maxDate = date.format("DD/MM/YYYY");
    this.maxDate = moment(this.maxDate, 'DD/MM/YYYY')
    this.maxDate = this.maxDate._d
  }

  ngOnInit(): void {
    this.createForm()
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'AG' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'GL' || scheme.name == 'SH')
      });
      this.allScheme = allscheme;
    })

    this.schemeCodeDropdownService.getTermDepositSchemePatD().pipe(first()).subscribe(data => {
      this.allScheme.push(data)
    })
    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      DATE: ['', [Validators.required]],
    });
  }

  hideImage() {
    // document.getElementById("full").src = "";
    this.previewImg = '';
    this.PreviewDiv = false;
  }

  showImage(img) {
    var src = img;
    var largeSrc = src.replace('small', 'large');
    this.previewImg = src;
    this.PreviewDiv = true;
    // document.getElementById('full').src = largeSrc;
  }

  getBranch() {
    this.getschemename = null
    this.accountedit = null
    this.ngscheme = null
    this.accountData = null
    this.idmaster = null
    this.freezeac = false
    this.acCloseDate = null
    this.freezStataus = null
    this.dormantac = false
    this.REBATE_INTRATE = null
    this.transactionData = null
  }


  schemechange(event) {
    this.getschemename = event.name
    this.ngscheme = event.value
    this.accountData = null
    this.dormantac = false
    this.idmaster = null
    this.freezeac = false
    this.acCloseDate = null
    this.freezStataus = null
    this.schemeCode = event.id
    this.transactionData = null
    this.REBATE_INTRATE = event.rebateRate
    event.schemeMethod == 'SimpleasperSharesClosingBalance' ? this.isrecurringScheme = true : this.isrecurringScheme = false
    this.getAccountlist()
  }
  // Fetching account from seleted scheme
  getAccountlist() {
    this.accountedit = null
    this.accountData = null
    this.transactionData = null
    let obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {
      case 'SB':
        this.isLastTranDate = true
        this.isOpeningDetails = true
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = false
        this.isIntroducer = true

        //view icon show
        this.attorneyView = true
        this.interestPaidHistoryView = true
        this.interestInstructionView = true
        this.lienInformationView = true
        this.tdsDetailsView = true
        this.oldDepositsView = true
        this.jointHolderView = true
        this.interestPostedHistoryView = true
        this.payableInterestView = true
        this.productView = true
        this.nomineeView = true
        this.accountInformationView = true
        this.intrestProjectionView = true
        this.documentsView = true
        this.customerIdView = true
        this.npaView = false
        this.securityView = false
        this.interestReceivedHistoryView = false
        this.securityDetailsView = false
        this.gaurantorView = false
        this.receivableInterestView = false
        this.coborrowerView = false
        this.http.get<any>(this.url + '/saving-master/balUpdate/' + obj).subscribe((data) => {
          this.schemeACNo = data
        })
        break;
      case 'CA':
        this.isLastTranDate = true
        this.isOpeningDetails = true
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = false
        this.isIntroducer = true

        //view icon show
        this.attorneyView = true
        this.interestPaidHistoryView = true
        this.interestInstructionView = true
        this.lienInformationView = true
        this.tdsDetailsView = true
        this.oldDepositsView = true
        this.jointHolderView = true
        this.interestPostedHistoryView = true
        this.payableInterestView = true
        this.productView = true
        this.nomineeView = true
        this.accountInformationView = true
        this.intrestProjectionView = true
        this.documentsView = true
        this.customerIdView = true
        this.npaView = false
        this.securityView = false
        this.interestReceivedHistoryView = false
        this.securityDetailsView = false
        this.gaurantorView = false
        this.receivableInterestView = false
        this.coborrowerView = false
        this.http.get<any>(this.url + '/current-account-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'AG':
        this.isLastTranDate = true
        this.isOpeningDetails = true
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = false
        this.isIntroducer = true

        //view icon show
        this.attorneyView = true
        this.interestPaidHistoryView = true
        this.interestInstructionView = true
        this.lienInformationView = true
        this.tdsDetailsView = true
        this.oldDepositsView = true
        this.jointHolderView = true
        this.interestPostedHistoryView = true
        this.payableInterestView = true
        this.productView = true
        this.nomineeView = true
        this.accountInformationView = true
        this.intrestProjectionView = true
        this.documentsView = true
        this.customerIdView = true
        this.npaView = false
        this.securityView = false
        this.interestReceivedHistoryView = false
        this.securityDetailsView = false
        this.gaurantorView = false
        this.receivableInterestView = false
        this.coborrowerView = false
        this.http.get<any>(this.url + '/pigmy-agent-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'GS':
        //view icon show
        this.attorneyView = true
        this.interestPaidHistoryView = true
        this.interestInstructionView = true
        this.lienInformationView = true
        this.tdsDetailsView = true
        this.oldDepositsView = true
        this.jointHolderView = true
        this.interestPostedHistoryView = true
        this.payableInterestView = true
        this.productView = true
        this.nomineeView = true
        this.accountInformationView = true
        this.intrestProjectionView = true
        this.documentsView = true
        this.customerIdView = true
        this.npaView = false
        this.securityView = false
        this.interestReceivedHistoryView = false
        this.securityDetailsView = false
        this.gaurantorView = false
        this.receivableInterestView = false
        this.coborrowerView = false
        this.http.get<any>(this.url + '/anamat-gsm/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'PG':
        this.isOpeningDetails = false
        this.isPigmyDetails = true
        this.isRenewalDate = true
        this.isATypeMemNo = false
        this.isBankBranch = false
        this.isIntroducer = true

        //view icon show
        this.attorneyView = true
        this.interestPaidHistoryView = true
        this.interestInstructionView = true
        this.lienInformationView = true
        this.tdsDetailsView = true
        this.oldDepositsView = false
        this.jointHolderView = true
        this.interestPostedHistoryView = true
        this.payableInterestView = true
        this.productView = true
        this.nomineeView = true
        this.accountInformationView = true
        this.intrestProjectionView = true
        this.documentsView = true
        this.customerIdView = true
        this.npaView = false
        this.securityView = false
        this.interestReceivedHistoryView = false
        this.securityDetailsView = false
        this.gaurantorView = false
        this.receivableInterestView = false
        this.coborrowerView = false
        this.http.get<any>(this.url + '/pigmy-account-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'TD':
        this.isLastTranDate = true
        this.isOpeningDetails = true
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = false
        this.isIntroducer = true

        //view icon show
        this.attorneyView = true
        this.interestPaidHistoryView = true
        this.interestInstructionView = true
        this.lienInformationView = true
        this.tdsDetailsView = true
        this.oldDepositsView = true
        this.jointHolderView = true
        this.interestPostedHistoryView = true
        this.payableInterestView = true
        this.productView = true
        this.nomineeView = true
        this.accountInformationView = true
        this.intrestProjectionView = true
        this.documentsView = true
        this.customerIdView = true
        this.npaView = false
        this.securityView = false
        this.interestReceivedHistoryView = false
        this.securityDetailsView = false
        this.gaurantorView = false
        this.receivableInterestView = false
        this.coborrowerView = false
        this.http.get<any>(this.url + '/term-deposits-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'LN':
        //view icon show
        this.attorneyView = false
        this.interestPaidHistoryView = false
        this.interestInstructionView = true
        this.lienInformationView = true
        this.tdsDetailsView = false
        this.oldDepositsView = false
        this.jointHolderView = false
        this.interestPostedHistoryView = true
        this.payableInterestView = false
        this.productView = true
        this.nomineeView = false
        this.accountInformationView = true
        this.intrestProjectionView = true
        this.documentsView = true
        this.customerIdView = true
        this.npaView = false
        this.securityView = true
        this.interestReceivedHistoryView = true
        this.securityDetailsView = true
        this.gaurantorView = true
        this.receivableInterestView = true
        this.coborrowerView = true
        this.http.get<any>(this.url + '/term-loan-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'DS':
        this.http.get<any>(this.url + '/dispute-loan-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'CC':
        //view icon show
        this.attorneyView = false
        this.interestPaidHistoryView = false
        this.interestInstructionView = true
        this.lienInformationView = true
        this.tdsDetailsView = false
        this.oldDepositsView = false
        this.jointHolderView = false
        this.interestPostedHistoryView = true
        this.payableInterestView = false
        this.productView = true
        this.nomineeView = false
        this.accountInformationView = true
        this.intrestProjectionView = true
        this.documentsView = true
        this.customerIdView = true
        this.npaView = false

        this.securityView = true
        this.interestReceivedHistoryView = true
        this.securityDetailsView = true
        this.gaurantorView = true
        this.receivableInterestView = true
        this.coborrowerView = true
        this.http.get<any>(this.url + '/cash-credit-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'SH':
        //view icon show
        this.attorneyView = false
        this.interestPaidHistoryView = false
        this.interestInstructionView = false
        this.lienInformationView = false
        this.tdsDetailsView = false
        this.oldDepositsView = false
        this.jointHolderView = false
        this.interestPostedHistoryView = false
        this.payableInterestView = false
        this.productView = true
        this.nomineeView = true
        this.accountInformationView = true
        this.intrestProjectionView = false
        this.documentsView = true
        this.customerIdView = true
        this.npaView = false
        this.securityView = false
        this.interestReceivedHistoryView = false
        this.securityDetailsView = false
        this.gaurantorView = false
        this.receivableInterestView = false
        this.coborrowerView = false
        this.http.get<any>(this.url + '/share-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
      case 'GL':
        //view icon show
        this.attorneyView = false
        this.interestPaidHistoryView = false
        this.interestInstructionView = false
        this.lienInformationView = false
        this.tdsDetailsView = false
        this.oldDepositsView = false
        this.jointHolderView = false
        this.interestPostedHistoryView = false
        this.payableInterestView = false
        this.productView = false
        this.nomineeView = false
        this.accountInformationView = false
        this.intrestProjectionView = false
        this.documentsView = false
        this.customerIdView = false
        this.npaView = false
        this.securityView = false
        this.interestReceivedHistoryView = false
        this.securityDetailsView = false
        this.gaurantorView = false
        this.receivableInterestView = false
        this.coborrowerView = false
        this.http.get<any>(this.url + '/gl-account-master/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        this.GLRecordShow = true
        break;
      case 'IV':
        this.isLastTranDate = true
        this.isOpeningDetails = true
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = true
        this.isIntroducer = false

        //view icon show
        this.attorneyView = true
        this.interestPaidHistoryView = true
        this.interestInstructionView = true
        this.lienInformationView = true
        this.tdsDetailsView = true
        this.oldDepositsView = false
        this.jointHolderView = true
        this.interestPostedHistoryView = true
        this.payableInterestView = true
        this.productView = true
        this.nomineeView = true
        this.accountInformationView = true
        this.intrestProjectionView = true
        this.documentsView = true
        this.customerIdView = true
        this.npaView = false
        this.securityView = false
        this.interestReceivedHistoryView = false
        this.securityDetailsView = false
        this.gaurantorView = false
        this.receivableInterestView = false
        this.coborrowerView = false
        this.http.get<any>(this.url + '/investment/balUpdate/' + obj).subscribe(data => {
          this.schemeACNo = data
        })
        break;
    }
  }

  accountEvent
  introducerName
  //get account details
  getAccountDetails(event) {
    this.accountEvent = event
    if (this.getschemename == 'GL') {
      this.accountData = null
      this.transactionData = null
    }
    else {
      console.log('element', event)
      this.accountData = event
      this.GLRecordShow = false
      this.tableData = []
      this.transactions = null
      this.transactionData = null
      this.dormantac = event.IS_DORMANT
      this.guardianName = event.AC_GRDNAME
      this.opendate = event.AC_OPDATE
      this.bankacno = event.BANKACNO
      this.customerID = event.idmasterID
      this.AC_NO = event.AC_NO
      this.LAST_OD_DATE = event.LAST_OD_DATE
      this.nominee = event?.nomineeDetails
      event?.jointAccounts?.forEach((element, index) => {
        if (index == 0) {
          this.jointHolderName = element.JOINT_ACNAME
        }
        else {
          this.jointHolderName = this.jointHolderName + '/' + element.JOINT_ACNAME
        }
      });
      this.idmaster = event.idmaster
      this.overdraftAmt = Number(event.AC_ODAMT)
      this.acclosedon = event.acClose == null || event.acClose == '' ? false : true
      this.acCloseDate = event.AC_CLOSEDT == null || event.AC_CLOSEDT == '' ? null : event.AC_CLOSEDT
      this.freezeac = event.AC_FREEZE_STATUS == null || event.AC_FREEZE_STATUS == '' ? false : true
      this.freezStataus = event.AC_FREEZE_STATUS == null || event.AC_FREEZE_STATUS == '' ? '' : event.AC_FREEZE_STATUS
      let maturedAmount = Number(event.autoMaturedPayableAmt) + Number(event.autoMaturedIntrestAmt)
      this.angForm.patchValue({
        AC_CLOSEDT: event.closeDate,
        AMOUNT: maturedAmount,
      })
      this.accountOpenDate = moment(event.opendate, 'DD/MM/YYYY')
      this.accountOpenDate = this.accountOpenDate._d
    }
  }

  transactionData
  GLtransactionData
  customerID

  getTransactionDetails() {
    let obj = {
      scheme: this.schemeCode,
      bankacno: this.bankacno,
      date: moment(this.angForm.controls['DATE'].value).format('DD/MM/YYYY'),
      AC_ACNOTYPE: this.getschemename,
      AC_TYPE: this.ngscheme,
      LAST_OD_DATE: this.LAST_OD_DATE,
      AC_NO: this.AC_NO,
      pigmyAgent: this.accountData?.PIGMY_ACTYPE,
      shareActype: this.accountData?.idmaster?.AC_MEMBTYPE,
      shareAcno: this.accountData?.idmaster?.AC_MEMBNO
    }
    this.http.post<any>(this.url + '/ledger-view/accountView', obj).subscribe((data) => {
      if (this.getschemename == 'GL') {
        this.accountData = null
        this.transactionData = null
        this.GLtransactionData = data
        console.log(this.GLtransactionData, 'gl tran data')
      }
      else {
        this.transactionData = data
        this.PIGMY_ACTYPE = data.pigmyScheme
        this.introducerName = data.introducer
        console.log(this.transactionData, 'com tran data')
      }
    })
  }
  PIGMY_ACTYPE
  productName = ''
  oldDepositArr = []
  tdsDeatilsArr = []
  lienInfoArr = []
  payableInterestArr = []
  interestInstructionArr = []
  interestPostedHistoryArr = []
  customerIDArr = []
  goldsilverArr = []
  productViewArr = []
  accountInfoArr = []
  IsJointView: boolean = false
  IsNomineeView: boolean = false
  IsAttorneyView: boolean = false
  IsGuaranterView: boolean = false
  IsCoborrowerView: boolean = false
  IsOldDepositsView: boolean = false
  IsTDSDetailsView: boolean = false
  IsDocumentView: boolean = false
  IsPayableInterestView: boolean = false
  IsInterestInstructionView: boolean = false
  IsInterestPostedHistoryView: boolean = false
  IsCustomerIDView: boolean = false
  IsGoldSilverView: boolean = false
  IsLienInformationView: boolean = false
  IsProductView: boolean = false
  IsAccountInfoView: boolean = false
  IsLedgerView: boolean = false

  viewView(view) {
    if (view == 'joints') {
      this.IsJointView = true
      this.IsLedgerView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsTDSDetailsView = false
      this.IsOldDepositsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsProductView = false
      this.IsAccountInfoView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.customerIDArr = []
      this.interestPostedHistoryArr = []
      this.interestInstructionArr = []
      this.payableInterestArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.accountInfoArr = []
    }
    else if (view == 'nominee') {
      this.IsJointView = false
      this.IsLedgerView = false
      this.IsNomineeView = true
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsAccountInfoView = false
      this.IsProductView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.customerIDArr = []
      this.interestPostedHistoryArr = []
      this.interestInstructionArr = []
      this.payableInterestArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.accountInfoArr = []
    }
    else if (view == 'attorney') {
      this.IsJointView = false
      this.IsLedgerView = false
      this.IsNomineeView = false
      this.IsAttorneyView = true
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsAccountInfoView = false
      this.IsProductView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.customerIDArr = []
      this.interestPostedHistoryArr = []
      this.interestInstructionArr = []
      this.payableInterestArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.accountInfoArr = []
    }
    else if (view == 'guaranter') {
      this.IsJointView = false
      this.IsLedgerView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = true
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsAccountInfoView = false
      this.IsProductView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.customerIDArr = []
      this.interestPostedHistoryArr = []
      this.interestInstructionArr = []
      this.payableInterestArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.accountInfoArr = []
    }
    else if (view == 'coborrower') {
      this.IsJointView = false
      this.IsLedgerView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = true
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsAccountInfoView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsProductView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.customerIDArr = []
      this.interestPostedHistoryArr = []
      this.interestInstructionArr = []
      this.payableInterestArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.accountInfoArr = []
    }
    else if (view == 'document') {
      this.IsJointView = false
      this.IsLedgerView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = true
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsProductView = false
      this.IsAccountInfoView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.customerIDArr = []
      this.interestPostedHistoryArr = []
      this.interestInstructionArr = []
      this.payableInterestArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.accountInfoArr = []
    }
    else if (view == 'oldDeposits') {
      this.IsJointView = false
      this.IsLedgerView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsTDSDetailsView = false
      this.IsOldDepositsView = true
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsProductView = false
      this.IsAccountInfoView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.customerIDArr = []
      this.interestPostedHistoryArr = []
      this.interestInstructionArr = []
      this.payableInterestArr = []
      this.tdsDeatilsArr = []
      this.accountInfoArr = []
      this.http.get<any>(this.url + '/ledger-view/oldDepositView/' + this.bankacno).subscribe((data) => {
        this.oldDepositArr = data
      })
    }
    else if (view == 'tdsDetail') {
      this.IsJointView = false
      this.IsNomineeView = false
      this.IsLedgerView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = true
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsAccountInfoView = false
      this.IsProductView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.customerIDArr = []
      this.interestPostedHistoryArr = []
      this.interestInstructionArr = []
      this.payableInterestArr = []
      this.oldDepositArr = []
      this.accountInfoArr = []
      this.http.get<any>(this.url + '/ledger-view/tdsDetailsView/' + this.bankacno).subscribe((data) => {
        this.tdsDeatilsArr = data
      })
    }
    else if (view == 'payableInterest') {
      this.IsJointView = false
      this.IsLedgerView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = true
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsAccountInfoView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsProductView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.customerIDArr = []
      this.interestPostedHistoryArr = []
      this.interestInstructionArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.accountInfoArr = []
      let obj = [
        this.getschemename,
        this.bankacno
      ]
      this.http.get<any>(this.url + '/ledger-view/payableInterestView/' + obj).subscribe((data) => {
        this.payableInterestArr = data
      })
    }
    else if (view == 'interestPostedHistory') {
      this.IsJointView = false
      this.IsLedgerView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = true
      this.IsAccountInfoView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsProductView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.customerIDArr = []
      this.payableInterestArr = []
      this.interestInstructionArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.accountInfoArr = []
      let obj = [
        this.getschemename,
        this.bankacno
      ]
      this.http.get<any>(this.url + '/ledger-view/interestPostedHistoryView/' + obj).subscribe((data) => {
        this.interestPostedHistoryArr = data
      })
    }
    else if (view == 'interestInstructions') {
      this.IsJointView = false
      this.IsLedgerView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = true
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsAccountInfoView = false
      this.IsProductView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.customerIDArr = []
      this.interestPostedHistoryArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.accountInfoArr = []
      this.payableInterestArr = []
      let obj = [
        this.ngscheme,
        this.AC_NO
      ]
      this.http.get<any>(this.url + '/ledger-view/interestInstructionView/' + obj).subscribe((data) => {
        this.interestInstructionArr = data
      })
    }
    else if (view == 'goldsilver') {
      this.IsJointView = false
      this.IsNomineeView = false
      this.IsLedgerView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = true
      this.IsAccountInfoView = false
      this.IsLienInformationView = false
      this.IsProductView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.customerIDArr = []
      this.interestPostedHistoryArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.payableInterestArr = []
      this.interestInstructionArr = []
      this.accountInfoArr = []
      let obj = [
        this.ngscheme,
        this.AC_NO
      ]
      this.http.get<any>(this.url + '/ledger-view/goldsilverView/' + obj).subscribe((data) => {
        this.goldsilverArr = data
      })
    }
    else if (view == 'lienInfo') {
      this.IsJointView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsLedgerView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsAccountInfoView = false
      this.IsLienInformationView = true
      this.IsProductView = false
      this.productViewArr = []
      this.goldsilverArr = []
      this.customerIDArr = []
      this.interestPostedHistoryArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.accountInfoArr = []
      this.payableInterestArr = []
      this.interestInstructionArr = []
      let obj = [
        this.ngscheme,
        this.AC_NO
      ]
      this.http.get<any>(this.url + '/ledger-view/lienInformaionView/' + obj).subscribe((data) => {
        this.lienInfoArr = data
      })
    }
    else if (view == 'productview') {
      this.IsJointView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsAccountInfoView = false
      this.IsLedgerView = false
      this.IsProductView = true
      this.customerIDArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.interestInstructionArr = []
      this.interestPostedHistoryArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.payableInterestArr = []
      this.accountInfoArr = []
      if (this.getschemename == 'PG') {
        this.productName = 'Pigmy'
      }
      else if (this.getschemename == 'IV') {
        this.productName = 'Investment'
      }
      else if (this.getschemename == 'SB') {
        this.productName = 'Saving'
      }
      else if (this.getschemename == 'LN' || this.getschemename == 'CC') {
        this.productName = 'Loan'
      }
      else {
        this.productName = ''
      }
      this.productViewArr = this.transactionData.productView
      // this.productViewArr = [
      //   {
      //     "Tran_date": "30/09/2022",
      //     "SchemeType": "TD",
      //     "SchemeCode": 40,
      //     "AcNO": 101101201211018,
      //     "days": 9678,
      //     "product": 9687678,
      //     "intrate": "11",
      //     "amount": 2919.57,
      //     "var1": 0,
      //     "var2": 0,
      //     "var3": 0
      //   },
      //   {
      //     "SchemeType": "LN",
      //     "SchemeCode": 410,
      //     "AcNO": 101101201211018,
      //     "days": 100,
      //     "product": 1456,
      //     "intrate": "11",
      //     "amount": 2919.57,
      //     "var1": 1,
      //     "Tran_date": "30/09/2021",
      //     "var2": 2,
      //     "var3": 3
      //   },
      // ]
      console.log(this.productViewArr, 'product arr')
    }
    else if (view == 'accountInfo') {
      this.IsJointView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsLedgerView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsAccountInfoView = true
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsProductView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.interestInstructionArr = []
      this.interestPostedHistoryArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.payableInterestArr = []
      this.idmaster.custAddress.forEach(element => {
        if (element.AC_ADDTYPE == 'P')
          this.accountInfoArr.push(element)
      });
      this.accountInfoArr[0]['AC_PHONE_RES'] = this.idmaster.AC_PHONE_RES
      this.accountInfoArr[0]['AC_PHONE_OFFICE'] = this.idmaster.AC_PHONE_OFFICE
    }
    else if (view == 'ledgerView') {
      this.IsJointView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsAccountInfoView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsProductView = false
      this.IsLedgerView = true
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.interestInstructionArr = []
      this.interestPostedHistoryArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.payableInterestArr = []
      this.accountInfoArr = []
      let year = this.fromdate.getFullYear()
      year = year - 1
      this.accFromDate = moment(`01/04/${year}`, 'DD/MM/YYYY')
      this.accFromDate = this.accFromDate._d
    }
    else if (view == 'customerID') {
      this.IsJointView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = true
      this.IsAccountInfoView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsProductView = false
      this.IsLedgerView = false
      this.productViewArr = []
      this.lienInfoArr = []
      this.goldsilverArr = []
      this.interestInstructionArr = []
      this.interestPostedHistoryArr = []
      this.oldDepositArr = []
      this.tdsDeatilsArr = []
      this.accountInfoArr = []
      this.payableInterestArr = []
      let obj = [
        this.customerID,
        this.angForm.controls['DATE'].value,
      ]
      this.http.get<any>(this.url + '/ledger-view/customerIdView/' + obj).subscribe((data) => {
        this.customerIDArr = data
      })
    }
  }
  selectedImagePreview: any;
  documentUrl = this.url + '/'

  viewImagePreview(ele, id) {
    this.selectedImagePreview = id;
  }

}
