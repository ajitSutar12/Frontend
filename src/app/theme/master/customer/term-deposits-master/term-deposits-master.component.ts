
import { animate, style, transition, trigger } from '@angular/animations';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { TitleService } from '../../../../shared/elements/title.service';
import Swal from 'sweetalert2';

import { AccountcodeService } from '../../../../shared/elements/accountcode.service';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

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
  BANKACNO: number
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
  @Input() childMessage: string;
  @Output() public getUserData = new EventEmitter<string>();
  formSubmitted = false;
  //api 
  url = environment.base_url;
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
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
  tempupdateattorny: any
  // @Input() visible: boolean;
  public config: any;
  scheme //scheme code from schemast(S_ACNOTYPE)
  joint_Cust_ID
  StatementCodeDropdown: any[];
  intrestCategoryMaster: any[];
  OperationMasterDropdown: any[];
  selectedOption = '3';
  cityMasterServiceDropdown: any[];
  IntrestCategoryMasterDropdown: any[];
  // isDisabled = true;

  //temp address flag variable
  tempAddress: boolean = true;
  Cust_ID
  // id: string = '';
  introducerACNo //account no for introducer
  // acno
  nomineedataedit: any
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
  ngnomineedate: any
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

  //url to display document
  documentUrl = this.url + '/'
  //array of document of customer
  customerDoc = []
  schemeCode

  selectedValue: any = null
  id: any = null
  ngCategory: any = null
  ngOperation: any = null
  ngIntCategory: any = null
  ngCity: any = null
  code: any = null
  acno: any = null
  ngIntroducer: any = null
  ngNcity: any = null
  jointID: any = null

  AC_TYPE: boolean = false
  tempopendate: any
  openingDate: any
  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;

  @ViewChild('ctdTabset') ctdTabset;
  selectedImagePreview: any;

  public visible = false;
  public visibleAnimate = false;
  bsValue
  getschemename: any
  maxDate: Date;
  minDate: Date;
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
  ) {
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
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
        // {
        //   title: 'Scheme Type',
        //   data: 'AC_ACNOTYPE'
        // },
        {
          title: 'Scheme',
          data: 'AC_TYPE'
        },
        {
          title: 'Account No',
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
          title: 'Detail Address',
          data: 'AC_ADDR'
        },
        {
          title: 'City',
          data: 'AC_CTCODE'
        },
        {
          title: 'Manual Reference Number',
          data: 'REF_ACNO'
        },
        {
          title: 'Birth Date',
          data: 'AC_MBDATE'
        },
        {
          title: 'Opening Date',
          data: 'AC_OPDATE'
        },
        {
          title: 'As On Date',
          data: 'AC_ASON_DATE'
        },
        {
          title: 'Maturity Date',
          data: 'AC_EXPDT'
        },
        {
          title: 'Receipt No.',
          data: 'AC_REF_RECEIPTNO'
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
          title: 'Minor Details',
          data: 'AC_MINOR'
        },
        {
          title: 'Signature Authority',
          data: 'SIGNATURE_AUTHORITY'
        },

      ],
      dom: 'Blrtip',
    };

    this.customerID.getCustomerIDMasterList().pipe(first()).subscribe(data => {
      this.Cust_ID = data;
      this.joint_Cust_ID = data
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
    this.categoryMasterService.getcategoryList().pipe(first()).subscribe(data => {
      this.categoryMasterdropdown = data;
    })
    this.IntrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(first()).subscribe(data => {
      this.IntrestCategoryMasterDropdown = data;
    })
    this.SchemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data;
      this.selectedValue = this.scheme[0].value
    })
  }

  createForm() {
    this.getSystemParaDate()
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      AC_ACNOTYPE: ['TD'],
      AC_NO: [''],
      AC_INTRATE: ['', [Validators.pattern]],
      AC_CUSTID: ['', [Validators.required]],
      AC_TITLE: [''],
      AC_NAME: [''],
      AC_MEMBTYPE: [''],
      BANKACNO: [''],
      AC_MEMBNO: [''],
      AC_OPDATE: ['', [Validators.required]],
      REF_ACNO: ['', [Validators.pattern]],
      AC_CAST: ['',],
      AC_OCODE: ['',],
      AC_CATG: ['', [Validators.required]],
      AC_OPR_CODE: ['', [Validators.required]],
      AC_INTCATA: ['', [Validators.required]],
      AC_PANNO: ['',],
      AC_IS_RECOVERY: [false],
      AC_REF_RECEIPTNO: [''],
      AC_ASON_DATE: [],
      AC_MONTHS: ['', [Validators.pattern, Validators.required]],
      AC_DAYS: [],
      AC_EXPDT: ['', [Validators.required]],
      AC_SCHMAMT: ['', [Validators.pattern, Validators.required]],
      AC_MATUAMT: ['', [Validators.pattern]],
      IS_DISCOUNTED_INT_RATE: [''],
      AC_BIRTH_DT: [''],
      AC_RENEW_DATE: [''],
      AC_HONO: ['',],
      AC_WARD: ['',],
      AC_GALLI: ['',],
      AC_AREA: ['',],
      AC_ADDR: [''],
      AC_CTCODE: [''],
      AC_TCTCODE: [''],
      AC_PIN: ['',],
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
      JOINT_AC_CUSTID: ['',],
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
        this.angForm.controls['SIGNATURE_AUTHORITY'].enable();
        this.angForm.patchValue({
          AC_MBDATE: this.angForm.controls['AC_BIRTH_DT'].value
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

  //set open date
  getSystemParaDate() {
    this.systemParameter.getFormData(1).subscribe(data => {
      this.tempopendate = data.CURRENT_DATE
      this.openingDate = data.CURRENT_DATE
      this.angForm.patchValue({
        AC_OPDATE: data.CURRENT_DATE,
        AC_ASON_DATE: data.CURRENT_DATE
      })
      if (data.ON_LINE === '1') {
        this.angForm.controls['AC_OPDATE'].disable()
      } else {
        this.angForm.controls['AC_OPDATE'].enable()
      }
    })
    this.getMaturityDate()
  }



  result: number
  expiryDate
  //get maturity date
  getMaturityDate() {
    this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
      if (data.S_INTASON == '1') {
        document.getElementById('AC_ASON_DATE').removeAttribute("disabled");
      }
      else {
        document.getElementById('AC_ASON_DATE').setAttribute("disabled", "true");
        let months = this.angForm.controls['AC_MONTHS'].value
        let days = this.angForm.controls['AC_DAYS'].value
        // var maturityDt = new Date(this.angForm.controls['AC_ASON_DATE'].value)
        // var year = maturityDt.getFullYear();
        // var month = new Date(maturityDt).getMonth();
        // var day = new Date(maturityDt).getDate();
        // var maturityMonth = month + Number(months)
        // var maturityDay = day + Number(days)
        // var date = new Date(year, maturityMonth, maturityDay);
        // var maturityDate = this.datePipe.transform(date, "DD/MM/YYYY")

        // var check = moment(n.entry.date_entered, 'YYYY/MM/DD');

        // var month = check.format('M');
        // var day = check.format('D');
        // var year = check.format('YYYY');

        var maturityDt = moment(this.angForm.controls['AC_ASON_DATE'].value, 'DD/MM/YYYY')
        var year = maturityDt.format('YYYY');
        var month = maturityDt.format('M');
        var day = maturityDt.format('D');

        var maturityMonth = Number(month) + Number(months)
        var maturityDay = Number(day) + Number(days)
        var date = new Date(Number(year), Number(maturityMonth), Number(maturityDay));
        var maturityDate = moment(date).format("DD/MM/YYYY")
        this.expiryDate = maturityDate
        this.angForm.patchValue({
          AC_EXPDT: maturityDate
        })
      }

      if (data.PERIOD_APPLICABLE == '1') {
        document.getElementById('AC_MONTHS').removeAttribute("disabled");
        document.getElementById('AC_DAYS').removeAttribute("disabled");
      }
      else {
        document.getElementById('AC_MONTHS').setAttribute("disabled", "true");
        document.getElementById('AC_DAYS').setAttribute("disabled", "true");
      }



      if (data.RECEIPT_NO_INPUT == '1') {
        document.getElementById('AC_REF_RECEIPTNO').removeAttribute("disabled");
      }
      else {
        document.getElementById('AC_REF_RECEIPTNO').setAttribute("disabled", "true");
      }





      // if (data.RECEIPT_TYPE != null) {
      //   this._InterestInstruction.getFormData(this.selectedValue).subscribe(data => {

      //     this.http.get<any>(
      //       this.url + '/td-receipt-type',
      //     ).subscribe(resp => {
      //       if (resp.length != 0) {
      //         resp.forEach(async (element) => {
      //           if (data.RECEIPT_TYPE == element.RECEIPT_TYPE) {
      //             this.angForm.patchValue({
      //               AC_REF_RECEIPTNO: element.LAST_RECEIPT_NO + 1
      //             })
      //           } else {
      //             this.angForm.patchValue({
      //               AC_REF_RECEIPTNO: 0
      //             })
      //           }
      //         })
      //       }
      //       else {
      //         this.angForm.patchValue({
      //           AC_REF_RECEIPTNO: 0
      //         })
      //       }
      //     })



      //   })

      // }

      if (data.IS_RECURRING_TYPE == "1") {
        if (data.S_INTCALTP == "D") {
          if (data.S_INTCALC_METHOD == "S") {
            this.simpleInterestCalculation()
          } else if (data.S_INTCALC_METHOD == "C") {
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

    // date1 = moment(date1).format('DD/MM/YYYY');
    // date2 = moment(date2).format('DD/MM/YYYY');

    var startDate = moment(date1, "DD/MM/YYYY");
    var endDate = moment(date2, "DD/MM/YYYY");

    var result = endDate.diff(startDate, 'days');
    this.result = Math.round(Math.floor(this.angForm.controls['AC_SCHMAMT'].value) * (Math.floor(result)) * Math.floor(this.angForm.controls['AC_INTRATE'].value) / 36500 + Math.floor(this.angForm.controls['AC_SCHMAMT'].value))
    this.angForm.patchValue({
      AC_MATUAMT: this.result
    })
  }

  checkAmount() {

    const formVal = this.angForm.value;
    this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
      if (data.MAX_DEP_LMT != '' || data.MULTIPLE_OF_AMT != '') {
        if (Number(this.angForm.controls['AC_SCHMAMT'].value) > Number(data.MAX_DEP_LMT)) {
          Swal.fire("Deposit Amount Should Be Less Than " + data.MAX_DEP_LMT, "error");
          this.angForm.controls['AC_SCHMAMT'].reset()
        } else if (((Number(this.angForm.controls['AC_SCHMAMT'].value)) % Number((data.MULTIPLE_OF_AMT))) != 0) {
          Swal.fire("Deposit Amount Should Be Multiple Of " + data.MULTIPLE_OF_AMT, "error");
        }
      } else {
        this.angForm.patchValue({
          AC_MATUAMT: formVal.AC_MATUAMT
        })
      }

    })
  }
  CheckmonthDays() {
    this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {

      if (data.UNIT_OF_PERIOD == "B") {
        if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
          Swal.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + "and " + data.MIN_DAYS, "error");
          this.angForm.controls['AC_MONTHS'].reset()
          this.angForm.controls['MIN_DAYS'].reset()
        }

        if (Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
          this.angForm.controls['AC_DAYS'].reset()
          Swal.fire("Days Must Be Geater Than " + data.MIN_DAYS, "error");
        }
      }
      else if (data.UNIT_OF_PERIOD == "D") {
        if (Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
          Swal.fire("Days Must Be Geater Than " + data.MIN_DAYS, "error");
          this.angForm.controls['AC_DAYS'].reset()
        }
      }
      else if (data.UNIT_OF_PERIOD == "M") {
        if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH)) {
          Swal.fire("Month Must Be Geater Than " + data.MIN_MONTH, "error");
          this.angForm.controls['AC_MONTHS'].reset()
        }
      }

      if (data.UNIT_OF_PERIOD == "B" && data.IS_AUTO_PERIOD_CALCULATE == '1') {
        if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
          Swal.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + "and " + data.MIN_DAYS, "error");
          this.angForm.controls['AC_MONTHS'].reset()
          this.angForm.controls['AC_DAYS'].reset()
        }
      }


      if (data.MULTIPLE_OF_DAYS != null) {
        if ((Number((this.angForm.controls['AC_DAYS'].value)) % Number((data.MULTIPLE_OF_DAYS))) != 0) {
          Swal.fire("Days Should Be Multiple Of " + data.MULTIPLE_OF_DAYS, "error");
        }
      }
      if (data.MULTIPLE_OF_MONTH != null) {
        if (((Number(this.angForm.controls['AC_MONTHS'].value)) % Number((data.MULTIPLE_OF_MONTH))) != 0) {
          Swal.fire("Month Should Be Multiple Of " + data.MULTIPLE_OF_MONTH, "error");
        }
      }
    })
  }
  monthDays() {


    const formVal = this.angForm.value;
    this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
      var date1 = this.angForm.controls['AC_ASON_DATE'].value;
      var date2 = this.angForm.controls['AC_EXPDT'].value;

      // date1 = moment(date1).format('DD/MM/YYYY');
      // date2 = moment(date2).format('DD/MM/YYYY');

      var b = moment(date1, "DD/MM/YYYY");
      var a = moment(date2, "DD/MM/YYYY");

      var months = a.diff(b, 'months');
      b.add(months, 'months');

      var days = a.diff(b, 'days');

      if (data.IS_AUTO_PERIOD_CALCULATE == '1') {
        this.angForm.patchValue({
          AC_MONTHS: months,
          AC_DAYS: days,

        })
      } else {
        this.angForm.patchValue({
          AC_MONTHS: '',
          AC_DAYS: ''
        })
      }


    })
  }
  //compound interest
  i: number
  total = 0
  compoundInterestCalculation() {
    const formVal = this.angForm.value;

    var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 1;
    var date1 = this.angForm.controls['AC_ASON_DATE'].value;
    var date2 = this.angForm.controls['AC_EXPDT'].value;

    // date1 = moment(date1).format('DD/MM/YYYY');

    var startDate = moment(date1, "DD/MM/YYYY");
    var endDate = moment(date2, "DD/MM/YYYY");

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


    }

    maturityAmount = Math.round(parseFloat(amount) + (parseFloat(amount) * (this.angForm.controls['AC_INTRATE'].value) * ((result) - Math.trunc((result) / (Quarters)) * (Quarters))) / 36500)

    this.angForm.patchValue({
      AC_MATUAMT: maturityAmount
    })

  }

  //Interest Calculation Type		
  // Months and Days Base	
  // Start with Months + Days	



  monthProductBaseCompound() {

    var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 3;
    var date1 = this.angForm.controls['AC_ASON_DATE'].value;
    var date2 = this.angForm.controls['AC_EXPDT'].value;

    // date1 = moment(date1).format('DD/MM/YYYY');

    var b = moment(date1, "DD/MM/YYYY");
    var a = moment(date2, "DD/MM/YYYY");

    var months = a.diff(b, 'months');
    b.add(months, 'months');

    var days = a.diff(b, 'days');
    var End = moment(date2, "DD/MM/YYYY").subtract(1, 'days');
    var EndDate = End.format("DD/MM/YYYY");

    var Start = moment(date1, "DD/MM/YYYY").subtract(1, 'days');
    var StartDate = Start.format("DD/MM/YYYY");

    var CurrentDate = this.angForm.controls['AC_ASON_DATE'].value
    var lngMonths = 0;
    var lngDays = 0;
    var VcumPeriod = 0;
    var IntAmount = 0
    var vmonth = moment(date1, "DD/MM/YYYY").add(1, 'days');
    var Mth = vmonth.format("DD/MM/YYYY");
    var vMth = new Date(Mth).getMonth();
    var PeriodEndDate = EndDate
    VcumPeriod = 12

    var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
    var year = oneDate.format('YYYY');
    PeriodEndDate = moment([year, "09", "30"]).format('YYYY/MM/DD')
    if (CurrentDate >= EndDate) {

    } else {
      this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
        if (data.S_INTCALC_METHOD == '1') {
          if (data.COMPOUND_INT_BASIS == "Y") {
            PeriodEndDate = EndDate
            VcumPeriod = 12
          } else if (data.COMPOUND_INT_BASIS == "H") {
            if (vMth >= 4 && vMth <= 9) {
              var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              PeriodEndDate = moment([year, "09", "30"]).format('YYYY/MM/DD')
            } else {
              var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              PeriodEndDate = moment([year, "03", "31"]).format('YYYY/MM/DD')
              if (PeriodEndDate < CurrentDate) {
                var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                var year = oneDate.format('YYYY');
                var PeriodEnd = moment([year, "03", "31"]).format('YYYY/MM/DD')
                var Period = moment(PeriodEnd, 'YYYY/MM/DD').add(1, 'days');
                PeriodEndDate = Period.toString()
              }
            }
            VcumPeriod = 6

          } else if (data.COMPOUND_INT_BASIS == "Q") {
            if (vMth >= 1 && vMth <= 3) {
              var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              PeriodEndDate = moment([year, "03", "31"]).format('YYYY/MM/DD')
              if (PeriodEndDate < CurrentDate) {
                var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                var year = oneDate.format('YYYY');
                var PeriodEnd = moment([year, "03", "31"]).format('YYYY/MM/DD')
                var Period = moment(PeriodEnd, 'YYYY/MM/DD').add(1, 'days');
                PeriodEndDate = Period.toString()
              }
            } else if (vMth >= 4 && vMth <= 6) {
              var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              PeriodEndDate = moment([year, "06", "30"]).format('YYYY/MM/DD')
            } else if (vMth >= 7 && vMth <= 9) {
              var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              PeriodEndDate = moment([year, "09", "30"]).format('YYYY/MM/DD')
            } else {
              var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
              var year = oneDate.format('YYYY');
              PeriodEndDate = moment([year, "12", "30"]).format('YYYY/MM/DD')
            }
            VcumPeriod = 3
          } else if (data.COMPOUND_INT_BASIS == "M") {
            var current = new Date(CurrentDate)
            let year = current.getFullYear();
            var month = new Date(CurrentDate).getMonth();
            var day = new Date(current).getDate();
            var exe_day = month + 1
            var nextDate = new Date(year, exe_day, day);
            var lastDay = new Date(current.getFullYear(), nextDate.getMonth() + 1, 0);
            var nextExeDate = this.datePipe.transform(lastDay, "YYYY/MM/DD")
            VcumPeriod = 3
          } else if (data.COMPOUND_INT_BASIS == "M") {
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
    var Interest = (noOfInstallment * noOfInstallment + noOfInstallment) / 2 * Number(amount) * Number(rate) / 1200
    var maturity = (Number(amount) * Number(noOfInstallment)) + Number(Interest)
  }

  recurringCompoundInterest() {

    var date1 = this.angForm.controls['AC_ASON_DATE'].value;
    var date2 = this.angForm.controls['AC_EXPDT'].value;

    // date1 = moment(date1).format('DD/MM/YYYY');

    var b = moment(date1, "DD/MM/YYYY");
    var a = moment(date2, "DD/MM/YYYY");

    var months = a.diff(b, 'months');
    b.add(months, 'months');

    var days = a.diff(b, 'days');

    var amount = Number(this.angForm.controls['AC_SCHMAMT'].value)
    var rate = Number(this.angForm.controls['AC_INTRATE'].value)
    var noOfInstallment = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 1;
    var totalInterest = 0

    for (this.i = 1; this.i <= noOfInstallment; this.i++) {
      totalInterest = Math.round((totalInterest + (amount * ((1 + (rate * 1) / (12 * 100)) ** (this.i / 1)) - amount)))
    }
    var maturity = (Number(amount) * Number(noOfInstallment)) + Number(totalInterest)
  }

  getBranch() {
    this.getIntroducer()
  }
  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }
  getIntroducer() {
    this.obj = [this.acno, this.code]

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
  }

  //get introducer name according account no
  getIntroducerName(value: any) {
    this.angForm.patchValue({
      AC_INTRNAME: value.name
    })
  }


  getCustomer(id) {
    this.customerIdService.getFormData(id).subscribe(data => {

      this.customerDoc = data.custdocument
      this.tempAddress = data.custAddress[0]?.AC_ADDFLAG

      if (data.castMaster == null) {
        data.castMaster = ""
      }
      if (data.occupMaster == null) {
        data.occupMaster = ""
      }

      this.angForm.patchValue({
        AC_TITLE: data.AC_TITLE,
        AC_NAME: data.AC_NAME,
        AC_MEMBTYPE: data.AC_MEMBTYPE,
        AC_MEMBNO: data.AC_MEMBNO,
        AC_CAST: data.castMaster.NAME,
        AC_OCODE: data.occupMaster.NAME,
        AC_BIRTH_DT: data.AC_BIRTH_DT,
        AC_MOBNO: data.AC_MOBILENO,
        AC_PHNO: data.AC_PHONE_RES,
        AC_EMAIL: data.AC_EMAILID,
        AC_PANNO: data.AC_PANNO,
        AC_CUSTID: data.id
        // AC_MONTHS: '',
        // AC_DAYS: '',
      })
      this.id = data.id
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
      this.ngCity = temp?.city?.id,
        this.angForm.patchValue({
          AC_THONO: temp?.AC_HONO,
          AC_TWARD: temp?.AC_WARD,
          AC_TADDR: temp?.AC_ADDR,
          AC_TGALLI: temp?.AC_GALLI,
          AC_TAREA: temp?.AC_AREA,
          AC_TPIN: temp?.AC_PIN,
        })

      this.ageCalculator(data.AC_BIRTH_DT);
    })
    this.onCloseModal();
  }


  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    if (this.angForm.valid) {
      let opdate
      let temdate
      let asondate
      let maturitydate
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
      let bankCode = Number(result.branch.syspara.BANK_CODE)

      let schecode
      this.scheme.forEach(async (element) => {
        if (element.value == this.selectedValue) {
          schecode = element.name
        }
      })
      if (this.tempopendate != this.openingDate) {
        temdate = (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == 'Invalid date') ? opdate = '' : opdate = moment(formVal.AC_OPDATE).format('DD/MM/YYYY')
      } else {
        temdate = this.openingDate
      }
      let asonDate

      if (this.tempopendate != formVal.AC_ASON_DATE) {
        asondate = (formVal.AC_ASON_DATE == '' || formVal.AC_ASON_DATE == 'Invalid date') ? asonDate = '' : asonDate = moment(formVal.AC_ASON_DATE).format('DD/MM/YYYY')
      } else {
        asondate = this.tempopendate
      }
      let expiry
      if (this.expiryDate != formVal.AC_EXPDT) {
        expiry = (formVal.AC_EXPDT == '' || formVal.AC_EXPDT == 'Invalid date') ? expiry = '' : asonDate = moment(formVal.AC_EXPDT).format('DD/MM/YYYY')
      } else {
        expiry = this.expiryDate
      }

      const dataToSend = {
        'branchCode': branchCode,
        'bankCode': bankCode,
        'schemeCode': schecode,
        'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
        'AC_TYPE': formVal.AC_TYPE,
        'AC_NO': formVal.AC_NO,
        'AC_INTRATE': formVal.AC_INTRATE,
        'AC_CUSTID': formVal.AC_CUSTID,
        'AC_NAME': formVal.AC_NAME,
        'REF_ACNO': formVal.REF_ACNO,
        'AC_OPDATE': temdate,
        'AC_CATG': formVal.AC_CATG,
        'AC_OPR_CODE': formVal.AC_OPR_CODE,
        'AC_INTCATA': formVal.AC_INTCATA,
        'AC_IS_RECOVERY': (formVal.AC_IS_RECOVERY == true ? '1' : '0'),
        'AC_REF_RECEIPTNO': formVal.AC_REF_RECEIPTNO,
        'AC_ASON_DATE': asondate,
        // 'AC_ASON_DATE': (formVal.AC_ASON_DATE == '' || formVal.AC_ASON_DATE == 'Invalid date') ? asondate = '' : asondate = moment(formVal.AC_ASON_DATE).format('DD/MM/YYYY'),
        'AC_MONTHS': formVal.AC_MONTHS,
        'AC_EXPDT': expiry,
        // 'AC_EXPDT': (formVal.AC_EXPDT == '' || formVal.AC_EXPDT == 'Invalid date') ? maturitydate = '' : maturitydate = moment(formVal.AC_EXPDT).format('DD/MM/YYYY'),
        'AC_SCHMAMT': formVal.AC_SCHMAMT,
        'AC_MATUAMT': formVal.AC_MATUAMT,
        'IS_DISCOUNTED_INT_RATE': (formVal.IS_DISCOUNTED_INT_RATE == true ? '1' : '0'),

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
        //nominee
        'NomineeData': this.multiNominee,
        //Joint Account
        'JointAccountData': this.multiJointAC,
        //Attorney
        'PowerOfAttorneyData': this.multiAttorney

      }
      this.TermDepositMasterService.postData(dataToSend).subscribe(data => {
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
      this.multiAttorney = []
      this.customerDoc = []

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }
  }
  updatecheckdata: any
  //Method for append data into fields
  editClickHandler(id) {
    let opdate
    let asondate
    let maturitydate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;

    this.TermDepositMasterService.getFormData(id).subscribe(data => {

      this.updateID = data.id;
      this.updatecheckdata = data
      this.getCustomer(data.AC_CUSTID)
      //get nominee to edit
      this.multiNominee = data.nomineeDetails
      //get joint accounts to edit
      this.multiJointAC = data.jointAccounts
      //get attorney to edit
      this.multiAttorney = data.powerOfAttorney

      this.ngCategory = data.AC_CATG,
        this.ngOperation = data.AC_OPR_CODE
      this.ngIntCategory = data.AC_INTCATA
      this.angForm.patchValue({
        AC_TYPE: data.AC_TYPE,
        'AC_NO': data.AC_NO,
        'BANKACNO': data.BANKACNO,
        'AC_SHORT_NAME': data.AC_SHORT_NAME,
        'AC_AGE': data.AC_AGE,
        'REF_ACNO': data.REF_ACNO,
        'AC_OPDATE': data.AC_OPDATE,
        'AC_RENEW_DATE': data.AC_RENEW_DATE,
        'AC_EXPDT': data.AC_EXPDT,
        // 'AC_CATG': data.AC_CATG,
        // AC_INTCATA: data.AC_INTCATA,
        'AC_MONTHS': data.AC_MONTHS,
        'AC_SCHMAMT': data.AC_SCHMAMT,
        'AC_IS_RECOVERY': (data.AC_IS_RECOVERY == '1' ? true : false),
        'AC_REF_RECEIPTNO': data.AC_REF_RECEIPTNO,
        'AC_ASON_DATE': data.AC_ASON_DATE,
        'AC_MATUAMT': data.AC_MATUAMT,
        'IS_DISCOUNTED_INT_RATE': (data.IS_DISCOUNTED_INT_RATE == '1' ? true : false),
        //minor and introducer
        'AC_MINOR': (data.AC_MINOR == '1' ? true : false),
        'AC_MBDATE': data.AC_MBDATE,
        'AC_GRDNAME': data.AC_GRDNAME,
        'AC_GRDRELE': data.AC_GRDRELE,
        AC_INTROBRANCH: data.AC_INTROBRANCH,
        AC_INTROID: data.AC_INTROID,
        AC_INTRACNO: data.AC_INTRACNO,
        'AC_INTRNAME': data.AC_INTRNAME,
        'PG_COMM_TYPE': data.PG_COMM_TYPE,
        'SIGNATURE_AUTHORITY': data.SIGNATURE_AUTHORITY,
        'AC_INTRATE': data.AC_INTRATE
      })
    })
  }
  //Method for update data 
  updateData() {
    let opdate
    let asondate
    let maturitydate
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
    data['AC_ADDTYPE'] = this.addType
    data['NomineeData'] = this.multiNominee
    data['JointAccountData'] = this.multiJointAC
    data['PowerOfAttorneyData'] = this.multiAttorney
    data['id'] = this.updateID;
    data['AC_IS_RECOVERY'] = (data.AC_IS_RECOVERY == true ? '1' : '0')
    data['IS_DISCOUNTED_INT_RATE'] = (data.IS_DISCOUNTED_INT_RATE == true ? '1' : '0')
    data['AC_MINOR'] = (data.AC_MINOR == true ? '1' : '0')
    // (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = data.AC_OPDATE, data['AC_OPDATE'] = moment(opdate).format('DD/MM/YYYY')),
    // (data.AC_ASON_DATE == 'Invalid date' || data.AC_ASON_DATE == '' || data.AC_ASON_DATE == null) ? (asondate = '', data['AC_ASON_DATE'] = asondate) : (asondate = data.AC_ASON_DATE, data['AC_ASON_DATE'] = moment(asondate).format('DD/MM/YYYY')),

    // (data.AC_EXPDT == 'Invalid date' || data.AC_EXPDT == '' || data.AC_EXPDT == null) ? (maturitydate = '', data['AC_EXPDT'] = maturitydate) : (maturitydate = data.AC_EXPDT, data['AC_EXPDT'] = moment(maturitydate).format('DD/MM/YYYY'))


    if (this.updatecheckdata.AC_OPDATE != this.openingDate) {
      (this.openingDate == 'Invalid date' || this.openingDate == '' || this.openingDate == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = this.openingDate, data['AC_OPDATE'] = moment(opdate).format('DD/MM/YYYY'))
    } else {
      data['AC_OPDATE'] = this.openingDate
    }


    if (this.updatecheckdata.AC_ASON_DATE != data.AC_ASON_DATE) {
      (data.AC_ASON_DATE == 'Invalid date' || data.AC_ASON_DATE == '' || data.AC_ASON_DATE == null) ? (asondate = '', data['AC_ASON_DATE'] = asondate) : (asondate = data.AC_ASON_DATE, data['AC_ASON_DATE'] = moment(asondate).format('DD/MM/YYYY'))
    } else {
      data['AC_ASON_DATE'] = data.AC_ASON_DATE
    }

    if (this.updatecheckdata.AC_EXPDT != data.AC_EXPDT) {
      (data.AC_EXPDT == 'Invalid date' || data.AC_EXPDT == '' || data.AC_EXPDT == null) ? (maturitydate = '', data['AC_EXPDT'] = maturitydate) : (maturitydate = data.AC_EXPDT, data['AC_EXPDT'] = moment(maturitydate).format('DD/MM/YYYY'))
    } else {
      data['AC_EXPDT'] = data.AC_EXPDT
    }


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
      this.customerDoc = []
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
    this.tempAddress = true
    this.selectedValue = null
    this.id = null
    this.ngCategory = null
    this.ngOperation = null
    this.ngIntCategory = null
    this.ngCity = null
    this.code = null
    this.acno = null
    this.ngIntroducer = null
    this.ngNcity = null
    this.jointID = null
    this.getSystemParaDate()
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#termmastertable tfoot tr').appendTo('#termmastertable thead');
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
    this.multiAttorney = []
    this.customerDoc = []
    this.tempAddress = true
    this.resetForm();
    this.getSystemParaDate()
  }
  nominee($event) {
    if ($event.target.checked) {
      this.nomineeTrue = true
    } else {
      this.nomineeTrue = false
    }
  }

  addNominee() {
    const formVal = this.angForm.value;
    var object = {
      AC_NNAME: formVal.AC_NNAME,
      AC_NRELA: formVal.AC_NRELA,
      AC_NDATE: moment(formVal.AC_NDATE).format('DD/MM/YYYY'),
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

  // editNominee(id) {
  //   this.nomineeIndex = id
  //   this.nomineeID = this.multiNominee[id].id;
  //   this.nomineedataedit = this.multiNominee[id]
  //   this.nomineeTrue = true
  //   this.nomineeShowButton = false;
  //   this.nomineeUpdateShow = true;
  //   this.ngnomineedate = this.multiNominee[id].AC_NDATE
  //   this.ngNcity = this.multiNominee[id].AC_CITYNAME,
  //     this.angForm.patchValue({
  //       AC_NNAME: this.multiNominee[id].AC_NNAME,
  //       AC_NRELA: this.multiNominee[id].AC_NRELA,
  //       AGE: this.multiNominee[id].AGE,
  //       AC_NHONO: this.multiNominee[id].AC_NHONO,
  //       AC_NWARD: this.multiNominee[id].AC_NWARD,
  //       AC_NADDR: this.multiNominee[id].AC_NADDR,
  //       AC_NGALLI: this.multiNominee[id].AC_NGALLI,
  //       AC_NAREA: this.multiNominee[id].AC_NAREA,
  //       AC_NPIN: this.multiNominee[id].AC_NPIN,
  //     })
  // }

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

  // editNominee(id) {
  //   let nodate
  //   this.nomineeIndex = id
  //   this.nomineeID = this.multiNominee[id].id;
  //   this.nomineeTrue = true
  //   this.nomineeShowButton = false;
  //   this.nomineeUpdateShow = true;
  //   this.angForm.patchValue({
  //     AC_NNAME: this.multiNominee[id].AC_NNAME,
  //     AC_NRELA: this.multiNominee[id].AC_NRELA,
  //     // AC_NDATE: this.multiNominee[id].AC_NDATE,
  //     AC_NDATE: (this.multiNominee[id].AC_NDATE == 'Invalid date' || this.multiNominee[id].AC_NDATE == '' || this.multiNominee[id].AC_NDATE == null) ? nodate = '' : nodate = this.multiNominee[id].AC_NDATE,
  //     AGE: this.multiNominee[id].AGE,
  //     AC_NHONO: this.multiNominee[id].AC_NHONO,
  //     AC_NWARD: this.multiNominee[id].AC_NWARD,
  //     AC_NADDR: this.multiNominee[id].AC_NADDR,
  //     AC_NGALLI: this.multiNominee[id].AC_NGALLI,
  //     AC_NAREA: this.multiNominee[id].AC_NAREA,
  //     AC_NCTCODE: this.multiNominee[id].AC_NCTCODE,
  //     AC_NPIN: this.multiNominee[id].AC_NPIN,
  //   })
  // }

  // updateNominee() {
  //   let index = this.nomineeIndex;
  //   this.nomineeShowButton = true;
  //   this.nomineeUpdateShow = false;
  //   const formVal = this.angForm.value;
  //   let nodate
  //   var object = {
  //     AC_NNAME: formVal.AC_NNAME,
  //     AC_NRELA: formVal.AC_NRELA,
  //     AC_NDATE: (formVal.AC_NDATE == '' || formVal.AC_NDATE == 'Invalid date' || formVal.AC_NDATE == null) ? nodate = '' : nodate = moment(formVal.AC_NDATE).format('DD/MM/YYYY'),
  //     AGE: formVal.AGE,
  //     AC_NHONO: formVal.AC_NHONO,
  //     AC_NWARD: formVal.AC_NWARD,
  //     AC_NADDR: formVal.AC_NADDR,
  //     AC_NGALLI: formVal.AC_NGALLI,
  //     AC_NAREA: formVal.AC_NAREA,
  //     AC_NCTCODE: formVal.AC_NCTCODE,
  //     AC_NPIN: formVal.AC_NPIN,
  //     id: this.nomineeID
  //   }

  //   if (formVal.AC_NNAME == "" || formVal.AC_NNAME == null) {
  //     Swal.fire("Please Insert Mandatory Record For Nominee");
  //   }
  //   else if (formVal.AC_NNAME != "") {
  //     if (formVal.AC_NRELA == "" || formVal.AC_NRELA == null) {
  //       Swal.fire("Please Insert Mandatory Record For Nominee");
  //     } else if (formVal.AC_NRELA != "") {
  //       if (formVal.AC_NDATE == "" || formVal.AC_NDATE == null) {
  //         Swal.fire("Please Insert Mandatory Record For Nominee");
  //       }
  //       else {
  //         if (this.multiNominee.find(ob => ob['AC_NNAME'].toUpperCase() === formVal.AC_NNAME.toUpperCase())) {
  //           Swal.fire("This Nominee is Already Exists", "error");
  //         } else {
  //           this.multiNominee[index] = object;
  //         }
  //       }
  //     }
  //     else {
  //       this.multiNominee[index] = object;
  //     }
  //   }
  //   else {
  //     this.multiNominee[index] = object;
  //   }
  //   this.resetNominee()
  // }

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




  //Joint ac
  jointAccount($event) {
    if ($event.target.checked) {
      this.JointAccountsTrue = true
    } else {
      this.JointAccountsTrue = false
    }
  }
  getJointCustomer(id) {
    this.customerIdService.getFormData(id.value).subscribe(data => {
      this.angForm.patchValue({
        JOINT_ACNAME: data.AC_NAME,
        JOINT_AC_CUSTID: id.value
      })
    })
    this.jointID = id.value
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
      JOINT_AC_CUSTID: this.jointID,
      JOINT_ACNAME: formVal.JOINT_ACNAME,
      OPERATOR: value,
    }
    if (formVal.AC_CUSTID != "") {
      if (object.JOINT_AC_CUSTID != undefined) {
        if (this.id != this.jointID) {
          if (this.multiJointAC.length == 0) {
            this.multiJointAC.push(object);
            this.angForm.controls['JOINT_AC_CUSTID'].reset()
            this.jointID = null
            this.jointID = ''
            this.resetJointAC()
          }
          else {
            if (this.multiJointAC.find(ob => ob['JOINT_AC_CUSTID'] == this.jointID)) {

              Swal.fire('', 'This Customer is Already Joint Account Holder', 'warning');
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
        Swal.fire('', "Please Select Guarantor Customer Id", 'warning');
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
      if (this.id != this.jointID) {
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

  delJointAc(id) {
    this.multiJointAC.splice(id, 1)
  }

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
  ngappointeddate: any
  //power of attorney
  // addAttorney() {
  //   let appdate
  //   let exdate
  //   const formVal = this.angForm.value;
  //   var object = {
  //     ATTERONEY_NAME: formVal.ATTERONEY_NAME,
  //     DATE_APPOINTED: (formVal.DATE_APPOINTED == '' || formVal.DATE_APPOINTED == 'Invalid date') ? appdate = '' : appdate = moment(formVal.DATE_APPOINTED).format('DD/MM/YYYY'),
  //     DATE_EXPIRY: (formVal.DATE_EXPIRY == '' || formVal.DATE_EXPIRY == 'Invalid date') ? exdate = '' : exdate = moment(formVal.DATE_EXPIRY).format('DD/MM/YYYY')
  //   }
  //   if (formVal.ATTERONEY_NAME == "" || formVal.ATTERONEY_NAME == null) {
  //     Swal.fire("Please Insert Mandatory Record For Power Of Attorney");
  //   } else if (formVal.ATTERONEY_NAME != "") {
  //     if (formVal.DATE_APPOINTED == "" || formVal.DATE_APPOINTED == null) {
  //       Swal.fire("Please Insert Mandatory Record For Power Of Attorney");
  //     } else if (formVal.DATE_APPOINTED != "") {
  //       if (formVal.DATE_EXPIRY == "" || formVal.DATE_EXPIRY == null) {
  //         Swal.fire("Please Insert Mandatory Record For Power Of Attorney");
  //       }
  //       else {
  //         if (this.multiAttorney.find(ob => ob['ATTERONEY_NAME'].toUpperCase() === formVal.ATTERONEY_NAME.toUpperCase())) {
  //           Swal.fire("This Attorney is Already Exists", "error");
  //         } else {
  //           this.multiAttorney.push(object);
  //         }
  //       }
  //     }
  //     else {
  //       this.multiAttorney.push(object);
  //     }
  //   }
  //   else {
  //     this.multiAttorney.push(object);
  //   }
  //   this.resetAttorney()
  // }


  //power of attorney
  addAttorney() {
    const formVal = this.angForm.value;
    let temdate
    let apdate
    if (this.tempopendate != this.ngappointeddate) {
      temdate = (formVal.DATE_APPOINTED == '' || formVal.DATE_APPOINTED == 'Invalid date') ? apdate = '' : apdate = moment(formVal.DATE_APPOINTED).format('DD/MM/YYYY')
    } else {
      temdate = this.ngappointeddate
    }
    var object = {
      ATTERONEY_NAME: formVal.ATTERONEY_NAME,
      DATE_APPOINTED: temdate,
      DATE_EXPIRY: moment(formVal.DATE_EXPIRY).format('DD/MM/YYYY')
    }
    if (formVal.ATTERONEY_NAME == "" || formVal.ATTERONEY_NAME == null) {
      Swal.fire('', 'Please Insert Mandatory Record For Power Of Attorney!', 'warning');
    } else if (formVal.ATTERONEY_NAME != "") {
      if (formVal.DATE_APPOINTED == "" || formVal.DATE_APPOINTED == null) {
        Swal.fire('', 'Please Insert Mandatory Record For Power Of Attorney!', 'warning');
      } else if (formVal.DATE_APPOINTED != "") {
        if (formVal.DATE_EXPIRY == "" || formVal.DATE_EXPIRY == null) {
          Swal.fire('', 'Please Insert Mandatory Record For Power Of Attorney!', 'warning');
        }
        else {
          if (this.multiAttorney.find(ob => ob['ATTERONEY_NAME'].toUpperCase() === formVal.ATTERONEY_NAME.toUpperCase())) {
            Swal.fire('', 'This Attorney is Already Exists!', 'error');
          } else {
            this.multiAttorney.push(object);
            this.resetAttorney()
          }
        }
      }
      else {
        this.multiAttorney.push(object);
        this.resetAttorney()
      }
    }
    else {
      this.multiAttorney.push(object);
      this.resetAttorney()
    }

  }

  editAttorney(id) {
    this.attorneyIndex = id
    this.attorneyID = this.multiAttorney[id].id;
    this.tempupdateattorny = this.multiAttorney[id]
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
    let appdate
    let EXdate
    let date1
    let date2
    if (this.tempupdateattorny.DATE_APPOINTED != formVal.DATE_APPOINTED) {
      date1 = (formVal.DATE_APPOINTED == '' || formVal.DATE_APPOINTED == 'Invalid date' || formVal.DATE_APPOINTED == null) ? appdate = '' : appdate = moment(formVal.DATE_APPOINTED).format('DD/MM/YYYY')
    } else {
      date1 = formVal.DATE_APPOINTED
    }
    if (this.tempupdateattorny.DATE_EXPIRY != formVal.DATE_EXPIRY) {
      date2 = (formVal.DATE_EXPIRY == '' || formVal.DATE_EXPIRY == 'Invalid date' || formVal.DATE_EXPIRY == null) ? EXdate = '' : EXdate = moment(formVal.DATE_EXPIRY).format('DD/MM/YYYY')
    } else {
      date2 = formVal.DATE_EXPIRY
    }
    var object = {
      ATTERONEY_NAME: formVal.ATTERONEY_NAME,
      DATE_APPOINTED: date1,
      DATE_EXPIRY: date2,
      id: this.attorneyID
    }

    if (formVal.ATTERONEY_NAME == "" || formVal.ATTERONEY_NAME == null) {
      Swal.fire("Please Insert Mandatory Record For Power Of Attorney");
    } else if (formVal.ATTERONEY_NAME != "") {
      if (formVal.DATE_APPOINTED == "" || formVal.DATE_APPOINTED == null) {
        Swal.fire("Please Insert Mandatory Record For Power Of Attorney");
      } else if (formVal.DATE_APPOINTED != "") {
        if (formVal.DATE_EXPIRY == "" || formVal.DATE_EXPIRY == null) {
          Swal.fire("Please Insert Mandatory Record For Power Of Attorney");
        }
        else {
          this.multiAttorney[index] = object;
          this.resetAttorney()

        }
      }
      else {
        this.multiAttorney[index] = object;
        this.resetAttorney()
      }
    }
    else {
      this.multiAttorney[index] = object;
      this.resetAttorney()
    }

  }

  delAttorney(id) {
    this.multiAttorney.splice(id, 1)
  }

  resetAttorney() {
    this.angForm.controls['ATTERONEY_NAME'].reset();
    this.angForm.controls['DATE_APPOINTED'].reset();
    this.angForm.controls['DATE_EXPIRY'].reset();
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

  setMaturityDate() {
    this.schemedata(this.selectedValue)
    this.angForm.patchValue({
      AC_MATUAMT: this.angForm.controls['AC_SCHMAMT'].value
    })
  }
  // data scheme master
  schemedata(id) {
    this._termDepositScheme.getFormData(id).subscribe(data => {
      // this.recurringCompoundInterest()
      if (data.IS_CAL_MATURITY_AMT != '1') {
        this.setMaturityDate()
      }
      else {
        // call calculation function
        // INTEREST_RULE: string;
        // IS_RECURRING_TYPE: string;
        // IS_CALLDEPOSIT_TYPE: string;
        // REINVESTMENT: string;
        if ((data.INTEREST_RULE == "0" && data.IS_RECURRING_TYPE == '0' && data.IS_CALLDEPOSIT_TYPE == '0' && data.REINVESTMENT == '0') || data.INTEREST_RULE == "1") {
          if (data.S_INTCALTP == "D" && data.S_INTCALC_METHOD == "S") {
            this.simpleInterestCalculation()
          } else if (data.S_INTCALTP == "D" && data.S_INTCALC_METHOD == "C") {
            if (data.COMPOUND_INT_BASIS == "M" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == '1') {
              var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 1;
            } else if (data.COMPOUND_INT_BASIS == "Q" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == '1') {
              var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 3;
            } else if (data.COMPOUND_INT_BASIS == "H" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == '1') {
              var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 6;
            } else if (data.COMPOUND_INT_BASIS == "Y" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == '1') {
              var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 12;
            }

            var date1 = this.angForm.controls['AC_ASON_DATE'].value;
            var date2 = this.angForm.controls['AC_EXPDT'].value;

            // date1 = moment(date1).format('DD/MM/YYYY');

            var startDate = moment(date1, "DD/MM/YYYY");
            var endDate = moment(date2, "DD/MM/YYYY");

            var result = endDate.diff(startDate, 'days');
            var amount = this.angForm.controls['AC_SCHMAMT'].value
            var maturityAmount = this.angForm.controls['AC_MATUAMT'].value

            for (this.i = 1; this.i <= Quarters; this.i++) {
              let totalInterest: number
              var sample = parseFloat(amount);
              var totalInt = (parseFloat(amount) * Number(this.angForm.controls['AC_INTRATE'].value) * Math.trunc((result) / (Quarters)) / 36500).toFixed(10)
              totalInterest = Number(totalInt)
              amount = (parseFloat(amount) + (totalInterest)).toFixed(10)

              totalInterest = 0


            }
            maturityAmount = Math.round(parseFloat(amount) + (parseFloat(amount) * Number(this.angForm.controls['AC_INTRATE'].value) * ((result) - Math.trunc((result) / (Quarters)) * (Quarters))) / 36500)

            this.angForm.patchValue({
              AC_MATUAMT: maturityAmount
            })
          } else if (data.S_INTCALTP == "M" && data.S_INTCALC_METHOD == "S") {

            var date1 = this.angForm.controls['AC_ASON_DATE'].value;
            var date2 = this.angForm.controls['AC_EXPDT'].value;

            // date1 = moment(date1).format('DD/MM/YYYY');
            // date2 = moment(date2).format('DD/MM/YYYY');

            var b = moment(date1, "DD/MM/YYYY");
            var a = moment(date2, "DD/MM/YYYY");

            var months = a.diff(b, 'months');
            b.add(months, 'months');

            var days = a.diff(b, 'days');


            var tmpAmt1 = Math.round(((Number(this.angForm.controls['AC_SCHMAMT'].value) * Number(this.angForm.controls['AC_INTRATE'].value) * months) / (12 * 100)))
            var tmpAmt2 = Math.round(((Number(this.angForm.controls['AC_SCHMAMT'].value) * Number(this.angForm.controls['AC_INTRATE'].value) * days) / (365 * 100)))
            var Interest = (tmpAmt1 + tmpAmt2)
            var Maturity = Math.round(Number(this.angForm.controls['AC_SCHMAMT'].value) + Interest)
            this.angForm.patchValue({
              AC_MATUAMT: Maturity
            })
          } else if (data.S_INTCALTP == "M" && data.S_INTCALC_METHOD == "C") {
            this.angForm.patchValue({
              AC_MATUAMT: 0
            })
          } else if (data.S_INTCALTP == "B" && data.IS_START_WITH_MONTHS == '1' && data.S_INTCALC_METHOD == "S") {
            var date1 = this.angForm.controls['AC_ASON_DATE'].value;
            var date2 = this.angForm.controls['AC_EXPDT'].value;

            // date1 = moment(date1).format('DD/MM/YYYY');
            // date2 = moment(date2).format('DD/MM/YYYY');

            var b = moment(date1, "DD/MM/YYYY");
            var a = moment(date2, "DD/MM/YYYY");

            var months = a.diff(b, 'months');
            b.add(months, 'months');

            var days = a.diff(b, 'days');


            var tmpAmt1 = Math.round(((Number(this.angForm.controls['AC_SCHMAMT'].value) * Number(this.angForm.controls['AC_INTRATE'].value) * months) / (12 * 100)))
            var tmpAmt2 = Math.round(((Number(this.angForm.controls['AC_SCHMAMT'].value) * Number(this.angForm.controls['AC_INTRATE'].value) * days) / (365 * 100)))
            var Interest = (tmpAmt1 + tmpAmt2)
            var Maturity = Math.round(Number(this.angForm.controls['AC_SCHMAMT'].value) + Interest)
            this.angForm.patchValue({
              AC_MATUAMT: Maturity
            })
          } else if (data.S_INTCALTP == "B" && data.IS_START_WITH_MONTHS == '1' && data.S_INTCALC_METHOD == "C") {
            var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 3;
            var date1 = this.angForm.controls['AC_ASON_DATE'].value;
            var date2 = this.angForm.controls['AC_EXPDT'].value;

            // date1 = moment(date1).format('DD/MM/YYYY');

            var b = moment(date1, "DD/MM/YYYY");
            var a = moment(date2, "DD/MM/YYYY");

            var months = a.diff(b, 'months');
            b.add(months, 'months');

            var days = a.diff(b, 'days');

            var End = moment(date2, "DD/MM/YYYY").subtract(1, 'days');
            var EndDate = End.format("DD/MM/YYYY");

            var Start = moment(date1, "DD/MM/YYYY").subtract(1, 'days');
            var StartDate = Start.format("DD/MM/YYYY");

            var CurrentDate = this.angForm.controls['AC_ASON_DATE'].value
            var lngMonths = 0;
            var lngDays = 0;
            var VcumPeriod = 0;
            var IntAmount = 0
            var vmonth = moment(date1, "DD/MM/YYYY").add(1, 'days');
            var Mth = vmonth.format("DD/MM/YYYY");
            var vMth = new Date(Mth).getMonth();
            var PeriodEndDate = EndDate
            VcumPeriod = 12

            var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
            var year = oneDate.format('YYYY');
            PeriodEndDate = moment([year, "09", "30"]).format('YYYY/MM/DD')
            if (CurrentDate >= EndDate) {

            } else {
              this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
                if (data.S_INTCALC_METHOD == '1') {
                  if (data.COMPOUND_INT_BASIS == "Y") {
                    PeriodEndDate = EndDate
                    VcumPeriod = 12
                  } else if (data.COMPOUND_INT_BASIS == "H") {
                    if (vMth >= 4 && vMth <= 9) {
                      var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                      var year = oneDate.format('YYYY');
                      PeriodEndDate = moment([year, "09", "30"]).format('YYYY/MM/DD')
                    } else {
                      var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                      var year = oneDate.format('YYYY');
                      PeriodEndDate = moment([year, "03", "31"]).format('YYYY/MM/DD')
                      if (PeriodEndDate < CurrentDate) {
                        var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                        var year = oneDate.format('YYYY');
                        var PeriodEnd = moment([year, "03", "31"]).format('YYYY/MM/DD')
                        var Period = moment(PeriodEnd, 'YYYY/MM/DD').add(1, 'days');
                        PeriodEndDate = Period.toString()
                      }
                    }
                    VcumPeriod = 6

                  } else if (data.COMPOUND_INT_BASIS == "Q") {
                    if (vMth >= 1 && vMth <= 3) {
                      var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                      var year = oneDate.format('YYYY');
                      PeriodEndDate = moment([year, "03", "31"]).format('YYYY/MM/DD')
                      if (PeriodEndDate < CurrentDate) {
                        var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                        var year = oneDate.format('YYYY');
                        var PeriodEnd = moment([year, "03", "31"]).format('YYYY/MM/DD')
                        var Period = moment(PeriodEnd, 'YYYY/MM/DD').add(1, 'days');
                        PeriodEndDate = Period.toString()
                      }
                    } else if (vMth >= 4 && vMth <= 6) {
                      var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                      var year = oneDate.format('YYYY');
                      PeriodEndDate = moment([year, "06", "30"]).format('YYYY/MM/DD')
                    } else if (vMth >= 7 && vMth <= 9) {
                      var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                      var year = oneDate.format('YYYY');
                      PeriodEndDate = moment([year, "09", "30"]).format('YYYY/MM/DD')
                    } else {
                      var oneDate = moment(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                      var year = oneDate.format('YYYY');
                      PeriodEndDate = moment([year, "12", "30"]).format('YYYY/MM/DD')
                    }
                    VcumPeriod = 3
                  } else if (data.COMPOUND_INT_BASIS == "M") {
                    var current = new Date(CurrentDate)
                    let year = current.getFullYear();
                    var month = new Date(CurrentDate).getMonth();
                    var day = new Date(current).getDate();
                    var exe_day = month + 1
                    var nextDate = new Date(year, exe_day, day);
                    var lastDay = new Date(current.getFullYear(), nextDate.getMonth() + 1, 0);
                    var nextExeDate = this.datePipe.transform(lastDay, "YYYY/MM/DD")
                    VcumPeriod = 3
                  } else if (data.COMPOUND_INT_BASIS == "M") {
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
          } else if (data.S_INTCALTP == "P" && data.S_INTCALC_METHOD == "S") {
            this.simpleInterestCalculation()
          }
        } else if (data.IS_RECURRING_TYPE == "1") {
          if (data.S_INTCALTP == "D" && data.S_INTCALC_METHOD == "S") {
            this.recurringSimpleInterest()
          } else if (data.S_INTCALTP == "D" && data.S_INTCALC_METHOD == "C") {
            this.recurringSimpleInterest()
          } else if (data.S_INTCALTP == "M" && data.S_INTCALC_METHOD == "S") {
            this.recurringSimpleInterest()
          } else if (data.S_INTCALTP == "M" && data.S_INTCALC_METHOD == "C") {
            this.recurringCompoundInterest()
          } else if (data.S_INTCALTP == "B" && data.IS_START_WITH_MONTHS == '1' && data.S_INTCALC_METHOD == "S") {
            var date1 = this.angForm.controls['AC_ASON_DATE'].value;
            var date2 = this.angForm.controls['AC_EXPDT'].value;

            // date1 = moment(date1).format('DD/MM/YYYY');
            // date2 = moment(date2).format('DD/MM/YYYY');

            var b = moment(date1, "DD/MM/YYYY");
            var a = moment(date2, "DD/MM/YYYY");

            var months = a.diff(b, 'months');
            b.add(months, 'months');

            var days = a.diff(b, 'days');

            var tmpAmt1 = Math.round(((Number(this.angForm.controls['AC_SCHMAMT'].value) * Number(this.angForm.controls['AC_INTRATE'].value) * months) / (12 * 100)))
            var tmpAmt2 = Math.round(((Number(this.angForm.controls['AC_SCHMAMT'].value) * Number(this.angForm.controls['AC_INTRATE'].value) * days) / (365 * 100)))
            var Interest = (tmpAmt1 + tmpAmt2)
            var Maturity = Math.round(Number(this.angForm.controls['AC_SCHMAMT'].value) + Interest)
            this.angForm.patchValue({
              AC_MATUAMT: Maturity
            })
          } else if (data.S_INTCALTP == "B" && data.IS_START_WITH_MONTHS == '1' && data.S_INTCALC_METHOD == "C") {
            this.recurringCompoundInterest()
          } else if (data.S_INTCALTP == "P" && data.S_INTCALC_METHOD == "S") {
            this.recurringSimpleInterest()
          }
        }
      }
    })
  }

  switchNgBTab(id: string) {
    this.ctdTabset.select(id);
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
  //approve account
  Approve() {
    let user = JSON.parse(localStorage.getItem('user'));
    let obj = {
      id: this.updateID,
      user: user.id
    }
    this.TermDepositMasterService.approve(obj).subscribe(data => {
      Swal.fire(
        'Approved',
        'Term Deposit Account approved successfully',
        'success'
      );
      var button = document.getElementById('triggerhide');
      button.click();

      this.getUserData.emit('welcome to stackoverflow!');
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
    this.TermDepositMasterService.reject(obj).subscribe(data => {
      Swal.fire(
        'Rejected',
        'Term Deposit Account rejected successfully',
        'success'
      );

      var button = document.getElementById('triggerhide');
      button.click();
    }, err => {
      console.log('something is wrong');
    })
  }

}
