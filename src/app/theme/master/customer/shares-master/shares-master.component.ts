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
interface TermDepositInterestRate {
  EFFECT_DATE: Date
  ACNOTYPE: string
  INT_CATEGORY: string
  FROM_DAYS: string
  FROM_MONTHS: string
  TO_DAYS: string
  TO_MONTHS: string
  INT_RATE: String
  PENAL_INT_RATE: string
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
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  termDepositInterestRate: TermDepositInterestRate[];
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
  title //from idmaster as per customer id
  // category //from category master
  category: Array<IOption> = this.signTypeDropdownService.getCharacters();
  membershipType//membership type default option
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
      //extra control not in excel
      TotalRecords: ['', [Validators.pattern]],
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
      'EFFECT_DATE': formVal.EFFECT_DATE,
      'ACNOTYPE': formVal.ACNOTYPE,
      'INT_CATEGORY': formVal.INT_CATEGORY,
      'FROM_DAYS': formVal.FROM_DAYS,
      'FROM_MONTHS': formVal.FROM_MONTHS,
      'TO_DAYS': formVal.TO_DAYS,
      'TO_MONTHS': formVal.TO_MONTHS,
      'INT_RATE': formVal.INT_RATE,
      'PENAL_INT_RATE': formVal.PENAL_INT_RATE,
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
        'EFFECT_DATE': data.EFFECT_DATE,
        'ACNOTYPE': data.ACNOTYPE,
        'INT_CATEGORY': data.INT_CATEGORY,
        'FROM_DAYS': data.FROM_DAYS,
        'FROM_MONTHS': data.FROM_MONTHS,
        'TO_DAYS': data.TO_DAYS,
        'TO_MONTHS': data.TO_MONTHS,
        'INT_RATE': data.INT_RATE,
        'PENAL_INT_RATE': data.PENAL_INT_RATE,
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
          this.termDepositInterestRate = data1;
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

  newCustomer() {
    console.log("new customer")
  }

  OpenLink(val) {
    if (val == 1) {
      this.GuarantorTrue = true;
    }
  }
}