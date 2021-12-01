import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
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
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { CustomerIdService } from '../customer-id/customer-id.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { DocumentMasterDropdownService } from '../../../../shared/dropdownService/document-master-dropdown.service';
import { environment } from '../../../../../environments/environment'
import { Router } from '@angular/router'
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
import { InterestRateForLoanandCCService } from '../../policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service';
import { PrioritySectorMasterService } from '../../policy-settings/information/priority-sector-master/priority-sector-master.service';
import { RepayModeService } from '../../../../shared/dropdownService/repay-mode.service';
import { IOption } from 'ng-select';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

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
  // documentMaster: DocumentMaster[];
  id: string = '';
  Gid: string = '';
  Cid: string = '';
  idp: string = '';
  idi: string = '';
  repayModeOption: Array<IOption> = this.repayModeService.getCharacters();
  installment: Array<IOption> = this.installmentMethodService.getCharacters();
  account: Array<IOption> = this.accountType.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;
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
    public router: Router
  ) { }

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
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/term-loan-master',
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
      columnDefs: [{
        targets: '_all',
        defaultContent: ""
      }],
      columns: [
        {
          title: 'Action',
        },
        {
          title: 'Type',
          data: 'AC_ACNOTYPE'
        },
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Account No',
          data: 'AC_NO'
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
          title: 'Manual Reference Member No.',
          data: 'REF_ACNO'
        },
        {
          title: 'Interest Category',
          data: 'AC_INTCATA'
        },
        {
          title: 'Sanction Limit',
          data: 'AC_SANCTION_AMOUNT'
        },
        {
          title: 'Sanction Date',
          data: 'AC_SANCTION_DATE'
        },
        {
          title: 'Drawing Power',
          data: 'AC_DRAWPOWER_AMT'
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
          title: 'Interest Rate',
          data: 'AC_INTRATE'
        },
        {
          title: 'Repay Mode',
          data: 'AC_REPAYMODE'
        },
        {
          title: 'Installment Type',
          data: 'INSTALLMENT_METHOD'
        },
        {
          title: 'Installment',
          data: 'AC_INSTALLMENT'
        },
        {
          title: 'Moratorium Period(Months)',
          data: 'AC_MORATORIUM_PERIOD'
        },
        {
          title: 'Grace Period',
          data: 'AC_GRACE_PERIOD'
        },
        {
          title: 'Sanction Authority',
          data: 'AC_AUTHORITY'
        },
        {
          title: 'Recommended By',
          data: 'AC_RECOMMEND_BY'
        },
        {
          title: 'Recovery Cleark',
          data: 'AC_RECOVERY_CLERK'
        },
        {
          title: 'Priority',
          data: 'AC_PRIORITY'
        },
        {
          title: 'Priority 1',
          data: 'AC_PRIORITY_SUB1'
        },
        {
          title: 'Priority 2',
          data: 'AC_PRIORITY_SUB2'
        },
        {
          title: 'Priority 3',
          data: 'AC_PRIORITY_SUB3'
        },
        {
          title: 'Weaker Section',
          data: 'AC_WEAKER'
        },
        {
          title: 'Purpose',
          data: 'AC_PURPOSE'
        },
        {
          title: 'Industry',
          data: 'AC_INDUSTRY'
        },
        {
          title: 'Health Code',
          data: 'AC_HEALTH'
        },
        {
          title: 'Account Type',
          data: 'AC_RELATION_TYPE'
        },
        {
          title: 'Director',
          data: 'AC_DIRECTOR'
        },
        {
          title: 'Director Relation',
          data: 'AC_DIRECTOR_RELATION'
        },
        {
          title: 'Registration no.',
          data: 'AC_COREG_NO'
        },
        {
          title: 'Registration Date',
          data: 'AC_COREG_DATE'
        },
        {
          title: 'Amount',
          data: 'AC_COREG_AMT'
        },
        {
          title: 'Resolution Details No.',
          data: 'AC_RESO_NO'
        },
        {
          title: 'Resolution Details Dt.',
          data: 'AC_RESO_DATE'
        },
      ],
      dom: 'Blrtip',
    };


    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data;
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
      AC_OPDATE: ['', [Validators.required]],
      AC_OPEN_OLD_DATE: [''],
      AC_BIRTH_DT: [''],
      AC_IS_RECOVERY: [''],
      AC_MEMBTYPE: [''],
      AC_MEMBNO: [''],
      REF_ACNO: [''],
      AC_CAST: [''],
      AC_OCODE: [''],
      AC_INTCATA: ['', [Validators.required]],
      AC_SANCTION_AMOUNT: ['', [Validators.required, Validators.pattern]],
      AC_SANCTION_DATE: ['', [Validators.required]],
      AC_DRAWPOWER_AMT: ['', [Validators.required, Validators.pattern]],
      AC_MONTHS: ['', [Validators.required, Validators.pattern]],
      AC_EXPIRE_DATE: ['', [Validators.required]],
      AC_INTRATE: ['', [Validators.required, Validators.pattern]],
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
      GAC_HONO: [''],
      GAC_WARD: [''],
      GAC_ADDR: [''],
      GAC_GALLI: [''],
      GAC_AREA: [''],
      GAC_CTCODE: [''],
      GAC_PIN: [''],
      CAC_HONO: [''],
      CAC_WARD: [''],
      CAC_ADDR: [''],
      CAC_GALLI: [''],
      CAC_AREA: [''],
      CAC_CTCODE: [''],
      CAC_PIN: [''],
      AC_ADDFLAG: [false],
      AC_THONO: [''],
      AC_TWARD: [''],
      AC_TADDR: [''],
      AC_TGALLI: [''],
      AC_TAREA: [''],
      AC_TCTCODE: [''],
      AC_TPIN: [''],
      AC_MOBILENO: [''],
      AC_PHONE_RES: [''],
      AC_PHONE_OFFICE: [''],
      EXP_DATE: [''],
      GAC_MEMBNO: [''],
      GAC_MEMBTYPE: [''],
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
      'AC_TYPE': formVal.AC_TYPE,
      'AC_NO': formVal.AC_NO,
      'AC_NAME':formVal.AC_NAME,
      'AC_CUSTID': formVal.AC_CUSTID,
      'AC_OPDATE': formVal.AC_OPDATE,
      'AC_OPEN_OLD_DATE': formVal.AC_OPEN_OLD_DATE,
      'REF_ACNO': formVal.REF_ACNO,
      'AC_INTCATA': formVal.AC_INTCATA,
      'AC_SANCTION_AMOUNT': formVal.AC_SANCTION_AMOUNT,
      'AC_SANCTION_DATE': formVal.AC_SANCTION_DATE,
      'AC_DRAWPOWER_AMT': formVal.AC_DRAWPOWER_AMT,
      'AC_MONTHS': formVal.AC_MONTHS,
      'AC_EXPIRE_DATE': formVal.AC_EXPIRE_DATE,
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
      'AC_COREG_DATE': formVal.AC_COREG_DATE,
      'AC_COREG_AMT': formVal.AC_COREG_AMT,
      'AC_RESO_NO': formVal.AC_RESO_NO,
      'AC_RESO_DATE': formVal.AC_RESO_DATE,
      'AC_THONO': formVal.AC_THONO,
      'AC_TWARD': formVal.AC_TWARD,
      'AC_TADDR': formVal.AC_TADDR,
      'AC_TGALLI': formVal.AC_TGALLI,
      'AC_TAREA': formVal.AC_TAREA,
      'AC_TCTCODE': formVal.AC_TCTCODE,
      'AC_TPIN': formVal.AC_TPIN,
      'CoBorrowerData': this.multiCoBorrower,
      'GuarantorData': this.multiGuarantor
    }


    this.termLoanService.postData(dataToSend).subscribe(data => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    }, (error) => {
      console.log(error)
    })

    //To clear form
    this.resetForm();
    this.multiCoBorrower = []
    this.multiGuarantor = []
  }

  // Reset Function
  resetForm() {
    this.createForm();
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.termLoanService.getFormData(id).subscribe(data => {
  
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      // this.getgCustomer(data.GAC_CUSTID)
      // this.getCCustomer(data.CAC_CUSTID)
      this.multiCoBorrower = data.CoborrowerMaster,
      this.multiGuarantor = data.guaranterMaster
      // debugger
      this.angForm.patchValue({
        AC_TYPE: data.AC_TYPE,
        AC_NO: data.AC_NO,
        AC_OPDATE: data.AC_OPDATE,
        AC_OPEN_OLD_DATE: data.AC_OPEN_OLD_DATE,
        REF_ACNO: data.REF_ACNO,
        AC_INTCATA: data.AC_INTCATA,
        AC_SANCTION_AMOUNT: data.AC_SANCTION_AMOUNT,
        AC_SANCTION_DATE: data.AC_SANCTION_DATE,
        AC_DRAWPOWER_AMT: data.AC_DRAWPOWER_AMT,
        AC_MONTHS: data.AC_MONTHS,
        AC_EXPIRE_DATE: data.AC_EXPIRE_DATE,
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
        AC_COREG_DATE: data.AC_COREG_DATE,
        AC_COREG_AMT: data.AC_COREG_AMT,
        AC_RESO_NO: data.AC_RESO_NO,
        AC_RESO_DATE: data.AC_RESO_DATE,
      })
    })
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;

    data['GuarantorData'] = this.multiGuarantor
    data['CoBorrowerData'] = this.multiCoBorrower
    data['id'] = this.updateID;
    this.termLoanService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
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
  getInterest(idi) {
    this.InterestRateForLoanandCC.getFormData(idi).subscribe(data => {
      this.angForm.patchValue({
        AC_INTCATA: data.INT_CATEGORY,
        AC_INTRATE: data.INT_RATE,
      })
    })
  }

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

  getgCustomer(Gid) {
    this.customerIdService.getFormData(Gid).subscribe(data => {
      this.angForm.patchValue({
        GAC_CUSTID: Gid.toString(),
        GAC_MEMBNO: data.AC_MEMBNO,
        GAC_MEMBTYPE: data.AC_MEMBTYPE,
        GAC_NAME: data.AC_NAME,
        GAC_HONO: data.custAddress[0].AC_HONO,
        GAC_WARD: data.custAddress[0].AC_WARD,
        GAC_ADDR: data.custAddress[0].AC_ADDR,
        GAC_GALLI: data.custAddress[0].AC_GALLI,
        GAC_AREA: data.custAddress[0].AC_AREA,
        GCITY_NAME: data.custAddress[0].AC_CTCODE,
        GAC_PIN: data.custAddress[0].AC_PIN,
      })
    })
  }

  multiCoBorrower = [];
  CoBorrowerShowButton: boolean = true
  CoBorrowerUpdateShow: boolean = false
  multiGuarantor = [];
  GuarantorShowButton: boolean = true
  GuarantorUpdateShow: boolean = false

  addGuarantor() {
    const formVal = this.angForm.value;
    var object = {
      AC_TYPE: formVal.AC_TYPE,
      AC_ACNOTYPE: formVal.AC_ACNOTYPE,
      GAC_CUSTID: formVal.GAC_CUSTID,
      GAC_MEMBNO: formVal.GAC_MEMBNO,
      GAC_MEMBTYPE: formVal.GAC_MEMBTYPE,
      GAC_NAME: formVal.GAC_NAME,
      GAC_HONO: formVal.GAC_HONO,
      GAC_WARD: formVal.GAC_WARD,
      GAC_ADDR: formVal.GAC_ADDR,
      GAC_GALLI: formVal.GAC_GALLI,
      GAC_AREA: formVal.GAC_AREA,
      GAC_CTCODE: formVal.GAC_CTCODE,
      GAC_PIN: formVal.GAC_PIN,
      EXP_DATE: formVal.EXP_DATE
    }
    this.multiGuarantor.push(object);
    this.resetGuarantor()
  }
  addCoBorrower() {
    const formVal = this.angForm.value;
    var object = {
      AC_TYPE: formVal.AC_TYPE,
      AC_ACNOTYPE: formVal.AC_ACNOTYPE,
      CAC_CUSTID: formVal.CAC_CUSTID,
      CAC_NAME: formVal.CAC_NAME,
      CAC_HONO: formVal.CAC_HONO,
      CAC_WARD: formVal.CAC_WARD,
      CAC_ADDR: formVal.CAC_ADDR,
      CAC_GALLI: formVal.CAC_GALLI,
      CAC_AREA: formVal.CAC_AREA,
      CAC_CTCODE: formVal.CAC_CTCODE,
      CAC_PIN: formVal.CAC_PIN
    }
    this.multiCoBorrower.push(object);
    this.resetCoBorrower()
  }

  CoBorrowerupdateid
  CoBorrowerID
  Guarantorupdateid
  GuarantorID
  coBorrowerIndex
  editCoBorrower(id) {
    this.coBorrowerIndex = id
    this.CoBorrowerupdateid = id
    this.CoBorrowerID = this.multiCoBorrower[id].id;
    this.CoBorrowerTrue = true
    this.CoBorrowerShowButton = false;
    this.CoBorrowerUpdateShow = true;
    this.angForm.patchValue({
      CAC_CUSTID: this.multiCoBorrower[id].AC_CUSTID,
      CAC_NAME: this.multiCoBorrower[id].AC_NAME,
      CAC_HONO: this.multiCoBorrower[id].AC_HONO,
      CAC_WARD: this.multiCoBorrower[id].AC_WARD,
      CAC_ADDR: this.multiCoBorrower[id].AC_ADDR,
      CAC_GALLI: this.multiCoBorrower[id].AC_GALLI,
      CAC_AREA: this.multiCoBorrower[id].AC_AREA,
      CAC_CTCODE: this.multiCoBorrower[id].AC_CTCODE,
      CAC_PIN: this.multiCoBorrower[id].AC_PIN
    })
  }
  guarantorIndex
  editGuarantor(id) {
    this.guarantorIndex = id
    this.Guarantorupdateid = id
    this.GuarantorID = this.multiGuarantor[id].id;
    this.GuarantorTrue = true
    this.GuarantorShowButton = false;
    this.GuarantorUpdateShow = true;
    this.angForm.patchValue({
      GAC_CUSTID: this.multiGuarantor[id].GAC_CUSTID,
      GAC_NAME: this.multiGuarantor[id].GAC_NAME,
      GAC_MEMBNO: this.multiGuarantor[id].GAC_MEMBNO,
      GAC_MEMBTYPE: this.multiGuarantor[id].GAC_MEMBTYPE,
      GAC_HONO: this.multiGuarantor[id].GAC_HONO,
      GAC_WARD: this.multiGuarantor[id].GAC_WARD,
      GAC_ADDR: this.multiGuarantor[id].GAC_ADDR,
      GAC_GALLI: this.multiGuarantor[id].GAC_GALLI,
      GAC_AREA: this.multiGuarantor[id].GAC_AREA,
      GAC_CTCODE: this.multiGuarantor[id].GAC_CTCODE,
      EXP_DATE: this.multiGuarantor[id].EXP_DATE,
      GAC_PIN: this.multiGuarantor[id].GAC_PIN
    })
  }
  updateCoBorrower() {
    let index = this.coBorrowerIndex;
    this.CoBorrowerShowButton = true;
    this.CoBorrowerUpdateShow = false;
    const formVal = this.angForm.value;
    var object = {
      CAC_CUSTID: formVal.CAC_CUSTID,
      CAC_NAME: formVal.CAC_NAME,
      CAC_HONO: formVal.CAC_HONO,
      CAC_WARD: formVal.CAC_WARD,
      CAC_ADDR: formVal.CAC_ADDR,
      CAC_GALLI: formVal.CAC_GALLI,
      CAC_AREA: formVal.CAC_AREA,
      CAC_CTCODE: formVal.CAC_CTCODE,
      CAC_PIN: formVal.CAC_PIN,
      id: this.CoBorrowerID
    }
    this.multiCoBorrower[index] = object;
    this.resetCoBorrower()
  }
  updateGuarantor() {
    let index = this.guarantorIndex;
    this.GuarantorShowButton = true;
    this.GuarantorUpdateShow = false;
    const formVal = this.angForm.value;
    var object = {
      GAC_CUSTID: formVal.GAC_CUSTID,
      GAC_MEMBNO: formVal.GAC_MEMBNO,
      GAC_MEMBTYPE: formVal.GAC_MEMBTYPE,
      GAC_NAME: formVal.GAC_NAME,
      GAC_HONO: formVal.GAC_HONO,
      GAC_WARD: formVal.GAC_WARD,
      GAC_ADDR: formVal.GAC_ADDR,
      GAC_GALLI: formVal.GAC_GALLI,
      GAC_AREA: formVal.GAC_AREA,
      GAC_CTCODE: formVal.GAC_CTCODE,
      GAC_PIN: formVal.GAC_PIN,
      EXP_DATE: formVal.EXP_DATE,
      id: this.GuarantorID
    }
    this.multiGuarantor[index] = object;
    this.resetGuarantor()
  }
  resetCoBorrower() {
    this.angForm.controls['CAC_CUSTID'].reset();
    this.angForm.controls['CAC_NAME'].reset();
    this.angForm.controls['CAC_HONO'].reset();
    this.angForm.controls['CAC_WARD'].reset();
    this.angForm.controls['CAC_ADDR'].reset();
    this.angForm.controls['CAC_GALLI'].reset();
    this.angForm.controls['CAC_AREA'].reset();
    this.angForm.controls['CAC_CTCODE'].reset();
    this.angForm.controls['CAC_PIN'].reset();
  }
  resetGuarantor() {
    this.angForm.controls['GAC_CUSTID'].reset();
    this.angForm.controls['GAC_MEMBNO'].reset();
    this.angForm.controls['GAC_MEMBTYPE'].reset();
    this.angForm.controls['GAC_NAME'].reset();
    this.angForm.controls['GAC_HONO'].reset();
    this.angForm.controls['GAC_WARD'].reset();
    this.angForm.controls['GAC_ADDR'].reset();
    this.angForm.controls['GAC_GALLI'].reset();
    this.angForm.controls['GAC_AREA'].reset();
    this.angForm.controls['GAC_CTCODE'].reset();
    this.angForm.controls['GAC_PIN'].reset();
    this.angForm.controls['EXP_DATE'].reset();
  }
  getCCustomer(Cid) {
    this.customerIdService.getFormData(Cid).subscribe(data => {
      this.angForm.patchValue({
        CAC_CUSTID: Cid.toString(),
        CAC_NAME: data.AC_NAME,
        CAC_HONO: data.custAddress[0].AC_HONO,
        CAC_WARD: data.custAddress[0].AC_WARD,
        CAC_ADDR: data.custAddress[0].AC_ADDR,
        CAC_GALLI: data.custAddress[0].AC_GALLI,
        CAC_AREA: data.custAddress[0].AC_AREA,
        CCITY_NAME: data.custAddress[0].AC_CTCODE,
        CAC_PIN: data.custAddress[0].AC_PIN,

      })
    })
  }
  delCoBorrower(id) {
    this.multiCoBorrower.splice(id, 1)
  }
  delGuarantor(id) {
    this.multiGuarantor.splice(id, 1)
  }
  getCustomer(id) {
    this.getSystemParaDate() //function to set date
    this.customerIdService.getFormData(id).subscribe(data => {
      this.angForm.patchValue({
        AC_CUSTID: id.toString(),
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_MEMBTYPE: data.AC_MEMBTYPE,
        AC_MEMBNO: data.AC_MEMBNO,
        AC_CAST: data.AC_CAST,
        AC_OCODE: data.AC_OCODE,
        AC_ADHARNO: data.AC_ADHARNO,
        AC_RISKCATG: data.AC_RISKCATG,
        AC_BIRTH_DT: data.AC_BIRTH_DT,
        AC_ADDFLAG: data.custAddress[0].AC_ADDFLAG,
        AC_HONO: data.custAddress[0].AC_HONO,
        AC_WARD: data.custAddress[0].AC_WARD,
        AC_ADDR: data.custAddress[0].AC_ADDR,
        AC_GALLI: data.custAddress[0].AC_GALLI,
        AC_AREA: data.custAddress[0].AC_AREA,
        AC_CTCODE: data.custAddress[0].AC_CTCODE,
        AC_PIN: data.custAddress[0].AC_PIN,
        AC_PANNO: data.AC_PANNO,
        AC_SALARYDIVISION_CODE: data.AC_SALARYDIVISION_CODE,
        AC_MOBILENO: data.AC_MOBILENO,
        AC_PHONE_RES: data.AC_PHONE_RES,
        AC_PHONE_OFFICE: data.AC_PHONE_OFFICE,
        AC_EMAILID: data.AC_EMAILID,
        AC_IS_RECOVERY: data.AC_IS_RECOVERY,
        TDS_REQUIRED: data.TDS_REQUIRED,
        SMS_REQUIRED: data.SMS_REQUIRED,
        IS_KYC_RECEIVED: data.IS_KYC_RECEIVED,
        FIN_YEAR: data.FIN_YEAR,
        SUBMIT_DATE: data.SUBMIT_DATE,
        FORM_TYPE: data.FORM_TYPE,
        TDS_RATE: data.TDS_RATE,
        TDS_LIMIT: data.TDS_LIMIT,
      })
    })
  }

  newCustomer(newCustomer) {
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.id = newCustomer;
      this.getCustomer(newCustomer);
    })

  }
  //temp address flag variable
  tempAddress: boolean = true;
  tempAsPermanent() {
    this.tempAddress = !this.tempAddress;
  }
  GuarantorTrue: boolean = false
  CoBorrowerTrue: boolean = false
  OpenLink() {
    this.GuarantorTrue = !this.GuarantorTrue
  }
  OpenCoBorr() {
    this.CoBorrowerTrue = !this.CoBorrowerTrue
  }

  ngAfterViewInit(): void {
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

    //set open date, appointed date and expiry date
    getSystemParaDate() {
      this.systemParameter.getFormData(1).subscribe(data => {
        this.angForm.patchValue({
          AC_OPDATE: data.CURRENT_DATE,
          DATE_APPOINTED: data.CURRENT_DATE,
          DATE_EXPIRY: data.CURRENT_DATE
        })
      })
    }
}