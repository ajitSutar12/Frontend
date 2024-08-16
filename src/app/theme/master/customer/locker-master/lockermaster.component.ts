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
import { LockerMasterService } from './locker-master.service'
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
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgSelectComponent } from '@ng-select/ng-select';
import { LockerRMasterDropDownService } from '../../../../shared/dropdownService/lockerrack-master-dropdown.service'
import { LockerRWMasterDropDownService } from '../../../../shared/dropdownService/lockerrackwise-master-dropdown.service'
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface LockerMaster {
  AC_ACNOTYPE: string
  AC_TYPE: string
  AC_NO: number
  RACKNO: string
  AC_NAME: string
  LOC_NO: string
  AC_OPR_CODE: number
  AC_CUSTID: number
  AC_INTCATA: string
  AC_DEPONO: string
  AC_OPDATE: Date
  //address
  AC_ADDFLAG: boolean
  AC_THONO: string;
  AC_TWARD: string;
  AC_TADDR: string;
  AC_TGALLI: string;
  AC_TAREA: string;
  AC_TCTCODE: number;
  AC_TPIN: number
  BANKACNO: number
  AC_KEYWORD: string
}

@Component({
  selector: 'app-locker-master',
  templateUrl: './locker-master.component.html',
  styleUrls: ['./locker-master.component.scss'],
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

export class LockerMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() childMessage: string;
  @Output() public getUserData = new EventEmitter<string>();
  @Output() reloadTablePassing = new EventEmitter<string>();
  formSubmitted = false;
  //api 
  url = environment.base_url;
  urlMap: SafeResourceUrl
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
  unapproveShow: boolean = false;
  //display code according choice
  nomineeTrue: boolean = false;
  JointAccountsTrue: boolean = false;
  jointShowButton: boolean = true
  jointUpdateShow: boolean = false
  jointACID: number
  jointIndex: number
  PowerofAttorneyTrue: boolean = false;
  logDate
  // Store data from backend
  LockerMaster: LockerMaster[];

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
  multiNominee = [];
  multiJointAC = [];
  nomineeShowButton: boolean = true
  nomineeUpdateShow: boolean = false
  //add required validation to attorney fields
  DATE_EXPIRY = false
  DATE_APPOINTED = false
  //Scheme type variable
  schemeType: string = 'LK'
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
  // isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  jointID: any = null;
  timeLeft = 5;
  joint
  tempjoint
  id: string = '';
  // jointID: string = '';
  private dataSub: Subscription = null;
  datemax: string;
  obj: any
  // bsValue = new Date();
  getschemename: any
  selectedValue: any = null
  newcustid: any = null
  ngRackno: any = null
  ngOccupation: any = null
  ngLocno: any = null
  ngIntCategory: any = null
  ngDepoCategory: any = null
  ngCity: any = null
  code: any = null
  acno: any = null
  ngIntroducer: any = null
  branchcode: any = null
  Ncity: any //city from customer id from idmaster
  ngNcity: any = null
  selectedImagePreview: any;
  maxDate: any;
  minDate: Date;

  @ViewChild('ctdTabset') ctdTabset;
  public visible = false;
  public visibleAnimate = false;

  tempopendate: any
  updatecheckdata: any
  ngappointeddate: any
  selectedImgArrayDetails = [];
  imgBase64: any
  showImage: boolean = false;
  NbirthDate: any
  cityName: boolean = false
  ngnomineedate: any
  nomineedataedit: any
  tempupdateattorny: any
  nextButton: boolean = true
  resetexpirydate: any
  imageObject = new Array();
  isDisabled: boolean = true;
  constructor(
    private http: HttpClient,
    private LockerMasterService: LockerMasterService,
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
    public sanitizer: DomSanitizer,
    private lockerrackmasterService: LockerRMasterDropDownService,
    private lockerrackwisemasterService: LockerRWMasterDropDownService,
    private fb: FormBuilder) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
    this.minDate.setDate(this.minDate.getDate());
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage, 1);
    }
    this.datemax = new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2);
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
      this.logDate = data.CURRENT_DATE
    })
  }

  ngOnInit(): void {
    this.getSystemParaDate() //function to set date
    this.createForm();
    let data1: any = localStorage.getItem('user');
    let result = JSON.parse(data1);
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
            this.url + '/locker-master',
            dataTableParameters
          ).subscribe(resp => {
            this.LockerMaster = resp.data
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
          title: 'Member Name',
          data: 'AC_NAME'
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
          title: 'Opening Date',
          data: 'AC_OPDATE'
        },
        // {
        //   title: 'Manual Reference Number',
        //   data: 'KEYWORD'
        // },
      ],
      // dom:'<"bottom"flp><"clear">'
      // dom: 'ip',
      dom: 'Blrtip',
    };
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.joint_Cust_ID = data;
    })
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data;
      this.selectedValue = this.scheme[0]?.value
    })
    this.lockerrackmasterService.getLockerRMasterList().pipe(first()).subscribe(data => {

      var branchwise = data.filter(function (scheme) {
        return (scheme.branch == result.branch.id)
      });
      this.category = branchwise;
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
    this.lockerrackwisemasterService.getLockerRWMasterList().pipe(first()).subscribe(data => {
      var branchwise = data.filter(function (scheme) {
        return (scheme.branch == result.branch.id)
      });
      this.bal_category = branchwise;
    })
    this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.int_category = data;
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'TD')
      });
      this.allScheme = allscheme;
    })

  }

  //function to toggle temp address field
  tempAsPermanent() {
    this.tempAddress = !this.tempAddress;
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
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id
    let obj = [branchCode, this.selectedValue]
    this.LockerMasterService.getData(obj).subscribe(data => {
      if (data?.length == 0) {
        this.getCustomer(event.value);
      }
      else {
        if (data.find(data => data['AC_TYPE'] == this.selectedValue && data['AC_CUSTID'] == event.value && (data['AC_CLOSEDT'] == '' || data['AC_CLOSEDT'] == null))) {

          Swal.fire({
            icon: 'info',
            title: 'Locker Account Already Exists For This Scheme',
          })
          //  this.resetForm()
          event.id = null
          this.newcustid = null
          this.newcustid = ''
          this.angForm.controls['AC_CUSTID'].reset()
          this.angForm.patchValue({
            AC_NAME: '',
            AC_MEMBTYPE: '',
            AC_MEMBNO: '',
            AC_MOBNO: '',
            AC_PHNO: '',
            AC_EMAIL: '',
          })

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
      let obj = {
        SCHEME_CODE: 'LK'
      }
      this.imageObject = []
      this.selectedImgArrayDetails = []
      this.http.post(this.url + '/scheme-linking-with-d/fetchLinkedDoc', obj).subscribe(resp => {
        let DocArr: any = resp
        for (const [key, value] of Object.entries(data.custdocument)) {
          DocArr.forEach(ele => {
            if (this.customerDoc.find(data => data['DocumentMaster']['id'] == ele['DOCUMENT_CODE'])) {
              let path = (this.customerDoc.find(data => data['DocumentMaster']['id'] == ele['DOCUMENT_CODE']))
              ele['status'] = true;
              ele['IS_ALLOWED'] = true;
              ele['PATH'] = path['PATH']
            } else {
              ele['status'] = false;
              ele['IS_ALLOWED'] = false;
            }
          })
          let selectedObj = {};
          let id = data.custdocument[key].DocumentMasterID;
          selectedObj[id] = environment.base_url + '/' + data.custdocument[key].PATH;
          this.selectedImagePreview = selectedObj[id];
          this.imageObject.push(selectedObj)
          this.selectedImgArrayDetails.push(selectedObj);
        }
        this.customerDoc = DocArr
      })
      this.tempAddress = data.custAddress[0]?.AC_ADDFLAG
      if (data.castMaster == null) {
        data.castMaster = ""
      }
      if (data.occupMaster == null) {
        data.occupMaster = ""
      }
      this.newcustid = data.id
      this.angForm.patchValue({
        AC_NAME: data.AC_NAME,
        AC_MEMBTYPE: data.AC_MEMBTYPE,
        AC_MEMBNO: data.AC_MEMBNO,
        AC_MOBNO: data.AC_MOBILENO,
        AC_PHNO: data.AC_PHONE_RES,
        AC_EMAIL: data.AC_EMAILID,
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
        AC_CTCODE: permadd?.city?.CITY_NAME,
        AC_PIN: permadd?.AC_PIN,
      })
      data.custAddress.forEach(async (element) => {
        if (element.AC_ADDTYPE == 'T') {
          temp = element
        }
      })
      this.ngCity = temp?.city?.id,
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
      AC_ACNOTYPE: ['LK'],
      AC_NO: [''],
      BANKACNO: [''],
      AC_CUSTID: ['', [Validators.required]],
      AC_NAME: [''],
      AC_MEMBTYPE: [''],
      AC_MEMBNO: [''],
      AC_OPDATE: ['', [Validators.required]],
      KEYWORD: ['', [Validators.pattern, Validators.required]],
      RACKNO: ['', [Validators.required]],
      AC_OPR_CODE: ['', [Validators.required]],
      LOC_NO: ['', [Validators.required]],
      AC_INTCATA: ['', [Validators.required]],
      AC_DEPONO: ['', [Validators.required]],
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
      JOINT_AC_CUSTID: ['',],
      JOINT_ACNAME: ['', [Validators.pattern]],
      OPERATOR: [true],
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['AC_INTROBRANCH'].disable()
      this.code = result.branch.id
    }
    else {
      this.angForm.controls['AC_INTROBRANCH'].disable()
      this.angForm.patchValue({
        'AC_INTROBRANCH': result.branch.id
      })
      this.code = result.branch.id
    }
  }

  // Method to insert data into database through NestJS
  isDisable=false
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

      let toDate = moment(this.openingDate, 'DD/MM/YYYY')
      temdate = moment(toDate).format('DD/MM/YYYY')

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
        'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
        'AC_TYPE': formVal.AC_TYPE,
        'RACKNO': formVal.RACKNO,
        'LOC_NO': formVal.LOC_NO,
        'AC_OPR_CODE': formVal.AC_OPR_CODE,
        'AC_CUSTID': formVal.AC_CUSTID,
        'AC_INTCATA': formVal.AC_INTCATA,
        'AC_DEPONO': formVal.AC_DEPONO,
        'AC_OPDATE': temdate,
        'AC_NAME': formVal.AC_NAME,
        'KEYWORD': formVal.KEYWORD,
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
        'Document': this.imageObject,
        //Joint Account
        'JointAccountData': this.multiJointAC,
      }
      this.isDisable = true
      this.LockerMasterService.postData(dataToSend).subscribe(data => {
        this.isDisable = false
        Swal.fire({
          icon: 'success',
          title: 'Account Created successfully!',
          html:
            '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
            '<b>ACCOUNT NO : </b>' + data.BANKACNO + '<br>'
        })
        this.switchNgBTab('Basic')
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
      this.customerDoc = []
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }
  name: any
  ac_no: any
  //Method for append data into fields
  editClickHandler(id, status) {
    this.switchNgBTab('Basic')
    let opdate
    this.angForm.controls['AC_TYPE'].disable()
    this.LockerMasterService.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
      this.name = data.AC_NAME
      this.ac_no = data.BANKACNO
      if (data.SYSCHNG_LOGIN != null && data.status == 0) {
        this.unapproveShow = true
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
      }
      else if (data.SYSCHNG_LOGIN == null && status == 0) {
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = false;
        this.rejectShow = false;
      }
      else if (data.SYSCHNG_LOGIN == null && data.status == 1) {
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.approveShow = true;
        this.rejectShow = true;
      }
      else {
        this.approveShow = false;
        this.rejectShow = false;
        this.unapproveShow = false
        this.showButton = false;
        this.updateShow = false;
        this.newbtnShow = true;
      }
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      //get joint accounts to edit
      this.multiJointAC = data.jointAccounts
      //get nominee to edit
      this.multiNominee = data.nomineeDetails
      this.selectedValue = data.AC_TYPE
      this.ngRackno = Number(data.RACK_NO)
      this.ngOccupation = data.AC_OPR_CODE
      this.ngLocno = Number(data.LOCKER_NO)
      this.ngIntCategory = data.TD_ACTYPE
      this.ngDepoCategory = data.TD_ACNO
      if ((data.BRANCH_CODE != null && data.AC_INTROID != null && data.AC_INTRACNO != null) || (data.BRANCH_CODE != "" && data.AC_INTROID != "" && data.AC_INTRACNO != "")) {
        this.code = data.BRANCH_CODE,
          this.acno = Number(data.AC_INTROID),
          this.obj = [this.acno, this.code]
        this.allScheme.forEach(async (element) => {
          if (element.value == this.acno) {
            this.getschemename = element.name
          }
        })
        this.obj = [this.ngIntCategory, this.code]
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          // this.ngDepoCategory = null
        })
        this.ngDepoCategory = data.TD_ACNO
      } else {
        this.code = null
        this.acno = null
        this.obj = null
      }
      this.angForm.patchValue({
        'AC_ACNOTYPE': data.AC_ACNOTYPE,
        'AC_NO': data.AC_NO,
        'AC_OPDATE': (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? opdate = '' : opdate = data.AC_OPDATE,
        'KEYWORD': data.AC_KEYWORD,
        'BANKACNO': data.BANKACNO,
        AC_TYPE: data.AC_TYPE
      })
      this.selectedValue = data.AC_TYPE
    })
  }

  //Method for update data 
  updateData() {
    this.switchNgBTab('Basic')
    let opdate
    this.angForm.controls['AC_TYPE'].enable()
    let data = this.angForm.value;
    if (data.AC_ADDFLAG == true) {
      this.addType = 'P'
    }
    else if (data.AC_ADDFLAG == false) {
      this.addType = 'T'
    }
    if (this.angForm.controls['AC_TCTCODE'].value == "") {
      data['AC_TCTCODE '] = null
    }
    data['Document'] = this.imageObject
    data['AC_TYPE'] = this.selectedValue
    data['AC_ADDTYPE'] = this.addType
    data['NomineeData'] = this.multiNominee
    data['RACKNO'] = this.ngRackno
    data['AC_OPR_CODE'] = this.ngOccupation
    data['LOC_NO'] = this.ngLocno
    data['AC_INTCATA'] = this.ngIntCategory
    data['AC_DEPONO'] = this.ngDepoCategory
    data['JointAccountData'] = this.multiJointAC
    // data['AC_INTROBRANCH'] = this.code
    data['AC_INTROID'] = this.acno
    data['id'] = this.updateID;
    // if (this.updatecheckdata.AC_OPDATE != this.openingDate) {
    //   (this.openingDate == 'Invalid date' || this.openingDate == '' || this.openingDate == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = this.openingDate, data['AC_OPDATE'] = moment(opdate).format('DD/MM/YYYY'))
    // } else {
    //   data['AC_OPDATE'] = this.openingDate
    // }
    let toDate = moment(this.openingDate, 'DD/MM/YYYY')
    data['AC_OPDATE'] = moment(toDate).format('DD/MM/YYYY')


    this.LockerMasterService.updateData(data).subscribe((data1) => {
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
      this.switchNgBTab('Basic')
      this.resetForm();
      this.formSubmitted = false;
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
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
    this.customerDoc = []
    this.tempAddress = true
    this.acno = null
    this.ngIntroducer = null
    this.ngRackno = null
    this.ngLocno = null
    this.ngIntCategory = null
    this.ngDepoCategory = null
    this.ngOccupation = null
    this.switchNgBTab('Basic')
    this.resetForm();
    this.getSystemParaDate()
  }
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Account master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.LockerMasterService.deleteData(id).subscribe(data1 => {
          this.LockerMaster = data1;
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
    this.switchNgBTab('Basic')
    this.customerDoc = []
    this.resetNominee();
    this.PowerofAttorneyTrue = false
    this.JointAccountsTrue = false
    this.nomineeTrue = false
    this.newcustid = null
    this.acno = null
    this.ngRackno = null
    this.ngOccupation = null
    this.ngLocno = null
    this.ngIntCategory = null
    this.ngDepoCategory = null
    this.ngCity = null
    this.ngIntroducer = null
    this.ngNcity = null
    this.branchcode = null
    this.selectedValue = null
    // this.code = null
    this.tempAddress = true
    this.angForm.controls['AC_TYPE'].enable()
    this.getSystemParaDate()
    this.createForm();

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

  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.tempopendate = data.CURRENT_DATE
      this.openingDate = data.CURRENT_DATE
      this.ngappointeddate = data.CURRENT_DATE
      if (data.ON_LINE === '1') {
        this.angForm.controls['AC_OPDATE'].disable()
      } else {
        this.angForm.controls['AC_OPDATE'].enable()
      }
    })
  }

  isDeleted: boolean = true
  disableForm(id) {
    this.isDeleted = false
    this.editClickHandler(id, 0)
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
  getTermDepositSchemeList() {
    this.obj = [this.ngIntCategory, this.code]
    this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
      this.ngDepoCategory = null
    })
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

  fileChangeEvent(event, id, valueid) {
    if (this.customerDoc[id]['status'] == true) {
      Swal.fire({
        // title: 'Do You Want To Replace previous document?',
        html: '<span style="text-justify: inter-word; font-weight:600; font-size:20px;">Do You Want To Replace previous document?</span>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          let result
          let arr = [];
          let me = this;
          let obj = {};
          let selectedObj = {};
          let file = (event.target as HTMLInputElement).files[0];
          this.customerDoc[id]['status'] = true
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = async function (ele: any) {
            result = await reader.result;
            let selecetedImg = ele.target.result;
            selectedObj[valueid] = selecetedImg
            obj[valueid] = result;
          };
          reader.onerror = function (error) {
            console.log('Error: ', error);
          };
          let isExist: boolean = false
          for (let element of this.imageObject) {
            if (Number(Object.keys(element)[0]) == valueid) {
              isExist = true
              reader.onload = async function (ele: any) {
                result = await reader.result;
                let selecetedImg = ele.target.result;
                selectedObj[valueid] = selecetedImg
                obj[valueid] = result;
                element[valueid] = result
              };
              this.customerDoc[id]['status'] = true
              break
            }
          }
          if (!isExist) {
            reader.onload = async function (ele: any) {
              result = await reader.result;
              let selecetedImg = ele.target.result;
              selectedObj[valueid] = selecetedImg
              obj[valueid] = result;
            };
            this.imageObject.push(obj);
            this.selectedImgArrayDetails.push(selectedObj);
            this.customerDoc[id]['status'] = true
          }
        } else {
          event.target.value = null
        }
      })
    }
    else {
      let result
      let arr = [];
      let me = this;
      let obj = {};
      let selectedObj = {};

      let file = (event.target as HTMLInputElement).files[0];
      this.customerDoc[id]['status'] = true

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async function (ele: any) {
        result = await reader.result;
        let selecetedImg = ele.target.result;
        selectedObj[valueid] = selecetedImg
        obj[valueid] = result;


      };
      // this.fileuploaded=true,
      // this.filenotuploaded=false

      reader.onerror = function (error) {
        console.log('Error: ', error);
      };

      let isExist: boolean = false
      for (let element of this.imageObject) {
        if (Number(Object.keys(element)[0]) == valueid) {
          isExist = true
          reader.onload = async function (ele: any) {
            result = await reader.result;
            let selecetedImg = ele.target.result;
            selectedObj[valueid] = selecetedImg
            obj[valueid] = result;
            element[valueid] = result
          };
          this.customerDoc[id]['status'] = true
          break
        }
      }

      if (!isExist) {
        reader.onload = async function (ele: any) {
          result = await reader.result;
          let selecetedImg = ele.target.result;
          selectedObj[valueid] = selecetedImg
          obj[valueid] = result;
        };
        this.imageObject.push(obj);
        this.selectedImgArrayDetails.push(selectedObj);
        this.customerDoc[id]['status'] = true
      }
    }
  }
  isImgPreview
  viewImagePreview(ele, id) {
    if (this.selectedImgArrayDetails.length != 0) {
      for (const [key, value] of Object.entries(this.selectedImgArrayDetails)) {
        let jsonObj = value;
        Object.keys(jsonObj).forEach(key => {
          if (id == key) {
            this.isImgPreview = true
            this.selectedImagePreview = jsonObj[key];
            this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedImagePreview);
            throw 'Break';
          }
          else {
            this.isImgPreview = false
            this.selectedImagePreview = ''
          }
        });
      }
    }
    else {
      this.isImgPreview = false
      this.selectedImagePreview = ''
    }
  }

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
      AC_NCTCODE: formVal.AC_NCTCODE?.id,
      AC_NPIN: formVal.AC_NPIN,
      AC_CITYNAME: formVal.AC_NCTCODE?.CITY_NAME
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
              this.resetNominee()
            }
          }
        }
      }
      else {
        object['AC_NCTCODE'] = formVal.AC_NCTCODE.id
        object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME
        this.multiNominee.push(object);
        this.resetNominee()
      }
    }
    else {
      object['AC_NCTCODE'] = formVal.AC_NCTCODE.id
      object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME
      this.multiNominee.push(object);
      this.resetNominee()
    }

  }

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
            this.resetNominee()
          }
        }
      }
      else {
        this.multiNominee[index] = object;
        this.resetNominee()
      }

    }
    else {
      this.multiNominee[index] = object;
      this.resetNominee()
    }

  }

  // delNominee(id) {
  //   this.multiNominee.splice(id, 1)
  // }

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

  next() {
    this.nextButton != this.nextButton
  }
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
    this.LockerMasterService.approve(obj).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Account Approved successfully!',
        html: `
          <b>NAME : </b> ${this.name},<br>
          <b>ACCOUNT NO : </b> ${this.ac_no}<br>
        `
      });
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
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
    this.LockerMasterService.reject(obj).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Account rejected successfully!',
        html: `
          <b>NAME : </b> ${this.name},<br>
          <b>ACCOUNT NO : </b> ${this.ac_no}<br>
        `
      });
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }

  // for decimal 
  getDecimalPoint(event) {
    event.target.value = parseFloat(event.target.value).toFixed(2);
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  checkLockerNumber() {
    let data1: any = localStorage.getItem('user');
    let result = JSON.parse(data1);
    let obj = {
      BRANCH_CODE: result.branch.id,
      AC_TYPE: this.selectedValue
    };
    this.http.post(this.url + '/locker-master/checkLocker', obj).subscribe(data => {
      let arr: any
      arr = data
      if (data) {
        if (this.angForm.controls['LOC_NO'].value != '' && this.angForm.controls['LOC_NO'].value != null) {

          if (arr.find(arr => arr['LOCKER_NO'] != (this.angForm.controls['LOC_NO'].value == ''))) {

            if (arr.find(arr => Number(arr['LOCKER_NO']) == Number(this.angForm.controls['LOC_NO'].value))) {
              let id = arr.find(arr => Number(arr['LOCKER_NO']) == Number(this.angForm.controls['LOC_NO'].value))
              Swal.fire({
                icon: 'info',
                title: 'This Locker Number is Already Exists For Account ' + id.BANKACNO,
              })
              this.angForm.controls['LOC_NO'].reset();
            }
          }
        }
      }
    })
  }
  unApprove() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      LOG_DATE: this.logDate
    }
    this.LockerMasterService.unapporve(obj).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Account unapproved successfully!',
        html: `
          <b>NAME : </b> ${this.name},<br>
          <b>ACCOUNT NO : </b> ${this.ac_no}<br>
        `
      });
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }
  closeModal() {
    var button = document.getElementById('trigger');
    button.click();
    this.reloadTablePassing.emit();
  }
  getJointCustomer(event) {
    this.joint = event.name
    this.tempjoint = event.value
    this.customerIdService.getFormData(event.value).subscribe(data => {
      this.angForm.patchValue({
        JOINT_ACNAME: data.AC_NAME
      })
    })
  }
  jointAccount($event) {
    if ($event.target.checked) {
      this.JointAccountsTrue = true
    } else {
      this.JointAccountsTrue = false
    }
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
            this.angForm.controls['JOINT_AC_CUSTID'].reset()
            this.jointID = null
            this.jointID = ''
            this.resetJointAC()
          }
          else {
            if (this.multiJointAC.find(ob => ob['JOINT_AC_CUSTID'] == this.joint)) {

              Swal.fire('', 'This Customer is Already Joint Account Holder', 'warning');
              this.multiJointAC.push(object);
              this.jointID = null
              this.jointID = ''
              this.angForm.controls['JOINT_AC_CUSTID'].reset()
              this.resetJointAC()
            } else {
              this.multiJointAC.push(object);
              this.jointID = null
              this.jointID = ''
              this.angForm.controls['JOINT_AC_CUSTID'].reset()
              this.resetJointAC()
            }
          }
        }
        else {
          Swal.fire('', "Please Select Different Customer id", 'warning');
          this.jointID = null
          this.jointID = ''
          this.angForm.controls['JOINT_AC_CUSTID'].reset()
          this.resetJointAC()
        }
      }
      else {
        Swal.fire('', "Please Select Customer Id", 'warning');
        this.jointID = null
        this.jointID = ''
        this.angForm.controls['JOINT_AC_CUSTID'].reset()
        this.resetJointAC()
      }
    } else {
      Swal.fire('', "Please Select Customer Id", 'warning');
      this.jointID = null
      this.jointID = ''
      this.angForm.controls['JOINT_AC_CUSTID'].reset()
      this.resetJointAC()
    }

  }


  editJointAc(id) {
    this.jointIndex = id
    this.jointACID = this.multiJointAC[id].id;
    this.jointID = this.multiJointAC[id].id;
    this.JointAccountsTrue = true
    this.jointShowButton = false;
    this.jointUpdateShow = true;
    this.angForm.patchValue({
      JOINT_AC_CUSTID: this.multiJointAC[id].JOINT_AC_CUSTID,
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
          this.jointID = null
          this.jointID = ''
          this.angForm.controls['JOINT_AC_CUSTID'].reset()
          this.resetJointAC()
        }
        else {
          if (this.multiJointAC.find(ob => ob['JOINT_AC_CUSTID'] === formVal.JOINT_AC_CUSTID)) {
            Swal.fire("This Customer is Already Exists", "error");
            this.jointID = null
            this.jointID = ''
            this.angForm.controls['JOINT_AC_CUSTID'].reset()
            this.resetJointAC()
          }
          else {
            this.multiJointAC[index] = object
            this.jointID = null
            this.jointID = ''
            this.angForm.controls['JOINT_AC_CUSTID'].reset()
            this.resetJointAC()
          }
        }
      }
      else {
        Swal.fire("Please Select Different Customer id", "error");
        this.jointID = null
        this.jointID = ''
        this.angForm.controls['JOINT_AC_CUSTID'].reset()
        this.resetJointAC()
      }
    } else {
      Swal.fire("Please Select Customer Id", "error");
      this.jointID = null
      this.jointID = ''
      this.angForm.controls['JOINT_AC_CUSTID'].reset()
      this.resetJointAC()
    }
  }

  // delJointAc(id) {
  //   this.multiJointAC.splice(id, 1)
  // }

  resetJointAC() {
    this.angForm.controls['JOINT_ACNAME'].reset();
    this.angForm.patchValue({
      JOINT_ACNAME: ''
    })
    this.jointID.clearFilter();
  }

  clearFilter() {
    this.jointID = ''
  }

  delNominee(id, data) {
    if (this.isDeleted) {
      this.multiNominee.splice(id, 1)
      // console.log(data)

      this.http.delete(this.url + '/nominee/delete/' + data.id).subscribe(data => {
        Swal.fire('', 'Nominee Deleted Successfully!', 'success');
      })
    }
  }

  delJointAc(id, data) {
    if (this.isDeleted) {
      this.multiJointAC.splice(id, 1)

      this.http.delete(this.url + '/term-deposits-master/jointacdelete/' + data.id).subscribe(data => {
        Swal.fire('', 'Joint Account Deleted Successfully!', 'success');
      })
    }
  }




}

