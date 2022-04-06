import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Used to Call API
import { HttpClient } from '@angular/common/http';
//Importing for prefix dropdown
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { InstallmentMethodService } from '../../../../shared/dropdownService/installment-method.service';
import { TermLoanSchemeService } from './term-loan-scheme.service';
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
interface TermLoanMaster {
  S_ACNOTYPE: string,
  S_APPL: string,
  S_NAME: string,
  S_SHNAME: string,
  S_GLACNO: string,
  S_INT_ACNO: string,
  S_RECBL_PYBL_INT_ACNO: string,
  S_PENAL_ACNO: string,
  S_RECBL_PENAL_ACNO: string,
  S_RECBL_ODUE_INT_ACNO: string,
  S_OUTSTANDING_INT_ACNO: string,
  IS_DEPO_LOAN: string,
  S_INT_APPLICABLE: boolean,
  POST_TO_INDIVIDUAL_AC: boolean,
  S_RECEIVABLE_INT_ALLOW: boolean,
  IS_INT_ON_RECINT: boolean,
  IS_INT_ON_OTHERAMT: boolean,
  IS_INTUPTODATE: boolean,
  IS_NO_POST_INT_AFT_OD: boolean,
  INTEREST_METHOD: string,
  MIN_INT_LIMIT: number,
  S_PENAL_INT_APPLICABLE: boolean,
  IS_POST_PENAL_TO_AC: boolean,
  POST_PENALINT_IN_INTEREST: boolean,
  IS_REC_PENAL_APPL: boolean,
  IS_CAL_PENAL_AFTER_EXPIRY: boolean,
  S_PENAL_INT_RATE: number,
  PENAL_METHOD: string,
  S_DUE_LIST_ALLOW: boolean,
  GRACE_PERIOD_APPLICABLE: boolean,
  MORATORIUM_APPLICABLE: boolean,
  STAND_INSTRUCTION_ALLOW: boolean,
  BALANCE_ADD_APPLICABLE: boolean,
  IS_UNSECURED_LOAN: boolean,
  IS_OVERDUE_CHARGES_APPLY: boolean,
  MAX_LOAN_LMT: number,
  ROUNDOFF_FACTOR: number,
  DEFAULT_LOAN_PERIOD: number,
  IS_LOAN_PERIOD_LOCK: boolean,
  MIN_LOAN_PERIOD: number,
  MAX_LOAN_PERIOD: number,
  S_INSTTYPE: boolean,
  INSTALLMENT_METHOD: string,
  IS_OVERDUE_ON_INSTALLMENT: number,
  IS_SHOW_INT_AS_RECINT_IFDUEBAL: boolean,
  MIN_DUE_INSTALLMENTS: string,
}

@Component({
  selector: 'app-term-loan-scheme',
  templateUrl: './term-loan-scheme.component.html',
  styleUrls: ['./term-loan-scheme.component.scss']
})

export class TermLoanSchemeComponent implements OnInit, AfterViewInit, OnDestroy {
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
  termLoanMaster: TermLoanMaster[];
  otherTrue = true;
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

  //title select variables
  //Dropdown option variable
  acMaster: any
  ngglacno:any=null
  ngintglac:any=null
  ngreceivableintac:any=null
  ngpenalintac:any=null
  ngrecblepenalintac:any=null
  ngrecbleoverdueint:any=null
  ngoutstandingintac:any=null
  nginstallment:any=null


  installmentMethod: Array<IOption> = this.installmentMethodService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  dropDown: any;

  private dataSub: Subscription = null;

  loanTypeTrue = true;
  interestApplicableTrue = false;
  panelInterestTrue = false;
  graceMoratoriumTrue = false;
  loanOtherSettingsTrue = false;
  installmentSettingsTrue = false;

  //variable to get ID to update
  updateID: number = 0;
  filterData={};
  newbtnShow: boolean;

  constructor(public installmentMethodService: InstallmentMethodService,
    private acMasterDropdownService: ACMasterDropdownService,
    public termLoanSchemeService: TermLoanSchemeService,
    private fb: FormBuilder, private http: HttpClient,
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
            this.url + '/term-loan-scheme',
            dataTableParameters
          ).subscribe(resp => {
            this.termLoanMaster = resp.data;
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
          title: 'G.L. A/c No.',
          data: 'S_GLACNO',
        },
        {
          title: 'Interest GL A/c',
          data: 'S_INT_ACNO',
        },
        {
          title: 'Receivable Int. A/c',
          data: 'S_RECBL_PYBL_INT_ACNO',
        },
        {
          title: 'Penal Int. A/c',
          data: 'S_PENAL_ACNO',
        },
        {
          title: 'Recble Penal Int. A/c',
          data: 'S_RECBL_PENAL_ACNO',
        },
        {
          title: 'Recble Overdue Int.',
          data: 'S_RECBL_ODUE_INT_ACNO',
        },
        {
          title: 'Outstanding Int. A/c',
          data: 'S_OUTSTANDING_INT_ACNO',
        },
        // {
        //   title: 'Loan Type',
        //   data: 'IS_DEPO_LOAN',
        // },
        // {
        //   title: 'Is Interest Applicable ?',
        //   data: 'S_INT_APPLICABLE',
        // },
        // {
        //   title: 'Is Post Interest to A/c ?',
        //   data: 'POST_TO_INDIVIDUAL_AC',
        // },
        // {
        //   title: 'Is Receivable Int. Allowed ?',
        //   data: 'S_RECEIVABLE_INT_ALLOW',
        // },
        // {
        //   title: 'Is Interest On Receivable Interest ?',
        //   data: 'IS_INT_ON_RECINT',
        // },
        // {
        //   title: 'Is Interest On Other Receivable Amt.?',
        //   data: 'IS_INT_ON_OTHERAMT',
        // },
        // {
        //   title: 'Is Dont Post Interest After Expiry Date ?',
        //   data: 'IS_INTUPTODATE',
        // },
        // {
        //   title: 'Is Dont Post Interest After OD ?',
        //   data: 'IS_NO_POST_INT_AFT_OD',
        // },
        // {
        //   title: 'Interest Caculation Method',
        //   data: 'INTEREST_METHOD',
        // },
        // {
        //   title: 'Minimum Interest Amount',
        //   data: 'MIN_INT_LIMIT',
        // },
        // {
        //   title: 'Penal Interest Calculation Applicable ?',
        //   data: 'S_PENAL_INT_APPLICABLE',
        // },
        // {
        //   title: 'Post Penal Interest to Account ?',
        //   data: 'IS_POST_PENAL_TO_AC',
        // },
        // {
        //   title: 'Add Penal Interest in Interest Amount ?',
        //   data: 'POST_PENALINT_IN_INTEREST',
        // },
        // {
        //   title: 'Is Maintain Receivable Penal Interest to A/c ?',
        //   data: 'IS_REC_PENAL_APPL',
        // },
        // {
        //   title: 'Calculate Penal After Account Expiry ?',
        //   data: 'IS_CAL_PENAL_AFTER_EXPIRY',
        // },
        // {
        //   title: 'Penal Interest Rate %',
        //   data: 'S_PENAL_INT_RATE',
        // },
        // {
        //   title: 'Penal Interest Method',
        //   data: 'PENAL_METHOD',
        // },
        // {
        //   title: 'Calculate Overdue Only After A/c Expired ?',
        //   data: 'S_DUE_LIST_ALLOW',
        // },
        // {
        //   title: 'Is Grace Period Applicable',
        //   data: 'GRACE_PERIOD_APPLICABLE',
        // },
        // {
        //   title: 'Is Moratorium Period Applicable',
        //   data: 'MORATORIUM_APPLICABLE',
        // },
        // {
        //   title: 'Is Standing Instruction Applicable',
        //   data: 'STAND_INSTRUCTION_ALLOW',
        // },
        // {
        //   title: 'Is Balance Entry Allowed ?',
        //   data: 'BALANCE_ADD_APPLICABLE',
        // },
        // {
        //   title: 'Is Unsecured Loan Type ?',
        //   data: 'IS_UNSECURED_LOAN',
        // },
        // {
        //   title: 'Is Auto Post Overdue Charges in Day Begin ?',
        //   data: 'IS_OVERDUE_CHARGES_APPLY',
        // },
        // {
        //   title: 'Maximum Loan Limit',
        //   data: 'MAX_LOAN_LMT',
        // },
        // {
        //   title: 'Interest Round Off Factor in Paise',
        //   data: 'ROUNDOFF_FACTOR',
        // },
        // {
        //   title: 'Default Loan Period In Months',
        //   data: 'DEFAULT_LOAN_PERIOD',
        // },
        // {
        //   title: 'Is Loan Period Lock Allowed ?',
        //   data: 'IS_LOAN_PERIOD_LOCK',
        // },
        // {
        //   title: 'Minimum Loan Period In Months',
        //   data: 'MIN_LOAN_PERIOD',
        // },
        // {
        //   title: 'Maximum Loan Period in Months',
        //   data: 'MAX_LOAN_PERIOD',
        // },
        // {
        //   title: 'Is Installment Applicable ?',
        //   data: 'INSTALLMENT_METHOD',
        // },
        // {
        //   title: 'Installment Method',
        //   data: 'INSTALLMENT_METHOD',
        // },
        // {
        //   title: 'Overdue Rule Code (0-1-2-3)',
        //   data: 'IS_OVERDUE_ON_INSTALLMENT',
        // },
        // {
        //   title: 'Post as Receivable Interest if Account goes in Overdue ?',
        //   data: 'IS_SHOW_INT_AS_RECINT_IFDUEBAL',
        // },
        // {
        //   title: 'Minimum Overdue Installments',
        //    data: 'MIN_DUE_INSTALLMENTS',
        // },
      ],
      dom: 'Blrtip',
    };
    this.runTimer();
    this.dataSub = this.installmentMethodService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.acMasterDropdownService.getACMasterList().pipe(first()).subscribe(data => {
      this.acMaster = data;
    })
  }

  OpenLink(val) {

    if (val == 91) {
      this.loanTypeTrue = true;
      this.interestApplicableTrue = false;
      this.panelInterestTrue = false;
      this.graceMoratoriumTrue = false;
      this.loanOtherSettingsTrue = false;
      this.installmentSettingsTrue = false;
    }
    if (val == 92) {
      this.loanTypeTrue = false;
      this.interestApplicableTrue = true;
      this.panelInterestTrue = false;
      this.graceMoratoriumTrue = false;
      this.loanOtherSettingsTrue = false;
      this.installmentSettingsTrue = false;

    }
    if (val == 93) {
      this.loanTypeTrue = false;
      this.interestApplicableTrue = false;
      this.panelInterestTrue = true;
      this.graceMoratoriumTrue = false;
      this.loanOtherSettingsTrue = false;
      this.installmentSettingsTrue = false;

    }
    if (val == 94) {
      this.loanTypeTrue = false;
      this.interestApplicableTrue = false;
      this.panelInterestTrue = false;
      this.graceMoratoriumTrue = true;
      this.loanOtherSettingsTrue = false;
      this.installmentSettingsTrue = false;

    }
    if (val == 95) {
      this.loanTypeTrue = false;
      this.interestApplicableTrue = false;
      this.panelInterestTrue = false;
      this.graceMoratoriumTrue = false;
      this.loanOtherSettingsTrue = true;
      this.installmentSettingsTrue = false;

    }
    if (val == 96) {
      this.loanTypeTrue = false;
      this.interestApplicableTrue = false;
      this.panelInterestTrue = false;
      this.graceMoratoriumTrue = false;
      this.loanOtherSettingsTrue = false;
      this.installmentSettingsTrue = true;

    }
  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);

  }

  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      S_ACNOTYPE: ['LN'],
      S_APPL: ["", [Validators.required,Validators.pattern, Validators.min(501),Validators.max(599)]],
      S_NAME: ['', [Validators.pattern, Validators.required]],
      S_SHNAME: ['', [Validators.pattern, Validators.required]],
      S_GLACNO: ['', [Validators.required]],
      S_INT_ACNO: ['', [Validators.required]],
      S_RECBL_PYBL_INT_ACNO: [''],
      S_PENAL_ACNO: [''],
      S_RECBL_PENAL_ACNO: [''],
      S_RECBL_ODUE_INT_ACNO: [''],
      S_OUTSTANDING_INT_ACNO: [''],
      S_INT_APPLICABLE: [false],
      POST_TO_INDIVIDUAL_AC: [false],
      S_RECEIVABLE_INT_ALLOW: [false],
      IS_INT_ON_RECINT: [false],
      IS_INT_ON_OTHERAMT: [false],
      IS_INTUPTODATE: [false],
      IS_NO_POST_INT_AFT_OD: [false],
      INTEREST_METHOD: [''],
      MIN_INT_LIMIT: ['', [Validators.pattern]],
      S_PENAL_INT_APPLICABLE: [false],
      IS_POST_PENAL_TO_AC: [false],
      POST_PENALINT_IN_INTEREST: [false],
      IS_REC_PENAL_APPL: [false],
      IS_CAL_PENAL_AFTER_EXPIRY: [false],
      S_PENAL_INT_RATE: ['', [Validators.pattern]],
      PENAL_METHOD: [''],
      S_DUE_LIST_ALLOW: [false],
      GRACE_PERIOD_APPLICABLE: [false],
      MORATORIUM_APPLICABLE: [false],
      STAND_INSTRUCTION_ALLOW: [false],
      BALANCE_ADD_APPLICABLE: [false],
      IS_UNSECURED_LOAN: [false],
      IS_OVERDUE_CHARGES_APPLY: [false],
      MAX_LOAN_LMT: ['', [Validators.pattern]],
      ROUNDOFF_FACTOR: ['', [Validators.pattern]],
      DEFAULT_LOAN_PERIOD: ['', [Validators.pattern]],
      IS_LOAN_PERIOD_LOCK: [false],
      MIN_LOAN_PERIOD: ['', [Validators.pattern]],
      MAX_LOAN_PERIOD: ['', [Validators.pattern]],
      S_INSTTYPE: [''],
      INSTALLMENT_METHOD: [''],
      IS_OVERDUE_ON_INSTALLMENT: ['', [Validators.pattern, Validators.max(3)]],
      IS_SHOW_INT_AS_RECINT_IFDUEBAL: [false],
      MIN_DUE_INSTALLMENTS: ['', [Validators.pattern, Validators.maxLength]],
      IS_DEPO_LOAN: [''],
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
      'S_RECBL_ODUE_INT_ACNO': formVal.S_RECBL_ODUE_INT_ACNO,
      'S_OUTSTANDING_INT_ACNO': formVal.S_OUTSTANDING_INT_ACNO,
      'IS_DEPO_LOAN': formVal.IS_DEPO_LOAN,
      'S_INT_APPLICABLE': formVal.S_INT_APPLICABLE,
      'POST_TO_INDIVIDUAL_AC': formVal.POST_TO_INDIVIDUAL_AC,
      'S_RECEIVABLE_INT_ALLOW': formVal.S_RECEIVABLE_INT_ALLOW,
      'IS_INT_ON_RECINT': formVal.IS_INT_ON_RECINT,
      'IS_INT_ON_OTHERAMT': formVal.IS_INT_ON_OTHERAMT,
      'IS_INTUPTODATE': formVal.IS_INTUPTODATE,
      'IS_NO_POST_INT_AFT_OD': formVal.IS_NO_POST_INT_AFT_OD,
      'INTEREST_METHOD': formVal.INTEREST_METHOD,
      'MIN_INT_LIMIT': formVal.MIN_INT_LIMIT,
      'S_PENAL_INT_APPLICABLE': formVal.S_PENAL_INT_APPLICABLE,
      'IS_POST_PENAL_TO_AC': formVal.IS_POST_PENAL_TO_AC,
      'POST_PENALINT_IN_INTEREST': formVal.POST_PENALINT_IN_INTEREST,
      'IS_REC_PENAL_APPL': formVal.IS_REC_PENAL_APPL,
      'IS_CAL_PENAL_AFTER_EXPIRY': formVal.IS_CAL_PENAL_AFTER_EXPIRY,
      'S_PENAL_INT_RATE': formVal.S_PENAL_INT_RATE,
      'PENAL_METHOD': formVal.PENAL_METHOD,
      'S_DUE_LIST_ALLOW': formVal.S_DUE_LIST_ALLOW,
      'GRACE_PERIOD_APPLICABLE': formVal.GRACE_PERIOD_APPLICABLE,
      'MORATORIUM_APPLICABLE': formVal.MORATORIUM_APPLICABLE,
      'STAND_INSTRUCTION_ALLOW': formVal.STAND_INSTRUCTION_ALLOW,
      'BALANCE_ADD_APPLICABLE': formVal.BALANCE_ADD_APPLICABLE,
      'IS_UNSECURED_LOAN': formVal.IS_UNSECURED_LOAN,
      'IS_OVERDUE_CHARGES_APPLY': formVal.IS_OVERDUE_CHARGES_APPLY,
      'MAX_LOAN_LMT': formVal.MAX_LOAN_LMT,
      'ROUNDOFF_FACTOR': formVal.ROUNDOFF_FACTOR,
      'DEFAULT_LOAN_PERIOD': formVal.DEFAULT_LOAN_PERIOD,
      'IS_LOAN_PERIOD_LOCK': formVal.IS_LOAN_PERIOD_LOCK,
      'MIN_LOAN_PERIOD': formVal.MIN_LOAN_PERIOD,
      'MAX_LOAN_PERIOD': formVal.MAX_LOAN_PERIOD,
      'S_INSTTYPE': formVal.S_INSTTYPE,
      'INSTALLMENT_METHOD': formVal.INSTALLMENT_METHOD,
      'IS_OVERDUE_ON_INSTALLMENT': formVal.IS_OVERDUE_ON_INSTALLMENT,
      'IS_SHOW_INT_AS_RECINT_IFDUEBAL': formVal.IS_SHOW_INT_AS_RECINT_IFDUEBAL,
      'MIN_DUE_INSTALLMENTS': formVal.MIN_DUE_INSTALLMENTS,
    }
    this.termLoanSchemeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.formSubmitted = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      // to reload after insertion of data
      //this.rerender();
    }, (error) => {
      console.log(error)
    })
    // To clear form
    this.resetForm();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    
    this.newbtnShow = true;
    this.termLoanSchemeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.ngglacno=Number(data.S_GLACNO)
      this.ngintglac=Number(data.S_INT_ACNO)
      this.ngreceivableintac=Number(data.S_RECBL_PYBL_INT_ACNO)
      this.ngpenalintac=Number(data.S_PENAL_ACNO)
      this.ngrecblepenalintac=Number(data.S_RECBL_PENAL_ACNO)
      this.ngrecbleoverdueint=Number(data.S_RECBL_ODUE_INT_ACNO)
      this.ngoutstandingintac=Number(data.S_OUTSTANDING_INT_ACNO)
      this.nginstallment=data.INSTALLMENT_METHOD
      
      this.angForm.patchValue({
        'S_ACNOTYPE': data.S_ACNOTYPE,
        'S_APPL': data.S_APPL,
        'S_NAME': data.S_NAME,
        'S_SHNAME': data.S_SHNAME,
        // 'S_GLACNO': data.S_GLACNO,
        // 'S_INT_ACNO': data.S_INT_ACNO,
        // 'S_RECBL_PYBL_INT_ACNO': data.S_RECBL_PYBL_INT_ACNO,
        // 'S_PENAL_ACNO': data.S_PENAL_ACNO,
        // 'S_RECBL_PENAL_ACNO': data.S_RECBL_PENAL_ACNO,
        // 'S_RECBL_ODUE_INT_ACNO': data.S_RECBL_ODUE_INT_ACNO,
        // 'S_OUTSTANDING_INT_ACNO': data.S_OUTSTANDING_INT_ACNO,
        'IS_DEPO_LOAN': data.IS_DEPO_LOAN,
        'S_INT_APPLICABLE': (data.S_INT_APPLICABLE=="true"?true:false),
        'POST_TO_INDIVIDUAL_AC': (data.POST_TO_INDIVIDUAL_AC=="true"?true:false),
        'S_RECEIVABLE_INT_ALLOW': (data.S_RECEIVABLE_INT_ALLOW=="true"?true:false),
        'IS_INT_ON_RECINT': (data.IS_INT_ON_RECINT=="true"?true:false),
        'IS_INT_ON_OTHERAMT': (data.IS_INT_ON_OTHERAMT=="true"?true:false),
        'IS_INTUPTODATE': (data.IS_INTUPTODATE=="true"?true:false),
        'IS_NO_POST_INT_AFT_OD': (data.IS_NO_POST_INT_AFT_OD=="true"?true:false),
        'INTEREST_METHOD': data.INTEREST_METHOD,
        'MIN_INT_LIMIT': data.MIN_INT_LIMIT,
        'S_PENAL_INT_APPLICABLE': (data.S_PENAL_INT_APPLICABLE=="true"?true:false),
        'IS_POST_PENAL_TO_AC': (data.IS_POST_PENAL_TO_AC=="true"?true:false),
        'POST_PENALINT_IN_INTEREST': (data.POST_PENALINT_IN_INTEREST=="true"?true:false),
        'IS_REC_PENAL_APPL': (data.IS_REC_PENAL_APPL=="true"?true:false),
        'IS_CAL_PENAL_AFTER_EXPIRY': (data.IS_CAL_PENAL_AFTER_EXPIRY=="true"?true:false),
        'S_PENAL_INT_RATE': data.S_PENAL_INT_RATE,
        'PENAL_METHOD': data.PENAL_METHOD,
        'S_DUE_LIST_ALLOW': (data.S_DUE_LIST_ALLOW=="true"?true:false),
        'GRACE_PERIOD_APPLICABLE': (data.GRACE_PERIOD_APPLICABLE=="true"?true:false),
        'MORATORIUM_APPLICABLE': data.MORATORIUM_APPLICABLE,
        'STAND_INSTRUCTION_ALLOW': (data.STAND_INSTRUCTION_ALLOW=="true"?true:false),
        'BALANCE_ADD_APPLICABLE': (data.BALANCE_ADD_APPLICABLE=="true"?true:false),
        'IS_UNSECURED_LOAN': (data.IS_UNSECURED_LOAN=="true"?true:false),
        'IS_OVERDUE_CHARGES_APPLY': (data.IS_OVERDUE_CHARGES_APPLY=="true"?true:false),
        'MAX_LOAN_LMT': data.MAX_LOAN_LMT,
        'ROUNDOFF_FACTOR': data.ROUNDOFF_FACTOR,
        'DEFAULT_LOAN_PERIOD': data.DEFAULT_LOAN_PERIOD,
        'IS_LOAN_PERIOD_LOCK': (data.IS_LOAN_PERIOD_LOCK=="true"?true:false),
        'MIN_LOAN_PERIOD': data.MIN_LOAN_PERIOD,
        'MAX_LOAN_PERIOD': data.MAX_LOAN_PERIOD,
        'S_INSTTYPE': data.S_INSTTYPE,
        // 'INSTALLMENT_METHOD': data.INSTALLMENT_METHOD,
        
        'IS_OVERDUE_ON_INSTALLMENT': data.IS_OVERDUE_ON_INSTALLMENT,
        'IS_SHOW_INT_AS_RECINT_IFDUEBAL': data.IS_SHOW_INT_AS_RECINT_IFDUEBAL,
        'MIN_DUE_INSTALLMENTS': data.MIN_DUE_INSTALLMENTS
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this.termLoanSchemeService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      
    this.newbtnShow = false;
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    });
     // this.rerender();
      this.resetForm();
    })
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  resetForm() {
    this.createForm();
    this.ngglacno=null
    this.ngintglac=null
    this.ngreceivableintac=null
    this.ngpenalintac=null
    this.ngrecblepenalintac=null
    this.ngrecbleoverdueint=null
    this.ngoutstandingintac=null
    this.nginstallment=null
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

  getOneColumn() {
    this.http
      .get(
        this.url + '/term-loan-scheme/getOneColumn'
      ).subscribe(resp => {
        this.dropDown = resp;
      });
  }

  isInterestApplicable(event) {
    if (event.target.checked) {
      document.getElementById("POST_TO_INDIVIDUAL_AC").removeAttribute("disabled");
      document.getElementById("S_RECEIVABLE_INT_ALLOW").removeAttribute("disabled");
      document.getElementById("IS_INT_ON_RECINT").removeAttribute("disabled");
      document.getElementById("IS_INT_ON_OTHERAMT").removeAttribute("disabled");
      document.getElementById("IS_INTUPTODATE").removeAttribute("disabled");
      document.getElementById("IS_NO_POST_INT_AFT_OD").removeAttribute("disabled");
      document.getElementById("INTEREST_METHOD").removeAttribute("disabled");
      document.getElementById("INTEREST_METHOD1").removeAttribute("disabled");
      document.getElementById("INTEREST_METHOD2").removeAttribute("disabled");
      document.getElementById("MIN_INT_LIMIT").removeAttribute("disabled");
    }
    else {
      document.getElementById("POST_TO_INDIVIDUAL_AC").setAttribute("disabled", "true");
      document.getElementById("S_RECEIVABLE_INT_ALLOW").setAttribute("disabled", "true");
      document.getElementById("IS_INT_ON_RECINT").setAttribute("disabled", "true");
      document.getElementById("IS_INT_ON_OTHERAMT").setAttribute("disabled", "true");
      document.getElementById("IS_INTUPTODATE").setAttribute("disabled", "true");
      document.getElementById("IS_NO_POST_INT_AFT_OD").setAttribute("disabled", "true");
      document.getElementById("INTEREST_METHOD").setAttribute("disabled", "true");
      document.getElementById("INTEREST_METHOD1").setAttribute("disabled", "true");
      document.getElementById("INTEREST_METHOD2").setAttribute("disabled", "true");
      document.getElementById("MIN_INT_LIMIT").setAttribute("disabled", "true");
      this.angForm.controls.POST_TO_INDIVIDUAL_AC.reset();
      this.angForm.controls.S_RECEIVABLE_INT_ALLOW.reset();
      this.angForm.controls.IS_INT_ON_RECINT.reset();
      this.angForm.controls.IS_INT_ON_OTHERAMT.reset();
      this.angForm.controls.IS_INTUPTODATE.reset();
      this.angForm.controls.IS_NO_POST_INT_AFT_OD.reset();
      this.angForm.controls.INTEREST_METHOD.reset();
      this.angForm.controls.MIN_INT_LIMIT.reset();
    }
  }

  S_RECBL_PYBL_INT_ACNO: boolean = false;
  IsReceivableIntAllowed($event) {
    if ($event.target.checked) {
      this.S_RECBL_PYBL_INT_ACNO = true;
    }
    else {
      this.S_RECBL_PYBL_INT_ACNO = false;
    }
  }
  S_PENAL_ACNO: boolean = false;
  penalInterestCalculationApplicable(event) {
    if (event.target.checked) {
      document.getElementById("IS_POST_PENAL_TO_AC").removeAttribute("disabled");
      document.getElementById("IS_REC_PENAL_APPL").removeAttribute("disabled");
      document.getElementById("IS_CAL_PENAL_AFTER_EXPIRY").removeAttribute("disabled");
      this.S_PENAL_ACNO = true;
    }
    else {
      document.getElementById("IS_POST_PENAL_TO_AC").setAttribute("disabled", "true");
      document.getElementById("IS_REC_PENAL_APPL").setAttribute("disabled", "true");
      document.getElementById("IS_CAL_PENAL_AFTER_EXPIRY").setAttribute("disabled", "true");
      document.getElementById("POST_PENALINT_IN_INTEREST").setAttribute("disabled", "true");
      this.S_PENAL_ACNO = false;
      this.angForm.controls.IS_POST_PENAL_TO_AC.reset();
      this.angForm.controls.IS_REC_PENAL_APPL.reset();
      this.angForm.controls.IS_CAL_PENAL_AFTER_EXPIRY.reset();
      this.angForm.controls.POST_PENALINT_IN_INTEREST.reset();
    }
  }
  postPenalInterestToAccount(event) {
    if (event.target.checked) {
      document.getElementById("POST_PENALINT_IN_INTEREST").removeAttribute("disabled");
    }
    else {
      document.getElementById("POST_PENALINT_IN_INTEREST").setAttribute("disabled", "true");
      this.angForm.controls.POST_PENALINT_IN_INTEREST.reset();
    }
  }
  S_RECBL_PENAL_ACNO: boolean = false;
  isMaintainReceivablePenalInterestToAc($event) {
    if ($event.target.checked) {
      this.S_RECBL_PENAL_ACNO = true;
    }
    else {
      this.S_RECBL_PENAL_ACNO = false;
    }
  }
  isLoanPeriodLockAllowed($event) {
    if ($event.target.checked) {
      document.getElementById("MIN_LOAN_PERIOD").removeAttribute("disabled");
      document.getElementById("MAX_LOAN_PERIOD").removeAttribute("disabled");
    }
    else {
      document.getElementById("MIN_LOAN_PERIOD").setAttribute("disabled", "true");
      document.getElementById("MAX_LOAN_PERIOD").setAttribute("disabled", "true");
      this.angForm.controls.MIN_LOAN_PERIOD.reset();
      this.angForm.controls.MAX_LOAN_PERIOD.reset();
    }
  }

  INSTALLMENT_METHOD: boolean = true;
  isInstallmentApplicable($event) {
    if ($event.target.checked) {
      this.INSTALLMENT_METHOD = false;
    }
    else {
      this.INSTALLMENT_METHOD = true;
    }
  }

  S_RECBL_ODUE_INT_ACNO: boolean = false;
  postAsReceivableInterest($event) {
    if ($event.target.checked) {
      this.S_RECBL_ODUE_INT_ACNO = true;
      this.angForm.controls.MIN_DUE_INSTALLMENTS.enable();
    }
    else {
      this.S_RECBL_ODUE_INT_ACNO = false;
      this.angForm.controls.MIN_DUE_INSTALLMENTS.disable();
      this.angForm.controls.MIN_DUE_INSTALLMENTS.reset();
    }
  }
}
