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
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
// Service File For Handling CRUD Operation
import { SavingMasterService } from './saving-master.service'
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
import { OperationMasterDropdownService } from '../../../../shared/dropdownService/operation-master-dropdown.service'
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service'
import { MinimumBalanceMasterDropdownService } from '../../../../shared/dropdownService/minimum-balance-master-dropdown.service'
import { environment } from '../../../../../environments/environment'
import { first } from 'rxjs/operators';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

interface SavingMaster {
  AC_TYPE: string
  AC_NO: number
  AC_CATG: string
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
  AC_MINOR: boolean
  AC_MBDATE: Date
  AC_GRDNAME: string
  AC_GRDRELE: string
  AC_INTROBRANCH: string
  AC_INTROID: string
  AC_INTRACNO: string
  AC_INTRNAME: string
  SIGNATURE_AUTHORITY: string
}

@Component({
  selector: 'app-saving-master',
  templateUrl: './saving-master.component.html',
  styleUrls: ['./saving-master.component.scss'],
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

export class SavingMasterComponent implements OnInit, AfterViewInit, OnDestroy {
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

  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};

  //display code according choice
  nomineeTrue: boolean = false;
  JointAccountsTrue: boolean = false;
  PowerofAttorneyTrue: boolean = false;

  // Store data from backend
  savingMaster: SavingMaster[];

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
  operation// opeartion from operation master
  bal_category// balance category from minimun balance master
  int_category// interest category from interest category master
  director: any[]//from directormaster
  branch_code: any[]//from ownbranchmaster
  salary_div: string // customer id from idmaster
  sub_salary_div: any[] //information sub salary master
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  id: string = '';
  private dataSub: Subscription = null;

  constructor(
    private http: HttpClient,
    private savingMasterService: SavingMasterService,
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
    private operationMasterDropdownService: OperationMasterDropdownService,
    private intrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService,
    private minimumBalanceMasterDropdownService: MinimumBalanceMasterDropdownService,
    private fb: FormBuilder) { }


  dtdocumentOptions: any = {}; //Datatable variable for document form


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
            this.url + '/saving-master',
            dataTableParameters
          ).subscribe(resp => {
            this.savingMaster = resp.data;
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
          data: 'Scheme',
          title: 'Scheme'
        },
        {
          data: 'Account',
          title: 'Account'
        },
        {
          data: 'CustomerID',
          title: 'Customer ID'
        },
        {
          data: 'Title',
          title: 'Title'
        },
        {
          data: 'Name',
          title: 'Name'
        },
        {
          data: 'LastIntDate',
          title: 'Last Int. Date'
        },
        {
          data: 'UnclearBalance',
          title: 'Unclear Balance'
        },
        {
          data: 'FreezeStatus',
          title: 'Freeze Status '
        },
        {
          data: 'LedgerBalance',
          title: 'Ledger Balance'
        }

      ],
      dom: 'Blrtip',
    };
    this.dtdocumentOptions = {
      ajax: 'fake-data/documents.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          data: 'Code',
          title: 'Code'
        },
        {
          data: 'Description',
          title: 'Description'
        },
        {
          data: 'IsAccepted',
          title: 'Is Accepted'
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
    this.runTimer();
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
    this.operationMasterDropdownService.getOperationMasterList().pipe(first()).subscribe(data => {
      this.operation = data;
    })
    this.minimumBalanceMasterDropdownService.getMinimumBalanceMasterList().pipe(first()).subscribe(data => {
      this.bal_category = data;
    })
    this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.int_category = data;
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
      //basic controls
      AC_TYPE: ['', [Validators.required]],
      AC_NO: [''],
      AC_CUSTID: ['', [Validators.required]],
      AC_NAME: [''],
      AC_TITLE: [''],
      AC_MEMBTYPE: [''],
      AC_MEMBNO: [''],
      AC_OPDATE: ['', [Validators.required]],
      AC_BIRTH_DT: [''],
      REF_ACNO: ['', [Validators.pattern]],
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

      //minor and introducer
      AC_MINOR: ['', []],
      AC_MBDATE: ['', []],
      AC_GRDNAME: ['', [Validators.pattern]],
      AC_GRDRELE: ['', [Validators.pattern]],
      AC_INTROBRANCH: ['', []],
      AC_INTROID: ['', []],
      AC_INTRACNO: ['', []],
      AC_INTRNAME: ['', [Validators.pattern]],
      SIGNATURE_AUTHORITY: ['', [Validators.pattern]],

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

      //joint ac
      JOINT_ACNAME: ['', [Validators.pattern]],
      OPERATOR: [''],

      //attorney
      ATTERONEY_NAME: ['', []],
      DATE_APPOINTED: ['', []],
      DATE_EXPIRY: ['', []],



    })
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

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'AC_TYPE': formVal.AC_TYPE,
      'AC_NO': formVal.AC_NO,
      'AC_CATG': formVal.AC_CATG,
      'AC_BALCATG': formVal.AC_BALCATG,
      'AC_OPR_CODE': formVal.AC_OPR_CODE,
      'AC_CUSTID': formVal.AC_CUSTID,
      'AC_INTCATA': formVal.AC_INTCATA,
      'AC_OPDATE': formVal.AC_OPDATE,
      'AC_SCHMAMT': formVal.AC_SCHMAMT,
      //address
      'AC_ADDFLAG': formVal.AC_ADDFLAG,
      'AC_THONO': formVal.AC_THONO,
      'AC_TWARD': formVal.AC_TWARD,
      'AC_TADDR': formVal.AC_TADDR,
      'AC_TGALLI': formVal.AC_TGALLI,
      'AC_TAREA': formVal.AC_TAREA,
      'AC_TCTCODE': formVal.AC_TCTCODE,
      'AC_TPIN': formVal.AC_TPIN,
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


      //nominee
      'NomineeData': this.multiNominee,
      //Joint Account
      'jointAccountData': this.multiJointAC,
      //Attorney
      'attorneyData': this.multiAttorney
    }
    this.savingMasterService.postData(dataToSend).subscribe(data => {
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
    this.multiJointAC = []
    this.multiAttorney = []
  }

  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.getCustomer(id);
    this.savingMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      this.multiNominee = data.nomineeDetails
      this.multiJointAC = data.jointAccountData
      this.multiAttorney = data.attorneyData
      //joint
      //attorney
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
    data['JointAccountData'] = this.multiJointAC
    data['PowerOfAttorneyData'] = this.multiAttorney
    data['id'] = this.updateID;
    this.savingMasterService.updateData(data).subscribe(() => {
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
      text: "Do you want to delete Saving master data.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.savingMasterService.deleteData(id).subscribe(data1 => {
          this.savingMaster = data1;
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
  //Nominee
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
    this.nomineeIndex = id
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
    let index = this.nomineeIndex;
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
      id: this.nomineeID
    }
    this.multiNominee[index] = object;
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
  addJointAcccount() {
    const formVal = this.angForm.value;
    var object = {
      JOINT_ACNAME: formVal.JOINT_ACNAME,
      OPERATOR: formVal.OPERATOR
    }
    this.multiJointAC.push(object);
    this.resetJointAC()
  }
  editJointAc(id) {
    this.jointIndex = id
    this.jointACID = this.multiJointAC[id].id;
    this.JointAccountsTrue = true
    this.jointShowButton = false;
    this.jointUpdateShow = true;
    this.angForm.patchValue({
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
      JOINT_ACNAME: formVal.JOINT_ACNAME,
      OPERATOR: formVal.OPERATOR,
      id: this.jointACID
    }
    this.multiJointAC[index] = object;
    this.resetJointAC()
  }
  delJointAc(id) {
    this.multiJointAC.splice(id, 1)
  }

  resetJointAC() {
    this.angForm.controls['JOINT_ACNAME'].reset();
    this.angForm.controls['OPERATOR'].reset();
  }

  //power of attorney
  addAttorney() {
    const formVal = this.angForm.value;
    var object = {
      ATTERONEY_NAME: formVal.ATTERONEY_NAME,
      DATE_APPOINTED: formVal.DATE_APPOINTED,
      DATE_EXPIRY: formVal.DATE_EXPIRY
    }
    this.multiAttorney.push(object);
    this.resetAttorney()
  }

  editAttorney(id) {
    this.attorneyIndex = id
    this.attorneyID = this.multiAttorney[id].id;
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
    var object = {
      ATTERONEY_NAME: formVal.ATTERONEY_NAME,
      DATE_APPOINTED: formVal.DATE_APPOINTED,
      DATE_EXPIRY: formVal.DATE_EXPIRY,
      id: this.attorneyID
    }
    this.multiAttorney[index] = object;
    this.resetAttorney()
  }

  delAttorney(id) {
    this.multiAttorney.splice(id, 1)
  }

  resetAttorney() {
    this.angForm.controls['ATTERONEY_NAME'].reset();
    this.angForm.controls['DATE_APPOINTED'].reset();
    this.angForm.controls['DATE_EXPIRY'].reset();
  }
}
