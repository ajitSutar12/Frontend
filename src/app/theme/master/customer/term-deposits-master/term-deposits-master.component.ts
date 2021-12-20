
import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { TitleService } from '../../../../shared/elements/title.service';
import Swal from 'sweetalert2';

import { AccountcodeService } from '../../../../shared/elements/accountcode.service';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

import { TermDepositMasterService } from './term-deposits-master.service';
// for dropdown
import { CastMasterService } from '../../../../shared/dropdownService/cast-master-dropdown.service';
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { OperationMasterDropdownService } from '../../../../shared/dropdownService/operation-master-dropdown.service';
import { categoryMasterService } from '../../../../shared/dropdownService/category-master-dropdown.service';
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service';
import { CustomerIdService } from '../customer-id/customer-id.service';
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { TermDepositSchemeService } from '../../../utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service'
import { InterestInstructionService } from '../../instruction/interest-instruction/interest-instruction.service'
import { Moment } from 'moment/moment';
//date pipe
import { DatePipe } from '@angular/common';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
// Used to Call API
import { HttpClient } from '@angular/common/http';
// Handling datatable data
import * as moment from 'moment';
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface TermDepositMaster {
  AC_ACNOTYPE: string;
  AC_TYPE: string;
  AC_NO: number;
  AC_INTRATE: string;
  AC_CUSTID: number;
  REF_ACNO: string;
  AC_OPDATE: string;
  AC_BIRTH_DT: string;
  AC_OCODE: string;
  AC_CATG: string;
  AC_OPR_CODE: string;
  AC_INTCATA: string;
  AC_IS_RECOVERY: boolean;
  AC_REF_RECEIPTNO
  AC_ASON_DATE: string;
  AC_MONTHS: string

  AC_EXPDT: string;
  AC_SCHMAMT: string;
  AC_MATUAMT: string;
  IS_DISCOUNTED_INT_RATE: boolean;
  //address
  AC_ADDFLAG: boolean
  AC_THONO: string;
  AC_TWARD: string;
  AC_TADDR: string;
  AC_TGALLI: string;
  AC_TAREA: string;
  AC_TCTCODE: string;
  AC_TPIN: string
  //minor and introducer
  AC_MINOR: boolean
  AC_MBDATE: string
  AC_GRDNAME: string
  AC_GRDRELE: string
  AC_INTROBRANCH: string
  AC_INTROID: string
  AC_INTRACNO: string
  AC_INTRNAME: string
  SIGNATURE_AUTHORITY: string
}

@Component({
  selector: 'app-term-deposits-master',
  templateUrl: './term-deposits-master.component.html',
  styleUrls: ['./term-deposits-master.component.scss'],
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
export class TermDepositsMasterComponent implements OnInit, AfterViewInit, OnDestroy {
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  dtExportOptions: any = {}


  //Scheme type variable
  schemeType: string = 'TD'
  addType: string
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  termDepositMaster: TermDepositMaster[];
  private dataSub: Subscription = null;
  // Variables for search 
  filterObject: { name: string; type: string; }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  newbtnShow: boolean = false;
  introducerReq: boolean = false
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
  scheme //scheme code from schemast(S_ACNOTYPE)
  StatementCodeDropdown: any[];
  intrestCategoryMaster: any[];
  OperationMasterDropdown: any[];
  selectedOption = '3';
  cityMasterServiceDropdown: any[];
  IntrestCategoryMasterDropdown: any[];
  // isDisabled = true;

  //temp address flag variable
  tempAddress: boolean = true;
  Cust_ID: any[]
  id: string = '';
  introducerACNo //account no for introducer
  acno

  //nominee, joint ac and attorney variables 
  nomineeShowButton: boolean = true
  nomineeUpdateShow: boolean = false
  nomineeID: number
  nomineeIndex: number
  jointACID: number
  jointIndex: number
  attorneyID: number
  attorneyIndex: number
  multiNominee = [];
  multiJointAC = [];
  multiAttorney = [];
  //display code according choice
  nomineeTrue: boolean = false;
  JointAccountsTrue: boolean = false;
  PowerofAttorneyTrue: boolean = false;

  jointShowButton: boolean = true
  jointUpdateShow: boolean = false
  attorneyShowButton: boolean = true
  attorneyUpdateShow: boolean = false
  //add required validation to attorney fields
  DATE_EXPIRY = false
  DATE_APPOINTED = false
  ATTERONEY_NAME = false

  //variable for checkbox and radio button 
  isOperation: boolean = false

  dtNomineeOptions: any = {};
  dtJointOptions: any = {};
  dtPowerOptions: any = {};
  dtdocumentOptions: any = {};

  constructor(public TitleService: TitleService,
    public AccountcodeService: AccountcodeService,
    private fb: FormBuilder,
    private customerID: CustomerIDMasterDropdownService,
    public customerIdService: CustomerIdService,
    public TermDepositMasterService: TermDepositMasterService,
    private systemParameter: SystemMasterParametersService,
    public categoryMasterService: categoryMasterService,
    public IntrestCategoryMasterDropdownService: IntrestCategoryMasterDropdownService,
    public OperationMasterDropdownService: OperationMasterDropdownService,
    public CastMasterService: CastMasterService,
    public cityMasterService: cityMasterService,
    private http: HttpClient,
    public OwnbranchMasterService: OwnbranchMasterService,
    public SchemeCodeDropdownService: SchemeCodeDropdownService,
    private datePipe: DatePipe,
    private schemeAccountNoService: SchemeAccountNoService,
    private _termDepositScheme: TermDepositSchemeService,
    private _InterestInstruction: InterestInstructionService,
  ) { }

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
            this.url + '/term-deposits-master',
            dataTableParameters
          ).subscribe(resp => {
            this.termDepositMaster = resp.data;
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
          title: 'Scheme Type',
          data: 'AC_ACNOTYPE'
        },
        {
          title: 'Scheme',
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
          title: 'Opening Date',
          data: 'AC_OPDATE'
        },
        {
          title: 'Manual Reference Member No.',
          data: 'REF_ACNO'
        },
        {
          title: 'Birth Date',
          data: 'AC_MBDATE'
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
          title: 'Recovery',
          data: 'AC_IS_RECOVERY'
        },
        {
          title: 'Receipt No.',
          data: 'AC_REF_RECEIPTNO'
        },
        {
          title: 'As On Date',
          data: 'AC_RENEAC_ASON_DATEW_DATE'
        },
        {
          title: 'Period',
          data: 'AC_MONTHS'
        },
        {
          title: 'Maturity Date',
          data: 'AC_EXPDT'
        },
        {
          title: 'Deposit Amount',
          data: 'AC_SCHMAMT'
        },
        {
          title: 'Maturity Amount',
          data: 'AC_MATUAMT'
        },
        {
          title: 'Is Discounted Interest Applicable?',
          data: 'IS_DISCOUNTED_INT_RATE'
        },
        {
          title: 'Minor Details',
          data: 'AC_MINOR'
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
          title: 'Account code',
          data: 'AC_INTRACNO'
        },
        {
          title: 'Name',
          data: 'AC_INTRNAME'
        },
        {
          title: 'Signature Authority',
          data: 'SIGNATURE_AUTHORITY'
        },
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
    this.SchemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.SchemeCodeDropdownDropdown = data;
    })
    this.CastMasterService.getcastList().pipe(first()).subscribe(data => {

      this.CastMasterDropdown = data;
    })
    this.OwnbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.OwnbranchMasterDropdown = data;
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
    this.SchemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data;
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
      AC_ACNOTYPE: ['TD'],
      AC_NO: [''],
      AC_INTRATE: ['', [Validators.pattern]],
      AC_CUSTID: ['', [Validators.required, Validators.pattern]],
      AC_TITLE: [''],
      AC_NAME: [''],
      AC_MEMBTYPE: [''],
      AC_MEMBNO: [''],
      AC_OPDATE: ['', [Validators.required]],
      REF_ACNO: ['', [Validators.pattern]],
      AC_CAST: ['', [Validators.required]],
      AC_OCODE: ['', [Validators.required]],
      AC_CATG: ['', [Validators.required]],
      AC_OPR_CODE: ['', [Validators.required]],
      AC_INTCATA: ['', [Validators.required]],
      AC_PANNO: ['', [Validators.pattern]],
      AC_IS_RECOVERY: [false],
      AC_REF_RECEIPTNO: ['', [Validators.pattern]],
      AC_ASON_DATE: [],
      AC_MONTHS: ['', [Validators.pattern, Validators.required]],
      AC_DAYS: [],
      AC_EXPDT: ['', [Validators.required]],
      AC_SCHMAMT: ['', [Validators.pattern, Validators.required]],
      AC_MATUAMT: ['', [Validators.pattern]],
      IS_DISCOUNTED_INT_RATE: [''],
      AC_BIRTH_DT: [''],
      AC_RENEW_DATE: [''],
      AC_HONO: ['', [Validators.pattern]],
      AC_WARD: ['', [Validators.pattern]],
      AC_GALLI: ['', [Validators.pattern]],
      AC_AREA: ['', [Validators.pattern]],
      AC_ADDR: [''],
      AC_CTCODE: ['', [Validators.required]],
      AC_TCTCODE: ['', [Validators.required]],
      AC_PIN: ['', [Validators.pattern]],
      AC_EMAIL: [''],
      AC_MOBNO: [''],
      AC_PHNO: [''],
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
      AC_MOBILENO: ['', [Validators.pattern, Validators.maxLength(10), Validators.minLength(10)]],
      //minor and introducer
      AC_MINOR: ['', []],
      AC_MBDATE: ['', []],
      AC_GRDNAME: ['', [Validators.pattern]],
      AC_GRDRELE: ['', [Validators.pattern]],
      AC_INTROBRANCH: ['', []],
      AC_INTROID: [''],
      AC_INTRACNO: [''],
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
      OPERATOR: [true],

      //attorney
      ATTERONEY_NAME: ['', []],
      DATE_APPOINTED: ['', []],
      DATE_EXPIRY: ['', []],
    });
  }

  //nominee, joint account and attorney selection display
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

  addNewCustomer(newCustomer) {
    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.id = newCustomer;
      this.getCustomer(newCustomer);
    })
  }

  //function to toggle temp address field
  tempAsPermanent() {
    this.tempAddress = !this.tempAddress;
    // this.angForm.controls['AC_THONO'].reset()
    // this.angForm.controls['AC_TWARD'].reset()
    // this.angForm.controls['AC_TADDR'].reset()
    // this.angForm.controls['AC_TGALLI'].reset()
    // this.angForm.controls['AC_TAREA'].reset()
    // this.angForm.controls['AC_TCTCODE'].reset()
    // this.angForm.controls['AC_TPIN'].reset()
  }

  //calculate age for minor details
  ageCalculator(birthDate) {
    let showAge: number
    if (birthDate) {
      const convertAge = new Date(birthDate);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      if (showAge <= 18) {
        this.angForm.controls['AC_MINOR'].setValue(true);
        this.angForm.controls['AC_GRDNAME'].enable();
        this.angForm.controls['AC_GRDRELE'].enable();
        this.introducerReq = true
      }
      else if (showAge > 18) {
        this.angForm.controls['AC_MINOR'].setValue(false);
        this.angForm.controls['AC_GRDNAME'].disable();
        this.angForm.controls['AC_GRDRELE'].disable();
        this.introducerReq = false
      }
    }
  }

  //set open date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.angForm.patchValue({
        AC_OPDATE: data.CURRENT_DATE,
        AC_ASON_DATE: data.CURRENT_DATE,
      })
    })
  }
  result: number
  //get maturity date
  getMaturityDate() {

    this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
      // console.log(data, "getMaturityDate")

      if (data.S_INTASON == true) {
        document.getElementById('AC_ASON_DATE').removeAttribute("disabled");
      }
      else {
        document.getElementById('AC_ASON_DATE').setAttribute("disabled", "true");
        let months = this.angForm.controls['AC_MONTHS'].value
        let days = this.angForm.controls['AC_DAYS'].value
        var maturityDt = new Date(this.angForm.controls['AC_ASON_DATE'].value)
        var year = maturityDt.getFullYear();
        var month = new Date(maturityDt).getMonth();
        var day = new Date(maturityDt).getDate();
        var maturityMonth = month + Number(months)
        var maturityDay = day + Number(days)
        var date = new Date(year, maturityMonth, maturityDay);
        var maturityDate = this.datePipe.transform(date, "dd-MM-yyyy")
        this.angForm.patchValue({
          AC_EXPDT: maturityDate
        })
      }
      if (data.PERIOD_APPLICABLE == true) {
        document.getElementById('AC_MONTHS').removeAttribute("disabled");
        document.getElementById('AC_DAYS').removeAttribute("disabled");
      }
      else {
        document.getElementById('AC_MONTHS').setAttribute("disabled", "true");
        document.getElementById('AC_DAYS').setAttribute("disabled", "true");
      }

      if (data.IS_AUTO_PERIOD_CALCULATE == true) {

        let start = this.angForm.controls['AC_ASON_DATE'].value
        let end = this.angForm.controls['AC_EXPDT'].value
        // console.log(start, "start date")
        // console.log(end, "end date")
        if (start && end) {
          var years = end.diff(start, 'years');

          //moment returns the total months between the two dates, subtracting the years
          var months = end.diff(start, 'months') - (years * 12);

          //to calculate the days, first get the previous month and then subtract it
          start.add(years, 'years').add(months, 'months');
          var days = end.diff(start, 'days')

          // console.log(year + months + days, "calculate")
          this.angForm.patchValue({
            AC_MONTHS: months,
            AC_DAYS: days
          })
        }
      }
      else {
        console.log("No")
      }

      if (data.UNIT_OF_PERIOD == "Both") {
        if (this.angForm.controls['AC_MONTHS'].value < data.MIN_MONTH) {
          Swal.fire("Month Must Be Geater Than " + data.MIN_MONTH, "error");
          this.angForm.controls['AC_MONTHS'].reset
        }

        if (this.angForm.controls['AC_DAYS'].value < data.MIN_DAYS) {
          this.angForm.controls['AC_DAYS'].reset
          Swal.fire("Days Must Be Geater Than " + data.MIN_DAYS, "error");
        }
      }
      else if (data.UNIT_OF_PERIOD == "DAYS") {
        if (this.angForm.controls['AC_DAYS'].value < data.MIN_DAYS) {
          // console.log(this.angForm.controls['AC_DAYS'])
        } else {
          Swal.fire("Days Must Be Geater Than " + data.MIN_DAYS, "error");
          this.angForm.controls['AC_DAYS'].reset
        }
      }
      else if (data.UNIT_OF_PERIOD == "MONTHS") {
        if (this.angForm.controls['AC_MONTHS'].value < data.MIN_MONTH) {
          // console.log(this.angForm.controls['AC_MONTHS'])
        } else {
          Swal.fire("Month Must Be Geater Than " + data.MIN_MONTH, "error");
          this.angForm.controls['AC_MONTHS'].reset
        }
      }

      if (data.UNIT_OF_PERIOD == "Both" && data.IS_AUTO_PERIOD_CALCULATE == true) {
        if (this.angForm.controls['AC_MONTHS'].value < data.MIN_MONTH && this.angForm.controls['AC_DAYS'].value < data.MIN_DAYS) {
          // console.log(this.angForm.controls['AC_DAYS'], this.angForm.controls['AC_MONTHS'].value)
        } else {
          Swal.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + "and " + data.MIN_DAYS, "error");
          this.angForm.controls['AC_MONTHS'].reset
        }

      }

      if (this.angForm.controls['AC_SCHMAMT'].value > data.MAX_DEP_LMT) {
        Swal.fire("Deposit Amount Should Be Less Than " + data.MAX_DEP_LMT, "error");
        this.angForm.controls['AC_SCHMAMT'].reset
      }

      if (data.RECEIPT_NO_INPUT == true) {
        document.getElementById('AC_REF_RECEIPTNO').setAttribute("disabled", "true");
      }
      else {
        document.getElementById('AC_REF_RECEIPTNO').removeAttribute("disabled");
      }



      if (data.MULTIPLE_OF_AMT != null) {
        if (((this.angForm.controls['AC_SCHMAMT'].value) % (data.MULTIPLE_OF_AMT)) != 0) {
          Swal.fire("Deposit Amount Should Be Multiple Of " + data.MULTIPLE_OF_AMT, "error");
        }
      }
      if (data.MULTIPLE_OF_DAYS != null) {
        if (((this.angForm.controls['AC_DAYS'].value) % (data.MULTIPLE_OF_DAYS)) != 0) {
          Swal.fire("Deposit Amount Should Be Multiple Of " + data.MULTIPLE_OF_DAYS, "error");
        }
      }
      if (data.MULTIPLE_OF_MONTH != null) {
        if (((this.angForm.controls['AC_MONTHS'].value) % (data.MULTIPLE_OF_MONTH)) != 0) {
          Swal.fire("Deposit Amount Should Be Multiple Of " + data.MULTIPLE_OF_MONTH, "error");
        }
      }

      if (data.RECEIPT_TYPE != null) {
        this._InterestInstruction.getFormData(this.selectedValue).subscribe(data => {

        })

      }
      if (data.INTEREST_RULE == "Compounding") {
        if (data.S_INTCALTP == "CalculationOnDays") {
          if (data.S_INTCALC_METHOD == "SimpleInterest") {
            this.simpleInterestCalculation()
          } else if (data.S_INTCALC_METHOD == "CompountInterest") {
            this.installmentType = data.COMPOUND_INT_BASIS
            this.compoundInterestCalculation()
          }
          else {
            this.angForm.patchValue({
              AC_MATUAMT: 0
            })
          }
        }
      }
    })
  }
  //simple interest
  installmentType
  simpleInterestCalculation() {
    var date1 = this.angForm.controls['AC_ASON_DATE'].value;
    var date2 = this.angForm.controls['AC_EXPDT'].value;

    date1 = moment(date1).format('DD.MM.YYYY');

    var startDate = moment(date1, "DD.MM.YYYY");
    var endDate = moment(date2, "DD.MM.YYYY");

    var result = endDate.diff(startDate, 'days');
    this.result = Math.round(Math.floor(this.angForm.controls['AC_SCHMAMT'].value) * (Math.floor(result)) * Math.floor(this.angForm.controls['AC_INTRATE'].value) / 36500 + Math.floor(this.angForm.controls['AC_SCHMAMT'].value))
    this.angForm.patchValue({
      AC_MATUAMT: this.result
    })
  }
  //compound interest
  i: number
  total = 0
  compoundInterestCalculation() {
    // console.log(this.installmentType)

    var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 1;
    var date1 = this.angForm.controls['AC_ASON_DATE'].value;
    var date2 = this.angForm.controls['AC_EXPDT'].value;

    date1 = moment(date1).format('DD.MM.YYYY');

    var startDate = moment(date1, "DD.MM.YYYY");
    var endDate = moment(date2, "DD.MM.YYYY");

    var result = endDate.diff(startDate, 'days');
    var amount = this.angForm.controls['AC_SCHMAMT'].value
    var maturityAmount = this.angForm.controls['AC_MATUAMT'].value

    for (this.i = 1; this.i <= Quarters; this.i++) {
      let totalInterest: number
      var sample = parseFloat(amount);
      var totalInt = (parseFloat(amount) * (this.angForm.controls['AC_INTRATE'].value) * Math.trunc((result) / (Quarters)) / 36500).toFixed(10)
      totalInterest = Number(totalInt)
      amount = (parseFloat(amount) + (totalInterest)).toFixed(10)

      totalInterest = 0

      // console.log("totalInterest", totalInterest)
    }

    maturityAmount = Math.round(parseFloat(amount) + (parseFloat(amount) * (this.angForm.controls['AC_INTRATE'].value) * ((result) - Math.trunc((result) / (Quarters)) * (Quarters))) / 36500)

    this.angForm.patchValue({
      AC_MATUAMT: maturityAmount
    })

  }

  //Interest Calculation Type		
  // Months and Days Base	
  // Start with Months + Days	

  monthProductBaseSimpleInterest() {
    var date1 = this.angForm.controls['AC_ASON_DATE'].value;
    var date2 = this.angForm.controls['AC_EXPDT'].value;

    date1 = moment(date1).format('DD.MM.YYYY');

    var b = moment(date1, "DD.MM.YYYY");
    var a = moment(date2, "DD.MM.YYYY");

    var months = a.diff(b, 'months');
    b.add(months, 'months');

    var days = a.diff(b, 'days');

    console.log(months + ' months ' + days + ' days');

    var tmpAmt1 = Math.round(((this.angForm.controls['AC_SCHMAMT'].value * this.angForm.controls['AC_INTRATE'].value * months) / (12 * 100)))
    var tmpAmt2 = Math.round(((this.angForm.controls['AC_SCHMAMT'].value * this.angForm.controls['AC_INTRATE'].value * days) / (365 * 100)))
    var Interest = (tmpAmt1 + tmpAmt2)
    var Maturity = Math.round(Number(this.angForm.controls['AC_SCHMAMT'].value) + Interest)
    console.log("Maturity", Maturity)
    this.angForm.patchValue({
      AC_MATUAMT: Maturity
    })
  }

  monthProductBaseCompound() {

    var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 3;
    var date1 = this.angForm.controls['AC_ASON_DATE'].value;
    var date2 = this.angForm.controls['AC_EXPDT'].value;

    date1 = moment(date1).format('DD.MM.YYYY');

    var b = moment(date1, "DD.MM.YYYY");
    var a = moment(date2, "DD.MM.YYYY");

    var months = a.diff(b, 'months');
    b.add(months, 'months');

    var days = a.diff(b, 'days');

    console.log(months + ' months ' + days + ' days');
    console.log("this.angForm.controls['AC_EXPDT'].value", this.angForm.controls['AC_EXPDT'].value)

    var End = moment(date2, "DD.MM.YYYY").subtract(1, 'days');
    var EndDate = End.format("DD-MM-YYYY");

    var Start = moment(date1, "DD.MM.YYYY").subtract(1, 'days');
    var StartDate = Start.format("DD-MM-YYYY");

    var CurrentDate = this.angForm.controls['AC_ASON_DATE'].value
    console.log(EndDate + ' EndDate ' + StartDate + ' StartDate');
    var lngMonths = 0;
    var lngDays = 0;
    var VcumPeriod = 0;
    var IntAmount = 0
    var vmonth = moment(date1, "DD.MM.YYYY").add(1, 'days');
    var Mth = vmonth.format("DD-MM-YYYY");
    var vMth = new Date(Mth).getMonth();
    console.log("vMth", vMth)
    var PeriodEndDate = EndDate
    VcumPeriod = 12

    var oneDate = moment(CurrentDate, 'YYYY-MM-DD').add(1, 'days');
    var year = oneDate.format('YYYY');
    console.log("year ", year + "CurrentDate " + CurrentDate)
    PeriodEndDate = moment([year, "09", "30"]).format('YYYY-MM-DD')
    console.log(PeriodEndDate, "PeriodEndDate")
    if (CurrentDate >= EndDate) {

    } else {
      this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
        if (data.S_INTCALC_METHOD == true) {
          if (data.COMPOUND_INT_BASIS == "Yearly") {
            PeriodEndDate = EndDate
            VcumPeriod = 12
          } else if (data.COMPOUND_INT_BASIS == "HalfYearly") {
            if (vMth >= 4 && vMth <= 9) {
              var oneDate = moment(CurrentDate, 'YYYY-MM-DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              console.log("year ", year + "CurrentDate " + CurrentDate)
              PeriodEndDate = moment([year, "09", "30"]).format('YYYY-MM-DD')
            } else {
              var oneDate = moment(CurrentDate, 'YYYY-MM-DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              console.log("year ", year + "CurrentDate " + CurrentDate)
              PeriodEndDate = moment([year, "03", "31"]).format('YYYY-MM-DD')
              if (PeriodEndDate < CurrentDate) {
                var oneDate = moment(CurrentDate, 'YYYY-MM-DD').add(1, 'days');
                var year = oneDate.format('YYYY');
                console.log("year ", year + "CurrentDate " + CurrentDate)
                var PeriodEnd = moment([year, "03", "31"]).format('YYYY-MM-DD')
                var Period = moment(PeriodEnd, 'YYYY-MM-DD').add(1, 'days');
                PeriodEndDate = Period.toString()
              }
            }
            VcumPeriod = 6

          } else if (data.COMPOUND_INT_BASIS == "Quarterly") {
            if (vMth >= 1 && vMth <= 3) {
              var oneDate = moment(CurrentDate, 'YYYY-MM-DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              console.log("year ", year + "CurrentDate " + CurrentDate)
              PeriodEndDate = moment([year, "03", "31"]).format('YYYY-MM-DD')
              if (PeriodEndDate < CurrentDate) {
                var oneDate = moment(CurrentDate, 'YYYY-MM-DD').add(1, 'days');
                var year = oneDate.format('YYYY');
                console.log("year ", year + "CurrentDate " + CurrentDate)
                var PeriodEnd = moment([year, "03", "31"]).format('YYYY-MM-DD')
                var Period = moment(PeriodEnd, 'YYYY-MM-DD').add(1, 'days');
                PeriodEndDate = Period.toString()
              }
            } else if (vMth >= 4 && vMth <= 6) {
              var oneDate = moment(CurrentDate, 'YYYY-MM-DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              console.log("year ", year + "CurrentDate " + CurrentDate)
              PeriodEndDate = moment([year, "06", "30"]).format('YYYY-MM-DD')
            } else if (vMth >= 7 && vMth <= 9) {
              var oneDate = moment(CurrentDate, 'YYYY-MM-DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              console.log("year ", year + "CurrentDate " + CurrentDate)
              PeriodEndDate = moment([year, "09", "30"]).format('YYYY-MM-DD')
            } else {
              var oneDate = moment(CurrentDate, 'YYYY-MM-DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              console.log("year ", year + "CurrentDate " + CurrentDate)
              PeriodEndDate = moment([year, "12", "30"]).format('YYYY-MM-DD')
            }
            VcumPeriod = 3
          } else if (data.COMPOUND_INT_BASIS == "Monthly") {
            var current = new Date(CurrentDate)
            let year = current.getFullYear();
            var month = new Date(CurrentDate).getMonth();
            var day = new Date(current).getDate();
            var exe_day = month + 1
            var nextDate = new Date(year, exe_day, day);
            var lastDay = new Date(current.getFullYear(), nextDate.getMonth() + 1, 0);
            var nextExeDate = this.datePipe.transform(lastDay, "yyyy-MM-dd")
            VcumPeriod = 3
          } else if (data.COMPOUND_INT_BASIS == "Monthly") {
            if (data.COMPOUND_INT_DAYS <= 0) {
              Swal.fire('You Must Assign Valid Compound Basis Days For The Scheme Please Contact To Software Engineer')
            }
            VcumPeriod = 0
          } else {
            Swal.fire('You Must Assign Valid Compound Basis Days For The Scheme Please Contact To Software Engineer')
          }

          if (PeriodEndDate > EndDate) {
            PeriodEndDate = EndDate
          }


        }
      })
    }





  }

  recurringSimpleInterest() {

    var noOfInstallment = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 1;
    var amount = this.angForm.controls['AC_SCHMAMT'].value
    var rate = this.angForm.controls['AC_INTRATE'].value
    var Interest = (noOfInstallment * noOfInstallment + noOfInstallment) / 2 * amount * rate / 1200
    console.log(Interest, "Interest")
    var maturity = (Number(amount) * Number(noOfInstallment)) + Number(Interest)
    console.log(maturity, "Interestmaturity")
  }

  recurringCompoundInterest() {

    var date1 = this.angForm.controls['AC_ASON_DATE'].value;
    var date2 = this.angForm.controls['AC_EXPDT'].value;

    date1 = moment(date1).format('DD.MM.YYYY');

    var b = moment(date1, "DD.MM.YYYY");
    var a = moment(date2, "DD.MM.YYYY");

    var months = a.diff(b, 'months');
    b.add(months, 'months');

    var days = a.diff(b, 'days');

    console.log(months + ' months ' + days + ' days');
    var amount = this.angForm.controls['AC_SCHMAMT'].value
    var rate = this.angForm.controls['AC_INTRATE'].value
    var noOfInstallment = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 1;
    var totalInterest = 0

    for (this.i = 1; this.i <= noOfInstallment; this.i++) {
      totalInterest = Math.round((totalInterest + (amount * ((1 + (rate * 1) / (12 * 100)) ** (this.i / 1)) - amount)))
    }
    var maturity = (Number(amount) * Number(noOfInstallment)) + Number(totalInterest)
    console.log(maturity, "Interestmaturity")
  }
  //get account no according scheme for introducer
  getIntroducer(acno) {
    switch (acno) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList().pipe(first()).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'SH':
        this.schemeAccountNoService.getShareSchemeList().pipe(first()).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList().pipe(first()).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList().pipe(first()).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList().pipe(first()).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList().pipe(first()).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList().pipe(first()).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList().pipe(first()).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList().pipe(first()).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList().pipe(first()).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList().pipe(first()).subscribe(data => {
          this.introducerACNo = data;
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

  getCustomer(id) {
    this.compoundInterestCalculation()
    this.getSystemParaDate() //function to set date
    this.customerIdService.getFormData(id).subscribe(data => {
      this.tempAddress = data.custAddress[0].AC_ADDFLAG
      this.ageCalculator(data.AC_BIRTH_DT);
      this.angForm.patchValue({
        AC_CUSTID: id.toString(),
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_CAST: data.AC_CAST,
        AC_OCODE: data.AC_OCODE,
        AC_BIRTH_DT: data.AC_BIRTH_DT,
        AC_MBDATE: data.AC_BIRTH_DT,
        AC_ADDFLAG: data.custAddress[0].AC_ADDFLAG,
        AC_HONO: data.custAddress[0].AC_HONO,
        AC_WARD: data.custAddress[0].AC_WARD,
        AC_ADDR: data.custAddress[0].AC_ADDR,
        AC_GALLI: data.custAddress[0].AC_GALLI,
        AC_AREA: data.custAddress[0].AC_AREA,
        AC_CTCODE: data.custAddress[0].AC_CTCODE,
        AC_PIN: data.custAddress[0].AC_PIN,
        AC_MOBNO: data.custAddress[0].AC_MOBILENO,
        AC_PHNO: data.custAddress[0].AC_PHONE_RES,
        AC_EMAIL: data.custAddress[0].AC_EMAILID,
      })
      if (data.custAddress[0].AC_ADDFLAG == false && data.custAddress[0].AC_ADDTYPE == 'P') {
        this.angForm.patchValue({
          AC_THONO: data.custAddress[1].AC_HONO,
          AC_TWARD: data.custAddress[1].AC_WARD,
          AC_TADDR: data.custAddress[1].AC_ADDR,
          AC_TGALLI: data.custAddress[1].AC_GALLI,
          AC_TAREA: data.custAddress[1].AC_AREA,
          AC_TCTCODE: data.custAddress[1].AC_CTCODE,
          AC_TPIN: data.custAddress[1].AC_PIN,
        })
      }
    })
  }

  // Method to insert data into database through NestJS
  submit() {
    const formVal = this.angForm.value;
    if (formVal.AC_ADDFLAG == true) {
      this.addType = 'P'
    }
    else if (formVal.AC_ADDFLAG == false) {
      this.addType = 'T'
    }
    const dataToSend = {
      'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
      'AC_TYPE': formVal.AC_TYPE,
      'AC_NO': formVal.AC_NO,
      // 'AC_INTRATE':formVal.AC_INTRATE,
      'AC_CUSTID': formVal.AC_CUSTID,
      'REF_ACNO': formVal.REF_ACNO,
      'AC_OPDATE': formVal.AC_OPDATE,
      'AC_CATG': formVal.AC_CATG,
      'AC_OPR_CODE': formVal.AC_OPR_CODE,
      'AC_INTCATA': formVal.AC_INTCATA,
      'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
      'AC_REF_RECEIPTNO': formVal.AC_REF_RECEIPTNO,
      'AC_ASON_DATE': formVal.AC_ASON_DATE,
      'AC_MONTHS': formVal.AC_MONTHS,
      'AC_EXPDT': formVal.AC_EXPDT,
      'AC_SCHMAMT': formVal.AC_SCHMAMT,
      'AC_MATUAMT': formVal.AC_MATUAMT,
      'IS_DISCOUNTED_INT_RATE': formVal.IS_DISCOUNTED_INT_RATE,

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
      'JointAccountData': this.multiJointAC,
      //Attorney
      'PowerOfAttorneyData': this.multiAttorney

    }
    // console.log(dataToSend);
    this.TermDepositMasterService.postData(dataToSend).subscribe(data1 => {
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
    this.multiJointAC = []
    this.multiAttorney = []
  }
  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.TermDepositMasterService.getFormData(id).subscribe(data => {
      this.updateID = data.id;
      this.getCustomer(data.AC_CUSTID)
      //get nominee to edit
      this.multiNominee = data.nomineeDetails
      //get joint accounts to edit
      this.multiJointAC = data.jointAccounts
      //get attorney to edit
      this.multiAttorney = data.powerOfAttorney
      this.angForm.patchValue({
        AC_TYPE: data.AC_TYPE,
        'AC_NO': data.AC_NO,
        'AC_SHORT_NAME': data.AC_SHORT_NAME,
        'AC_AGE': data.AC_AGE,
        'REF_ACNO': data.REF_ACNO,
        'AC_OPDATE': data.AC_OPDATE,
        'AC_RENEW_DATE': data.AC_RENEW_DATE,
        'AC_EXPDT': data.AC_EXPDT,
        'AC_CATG': data.AC_CATG,
        AC_INTCATA: data.AC_INTCATA,
        'AC_MONTHS': data.AC_MONTHS,
        'AC_SCHMAMT': data.AC_SCHMAMT,
        'AC_IS_RECOVERY': data.AC_IS_RECOVERY,
        'AC_REF_RECEIPTNO': data.AC_REF_RECEIPTNO,
        'AC_ASON_DATE': data.AC_ASON_DATE,
        'AC_MATUAMT': data.AC_MATUAMT,
        'IS_DISCOUNTED_INT_RATE': data.IS_DISCOUNTED_INT_RATE,
        //minor and introducer
        'AC_MINOR': data.AC_MINOR,
        'AC_MBDATE': data.AC_MBDATE,
        'AC_GRDNAME': data.AC_GRDNAME,
        'AC_GRDRELE': data.AC_GRDRELE,
        AC_INTROBRANCH: data.AC_INTROBRANCH,
        AC_INTROID: data.AC_INTROID,
        AC_INTRACNO: data.AC_INTRACNO,
        'AC_INTRNAME': data.AC_INTRNAME,
        'PG_COMM_TYPE': data.PG_COMM_TYPE,
        'SIGNATURE_AUTHORITY': data.SIGNATURE_AUTHORITY,
      })
    })
  }
  //Method for update data 
  updateData() {
    let data = this.angForm.value;
    if (data.AC_ADDFLAG == true) {
      // console.log('data.AC_ADDFLAG ', data.AC_ADDFLAG)
      this.addType = 'P'
    }
    else if (data.AC_ADDFLAG == false) {
      // console.log('data.AC_ADDFLAG ', data.AC_ADDFLAG)
      this.addType = 'T'
    }
    data['AC_ADDTYPE'] = this.addType
    data['NomineeData'] = this.multiNominee
    data['JointAccountData'] = this.multiJointAC
    data['PowerOfAttorneyData'] = this.multiAttorney
    data['id'] = this.updateID;
    this.TermDepositMasterService.updateData(data).subscribe(() => {
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
        this.TermDepositMasterService.deleteData(id).subscribe(data1 => {
          this.termDepositMaster = data1;
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
    this.resetNominee();
    this.resetJointAC()
    this.resetAttorney()
    this.PowerofAttorneyTrue = false
    this.JointAccountsTrue = false
    this.nomineeTrue = false
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

  //reset function while update
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.multiNominee = []
    this.multiJointAC = []
    this.multiAttorney = []
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

  selectedValue = ""
  setMaturityDate() {
    this.schemedata(this.selectedValue)
    // this.angForm.patchValue({
    //   AC_MATUAMT: this.angForm.controls['AC_SCHMAMT'].value
    // })
  }
  // data scheme master
  schemedata(id) {
    this._termDepositScheme.getFormData(id).subscribe(data => {

      // console.log("term deposit scheme data", data)
      // console.log("term deposit scheme data1", data.IS_CAL_MATURITY_AMT)
      this.recurringCompoundInterest()
      if (data.IS_CAL_MATURITY_AMT != true) {
        // console.log("false", data.IS_CAL_MATURITY_AMT)
        // this.setMaturityDate()
        // this.simpleInterestCalculation()
        // this.compoundInterestCalculation()
      }
      else {
        // call calculation function
        // console.log("true", data.IS_CAL_MATURITY_AMT)
        // this.simpleInterestCalculation()
      }
    })
  }
}
