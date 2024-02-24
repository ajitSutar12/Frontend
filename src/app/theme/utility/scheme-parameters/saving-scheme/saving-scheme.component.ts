import { IOption } from "ng-select";
import { Subscription } from "rxjs/Subscription";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Subject } from "rxjs";
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
import { SavingschemeService } from "./saving-scheme.service";
// Used to Call API
import { HttpClient } from "@angular/common/http";
//Dropdown service file
import { ACMasterDropdownService } from "../../../../shared/dropdownService/ac-master-dropdown.service";
import { first } from "rxjs/operators";
import { environment } from "../../../../../environments/environment";
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { TranslateService } from "@ngx-translate/core";
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface savingscheme {
  S_ACNOTYPE: string;
  S_APPL: string;
  S_NAME: string;
  S_SHNAME: string;
  S_GLACNO: string;
  S_INT_ACNO: string;
  S_INT_APPLICABLE: string;
  POST_TO_INDIVIDUAL_AC: string;
  IS_DAYBASE_INT_CALCULATION: string;
  S_PRODUCT_DAY_BASE: string;
  S_PRODUCT_DAY_BASE_END: string;
  MIN_INT_LIMIT: string;
  STAND_INSTRUCTION_ALLOW: string;
  IS_INSTRUCTION_UPTO_MATURITY: string;
  ROUNDOFF_FACTOR: string;
  CHEQUEBOOK_MIN_BAL: string;
  BALANCE_ADD_APPLICABLE: string;
  DORMANT_FLAG_APPLICABLE: string;
  MIN_BAL_FOR_INT: string;
  OVERDRAFT_INTEREST_APPLICABLE: string;
  OVERDRAFT_INTEREST_RATE: string;
}

@Component({
  selector: "app-saving-scheme",
  templateUrl: "./saving-scheme.component.html",
  styleUrls: ["./saving-scheme.component.scss"],
})
export class SavingSchemeComponent implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;

  //api
  url = environment.base_url;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  savingscheme: savingscheme[];
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

  checkboxStatus: any;

  //least routing
  interestApplicableTrue = true;
  standingInstructionTrue = false;
  chequeBookMinBalTrue = false;
  balanceEntryAllowTrue = false;
  overdraftIntApplicableTrue = false;

  //Dropdown option variable
  acMaster: any;
  ngglacno: any = null
  nginterestgl: any = null

  S_PRODUCT_DAY_BASE;

  S_PRODUCT_DAY_BASE_END;
  filterData = {};
  newbtnShow: boolean;

  constructor(
    private savingschemeservice: SavingschemeService,
    private acMasterDropdownService: ACMasterDropdownService,
    private fb: FormBuilder,
    private http: HttpClient,
    private config: NgSelectConfig,private translate:TranslateService) { }

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
            this.url + "/saving-scheme",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.savingscheme = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsTotal,
              data: [],
            });
          });
      },
      columns: [
        {


          title: this.translate.instant('Utility.Action.Action'),

        },
        {
          title: this.translate.instant('Utility.Utility1.Type'),
          data: 'S_ACNOTYPE',

        },
        {
          title: this.translate.instant('Utility.Utility1.Scheme_Code'),
          data: 'S_APPL',
        },
        {
          title: this.translate.instant('Utility.Utility1.Description'),
          data: 'S_NAME',
        },
        {
          title: this.translate.instant('Utility.Utility1.Short_Name'),
          data: 'S_SHNAME',
        },
        {
          title: this.translate.instant('Utility.Utility1.GL_Acc_Num'),
          data: 'S_GLACNO',
        },
        {
          title: this.translate.instant('Utility.Utility1.Interest_GL_Acc'),
          data: 'S_INT_ACNO',
        }


        // {
        //   title: "Is Interest Applicable ?",
        //   data: "S_INT_APPLICABLE",
        // },
        // {
        //   title: "Is Post Interest to A/c ?",
        //   data: "POST_TO_INDIVIDUAL_AC",
        // },
        // {
        //   title: "Is Day Base Interest Calculation ?",
        //   data: "IS_DAYBASE_INT_CALCULATION",
        // },
        // {
        //   title: "Product Base Start Day ",
        //   data: "S_PRODUCT_DAY_BASE",
        // },
        // {
        //   title: "Product Base End Day ",
        //   data: "S_PRODUCT_DAY_BASE_END",
        // },
        // {
        //   title: "Minimum Interest Amount",
        //   data: "MIN_INT_LIMIT",
        // },
        // {
        //   title: "Is Standing Instruction Applicable ?",
        //   data: "STAND_INSTRUCTION_ALLOW",
        // },
        // {
        //   title: "Is Interest Instruction STOP after Matured?",
        //   data: "IS_INSTRUCTION_UPTO_MATURITY",
        // },
        // {
        //   title: "Interest Round Off Factor in Paise",
        //   data: "ROUNDOFF_FACTOR",
        // },
        // {
        //   title: "Cheque Book Minimum Balance",
        //   data: "CHEQUEBOOK_MIN_BAL",
        // },
        // {
        //   title: "Is Balance Entry Allow ?",
        //   data: "BALANCE_ADD_APPLICABLE",
        // },
        // {
        //   title: "Is Allow Dormat Flag Updation ?",
        //   data: "DORMANT_FLAG_APPLICABLE",
        // },
        // {
        //   title: "Minimum Balane for Interest ? ",
        //   data: "MIN_BAL_FOR_INT",
        // },
        // {
        //   title: "Is Overdraft Interest Applicable ?",
        //   data: "OVERDRAFT_INTEREST_APPLICABLE",
        // },
        // {
        //   title: "Overdraft Interest Rate?",
        //   data: "OVERDRAFT_INTEREST_RATE",
        // },
      ],
      dom: "Blrtip",
    };
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

  //Function to enable/Disable fields according selection of Interest applicable list
  isIntrestApplicable($event) {
    if ($event.target.checked) {
      document
        .getElementById("POST_TO_INDIVIDUAL_AC")
        .removeAttribute("disabled");
      document
        .getElementById("IS_DAYBASE_INT_CALCULATION")
        .removeAttribute("disabled");
      document.getElementById("S_PRODUCT_DAY_BASE").removeAttribute("disabled");
      document
        .getElementById("S_PRODUCT_DAY_BASE_END")
        .removeAttribute("disabled");
      document.getElementById("MIN_INT_LIMIT").removeAttribute("disabled");
    } else {
      document
        .getElementById("POST_TO_INDIVIDUAL_AC")
        .setAttribute("disabled", "true");
      document
        .getElementById("IS_DAYBASE_INT_CALCULATION")
        .removeAttribute("disabled");
      document
        .getElementById("S_PRODUCT_DAY_BASE")
        .setAttribute("disabled", "true");
      document
        .getElementById("S_PRODUCT_DAY_BASE_END")
        .setAttribute("disabled", "true");
      document.getElementById("MIN_INT_LIMIT").setAttribute("disabled", "true");

      this.angForm.controls['POST_TO_INDIVIDUAL_AC'].reset()
      this.angForm.controls['IS_DAYBASE_INT_CALCULATION'].reset()
      this.angForm.controls['S_PRODUCT_DAY_BASE'].reset()
      this.angForm.controls['S_PRODUCT_DAY_BASE_END'].reset()
      this.angForm.controls['MIN_INT_LIMIT'].reset()
    }
  }
  //Function to enable/Disable fields according selection of product day base start day
  isProductDayBase(S_PRODUCT_DAY_BASE) {
    if (S_PRODUCT_DAY_BASE == 0) {
      document
        .getElementById("S_PRODUCT_DAY_BASE_MONTH_BEGIN")
        .removeAttribute("disabled");
      document
        .getElementById("S_PRODUCT_DAY_BASE_MONTH_END")
        .removeAttribute("disabled");
    } else {
      document
        .getElementById("S_PRODUCT_DAY_BASE_MONTH_BEGIN")
        .setAttribute("disabled", "false");
      document
        .getElementById("S_PRODUCT_DAY_BASE_MONTH_END")
        .setAttribute("disabled", "false");
    }
  }
  //Function to enable/Disable fields according selection of product day base end day
  isProductDayBaseEndDay(S_PRODUCT_DAY_BASE_END) {
    if (S_PRODUCT_DAY_BASE_END == 0) {
      document
        .getElementById("S_PRODUCT_DAY_BASE_END_MONTH_BEGIN")
        .removeAttribute("disabled");
      document
        .getElementById("S_PRODUCT_DAY_BASE_END_MONTH_END")
        .removeAttribute("disabled");
    } else {
      document
        .getElementById("S_PRODUCT_DAY_BASE_END_MONTH_BEGIN")
        .setAttribute("disabled", "false");
      document
        .getElementById("S_PRODUCT_DAY_BASE_END_MONTH_END")
        .setAttribute("disabled", "false");
    }
  }
  //Function to enable/Disable fields according selection of overdraft Interest applicable
  isOverdraftInterest($event) {
    if ($event.target.checked) {
      document
        .getElementById("OVERDRAFT_INTEREST_RATE")
        .removeAttribute("disabled");
    } else {
      document
        .getElementById("OVERDRAFT_INTEREST_RATE")
        .setAttribute("disabled", "true");
      this.angForm.controls.OVERDRAFT_INTEREST_RATE.reset();
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      S_ACNOTYPE: ["SB"],
      S_APPL: ["", [Validators.required, Validators.min(101), Validators.max(150)]],
      S_NAME: ["", [Validators.required, Validators.pattern]],
      S_SHNAME: ["", [Validators.required, Validators.pattern]],
      S_GLACNO: [""],
      S_INT_ACNO: [""],
      S_INT_APPLICABLE: [""],
      POST_TO_INDIVIDUAL_AC: [""],
      IS_DAYBASE_INT_CALCULATION: [""],
      S_PRODUCT_DAY_BASE: ["", [Validators.pattern]],
      //S_PRODUCT_DAY_BASE:[''],
      S_PRODUCT_DAY_BASE_END: ["", [Validators.pattern]],
      //S_PRODUCT_DAY_BASE_END:[''],
      MIN_INT_LIMIT: [""],
      STAND_INSTRUCTION_ALLOW: [""],
      IS_INSTRUCTION_UPTO_MATURITY: [""],
      ROUNDOFF_FACTOR: [""],
      CHEQUEBOOK_MIN_BAL: [""],
      BALANCE_ADD_APPLICABLE: [""],
      DORMANT_FLAG_APPLICABLE: [""],
      MIN_BAL_FOR_INT: [""],
      OVERDRAFT_INTEREST_APPLICABLE: [""],
      OVERDRAFT_INTEREST_RATE: [""],
    });
  }

  // Method to insert data into database through NestJS
  submit() {
    this.formSubmitted = true;
    const formVal = this.angForm.value;
    const dataToSend = {
      S_ACNOTYPE: formVal.S_ACNOTYPE,
      S_APPL: formVal.S_APPL,
      S_NAME: formVal.S_NAME,
      S_SHNAME: formVal.S_SHNAME,
      S_GLACNO: formVal.S_GLACNO,
      S_INT_ACNO: formVal.S_INT_ACNO,
      S_INT_APPLICABLE: (formVal.S_INT_APPLICABLE == true ? '1' : '0'),
      POST_TO_INDIVIDUAL_AC: (formVal.POST_TO_INDIVIDUAL_AC == true ? '1' : '0'),
      IS_DAYBASE_INT_CALCULATION: (formVal.IS_DAYBASE_INT_CALCULATION == true ? '1' : '0'),
      STAND_INSTRUCTION_ALLOW: (formVal.STAND_INSTRUCTION_ALLOW == true ? '1' : '0'),
      IS_INSTRUCTION_UPTO_MATURITY: (formVal.IS_INSTRUCTION_UPTO_MATURITY == true ? '1' : '0'),
      BALANCE_ADD_APPLICABLE: (formVal.BALANCE_ADD_APPLICABLE == true ? '1' : '0'),
      DORMANT_FLAG_APPLICABLE: (formVal.DORMANT_FLAG_APPLICABLE == true ? '1' : '0'),
      OVERDRAFT_INTEREST_APPLICABLE: (formVal.OVERDRAFT_INTEREST_APPLICABLE == true ? '1' : '0'),
      S_PRODUCT_DAY_BASE: formVal.S_PRODUCT_DAY_BASE,
      S_PRODUCT_DAY_BASE_END: formVal.S_PRODUCT_DAY_BASE_END,
      MIN_INT_LIMIT: formVal.MIN_INT_LIMIT,
      ROUNDOFF_FACTOR: formVal.ROUNDOFF_FACTOR,
      CHEQUEBOOK_MIN_BAL: formVal.CHEQUEBOOK_MIN_BAL,
      MIN_BAL_FOR_INT: formVal.MIN_BAL_FOR_INT,
      OVERDRAFT_INTEREST_RATE: formVal.OVERDRAFT_INTEREST_RATE,
    };
    this.savingschemeservice.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.S_Msg')}`, "success");
        this.formSubmitted = false;
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

  //Method for append data into fields
  editClickHandler(id) { 
       this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this.angForm.controls['S_APPL'].disable()
    this.savingschemeservice.getFormData(id).subscribe((data) => { debugger
      this.updateID = data.id;
      this.ngglacno = Number(data.S_GLACNO)
      this.nginterestgl = Number(data.S_INT_ACNO)
      this.angForm.patchValue({ 
        S_ACNOTYPE: data.S_ACNOTYPE,
        S_APPL: data.S_APPL,
        S_NAME: data.S_NAME,
        S_SHNAME: data.S_SHNAME,
        // S_GLACNO: data.S_GLACNO,
        // S_INT_ACNO: data.S_INT_ACNO,
        S_INT_APPLICABLE: (data.S_INT_APPLICABLE == '1' ? true : false),
        POST_TO_INDIVIDUAL_AC: (data.POST_TO_INDIVIDUAL_AC == '1' ? true : false),
        IS_DAYBASE_INT_CALCULATION: (data.IS_DAYBASE_INT_CALCULATION == '1' ? true : false),
        S_PRODUCT_DAY_BASE: data.S_PRODUCT_DAY_BASE,
        S_PRODUCT_DAY_BASE_END: data.S_PRODUCT_DAY_BASE_END,
        MIN_INT_LIMIT: data.MIN_INT_LIMIT,
        STAND_INSTRUCTION_ALLOW: (data.STAND_INSTRUCTION_ALLOW == '1' ? true : false),
        IS_INSTRUCTION_UPTO_MATURITY: (data.IS_INSTRUCTION_UPTO_MATURITY == '1' ? true : false),
        ROUNDOFF_FACTOR: data.ROUNDOFF_FACTOR,
        CHEQUEBOOK_MIN_BAL: data.CHEQUEBOOK_MIN_BAL,
        BALANCE_ADD_APPLICABLE: (data.BALANCE_ADD_APPLICABLE == '1' ? true : false),
        DORMANT_FLAG_APPLICABLE: (data.DORMANT_FLAG_APPLICABLE == '1' ? true : false),
        MIN_BAL_FOR_INT: data.MIN_BAL_FOR_INT,
        OVERDRAFT_INTEREST_APPLICABLE: (data.OVERDRAFT_INTEREST_APPLICABLE == '1' ? true : false),
        OVERDRAFT_INTEREST_RATE: data.OVERDRAFT_INTEREST_RATE,

      });


      if (data.S_INT_APPLICABLE == '1') {
        document
          .getElementById("POST_TO_INDIVIDUAL_AC")
          .removeAttribute("disabled");
        document
          .getElementById("IS_DAYBASE_INT_CALCULATION")
          .removeAttribute("disabled");
        document.getElementById("S_PRODUCT_DAY_BASE").removeAttribute("disabled");
        document
          .getElementById("S_PRODUCT_DAY_BASE_END")
          .removeAttribute("disabled");
        document.getElementById("MIN_INT_LIMIT").removeAttribute("disabled");
      } else {
        document
          .getElementById("POST_TO_INDIVIDUAL_AC")
          .setAttribute("disabled", "true");
        document
          .getElementById("IS_DAYBASE_INT_CALCULATION")
          .removeAttribute("disabled");
        document
          .getElementById("S_PRODUCT_DAY_BASE")
          .setAttribute("disabled", "true");
        document
          .getElementById("S_PRODUCT_DAY_BASE_END")
          .setAttribute("disabled", "true");
        document.getElementById("MIN_INT_LIMIT").setAttribute("disabled", "true");
        this.angForm.controls['POST_TO_INDIVIDUAL_AC'].reset()
        this.angForm.controls['S_PRODUCT_DAY_BASE'].reset()
        this.angForm.controls['S_PRODUCT_DAY_BASE_END'].reset()
        this.angForm.controls['MIN_INT_LIMIT'].reset()
      }
    });
  }
  //Method for update data
  updateData() {
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data['S_INT_APPLICABLE'] = (data.S_INT_APPLICABLE == true ? '1' : '0')
    data['POST_TO_INDIVIDUAL_AC'] = (data.POST_TO_INDIVIDUAL_AC == true ? '1' : '0')
    data['IS_DAYBASE_INT_CALCULATION'] = (data.IS_DAYBASE_INT_CALCULATION == true ? '1' : '0')
    data['STAND_INSTRUCTION_ALLOW'] = (data.STAND_INSTRUCTION_ALLOW == true ? '1' : '0')
    data['IS_INSTRUCTION_UPTO_MATURITY'] = (data.IS_INSTRUCTION_UPTO_MATURITY == true ? '1' : '0')
    data['BALANCE_ADD_APPLICABLE'] = (data.BALANCE_ADD_APPLICABLE == true ? '1' : '0')
    data['DORMANT_FLAG_APPLICABLE'] = (data.DORMANT_FLAG_APPLICABLE == true ? '1' : '0')
    data['OVERDRAFT_INTEREST_APPLICABLE'] = (data.OVERDRAFT_INTEREST_APPLICABLE == true ? '1' : '0')
    this.savingschemeservice.updateData(data).subscribe(() => {
      Swal.fire(`${this.translate.instant('Swal_Msg.Success')}`, `${this.translate.instant('Swal_Msg.Update')}`, "success");
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
    this.nginterestgl = null
    this.angForm.controls['S_APPL'].enable()

    this.angForm.controls['S_PRODUCT_DAY_BASE'].reset()
    this.angForm.controls['S_PRODUCT_DAY_BASE_END'].reset()
  }
  //Method for delete data
  delClickHandler(id: number) {
    Swal.fire({
      title: `${this.translate.instant('Swal_Msg.Are_you_sure')}`,
      text: `${this.translate.instant('Swal_Msg.narration_data')}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.savingschemeservice.deleteData(id).subscribe((data1) => {
          this.savingscheme = data1;
          Swal.fire(`${this.translate.instant('Swal_Msg.Delete')}`, `${this.translate.instant('Swal_Msg.D_Msg')}`, "success");
        }),
          (error) => {
            console.log(error);
          };
        // to reload after delete of data
        this.rerender();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(`${this.translate.instant('Swal_Msg.Cancel')}`, `${this.translate.instant('Swal_Msg.C_Msg')}`, "error");
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

  OpenLink(val) {
    if (val == 1) {
      this.interestApplicableTrue = true;
      this.standingInstructionTrue = false;
      this.chequeBookMinBalTrue = false;
      this.balanceEntryAllowTrue = false;
      this.overdraftIntApplicableTrue = false;
    }
    if (val == 2) {
      this.interestApplicableTrue = false;
      this.standingInstructionTrue = true;
      this.chequeBookMinBalTrue = false;
      this.balanceEntryAllowTrue = false;
      this.overdraftIntApplicableTrue = false;
    }
    if (val == 3) {
      this.interestApplicableTrue = false;
      this.standingInstructionTrue = false;
      this.chequeBookMinBalTrue = true;
      this.balanceEntryAllowTrue = false;
      this.overdraftIntApplicableTrue = false;
    }
    if (val == 4) {
      this.interestApplicableTrue = false;
      this.standingInstructionTrue = false;
      this.chequeBookMinBalTrue = false;
      this.balanceEntryAllowTrue = true;
      this.overdraftIntApplicableTrue = false;
    }
    if (val == 5) {
      this.interestApplicableTrue = false;
      this.standingInstructionTrue = false;
      this.chequeBookMinBalTrue = false;
      this.balanceEntryAllowTrue = false;
      this.overdraftIntApplicableTrue = true;
    }
  }

  checkDuplicate(event) {

    let obj = {
      scheme: event.target.value
    }
    if (obj.scheme != '') {
      if (Number(obj.scheme) >= 101 && Number(obj.scheme) <= 150) {
        this.savingschemeservice.duplicatecheck(obj).subscribe(data => {
          if (data.length != 0) {
            this.angForm.controls['S_APPL'].reset()
            Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.scheme_Code')}`, 'error')
          }
        })
      } else {
        this.angForm.controls['S_APPL'].reset()
        Swal.fire(`${this.translate.instant('Swal_Msg.Oops')}`, `${this.translate.instant('Swal_Msg.101_to_150_this_range')}`, 'error')
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
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  
}
