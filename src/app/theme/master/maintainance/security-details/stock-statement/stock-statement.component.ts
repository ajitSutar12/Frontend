import { Component, OnInit, ViewChild } from "@angular/core";
import { Subject } from "rxjs";
import { stockcomponentservice } from "./stock-statement.component.service";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { first } from "rxjs/operators";

import Swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface StockMaster {
  SUBMISSION_DATE: number;
  STATEMENT_DATE: string;
  RAW_MATERIAL: number;
  MARGIN: number;
  WORK_PROGRESS: number;
  FINISHED_GOODS: number;
  WORK_MARGIN: number,
  FINISHED_MARGIN: number;
  REMARK: string;
}
@Component({
  selector: "app-stock-statement",
  templateUrl: "./stock-statement.component.html",
  styleUrls: ["./stock-statement.component.scss"],
})
export class StockStatementComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  updateID: number; //variable for updating
  // Store data from backend
  stockmasters: StockMaster[];
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private fb: FormBuilder, private _stock: stockcomponentservice) {
    this.createForm();
  }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: "fake-data/security-details.json",
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
            // + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>'
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
          data: "MARGIN",
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
      dom: "Bfrtip",
      buttons: ["copy", "print", "excel", "csv"],
      // //row click handler code
      // rowCallback: (row: Node, data: any[] | Object, index: number) => {
      //   const self = this;
      //   $('td', row).off('click');
      //   $('td', row).on('click', '#editbtn', () => {
      //     self.editClickHandler(data);
      //   });
      //   $('td', row).on('click', '#delbtn', () => {
      //     self.delClickHandler(data);
      //   });
      //   return row;
      // }
    };
  }

  createForm() {
    this.angForm = this.fb.group({
      SUBMISSION_DATE: ["", [Validators.required]],
      STATEMENT_DATE: ["", [Validators.required]],
      RAW_MATERIAL: ["", [Validators.pattern]],
      MARGIN: ["", [Validators.pattern]],
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
      SUBMISSION_DATE: formVal.SUBMISSION_DATE,
      STATEMENT_DATE: formVal.STATEMENT_DATE,
      RAW_MATERIAL: formVal.RAW_MATERIAL,
      MARGIN: formVal.MARGIN,
      WORK_PROGRESS: formVal.WORK_PROGRESS,
      FINISHED_GOODS: formVal.FINISHED_GOODS,
      WORK_MARGIN: formVal.WORK_MARGIN,
      FINISHED_MARGIN: formVal.FINISHED_MARGIN,
      REMARK: formVal.REMARK,
      LEDGER_Bal: formVal.LEDGER_Bal,
    };
    this._stock.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
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

  //function for edit button clicked
  editClickHandler(id: any): void {
    this.showButton = false;
    this.updateShow = true;
    this._stock.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.angForm.setValue({
        SUBMISSION_DATE: data.SUBMISSION_DATE,
        STATEMENT_DATE: data.STATEMENT_DATE,
        RAW_MATERIAL: data.RAW_MATERIAL,
        MARGIN: data.MARGIN,
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
          this.stockmasters = data1;
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
  resetForm() {
    this.createForm();
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
