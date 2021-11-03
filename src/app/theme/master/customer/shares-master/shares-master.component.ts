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
// Service File For Handling CRUD Operation
import { ShareMasterService } from './shares-master.service'
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
//Service file of dropdown
import { MembershipTypeDropdownService } from '../../../../shared/dropdownService/membership-type-dropdown.service'
import { SignTypeDropdownService } from '../../../../shared/dropdownService/sign-type-dropdown.service'
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
  AC_TITLE: string
  AC_CUSTID: number
  AC_NAME: string
  AC_CATG: string
  EMP_NO: number
  AC_MEM_BIRTH_DT: Date
  AC_JOIN_DATE: Date
  AC_RETIRE_DATE: Date
  AC_MEM_AGE: number
  MEMBERSHIP_BY: string
  AC_SIGN_TYPE: string
  AC_SREPRESENT: string
  AC_HOSUBNO: string
  AC_WARD: string
  AC_ADDR: string
  AC_GALLI: string
  AC_AREA: string
  CITY_NAME: string
  AC_PIN: number
  AC_PHNO: number
  AC_MOBNO: number
  AC_EMAIL: string

  //other controls
  AC_OPDATE: Date
  AC_EXPDT: Date
  DEATH_DATE: Date
  AC_CAST: string
  AC_OCODE: string
  AC_DIRECT: string
  AC_BRANCH: string
  AC_SALARYDIVISION_CODE: number
  SUB_SALARYDIVISION_CODE: number
  AC_SBNO: number
  AC_RESNO: number
  AC_RESDT: string
  AC_IS_RECOVERY: string
  AC_INSTALLMENT: string
  REF_ACNO: number
  AC_NARR: string
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

  //shares details under nominee tab
  AC_SHBALDATE: Date
  AC_OP_SHNO: number
  AC_FACE_VALUE: string
  AC_OP_BAL: string

  //marathi details
  AC_DEV_NAME: string
  AC_DEV_WARD: string
  AC_DEV_ADD: string
  AC_DEV_GALLI: string
  AC_DEV_AREA: string
  AC_DEV_CITYCODE: number
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
  // newCustomerID = [];
  newCustomerID;

  newCustomer(newCustomer) {
    console.log("new customer")
    // this.newCustomerID.push(newCustomer)
    this.newCustomerID = newCustomer
    console.log(this.newCustomerID)
    this.angForm.setValue({
      'AC_NO': this.newCustomerID.AC_NO,
      'AC_MEMBTYPE': this.newCustomerID.AC_MEMBTYPE,
      'AC_MEMBNO': this.newCustomerID.AC_MEMBNO,
      'AC_TITLE': this.newCustomerID.AC_TITLE,
      'AC_NAME': this.newCustomerID.AC_NAME,
      'AC_CAST': this.newCustomerID.AC_CAST,
      'AC_OCODE': this.newCustomerID.AC_OCODE,
      'AC_ADHARNO': this.newCustomerID.AC_ADHARNO,
      'AC_RISKCATG': this.newCustomerID.AC_RISKCATG,
      'AC_BIRTH_DT': this.newCustomerID.AC_BIRTH_DT,
      'AC_PANNO': this.newCustomerID.AC_PANNO,
      'AC_SALARYDIVISION_CODE': this.newCustomerID.AC_SALARYDIVISION_CODE,
      'AC_ADDR1': this.newCustomerID.AC_ADDR1,
      'AC_ADDR2': this.newCustomerID.AC_ADDR2,
      'AC_ADDR3': this.newCustomerID.AC_ADDR3,
      'AC_IS_RECOVERY': this.newCustomerID.AC_IS_RECOVERY,
      'AC_CTCODE': this.newCustomerID.AC_CTCODE,
      'AC_PIN': this.newCustomerID.AC_PIN,
      'AC_MOBILENO': this.newCustomerID.AC_MOBILENO,
      'AC_PHONE_RES': this.newCustomerID.AC_PHONE_RES,
      'AC_PHONE_OFFICE': this.newCustomerID.AC_PHONE_OFFICE,
      'AC_EMAILID': this.newCustomerID.AC_EMAILID,
      'TDS_REQUIRED': this.newCustomerID.TDS_REQUIRED,
      'SMS_REQUIRED': this.newCustomerID.SMS_REQUIRED,
      'IS_KYC_RECEIVED': this.newCustomerID.IS_KYC_RECEIVED

    })
  }
  basicTab;
  otherTab;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  shareMaster: ShareMaster[];
  // Created Form Group
  angForm: FormGroup;
  //Datatable variable
  dtExportButtonOptions: DataTables.Settings = {};

  //datatable variable to change
  dtModalOptions: DataTables.Settings = {};
  dtExportButtonOptions1: any = {};
  dtExportButtonOptions2: any = {};

  recovery: boolean = false;
  GuarantorTrue: boolean = false;
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

  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};

  //Dropdown options
  // scheme //scheme code from schemast(S_ACNOTYPE)
  scheme: Array<IOption> = this.signTypeDropdownService.getCharacters();
  // Customer_ID //customer id from idmaster
  Customer_ID: Array<IOption> = this.signTypeDropdownService.getCharacters();
  //title //from idmaster as per customer id
  title: Array<IOption> = this.signTypeDropdownService.getCharacters();
  // category //from category master
  category: Array<IOption> = this.signTypeDropdownService.getCharacters();
  // membershipType//membership type default option
  membershipType: Array<IOption> = this.signTypeDropdownService.getCharacters();
  signType: Array<IOption> = this.signTypeDropdownService.getCharacters();   //sign type default option
  // city //city from customer id from idmaster
  city: Array<IOption> = this.signTypeDropdownService.getCharacters();
  // cast // customer id from idmaster
  cast: Array<IOption> = this.signTypeDropdownService.getCharacters();
  // occupation // customer id from idmaster
  occupation: Array<IOption> = this.signTypeDropdownService.getCharacters();
  // director//from directormaster
  director: Array<IOption> = this.signTypeDropdownService.getCharacters();
  // branch_code//from ownbranchmaster
  branch_code: Array<IOption> = this.signTypeDropdownService.getCharacters();
  // salary_div // customer id from idmaster
  salary_div: Array<IOption> = this.signTypeDropdownService.getCharacters();
  // sub_salary_div //information sub salary master
  sub_salary_div: Array<IOption> = this.signTypeDropdownService.getCharacters();
  // ncity //city for nominee from citymaster
  ncity: Array<IOption> = this.signTypeDropdownService.getCharacters();
  // mCity //city for marathi tab from citymaster
  mCity: Array<IOption> = this.signTypeDropdownService.getCharacters();

  //scheme dropdown variables
  //Sign-type
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;

  constructor(
    private http: HttpClient,
    private ShareMasterService: ShareMasterService,
    private membershipTypeDropdownService: MembershipTypeDropdownService,
    private signTypeDropdownService: SignTypeDropdownService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.dtExportButtonOptions = {
      ajax: 'fake-data/customer.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Scheme',
          data: 'Member_scheme'
        }, {
          title: 'Member No',
          data: 'Member_no'
        }, {
          title: 'Customer ID',
          data: 'Customer_id'
        }, {
          title: 'Title',
          data: 'title'
        }, {
          title: 'Name',
          data: 'Customer_name'
        },
      ],
      dom: 'Bfrtip',



    };

    this.dtExportButtonOptions2 = {
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
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],


    };
    this.dtExportButtonOptions1 = {
      ajax: 'fake-data/customer.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Name',
          data: 'Customer_name'
        }, {
          title: 'Relation',
          data: 'relation'
        }, {
          title: 'Age',
          data: 'age'
        }, {
          title: 'Nomination Date',
          data: 'birthDate'
        }, {
          title: 'Address',
          data: 'Customer_address'
        }, {
          title: 'Address',
          data: 'Customer_address'
        }, {
          title: 'Address',
          data: 'Customer_address'
        }, {
          title: 'City',
          data: 'Customer_city'
        }, {
          title: 'Pin Code',
          data: 'Customer_pin_code'
        },
      ],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],

    };
    this.runTimer();
    this.dataSub = this.signTypeDropdownService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      //excel controls
      AC_TYPE: ['', [Validators.required]],
      AC_NO: [''],
      AC_TITLE: [{ isDisabled: true }, [Validators.required]],
      AC_CUSTID: ['', [Validators.required]],
      AC_NAME: ['', [Validators.required]],
      //basic controls
      AC_CATG: ['', [Validators.required]],
      EMP_NO: ['', [Validators.pattern]],
      AC_MEM_BIRTH_DT: [''],
      AC_JOIN_DATE: [''],
      AC_RETIRE_DATE: [''],
      AC_MEM_AGE: ['', [Validators.pattern]],
      MEMBERSHIP_BY: ['', [Validators.required]],
      AC_SIGN_TYPE: ['', [Validators.required]],
      AC_SREPRESENT: ['', [Validators.pattern]],
      AC_HOSUBNO: ['', [Validators.pattern]],
      AC_WARD: ['', [Validators.pattern]],
      AC_ADDR: ['', [Validators.pattern]],
      AC_GALLI: ['', [Validators.pattern]],
      AC_AREA: [''],
      CITY_NAME: [{ isDisabled: true }],
      AC_PIN: [''],
      AC_PHNO: ['', [Validators.pattern]],
      AC_MOBNO: [''],
      AC_EMAIL: [''],

      //other controls
      AC_OPDATE: ['', [Validators.required]],
      AC_EXPDT: [''],
      DEATH_DATE: [''],
      AC_CAST: ['', [Validators.required]],
      AC_OCODE: ['', [Validators.required]],
      AC_DIRECT: ['', [Validators.required]],
      AC_BRANCH: ['', [Validators.required]],
      AC_SALARYDIVISION_CODE: [{ isDisabled: true }],
      SUB_SALARYDIVISION_CODE: [''],
      AC_SBNO: [''],
      AC_RESNO: ['', [Validators.required, Validators.pattern]],
      AC_RESDT: ['', [Validators.required]],
      AC_IS_RECOVERY: [''],
      AC_INSTALLMENT: ['', [Validators.pattern]],
      REF_ACNO: ['', [Validators.pattern]],
      AC_NARR: ['', [Validators.pattern]],

      //nominee controls (NOMINEELINK table)
      AC_NNAME: ['', [Validators.required, Validators.pattern]],
      AC_NRELA: ['', [Validators.required, Validators.pattern]],
      AC_NDATE: ['', [Validators.required]],
      AGE: [''],
      ADDR1: ['', [Validators.pattern]],
      ADDR2: ['', [Validators.pattern]],
      ADDR3: ['', [Validators.pattern]],
      CTCODE: ['', [Validators.required]],
      PIN: ['', [Validators.pattern]],

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
    const formVal = this.angForm.value;
    const dataToSend = {
      'AC_TYPE': formVal.AC_TYPE,
      'AC_NO': formVal.AC_NO,
      'AC_TITLE': formVal.AC_TITLE,
      'AC_CUSTID': formVal.AC_CUSTID,
      'AC_NAME': formVal.AC_NAME,
      'AC_CATG': formVal.AC_CATG,
      'EMP_NO': formVal.EMP_NO,
      'AC_MEM_BIRTH_DT': formVal.AC_MEM_BIRTH_DT,
      'AC_JOIN_DATE': formVal.AC_JOIN_DATE,
      'AC_RETIRE_DATE': formVal.AC_RETIRE_DATE,
      'AC_MEM_AGE': formVal.AC_MEM_AGE,
      'MEMBERSHIP_BY': formVal.MEMBERSHIP_BY,
      'AC_SIGN_TYPE': formVal.AC_SIGN_TYPE,
      'AC_SREPRESENT': formVal.AC_SREPRESENT,
      'AC_HOSUBNO': formVal.AC_HOSUBNO,
      'AC_WARD': formVal.AC_WARD,
      'AC_ADDR': formVal.AC_ADDR,
      'AC_GALLI': formVal.AC_GALLI,
      'AC_AREA': formVal.AC_AREA,
      'CITY_NAME': formVal.CITY_NAME,
      'AC_PIN': formVal.AC_PIN,
      'AC_PHNO': formVal.AC_PHNO,
      'AC_MOBNO': formVal.AC_MOBNO,
      'AC_EMAIL': formVal.AC_EMAIL,

      //other controls
      'AC_OPDATE': formVal.AC_OPDATE,
      'AC_EXPDT': formVal.AC_EXPDT,
      'DEATH_DATE': formVal.DEATH_DATE,
      'AC_CAST': formVal.AC_CAST,
      'AC_OCODE': formVal.AC_OCODE,
      'AC_DIRECT': formVal.AC_DIRECT,
      'AC_BRANCH': formVal.AC_BRANCH,
      'AC_SALARYDIVISION_CODE': formVal.AC_SALARYDIVISION_CODE,
      'SUB_SALARYDIVISION_CODE': formVal.SUB_SALARYDIVISION_CODE,
      'AC_SBNO': formVal.AC_SBNO,
      'AC_RESNO': formVal.AC_RESNO,
      'AC_RESDT': formVal.AC_RESDT,
      'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
      'AC_INSTALLMENT': formVal.AC_INSTALLMENT,
      'REF_ACNO': formVal.REF_ACNO,
      'AC_NARR': formVal.AC_NARR,
      //nominee controls (NOMINEELINK table)
      'AC_NNAME': formVal.AC_NNAME,
      'AC_NRELA': formVal.AC_NRELA,
      'AC_NDATE': formVal.AC_NDATE,
      'AGE': formVal.AGE,
      'ADDR1': formVal.ADDR1,
      'ADDR2': formVal.ADDR2,
      'ADDR3': formVal.ADDR3,
      'CTCODE': formVal.CTCODE,
      'PIN': formVal.PIN,

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
      'AC_DEV_CITYCODE': formVal.AC_DEV_CITYCODE
    }
    this.ShareMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
      // to reload after insertion of data
      this.rerender();
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
    this.ShareMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.angForm.setValue({
        'AC_TYPE': data.AC_TYPE,
        'AC_NO': data.AC_NO,
        'AC_TITLE': data.AC_TITLE,
        'AC_CUSTID': data.AC_CUSTID,
        'AC_NAME': data.AC_NAME,
        'AC_CATG': data.AC_CATG,
        'EMP_NO': data.EMP_NO,
        'AC_MEM_BIRTH_DT': data.AC_MEM_BIRTH_DT,
        'AC_JOIN_DATE': data.AC_JOIN_DATE,
        'AC_RETIRE_DATE': data.AC_RETIRE_DATE,
        'AC_MEM_AGE': data.AC_MEM_AGE,
        'MEMBERSHIP_BY': data.MEMBERSHIP_BY,
        'AC_SIGN_TYPE': data.AC_SIGN_TYPE,
        'AC_SREPRESENT': data.AC_SREPRESENT,
        'AC_HOSUBNO': data.AC_HOSUBNO,
        'AC_WARD': data.AC_WARD,
        'AC_ADDR': data.AC_ADDR,
        'AC_GALLI': data.AC_GALLI,
        'AC_AREA': data.AC_AREA,
        'CITY_NAME': data.CITY_NAME,
        'AC_PIN': data.AC_PIN,
        'AC_PHNO': data.AC_PHNO,
        'AC_MOBNO': data.AC_MOBNO,
        'AC_EMAIL': data.AC_EMAIL,

        //other controls
        'AC_OPDATE': data.AC_OPDATE,
        'AC_EXPDT': data.AC_EXPDT,
        'DEATH_DATE': data.DEATH_DATE,
        'AC_CAST': data.AC_CAST,
        'AC_OCODE': data.AC_OCODE,
        'AC_DIRECT': data.AC_DIRECT,
        'AC_BRANCH': data.AC_BRANCH,
        'AC_SALARYDIVISION_CODE': data.AC_SALARYDIVISION_CODE,
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
    data['id'] = this.updateID;
    this.ShareMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.rerender();
      this.resetForm();
    })
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
      text: "Do you want to delete Interest Rate for Term Deposit data.",
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

  OpenLink(val) {
    if (val == 1) {
      this.GuarantorTrue = true;
    }
  }
}