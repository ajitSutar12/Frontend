
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
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs-compat';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { SystemMasterParametersService } from './system-master-parameters.service';
import Swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import * as moment from 'moment';
import { nullSafeIsEquivalent, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { TranslateService } from '@ngx-translate/core';

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
  BRANCH_CODE: number;

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
  // BRANCH_CITY_NAME: string;
  // COMPANY_CODE: string;
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
  RECOVERY_METHOD: boolean;
  IS_PROCESS_FOR_MONTH: boolean;
  RECOVERY_DR_ACNO: string;
  IS_PROCESS_UPTO_TRANDATE: boolean;
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
  IS_ALLOW_CLG_TALLY_VOUCHER: boolean;//checkbox
  IS_CLG_DATE_ADD: boolean;
  IS_AUTO_CLEARING_EFFECT: boolean;
  AUTO_NO: boolean;
  MASTER_APPROVAL_REQUIRED: boolean;
  IS_POSTING_DD_PREPARATION: boolean;
  IS_AUTO_INSTRUCTION_PASS: boolean;
  MAINTAIN_CHEQUE_SERIES: boolean;
  PIGMY_IS_AUTO_VOUCHER: boolean;
  IS_MICR_CHARGES_APPL: boolean;
  IS_GURR_FROM_MEMBERS: boolean;
  IS_AUTOPOSTDAILY_OVERDRAFT_INT: boolean;
  SCHMWISE_REC_IMPEXP: boolean;
  DENOMINATION_REQUIRE: boolean;
  TELLER_MODE: boolean;
  IS_ALLOW_SCHEME_GL_ENTRY: boolean;
  TOKEN_NO_APPLICABLE: boolean;
  MASTER_ATTACH_JOINT_NAMES: boolean;
  MASTER_ATTACH_GUARDIAN_NAMES: boolean;
  PIGMY_AC_RENEW_APPLY: boolean;
  IS_RECEIPTNO_IN_PIGMYCHART: boolean;
  IS_REBIT_INTRATE_CAL: boolean;
  IS_ALLOW_LOANINT_CHANGE: boolean;
  IS_CONSIDER_CCRENEWAL_AS_OPEN: boolean;
  IS_ALLOW_RECOVERY_DIFF: boolean;
  // CUSTOMER_ID_REQUIRED: string;
  IS_TDS_CALCULATE: boolean;
  IS_AUTO_VOUCHER_NPA_OIR: boolean;
  IS_HO_SUB_GLACNO_REQUIRED: boolean;
  IS_REQUIRE_CLEARING_OPTION: boolean;
  IS_ALLOW_USER_MULTI_LOGIN: boolean;
  IS_BANKERS_COMM_TRAN_REQD: boolean;
  IS_IBCIBR_VOUCH_REQD: boolean;
  DEPRECIATION_WITH_HALFFULLRATE: boolean;
  IS_AUTO_UPDATE_SHARES_NO: boolean;
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
  // BACK_DAY_OPTION: string;
  ON_LINE: boolean;
  IS_RECEIPT_PRINT_DESIGNMETHOD: boolean;
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
  formSubmitted = false;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  //api 
  url = environment.base_url
  WeeklyandHalfHoliday = [{ value: 'No Holiday', label: 'No Holiday', key: 7 },
  { value: 'Sunday', label: 'Sunday', key: 0 },
  { value: 'Monday', label: 'Monday', key: 1 },
  { value: 'Tuesday', label: 'Tuesday', key: 2 },
  { value: 'Wednesday', label: 'Wednesday', key: 3 },
  { value: 'Thursday', label: 'Thursday', key: 4 },
  { value: 'Friday', label: 'Friday', key: 5 },
  { value: 'Saturday', label: 'Saturday', key: 6 }]

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
  // WeeklyandHalfHoliday: Array<IOption> = this.WeeklyHolidayService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  dropDown;
  // dropdown ngModel variables
  //tab1 variable
  ngbranch: any = null
  //tab2 variables
  ngddcom: any = null
  ngbonus: any = null
  ngbill: any = null
  ngbills: any = null
  ngbcbr: any = null
  ngclr: any = null
  nginward: any = null
  nginwardbill: any = null
  ngrecovery: any = null
  //tab3 variables
  ngheadoffice: any = null
  ngbankgaurantee: any = null
  ngbankgauranteecr: any = null
  ngpayorder: any = null
  nginwardbilss: any = null
  ngyearend: any = null
  ngprofitloss: any = null
  ngsharecapital: any = null
  ngtds: any = null
  ngsurcharge: any = null
  ngcheque: any = null
  ngchequebounce: any = null
  ngmicrcharges: any = null
  //tab4 variables
  ngweeklyholiday: any = null
  nghalfday: any = null
  ngintcal: any = null
  //tab4 variables
  ngbackoffice: any = null
  ngcashinhand: any = null
  ngclrhouse: any = null
  ngcgstGL: any = null
  ngsgstGL: any = null
  ngigstGL: any = null
  ngdividend: any = null
  selectedItems: any;
  FaceValueDividendTrue = true;
  OtherSettings_True = false;
  OwnbranchMasterDropdown: any;
  ACMasterDropdown: any;
  Show: boolean = false;
  newbtnShow: boolean;
  datemax: any;

  // for date 
  ngbankstartdate: any = null
  ngpreviousdate: any = null
  ngcurrentdate: any = null
  ngpigmypreviousdate: any = null
  ngpigmycurrentdate: any = null
  BRANCH_CODE: boolean = true
  maxDate: Date;
  minDate: Date;
  constructor(
    private http: HttpClient,
    public WeeklyHolidayService: WeeklyHolidayService,
    public IntrestCalculationMethodService: IntrestCalculationMethodService,
    public ACMasterDropdownService: ACMasterDropdownService,
    public OwnbranchMasterService: OwnbranchMasterService,
    public StatementTypeService: StatementTypeService,
    public selectOptionService: SelectOptionService,
    public systemMasterParametersService: SystemMasterParametersService,
    private fb: FormBuilder,
    private config: NgSelectConfig,private translate:TranslateService) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate());
    // this.BRANCH_CODE = true
    this.systemMasterParametersService.getData().subscribe(data => {

      if (data.length == 0) {
        this.showButton = true
        this.updateShow = false

      } else {
        this.updateShow = true
        this.showButton = false
      }
    })
  }

  ngOnInit(): void {
    this.createForm();
    this.angForm.controls['BRANCH_CODE'].disable()
    this.angForm.controls['BACK_DAY_OPTION'].disable()

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
          title: this.translate.instant('Utility.Action.Action'),
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        // {
        //   title: 'Type',
        //   data: 'SYSPARA_CODE'
        // },
        {
          title: this.translate.instant('Utility.System_Master_Parameters.Bank_Code'),
          data: 'BANK_CODE'
        }, {
          title: this.translate.instant('Utility.System_Master_Parameters.Bank_Name'),
          data: 'BANK_NAME'
        }, {
          title: this.translate.instant('Utility.System_Master_Parameters.Branch_Code'),
          data: 'BRANCH_CODE'
        }, {
          title: this.translate.instant('Utility.System_Master_Parameters.Bank_Add'),
          data: 'ADDRESS'
        }, {
          title: this.translate.instant('Utility.System_Master_Parameters.Bank_Start_date'),
          data: 'COMPANY_START_DATE'
        },

        {
          title: this.translate.instant('Utility.System_Master_Parameters.Previous_Date'),
          data: 'PREVIOUS_DATE'
        }, {
          title: this.translate.instant('Utility.System_Master_Parameters.Current_Date'),
          data: 'CURRENT_DATE'
        },

        {
          title: this.translate.instant('Utility.System_Master_Parameters.Pigmy_Previous_Date'),
          data: 'PIGMY_PREVIOUS_DATE'
        },
        {
          title: this.translate.instant('Utility.System_Master_Parameters.Pigmy_Current_Date'),
          data: 'PIGMY_CURRENT_DATE'
        },

      ],
      dom: "Blrtip",
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
  dateArr = []
  getWeeklyHoliday(event) {
    this.dateArr = []
    event.forEach(element => {
      if (element.key != 7) {
        let finYear
        var sysDate = new Date()
        var year = sysDate.getFullYear();
        var month = new Date().getMonth();
        month > 2 ? finYear = year : finYear = year - 1

        var full = []
        var fullDate = `01/04/${finYear}`;
        full = fullDate.split(' ');
        var date = full[0].split(/\//);
        var newDate = date[1] + '/' + date[0] + '/' + date[2]
        var formatDate = new Date(newDate);

        // starting and end date
        let start = moment(formatDate);
        let end = moment(start).add(12, 'M');
        var arr = [];
        // Get "next" day
        let tmp = start.clone().day(element.key);
        if (tmp.isAfter(start, 'd')) {
          arr.push(tmp.format('DD/MM/YYYY'));
        }
        while (tmp.isBefore(end)) {
          tmp.add(7, 'days');
          arr.push(tmp.format('DD/MM/YYYY'));
        }
        for (let i = 0; i < arr.length - 1; i++) {
          this.dateArr.push(arr[i])
        }
      }
      else {
        this.dateArr = []
      }
    });
  }

  // enable-disable checkbox event
  ON_LINE($event) {
    if ($event.target.checked) {
      document.getElementById("PREVIOUS_DATE").setAttribute("disabled", "true");
      document.getElementById("CURRENT_DATE").setAttribute("disabled", "true");
      document.getElementById("PIGMY_PREVIOUS_DATE").setAttribute("disabled", "true");
      document.getElementById("PIGMY_CURRENT_DATE").setAttribute("disabled", "true");
    } else {

      document.getElementById("PREVIOUS_DATE").removeAttribute("disabled");
      document.getElementById("CURRENT_DATE").removeAttribute("disabled");
      document.getElementById("PIGMY_PREVIOUS_DATE").removeAttribute("disabled");
      document.getElementById("PIGMY_CURRENT_DATE").removeAttribute("disabled");
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      SYSPARA_CODE: ['A'],
      BANK_CODE: ['', [Validators.pattern, Validators.required]],
      BANK_NAME: ['', [Validators.pattern, Validators.required]],
      BRANCH_CODE: [''],
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
      // BRANCH_CITY_NAME: ['', [Validators.pattern, Validators.required]],
      // COMPANY_CODE: ['', [Validators.pattern, Validators.required]],
      DD_COMMISSION_ACNO: [''],
      DIVIDEND_ACNO: ['', [Validators.required]],
      BONUS_GLACNO: ['', [Validators.required]],
      CGST_GLACNO: ['', [Validators.required]],
      SGST_GLACNO: ['', [Validators.required]],
      IGST_GLACNO: ['', [Validators.required]],
      INWARD_BILL_COLLECTION_ACNO: [''],
      INWARD_BILL_RECEIVABLE_ACNO: [''],
      BCBR_DR_GLACNO: [''],
      BCBR_DR_SUB_GLACNO: [''],
      BILL_RECEIVABLE_ACNO: [''],
      BILL_FOR_COLLECTION_ACNO: [''],
      CLG_SUSPENCE_ACNO: [''],
      IS_ALLOW_RECOVERY: [''],
      RECOVERY_METHOD: ['MemberNoWiseRecovery '],
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
      // CUSTOMER_ID_REQUIRED: [''],
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
      DAY_BEGIN_EXECUTED: new FormControl('DayBeginExecuted'),
      DAY_END_EXECUTED: [''],
      PIGMY_PREVIOUS_DATE: ['', [Validators.required]],
      PIGMY_CURRENT_DATE: ['', [Validators.required]],
      PIGMY_DAY_BEGIN_EXECUTED: new FormControl('DayBeginExecuted'),
      PIGMY_DAY_END_EXECUTED: [''],
      CASH_IN_HAND_ACNO: ['', [Validators.required]],
      BACK_DAY_OPTION: [''],
      ON_LINE: [''],
      IS_RECEIPT_PRINT_DESIGNMETHOD: [''],
      CLG_HOUSE_METHOD: ['', [Validators.required]],
      LINES_PER_PASSBOOKPAGE: ['', [Validators.pattern]],
      FROM_DATE: ['', [Validators.pattern]],
      TO_DATE: ['', [Validators.pattern]],
      AMOUNT: ['', [Validators.pattern]],
    });
  }

  multiField = []
  ngfromdate
  ngtodate
  addField() {
    const formVal = this.angForm.value;
    var object = {
      FROM_DATE: (formVal.FROM_DATE == '' || formVal.FROM_DATE == 'Invalid date') ? this.ngfromdate = '' : this.ngfromdate = moment(formVal.FROM_DATE).format('DD/MM/YYYY'),
      TO_DATE: (formVal.TO_DATE == '' || formVal.TO_DATE == 'Invalid date') ? this.ngtodate = '' : this.ngtodate = moment(formVal.TO_DATE).format('DD/MM/YYYY'),
      AMOUNT: formVal.AMOUNT,
    }
    this.multiField.push(object);
    this.resetField()
  }

  updateField() {
    let index = this.intIndex;
    this.addShowButton = true;
    this.UpdateShowButton = false;
    const formVal = this.angForm.value;
    var object = {
      FROM_DATE: (formVal.FROM_DATE == '' || formVal.FROM_DATE == 'Invalid date') ? this.ngfromdate = '' : this.ngfromdate = moment(formVal.FROM_DATE).format('DD/MM/YYYY'),
      TO_DATE: (formVal.TO_DATE == '' || formVal.TO_DATE == 'Invalid date') ? this.ngtodate = '' : this.ngtodate = moment(formVal.TO_DATE).format('DD/MM/YYYY'),
      AMOUNT: formVal.AMOUNT,
      id: this.intID
    }
    this.multiField[index] = object;
    this.resetField()
  }

  intIndex: number
  intID: number
  addShowButton: boolean = true
  UpdateShowButton: boolean = false

  editField(id) {
    this.intIndex = id
    this.intID = this.multiField[id].id;
    this.addShowButton = false;
    this.UpdateShowButton = true;
    this.angForm.patchValue({
      FROM_DATE: this.multiField[id].FROM_DATE,
      TO_DATE: this.multiField[id].TO_DATE,
      AMOUNT: this.multiField[id].AMOUNT,

    })
  }

  resetField() {
    this.angForm.controls['FROM_DATE'].reset()
    this.angForm.controls['TO_DATE'].reset()
    this.angForm.controls['AMOUNT'].reset()
    this.ngtodate = null
    this.ngfromdate = null
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
      this.angForm.controls['RECOVERY_METHOD'].reset();
      this.angForm.controls['IS_PROCESS_FOR_MONTH'].reset();
      this.angForm.controls['IS_PROCESS_UPTO_TRANDATE'].reset();
      this.angForm.controls['RECOVERY_DR_ACNO'].reset();
    }
  }
  //to switch to next tab 
  @ViewChild('ctdTabset') ctdTabset;
  switchNgBTab(id: string) {
    this.ctdTabset.select(id);
  }
 
  submit() { 
    let ngbankstartdate
    let ngpreviousdate
    let ngcurrentdate
    let ngpigmypreviousdate
    let ngpigmycurrentdate


    this.formSubmitted = true;
    const formVal = this.angForm.value;
    this.share = true
    const dataToSend = {

      // Bank Details tab:
      'dateArr': this.dateArr,
      'SYSPARA_CODE': formVal.SYSPARA_CODE,
      'BANK_NAME': formVal.BANK_NAME,


      'BANK_CODE': formVal.BANK_CODE,
      'BRANCH_CODE': formVal.BRANCH_CODE,
      // 'BRANCH_NAME': formVal.BRANCH_NAME,

      'ADDRESS': formVal.ADDRESS,
      'CHAIRMAN': formVal.CHAIRMAN,
      'ACCOUNTANT': formVal.ACCOUNTANT,
      'GENERAL_MANAGER': formVal.GENERAL_MANAGER,

      // 'COMPANY_START_DATE': formVal.COMPANY_START_DATE,
      'COMPANY_START_DATE': (formVal.COMPANY_START_DATE == '' || formVal.COMPANY_START_DATE == 'Invalid date') ? ngbankstartdate = '' : ngbankstartdate = moment(formVal.COMPANY_START_DATE).format('DD/MM/YYYY'),
      'NO_OF_EMPLOYEES': formVal.NO_OF_EMPLOYEES,
      'OFFICER_NAME': formVal.OFFICER_NAME,
      'OFFICER_DESIGNATION': formVal.OFFICER_DESIGNATION,
      'RBI_LICENCE_NO': formVal.RBI_LICENCE_NO,
      'MANAGER_NAME': formVal.MANAGER_NAME,
      // 'BRANCH_CITY_NAME': formVal.BRANCH_CITY_NAME,
      // 'COMPANY_CODE': formVal.COMPANY_CODE,

      // GL account tab1:
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

      // GL account tab2:
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
      // 'CUSTOMER_ID_REQUIRED': formVal.CUSTOMER_ID_REQUIRED,

      // Flag Setting Tab:
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
      'IS_ALLOW_CLG_TALLY_VOUCHER': (formVal.IS_ALLOW_CLG_TALLY_VOUCHER == true ? '1' : '0'),
      'IS_CLG_DATE_ADD': (formVal.IS_CLG_DATE_ADD == true ? '1' : '0'),
      'IS_AUTO_CLEARING_EFFECT': (formVal.IS_AUTO_CLEARING_EFFECT == true ? '1' : '0'),
      'AUTO_NO': (formVal.AUTO_NO == true ? '1' : '0'),
      'MASTER_APPROVAL_REQUIRED': (formVal.MASTER_APPROVAL_REQUIRED == true ? '1' : '0'),
      'IS_POSTING_DD_PREPARATION': (formVal.IS_POSTING_DD_PREPARATION == true ? '1' : '0'),
      'IS_AUTO_INSTRUCTION_PASS': (formVal.IS_AUTO_INSTRUCTION_PASS == true ? '1' : '0'),
      'MAINTAIN_CHEQUE_SERIES': (formVal.MAINTAIN_CHEQUE_SERIES == true ? '1' : '0'),
      'PIGMY_IS_AUTO_VOUCHER': (formVal.PIGMY_IS_AUTO_VOUCHER == true ? '1' : '0'),
      'IS_MICR_CHARGES_APPL': (formVal.IS_MICR_CHARGES_APPL == true ? '1' : '0'),
      'IS_GURR_FROM_MEMBERS': (formVal.IS_GURR_FROM_MEMBERS == true ? '1' : '0'),
      'IS_AUTOPOSTDAILY_OVERDRAFT_INT': (formVal.IS_AUTOPOSTDAILY_OVERDRAFT_INT == true ? '1' : '0'),
      'SCHMWISE_REC_IMPEXP': (formVal.SCHMWISE_REC_IMPEXP == true ? '1' : '0'),
      'DENOMINATION_REQUIRE': (formVal.DENOMINATION_REQUIRE == true ? '1' : '0'),
      'TELLER_MODE': (formVal.TELLER_MODE == true ? '1' : '0'),
      'IS_ALLOW_SCHEME_GL_ENTRY': (formVal.IS_ALLOW_SCHEME_GL_ENTRY == true ? '1' : '0'),
      'TOKEN_NO_APPLICABLE': (formVal.TOKEN_NO_APPLICABLE == true ? '1' : '0'),
      'MASTER_ATTACH_JOINT_NAMES': (formVal.MASTER_ATTACH_JOINT_NAMES == true ? '1' : '0'),
      'MASTER_ATTACH_GUARDIAN_NAMES': (formVal.MASTER_ATTACH_GUARDIAN_NAMES == true ? '1' : '0'),
      'PIGMY_AC_RENEW_APPLY': (formVal.PIGMY_AC_RENEW_APPLY == true ? '1' : '0'),
      'IS_RECEIPTNO_IN_PIGMYCHART': (formVal.IS_RECEIPTNO_IN_PIGMYCHART == true ? '1' : '0'),
      'IS_REBIT_INTRATE_CAL': (formVal.IS_REBIT_INTRATE_CAL == true ? '1' : '0'),
      'IS_ALLOW_LOANINT_CHANGE': (formVal.IS_ALLOW_LOANINT_CHANGE == true ? '1' : '0'),
      'IS_CONSIDER_CCRENEWAL_AS_OPEN': (formVal.IS_CONSIDER_CCRENEWAL_AS_OPEN == true ? '1' : '0'),
      'IS_ALLOW_RECOVERY_DIFF': (formVal.IS_ALLOW_RECOVERY_DIFF == true ? '1' : '0'),
      'IS_TDS_CALCULATE': (formVal.IS_TDS_CALCULATE == true ? '1' : '0'),
      'IS_AUTO_VOUCHER_NPA_OIR': (formVal.IS_AUTO_VOUCHER_NPA_OIR == true ? '1' : '0'),
      'IS_HO_SUB_GLACNO_REQUIRED': (formVal.IS_HO_SUB_GLACNO_REQUIRED == true ? '1' : '0'),
      'IS_REQUIRE_CLEARING_OPTION': (formVal.IS_REQUIRE_CLEARING_OPTION == true ? '1' : '0'),
      'IS_ALLOW_USER_MULTI_LOGIN': (formVal.IS_ALLOW_USER_MULTI_LOGIN == true ? '1' : '0'),
      'IS_BANKERS_COMM_TRAN_REQD': (formVal.IS_BANKERS_COMM_TRAN_REQD == true ? '1' : '0'),
      'IS_IBCIBR_VOUCH_REQD': (formVal.IS_IBCIBR_VOUCH_REQD == true ? '1' : '0'),
      'DEPRECIATION_WITH_HALFFULLRATE': (formVal.DEPRECIATION_WITH_HALFFULLRATE == true ? '1' : '0'),
      'IS_AUTO_UPDATE_SHARES_NO': (formVal.IS_AUTO_UPDATE_SHARES_NO == true ? '1' : '0'),
      'WITHDRW_CLOSING_FOR_GURMEMBERS': (formVal.WITHDRW_CLOSING_FOR_GURMEMBERS == true ? '1' : '0'),
      'ON_LINE': (formVal.ON_LINE == true ? '1' : '0'),
      'IS_RECEIPT_PRINT_DESIGNMETHOD': (formVal.IS_RECEIPT_PRINT_DESIGNMETHOD == true ? '1' : '0'),
      // Admin Options tab:
      // 'PREVIOUS_DATE': formVal.PREVIOUS_DATE,
      'PREVIOUS_DATE': (formVal.PREVIOUS_DATE == '' || formVal.PREVIOUS_DATE == 'Invalid date') ? ngpreviousdate = '' : ngpreviousdate = moment(formVal.PREVIOUS_DATE).format('DD/MM/YYYY'),
      // 'CURRENT_DATE': formVal.CURRENT_DATE,
      'CURRENT_DATE': (formVal.CURRENT_DATE == '' || formVal.CURRENT_DATE == 'Invalid date') ? ngcurrentdate = '' : ngcurrentdate = moment(formVal.CURRENT_DATE).format('DD/MM/YYYY'),
      'DAY_BEGIN_EXECUTED': formVal.DAY_BEGIN_EXECUTED,
      'DAY_END_EXECUTED': formVal.DAY_END_EXECUTED,
      // 'PIGMY_PREVIOUS_DATE': formVal.PIGMY_PREVIOUS_DATE,
      'PIGMY_PREVIOUS_DATE': (formVal.PIGMY_PREVIOUS_DATE == '' || formVal.PIGMY_PREVIOUS_DATE == 'Invalid date') ? ngpigmypreviousdate = '' : ngpigmypreviousdate = moment(formVal.PIGMY_PREVIOUS_DATE).format('DD/MM/YYYY'),
      // 'PIGMY_CURRENT_DATE': formVal.PIGMY_CURRENT_DATE,
      'PIGMY_CURRENT_DATE': (formVal.PIGMY_CURRENT_DATE == '' || formVal.PIGMY_CURRENT_DATE == 'Invalid date') ? ngpigmycurrentdate = '' : ngpigmycurrentdate = moment(formVal.PIGMY_CURRENT_DATE).format('DD/MM/YYYY'),
      'PIGMY_DAY_BEGIN_EXECUTED': formVal.PIGMY_DAY_BEGIN_EXECUTED,
      'PIGMY_DAY_END_EXECUTED': formVal.PIGMY_DAY_END_EXECUTED,
      'CASH_IN_HAND_ACNO': formVal.CASH_IN_HAND_ACNO,
      'BACK_DAY_OPTION': formVal.BACK_DAY_OPTION,

      'CLG_HOUSE_METHOD': formVal.CLG_HOUSE_METHOD,
      'LINES_PER_PASSBOOKPAGE': formVal.LINES_PER_PASSBOOKPAGE,

      'CGST_GLACNO': formVal.CGST_GLACNO,
      'SGST_GLACNO': formVal.SGST_GLACNO,
      'IGST_GLACNO': formVal.IGST_GLACNO,
      'sharefield': this.multiField
    }
    let array


    this.systemMasterParametersService.postData(dataToSend).subscribe(data1 => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
      this.formSubmitted = false;
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
    }, (error) => {
      console.log(error)
    })

    this.angForm.controls['COMPANY_START_DATE'].reset()
    //To clear form
    this.resetForm();
  }

  share: boolean = false
  addsharepart() {
    this.share = true
  }

  //Method for append data into fields
  updatecheckdata: any
  selectedRoleName: string;

  editClickHandler(id) {
    this.angForm.controls['BANK_CODE'].disable()
    let ngbankstartdate
    let ngpreviousdate
    let ngcurrentdate
    let ngpigmypreviousdate
    let ngpigmycurrentdate

    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.systemMasterParametersService.getFormData(id).subscribe(data => {


      // let array = new Array;
      // let selectedRoleName = '';
      // let obj = new Array

      // let list = array;
      // data.WEEKLY_HOLIDAY.forEach(element => {
      //   obj.push(element);
      // })
      // this.ngweeklyholiday = obj



      this.updatecheckdata = data
      this.updateID = data.id;
      this.ngbranch = Number(data.BRANCH_CODE)
      this.ngddcom = Number(data.DD_COMMISSION_ACNO)
      this.ngdividend = Number(data.DIVIDEND_ACNO)
      this.ngbonus = Number(data.BONUS_GLACNO)
      this.ngbills = Number(data.BILL_RECEIVABLE_ACNO)
      this.ngbill = Number(data.BILL_FOR_COLLECTION_ACNO)
      this.ngbcbr = Number(data.BCBR_DR_GLACNO)
      this.ngclr = Number(data.CLG_SUSPENCE_ACNO)
      this.nginward = Number(data.INWARD_BILL_COLLECTION_ACNO)
      this.nginwardbill = Number(data.INWARD_BILL_RECEIVABLE_ACNO)
      this.ngcgstGL = Number(data.CGST_GLACNO)
      this.ngsgstGL = Number(data.SGST_GLACNO)
      this.ngigstGL = Number(data.IGST_GLACNO)
      this.ngrecovery = Number(data.RECOVERY_DR_ACNO)
      this.ngheadoffice = Number(data.HO_GLACNO)
      this.ngbankgaurantee = Number(data.BG_DR_ACNO)
      this.ngbankgauranteecr = Number(data.BG_CR_ACNO)
      this.ngpayorder = Number(data.PAY_ORDER_ACNO)
      this.nginwardbilss = Number(data.INWARD_BILLS_PURCHASE_ACNO)
      this.ngyearend = Number(data.YEAR_CLOSING_TRANSFER_ACNO)
      this.ngprofitloss = Number(data.PL_TRANSFER_ACNO)
      this.ngsharecapital = Number(data.AUTHORIZED_SHARE_CAPITAL_CODE)
      this.ngtds = Number(data.TDS_PAYABLE_GLACNO)
      this.ngsurcharge = Number(data.SURCHARGE_GLACNO)
      this.ngcheque = Number(data.CHEQUE_CHARGES_ACNO)
      this.ngchequebounce = Number(data.CHEQUE_BOUNCE_ACNO)
      this.ngmicrcharges = Number(data.MICR_CHARGES_ACNO)
      this.ngbackoffice = Number(data.BACK_DAY_OPTION)
      this.ngcashinhand = Number(data.CASH_IN_HAND_ACNO)
      this.ngclrhouse = Number(data.CLG_HOUSE_METHOD)

      this.ngweeklyholiday = data.WEEKLY_HOLIDAY
      this.nghalfday = data.HALF_DAY
      this.ngintcal = data.INT_CALC_METHOD

      if (data.IS_ALLOW_RECOVERY_DIFF == '1') {
        this.Show = true;
      } else {
        this.Show = false;
      }

      this.ngcurrentdate = data.CURRENT_DATE
      this.ngpreviousdate = data.PREVIOUS_DATE
      this.ngpigmypreviousdate = data.PIGMY_PREVIOUS_DATE
      this.ngpigmycurrentdate = data.PIGMY_CURRENT_DATE
      this.multiField = data.SYSPARAID
      this.angForm.patchValue({

        // Bank Details tab:

        'SYSPARA_CODE': data.SYSPARA_CODE,
        'BANK_NAME': data.BANK_NAME,
        'BANK_CODE': data.BANK_CODE,
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
        'IS_ALLOW_RECOVERY': data.IS_ALLOW_RECOVERY,
        'RECOVERY_METHOD': data.RECOVERY_METHOD,
        'IS_PROCESS_FOR_MONTH': data.IS_PROCESS_FOR_MONTH,
        'RECOVERY_DR_ACNO': data.RECOVERY_DR_ACNO,
        'IS_PROCESS_UPTO_TRANDATE': data.IS_PROCESS_UPTO_TRANDATE,
        'CHEQUE_BOUNCE_CHARGES': data.CHEQUE_BOUNCE_CHARGES,
        'MICR_CHARGES_AMOUNT': data.MICR_CHARGES_AMOUNT,
        'MICR_CHARGES_INWORD_CLG': data.MICR_CHARGES_INWORD_CLG,
        'GRACE_PERIOD': data.GRACE_PERIOD,
        'MORATORIUM_PERIOD': data.MORATORIUM_PERIOD,
        'DIV_CALCU_MONTH': data.DIV_CALCU_MONTH,
        'DIV_PAYABLE_FOR_LAST_YEARS': data.DIV_PAYABLE_FOR_LAST_YEARS,
        'WEEKLY_HOLIDAY': data.WEEKLY_HOLIDAY,
        'SANCTIONED_CASH_LIMIT': data.SANCTIONED_CASH_LIMIT,
        'HIGH_VALUE_CLEARING_AMT': data.HIGH_VALUE_CLEARING_AMT,
        'MEMBER_FOR_GUR': data.MEMBER_FOR_GUR,
        'IS_PGCOMMISSION_PERCALCULATION': data.IS_PGCOMMISSION_PERCALCULATION,
        'NPA_METHOD': data.NPA_METHOD,
        'NPA_SUBMETHOD': data.NPA_SUBMETHOD,
        'AUTO_LOCK_TIME': data.AUTO_LOCK_TIME,
        'PASSWORD_EXPIRE_DAYS': data.PASSWORD_EXPIRE_DAYS,
        'IS_ALLOW_CLG_TALLY_VOUCHER': (data.IS_ALLOW_CLG_TALLY_VOUCHER == '1' ? true : false),
        'IS_CLG_DATE_ADD': (data.IS_CLG_DATE_ADD == '1' ? true : false),
        'IS_AUTO_CLEARING_EFFECT': (data.IS_AUTO_CLEARING_EFFECT == '1' ? true : false),
        'AUTO_NO': (data.AUTO_NO == '1' ? true : false),
        'MASTER_APPROVAL_REQUIRED': (data.MASTER_APPROVAL_REQUIRED == '1' ? true : false),
        'IS_POSTING_DD_PREPARATION': (data.IS_POSTING_DD_PREPARATION == '1' ? true : false),
        'IS_AUTO_INSTRUCTION_PASS': (data.IS_AUTO_INSTRUCTION_PASS == '1' ? true : false),
        'MAINTAIN_CHEQUE_SERIES': (data.MAINTAIN_CHEQUE_SERIES == '1' ? true : false),
        'PIGMY_IS_AUTO_VOUCHER': (data.PIGMY_IS_AUTO_VOUCHER == '1' ? true : false),
        'IS_MICR_CHARGES_APPL': (data.IS_MICR_CHARGES_APPL == '1' ? true : false),
        'IS_GURR_FROM_MEMBERS': (data.IS_GURR_FROM_MEMBERS == '1' ? true : false),
        'IS_AUTOPOSTDAILY_OVERDRAFT_INT': (data.IS_AUTOPOSTDAILY_OVERDRAFT_INT == '1' ? true : false),
        'SCHMWISE_REC_IMPEXP': (data.SCHMWISE_REC_IMPEXP == '1' ? true : false),
        'DENOMINATION_REQUIRE': (data.DENOMINATION_REQUIRE == '1' ? true : false),
        'TELLER_MODE': (data.TELLER_MODE == '1' ? true : false),
        'IS_ALLOW_SCHEME_GL_ENTRY': (data.IS_ALLOW_SCHEME_GL_ENTRY == '1' ? true : false),
        'TOKEN_NO_APPLICABLE': (data.TOKEN_NO_APPLICABLE == '1' ? true : false),
        'MASTER_ATTACH_JOINT_NAMES': (data.MASTER_ATTACH_JOINT_NAMES == '1' ? true : false),
        'MASTER_ATTACH_GUARDIAN_NAMES': (data.MASTER_ATTACH_GUARDIAN_NAMES == '1' ? true : false),
        'PIGMY_AC_RENEW_APPLY': (data.PIGMY_AC_RENEW_APPLY == '1' ? true : false),
        'IS_RECEIPTNO_IN_PIGMYCHART': (data.IS_RECEIPTNO_IN_PIGMYCHART == '1' ? true : false),
        'IS_REBIT_INTRATE_CAL': (data.IS_REBIT_INTRATE_CAL == '1' ? true : false),
        'IS_ALLOW_LOANINT_CHANGE': (data.IS_ALLOW_LOANINT_CHANGE == '1' ? true : false),
        'IS_CONSIDER_CCRENEWAL_AS_OPEN': (data.IS_CONSIDER_CCRENEWAL_AS_OPEN == '1' ? true : false),
        'IS_ALLOW_RECOVERY_DIFF': (data.IS_ALLOW_RECOVERY_DIFF == '1' ? true : false),
        'IS_TDS_CALCULATE': (data.IS_TDS_CALCULATE == '1' ? true : false),
        'IS_AUTO_VOUCHER_NPA_OIR': (data.IS_AUTO_VOUCHER_NPA_OIR == '1' ? true : false),
        'IS_HO_SUB_GLACNO_REQUIRED': (data.IS_HO_SUB_GLACNO_REQUIRED == '1' ? true : false),
        'IS_REQUIRE_CLEARING_OPTION': (data.IS_REQUIRE_CLEARING_OPTION == '1' ? true : false),
        'IS_ALLOW_USER_MULTI_LOGIN': (data.IS_ALLOW_USER_MULTI_LOGIN == '1' ? true : false),

        'IS_BANKERS_COMM_TRAN_REQD': (data.IS_BANKERS_COMM_TRAN_REQD == '1' ? true : false),
        'IS_IBCIBR_VOUCH_REQD': (data.IS_IBCIBR_VOUCH_REQD == '1' ? true : false),
        'DEPRECIATION_WITH_HALFFULLRATE': (data.DEPRECIATION_WITH_HALFFULLRATE == '1' ? true : false),
        'IS_AUTO_UPDATE_SHARES_NO': (data.IS_AUTO_UPDATE_SHARES_NO == '1' ? true : false),
        'WITHDRW_CLOSING_FOR_GURMEMBERS': (data.WITHDRW_CLOSING_FOR_GURMEMBERS == '1' ? true : false),
        // Admin Options tab:
        'PREVIOUS_DATE': data.PREVIOUS_DATE,
        'DAY_BEGIN_EXECUTED': data.DAY_BEGIN_EXECUTED,
        'DAY_END_EXECUTED': data.DAY_END_EXECUTED,
        'PIGMY_PREVIOUS_DATE': data.PIGMY_PREVIOUS_DATE,
        'PIGMY_CURRENT_DATE': data.PIGMY_CURRENT_DATE,
        'PIGMY_DAY_BEGIN_EXECUTED': data.PIGMY_DAY_BEGIN_EXECUTED,
        'PIGMY_DAY_END_EXECUTED': data.PIGMY_DAY_END_EXECUTED,
        'ON_LINE': (data.ON_LINE == '1' ? true : false),
        'IS_RECEIPT_PRINT_DESIGNMETHOD': (data.IS_RECEIPT_PRINT_DESIGNMETHOD == '1' ? true : false),
        'LINES_PER_PASSBOOKPAGE': data.LINES_PER_PASSBOOKPAGE,
      })
    })
  }


  //Method for update data 
  updateData() {
    let ngbankstartdate
    let ngpreviousdate
    let ngcurrentdate
    let ngpigmypreviousdate
    let ngpigmycurrentdate

    let data = this.angForm.value;
    delete data.AMOUNT;
    delete data.FROM_DATE;
    delete data.TO_DATE;
    data['id'] = this.updateID;
    data['IS_ALLOW_CLG_TALLY_VOUCHER'] = (data.IS_ALLOW_CLG_TALLY_VOUCHER == true ? '1' : '0')
    data['IS_CLG_DATE_ADD'] = (data.IS_CLG_DATE_ADD == true ? '1' : '0')
    data['IS_AUTO_CLEARING_EFFECT'] = (data.IS_AUTO_CLEARING_EFFECT == true ? '1' : '0')
    data['AUTO_NO'] = (data.AUTO_NO == true ? '1' : '0')
    data['MASTER_APPROVAL_REQUIRED'] = (data.MASTER_APPROVAL_REQUIRED == true ? '1' : '0')
    data['IS_POSTING_DD_PREPARATION'] = (data.IS_POSTING_DD_PREPARATION == true ? '1' : '0')
    data['IS_AUTO_INSTRUCTION_PASS'] = (data.IS_AUTO_INSTRUCTION_PASS == true ? '1' : '0')
    data['MAINTAIN_CHEQUE_SERIES'] = (data.MAINTAIN_CHEQUE_SERIES == true ? '1' : '0')
    data['PIGMY_IS_AUTO_VOUCHER'] = (data.PIGMY_IS_AUTO_VOUCHER == true ? '1' : '0')
    data['IS_MICR_CHARGES_APPL'] = (data.IS_MICR_CHARGES_APPL == true ? '1' : '0')
    data['IS_GURR_FROM_MEMBERS'] = (data.IS_GURR_FROM_MEMBERS == true ? '1' : '0')
    data['IS_AUTOPOSTDAILY_OVERDRAFT_INT'] = (data.IS_AUTOPOSTDAILY_OVERDRAFT_INT == true ? '1' : '0')
    data['SCHMWISE_REC_IMPEXP'] = (data.SCHMWISE_REC_IMPEXP == true ? '1' : '0')
    data['DENOMINATION_REQUIRE'] = (data.DENOMINATION_REQUIRE == true ? '1' : '0')
    data['TELLER_MODE'] = (data.TELLER_MODE == true ? '1' : '0')
    data['IS_ALLOW_SCHEME_GL_ENTRY'] = (data.IS_ALLOW_SCHEME_GL_ENTRY == true ? '1' : '0')
    data['TOKEN_NO_APPLICABLE'] = (data.TOKEN_NO_APPLICABLE == true ? '1' : '0')
    data['MASTER_ATTACH_JOINT_NAMES'] = (data.MASTER_ATTACH_JOINT_NAMES == true ? '1' : '0')
    data['MASTER_ATTACH_GUARDIAN_NAMES'] = (data.MASTER_ATTACH_GUARDIAN_NAMES == true ? '1' : '0')
    data['PIGMY_AC_RENEW_APPLY'] = (data.PIGMY_AC_RENEW_APPLY == true ? '1' : '0')
    data['IS_RECEIPTNO_IN_PIGMYCHART'] = (data.IS_RECEIPTNO_IN_PIGMYCHART == true ? '1' : '0')
    data['IS_REBIT_INTRATE_CAL'] = (data.IS_REBIT_INTRATE_CAL == true ? '1' : '0')
    data['IS_ALLOW_LOANINT_CHANGE'] = (data.IS_ALLOW_LOANINT_CHANGE == true ? '1' : '0')
    data['IS_CONSIDER_CCRENEWAL_AS_OPEN'] = (data.IS_CONSIDER_CCRENEWAL_AS_OPEN == true ? '1' : '0')
    data['IS_ALLOW_RECOVERY_DIFF'] = (data.IS_ALLOW_RECOVERY_DIFF == true ? '1' : '0')
    data['IS_TDS_CALCULATE'] = (data.IS_TDS_CALCULATE == true ? '1' : '0')
    data['IS_AUTO_VOUCHER_NPA_OIR'] = (data.IS_AUTO_VOUCHER_NPA_OIR == true ? '1' : '0')
    data['IS_HO_SUB_GLACNO_REQUIRED'] = (data.IS_HO_SUB_GLACNO_REQUIRED == true ? '1' : '0')
    data['IS_REQUIRE_CLEARING_OPTION'] = (data.IS_REQUIRE_CLEARING_OPTION == true ? '1' : '0')
    data['IS_ALLOW_USER_MULTI_LOGIN'] = (data.IS_ALLOW_USER_MULTI_LOGIN == true ? '1' : '0')
    data['IS_BANKERS_COMM_TRAN_REQD'] = (data.IS_BANKERS_COMM_TRAN_REQD == true ? '1' : '0')
    data['IS_IBCIBR_VOUCH_REQD'] = (data.IS_IBCIBR_VOUCH_REQD == true ? '1' : '0')
    data['DEPRECIATION_WITH_HALFFULLRATE'] = (data.DEPRECIATION_WITH_HALFFULLRATE == true ? '1' : '0')
    data['IS_AUTO_UPDATE_SHARES_NO'] = (data.IS_AUTO_UPDATE_SHARES_NO == true ? '1' : '0')
    data['WITHDRW_CLOSING_FOR_GURMEMBERS'] = (data.WITHDRW_CLOSING_FOR_GURMEMBERS == true ? '1' : '0')
    data['ON_LINE'] = (data.ON_LINE == true ? '1' : '0')
    data['IS_RECEIPT_PRINT_DESIGNMETHOD'] = (data.IS_RECEIPT_PRINT_DESIGNMETHOD == true ? '1' : '0')
    data['sharefield'] = this.multiField

    if (this.updatecheckdata.COMPANY_START_DATE != data.COMPANY_START_DATE) {
      (data.COMPANY_START_DATE == 'Invalid date' || data.COMPANY_START_DATE == '' || data.COMPANY_START_DATE == null) ? (ngbankstartdate = '', data['COMPANY_START_DATE'] = ngbankstartdate) : (ngbankstartdate = data.COMPANY_START_DATE, data['COMPANY_START_DATE'] = moment(ngbankstartdate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.PREVIOUS_DATE != data.PREVIOUS_DATE) {
      (data.PREVIOUS_DATE == 'Invalid date' || data.PREVIOUS_DATE == '' || data.PREVIOUS_DATE == null) ? (ngpreviousdate = '', data['PREVIOUS_DATE'] = ngpreviousdate) : (ngpreviousdate = data.PREVIOUS_DATE, data['PREVIOUS_DATE'] = moment(ngpreviousdate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.CURRENT_DATE != data.CURRENT_DATE) {
      (data.CURRENT_DATE == 'Invalid date' || data.CURRENT_DATE == '' || data.CURRENT_DATE == null) ? (ngcurrentdate = '', data['CURRENT_DATE'] = ngcurrentdate) : (ngcurrentdate = data.CURRENT_DATE, data['CURRENT_DATE'] = moment(ngcurrentdate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.PIGMY_PREVIOUS_DATE != data.PIGMY_PREVIOUS_DATE) {
      (data.PIGMY_PREVIOUS_DATE == 'Invalid date' || data.PIGMY_PREVIOUS_DATE == '' || data.PIGMY_PREVIOUS_DATE == null) ? (ngpigmypreviousdate = '', data['PIGMY_PREVIOUS_DATE'] = ngpigmypreviousdate) : (ngpigmypreviousdate = data.PIGMY_PREVIOUS_DATE, data['PIGMY_PREVIOUS_DATE'] = moment(ngpigmypreviousdate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.PIGMY_CURRENT_DATE != data.PIGMY_CURRENT_DATE) {
      (data.PIGMY_CURRENT_DATE == 'Invalid date' || data.PIGMY_CURRENT_DATE == '' || data.PIGMY_CURRENT_DATE == null) ? (ngpigmycurrentdate = '', data['PIGMY_CURRENT_DATE'] = ngpigmycurrentdate) : (ngpigmycurrentdate = data.PIGMY_CURRENT_DATE, data['PIGMY_CURRENT_DATE'] = moment(ngpigmycurrentdate).format('DD/MM/YYYY'))
    }
    this.systemMasterParametersService.updateData(data).subscribe(() => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Update')}`, 'success');
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
    this.ngbranch = null
    this.ngbranch = null
    this.ngdividend = null
    this.ngbonus = null
    this.ngbills = null
    this.ngbill = null
    this.ngbcbr = null
    this.ngclr = null
    this.nginward = null
    this.nginwardbill = null
    this.ngcgstGL = null
    this.ngsgstGL = null
    this.ngigstGL = null
    this.ngrecovery = null
    this.ngheadoffice = null
    this.ngbankgaurantee = null
    this.ngbankgauranteecr = null
    this.ngpayorder = null
    this.nginwardbilss = null
    this.ngyearend = null
    this.ngprofitloss = null
    this.ngsharecapital = null
    this.ngtds = null
    this.ngsurcharge = null
    this.ngcheque = null
    this.ngchequebounce = null
    this.ngmicrcharges = null
    this.ngintcal = null
    this.ngbackoffice = null
    this.ngcashinhand = null
    this.ngclrhouse = null
    this.ngweeklyholiday = null
    this.nghalfday = null
    this.ngddcom = null


  }
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: `${this.translate.instant('Swal_Msg.Are_you_sure')}`,
      text:`${this.translate.instant('Swal_Msg.bank_master_data')}`,
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
            `${this.translate.instant('Swal_Msg.Cancel')}`, `${this.translate.instant('Swal_Msg.C_Msg')}`,
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
          `${this.translate.instant('Swal_Msg.Cancel')}`, `${this.translate.instant('Swal_Msg.C_Msg')}`,
          'error'
        )
      }
    })
  }
  ngAfterViewInit(): void {
    // this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#informationtable tfoot tr').appendTo('#informationtable thead');
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

  onFocus(ele: NgSelectComponent) {  
    ele.open()
  }
  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
  } 
  
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}







