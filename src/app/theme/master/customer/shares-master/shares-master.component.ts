import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
//animation
import { animate, style, transition, trigger } from '@angular/animations';
// Creating and maintaining form fields with validation 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Displaying Sweet Alert
import Swal from 'sweetalert2';
// Angular Datatable Directive  
import { DataTableDirective } from 'angular-datatables';
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
import { environment } from '../../../../../environments/environment'
import { first } from 'rxjs/operators';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface ShareMaster {
  AC_TYPE: string
  AC_NO: number
  AC_CUSTID: number
  EMP_NO: string
  AC_JOIN_DATE: string
  AC_RETIRE_DATE: string
  // AC_MEM_AGE: string
  MEMBERSHIP_BY: string
  AC_SIGN_TYPE: string
  AC_SREPRESENT: string
  AC_OPstring: string
  AC_EXPDT: string
  DEATH_DATE: string
  AC_DIRECT: string
  AC_BRANCH: string
  SUB_SALARYDIVISION_CODE: string
  AC_SBNO: string
  AC_RESNO: string
  AC_RESDT: string
  AC_INSTALLMENT: string
  REF_ACNO: string
  AC_NARR: string
  AC_SHBALDATE: string
  AC_OP_SHNO: string
  AC_FACE_VALUE: string
  AC_OP_BAL: string
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
}
interface Nominee {
  //nominee controls (NOMINEELINK table)
  AC_NNAME: string
  AC_NRELA: string
  AC_NDATE: Date
  AGE: number
  AC_NHONO: String
  AC_NWARD: string
  AC_NADDR: string
  AC_NGALLI: string
  AC_NAREA: string
  AC_NCTCODE: string
  AC_NPIN: number

}
interface Nominee {
  //nominee controls (NOMINEELINK table)
  AC_NNAME: string
  AC_NRELA: string
  AC_NDATE: Date
  AGE: number
  ADDR1: string
  ADDR2: string
  ADDR3: string
  CTCODE: number
  PIN: number
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
  //api 
  url = environment.base_url;

  // For reloading angular datatable after CRUD operation
  @ViewChild('modalLarge') modalLarge: ElementRef;
  @ViewChild(DataTableDirective, { static: false })

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  shareMaster: ShareMaster[];
  nominee: Nominee[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};

  //datatable variable to change
  dtModalOptions: DataTables.Settings = {};
  dtNominee: any = {};
  dtDocument: any = {};

  recovery: boolean = false;
  nomineeTrue: boolean = false;
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

  showModalStatus: boolean = false;

  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};

  //temp address flag variable
  tempAddress: boolean = true;
  nomineeupdateid
  nomineeID
  //Dropdown options
  scheme //scheme code from schemast(S_ACNOTYPE)
  // scheme: Array<IOption> = this.signTypeDropdownService.getCharacters();
  Cust_ID: any[] //customer id from idmaster
  // title: string //from idmaster as per customer id
  category: any[] //from category master
  membershipType: Array<IOption> = this.membershipTypeDropdownService.getCharacters(); //membership type default option
  signType: Array<IOption> = this.signTypeDropdownService.getCharacters();   //sign type default option
  city //city from customer id from idmaster
  cast: string // customer id from idmaster
  occupation: string // customer id from idmaster
  director: any[]//from directormaster
  branch_code: any[]//from ownbranchmaster
  salary_div: string // customer id from idmaster
  sub_salary_div: any[] //information sub salary master
  // ncity: any[] //city for nominee from citymaster
  // mCity: any[] //city for marathi tab from citymaster
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  id: string = '';
  shareMasterData: any;
  private dataSub: Subscription = null;

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
    private fb: FormBuilder) { }

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
        dataTableParameters['filterData'] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + '/share-master',
            dataTableParameters
          ).subscribe(resp => {
            this.shareMaster = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: resp.data
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
          title: 'Member No',
          data: 'AC_NO'
        },
        {
          title: 'Customer ID',
          data: 'AC_CUSTID'
        },
        {
          title: 'Category',
          data: 'AC_CATG'
        },
        {
          title: 'Employee No',
          data: 'EMP_NO'
        },
        {
          title: 'Joining Date',
          data: 'AC_JOIN_DATE'
        },
        {
          title: 'Retirement Date',
          data: 'AC_RETIRE_DATE'
        },
        // {
        //   title: 'Age',
        //   data: 'AC_MEM_AGE'
        // },
        {
          title: 'Membership Type',
          data: 'MEMBERSHIP_BY'
        },
        {
          title: 'Sign Type',
          data: 'AC_SIGN_TYPE'
        },
        {
          title: 'Represent by',
          data: 'AC_SREPRESENT'
        },
        // {
        //   title: 'TempAddress As Permanent',
        //   data: 'AC_ADDFLAG'
        // },
        // {
        //   title: 'House',
        //   data: 'AC_THONO'
        // },
        // {
        //   title: 'Ward',
        //   data: 'AC_TWARD'
        // },
        // {
        //   title: 'Detail',
        //   data: 'AC_TADDR'
        // },
        // {
        //   title: 'Galli',
        //   data: 'AC_TGALLI'
        // },
        // {
        //   title: 'Area',
        //   data: 'AC_TAREA'
        // },
        // {
        //   title: 'City',
        //   data: 'AC_TCTCODE'
        // },
        // {
        //   title: 'PinCode',
        //   data: 'AC_TPIN'
        // },
        {
          title: 'Open Date',
          data: 'AC_OPDATE'
        },
        {
          title: 'Expiry Date',
          data: 'AC_EXPDT'
        },
        {
          title: 'Death Date',
          data: 'DEATH_DATE'
        },
        {
          title: 'Director',
          data: 'AC_DIRECT'
        },
        {
          title: 'Branch Code',
          data: 'AC_BRANCH'
        },
        {
          title: 'Sub Sal.Div',
          data: 'SUB_SALARYDIVISION_CODE'
        },
        {
          title: 'Bank A/c No.',
          data: 'AC_SBNO'
        },
        {
          title: 'Reso. No.',
          data: 'AC_RESNO'
        },
        {
          title: 'Reso.Date',
          data: 'AC_RESDT'
        },
        {
          title: 'Installment',
          data: 'AC_INSTALLMENT'
        },
        {
          title: 'Manual Reference Member No.',
          data: 'REF_ACNO'
        },
        {
          title: 'Reason / Remarks',
          data: 'AC_NARR'
        },
        {
          title: 'Shares Up to Date',
          data: 'AC_SHBALDATE'
        },
        {
          title: 'Total Shares',
          data: 'AC_OP_SHNO'
        },
        {
          title: 'Face Value',
          data: 'AC_FACE_VALUE'
        },
        {
          title: 'Total Amount',
          data: 'AC_OP_BAL'
        },
        {
          title: 'Name',
          data: 'AC_DEV_NAME'
        },
        {
          title: 'Ward',
          data: 'AC_DEV_WARD'
        },
        {
          title: 'Address',
          data: 'AC_DEV_ADD'
        },
        {
          title: 'Galli',
          data: 'AC_DEV_GALLI'
        },
        {
          title: 'Area',
          data: 'AC_DEV_AREA'
        },
        {
          title: 'City',
          data: 'AC_DEV_CITYCODE'
        },
      ],
      dom: 'Blrtip',
    };

    this.dtDocument = {
      ajax: 'fake-data/documents.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Code',
          data: 'Code'
        }, {
          title: 'Description',
          data: 'Description'
        }, {
          title: 'IsAccepted',
          data: 'IsAccepted'
        }
      ],
      dom: 'Blrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],


    };
    // this.dtNominee = {
    //   pagingType: 'full_numbers',
    //   paging: true,
    //   pageLength: 10,
    //   serverSide: true,
    //   processing: true,
    //   ajax: (dataTableParameters: any, callback) => {
    //     dataTableParameters.minNumber = dataTableParameters.start + 1;
    //     dataTableParameters.maxNumber =
    //       dataTableParameters.start + dataTableParameters.length;
    //     let datatableRequestParam: any;
    //     this.page = dataTableParameters.start / dataTableParameters.length;
    //     dataTableParameters['filterData'] = this.filterData;
    //     this.http
    //       .post<DataTableResponse>(
    //         this.url + '/nominee',
    //         dataTableParameters
    //       ).subscribe(resp => {
    //         this.nominee = resp.data;
    //         console.log(this.nominee)
    //         callback({
    //           recordsTotal: resp.recordsTotal,
    //           recordsFiltered: resp.recordsTotal,
    //           data: []
    //         });
    //       });
    //   },
    //   columns: [
    //     {
    //       title: 'Action',
    //     },
    //     {
    //       title: 'Name',
    //       data: 'AC_NNAME'
    //     }, {
    //       title: 'Relation',
    //       data: 'AC_NRELA'
    //     }, {
    //       title: 'Age',
    //       data: 'AGE'
    //     }, {
    //       title: 'Nomination Date',
    //       data: 'AC_NDATE'
    //     },
    //     {
    //       title: 'House',
    //       data: 'AC_NHONO'
    //     },
    //     {
    //       title: 'Ward',
    //       data: 'AC_NWARD'
    //     },
    //     {
    //       title: 'Detail',
    //       data: 'AC_NADDR'
    //     },
    //     {
    //       title: 'Galli',
    //       data: 'AC_NGALLI'
    //     },
    //     {
    //       title: 'Area',
    //       data: 'AC_NAREA'
    //     },
    //     {
    //       title: 'City',
    //       data: 'AC_NCTCODE'
    //     },
    //     {
    //       title: 'Pin Code',
    //       data: 'AC_NPIN'
    //     },
    //   ],
    //   dom: 'Blrtip',
    // };
    this.runTimer();
    this.dataSub = this.signTypeDropdownService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.membershipTypeDropdownService.loadCharacters().subscribe((options) => {
      this.membershipType = options;
    });

    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
    })
    this.schemeCodeDropdownService.getSchemeCodeList().pipe(first()).subscribe(data => {
      this.scheme = data;
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
    this.subSalaryDMasterdropdownService.getSubSalaryDMasterList().pipe(first()).subscribe(data => {
      this.sub_salary_div = data;
    })
    this.cityMasterService.getcityList().pipe(first()).subscribe(data => {
      this.city = data;
    })
  }

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
      this.angForm.patchValue({
        AC_CUSTID: id.toString(),
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_CAST: data.AC_CAST,
        AC_OCODE: data.AC_OCODE,
        AC_MEM_BIRTH_DT: data.AC_BIRTH_DT,
        AC_ADDFLAG: data.custAddress[0].AC_ADDFLAG,
        AC_HONO: data.custAddress[0].AC_HONO,
        AC_WARD: data.custAddress[0].AC_WARD,
        AC_ADDR: data.custAddress[0].AC_ADDR,
        AC_GALLI: data.custAddress[0].AC_GALLI,
        AC_AREA: data.custAddress[0].AC_AREA,
        AC_CTCODE: data.custAddress[0].AC_CTCODE,
        AC_PIN: data.custAddress[0].AC_PIN,
        AC_SALARYDIVISION_CODE: data.AC_SALARYDIVISION_CODE,
        AC_MOBNO: data.AC_MOBILENO,
        AC_PHNO: data.AC_PHONE_RES,
        AC_EMAIL: data.AC_EMAILID,
        AC_IS_RECOVERY: data.AC_IS_RECOVERY,
        AC_THONO: data.custAddress.AC_THONO,
        AC_TWARD: data.custAddress.AC_TWARD,
        AC_TADDR: data.custAddress.AC_TADDR,
        AC_TGALLI: data.custAddress.AC_TGALLI,
        AC_TAREA: data.custAddress.AC_TAREA,
        AC_TCTCODE: data.custAddress.AC_TCTCODE,
        AC_TPIN: data.custAddress.AC_TPIN,
      })
    })
  }

  createForm() {
    this.angForm = this.fb.group({
      //excel controls
      AC_TYPE: ['', [Validators.required]],
      AC_NO: [''],
      AC_TITLE: [''],
      AC_CUSTID: ['', [Validators.required]],
      AC_NAME: [''],
      //basic controls
      AC_CATG: ['', [Validators.required]],
      EMP_NO: ['', [Validators.pattern]],
      AC_MEM_BIRTH_DT: [''],
      AC_JOIN_DATE: [''],
      AC_RETIRE_DATE: [''],
      // AC_MEM_AGE: ['', [Validators.pattern]],
      MEMBERSHIP_BY: ['', [Validators.required]],
      AC_SIGN_TYPE: ['', [Validators.required]],
      AC_SREPRESENT: ['', [Validators.pattern]],
      AC_HONO: ['',],
      AC_WARD: ['',],
      AC_ADDR: ['',],
      AC_GALLI: ['',],
      AC_AREA: [''],
      AC_CTCODE: [''],
      AC_PIN: [''],
      AC_ADDFLAG: [false],
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
      AC_SBNO: [''],
      AC_RESNO: ['', [Validators.required, Validators.pattern]],
      AC_RESDT: ['', [Validators.required]],
      AC_IS_RECOVERY: [''],
      AC_INSTALLMENT: ['', [Validators.pattern]],
      REF_ACNO: ['', [Validators.pattern]],
      AC_NARR: ['', [Validators.pattern]],

      //nominee controls (NOMINEELINK table)
      AC_NNAME: ['', [Validators.pattern]],
      AC_NRELA: ['', [Validators.pattern]],
      AC_NDATE: ['',],
      AGE: ['', [Validators.pattern]],
      AC_NHONO: ['', [Validators.pattern]],
      AC_NWARD: ['', [Validators.pattern]],
      AC_NADDR: ['', [Validators.pattern]],
      AC_NGALLI: ['', [Validators.pattern]],
      AC_NAREA: ['', [Validators.pattern]],
      AC_NCTCODE: ['', [Validators.pattern]],
      AC_NPIN: ['', [Validators.pattern]],

      //shares details under nominee tab
      AC_SHBALDATE: [''],
      AC_OP_SHNO: ['', [Validators.pattern]],
      AC_FACE_VALUE: ['', [Validators.pattern]],
      AC_OP_BAL: ['', [Validators.pattern]],

      //marathi details
      AC_DEV_NAME: ['', [Validators.pattern]],
      AC_DEV_WARD: ['', [Validators.pattern]],
      AC_DEV_ADD: ['', [Validators.pattern]],
      AC_DEV_GALLI: ['', [Validators.pattern]],
      AC_DEV_AREA: ['', [Validators.pattern]],
      AC_DEV_CITYCODE: [''],
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    console.log('in submit')
    const formVal = this.angForm.value;
    const dataToSend = {
      'AC_TYPE': formVal.AC_TYPE,
      'AC_NO': formVal.AC_NO,
      'AC_CUSTID': formVal.AC_CUSTID,
      'AC_CATG': formVal.AC_CATG,
      'EMP_NO': formVal.EMP_NO,
      'AC_JOIN_DATE': formVal.AC_JOIN_DATE,
      'AC_RETIRE_DATE': formVal.AC_RETIRE_DATE,
      // 'AC_MEM_AGE': formVal.AC_MEM_AGE,
      'MEMBERSHIP_BY': formVal.MEMBERSHIP_BY,
      'AC_SIGN_TYPE': formVal.AC_SIGN_TYPE,
      'AC_SREPRESENT': formVal.AC_SREPRESENT,
      'SUB_SALARYDIVISION_CODE': formVal.SUB_SALARYDIVISION_CODE,
      'AC_SBNO': formVal.AC_SBNO,
      'AC_RESNO': formVal.AC_RESNO,
      'AC_RESDT': formVal.AC_RESDT,
      'AC_INSTALLMENT': formVal.AC_INSTALLMENT,
      'REF_ACNO': formVal.REF_ACNO,
      'AC_NARR': formVal.AC_NARR,
      //nominee controls (NOMINEELINK table)
      // 'AC_NNAME': formVal.AC_NNAME,
      // 'AC_NDATE': formVal.AC_NDATE,
      // 'AGE': formVal.AGE,
      // 'ADDR1': formVal.ADDR1,
      // 'ADDR2': formVal.ADDR2,
      // 'ADDR3': formVal.ADDR3,
      // 'CTCODE': formVal.CTCODE,
      // 'PIN': formVal.PIN,

      //shares details under nominee tab
      'AC_SHBALDATE': formVal.AC_SHBALDATE,
      'AC_OP_SHNO': formVal.AC_OP_SHNO,
      'AC_FACE_VALUE': formVal.AC_FACE_VALUE,
      'AC_OP_BAL': formVal.AC_OP_BAL,

      //marathi details
      'AC_DEV_NAME': formVal.AC_DEV_NAME,
      'AC_DEV_WARD': formVal.AC_DEV_WARD,
      'AC_DEV_ADD': formVal.AC_DEV_ADD,
      'AC_DEV_GALLI': formVal.AC_DEV_GALLI,
      'AC_DEV_AREA': formVal.AC_DEV_AREA,
      'AC_DEV_CITYCODE': formVal.AC_DEV_CITYCODE,
      'NomineeData': this.multiNominee
    }
    this.ShareMasterService.postData(dataToSend).subscribe(data => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
    }, (error) => {
      console.log(error)
    })
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
    });
    //To clear form
    this.resetForm();
    this.multiNominee = []
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.getCustomer(id);
    this.ShareMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      this.multiNominee = data.nomineeDetails
      this.angForm.patchValue({
        AC_TYPE: data.AC_TYPE,
        'AC_NO': data.AC_NO,
        'AC_CATG': data.AC_CATG,
        'EMP_NO': data.EMP_NO,
        'AC_JOIN_DATE': data.AC_JOIN_DATE,
        'AC_RETIRE_DATE': data.AC_RETIRE_DATE,
        'MEMBERSHIP_BY': data.MEMBERSHIP_BY,
        'AC_SIGN_TYPE': data.AC_SIGN_TYPE,
        'AC_SREPRESENT': data.AC_SREPRESENT,

        //other controls
        'AC_OPDATE': data.AC_OPDATE,
        'AC_EXPDT': data.AC_EXPDT,
        'DEATH_DATE': data.DEATH_DATE,
        'AC_DIRECT': data.AC_DIRECT,
        'AC_BRANCH': data.AC_BRANCH,
        'SUB_SALARYDIVISION_CODE': data.SUB_SALARYDIVISION_CODE,
        'AC_SBNO': data.AC_SBNO,
        'AC_RESNO': data.AC_RESNO,
        'AC_RESDT': data.AC_RESDT,
        'AC_IS_RECOVERY': data.AC_IS_RECOVERY,
        'AC_INSTALLMENT': data.AC_INSTALLMENT,
        'REF_ACNO': data.REF_ACNO,
        'AC_NARR': data.AC_NARR,
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

        //shares details under nominee tab
        'AC_SHBALDATE': data.AC_SHBALDATE,
        'AC_OP_SHNO': data.AC_OP_SHNO,
        'AC_FACE_VALUE': data.AC_FACE_VALUE,
        'AC_OP_BAL': data.AC_OP_BAL,

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
    let data = this.angForm.value;
    data['NomineeData'] = this.multiNominee
    data['id'] = this.updateID;
    this.ShareMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.rerender();
      this.multiNominee = []
      this.resetForm();
    })
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
    });
  }

  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
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

  // Reset Function
  resetForm() {
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

  //show customer modal
  showModal() {
    debugger
    this.showModalStatus = true;
  }

  multiNominee = [];
  nomineeShowButton: boolean = true
  nomineeUpdateShow: boolean = false
  addNominee() {
    const formVal = this.angForm.value;
    var object = {
      AC_NNAME: formVal.AC_NNAME,
      AC_NRELA: formVal.AC_NRELA,
      AC_NDATE: formVal.AC_NDATE,
      AGE: formVal.AGE,
      AC_NHONO: formVal.AC_NHONO,
      AC_NWARD: formVal.AC_NWARD,
      AC_NADDR: formVal.AC_NADDR,
      AC_NGALLI: formVal.AC_NGALLI,
      AC_NAREA: formVal.AC_NAREA,
      AC_NCTCODE: formVal.AC_NCTCODE,
      AC_NPIN: formVal.AC_NPIN,
    }
    this.multiNominee.push(object);
    this.resetNominee()
  }
  
  editNominee(id) {
    this.nomineeupdateid=id
    console.log('in edit nominee', this.multiNominee[id].id)
    this.nomineeID = this.multiNominee[id].id;
    this.nomineeTrue = true
    this.nomineeShowButton = false;
    this.nomineeUpdateShow = true;
    this.angForm.patchValue({
      AC_NNAME: this.multiNominee[id].AC_NNAME,
      AC_NRELA: this.multiNominee[id].AC_NRELA,
      AC_NDATE: this.multiNominee[id].AC_NDATE,
      AGE: this.multiNominee[id].AGE,
      AC_NHONO: this.multiNominee[id].AC_NHONO,
      AC_NWARD: this.multiNominee[id].AC_NWARD,
      AC_NADDR: this.multiNominee[id].AC_NADDR,
      AC_NGALLI: this.multiNominee[id].AC_NGALLI,
      AC_NAREA: this.multiNominee[id].AC_NAREA,
      AC_NCTCODE: this.multiNominee[id].AC_NCTCODE,
      AC_NPIN: this.multiNominee[id].AC_NPIN,
    })
  }

  updateNominee() {
    let index = this.nomineeID;
    this.nomineeShowButton = true;
    this.nomineeUpdateShow = false;
    const formVal = this.angForm.value;
    var object = {
      AC_NNAME: formVal.AC_NNAME,
      AC_NRELA: formVal.AC_NRELA,
      AC_NDATE: formVal.AC_NDATE,
      AGE: formVal.AGE,
      AC_NHONO: formVal.AC_NHONO,
      AC_NWARD: formVal.AC_NWARD,
      AC_NADDR: formVal.AC_NADDR,
      AC_NGALLI: formVal.AC_NGALLI,
      AC_NAREA: formVal.AC_NAREA,
      AC_NCTCODE: formVal.AC_NCTCODE,
      AC_NPIN: formVal.AC_NPIN,
      id : this.nomineeID
    }
    this.multiNominee[this.nomineeupdateid] = object;
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
}