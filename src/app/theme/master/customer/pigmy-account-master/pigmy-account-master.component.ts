import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
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
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { environment } from 'src/environments/environment';
// Multiple Selection
import Swal from 'sweetalert2';

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface PigmyAccountMaster {
  AC_ACNOTYPE: string;
  AC_TYPE: string;
  AC_NO: number;
  AC_CUSTID: number;
  AC_SHORT_NAME: string;
  REF_ACNO: string;
  AC_MEMBTYPE: string;
  AC_MEMBNO: string;
  AC_AGE: string;
  AC_OPDATE: string;
  AC_RENEW_DATE: string;
  AC_LINTEDT: string;
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
  AC_MBDATE: string
  AC_GRDNAME: string;
  AC_GRDRELE: string;
  AC_INTROBRANCH: string;
  AC_INTROID: string;
  AC_INTRACNO: string;
  AC_INTRNAME: string;
  PG_COMM_TYPE: boolean;
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
  //for modal
  showModalStatus: boolean = false;
  //title select variables


  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  pigmyAccountMaster: PigmyAccountMaster[];
  nominee: Nominee[];
  private dataSub: Subscription = null;
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

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

  @Input() visible: boolean;
  public config: any;
  StatementCodeDropdown: any[];
  intrestCategoryMaster: any[];
  OperationMasterDropdown: any[];
  selectedOption = '3';
  cityMasterServiceDropdown: any[];
  IntrestCategoryMasterDropdown: any[];
  // isDisabled = true;

  //Scheme type variable
  schemeType: string = 'PG'

  //temp address flag variable
  tempAddress: boolean = true;
  Cust_ID: any[]
  id: string = '';

  nomineeTrue: boolean = false;


  JointAccountsTrue = false;
  PowerofAttorneyTrue = false;
  //variable for checkbox and radio button 
  isOperation: boolean = false

  dtdocumentOptions: any = {};

  constructor(private fb: FormBuilder,
    public categoryMasterService: categoryMasterService,
    public IntrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService,
    public OperationMasterDropdownService: OperationMasterDropdownService,
    public PigmyAccountMasterService: PigmyAccountMasterService,
    public CastMasterService: CastMasterService,
    public customerIdService: CustomerIdService,
    public cityMasterService: cityMasterService,
    private http: HttpClient,
    public OwnbranchMasterService: OwnbranchMasterService,
    public SchemeCodeDropdownService: SchemeCodeDropdownService,
    private customerID: CustomerIDMasterDropdownService) { }



  ngOnInit(): void {
    this.createForm();
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
        {
          title: 'Type',
          data: 'AC_ACNOTYPE'
        },
        {
          title: 'PG Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Account No',
          data: 'AC_NO'
        },
        {
          title: 'Customer ID',
          data: 'AC_CUSTID'
        },
        {
          title: 'A/c Short Name',
          data: 'AC_SHORT_NAME'
        },
        {
          title: 'Age',
          data: 'AC_AGE'
        },
        {
          title: 'Manual Reference Member No.',
          data: 'REF_ACNO'
        },
        {
          title: 'Member Scheme',
          data: 'AC_MEMBTYPE'
        },
        {
          title: 'Member No',
          data: 'AC_MEMBNO'
        },

        {
          title: 'Opening Date',
          data: 'AC_OPDATE'
        },
        {
          title: 'Renewal Date',
          data: 'AC_RENEW_DATE'
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
          title: 'Last Int Date',
          data: 'AC_LINTEDT'
        },
        {
          title: 'Expiry Date',
          data: 'AC_EXPDT'
        },

        {
          title: 'Category',
          data: 'AC_CATG'
        },
        {
          title: 'Operation',
          data: 'AC_OPR_CODE'
        },
        {
          title: 'Interest Category',
          data: 'AC_INTCATA'
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
          title: 'Agent Scheme',
          data: 'AGENT_ACTYPE'
        },
        // {
        //   title: 'Manual Reference Member No.',
        //   data: 'REF_ACNO'
        // },
        {
          title: 'Agent Code',
          data: 'AGENT_ACNO'
        },
        {
          title: 'Birth Date',
          data: 'AC_MBDATE'
        },
        {
          title: 'Guardian Name',
          data: 'AC_GRDNAME'
        },
        {
          title: 'Relation',
          data: 'AC_GRDRELE'
        },
        {
          title: 'Branch',
          data: 'AC_INTROBRANCH'
        },
        {
          title: 'Account Type',
          data: 'AC_INTROID'
        },
        {
          title: 'Account Code',
          data: 'AC_INTRACNO'
        },
        {
          title: 'Name',
          data: 'AC_INTRNAME'
        },
        {
          title: 'Is Calculate Separate Pigmy Commission for Loan Against Collection',
          data: 'PG_COMM_TYPE'
        },

      ],
      dom: 'Blrtip',
    };
    // this.dtExportButtonOptions = {
    //   ajax: 'fake-data/pigmyam-data.json',
    //   columns: [
    //     {
    //       title: 'Action',
    //       render: function (data: any, type: any, full: any) {
    //         return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
    //       }
    //     },
    //     {
    //       data: 'PGScheme',
    //       title: 'PG Scheme'
    //     },
    //     {
    //       data: 'AccountNo',
    //       title: 'Account No'
    //     },
    //     {
    //       data: 'CustomerID',
    //       title: 'Customer ID'
    //     },
    //     {
    //       data: 'Name',
    //       title: 'Name'
    //     }
    //     ,
    //     {
    //       data: 'LastTranDate',
    //       title: 'Last Tran Date'
    //     },
    //     {
    //       data: 'LastInterestDate',
    //       title: 'Last Interes Date'
    //     },
    //     {
    //       data: 'AccountLienMarked',
    //       title: 'Account Lien Marked?'
    //     },
    //     {
    //       data: 'FreezeStatus',
    //       title: 'Freeze Status'
    //     },

    //     {
    //       data: 'AcStatus',
    //       title: 'A/c Status'
    //     },
    //     {
    //       data: 'LedgerBalance',
    //       title: 'Ledger Balance'
    //     },

    //   ],
    //   dom: 'Bfrtip',
    //   buttons: [
    //     'copy',
    //     'print',
    //     'excel',
    //     'csv'
    //   ],


    // };

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
    ;
    this.runTimer();
    this.CastMasterService.getcastList().pipe(first()).subscribe(data => {

      this.CastMasterDropdown = data;
    })
    this.OwnbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {

      this.OwnbranchMasterDropdown = data;
    })
    this.SchemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {

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
    })
    this.categoryMasterService.getcategoryList().pipe(first()).subscribe(data => {
      this.categoryMasterdropdown = data;
    })
    this.IntrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.IntrestCategoryMasterDropdown = data;
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
      AC_NO: [''],
      AC_ACNOTYPE: ['PG'],
      AC_CUSTID: ['', [Validators.required, Validators.pattern]],
      AC_TITLE: [''],
      AC_NAME: [''],
      AC_SHORT_NAME: ['', [Validators.pattern, Validators.required]],
      REF_ACNO: ['', [Validators.pattern]],
      AC_MEMBTYPE: [''],
      AC_MEMBNO: [''],
      AC_AGE: ['', [Validators.pattern]],
      AC_OPDATE: ['', [Validators.required]],
      AC_RENEW_DATE: [''],
      AC_LINTEDT: [''],
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
      AGENT_ACNO: ['', [Validators.required]],
      AC_HONO: ['', [Validators.pattern]],
      AC_WARD: ['', [Validators.pattern]],
      AC_GALLI: ['', [Validators.pattern]],
      AC_AREA: ['', [Validators.pattern]],
      AC_ADDR: [''],
      AC_CTCODE: ['', [Validators.required]],
      AC_TCTCODE: ['', [Validators.required]],
      AC_PIN: ['', [Validators.pattern]],
      AC_ADDFLAG: [false],
      AC_THONO: ['', [Validators.pattern]],
      AC_TWARD: ['', [Validators.pattern]],
      AC_TGALLI: ['', [Validators.pattern]],
      AC_TAREA: ['', [Validators.pattern]],
      AC_TADDR: [''],
      AC_TPIN: ['', [Validators.pattern]],
      AC_PHONE_RES: ['', [Validators.pattern]],
      AC_PHONE_OFFICE: ['', [Validators.pattern]],
      AC_MOBILENO: ['', [Validators.pattern, Validators.maxLength(10), Validators.minLength(10)]],
      AC_MBDATE: [''],
      AC_GRDNAME: ['', [Validators.pattern]],
      AC_GRDRELE: ['', [Validators.pattern]],
      AC_INTROBRANCH: [''],
      AC_INTROID: [''],
      AC_INTRACNO: [''],
      AC_INTRNAME: ['', [Validators.pattern]],
      PG_COMM_TYPE: [''],
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
    });
  }


  OpenLink() {
    this.nomineeTrue = !this.nomineeTrue;
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

  tempAsPermanent() {
    this.tempAddress = !this.tempAddress;
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




  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    const dataToSend = {
      'AC_TYPE': formVal.AC_TYPE,
      'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
      'AC_NO': formVal.AC_NO,
      'AC_NAME': formVal.AC_NAME,
      'AC_CUSTID': formVal.AC_CUSTID,
      'AC_SHORT_NAME': formVal.AC_SHORT_NAME,
      'AC_AGE': formVal.AC_AGE,
      'REF_ACNO': formVal.REF_ACNO,
      'AC_MEMBTYPE': formVal.AC_MEMBTYPE,
      'AC_MEMBNO': formVal.AC_MEMBNO,
      'AC_OPDATE': formVal.AC_OPDATE,
      'AC_RENEW_DATE': formVal.AC_RENEW_DATE,
      'AC_LINTEDT': formVal.AC_LINTEDT,

      'AC_EXPDT': formVal.AC_EXPDT,
      'AC_OCODE': formVal.AC_OCODE,
      'AC_CATG': formVal.AC_CATG,
      'AC_OPR_CODE': formVal.AC_OPR_CODE,
      'AC_INTCATA': formVal.AC_INTCATA,

      'AC_MONTHS': formVal.AC_MONTHS,
      'AC_SCHMAMT': formVal.AC_SCHMAMT,
      'AGENT_ACTYPE': formVal.AGENT_ACTYPE,
      'AGENT_ACNO': formVal.AGENT_ACNO,

      'AC_MBDATE': formVal.AC_MBDATE,
      'AC_GRDNAME': formVal.AC_GRDNAME,
      'AC_GRDRELE': formVal.AC_GRDRELE,
      'AC_INTROBRANCH': formVal.AC_INTROBRANCH,
      'AC_INTROID': formVal.AC_INTROID,
      'AC_INTRACNO': formVal.AC_INTRACNO,
      'AC_INTRNAME': formVal.AC_INTRNAME,
      'PG_COMM_TYPE': formVal.PG_COMM_TYPE,
      //Nominee 
      'NomineeData': this.multiNominee

    }
    this.PigmyAccountMasterService.postData(dataToSend).subscribe(data1 => {
      Swal.fire('Success!', 'Data Added Successfully !', 'success');
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
  }
  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.PigmyAccountMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      this.multiNominee = data.nomineeDetails
      this.angForm.patchValue({
        AC_TYPE: data.AC_TYPE,
        AC_ACNOTYPE: data.AC_ACNOTYPE,
        'AC_NO': data.AC_NO,
        'AC_SHORT_NAME': data.AC_SHORT_NAME,
        'AC_AGE': data.AC_AGE,
        'REF_ACNO': data.REF_ACNO,
        'AC_OPDATE': data.AC_OPDATE,
        'AC_RENEW_DATE': data.AC_RENEW_DATE,
        AC_MEMBTYPE: data.AC_MEMBTYPE,
        AC_MEMBNO: data.AC_MEMBNO,
        'AC_LINTEDT': data.AC_LINTEDT,
        'AC_EXPDT': data.AC_EXPDT,
        'AC_OCODE': data.AC_OCODE,
        'AC_CATG': data.AC_CATG,
        AC_OPR_CODE: data.AC_OPR_CODE,
        AC_INTCATA: data.AC_INTCATA,

        'AC_MONTHS': data.AC_MONTHS,
        'AC_SCHMAMT': data.AC_SCHMAMT,
        AGENT_ACTYPE: data.AGENT_ACTYPE,
        AGENT_ACNO: data.AGENT_ACNO,

        'AC_MBDATE': data.AC_MBDATE,
        'AC_GRDNAME': data.AC_GRDNAME,
        'AC_GRDRELE': data.AC_GRDRELE,
        AC_INTROBRANCH: data.AC_INTROBRANCH,
        AC_INTROID: data.AC_INTROID,
        AC_INTRACNO: data.AC_INTRACNO,
        'AC_INTRNAME': data.AC_INTRNAME,
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
    let data = this.angForm.value;
    data['NomineeData'] = this.multiNominee
    data['id'] = this.updateID;
    this.PigmyAccountMasterService.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      this.multiNominee = []
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
    console.log('update nominee', index)
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
    this.nomineeShowButton = true;
    this.nomineeUpdateShow = false;
    this.resetNominee()
  }
  delNominee(id) {
    this.multiNominee.splice(id, 1)
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
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



