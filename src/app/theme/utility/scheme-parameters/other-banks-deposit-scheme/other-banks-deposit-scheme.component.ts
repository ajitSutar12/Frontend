import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
//files for dropdown
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
//default service files for dropdown
import { CompoundInterestService } from '../../../../shared/dropdownService/compound-interest.service';
import { InstallmentBaseService } from '../../../../shared/dropdownService/installment-base.service';
import { UnitOfTDPeriodService } from '../../../../shared/dropdownService/unit-of-td-period.service';
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { first } from 'rxjs/operators';
// Service File For Handling CRUD Operation
import { OtherBanksDepositSchemeService } from './other-banks-deposit-scheme.service';
// Used to Call API
import { HttpClient } from '@angular/common/http';
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
interface OtherBankDepositScheme {
  S_ACNOTYPE: string
  S_APPL: number
  S_NAME: string
  S_SHNAME: string
  S_GLACNO: string
  S_INT_ACNO: string
  S_RECBL_PYBL_INT_ACNO: string
  S_PENAL_ACNO: string
  S_RECBL_PENAL_ACNO: string
  S_CASH_INT_ACNO: string
  INTEREST_RULE: string
   IS_RECURRING_TYPE: string
  //  IS_CALLDEPOSIT_TYPE: string
  //  REINVESTMENT: string
  S_INT_APPLICABLE: boolean
  POST_TO_INDIVIDUAL_AC: boolean
  S_PAYABLE_INT_ALLOW: boolean
  MIN_INT_LIMIT: number
  S_INTCALTP: string
  IS_INTUPTODATE: boolean
  S_INTCALC_METHOD: string
  FIX_QUARTER: boolean
  QUARTER_PLUS_DAYS: boolean
  COMPOUND_INT_BASIS: string
  COMPOUND_INT_DAYS: number
  IS_DISCOUNTED_INT_RATE: boolean
  S_INSTTYPE: string
  INSTALLMENT_BASIS: string
  IS_ASSUMED_INSTALLMENTS: boolean
  INSTALLMENT_COMPULSORY_IN_PAT: boolean
  S_PENAL_INT_APPLICABLE: boolean
  DEPOSIT_PENAL_INT_CALC_DAY: string
  POST_PENALINT_IN_INTEREST: boolean
  S_MATUCALC: string
  IS_CAL_MATURITY_AMT: boolean
  FIXED_MATURITY_AMT: boolean
  PREMATURE_COMPOUND_INT: boolean
  TRANSFER_TO_MATURE_DEPOSIT: boolean
  S_INTASON: boolean
  PERIOD_APPLICABLE: boolean
  IS_AUTO_PERIOD_CALCULATE: boolean
  UNIT_OF_PERIOD: string
  MIN_DAYS: number
  MIN_MONTH: number
  MULTIPLE_OF_AMT: number
  MULTIPLE_OF_DAYS: number
  MULTIPLE_OF_MONTH: number
  S_INTPAID: boolean
  S_INTPAID_ON_CLOSING: boolean
  STAND_INSTRUCTION_ALLOW: boolean
  INT_INSTRUCTION_ALLOW: boolean
  RECEIPT_NO_INPUT: boolean
  WITHDRAWAL_APPLICABLE: boolean
  BALANCE_ADD_APPLICABLE: boolean
  LESS_PREMATURE_INT_RATE: string
  S_PRODUCT_DAY_BASE:string
  S_PRODUCT_DAY_BASE_END:string
  PROD_INTUPTODATE:boolean

}


@Component({
  selector: 'app-other-banks-deposit-scheme',
  templateUrl: './other-banks-deposit-scheme.component.html',
  styleUrls: ['./other-banks-deposit-scheme.component.scss']
})
export class OtherBanksDepositSchemeComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus

  // Filter Variable
  filterData = {};
  //api 
  url = environment.base_url;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  otherBankDepositScheme: OtherBankDepositScheme[];
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

  //variable to get ID to update
  updateID: number = 0;
  
  //Dropdown option variable
    acMaster: any
    ngglac:any=null
    nginterestgl:any=null
    ngreceivable:any=null
    ngpenalac:any=null
    ngreceivablepenal:any=null
    ngcashint:any=null
    ngnotapplicable:any=null
    nginstallment:any=null
    ngunit:any=null





  notAppOption: Array<IOption> = this.compoundInterestService.getCharacters();
  installmentBaseOption: Array<IOption> = this.installmentBaseService.getCharacters();
  unitOfTDPeriodOption: Array<IOption> = this.unitOfTDPeriodService.getCharacters();
  private dataSub: Subscription = null;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  //variable to list route
  depositSchemeTypeTrue = true;
  interestApplicableTrue = false;
  interestMethodTrue = false;
  installmentAmountTrue = false;
  penalInterestApplicableTrue = false;
  maturityAmountTrue = false;
  TDPeriodTrue = false;
  multipleofXXXTrue = false;
  instructionTrue = false;
  otherSettingTrue = false;

  //radio button selection
  isMonthProductBaseSelected: boolean = false;

  //variables to add enable/disable functionality
  COMPOUND_INT_BASIS: boolean = true;
  S_PRODUCT_DAY_BASE;
  S_PRODUCT_DAY_BASE_END;
  INSTALLMENT_BASIS: boolean = true;
  DEPOSIT_PENAL_INT_CALC_DAY;
  newbtnShow: boolean;

  constructor(
    private http: HttpClient,
    private otherBanksDepositSchemeService: OtherBanksDepositSchemeService,
    private acMasterDropdownService: ACMasterDropdownService,
    private compoundInterestService: CompoundInterestService,
    private installmentBaseService: InstallmentBaseService,
    private unitOfTDPeriodService: UnitOfTDPeriodService,
    private fb: FormBuilder,
    private config: NgSelectConfig,) { }

  ngOnInit(): void {
    this.createForm();
    // Fetching Server side data
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
            this.url + '/other-banks-deposit-scheme',
            dataTableParameters
          ).subscribe(resp => {
            this.otherBankDepositScheme = resp.data;
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
        },
        {
          title: 'Type',
          data: 'S_ACNOTYPE',
        },
        {
          title: 'Scheme Code',
          data: 'S_APPL',
        },
        {
          title: 'Description',
          data: 'S_NAME',
        },
        {
          title: 'Short Name',
          data: 'S_SHNAME',
        },
        {
          title: 'G.L.A/c No.',
          data: 'S_GLACNO',
        },
        {
          title: 'Interest GL A/c',
          data: 'S_INT_ACNO',
        },
        {
          title: 'Receivable Int A/c',
          data: 'S_RECBL_PYBL_INT_ACNO',
        },
        {
          title: 'Penal Int. A/c',
          data: 'S_PENAL_ACNO',
        },
        {
          title: 'Recble Penal Int.A/c',
          data: 'S_RECBL_PENAL_ACNO',
        },
        {
          title: 'Cash Interest A/c',
          data: 'S_CASH_INT_ACNO',
        },
        // {
        //   title: 'INTEREST RULE',
        //   data: 'INTEREST_RULE',
        // },
        // {
        //   title: 'Is Interest Applicable?',
        //   data: 'S_INT_APPLICABLE',
        // },
        // {
        //   title: 'Is Post Interest to A/c',
        //   data: 'POST_TO_INDIVIDUAL_AC',
        // },
        // {
        //   title: 'Is Payable Interest Allowed?',
        //   data: 'S_PAYABLE_INT_ALLOW',
        // },
        // {
        //   title: 'Minimum Interest Amount',
        //   data: 'MIN_INT_LIMIT',
        // },
        // {
        //   title: 'S_INTCALTP',
        //   data: 'S_INTCALTP',
        // },
        // {
        //   title: 'Interest upto Int.Calculation date',
        //   data: 'IS_INTUPTODATE',
        // },
        // {
        //   title: 'S_INTCALC_METHOD',
        //   data: 'S_INTCALC_METHOD',
        // },
        // {
        //   title: 'Fixed Quarter',
        //   data: 'FIX_QUARTER',
        // },
        // {
        //   title: 'Quarter Plus Days',
        //   data: 'QUARTER_PLUS_DAYS',
        // },
        // {
        //   title: 'Compound Interest',
        //   data: 'COMPOUND_INT_BASIS',
        // },
        // {
        //   title: 'Compound Int. Days',
        //   data: 'COMPOUND_INT_DAYS',
        // },
        // {
        //   title: 'Discount Int.Rate Applicable',
        //   data: 'IS_DISCOUNTED_INT_RATE',
        // },
        // {
        //   title: 'S_INSTTYPE',
        //   data: 'S_INSTTYPE',
        // },
        // {
        //   title: 'Installment Base',
        //   data: 'INSTALLMENT_BASIS',
        // },
        // {
        //   title: 'is Assumed Installment is paid?',
        //   data: 'IS_ASSUMED_INSTALLMENTS',
        // },
        // {
        //   title: 'Installment Compulsory in Multiple Amt',
        //   data: 'INSTALLMENT_COMPULSORY_IN_PAT',
        // },
        // {
        //   title: 'Penal Interest Applicable?',
        //   data: 'S_PENAL_INT_APPLICABLE',
        // },
        // {
        //   title: 'Penal Product Base Day',
        //   data: 'DEPOSIT_PENAL_INT_CALC_DAY',
        // },
        // {
        //   title: 'Post Penal Interest to A/c',
        //   data: 'POST_PENALINT_IN_INTEREST',
        // },
        // {
        //   title: 'Maturity Calculation Multiple Amount',
        //   data: 'S_MATUCALC',
        // },
        // {
        //   title: 'Is Calculated Maturity Amt. In Master',
        //   data: 'IS_CAL_MATURITY_AMT',
        // },
        // {
        //   title: 'Is Fixed Maturity Amount for Payment',
        //   data: 'FIXED_MATURITY_AMT',
        // },
        // {
        //   title: 'Premature Compound Interest',
        //   data: 'PREMATURE_COMPOUND_INT',
        // },
        // {
        //   title: 'Auto Maturity Transfer process Execute',
        //   data: 'TRANSFER_TO_MATURE_DEPOSIT',
        // },
        // {
        //   title: 'As on Date Applicable for Deposit',
        //   data: 'S_INTASON',
        // },
        // {
        //   title: 'TD Period Input Applicable',
        //   data: 'PERIOD_APPLICABLE',
        // },
        // {
        //   title: 'Is Auto Calculate Deposit Period ?',
        //   data: 'IS_AUTO_PERIOD_CALCULATE',
        // },
        // {
        //   title: 'Unit of TD Period',
        //   data: 'UNIT_OF_PERIOD',
        // },
        // {
        //   title: 'Minimum Period in Days',
        //   data: 'MIN_DAYS',
        // },
        // {
        //   title: 'Minimum Period in Months',
        //   data: 'MIN_MONTH',
        // },
        // {
        //   title: 'Multiple of Amount',
        //   data: 'MULTIPLE_OF_AMT',
        // },
        // {
        //   title: 'Multiple of Days',
        //   data: 'MULTIPLE_OF_DAYS',
        // },
        // {
        //   title: 'Multiple of Months',
        //   data: 'MULTIPLE_OF_MONTH',
        // },
        // {
        //   title: 'Is Cash Interest Payment Allowed ?',
        //   data: 'S_INTPAID',
        // },
        // {
        //   title: 'Is Interest Paid on A/c Closing ?',
        //   data: 'S_INTPAID_ON_CLOSING',
        // },
        // {
        //   title: 'Is Standing Instruction Applicable ?',
        //   data: 'STAND_INSTRUCTION_ALLOW',
        // },
        // {
        //   title: 'Is Interest Instruction Applicable ?',
        //   data: 'INT_INSTRUCTION_ALLOW',
        // },
        // {
        //   title: 'Is FD Receipt No.Input?',
        //   data: 'RECEIPT_NO_INPUT',
        // },
        // {
        //   title: 'Is Withdrawal Applicable ?',
        //   data: 'WITHDRAWAL_APPLICABLE',
        // },
        // {
        //   title: 'Is Balance Entry Allowed ?',
        //   data: 'BALANCE_ADD_APPLICABLE',
        // },
        // {
        //   title: 'Premature Less Interest Rate ?',
        //   data: 'LESS_PREMATURE_INT_RATE',
        // }
      ],
      dom: 'Blrtip',
    };
    this.runTimer();
    this.dataSub = this.compoundInterestService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.runTimer();
    this.dataSub = this.installmentBaseService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.acMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.acMaster = data;
    })
  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }


  createForm() {
    this.angForm = this.fb.group({
      S_ACNOTYPE: ['IV'],
      S_APPL: ['', [Validators.required, Validators.pattern]],
      S_NAME: ['', [Validators.required, Validators.pattern]],
      S_SHNAME: ['', [Validators.required, Validators.pattern]],
      S_GLACNO: ['', [Validators.required]],
      S_INT_ACNO: ['', [Validators.required]],
      S_RECBL_PYBL_INT_ACNO: [''],
      S_PENAL_ACNO: [''],
      S_RECBL_PENAL_ACNO: [''],
      S_CASH_INT_ACNO: [''],
      INTEREST_RULE: [''],
       IS_RECURRING_TYPE: [''],
      // IS_CALLDEPOSIT_TYPE: [''],
      //  REINVESTMENT: [''],
      S_INT_APPLICABLE: [false],
      POST_TO_INDIVIDUAL_AC: [false],
      S_PAYABLE_INT_ALLOW: [false],
      MIN_INT_LIMIT: ['', [Validators.pattern]],
      S_INTCALTP: [''],
      IS_INTUPTODATE: [false],
      S_INTCALC_METHOD: [''],
      FIX_QUARTER: [false],
      QUARTER_PLUS_DAYS: [false],
      COMPOUND_INT_BASIS: [''],
      COMPOUND_INT_DAYS: [''],
      IS_DISCOUNTED_INT_RATE: [false],
      S_PRODUCT_DAY_BASE: ['', [Validators.pattern, Validators.max(31)]],
      S_PRODUCT_DAY_BASE_END: ['', [Validators.pattern, Validators.max(31)]],
      PROD_INTUPTODATE: [''],
      S_INSTTYPE: [''],
      INSTALLMENT_BASIS: [''],
      IS_ASSUMED_INSTALLMENTS: [false],
      INSTALLMENT_COMPULSORY_IN_PAT: [false],
      S_PENAL_INT_APPLICABLE: [false],
      DEPOSIT_PENAL_INT_CALC_DAY: ['', [Validators.pattern, Validators.required, Validators.max(31)]],
      POST_PENALINT_IN_INTEREST: [false],
      S_MATUCALC: ['', [Validators.pattern]],
      IS_CAL_MATURITY_AMT: [false],
      FIXED_MATURITY_AMT: [false],
      PREMATURE_COMPOUND_INT: [false],
      TRANSFER_TO_MATURE_DEPOSIT: [false],
      S_INTASON: [false],
      PERIOD_APPLICABLE: [false],
      IS_AUTO_PERIOD_CALCULATE: [false],
      UNIT_OF_PERIOD: [''],
      MIN_DAYS: ['', [Validators.pattern]],
      MIN_MONTH: ['', [Validators.pattern]],
      MULTIPLE_OF_AMT: ['', [Validators.pattern]],
      MULTIPLE_OF_DAYS: ['', [Validators.pattern]],
      MULTIPLE_OF_MONTH: ['', [Validators.pattern]],
      S_INTPAID: [false],
      S_INTPAID_ON_CLOSING: [false],
      STAND_INSTRUCTION_ALLOW: [false],
      INT_INSTRUCTION_ALLOW: [false],
      RECEIPT_NO_INPUT: [false],
      WITHDRAWAL_APPLICABLE: [false],
      BALANCE_ADD_APPLICABLE: [false],
      LESS_PREMATURE_INT_RATE: ['', [Validators.pattern]]
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      'S_ACNOTYPE': formVal.S_ACNOTYPE,
      'S_APPL': formVal.S_APPL,
      'S_NAME': formVal.S_NAME,
      'S_SHNAME': formVal.S_SHNAME,
      'S_GLACNO': formVal.S_GLACNO,
      'S_INT_ACNO': formVal.S_INT_ACNO,
      'S_RECBL_PYBL_INT_ACNO': formVal.S_RECBL_PYBL_INT_ACNO,
      'S_PENAL_ACNO': formVal.S_PENAL_ACNO,
      'S_RECBL_PENAL_ACNO': formVal.S_RECBL_PENAL_ACNO,
      'S_CASH_INT_ACNO': formVal.S_CASH_INT_ACNO,
      'INTEREST_RULE': formVal.INTEREST_RULE,
      'IS_RECURRING_TYPE': formVal.IS_RECURRING_TYPE,
      //  'IS_CALLDEPOSIT_TYPE': formVal.IS_CALLDEPOSIT_TYPE,
      //  'REINVESTMENT': formVal.REINVESTMENT,
      'S_INT_APPLICABLE': formVal.S_INT_APPLICABLE,
      'POST_TO_INDIVIDUAL_AC': formVal.POST_TO_INDIVIDUAL_AC,
      'S_PAYABLE_INT_ALLOW': formVal.S_PAYABLE_INT_ALLOW,
      'MIN_INT_LIMIT': formVal.MIN_INT_LIMIT,
      'S_INTCALTP': formVal.S_INTCALTP,
      'IS_INTUPTODATE': formVal.IS_INTUPTODATE,
      'S_INTCALC_METHOD': formVal.S_INTCALC_METHOD,
      'FIX_QUARTER': formVal.FIX_QUARTER,
      'QUARTER_PLUS_DAYS': formVal.QUARTER_PLUS_DAYS,
      'COMPOUND_INT_BASIS': formVal.COMPOUND_INT_BASIS,
      'COMPOUND_INT_DAYS': formVal.COMPOUND_INT_DAYS,
      'IS_DISCOUNTED_INT_RATE': formVal.IS_DISCOUNTED_INT_RATE,
      'S_PRODUCT_DAY_BASE':formVal.S_PRODUCT_DAY_BASE,
      'S_PRODUCT_DAY_BASE_END':formVal.S_PRODUCT_DAY_BASE_END,
      'PROD_INTUPTODATE':formVal.PROD_INTUPTODATE,
      'S_INSTTYPE': formVal.S_INSTTYPE,
      'INSTALLMENT_BASIS': formVal.INSTALLMENT_BASIS,
      'IS_ASSUMED_INSTALLMENTS': formVal.IS_ASSUMED_INSTALLMENTS,
      'INSTALLMENT_COMPULSORY_IN_PAT': formVal.INSTALLMENT_COMPULSORY_IN_PAT,
      'S_PENAL_INT_APPLICABLE': formVal.S_PENAL_INT_APPLICABLE,
      'DEPOSIT_PENAL_INT_CALC_DAY': formVal.DEPOSIT_PENAL_INT_CALC_DAY,
      'POST_PENALINT_IN_INTEREST': formVal.POST_PENALINT_IN_INTEREST,
      'S_MATUCALC': formVal.S_MATUCALC,
      'IS_CAL_MATURITY_AMT': formVal.IS_CAL_MATURITY_AMT,
      'FIXED_MATURITY_AMT': formVal.FIXED_MATURITY_AMT,
      'PREMATURE_COMPOUND_INT': formVal.PREMATURE_COMPOUND_INT,
      'TRANSFER_TO_MATURE_DEPOSIT': formVal.TRANSFER_TO_MATURE_DEPOSIT,
      'S_INTASON': formVal.S_INTASON,
      'PERIOD_APPLICABLE': formVal.PERIOD_APPLICABLE,
      'IS_AUTO_PERIOD_CALCULATE': formVal.IS_AUTO_PERIOD_CALCULATE,
      'UNIT_OF_PERIOD': formVal.UNIT_OF_PERIOD,
      'MIN_DAYS': formVal.MIN_DAYS,
      'MIN_MONTH': formVal.MIN_MONTH,
      'MULTIPLE_OF_AMT': formVal.MULTIPLE_OF_AMT,
      'MULTIPLE_OF_DAYS': formVal.MULTIPLE_OF_DAYS,
      'MULTIPLE_OF_MONTH': formVal.MULTIPLE_OF_MONTH,
      'S_INTPAID': formVal.S_INTPAID,
      'S_INTPAID_ON_CLOSING': formVal.S_INTPAID_ON_CLOSING,
      'STAND_INSTRUCTION_ALLOW': formVal.STAND_INSTRUCTION_ALLOW,
      'INT_INSTRUCTION_ALLOW': formVal.INT_INSTRUCTION_ALLOW,
      'RECEIPT_NO_INPUT': formVal.RECEIPT_NO_INPUT,
      'WITHDRAWAL_APPLICABLE': formVal.WITHDRAWAL_APPLICABLE,
      'BALANCE_ADD_APPLICABLE': formVal.BALANCE_ADD_APPLICABLE,
      'LESS_PREMATURE_INT_RATE': formVal.LESS_PREMATURE_INT_RATE
    }
    this.otherBanksDepositSchemeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      // this.rerender();
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
    this.otherBanksDepositSchemeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'S_ACNOTYPE': data.S_ACNOTYPE,
        'S_APPL': data.S_APPL,
        'S_NAME': data.S_NAME,
        'S_SHNAME': data.S_SHNAME,
        'S_GLACNO': data.S_GLACNO,
        'S_INT_ACNO': data.S_INT_ACNO,
        'S_RECBL_PYBL_INT_ACNO': data.S_RECBL_PYBL_INT_ACNO,
        'S_PENAL_ACNO': data.S_PENAL_ACNO,
        'S_RECBL_PENAL_ACNO': data.S_RECBL_PENAL_ACNO,
        'S_CASH_INT_ACNO': data.S_CASH_INT_ACNO,
        'INTEREST_RULE': data.INTEREST_RULE,
         'IS_RECURRING_TYPE': data.IS_RECURRING_TYPE,
        // 'IS_CALLDEPOSIT_TYPE': data.IS_CALLDEPOSIT_TYPE,
        //  'REINVESTMENT': data.REINVESTMENT,
        'S_INT_APPLICABLE': data.S_INT_APPLICABLE,
        'POST_TO_INDIVIDUAL_AC': data.POST_TO_INDIVIDUAL_AC,
        'S_PAYABLE_INT_ALLOW': data.S_PAYABLE_INT_ALLOW,
        'MIN_INT_LIMIT': data.MIN_INT_LIMIT,
        'S_INTCALTP': data.S_INTCALTP,
        'IS_INTUPTODATE': data.IS_INTUPTODATE,
        'S_INTCALC_METHOD': data.S_INTCALC_METHOD,
        'FIX_QUARTER': data.FIX_QUARTER,
        'QUARTER_PLUS_DAYS': data.QUARTER_PLUS_DAYS,
        'COMPOUND_INT_BASIS': data.COMPOUND_INT_BASIS,
        'COMPOUND_INT_DAYS': data.COMPOUND_INT_DAYS,
        'IS_DISCOUNTED_INT_RATE': data.IS_DISCOUNTED_INT_RATE,
        'S_PRODUCT_DAY_BASE':data.S_PRODUCT_DAY_BASE,
        'S_PRODUCT_DAY_BASE_END':data.S_PRODUCT_DAY_BASE_END,
        'PROD_INTUPTODATE':data.PROD_INTUPTODATE,
        'S_INSTTYPE': data.S_INSTTYPE,
        'INSTALLMENT_BASIS': data.INSTALLMENT_BASIS,
        'IS_ASSUMED_INSTALLMENTS': data.IS_ASSUMED_INSTALLMENTS,
        'INSTALLMENT_COMPULSORY_IN_PAT': data.INSTALLMENT_COMPULSORY_IN_PAT,
        'S_PENAL_INT_APPLICABLE': data.S_PENAL_INT_APPLICABLE,
        'DEPOSIT_PENAL_INT_CALC_DAY': data.DEPOSIT_PENAL_INT_CALC_DAY,
        'POST_PENALINT_IN_INTEREST': data.POST_PENALINT_IN_INTEREST,
        'S_MATUCALC': data.S_MATUCALC,
        'IS_CAL_MATURITY_AMT': data.IS_CAL_MATURITY_AMT,
        'FIXED_MATURITY_AMT': data.FIXED_MATURITY_AMT,
        'PREMATURE_COMPOUND_INT': data.PREMATURE_COMPOUND_INT,
        'TRANSFER_TO_MATURE_DEPOSIT': data.TRANSFER_TO_MATURE_DEPOSIT,
        'S_INTASON': data.S_INTASON,
        'PERIOD_APPLICABLE': data.PERIOD_APPLICABLE,
        'IS_AUTO_PERIOD_CALCULATE': data.IS_AUTO_PERIOD_CALCULATE,
        'UNIT_OF_PERIOD': data.UNIT_OF_PERIOD,
        'MIN_DAYS': data.MIN_DAYS,
        'MIN_MONTH': data.MIN_MONTH,
        'MULTIPLE_OF_AMT': data.MULTIPLE_OF_AMT,
        'MULTIPLE_OF_DAYS': data.MULTIPLE_OF_DAYS,
        'MULTIPLE_OF_MONTH': data.MULTIPLE_OF_MONTH,
        'S_INTPAID': data.S_INTPAID,
        'S_INTPAID_ON_CLOSING': data.S_INTPAID_ON_CLOSING,
        'STAND_INSTRUCTION_ALLOW': data.STAND_INSTRUCTION_ALLOW,
        'INT_INSTRUCTION_ALLOW': data.INT_INSTRUCTION_ALLOW,
        'RECEIPT_NO_INPUT': data.RECEIPT_NO_INPUT,
        'WITHDRAWAL_APPLICABLE': data.WITHDRAWAL_APPLICABLE,
        'BALANCE_ADD_APPLICABLE': data.BALANCE_ADD_APPLICABLE,
        'LESS_PREMATURE_INT_RATE': data.LESS_PREMATURE_INT_RATE
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.otherBanksDepositSchemeService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      this.formSubmitted = false;
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      //this.rerender();
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
  // delClickHandler(id: number) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to delete Other Banks Deposit Scheme data.",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#229954',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.otherBanksDepositSchemeService.deleteData(id).subscribe(data1 => {
  //         this.otherBankDepositScheme = data1;
  //         Swal.fire(
  //           'Deleted!',
  //           'Your data has been deleted.',
  //           'success'
  //         )
  //       }), (error) => {
  //         console.log(error)
  //       }
  //       // to reload after delete of data
  //       this.rerender();
  //     } else if (
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       Swal.fire(
  //         'Cancelled',
  //         'Your data is safe.',
  //         'error'
  //       )
  //     }
  //   })
  // }

  OpenLink(val) {
    if (val == 51) {
      this.depositSchemeTypeTrue = true;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;
    }
    if (val == 52) {
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = true;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;
    }
    if (val == 53) {
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = true;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;
    }
    if (val == 54) {
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = true;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;

    }
    if (val == 55) {
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = true;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;

    }
    if (val == 56) {
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = true;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;

    }
    if (val == 57) {
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = true;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = false;

    }
    if (val == 58) {
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = true;
      this.instructionTrue = false;
      this.otherSettingTrue = false;

    }
    if (val == 59) {
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = true;
      this.otherSettingTrue = false;

    }
    if (val == 60) {
      this.depositSchemeTypeTrue = false;
      this.interestApplicableTrue = false;
      this.interestMethodTrue = false;
      this.installmentAmountTrue = false;
      this.penalInterestApplicableTrue = false;
      this.maturityAmountTrue = false;
      this.TDPeriodTrue = false;
      this.multipleofXXXTrue = false;
      this.instructionTrue = false;
      this.otherSettingTrue = true;

    }
  }

  //Function to enable/Disable fields according selection of Interest applicable list
  isIntrestApplicable($event) {
    if ($event.target.checked) {
      document.getElementById('IsPostInteresttoAc').removeAttribute("disabled");
      document.getElementById('IsPayableInterestAllowed').removeAttribute("disabled");
      document.getElementById('MIN_INT_LIMIT').removeAttribute("disabled");
    }
    else {
      document.getElementById('IsPostInteresttoAc').setAttribute("disabled", "true");
      document.getElementById('IsPayableInterestAllowed').setAttribute("disabled", "true");
      document.getElementById('MIN_INT_LIMIT').setAttribute("disabled", "true");
      // this.angForm.controls.IsPostInteresttoAc.reset();
      // this.angForm.controls.IsPayableInterestAllowed.reset();
      // this.angForm.controls.MIN_INT_LIMIT.reset();
    }
  }

  

  isInterestCalculation(value) {
    if (value == 1) {
      this.isMonthProductBaseSelected = false;
      document.getElementById('InterestuptoIntCalculationDate').removeAttribute("disabled");
    }
    if (value == 2) {
      this.isMonthProductBaseSelected = true;
      document.getElementById('InterestuptoIntCalculationDate').setAttribute("disabled", "true");
    }
    if (value == 3) {
      this.isMonthProductBaseSelected = false;
      document.getElementById('InterestuptoIntCalculationDate').removeAttribute("disabled");
    }
  }

  //Function to enable/Disable fields according selection of Interest method list
  interestMethod(value) {
    if (value == 1) {
      this.COMPOUND_INT_BASIS = true;
    }
    else {
      this.COMPOUND_INT_BASIS = false;
    }
  }

  //Function to enable/Disable fields according selection of product day base start day
  isProductDayBase(S_PRODUCT_DAY_BASE) {
    if (S_PRODUCT_DAY_BASE == 0) {
      document.getElementById('S_PRODUCT_DAY_BASE_MONTH_BEGIN').removeAttribute("disabled");
      document.getElementById('S_PRODUCT_DAY_BASE_MONTH_END').removeAttribute("disabled");
    }
    else {
      document.getElementById('S_PRODUCT_DAY_BASE_MONTH_BEGIN').setAttribute("disabled", "false");
      document.getElementById('S_PRODUCT_DAY_BASE_MONTH_END').setAttribute("disabled", "false");
    }
  }

  //Function to enable/Disable fields according selection of product day base end day
  isProductDayBaseEnd(S_PRODUCT_DAY_BASE_END) {
    if (S_PRODUCT_DAY_BASE_END == 0) {
      document.getElementById('S_PRODUCT_DAY_BASE_END_MONTH_BEGIN').removeAttribute("disabled");
      document.getElementById('S_PRODUCT_DAY_BASE_END_MONTH_END').removeAttribute("disabled");
    }
    else {
      document.getElementById('S_PRODUCT_DAY_BASE_END_MONTH_BEGIN').setAttribute("disabled", "false");
      document.getElementById('S_PRODUCT_DAY_BASE_END_MONTH_END').setAttribute("disabled", "false");
    }
  }

  //Function to enable/Disable fields according selection of Installment amount list
  isInstallmentAmount(value) {
    if (value == 1) {
      this.INSTALLMENT_BASIS = true;
      document.getElementById('IS_ASSUMED_INSTALLMENTS').setAttribute("disabled", "true");
      document.getElementById('INSTALLMENT_COMPULSORY_IN_PAT').setAttribute("disabled", "true");
    }
    else {
      this.INSTALLMENT_BASIS = false;
      document.getElementById('IS_ASSUMED_INSTALLMENTS').removeAttribute("disabled");
      document.getElementById('INSTALLMENT_COMPULSORY_IN_PAT').removeAttribute("disabled");
    }
  }

  //Function to enable/Disable fields according selection of Penal Interest applicable
  isPenalInterestApplicable(event) {
    if (event.target.checked) {
      document.getElementById('DEPOSIT_PENAL_INT_CALC_DAY').removeAttribute("disabled");
      document.getElementById('DEPOSIT_PENAL_INT_CALC_DAY_MONTH_BEGIN').removeAttribute("disabled");
      document.getElementById('DEPOSIT_PENAL_INT_CALC_DAY_MONTH_END').removeAttribute("disabled");
      document.getElementById('POST_PENALINT_IN_INTEREST').removeAttribute("disabled");
    }
    else {
      document.getElementById('DEPOSIT_PENAL_INT_CALC_DAY').setAttribute("disabled", "true");
      document.getElementById('DEPOSIT_PENAL_INT_CALC_DAY_MONTH_BEGIN').setAttribute("disabled", "true");
      document.getElementById('DEPOSIT_PENAL_INT_CALC_DAY_MONTH_END').setAttribute("disabled", "true");
      document.getElementById('POST_PENALINT_IN_INTEREST').setAttribute("disabled", "true");
    }
  }

  isPenalProductBaseDay(DEPOSIT_PENAL_INT_CALC_DAY) {
    if (DEPOSIT_PENAL_INT_CALC_DAY == 0) {
      document.getElementById('DEPOSIT_PENAL_INT_CALC_DAY_MONTH_BEGIN').removeAttribute("disabled");
      document.getElementById('DEPOSIT_PENAL_INT_CALC_DAY_MONTH_END').removeAttribute("disabled");
    }
    else {
      document.getElementById('DEPOSIT_PENAL_INT_CALC_DAY_MONTH_BEGIN').setAttribute("disabled", "false");
      document.getElementById('DEPOSIT_PENAL_INT_CALC_DAY_MONTH_END').setAttribute("disabled", "false");
    }
  }

  //Function to enable/Disable fields according selection of deposit scheme type list
  isPatDeposit(value) {
    if (value == 1) {
      this.angForm.controls['S_MATUCALC'].enable();
      this.angForm.controls['IS_CAL_MATURITY_AMT'].setValue(true);
      this.angForm.controls['FIXED_MATURITY_AMT'].setValue(true);
    }
    else if (value == 2) {
      this.angForm.controls['S_MATUCALC'].disable();
      this.angForm.controls['IS_CAL_MATURITY_AMT'].setValue(false);
      this.angForm.controls['FIXED_MATURITY_AMT'].setValue(false);
    }
    else if (value == 3) {
      this.angForm.controls['S_MATUCALC'].disable();
      this.angForm.controls['IS_CAL_MATURITY_AMT'].setValue(false);
      this.angForm.controls['FIXED_MATURITY_AMT'].setValue(false);
    }
    else if (value == 4) {
      this.angForm.controls['S_MATUCALC'].disable();
      this.angForm.controls['IS_CAL_MATURITY_AMT'].setValue(false);
      this.angForm.controls['FIXED_MATURITY_AMT'].setValue(false);
    }
    else if (value == 5) {
      this.angForm.controls['S_MATUCALC'].disable();
      this.angForm.controls['IS_CAL_MATURITY_AMT'].setValue(false);
      this.angForm.controls['FIXED_MATURITY_AMT'].setValue(false);
    }
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
}
