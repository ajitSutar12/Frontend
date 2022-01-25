import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
//animation
import { animate, style, transition, trigger } from '@angular/animations';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
//date pipe
import { DatePipe } from '@angular/common';
// Service File For Handling CRUD Operation
import { ShareMasterService } from './shares-master.service'
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
//Service file of dropdown
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { CustomerIdService } from '../customer-id/customer-id.service';
import { categoryMasterService } from '../../../../shared/dropdownService/category-master-dropdown.service';
import { MembershipTypeDropdownService } from '../../../../shared/dropdownService/membership-type-dropdown.service';
import { SignTypeDropdownService } from '../../../../shared/dropdownService/sign-type-dropdown.service'
import { DirectorMasterDropdownService } from '../../../../shared/dropdownService/director-master-dropdown.service'
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { SubSalaryDMasterdropdownService } from '../../../../shared/dropdownService/subsalary-division-master-dropdown.service'
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { SalaryDMasterdropdownService } from '../../../../shared/dropdownService/salary-division-master-dropdown.service'
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SharesSchemeService } from '../../../utility/scheme-parameters/shares-scheme/shares-scheme.service';
import { environment } from '../../../../../environments/environment'
import { first } from 'rxjs/operators';
import * as moment from 'moment';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface ShareMaster {
  AC_ACNOTYPE: string
  AC_TYPE: string
  AC_NO: number
  AC_CUSTID: number
  EMP_NO: string
  AC_NAME: string
  AC_JOIN_DATE: string
  AC_RETIRE_DATE: string
  MEMBERSHIP_BY: string
  AC_SREPRESENT: string
  AC_OPDATE: string
  AC_EXPDT: string
  DEATH_DATE: string
  AC_DIRECT: string
  AC_BRANCH: string
  SUB_SALARYDIVISION_CODE: string
  AC_IS_RECOVERY: boolean
  AC_SBNO: string
  AC_RESNO: string
  AC_RESDT: string
  AC_INSTALLMENT: string
  REF_ACNO: string
  AC_NARR: string
  // AC_SHBALDATE: string
  // AC_OP_SHNO: string
  // AC_FACE_VALUE: string
  // AC_OP_BAL: string
  AC_DEV_NAME: string
  AC_DEV_WARD: string
  AC_DEV_ADD: string
  AC_DEV_GALLI: string
  AC_DEV_AREA: string
  AC_DEV_CITYCODE: string
  AC_ADDFLAG: boolean
  AC_THONO: string;
  AC_TWARD: string;
  AC_TADDR: string;
  AC_TGALLI: string;
  AC_TAREA: string;
  AC_TCTCODE: number;
  AC_TPIN: number
  BANKACNO: number
}

@Component({
  selector: 'app-shares-master',
  templateUrl: './shares-master.component.html',
  styleUrls: ['./shares-master.component.scss'],
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

export class SharesMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })

  bsValue
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  shareMaster: ShareMaster[];
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
  //Nominee variables
  nomineeTrue: boolean = false;
  multiNominee = [];
  nomineeIndex: number
  nomineeID
  nomineeShowButton: boolean = true
  nomineeUpdateShow: boolean = false
  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};

  addType: string
  datemax: any;//setting max date

  //temp address flag variable
  tempAddress: boolean = true;

  //url to display document
  documentUrl = this.url + '/'

  //array of document of customer
  customerDoc = []

  //variable to calculate retirement date
  schemeCode: string = ''

  //Scheme type variable
  schemeType: string = 'SH'
  shareSchemeType

  //Dropdown options
  scheme //scheme code from schemast(S_ACNOTYPE)
  Cust_ID: any[] //customer id from idmaster
  category: any[] //from category master
  // membershipType: Array<IOption> = this.membershipTypeDropdownService.getCharacters(); //membership type default option
  signType: Array<IOption> = this.signTypeDropdownService.getCharacters();   //sign type default option
  city //city from customer id from idmaster
  ncity
  cast: string // customer id from idmaster
  occupation: string // customer id from idmaster
  director: any[]//from directormaster
  branch_code: any[]//from ownbranchmaster
  salary_div: any[] // salary division master
  sub_salary_div: any[] //information sub salary master
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;
  //dropdown ngModel variables
  id: any = null;
  ngCategory: any = null
  selectmembershipType: any = null
  ngCity: any = null
  directorList: any = null
  branch_codeList: any = null
  salary_divList: any = null
  sub_salary_divList: any = null
  ngNcity: any = null


  membershipType = [
    { 'ID': 'Direct', 'NAME': 'Direct' },
    { 'ID': 'Transfer', 'NAME': 'Transfer' },
  ]

  AC_TYPE: boolean = false
  AC_CUSTID: boolean = false
  maxDate

  @ViewChild('ctdTabset') ctdTabset;
  selectedImagePreview: any;

  public visible = false;
  public visibleAnimate = false;
  constructor(
    private http: HttpClient,
    private ShareMasterService: ShareMasterService,
    private membershipTypeDropdownService: MembershipTypeDropdownService,
    private signTypeDropdownService: SignTypeDropdownService,
    private customerID: CustomerIDMasterDropdownService,
    private customerIdService: CustomerIdService,
    private categoryMasterService: categoryMasterService,
    private directorMasterDropdownService: DirectorMasterDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,
    private subSalaryDMasterdropdownService: SubSalaryDMasterdropdownService,
    private cityMasterService: cityMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private salaryDMasterdropdownService: SalaryDMasterdropdownService,
    private systemParameter: SystemMasterParametersService,
    private sharesSchemeService: SharesSchemeService,
    private datePipe: DatePipe,
    private fb: FormBuilder) {

    // this.setdate();
    this.maxDate = new Date();
    // let date = moment().subtract(18, 'years')
    // console.log("constructor date")
    // let set = date.toDate()
    // let setdat = moment(set).format('YYYY-MM-DD')
    // this.maxDate=setdat
    // console.log(this.maxDate)
    // console.log(this.maxDate.setDate(date.toDate()))
    console.log(this.maxDate.getDate() - 18)
    console.log(this.maxDate.setDate(this.maxDate.getDate() - 18));

    // this.datemax =new Date() ;
    // this.datemax = new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2);
  }

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
        dataTableParameters['filterData'] = this.filterData;
        this.http.post<DataTableResponse>(
          this.url + '/share-master',
          dataTableParameters
        ).subscribe(resp => {
          this.shareMaster = resp.data;
          console.log('share table', this.shareMaster)
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
          title: 'Member Number',
          data: 'AC_NO'
        },
        {
          title: 'Customer ID',
          data: 'AC_CUSTID'
        },
        {
          title: 'Member Name',
          data: 'AC_NAME'
        },
        {
          title: 'Employee Number',
          data: 'EMP_NO'
        },
        {
          title: 'Manual Reference Number',
          data: 'REF_ACNO'
        },
        {
          title: 'Represented by',
          data: 'AC_SREPRESENT'
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
          title: 'Open Date',
          data: 'AC_OPDATE'
        },
        {
          title: 'Branch Code',
          data: 'AC_BRANCH'
        },
      ],
      dom: 'Blrtip',
    };

    this.runTimer();
    this.dataSub = this.signTypeDropdownService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    // this.membershipTypeDropdownService.loadCharacters().subscribe((options) => {
    //   this.membershipType = options;
    // });
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
    })
    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.schemeCode = data[0].value
      // this.shareSchemeType = data[0].name
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
    this.salaryDMasterdropdownService.getSalaryDMasterList().pipe(first()).subscribe(data => {
      this.salary_div = data;
    })
    this.subSalaryDMasterdropdownService.getSubSalaryDMasterList().pipe(first()).subscribe(data => {
      this.sub_salary_div = data;
    })
    this.cityMasterService.getcityList().pipe(first()).subscribe(data => {
      this.city = data;
    })
    this.cityMasterService.getcityList().pipe(first()).subscribe(data => {

      this.ncity = data
      console.log('city', this.ncity)
    })
  }

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

  addNewCustomer(newCustomer) {
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.id = newCustomer;
      this.getCustomer(newCustomer);
    })
  }

  getCustomer(id) {
    console.log('getcustomer', id)
    this.getSystemParaDate() //function to set date
    this.customerIdService.getFormData(id).subscribe(data => {
      this.customerDoc = data.custdocument
      this.tempAddress = data.custAddress[0]?.AC_ADDFLAG
      if (data.castMaster == null) {
        data.castMaster = ""
      }
      if (data.occupMaster == null) {
        data.occupMaster = ""
      }
      this.id = data.id
      this.angForm.patchValue({
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_CAST: data.castMaster.NAME,
        AC_OCODE: data.occupMaster.NAME,
        AC_MEM_BIRTH_DT: moment(data.AC_BIRTH_DT).format('DD/MM/YYYY'),
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


  customer(event) {
    this.ShareMasterService.getData().subscribe(data => {
      if (data?.length == 0) {
        this.getCustomer(event.value);
      }
      else {
        // debugger
        if (data.find(data => data['AC_TYPE'] == this.schemeCode && data['AC_CUSTID'] == event.value && (data['AC_CLOSEDT'] == '' || data['AC_CLOSEDT'] == null))) {

          Swal.fire({
            icon: 'info',
            title: 'Share Account Already Exists For This Scheme',
          })
          // this.resetForm()
          this.angForm.controls['AC_CUSTID'].reset()
          event.id = null
          this.id = null
          this.id = ''


        } else {
          this.getCustomer(event.value);
        }
      }
    })
    // console.log('customer', event)
    // this.getCustomer(event.value);
  }

  disabledate(data: any) {
    if (data != "") {
      if (data > this.datemax) {
        Swal.fire('Invalid Input!', 'Please insert valid date!', 'error');
        (document.getElementById("AC_OPDATE") as HTMLInputElement).value = ""
      }
    }
  }
  //set open date, appointed date and expiry date 

  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      console.log('data.current', data.CURRENT_DATE)
      // let date1 = moment(data.CURRENT_DATE).format('DD/MM/YYYY');
      // this.openingDate = date1;
      this.angForm.patchValue({
        // AC_OPDATE: this.openingDate,
        AC_OPDATE: moment(data.CURRENT_DATE).format('DD/MM/YYYY'),
      })

      if (data.ON_LINE === true) {
        this.angForm.controls['AC_OPDATE'].disable()
      } else {
        this.angForm.controls['AC_OPDATE'].enable()
      }
    })
  }

  //set date 18 years before current date
  setdate() {
    const d = new Date();
    let day = d.getDate();
    const m = new Date().getMonth()
    const year = new Date().getFullYear() - 18
    this.datemax = year + "-" + m + "-" + day;
  }
  //set date on keyup event
  keyupdate() {
    console.log('join date value', this.angForm.controls['AC_JOIN_DATE'].value)
    let date1 = moment(this.angForm.controls['AC_JOIN_DATE'].value).format('DD/MM/YYYY');
    console.log('join date', date1)
    let d = new Date();
    let day = d.getDate();
    let m = new Date().getMonth()
    let getMonth = Number(m + 1)
    const year = new Date().getFullYear() - 18;
    this.datemax = year + "-" + m + "-" + day;
    let todayDate = day + "/" + getMonth + "/" + year;
    let date2 = moment(todayDate).format('DD/MM/YYYY');
    if (date1 != "") {
      if (date1 >= this.datemax) {
        Swal.fire("Cancelled", "please input date below" + date2, "error");
        this.angForm.patchValue({
          AC_JOIN_DATE: ''
        })
      }
    }
  }

  getRetirementDate() {
    this.sharesSchemeService.getFormData(this.schemeCode).subscribe(data => {
      console.log('retirement yr', data.RETIREMENT_YEARS)
      var joinDate = new Date(this.angForm.controls['AC_JOIN_DATE'].value)
      var year = joinDate.getFullYear();
      var month = new Date(joinDate).getMonth();
      var day = new Date(joinDate).getDate();
      var retire = year + Number(data.RETIREMENT_YEARS)
      var date = new Date(retire, month, day);
      var retireDate = this.datePipe.transform(date, "dd/MM/yyyy")
      this.angForm.patchValue({
        AC_RETIRE_DATE: retireDate
      })
    })
  }

  // getRetirementDate() {
  //   this.sharesSchemeService.getFormData(this.schemeCode).subscribe(data => {
  //     var joinDate = new Date(this.angForm.controls['AC_JOIN_DATE'].value)
  //     var year = joinDate.getFullYear();
  //     var month = new Date(joinDate).getMonth();
  //     var day = new Date(joinDate).getDate();
  //     var retire = year + Number(data.RETIREMENT_YEARS)
  //     var date = new Date(retire, month, day);
  //     var retireDate = this.datePipe.transform(date, "dd-MM-yyyy")
  //     this.angForm.patchValue({
  //       AC_RETIRE_DATE: retireDate
  //     })
  //   })
  // }

  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: [''],
      AC_ACNOTYPE: ['SH'],
      AC_NO: [''],
      AC_TITLE: [''],
      AC_CUSTID: ['', [Validators.required]],
      AC_NAME: [''],
      //basic controls
      AC_CATG: ['0', [Validators.required]],
      EMP_NO: ['', [Validators.pattern]],
      AC_MEM_BIRTH_DT: [''],
      AC_JOIN_DATE: [''],
      AC_RETIRE_DATE: [''],
      MEMBERSHIP_BY: ['', [Validators.required]],
      AC_SREPRESENT: ['', [Validators.pattern]],
      AC_HONO: ['',],
      AC_WARD: ['',],
      AC_ADDR: ['',],
      AC_GALLI: ['',],
      AC_AREA: [''],
      AC_CTCODE: [''],
      AC_PIN: [''],
      AC_RECOVERY: [''],
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
      BANKACNO: [''],
      //other tab controls
      AC_OPDATE: ['', [Validators.required]],
      AC_EXPDT: [''],
      DEATH_DATE: [''],
      AC_CAST: [''],
      AC_OCODE: [''],
      AC_DIRECT: ['', [Validators.required]],
      AC_BRANCH: ['', [Validators.required]],
      AC_SALARYDIVISION_CODE: [''],
      SUB_SALARYDIVISION_CODE: [''],
      AC_SBNO: ['', [Validators.pattern]],
      AC_RESNO: ['', [Validators.required, Validators.pattern]],
      AC_RESDT: ['', [Validators.required]],
      AC_IS_RECOVERY: [false],
      AC_INSTALLMENT: ['', [Validators.pattern]],
      REF_ACNO: ['', [Validators.pattern]],
      AC_NARR: ['', [Validators.pattern]],

      //nominee controls (NOMINEELINK table)
      AC_NNAME: ['', [Validators.pattern]],
      AC_NRELA: ['', [Validators.pattern]],
      AC_NDATE: ['', []],
      AGE: ['', [Validators.pattern, Validators.min(1), Validators.max(100)]],
      AC_NHONO: ['', [Validators.pattern]],
      AC_NWARD: ['', [Validators.pattern]],
      AC_NADDR: ['', [Validators.pattern]],
      AC_NGALLI: ['', [Validators.pattern]],
      AC_NAREA: ['', [Validators.pattern]],
      AC_NCTCODE: ['', [Validators.pattern]],
      AC_NPIN: ['', [Validators.pattern]],

      //shares details under nominee tab
      // AC_SHBALDATE: [''],
      // AC_OP_SHNO: ['', [Validators.pattern]],
      // AC_FACE_VALUE: ['', [Validators.pattern]],
      // AC_OP_BAL: ['', [Validators.pattern]],

      //marathi details
      AC_DEV_NAME: [''],
      AC_DEV_WARD: [''],
      AC_DEV_ADD: [''],
      AC_DEV_GALLI: [''],
      AC_DEV_AREA: [''],
      AC_DEV_CITYCODE: [''],
    });
  }
  getShareScheme(value) {
    console.log('in getsharescheme', value)
    this.shareSchemeType = value.name
    console.log('shareschmetype', this.shareSchemeType)
  }
  resDT

  // Method to insert data into database through NestJS
  submit(event) {
   
    event.preventDefault();
    this.formSubmitted = true;
    console.log('formval value', this.angForm.value)
    if (this.angForm.valid) {
      const formVal = this.angForm.value;
      if (formVal.AC_ADDFLAG == true) {
        this.addType = 'P'
      }
      else if (formVal.AC_ADDFLAG == false) {
        this.addType = 'T'
      }
      if (this.angForm.controls['AC_TCTCODE'].value == "") {
        formVal.AC_TCTCODE = null
      }
      //get bank code and branch code from session
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let schecode
      console.log('result', result)
      let branchCode = result.branch.id;
      this.scheme.forEach(async (element) => {
        console.log(element.name)
        if (element.value == this.schemeCode) {
          schecode = element.name
          console.log(schecode)
        }
      })

      // let bankCode = Number(result.branch.syspara[0].BANK_CODE)    
      let bankCode = Number(result.branch.syspara.BANK_CODE)
      let joindate
      let opdate
      let exdate
      let deadate
      let retairdate
      let resdate

      const dataToSend = {
        'branchCode': branchCode,
        'bankCode': bankCode,
        'schemeCode': schecode,
        'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
        'AC_TYPE': formVal.AC_TYPE,
        'AC_CUSTID': formVal.AC_CUSTID,
        'AC_NAME': formVal.AC_NAME,
        'AC_CATG': parseInt(formVal.AC_CATG),
        'EMP_NO': formVal.EMP_NO,
        'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
        'AC_SALARYDIVISION_CODE': formVal.AC_SALARYDIVISION_CODE,
        'AC_JOIN_DATE': (formVal.AC_JOIN_DATE == '' || formVal.AC_JOIN_DATE == 'Invalid date') ? joindate = '' : joindate = moment(formVal.AC_JOIN_DATE).format('DD/MM/YYYY'),
        'AC_OPDATE': (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == 'Invalid date') ? opdate = '' : opdate = moment(formVal.AC_OPDATE).format('DD/MM/YYYY'),
        'AC_EXPDT': (formVal.AC_EXPDT == '' || formVal.AC_EXPDT == 'Invalid date') ? exdate = '' : exdate = moment(formVal.AC_EXPDT).format('DD/MM/YYYY'),
        'DEATH_DATE': (formVal.DEATH_DATE == '' || formVal.DEATH_DATE == 'Invalid date') ? deadate = '' : deadate = moment(formVal.DEATH_DATE).format('DD/MM/YYYY'),
        'AC_DIRECT': formVal.AC_DIRECT,
        'AC_BRANCH': formVal.AC_BRANCH,
        'AC_RETIRE_DATE': (formVal.AC_RETIRE_DATE == '' || formVal.AC_RETIRE_DATE == 'Invalid date') ? retairdate = '' : retairdate = moment(formVal.AC_RETIRE_DATE).format('DD/MM/YYYY'),
        'MEMBERSHIP_BY': formVal.MEMBERSHIP_BY,
        'AC_SREPRESENT': formVal.AC_SREPRESENT,
        'SUB_SALARYDIVISION_CODE': formVal.SUB_SALARYDIVISION_CODE,
        'AC_SBNO': formVal.AC_SBNO,
        'AC_RESNO': formVal.AC_RESNO,
        'AC_RESDT': (formVal.AC_RESDT == '' || formVal.AC_RESDT == 'Invalid date') ? resdate = '' : resdate = moment(formVal.AC_RESDT).format('DD/MM/YYYY'),
        'AC_INSTALLMENT': formVal.AC_INSTALLMENT,
        'REF_ACNO': formVal.REF_ACNO,
        'AC_NARR': formVal.AC_NARR,
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

        //shares details under nominee tab
        // 'AC_SHBALDATE': formVal.AC_SHBALDATE,
        // 'AC_OP_SHNO': formVal.AC_OP_SHNO,
        // 'AC_FACE_VALUE': formVal.AC_FACE_VALUE,
        // 'AC_OP_BAL': formVal.AC_OP_BAL,

        //marathi details
        'AC_DEV_NAME': formVal.AC_DEV_NAME,
        'AC_DEV_WARD': formVal.AC_DEV_WARD,
        'AC_DEV_ADD': formVal.AC_DEV_ADD,
        'AC_DEV_GALLI': formVal.AC_DEV_GALLI,
        'AC_DEV_AREA': formVal.AC_DEV_AREA,
        'AC_DEV_CITYCODE': formVal.AC_DEV_CITYCODE,
        //Nominee 
        'NomineeData': this.multiNominee
      }
      console.log('datatosend', dataToSend)

      this.ShareMasterService.postData(dataToSend).subscribe(data => {
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
      this.customerDoc = []
    }
  }

  AC_OPDATE: boolean = false
  //Method for append data into fields
  editClickHandler(id) {
    let joindate
    let retairdate
    let opdate
    let exdate
    let deathdate
    let resdate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.angForm.controls['AC_TYPE'].disable()
    this.AC_OPDATE = true
    this.ShareMasterService.getFormData(id).subscribe(data => {
    
      console.log('edit data', data)
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      this.schemeCode = data.AC_TYPE
      this.ngCategory = data.AC_CATG
      this.selectmembershipType = data.MEMBERSHIP_BY
      this.directorList = Number(data.AC_DIRECT)
      this.branch_codeList = Number(data.AC_BRANCH)
      this.salary_divList = data.AC_SALARYDIVISION_CODE == null ? this.salary_divList = null : Number(data.AC_SALARYDIVISION_CODE)
      this.sub_salary_divList = data.SUB_SALARYDIVISION_CODE == null ? this.sub_salary_divList = null : Number(data.SUB_SALARYDIVISION_CODE)
      //get nominee to edit
      this.multiNominee = data.nomineeDetails
      this.angForm.patchValue({
        AC_ACNOTYPE: data.AC_ACNOTYPE,
        // AC_TYPE: data.AC_TYPE.toString(),
        'AC_NO': data.AC_NO,
        // 'AC_CATG': data.AC_CATG.toString(),
        // 'AC_SALARYDIVISION_CODE': data.AC_SALARYDIVISION_CODE,
        'EMP_NO': data.EMP_NO,
        'AC_JOIN_DATE': (data.AC_JOIN_DATE == 'Invalid date' || data.AC_JOIN_DATE == '' || data.AC_JOIN_DATE == null) ? joindate = '' : joindate = data.AC_JOIN_DATE,
        'AC_RETIRE_DATE': (data.AC_RETIRE_DATE == 'Invalid date' || data.AC_RETIRE_DATE == '' || data.AC_RETIRE_DATE == null) ? retairdate = '' : retairdate = data.AC_RETIRE_DATE,
        // 'MEMBERSHIP_BY': data.MEMBERSHIP_BY,
        'AC_SREPRESENT': data.AC_SREPRESENT,
        'BANKACNO': data.BANKACNO,
        //other controls
        'AC_OPDATE': (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? opdate = '' : opdate = data.AC_OPDATE,
        'AC_EXPDT': (data.AC_EXPDT == 'Invalid date' || data.AC_EXPDT == '' || data.AC_EXPDT == null) ? exdate = '' : exdate = data.AC_EXPDT,
        'DEATH_DATE': (data.DEATH_DATE == 'Invalid date' || data.DEATH_DATE == '' || data.DEATH_DATE == null) ? deathdate = '' : deathdate = data.DEATH_DATE,
        // 'AC_DIRECT': data.AC_DIRECT,
        // 'AC_BRANCH': data.AC_BRANCH,
        // 'SUB_SALARYDIVISION_CODE': data.SUB_SALARYDIVISION_CODE,
        'AC_SBNO': data.AC_SBNO,
        'AC_RESNO': data.AC_RESNO,
        'AC_RESDT': (data.AC_RESDT == 'Invalid date' || data.AC_RESDT == '' || data.AC_RESDT == null) ? resdate = '' : resdate = data.AC_RESDT,
        'AC_IS_RECOVERY': data.AC_IS_RECOVERY,
        'AC_INSTALLMENT': data.AC_INSTALLMENT,
        'REF_ACNO': data.REF_ACNO,
        'AC_NARR': data.AC_NARR,

        //shares details under nominee tab
        // 'AC_SHBALDATE': data.AC_SHBALDATE,
        // 'AC_OP_SHNO': data.AC_OP_SHNO,
        // 'AC_FACE_VALUE': data.AC_FACE_VALUE,
        // 'AC_OP_BAL': data.AC_OP_BAL,

        //marathi details
        'AC_DEV_NAME': data.AC_DEV_NAME,
        'AC_DEV_WARD': data.AC_DEV_WARD,
        'AC_DEV_ADD': data.AC_DEV_ADD,
        'AC_DEV_GALLI': data.AC_DEV_GALLI,
        'AC_DEV_AREA': data.AC_DEV_AREA,
        'AC_DEV_CITYCODE': data.AC_DEV_CITYCODE
      })
    })
  }

  //Method for update data 
  updateData() {
    let joindate
    let opdate
    let exdate
    let deadate
    let retairdate
    let resdate
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
    data['AC_TYPE'] = this.schemeCode
    data['AC_ADDTYPE'] = this.addType
    data['NomineeData'] = this.multiNominee,
      // data['AC_OPDATE'] = this.angForm.controls['AC_OPDATE'].value
      // // data['AC_RESDT'] = this.angForm.controls['AC_RESDT'].value// moment(this.angForm.controls['AC_RESDT'].value).format('DD/MM/YYYY');
      // data['AC_RESDT'] = this.resDT
      (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = data.AC_OPDATE, data['AC_OPDATE'] = moment(opdate).format('DD/MM/YYYY')),

      (data.AC_JOIN_DATE == 'Invalid date' || data.AC_JOIN_DATE == '' || data.AC_JOIN_DATE == null) ? (joindate = '', data['AC_JOIN_DATE'] = joindate) : (joindate = data.AC_JOIN_DATE, data['AC_JOIN_DATE'] = moment(joindate).format('DD/MM/YYYY')),

      (data.AC_EXPDT == 'Invalid date' || data.AC_EXPDT == '' || data.AC_EXPDT == null) ? (exdate = '', data['AC_EXPDT'] = exdate) : (exdate = data.AC_EXPDT, data['AC_EXPDT'] = moment(exdate).format('DD/MM/YYYY')),

      (data.DEATH_DATE == 'Invalid date' || data.DEATH_DATE == '' || data.DEATH_DATE == null) ? (deadate = '', data['DEATH_DATE'] = deadate) : (deadate = data.DEATH_DATE, data['DEATH_DATE'] = moment(deadate).format('DD/MM/YYYY')),

      (data.AC_RETIRE_DATE == 'Invalid date' || data.AC_RETIRE_DATE == '' || data.AC_RETIRE_DATE == null) ? (retairdate = '', data['AC_RETIRE_DATE'] = retairdate) : (retairdate = data.AC_RETIRE_DATE, data['AC_RETIRE_DATE'] = moment(retairdate).format('DD/MM/YYYY')),

      (data.AC_RESDT == 'Invalid date' || data.AC_RESDT == '' || data.AC_RESDT == null) ? (resdate = '', data['AC_RESDT'] = resdate) : (resdate = data.AC_RESDT, data['AC_RESDT'] = moment(resdate).format('DD/MM/YYYY')),

      // 'AC_JOIN_DATE': formVal.AC_JOIN_DATE == "" ? null : moment(formVal.AC_JOIN_DATE).format('DD/MM/YYYY'),
      // 'AC_OPDATE': this.angForm.controls['AC_OPDATE'].value,// moment(formVal.AC_OPDATE).format('DD/MM/YYYY'),
      // 'AC_EXPDT': formVal.AC_EXPDT == "" ? null : moment(formVal.AC_EXPDT).format('DD/MM/YYYY'),
      // 'DEATH_DATE': formVal.DEATH_DATE == "" ? null : moment(formVal.DEATH_DATE).format('DD/MM/YYYY'),
      // 'AC_DIRECT': formVal.AC_DIRECT,
      // 'AC_BRANCH': formVal.AC_BRANCH,
      // 'AC_RETIRE_DATE': formVal.AC_RETIRE_DATE == "" ? null : moment(formVal.AC_RETIRE_DATE).format('DD/MM/YYYY'),
      // 'MEMBERSHIP_BY': formVal.MEMBERSHIP_BY,
      // 'AC_SREPRESENT': formVal.AC_SREPRESENT,
      // 'SUB_SALARYDIVISION_CODE': formVal.SUB_SALARYDIVISION_CODE,
      // 'AC_SBNO': formVal.AC_SBNO,
      // 'AC_RESNO': formVal.AC_RESNO,
      // 'AC_RESDT': moment(formVal.AC_RESDT).format('DD/MM/YYYY'),

      data['id'] = this.updateID;
    console.log('update datasend', data)
    this.ShareMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.multiNominee = []
      this.customerDoc = []
      this.resetForm();
    })
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.multiNominee = []
    this.customerDoc = []
    this.tempAddress = true
    this.resetForm();
  }

  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Share master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ShareMasterService.deleteData(id).subscribe(data1 => {
          this.shareMaster = data1;
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
    this.angForm.controls['AC_TYPE'].enable()
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#sharemastertable tfoot tr').appendTo('#sharemastertable thead');
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

  // ngAfterViewInit(): void {
  //   this.dtTrigger.next();
  //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.columns().every(function () {
  //       const that = this;
  //       $('input', this.footer()).on('keyup change', function () {
  //         if (this['value'] != '') {
  //           that
  //             .search(this['value'])
  //             .draw();
  //         } else {
  //           that
  //             .search(this['value'])
  //             .draw();
  //         }
  //       });
  //     });
  //   });
  // }

  // Reset Function
  resetForm() {
    this.createForm();
    this.resetNominee()
    this.angForm.controls['AC_TYPE'].enable()
    this.tempAddress = true
    this.nomineeTrue = false
    this.schemeCode = null
    this.id = null;
    this.ngCategory = null
    this.selectmembershipType = null
    this.ngCity = null
    this.directorList = null
    this.branch_codeList = null
    this.salary_divList = null
    this.sub_salary_divList = null
    this.ngNcity = null

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

  OpenLink() {
    this.nomineeTrue = !this.nomineeTrue;
  }

  //nominee
  addNominee(cityname) {
    console.log('cityname', cityname)
    let nodate
    const formVal = this.angForm.value;
    var object = {
      AC_NNAME: formVal.AC_NNAME,
      AC_NRELA: formVal.AC_NRELA,
      AC_NDATE: (formVal.AC_NDATE == '' || formVal.AC_NDATE == 'Invalid date') ? nodate = '' : nodate = moment(formVal.AC_NDATE).format('DD/MM/YYYY'),
      AGE: formVal.AGE,
      AC_NHONO: formVal.AC_NHONO,
      AC_NWARD: formVal.AC_NWARD,
      AC_NADDR: formVal.AC_NADDR,
      AC_NGALLI: formVal.AC_NGALLI,
      AC_NAREA: formVal.AC_NAREA,
      // AC_NCTCODE: formVal.AC_NCTCODE.CITY_NAME == null ? "" : formVal.AC_NCTCODE.CITY_NAME,
      AC_NCTCODE: formVal.AC_NCTCODE,
      AC_NPIN: formVal.AC_NPIN,
      AC_CITYNAME: formVal.AC_NCTCODE
    }
    console.log('nominee model', this.ngNcity)
    console.log('nominee object', object)
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

  editNominee(id) {
    let nodate
    console.log('multinominee', this.multiNominee)
    this.nomineeIndex = id
    this.nomineeID = this.multiNominee[id].id;
    this.nomineeTrue = true
    this.nomineeShowButton = false;
    this.nomineeUpdateShow = true;
    this.ngNcity = Number(this.multiNominee[id].AC_NCTCODE),
      this.angForm.patchValue({
        AC_NNAME: this.multiNominee[id].AC_NNAME,
        AC_NRELA: this.multiNominee[id].AC_NRELA,
        AC_NDATE: (this.multiNominee[id].AC_NDATE == 'Invalid date' || this.multiNominee[id].AC_NDATE == '' || this.multiNominee[id].AC_NDATE == null) ? nodate = '' : nodate = this.multiNominee[id].AC_NDATE,
        AGE: this.multiNominee[id].AGE,
        AC_NHONO: this.multiNominee[id].AC_NHONO,
        AC_NWARD: this.multiNominee[id].AC_NWARD,
        AC_NADDR: this.multiNominee[id].AC_NADDR,
        AC_NGALLI: this.multiNominee[id].AC_NGALLI,
        AC_NAREA: this.multiNominee[id].AC_NAREA,
        // AC_NCTCODE: this.multiNominee[id].AC_NCTCODE,    
        AC_NPIN: this.multiNominee[id].AC_NPIN,
        // AC_NCTCODE: this.multiNominee[id].AC_CITYNAME,
      })
  }

  updateNominee() {
    let nodate
    let index = this.nomineeIndex;
    this.nomineeShowButton = true;
    this.nomineeUpdateShow = false;
    const formVal = this.angForm.value;
    var object = {
      AC_NNAME: formVal.AC_NNAME,
      AC_NRELA: formVal.AC_NRELA,
      AC_NDATE: (formVal.AC_NDATE == '' || formVal.AC_NDATE == 'Invalid date' || formVal.AC_NDATE == null) ? nodate = '' : nodate = moment(formVal.AC_NDATE).format('DD/MM/YYYY'),
      AGE: formVal.AGE,
      AC_NHONO: formVal.AC_NHONO,
      AC_NWARD: formVal.AC_NWARD,
      AC_NADDR: formVal.AC_NADDR,
      AC_NGALLI: formVal.AC_NGALLI,
      AC_NAREA: formVal.AC_NAREA,
      AC_NCTCODE: formVal.AC_NCTCODE,
      AC_NPIN: formVal.AC_NPIN,
      // AC_CITYNAME: formVal.AC_NCTCODE.CITY_NAME,
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
            // if (this.multiNominee.find(ob => ob['AC_NNAME'].toUpperCase() === formVal.AC_NNAME.toUpperCase())) {
            //   Swal.fire("This Nominee is Already Exists", "error");
            // } else {
            //   this.multiNominee[index] = object;
            // }
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
  switchNgBTab(id: string) {
    this.ctdTabset.select(id);
  }

  nominee($event) {
    if ($event.target.checked) {
      this.nomineeTrue = true
    } else {
      this.nomineeTrue = false
    }
  }
  viewImagePreview(ele, id) {
    this.selectedImagePreview = id;
  }
  decimalAllContent($event) {
    let value = Number($event.target.value);
    let data = value.toFixed(2);
    $event.target.value = data;
  }

  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
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
}