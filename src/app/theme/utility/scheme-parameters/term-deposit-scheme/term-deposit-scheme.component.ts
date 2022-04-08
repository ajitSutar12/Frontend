
import { DaysService } from '../../../../shared/dropdownService/days.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { InstallmentBaseService } from '../../../../shared/dropdownService/installment-base.service';
import { UnitOfTDPeriodService } from '../../../../shared/dropdownService/unit-of-td-period.service';
import { IOption } from 'ng-select';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs-compat';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { TermDepositSchemeService } from './term-deposit-scheme.service';
import Swal from 'sweetalert2';
//Dropdown service file
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { first } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment'
import { NgSelectConfig } from '@ng-select/ng-select';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface TermDepositScheme {
  S_ACNOTYPE: string;
  S_APPL: string;
  S_NAME: string;
  S_SHNAME: string;
  S_GLACNO: string;
  S_INT_ACNO: string;
  S_INT_CR_ACNO: string;
  S_RECBL_PYBL_INT_ACNO: string;
  S_PENAL_ACNO: string;
  S_RECBL_PENAL_ACNO: string;
  S_CASH_INT_ACNO: string;
  MATURED_BUT_NOT_PAID_GLAC: string;
  INTEREST_RULE: string;
  IS_RECURRING_TYPE: string;
  IS_CALLDEPOSIT_TYPE: string;
  REINVESTMENT: string;
  IS_RENEWAL_ALLOW: boolean;
  S_INT_APPLICABLE: boolean
  POST_TO_INDIVIDUAL_AC: boolean;
  S_PAYABLE_INT_ALLOW: boolean;
  IS_INT_ON_DEPO_AMT: boolean;
  MIN_INT_LIMIT: string;
  ROUNDOFF_FACTOR: string;
  S_INTCALTP: string;
  S_PRODUCT_DAY_BASE: string;
  S_PRODUCT_DAY_BASE_END: string;
  IS_PRODUCTUPTODATE: boolean;
  IS_START_WITH_MONTHS: boolean;
  IS_PRODUCT_BAL_BASE: string;
  IS_DAYSBASE_INSTRUCTION: boolean;
  IS_INTUPTODATE: boolean;
  S_INTCALC_METHOD: string;
  FIX_QUARTER: boolean;
  QUARTER_PLUS_DAYS: boolean;
  COMPOUND_INT_BASIS: string;
  COMPOUND_INT_DAYS: string;
  IS_DISCOUNTED_INT_RATE: string;
  S_INSTTYPE: string;
  INSTALLMENT_BASIS: string;
  IS_ASSUMED_INSTALLMENTS: boolean;
  INSTALLMENT_COMPULSORY_IN_PAT: boolean;
  PREMATURE_ON_DEPOSIT_INST: boolean;
  ALLOW_EXTRA_INSTALLMENTS: boolean;
  S_PENAL_INT_APPLICABLE: boolean;
  DEPOSIT_PENAL_INT_CALC_DAY: string;
  POST_PENALINT_IN_INTEREST: boolean;
  S_PENAL_INT_RATE: string;
  S_MATUCALC: string;
  IS_CAL_MATURITY_AMT: boolean;
  FIXED_MATURITY_AMT: boolean;
  PREMATURE_COMPOUND_INT: boolean;
  TRANSFER_TO_MATURE_DEPOSIT: boolean;
  MATURE_GRACE_MONTHS: string;
  MATURE_GRACE_DAYS: string;
  IS_AUTO_CUTTING: string;
  S_INTASON: boolean
  PERIOD_APPLICABLE: boolean
  IS_AUTO_PERIOD_CALCULATE: boolean;
  UNIT_OF_PERIOD: string;
  MIN_DAYS: string;
  MIN_MONTH: string;
  MAX_DEP_LMT: string;
  MULTIPLE_OF_AMT: string;
  MULTIPLE_OF_DAYS: string;
  MULTIPLE_OF_MONTH: string;
  S_INTPAID: boolean
  S_INTPAID_ON_CLOSING: boolean;
  IS_TDS_APPLICABLE: boolean;
  S_INTADD_PRINCIPLE: boolean;
  STAND_INSTRUCTION_ALLOW: boolean;
  IS_STD_INSTR_UPTO_MATURITY: boolean;
  IS_AUTO_CUT_INSTRUCTION: boolean;
  IS_ALLOW_SI_MINBAL: boolean;
  INT_INSTRUCTION_ALLOW: boolean
  IS_ADD_PAYINT_IN_INSTRUCTION: boolean;
  IS_INSTRUCTION_UPTO_MATURITY: boolean;
  RECEIPT_NO_INPUT: boolean;
  RECEIPT_TYPE: string;
  WITHDRAWAL_APPLICABLE: boolean;
  BALANCE_ADD_APPLICABLE: boolean;
  LESS_PREMATURE_INT_RATE: string;
  PREMATURE_INTRATE_ASPER: string;
  AFTER_MATURE_INT_RATE: string;
  TD_RECEIPT_METHOD: string;


}
@Component({
  selector: 'app-term-deposit-scheme',
  templateUrl: './term-deposit-scheme.component.html',
  styleUrls: ['./term-deposit-scheme.component.scss']
})
export class TermDepositSchemeComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //api 
  url = environment.base_url;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  termDepositScheme: TermDepositScheme[];
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
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  //variable to get Id to update
  updateID: number = 0;

  //Dropdown option variable
  acMaster: any
  ngsglacno:any=null
  ngintglac:any=null
  ngintcreditgl:any=null
  ngpayable:any=null
  ngpenalintac:any=null
  ngrecble:any=null
  ngcashint:any=null
  ngmaturebtntpd:any=null
  nginstallmentbase:any=null
  ngunittdperiod:any=null



  simpleOption: Array<IOption> = this.installmentBaseService.getCharacters();
  unitOfPeroid: Array<IOption> = this.unitOfTDPeriodService.getCharacters();
  alternateOption: Array<IOption> = this.DaysService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;

  selectedItems: any;
  FaceValueDividendTrue = true;
  OtherSettings_True = false;


  v1: boolean = false;
  depositeSchemeTypeTrue = true;
  interest_ApplicableTrue = false;
  intrestMethodTrue = false;
  installmentAmountTrue = false;
  penelIntrestApplicableTrue = false;
  maturityAmountTrue = false;
  multipleofXXXTrue = false;
  tDPeriodTrue = false;
  instructionTrue = false;
  otherSettingsTrue = false;
  //variables for  add and update button
  showBlock: boolean = true;
  Show: boolean = false;
  COMPOUND_INT_BASIS = true;
  INSTALLMENT_BASIS = true;
  IS_ASSUMED_INSTALLMENTS = true;
  filterData={};
  newbtnShow: boolean;
  ngCompoundIntBasis:any=null
  // S_PRODUCT_DAY_BASE: any;
  constructor(
    private http: HttpClient,
    public installmentBaseService: InstallmentBaseService,
    public TermDepositSchemeService: TermDepositSchemeService,
    private acMasterDropdownService: ACMasterDropdownService,
    private unitOfTDPeriodService: UnitOfTDPeriodService,
    public DaysService: DaysService,
    private fb: FormBuilder,
    private config: NgSelectConfig,) { }

  ngOnInit(): void {
    this.createForm();
    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      paging: true,
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTableParameters: any, callback) => {
        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        let datatableRequestParam: any;
        this.page = dataTableParameters.start / dataTableParameters.length;
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
        this.http
          .post<DataTableResponse>(
            this.url + '/term-deposit-scheme',
            dataTableParameters
          ).subscribe(resp => {
            this.termDepositScheme = resp.data;
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
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="deletebtn btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Type',
          data: 'S_ACNOTYPE'
        },
        {
          title: 'Scheme Code',
          data: 'S_APPL'
        },
        {
          title: 'Description',
          data: 'S_NAME'
        },
        {
          title: 'Short Name',
          data: 'S_SHNAME'
        },
        {
          title: 'G.L. A/c No.',
          data: 'S_GLACNO'
        }, {
          title: 'Interest Debit GL A/c',
          data: 'S_INT_ACNO'
        }, {
          title: 'Interest Credit GL A/c',
          data: 'S_INT_CR_ACNO'
        }, {
          title: 'Payable Int.A/c',
          data: 'S_RECBL_PYBL_INT_ACNO'
        }, {
          title: 'Penal Int. A/c',
          data: 'S_PENAL_ACNO'
        }, {
          title: 'Recble Penal Int. A/c',
          data: 'S_RECBL_PENAL_ACNO'
        }, {
          title: 'Cash Interest A/c',
          data: 'S_CASH_INT_ACNO'
        }, {
          title: 'Mature But Not Paid GL',
          data: 'MATURED_BUT_NOT_PAID_GLAC'
        },
        //  {

        //   title: 'Pat Deposits',
        //   data: 'INTEREST_RULE'
        // }, {
        //   title: 'Recurring Deposits',
        //   data: 'IS_RECURRING_TYPE'
        // }, {
        //   title: 'Call Deposits',
        //   data: 'IS_CALLDEPOSIT_TYPE'
        // }, {
        //   title: 'Auto Renewal',
        //   data: 'REINVESTMENT'
        // }, {
        //   title: 'Fixed Deposit',
        //   data: 'INTEREST_RULE'
        // }, {
        //   title: 'Is Renwal Applicable',
        //   data: 'IS_RENEWAL_ALLOW'
        // }, {
        //   title: 'Is Interest Applicable ?',
        //   data: 'S_INT_APPLICABLE'
        // }, {
        //   title: 'Is Post Interest to A/c ?',
        //   data: 'POST_TO_INDIVIDUAL_AC'
        // }, {
        //   title: 'Is Payable Interest Allowed ?',
        //   data: 'S_PAYABLE_INT_ALLOW'
        // }, {
        //   title: 'Is Calculate Interest On Deposit Amt (Scheme Amt) ..?',
        //   data: 'IS_INT_ON_DEPO_AMT'
        // }, {
        //   title: 'Minimum Interest Amount',
        //   data: 'MIN_INT_LIMIT'
        // }, {
        //   title: 'Interest Round Off Factor in Paise',
        //   data: 'ROUNDOFF_FACTOR'
        // },
        // {
        //   title: 'Calculation On Days',
        //   data: 'S_INTCALTP'
        // },
        // {
        //   title: 'Month Product Base ',
        //   data: 'S_INTCALTP'
        // },
        // {
        //   title: 'Product Base Start Day',
        //   data: 'S_PRODUCT_DAY_BASE'
        // },
        // {
        //   title: 'Month Begin',
        //   data: 'S_PRODUCT_DAY_BASE'
        // },
        // {
        //   title: 'Month End',
        //   data: 'S_PRODUCT_DAY_BASE'
        // },
        // {
        //   title: 'Product Base End Day',
        //   data: 'S_PRODUCT_DAY_BASE_END'
        // },
        // {
        //   title: 'Month Begin',
        //   data: 'S_PRODUCT_DAY_BASE_END'
        // },
        // {
        //   title: 'Month End',
        //   data: 'S_PRODUCT_DAY_BASE_END'
        // },
        // {
        //   title: 'Product up to Int Calculation Date',
        //   data: 'IS_PRODUCTUPTODATE'
        // },
        // {
        //   title: 'Month & Days Base',
        //   data: 'S_INTCALTP'
        // },
        // {
        //   title: 'Start with Months + Days',
        //   data: 'IS_START_WITH_MONTHS'
        // },
        // {
        //   title: 'Days Product Base',
        //   data: 'IS_PRODUCT_BAL_BASE'
        // },
        // {
        //   title: 'Is Days Base Int.Instruction',
        //   data: 'IS_DAYSBASE_INSTRUCTION'
        // },
        // {
        //   title: 'Interest up to Int.Calculation Date',
        //   data: 'IS_INTUPTODATE'
        // },
        // {
        //   title: 'Simple Interest',
        //   data: 'S_INTCALC_METHOD'
        // },
        // {
        //   title: 'Fixed Quarter',
        //   data: 'FIX_QUARTER'
        // },
        // {
        //   title: 'Quarter Plus Days',
        //   data: 'QUARTER_PLUS_DAYS'
        // },
        // {
        //   title: 'Compount Intereste',
        //   data: 'S_INTCALC_METHOD'
        // },
        // {
        //   title: 'Compount Interest (COMBO BOX)',
        //   data: 'COMPOUND_INT_BASIS'
        // },

        // {
        //   title: 'Compount Int. Days',
        //   data: 'COMPOUND_INT_DAYS'
        // },
        // {
        //   title: 'Discount Interest Rate Applicable',
        //   data: 'IS_DISCOUNTED_INT_RATE'
        // },
        // {
        //   title: 'One Time ',
        //   data: 'S_INSTTYPE'
        // },
        // {
        //   title: 'Monthly',
        //   data: 'S_INSTTYPE'
        // },
        // {
        //   title: 'Installment Base ',
        //   data: 'INSTALLMENT_BASIS'
        // },
        // {
        //   title: 'Is Calculate Interest On Assuming Installments are Received',
        //   data: 'IS_ASSUMED_INSTALLMENTS'
        // },
        // {
        //   title: 'Installment Compulsory in Multiple Amt',
        //   data: 'INSTALLMENT_COMPULSORY_IN_PAT'
        // },
        // {
        //   title: 'Is Calculate Interest on only Deposited Installments',
        //   data: 'PREMATURE_ON_DEPOSIT_INST'
        // },
        // {
        //   title: 'Is Allow Extra Installments in Recovery',
        //   data: 'ALLOW_EXTRA_INSTALLMENTS'
        // },
        // {
        //   title: 'Penal Interest Applicable ?',
        //   data: 'S_PENAL_INT_APPLICABLE'
        // },
        // {
        //   title: 'Penal Product Base Day',
        //   data: 'DEPOSIT_PENAL_INT_CALC_DAY'
        // },
        // {
        //   title: 'Month Begin',
        //   data: 'DEPOSIT_PENAL_INT_CALC_DAY'
        // },
        // {
        //   title: 'Month End',
        //   data: 'DEPOSIT_PENAL_INT_CALC_DAY'
        // },
        // {
        //   title: 'Post Penal Interest to A/c',
        //   data: 'POST_PENALINT_IN_INTEREST'
        // },
        // {
        //   title: 'Penal Interest Rate %',
        //   data: 'S_PENAL_INT_RATE'
        // },
        // {
        //   title: 'Maturity Calculation Multiple Amount',
        //   data: 'S_MATUCALC'
        // },
        // {
        //   title: 'Is Calculated Maturity Amt.In Master',
        //   data: 'IS_CAL_MATURITY_AMT'
        // },
        // {
        //   title: 'Is Fixed Maturity Amount in Payment',
        //   data: 'FIXED_MATURITY_AMT'
        // },
        // {
        //   title: 'Prematured Compound Interest',
        //   data: 'PREMATURE_COMPOUND_INT'
        // },
        // {
        //   title: 'Auto Maturity Transfer Process Execute',
        //   data: 'TRANSFER_TO_MATURE_DEPOSIT'
        // },

        // {
        //   title: 'Maturity Process Grace Months',
        //   data: 'MATURE_GRACE_MONTHS'
        // },
        // {
        //   title: 'Maturity Process Grace Days',
        //   data: 'MATURE_GRACE_DAYS'

        // },
        // {
        //   title: 'Auto Cutting Loan A/cs (Liened)',
        //   data: 'IS_AUTO_CUTTING'
        // },
        // {
        //   title: 'As on Date Applicable for Deposit',
        //   data: 'S_INTASON'
        // },
        // {
        //   title: 'TD Period Input Applicable',
        //   data: 'PERIOD_APPLICABLE'
        // },
        // {
        //   title: 'Is Auto Calculate Deposit Period?',
        //   data: 'IS_AUTO_PERIOD_CALCULATE'
        // },
        // {
        //   title: 'Unit of TD Period',
        //   data: 'UNIT_OF_PERIOD'
        // },
        // {
        //   title: 'Minimum Period in Days',
        //   data: 'MIN_DAYS'
        // },
        // {
        //   title: 'Minimum Period in Months',
        //   data: 'MIN_MONTH'
        // },
        // {
        //   title: 'Maximum Deposit Limit',
        //   data: 'MAX_DEP_LMT'
        // },

        // {
        //   title: 'Multiple of Amount',
        //   data: 'MULTIPLE_OF_AMT'
        // },
        // {
        //   title: 'Multiple of Days',
        //   data: 'MULTIPLE_OF_DAYS'
        // },
        // {
        //   title: 'Multiple of Months',
        //   data: 'MULTIPLE_OF_MONTH'
        // },
        // {
        //   title: 'Is Cash Interest Payment Allowed ?',
        //   data: 'S_INTPAID'
        // },
        // {
        //   title: 'Is Interest Paid on A/c Closing ?',
        //   data: 'S_INTPAID_ON_CLOSING'
        // },
        // {
        //   title: 'Is TDS Calculaion Applicable ?',
        //   data: 'IS_TDS_APPLICABLE'
        // },
        // {
        //   title: 'Is Interest Add in Principle Amount ?',
        //   data: 'S_INTADD_PRINCIPLE'
        // },
        // {
        //   title: 'Is Standing Instruction Applicable ?',
        //   data: 'STAND_INSTRUCTION_ALLOW'
        // }, {
        //   title: 'Is Standing Instruction STOP after Matured ?',
        //   data: 'IS_STD_INSTR_UPTO_MATURITY'
        // },
        // {
        //   title: 'Is Instruction though Auto Cutting LN/CC',
        //   data: 'IS_AUTO_CUT_INSTRUCTION'
        // },
        // {
        //   title: 'Is Allow Standing Instruction Minimum Bal.?',
        //   data: 'IS_ALLOW_SI_MINBAL'
        // },
        // {
        //   title: 'Is Interest Instruction Applicable ?',
        //   data: 'INT_INSTRUCTION_ALLOW'
        // },
        // {
        //   title: 'Is add Payable Interest in Instruction ?',
        //   data: 'IS_ADD_PAYINT_IN_INSTRUCTION'
        // },
        // {
        //   title: 'Is Interest Instruction STOP after Matured?',
        //   data: 'IS_INSTRUCTION_UPTO_MATURITY'
        // },
        // {
        //   title: 'Is FD Receipt No. Input ?',
        //   data: 'RECEIPT_NO_INPUT'
        // },
        // {
        //   title: 'TD Receipt Type / Series',
        //   data: 'RECEIPT_TYPE'
        // },
        // {
        //   title: 'Is Withdrawal Applicable ?',
        //   data: 'WITHDRAWAL_APPLICABLE'
        // },
        // {
        //   title: 'Is Balance Entry Allowed ?',
        //   data: 'BALANCE_ADD_APPLICABLE'
        // },
        // {
        //   title: 'Premature Less Interest Rate',
        //   data: 'LESS_PREMATURE_INT_RATE'
        // },
        // {
        //   title: 'Premature Interest Rate As per ',
        //   data: 'PREMATURE_INTRATE_ASPER'
        // },
        // {
        //   title: 'After Mature Interest Rate',
        //   data: 'AFTER_MATURE_INT_RATE'
        // },
        // {
        //   title: 'Deposit Amount',
        //   data: 'TD_RECEIPT_METHOD'
        // },
        // {
        //   title: 'Closing Balance',
        //   data: 'TD_RECEIPT_METHOD'
        // },
      ],
      dom: 'Bfrtip',
    };
    this.runTimer();
    this.dataSub = this.installmentBaseService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.acMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.acMaster = data;
    })
  }

  Intrest_Applicable($event) {
    if ($event.target.checked) {
      document.getElementById('POST_TO_INDIVIDUAL_AC').removeAttribute("disabled");
      document.getElementById('S_PAYABLE_INT_ALLOW').removeAttribute("disabled");
      document.getElementById('IS_INT_ON_DEPO_AMT').removeAttribute("disabled");
      document.getElementById('MIN_INT_LIMIT').removeAttribute("disabled");
      document.getElementById('ROUNDOFF_FACTOR').removeAttribute("disabled");
    }

    else {
      document.getElementById('POST_TO_INDIVIDUAL_AC').setAttribute("disabled", "true");
      document.getElementById('S_PAYABLE_INT_ALLOW').setAttribute("disabled", "true");
      document.getElementById('IS_INT_ON_DEPO_AMT').setAttribute("disabled", "true");
      document.getElementById('MIN_INT_LIMIT').setAttribute("disabled", "true");
      document.getElementById('ROUNDOFF_FACTOR').setAttribute("disabled", "true");
      this.angForm.controls.POST_TO_INDIVIDUAL_AC.reset();
      this.angForm.controls.S_PAYABLE_INT_ALLOW.reset();
      this.angForm.controls.IS_INT_ON_DEPO_AMT.reset();
      this.angForm.controls.MIN_INT_LIMIT.reset();
      this.angForm.controls.ROUNDOFF_FACTOR.reset();
    }
  }

  text(x) {
    if (x == 1) {
      this.Show = false;
    }
    else if (x == 2) {
      this.Show = true;
    }
    else if (x == 3) {
      this.Show = false;
    }
    else if (x == 4) {
      this.Show = false;
    }
  }

  Compount_Interest(value) {
    if (value == 1) {
      this.COMPOUND_INT_BASIS = false;
    }
    else if (value == 2) {
      this.COMPOUND_INT_BASIS = true;
    }
  }

  S_PRODUCT_DAY_BASE: any;
  Product_Base_Start_Day(S_PRODUCT_DAY_BASE) {
    if (S_PRODUCT_DAY_BASE == 0) {

      document.getElementById('MonthBegin').removeAttribute("disabled");
      document.getElementById('MonthEnd').removeAttribute("disabled");

      //  document.getElementById('MonthBegin').setAttribute("selected", "false");
      //  document.getElementById('MonthEnd').setAttribute("selected", "false"); 

    } else {
      document.getElementById('MonthBegin').setAttribute("disabled", "false");
      document.getElementById('MonthEnd').setAttribute("disabled", "false");

      // document.getElementById("MonthBegin'").ariaChecked ="false"
      // document.getElementById("MonthEnd'").ariaChecked ="false"
      // document.getElementById('MonthEnd').setAttribute("checked", "false");
      //this.S_PRODUCT_DAY_BASE.data('checked', false);
      // this.angForm.controls.MonthBegin.reset();
      // this.angForm.controls.S_PRODUCT_DAY_BASE.reset();
      // const radio=document.querySelector('input[type=radio][name=S_PRODUCT_DAY_BASE]:checked');
      // radio.ariaChecked="false";
      // this.angForm.s
      // //  document.getElementById('MonthEnd').setAttribute("checked", "false");
      //  document.getElementById("MonthBegin").ariaChecked = "false"; 
      //  document.getElementById("MonthEnd").ariaChecked = "false"; 
    }
  }
  S_PRODUCT_DAY_BASE_END: any;
  Product_Base_End_Day(S_PRODUCT_DAY_BASE_END) {
    if (S_PRODUCT_DAY_BASE_END == 0) {
      document.getElementById('MonthBegin2').removeAttribute("disabled");
      document.getElementById('MonthEnd2').removeAttribute("disabled");
    }
    else {
      document.getElementById('MonthBegin2').setAttribute("disabled", "false");
      document.getElementById('MonthEnd2').setAttribute("disabled", "false");
    }

  }


  Interest_Calculation_Type($event) {
    // this.Show = $event.target.checked === true ? true : false;
    this.Show = !this.Show;
  }
  // Interest_Calculation_Type($event){
  //   if($event.target.checked){
  //     this.showBlock = false;
  //     this.Show = true;
  //   }
  //   else{
  //     this.showBlock = true;
  //     this.Show = false;

  //   }
  // }
  Penal_Intrest($event) {
    if ($event.target.checked) {

      document.getElementById('DEPOSIT_PENAL_INT_CALC_DAY').removeAttribute("disabled");
      document.getElementById('MonthBegin').removeAttribute("disabled");
      document.getElementById('MonthEnd').removeAttribute("disabled");
      document.getElementById('POST_PENALINT_IN_INTEREST').removeAttribute("disabled");
      document.getElementById('S_PENAL_INT_RATE').removeAttribute("disabled");
    }
    else {
      document.getElementById('DEPOSIT_PENAL_INT_CALC_DAY').setAttribute("disabled", "true");
      document.getElementById('MonthBegin').setAttribute("disabled", "true");
      document.getElementById('MonthEnd').setAttribute("disabled", "true");
      document.getElementById('POST_PENALINT_IN_INTEREST').setAttribute("disabled", "true");
      document.getElementById('S_PENAL_INT_RATE').setAttribute("disabled", "true");
      this.angForm.controls.DEPOSIT_PENAL_INT_CALC_DAY.reset();
      // this.angForm.controls.MonthBegin.reset();

      this.angForm.controls.POST_PENALINT_IN_INTEREST.reset();
      this.angForm.controls.S_PENAL_INT_RATE.reset();

    }
  }

  installmentAmount(value) {
    if (value == 1) {
      this.INSTALLMENT_BASIS = true;
      document.getElementById('IS_ASSUMED_INSTALLMENTS').setAttribute("disabled", "true");
      document.getElementById('INSTALLMENT_COMPULSORY_IN_PAT').setAttribute("disabled", "true");
      document.getElementById('PREMATURE_ON_DEPOSIT_INST').setAttribute("disabled", "true");
      document.getElementById('ALLOW_EXTRA_INSTALLMENTS').setAttribute("disabled", "true");
      document.getElementById('POST_PENALINT_IN_INTEREST').setAttribute("disabled", "true");
      //document.getElementById('IS_ASSUMED_INSTALLMENTS').setAttribute("checked", "false");

    }
    else {
      this.INSTALLMENT_BASIS = false;
      document.getElementById('IS_ASSUMED_INSTALLMENTS').removeAttribute("disabled");
      document.getElementById('INSTALLMENT_COMPULSORY_IN_PAT').removeAttribute("disabled");
      document.getElementById('PREMATURE_ON_DEPOSIT_INST').removeAttribute("disabled");
      document.getElementById('ALLOW_EXTRA_INSTALLMENTS').removeAttribute("disabled");
      document.getElementById('POST_PENALINT_IN_INTEREST').removeAttribute("disabled");

    }
  }

  PatDeposits(value){
  
    if (value == 1) {
      this.angForm.patchValue({
        'IS_CAL_MATURITY_AMT':true,
        'FIXED_MATURITY_AMT':true
      })
    }
    else{
      this.angForm.patchValue({
        'IS_CAL_MATURITY_AMT':false,
        'FIXED_MATURITY_AMT':false,
      })
    }
    
  }
  
  createForm() {
    this.angForm = this.fb.group({
      S_ACNOTYPE: ['TD'],
      S_APPL: ["", [Validators.required,Validators.pattern, Validators.min(201),Validators.max(299)]],
      S_SHNAME: ['', [Validators.pattern, Validators.required]],
      S_NAME: ['', [Validators.pattern, Validators.required]],
      S_GLACNO: ['', [Validators.required]],
      S_INT_ACNO: ['', [Validators.required]],
      S_INT_CR_ACNO: ['', [Validators.required]],
      S_RECBL_PYBL_INT_ACNO: ['', [Validators.required]],
      S_PENAL_ACNO: ['', [Validators.required]],
      S_RECBL_PENAL_ACNO: [''],
      S_CASH_INT_ACNO: ['', [Validators.pattern]],
      MATURED_BUT_NOT_PAID_GLAC: [''],
      INTEREST_RULE: [''],
      IS_RECURRING_TYPE: ['', [Validators.pattern]],
      IS_CALLDEPOSIT_TYPE: ['', [Validators.pattern]],
      REINVESTMENT: ['', [Validators.pattern]],
      IS_RENEWAL_ALLOW: ['', [Validators.pattern]],
      S_INT_APPLICABLE: [''],
      POST_TO_INDIVIDUAL_AC: [''],
      S_PAYABLE_INT_ALLOW: [''],
      IS_INT_ON_DEPO_AMT: [''],
      MIN_INT_LIMIT: ['', [Validators.pattern]],
      ROUNDOFF_FACTOR: ['', [Validators.pattern]],
      S_INTCALTP: [''],
      S_PRODUCT_DAY_BASE: [0, [Validators.max(31)]],
      S_PRODUCT_DAY_BASE_END: [''],
      IS_PRODUCTUPTODATE: ['', [Validators.pattern]],
      IS_START_WITH_MONTHS: ['',[Validators.pattern]],
      IS_PRODUCT_BAL_BASE: [''],
      IS_DAYSBASE_INSTRUCTION: ['', [Validators.pattern]],
      IS_INTUPTODATE: ['', [Validators.pattern]],
      S_INTCALC_METHOD: [''],
      FIX_QUARTER: ['', [Validators.pattern]],
      QUARTER_PLUS_DAYS: ['', [Validators.pattern]],
      COMPOUND_INT_BASIS: [''],
      COMPOUND_INT_DAYS: ['', [Validators.pattern]],
      IS_DISCOUNTED_INT_RATE: ['', [Validators.pattern]],
      S_INSTTYPE: ['', [Validators.pattern]],
      INSTALLMENT_BASIS: [''],
      IS_ASSUMED_INSTALLMENTS: ['', [Validators.pattern]],
      INSTALLMENT_COMPULSORY_IN_PAT: ['', [Validators.pattern]],
      PREMATURE_ON_DEPOSIT_INST: ['', [Validators.pattern]],
      ALLOW_EXTRA_INSTALLMENTS: ['', [Validators.pattern]],
      S_PENAL_INT_APPLICABLE: ['', [Validators.pattern]],
      DEPOSIT_PENAL_INT_CALC_DAY: ['', [Validators.pattern]],
      POST_PENALINT_IN_INTEREST: ['', [Validators.pattern]],
      S_PENAL_INT_RATE: ['', [Validators.pattern]],
      S_MATUCALC: ['', [Validators.pattern]],
      IS_CAL_MATURITY_AMT: ['', [Validators.pattern]],
      FIXED_MATURITY_AMT: ['', [Validators.pattern]],
      PREMATURE_COMPOUND_INT: ['', [Validators.pattern]],
      TRANSFER_TO_MATURE_DEPOSIT: ['', [Validators.pattern]],
      MATURE_GRACE_MONTHS: ['', [Validators.pattern]],
      MATURE_GRACE_DAYS: ['', [Validators.pattern]],
      IS_AUTO_CUTTING: ['', [Validators.pattern]],
      S_INTASON: ['', [Validators.pattern]],
      PERIOD_APPLICABLE: ['', [Validators.pattern]],
      IS_AUTO_PERIOD_CALCULATE: ['', [Validators.pattern]],
      UNIT_OF_PERIOD: [''],
      MIN_DAYS: ['', [Validators.pattern]],
      MIN_MONTH: ['', [Validators.pattern]],
      MAX_DEP_LMT: ['', [Validators.pattern]],
      MULTIPLE_OF_AMT: ['', [Validators.pattern]],
      MULTIPLE_OF_DAYS: ['', [Validators.pattern]],
      MULTIPLE_OF_MONTH: ['', [Validators.pattern]],
      S_INTPAID: ['', [Validators.pattern]],
      S_INTPAID_ON_CLOSING: ['', [Validators.pattern]],
      IS_TDS_APPLICABLE: ['', [Validators.pattern]],
      S_INTADD_PRINCIPLE: ['', [Validators.pattern]],
      STAND_INSTRUCTION_ALLOW: ['', [Validators.pattern]],
      IS_STD_INSTR_UPTO_MATURITY: ['', [Validators.pattern]],
      IS_AUTO_CUT_INSTRUCTION: ['', [Validators.pattern]],
      IS_ALLOW_SI_MINBAL: [''],
      INT_INSTRUCTION_ALLOW: ['', [Validators.pattern]],
      IS_ADD_PAYINT_IN_INSTRUCTION: ['', [Validators.pattern]],
      IS_INSTRUCTION_UPTO_MATURITY: ['', [Validators.pattern]],
      RECEIPT_NO_INPUT: ['', [Validators.pattern]],
      RECEIPT_TYPE: [''],
      WITHDRAWAL_APPLICABLE: ['', [Validators.pattern]],
      BALANCE_ADD_APPLICABLE: ['', [Validators.pattern]],
      LESS_PREMATURE_INT_RATE: ['', [Validators.pattern]],
      PREMATURE_INTRATE_ASPER: ['', [Validators.pattern]],
      AFTER_MATURE_INT_RATE: ['', [Validators.pattern]],
      TD_RECEIPT_METHOD: ['', [Validators.pattern]],

      // RS_PRODUCT_DAY_BASE: ['']
    });
  }
  OpenLink(val) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (val == 71) {
      this.depositeSchemeTypeTrue = true;
      this.interest_ApplicableTrue = false;
      this.intrestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penelIntrestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.tDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingsTrue = false;

    }
    if (val == 72) {
      this.depositeSchemeTypeTrue = false;
      this.interest_ApplicableTrue = true;
      this.intrestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penelIntrestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.tDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingsTrue = false;
    }
    if (val == 73) {
      this.depositeSchemeTypeTrue = false;
      this.interest_ApplicableTrue = false;
      this.intrestMethodTrue = true;
      this.installmentAmountTrue = false;
      this.penelIntrestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.tDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingsTrue = false;
    }
    if (val == 74) {
      this.depositeSchemeTypeTrue = false;
      this.interest_ApplicableTrue = false;
      this.intrestMethodTrue = false;
      this.installmentAmountTrue = true;
      this.penelIntrestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.tDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingsTrue = false;
    }
    if (val == 75) {
      this.depositeSchemeTypeTrue = false;
      this.interest_ApplicableTrue = false;
      this.intrestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penelIntrestApplicableTrue = true;
      this.maturityAmountTrue = false;
      this.tDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingsTrue = false;
    }
    if (val == 76) {
      this.depositeSchemeTypeTrue = false;
      this.interest_ApplicableTrue = false;
      this.intrestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penelIntrestApplicableTrue = false;
      this.maturityAmountTrue = true;
      this.tDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingsTrue = false;
    }
    if (val == 77) {
      this.depositeSchemeTypeTrue = false;
      this.interest_ApplicableTrue = false;
      this.intrestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penelIntrestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.tDPeriodTrue = true;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingsTrue = false;
    }
    if (val == 78) {
      this.depositeSchemeTypeTrue = false;
      this.interest_ApplicableTrue = false;
      this.intrestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penelIntrestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.tDPeriodTrue = false;
      this.multipleofXXXTrue = true;
      this.instructionTrue = false;
      this.otherSettingsTrue = false;
    }
    if (val == 79) {
      this.depositeSchemeTypeTrue = false;
      this.interest_ApplicableTrue = false;
      this.intrestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penelIntrestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.tDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = true;
      this.otherSettingsTrue = false;
    }
    if (val == 80) {
      this.depositeSchemeTypeTrue = false;
      this.interest_ApplicableTrue = false;
      this.intrestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penelIntrestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.tDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingsTrue = true;
    }



  }
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {

      'S_ACNOTYPE': formVal.S_ACNOTYPE,
      'S_APPL': formVal.S_APPL,
      'S_SHNAME': formVal.S_SHNAME,
      'S_NAME': formVal.S_NAME,
      'S_GLACNO': formVal.S_GLACNO,
      'S_INT_ACNO': formVal.S_INT_ACNO,
      'S_INT_CR_ACNO': formVal.S_INT_CR_ACNO,
      'S_RECBL_PYBL_INT_ACNO': formVal.S_RECBL_PYBL_INT_ACNO,
      'S_PENAL_ACNO': formVal.S_PENAL_ACNO,
      'S_RECBL_PENAL_ACNO': formVal.S_RECBL_PENAL_ACNO,
      'S_CASH_INT_ACNO': formVal.S_CASH_INT_ACNO,
      'MATURED_BUT_NOT_PAID_GLAC': formVal.MATURED_BUT_NOT_PAID_GLAC,
      'INTEREST_RULE': formVal.INTEREST_RULE,
      'IS_RECURRING_TYPE': formVal.IS_RECURRING_TYPE,
      'IS_CALLDEPOSIT_TYPE': formVal.IS_CALLDEPOSIT_TYPE,
      'REINVESTMENT': formVal.REINVESTMENT,
      'IS_RENEWAL_ALLOW': formVal.IS_RENEWAL_ALLOW,
      'S_INT_APPLICABLE': formVal.S_INT_APPLICABLE,
      'POST_TO_INDIVIDUAL_AC': formVal.POST_TO_INDIVIDUAL_AC,
      'S_PAYABLE_INT_ALLOW': formVal.S_PAYABLE_INT_ALLOW,
      'IS_INT_ON_DEPO_AMT': formVal.IS_INT_ON_DEPO_AMT,
      'MIN_INT_LIMIT': formVal.MIN_INT_LIMIT,
      'IS_INTUPTODATE': formVal.IS_INTUPTODATE,
      'ROUNDOFF_FACTOR': formVal.ROUNDOFF_FACTOR,
      'S_INTCALTP': formVal.S_INTCALTP,
      'S_PRODUCT_DAY_BASE': formVal.S_PRODUCT_DAY_BASE,
      'S_PRODUCT_DAY_BASE_END': formVal.S_PRODUCT_DAY_BASE_END,
      'IS_PRODUCTUPTODATE': formVal.IS_PRODUCTUPTODATE,
      'IS_START_WITH_MONTHS': formVal.IS_START_WITH_MONTHS,
      'IS_PRODUCT_BAL_BASE': formVal.IS_PRODUCT_BAL_BASE,
      'IS_DAYSBASE_INSTRUCTION': formVal.IS_DAYSBASE_INSTRUCTION,
      'S_INTCALC_METHOD': formVal.S_INTCALC_METHOD,
      'FIX_QUARTER': formVal.FIX_QUARTER,
      'QUARTER_PLUS_DAYS': formVal.QUARTER_PLUS_DAYS,
      'COMPOUND_INT_BASIS': formVal.COMPOUND_INT_BASIS,
      'COMPOUND_INT_DAYS': formVal.COMPOUND_INT_DAYS,
      'IS_DISCOUNTED_INT_RATE': formVal.IS_DISCOUNTED_INT_RATE,
      'S_INSTTYPE': formVal.S_INSTTYPE,
      'INSTALLMENT_BASIS': formVal.INSTALLMENT_BASIS,
      'IS_ASSUMED_INSTALLMENTS': formVal.IS_ASSUMED_INSTALLMENTS,
      'INSTALLMENT_COMPULSORY_IN_PAT': formVal.INSTALLMENT_COMPULSORY_IN_PAT,
      'PREMATURE_ON_DEPOSIT_INST': formVal.PREMATURE_ON_DEPOSIT_INST,
      'ALLOW_EXTRA_INSTALLMENTS': formVal.ALLOW_EXTRA_INSTALLMENTS,
      'S_PENAL_INT_APPLICABLE': formVal.S_PENAL_INT_APPLICABLE,
      'DEPOSIT_PENAL_INT_CALC_DAY': formVal.DEPOSIT_PENAL_INT_CALC_DAY,
      'POST_PENALINT_IN_INTEREST': formVal.POST_PENALINT_IN_INTEREST,
      'S_PENAL_INT_RATE': formVal.S_PENAL_INT_RATE,
      'S_MATUCALC': formVal.S_MATUCALC,
      'IS_CAL_MATURITY_AMT': formVal.IS_CAL_MATURITY_AMT,
      'FIXED_MATURITY_AMT': formVal.FIXED_MATURITY_AMT,
      'PREMATURE_COMPOUND_INT': formVal.PREMATURE_COMPOUND_INT,
      'TRANSFER_TO_MATURE_DEPOSIT': formVal.TRANSFER_TO_MATURE_DEPOSIT,
      'MATURE_GRACE_MONTHS': formVal.MATURE_GRACE_MONTHS,
      'MATURE_GRACE_DAYS': formVal.MATURE_GRACE_DAYS,
      'IS_AUTO_CUTTING': formVal.IS_AUTO_CUTTING,
      'S_INTASON': formVal.S_INTASON,
      'PERIOD_APPLICABLE': formVal.PERIOD_APPLICABLE,
      'IS_AUTO_PERIOD_CALCULATE': formVal.IS_AUTO_PERIOD_CALCULATE,
      'UNIT_OF_PERIOD': formVal.UNIT_OF_PERIOD,
      'MIN_DAYS': formVal.MIN_DAYS,
      'MIN_MONTH': formVal.MIN_MONTH,
      'MAX_DEP_LMT': formVal.MAX_DEP_LMT,
      'MULTIPLE_OF_AMT': formVal.MULTIPLE_OF_AMT,
      'MULTIPLE_OF_DAYS': formVal.MULTIPLE_OF_DAYS,
      'MULTIPLE_OF_MONTH': formVal.MULTIPLE_OF_MONTH,
      'S_INTPAID': formVal.S_INTPAID,
      'S_INTPAID_ON_CLOSING': formVal.S_INTPAID_ON_CLOSING,
      'IS_TDS_APPLICABLE': formVal.IS_TDS_APPLICABLE,
      'S_INTADD_PRINCIPLE': formVal.S_INTADD_PRINCIPLE,
      'STAND_INSTRUCTION_ALLOW': formVal.STAND_INSTRUCTION_ALLOW,
      'IS_STD_INSTR_UPTO_MATURITY': formVal.IS_STD_INSTR_UPTO_MATURITY,
      'IS_AUTO_CUT_INSTRUCTION': formVal.IS_AUTO_CUT_INSTRUCTION,
      'IS_ALLOW_SI_MINBAL': formVal.IS_ALLOW_SI_MINBAL,
      'INT_INSTRUCTION_ALLOW': formVal.INT_INSTRUCTION_ALLOW,
      'IS_ADD_PAYINT_IN_INSTRUCTION': formVal.IS_ADD_PAYINT_IN_INSTRUCTION,
      'IS_INSTRUCTION_UPTO_MATURITY': formVal.IS_INSTRUCTION_UPTO_MATURITY,
      'RECEIPT_NO_INPUT': formVal.RECEIPT_NO_INPUT,
      'RECEIPT_TYPE': formVal.RECEIPT_TYPE,
      'WITHDRAWAL_APPLICABLE': formVal.WITHDRAWAL_APPLICABLE,
      'BALANCE_ADD_APPLICABLE': formVal.BALANCE_ADD_APPLICABLE,
      'LESS_PREMATURE_INT_RATE': formVal.LESS_PREMATURE_INT_RATE,
      'PREMATURE_INTRATE_ASPER': formVal.PREMATURE_INTRATE_ASPER,
      'AFTER_MATURE_INT_RATE': formVal.AFTER_MATURE_INT_RATE,
      'TD_RECEIPT_METHOD': formVal.TD_RECEIPT_METHOD,



    }
    console.log(dataToSend);
    this.TermDepositSchemeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
      // to reload after insertion of data
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
    this.TermDepositSchemeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.ngsglacno=Number(data.S_GLACNO)
      this.ngintglac=Number(data.S_INT_ACNO)
      this.ngintcreditgl=Number(data.S_INT_CR_ACNO)
      this.ngpayable=Number(data.S_RECBL_PYBL_INT_ACNO)
      this.ngpenalintac=Number(data.S_PENAL_ACNO)
      this.ngrecble=Number(data.S_RECBL_PENAL_ACNO)
      this.ngcashint=Number(data.S_CASH_INT_ACNO)
      this.ngmaturebtntpd=Number(data.MATURED_BUT_NOT_PAID_GLAC)
      this.ngunittdperiod=Number(data.UNIT_OF_PERIOD)
      this.nginstallmentbase=Number(data.INSTALLMENT_BASIS)
      this.angForm.patchValue({

        'S_ACNOTYPE': data.S_ACNOTYPE,
        'S_APPL': data.S_APPL,
        'S_SHNAME': data.S_SHNAME,
        'S_NAME': data.S_NAME,
        // 'S_GLACNO': data.S_GLACNO,
        // 'S_INT_ACNO': data.S_INT_ACNO,
        // 'S_INT_CR_ACNO': data.S_INT_CR_ACNO,
        // 'S_RECBL_PYBL_INT_ACNO': data.S_RECBL_PYBL_INT_ACNO,
        // 'S_PENAL_ACNO': data.S_PENAL_ACNO,
        // 'S_RECBL_PENAL_ACNO': data.S_RECBL_PENAL_ACNO,
        // 'S_CASH_INT_ACNO': data.S_CASH_INT_ACNO,
        // 'MATURED_BUT_NOT_PAID_GLAC': data.MATURED_BUT_NOT_PAID_GLAC,
        'INTEREST_RULE': data.INTEREST_RULE,
        'IS_RECURRING_TYPE': data.IS_RECURRING_TYPE,
        'IS_CALLDEPOSIT_TYPE': data.IS_CALLDEPOSIT_TYPE,
        'REINVESTMENT': data.REINVESTMENT,
        'IS_RENEWAL_ALLOW':(data.IS_RENEWAL_ALLOW=="true"?true:false),
        'S_INT_APPLICABLE': data.S_INT_APPLICABLE,
        'POST_TO_INDIVIDUAL_AC': (data.POST_TO_INDIVIDUAL_AC=="true"?true:false),
        'S_PAYABLE_INT_ALLOW': (data.S_PAYABLE_INT_ALLOW=="true"?true:false),
        'IS_INT_ON_DEPO_AMT':(data.IS_INT_ON_DEPO_AMT=="true"?true:false),
        'MIN_INT_LIMIT': data.MIN_INT_LIMIT,
        'IS_INTUPTODATE':(data.IS_INTUPTODATE=="true"?true:false),
        'ROUNDOFF_FACTOR': data.ROUNDOFF_FACTOR,
        'S_INTCALTP': data.S_INTCALTP,
        'S_PRODUCT_DAY_BASE': data.S_PRODUCT_DAY_BASE,
        'S_PRODUCT_DAY_BASE_END': data.S_PRODUCT_DAY_BASE_END,
        'IS_PRODUCTUPTODATE':(data.IS_PRODUCTUPTODATE=="true"?true:false),
        'IS_START_WITH_MONTHS':(data.IS_START_WITH_MONTHS=="true"?true:false),
        'IS_PRODUCT_BAL_BASE': data.IS_PRODUCT_BAL_BASE,
        'IS_DAYSBASE_INSTRUCTION':(data.IS_DAYSBASE_INSTRUCTION=="true"?true:false),
        'S_INTCALC_METHOD': data.S_INTCALC_METHOD,
        'FIX_QUARTER': (data.FIX_QUARTER=="true"?true:false),
        'QUARTER_PLUS_DAYS': (data.QUARTER_PLUS_DAYS=="true"?true:false),
        'COMPOUND_INT_BASIS': data.COMPOUND_INT_BASIS,
        'COMPOUND_INT_DAYS': data.COMPOUND_INT_DAYS,
        'IS_DISCOUNTED_INT_RATE': data.IS_DISCOUNTED_INT_RATE,
        'S_INSTTYPE': data.S_INSTTYPE,
        // 'INSTALLMENT_BASIS': data.INSTALLMENT_BASIS,
        'IS_ASSUMED_INSTALLMENTS': (data.IS_ASSUMED_INSTALLMENTS=="true"?true:false),
        'INSTALLMENT_COMPULSORY_IN_PAT': (data.INSTALLMENT_COMPULSORY_IN_PAT=="true"?true:false),
        'PREMATURE_ON_DEPOSIT_INST':(data.PREMATURE_ON_DEPOSIT_INST=="true"?true:false),
        'ALLOW_EXTRA_INSTALLMENTS': (data.ALLOW_EXTRA_INSTALLMENTS=="true"?true:false),
        'S_PENAL_INT_APPLICABLE': (data.S_PENAL_INT_APPLICABLE=="true"?true:false),
        'DEPOSIT_PENAL_INT_CALC_DAY': data.DEPOSIT_PENAL_INT_CALC_DAY,
        'POST_PENALINT_IN_INTEREST': (data.POST_PENALINT_IN_INTEREST=="true"?true:false),
        'S_PENAL_INT_RATE': data.S_PENAL_INT_RATE,
        'S_MATUCALC': data.S_MATUCALC,
        'IS_CAL_MATURITY_AMT': data.IS_CAL_MATURITY_AMT,
        'FIXED_MATURITY_AMT': (data.FIXED_MATURITY_AMT=="true"?true:false),
        'PREMATURE_COMPOUND_INT': (data.PREMATURE_COMPOUND_INT=="true"?true:false),
        'TRANSFER_TO_MATURE_DEPOSIT': (data.TRANSFER_TO_MATURE_DEPOSIT=="true"?true:false),
        'MATURE_GRACE_MONTHS': data.MATURE_GRACE_MONTHS,
        'MATURE_GRACE_DAYS': data.MATURE_GRACE_DAYS,
        'IS_AUTO_CUTTING': (data.IS_AUTO_CUTTING=="true"?true:false),
        'S_INTASON': data.S_INTASON,
        'PERIOD_APPLICABLE': data.PERIOD_APPLICABLE,
        'IS_AUTO_PERIOD_CALCULATE': data.IS_AUTO_PERIOD_CALCULATE,
        // 'UNIT_OF_PERIOD': data.UNIT_OF_PERIOD,
        'MIN_DAYS': data.MIN_DAYS,
        'MIN_MONTH': data.MIN_MONTH,
        'MAX_DEP_LMT': data.MAX_DEP_LMT,
        'MULTIPLE_OF_AMT': data.MULTIPLE_OF_AMT,
        'MULTIPLE_OF_DAYS': data.MULTIPLE_OF_DAYS,
        'MULTIPLE_OF_MONTH': data.MULTIPLE_OF_MONTH,
        'S_INTPAID': (data.S_INTPAID=="true"?true:false),
        'S_INTPAID_ON_CLOSING': (data.S_INTPAID_ON_CLOSING=="true"?true:false),
        'IS_TDS_APPLICABLE': (data.IS_TDS_APPLICABLE=="true"?true:false),
        'S_INTADD_PRINCIPLE': (data.S_INTADD_PRINCIPLE=="true"?true:false),
        'STAND_INSTRUCTION_ALLOW': (data.STAND_INSTRUCTION_ALLOW=="true"?true:false),
        'IS_STD_INSTR_UPTO_MATURITY': (data.IS_STD_INSTR_UPTO_MATURITY=="true"?true:false),
        'IS_AUTO_CUT_INSTRUCTION': (data.IS_AUTO_CUT_INSTRUCTION=="true"?true:false),
        'IS_ALLOW_SI_MINBAL': (data.IS_ALLOW_SI_MINBAL=="true"?true:false),
        'INT_INSTRUCTION_ALLOW': (data.INT_INSTRUCTION_ALLOW=="true"?true:false),
        'IS_ADD_PAYINT_IN_INSTRUCTION': (data.IS_ADD_PAYINT_IN_INSTRUCTION=="true"?true:false),
        'IS_INSTRUCTION_UPTO_MATURITY': (data.IS_INSTRUCTION_UPTO_MATURITY=="true"?true:false),
        'RECEIPT_NO_INPUT': data.RECEIPT_NO_INPUT,
        'RECEIPT_TYPE': data.RECEIPT_TYPE,
        'WITHDRAWAL_APPLICABLE': (data.WITHDRAWAL_APPLICABLE=="true"?true:false),
        'BALANCE_ADD_APPLICABLE': (data.BALANCE_ADD_APPLICABLE=="true"?true:false),
        'LESS_PREMATURE_INT_RATE': data.LESS_PREMATURE_INT_RATE,
        'PREMATURE_INTRATE_ASPER': data.PREMATURE_INTRATE_ASPER,
        'AFTER_MATURE_INT_RATE': data.AFTER_MATURE_INT_RATE,
        'TD_RECEIPT_METHOD': data.TD_RECEIPT_METHOD,
  
  

      })
    })
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.TermDepositSchemeService.updateData(data).subscribe(() => {
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
    this.ngsglacno=null
    this.ngintglac=null
    this.ngintcreditgl=null
    this.ngpayable=null
    this.ngpenalintac=null
    this.ngrecble=null
    this.ngcashint=null
    this.ngmaturebtntpd=null
    this.nginstallmentbase=null
    this.ngunittdperiod=null
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
        this.TermDepositSchemeService.deleteData(id).subscribe(data1 => {
          this.termDepositScheme = data1;
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
      $('#schemeparametertable tfoot tr').appendTo('#schemeparametertable thead');
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
