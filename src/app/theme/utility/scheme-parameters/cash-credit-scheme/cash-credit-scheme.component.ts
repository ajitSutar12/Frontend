import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Subject } from "rxjs";
import { IOption } from "ng-select";
import { Subscription } from "rxjs/Subscription";
// Creating and maintaining form fields with validation
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
// Service File For Handling CRUD Operation
import { CashcreditService } from "./cash-credit-scheme.service";
// Used to Call API
import { HttpClient } from "@angular/common/http";
//Dropdown service file
import { ACMasterDropdownService } from "../../../../shared/dropdownService/ac-master-dropdown.service";
import { OverdraftInterestPostService } from "../../../../shared/dropdownService/overdraft-interest-post.service";
import { first } from "rxjs/operators";
import { environment } from "../../../../../environments/environment";
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface Cashcredit {
  S_ACNOTYPE: string;
  S_APPL: string;
  S_NAME: string;
  S_SHNAME: string;
  S_GLACNO: string;
  S_INT_ACNO: string;
  S_RECBL_PYBL_INT_ACNO: string;
  S_PENAL_ACNO: string;
  S_RECBL_PENAL_ACNO: string;
  S_RECBL_ODUE_INT_ACNO: string;
  S_INT_APPLICABLE: string;
  POST_TO_INDIVIDUAL_AC: string;
  S_RECEIVABLE_INT_ALLOW: string;
  IS_SHOW_INT_AS_RECINT_IFDUEBAL: string;
  IS_INTUPTODATE: string;
  IS_NO_POST_INT_AFT_OD: string;
  MIN_INT_LIMIT: string;
  ROUNDOFF_FACTOR: string;
  S_PENAL_INT_APPLICABLE: string;
  IS_POST_PENAL_TO_AC: string;
  POST_PENALINT_IN_INTEREST: string;
  IS_CAL_EXTRAPENAL_FOR_CC: string;
  S_PENAL_INT_RATE: string;
  OVERDRAFT_INTEREST_APPLICABLE: string;
  OVERDRAFT_INTEREST_RATE: string;
  ODPENALTY_ON_EXPIRED_LEDGERBAL: string;
  INT_INSTRUCTION_ALLOW: string;
  STAND_INSTRUCTION_ALLOW: string;
  BALANCE_ADD_APPLICABLE: string;
  CHEQUEBOOK_MIN_BAL: string;
  IS_DEPO_LOAN: string;
  IS_GOLDLOAN: string;
}

@Component({
  selector: "app-cash-credit-scheme",
  templateUrl: "./cash-credit-scheme.component.html",
  styleUrls: ["./cash-credit-scheme.component.scss"],
})
export class CashCreditSchemeComponent implements OnInit {
  formSubmitted = false;
  //api
  url = environment.base_url;
  //least routing
  InterestApplicableTrue = true;
  PenalInterestApplicableTrue = false;
  OverDraftInteresttypeTrue = false;
  otherSettingsTrue = false;
  cashCredittypeTrue = false;

  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  cashcredit: Cashcredit[];
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
  currentJustify = "start";
  active = 1;
  activeKeep = 1;
  // Variables for search
  filterObject: { name: string; type: string }[];
  filter: any;
  filterForm: FormGroup;
  // Variables for hide/show add and update button
  showButton: boolean = true;
  updateShow: boolean = false;
  //variable to get Id to update
  updateID: number = 0;

  //Dropdown option variable
  acMaster: any;
  ngglacno: any = null
  ngintglac: any = null
  ngreceivableintac: any = null
  ngpenalintac: any = null
  ngrecblepenalintac: any = null
  ngrecbleoverdueint: any = null
  ngoverdraftint: any = null


  OverDraft: Array<IOption> = this.overdraftInterestPostService.getCharacters();
  selectedOption = "3";
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = "3";
  timeLeft = 5;

  private dataSub: Subscription = null;
  filterData = {};
  newbtnShow: boolean;
  OVERDRAFT_INTEREST_APPLICABLE

  constructor(
    private http: HttpClient,
    private cashcreditservice: CashcreditService,
    private overdraftInterestPostService: OverdraftInterestPostService,
    private acMasterDropdownService: ACMasterDropdownService,
    private fb: FormBuilder,
    private config: NgSelectConfig,) { }

  ngOnInit(): void {
    this.createForm();
    // Fetching Server side data
    this.dtExportButtonOptions = {
      pagingType: "full_numbers",
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
        dataTableParameters.columns.forEach((element) => {
          if (element.search.value != "") {
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
        this.http
          .post<DataTableResponse>(
            this.url + "/cash-credit-scheme",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.cashcredit = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });
      },
      columns: [
        {
          title: "Action",
          // render: function (data: any, type: any, full: any) {
          //   return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          // },
        },
        {
          title: "Type",
          data: "S_ACNOTYPE",
        },
        {
          title: "Scheme Code",
          data: "S_APPL",
        },
        {
          title: "Description",
          data: "S_NAME",
        },
        {
          title: "Short Name",
          data: "S_SHNAME",
        },
        {
          title: "GL Account Number",
          data: "S_GLACNO",
        },
        {
          title: "Interest GL Account",
          data: "S_INT_ACNO",
        },
        {
          title: "Receivable Interest Account",
          data: "S_RECBL_PYBL_INT_ACNO",
        },
        {
          title: "Penal Interest Account",
          data: "S_PENAL_ACNO",
        },
        {
          title: "Recble Penal Interest Account",
          data: "S_RECBL_PENAL_ACNO",
        },
        {
          title: "Recble Overdue Interest",
          data: "S_RECBL_ODUE_INT_ACNO",
        },
        // {
        //   title: "Is Interest Applicable ?",
        //   data: "S_INT_APPLICABLE",
        // },
        // {
        //   title: "Is Post Interest to A/c ?",
        //   data: "POST_TO_INDIVIDUAL_AC",
        // },
        // {
        //   title: "Is Balance Entry Allow ?",
        //   data: "S_RECEIVABLE_INT_ALLOW",
        // },
        // {
        //   title: "Is Receivable Int. Allowed ?",
        //   data: "IS_SHOW_INT_AS_RECINT_IFDUEBAL",
        // },
        // {
        //   title: "Post as Receivable Interest, if Account goes in Overdue ?",
        //   data: "IS_SHOW_INT_AS_RECINT_IFDUEBAL",
        // },
        // {
        //   title: "Is Dont Post Interest After Expiry Date ?",
        //   data: "IS_INTUPTODATE",
        // },
        // {
        //   title: "Is Dont Post Interest After OD",
        //   data: "IS_NO_POST_INT_AFT_OD",
        // },
        // {
        //   title: "Minimum Interest Amount",
        //   data: "MIN_INT_LIMIT",
        // },
        // {
        //   title: "Interest Round Off Factor in Paise",
        //   data: "ROUNDOFF_FACTOR",
        // },
        // {
        //   title: "Penal Interest Applicable ?",
        //   data: "S_PENAL_INT_APPLICABLE",
        // },
        // {
        //   title: "Post Penal Interest to Account ?",
        //   data: "IS_POST_PENAL_TO_AC",
        // },
        // {
        //   title: "Add Penal Interest in Interest Amount ?",
        //   data: "POST_PENALINT_IN_INTEREST",
        // },
        // {
        //   title: "Calculate Extra Penal for CC Overdraf",
        //   data: "IS_CAL_EXTRAPENAL_FOR_CC",
        // },
        // {
        //   title: "Penal Interest Rate %",
        //   data: "S_PENAL_INT_RATE",
        // },
        // {
        //   title: "OverDraft Interest Post / Add in",
        //   data: "OVERDRAFT_INTEREST_APPLICABLE",
        // },
        // {
        //   title: "Overdraf Interest Rate %",
        //   data: "OVERDRAFT_INTEREST_RATE",
        // },
        // {
        //   title: "Is OD Interest Calculate Only after Account Expiry Date ?",
        //   data: "ODPENALTY_ON_EXPIRED_LEDGERBAL",
        // },
        // {
        //   title: "Is Interest Instruction Applicable ?",
        //   data: "INT_INSTRUCTION_ALLOW",
        // },
        // {
        //   title: "Is Standing Instruction Applicable ?",
        //   data: "STAND_INSTRUCTION_ALLOW",
        // },
        // {
        //   title: "Is Balance Entry Allowed ?",
        //   data: "BALANCE_ADD_APPLICABLE",
        // },
        // {
        //   title: "Cheque Book Minimum Balance",
        //   data: "CHEQUEBOOK_MIN_BAL",
        // },
        // {
        //   title: "Is Deposit against CC",
        //   data: "IS_DEPO_LOAN",
        // },
        // {
        //   title: "Is Gold against CC",
        //   data: "IS_GOLDLOAN",
        // },
        // {
        //   title: 'Other type of CC',
        //   data: 'IS_DEPO_LOAN=0, IS_GOLDLOAN= 0',
        // }
      ],
      dom: "Blrtip",
    };
    this.runTimer();
    this.dataSub = this.overdraftInterestPostService
      .loadCharacters()
      .subscribe((options) => {
        this.characters = options;
      });
    this.acMasterDropdownService
      .getACMasterList()
      .pipe(first())
      .subscribe((data) => {
        this.acMaster = data;
      });
  }

  // enable-disable checkbox event
  Interest_applicable($event) {
    if ($event.target.checked) {
      document
        .getElementById("POST_TO_INDIVIDUAL_AC")
        .removeAttribute("disabled");
      document
        .getElementById("S_RECEIVABLE_INT_ALLOW")
        .removeAttribute("disabled");
      document
        .getElementById("IS_SHOW_INT_AS_RECINT_IFDUEBAL")
        .removeAttribute("disabled");
      document.getElementById("IS_INTUPTODATE").removeAttribute("disabled");
      document
        .getElementById("IS_NO_POST_INT_AFT_OD")
        .removeAttribute("disabled");
      document.getElementById("MIN_INT_LIMIT").removeAttribute("disabled");
      document.getElementById("ROUNDOFF_FACTOR").removeAttribute("disabled");
    } else {
      document
        .getElementById("POST_TO_INDIVIDUAL_AC")
        .setAttribute("disabled", "true");
      this.angForm.controls.POST_TO_INDIVIDUAL_AC.reset();
      document
        .getElementById("S_RECEIVABLE_INT_ALLOW")
        .setAttribute("disabled", "true");
      this.angForm.controls.S_RECEIVABLE_INT_ALLOW.reset();
      document
        .getElementById("IS_SHOW_INT_AS_RECINT_IFDUEBAL")
        .setAttribute("disabled", "true");
      this.angForm.controls.IS_SHOW_INT_AS_RECINT_IFDUEBAL.reset();
      document
        .getElementById("IS_INTUPTODATE")
        .setAttribute("disabled", "true");
      this.angForm.controls.IS_INTUPTODATE.reset();
      document
        .getElementById("IS_NO_POST_INT_AFT_OD")
        .setAttribute("disabled", "true");
      this.angForm.controls.IS_NO_POST_INT_AFT_OD.reset();
      document.getElementById("MIN_INT_LIMIT").setAttribute("disabled", "true");
      this.angForm.controls.MIN_INT_LIMIT.reset();
      document
        .getElementById("ROUNDOFF_FACTOR")
        .setAttribute("disabled", "true");
      this.angForm.controls.ROUNDOFF_FACTOR.reset();
    }
  }

  PenalInterest_applicable($event) {
    if ($event.target.checked) {
      document
        .getElementById("IS_POST_PENAL_TO_AC")
        .removeAttribute("disabled");
      document
        .getElementById("POST_PENALINT_IN_INTEREST")
        .removeAttribute("disabled");
      document
        .getElementById("IS_CAL_EXTRAPENAL_FOR_CC")
        .removeAttribute("disabled");
      document.getElementById("S_PENAL_INT_RATE").removeAttribute("disabled");
    } else {
      document
        .getElementById("IS_POST_PENAL_TO_AC")
        .setAttribute("disabled", "true");
      this.angForm.controls.IS_POST_PENAL_TO_AC.reset();
      document
        .getElementById("POST_PENALINT_IN_INTEREST")
        .setAttribute("disabled", "true");
      this.angForm.controls.POST_PENALINT_IN_INTEREST.reset();
      document
        .getElementById("IS_CAL_EXTRAPENAL_FOR_CC")
        .setAttribute("disabled", "true");
      this.angForm.controls.IS_CAL_EXTRAPENAL_FOR_CC.reset();
      document
        .getElementById("S_PENAL_INT_RATE")
        .setAttribute("disabled", "true");
      this.angForm.controls.S_PENAL_INT_RATE.reset();
    }
  }

  //Function to enable/Disable fields according selection of overdraft Interest applicable list
  isOverdraftInterest() {
    if (this.OVERDRAFT_INTEREST_APPLICABLE == 'NotApplicable') {
      document.getElementById('OVERDRAFT_INTEREST_RATE').setAttribute("disabled", "false");
      document.getElementById('ODPENALTY_ON_EXPIRED_LEDGERBAL').setAttribute("disabled", "false");
    }
    else {
      document.getElementById('OVERDRAFT_INTEREST_RATE').removeAttribute("enable");
      document.getElementById('ODPENALTY_ON_EXPIRED_LEDGERBAL').removeAttribute("enable");
    }
  }

  presentdata() {

  }


  createForm() {
    this.angForm = this.fb.group({
      S_ACNOTYPE: ["CC"],
      S_APPL: ["", [Validators.required, Validators.pattern, Validators.min(601), Validators.max(699)]],
      S_NAME: ["", [Validators.required, Validators.pattern]],
      S_SHNAME: ["", [Validators.required, Validators.pattern]],
      S_GLACNO: ["", [Validators.required, Validators.pattern]],
      S_INT_ACNO: ["", [Validators.required, Validators.pattern]],
      S_RECBL_PYBL_INT_ACNO: [""],
      S_PENAL_ACNO: [""],
      S_RECBL_PENAL_ACNO: [""],
      S_RECBL_ODUE_INT_ACNO: [""],
      S_INT_APPLICABLE: [""],
      POST_TO_INDIVIDUAL_AC: [""],
      S_RECEIVABLE_INT_ALLOW: [""],
      IS_SHOW_INT_AS_RECINT_IFDUEBAL: [""],
      IS_INTUPTODATE: [""],
      IS_NO_POST_INT_AFT_OD: [""],
      MIN_INT_LIMIT: ["", [Validators.pattern]],
      ROUNDOFF_FACTOR: [""],
      S_PENAL_INT_APPLICABLE: [""],
      IS_POST_PENAL_TO_AC: [""],
      POST_PENALINT_IN_INTEREST: [""],
      IS_CAL_EXTRAPENAL_FOR_CC: [""],
      S_PENAL_INT_RATE: [""],
      OVERDRAFT_INTEREST_APPLICABLE: [""],
      OVERDRAFT_INTEREST_RATE: [""],
      ODPENALTY_ON_EXPIRED_LEDGERBAL: [""],
      INT_INSTRUCTION_ALLOW: [""],
      STAND_INSTRUCTION_ALLOW: [""],
      BALANCE_ADD_APPLICABLE: [""],
      CHEQUEBOOK_MIN_BAL: ["", [Validators.pattern]],
      IS_DEPO_LOAN: [""], //radiobutton
      IS_GOLDLOAN: [""], //radiobutton
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    let Gold
    let depo
    if (formVal.IS_DEPO_LOAN == '1') {
      Gold = 0
      depo = 1

    } else if (formVal.IS_DEPO_LOAN == '0') {
      Gold = 1
      depo = 0

    } else if (formVal.IS_DEPO_LOAN == '2') {
      Gold = 0
      depo = 0
    }

    const dataToSend = {
      S_ACNOTYPE: formVal.S_ACNOTYPE,
      S_APPL: formVal.S_APPL,
      S_NAME: formVal.S_NAME,
      S_SHNAME: formVal.S_SHNAME,
      S_GLACNO: formVal.S_GLACNO,
      S_INT_ACNO: formVal.S_INT_ACNO,
      S_RECBL_PYBL_INT_ACNO: formVal.S_RECBL_PYBL_INT_ACNO,
      S_PENAL_ACNO: formVal.S_PENAL_ACNO,
      S_RECBL_PENAL_ACNO: formVal.S_RECBL_PENAL_ACNO,
      S_RECBL_ODUE_INT_ACNO: formVal.S_RECBL_ODUE_INT_ACNO,
      S_INT_APPLICABLE: (formVal.S_INT_APPLICABLE == true ? '1' : '0'),
      POST_TO_INDIVIDUAL_AC: (formVal.POST_TO_INDIVIDUAL_AC == true ? '1' : '0'),
      S_RECEIVABLE_INT_ALLOW: (formVal.S_RECEIVABLE_INT_ALLOW == true ? '1' : '0'),
      IS_SHOW_INT_AS_RECINT_IFDUEBAL: (formVal.IS_SHOW_INT_AS_RECINT_IFDUEBAL == true ? '1' : '0'),
      IS_INTUPTODATE: (formVal.IS_INTUPTODATE == true ? '1' : '0'),
      IS_NO_POST_INT_AFT_OD: (formVal.IS_NO_POST_INT_AFT_OD == true ? '1' : '0'),
      S_PENAL_INT_APPLICABLE: (formVal.S_PENAL_INT_APPLICABLE == true ? '1' : '0'),
      IS_POST_PENAL_TO_AC: (formVal.IS_POST_PENAL_TO_AC == true ? '1' : '0'),
      POST_PENALINT_IN_INTEREST: (formVal.POST_PENALINT_IN_INTEREST == true ? '1' : '0'),
      IS_CAL_EXTRAPENAL_FOR_CC: (formVal.IS_CAL_EXTRAPENAL_FOR_CC == true ? '1' : '0'),
      ODPENALTY_ON_EXPIRED_LEDGERBAL: (formVal.ODPENALTY_ON_EXPIRED_LEDGERBAL == true ? '1' : '0'),
      // 'BALANCE_ADD_APPLICABLE': formVal.BALANCE_ADD_APPLICABLE,
      INT_INSTRUCTION_ALLOW: (formVal.INT_INSTRUCTION_ALLOW == true ? '1' : '0'),
      STAND_INSTRUCTION_ALLOW: (formVal.STAND_INSTRUCTION_ALLOW == true ? '1' : '0'),
      BALANCE_ADD_APPLICABLE: (formVal.BALANCE_ADD_APPLICABLE == true ? '1' : '0'),
      MIN_INT_LIMIT: formVal.MIN_INT_LIMIT,
      ROUNDOFF_FACTOR: formVal.ROUNDOFF_FACTOR,
      S_PENAL_INT_RATE: formVal.S_PENAL_INT_RATE,
      OVERDRAFT_INTEREST_APPLICABLE: formVal.OVERDRAFT_INTEREST_APPLICABLE,
      OVERDRAFT_INTEREST_RATE: formVal.OVERDRAFT_INTEREST_RATE,
      CHEQUEBOOK_MIN_BAL: formVal.CHEQUEBOOK_MIN_BAL,
      IS_DEPO_LOAN: depo,
      IS_GOLDLOAN: Gold,
    };
    this.cashcreditservice.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        this.formSubmitted = false;
        // to reload after insertion of data
        // to reload after insertion of data
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload();
        });
      },
      (error) => {
        console.log(error);
      }
    );
    //To clear form
    this.angForm.reset();
  }

  IS_DEPO_LOAN: boolean = false
  IS_GOLDLOAN: boolean = false
  IS_BOTH: boolean = false
  //Method for append data into fields
  editClickHandler(id) {
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.angForm.controls['S_APPL'].disable()
    this.cashcreditservice.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.ngglacno = Number(data.S_GLACNO)
      this.ngintglac = Number(data.S_INT_ACNO)
      this.ngreceivableintac = Number(data.S_RECBL_PYBL_INT_ACNO)
      this.ngpenalintac = Number(data.S_PENAL_ACNO)
      this.ngrecblepenalintac = Number(data.S_RECBL_PENAL_ACNO)
      this.ngrecbleoverdueint = Number(data.S_RECBL_ODUE_INT_ACNO)
      this.ngoverdraftint = Number(data.OVERDRAFT_INTEREST_APPLICABLE)
      this.angForm.patchValue({
        S_ACNOTYPE: data.S_ACNOTYPE,
        S_APPL: data.S_APPL,
        S_NAME: data.S_NAME,
        S_SHNAME: data.S_SHNAME,
        // S_GLACNO: data.S_GLACNO,
        // S_INT_ACNO: data.S_INT_ACNO,
        // S_RECBL_PYBL_INT_ACNO: data.S_RECBL_PYBL_INT_ACNO,
        // S_PENAL_ACNO: data.S_PENAL_ACNO,
        // S_RECBL_PENAL_ACNO: data.S_RECBL_PENAL_ACNO,
        // S_RECBL_ODUE_INT_ACNO: data.S_RECBL_ODUE_INT_ACNO,
        S_INT_APPLICABLE: (data.S_INT_APPLICABLE == '1' ? true : false),
        POST_TO_INDIVIDUAL_AC: (data.POST_TO_INDIVIDUAL_AC == '1' ? true : false),
        S_RECEIVABLE_INT_ALLOW: (data.S_RECEIVABLE_INT_ALLOW == '1' ? true : false),
        IS_SHOW_INT_AS_RECINT_IFDUEBAL: (data.IS_SHOW_INT_AS_RECINT_IFDUEBAL == '1' ? true : false),
        IS_INTUPTODATE: (data.IS_INTUPTODATE == '1' ? true : false),
        IS_NO_POST_INT_AFT_OD: (data.IS_NO_POST_INT_AFT_OD == '1' ? true : false),
        MIN_INT_LIMIT: data.MIN_INT_LIMIT,
        ROUNDOFF_FACTOR: data.ROUNDOFF_FACTOR,
        S_PENAL_INT_APPLICABLE: (data.S_PENAL_INT_APPLICABLE == '1' ? true : false),
        IS_POST_PENAL_TO_AC: (data.IS_POST_PENAL_TO_AC == '1' ? true : false),
        POST_PENALINT_IN_INTEREST: (data.POST_PENALINT_IN_INTEREST == '1' ? true : false),
        IS_CAL_EXTRAPENAL_FOR_CC: (data.IS_CAL_EXTRAPENAL_FOR_CCT == '1' ? true : false),
        S_PENAL_INT_RATE: data.S_PENAL_INT_RATE,
        OVERDRAFT_INTEREST_APPLICABLE: data.OVERDRAFT_INTEREST_APPLICABLE,
        OVERDRAFT_INTEREST_RATE: data.OVERDRAFT_INTEREST_RATE,
        ODPENALTY_ON_EXPIRED_LEDGERBAL: (data.ODPENALTY_ON_EXPIRED_LEDGERBAL == '1' ? true : false),
        BALANCE_ADD_APPLICABLE: (data.BALANCE_ADD_APPLICABLE == '1' ? true : false),
        INT_INSTRUCTION_ALLOW: (data.INT_INSTRUCTION_ALLOW == '1' ? true : false),
        STAND_INSTRUCTION_ALLOW: (data.STAND_INSTRUCTION_ALLOW == '1' ? true : false),
        CHEQUEBOOK_MIN_BAL: data.CHEQUEBOOK_MIN_BAL,
        IS_DEPO_LOAN: data.IS_DEPO_LOAN,
        IS_GOLDLOAN: data.IS_GOLDLOAN,


      });

      if (data.IS_DEPO_LOAN == '1' && data.IS_GOLDLOAN == '0') {
        this.IS_DEPO_LOAN = true
        this.IS_GOLDLOAN = false
        this.IS_BOTH = false
      } else if (data.IS_DEPO_LOAN == '0' && data.IS_GOLDLOAN == '1') {
        this.IS_DEPO_LOAN = false
        this.IS_GOLDLOAN = true
        this.IS_BOTH = false
      } else if (data.IS_DEPO_LOAN == '0' && data.IS_GOLDLOAN == '0') {
        this.IS_DEPO_LOAN = false
        this.IS_GOLDLOAN = false
        this.IS_BOTH = true
      }

      if (data.S_INT_APPLICABLE == '1') {
        document
          .getElementById("POST_TO_INDIVIDUAL_AC")
          .removeAttribute("disabled");
        document
          .getElementById("S_RECEIVABLE_INT_ALLOW")
          .removeAttribute("disabled");
        document
          .getElementById("IS_SHOW_INT_AS_RECINT_IFDUEBAL")
          .removeAttribute("disabled");
        document.getElementById("IS_INTUPTODATE").removeAttribute("disabled");
        document
          .getElementById("IS_NO_POST_INT_AFT_OD")
          .removeAttribute("disabled");
        document.getElementById("MIN_INT_LIMIT").removeAttribute("disabled");
        document.getElementById("ROUNDOFF_FACTOR").removeAttribute("disabled");
      } else {
        document
          .getElementById("POST_TO_INDIVIDUAL_AC")
          .setAttribute("disabled", "true");
        this.angForm.controls.POST_TO_INDIVIDUAL_AC.reset();
        document
          .getElementById("S_RECEIVABLE_INT_ALLOW")
          .setAttribute("disabled", "true");
        this.angForm.controls.S_RECEIVABLE_INT_ALLOW.reset();
        document
          .getElementById("IS_SHOW_INT_AS_RECINT_IFDUEBAL")
          .setAttribute("disabled", "true");
        this.angForm.controls.IS_SHOW_INT_AS_RECINT_IFDUEBAL.reset();
        document
          .getElementById("IS_INTUPTODATE")
          .setAttribute("disabled", "true");
        this.angForm.controls.IS_INTUPTODATE.reset();
        document
          .getElementById("IS_NO_POST_INT_AFT_OD")
          .setAttribute("disabled", "true");
        this.angForm.controls.IS_NO_POST_INT_AFT_OD.reset();
        document.getElementById("MIN_INT_LIMIT").setAttribute("disabled", "true");
        this.angForm.controls.MIN_INT_LIMIT.reset();
        document
          .getElementById("ROUNDOFF_FACTOR")
          .setAttribute("disabled", "true");
        this.angForm.controls.ROUNDOFF_FACTOR.reset();
      }

      if (data.S_PENAL_INT_APPLICABLE == '1') {
        document
          .getElementById("IS_POST_PENAL_TO_AC")
          .removeAttribute("disabled");
        document
          .getElementById("POST_PENALINT_IN_INTEREST")
          .removeAttribute("disabled");
        document
          .getElementById("IS_CAL_EXTRAPENAL_FOR_CC")
          .removeAttribute("disabled");
        document.getElementById("S_PENAL_INT_RATE").removeAttribute("disabled");
      } else {
        document
          .getElementById("IS_POST_PENAL_TO_AC")
          .setAttribute("disabled", "true");
        this.angForm.controls.IS_POST_PENAL_TO_AC.reset();
        document
          .getElementById("POST_PENALINT_IN_INTEREST")
          .setAttribute("disabled", "true");
        this.angForm.controls.POST_PENALINT_IN_INTEREST.reset();
        document
          .getElementById("IS_CAL_EXTRAPENAL_FOR_CC")
          .setAttribute("disabled", "true");
        this.angForm.controls.IS_CAL_EXTRAPENAL_FOR_CC.reset();
        document
          .getElementById("S_PENAL_INT_RATE")
          .setAttribute("disabled", "true");
        this.angForm.controls.S_PENAL_INT_RATE.reset();
      }
    });
  }
  //Method for update data
  updateData() {
    let data = this.angForm.value;
    let Gold
    let depo
    if (data.IS_DEPO_LOAN == '1') {
      Gold = 0
      depo = 1

    } else if (data.IS_DEPO_LOAN == '0') {
      Gold = 1
      depo = 0

    } else if (data.IS_DEPO_LOAN == '2') {
      Gold = 0
      depo = 0
    }


    data["id"] = this.updateID;

    data['IS_DEPO_LOAN'] = depo
    data['IS_GOLDLOAN'] = Gold
    data['S_INT_APPLICABLE'] = (data.S_INT_APPLICABLE == true ? '1' : '0')
    data['POST_TO_INDIVIDUAL_AC'] = (data.POST_TO_INDIVIDUAL_AC == true ? '1' : '0')
    data['S_RECEIVABLE_INT_ALLOW'] = (data.S_RECEIVABLE_INT_ALLOW == true ? '1' : '0')
    data['IS_SHOW_INT_AS_RECINT_IFDUEBAL'] = (data.IS_SHOW_INT_AS_RECINT_IFDUEBAL == true ? '1' : '0')
    data['IS_INTUPTODATE'] = (data.IS_INTUPTODATE == true ? '1' : '0')
    data['IS_NO_POST_INT_AFT_OD'] = (data.IS_NO_POST_INT_AFT_OD == true ? '1' : '0')
    data['S_PENAL_INT_APPLICABLE'] = (data.S_PENAL_INT_APPLICABLE == true ? '1' : '0')
    data['IS_POST_PENAL_TO_AC'] = (data.IS_POST_PENAL_TO_AC == true ? '1' : '0')
    data['POST_PENALINT_IN_INTEREST'] = (data.POST_PENALINT_IN_INTEREST == true ? '1' : '0')
    data['IS_CAL_EXTRAPENAL_FOR_CC'] = (data.IS_CAL_EXTRAPENAL_FOR_CC == true ? '1' : '0')
    data['ODPENALTY_ON_EXPIRED_LEDGERBAL'] = (data.ODPENALTY_ON_EXPIRED_LEDGERBAL == true ? '1' : '0')
    data['INT_INSTRUCTION_ALLOW'] = (data.INT_INSTRUCTION_ALLOW == true ? '1' : '0')
    data['STAND_INSTRUCTION_ALLOW'] = (data.STAND_INSTRUCTION_ALLOW == true ? '1' : '0')
    data['BALANCE_ADD_APPLICABLE'] = (data.BALANCE_ADD_APPLICABLE == true ? '1' : '0')
    this.cashcreditservice.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      this.angForm.reset();
      this.angForm.controls['S_APPL'].enable()

    });
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  // Reset Function
  resetForm() {
    this.createForm();

    this.ngglacno = null
    this.ngintglac = null
    this.ngreceivableintac = null
    this.ngpenalintac = null
    this.ngrecblepenalintac = null
    this.ngrecbleoverdueint = null
    this.ngoverdraftint = null
  }
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete narration data.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.cashcreditservice.deleteData(id).subscribe((data1) => {
          this.cashcredit = data1;
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          (error) => {
            console.log(error);
          };
        // to reload after delete of data
        this.rerender();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }

  ngAfterViewInit(): void {
    this.myInputField.nativeElement.focus();
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#schemeparametertable tfoot tr').appendTo('#schemeparametertable thead');
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
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  OpenLink(val) {
    if (val == 31) {
      this.InterestApplicableTrue = true;
      this.PenalInterestApplicableTrue = false;
      this.OverDraftInteresttypeTrue = false;
      this.otherSettingsTrue = false;
      this.cashCredittypeTrue = false;
    }
    if (val == 32) {
      this.InterestApplicableTrue = false;
      this.PenalInterestApplicableTrue = true;
      this.OverDraftInteresttypeTrue = false;
      this.otherSettingsTrue = false;
      this.cashCredittypeTrue = false;
    }

    if (val == 33) {
      this.InterestApplicableTrue = false;
      this.PenalInterestApplicableTrue = false;
      this.OverDraftInteresttypeTrue = true;
      this.otherSettingsTrue = false;
      this.cashCredittypeTrue = false;
    }

    if (val == 34) {
      this.InterestApplicableTrue = false;
      this.PenalInterestApplicableTrue = false;
      this.OverDraftInteresttypeTrue = false;
      this.otherSettingsTrue = true;
      this.cashCredittypeTrue = false;
    }

    if (val == 35) {
      this.InterestApplicableTrue = false;
      this.PenalInterestApplicableTrue = false;
      this.OverDraftInteresttypeTrue = false;
      this.otherSettingsTrue = false;
      this.cashCredittypeTrue = true;
    }
  }

  isDepoloan(value) {
    if (value == 1) {
      this.IS_DEPO_LOAN = true
      this.IS_GOLDLOAN = false
      this.IS_BOTH = false
      this.angForm.patchValue({
        'IS_DEPO_LOAN': 1,
        'IS_GOLDLOAN': 0
      })
    } else if (value == 2) {
      this.IS_DEPO_LOAN = false
      this.IS_GOLDLOAN = true
      this.IS_BOTH = false
      this.angForm.patchValue({
        'IS_DEPO_LOAN': 0,
        'IS_GOLDLOAN': 1
      })
    } else if (value == 3) {
      this.IS_DEPO_LOAN = false
      this.IS_GOLDLOAN = false
      this.IS_BOTH = true
      this.angForm.patchValue({
        'IS_DEPO_LOAN': 0,
        'IS_GOLDLOAN': 0
      })
    }
  }

  checkDuplicate(event) {

    let obj = {
      scheme: event.target.value
    }
    if (obj.scheme != '') {
      if (Number(obj.scheme) >= 601 && Number(obj.scheme) <= 699) {
        this.cashcreditservice.duplicatecheck(obj).subscribe(data => {
          if (data.length != 0) {
            this.angForm.controls['S_APPL'].reset()
            Swal.fire('Oops', 'This scheme Code is already exists', 'error')
          }
        })
      } else {
        this.angForm.controls['S_APPL'].reset()
        Swal.fire('Oops', 'Please enter the scheme code within 601 to 699 this range', 'error')
      }
    }
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

  checkmargin(ele: any) {
    //check  if given value  is below 100
    if (ele.target.value <= 100) {
    }
    else {
      Swal.fire("Invalid Input", "Please Insert Values Below 100", "error");
      ele.target.value = 0
  
    }
  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
