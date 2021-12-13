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

  S_PRODUCT_DAY_BASE;

  S_PRODUCT_DAY_BASE_END;
  filterData = {};
  newbtnShow: boolean;

  constructor(
    private savingschemeservice: SavingschemeService,
    private acMasterDropdownService: ACMasterDropdownService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

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
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return '<button class="editbtn btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
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
          title: "G.L. A/c No.",
          data: "S_GLACNO",
        },
        {
          title: "Interest GL A/c",
          data: "S_INT_ACNO",
        },
        {
          title: "Is Interest Applicable ?",
          data: "S_INT_APPLICABLE",
        },
        {
          title: "Is Post Interest to A/c ?",
          data: "POST_TO_INDIVIDUAL_AC",
        },
        {
          title: "Is Day Base Interest Calculation ?",
          data: "IS_DAYBASE_INT_CALCULATION",
        },
        {
          title: "Product Base Start Day ",
          data: "S_PRODUCT_DAY_BASE",
        },
        {
          title: "Product Base End Day ",
          data: "S_PRODUCT_DAY_BASE_END",
        },
        {
          title: "Minimum Interest Amount",
          data: "MIN_INT_LIMIT",
        },
        {
          title: "Is Standing Instruction Applicable ?",
          data: "STAND_INSTRUCTION_ALLOW",
        },
        {
          title: "Is Interest Instruction STOP after Matured?",
          data: "IS_INSTRUCTION_UPTO_MATURITY",
        },
        {
          title: "Interest Round Off Factor in Paise",
          data: "ROUNDOFF_FACTOR",
        },
        {
          title: "Cheque Book Minimum Balance",
          data: "CHEQUEBOOK_MIN_BAL",
        },
        {
          title: "Is Balance Entry Allow ?",
          data: "BALANCE_ADD_APPLICABLE",
        },
        {
          title: "Is Allow Dormat Flag Updation ?",
          data: "DORMANT_FLAG_APPLICABLE",
        },
        {
          title: "Minimum Balane for Interest ? ",
          data: "MIN_BAL_FOR_INT",
        },
        {
          title: "Is Overdraft Interest Applicable ?",
          data: "OVERDRAFT_INTEREST_APPLICABLE",
        },
        {
          title: "Overdraft Interest Rate?",
          data: "OVERDRAFT_INTEREST_RATE",
        },
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
      S_APPL: ["", [Validators.required, Validators.min(101),Validators.max(150)]],
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
    const formVal = this.angForm.value;
    const dataToSend = {
      S_ACNOTYPE: formVal.S_ACNOTYPE,
      S_APPL: formVal.S_APPL,
      S_NAME: formVal.S_NAME,
      S_SHNAME: formVal.S_SHNAME,
      S_GLACNO: formVal.S_GLACNO,
      S_INT_ACNO: formVal.S_INT_ACNO,
      S_INT_APPLICABLE: formVal.S_INT_APPLICABLE,
      POST_TO_INDIVIDUAL_AC: formVal.POST_TO_INDIVIDUAL_AC,
      IS_DAYBASE_INT_CALCULATION: formVal.IS_DAYBASE_INT_CALCULATION,
      S_PRODUCT_DAY_BASE: formVal.S_PRODUCT_DAY_BASE,
      S_PRODUCT_DAY_BASE_END: formVal.S_PRODUCT_DAY_BASE_END,
      MIN_INT_LIMIT: formVal.MIN_INT_LIMIT,
      STAND_INSTRUCTION_ALLOW: formVal.STAND_INSTRUCTION_ALLOW,
      IS_INSTRUCTION_UPTO_MATURITY: formVal.IS_INSTRUCTION_UPTO_MATURITY,
      ROUNDOFF_FACTOR: formVal.ROUNDOFF_FACTOR,
      CHEQUEBOOK_MIN_BAL: formVal.CHEQUEBOOK_MIN_BAL,
      BALANCE_ADD_APPLICABLE: formVal.BALANCE_ADD_APPLICABLE,
      DORMANT_FLAG_APPLICABLE: formVal.DORMANT_FLAG_APPLICABLE,
      MIN_BAL_FOR_INT: formVal.MIN_BAL_FOR_INT,
      OVERDRAFT_INTEREST_APPLICABLE: formVal.OVERDRAFT_INTEREST_APPLICABLE,
      OVERDRAFT_INTEREST_RATE: formVal.OVERDRAFT_INTEREST_RATE,
    };
    this.savingschemeservice.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
       
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
    this.savingschemeservice.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.angForm.setValue({
        S_ACNOTYPE: data.S_ACNOTYPE,
        S_APPL: data.S_APPL,
        S_NAME: data.S_NAME,
        S_SHNAME: data.S_SHNAME,
        S_GLACNO: data.S_GLACNO,
        S_INT_ACNO: data.S_INT_ACNO,
        S_INT_APPLICABLE: data.S_INT_APPLICABLE,
        POST_TO_INDIVIDUAL_AC: data.POST_TO_INDIVIDUAL_AC,
        IS_DAYBASE_INT_CALCULATION: data.IS_DAYBASE_INT_CALCULATION,
        S_PRODUCT_DAY_BASE: data.S_PRODUCT_DAY_BASE,
        S_PRODUCT_DAY_BASE_END: data.S_PRODUCT_DAY_BASE_END,
        MIN_INT_LIMIT: data.MIN_INT_LIMIT,
        STAND_INSTRUCTION_ALLOW: data.STAND_INSTRUCTION_ALLOW,
        IS_INSTRUCTION_UPTO_MATURITY: data.IS_INSTRUCTION_UPTO_MATURITY,
        ROUNDOFF_FACTOR: data.ROUNDOFF_FACTOR,
        CHEQUEBOOK_MIN_BAL: data.CHEQUEBOOK_MIN_BAL,
        BALANCE_ADD_APPLICABLE: data.BALANCE_ADD_APPLICABLE,
        DORMANT_FLAG_APPLICABLE: data.DORMANT_FLAG_APPLICABLE,
        MIN_BAL_FOR_INT: data.MIN_BAL_FOR_INT,
        OVERDRAFT_INTEREST_APPLICABLE: data.OVERDRAFT_INTEREST_APPLICABLE,
        OVERDRAFT_INTEREST_RATE: data.OVERDRAFT_INTEREST_RATE,
 
      });
    });
  }
  //Method for update data
  updateData() {
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this.savingschemeservice.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.newbtnShow = false;
      // to reload after insertion of data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      this.angForm.reset();
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
        this.savingschemeservice.deleteData(id).subscribe((data1) => {
          this.savingscheme = data1;
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
}
