import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";
import { Subject } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
// Service File For Handling CRUD Operation
import { stockcomponentservice } from "./stock-statement.component.service";
// Used to Call API
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../../environments/environment";
import { Router } from "@angular/router";
import * as moment from 'moment';
import { first } from "rxjs/operators";

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface StockMaster {
  id: number;
  AC_ACNOTYPE: string;
  AC_TYPE: number;
  BRANCH_CODE: string;
  AC_NO: number;
  SECU_CODE: number;
  SR_NO: number;
  SUBMISSION_DATE: Date;
  STATEMENT_DATE: Date;
  RAW_MATERIAL: number;
  RAW_MARGIN: number;
  WORK_PROGRESS: number;
  FINISHED_GOODS: number;
  WORK_MARGIN: number;
  FINISHED_MARGIN: number;
  REMARK: string;
  SECURITY_TYPE: string;
}
@Component({
  selector: "app-stock-statement",
  templateUrl: "./stock-statement.component.html",
  styleUrls: ["./stock-statement.component.scss"],
})
export class StockStatementComponent
  implements OnInit, AfterViewInit, OnDestroy {
  formSubmitted = false;
  //passing data form child to parent
  @Output() newStockEvent = new EventEmitter<any>();
  datemax: string;
  newbtnShow: boolean;
  newItemEvent(value) {
    this.newStockEvent.emit(value);
  }
  //passing data from parent to child component
  @Input() scheme: any;
  @Input() Accountno: any;
  @Input() AC_ACNOTYPE: any;
  @Input() branchCode: any;
  @Input() sec_code: any;
  //api
  //api
  url = environment.base_url;
  @ViewChild("autofocus") myInputField: ElementRef;//input field autofocus
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Store data from backend
  stockmasters: StockMaster[];
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

  //variable to get ID to update
  updateID: number = 0;

  //filter variable
  filterData = {};

  // for date 
  submissiondate: any = null
  statementdate: any = null
  maxDate: Date;
  minDate: Date;

  constructor(
    private fb: FormBuilder,
    private _stock: stockcomponentservice,
    private http: HttpClient,
    public router: Router
  ) {

    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())

  }

  ngOnInit(): void {
    this.createForm();

    this.dtExportButtonOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      dom: 'ftip'
    }

    let obj = {
      scheme: this.scheme,
      ac_no: this.Accountno,
      acnotype: this.AC_ACNOTYPE,
      branch: this.branchCode
    }
    this._stock.getdatatable(obj).pipe(first()).subscribe((data) => {
      this.stockmasters = data
    })
    this.dtTrigger.next();

    // this.dtExportButtonOptions = {
    //   pagingType: "full_numbers",
    //   paging: true,
    //   pageLength: 10,
    //   serverSide: true,
    //   processing: true,
    //   ajax: (dataTableParameters: any, callback) => {
    //     dataTableParameters.minNumber = dataTableParameters.start + 1;
    //     dataTableParameters.maxNumber =
    //       dataTableParameters.start + dataTableParameters.length;
    //     let datatableRequestParam: any;
    //     this.page = dataTableParameters.start / dataTableParameters.length;

    //     dataTableParameters.columns.forEach((element) => {
    //       if (element.search.value != "") {
    //         let string = element.search.value;
    //         this.filterData[element.data] = string;
    //       } else {
    //         let getColumnName = element.data;
    //         let columnValue = element.value;
    //         if (this.filterData.hasOwnProperty(element.data)) {
    //           let value = this.filterData[getColumnName];
    //           if (columnValue != undefined || value != undefined) {
    //             delete this.filterData[element.data];
    //           }
    //         }
    //       }
    //     });
    //     dataTableParameters["filterData"] = this.filterData;
    //     this.http
    //       .post<DataTableResponse>(
    //         this.url + "/stock-statement",
    //         dataTableParameters
    //       )
    //       .subscribe((resp) => {
    //         this.stockmasters = resp.data;

    //         callback({
    //           recordsTotal: resp.recordsTotal,
    //           recordsFiltered: resp.recordsTotal,
    //           data: [],
    //         });
    //       });
    //   },
    //   columns: [
    //     {
    //       title: "Action",
    //       render: function (data: any, type: any, full: any) {
    //         return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
    //       },
    //     },
    //     {
    //       title: "Submission Date",
    //       data: "SUBMISSION_DATE",
    //     },
    //     {
    //       title: "Statement Date",
    //       data: "STATEMENT_DATE",
    //     },
    //     {
    //       title: "Raw Materials",
    //       data: "RAW_MATERIAL",
    //     },
    //     {
    //       title: "R/M Margin %",
    //       data: "RAW_MARGIN",
    //     },
    //     {
    //       title: "Work In Progress",
    //       data: "WORK_PROGRESS",
    //     },

    //     {
    //       title: "Finished Goods",
    //       data: "FINISHED_GOODS",
    //     },
    //     {
    //       title: "W/P Margin %",
    //       data: "WORK_MARGIN",
    //     },
    //     {
    //       title: "F/G Margin %",
    //       data: "FINISHED_MARGIN",
    //     },
    //     {
    //       title: "Remarks",
    //       data: "REMARK",
    //     },
    //   ],
    //   dom: "Blrtip",
    // };


  }

  createForm() {
    this.angForm = this.fb.group({
      SUBMISSION_DATE: ["", [Validators.required]],
      STATEMENT_DATE: ["", [Validators.required]],
      RAW_MATERIAL: ["", [Validators.pattern]],
      RAW_MARGIN: ["", [Validators.pattern]],
      WORK_PROGRESS: ["", [Validators.pattern]],
      FINISHED_GOODS: ["", [Validators.pattern, Validators.required]],
      WORK_MARGIN: ["", [Validators.pattern]],
      FINISHED_MARGIN: ["", [Validators.pattern, Validators.required]],
      REMARK: ["", [Validators.pattern]],
    });
  }

  submit(event) {
    let submissiondate
    let statementdate
    event.preventDefault();
    this.formSubmitted = true;
    if (this.angForm.valid) {

      const formVal = this.angForm.value;
      const dataToSend = {
        AC_TYPE: this.scheme,
        AC_NO: this.Accountno,
        AC_ACNOTYPE: this.AC_ACNOTYPE,
        BRANCH_CODE: this.branchCode,
        SECU_CODE: this.sec_code,
        'SUBMISSION_DATE': (formVal.SUBMISSION_DATE == '' || formVal.SUBMISSION_DATE == 'Invalid date') ? submissiondate = '' : submissiondate = moment(formVal.SUBMISSION_DATE).format('DD/MM/YYYY'),

        'STATEMENT_DATE': (formVal.STATEMENT_DATE == '' || formVal.STATEMENT_DATE == 'Invalid date') ? statementdate = '' : statementdate = moment(formVal.STATEMENT_DATE).format('DD/MM/YYYY'),

        RAW_MATERIAL: formVal.RAW_MATERIAL,
        RAW_MARGIN: formVal.RAW_MARGIN,
        WORK_PROGRESS: formVal.WORK_PROGRESS,
        FINISHED_GOODS: formVal.FINISHED_GOODS,
        WORK_MARGIN: formVal.WORK_MARGIN,
        FINISHED_MARGIN: formVal.FINISHED_MARGIN,
        REMARK: formVal.REMARK,
        LEDGER_Bal: formVal.LEDGER_Bal,
      };

      this._stock.postData(dataToSend).subscribe(
        (data) => {
          Swal.fire("Success!", "Data Added Successfully !", "success");
          this.formSubmitted = false;
          let info = []
          info.push(data.id)
          info.push("stockStatement")

          this.newItemEvent(info);
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload()
          });

        },
        (error) => {
          console.log(error);
        }
      );
      //To clear form
      this.resetForm();
    }

  }
  //check  if margin values are below 100
  checkmargin(ele: any) {

    //check  if given value  is below 100

    if (ele <= 100) {

    }
    else {
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
    }
  }

  updatecheckdata: any
  //function for edit button clicked
  editClickHandler(id: any): void {

    let submissiondate
    let statementdate
    this.showButton = false;
    this.updateShow = true;
    this.newbtnShow = true;
    this._stock.getFormData(id).subscribe((data) => {
      this.updatecheckdata = data

      //sending values to parent
      let dropdown: any = {};
      dropdown.scheme = data.AC_TYPE;
      dropdown.account = data.AC_NO;
      let obj1 = {
        'AccountType': data.AC_TYPE,
        'AccountNo': data.AC_NO,
        'SchemeType': data.AC_ACNOTYPE
      }
      this.newStockEvent.emit(obj1);
      (this.updateID = data.id);
      this.scheme = data.AC_TYPE
      this.Accountno = data.AC_NO
      this.angForm.patchValue({

        'SUBMISSION_DATE': (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? submissiondate = '' : submissiondate = data.SUBMISSION_DATE,

        'STATEMENT_DATE': (data.STATEMENT_DATE == 'Invalid date' || data.STATEMENT_DATE == '' || data.STATEMENT_DATE == null) ? statementdate = '' : statementdate = data.STATEMENT_DATE,

        RAW_MATERIAL: data.RAW_MATERIAL,
        RAW_MARGIN: data.RAW_MARGIN,
        WORK_PROGRESS: data.WORK_PROGRESS,
        FINISHED_GOODS: data.FINISHED_GOODS,
        WORK_MARGIN: data.WORK_MARGIN,
        FINISHED_MARGIN: data.FINISHED_MARGIN,
        REMARK: data.REMARK,
      });
    });
  }

  updateData() {
    let submissiondate
    let statementdate
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    data["AC_TYPE"] = this.scheme
    data["AC_NO"] = this.Accountno
    if (this.updatecheckdata.SUBMISSION_DATE != data.SUBMISSION_DATE) {
      (data.SUBMISSION_DATE == 'Invalid date' || data.SUBMISSION_DATE == '' || data.SUBMISSION_DATE == null) ? (submissiondate = '', data['SUBMISSION_DATE'] = submissiondate) : (submissiondate = data.SUBMISSION_DATE, data['SUBMISSION_DATE'] = moment(submissiondate).format('DD/MM/YYYY'))
    }
    if (this.updatecheckdata.STATEMENT_DATE != data.STATEMENT_DATE) {
      (data.STATEMENT_DATE == 'Invalid date' || data.STATEMENT_DATE == '' || data.STATEMENT_DATE == null) ? (statementdate = '', data['STATEMENT_DATE'] = statementdate) : (statementdate = data.STATEMENT_DATE, data['STATEMENT_DATE'] = moment(statementdate).format('DD/MM/YYYY'))
    }
    this._stock.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
      // this.rerender();
      this.resetForm();
    });
  }
  addNewData() {
    this.showButton = true;
    this.updateShow = false;
    this.newbtnShow = false;
    this.resetForm();
  }
  //function for delete button clicked
  delClickHandler(id: any): void {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete Submission Date  data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._stock.deleteData(id).subscribe((data1) => {
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          (error) => {
            console.log(error);
          };
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      $('#informationtable tfoot tr').appendTo('#informationtable thead');
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
    let obj1 = {
      'AccountType': null,
      'AccountNo': null,

    }
    this.newStockEvent.emit(obj1);
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
}
