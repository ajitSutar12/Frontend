import { Component, OnInit, ViewChild } from "@angular/core";
import Swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { othersecuritycomponentservice } from "./other-security.component.service";
import { Subject } from "rxjs";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface SecurityMaster {
  SUBMISSION_DATE: Date;
  SHORT_DETAILS: string;
  TOTAL_VALUE: number;
  MARGIN: number;
  DETAILS: string;
}
@Component({
  selector: "app-other-security",
  templateUrl: "./other-security.component.html",
  styleUrls: ["./other-security.component.scss"],
})
export class OtherSecurityComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;
  updateID: number; //variable for updating

  // Store data from backend
  securitymasters: SecurityMaster[];
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private fb: FormBuilder,
    private _security: othersecuritycomponentservice
  ) {
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
          title: "Date of Submission",
          data: "subm_date",
        },
        {
          title: "Short Details",
          data: "short_details",
        },
        {
          title: "Total Valuet",
          data: "total_value",
        },
        {
          title: "Margin %",
          data: "margin",
        },
        {
          title: "Security Details",
          data: "security_details",
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
      SHORT_DETAILS: ["", [Validators.pattern, Validators.required]],
      TOTAL_VALUE: ["", [Validators.pattern, Validators.required]],
      MARGIN: ["", [Validators.pattern]],
      DETAILS: ["", [Validators.pattern, Validators.required]],
    });
  }
  submit(data: any) {
    const formVal = this.angForm.value;
    const dataToSend = {
      SUBMISSION_DATE: formVal.SUBMISSION_DATE,
      SHORT_DETAILS: formVal.SHORT_DETAILS,
      TOTAL_VALUE: formVal.TOTAL_VALUE,
      MARGIN: formVal.MARGIN,
      DETAILS: formVal.DETAILS,
    };
    this._security.postData(dataToSend).subscribe(
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
    this._security.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.angForm.setValue({
        SUBMISSION_DATE: data.SUBMISSION_DATE,
        SHORT_DETAILS: data.SHORT_DETAILS,
        TOTAL_VALUE: data.TOTAL_VALUE,
        MARGIN: data.MARGIN,
        DETAILS: data.DETAILS,
      });
    });
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this._security.updateData(data).subscribe(() => {
      Swal.fire("Success!", "Record Updated Successfully !", "success");
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
      this.resetForm();
    });
  }
  //function for delete button clicked
  delClickHandler(info: any): void {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete Date of Submission data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
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
