
import { SelectOptionService } from '../../../../shared/elements/select-option.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import { animate, style, transition, trigger } from '@angular/animations';
import { DaysService } from '../../../../shared/elements/days.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { StatementTypeService } from '../../../../shared/elements/statement-type.service';
//import { AlternateCodeService } from '../../../../shared/elements/alternatecode.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service';
import { WeeklyHolidayService } from '../../../../shared/dropdownService/weekly-holiday.service';
import { IntrestCalculationMethodService } from '../../../../shared/dropdownService/intrest-calculation-method-dropdown.service';
import { IOption } from 'ng-select';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs-compat';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { SystemMasterParametersService } from './system-master-parameters.service';
import Swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment'
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
interface SystemMasterParameters {
  SYSPARA_CODE: string;
  BANK_CODE: string;
  BANK_NAME: string;
  BRANCH_CODE: string;


  ADDRESS: string;
  CHAIRMAN: string;
  ACCOUNTANT: string;
  GENERAL_MANAGER: string;
  COMPANY_START_DATE: string;
  NO_OF_EMPLOYEES: string;
  OFFICER_NAME: string;
  OFFICER_DESIGNATION: string;
  RBI_LICENCE_NO: string;
  MANAGER_NAME: string;
  BRANCH_CITY_NAME: string;
  COMPANY_CODE: string;
  DD_COMMISSION_ACNO: string;
  DIVIDEND_ACNO: string;
  BONUS_GLACNO: string;
  BILL_RECEIVABLE_ACNO: string;
  BILL_FOR_COLLECTION_ACNO: string;
  BCBR_DR_GLACNO: string;
  BCBR_DR_SUB_GLACNO: string;
  CLG_SUSPENCE_ACNO: string;
  INWARD_BILL_COLLECTION_ACNO: string;
  INWARD_BILL_RECEIVABLE_ACNO: string;
  IS_ALLOW_RECOVERY: string;
  RECOVERY_METHOD: string;
  IS_PROCESS_FOR_MONTH: string;
  RECOVERY_DR_ACNO: string
  IS_PROCESS_UPTO_TRANDATE: string
  HO_GLACNO: string;
  BG_DR_ACNO: string;
  BG_CR_ACNO: string;
  PAY_ORDER_ACNO: string;
  INWARD_BILLS_PURCHASE_ACNO: string;
  YEAR_CLOSING_TRANSFER_ACNO: string;
  PL_TRANSFER_ACNO: string;
  AUTHORIZED_SHARE_CAPITAL_CODE: string;

  TDS_PAYABLE_GLACNO: string;
  SURCHARGE_GLACNO: string;
  CHEQUE_CHARGES_ACNO: string;
  CHEQUE_BOUNCE_ACNO: string;
  CHEQUE_BOUNCE_CHARGES: string;
  MICR_CHARGES_ACNO: string;
  MICR_CHARGES_AMOUNT: string
  MICR_CHARGES_INWORD_CLG: string
  GRACE_PERIOD: string;
  MORATORIUM_PERIOD: string;
  DIV_CALCU_MONTH: string;
  DIV_PAYABLE_FOR_LAST_YEARS: string;
  WEEKLY_HOLIDAY: string;
  HALF_DAY: string;
  SANCTIONED_CASH_LIMIT: string;
  HIGH_VALUE_CLEARING_AMT: string;
  MEMBER_FOR_GUR: string;
  INT_CALC_METHOD: string;
  IS_PGCOMMISSION_PERCALCULATION: string;
  NPA_METHOD: string;
  NPA_SUBMETHOD: string;
  AUTO_LOCK_TIME: string;
  PASSWORD_EXPIRE_DAYS: string;
  IS_ALLOW_CLG_TALLY_VOUCHER: string;
  IS_CLG_DATE_ADD: string;
  IS_AUTO_CLEARING_EFFECT: string;
  AUTO_NO: string;
  MASTER_APPROVAL_REQUIRED: string;
  IS_POSTING_DD_PREPARATION: string;
  IS_AUTO_INSTRUCTION_PASS: string;
  MAINTAIN_CHEQUE_SERIES: string;
  PIGMY_IS_AUTO_VOUCHER: string;
  IS_MICR_CHARGES_APPL: string;
  IS_GURR_FROM_MEMBERS: string;
  IS_AUTOPOSTDAILY_OVERDRAFT_INT: string;
  SCHMWISE_REC_IMPEXP: string;
  DENOMINATION_REQUIRE: string;
  TELLER_MODE: string;
  IS_ALLOW_SCHEME_GL_ENTRY: string;
  TOKEN_NO_APPLICABLE: string;
  MASTER_ATTACH_JOINT_NAMES: string;
  MASTER_ATTACH_GUARDIAN_NAMES: string;
  PIGMY_AC_RENEW_APPLY: string;
  IS_RECEIPTNO_IN_PIGMYCHART: string;
  IS_REBIT_INTRATE_CAL: string;
  IS_ALLOW_LOANINT_CHANGE: string;
  IS_CONSIDER_CCRENEWAL_AS_OPEN: string;
  IS_ALLOW_RECOVERY_DIFF: string;
  CUSTOMER_ID_REQUIRED: string;
  IS_TDS_CALCULATE: string;
  IS_AUTO_VOUCHER_NPA_OIR: string;
  IS_HO_SUB_GLACNO_REQUIRED: string;
  IS_REQUIRE_CLEARING_OPTION: string;
  IS_ALLOW_USER_MULTI_LOGIN: string;
  IS_BANKERS_COMM_TRAN_REQD: string;
  IS_IBCIBR_VOUCH_REQD: string;
  DEPRECIATION_WITH_HALFFULLRATE: string;
  IS_AUTO_UPDATE_SHARES_NO: string;
  WITHDRW_CLOSING_FOR_GURMEMBERS: string;
  PREVIOUS_DATE: string;
  CURRENT_DATE: string;
  DAY_BEGIN_EXECUTED: string;
  DAY_END_EXECUTED: string;
  PIGMY_PREVIOUS_DATE: string;
  PIGMY_CURRENT_DATE: string;
  PIGMY_DAY_BEGIN_EXECUTED: string;
  PIGMY_DAY_END_EXECUTED: string;
  CASH_IN_HAND_ACNO: string;
  BACK_DAY_OPTION: string;
  ON_LINE: string;
  IS_RECEIPT_PRINT_DESIGNMETHOD: string;
  CLG_HOUSE_METHOD: string;
  LINES_PER_PASSBOOKPAGE: string;

}
@Component({
  selector: 'app-system-master-parameters',
  templateUrl: './system-master-parameters.component.html',
  styleUrls: ['./system-master-parameters.component.scss'],
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
export class SystemMasterParametersComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  //api 
  url = environment.base_url
 
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  systemParameters: SystemMasterParameters[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  Data: any;
  //variables for pagination
  page: number = 1;
  passenger: any;
  itemsPerPage = 10;
  totalItems: any;
  currentJustify = 'start';
  active = 1;
  activeKeep = 1;
  //filter variable
  filterData = {};
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  //variable to get Id to update
  updateID: number = 0;

  simpleOption: Array<IOption> = this.StatementTypeService.getCharacters();
  IntrestCalculationMethod: Array<IOption> = this.IntrestCalculationMethodService.getCharacters();
  WeeklyandHalfHoliday: Array<IOption> = this.WeeklyHolidayService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  dropDown;
  selectedItems: any;
  FaceValueDividendTrue = true;
  OtherSettings_True = false;
  OwnbranchMasterDropdown: any;
  ACMasterDropdown: any;
  Show: boolean = false;
  newbtnShow: boolean;
  constructor(
    private http: HttpClient,
    public WeeklyHolidayService: WeeklyHolidayService,
    public IntrestCalculationMethodService: IntrestCalculationMethodService,
    public ACMasterDropdownService: ACMasterDropdownService,
    public OwnbranchMasterService: OwnbranchMasterService,
    public StatementTypeService: StatementTypeService,
    public selectOptionService: SelectOptionService,
    public systemMasterParametersService: SystemMasterParametersService
    , private fb: FormBuilder) { }


  ngOnInit(): void {
    this.createForm();
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTableParameters: any, callback) => {
        dataTableParameters.columns.forEach(element => {
          if (element.search.value != '') {
            let string = element.search.value;
            this.filterData[element.data] = string;
          } else {
            let getColumnName = element.data;
            let columnValue = element.value;
            if (this.filterData.hasOwnProperty(element.data)) {
              let value = this.filterData[getColumnName];
              if (columnValue != undefined || value != undefined) {
                delete this.filterData[element.data];
              }
            }
          }
        });
        dataTableParameters['filterData'] = this.filterData;
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        this.page = dataTableParameters.start / dataTableParameters.length;
        this.http
          .post<DataTableResponse>(
            this.url + '/system-master-parameters',
            dataTableParameters
          ).subscribe(resp => {
            this.systemParameters = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Type',
          data: 'SYSPARA_CODE'

        }, {
          title: 'Bank Code',
          data: 'BANK_CODE'
        }, {
          title: 'Bank Name',
          data: 'BANK_NAME'
        }, {
          title: 'Branch Code',
          data: 'BRANCH_CODE'
        }, {
          title: 'Bank Address',
          data: 'ADDRESS'
        }, {
          title: 'Bank Start Date',
          data: 'COMPANY_START_DATE'
        }, {
          title: 'No. Of Employees',
          data: 'NO_OF_EMPLOYEES'
        }, {
          title: 'Accountant(Print-First)',
          data: 'ACCOUNTANT'
        }, {
          title: 'General Manager (Print-Middle)',
          data: 'GENERAL_MANAGER'
        }, {
          title: 'Chairman (Print-Last)',
          data: 'CHAIRMAN'
        }, {
          title: 'Officer Name',
          data: 'OFFICER_NAME'
        }, {
          title: 'Officer Designation',
          data: 'OFFICER_DESIGNATION'
        }, {
          title: 'RBI Licence No.',
          data: 'RBI_LICENCE_NO'
        }, {
          title: 'Manager Name',
          data: 'MANAGER_NAME'
        }, {
          title: 'Branch City Name(English)',
          data: 'BRANCH_CITY_NAME'
        }, {
          title: 'Company Code',
          data: 'COMPANY_CODE'
        }, {
          title: 'DD Commission',
          data: 'DD_COMMISSION_ACNO'
        }, {
          title: 'Dividend GL',
          data: 'DIVIDEND_ACNO'
        }, {
          title: 'Bonus GL',
          data: 'BONUS_GLACNO'
        }, {
          title: 'Bills For Collection',
          data: 'BILL_FOR_COLLECTION_ACNO'
        }, {
          title: 'Bills Receivable',
          data: 'BILL_RECEIVABLE_ACNO'
        }, {
          title: 'BC BR Clearing Dr.',
          data: 'BCBR_DR_GLACNO'
        }, {
          title: 'BC BR Head Office Sub Code',
          data: 'BCBR_DR_SUB_GLACNO'
        }, {
          title: 'Clearing Suspence GL A/c',
          data: 'CLG_SUSPENCE_ACNO'
        }, {
          title: 'Inward Bill Collection GL A/c',
          data: 'INWARD_BILL_COLLECTION_ACNO'
        }, {
          title: 'Inward Bill Receivable GL A/c',
          data: 'INWARD_BILL_RECEIVABLE_ACNO'
        }, {
          title: 'Allow Recovery',
          data: 'IS_ALLOW_RECOVERY_DIFF'
        }, {
          title: 'Member No Wise Recovery',
          data: 'RECOVERY_METHOD'
        }, {
          title: 'CustomerID Wise Recovery',
          data: 'RECOVERY_METHOD'
        }, {
          title: 'Is Process For Process Month/Year',
          data: 'IS_PROCESS_FOR_MONTH'
        }, {
          title: 'Recovery GL  A/c No.',
          data: 'RECOVERY_DR_ACNO'
        }, {
          title: 'Is Process Upto Current Date',
          data: 'IS_PROCESS_UPTO_TRANDATE'
        }, {
          title: 'Head Office Ac No',
          data: 'HO_GLACNO'
        }, {
          title: 'Bank Gaurantee Dr. A/c',
          data: 'BG_DR_ACNO'
        }, {
          title: 'Bank Gaurantee Cr. A/c',
          data: 'BG_CR_ACNO'
        }, {
          title: 'Pay Order A/c',
          data: 'PAY_ORDER_ACNO'
        }, {
          title: 'Inward Bills Purchase A/c',
          data: 'INWARD_BILLS_PURCHASE_ACNO'
        }, {
          title: 'Year End Profit Loss Transfer',
          data: 'YEAR_CLOSING_TRANSFER_ACNO'
        }, {
          title: 'Profit / Loss Print in B/S GL',
          data: 'PL_TRANSFER_ACNO'
        }, {
          title: 'Share Capital Statement No.',
          data: 'AUTHORIZED_SHARE_CAPITAL_CODE'
        }, {
          title: 'TDS Payable GL A/c',
          data: 'TDS_PAYABLE_GLACNO'
        }, {
          title: 'Surcharge GL A/c',
          data: 'SURCHARGE_GLACNO'
        }, {
          title: 'Cheque Book Charges GL',
          data: 'CHEQUE_CHARGES_ACNO'
        }, {
          title: 'Cheque Bounce Charges GL',
          data: 'CHEQUE_BOUNCE_ACNO'
        }, {
          title: 'Cheque Bounce Charges',
          data: 'CHEQUE_BOUNCE_CHARGES'
        }, {
          title: 'MICR Charges GL A/c',
          data: 'MICR_CHARGES_ACNO'
        }, {
          title: 'O/W Charges',
          data: 'MICR_CHARGES_AMOUNT'
        }, {
          title: 'I/W Charges',
          data: 'MICR_CHARGES_INWORD_CLG'
        }, {
          title: 'Grace Period (Days)',
          data: 'GRACE_PERIOD'
        }, {
          title: 'Weekly Holiday ',
          data: 'WEEKLY_HOLIDAY'
        }, {
          title: 'Half Day',
          data: 'HALF_DAY'
        }, {
          title: 'Interest Calculation Method',
          data: 'INT_CALC_METHOD'
        }, {
          title: 'Moratorium Period',
          data: 'MORATORIUM_PERIOD'
        }, {
          title: 'Sanctioned Cash Limit for',
          data: 'SANCTIONED_CASH_LIMIT'
        }, {
          title: 'Pigmy Commission Method/Rule',
          data: 'IS_PGCOMMISSION_PERCALCULATION'
        }, {
          title: 'Dividend Calculation Month No.',
          data: 'DIV_CALCU_MONTH'
        }, {
          title: 'High Value Clearing Amount',
          data: 'HIGH_VALUE_CLEARING_AMT'
        }, {
          title: 'NPA Method No',
          data: 'NPA_METHOD'
        }, {
          title: 'Sub Method No.',
          data: 'NPA_SUBMETHOD'
        }, {
          title: 'Dividend Payable for the last',
          data: 'DIV_PAYABLE_FOR_LAST_YEARS'
        }, {
          title: 'Member Can Be Guarantor for No. of A/cs',
          data: 'MEMBER_FOR_GUR'
        }, {
          title: 'S/W Lock Time/m',
          data: 'AUTO_LOCK_TIME'
        }, {
          title: 'Password Expiry Days',
          data: 'PASSWORD_EXPIRE_DAYS'
        }, {
          title: 'Is Voucher Require in Clg. Tally',
          data: 'IS_ALLOW_CLG_TALLY_VOUCHER'
        }, {
          title: 'Denomination Require',
          data: 'DENOMINATION_REQUIRE'
        }, {
          title: 'Customer ID required',
          data: 'CUSTOMER_ID_REQUIRED'
        }, {
          title: ' Is Clearing Date Add by 1 Day',
          data: 'IS_CLG_DATE_ADD'
        }, {
          title: ' Teller Mode',
          data: 'TELLER_MODE'
        }, {
          title: ' TDS Calculate required',
          data: 'IS_TDS_CALCULATE'
        }, {
          title: ' Is Auto Clearing Effect',
          data: 'IS_AUTO_CLEARING_EFFECT'
        }, {
          title: ' Allow Direct Entry to Scheme GL',
          data: 'IS_ALLOW_SCHEME_GL_ENTRY'
        }, {
          title: ' Is NPA Auto Voucher Create',
          data: 'IS_AUTO_VOUCHER_NPA_OIR'
        }, {
          title: ' Auto Account Numbering',
          data: 'AUTO_NO'
        }, {
          title: ' Token Not Applicable',
          data: 'TOKEN_NO_APPLICABLE'
        }, {
          title: ' Is HO Sub GL A/c Input Required',
          data: 'IS_HO_SUB_GLACNO_REQUIRED'
        }, {
          title: 'Master Approve Required',
          data: 'MASTER_APPROVAL_REQUIRED'
        }, {
          title: 'Auto Attach Deposit Ac Joint Names to Primary Name',
          data: 'MASTER_ATTACH_JOINT_NAMES'
        }, {
          title: ' Is Clearing option Required',
          data: 'IS_REQUIRE_CLEARING_OPTION'
        }, {
          title: 'Is Posting DD Preparation',
          data: 'IS_POSTING_DD_PREPARATION'
        }, {
          title: 'Auto Attach Guardian Name to Primary Name',
          data: 'MASTER_ATTACH_GUARDIAN_NAMES'
        }, {
          title: 'Is Allowed Multiple time User Login?',
          data: 'IS_ALLOW_USER_MULTI_LOGIN'
        }, {
          title: ' Auto Instruction Passing',
          data: 'IS_AUTO_INSTRUCTION_PASS'
        }, {
          title: 'Allow Pigmy Accounts Renewal',
          data: 'PIGMY_AC_RENEW_APPLY'
        }, {
          title: 'Maintain Cheque Series',
          data: 'MAINTAIN_CHEQUE_SERIES'
        }, {
          title: 'Ac Wise Receipt No Input In Pigmy Chart',
          data: 'IS_RECEIPTNO_IN_PIGMYCHART'
        }, {
          title: 'Is Bankers Commission Voucher Required',
          data: 'IS_BANKERS_COMM_TRAN_REQD'
        }, {
          title: 'Pigmy Auto Voucher Generation',
          data: 'PIGMY_IS_AUTO_VOUCHER'
        }, {
          title: 'Is Rebit Interest Rate Wise Calculation (Loan)',
          data: 'IS_REBIT_INTRATE_CAL'
        }, {
          title: 'Is Required IBC/IBR Vouchers',
          data: 'IS_IBCIBR_VOUCH_REQD'
        }, {
          title: ' MICR Charges Applicable',
          data: 'IS_MICR_CHARGES_APPL'
        }, {
          title: 'Allow to Change Loan Interest Amount',
          data: 'IS_ALLOW_LOANINT_CHANGE'
        }, {
          title: 'Depreciation With Half/Full Rate',
          data: 'DEPRECIATION_WITH_HALFFULLRATE'
        }, {
          title: 'Guarantors From Only A Type Members',
          data: 'IS_GURR_FROM_MEMBERS'
        }, {
          title: 'Consider Renewal As Open For CC',
          data: 'IS_CONSIDER_CCRENEWAL_AS_OPEN'
        }, {
          title: ' Auto Certificate and Shares no. Update',
          data: 'IS_AUTO_UPDATE_SHARES_NO'
        }, {
          title: ' Auto Post Daily Overdraft Interest',
          data: 'IS_AUTOPOSTDAILY_OVERDRAFT_INT'
        }, {
          title: ' Allow To Maintain Recovery Differnce',
          data: 'IS_ALLOW_RECOVERY_DIFF'
        }, {
          title: ' Check Member Loan/Gauranter forwithdraw/closing',
          data: 'WITHDRW_CLOSING_FOR_GURMEMBERS'
        }, {
          title: ' Scheme Wise Recovery Import/Expor',
          data: 'SCHMWISE_REC_IMPEXP'
        }, {
          title: 'Previous Date',
          data: 'PREVIOUS_DATE'
        }, {
          title: 'Current Date',
          data: 'CURRENT_DATE'
        }, {
          title: 'Day Begin Executed',
          data: 'DAY_BEGIN_EXECUTED'
        }, {
          title: 'Day End Executed',
          data: 'DAY_END_EXECUTED'
        }, {
          title: ' Pigmy Previous Date',
          data: 'PIGMY_PREVIOUS_DATE'
        }, {
          title: 'Pigmy Current Date',
          data: 'PIGMY_CURRENT_DATE'
        }, {
          title: 'Day Begin Executed',
          data: 'PIGMY_DAY_BEGIN_EXECUTED'
        }, {
          title: 'Day End Executed',
          data: 'PIGMY_DAY_END_EXECUTED'
        }, {
          title: 'Back Day Open Options',
          data: 'BACK_DAY_OPTION'
        }, {
          title: ' Is Online Transactions?',
          data: 'ON_LINE'
        }, {
          title: 'Is Receipt Printing by Designing Method ?',
          data: 'IS_RECEIPT_PRINT_DESIGNMETHOD'
        }, {
          title: 'Cash in Hand GL A/c Amount',
          data: 'CASH_IN_HAND_ACNO'
        }, {
          title: 'Clearing House Member',
          data: 'CLG_HOUSE_METHOD'
        }, {
          title: 'No. of Lines Per Passbook',
          data: 'LINES_PER_PASSBOOKPAGE'
        },


      ],
      dom: 'Bfrtip',
    };
    this.runTimer();
    this.dataSub = this.StatementTypeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.OwnbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {

      this.OwnbranchMasterDropdown = data;
    })

    this.ACMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {

      this.ACMasterDropdown = data;
    })
  }
  createForm() {
    this.angForm = this.fb.group({
      SYSPARA_CODE: ['A'],
      BANK_CODE: ['', [Validators.pattern, Validators.required]],
      BANK_NAME: ['', [Validators.pattern, Validators.required]],
      BRANCH_CODE: ['', [Validators.pattern, Validators.required]],
      //BRANCH_NAME:['',[Validators.pattern, Validators.required]],
      ADDRESS: ['', [Validators.pattern, Validators.required]],
      COMPANY_START_DATE: ['', [Validators.required]],
      NO_OF_EMPLOYEES: ['', [Validators.pattern]],
      ACCOUNTANT: ['', [Validators.pattern, Validators.required]],
      GENERAL_MANAGER: ['', [Validators.pattern, Validators.required]],
      CHAIRMAN: ['', [Validators.pattern, Validators.required]],
      OFFICER_NAME: ['', [Validators.pattern, Validators.required]],
      OFFICER_DESIGNATION: ['', [Validators.pattern, Validators.required]],
      RBI_LICENCE_NO: ['', [Validators.pattern, Validators.required]],
      MANAGER_NAME: ['', [Validators.pattern, Validators.required]],
      BRANCH_CITY_NAME: ['', [Validators.pattern, Validators.required]],
      COMPANY_CODE: ['', [Validators.pattern, Validators.required]],
      DD_COMMISSION_ACNO: [''],
      DIVIDEND_ACNO: ['', [Validators.required]],
      BONUS_GLACNO: ['', [Validators.required]],
      INWARD_BILL_COLLECTION_ACNO: [''],
      INWARD_BILL_RECEIVABLE_ACNO: [''],
      BCBR_DR_GLACNO: [''],
      BCBR_DR_SUB_GLACNO: [''],

      BILL_RECEIVABLE_ACNO: [''],
      BILL_FOR_COLLECTION_ACNO: [''],
      CLG_SUSPENCE_ACNO: [''],
      IS_ALLOW_RECOVERY: [''],
      RECOVERY_METHOD: [''],
      IS_PROCESS_FOR_MONTH: [''],
      RECOVERY_DR_ACNO: ['', [Validators.required, Validators.pattern]],
      IS_PROCESS_UPTO_TRANDATE: [''],

      HO_GLACNO: ['', [Validators.required]],
      BG_DR_ACNO: [''],
      BG_CR_ACNO: [''],
      PAY_ORDER_ACNO: [''],
      INWARD_BILLS_PURCHASE_ACNO: [''],
      YEAR_CLOSING_TRANSFER_ACNO: ['', [Validators.required]],
      PL_TRANSFER_ACNO: [''],
      AUTHORIZED_SHARE_CAPITAL_CODE: ['', [Validators.required]],
      TDS_PAYABLE_GLACNO: ['', [Validators.required]],
      SURCHARGE_GLACNO: ['', [Validators.required]],
      CHEQUE_CHARGES_ACNO: [''],
      CHEQUE_BOUNCE_ACNO: [''],
      CHEQUE_BOUNCE_CHARGES: ['', [Validators.pattern]],
      MICR_CHARGES_ACNO: [''],
      MICR_CHARGES_AMOUNT: ['', [Validators.pattern]],
      MICR_CHARGES_INWORD_CLG: ['', [Validators.pattern]],


      GRACE_PERIOD: ['', [Validators.pattern]],
      MORATORIUM_PERIOD: ['', [Validators.pattern]],
      DIV_CALCU_MONTH: ['', [Validators.required]],
      DIV_PAYABLE_FOR_LAST_YEARS: ['', [Validators.required]],
      WEEKLY_HOLIDAY: ['', [Validators.required]],
      HALF_DAY: ['', [Validators.required]],
      SANCTIONED_CASH_LIMIT: ['', [Validators.required]],
      HIGH_VALUE_CLEARING_AMT: ['', [Validators.pattern]],
      MEMBER_FOR_GUR: ['', [Validators.pattern]],
      INT_CALC_METHOD: [''],
      IS_PGCOMMISSION_PERCALCULATION: ['', [Validators.pattern]],
      NPA_METHOD: ['', [Validators.pattern]],
      NPA_SUBMETHOD: ['', [Validators.pattern]],
      AUTO_LOCK_TIME: ['', [Validators.pattern]],
      PASSWORD_EXPIRE_DAYS: ['', [Validators.pattern]],
      IS_ALLOW_CLG_TALLY_VOUCHER: [''],
      IS_CLG_DATE_ADD: [''],
      IS_AUTO_CLEARING_EFFECT: [''],
      AUTO_NO: [''],
      MASTER_APPROVAL_REQUIRED: [''],
      IS_POSTING_DD_PREPARATION: [''],
      IS_AUTO_INSTRUCTION_PASS: [''],
      MAINTAIN_CHEQUE_SERIES: [''],
      PIGMY_IS_AUTO_VOUCHER: [''],
      IS_MICR_CHARGES_APPL: [''],
      IS_GURR_FROM_MEMBERS: [''],
      IS_AUTOPOSTDAILY_OVERDRAFT_INT: [''],
      SCHMWISE_REC_IMPEXP: [''],
      DENOMINATION_REQUIRE: [''],
      TELLER_MODE: [''],
      IS_ALLOW_SCHEME_GL_ENTRY: [''],
      TOKEN_NO_APPLICABLE: [''],
      MASTER_ATTACH_JOINT_NAMES: [''],
      MASTER_ATTACH_GUARDIAN_NAMES: [''],
      PIGMY_AC_RENEW_APPLY: [''],
      IS_RECEIPTNO_IN_PIGMYCHART: [''],
      IS_REBIT_INTRATE_CAL: [''],
      IS_ALLOW_LOANINT_CHANGE: [''],
      IS_CONSIDER_CCRENEWAL_AS_OPEN: [''],
      IS_ALLOW_RECOVERY_DIFF: [''],
      CUSTOMER_ID_REQUIRED: [''],
      IS_TDS_CALCULATE: [''],
      IS_AUTO_VOUCHER_NPA_OIR: [''],
      IS_HO_SUB_GLACNO_REQUIRED: [''],
      IS_REQUIRE_CLEARING_OPTION: [''],
      IS_ALLOW_USER_MULTI_LOGIN: [''],

      IS_BANKERS_COMM_TRAN_REQD: [''],
      IS_IBCIBR_VOUCH_REQD: [''],
      DEPRECIATION_WITH_HALFFULLRATE: [''],
      IS_AUTO_UPDATE_SHARES_NO: [''],
      WITHDRW_CLOSING_FOR_GURMEMBERS: [''],


      PREVIOUS_DATE: ['', [Validators.required]],
      CURRENT_DATE: ['', [Validators.required]],
      DAY_BEGIN_EXECUTED: [''],
      DAY_END_EXECUTED: [''],
      PIGMY_PREVIOUS_DATE: ['', [Validators.required]],
      PIGMY_CURRENT_DATE: ['', [Validators.required]],
      PIGMY_DAY_BEGIN_EXECUTED: [''],
      PIGMY_DAY_END_EXECUTED: [''],
      CASH_IN_HAND_ACNO: ['', [Validators.required]],
      BACK_DAY_OPTION: [''],
      ON_LINE: [''],
      IS_RECEIPT_PRINT_DESIGNMETHOD: [''],
      CLG_HOUSE_METHOD: ['', [Validators.required]],
      LINES_PER_PASSBOOKPAGE: ['', [Validators.pattern]]









    });
  }
  OpenLink(val) {

    if (val == 101) {
      this.FaceValueDividendTrue = true;
      this.OtherSettings_True = false;
    }
    if (val == 102) {
      this.FaceValueDividendTrue = false;
      this.OtherSettings_True = true;
    }
  }
  Allow_Recovery($event) {
    if ($event.target.checked) {
      this.Show = true;
    }
    else {
      this.Show = false;
    }

  }
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {

      'SYSPARA_CODE': formVal.SYSPARA_CODE,
      'BANK_NAME': formVal.BANK_NAME,


      'BANK_CODE': formVal.BANK_CODE,
      'BRANCH_CODE': formVal.BRANCH_CODE,
      // 'BRANCH_NAME': formVal.BRANCH_NAME,

      'ADDRESS': formVal.ADDRESS,
      'CHAIRMAN': formVal.CHAIRMAN,
      'ACCOUNTANT': formVal.ACCOUNTANT,
      'GENERAL_MANAGER': formVal.GENERAL_MANAGER,

      'COMPANY_START_DATE': formVal.COMPANY_START_DATE,
      'NO_OF_EMPLOYEES': formVal.NO_OF_EMPLOYEES,
      'OFFICER_NAME': formVal.OFFICER_NAME,
      'OFFICER_DESIGNATION': formVal.OFFICER_DESIGNATION,
      'RBI_LICENCE_NO': formVal.RBI_LICENCE_NO,
      'MANAGER_NAME': formVal.MANAGER_NAME,
      'BRANCH_CITY_NAME': formVal.BRANCH_CITY_NAME,
      'COMPANY_CODE': formVal.COMPANY_CODE,


      'DD_COMMISSION_ACNO': formVal.DD_COMMISSION_ACNO,
      'DIVIDEND_ACNO': formVal.DIVIDEND_ACNO,
      'BONUS_GLACNO': formVal.BONUS_GLACNO,
      'BILL_RECEIVABLE_ACNO': formVal.BILL_RECEIVABLE_ACNO,
      'BILL_FOR_COLLECTION_ACNO': formVal.BILL_FOR_COLLECTION_ACNO,
      'BCBR_DR_GLACNO': formVal.BCBR_DR_GLACNO,
      'BCBR_DR_SUB_GLACNO': formVal.BCBR_DR_SUB_GLACNO,
      'CLG_SUSPENCE_ACNO': formVal.CLG_SUSPENCE_ACNO,
      'INWARD_BILL_COLLECTION_ACNO': formVal.INWARD_BILL_COLLECTION_ACNO,
      'INWARD_BILL_RECEIVABLE_ACNO': formVal.INWARD_BILL_RECEIVABLE_ACNO,
      'IS_ALLOW_RECOVERY': formVal.IS_ALLOW_RECOVERY,
      'RECOVERY_METHOD': formVal.RECOVERY_METHOD,
      'IS_PROCESS_FOR_MONTH': formVal.IS_PROCESS_FOR_MONTH,
      'RECOVERY_DR_ACNO': formVal.RECOVERY_DR_ACNO,
      'IS_PROCESS_UPTO_TRANDATE': formVal.IS_PROCESS_UPTO_TRANDATE,


      'HO_GLACNO': formVal.HO_GLACNO,
      'BG_DR_ACNO': formVal.BG_DR_ACNO,
      'BG_CR_ACNO': formVal.BG_CR_ACNO,
      'PAY_ORDER_ACNO': formVal.PAY_ORDER_ACNO,
      'INWARD_BILLS_PURCHASE_ACNO': formVal.INWARD_BILLS_PURCHASE_ACNO,
      'YEAR_CLOSING_TRANSFER_ACNO': formVal.YEAR_CLOSING_TRANSFER_ACNO,
      'PL_TRANSFER_ACNO': formVal.PL_TRANSFER_ACNO,
      'AUTHORIZED_SHARE_CAPITAL_CODE': formVal.AUTHORIZED_SHARE_CAPITAL_CODE,
      'TDS_PAYABLE_GLACNO': formVal.TDS_PAYABLE_GLACNO,
      'SURCHARGE_GLACNO': formVal.SURCHARGE_GLACNO,
      'CHEQUE_CHARGES_ACNO': formVal.CHEQUE_CHARGES_ACNO,
      'CHEQUE_BOUNCE_ACNO': formVal.CHEQUE_BOUNCE_ACNO,
      'CHEQUE_BOUNCE_CHARGES': formVal.CHEQUE_BOUNCE_CHARGES,
      'MICR_CHARGES_ACNO': formVal.MICR_CHARGES_ACNO,
      'MICR_CHARGES_AMOUNT': formVal.MICR_CHARGES_AMOUNT,
      'MICR_CHARGES_INWORD_CLG': formVal.MICR_CHARGES_INWORD_CLG,


      'GRACE_PERIOD': formVal.GRACE_PERIOD,
      'MORATORIUM_PERIOD': formVal.MORATORIUM_PERIOD,
      'DIV_CALCU_MONTH': formVal.DIV_CALCU_MONTH,
      'DIV_PAYABLE_FOR_LAST_YEARS': formVal.DIV_PAYABLE_FOR_LAST_YEARS,
      'WEEKLY_HOLIDAY': formVal.WEEKLY_HOLIDAY,
      'HALF_DAY': formVal.HALF_DAY,
      'SANCTIONED_CASH_LIMIT': formVal.SANCTIONED_CASH_LIMIT,
      'HIGH_VALUE_CLEARING_AMT': formVal.HIGH_VALUE_CLEARING_AMT,
      'MEMBER_FOR_GUR': formVal.MEMBER_FOR_GUR,
      'INT_CALC_METHOD': formVal.INT_CALC_METHOD,
      'IS_PGCOMMISSION_PERCALCULATION': formVal.IS_PGCOMMISSION_PERCALCULATION,
      'NPA_METHOD': formVal.NPA_METHOD,
      'NPA_SUBMETHOD': formVal.NPA_SUBMETHOD,
      'AUTO_LOCK_TIME': formVal.AUTO_LOCK_TIME,
      'PASSWORD_EXPIRE_DAYS': formVal.PASSWORD_EXPIRE_DAYS,
      'IS_ALLOW_CLG_TALLY_VOUCHER': formVal.IS_ALLOW_CLG_TALLY_VOUCHER,
      'IS_CLG_DATE_ADD': formVal.IS_CLG_DATE_ADD,
      'IS_AUTO_CLEARING_EFFECT': formVal.IS_AUTO_CLEARING_EFFECT,
      'AUTO_NO': formVal.AUTO_NO,
      'MASTER_APPROVAL_REQUIRED': formVal.MASTER_APPROVAL_REQUIRED,
      'IS_POSTING_DD_PREPARATION': formVal.IS_POSTING_DD_PREPARATION,
      'IS_AUTO_INSTRUCTION_PASS': formVal.IS_AUTO_INSTRUCTION_PASS,
      'MAINTAIN_CHEQUE_SERIES': formVal.MAINTAIN_CHEQUE_SERIES,
      'PIGMY_IS_AUTO_VOUCHER': formVal.PIGMY_IS_AUTO_VOUCHER,
      'IS_MICR_CHARGES_APPL': formVal.IS_MICR_CHARGES_APPL,
      'IS_GURR_FROM_MEMBERS': formVal.IS_GURR_FROM_MEMBERS,
      'IS_AUTOPOSTDAILY_OVERDRAFT_INT': formVal.IS_AUTOPOSTDAILY_OVERDRAFT_INT,
      'SCHMWISE_REC_IMPEXP': formVal.SCHMWISE_REC_IMPEXP,
      'DENOMINATION_REQUIRE': formVal.DENOMINATION_REQUIRE,
      'TELLER_MODE': formVal.TELLER_MODE,
      'IS_ALLOW_SCHEME_GL_ENTRY': formVal.IS_ALLOW_SCHEME_GL_ENTRY,
      'TOKEN_NO_APPLICABLE': formVal.TOKEN_NO_APPLICABLE,
      'MASTER_ATTACH_JOINT_NAMES': formVal.MASTER_ATTACH_JOINT_NAMES,
      'MASTER_ATTACH_GUARDIAN_NAMES': formVal.MASTER_ATTACH_GUARDIAN_NAMES,
      'PIGMY_AC_RENEW_APPLY': formVal.PIGMY_AC_RENEW_APPLY,
      'IS_RECEIPTNO_IN_PIGMYCHART': formVal.IS_RECEIPTNO_IN_PIGMYCHART,
      'IS_REBIT_INTRATE_CAL': formVal.IS_REBIT_INTRATE_CAL,
      'IS_ALLOW_LOANINT_CHANGE': formVal.IS_ALLOW_LOANINT_CHANGE,
      'IS_CONSIDER_CCRENEWAL_AS_OPEN': formVal.IS_CONSIDER_CCRENEWAL_AS_OPEN,
      'IS_ALLOW_RECOVERY_DIFF': formVal.IS_ALLOW_RECOVERY_DIFF,
      'CUSTOMER_ID_REQUIRED': formVal.CUSTOMER_ID_REQUIRED,
      'IS_TDS_CALCULATE': formVal.IS_TDS_CALCULATE,
      'IS_AUTO_VOUCHER_NPA_OIR': formVal.IS_AUTO_VOUCHER_NPA_OIR,
      'IS_HO_SUB_GLACNO_REQUIRED': formVal.IS_HO_SUB_GLACNO_REQUIRED,
      'IS_REQUIRE_CLEARING_OPTION': formVal.IS_REQUIRE_CLEARING_OPTION,
      'IS_ALLOW_USER_MULTI_LOGIN': formVal.IS_ALLOW_USER_MULTI_LOGIN,

      'IS_BANKERS_COMM_TRAN_REQD': formVal.IS_BANKERS_COMM_TRAN_REQD,
      'IS_IBCIBR_VOUCH_REQD': formVal.IS_IBCIBR_VOUCH_REQD,
      'DEPRECIATION_WITH_HALFFULLRATE': formVal.DEPRECIATION_WITH_HALFFULLRATE,
      'IS_AUTO_UPDATE_SHARES_NO': formVal.IS_AUTO_UPDATE_SHARES_NO,
      'WITHDRW_CLOSING_FOR_GURMEMBERS': formVal.WITHDRW_CLOSING_FOR_GURMEMBERS,


      'PREVIOUS_DATE': formVal.PREVIOUS_DATE,
      'CURRENT_DATE': formVal.CURRENT_DATE,
      'DAY_BEGIN_EXECUTED': formVal.DAY_BEGIN_EXECUTED,
      'DAY_END_EXECUTED': formVal.DAY_END_EXECUTED,
      'PIGMY_PREVIOUS_DATE': formVal.PIGMY_PREVIOUS_DATE,
      'PIGMY_CURRENT_DATE': formVal.PIGMY_CURRENT_DATE,
      'PIGMY_DAY_BEGIN_EXECUTED': formVal.PIGMY_DAY_BEGIN_EXECUTED,
      'PIGMY_DAY_END_EXECUTED': formVal.PIGMY_DAY_END_EXECUTED,
      'CASH_IN_HAND_ACNO': formVal.CASH_IN_HAND_ACNO,
      'BACK_DAY_OPTION': formVal.BACK_DAY_OPTION,
      'ON_LINE': formVal.ON_LINE,
      'IS_RECEIPT_PRINT_DESIGNMETHOD': formVal.IS_RECEIPT_PRINT_DESIGNMETHOD,
      'CLG_HOUSE_METHOD': formVal.CLG_HOUSE_METHOD,
      'LINES_PER_PASSBOOKPAGE': formVal.LINES_PER_PASSBOOKPAGE,



    }
    console.log(dataToSend);
    this.systemMasterParametersService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
    }, (error) => {
      console.log(error)
    })
    //To clear form
    this.resetForm();
  }
  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.systemMasterParametersService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'SYSPARA_CODE': data.SYSPARA_CODE,
        'BANK_CODE': data.BANK_CODE,
        'BANK_NAME': data.BANK_NAME,
        'BRANCH_CODE': data.BRANCH_CODE,
        // 'BRANCH_NAME': data.BRANCH_NAME,
        'ADDRESS': data.ADDRESS,
        'CHAIRMAN': data.CHAIRMAN,
        'ACCOUNTANT': data.ACCOUNTANT,
        'GENERAL_MANAGER': data.GENERAL_MANAGER,
        'COMPANY_START_DATE': data.COMPANY_START_DATE,
        'NO_OF_EMPLOYEES': data.NO_OF_EMPLOYEES,
        'OFFICER_NAME': data.OFFICER_NAME,
        'OFFICER_DESIGNATION': data.OFFICER_DESIGNATION,
        'RBI_LICENCE_NO': data.RBI_LICENCE_NO,
        'MANAGER_NAME': data.MANAGER_NAME,
        'BRANCH_CITY_NAME': data.BRANCH_CITY_NAME,
        'COMPANY_CODE': data.COMPANY_CODE,
        'DD_COMMISSION_ACNO': data.DD_COMMISSION_ACNO,
        'DIVIDEND_ACNO': data.DIVIDEND_ACNO,
        'BONUS_GLACNO': data.BONUS_GLACNO,
        'BILL_RECEIVABLE_ACNO': data.BILL_RECEIVABLE_ACNO,
        'BILL_FOR_COLLECTION_ACNO': data.BILL_FOR_COLLECTION_ACNO,
        'BCBR_DR_GLACNO': data.BCBR_DR_GLACNO,
        'BCBR_DR_SUB_GLACNO': data.BCBR_DR_SUB_GLACNO,
        'CLG_SUSPENCE_ACNO': data.CLG_SUSPENCE_ACNO,
        'INWARD_BILL_COLLECTION_ACNO': data.INWARD_BILL_COLLECTION_ACNO,
        'INWARD_BILL_RECEIVABLE_ACNO': data.INWARD_BILL_RECEIVABLE_ACNO,
        'IS_ALLOW_RECOVERY': data.IS_ALLOW_RECOVERY,
        'RECOVERY_METHOD': data.RECOVERY_METHOD,
        'IS_PROCESS_FOR_MONTH': data.IS_PROCESS_FOR_MONTH,
        'RECOVERY_DR_ACNO': data.RECOVERY_DR_ACNO,
        'IS_PROCESS_UPTO_TRANDATE': data.IS_PROCESS_UPTO_TRANDATE,
        'HO_GLACNO': data.HO_GLACNO,
        'BG_DR_ACNO': data.BG_DR_ACNO,
        'BG_CR_ACNO': data.BG_CR_ACNO,
        'PAY_ORDER_ACNO': data.PAY_ORDER_ACNO,
        'INWARD_BILLS_PURCHASE_ACNO': data.INWARD_BILLS_PURCHASE_ACNO,
        'YEAR_CLOSING_TRANSFER_ACNO': data.YEAR_CLOSING_TRANSFER_ACNO,
        'PL_TRANSFER_ACNO': data.PL_TRANSFER_ACNO,
        'AUTHORIZED_SHARE_CAPITAL_CODE': data.AUTHORIZED_SHARE_CAPITAL_CODE,
        'TDS_PAYABLE_GLACNO': data.TDS_PAYABLE_GLACNO,
        'SURCHARGE_GLACNO': data.SURCHARGE_GLACNO,
        'CHEQUE_CHARGES_ACNO': data.CHEQUE_CHARGES_ACNO,
        'CHEQUE_BOUNCE_ACNO': data.CHEQUE_BOUNCE_ACNO,
        'CHEQUE_BOUNCE_CHARGES': data.CHEQUE_BOUNCE_CHARGES,
        'MICR_CHARGES_ACNO': data.MICR_CHARGES_ACNO,
        'MICR_CHARGES_AMOUNT': data.MICR_CHARGES_AMOUNT,
        'MICR_CHARGES_INWORD_CLG': data.MICR_CHARGES_INWORD_CLG,
        'GRACE_PERIOD': data.GRACE_PERIOD,
        'MORATORIUM_PERIOD': data.MORATORIUM_PERIOD,
        'DIV_CALCU_MONTH': data.DIV_CALCU_MONTH,
        'DIV_PAYABLE_FOR_LAST_YEARS': data.DIV_PAYABLE_FOR_LAST_YEARS,
        'WEEKLY_HOLIDAY': data.WEEKLY_HOLIDAY,
        'HALF_DAY': data.HALF_DAY,
        'SANCTIONED_CASH_LIMIT': data.SANCTIONED_CASH_LIMIT,
        'HIGH_VALUE_CLEARING_AMT': data.HIGH_VALUE_CLEARING_AMT,
        'MEMBER_FOR_GUR': data.MEMBER_FOR_GUR,
        'INT_CALC_METHOD': data.INT_CALC_METHOD,
        'IS_PGCOMMISSION_PERCALCULATION': data.IS_PGCOMMISSION_PERCALCULATION,
        'NPA_METHOD': data.NPA_METHOD,
        'NPA_SUBMETHOD': data.NPA_SUBMETHOD,
        'AUTO_LOCK_TIME': data.AUTO_LOCK_TIME,
        'PASSWORD_EXPIRE_DAYS': data.PASSWORD_EXPIRE_DAYS,
        'IS_ALLOW_CLG_TALLY_VOUCHER': data.IS_ALLOW_CLG_TALLY_VOUCHER,
        'IS_CLG_DATE_ADD': data.IS_CLG_DATE_ADD,
        'IS_AUTO_CLEARING_EFFECT': data.IS_AUTO_CLEARING_EFFECT,
        'AUTO_NO': data.AUTO_NO,
        'MASTER_APPROVAL_REQUIRED': data.MASTER_APPROVAL_REQUIRED,
        'IS_POSTING_DD_PREPARATION': data.IS_POSTING_DD_PREPARATION,
        'IS_AUTO_INSTRUCTION_PASS': data.IS_AUTO_INSTRUCTION_PASS,
        'MAINTAIN_CHEQUE_SERIES': data.MAINTAIN_CHEQUE_SERIES,
        'PIGMY_IS_AUTO_VOUCHER': data.PIGMY_IS_AUTO_VOUCHER,
        'IS_MICR_CHARGES_APPL': data.IS_MICR_CHARGES_APPL,
        'IS_GURR_FROM_MEMBERS': data.IS_GURR_FROM_MEMBERS,
        'IS_AUTOPOSTDAILY_OVERDRAFT_INT': data.IS_AUTOPOSTDAILY_OVERDRAFT_INT,
        'SCHMWISE_REC_IMPEXP': data.SCHMWISE_REC_IMPEXP,
        'DENOMINATION_REQUIRE': data.DENOMINATION_REQUIRE,
        'TELLER_MODE': data.TELLER_MODE,
        'IS_ALLOW_SCHEME_GL_ENTRY': data.IS_ALLOW_SCHEME_GL_ENTRY,
        'TOKEN_NO_APPLICABLE': data.TOKEN_NO_APPLICABLE,
        'MASTER_ATTACH_JOINT_NAMES': data.MASTER_ATTACH_JOINT_NAMES,
        'MASTER_ATTACH_GUARDIAN_NAMES': data.MASTER_ATTACH_GUARDIAN_NAMES,
        'PIGMY_AC_RENEW_APPLY': data.PIGMY_AC_RENEW_APPLY,
        'IS_RECEIPTNO_IN_PIGMYCHART': data.IS_RECEIPTNO_IN_PIGMYCHART,
        'IS_REBIT_INTRATE_CAL': data.IS_REBIT_INTRATE_CAL,
        'IS_ALLOW_LOANINT_CHANGE': data.IS_ALLOW_LOANINT_CHANGE,
        'IS_CONSIDER_CCRENEWAL_AS_OPEN': data.IS_CONSIDER_CCRENEWAL_AS_OPEN,
        'IS_ALLOW_RECOVERY_DIFF': data.IS_ALLOW_RECOVERY_DIFF,
        'CUSTOMER_ID_REQUIRED': data.CUSTOMER_ID_REQUIRED,
        'IS_TDS_CALCULATE': data.IS_TDS_CALCULATE,
        'IS_AUTO_VOUCHER_NPA_OIR': data.IS_AUTO_VOUCHER_NPA_OIR,
        'IS_HO_SUB_GLACNO_REQUIRED': data.IS_HO_SUB_GLACNO_REQUIRED,
        'IS_REQUIRE_CLEARING_OPTION': data.IS_REQUIRE_CLEARING_OPTION,
        'IS_ALLOW_USER_MULTI_LOGIN': data.IS_ALLOW_USER_MULTI_LOGIN,
        'IS_BANKERS_COMM_TRAN_REQD': data.IS_BANKERS_COMM_TRAN_REQD,
        'IS_IBCIBR_VOUCH_REQD': data.IS_IBCIBR_VOUCH_REQD,
        'DEPRECIATION_WITH_HALFFULLRATE': data.DEPRECIATION_WITH_HALFFULLRATE,
        'IS_AUTO_UPDATE_SHARES_NO': data.IS_AUTO_UPDATE_SHARES_NO,
        'WITHDRW_CLOSING_FOR_GURMEMBERS': data.WITHDRW_CLOSING_FOR_GURMEMBERS,
        'PREVIOUS_DATE': data.PREVIOUS_DATE,
        'CURRENT_DATE': data.CURRENT_DATE,
        'DAY_BEGIN_EXECUTED': data.DAY_BEGIN_EXECUTED,
        'DAY_END_EXECUTED': data.DAY_END_EXECUTED,
        'PIGMY_PREVIOUS_DATE': data.PIGMY_PREVIOUS_DATE,
        'PIGMY_CURRENT_DATE': data.PIGMY_CURRENT_DATE,
        'PIGMY_DAY_BEGIN_EXECUTED': data.PIGMY_DAY_BEGIN_EXECUTED,
        'PIGMY_DAY_END_EXECUTED': data.PIGMY_DAY_END_EXECUTED,
        'CASH_IN_HAND_ACNO': data.CASH_IN_HAND_ACNO,
        'BACK_DAY_OPTION': data.BACK_DAY_OPTION,
        'ON_LINE': data.ON_LINE,
        'IS_RECEIPT_PRINT_DESIGNMETHOD': data.IS_RECEIPT_PRINT_DESIGNMETHOD,
        'CLG_HOUSE_METHOD': data.CLG_HOUSE_METHOD,
        'LINES_PER_PASSBOOKPAGE': data.LINES_PER_PASSBOOKPAGE,
      })
    })
  }


  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.systemMasterParametersService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      this.resetForm();
    })
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  // Reset Function
  resetForm() {
    this.createForm();
  }
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete bank master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.systemMasterParametersService.deleteData(id).subscribe(data1 => {
          this.systemParameters = data1;
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        }), (error) => {
          console.log(error)
        }
        // to reload after delete of data
        this.rerender();
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your data is safe.',
          'error'
        )
      }
    })
  }
  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (this['value'] != '') {
            that
              .search(this['value'])
              .draw();
          } else {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

  }

}







