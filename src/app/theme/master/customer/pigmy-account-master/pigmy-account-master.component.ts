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
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgSelectComponent } from '@ng-select/ng-select';
import { DirectorMasterDropdownService } from '../../../../shared/dropdownService/director-master-dropdown.service';

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
  AGENT_BRANCH: number
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
  BANKACNO: number
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
  @Output() reloadTablePassing = new EventEmitter<string>();
  formSubmitted = false;
  //api 

  url = environment.base_url;
  logDate
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
  recomBy
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
  introducerACNo: any[] //account no for introducer
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
  imageObject = new Array();
  selectedImgArrayDetails = [];
  urlMap: SafeResourceUrl
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

  //temp address flag variable
  tempAddress: boolean = true;
  Cust_ID: any[]

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
  unapproveShow: boolean = false;
  maxDate: any
  AGENTBRANCH: any = null
  Recommended: any[]

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
    private directorMasterDropdown: DirectorMasterDropdownService,
    public sanitizer: DomSanitizer,
    private datePipe: DatePipe,) {
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

        dataTableParameters.minNumber = dataTableParameters.start + 1;
        dataTableParameters.maxNumber =
          dataTableParameters.start + dataTableParameters.length;
        this.page = dataTableParameters.start / dataTableParameters.length;
        let data: any = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;

        dataTableParameters['branchCode'] = branchCode;
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/pigmy-account-master',
            dataTableParameters
          ).subscribe(resp => {
            this.pigmyAccountMaster = resp.data;
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
          title: 'Member Name',
          data: 'AC_NAME'
        },
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
        {
          title: 'Opening Date',
          data: 'AC_OPDATE'
        },
        {
          title: 'Expiry Date',
          data: 'AC_EXPDT'
        },
        {
          title: 'Period',
          data: 'AC_MONTHS'
        },
        {
          title: 'Default Deposite Amount',
          data: 'AC_SCHMAMT'
        },
        {
          title: 'Agent Code',
          data: 'AGENT_ACNO'
        }, {
          title: 'Minor Details',
          data: 'AC_MINOR'
        },
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
    this.directorMasterDropdown.getDirectorMasterList().pipe(first()).subscribe(data => {
      this.Recommended = data;
    })
    this.categoryMasterService.getcategoryList().pipe(first()).subscribe(data => {
      // var allscheme = data.filter(function (schem) {
      //   return (schem.scheme == 'PG')
      // });
      this.categoryMasterdropdown = data;
    })
    this.IntrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      // var allscheme = data.filter(function (schem) {
      //   return (schem.scheme == 'PG')
      // });
      this.IntrestCategoryMasterDropdown = data;
    })
    this.SchemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {

        return (scheme.id == 'PG');
      });
      this.schemeCode = filtered;

      this.code = this.schemeCode[0].value
    })
    this.SchemeCodeDropdownService.getSchemeCodeList(this.agentSchemeCode).pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {

        return (scheme.id == 'AG');
      });
      this.AgentScheme = filtered;

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
      AC_RECOMMEND_BY: ['', [Validators.required]],
      AC_ACNOTYPE: ['PG'],
      AC_NO: [''],
      AC_CUSTID: ['', [Validators.required, Validators.pattern]],
      AC_TITLE: [''],
      AC_NAME: [''],
      AC_SHORT_NAME: ['', [Validators.pattern, Validators.required]],
      REF_ACNO: ['', [Validators.pattern]],
      AC_MEMBTYPE: [],
      AC_MEMBNO: [''],
      AC_OPDATE: ['', [Validators.required]],
      AC_RENEW_DATE: [''],
      AC_CAST: ['',],
      AC_EXPDT: ['', [Validators.required]],
      AC_OCODE: ['',],
      AC_CATG: ['', [Validators.required]],
      AC_OPR_CODE: ['', [Validators.required]],
      AC_INTCATA: ['', [Validators.required]],
      AC_PANNO: ['', [Validators.pattern]],
      AC_MONTHS: ['', [Validators.pattern, Validators.required]],
      AC_SCHMAMT: ['', [Validators.pattern, Validators.required]],
      AGENT_BRANCH: ['', [Validators.required]],
      AGENT_ACTYPE: ['', [Validators.required]],
      AGENT_ACNO: ['', [Validators.required]],
      AC_HONO: ['', [Validators.pattern]],
      AC_WARD: ['', [Validators.pattern]],
      AC_GALLI: ['', [Validators.pattern]],
      AC_AREA: ['', [Validators.pattern]],
      AC_ADDR: [''],
      AC_CTCODE: ['',],
      AC_TCTCODE: ['',],
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
      BANKACNO: [''],

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
      OPERATOR: [],

    });
    let sysdate = new Date()
    let sysDate = this.datePipe.transform(sysdate, "yyyy-MM-dd")
    this.angForm.patchValue({
      'AC_NDATE': sysDate,
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['AC_INTROBRANCH'].enable()
      this.code1 = result.branch.id

    }
    else {
      this.angForm.controls['AC_INTROBRANCH'].disable()
      this.angForm.patchValue({
        'AC_INTROBRANCH': result.branch.id
      })
      this.code1 = result.branch.id

    }
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
  addNewCustomer(newCustomer) {
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.id = newCustomer;
      this.getCustomer(newCustomer);
    })
  }
  renewDate: any
  tempexpiryDate: any
  getExpiryDate() {
    let months = this.angForm.controls['AC_MONTHS'].value
    if (this.renewDate != undefined && this.renewDate != "") {
      var expiryDate = moment(this.angForm.controls['AC_RENEW_DATE'].value).add(months, 'M').format('DD/MM/YYYY');
      this.tempexpiryDate = expiryDate
      this.angForm.patchValue({
        AC_EXPDT: expiryDate
      })
    }
    else {
      if (this.tempopendate != this.openingDate) {
        var expiryDate = moment(this.openingDate).add(months, 'M').format('DD/MM/YYYY');
        this.tempexpiryDate = expiryDate
        this.angForm.patchValue({
          AC_EXPDT: expiryDate
        })
      } else if (this.openingDate != undefined) {
        var full = []
        var fullDate = this.openingDate;
        full = fullDate.split(' ');
        var date = full[0].split(/\//);
        var newDate = date[1] + '/' + date[0] + '/' + date[2]
        var k = new Date(newDate);
        var expiryDate = moment(k).add(months, 'M').format('DD/MM/YYYY');
        this.tempexpiryDate = expiryDate
        this.angForm.patchValue({
          AC_EXPDT: expiryDate
        })
      }
    }
  }

  //function to toggle temp address field
  tempAsPermanent() {
    this.tempAddress = !this.tempAddress;
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
          // AC_MBDATE: this.angForm.controls['AC_BIRTH_DT'].value
          AC_MBDATE: birthDate
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
  public visible1 = false;
  public visibleAnimate = false;
  tempopendate: any
  openingDate: any
  getSystemParaDate() {

    this.systemParameter.getFormData(1).subscribe(data => {

      this.tempopendate = data.CURRENT_DATE
      this.openingDate = data.CURRENT_DATE

      if (data.ON_LINE === '1') {
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
      let obj = {
        SCHEME_CODE: 'PG'
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
      this.id = data.id
      this.angForm.patchValue({
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_MEMBTYPE: data?.AC_MEMBTYPE,
        AC_MEMBNO: data?.AC_MEMBNO,
        AC_CAST: data.castMaster.NAME,
        AC_OCODE: data.occupMaster.NAME,
        AC_BIRTH_DT: data.AC_BIRTH_DT,
        AC_MBDATE: data.AC_BIRTH_DT,
        AC_PANNO: data.AC_PANNO,
        AC_MOBNO: data.AC_MOBILENO,
        AC_PHNO: data.AC_PHONE_RES,

      })
      this.ageCalculator(data.AC_BIRTH_DT);
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

  onCloseModal() {
    this.visibleAnimate = false;
    setTimeout(() => this.visible1 = false, 300);
  }
  getBranch() {
    this.getIntroducer()
  }

  getschemename: any
  code1: any
  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }
  //get account no according scheme for introducer
  getIntroducer() {
    this.obj = [this.acno, this.code1]
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
  getAgentBranch() {
    this.getAgentAC()
  }

  //get account no according scheme for  pigmy agent
  getAgentAC() {
    this.obj = [this.agentno, this.AGENTBRANCH]
    switch ('AG') {
      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.agentCode = data;
          this.ngAgentCode = null
        })
        break;
    }
  }

  getScheme(value) {
    this.schemeCodeNO = value.name
  }
  ngexpiry: any
  // Method to insert data into database through NestJS
  submit(event) {
    let temdate
    let opdate
    let redate
    event.preventDefault();
    this.formSubmitted = true;
    if (this.angForm.valid) {
      let tempcity
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
      var expiry
      if (this.tempexpiryDate != this.ngexpiry) {
        expiry = (this.ngexpiry == '' || this.ngexpiry == 'Invalid date') ? expiry = '' : expiry = moment(this.ngexpiry).format('DD/MM/YYYY')
      } else {
        expiry = this.ngexpiry
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
      this.schemeCode.forEach(async (element) => {
        if (element.value == this.code) {
          schecode = element.name
        }
      })

      let bankCode = Number(result.branch.syspara.BANK_CODE)

      const dataToSend = {
        'branchCode': branchCode,
        'bankCode': bankCode,
        'schemeCode': schecode,
        'AC_TYPE': formVal.AC_TYPE,
        'AC_NAME': formVal.AC_NAME,
        'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
        'AC_CUSTID': formVal.AC_CUSTID,
        'AC_SHORT_NAME': formVal.AC_SHORT_NAME,
        'REF_ACNO': formVal.REF_ACNO,
        'AC_MEMBTYPE': formVal.AC_MEMBTYPE,
        'AC_MEMBNO': formVal.AC_MEMBNO,
        'AC_OPDATE': temdate,
        'AC_RENEW_DATE': (formVal.AC_RENEW_DATE == '' || formVal.AC_RENEW_DATE == 'Invalid date') ? redate = '' : redate = moment(formVal.AC_RENEW_DATE).format('DD/MM/YYYY'),
        'AC_EXPDT': expiry,
        'AC_OCODE': formVal.AC_OCODE,
        'AC_CATG': parseInt(formVal.AC_CATG),
        'AC_OPR_CODE': parseInt(formVal.AC_OPR_CODE),
        'AC_INTCATA': parseInt(formVal.AC_INTCATA),
        'AC_MONTHS': formVal.AC_MONTHS,
        'AC_SCHMAMT': formVal.AC_SCHMAMT,
        'AGENT_BRANCH': formVal.AGENT_BRANCH,
        'AGENT_ACTYPE': formVal.AGENT_ACTYPE,
        'AGENT_ACNO': formVal.AGENT_ACNO,
        'AC_RECOMMEND_BY': formVal.AC_RECOMMEND_BY,
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
        'AC_MINOR': (formVal.AC_MINOR == true ? '1' : '0'),
        'AC_MBDATE': formVal.AC_MBDATE,
        'AC_GRDNAME': formVal.AC_GRDNAME,
        'AC_GRDRELE': formVal.AC_GRDRELE,
        'AC_INTROBRANCH': formVal.AC_INTROBRANCH,
        'AC_INTROID': formVal.AC_INTROID,
        'AC_INTRACNO': formVal.AC_INTRACNO,
        'AC_INTRNAME': formVal.AC_INTRNAME,
        'SIGNATURE_AUTHORITY': formVal.SIGNATURE_AUTHORITY,
        'PG_COMM_TYPE': (formVal.PG_COMM_TYPE == true ? '1' : '0'),
        //Nominee 
        'NomineeData': this.multiNominee,
        //Joint Account
        'JointAccountData': this.multiJointAC,
        'Document': this.imageObject
      }
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

  AC_OPDATE: any
  updatecheckdata: any
  //Method for append data into fields
  editClickHandler(id, status) {
    this.switchNgBTab('Basic')
    this.angForm.controls['AC_TYPE'].disable()
    this.AC_OPDATE = true
    let opdate
    let redate
    let exdate
    this.PigmyAccountMasterService.getFormData(id).subscribe(data => {
      this.updatecheckdata = data
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
      //get nominee to edit
      this.multiNominee = data.nomineeDetails
      //get joint accounts to edit
      this.multiJointAC = data.jointAccounts
      this.code = data.AC_TYPE
      this.ngCategory = Number(data.AC_CATG)
      this.ngOperation = Number(data.AC_OPR_CODE)
      this.ngint_category = Number(data.AC_INTCATA)
      this.recomBy = Number(data.AC_RECOMMEND_BY)
      this.AGENTBRANCH = data.AGENT_BRANCH
      if ((data.AGENT_ACTYPE != null && data.AGENT_ACNO != null) || (data.AGENT_ACTYPE != "" && data.AGENT_ACNO != "")) {
        this.agentno = Number(data.AGENT_ACTYPE)
        this.obj = [this.agentno, this.AGENTBRANCH]
        switch ('AG') {
          case 'AG':
            this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data1 => {
              this.agentCode = data1;
              // this.ngAgentCode = null
            })
            break;
        }
        this.ngAgentCode = Number(data.AGENT_ACNO)
      }
      if ((data.AC_INTROBRANCH != null && data.AC_INTROID != null && data.AC_INTRACNO != null) || (data.AC_INTROBRANCH != "" && data.AC_INTROID != "" && data.AC_INTRACNO != "")) {

        this.code1 = Number(data.AC_INTROBRANCH),
          this.acno = Number(data.AC_INTROID),
          this.obj = [this.acno, this.code1]

        this.SchemeCodeDropdownDropdown.forEach(async (element) => {
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
        this.code1 = null
        this.acno = null
        this.obj = null
      }
      // this.ngexpiry = data.AC_EXPDT,
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
        AC_EXPDT: data.AC_EXPDT,
        'AC_OCODE': data.AC_OCODE,
        'BANKACNO': data.BANKACNO,
        'AC_MONTHS': data.AC_MONTHS,
        'AC_SCHMAMT': data.AC_SCHMAMT,
        //minor and introducer
        'AC_MINOR': (data.AC_MINOR == '1' ? true : false),
        'AC_MBDATE': data.AC_MBDATE,
        'AC_GRDNAME': data.AC_GRDNAME,
        'AC_GRDRELE': data.AC_GRDRELE,
        'SIGNATURE_AUTHORITY': data.SIGNATURE_AUTHORITY,
        'PG_COMM_TYPE': (data.PG_COMM_TYPE == '1' ? true : false),
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
        AGENT_ACNO: (data.AGENT_ACNO)
      })
    })
  }

  disableForm(id) {
    this.editClickHandler(id, 0)
  }

  //Method for update data 
  updateData() {
    this.angForm.controls['AC_TYPE'].enable()
    let redate
    let opdate
    let exdate
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
    data['Document'] = this.imageObject;
    data['AC_ADDTYPE'] = this.addType
    data['NomineeData'] = this.multiNominee
    data['JointAccountData'] = this.multiJointAC
    data['id'] = this.updateID;
    data['AC_MINOR'] = (data.AC_MINOR == true ? '1' : '0')
    data['PG_COMM_TYPE'] = (data.PG_COMM_TYPE == true ? '1' : '0')
    if (this.updatecheckdata.AC_OPDATE != this.openingDate) {
      (this.openingDate == 'Invalid date' || this.openingDate == '' || this.openingDate == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = this.openingDate, data['AC_OPDATE'] = moment(opdate).format('DD/MM/YYYY'))
    } else {
      data['AC_OPDATE'] = this.openingDate
    }
    if (this.updatecheckdata.AC_RENEW_DATE != this.renewDate) {
      (data.AC_RENEW_DATE == 'Invalid date' || data.AC_RENEW_DATE == '' || data.AC_RENEW_DATE == null) ? (redate = '', data['AC_RENEW_DATE'] = redate) : (redate = data.AC_RENEW_DATE, data['AC_RENEW_DATE'] = moment(redate).format('DD/MM/YYYY'))
    } else {
      data['AC_RENEW_DATE'] = this.renewDate

    }
    // if (this.updatecheckdata.AC_EXPDT != this.ngexpiry) {
    //   (data.AC_EXPDT == 'Invalid date' || data.AC_EXPDT == '' || data.AC_EXPDT == null) ? (exdate = '', data['AC_EXPDT'] = exdate) : (exdate = data.AC_EXPDT, data['AC_EXPDT'] = exdate)
    // } else {
    data['AC_EXPDT'] = this.ngexpiry

    // }
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
  ngMonth: any
  // Reset Function
  resetForm() {
    this.getSystemParaDate() //function to set date
    this.JointAccountsTrue = false
    this.nomineeTrue = false
    this.tempAddress = true
    // this.code1 = null
    this.code = null
    this.id = null
    this.ngCategory = null
    this.ngOperation = null
    this.ngint_category = null
    this.ngIntroducer = null
    this.agentno = null
    this.ngAgentCode = null
    this.acno = null
    this.ngIntroducer = null
    this.renewDate = null
    this.ngexpiry = null
    this.ngMonth = null
    this.angForm.controls['AC_MONTHS'].reset()
    this.createForm();


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


  //Nominee
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

        if (this.id != this.joint) {

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
        'Pigmy Account approved successfully',
        'success'
      );
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
    this.PigmyAccountMasterService.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Pigmy Account rejected successfully',
        'success'
      );

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

  getDecimal(event) {
    var t = event.target.value;
    event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
  }
  getDecimalPoint(event) {
    if (event.target.value != '')
      event.target.value = parseFloat(event.target.value).toFixed(2);
    else
      event.target.value = 0
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

  unApprove() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id,
      LOG_DATE: this.logDate
    }
    this.PigmyAccountMasterService.unapporve(obj).subscribe(data => {
      Swal.fire(
        'Unapproved',
        'Account unapproved successfully',
        'success'
      );
      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }
}



