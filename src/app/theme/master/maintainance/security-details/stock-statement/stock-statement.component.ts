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
  //passing data form child to parent
  @Output() newStockEvent = new EventEmitter<string>();
  newItemEvent(value) {
    this.newStockEvent.emit(value);
  }
  //passing data from parent to child component
  @Input() scheme: any;
  @Input() Accountno: any;
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

  constructor(
    private fb: FormBuilder,
    private _stock: stockcomponentservice,
    private http: HttpClient,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
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
            this.url + "/stock-statement",
            dataTableParameters
          )
          .subscribe((resp) => {
            this.stockmasters = resp.data;
            console.log("stock:", resp);
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
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
          },
        },
        {
          title: "Submission Date",
          data: "SUBMISSION_DATE",
        },
        {
          title: "Statement Date",
          data: "STATEMENT_DATE",
        },
        {
          title: "Raw Materials",
          data: "RAW_MATERIAL",
        },
        {
          title: "R/M Margin %",
          data: "RAW_MARGIN",
        },
        {
          title: "Work In Progress",
          data: "WORK_PROGRESS",
        },

        {
          title: "Finished Goods",
          data: "FINISHED_GOODS",
        },
        {
          title: "W/P Margin %",
          data: "WORK_MARGIN",
        },
        {
          title: "F/G Margin %",
          data: "FINISHED_MARGIN",
        },
        {
          title: "Remarks",
          data: "REMARK",
        },
      ],
      dom: "Blrtip",
    };
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

  submit(data: any) {
    const formVal = this.angForm.value;
    const dataToSend = {
      AC_TYPE: this.scheme._value[0],
      AC_NO: this.Accountno,
      SUBMISSION_DATE: formVal.SUBMISSION_DATE,
      STATEMENT_DATE: formVal.STATEMENT_DATE,
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
        let info = []
        info.push(data.id)
        info.push("stockStatement")

        this.newItemEvent(info);
        // to reload after insertion of data
        this.rerender();
      },
      (error) => {
        console.log(error);
      }
    );
    //To clear form
    this.resetForm();
  }
  //check  if margin values are below 100
  checkmargin(ele: any) {
    debugger
    //check  if given value  is below 100
    console.log(ele);
    if (ele <= 100) {
      console.log(ele);
    }
    else {
      Swal.fire("Invalid Input", "Please insert values below 100", "error");
    }
  }
  //function for edit button clicked
  editClickHandler(id: any): void {
    this.showButton = false;
    this.updateShow = true;
    this._stock.getFormData(id).subscribe((data) => {
      //sending values to parent
      let dropdown: any = {};
      dropdown.scheme = data.AC_TYPE;
      dropdown.account = data.AC_NO.toString();
      (this.updateID = data.id);
      this.angForm.patchValue({
        AC_TYPE: this.scheme._value[0],
        AC_NO: this.Accountno,
        SUBMISSION_DATE: data.SUBMISSION_DATE,
        STATEMENT_DATE: data.STATEMENT_DATE,
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
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this._stock.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.resetForm();
    });
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

    this.myInputField.nativeElement.focus();//for autofocus
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $("input", this.footer()).on("keyup change", function () {
          if (this["value"] != "") {
            that.search(this["value"]).draw();
          } else {
            that.search(this["value"]).draw();
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
}
