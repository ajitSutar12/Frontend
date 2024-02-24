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
import { SelectOptionService } from '../../../../shared/elements/select-option.service';
import { InstallmentMethodService } from '../../../../shared/dropdownService/installment-method.service';
import { DisputLoanSchemeService } from './disput-loan-scheme.service';
//Dropdown service file
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service'
import { first } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment'
import { NgSelectConfig } from '@ng-select/ng-select';
import { TranslateService } from '@ngx-translate/core';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface DisputLoanMaster {
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
  IS_DEPO_LOAN: boolean,
  S_INT_APPLICABLE: boolean,
  POST_TO_INDIVIDUAL_AC: boolean,
  S_RECEIVABLE_INT_ALLOW: boolean,
  IS_INT_ON_RECINT: boolean,
  IS_INT_ON_OTHERAMT: boolean,
  MIN_INT_LIMIT: string,
  S_PENAL_INT_APPLICABLE: boolean,
  IS_POST_PENAL_TO_AC: boolean,
  POST_PENALINT_IN_INTEREST: boolean,
  S_PENAL_INT_RATE: number,
  PENAL_METHOD: boolean,
  S_DUE_LIST_ALLOW: boolean,
  GRACE_PERIOD_APPLICABLE: boolean,
  MORATORIUM_APPLICABLE: boolean,
  STAND_INSTRUCTION_ALLOW: boolean,
  BALANCE_ADD_APPLICABLE: boolean,
  IS_UNSECURED_LOAN: boolean,
  IS_OVERDUE_CHARGES_APPLY: boolean,
  ROUNDOFF_FACTOR: number,
  S_INSTTYPE: boolean,
  INSTALLMENT_METHOD: string,
  IS_OVERDUE_ON_INSTALLMENT: number,
  IS_SHOW_INT_AS_RECINT_IFDUEBAL: boolean,
  MIN_DUE_INSTALLMENTS: number,
}

@Component({
  selector: 'app-disput-loan-scheme',
  templateUrl: './disput-loan-scheme.component.html',
  styleUrls: ['./disput-loan-scheme.component.scss']
})
export class DisputLoanSchemeComponent implements OnInit, AfterViewInit, OnDestroy {
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
  disputLoanMaster: DisputLoanMaster[];
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


  //Dropdown option variable
  acMaster: any
  ngglacno: any = null
  ngintglac: any = null
  ngreceivableintac: any = null
  ngpenalintac: any = null
  ngrecblepenalintac: any = null
  ngrecbleoverdueint: any = null
  ngoutstandingintac: any = null
  nginstallmentmethod: any = null


  installmentMethod: Array<IOption> = this.installmentMethodService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;
  LoanTypeTrue = true;
  InterestApplicable_True = false;
  PanelInterestApplicableTrue = false;
  Grace_MoratoriumPeriodTrue = false;
  LoanOtherSettingsTrue = false;
  InstallmentSettingsTrue = false;
  //variable to get ID to update
  updateID: number = 0;
  newbtnShow: boolean;

  constructor(public installmentMethodService: InstallmentMethodService,
    private acMasterDropdownService: ACMasterDropdownService,
    public disputLoanSchemeService: DisputLoanSchemeService,
    private fb: FormBuilder, private http: HttpClient,
    private config: NgSelectConfig,private translate:TranslateService) { }

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
        if (dataTableParameters.search.value != '') {
          this.filter = dataTableParameters.search.value;
          this.filterObject = [
            // { name: "A_BALCODE", type: "default" },
            // { name: "A_ACHEAD", type: "default" },
            // { name: "A_ACTYPE", type: "default" }
          ]
          datatableRequestParam = {
            page: this.page,
            limit: dataTableParameters.length,
            filter: dataTableParameters.search.value,
            filter_in: this.filterObject
          }
        }
        else {
          datatableRequestParam = {
            page: this.page,
            limit: dataTableParameters.length
          }
        }
        this.http
          .post<DataTableResponse>(
            this.url + '/disput-loan-scheme',
            dataTableParameters
          ).subscribe(resp => {
            this.disputLoanMaster = resp.data;
            console.log(resp.data);
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

        },
        {
          title: this.translate.instant('Utility.Utility1.Type'),
          data: 'S_ACNOTYPE',

        },
        {
          title: this.translate.instant('Utility.Utility1.Scheme_Code'),
          data: 'S_APPL',
        },
        {
          title: this.translate.instant('Utility.Utility1.Description'),
          data: 'S_NAME',
        },
        {
          title: this.translate.instant('Utility.Utility1.Short_Name'),
          data: 'S_SHNAME',
        },
        {
          title: this.translate.instant('Utility.Utility1.GL_Acc_Num'),
          data: 'S_GLACNO',
        },
        {
          title: this.translate.instant('Utility.Utility1.Interest_GL_Acc'),
          data: 'S_INT_ACNO',
        },
        {
          title:  this.translate.instant('Utility.Utility1.Rece_Interest_Acc'),
          data: 'S_RECBL_PYBL_INT_ACNO',
        },
        
        // {
        //   title: 'Loan Type'
        // },
        // {
        //   title: 'Is Interest Applicable ?'
        // },
        // {
        //   title: 'Is Post Interest to A/c ?'
        // },
        // {
        //   title: 'Is Receivable Int. Allowed ?'
        // },
        // {
        //   title: 'Is Interest On Receivable Interest ?'
        // },
        // {
        //   title: 'Is Interest On Other Receivable Amt.?'
        // },
        // {
        //   title: 'Minimum Interest Amount'
        // },
        // {
        //   title: 'Penal Interest Calculation Applicable ?'
        // },
        // {
        //   title: 'Post Penal Interest to Account ?'
        // },
        // {
        //   title: 'Add Penal Interest in Interest Amount ?'
        // },
        // {
        //   title: 'Penal Interest Rate %'
        // },
        // {
        //   title: 'Penal Interest Method'
        // },
        // {
        //   title: 'Calculate Overdue Only After A/c Expired ?'
        // },
        // {
        //   title: 'Is Grace Period Applicable'
        // },
        // {
        //   title: 'Is Moratorium Period Applicable'
        // },
        // {
        //   title: 'Is Standing Instruction Applicable'
        // },
        // {
        //   title: 'Is Balance Entry Allowed ?'
        // },
        // {
        //   title: 'Is Unsecured Loan Type ?'
        // },
        // {
        //   title: 'Is Auto Post Overdue Charges in Day Begin ?'
        // },
        // {
        //   title: 'Interest Round Off Factor in Paise'
        // },
        // {
        //   title: 'Is Installment Applicable ?'
        // },
        // {
        //   title: 'Installment Method'
        // },
        // {
        //   title: 'Overdue Rule Code (0-1-2-3)'
        // },
        // {
        //   title: 'Post as Receivable Interest if Account goes in Overdue ?'
        // },
        // {
        //   title: 'Minimum Overdue Installments'
        // }
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

    if (val == 81) {
      this.LoanTypeTrue = true;
      this.InterestApplicable_True = false;
      this.PanelInterestApplicableTrue = false;
      this.Grace_MoratoriumPeriodTrue = false;
      this.LoanOtherSettingsTrue = false;
      this.InstallmentSettingsTrue = false;

    }
    if (val == 82) {
      this.LoanTypeTrue = false;
      this.InterestApplicable_True = true;
      this.PanelInterestApplicableTrue = false;
      this.Grace_MoratoriumPeriodTrue = false;
      this.LoanOtherSettingsTrue = false;
      this.InstallmentSettingsTrue = false;


    } if (val == 83) {
      this.LoanTypeTrue = false;
      this.InterestApplicable_True = false;
      this.PanelInterestApplicableTrue = true;
      this.Grace_MoratoriumPeriodTrue = false;
      this.LoanOtherSettingsTrue = false;
      this.InstallmentSettingsTrue = false;


    } if (val == 84) {
      this.LoanTypeTrue = false;
      this.InterestApplicable_True = false;
      this.PanelInterestApplicableTrue = false;
      this.Grace_MoratoriumPeriodTrue = true;
      this.LoanOtherSettingsTrue = false;
      this.InstallmentSettingsTrue = false;

    } if (val == 85) {
      this.LoanTypeTrue = false;
      this.InterestApplicable_True = false;
      this.PanelInterestApplicableTrue = false;
      this.Grace_MoratoriumPeriodTrue = false;
      this.LoanOtherSettingsTrue = true;
      this.InstallmentSettingsTrue = false;


    } if (val == 86) {
      this.LoanTypeTrue = false;
      this.InterestApplicable_True = false;
      this.PanelInterestApplicableTrue = false;
      this.Grace_MoratoriumPeriodTrue = false;
      this.LoanOtherSettingsTrue = false;
      this.InstallmentSettingsTrue = true;


    } if (val == 87) {
      this.LoanTypeTrue = false;
      this.InterestApplicable_True = false;
      this.PanelInterestApplicableTrue = false;
      this.Grace_MoratoriumPeriodTrue = false;
      this.LoanOtherSettingsTrue = false;
      this.InstallmentSettingsTrue = true;

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
      S_ACNOTYPE: ['DS'],
      S_APPL: ['', [Validators.required, Validators.pattern]],
      S_NAME: ['', [Validators.required, Validators.pattern]],
      S_SHNAME: ['', [Validators.required, Validators.pattern]],
      S_GLACNO: ['', [Validators.required]],
      S_INT_ACNO: ['', [Validators.required]],
      S_RECBL_PYBL_INT_ACNO: [''],
      S_PENAL_ACNO: [''],
      S_RECBL_PENAL_ACNO: [''],
      S_RECBL_ODUE_INT_ACNO: [''],
      S_OUTSTANDING_INT_ACNO: [''],
      IS_DEPO_LOAN: [''],
      S_INT_APPLICABLE: [],
      POST_TO_INDIVIDUAL_AC: [],
      S_RECEIVABLE_INT_ALLOW: [],
      IS_INT_ON_RECINT: [],
      IS_INT_ON_OTHERAMT: [],
      MIN_INT_LIMIT: ['', [Validators.pattern]],
      S_PENAL_INT_APPLICABLE: [],
      IS_POST_PENAL_TO_AC: [],
      POST_PENALINT_IN_INTEREST: [],
      S_PENAL_INT_RATE: ['', [Validators.pattern]],
      PENAL_METHOD: [''],
      S_DUE_LIST_ALLOW: [],
      GRACE_PERIOD_APPLICABLE: [],
      MORATORIUM_APPLICABLE: [],
      STAND_INSTRUCTION_ALLOW: [],
      BALANCE_ADD_APPLICABLE: [],
      IS_UNSECURED_LOAN: [],
      IS_OVERDUE_CHARGES_APPLY: [],
      ROUNDOFF_FACTOR: ['', [Validators.pattern]],
      S_INSTTYPE: [],
      INSTALLMENT_METHOD: [''],
      IS_OVERDUE_ON_INSTALLMENT: ['', [Validators.pattern, Validators.max(3)]],
      IS_SHOW_INT_AS_RECINT_IFDUEBAL: [],
      MIN_DUE_INSTALLMENTS: ['', [Validators.pattern]],
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
      'MIN_INT_LIMIT': formVal.MIN_INT_LIMIT,
      'S_PENAL_INT_RATE': formVal.S_PENAL_INT_RATE,
      'PENAL_METHOD': formVal.PENAL_METHOD,
      'ROUNDOFF_FACTOR': formVal.ROUNDOFF_FACTOR,
      'INSTALLMENT_METHOD': formVal.INSTALLMENT_METHOD,
      'IS_OVERDUE_ON_INSTALLMENT': formVal.IS_OVERDUE_ON_INSTALLMENT,
      'MIN_DUE_INSTALLMENTS': formVal.MIN_DUE_INSTALLMENTS,

      'IS_SHOW_INT_AS_RECINT_IFDUEBAL': (formVal.IS_SHOW_INT_AS_RECINT_IFDUEBAL == true ? '1' : '0'),
      'S_INSTTYPE': (formVal.S_INSTTYPE == true ? '1' : '0'),
      'S_DUE_LIST_ALLOW': (formVal.S_DUE_LIST_ALLOW == true ? '1' : '0'),
      'GRACE_PERIOD_APPLICABLE': (formVal.GRACE_PERIOD_APPLICABLE == true ? '1' : '0'),
      'MORATORIUM_APPLICABLE': (formVal.MORATORIUM_APPLICABLE == true ? '1' : '0'),
      'STAND_INSTRUCTION_ALLOW': (formVal.STAND_INSTRUCTION_ALLOW == true ? '1' : '0'),
      'BALANCE_ADD_APPLICABLE': (formVal.BALANCE_ADD_APPLICABLE == true ? '1' : '0'),
      'IS_UNSECURED_LOAN': (formVal.IS_UNSECURED_LOAN == true ? '1' : '0'),
      'IS_OVERDUE_CHARGES_APPLY': (formVal.IS_OVERDUE_CHARGES_APPLY == true ? '1' : '0'),
      'S_PENAL_INT_APPLICABLE': (formVal.S_PENAL_INT_APPLICABLE == true ? '1' : '0'),
      'IS_POST_PENAL_TO_AC': (formVal.IS_POST_PENAL_TO_AC == true ? '1' : '0'),
      'POST_PENALINT_IN_INTEREST': (formVal.POST_PENALINT_IN_INTEREST == true ? '1' : '0'),
      'S_INT_APPLICABLE': (formVal.S_INT_APPLICABLE == true ? '1' : '0'),
      'POST_TO_INDIVIDUAL_AC': (formVal.POST_TO_INDIVIDUAL_AC == true ? '1' : '0'),
      'S_RECEIVABLE_INT_ALLOW': (formVal.S_RECEIVABLE_INT_ALLOW == true ? '1' : '0'),
      'IS_INT_ON_RECINT': (formVal.IS_INT_ON_RECINT == true ? '1' : '0'),
      'IS_INT_ON_OTHERAMT': (formVal.IS_INT_ON_OTHERAMT == true ? '1' : '0'),

    }
    this.disputLoanSchemeService.postData(dataToSend).subscribe(data1 => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, 'success');
      this.formSubmitted = false;
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
    this.disputLoanSchemeService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.ngglacno = Number(data.S_GLACNO)
      this.ngintglac = Number(data.S_INT_ACNO)
      this.ngreceivableintac = Number(data.S_RECBL_PYBL_INT_ACNO)
      this.ngpenalintac = Number(data.S_PENAL_ACNO)
      this.ngrecblepenalintac = Number(data.S_RECBL_PENAL_ACNO)
      this.ngrecbleoverdueint = Number(data.S_RECBL_ODUE_INT_ACNO)
      this.ngoutstandingintac = Number(data.S_OUTSTANDING_INT_ACNO)
      this.nginstallmentmethod = data.INSTALLMENT_METHOD
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
        'S_INT_APPLICABLE': (data.S_INT_APPLICABLE == '1' ? true : false),
        'POST_TO_INDIVIDUAL_AC': (data.POST_TO_INDIVIDUAL_AC == '1' ? true : false),
        'S_RECEIVABLE_INT_ALLOW': (data.S_RECEIVABLE_INT_ALLOW == '1' ? true : false),
        'IS_INT_ON_RECINT': (data.IS_INT_ON_RECINT == '1' ? true : false),
        'IS_INT_ON_OTHERAMT': (data.IS_INT_ON_OTHERAMT == '1' ? true : false),
        'MIN_INT_LIMIT': data.MIN_INT_LIMIT,
        'S_PENAL_INT_APPLICABLE': (data.S_PENAL_INT_APPLICABLE == '1' ? true : false),
        'IS_POST_PENAL_TO_AC': (data.IS_POST_PENAL_TO_AC == '1' ? true : false),
        'POST_PENALINT_IN_INTEREST': (data.POST_PENALINT_IN_INTEREST == '1' ? true : false),
        'S_PENAL_INT_RATE': data.S_PENAL_INT_RATE,
        'PENAL_METHOD': data.PENAL_METHOD,
        'S_DUE_LIST_ALLOW': (data.S_DUE_LIST_ALLOW == '1' ? true : false),
        'GRACE_PERIOD_APPLICABLE': data.GRACE_PERIOD_APPLICABLE,
        'MORATORIUM_APPLICABLE': data.MORATORIUM_APPLICABLE,
        'STAND_INSTRUCTION_ALLOW': (data.STAND_INSTRUCTION_ALLOW == '1' ? true : false),
        'BALANCE_ADD_APPLICABLE': (data.BALANCE_ADD_APPLICABLE == '1' ? true : false),
        'IS_UNSECURED_LOAN': (data.IS_UNSECURED_LOAN == '1' ? true : false),
        'IS_OVERDUE_CHARGES_APPLY': (data.IS_OVERDUE_CHARGES_APPLY == '1' ? true : false),
        'ROUNDOFF_FACTOR': data.ROUNDOFF_FACTOR,
        'S_INSTTYPE': (data.S_INSTTYPE == '1' ? true : false),
        // 'INSTALLMENT_METHOD': data.INSTALLMENT_METHOD,
        'IS_OVERDUE_ON_INSTALLMENT': data.IS_OVERDUE_ON_INSTALLMENT,
        'IS_SHOW_INT_AS_RECINT_IFDUEBAL': (data.IS_SHOW_INT_AS_RECINT_IFDUEBAL == '1' ? true : false),
        'MIN_DUE_INSTALLMENTS': (data.MIN_DUE_INSTALLMENTS == '1' ? true : false),
      })
    })
  }

  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    data['id'] = this.updateID;
    data['IS_SHOW_INT_AS_RECINT_IFDUEBAL'] = (data.IS_SHOW_INT_AS_RECINT_IFDUEBAL == true ? '1' : '0')
    data['S_INSTTYPE'] = (data.S_INSTTYPE == true ? '1' : '0')
    data['S_DUE_LIST_ALLOW'] = (data.S_DUE_LIST_ALLOW == true ? '1' : '0')
    data['GRACE_PERIOD_APPLICABLE'] = (data.GRACE_PERIOD_APPLICABLE == true ? '1' : '0')
    data['MORATORIUM_APPLICABLE'] = (data.MORATORIUM_APPLICABLE == true ? '1' : '0')
    data['STAND_INSTRUCTION_ALLOW'] = (data.STAND_INSTRUCTION_ALLOW == true ? '1' : '0')
    data['BALANCE_ADD_APPLICABLE'] = (data.BALANCE_ADD_APPLICABLE == true ? '1' : '0')
    data['IS_UNSECURED_LOAN'] = (data.IS_UNSECURED_LOAN == true ? '1' : '0')
    data['IS_OVERDUE_CHARGES_APPLY'] = (data.IS_OVERDUE_CHARGES_APPLY == true ? '1' : '0')
    data['S_PENAL_INT_APPLICABLE'] = (data.S_PENAL_INT_APPLICABLE == true ? '1' : '0')
    data['IS_POST_PENAL_TO_AC'] = (data.IS_POST_PENAL_TO_AC == true ? '1' : '0')
    data['POST_PENALINT_IN_INTEREST'] = (data.POST_PENALINT_IN_INTEREST == true ? '1' : '0')
    data['S_INT_APPLICABLE'] = (data.S_INT_APPLICABLE == true ? '1' : '0')
    data['POST_TO_INDIVIDUAL_AC'] = (data.POST_TO_INDIVIDUAL_AC == true ? '1' : '0')
    data['S_RECEIVABLE_INT_ALLOW'] = (data.S_RECEIVABLE_INT_ALLOW == true ? '1' : '0')
    data['IS_INT_ON_RECINT'] = (data.IS_INT_ON_RECINT == true ? '1' : '0')
    data['IS_INT_ON_OTHERAMT'] = (data.IS_INT_ON_OTHERAMT == true ? '1' : '0')
    this.disputLoanSchemeService.updateData(data).subscribe(() => {
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
    this.ngglacno = null
    this.ngintglac = null
    this.ngreceivableintac = null
    this.ngpenalintac = null
    this.ngrecblepenalintac = null
    this.ngrecbleoverdueint = null
    this.ngoutstandingintac = null
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
  isInterestApplicable(event) {
    if (event.target.checked) {
      document.getElementById("POST_TO_INDIVIDUAL_AC").removeAttribute("disabled");
      document.getElementById("S_RECEIVABLE_INT_ALLOW").removeAttribute("disabled");
      document.getElementById("IS_INT_ON_RECINT").removeAttribute("disabled");
      document.getElementById("IS_INT_ON_OTHERAMT").removeAttribute("disabled");
      document.getElementById("MIN_INT_LIMIT").removeAttribute("disabled");
    }
    else {
      document.getElementById("POST_TO_INDIVIDUAL_AC").setAttribute("disabled", "true");
      document.getElementById("S_RECEIVABLE_INT_ALLOW").setAttribute("disabled", "true");
      document.getElementById("IS_INT_ON_RECINT").setAttribute("disabled", "true");
      document.getElementById("IS_INT_ON_OTHERAMT").setAttribute("disabled", "true");
      document.getElementById("MIN_INT_LIMIT").setAttribute("disabled", "true");
      this.angForm.controls.POST_TO_INDIVIDUAL_AC.reset();
      this.angForm.controls.S_RECEIVABLE_INT_ALLOW.reset();
      this.angForm.controls.IS_INT_ON_RECINT.reset();
      this.angForm.controls.IS_INT_ON_OTHERAMT.reset();
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
      this.S_PENAL_ACNO = true;
    }
    else {
      document.getElementById("IS_POST_PENAL_TO_AC").setAttribute("disabled", "true");
      document.getElementById("POST_PENALINT_IN_INTEREST").setAttribute("disabled", "true");
      this.S_PENAL_ACNO = false;
      this.angForm.controls.IS_POST_PENAL_TO_AC.reset();
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
