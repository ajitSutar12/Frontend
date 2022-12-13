import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { CustomerIdService } from '../../master/customer/customer-id/customer-id.service'
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { NgSelectComponent } from '@ng-select/ng-select';

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
  ShareRecordShow: boolean = false
  isrecurringScheme: boolean = false
  loanSchemeShow: boolean = false
  REBATE_INTRATE
  idmaster
  opendate
  accountData
  overdraftAmt = null
  interestOnMonth: boolean = false
  interestOnDays: boolean = false
  isATypeMemNo: boolean = false
  isOpeningDetails: boolean = false
  isMemberDetails: boolean = false
  isTotalProducts: boolean = false
  isPigmyDetails: boolean = false
  isloanDetails: boolean = false
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
  customerImg = 'assets/images/nouser.png';
  signture = 'assets/images/nosignature.png';


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
  accountEvent
  leftMonth
  introducerName
  totalInterest = 0
  constructor(private fb: FormBuilder,
    private _CustomerIdService: CustomerIdService,
    private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,) {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate.subtract(1, "days");
      this.maxDate = this.maxDate._d
    })
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
  current_date
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: ['', [Validators.required]],
      DATE: ['', [Validators.required]],
    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngBranchCode = result.branch.id
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }
    this.systemParameter.getFormData(1).subscribe(data => {
      this.current_date = data.CURRENT_DATE
      this.angForm.patchValue({
        DATE: this.maxDate
      })
    })
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
    this.REBATE_INTRATE = 0
    this.transactionData = null
  }

  schemechange(event) {
    this.schemeACNo = null
    this.accountedit = null
    this.getschemename = event.name
    this.ngscheme = event.value
    this.accountData = null
    this.customerImg = 'assets/images/nouser.png';
    this.signture = 'assets/images/nosignature.png'
    this.dormantac = false
    this.idmaster = null
    this.freezeac = false
    this.acCloseDate = null
    this.freezStataus = null
    this.schemeCode = event.id
    this.transactionData = null
    this.REBATE_INTRATE = event.rebateRate == undefined ? 0 : Number(event.rebateRate)
    this.IsLedgerView = false
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
        this.isMemberDetails = false
        this.isPigmyDetails = false
        this.isloanDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = false
        this.isIntroducer = true

        //view icon show
        this.attorneyView = true
        this.interestPaidHistoryView = false
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
        this.isMemberDetails = false
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isloanDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = false
        this.isIntroducer = true

        //view icon show
        this.attorneyView = true
        this.interestPaidHistoryView = false
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
        this.isMemberDetails = false
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isloanDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = false
        this.isIntroducer = true

        //view icon show
        this.attorneyView = true
        this.interestPaidHistoryView = false
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
        this.interestPaidHistoryView = false
        this.isMemberDetails = false
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
        this.isMemberDetails = false
        this.isPigmyDetails = true
        this.isloanDetails = false
        this.isRenewalDate = true
        this.isATypeMemNo = false
        this.isBankBranch = false
        this.isIntroducer = true

        //view icon show
        this.attorneyView = true
        this.interestPaidHistoryView = false
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
        this.isMemberDetails = false
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isloanDetails = false
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
        this.isOpeningDetails = false
        this.isMemberDetails = false
        this.isPigmyDetails = false
        this.isloanDetails = true
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
        this.isloanDetails = true
        this.isOpeningDetails = false
        this.isMemberDetails = false
        this.isPigmyDetails = false
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
        this.isMemberDetails = true
        this.isOpeningDetails = false
        this.isPigmyDetails = false
        this.isloanDetails = false
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
        this.isloanDetails = false
        this.isMemberDetails = false
        this.isOpeningDetails = false
        this.isPigmyDetails = false
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
        this.ShareRecordShow = false
        break;
      case 'IV':
        this.isLastTranDate = true
        this.isOpeningDetails = true
        this.isMemberDetails = false
        this.isATypeMemNo = true
        this.isPigmyDetails = false
        this.isloanDetails = false
        this.isRenewalDate = false
        this.interestOnDays = true
        this.interestOnMonth = true
        this.isBankBranch = true
        this.isIntroducer = false

        //view icon show
        this.attorneyView = true
        this.interestPaidHistoryView = false
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

  //get account details
  getAccountDetails(event) {
    this.accountEvent = event
    this.customerIDArr = null
    console.log('accountEvent?.AC_MEMBNO', this.accountEvent?.AC_MEMBNO)
    this.accountData = event
    this.IsLedgerView = false
    if (this.getschemename == 'GL') {
      this.accountData = null
      this.transactionData = null
      this.loanSchemeShow = false
      this.ShareRecordShow = false
      this.AC_NO = event.AC_NO
    }
    else {
      if (this.getschemename == 'SH') {
        this.ShareRecordShow = true
        if (this.accountEvent.AC_RETIRE_DATE != null && this.accountEvent.AC_RETIRE_DATE != '' && this.accountEvent.AC_RETIRE_DATE != 'Invalid date') {
          this.http.get(this.url + '/system-master-parameters/' + 1).subscribe(data => {
            let retireDate = moment(this.accountEvent.AC_RETIRE_DATE, "DD/MM/YYYY");
            let sysparaCurrentDate = moment(data['CURRENT_DATE'], "DD/MM/YYYY");
            this.leftMonth = retireDate.diff(sysparaCurrentDate, 'months');
          })
        }
        else {
          this.leftMonth = 0
        }
      }
      else if (this.getschemename == 'LN' || this.getschemename == 'CC') {
        this.loanSchemeShow = true
        this.ShareRecordShow = false
        this.accountData = null
        this.transactionData = null
        this.leftMonth = 0
        this.http.get(this.url + '/system-master-parameters/' + 1).subscribe(data => {
          let date = this.accountEvent.AC_OPEN_OLD_DATE == '' || this.accountEvent.AC_OPEN_OLD_DATE == null ? moment(this.accountEvent.AC_SANCTION_DATE, "DD/MM/YYYY") : moment(this.accountEvent.AC_OPEN_OLD_DATE, "DD/MM/YYYY")
          let sysparaCurrentDate = moment(data['CURRENT_DATE'], "DD/MM/YYYY");
          this.accountEvent['totalInstallment'] = sysparaCurrentDate.diff(date, 'months');
        })
      }
      else {
        this.loanSchemeShow = false
        this.ShareRecordShow = false
        this.leftMonth = 0
      }
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
      let periodOverdraft = event.AC_SODAMT == undefined || event.AC_SODAMT == null ? 0 : Number(event.AC_SODAMT)
      let tempOverdraft = event.AC_ODAMT == undefined || event.AC_ODAMT == null ? 0 : Number(event.AC_ODAMT)
      let overdraftAmount = periodOverdraft + tempOverdraft
      this.overdraftAmt = overdraftAmount
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
      this._CustomerIdService.getFormData(this.idmaster.id).subscribe(data => {
        if (data.custdocument.length != 0) {
          data.custdocument.forEach(element => {
            if (element.DocumentMasterID == 1) {
              this.customerImg = this.url + '/' + element.PATH;
            }
            if (element.DocumentMasterID == 2) {
              this.signture = this.url + '/' + element.PATH;
            }

          });


        } else {
          this.customerImg = 'assets/images/nouser.png';
          this.signture = 'assets/images/nosignature.png'
        }
      })

    }
  }

  transactionData
  GLtransactionData
  SHtransactionData
  loantransactionData
  customerID
  divtransferScheme = null
  divtransferName = null
  openingNumberShares = 0
  numberofshares = 0
  loanTotalInterest = 0
  loanTotalReceivable = 0
  rebateIntrest = 0

  getTransactionDetails() {
    if (this.accountedit != null && this.fromdate != null && this.fromdate != '') {
      let obj = {
        scheme: this.schemeCode,
        bankacno: this.bankacno,
        date: this.current_date == this.fromdate ? this.current_date : moment(this.angForm.controls['DATE'].value).format('DD/MM/YYYY'),
        AC_ACNOTYPE: this.getschemename,
        AC_TYPE: this.ngscheme,
        LAST_OD_DATE: this.LAST_OD_DATE,
        AC_NO: this.AC_NO,
        pigmyAgent: this.accountEvent?.PIGMY_ACTYPE,
        shareActype: this.accountEvent?.idmaster?.AC_MEMBTYPE,
        shareAcno: this.accountEvent?.idmaster?.AC_MEMBNO,
        divtransferscheme: this.accountEvent?.DIV_TRANSFER_ACNOTYPE,
        divtransferactype: this.accountEvent?.DIV_TRANSFER_ACTYPE,
        divtransferacno: this.accountEvent?.DIV_TRANSFER_ACNO,
        divtransferBranch: this.accountEvent?.DIV_TRANSFER_BRANCH,
        installmentAmount: this.accountEvent?.AC_INSTALLMENT
      }
      this.http.post<any>(this.url + '/ledger-view/accountView', obj).subscribe((data) => {
        if (this.getschemename == 'GL') {
          this.accountData = null
          this.transactionData = null
          this.SHtransactionData = null
          this.loantransactionData = null
          this.GLtransactionData = data
          this.GLRecordShow = true
          this.loanSchemeShow = false
          this.ShareRecordShow = false
        }
        else if (this.getschemename == 'SH') {
          this.GLtransactionData = null
          this.loantransactionData = null
          this.SHtransactionData = data
          this.transactionData = null
          this.loanSchemeShow = false
          this.GLRecordShow = false
          this.ShareRecordShow = true
          this.divtransferScheme = data.divtransferScheme
          this.divtransferName = data.divtransferCode
          let facevalue = this.accountData.shareMaster.SHARES_FACE_VALUE == undefined || this.accountData.shareMaster.SHARES_FACE_VALUE == null ? 0 : Number(this.accountData.shareMaster.SHARES_FACE_VALUE)
          let openingBalance = Number(this.SHtransactionData.openingBal)
          let shareAmount = Number(this.SHtransactionData.passedAmount)
          facevalue == 0 ? this.openingNumberShares = 0 : this.openingNumberShares = Math.floor(openingBalance / facevalue);
          facevalue == 0 ? this.numberofshares = 0 : this.numberofshares = Math.floor(shareAmount / facevalue);
        }
        else if (this.getschemename == 'LN' || this.getschemename == 'CC') {
          this.accountData = null
          this.loanSchemeShow = true
          this.ShareRecordShow = false
          this.GLRecordShow = false
          this.transactionData = null
          this.SHtransactionData = null
          this.loantransactionData = data
          this.GLtransactionData = null
          this.totalInterest = Number(this.accountEvent.AC_INSTALLMENT) + Number(this.loantransactionData.currentInt)
          this.loanTotalInterest = Number(this.loantransactionData.penalInt) + Number(this.loantransactionData.receiveablePenal) + Number(this.loantransactionData.overdueInt) + Number(this.loantransactionData.payableInt) + Number(this.loantransactionData.currentInt)
          this.loanTotalReceivable = Number(this.loanTotalInterest) + Number(this.loantransactionData.otherReceivedAmount) + Number(this.loantransactionData.totalClosingBalforLoan)
          this.loanTotalReceivable = Math.abs(this.loanTotalReceivable)
          this.rebateIntrest = Math.round((Number(this.loantransactionData.rebateAmount) * Number(this.REBATE_INTRATE)) / 100)
        }
        else {
          this.ShareRecordShow = false
          this.loanSchemeShow = false
          this.GLRecordShow = false
          this.GLtransactionData = null
          this.SHtransactionData = null
          this.loantransactionData = null
          this.transactionData = data
          this.PIGMY_ACTYPE = data.pigmyScheme
          this.introducerName = data.introducer
        }
      }, (error) => {
        console.log(error, 'err')
        Swal.fire('Oops!', error?.error?.message, 'error');
      })
    }
  }
  PIGMY_ACTYPE
  productName = ''
  oldDepositArr = []
  tdsDeatilsArr = []
  lienInfoArr = []
  payableInterestArr = []
  interestInstructionArr = []
  interestPostedHistoryArr = []
  interestReceivedHistoryArr = []
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
  IsInterestReceivedHistoryView: boolean = false
  IsInterestPaidHistoryView: boolean = false
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
      this.IsInterestPaidHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsProductView = false
      this.IsAccountInfoView = false
      this.productViewArr = []
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
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
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
      this.IsInterestPaidHistoryView = false
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
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
      this.IsInterestPaidHistoryView = false
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
      this.IsInterestPaidHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsAccountInfoView = false
      this.IsProductView = false
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
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
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
      this.IsInterestPaidHistoryView = false
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
      this.IsInterestPaidHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
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
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
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
      this.IsInterestPaidHistoryView = false
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
      this.IsInterestPaidHistoryView = false
      this.IsCustomerIDView = false
      this.IsGoldSilverView = false
      this.IsLienInformationView = false
      this.IsAccountInfoView = false
      this.IsProductView = false
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
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
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = true
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsInterestPaidHistoryView = false
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
        this.payableInterestArr = this.sort_by_key(data, 'TRAN_DATE');
      })
    }
    else if (view == 'interestReceivedHistory') {
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
      this.IsInterestPostedHistoryView = false
      this.IsInterestReceivedHistoryView = true
      this.interestPostedHistoryArr = []
      this.IsInterestPaidHistoryView = false
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
      this.http.get<any>(this.url + '/ledger-view/interestReceivedHistoryView/' + obj).subscribe((data) => {
        this.interestReceivedHistoryArr = this.sort_by_key(data, 'TRAN_DATE')
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
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
      this.IsInterestPaidHistoryView = false
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
        this.interestPostedHistoryArr = this.sort_by_key(data, 'TRAN_DATE');
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
      this.IsInterestPaidHistoryView = false
      this.IsInterestPostedHistoryView = false
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
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
      this.IsInterestPaidHistoryView = false
      this.IsInterestPostedHistoryView = false
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
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
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
      this.IsInterestPaidHistoryView = false
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
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
      this.IsInterestPaidHistoryView = false
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
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsInterestPaidHistoryView = false
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
    else if (view == 'interestPaidHistory') {
      this.IsJointView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsInterestPaidHistoryView = true
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
      this.payableInterestArr = []
      this.accountInfoArr = []
    }
    else if (view == 'ledgerView') {
      this.IsJointView = false
      this.IsNomineeView = false
      this.IsAttorneyView = false
      this.IsGuaranterView = false
      this.IsCoborrowerView = false
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsCustomerIDView = false
      this.IsInterestPaidHistoryView = false
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
      this.IsInterestReceivedHistoryView = false
      this.interestReceivedHistoryArr = []
      this.IsCoborrowerView = false
      this.IsOldDepositsView = false
      this.IsTDSDetailsView = false
      this.IsDocumentView = false
      this.IsPayableInterestView = false
      this.IsInterestInstructionView = false
      this.IsInterestPostedHistoryView = false
      this.IsInterestPaidHistoryView = false
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

  sort_by_key(array: any, key: any) {
    return array.sort(function (a: any, b: any) {
      let p = moment(a[key], 'DD/MM/YYYY');
      let q = moment(b[key], 'DD/MM/YYYY');
      return (p < q) ? -1 : ((p > q) ? 1 : 0)
    });
  }
  onFocus(ele: NgSelectComponent) {  
    ele.open()
  }
}
