import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment'

// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Displaying Sweet Alert
import Swal from 'sweetalert2';

// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';

// Service File For Handling CRUD Operation
import { TermLoanService } from './term-loan-master.service';

//animation
import { animate, style, transition, trigger } from '@angular/animations';

// Http Client
import { HttpClient } from '@angular/common/http';

// Router File
import { Router } from '@angular/router'

//Service Files
import { CustomerIdService } from '../customer-id/customer-id.service';
import { InterestRateForLoanandCCService } from '../../policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service';
import { PrioritySectorMasterService } from '../../policy-settings/information/priority-sector-master/priority-sector-master.service';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TermLoanSchemeService } from '../../../utility/scheme-parameters/term-loan-scheme/term-loan-scheme.service';
import { SecurityCodeService } from '../../policy-settings/definations/security-code/security-code.service';

// Dropdown Files
import { IOption } from 'ng-select';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service';
import { InstallmentMethodService } from '../../../../shared/dropdownService/installment-method.service';
import { AuthorityMasterDropdownService } from '../../../../shared/dropdownService/authority-master-dropdown.service';
import { DirectorMasterDropdownService } from '../../../../shared/dropdownService/director-master-dropdown.service';
import { RecoveryClearkMasterDropdownService } from '../../../../shared/dropdownService/recovery-cleark-master-dropdown.service';
import { PrioritySectorMasterDropdownService } from '../../../../shared/dropdownService/priority-sector-master-dropdown.service';
import { WeakerMasterDropdownService } from '../../../../shared/dropdownService/weaker-master-dropdown.service';
import { PurposeMasterDropdownService } from '../../../../shared/dropdownService/purpose-master-dropdown.service';
import { IndustryMasterDropdownService } from '../../../../shared/dropdownService/industry-master-dropdown.service';
import { HealthMasterDropdownService } from '../../../../shared/dropdownService/health-master-dropdown.service';
import { AccountTypeService } from '../../../../shared/dropdownService/account-type.service';
import { SecurityMasterdropdownService } from '../../../../shared/dropdownService/security-master-dropdown.service';
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service';
import { RepayModeService } from '../../../../shared/dropdownService/repay-mode.service';
import { NgSelectConfig } from '@ng-select/ng-select';
//date pipe
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface TermLoanMaster {
  AC_ACNOTYPE: string
  AC_TYPE: string
  AC_NO: number
  AC_CUSTID: string
  AC_OPDATE: Date
  AC_OPEN_OLD_DATE: Date
  REF_ACNO: string
  AC_INTCATA: string
  AC_SANCTION_AMOUNT: number
  AC_SANCTION_DATE: Date
  AC_DRAWPOWER_AMT: number
  AC_MONTHS: number
  AC_EXPIRE_DATE: Date
  AC_INTRATE: number
  AC_REPAYMODE: string
  INSTALLMENT_METHOD: string
  AC_INSTALLMENT: number
  AC_MORATORIUM_PERIOD: number
  AC_GRACE_PERIOD: number
  AC_AUTHORITY: string
  AC_RECOMMEND_BY: string
  AC_RECOVERY_CLERK: string
  AC_PRIORITY: string
  AC_PRIORITY_SUB1: string
  AC_PRIORITY_SUB2: string
  AC_PRIORITY_SUB3: string
  AC_WEAKER: string
  AC_PURPOSE: string
  AC_INDUSTRY: string
  AC_HEALTH: string
  AC_RELATION_TYPE: string
  AC_DIRECTOR: string
  AC_DIRECTOR_RELATION: string
  AC_COREG_NO: number
  AC_COREG_DATE: Date
  AC_COREG_AMT: number
  AC_RESO_NO: number
  AC_RESO_DATE: Date
  AC_ADDFLAG: boolean
  AC_THONO: string
  AC_TWARD: string
  AC_TADDR: string
  AC_TGALLI: string
  AC_TAREA: string
  AC_TCTCODE: string
  AC_TPIN: number
  AC_IS_RECOVERY: boolean
  BANKACNO: number
}
@Component({
  selector: 'app-term-loan-master',
  templateUrl: './term-loan-master.component.html',
  styleUrls: ['./term-loan-master.component.scss'],
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

export class TermLoanMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  selected
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  termLoanMaster: TermLoanMaster[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  dtExportOptions: DataTables.Settings = {};
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
  newbtnShow: boolean = false;
  //variable to get ID to update
  updateID: number = 0;

  //Scheme type variable
  schemeType: string = 'LN'
  schemeCode
  //url to display document
  documentUrl = this.url + '/'
  //array of document of customer
  customerDoc = []
  // Filter Variable
  filterData = {};
  prifix: any[];
  castMaster: any[];
  occupation: any[];
  riskCategory: any[];
  salaryDivision: any[];
  city: any[];
  risk: any[];
  intCat: any[]
  sanction: any[]
  Recommended: any[]
  Recovery: any[]
  priority: any[]
  weaker: any[]
  purpose: any[]
  health: any[]
  industry: any[]
  scheme: any[] //scheme code from schemast(S_ACNOTYPE)
  Cust_ID: any[] //customer id from idmaster
  GCust_ID: any //customer id from idmaster
  CCust_ID: any //customer id from idmaster
  security: any[]
  director: any[]
  // documentMaster: DocumentMaster[];
  id: string = '';
  Gid: any = null;
  Cid: any = null;
  idp: any = null;
  weakerSec: any = null;
  ngpurpose: any = null;
  ngindustry: any = null;
  nghealth: any = null;
  ngAccountType: any = null;
  ngdirectorType: any = null;
  public visible = false;
  public visibleAnimate = false;
  idi: string = '';
  code: string = '';
  addType: string
  columnShowButton: boolean = false
  date
  temp
  multiCoBorrower = [];
  CoBorrowerShowButton: boolean = true
  CoBorrowerUpdateShow: boolean = false
  multiGuarantor = [];
  GuarantorShowButton: boolean = true
  GuarantorUpdateShow: boolean = false
  CoBorrowerupdateid
  CoBorrowerID
  Guarantorupdateid
  GuarantorID
  coBorrowerIndex
  guarantorIndex
  tempAddress: boolean = true;
  GuarantorTrue: boolean = false
  CoBorrowerTrue: boolean = false
  addShowButton: boolean = true
  UpdateShowButton: boolean = false
  multiSecurity = [];
  SECU_CODE
  SECU_NAME
  intIndex: number
  intID: number
  AC_DIRECTOR = true
  repay: string
  installmentType: string
  mon
  result: any
  drawingPower: number;
  months: number
  sanctionAmt
  intRate: any
  intResult: any

  security_id: number
  scheme1: any
  BOOK_DEBTS: boolean = false
  CUST_INSURANCE: boolean = false
  FIRE_POLICY: boolean = false
  FURNITURE_FIXTURE: boolean = false
  GOLD_SILVER: boolean = false
  GOVT_SECU_LIC: boolean = false
  LAND_BUILDING: boolean = false
  MARKET_SHARE: boolean = false
  OTHER_SECURITY: boolean = false
  OWN_DEPOSIT: boolean = false
  PLANT_MACHINARY: boolean = false
  PLEDGE_STOCK: boolean = false
  STOCK_STATEMENT: boolean = false
  VEHICLE: boolean = false
  bookid = []
  insuranceid = []
  firepolicyid = []
  furnitureid = []
  goldid = []
  govtid = []
  landid = []
  marketid = []
  otherid = []
  ownid = []
  plantid = []
  pledgeid = []
  stockid = []
  vehicleid = []
  AC_TYPE: boolean = false
  sanctionAutho: any = null;
  recomBy: any = null;
  recovery: any = null;
  ngCity: any = null;
  ngsecurityCode: any = null;
  bsValue = new Date();
  openingDate: any

  repayModeOption: Array<IOption> = this.repayModeService.getCharacters();
  installment: Array<IOption> = this.installmentMethodService.getCharacters();
  account: Array<IOption> = this.accountType.getCharacters();
  selectedOption = 4;
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = 4;
  timeLeft = 5;

  private dataSub: Subscription = null;
  datemax: any;
  constructor(
    private http: HttpClient,
    private termLoanService: TermLoanService,
    private customerIdService: CustomerIdService,
    private fb: FormBuilder,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private customerID: CustomerIDMasterDropdownService,
    private interstCate: IntrestCategoryMasterDropdownService,
    private repayModeService: RepayModeService,
    private installmentMethodService: InstallmentMethodService,
    private authorityMasterDropdown: AuthorityMasterDropdownService,
    private directorMasterDropdown: DirectorMasterDropdownService,
    private recoveryClearkMaster: RecoveryClearkMasterDropdownService,
    private prioritySector: PrioritySectorMasterDropdownService,
    private weakerMaster: WeakerMasterDropdownService,
    private purposeMaster: PurposeMasterDropdownService,
    private industryMaster: IndustryMasterDropdownService,
    private healthMaster: HealthMasterDropdownService,
    private cityMaster: cityMasterService,
    private accountType: AccountTypeService,
    private securityMaster: SecurityMasterdropdownService,
    private InterestRateForLoanandCC: InterestRateForLoanandCCService,
    private prioritySectorMaster: PrioritySectorMasterService,
    private systemParameter: SystemMasterParametersService,
    private _TermLoanScheme: TermLoanSchemeService,
    private datePipe: DatePipe,
    private _SecurityCode: SecurityCodeService,
    private el: ElementRef,
    public router: Router,
    private config: NgSelectConfig,
  ) {

  }

  ngOnInit(): void {

    //Call CreateForm Function

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
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/term-loan-master',
            dataTableParameters
          ).subscribe(resp => {
            this.termLoanMaster = resp.data;
            console.log(this.termLoanMaster, "data")
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: []
            });
          });
      },
      columnDefs: [{
        targets: '_all',
        defaultContent: ""
      }],
      columns: [
        {
          title: 'Action',
        },
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Account Number',
          data: 'BANKACNO'
        },
        {
          title: 'Customer ID',
          data: 'AC_CUSTID'
        },
        {
          title: 'Name',
          data: 'AC_NAME'
        },
        {
          title: 'Opening Date',
          data: 'AC_OPDATE'
        },
        {
          title: 'Renewal Date',
          data: 'AC_OPEN_OLD_DATE'
        },
        {
          title: 'Manual Reference Number',
          data: 'REF_ACNO'
        },
        {
          title: 'Detail',
          data: 'AC_ADDR'
        },
        {
          title: 'City',
          data: 'AC_CTCODE'
        },
        {
          title: 'Sanction Date',
          data: 'AC_SANCTION_DATE'
        },
        {
          title: 'Period',
          data: 'AC_MONTHS'
        },
        {
          title: 'Expiry Date',
          data: 'AC_EXPIRE_DATE'
        },
        {
          title: 'Sanction Limit',
          data: 'AC_SANCTION_AMOUNT'
        },
        {
          title: 'Drawing Power',
          data: 'AC_DRAWPOWER_AMT'
        },
        {
          title: 'Interest Rate',
          data: 'AC_INTRATE'
        },
        {
          title: 'Installment',
          data: 'AC_INSTALLMENT'
        },
        {
          title: 'Sanction Authority',
          data: 'AC_AUTHORITY'
        },
        {
          title: 'Purpose',
          data: 'AC_PURPOSE'
        }
      ],
      dom: 'Blrtip',
    };

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data;
      this.code = this.scheme[0].value
    })

    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.GCust_ID = data;
      this.CCust_ID = data;
    })

    this.interstCate.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.intCat = data;
    })

    this.authorityMasterDropdown.getAuthorityMasterList().pipe(first()).subscribe(data => {
      this.sanction = data;
    })

    this.directorMasterDropdown.getDirectorMasterList().pipe(first()).subscribe(data => {
      this.Recommended = data;
    })

    this.directorMasterDropdown.getDirectorMastertrueList().pipe(first()).subscribe(data => {
      this.director = data;
    })

    this.recoveryClearkMaster.getRecoveryClearkMasterList().pipe(first()).subscribe(data => {
      this.Recovery = data;
    })

    this.prioritySector.getPrioritySectorMasterList().pipe(first()).subscribe(data => {
      this.priority = data;
    })

    this.weakerMaster.getWeakerMasterList().pipe(first()).subscribe(data => {
      this.weaker = data;
    })

    this.purposeMaster.getPurposeMasterList().pipe(first()).subscribe(data => {
      this.purpose = data;
    })

    this.industryMaster.getIndustaryMasterList().pipe(first()).subscribe(data => {
      this.industry = data;
    })

    this.healthMaster.getHealthMasterList().pipe(first()).subscribe(data => {
      this.health = data;
    })

    this.cityMaster.getcityList().pipe(first()).subscribe(data => {
      this.city = data;
    })

    this.securityMaster.getsecurityMasterList().pipe(first()).subscribe(data => {
      this.security = data;
    })

    this.runTimer();

    this.dataSub = this.repayModeService.loadCharacters().subscribe((options) => {

      this.characters = options;
    });

    this.dataSub = this.installmentMethodService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

    this.dataSub = this.accountType.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

  };

  // runTimer function

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  // Create form Method

  createForm() {
    this.angForm = this.fb.group({
      CoAC_CUSTID: ['', [Validators.required]],
      AC_CUSTID: ['', [Validators.required]],
      GAC_CUSTID: ['', [Validators.required]],
      CAC_CUSTID: ['', [Validators.required]],
      SECURITY_CODE: [''],
      SECURITY_VALUE: [''],
      AC_REMARK: ['', [Validators.pattern]],
      AC_ACNOTYPE: ['LN'],
      AC_TYPE: ['', [Validators.required]],
      AC_NO: [''],
      AC_TITLE: [''],
      AC_NAME: [''],
      GAC_NAME: [''],
      CAC_NAME: [''],
      BANKACNO: [''],
      AC_OPDATE: ['', [Validators.required]],
      AC_OPEN_OLD_DATE: [''],
      AC_BIRTH_DT: [''],
      AC_IS_RECOVERY: [false],
      AC_MEMBTYPE: [''],
      AC_MEMBNO: [''],
      REF_ACNO: [''],
      AC_CAST: [''],
      AC_OCODE: [''],
      AC_ADDFLAG: [true],
      AC_ADDTYPE: ['P'],
      AC_THONO: ['', [Validators.pattern]],
      AC_TWARD: ['', [Validators.pattern]],
      AC_TADDR: ['', [Validators.pattern]],
      AC_TGALLI: ['', [Validators.pattern]],
      AC_TAREA: ['', [Validators.pattern]],
      AC_TCTCODE: ['', [Validators.pattern]],
      AC_INTCATA: ['', [Validators.required]],
      AC_SANCTION_AMOUNT: ['', [Validators.required, Validators.pattern]],
      AC_SANCTION_DATE: ['', [Validators.required]],
      AC_DRAWPOWER_AMT: ['', [Validators.required, Validators.pattern]],
      AC_MONTHS: ['', [Validators.required, Validators.pattern]],
      AC_EXPIRE_DATE: ['', [Validators.required]],
      AC_INTRATE: ['', [Validators.required]],
      AC_REPAYMODE: ['', [Validators.required]],
      INSTALLMENT_METHOD: ['', [Validators.required]],
      AC_INSTALLMENT: [''],
      AC_MORATORIUM_PERIOD: ['', [Validators.pattern]],
      AC_GRACE_PERIOD: ['', [Validators.pattern]],
      AC_AUTHORITY: ['', [Validators.required]],
      AC_RECOMMEND_BY: ['', [Validators.required]],
      AC_RECOVERY_CLERK: ['', [Validators.required]],
      AC_PRIORITY: ['', [Validators.required]],
      AC_PRIORITY_SUB1: [''],
      AC_PRIORITY_SUB2: [''],
      AC_PRIORITY_SUB3: [''],
      AC_WEAKER: ['', [Validators.required]],
      AC_PURPOSE: ['', [Validators.required]],
      AC_INDUSTRY: ['', [Validators.required]],
      AC_HEALTH: ['', [Validators.required]],
      AC_RELATION_TYPE: ['', [Validators.required]],
      AC_DIRECTOR: [''],
      AC_DIRECTOR_RELATION: [''],
      AC_COREG_NO: ['', [Validators.pattern]],
      AC_COREG_DATE: [''],
      AC_COREG_AMT: ['', [Validators.pattern]],
      AC_RESO_NO: ['', [Validators.pattern]],
      AC_RESO_DATE: [''],
      AC_HONO: [''],
      AC_WARD: [''],
      AC_ADDR: [''],
      AC_GALLI: [''],
      AC_AREA: [''],
      AC_CTCODE: [''],
      AC_PIN: [''],
      AC_TPIN: [''],
      AC_MOBILENO: [''],
      AC_PHONE_RES: [''],
      AC_PHONE_OFFICE: [''],
      EXP_DATE: [''],
      GAC_MEMBNO: [''],
      GAC_MEMBTYPE: [''],
    });
  }

  getSchemeCode(value) {
    this.schemeCode = value.name
  }

  // Method to insert data into database through NestJS

  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    if (formVal.AC_ADDFLAG == true) {
      this.addType = 'P'
    }
    else if (formVal.AC_ADDFLAG == false) {
      this.addType = 'T'
    }
    if (this.angForm.controls['AC_TCTCODE'].value == "") {
      formVal.AC_TCTCODE = 0
    }

    //get bank code and branch code from session
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    let bankCode = Number(result.branch.syspara.BANK_CODE)
    let date
    let opdate
    let redate
    let sanctiondate
    let expirydate
    let resodate
    let schecode
    this.scheme.forEach(async (element) => {
      console.log(this.code, "this.selectedValue")
      console.log(element)
      console.log(element, "element")
      if (element.value == this.code) {
        console.log(true)
        console.log(element.name, "element.S_APPL")
        schecode = element.name

        console.log(schecode)
      }
    })

    const dataToSend = {
      'branchCode': branchCode,
      'bankCode': bankCode,
      'schemeCode': schecode,
      'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
      'AC_TYPE': formVal.AC_TYPE,
      'AC_NO': formVal.AC_NO,
      'AC_NAME': formVal.AC_NAME,
      'AC_CUSTID': formVal.AC_CUSTID,
      'AC_OPDATE': (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == 'Invalid date') ? opdate = '' : opdate = moment(formVal.AC_OPDATE).format('DD/MM/YYYY'),
      'AC_OPEN_OLD_DATE': (formVal.AC_OPEN_OLD_DATE == '' || formVal.AC_OPEN_OLD_DATE == 'Invalid date') ? redate = '' : redate = moment(formVal.AC_OPEN_OLD_DATE).format('DD/MM/YYYY'),
      'REF_ACNO': formVal.REF_ACNO,
      'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
      'AC_INTCATA': formVal.AC_INTCATA,
      'AC_SANCTION_AMOUNT': formVal.AC_SANCTION_AMOUNT,
      'AC_SANCTION_DATE': (formVal.AC_SANCTION_DATE == '' || formVal.AC_SANCTION_DATE == 'Invalid date') ? sanctiondate = '' : sanctiondate = moment(formVal.AC_SANCTION_DATE).format('DD/MM/YYYY'),
      'AC_DRAWPOWER_AMT': formVal.AC_DRAWPOWER_AMT,
      'AC_MONTHS': formVal.AC_MONTHS,
      'AC_EXPIRE_DATE': (formVal.AC_EXPIRE_DATE == '' || formVal.AC_EXPIRE_DATE == 'Invalid date') ? expirydate = '' : expirydate = moment(formVal.AC_EXPIRE_DATE).format('DD/MM/YYYY'),
      'AC_INTRATE': formVal.AC_INTRATE,
      'AC_REPAYMODE': formVal.AC_REPAYMODE,
      'INSTALLMENT_METHOD': formVal.INSTALLMENT_METHOD,
      'AC_INSTALLMENT': formVal.AC_INSTALLMENT,
      'AC_MORATORIUM_PERIOD': formVal.AC_MORATORIUM_PERIOD,
      'AC_GRACE_PERIOD': formVal.AC_GRACE_PERIOD,
      'AC_AUTHORITY': formVal.AC_AUTHORITY,
      'AC_RECOMMEND_BY': formVal.AC_RECOMMEND_BY,
      'AC_RECOVERY_CLERK': formVal.AC_RECOVERY_CLERK,
      'AC_PRIORITY': formVal.AC_PRIORITY,
      'AC_PRIORITY_SUB1': formVal.AC_PRIORITY_SUB1,
      'AC_PRIORITY_SUB2': formVal.AC_PRIORITY_SUB2,
      'AC_PRIORITY_SUB3': formVal.AC_PRIORITY_SUB3,
      'AC_WEAKER': formVal.AC_WEAKER,
      'AC_PURPOSE': formVal.AC_PURPOSE,
      'AC_INDUSTRY': formVal.AC_INDUSTRY,
      'AC_HEALTH': formVal.AC_HEALTH,
      'AC_RELATION_TYPE': formVal.AC_RELATION_TYPE,
      'AC_DIRECTOR': formVal.AC_DIRECTOR,
      'AC_DIRECTOR_RELATION': formVal.AC_DIRECTOR_RELATION,
      'AC_COREG_NO': formVal.AC_COREG_NO,
      'AC_COREG_DATE': (formVal.AC_COREG_DATE == '' || formVal.AC_COREG_DATE == 'Invalid date') ? date = '' : date = moment(formVal.AC_COREG_DATE).format('DD/MM/YYYY'),

      // 'AC_COREG_DATE': formVal.AC_COREG_DATE,
      'AC_COREG_AMT': formVal.AC_COREG_AMT,
      'AC_RESO_NO': formVal.AC_RESO_NO,
      'AC_RESO_DATE': (formVal.AC_RESO_DATE == '' || formVal.AC_RESO_DATE == 'Invalid date') ? resodate = '' : resodate = moment(formVal.AC_RESO_DATE).format('DD/MM/YYYY'),
      AC_ADDFLAG: formVal.AC_ADDFLAG,
      AC_ADDTYPE: this.addType,
      AC_THONO: formVal.AC_THONO,
      AC_TWARD: formVal.AC_TWARD,
      AC_TADDR: formVal.AC_TADDR,
      AC_TGALLI: formVal.AC_TGALLI,
      AC_TAREA: formVal.AC_TAREA,
      AC_TCTCODE: formVal.AC_TCTCODE,
      AC_TPIN: formVal.AC_TPIN,
      'CoBorrowerData': this.multiCoBorrower,
      'GuarantorData': this.multiGuarantor,
      'SecurityData': this.multiSecurity,
      'BookDebts': this.bookid,
      'CustomerInsurance': this.insuranceid,
      'FirePolicy': this.firepolicyid,
      'Furniture': this.furnitureid,
      'GoldSilver': this.goldid,
      'Goverment': this.govtid,
      'LandBuilding': this.landid,
      'MarketShare': this.marketid,
      'OtherSecurity': this.otherid,
      'OwnDeposit': this.ownid,
      'PlantMachinary': this.plantid,
      'PleadgeStock': this.pledgeid,
      'StockStatement': this.stockid,
      'Vehicle': this.vehicleid,

    }
    console.log("dataToSend", dataToSend)
    this.termLoanService.postData(dataToSend).subscribe(data => {
      console.log(data, "submit data")
      Swal.fire({
        icon: 'success',
        title: 'Account Created successfully!',
        html:
          '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
          '<b>ACCOUNT NO : </b>' + data.BANKACNO + '<br>'
      })
      this.formSubmitted = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {
      console.log(error)
    })

    //To clear form
    this.resetForm();
    this.customerDoc = []
    this.multiCoBorrower = []
    this.multiGuarantor = []
    this.multiSecurity = [];
    this.bookid = []
    this.insuranceid = []
    this.firepolicyid = []
    this.furnitureid = []
    this.goldid = []
    this.govtid = []
    this.landid = []
    this.marketid = []
    this.otherid = []
    this.ownid = []
    this.plantid = []
    this.pledgeid = []
    this.stockid = []
    this.vehicleid = []
  }

  // Reset Function

  resetForm() {
    this.createForm();
    this.resetGuarantor()
    this.resetCoBorrower()
    this.resetField()
    this.code = null
  }

  //Method for append data into fields

  editClickHandler(id) {
    let date
    let opdate
    let redate
    let sanctiondate
    let expirydate
    let resodate

    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.columnShowButton = true
    this.termLoanService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      this.multiSecurity = data.securityMaster
      this.multiCoBorrower = data.CoborrowerMaster,
        this.multiGuarantor = data.guaranterMaster

        this.int_category = data.AC_INTCATA
      this.angForm.patchValue({
        AC_TYPE: data.AC_TYPE,
        'BANKACNO': data.BANKACNO,
        AC_NO: data.AC_NO,
        AC_OPDATE: (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? opdate = '' : opdate = data.AC_OPDATE,
        AC_OPEN_OLD_DATE: (data.AC_OPEN_OLD_DATE == 'Invalid date' || data.AC_OPEN_OLD_DATE == '' || data.AC_OPEN_OLD_DATE == null) ? redate = '' : redate = data.AC_OPEN_OLD_DATE,
        AC_IS_RECOVERY: data.AC_IS_RECOVERY,
        REF_ACNO: data.REF_ACNO,
        // AC_INTCATA: data.AC_INTCATA,
        AC_SANCTION_AMOUNT: data.AC_SANCTION_AMOUNT,
        AC_SANCTION_DATE: (data.AC_SANCTION_DATE == 'Invalid date' || data.AC_SANCTION_DATE == '' || data.AC_SANCTION_DATE == null) ? sanctiondate = '' : sanctiondate = data.AC_SANCTION_DATE,
        AC_DRAWPOWER_AMT: data.AC_DRAWPOWER_AMT,
        AC_MONTHS: data.AC_MONTHS,
        AC_EXPIRE_DATE: (data.AC_EXPIRE_DATE == 'Invalid date' || data.AC_EXPIRE_DATE == '' || data.AC_EXPIRE_DATE == null) ? expirydate = '' : expirydate = data.AC_EXPIRE_DATE,
        AC_INTRATE: data.AC_INTRATE,
        AC_REPAYMODE: data.AC_REPAYMODE,
        INSTALLMENT_METHOD: data.INSTALLMENT_METHOD,
        AC_INSTALLMENT: data.AC_INSTALLMENT,
        AC_MORATORIUM_PERIOD: data.AC_MORATORIUM_PERIOD,
        AC_GRACE_PERIOD: data.AC_GRACE_PERIOD,
        AC_AUTHORITY: data.AC_AUTHORITY,
        AC_RECOMMEND_BY: data.AC_RECOMMEND_BY,
        AC_RECOVERY_CLERK: data.AC_RECOVERY_CLERK,
        AC_PRIORITY: data.AC_PRIORITY,
        AC_PRIORITY_SUB1: data.AC_PRIORITY_SUB1,
        AC_PRIORITY_SUB2: data.AC_PRIORITY_SUB2,
        AC_PRIORITY_SUB3: data.AC_PRIORITY_SUB3,
        AC_WEAKER: data.AC_WEAKER,
        AC_PURPOSE: data.AC_PURPOSE,
        AC_INDUSTRY: data.AC_INDUSTRY,
        AC_HEALTH: data.AC_HEALTH,
        AC_RELATION_TYPE: data.AC_RELATION_TYPE,
        AC_DIRECTOR: data.AC_DIRECTOR,
        AC_DIRECTOR_RELATION: data.AC_DIRECTOR_RELATION,
        AC_COREG_NO: data.AC_COREG_NO,
        AC_COREG_DATE: (data.AC_COREG_DATE == 'Invalid date' || data.AC_COREG_DATE == '' || data.AC_COREG_DATE == null) ? date = '' : date = data.AC_COREG_DATE,
        // AC_COREG_DATE: data.AC_COREG_DATE,
        AC_COREG_AMT: data.AC_COREG_AMT,
        AC_RESO_NO: data.AC_RESO_NO,
        AC_RESO_DATE: (data.AC_RESO_DATE == 'Invalid date' || data.AC_RESO_DATE == '' || data.AC_RESO_DATE == null) ? resodate = '' : resodate = data.AC_RESO_DATE,
      })
    })
  }

  // Method For New Button

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.multiSecurity = [];
    this.multiCoBorrower = [];
    this.multiGuarantor = [];
    this.customerDoc = []
    this.resetForm();
  }

  //Method for update data 

  updateData() {
    let data = this.angForm.value;
    if (data.AC_ADDFLAG == true) {
      this.addType = 'P'
    }
    else if (data.AC_ADDFLAG == false) {
      this.addType = 'T'
    }
    data['AC_ADDTYPE'] = this.addType
    data['GuarantorData'] = this.multiGuarantor
    data['CoBorrowerData'] = this.multiCoBorrower
    data['SecurityData'] = this.multiSecurity
    data['id'] = this.updateID;
    // console.log("date", data['AC_COREG_DATE'].value)
    let date
    let opdate
    let redate
    let sanctiondate
    let expirydate
    let resodate
    // debugger
    (data.AC_COREG_DATE == 'Invalid date' || data.AC_COREG_DATE == '' || data.AC_COREG_DATE == null) ? (date = '', data['AC_COREG_DATE'] = date) : (date = data.AC_COREG_DATE, data['AC_COREG_DATE'] = moment(date).format('DD/MM/YYYY')),

      (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = data.AC_OPDATE, data['AC_OPDATE'] = moment(opdate).format('DD/MM/YYYY')),

      (data.AC_OPEN_OLD_DATE == 'Invalid date' || data.AC_OPEN_OLD_DATE == '' || data.AC_OPEN_OLD_DATE == null) ? (redate = '', data['AC_OPEN_OLD_DATE'] = redate) : (redate = data.AC_OPEN_OLD_DATE, data['AC_OPEN_OLD_DATE'] = moment(redate).format('DD/MM/YYYY')),

      (data.AC_SANCTION_DATE == 'Invalid date' || data.AC_SANCTION_DATE == '' || data.AC_SANCTION_DATE == null) ? (sanctiondate = '', data['AC_SANCTION_DATE'] = sanctiondate) : (sanctiondate = data.AC_SANCTION_DATE, data['AC_SANCTION_DATE'] = moment(sanctiondate).format('DD/MM/YYYY')),

      (data.AC_EXPIRE_DATE == 'Invalid date' || data.AC_EXPIRE_DATE == '' || data.AC_EXPIRE_DATE == null) ? (expirydate = '', data['AC_EXPIRE_DATE'] = expirydate) : (expirydate = data.AC_EXPIRE_DATE, data['AC_EXPIRE_DATE'] = moment(expirydate).format('DD/MM/YYYY')),

      (data.AC_RESO_DATE == 'Invalid date' || data.AC_RESO_DATE == '' || data.AC_RESO_DATE == null) ? (resodate = '', data['AC_RESO_DATE'] = resodate) : (resodate = data.AC_RESO_DATE, data['AC_RESO_DATE'] = moment(resodate).format('DD/MM/YYYY')),
      // if (data.AC_COREG_DATE == 'Invalid date' || data.AC_COREG_DATE == '' || data.AC_COREG_DATE == null) {
      //   date = ''
      //   data['AC_COREG_DATE'] = date
      // } else {
      //   date = data.AC_COREG_DATE
      //   data['AC_COREG_DATE'] = moment(date).format('DD/MM/YYYY')
      // }
      // if (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) {
      //   opdate = ''
      //   data['AC_OPDATE'] = opdate
      // } else {
      //   opdate = data.AC_OPDATE
      //   data['AC_OPDATE'] = moment(opdate).format('DD/MM/YYYY')

      // }
      // if (data.AC_OPEN_OLD_DATE == 'Invalid date' || data.AC_OPEN_OLD_DATE == '' || data.AC_OPEN_OLD_DATE == null) {
      //   redate = ''
      //   data['AC_OPEN_OLD_DATE'] = redate
      // } else {
      //   redate = data.AC_OPEN_OLD_DATE
      //   data['AC_OPEN_OLD_DATE'] = moment(redate).format('DD/MM/YYYY')
      // }
      // if (data.AC_SANCTION_DATE == 'Invalid date' || data.AC_SANCTION_DATE == '' || data.AC_SANCTION_DATE == null) {
      //   sanctiondate = ''
      //   data['AC_SANCTION_DATE'] = sanctiondate
      // } else {
      //   sanctiondate = data.AC_SANCTION_DATE
      //   data['AC_SANCTION_DATE'] = moment(sanctiondate).format('DD/MM/YYYY')
      // }

      // data['AC_COREG_DATE']= moment(this.angForm.controls['AC_COREG_DATE']).format('DD/MM/YYYY'),

      // data['AC_COREG_DATE'] = moment(data['AC_COREG_DATE']).format('DD/MM/YYYY'),
      this.termLoanService.updateData(data).subscribe(() => {
        Swal.fire('Success!', 'Record Updated Successfully !', 'success');
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
        this.multiSecurity = [];
        this.multiCoBorrower = [];
        this.multiSecurity = []
        this.customerDoc = []
        this.resetForm();
      })
  }

  //Method for delete data

  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Term loan master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.termLoanService.deleteData(id).subscribe(data1 => {
          this.termLoanMaster = data1;
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
  //function to get new customer data
  addNewCustomer(newCustomer) {
    this._TermLoanScheme.getCustomerIDMasterList().subscribe(data => {
      console.log(data)
      this.Cust_ID = data;
      let last = data.slice(-1)[0]
      console.log(data.slice(-1)[0])
      this.id = newCustomer
      // this.newcustid = last.AC_NO + "" + last.AC_NAME
      console.log(this.id)
      console.log(this.angForm.controls['AC_CUSTID'].value)
      this.getCustomer(this.id);
    })
  }
  birthDate: any
  //function to get existing customer data according selection
  getCustomer(id) {
    // console.log(this.angForm.controls['AC_CUSTID'].value.id)
    this.getSystemParaDate() //function to set date
    this.customerIdService.getFormData(id).subscribe(data => {
      console.log(data)
      this.customerDoc = data.custdocument
      this.tempAddress = data.custAddress[0].AC_ADDFLAG

      if (data.castMaster == null) {
        data.castMaster = ""
      }
      if (data.occupMaster == null) {
        data.occupMaster = ""
      }
      this.id = data.id

      let date1 = moment(data.AC_BIRTH_DT).format('DD/MM/YYYY');

      this.birthDate = date1;

      console.log(data, "customer")
      this.angForm.patchValue({

        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_MEMBTYPE: data.AC_MEMBTYPE,
        AC_MEMBNO: data.AC_MEMBNO,
        AC_CAST: data.castMaster.NAME,
        AC_OCODE: data.occupMaster.NAME,
        AC_BIRTH_DT: this.birthDate,
        AC_MOBNO: data.AC_MOBILENO,
        AC_PHNO: data.AC_PHONE_RES,
        AC_EMAIL: data.AC_EMAILID,
        AC_PANNO: data.AC_PANNO,

      })
      // this.ageCalculator(data.AC_BIRTH_DT);
      let permadd
      let temp
      data.custAddress.forEach(async (element) => {
        if (element.AC_ADDTYPE == 'P') {
          permadd = element
        }
      })
      this.angForm.patchValue({
        AC_ADDFLAG: permadd?.AC_ADDFLAG,
        AC_HONO: permadd?.AC_HONO,
        AC_WARD: permadd?.AC_WARD,
        AC_ADDR: permadd?.AC_ADDR,
        AC_GALLI: permadd?.AC_GALLI,
        AC_AREA: permadd?.AC_AREA,
        AC_CTCODE: permadd.city?.CITY_NAME,
        AC_PIN: permadd?.AC_PIN,
      })

      data.custAddress.forEach(async (element) => {
        if (element.AC_ADDTYPE == 'T') {
          temp = element
        }
      })
      console.log('temp address ', temp);
      this.ngCity = temp?.city.id,
        this.angForm.patchValue({

          AC_THONO: temp?.AC_HONO,
          AC_TWARD: temp?.AC_WARD,
          AC_TADDR: temp?.AC_ADDR,
          AC_TGALLI: temp?.AC_GALLI,
          AC_TAREA: temp?.AC_AREA,

          AC_TPIN: temp?.AC_PIN,
        })

      // this.ageCalculator(data.AC_BIRTH_DT);
    })
    this.onCloseModal();
  }

  customer(event) {
    console.log(event)
    this.termLoanService.getData().subscribe(data => {

      this.getCustomer(event.value);
      // if (data?.length == 0) {
      //  
      // }
      // else {
      //   if (data.find(data => data['AC_TYPE'] == this.code && data['AC_CUSTID'] == event.value && (data['AC_CLOSEDT'] == '' || data['AC_CLOSEDT'] == null))) {

      //     Swal.fire({
      //       icon: 'info',
      //       title: 'Saving Account Already Exists For This Scheme',
      //     })
      //     //  this.resetForm()
      //     event.id = null
      //     this.id = null
      //     this.id = ''
      //     this.angForm.controls['AC_CUSTID'].reset()

      //   } else {
      //     this.getCustomer(event.value);
      //   }
      // }
    })
  }
  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
  // // Method for Get Customer Data

  // getCustomer(id) {
  //   this.calculation()
  //   this.getSystemParaDate() //function to set date
  //   this.customerIdService.getFormData(id).subscribe(data => {
  //     if (data.castMaster == null) {
  //       data.castMaster = ""
  //     }
  //     if (data.occupMaster == null) {
  //       data.occupMaster = ""
  //     }
  //     this.customerDoc = data.custdocument
  //     this.tempAddress = data.custAddress[0].AC_ADDFLAG
  //     this.angForm.patchValue({
  //       AC_CUSTID: id.toString(),
  //       AC_TITLE: data.AC_TITLE,
  //       AC_NAME: data.AC_NAME,
  //       AC_MEMBTYPE: data.AC_MEMBTYPE,
  //       AC_MEMBNO: data.AC_MEMBNO,
  //       AC_CAST: data.castMaster.NAME,
  //       AC_OCODE: data.occupMaster.NAME,
  //       AC_ADHARNO: data.AC_ADHARNO,
  //       AC_RISKCATG: data.AC_RISKCATG,
  //       AC_BIRTH_DT: data.AC_BIRTH_DT,
  //       AC_ADDFLAG: data.custAddress[0].AC_ADDFLAG,
  //       AC_HONO: data.custAddress[0].AC_HONO,
  //       AC_WARD: data.custAddress[0].AC_WARD,
  //       AC_ADDR: data.custAddress[0].AC_ADDR,
  //       AC_GALLI: data.custAddress[0].AC_GALLI,
  //       AC_AREA: data.custAddress[0].AC_AREA,
  //       AC_CTCODE: data.custAddress[0].AC_CTCODE,
  //       AC_PIN: data.custAddress[0].AC_PIN,
  //       AC_PANNO: data.AC_PANNO,
  //       AC_MOBILENO: data.AC_MOBILENO,
  //       AC_PHONE_RES: data.AC_PHONE_RES,
  //       AC_PHONE_OFFICE: data.AC_PHONE_OFFICE,
  //       AC_EMAILID: data.AC_EMAILID,
  //       TDS_REQUIRED: data.TDS_REQUIRED,
  //       SMS_REQUIRED: data.SMS_REQUIRED,
  //       IS_KYC_RECEIVED: data.IS_KYC_RECEIVED,
  //       FIN_YEAR: data.FIN_YEAR,
  //       SUBMIT_DATE: data.SUBMIT_DATE,
  //       FORM_TYPE: data.FORM_TYPE,
  //       TDS_RATE: data.TDS_RATE,
  //       TDS_LIMIT: data.TDS_LIMIT,
  //     })
  //     if (data.custAddress[0].AC_ADDFLAG == false && data.custAddress[0].AC_ADDTYPE == 'P') {
  //       this.angForm.patchValue({
  //         AC_THONO: data.custAddress[1].AC_HONO,
  //         AC_TWARD: data.custAddress[1].AC_WARD,
  //         AC_TADDR: data.custAddress[1].AC_ADDR,
  //         AC_TGALLI: data.custAddress[1].AC_GALLI,
  //         AC_TAREA: data.custAddress[1].AC_AREA,
  //         AC_TCTCODE: data.custAddress[1].AC_CTCODE,
  //         AC_TPIN: data.custAddress[1].AC_PIN,
  //       })
  //     }
  //   })
  // }

  // // Event for Customer Module

  // newCustomer(newCustomer) {
  //   this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
  //     this.Cust_ID = data;
  //     this.id = newCustomer;
  //     this.getCustomer(newCustomer);
  //   })
  // }

  //temp address flag variable

  tempAsPermanent() {
    this.tempAddress = !this.tempAddress;
  }

  //set open date, appointed date and expiry date

  // getSystemParaDate() {
  //   this.systemParameter.getFormData(1).subscribe(data => {
  //     this.angForm.patchValue({
  //       AC_OPDATE: data.CURRENT_DATE,
  //     })
  //   })
  // }

  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {

      let date1 = moment(data.CURRENT_DATE).format('DD/MM/YYYY');

      this.openingDate = date1;
      this.angForm.patchValue({
        AC_OPDATE: this.openingDate,
        DATE_APPOINTED: data.CURRENT_DATE,
        AC_NDATE: data.CURRENT_DATE,
      })

      if (data.ON_LINE === true) {
        this.angForm.controls['AC_OPDATE'].disable()
        // document.getElementById('AC_OPDATE').setAttribute("disabled", "true");
        // this.disableOpenDate = true
      } else {
        // document.getElementById('AC_OPDATE').removeAttribute("disabled");
        // document.getElementById('AC_OPDATE').disable
        // this.angForm.controls['AC_OPDATE'].enable()
        // this.disableOpenDate = false
        this.angForm.controls['AC_OPDATE'].enable()
      }
    })
  }


  //disabledate on keyup
  disabledate(data: any) {
    if (data != "") {
      if (data > this.datemax) {
        Swal.fire("Invalid Input", "Please insert valid date ", "warning");
        (document.getElementById("AC_OPDATE") as HTMLInputElement).value = ""
      }
    }
  }
  //Method for set value for repay mode and installment type

  getScheme(code) {
    this._TermLoanScheme.getData(code).subscribe(data => {
      if (data.S_INT_APPLICABLE === true) {
        this.repay = 'Monthly'
        this.installmentType = data.INSTALLMENT_METHOD
      }
      else {
        this.repay = 'OnMaturity'
        this.installmentType = data.INSTALLMENT_METHOD
      }
    })
    this.scheme1 = this.angForm.controls['AC_TYPE'].value;
  }

  // Method for set opeing date to expiry date and registration date

  changeDate() {
    // this.setCategory(this.temp)
    this.getInterest(this.temp)
    this.angForm.patchValue({
      AC_EXPIRE_DATE: this.angForm.controls['AC_OPDATE'].value,

      AC_COREG_DATE: this.angForm.controls['AC_OPDATE'].value
    })

  }

  // Method for set sanction amount to registration amount and registration date

  changeAmt() {

    this.angForm.patchValue({

      AC_COREG_AMT: this.angForm.controls['AC_SANCTION_AMOUNT'].value

    })

  }

  // Set Priorities

  getPriority(idp) {
    this.prioritySectorMaster.getFormData(idp).subscribe(data => {
      this.angForm.patchValue({
        AC_PRIORITY: idp.toString(),
        AC_PRIORITY_SUB1: data.SUB1_CODE,
        AC_PRIORITY_SUB2: data.SUB2_CODE,
        AC_PRIORITY_SUB3: data.SUB3_CODE,
      })
    })
  }

  // Method for Show and hide option wise field
  directorShow(event) {
    if (event.value == 'Director') {
      this.AC_DIRECTOR = false
    }
    else if (event.value == 'DirectorsRelative') {
      this.AC_DIRECTOR = false
      this.angForm.controls['AC_DIRECTOR_RELATION'].enable();
    }
    else {
      this.AC_DIRECTOR = true
      this.angForm.controls['AC_DIRECTOR_RELATION'].disable();
    }
  }

  // Method for Calculate Instllment
  calculation() {

    this.months = this.angForm.controls['AC_MONTHS'].value
    if (this.repay == 'Monthly' && (this.installmentType == 'Plain' || this.installmentType == 'Reducing')) {

      this.result = Math.round((((this.drawingPower) / (this.months)) * 1));

      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })

    }
    else if (this.repay == 'Quarterly' && (this.installmentType == 'Plain' || this.installmentType == 'Reducing')) {

      this.result = Math.round((((this.drawingPower) / (this.months)) * 3));

      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }
    else if (this.repay == 'HalfYearly' && (this.installmentType == 'Plain' || this.installmentType == 'Reducing')) {

      this.result = Math.round(((Math.floor(this.drawingPower) / Math.floor(this.months)) * 6));

      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }
    else if (this.repay == 'Yearly' && (this.installmentType == 'Plain' || this.installmentType == 'Reducing')) {

      this.result = Math.round(((Math.floor(this.drawingPower) / Math.floor(this.months)) * 12));

      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }
    else if (this.repay == 'OnMaturity' && (this.installmentType == 'Plain' || this.installmentType == 'Reducing')) {

      this.result = Math.round(((Math.floor(this.drawingPower))));

      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }

    else if (this.repay == 'Monthly' && (this.installmentType == 'EMI')) {

      this.month = Math.floor(this.months) / 1;
      this.result = Math.round(Math.floor(this.drawingPower) * ((Math.floor(this.intRate) / (1200 / 1)) / (1 - ((1 + (Math.floor(this.intRate) / (1200 / 1)))) ** (Math.floor(this.month) * (-1)))));

      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }
    else if (this.repay == 'Quarterly' && (this.installmentType == 'EMI')) {

      this.month = Math.floor(this.months) / 3;

      this.result = Math.round(Math.floor(this.drawingPower) * ((Math.floor(this.intRate) / (1200 / 3)) / (1 - ((1 + (Math.floor(this.intRate) / (1200 / 3)))) ** (Math.floor(this.month) * (-1)))));

      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }
    else if (this.repay == 'HalfYearly' && (this.installmentType == 'EMI')) {

      this.month = Math.floor(this.months) / 6;
      this.result = Math.round(Math.floor(this.drawingPower) * ((Math.floor(this.intRate) / (1200 / 6)) / (1 - ((1 + (Math.floor(this.intRate) / (1200 / 6)))) ** ((this.month) * (-1)))));
      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }
    else if (this.repay == 'Yearly' && (this.installmentType == 'EMI')) {

      this.month = Math.floor(this.months) / 12;
      this.result = Math.round(Math.floor(this.drawingPower) * ((Math.floor(this.intRate) / (1200 / 12)) / (1 - ((1 + (Math.floor(this.intRate) / (1200 / 12)))) ** (Math.floor(this.month) * (-1)))));

      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }
    else if (this.repay == 'OnMaturity' && (this.installmentType == 'EMI')) {

      this.angForm.patchValue({
        AC_INSTALLMENT: 0
      })
    }
    else if (this.repay == 'Monthly' && (this.installmentType == 'WithInterest')) {

      this.intResult = (Math.floor(this.drawingPower) * Math.floor(this.intRate) / 1200).toFixed(2);
      this.result = Math.round((((Math.floor(this.drawingPower) / Math.floor(this.months)) + Math.floor(this.intResult)) * 1));

      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }
    else if (this.repay == 'Quarterly' && (this.installmentType == 'WithInterest')) {

      this.intResult = (Math.floor(this.drawingPower) * Math.floor(this.intRate) / 1200).toFixed(2);
      this.result = Math.round((((Math.floor(this.drawingPower) / Math.floor(this.months)) + Math.floor(this.intResult)) * 3));
      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }
    else if (this.repay == 'HalfYearly' && (this.installmentType == 'WithInterest')) {

      this.intResult = (this.drawingPower * this.intRate / 1200);
      this.result = Math.round((((this.drawingPower / this.months) + this.intResult) * 6));
      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }
    else if (this.repay == 'Yearly' && (this.installmentType == 'WithInterest')) {

      this.intResult = (this.drawingPower * this.intRate / 1200);
      this.result = Math.round((((this.drawingPower / this.months) + this.intResult) * 12));
      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }
    else if (this.repay == 'OnMaturity' && (this.installmentType == 'WithInterest')) {
      // debugger

      this.intResult = (this.drawingPower * this.intRate / 1200);
      this.result = Math.round((((this.drawingPower / this.months) + this.intResult) * 0));
      this.angForm.patchValue({
        AC_INSTALLMENT: this.result
      })
    }
  }

  // Start Security tab

  // Add Security
  addField() {
    const formVal = this.angForm.value;
    var object = {
      AC_ACNOTYPE: formVal.AC_ACNOTYPE,
      AC_TYPE: formVal.AC_TYPE,
      AC_NO: formVal.AC_NO,
      SECURITY_CODE: this.SECU_CODE,
      SECURITY_VALUE: this.SECU_NAME,
    }

    if (formVal.AC_CUSTID != "") {
      if (object.SECURITY_CODE != undefined) {
        if (this.multiSecurity.length == 0) {
          this.multiSecurity.push(object);
        }
        else {
          if (this.multiSecurity.find(ob => ob['SECURITY_CODE'] === this.SECU_CODE)) {
            Swal.fire("This Security is Already Added", "error");
          } else {
            this.multiSecurity.push(object);
          }
        }
      } else {
        Swal.fire("Please Select Security Code", "error");
      }
    } else {
      Swal.fire("Please Select Customer Id", "error");
    }
    this.resetField()
  }

  // Delete Security
  delField(id) {
    this.multiSecurity.splice(id, 1)
  }

  // Reset Security
  resetField() {
    this.angForm.controls['SECURITY_CODE'].reset();
    this.angForm.controls['SECURITY_VALUE'].reset();
  }

  securityDetails(event) {
    this.SECU_CODE = event.id
    this.SECU_NAME = event.name
  }

  // Security Event
  newItemEvent(newvalue) {

    this.security_id = newvalue[0];

    if (newvalue[1] == "book") {
      this.bookid.push(this.security_id);
    }

    if (newvalue[1] == "customerInsurance") {
      this.insuranceid.push(this.security_id);
    }

    if (newvalue[1] == "firePolicy") {
      this.firepolicyid.push(this.security_id);
    }

    if (newvalue[1] == "furniture") {
      this.furnitureid.push(this.security_id);
    }

    if (newvalue[1] == "goldSilver") {
      this.goldid.push(this.security_id);
    }

    if (newvalue[1] == "govSecurity") {
      this.govtid.push(this.security_id);
    }

    if (newvalue[1] == "landBuilding") {
      this.landid.push(this.security_id);
    }

    if (newvalue[1] == "marketShare") {
      this.marketid.push(this.security_id);
    }

    if (newvalue[1] == "otherSecurity") {
      this.otherid.push(this.security_id);
    }

    if (newvalue[1] == "ownDeposit") {
      this.ownid.push(this.security_id);
    }

    if (newvalue[1] == "plantMachinary") {
      this.plantid.push(this.security_id);
    }

    if (newvalue[1] == "pleadge") {
      this.pledgeid.push(this.security_id);
    }

    if (newvalue[1] == "stockStatement") {
      this.stockid.push(this.security_id);
    }

    if (newvalue[1] == "vehicle") {
      this.vehicleid.push(this.security_id);
    }
  }

  // Show security Detals Components
  showSecurity(code) {

    this._SecurityCode.getFormData(code).subscribe(data => {

      if (data.BOOK_DEBTS == true) {
        this.BOOK_DEBTS = true
      } else {
        this.BOOK_DEBTS = false
      }

      if (data.CUST_INSURANCE == true) {
        this.CUST_INSURANCE = true
      } else {
        this.CUST_INSURANCE = false
      }

      if (data.FIRE_POLICY == true) {
        this.FIRE_POLICY = true
      } else {
        this.FIRE_POLICY = false
      }

      if (data.FURNITURE_FIXTURE == true) {
        this.FURNITURE_FIXTURE = true
      }
      else {
        this.FURNITURE_FIXTURE = false
      }

      if (data.GOLD_SILVER == true) {
        this.GOLD_SILVER = true
      }
      else {
        this.GOLD_SILVER = false
      }

      if (data.GOVT_SECU_LIC == true) {
        this.GOVT_SECU_LIC = true
      } else {
        this.GOVT_SECU_LIC = false
      }

      if (data.LAND_BUILDING == true) {
        this.LAND_BUILDING = true
      } else {
        this.LAND_BUILDING = false
      }

      if (data.MARKET_SHARE == true) {
        this.MARKET_SHARE = true
      } else {
        this.MARKET_SHARE = false
      }

      if (data.OTHER_SECURITY == true) {
        this.OTHER_SECURITY = true
      } else {
        this.OTHER_SECURITY = false
      }

      if (data.OWN_DEPOSIT == true) {
        this.OWN_DEPOSIT = true
      } else {
        this.OWN_DEPOSIT = false
      }

      if (data.PLANT_MACHINARY == true) {
        this.PLANT_MACHINARY = true
      } else {
        this.PLANT_MACHINARY = false
      }

      if (data.PLEDGE_STOCK == true) {
        this.PLEDGE_STOCK = true
      } else {
        this.PLEDGE_STOCK = false
      }

      if (data.STOCK_STATEMENT == true) {
        this.STOCK_STATEMENT = true
      } else {
        this.STOCK_STATEMENT = false
      }

      if (data.VEHICLE == true) {
        this.VEHICLE = true
      } else {
        this.VEHICLE = false
      }
    });
  }
  // End Security tab

  // Start Guarantor tab

  // //Open Guarantor Form

  clickguarantor($event) {
    if ($event.target.checked) {
      this.GuarantorTrue = true
    } else {
      this.GuarantorTrue = false
    }
  }

  // OpenLink() {
  //   this.GuarantorTrue = !this.GuarantorTrue
  // }

  // Get Guarantor Customer Id 
  getgCustomer(Gid) {
    this.customerIdService.getFormData(Gid).subscribe(data => {
      this.angForm.patchValue({
        // GAC_CUSTID: Gid.toString(),
        GAC_MEMBNO: data.AC_MEMBNO,
        GAC_MEMBTYPE: data.AC_MEMBTYPE,
        GAC_NAME: data.AC_NAME,
      })
    })
  }

  // Add Guarantor
  addGuarantor() {
    const formVal = this.angForm.value;
    let exdate
    var object = {
      GAC_CUSTID: formVal.GAC_CUSTID,
      AC_MEMBNO: formVal.GAC_MEMBNO,
      AC_MEMBTYPE: formVal.GAC_MEMBTYPE,
      AC_NAME: formVal.GAC_NAME,
      EXP_DATE: (formVal.EXP_DATE == '' || formVal.EXP_DATE == 'Invalid date') ? exdate = '' : exdate = moment(formVal.EXP_DATE).format('DD/MM/YYYY'),
    }
    if (formVal.AC_CUSTID != "") {
      if (object.GAC_CUSTID != undefined) {
        if (this.id != this.Gid) {
          if (this.multiGuarantor.length == 0) {
            this.multiGuarantor.push(object);
          }
          else {
            if (this.multiGuarantor.find(ob => ob['GAC_CUSTID'] === formVal.GAC_CUSTID)) {
              Swal.fire("This Customer is Already Guarantor", "error");
            } else {
              this.multiGuarantor.push(object);
            }
          }
        }
        else {
          Swal.fire("Please Select Different Customer id", "error");
        }
      }
      else {
        Swal.fire("Please Select Guarantor Customer Id", "error");
      }
    } else {
      Swal.fire("Please Select Customer Id", "error");
    }
    this.resetGuarantor()
  }


  // Edit Guarantor
  editGuarantor(id) {
    let exdate
    this.intIndex = id
    this.intID = this.multiGuarantor[id].id;
    this.GuarantorShowButton = false;
    this.GuarantorUpdateShow = true;

    this.angForm.patchValue({
      GAC_CUSTID: this.multiGuarantor[id].GAC_CUSTID,
      GAC_MEMBNO: this.multiGuarantor[id].AC_MEMBNO,
      GAC_MEMBTYPE: this.multiGuarantor[id].AC_MEMBTYPE,
      GAC_NAME: this.multiGuarantor[id].AC_NAME,
      EXP_DATE: (this.multiGuarantor[id].EXP_DATE == 'Invalid date' || this.multiGuarantor[id].EXP_DATE == '' || this.multiGuarantor[id].EXP_DATE == null) ? exdate = '' : exdate = this.multiGuarantor[id].EXP_DATE,
      // EXP_DATE: this.multiGuarantor[id].EXP_DATE,
    })
  }

  // Update Guarantor
  updateGuarantor() {
    let exdate
    let index = this.intIndex;
    this.GuarantorShowButton = true;
    this.GuarantorUpdateShow = false;
    const formVal = this.angForm.value;
    var object = {
      GAC_CUSTID: formVal.GAC_CUSTID,
      AC_MEMBNO: formVal.GAC_MEMBNO,
      AC_MEMBTYPE: formVal.GAC_MEMBTYPE,
      AC_NAME: formVal.GAC_NAME,
      // EXP_DATE: formVal.EXP_DATE,
      EXP_DATE: (formVal.EXP_DATE == '' || formVal.EXP_DATE == 'Invalid date' || formVal.EXP_DATE == null) ? exdate = '' : exdate = moment(formVal.EXP_DATE).format('DD/MM/YYYY'),
      id: this.intID
    }
    if (formVal.AC_CUSTID != "") {
      if (object.GAC_CUSTID != undefined) {
        if (this.id != this.Gid) {
          if (this.multiGuarantor.length == 0) {
            this.multiGuarantor[index] = object;
          }
          else {
            // if (this.multiGuarantor.find(ob => ob['GAC_CUSTID'] === formVal.GAC_CUSTID)) {
            //   Swal.fire("This Customer is Already Guarantor", "error");
            // } else {
            this.multiGuarantor[index] = object;
            // }
          }
        }
        else {
          Swal.fire("Please Select Different Customer id", "error");
        }
      }
      else {
        Swal.fire("Please Select Guarantor Customer Id", "error");
      }
    } else {
      Swal.fire("Please Select Customer Id", "error");
    }

    this.resetGuarantor()
  }


  // Delete Guarantor
  delGuarantor(id) {
    this.multiGuarantor.splice(id, 1)
  }

  // Reset Guarantor
  resetGuarantor() {
    this.angForm.controls['GAC_CUSTID'].reset();
    this.angForm.controls['GAC_MEMBNO'].reset();
    this.angForm.controls['GAC_MEMBTYPE'].reset();
    this.angForm.controls['GAC_NAME'].reset();
    this.angForm.controls['EXP_DATE'].reset();
  }

  // End Guarantor tab

  //  Start CoBorrower tab

  // //Open CoBorrower Form

  clickCoBorrower($event) {
    if ($event.target.checked) {
      this.CoBorrowerTrue = true
    } else {
      this.CoBorrowerTrue = false
    }
  }

  // OpenCoBorr() {
  //   this.CoBorrowerTrue = !this.CoBorrowerTrue
  // }

  // Get CoBorrower Customer Id 
  getCCustomer(Cid) {
    this.customerIdService.getFormData(Cid).subscribe(data => {
      this.angForm.patchValue({
        // CAC_CUSTID: Cid.toString(),
        CAC_NAME: data.AC_NAME,
      })
    })
  }

  // Add CoBorrower 
  addCoBorrower() {
    const formVal = this.angForm.value;
    var object = {
      CAC_CUSTID: formVal.CAC_CUSTID,
      AC_NAME: formVal.CAC_NAME,
    }

    if (formVal.AC_CUSTID != "") {
      if (object.CAC_CUSTID != undefined) {
        if (this.id != this.Cid) {
          if (this.multiCoBorrower.length == 0) {
            this.multiCoBorrower.push(object);
          }
          else {
            if (this.multiCoBorrower.find(ob => ob['CAC_CUSTID'] === formVal.CAC_CUSTID)) {
              Swal.fire("This Customer is Already CoBorrower", "error");
            } else {
              this.multiCoBorrower.push(object);
            }
          }
        }
        else {
          Swal.fire("Please Select Different Customer id", "error");
        }
      }
      else {
        Swal.fire("Please Select CoBorrower Customer Id", "error");
      }

    } else {
      Swal.fire("Please Select Customer Id", "error");
    }
    this.resetCoBorrower()
  }

  // Edit CoBorrower 
  editCoBorrower(id) {
    this.coBorrowerIndex = id
    this.CoBorrowerupdateid = id
    this.CoBorrowerID = this.multiCoBorrower[id].id;
    this.CoBorrowerTrue = true
    this.CoBorrowerShowButton = false;
    this.CoBorrowerUpdateShow = true;
    this.angForm.patchValue({
      CAC_CUSTID: this.multiCoBorrower[id].CAC_CUSTID,
      CAC_NAME: this.multiCoBorrower[id].AC_NAME,
    })
  }

  // Update CoBorrower 
  updateCoBorrower() {
    let index = this.coBorrowerIndex;
    this.CoBorrowerShowButton = true;
    this.CoBorrowerUpdateShow = false;

    const formVal = this.angForm.value;
    var object = {
      CAC_CUSTID: formVal.CAC_CUSTID,
      AC_NAME: formVal.CAC_NAME,
      id: this.CoBorrowerID
    }
    if (formVal.AC_CUSTID != "") {
      if (object.CAC_CUSTID != undefined) {
        if (this.id != this.Cid) {
          if (this.multiCoBorrower.length == 0) {
            this.multiCoBorrower[index] = object;
          }
          else {
            if (this.multiCoBorrower.find(ob => ob['CAC_CUSTID'] === formVal.CAC_CUSTID)) {
              Swal.fire("This Customer is Already CoBorrower", "error");
            } else {
              this.multiCoBorrower[index] = object;
            }
          }
        }
        else {
          Swal.fire("Please Select Different Customer id", "error");
        }
      }
      else {
        Swal.fire("Please Select CoBorrower Customer Id", "error");
      }

    } else {
      Swal.fire("Please Select Customer Id", "error");
    }

    this.resetCoBorrower()
  }

  // Delete CoBorrower 
  delCoBorrower(id) {
    this.multiCoBorrower.splice(id, 1)
  }

  // Reset CoBorrower 
  resetCoBorrower() {
    this.angForm.controls['CAC_CUSTID'].reset();
    this.angForm.controls['CAC_NAME'].reset();
  }

  // End CoBorrower tab



  setCategory(int_category) {
    // this.InterestRateForLoanandCC.intData(int_category).subscribe(data => {
    this.InterestRateForLoanandCC.intData().subscribe(data => {
      console.log(data, "data")
      this.date = this.angForm.controls['AC_OPDATE'].value

      if (data != typeof (undefined)) {
        data.forEach(async (element) => {
          if (this.date == element.EFFECT_DATE) {
            this.angForm.patchValue({
              AC_INTCATA: element.INT_CATEGORY,
              AC_INTRATE: element.rate[0].INT_RATE,
            })
          } else if (element.EFFECT_DATE > this.date) {
            this.angForm.patchValue({
              AC_INTCATA: element.INT_CATEGORY,
              AC_INTRATE: element.rate[0].INT_RATE,
            })
          } else if (element.EFFECT_DATE > this.date || this.date < element.EFFECT_DATE) {
            this.angForm.patchValue({
              AC_INTCATA: element.INT_CATEGORY,
              AC_INTRATE: element.rate[0].INT_RATE,
            })
          }
        })
      } else {
        this.angForm.patchValue({
          AC_INTRATE: 0,
        })
      }
    })
  }
  getInterest(event) {
    console.log(event, "event")
    let temp
    let date = this.angForm.controls['AC_OPDATE'].value
    this.InterestRateForLoanandCC.intData().subscribe(data => {
      console.log(data[1].INT_CATEGORY, "data")
      data.forEach(async (element) => {
        console.log(element.EFFECT_DATE, "element")
        // if (element.INT_CATEGORY == event.name) {
        //   temp = element
        //   console.log(temp, "temp")
        // }
        if (element.INT_CATEGORY == event.name) {
          temp = element
          console.log(temp, "temp")
        }
      })
      this.angForm.patchValue({
        AC_INTRATE: temp.rate[0].INT_RATE,
      })
    })
  }

  // getInterest(AC_INTCATA) {
  //   this.temp = AC_INTCATA
  //   this.InterestRateForLoanandCC.intData(AC_INTCATA).subscribe(data => {
  //     console.log("data", data)
  //     this.date = this.angForm.controls['AC_OPDATE'].value
  //     if (data.find(data => data['EFFECT_DATE'] === this.date)) {
  //       this.angForm.patchValue({
  //         AC_INTCATA: data.INT_CATEGORY,
  //         AC_INTRATE: data.rate[0].INT_RATE,
  //       })
  //     } else if(data.find(data => data['EFFECT_DATE'] >  this.date)){
  //       this.angForm.patchValue({
  //         AC_INTCATA: data.INT_CATEGORY,
  //         AC_INTRATE: data.rate[0].INT_RATE,
  //       })
  //     }else if(data.find(data => data['EFFECT_DATE'] <  this.date)){
  //       this.angForm.patchValue({
  //         AC_INTCATA: data.INT_CATEGORY,
  //         AC_INTRATE: data.rate[0].INT_RATE,
  //       })
  //     }
  //     // data.forEach(async (element) => {
  //     //   if (this.date == element.EFFECT_DATE) {
  //     //     console.log("true 1")
  //     //     this.angForm.patchValue({
  //     //       AC_INTCATA: element.INT_CATEGORY,
  //     //       AC_INTRATE: element.rate[0].INT_RATE,
  //     //     })
  //     //   } else if (element.EFFECT_DATE > this.date) {
  //     //     console.log("true 2")
  //     //     this.angForm.patchValue({
  //     //       AC_INTCATA: element.INT_CATEGORY,
  //     //       AC_INTRATE: element.rate[0].INT_RATE,
  //     //     })
  //     //   } else if (element.EFFECT_DATE > this.date || this.date < element.EFFECT_DATE) {
  //     //     console.log("true 3")
  //     //     this.angForm.patchValue({
  //     //       AC_INTCATA: element.INT_CATEGORY,
  //     //       AC_INTRATE: element.rate[0].INT_RATE,
  //     //     })
  //     //   }
  //     // })
  //   })
  // }
  int_category: any

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#mastertable tfoot tr').appendTo('#mastertable thead');
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

  getExpiryDate() {
    debugger
    let months = this.angForm.controls['AC_MONTHS'].value
    if (this.angForm.controls['AC_OPEN_OLD_DATE'].value != '') {
      var expiryDt = new Date(this.angForm.controls['AC_OPEN_OLD_DATE'].value)
      var year = expiryDt.getFullYear();
      var month = new Date(expiryDt).getMonth();
      var day = new Date(expiryDt).getDate();
      var expiry = month + Number(months)
      var date1 = new Date(year, expiry, day);
      var date = moment(date1, 'YYYY-MM-DD').add(1, 'days');
      // var expiryDate = this.datePipe.transform(date, "yyyy-MM-dd")
      var expiryDate = moment(date).format('DD/MM/YYYY');
      this.angForm.patchValue({
        AC_EXPIRE_DATE: expiryDate
      })
    }
    else {
      var expiryDt = new Date(this.angForm.controls['AC_OPDATE'].value)
      var year = expiryDt.getFullYear();
      var month = new Date(expiryDt).getMonth();
      var day = new Date(expiryDt).getDate();
      var expiry = month + Number(months)
      var date1 = new Date(year, expiry, day);
      var date = moment(date1, 'YYYY-MM-DD');
      var expiryDate = this.datePipe.transform(date, "yyyy-MM-dd")
      this.angForm.patchValue({
        AC_EXPIRE_DATE: expiryDate
      })
    }
  }
  month: number

  @ViewChild('ctdTabset') ctdTabset;
  switchNgBTab(id: string) {
    this.ctdTabset.select(id);
  }

  selectedImagePreview: any;
  viewImagePreview(ele, id) {
    this.selectedImagePreview = id;
  }

}