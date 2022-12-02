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
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'// Handling datatable data
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgSelectComponent } from '@ng-select/ng-select';
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
  @Input() childMessage: string;
  @Output() reloadTablePassing = new EventEmitter<string>();
  formSubmitted = false;
  //api 
  url = environment.base_url;

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })

  bsValue
  // Store data from backend
  shareMaster: ShareMaster[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};
  urlMap: SafeResourceUrl
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
  allScheme: any = null
  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;
  resDT
  ngOpenDate: any
  openingDate: any
  ngDivACNO: any = null
  ngDivACType: any = null
  ngBranchCode: any = null
  retiredate: any = null
  joindate: any = null
  divTransferNO
  rebithdaate
  AC_OPDATE: boolean = false
  ngExpiryDate: any
  ngDeathDate: any
  NbirthDate: any
  cityName: boolean = false
  ngnomineedate: any
  bcode
  obj: any
  getschemename: any
  getscheme

  membershipType = [
    { 'ID': 'Direct', 'NAME': 'Direct' },
    { 'ID': 'Transfer', 'NAME': 'Transfer' },
  ]

  AC_TYPE: boolean = false
  AC_CUSTID: boolean = false
  maxDate: any;
  minDate: Date;
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
    private fb: FormBuilder,
    private schemeAccountNoService: SchemeAccountNoService,
    public sanitizer: DomSanitizer) {
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    })
  }

  ngOnInit(): void {
    this.getSystemParaDate()
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
        this.http.post<DataTableResponse>(
          this.url + '/share-master',
          dataTableParameters
        ).subscribe(resp => {
          let master = new Array()
          this.shareMaster = resp.data;
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

    this.dataSub = this.signTypeDropdownService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
    })

    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.schemeCode = data[0].value
    })

    this.categoryMasterService.getcategoryList().pipe(first()).subscribe(data => {
      this.category = data;
    })

    this.directorMasterDropdownService.getDirectorMasterList().pipe(first()).subscribe(data => {
      this.director = data;
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.allScheme = data;
    })

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id
    if (result.RoleDefine[0].Role.id == 1) {
      this.salaryDMasterdropdownService.getSalaryMasterList().pipe(first()).subscribe(data => {
        this.salary_div = data;
      })
    }
    else {
      this.salaryDMasterdropdownService.getSalaryDMasterList(branchCode).pipe(first()).subscribe(data => {
        this.salary_div = data;
      })

    }


    this.subSalaryDMasterdropdownService.getSubSalaryDMasterList().pipe(first()).subscribe(data => {
      this.sub_salary_div = data;
    })

    this.cityMasterService.getcityList().pipe(first()).subscribe(data => {
      this.city = data;
    })
    this.cityMasterService.getcityList().pipe(first()).subscribe(data => {

      this.ncity = data
    })
  }

  //function to toggle temp address field
  tempAsPermanent() {
    this.tempAddress = !this.tempAddress;
  }

  addNewCustomer(newCustomer) {
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.id = newCustomer;
      this.getCustomer(newCustomer);
    })
  }


  getCustomer(id) {
    this.customerIdService.getFormData(id).subscribe(data => {
      this.customerDoc = data.custdocument
      let obj = {
        SCHEME_CODE: 'SH'
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
        // data.custdocument.forEach(ele => {
        //   if (DocArr.find(data => data['DOCUMENT_CODE'] == ele['DocumentMaster']['id'])) {
        //     ele['DocumentMaster']['status'] = true;
        //     ele['DocumentMaster']['IS_ALLOWED'] = true;
        //   } else {
        //     let obj = {
        //       DOCUMENT_CODE: ele.id,
        //       status: false,
        //       PATH: ele.PATH,
        //       schemeDocumentMaster: {
        //         NAME: ele.DocumentMaster.NAME
        //       }
        //     }
        //     this.customerDoc.push(obj)
        //   }
        // })
      })
      this.tempAddress = data.custAddress[0]?.AC_ADDFLAG
      if (data.castMaster == null) {
        data.castMaster = ""
      }
      if (data.occupMaster == null) {
        data.occupMaster = ""
      }
      this.id = data.id
      this.rebithdaate = data.AC_BIRTH_DT
      this.angForm.patchValue({
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_CAST: data.castMaster.NAME,
        AC_OCODE: data.occupMaster.NAME,
        AC_MEM_BIRTH_DT: data.AC_BIRTH_DT,
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

  imageObject = new Array();
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

  disableForm(id) {
    this.editClickHandler(id)
  }

  customer(event) {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id
    let obj = [branchCode, this.schemeCode]
    this.ShareMasterService.getData(obj).subscribe(data => {
      if (data?.length == 0) {
        this.getCustomer(event.value);
      }
      else {
        if (data.find(data => data['AC_TYPE'] == this.schemeCode && data['AC_CUSTID'] == event.value && (data['AC_CLOSEDT'] == '' || data['AC_CLOSEDT'] == null))) {

          Swal.fire({
            icon: 'info',
            title: 'Share Account Already Exists For This Scheme',
          })
          event.id = null
          this.id = null
          this.id = ''
          this.angForm.controls['AC_CUSTID'].reset()
          this.angForm.patchValue({
            AC_TITLE: '',
            AC_NAME: ''
          })


        } else {
          this.getCustomer(event.value);
        }
      }
    })
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
  tempopendate: any
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.openingDate = data.CURRENT_DATE
      this.tempopendate = data.CURRENT_DATE
      if (data.ON_LINE === '1') {
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

  getRetirementDate(value: Date): void {
    if (value != null) {
      let birthdate = this.angForm.controls['AC_MEM_BIRTH_DT'].value
      let new_date = moment(birthdate, "DD-MM-YYYY").add(18, 'y');
      let agedate = moment(new_date).format('DD/MM/YYYY')
      let joinDate = moment(value).format('DD/MM/YYYY')

      if (joinDate <= agedate) {
        this.sharesSchemeService.getFormData(this.schemeCode).subscribe(data => {
          let date = data.RETIREMENT_YEARS
          let retireDate = moment(this.angForm.controls['AC_MEM_BIRTH_DT'].value, "DD-MM-YYYY").add(date, 'y');
          let reDate = moment(retireDate).format('DD/MM/YYYY')
          this.retiredate = reDate
        })
      } else {
        this.joindate = null
        this.retiredate = null
        this.angForm.controls['AC_JOIN_DATE'].reset()
        this.angForm.controls['AC_RETIRE_DATE'].reset()
        Swal.fire("Cancelled", "Please input date below", "error");
      }

    }
    else {

      this.retiredate = null

      this.angForm.controls['AC_RETIRE_DATE'].reset()
    }

  }

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
      AC_RESNO: ['', [Validators.required]],
      AC_RESDT: ['', [Validators.required]],
      AC_IS_RECOVERY: [],
      AC_INSTALLMENT: ['', [Validators.pattern]],
      REF_ACNO: ['', [Validators.pattern]],
      AC_NARR: ['', [Validators.pattern]],

      //nominee controls (NOMINEELINK table)
      AC_NNAME: ['', [Validators.pattern]],
      AC_NRELA: ['', [Validators.pattern]],
      AC_NDATE: [''],
      AGE: ['', [Validators.pattern, Validators.min(1), Validators.max(100)]],
      AC_NHONO: ['', [Validators.pattern]],
      AC_NWARD: ['', [Validators.pattern]],
      AC_NADDR: ['', [Validators.pattern]],
      AC_NGALLI: ['', [Validators.pattern]],
      AC_NAREA: ['', [Validators.pattern]],
      AC_NCTCODE: ['',],
      AC_NPIN: ['', [Validators.pattern]],
      //marathi details
      AC_DEV_NAME: [''],
      AC_DEV_WARD: [''],
      AC_DEV_ADD: [''],
      AC_DEV_GALLI: [''],
      AC_DEV_AREA: [''],
      AC_DEV_CITYCODE: [''],
      DIV_TRANSFER_BRANCH: [''],
      DIV_TRANSFER_ACTYPE: [''],
      DIV_TRANSFER_ACNO: ['']
    });
  }

  getShareScheme(value) {
    this.shareSchemeType = value.name
  }

  // Method to insert data into database through NestJS
  submit(event) {
    event.preventDefault();
    this.formSubmitted = true;
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
      let branchCode = result.branch.id;
      this.scheme.forEach(async (element) => {
        if (element.value == this.schemeCode) {
          schecode = element.name
        }
      })
      let bankCode = Number(result.branch.syspara.BANK_CODE)
      let joindate
      let opdate
      let exdate
      let deadate
      let retairdate
      let resdate
      let temdate
      if (this.tempopendate != this.openingDate) {
        temdate = (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == 'Invalid date') ? opdate = '' : opdate = moment(formVal.AC_OPDATE).format('DD/MM/YYYY')
      } else {
        temdate = this.openingDate
      }
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
        'AC_IS_RECOVERY': (formVal.AC_IS_RECOVERY == true ? '1' : '0'),
        'AC_SALARYDIVISION_CODE': formVal.AC_SALARYDIVISION_CODE,
        'AC_JOIN_DATE': (formVal.AC_JOIN_DATE == '' || formVal.AC_JOIN_DATE == 'Invalid date' || formVal.AC_JOIN_DATE == null || formVal.AC_JOIN_DATE == undefined) ? joindate = '' : joindate = moment(formVal.AC_JOIN_DATE).format('DD/MM/YYYY'),
        'AC_OPDATE': temdate,
        'AC_EXPDT': (formVal.AC_EXPDT == '' || formVal.AC_EXPDT == 'Invalid date') ? exdate = '' : exdate = moment(formVal.AC_EXPDT).format('DD/MM/YYYY'),
        'DEATH_DATE': (formVal.DEATH_DATE == '' || formVal.DEATH_DATE == 'Invalid date' || formVal.DEATH_DATE == null || formVal.DEATH_DATE == undefined) ? deadate = '' : deadate = moment(formVal.DEATH_DATE).format('DD/MM/YYYY'),
        'AC_DIRECT': formVal.AC_DIRECT,
        'AC_BRANCH': this.branch_codeList,
        'AC_RETIRE_DATE': this.retiredate,
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

        //marathi details
        'AC_DEV_NAME': formVal.AC_DEV_NAME,
        'AC_DEV_WARD': formVal.AC_DEV_WARD,
        'AC_DEV_ADD': formVal.AC_DEV_ADD,
        'AC_DEV_GALLI': formVal.AC_DEV_GALLI,
        'AC_DEV_AREA': formVal.AC_DEV_AREA,
        'AC_DEV_CITYCODE': formVal.AC_DEV_CITYCODE,

        'DIV_TRANSFER_BRANCH': formVal.DIV_TRANSFER_BRANCH,
        'DIV_TRANSFER_ACNOTYPE': this.getschemename,
        'DIV_TRANSFER_ACTYPE': formVal.DIV_TRANSFER_ACTYPE,
        'DIV_TRANSFER_ACNO': formVal.DIV_TRANSFER_ACNO,
        //Nominee 
        'NomineeData': this.multiNominee,
        'Document': this.imageObject
      }
      this.ShareMasterService.postData(dataToSend).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Account Created successfully!',
          html:
            '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
            '<b>ACCOUNT NO : </b>' + data.BANKACNO + '<br>'
        })
        this.formSubmitted = false;
        this.imageObject = []
        this.switchNgBTab('Basic')
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
      this.createForm()
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }
  tempbranch: any
  updatecheckdata: any
  //Method for append data into fields
  editClickHandler(id) {
    this.switchNgBTab('Basic')
    let joindate
    let retairdate
    let opdate
    let exdate
    let deathdate
    let resdate

    this.angForm.controls['AC_TYPE'].disable()
    this.AC_OPDATE = true
    this.ShareMasterService.getFormData(id).subscribe(data => {
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
      this.schemeCode = data.AC_TYPE
      this.ngCategory = data.AC_CATG
      this.selectmembershipType = data.MEMBERSHIP_BY
      this.directorList = Number(data.AC_DIRECT)
      this.branch_codeList = Number(data.AC_BRANCH)
      this.salary_divList = data.AC_SALARYDIVISION_CODE == null ? this.salary_divList = null : Number(data.AC_SALARYDIVISION_CODE)
      this.sub_salary_divList = data.SUB_SALARYDIVISION_CODE == null ? this.sub_salary_divList = null : Number(data.SUB_SALARYDIVISION_CODE)
      this.ngBranchCode = data.DIV_TRANSFER_BRANCH == null ? this.ngBranchCode = null : data.DIV_TRANSFER_BRANCH
      this.ngDivACType = data.DIV_TRANSFER_ACTYPE == null ? this.ngDivACType = null : Number(data.DIV_TRANSFER_ACTYPE)
      this.ngDivACNO = data.DIV_TRANSFER_ACNO == null ? this.ngDivACNO = null : Number(data.DIV_TRANSFER_ACNO)
      if ((data.DIV_TRANSFER_BRANCH != null && data.DIV_TRANSFER_ACTYPE != null && data.DIV_TRANSFER_ACNO != null) || (data.DIV_TRANSFER_BRANCH != "" && data.DIV_TRANSFER_ACTYPE != "" && data.DIV_TRANSFER_ACNO != "")) {

        this.ngBranchCode = data.DIV_TRANSFER_BRANCH
        this.tempbranch = data.DIV_TRANSFER_BRANCH
        this.getschemename = data.DIV_TRANSFER_ACNOTYPE
        this.ngDivACType = Number(data.DIV_TRANSFER_ACTYPE),
          this.obj = [this.ngDivACType, this.ngBranchCode]

        this.allScheme.forEach(async (element) => {

          if (element.value == this.ngDivACType) {

            this.getschemename = element.name
          }
        })
        switch (this.getschemename) {
          case 'SB':
            this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;

            })
            break;

          case 'SH':
            this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {

              this.divTransferNO = data;

            })
            break;

          case 'CA':
            this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;

            })
            break;

          case 'LN':
            this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;

            })
            break;

          case 'TD':
            this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;

            })
            break;

          case 'DS':
            this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;

            })
            break;

          case 'CC':
            this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;

            })
            break;

          case 'GS':
            this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {

              this.divTransferNO = data;

            })
            break;

          case 'PG':
            this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;

            })
            break;

          case 'AG':
            this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;

            })
            break;

          case 'IV':
            this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
              this.divTransferNO = data;

            })
            break;
        }
        this.ngDivACNO = (data.DIV_TRANSFER_ACNO)

      } else {
        this.ngBranchCode = null
        this.ngDivACType = null
        this.obj = null
      }
      //get nominee to edit
      this.multiNominee = data.nomineeDetails
      this.ngDeathDate = (data.DEATH_DATE == 'Invalid date' || data.DEATH_DATE == '' || data.DEATH_DATE == null) ? deathdate = '' : deathdate = data.DEATH_DATE,
        this.joindate = (data.AC_JOIN_DATE == 'Invalid date' || data.AC_JOIN_DATE == '' || data.AC_JOIN_DATE == null) ? joindate = '' : joindate = data.AC_JOIN_DATE,
        this.angForm.patchValue({
          AC_ACNOTYPE: data.AC_ACNOTYPE,
          'AC_NO': data.AC_NO,
          'EMP_NO': data.EMP_NO,
          'AC_SREPRESENT': data.AC_SREPRESENT,
          'BANKACNO': data.BANKACNO,
          //other controls
          'AC_OPDATE': (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? opdate = '' : opdate = data.AC_OPDATE,
          'AC_EXPDT': (data.AC_EXPDT == 'Invalid date' || data.AC_EXPDT == '' || data.AC_EXPDT == null) ? exdate = '' : exdate = data.AC_EXPDT,
          'AC_SBNO': data.AC_SBNO,
          'AC_RESNO': data.AC_RESNO,
          'AC_RESDT': (data.AC_RESDT == 'Invalid date' || data.AC_RESDT == '' || data.AC_RESDT == null) ? resdate = '' : resdate = data.AC_RESDT,
          'AC_IS_RECOVERY': (data.AC_IS_RECOVERY == '1' ? true : false),
          'AC_INSTALLMENT': data.AC_INSTALLMENT,
          'REF_ACNO': data.REF_ACNO,
          'AC_NARR': data.AC_NARR,
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
    data['NomineeData'] = this.multiNominee
    data['AC_IS_RECOVERY'] = (data.AC_IS_RECOVERY == '1' ? true : false)
    data['Document'] = this.imageObject;
    if (this.updatecheckdata.AC_OPDATE != this.openingDate) {
      (this.openingDate == 'Invalid date' || this.openingDate == '' || this.openingDate == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = this.openingDate, data['AC_OPDATE'] = moment(opdate).format('DD/MM/YYYY'))
    } else {
      data['AC_OPDATE'] = this.openingDate
    }

    if (this.updatecheckdata.AC_JOIN_DATE != this.joindate) {
      (this.joindate == 'Invalid date' || this.joindate == '' || this.joindate == null) ? (joindate = '', data['AC_JOIN_DATE'] = joindate) : (joindate = this.joindate, data['AC_JOIN_DATE'] = moment(joindate).format('DD/MM/YYYY'))
    } else {
      data['AC_JOIN_DATE'] = this.joindate
    }

    if (this.updatecheckdata.AC_EXPDT != data.AC_EXPDT) {
      (data.AC_EXPDT == 'Invalid date' || data.AC_EXPDT == '' || data.AC_EXPDT == null) ? (exdate = '', data['AC_EXPDT'] = exdate) : (exdate = data.AC_EXPDT, data['AC_EXPDT'] = moment(exdate).format('DD/MM/YYYY'))
    } else {
      data['AC_EXPDT'] = data.AC_EXPDT
    }

    if (this.updatecheckdata.DEATH_DATE != data.DEATH_DATE) {
      (data.DEATH_DATE == 'Invalid date' || data.DEATH_DATE == '' || data.DEATH_DATE == null) ? (deadate = '', data['DEATH_DATE'] = deadate) : (deadate = data.DEATH_DATE, data['DEATH_DATE'] = moment(deadate).format('DD/MM/YYYY'))

    }
    else {
      data['DEATH_DATE'] = data.DEATH_DATE
    }
    if (this.updatecheckdata.AC_RETIRE_DATE != this.retiredate) {
      (this.retiredate == 'Invalid date' || this.retiredate == '' || this.retiredate == null) ? (retairdate = '', data['AC_RETIRE_DATE'] = retairdate) : (retairdate = this.retiredate, data['AC_RETIRE_DATE'] = moment(retairdate).format('DD/MM/YYYY'))

    } else {
      data['AC_RETIRE_DATE'] = data.AC_RETIRE_DATE
    }
    if (this.updatecheckdata.AC_RESDT != data.AC_RESDT) {
      (data.AC_RESDT == 'Invalid date' || data.AC_RESDT == '' || data.AC_RESDT == null) ? (resdate = '', data['AC_RESDT'] = resdate) : (resdate = data.AC_RESDT, data['AC_RESDT'] = moment(resdate).format('DD/MM/YYYY'))

    } else {
      data['AC_RESDT'] = data.AC_RESDT
    }

    data['id'] = this.updateID;
    data['AC_TYPE'] = this.schemeCode
    data['AC_CATG'] = this.ngCategory
    data['MEMBERSHIP_BY'] = this.selectmembershipType
    data['AC_DIRECT'] = this.directorList
    data['AC_BRANCH'] = this.branch_codeList
    data['AC_SALARYDIVISION_CODE'] = this.salary_divList
    data['SUB_SALARYDIVISION_CODE'] = this.sub_salary_divList
    data['DIV_TRANSFER_BRANCH'] = this.ngBranchCode
    data['DIV_TRANSFER_ACTYPE'] = this.ngDivACType
    data['DIV_TRANSFER_ACNOTYPE'] = this.getschemename
    data['DIV_TRANSFER_ACNO'] = this.ngDivACNO
    this.ShareMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.switchNgBTab('Basic')
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.multiNominee = []
      this.customerDoc = []
      this.resetForm();
    })
    this.resetForm();
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.multiNominee = []
    this.customerDoc = []
    this.tempAddress = true
    this.switchNgBTab('Basic')
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
      dtInstance.columns().every(function () {
        const that = this;
        $('#sharemastertable tfoot tr').appendTo('#sharemastertable thead');
        $("input", this.footer()).on("keyup change", function () {
          if (this["value"] != "") {
            that.search(this["value"]).draw();
          } else {
            that.search(this["value"]).draw();
          }
        });
      });
    });
  }

  // Reset Function

  resetForm() {
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
    this.ngDivACNO = null
    this.ngDivACType = null
    this.ngBranchCode = null
    this.ngExpiryDate = null
    this.ngDeathDate = null
    this.joindate = null
    this.multiNominee = []
    this.customerDoc = []
    this.createForm();
    this.getSystemParaDate()
    this.selectedImagePreview = null
    this.selectedImgArrayDetails = []
    this.imageObject = []
    this.isImgPreview = false
    this.switchNgBTab('Basic')
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

  OpenLink() {
    this.nomineeTrue = !this.nomineeTrue;
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

  isImgPreview
  selectedImgArrayDetails = [];
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

  //approve account
  Approve() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.ShareMasterService.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Share Account approved successfully',
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
    this.ShareMasterService.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Share Account rejected successfully',
        'success'
      );

      var button = document.getElementById('trigger');
      button.click();
      this.reloadTablePassing.emit();
    }, err => {
      console.log('something is wrong');
    })
  }
  getBranch(event) {
    this.bcode = event.value
    this.getDiviTransfer()
  }

  getDivTrans(event) {

    this.getscheme = event.value
    this.getschemename = event.name
    this.getDiviTransfer()
  }


  //get account no according scheme for dividend transfer
  getDiviTransfer() {
    this.obj = [this.ngDivACType, this.ngBranchCode]
    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
          this.ngDivACNO = null
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {

          this.divTransferNO = data;
          this.ngDivACNO = null

        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
          this.ngDivACNO = null

        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
          this.ngDivACNO = null

        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {

          this.divTransferNO = data;
          this.ngDivACNO = null


        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
          this.ngDivACNO = null

        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
          this.ngDivACNO = null

        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
          this.ngDivACNO = null

        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
          this.ngDivACNO = null

        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
          this.ngDivACNO = null

        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.divTransferNO = data;
          this.ngDivACNO = null

        })
        break;
    }
  }
  closeModal() {
    var button = document.getElementById('trigger');
    button.click();
    this.reloadTablePassing.emit();
  }

  onFocus(ele: NgSelectComponent) {
    ele.open()
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
}