import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { PigmyAccountMasterService } from './pigmy-account-master.service';
// for dropdown
import { CastMasterService } from '../../../../shared/dropdownService/cast-master-dropdown.service';
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { OperationMasterDropdownService } from '../../../../shared/dropdownService/operation-master-dropdown.service';
import { categoryMasterService } from '../../../../shared/dropdownService/category-master-dropdown.service';
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { CustomerIdService } from '../customer-id/customer-id.service';
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
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
interface PigmyAccountMaster {
  AC_TYPE: string;
  AC_ACNOTYPE: string;
  AC_NAME: string;
  AC_NO: number;
  AC_CUSTID: number;
  AC_SHORT_NAME: string;
  REF_ACNO: string;
  AC_MEMBTYPE: string;
  AC_MEMBNO: string;
  AC_AGE: string;
  AC_OPDATE: string;
  AC_RENEW_DATE: string;
  AC_EXPDT: string;
  AC_OCODE: string;
  AC_CATG: string;
  AC_OPR_CODE: string;
  AC_INTCATA: string;
  AC_ADDFLAG: boolean
  AC_THONO: string;

  AC_TWARD: string;

  AC_TADDR: string;

  AC_TGALLI: string;

  AC_TAREA: string;

  AC_TCTCODE: string;

  AC_TPIN: string

  AC_MONTHS: string;
  AC_SCHMAMT: string;
  AGENT_ACTYPE: string;
  AGENT_ACNO: string;
  //minor and introducer
  AC_MINOR: boolean;
  AC_MBDATE: string;
  AC_GRDNAME: string;
  AC_GRDRELE: string;
  AC_INTROBRANCH: string;
  AC_INTROID: string;
  AC_INTRACNO: string;
  AC_INTRNAME: string;
  SIGNATURE_AUTHORITY: string;
  PG_COMM_TYPE: boolean;
}
@Component({
  selector: 'app-pigmy-account-master',
  templateUrl: './pigmy-account-master.component.html',
  styleUrls: ['./pigmy-account-master.component.scss'],
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
export class PigmyAccountMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() childMessage: string;
  @Output() public getUserData = new EventEmitter<string>();
  formSubmitted = false;
  //api 

  url = environment.base_url;

  // For reloading angular datatable after CRUD operation
  @ViewChild('modalLarge') modalLarge: ElementRef;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  dtExportOptions: any = {}
  newbtnShow: boolean = false;
  //Nominee variables
  multiNominee = [];
  nomineeIndex: number
  nomineeID
  nomineeShowButton: boolean = true
  nomineeUpdateShow: boolean = false
  jointACID: number
  jointIndex: number
  multiJointAC = [];
  jointShowButton: boolean = true
  jointUpdateShow: boolean = false
  //for modal
  showModalStatus: boolean = false;
  //title select variables

  introducerReq: boolean = false
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  pigmyAccountMaster: PigmyAccountMaster[];
  private dataSub: Subscription = null;
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  introducerACNo //account no for introducer
  //variable to get ID to update
  updateID: number = 0;
  page: number = 1;
  //filter variable
  filterData = {};
  counter = 1;
  obj: any;
  rowData = [];
  CastMasterDropdown: any[];
  OwnbranchMasterDropdown: any[];
  showDialog = false;
  SchemeCodeDropdownDropdown: any[];
  categoryMasterdropdown: any[];
  AgentScheme: any[];

  addType: string
  // acno
  schemeCodeNO
  //url to display document
  documentUrl = this.url + '/'
  //array of document of customer
  customerDoc = []

  @Input() visible: boolean;
  public config: any;
  StatementCodeDropdown: any[];
  intrestCategoryMaster: any[];
  schemeCode
  OperationMasterDropdown: any[];
  selectedOption = '3';
  cityMasterServiceDropdown: any[];
  IntrestCategoryMasterDropdown: any[];
  agentCode: any[];
  // isDisabled = true;

  //temp address flag variable
  tempAddress: boolean = true;
  Cust_ID: any[]
  // id: string = '';
  // jointID: string = '';
  //add required validation to attorney fields
  DATE_EXPIRY = false
  DATE_APPOINTED = false
  ATTERONEY_NAME = false
  nomineeTrue: boolean = false;
  //Scheme type variable
  schemeType: string = 'PG'
  agentSchemeCode: string = 'AG'

  JointAccountsTrue = false;
  PowerofAttorneyTrue = false;
  //variable for checkbox and radio button 
  isOperation: boolean = false
  joint_Cust_ID: any[] //customer id from idmaster
  dtdocumentOptions: any = {};

  // agentno
  datemax: string;
  AC_TYPE: boolean = false
  code: any = null
  id: any = null
  ngCategory: any = null
  ngOperation: any = null
  ngint_category: any = null
  agentno: any = null
  ngAgentCode: any = null
  ngCity: any = null
  ngNcity: any = null
  ngBranch: any = null
  jointID: any = null
  acno: any = null
  ngIntroducer: any = null
  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;


  constructor(private fb: FormBuilder,
    public categoryMasterService: categoryMasterService,
    public IntrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService,
    public OperationMasterDropdownService: OperationMasterDropdownService,
    public PigmyAccountMasterService: PigmyAccountMasterService,
    public CastMasterService: CastMasterService,
    public customerIdService: CustomerIdService,
    public cityMasterService: cityMasterService,
    private http: HttpClient,
    private schemeAccountNoService: SchemeAccountNoService,
    public OwnbranchMasterService: OwnbranchMasterService,
    public SchemeCodeDropdownService: SchemeCodeDropdownService,
    private customerID: CustomerIDMasterDropdownService,
    private systemParameter: SystemMasterParametersService,
    private datePipe: DatePipe,) {
    console.log('Saving Data with Input', this.childMessage)
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
    this.datemax = new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2);
  }



  ngOnInit(): void {
    this.getSystemParaDate() //function to set date
    this.createForm()
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
            this.url + '/pigmy-account-master',
            dataTableParameters
          ).subscribe(resp => {
            this.pigmyAccountMaster = resp.data;
            console.log('fetch', resp.data)
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
        // {
        //   title: 'PG Scheme Type',
        //   data: 'AC_ACNOTYPE'
        // },
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Agent Number',
          data: 'BANKACNO'
        },
        {
          title: 'Customer ID',
          data: 'AC_CUSTID'
        },
        {
          title: 'Member Name',
          data: 'AC_NAME'
        },
        // {
        //   title: 'A/c Short Name',
        //   data: 'AC_SHORT_NAME'
        // },

        {
          title: 'Manual Reference Number',
          data: 'REF_ACNO'
        },
        {
          title: 'Detail Address',
          data: 'AC_ADDR'
        },
        {
          title: 'City',
          data: 'AC_CTCODE'
        },
        // {
        //   title: 'Member Scheme',
        //   data: 'AC_MEMBTYPE'
        // },
        // {
        //   title: 'Member No',
        //   data: 'AC_MEMBNO'
        // },

        {
          title: 'Opening Date',
          data: 'AC_OPDATE'
        },
        // {
        //   title: 'Renewal Date',
        //   data: 'AC_RENEW_DATE'
        // },
        {
          title: 'Expiry Date',
          data: 'AC_EXPDT'
        },

        // {
        //   title: 'Category',
        //   data: 'AC_CATG'
        // },
        // {
        //   title: 'Operation',
        //   data: 'AC_OPR_CODE'
        // },
        // {
        //   title: 'Interest Category',
        //   data: 'AC_INTCATA'
        // },

        {
          title: 'Period',
          data: 'AC_MONTHS'
        },
        {
          title: 'Default Deposite Amount',
          data: 'AC_SCHMAMT'
        },
        // {
        //   title: 'Agent Scheme',
        //   data: 'AGENT_ACTYPE'
        // },
        {
          title: 'Agent Code',
          data: 'AGENT_ACNO'
        }, {
          title: 'Minor Details',
          data: 'AC_MINOR'
        },
        // {
        //   title: 'Birth Date',
        //   data: 'AC_MBDATE'
        // },
        // {
        //   title: 'Guardian Name',
        //   data: 'AC_GRDNAME'
        // },
        // {
        //   title: 'Relation',
        //   data: 'AC_GRDRELE'
        // },
        // {
        //   title: 'Branch',
        //   data: 'AC_INTROBRANCH'
        // },
        // {
        //   title: 'Account Type',
        //   data: 'AC_INTROID'
        // },
        // {
        //   title: 'Account Code',
        //   data: 'AC_INTRACNO'
        // },
        // {
        //   title: 'Name',
        //   data: 'AC_INTRNAME'
        // },
        // {
        //   title: 'Signature Authority',
        //   data: 'SIGNATURE_AUTHORITY'
        // },
        {
          title: 'Is Calculate Separate Pigmy Commission for Loan Against Collection',
          data: 'PG_COMM_TYPE'
        },

      ],
      dom: 'Blrtip',
    };

    ;
    this.runTimer();
    this.CastMasterService.getcastList().pipe(first()).subscribe(data => {

      this.CastMasterDropdown = data;
    })
    this.OwnbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {

      this.OwnbranchMasterDropdown = data;
    })
    this.SchemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      this.SchemeCodeDropdownDropdown = data;
    })
    this.cityMasterService.getcityList().pipe(first()).subscribe(data => {

      this.cityMasterServiceDropdown = data;
    })
    this.OperationMasterDropdownService.getOperationMasterList().pipe(first()).subscribe(data => {

      this.OperationMasterDropdown = data;
    })
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.joint_Cust_ID = data;
    })
    this.categoryMasterService.getcategoryList().pipe(first()).subscribe(data => {
      this.categoryMasterdropdown = data;
    })
    this.IntrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.IntrestCategoryMasterDropdown = data;
    })
    this.SchemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.schemeCode = data;
      this.code = this.schemeCode[0].value
    })
    this.SchemeCodeDropdownService.getSchemeCodeList(this.agentSchemeCode).pipe(first()).subscribe(data => {
      this.AgentScheme = data;
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
      AC_TYPE: ['', [Validators.required]],
      AC_ACNOTYPE: ['PG'],
      AC_NO: [''],
      AC_CUSTID: ['', [Validators.required, Validators.pattern]],
      AC_TITLE: [''],
      AC_NAME: [''],
      AC_SHORT_NAME: ['', [Validators.pattern, Validators.required]],
      REF_ACNO: ['', [Validators.pattern]],
      AC_MEMBTYPE: [''],
      AC_MEMBNO: [''],
      AC_OPDATE: ['', [Validators.required]],
      AC_RENEW_DATE: [''],
      AC_CAST: ['', [Validators.required]],
      AC_EXPDT: ['', [Validators.required]],
      AC_OCODE: ['', [Validators.required]],
      AC_CATG: ['', [Validators.required]],
      AC_OPR_CODE: ['', [Validators.required]],
      AC_INTCATA: ['', [Validators.required]],
      AC_PANNO: ['', [Validators.pattern]],
      AC_MONTHS: ['', [Validators.pattern, Validators.required]],
      AC_SCHMAMT: ['', [Validators.pattern, Validators.required]],
      AGENT_ACTYPE: ['', [Validators.required]],
      AGENT_ACNO: ['',],
      AC_HONO: ['', [Validators.pattern]],
      AC_WARD: ['', [Validators.pattern]],
      AC_GALLI: ['', [Validators.pattern]],
      AC_AREA: ['', [Validators.pattern]],
      AC_ADDR: [''],
      AC_CTCODE: ['', [Validators.required]],
      AC_TCTCODE: ['', [Validators.required]],
      AC_EMAIL: [''],
      AC_MOBNO: [''],
      AC_PHNO: [''],
      AC_PIN: ['', [Validators.pattern]],
      AC_ADDFLAG: [true],
      AC_ADDTYPE: ['P'],
      AC_THONO: ['', [Validators.pattern]],
      AC_TWARD: ['', [Validators.pattern]],
      AC_TGALLI: ['', [Validators.pattern]],
      AC_TAREA: ['', [Validators.pattern]],
      AC_TADDR: [''],
      AC_TPIN: ['', [Validators.pattern]],
      AC_PHONE_RES: ['', [Validators.pattern]],
      AC_PHONE_OFFICE: ['', [Validators.pattern]],


      //minor and introducer
      AC_MINOR: [''],
      AC_MBDATE: ['', []],
      AC_GRDNAME: ['', [Validators.pattern]],
      AC_GRDRELE: ['', [Validators.pattern]],
      AC_INTROBRANCH: ['', []],
      AC_INTROID: [''],
      AC_INTRACNO: [''],
      AC_INTRNAME: ['', [Validators.pattern]],
      SIGNATURE_AUTHORITY: ['', [Validators.pattern]],
      PG_COMM_TYPE: [''],
      //nominee controls (NOMINEELINK table)
      AC_NNAME: ['', [Validators.pattern]],
      AC_NRELA: ['', [Validators.pattern]],
      AC_NDATE: ['',],
      AGE: ['', [Validators.pattern, Validators.min(1), Validators.max(100)]],
      AC_NHONO: ['', [Validators.pattern]],
      AC_NWARD: ['', [Validators.pattern]],
      AC_NADDR: ['', [Validators.pattern]],
      AC_NGALLI: ['', [Validators.pattern]],
      AC_NAREA: ['', [Validators.pattern]],
      AC_NCTCODE: ['', [Validators.pattern]],
      AC_NPIN: ['', [Validators.pattern]],

      //joint ac
      JOINT_AC_CUSTID: [''],
      JOINT_ACNAME: ['', [Validators.pattern]],
      OPERATOR: [true],

    });
    let sysdate = new Date()
    let sysDate = this.datePipe.transform(sysdate, "yyyy-MM-dd")
    this.angForm.patchValue({
      'AC_NDATE': sysDate,
    })
  }


  OpenLink(val) {
    if (val == 1) {
      this.nomineeTrue = !this.nomineeTrue;
      this.JointAccountsTrue = false;
    }
    if (val == 2) {
      this.JointAccountsTrue = !this.JointAccountsTrue;
      this.nomineeTrue = false;
    }
  }
  //show customer modal
  showModal() {

    this.showModalStatus = true;
  }

  addNewCustomer(newCustomer) {
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.id = newCustomer;
      this.getCustomer(newCustomer);
    })
  }
  getExpiryDate() {
    let months = this.angForm.controls['AC_MONTHS'].value
    if (this.angForm.controls['AC_RENEW_DATE'].value != '') {
      var expiryDt = new Date(this.angForm.controls['AC_RENEW_DATE'].value)
      var year = expiryDt.getFullYear();
      var month = new Date(expiryDt).getMonth();
      var day = new Date(expiryDt).getDate();
      var expiry = month + Number(months)
      var date = new Date(year, expiry, day);
      var expiryDate = this.datePipe.transform(date, "dd-MM-yyyy")
      this.angForm.patchValue({
        AC_EXPDT: expiryDate
      })
    }
    else {
      var expiryDt = new Date(this.angForm.controls['AC_OPDATE'].value)
      var year = expiryDt.getFullYear();
      var month = new Date(expiryDt).getMonth();
      var day = new Date(expiryDt).getDate();
      var expiry = month + Number(months)
      var date = new Date(year, expiry, day);
      var expiryDate = this.datePipe.transform(date, "dd-MM-yyyy")
      this.angForm.patchValue({
        AC_EXPDT: expiryDate
      })
    }
  }

  //function to toggle temp address field
  tempAsPermanent() {
    this.tempAddress = !this.tempAddress;
    this.angForm.controls['AC_THONO'].reset()
    this.angForm.controls['AC_TWARD'].reset()
    this.angForm.controls['AC_TADDR'].reset()
    this.angForm.controls['AC_TGALLI'].reset()
    this.angForm.controls['AC_TAREA'].reset()
    this.angForm.controls['AC_TCTCODE'].reset()
    this.angForm.controls['AC_TPIN'].reset()
  }
  //calculate age for minor details
  ageCalculator(birthDate) {
    let showAge: number
    if (birthDate) {
      const convertAge = new Date(birthDate);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      if (showAge <= 18) {
        this.angForm.controls['AC_MINOR'].setValue(true);
        this.angForm.controls['AC_GRDNAME'].enable();
        this.angForm.controls['AC_GRDRELE'].enable();
        this.introducerReq = true
      }
      else if (showAge > 18) {
        this.angForm.controls['AC_MINOR'].setValue(false);
        this.angForm.controls['AC_GRDNAME'].disable();
        this.angForm.controls['AC_GRDRELE'].disable();
        this.introducerReq = false
      }
    }
  }

  //set open date, appointed date and expiry date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      console.log('Syspara date', data)
      this.angForm.patchValue({
        AC_OPDATE: moment(data.CURRENT_DATE).format('DD/MM/YYYY'),
      })
      if (data.ON_LINE === true) {
        this.angForm.controls['AC_OPDATE'].disable()
      } else {
        this.angForm.controls['AC_OPDATE'].enable()
      }
    })
  }

  //function to get existing customer data according selection
  getCustomer(id) {

    this.customerIdService.getFormData(id).subscribe(data => {
      this.customerDoc = data.custdocument
      this.tempAddress = data.custAddress[0].AC_ADDFLAG
      this.ageCalculator(data.AC_BIRTH_DT);
      this.angForm.patchValue({
        AC_CUSTID: id.toString(),
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_MEMBTYPE: data?.AC_MEMBTYPE,
        AC_MEMBNO: data?.AC_MEMBNO,
        AC_CAST: data.castMaster.NAME,
        AC_OCODE: data.occupMaster.NAME,
        AC_BIRTH_DT: data.AC_BIRTH_DT,
        AC_MBDATE: data.AC_BIRTH_DT,
        AC_PANNO: data.AC_PANNO,
        AC_IS_RECOVERY: data.AC_IS_RECOVERY,

        AC_ADDFLAG: data.custAddress[0]?.AC_ADDFLAG,
        AC_HONO: data.custAddress[0]?.AC_HONO,
        AC_WARD: data.custAddress[0]?.AC_WARD,
        AC_ADDR: data.custAddress[0]?.AC_ADDR,
        AC_GALLI: data.custAddress[0]?.AC_GALLI,
        AC_AREA: data.custAddress[0]?.AC_AREA,
        AC_CTCODE: data.custAddress[0].city?.CITY_NAME,
        AC_PIN: data.custAddress[0]?.AC_PIN,
        AC_MOBNO: data.custAddress[0]?.AC_MOBILENO,
        AC_PHNO: data.custAddress[0]?.AC_PHONE_RES,
        AC_EMAIL: data.custAddress[0]?.AC_EMAILID,

      })
      if (data.custAddress[0].AC_ADDFLAG == false && data.custAddress[0].AC_ADDTYPE == 'P') {
        this.angForm.patchValue({
          AC_THONO: data.custAddress[1]?.AC_HONO,
          AC_TWARD: data.custAddress[1]?.AC_WARD,
          AC_TADDR: data.custAddress[1]?.AC_ADDR,
          AC_TGALLI: data.custAddress[1]?.AC_GALLI,
          AC_TAREA: data.custAddress[1]?.AC_AREA,
          AC_TCTCODE: data.custAddress[1]?.AC_CTCODE,
          AC_TPIN: data.custAddress[1]?.AC_PIN,
        })
      }
    })
  }

  getBranch() {
    this.getIntroducer()
  }

  // obj: any
  getschemename: any

  getIntro(event) {
    console.log(event)
    // this.getscheme = event.id
    this.getschemename = event.name
    this.getIntroducer()
  }

  //get account no according scheme for introducer
  getIntroducer() {
    this.obj = [this.acno, this.ngBranch]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;
    }
  }


  //get account no according scheme for  pigmy agent
  getAgentAC(event) {
    debugger
    console.log(event)
    switch ('AG') {
      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList2(event.value).pipe(first()).subscribe(data => {
          this.agentCode = data;
        })
        break;
    }
  }

  //get introducer name according account no
  getIntroducerName(value: any) {
    this.angForm.patchValue({
      AC_INTRNAME: value.name
    })
  }

  getScheme(value) {
    this.schemeCodeNO = value.name
  }
  // Method to insert data into database through NestJS
  submit(event) {
    let redate
    event.preventDefault();
    this.formSubmitted = true;

    if (this.angForm.valid) {
      const formVal = this.angForm.value;
      let schecode
      this.schemeCode.forEach(async (element) => {
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
      //get bank code and branch code from session
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let branchCode = result.branch.id;
      let bankCode = Number(result.branch.syspara.BANK_CODE)
      let opdate = (document.getElementById("AC_OPDATE") as HTMLInputElement).value;


      const dataToSend = {
        'branchCode': branchCode,
        'bankCode': bankCode,
        'schemeCode': schecode,
        'AC_TYPE': formVal.AC_TYPE,
        'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
        'AC_CUSTID': formVal.AC_CUSTID,
        'AC_SHORT_NAME': formVal.AC_SHORT_NAME,
        'REF_ACNO': formVal.REF_ACNO,
        'AC_MEMBTYPE': formVal.AC_MEMBTYPE,
        'AC_MEMBNO': formVal.AC_MEMBNO,
        'AC_OPDATE': opdate,
        'AC_RENEW_DATE': (formVal.AC_RENEW_DATE == '' || formVal.AC_RENEW_DATE == 'Invalid date') ? redate = '' : redate = moment(formVal.AC_RENEW_DATE).format('DD/MM/YYYY'),
        'AC_EXPDT': formVal.AC_EXPDT,
        'AC_OCODE': formVal.AC_OCODE,
        'AC_CATG': parseInt(formVal.AC_CATG),
        'AC_OPR_CODE': parseInt(formVal.AC_OPR_CODE),
        'AC_INTCATA': parseInt(formVal.AC_INTCATA),
        'AC_MONTHS': formVal.AC_MONTHS,
        'AC_SCHMAMT': formVal.AC_SCHMAMT,
        'AGENT_ACTYPE': formVal.AGENT_ACTYPE,
        'AGENT_ACNO': formVal.AGENT_ACNO,
        //temp address 
        AC_ADDFLAG: formVal.AC_ADDFLAG,
        AC_ADDTYPE: this.addType,
        AC_THONO: formVal.AC_THONO,
        AC_TWARD: formVal.AC_TWARD,
        AC_TADDR: formVal.AC_TADDR,
        AC_TGALLI: formVal.AC_TGALLI,
        AC_TAREA: formVal.AC_TAREA,
        AC_TCTCODE: formVal.AC_TCTCODE,
        AC_TPIN: formVal.AC_TPIN,

        //minor and introducer
        'AC_MINOR': formVal.AC_MINOR,
        'AC_MBDATE': formVal.AC_MBDATE,
        'AC_GRDNAME': formVal.AC_GRDNAME,
        'AC_GRDRELE': formVal.AC_GRDRELE,
        'AC_INTROBRANCH': formVal.AC_INTROBRANCH,
        'AC_INTROID': formVal.AC_INTROID,
        'AC_INTRACNO': formVal.AC_INTRACNO,
        'AC_INTRNAME': formVal.AC_INTRNAME,
        'SIGNATURE_AUTHORITY': formVal.SIGNATURE_AUTHORITY,
        'PG_COMM_TYPE': formVal.PG_COMM_TYPE,
        //Nominee 
        'NomineeData': this.multiNominee,
        //Joint Account
        'JointAccountData': this.multiJointAC,

      }
      console.log(dataToSend);
      this.PigmyAccountMasterService.postData(dataToSend).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Account Created successfully!',
          html:
            '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
            '<b>ACCOUNT NO : </b>' + data.BANKACNO + '<br>'
        })
        this.formSubmitted = false;
        // to reload after insertion of data
        this.rerender();
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });

      }, (error) => {
        console.log(error)
      })
      //To clear form
      this.resetForm();
      this.multiNominee = []
      this.multiJointAC = []
      this.customerDoc = []
    }
  }
  //Method for append data into fields
  editClickHandler(id) {
    let redate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.PigmyAccountMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      this.multiNominee = data.nomineeDetails
      //get joint accounts to edit
      this.multiJointAC = data.jointAccounts
      this.angForm.patchValue({

        'AC_ACNOTYPE:': data.AC_ACNOTYPE,
        AC_TYPE: data.AC_TYPE,
        'AC_NO': data.AC_NO,
        'AC_SHORT_NAME': data.AC_SHORT_NAME,

        'REF_ACNO': data.REF_ACNO,
        'AC_OPDATE': data.AC_OPDATE,
        'AC_RENEW_DATE': (data.AC_RENEW_DATE == 'Invalid date' || data.AC_RENEW_DATE == '' || data.AC_RENEW_DATE == null) ? redate = '' : redate = data.AC_RENEW_DATE,
        AC_MEMBTYPE: data.AC_MEMBTYPE,
        AC_MEMBNO: data.AC_MEMBNO,
        'AC_EXPDT': data.AC_EXPDT,
        'AC_OCODE': data.AC_OCODE,
        'AC_CATG': data.AC_CATG.toString(),
        AC_OPR_CODE: data.AC_OPR_CODE.toString(),
        AC_INTCATA: data.AC_INTCATA.toString(),

        'AC_MONTHS': data.AC_MONTHS,
        'AC_SCHMAMT': data.AC_SCHMAMT,
        AGENT_ACTYPE: data.AGENT_ACTYPE,
        AGENT_ACNO: data.AGENT_ACNO,

        //minor and introducer
        'AC_MINOR': data.AC_MINOR,
        'AC_MBDATE': data.AC_MBDATE,
        'AC_GRDNAME': data.AC_GRDNAME,
        'AC_GRDRELE': data.AC_GRDRELE,
        'AC_INTROBRANCH': data.AC_INTROBRANCH,
        'AC_INTROID': data.AC_INTROID,
        'AC_INTRACNO': data.AC_INTRACNO,
        'AC_INTRNAME': data.AC_INTRNAME,
        'SIGNATURE_AUTHORITY': data.SIGNATURE_AUTHORITY,
        'PG_COMM_TYPE': data.PG_COMM_TYPE,
        //nominee controls (NOMINEELINK table)
        'AC_NNAME': data.AC_NNAME,
        'AC_NRELA': data.AC_NRELA,
        'AC_NDATE': data.AC_NDATE,
        'AGE': data.AGE,
        'ADDR1': data.ADDR1,
        'ADDR2': data.ADDR2,
        'ADDR3': data.ADDR3,
        'CTCODE': data.CTCODE,
        'PIN': data.PIN,
      })
    })
  }

  //Method for update data 
  updateData() {
    let redate
    let data = this.angForm.value;
    if (data.AC_ADDFLAG == true) {
      this.addType = 'P'
    }
    else if (data.AC_ADDFLAG == false) {
      this.addType = 'T'
    }
    if (this.angForm.controls['AC_TCTCODE'].value == "") {
      data['AC_TCTCODE'] = null
    }
    data['AC_ADDTYPE'] = this.addType
    data['NomineeData'] = this.multiNominee
    data['JointAccountData'] = this.multiJointAC
    data['id'] = this.updateID;
    (data.AC_RENEW_DATE == 'Invalid date' || data.AC_RENEW_DATE == '' || data.AC_RENEW_DATE == null) ? (redate = '', data['AC_RENEW_DATE'] = redate) : (redate = data.AC_RENEW_DATE, data['AC_RENEW_DATE'] = moment(redate).format('DD/MM/YYYY')),
      this.PigmyAccountMasterService.updateData(data).subscribe(() => {
        Swal.fire('Success!', 'Record Updated Successfully !', 'success');
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
        this.multiNominee = []
        this.multiJointAC = []
        this.customerDoc = []
        this.resetForm();
      })
  }
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Pigmy Account master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.PigmyAccountMasterService.deleteData(id).subscribe(data1 => {
          this.pigmyAccountMaster = data1;
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        }), (error) => {
          console.log(error)
        }
        // to reload after delete of data
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
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
  // Reset Function
  resetForm() {
    this.createForm();
    this.getSystemParaDate() //function to set date
    this.JointAccountsTrue = false
    this.nomineeTrue = false
    this.tempAddress = true
  }
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

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.multiNominee = []
    this.multiJointAC = []
    this.customerDoc = []
    this.tempAddress = true
    this.resetForm();
  }

  //Joint ac
  jointAccount($event) {
    if ($event.target.checked) {
      this.JointAccountsTrue = true
    } else {
      this.JointAccountsTrue = false
    }
  }



  //nominee
  nominee($event) {
    if ($event.target.checked) {
      this.nomineeTrue = true
    } else {
      this.nomineeTrue = false
    }
  }

  NbirthDate: any
  cityName: boolean = false
  //Nominee
  addNominee() {
    const formVal = this.angForm.value;
    let date1 = moment(formVal.AC_NDATE).format('DD/MM/YYYY');
    this.cityName = true
    this.NbirthDate = date1;
    var object = {
      AC_NNAME: formVal.AC_NNAME,
      AC_NRELA: formVal.AC_NRELA,
      AC_NDATE: this.NbirthDate,
      AGE: formVal.AGE,
      AC_NHONO: formVal.AC_NHONO,
      AC_NWARD: formVal.AC_NWARD,
      AC_NADDR: formVal.AC_NADDR,
      AC_NGALLI: formVal.AC_NGALLI,
      AC_NAREA: formVal.AC_NAREA,
      AC_NCTCODE: formVal.AC_NCTCODE.id,
      AC_NPIN: formVal.AC_NPIN,
      AC_CITYNAME: formVal.AC_NCTCODE.CITY_NAME
    }

    if (formVal.AC_NNAME == "" || formVal.AC_NNAME == null) {
      Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
    }
    else if (formVal.AC_NNAME != "") {
      if (formVal.AC_NRELA == "" || formVal.AC_NRELA == null) {
        Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
      } else if (formVal.AC_NRELA != "") {
        if (formVal.AC_NDATE == "" || formVal.AC_NDATE == null) {
          Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
        } else if (formVal.AC_NCTCODE != "") {
          if (formVal.AC_NCTCODE.id == "" || formVal.AC_NCTCODE.id == null) {
            Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
          } else {
            if (this.multiNominee.find(ob => ob['AC_NNAME'].toUpperCase() === formVal.AC_NNAME.toUpperCase())) {
              Swal.fire('', 'This Nominee is Already Exists!', 'error');

            } else {
              this.multiNominee.push(object);
            }
          }
        }
      }
      else {
        this.multiNominee.push(object);
      }
    }
    else {
      this.multiNominee.push(object);
    }
    this.resetNominee()
  }
  ngnomineedate: any
  editNominee(id) {
    this.nomineeIndex = id
    this.nomineeID = this.multiNominee[id].id;
    this.nomineeTrue = true
    this.nomineeShowButton = false;
    this.nomineeUpdateShow = true;
    // this.ngNcity = Number(this.multiNominee[id].AC_NCTCODE)
    // let date1 = moment(this.multiNominee[id].AC_NDATE).format('DD/MM/YYYY');

    // this.NbirthDate = date1;


    this.ngnomineedate = this.multiNominee[id].AC_NDATE,
      this.angForm.patchValue({
        AC_NNAME: this.multiNominee[id].AC_NNAME,
        AC_NRELA: this.multiNominee[id].AC_NRELA,
        // AC_NDATE: this.multiNominee[id].AC_NDATE,
        AGE: this.multiNominee[id].AGE,
        AC_NHONO: this.multiNominee[id].AC_NHONO,
        AC_NWARD: this.multiNominee[id].AC_NWARD,
        AC_NADDR: this.multiNominee[id].AC_NADDR,
        AC_NGALLI: this.multiNominee[id].AC_NGALLI,
        AC_NAREA: this.multiNominee[id].AC_NAREA,
        AC_NCTCODE: this.multiNominee[id].AC_CITYNAME,
        AC_NPIN: this.multiNominee[id].AC_NPIN,
        // AC_NCTCODE: this.multiNominee[id].AC_CITYNAME,
      })
  }

  updateNominee() {
    let index = this.nomineeIndex;
    this.nomineeShowButton = true;
    this.nomineeUpdateShow = false;
    const formVal = this.angForm.value;
    let date1 = moment(formVal.AC_NDATE).format('DD/MM/YYYY');

    this.NbirthDate = date1;
    var object = {
      AC_NNAME: formVal.AC_NNAME,
      AC_NRELA: formVal.AC_NRELA,
      AC_NDATE: this.NbirthDate,
      AGE: formVal.AGE,
      AC_NHONO: formVal.AC_NHONO,
      AC_NWARD: formVal.AC_NWARD,
      AC_NADDR: formVal.AC_NADDR,
      AC_NGALLI: formVal.AC_NGALLI,
      AC_NAREA: formVal.AC_NAREA,
      AC_NCTCODE: formVal.AC_NCTCODE.id,
      AC_NPIN: formVal.AC_NPIN,
      AC_CITYNAME: formVal.AC_NCTCODE.CITY_NAME,
      id: this.nomineeID
    }
    if (formVal.AC_NNAME == "" || formVal.AC_NNAME == null) {
      Swal.fire("Please Insert Mandatory Record For Nominee");
    }
    else if (formVal.AC_NNAME != "") {
      if (formVal.AC_NRELA == "" || formVal.AC_NRELA == null) {
        Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
      } else if (formVal.AC_NRELA != "") {
        if (formVal.AC_NDATE == "" || formVal.AC_NDATE == null) {
          Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
        } else if (formVal.AC_NCTCODE != "") {
          if (formVal.AC_NCTCODE == "" || formVal.AC_NCTCODE == null) {
            Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
          }
          else {
            this.multiNominee[index] = object;
          }
        }
      }
      else {
        this.multiNominee[index] = object;
      }

    }
    else {
      this.multiNominee[index] = object;
    }
    this.resetNominee()
  }

  delNominee(id) {
    this.multiNominee.splice(id, 1)
  }

  resetNominee() {
    this.angForm.controls['AC_NNAME'].reset();
    this.angForm.controls['AC_NRELA'].reset();
    this.angForm.controls['AC_NDATE'].reset();
    this.angForm.controls['AGE'].reset();
    this.angForm.controls['AC_NHONO'].reset();
    this.angForm.controls['AC_NWARD'].reset();
    this.angForm.controls['AC_NADDR'].reset();
    this.angForm.controls['AC_NGALLI'].reset();
    this.angForm.controls['AC_NAREA'].reset();
    this.angForm.controls['AC_NCTCODE'].reset();
    this.angForm.controls['AC_NPIN'].reset();
  }
  //Joint ac
  // jointAccount($event) {
  //   if ($event.target.checked) {
  //     this.JointAccountsTrue = true
  //   } else {
  //     this.JointAccountsTrue = false
  //   }
  // }
  joint
  getJointCustomer(event) {
    debugger
    console.log('get joint cus', event.name)
    this.joint = event.name
    this.customerIdService.getFormData(event.value).subscribe(data => {
      this.angForm.patchValue({
        JOINT_ACNAME: data.AC_NAME
      })
    })
  }


  addJointAcccount() {
    debugger
    const formVal = this.angForm.value;
    console.log('add joint', formVal)
    let value
    if (formVal.OPERATOR == true) {
      value = 'Yes'
    } else {
      value = 'No'
    }
    var object = {
      JOINT_AC_CUSTID: this.joint,
      JOINT_ACNAME: formVal.JOINT_ACNAME,
      OPERATOR: value,
    }
    console.log('object.JOINT_AC_CUSTID', object.JOINT_AC_CUSTID)
    if (object.JOINT_AC_CUSTID != undefined) {
      if (this.id != this.jointID) {
        if (this.multiJointAC.length == 0) {
          this.multiJointAC.push(object);
        }
        else {
          if (this.multiJointAC.find(ob => ob['JOINT_AC_CUSTID'] === this.joint)) {
            Swal.fire('', 'This Customer is Already Joint Account Holder', 'error');
          }
          else {
            this.multiJointAC.push(object);
          }
        }
      }
      else {
        Swal.fire('', 'Please Select Differet Customer Id!', 'warning');
      }
    } else {
      Swal.fire('', 'Please Select Customer Id!', 'warning');
    }
    this.resetJointAC()
  }

  // addJointAcccount() {
  //   let value
  //   const formVal = this.angForm.value;
  //   console.log('add joint', formVal)
  //   if (formVal.OPERATOR == true) {
  //     value = 'Yes'
  //   } else {
  //     value = 'No'
  //   }
  //   var object = {
  //     JOINT_AC_CUSTID: formVal.JOINT_AC_CUSTID,
  //     JOINT_ACNAME: formVal.JOINT_ACNAME,
  //     OPERATOR: value
  //   }
  //   if (object.JOINT_AC_CUSTID != undefined) {
  //     if (this.newcustid != this.jointID) {
  //       if (this.multiJointAC.length == 0) {
  //         this.multiJointAC.push(object);
  //       }
  //       else {
  //         if (this.multiJointAC.find(ob => ob['JOINT_AC_CUSTID'] === formVal.JOINT_AC_CUSTID)) {
  //           Swal.fire("This Customer is Already Joint Account Holder", "error");
  //         }
  //         else {
  //           this.multiJointAC.push(object);
  //         }
  //       }
  //     }
  //     else {
  //       Swal.fire("Please Select Different Customer id", "error");
  //     }
  //   } else {
  //     Swal.fire("Please Select Customer Id", "error");
  //   }
  //   this.resetJointAC()
  // }


  editJointAc(id) {
    this.jointIndex = id
    this.jointACID = this.multiJointAC[id].id;
    this.JointAccountsTrue = true
    this.jointShowButton = false;
    this.jointUpdateShow = true;
    this.angForm.patchValue({
      JOINT_AC_CUSTID: this.multiJointAC[id].JOINT_AC_CUSTID.toString(),
      JOINT_ACNAME: this.multiJointAC[id].JOINT_ACNAME,
      OPERATOR: this.multiJointAC[id].OPERATOR
    })
  }

  updateJointAcccount() {
    let index = this.jointIndex;
    this.jointShowButton = true;
    this.jointUpdateShow = false;
    const formVal = this.angForm.value;
    var object = {
      JOINT_AC_CUSTID: formVal.JOINT_AC_CUSTID,
      JOINT_ACNAME: formVal.JOINT_ACNAME,
      OPERATOR: formVal.OPERATOR,
      id: this.jointACID
    }
    if (object.JOINT_AC_CUSTID != undefined) {
      if (this.id != this.jointID) {
        if (this.multiJointAC.length == 0) {
          this.multiJointAC[index] = object
        }
        else {
          if (this.multiJointAC.find(ob => ob['JOINT_AC_CUSTID'] === formVal.JOINT_AC_CUSTID)) {
            Swal.fire("This Customer is Already Exists", "error");
          }
          else {
            this.multiJointAC[index] = object
          }
        }
      }
      else {
        Swal.fire("Please Select Different Customer id", "error");
      }
    } else {
      Swal.fire("Please Select Customer Id", "error");
    }
    this.resetJointAC()
  }


  delJointAc(id) {
    this.multiJointAC.splice(id, 1)
  }

  resetJointAC() {
    this.jointID = null
    this.angForm.controls['JOINT_AC_CUSTID'].reset();
    this.angForm.controls['JOINT_ACNAME'].reset();
    this.getSystemParaDate()
  }

  @ViewChild('ctdTabset') ctdTabset;
  switchNgBTab(id: string) {
    this.ctdTabset.select(id);
  }
  selectedImagePreview: any;
  viewImagePreview(ele, id) {
    this.selectedImagePreview = id;
  }

  //approve account
  Approve() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.PigmyAccountMasterService.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Saving Account approved successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();

      this.getUserData.emit('welcome to stackoverflow!');
    }, err => {
      console.log('something is wrong');
    })
  }


  //reject account
  reject() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.PigmyAccountMasterService.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Saving Account rejected successfully',
        'success'
      );

      var button = document.getElementById('triggerhide');
      button.click();
    }, err => {
      console.log('something is wrong');
    })
  }
}



