import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
//animation
import { animate, style, transition, trigger } from '@angular/animations';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
// Service File For Handling CRUD Operation
import { CurrentAccountMasterService } from './current-account-master.service'
//Service file of dropdown
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { CustomerIdService } from '../customer-id/customer-id.service';
import { categoryMasterService } from '../../../../shared/dropdownService/category-master-dropdown.service';
import { DirectorMasterDropdownService } from '../../../../shared/dropdownService/director-master-dropdown.service'
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { OperationMasterDropdownService } from '../../../../shared/dropdownService/operation-master-dropdown.service'
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service'
import { MinimumBalanceMasterDropdownService } from '../../../../shared/dropdownService/minimum-balance-master-dropdown.service'
import { environment } from '../../../../../environments/environment'
import { first } from 'rxjs/operators';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import * as moment from 'moment';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface CurrentAccountMaster {
  AC_ACNOTYPE: string
  AC_TYPE: string
  AC_PROPRITOR_NAME: string
  AC_NO: number
  AC_CATG: string
  AC_NAME: string
  AC_BALCATG: string
  AC_OPR_CODE: number
  AC_CUSTID: number
  AC_INTCATA: string
  AC_OPDATE: Date
  AC_SCHMAMT: string
  //address
  AC_ADDFLAG: boolean
  AC_THONO: string;
  AC_TWARD: string;
  AC_TADDR: string;
  AC_TGALLI: string;
  AC_TAREA: string;
  AC_TCTCODE: number;
  AC_TPIN: number
  //minor and introducer
  // AC_MINOR: boolean
  // AC_MBDATE: Date
  // AC_GRDNAME: string
  // AC_GRDRELE: string
  AC_INTROBRANCH: string
  AC_INTROID: string
  AC_INTRACNO: string
  AC_INTRNAME: string
  SIGNATURE_AUTHORITY: string
  BANKACNO: number
}

@Component({
  selector: 'app-current-account-master',
  templateUrl: './current-account-master.component.html',
  styleUrls: ['./current-account-master.component.scss'],
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

export class CurrentAccountMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() childMessage: string;
  @Output() public getUserData = new EventEmitter<string>();
  formSubmitted = false;
  //api 
  url = environment.base_url;

  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
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
  // Variables for hide/show add and update and new button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  openingDate: any = null
  AC_TYPE: boolean = false
  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};

  addType: string

  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  //display code according choice
  nomineeTrue: boolean = false;
  JointAccountsTrue: boolean = false;
  PowerofAttorneyTrue: boolean = false;

  // Store data from backend
  currentAccountMaster: CurrentAccountMaster[];

  //url to display document
  documentUrl = this.url + '/'
  //array of document of customer
  customerDoc = []
  schemeCode

  //introducer variables
  // acno: any
  introducerReq: boolean = false
  //temp address flag variable
  tempAddress: boolean = true;
  //nominee, joint ac and attorney variables 
  nomineeID: number
  nomineeIndex: number
  jointACID: number
  jointIndex: number
  attorneyID: number
  attorneyIndex: number
  multiNominee = [];
  multiJointAC = [];
  multiAttorney = [];
  nomineeShowButton: boolean = true
  nomineeUpdateShow: boolean = false
  jointShowButton: boolean = true
  jointUpdateShow: boolean = false
  attorneyShowButton: boolean = true
  attorneyUpdateShow: boolean = false
  //add required validation to attorney fields
  DATE_EXPIRY = false
  DATE_APPOINTED = false
  ATTERONEY_NAME = false

  //Scheme type variable
  schemeType: string = 'CA'
  //Dropdown options
  scheme //scheme code from schemast(S_ACNOTYPE)
  Cust_ID: any[] //customer id from idmaster
  joint_Cust_ID: any[] //customer id from idmaster
  category: any[] //from category master
  city //city from customer id from idmaster
  cast: string // customer id from idmaster
  occupation: string // customer id from idmaster
  operation// opeartion from operation master
  bal_category// balance category from minimun balance master
  int_category// interest category from interest category master
  director: any[]//from directormaster
  branch_code: any[]//from ownbranchmaster
  allScheme //account type for introducer
  introducerACNo //account no for introducer
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  id: string = '';
  // jointID: string = '';
  private dataSub: Subscription = null;
  datemax: string;
  obj: any
  // bsValue = new Date();
  getschemename: any
  selectedValue: any = null
  newcustid: any = null
  ngCategory: any = null
  ngOccupation: any = null
  ngBalCategory: any = null
  ngIntCategory: any = null
  ngCity: any = null
  code: any = null
  acno: any = null
  ngIntroducer: any = null
  Ncity: any //city from customer id from idmaster
  ngNcity: any = null
  jointID: any = null
  selectedImagePreview: any;
  maxDate: Date;
  minDate: Date;

  @ViewChild('ctdTabset') ctdTabset;
  public visible = false;
  public visibleAnimate = false;


  constructor(
    private http: HttpClient,
    private currentAccountMasterService: CurrentAccountMasterService,
    private customerID: CustomerIDMasterDropdownService,
    private customerIdService: CustomerIdService,
    private categoryMasterService: categoryMasterService,
    private directorMasterDropdownService: DirectorMasterDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,
    private cityMasterService: cityMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private operationMasterDropdownService: OperationMasterDropdownService,
    private intrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService,
    private minimumBalanceMasterDropdownService: MinimumBalanceMasterDropdownService,
    private systemParameter: SystemMasterParametersService,
    private schemeAccountNoService: SchemeAccountNoService,
    private fb: FormBuilder) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
    this.minDate.setDate(this.minDate.getDate());
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
    this.datemax = new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2);
  }

  ngOnInit(): void {
    this.getSystemParaDate() //function to set date
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
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;

        dataTableParameters['branchCode'] = branchCode;
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/current-account-master',
            dataTableParameters
          ).subscribe(resp => {
            this.currentAccountMaster = resp.data;
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
          title: 'Action'
        },
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Account Number',
          data: ' BANKACNO'
        },
        {
          title: 'Customer ID',
          data: 'AC_CUSTID'
        },
        {
          title: 'Detail Address',
          data: 'AC_ADDR'
        },
        {
          title: 'City',
          data: 'AC_CTCODE'
        },
        {
          title: 'Proprietor Name',
          data: 'AC_PROPRITOR_NAME'
        },
        {
          title: 'Opening Date',
          data: 'AC_OPDATE'
        },
        {
          title: 'Manual Reference Number',
          data: 'REF_ACNO'
        },
      ],
      dom: 'Blrtip',
    };
    this.runTimer();
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.joint_Cust_ID = data;
    })
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data;
      this.selectedValue = this.scheme[0].value
    })
    this.categoryMasterService.getcategoryList().pipe(first()).subscribe(data => {
      this.category = data;
    })
    this.directorMasterDropdownService.getDirectorMasterList().pipe(first()).subscribe(data => {
      this.director = data;
    })
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })
    this.cityMasterService.getcityList().pipe(first()).subscribe(data => {
      this.city = data;
      this.Ncity = data;
    })
    this.operationMasterDropdownService.getOperationMasterList().pipe(first()).subscribe(data => {
      this.operation = data;
    })
    this.minimumBalanceMasterDropdownService.getMinimumBalanceMasterList().pipe(first()).subscribe(data => {
      this.bal_category = data;
    })
    this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.int_category = data;
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.allScheme = data;
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
  //function to get new customer data
  addNewCustomer(newCustomer) {
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.id = newCustomer;
      this.getCustomer(newCustomer);
    })
  }

  customer(event) {

    this.getCustomer(event.value);
    this.currentAccountMasterService.getData().subscribe(data => {
      if (data?.length == 0) {
        this.getCustomer(event.value);
      }
      else {
        if (data.find(data => data['AC_TYPE'] == this.selectedValue && data['AC_CUSTID'] == event.value && (data['AC_CLOSEDT'] == '' || data['AC_CLOSEDT'] == null))) {

          Swal.fire({
            icon: 'info',
            title: 'Current Account Already Exists For This Scheme',
          })
          //  this.resetForm()
          event.id = null
          this.newcustid = null
          this.newcustid = ''
          this.angForm.controls['AC_CUSTID'].reset()

        } else {
          this.getCustomer(event.value);
        }
      }
    })
  }

  //function to get existing customer data according selection
  getCustomer(id) {

    this.customerIdService.getFormData(id).subscribe(data => {
      this.customerDoc = data.custdocument
      this.tempAddress = data.custAddress[0].AC_ADDFLAG
      if (data.castMaster == null) {
        data.castMaster = ""
      }
      if (data.occupMaster == null) {
        data.occupMaster = ""
      }
      this.newcustid = data.id
      this.angForm.patchValue({
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_MEMBTYPE: data.AC_MEMBTYPE,
        AC_MEMBNO: data.AC_MEMBNO,
        AC_CAST: data.castMaster.NAME,
        AC_OCODE: data.occupMaster.NAME,
        AC_BIRTH_DT: data.AC_BIRTH_DT,
        AC_MOBNO: data.AC_MOBILENO,
        AC_PHNO: data.AC_PHONE_RES,
        AC_EMAIL: data.AC_EMAILID,
        AC_PANNO: data.AC_PANNO,
      })
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
      this.ngCity = temp?.city.id,
        this.angForm.patchValue({
          AC_THONO: temp?.AC_HONO,
          AC_TWARD: temp?.AC_WARD,
          AC_TADDR: temp?.AC_ADDR,
          AC_TGALLI: temp?.AC_GALLI,
          AC_TAREA: temp?.AC_AREA,
          AC_TPIN: temp?.AC_PIN,
        })
    })
    this.onCloseModal();
  }
  //formcontrols with validation
  createForm() {
    this.angForm = this.fb.group({
      //basic controls
      AC_TYPE: ['', [Validators.required]],
      AC_ACNOTYPE: ['CA'],
      AC_NO: [''],
      BANKACNO: [''],
      AC_CUSTID: ['', [Validators.required]],
      AC_NAME: [''],
      AC_TITLE: [''],
      AC_MEMBTYPE: [''],
      AC_MEMBNO: [''],
      AC_OPDATE: ['', [Validators.required]],
      AC_BIRTH_DT: [''],
      REF_ACNO: ['', [Validators.pattern]],
      AC_PROPRITOR_NAME: ['', [Validators.pattern]],
      AC_CAST: [''],
      AC_OCODE: [''],
      AC_CATG: ['', [Validators.required]],
      AC_OPR_CODE: ['', [Validators.required]],
      AC_BALCATG: ['', [Validators.required]],
      AC_INTCATA: ['', [Validators.required]],
      AC_PANNO: [''],
      AC_SCHMAMT: ['', [Validators.pattern]],
      AC_IS_RECOVERY: [''],

      //Address
      AC_HONO: ['',],
      AC_WARD: ['',],
      AC_ADDR: ['',],
      AC_GALLI: ['',],
      AC_AREA: [''],
      AC_CTCODE: [''],
      AC_PIN: [''],
      AC_ADDFLAG: [true],
      AC_ADDTYPE: ['P'],
      AC_THONO: ['', [Validators.pattern]],
      AC_TWARD: ['', [Validators.pattern]],
      AC_TADDR: ['', [Validators.pattern]],
      AC_TGALLI: ['', [Validators.pattern]],
      AC_TAREA: ['', [Validators.pattern]],
      AC_TCTCODE: ['', [Validators.pattern]],
      AC_TPIN: ['', [Validators.pattern]],
      AC_PHNO: [''],
      AC_MOBNO: [''],
      AC_EMAIL: [''],

     
      AC_INTROBRANCH: ['', []],
      AC_INTROID: [''],
      AC_INTRACNO: [''],
      AC_INTRNAME: ['', [Validators.pattern]],
      SIGNATURE_AUTHORITY: ['', [Validators.pattern]],

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

      //attorney
      ATTERONEY_NAME: ['', []],
      DATE_APPOINTED: ['', []],
      DATE_EXPIRY: ['', []],
    })
  }
  tempopendate: any
  // Method to insert data into database through NestJS
  submit(event) {
    event.preventDefault();
    this.formSubmitted = true;
    let temdate
    let opdate
    if (this.angForm.valid) {

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
      let schecode
      if (this.tempopendate != this.openingDate) {
        temdate = (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == 'Invalid date') ? opdate = '' : opdate = moment(formVal.AC_OPDATE).format('DD/MM/YYYY')
      } else {
        temdate = this.openingDate
      }
      this.scheme.forEach(async (element) => {
        if (element.value == this.selectedValue) {
          schecode = element.name
        }
      })

      let bankCode = Number(result.branch.syspara.BANK_CODE)
      const dataToSend = {
        'branchCode': branchCode,
        'bankCode': bankCode,
        'schemeCode': schecode,
        'AC_PROPRITOR_NAME': formVal.AC_PROPRITOR_NAME,
        'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
        'AC_TYPE': formVal.AC_TYPE,
        'AC_CATG': formVal.AC_CATG,
        'AC_BALCATG': formVal.AC_BALCATG,
        'AC_OPR_CODE': formVal.AC_OPR_CODE,
        'AC_CUSTID': formVal.AC_CUSTID,
        'AC_INTCATA': formVal.AC_INTCATA,
        'AC_OPDATE': temdate,
        'AC_NAME': formVal.AC_NAME,
        'AC_SCHMAMT': formVal.AC_SCHMAMT,
        'REF_ACNO': formVal.REF_ACNO,
        'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
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
        'AC_INTROBRANCH': formVal.AC_INTROBRANCH,
        'AC_INTROID': formVal.AC_INTROID,
        'AC_INTRACNO': formVal.AC_INTRACNO,
        'AC_INTRNAME': formVal.AC_INTRNAME,

        //nominee
        'NomineeData': this.multiNominee,
        //Joint Account
        'JointAccountData': this.multiJointAC,
        //Attorney
        'PowerOfAttorneyData': this.multiAttorney
      }
      this.currentAccountMasterService.postData(dataToSend).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Account Created successfully!',
          html:
            '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
            '<b>ACCOUNT NO : </b>' + data.BANKACNO + '<br>'
        })
        this.formSubmitted = false;
        // to reload after insertion of data
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
      this.multiAttorney = []
      this.customerDoc = []
    } else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');

    }
  }
  updatecheckdata: any
  //Method for append data into fields
  editClickHandler(id) {
    let opdate
    this.angForm.controls['AC_TYPE'].disable()
    this.currentAccountMasterService.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      if (data.SYSCHNG_LOGIN == null) {
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
      } else {
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
      }

      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      //get nominee to edit
      this.multiNominee = data.nomineeDetails
      //get joint accounts to edit
      this.multiJointAC = data.jointAccounts
      //get attorney to edit
      this.multiAttorney = data.powerOfAttorney
      this.selectedValue = data.AC_TYPE
      this.ngCategory = data.AC_CATG
      this.ngOccupation = data.AC_OPR_CODE
      this.ngBalCategory = data.AC_BALCATG
      this.ngIntCategory = data.AC_INTCATA
      if ((data.AC_INTROBRANCH != null && data.AC_INTROID != null && data.AC_INTRACNO != null) || (data.AC_INTROBRANCH != "" && data.AC_INTROID != "" && data.AC_INTRACNO != "")) {

        this.code = data.AC_INTROBRANCH,
          this.acno = Number(data.AC_INTROID),
          this.obj = [this.acno, this.code]

        this.allScheme.forEach(async (element) => {
          if (element.value == this.acno) {
            this.getschemename = element.name
          }
        })
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
              debugger
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
        this.ngIntroducer = Number(data.AC_INTRACNO)

      } else {
        this.code = null
        this.acno = null
        this.obj = null
      }

      this.angForm.patchValue({
        'AC_ACNOTYPE': data.AC_ACNOTYPE,
        'AC_NO': data.AC_NO,
        'AC_PROPRITOR_NAME': data.AC_PROPRITOR_NAME,
        'AC_OPDATE': (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? opdate = '' : opdate = data.AC_OPDATE,
        'AC_SCHMAMT': data.AC_SCHMAMT,
        'REF_ACNO': data.REF_ACNO,
        'AC_IS_RECOVERY': data.AC_IS_RECOVERY,
        'BANKACNO': data.BANKACNO,
        //minor and introducer
        'AC_MINOR': data.AC_MINOR,
        'AC_MBDATE': data.AC_MBDATE,
        'AC_GRDNAME': data.AC_GRDNAME,
        'AC_GRDRELE': data.AC_GRDRELE,
        'AC_INTRNAME': data.AC_INTRNAME,
        'SIGNATURE_AUTHORITY': data.SIGNATURE_AUTHORITY,
      })
    })
  }

  //Method for update data 
  updateData() {
    let opdate
    this.angForm.controls['AC_TYPE'].enable()
    let data = this.angForm.value;
    if (data.AC_ADDFLAG == true) {
      this.addType = 'P'
    }
    else if (data.AC_ADDFLAG == false) {
      this.addType = 'T'
    }
    data['AC_TYPE'] = this.selectedValue
    data['AC_ADDTYPE'] = this.addType
    data['NomineeData'] = this.multiNominee
    data['JointAccountData'] = this.multiJointAC
    data['PowerOfAttorneyData'] = this.multiAttorney
    data['AC_CATG'] = this.ngCategory
    data['AC_OPR_CODE'] = this.ngOccupation
    data['AC_BALCATG'] = this.ngBalCategory
    data['AC_INTCATA'] = this.ngIntCategory
    data['AC_INTROBRANCH'] = this.code
    data['AC_INTROID'] = this.acno
    data['AC_INTRACNO'] = this.ngIntroducer
    data['id'] = this.updateID;
    if (this.updatecheckdata.AC_OPDATE != this.openingDate) {
      (this.openingDate == 'Invalid date' || this.openingDate == '' || this.openingDate == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = this.openingDate, data['AC_OPDATE'] = moment(opdate).format('DD/MM/YYYY'))
    } else {
      data['AC_OPDATE'] = this.openingDate
    }
    this.currentAccountMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.multiNominee = []
      this.multiJointAC = []
      this.multiAttorney = []
      this.customerDoc = []
      this.resetForm();
    })
  }
  //reset function while update
  addNewData() {
    this.angForm.controls['AC_TYPE'].enable()
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.multiNominee = []
    this.multiJointAC = []
    this.multiAttorney = []
    this.customerDoc = []
    this.tempAddress = true
    this.resetForm();
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Current Account master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.currentAccountMasterService.deleteData(id).subscribe(data1 => {
          this.currentAccountMaster = data1;
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

  // Reset Function
  resetForm() {
    this.createForm();
    this.resetNominee();
    this.resetJointAC()
    this.resetAttorney()
    this.PowerofAttorneyTrue = false
    this.JointAccountsTrue = false
    this.nomineeTrue = false
    this.customerDoc = []
    this.angForm.controls['AC_TYPE'].enable()
    this.tempAddress = true
    this.selectedValue = null
    this.newcustid = null
    this.ngCategory = null
    this.ngOccupation = null
    this.ngBalCategory = null
    this.ngIntCategory = null
    this.ngCity = null
    this.code = null
    this.acno = null
    this.ngIntroducer = null
    this.ngNcity = null
    this.jointID = null
    this.getSystemParaDate()
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

  ngappointeddate: any
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.tempopendate = data.CURRENT_DATE
      this.openingDate = data.CURRENT_DATE
      this.ngappointeddate = data.CURRENT_DATE
      if (data.ON_LINE === true) {
        this.angForm.controls['AC_OPDATE'].disable()
      } else {
        this.angForm.controls['AC_OPDATE'].enable()
      }
    })
  }

  selectedImgArrayDetails = [];
  imgBase64: any
  showImage: boolean = false;
  viewImagePreview(ele, id) {
    this.selectedImagePreview = id;
  }


  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  getBranch() {
    this.getIntroducer()
  }



  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }
  //get account no according scheme for introducer
  getIntroducer() {
    this.obj = [this.acno, this.code]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngIntroducer = null
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

  //calculate age for minor details
  ageCalculator(birthDate) {
    let showAge: number
    if (birthDate) {

      showAge = moment().diff(moment(birthDate, "DD-MM-YYYY"), 'years');
      if (showAge <= 18) {
        this.angForm.controls['AC_MINOR'].setValue(true);
        this.angForm.controls['AC_GRDNAME'].enable();
        this.angForm.controls['AC_GRDRELE'].enable();
        this.angForm.controls['SIGNATURE_AUTHORITY'].enable();
        this.angForm.patchValue({
          AC_MBDATE: this.angForm.controls['AC_BIRTH_DT'].value
        })
        this.introducerReq = true
      }
      else if (showAge > 18) {
        this.angForm.controls['AC_MINOR'].setValue(false);
        this.angForm.controls['AC_GRDNAME'].disable();
        this.angForm.controls['AC_GRDRELE'].disable();
        this.angForm.controls['SIGNATURE_AUTHORITY'].disable();
        this.angForm.controls['AC_GRDNAME'].reset();
        this.angForm.controls['AC_GRDRELE'].reset();
        this.angForm.controls['SIGNATURE_AUTHORITY'].reset();
        this.angForm.controls['AC_MBDATE'].reset();
        this.introducerReq = false
      }
    }
  }
  NbirthDate: any
  cityName: boolean = false
  ngnomineedate: any
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
      AC_NCTCODE: formVal.AC_NCTCODE,
      AC_NPIN: formVal.AC_NPIN,
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

          if (formVal.AC_NCTCODE == "" || formVal.AC_NCTCODE == null) {

            Swal.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
          } else {

            if (this.multiNominee.find(ob => ob['AC_NNAME'].toUpperCase() === formVal.AC_NNAME.toUpperCase())) {

              Swal.fire('', 'This Nominee is Already Exists!', 'error');

            } else {

              object['AC_NCTCODE'] = formVal.AC_NCTCODE.id,
                object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME
              this.multiNominee.push(object);
            }
          }
        }
      }
      else {
        object['AC_NCTCODE'] = formVal.AC_NCTCODE.id
        object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME
        this.multiNominee.push(object);
      }
    }
    else {
      object['AC_NCTCODE'] = formVal.AC_NCTCODE.id
      object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME
      this.multiNominee.push(object);
    }
    this.resetNominee()
  }
  nomineedataedit: any
  editNominee(id) {
    this.nomineeIndex = id
    this.nomineeID = this.multiNominee[id].id;
    this.nomineedataedit = this.multiNominee[id]
    this.nomineeTrue = true
    this.nomineeShowButton = false;
    this.nomineeUpdateShow = true;
    this.ngnomineedate = this.multiNominee[id].AC_NDATE
    this.ngNcity = this.multiNominee[id].AC_CITYNAME,
      this.angForm.patchValue({
        AC_NNAME: this.multiNominee[id].AC_NNAME,
        AC_NRELA: this.multiNominee[id].AC_NRELA,
        AGE: this.multiNominee[id].AGE,
        AC_NHONO: this.multiNominee[id].AC_NHONO,
        AC_NWARD: this.multiNominee[id].AC_NWARD,
        AC_NADDR: this.multiNominee[id].AC_NADDR,
        AC_NGALLI: this.multiNominee[id].AC_NGALLI,
        AC_NAREA: this.multiNominee[id].AC_NAREA,
        AC_NPIN: this.multiNominee[id].AC_NPIN,
      })
  }

  updateNominee() {
    let index = this.nomineeIndex;
    this.nomineeShowButton = true;
    this.nomineeUpdateShow = false;
    let date1
    const formVal = this.angForm.value;
    if (this.nomineedataedit.AC_NDATE != formVal.AC_NDATE) {
      date1 = moment(formVal.AC_NDATE).format('DD/MM/YYYY');
    } else {
      date1 = formVal.AC_NDATE
    }

    var object = {
      AC_NNAME: formVal.AC_NNAME,
      AC_NRELA: formVal.AC_NRELA,
      AC_NDATE: date1,
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
    if (typeof (formVal.AC_NCTCODE) == 'string') {
      object['AC_CITYNAME'] = formVal.AC_NCTCODE
    }
    else {
      object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME
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
  joint
  tempjoint
  getJointCustomer(event) {
    this.joint = event.name
    this.tempjoint = event.value
    this.customerIdService.getFormData(event.value).subscribe(data => {
      this.angForm.patchValue({
        JOINT_ACNAME: data.AC_NAME
      })
    })
  }


  addJointAcccount() {
    const formVal = this.angForm.value;
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
    if (formVal.AC_CUSTID != "") {

      if (object.JOINT_AC_CUSTID != undefined) {

        if (this.newcustid != this.joint) {

          if (this.multiJointAC.length == 0) {

            this.multiJointAC.push(object);
          }
          else {
            if (this.multiJointAC.find(ob => ob['JOINT_AC_CUSTID'] == this.joint)) {

              Swal.fire('', 'This Customer is Already Joint Account Holder', 'warning');
            } else {
              this.multiJointAC.push(object);
            }
          }
        }
        else {
          Swal.fire('', "Please Select Different Customer id", 'warning');
        }
      }
      else {
        Swal.fire('', "Please Select Guarantor Customer Id", 'warning');
      }
    } else {
      Swal.fire('', "Please Select Customer Id", 'warning');
    }
    this.resetJointAC()
    this.jointID = null
  }


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
      if (this.newcustid != this.jointID) {
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


  ngexpiryddate: any
  //power of attorney
  addAttorney() {
    const formVal = this.angForm.value;
    let temdate
    let apdate
    if (this.tempopendate != this.ngappointeddate) {
      temdate = (formVal.DATE_APPOINTED == '' || formVal.DATE_APPOINTED == 'Invalid date') ? apdate = '' : apdate = moment(formVal.DATE_APPOINTED).format('DD/MM/YYYY')
    } else {
      temdate = this.ngappointeddate
    }
    var object = {
      ATTERONEY_NAME: formVal.ATTERONEY_NAME,
      DATE_APPOINTED: temdate,
      DATE_EXPIRY: moment(formVal.DATE_EXPIRY).format('DD/MM/YYYY')
    }
    if (formVal.ATTERONEY_NAME == "" || formVal.ATTERONEY_NAME == null) {
      Swal.fire('', 'Please Insert Mandatory Record For Power Of Attorney!', 'warning');
    } else if (formVal.ATTERONEY_NAME != "") {
      if (formVal.DATE_APPOINTED == "" || formVal.DATE_APPOINTED == null) {
        Swal.fire('', 'Please Insert Mandatory Record For Power Of Attorney!', 'warning');
      } else if (formVal.DATE_APPOINTED != "") {
        if (formVal.DATE_EXPIRY == "" || formVal.DATE_EXPIRY == null) {
          Swal.fire('', 'Please Insert Mandatory Record For Power Of Attorney!', 'warning');
        }
        else {
          if (this.multiAttorney.find(ob => ob['ATTERONEY_NAME'].toUpperCase() === formVal.ATTERONEY_NAME.toUpperCase())) {
            Swal.fire('', 'This Attorney is Already Exists!', 'error');
          } else {
            this.multiAttorney.push(object);
          }
        }
      }
      else {
        this.multiAttorney.push(object);
      }
    }
    else {
      this.multiAttorney.push(object);
    }
    this.resetAttorney()
  }

  ispowerof($event) {
    if ($event.target.checked) {
      this.PowerofAttorneyTrue = true
      this.DATE_EXPIRY = true
      this.DATE_APPOINTED = true
      this.ATTERONEY_NAME = true
    }
    else {
      this.PowerofAttorneyTrue = false
      this.DATE_EXPIRY = false
      this.DATE_APPOINTED = false
      this.ATTERONEY_NAME = false
    }
  }

  jointAccount($event) {
    if ($event.target.checked) {
      this.JointAccountsTrue = true
    } else {
      this.JointAccountsTrue = false
    }
  }
  nominee($event) {
    if ($event.target.checked) {
      this.nomineeTrue = true
    } else {
      this.nomineeTrue = false
    }
  }

  OpenLink(val) {
    if (val == 1) {
      this.nomineeTrue = !this.nomineeTrue;
      this.JointAccountsTrue = false;
      this.PowerofAttorneyTrue = false;
    }
    if (val == 2) {
      this.JointAccountsTrue = !this.JointAccountsTrue;
      this.nomineeTrue = false;
      this.PowerofAttorneyTrue = false;
    }
    if (val == 3) {
      this.PowerofAttorneyTrue = !this.PowerofAttorneyTrue;
      this.JointAccountsTrue = false;
      this.nomineeTrue = false;
    }
  }
  tempupdateattorny: any
  editAttorney(id) {
    this.attorneyIndex = id
    this.attorneyID = this.multiAttorney[id].id;
    this.tempupdateattorny = this.multiAttorney[id]
    this.PowerofAttorneyTrue = true
    this.attorneyShowButton = false;
    this.attorneyUpdateShow = true;
    this.angForm.patchValue({
      ATTERONEY_NAME: this.multiAttorney[id].ATTERONEY_NAME,
      DATE_APPOINTED: this.multiAttorney[id].DATE_APPOINTED,
      DATE_EXPIRY: this.multiAttorney[id].DATE_EXPIRY
    })
  }

  updateAttorney() {
    let index = this.attorneyIndex;
    this.attorneyShowButton = true;
    this.attorneyUpdateShow = false;
    const formVal = this.angForm.value;
    let appdate
    let EXdate
    let date1
    let date2
    if (this.tempupdateattorny.DATE_APPOINTED != formVal.DATE_APPOINTED) {
      date1 = (formVal.DATE_APPOINTED == '' || formVal.DATE_APPOINTED == 'Invalid date' || formVal.DATE_APPOINTED == null) ? appdate = '' : appdate = moment(formVal.DATE_APPOINTED).format('DD/MM/YYYY')
    } else {
      date1 = formVal.DATE_APPOINTED
    }
    if (this.tempupdateattorny.DATE_EXPIRY != formVal.DATE_EXPIRY) {
      date2 = (formVal.DATE_EXPIRY == '' || formVal.DATE_EXPIRY == 'Invalid date' || formVal.DATE_EXPIRY == null) ? EXdate = '' : EXdate = moment(formVal.DATE_EXPIRY).format('DD/MM/YYYY')
    } else {
      date2 = formVal.DATE_EXPIRY
    }
    var object = {
      ATTERONEY_NAME: formVal.ATTERONEY_NAME,
      DATE_APPOINTED: date1,
      DATE_EXPIRY: date2,
      id: this.attorneyID
    }

    if (formVal.ATTERONEY_NAME == "" || formVal.ATTERONEY_NAME == null) {
      Swal.fire("Please Insert Mandatory Record For Power Of Attorney");
    } else if (formVal.ATTERONEY_NAME != "") {
      if (formVal.DATE_APPOINTED == "" || formVal.DATE_APPOINTED == null) {
        Swal.fire("Please Insert Mandatory Record For Power Of Attorney");
      } else if (formVal.DATE_APPOINTED != "") {
        if (formVal.DATE_EXPIRY == "" || formVal.DATE_EXPIRY == null) {
          Swal.fire("Please Insert Mandatory Record For Power Of Attorney");
        }
        else {
          this.multiAttorney[index] = object;
         
        }
      }
      else {
        this.multiAttorney[index] = object;
      }
    }
    else {
      this.multiAttorney[index] = object;
    }
    this.resetAttorney()
  }

  delAttorney(id) {
    this.multiAttorney.splice(id, 1)
  }

  resetAttorney() {
    this.angForm.controls['ATTERONEY_NAME'].reset();
    this.angForm.controls['DATE_APPOINTED'].reset();
    this.angForm.controls['DATE_EXPIRY'].reset();
    this.getSystemParaDate()
  }

  nextButton: boolean = true
  next() {
    this.nextButton != this.nextButton
  }

  resetexpirydate: any
  switchNgBTab(id: string) {
    this.ctdTabset.select(id);
  }
  checkdate(ele: Date): void {
    let date = (document.getElementById("DATE_APPOINTED") as HTMLInputElement).value;
    let date1 = (document.getElementById("DATE_EXPIRY") as HTMLInputElement).value;
    if (date1 != "") {
      if (moment(date).isAfter(date1)) {
        Swal.fire(
          'Cancelled',
          'Expiry Date must be greater than Appointed date',
          'error'
        );
        this.resetexpirydate = "";
        this.angForm.controls['DATE_EXPIRY'].reset()
      }
    }
  }

  age() {
    if (this.angForm.controls['AGE'].value > 100) {
      Swal.fire(
        'Cancelled',
        'Please Input Proper Age',
        'error'
      );
      this.angForm.controls['AGE'].reset()
    }

  }
  decimalAllContent($event) {
    let value = Number($event.target.value);
    let data = value.toFixed(2);
    $event.target.value = data;
  }
  //approve account
  Approve() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.currentAccountMasterService.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Current Account approved successfully',
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
    this.currentAccountMasterService.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Current Account rejected successfully',
        'success'
      );

      var button = document.getElementById('triggerhide');
      button.click();
    }, err => {
      console.log('something is wrong');
    })
  }
}
