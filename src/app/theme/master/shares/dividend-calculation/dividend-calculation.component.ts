import { Component, OnInit, ViewChild } from "@angular/core";
import { IOption } from "ng-select";
import { Subscription } from "rxjs/Subscription";
import { SchemeCodeService } from "../../../../shared/elements/scheme-code.service";
import { SchemeCodeDropdownService } from "../../../../shared/dropdownService/scheme-code-dropdown.service";
// import { MembernoService } from '../../../../shared/elements/memberno.service';
import { BranchService } from "../../../../shared/elements/branch.service";
import Swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { SchemeAccountNoService } from "src/app/shared/dropdownService/schemeAccountNo.service";
import { first } from "rxjs/operators";
import { NgSelectConfig } from "@ng-select/ng-select";
import * as moment from "moment";
import { environment } from "src/environments/environment";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { data } from "jquery";
import { Subject } from "rxjs-compat";
import { HttpClient } from "@angular/common/http";
//date pipe
import { DatePipe } from "@angular/common";
import { DividendCalculationService } from "./dividend-calculation.service";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface DividendCalculation {
  id: number;
  AC_TYPE: string;
  FROM_AC: string;
  TO_AC: string;
  DIV_FROMDATE: Date;
  DIV_TODATE: Date;
  WARRENT_DATE: Date;
  Dividend: number;
  Bonus: number;
}

@Component({
  selector: "app-dividend-calculation",
  templateUrl: "./dividend-calculation.component.html",
  styleUrls: ["./dividend-calculation.component.scss"],
})
export class DividendCalculationComponent implements OnInit {
  //api
  url = environment.base_url;
  formSubmitted = false;
  angForm: FormGroup;

  dividendcalculation: DividendCalculation[];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtExportButtonOptions: any = {};

  // a: Array<IOption> = this.SchemeCodeService.getCharacters();
  WarrantDate: Array<IOption> = this.SchemeCodeService.getCharacters();
  BranchCode: Array<IOption> = this.BranchService.getCharacters();
  // b: Array<IOption> = this.MembernoService.getCharacters();

  selectedOption = "3";
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = "3";
  timeLeft = 5;

  showButton: boolean = true;
  updateShow: boolean = false;

  // dropdown ngmodel names

  //Scheme type variable
  schemeType: string = "SH";
  shareSchemeType;
  scheme: any[];
  ngscheme: any = null;
  ngfromac: any = null;
  ngtoac: any = null;

  // date variables
  divfromdate: any = null;
  divtodate: any = null;
  warrentdate: any = null;
  maxDate: Date;
  minDate: Date;
  fromdate: Date;
  todate: Date
  bsValue = new Date();

  private dataSub: Subscription = null;
  fromAC;
  ToAC;
  getschemename: any;
  filterData: any;
  page: number;

  INT_ROUND_OFF;
  shareDividend;
  divMethod;
  isAddBonusInDividend;

  constructor(
    private fb: FormBuilder,
    public SchemeCodeService: SchemeCodeService,
    public BranchService: BranchService,
    private http: HttpClient,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private _service: DividendCalculationService,
    // public MembernoService: MembernoService,
    private datePipe: DatePipe
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate());

    let finYear;
    var sysDate = new Date();
    var year = sysDate.getFullYear();
    var month = new Date().getMonth();
    month > 2 ? (finYear = year) : (finYear = year - 1);
    // finYear = finYear - 1;
    var full = [];
    var fullDate = `03/31/${finYear}`;
    this.fromdate = new Date(fullDate)
    this.fromdate.setDate(this.fromdate.getDate());
    this.todate = new Date(fullDate)
    this.todate.setDate(this.fromdate.getDate());
    // this.fromdate = moment(this.divfromdate).subtract(1, "year").toDate();
    // const todate = moment(this.divtodate).subtract(1, "year");
  }

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
        dataTableParameters["filterData"] = this.filterData;
        this.http
          .post<DataTableResponse>(
            this.url + "/dividend-calculation",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.dividendcalculation = resp.data;
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
        },
        {
          title: "Scheme Code",
          data: "AC_TYPE",
        },
        {
          title: "Membership From",
          data: "FROM_AC",
        },
        {
          title: "Membership To",
          data: "TO_AC",
        },
        {
          title: "Div.Date From",
          data: "DIV_FROMDATE",
        },
        {
          title: "Div.Date To",
          data: "DIV_TODATE",
        },
        {
          title: "Warrent Date",
          data: "WARRENT_DATE",
        },
        {
          title: "Dividend %",
          data: "Dividend",
        },
        {
          title: "Bonus %",
          data: "Bonus",
        },
      ],
      dom: "Bfrtip",
    };

    this.schemeCodeDropdownService
      .getSchemeCodeList(this.schemeType)
      .pipe(first())
      .subscribe((data) => {
        this.scheme = data;
        // this.ngscheme = data[0].value;
        // this.shareDividend = data[0].dividend;
        // this.divMethod = data[0].divMethod;
        // this.isAddBonusInDividend = data[0].isAddBonus;
        // this.INT_ROUND_OFF = data[0].INT_ROUND_OFF;
        // this.angForm.patchValue({
        //   Dividend: this.shareDividend,
        // });
      });
    this.getDivTOYear();
    // this.getAccountList();
  }

  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ["", [Validators.required, Validators.pattern]],
      FROM_AC: ["", [Validators.required, Validators.pattern]],
      TO_AC: ["", [Validators.required, Validators.pattern]],
      DIV_FROMDATE: ["", [Validators.required, Validators.pattern]],
      DIV_TODATE: ["", [Validators.required, Validators.pattern]],
      WARRENT_DATE: ["", [Validators.required, Validators.pattern]],
      Dividend: ["", [Validators.required, Validators.pattern]],
      Bonus: ["", [Validators.required, Validators.pattern]],
    });
  }

  //get account no according scheme
  getAccountList() {
    this.ngfromac = null;
    this.ngtoac = null;
    let data1: any = localStorage.getItem("user");
    let result = JSON.parse(data1);
    let branchCode = result.branch.id;
    let trandate
    if (this.formFromDate != this.divfromdate) {
      trandate = moment(this.angForm.controls["DIV_FROMDATE"].value).format('DD/MM/YYYY')
    }
    else {
      trandate = this.formFromDate
    }
    var full = [];
    var fullDate = trandate;
    full = fullDate.split(" ");
    var date = full[0].split(/\//);
    var newDate = date[1] + "/" + date[0] + "/" + date[2];
    var k = new Date(newDate);
    var expiryDate = moment(k).format("DD.MM.YYYY");
    let obj = [this.ngscheme, branchCode, expiryDate];
    this.http
      .get(this.url + "/dividend-calculation/check/" + obj)
      .subscribe((data) => {
        this.ToAC = data;
        this.fromAC = data;
      });
  }

  getShareDividend(event) {
    this.shareDividend = event.dividend;
    this.divMethod = event.divMethod;
    this.isAddBonusInDividend = event.isAddBonus;
    this.INT_ROUND_OFF = event.INT_ROUND_OFF;
    this.angForm.patchValue({
      Dividend: event.dividend,
    });
  }

  //checks percentage of interest rate
  checkInt(event) {
    if (Number(event) > 25) {
      Swal.fire("Info", "Please Input Dividend Percentage upto 25", "info");
      this.angForm.patchValue({
        Dividend: "",
      });
    }
  }

  //checks percentage of interest rate
  checkBonus(event) {
    if (Number(event) > 99) {
      Swal.fire("Info", "Please Input Bonus Percentage upto 99", "info");
      this.angForm.patchValue({
        Bonus: "",
      });
    }
  }

  //select content of field
  selectAllContent($event) {
    $event.target.select();
  }

  formFromDate
  formEndDate
  getDivTOYear() {
    let finYear;
    var sysDate = new Date();
    var year = sysDate.getFullYear();
    var month = new Date().getMonth();
    month > 2 ? (finYear = year) : (finYear = year - 1);
    finYear = finYear - 1;
    var full = [];
    var fullDate = `01/04/${finYear}`;
    // let divYear=new Date(fullDate)
    full = fullDate.split(" ");
    var date = full[0].split(/\//);
    var newDate = date[1] + "/" + date[0] + "/" + date[2];
    var formatDate = new Date(newDate);
    // starting and end date
    let start = moment(formatDate);
    let end = moment(start).add(12, "M");
    var endDT = moment(end).subtract(1, "days").format("DD/MM/YYYY");
    let starting = moment(start).format("DD/MM/YYYY");
    this.formFromDate = starting
    this.divfromdate = starting
    this.formEndDate = endDT
    this.divtodate = endDT
    this.angForm.patchValue({
      DIV_FROMDATE: starting,
      DIV_TODATE: endDT,
    });
  }

  send = {};
  endYr;
  startYr;
  DIV_FROM_MONTH;
  DIV_TO_MONTH;


  checkDivYear() {
    //Date range
    let startDate
    let endDate
    let divdatef = this.angForm.controls["DIV_FROMDATE"].value
    let divdatet = this.angForm.controls["DIV_TODATE"].value
    if (this.formFromDate != this.divfromdate) {
      startDate = moment(this.angForm.controls["DIV_FROMDATE"].value).format('DD/MM/YYYY')
    }
    else {
      startDate = this.formFromDate
    }
    if (this.formEndDate != this.divtodate) {
      endDate = moment(this.angForm.controls["DIV_TODATE"].value).format('DD/MM/YYYY')
    }
    else {
      endDate = this.formEndDate
    }
    var full = [];
    // startDate = moment(this.divfromdate).format("DD/MM/YYYY");
    // endDate = moment(this.divtodate).format("DD/MM/YYYY");
    var startDT = startDate;

    full = startDT.split(" ");
    var sdate = full[0].split(/\//);

    this.startYr = sdate[2];
    this.DIV_FROM_MONTH = sdate[1];

    var full = [];
    var endDT = endDate;
    full = endDT.split(" ");
    var date = full[0].split(/\//);

    this.endYr = date[2];
    this.DIV_TO_MONTH = date[1];

    let obj = [this.startYr, this.endYr];
    this.http
      .get(this.url + "/dividend-calculation/divYrcheck/" + obj)
      .subscribe((data) => {
        if (data["historyCheck"] == "Already Posted") {
          this.send["Flag"] = "history";
          Swal.fire("Warning!", "Dividend Already Posted !", "warning");
        } else if (data["divCheck"] == "Already Processed") {
          Swal.fire({
            text: "Dividend Already Processed.Do You Want To Overwrite?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#229954",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Overwrite it!",
          }).then((result) => {
            if (result.isConfirmed) {
              this.send["Flag"] = "Overwrite";
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              this.send["Flag"] = "Insert";
            }
          });
        }
      });
  }

  getAccNumbers() {
    this.arrTable = [];
    this.divArr = [];
    var memFrom = this.angForm.controls["FROM_AC"].value;
    var memTo = this.angForm.controls["TO_AC"].value;
    if (
      this.angForm.controls["FROM_AC"].value <
      this.angForm.controls["TO_AC"].value &&
      this.angForm.controls["TO_AC"].value != ""
    ) {
      let mem = [memFrom, memTo, this.ngscheme];
      this.http
        .get(this.url + "/dividend-calculation/accounts/" + mem)
        .subscribe((data) => {
          this.arrTable = data;
          this.arrTable.forEach((element) => {
            var object = {
              AC_NO: element.AC_NO,
              AC_NAME: element.AC_NAME,
              id: element.id,
              AC_CLOSEDT: element.AC_CLOSEDT,
              BANKACNO:
                element.BANKACNO == undefined || element.BANKACNO == null
                  ? ""
                  : element.BANKACNO,
              BRANCH_CODE: element.BRANCH_CODE,
            };
            this.divArr.push(object);
          });
        });
    }
  }

  divArr = [];
  arrTable;

  submit() {
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
    const formVal = this.angForm.value;
    let data: any = localStorage.getItem("user");
    let result = JSON.parse(data);
    const dataToSend = {
      DIV_FROMDATE: formVal.DIV_FROMDATE,
      DIV_TODATE: formVal.DIV_TODATE,
      USER: result.USER_NAME,
      divMethod: this.divMethod,
      Dividend: formVal.Dividend,
      Bonus: formVal.Bonus,
      WARRENT_DATE: formVal.WARRENT_DATE == "" || formVal.WARRENT_DATE == "Invalid date" ? "" : moment(formVal.WARRENT_DATE).format("DD/MM/YYYY"),
      DIV_FROM_YEAR: this.startYr,
      DIV_TO_YEAR: this.endYr,
      ACTYPE: this.ngscheme,
      DIV_FROM_MONTH: this.DIV_FROM_MONTH,
      DIV_TO_MONTH: this.DIV_TO_MONTH,
      divArr: this.divArr,
      send: this.send,
      isAddBonus: this.isAddBonusInDividend,
    };
    if (this.send != 'history') {
      this._service.postData(dataToSend).subscribe((data) => {
        this.formSubmitted = false;
        Swal.fire("Success!", "Data Updated Successfully !", "success");
      });
      this.arrTable = [];
      this.divArr = [];
      this.resetForm();
    }
    else {
      Swal.fire("Warning!", "Dividend Already Posted!", "warning");
    }
  }

  /**
   * @editClickHandler function for edit button clicked
   */

  editClickHandler(info: any): void {
    this.updateShow = true;
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.ngscheme = null;
    this.ngfromac = null;
    this.ngtoac = null;
  }

  /**
   * @updateData function for update data
   */
  updateData() {
    // this.showButton = true;
    this.updateShow = false;
    // this.form.reset();
  }

  /**
  * @delClickHandler function for delete button 
    @Swal sweetalert2
    @Swal.fire open a modal window to display message
  */
  //function for delete button clicked
  delClickHandler(info: any): void {
    // this.message.SchemeCode = info.SchemeCode;
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "Do you want to delete Scheme Code." + this.message.SchemeCode + "  data",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#229954',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your data has been deleted.',
    //       'success'
    //     )
    //   } else if (
    //     result.dismiss === Swal.DismissReason.cancel
    //   ) {
    //     Swal.fire(
    //       'Cancelled',
    //       'Your data is safe.',
    //       'error'
    //     )
    //   }
    // })
  }
}
