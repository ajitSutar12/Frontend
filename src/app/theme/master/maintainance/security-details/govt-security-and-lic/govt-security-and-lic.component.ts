import { Component, OnInit, ViewChild } from "@angular/core";
import { Subject } from "rxjs";

import Swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { governmentsecuritycomponentservice } from "../govt-security-and-lic/govt-security-and-lic.component.service";
// Angular Datatable Directive
import { DataTableDirective } from "angular-datatables";
import { first } from "rxjs/operators";

// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
// For fetching values from backend
interface GovernmentMaster {
  SUBMISSION_DATE: Date;
  CERT_POLICY_DATE: Date;
  CERT_POLICY_NO: string;
  MARGIN: number;
  ASSURED_NAME: string;
  PAIDUP_AMT: number;
  SUM_ASSURED: number;
  PREMIUM: number;
  SURRENDER_VALUE: number;
  PREMIUM_DUE_DATE: Date;
  MATURE_DUE_DATE: Date;
  NOMINEE: string;
  REMARK: string;
}
@Component({
  selector: "app-govt-security-and-lic",
  templateUrl: "./govt-security-and-lic.component.html",
  styleUrls: ["./govt-security-and-lic.component.scss"],
})
export class GovtSecurityAndLicComponent implements OnInit {
  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  updateID: number; //variable for updating
  // Store data from backend
  governmentmasters: GovernmentMaster[];
  // For reloading angular datatable after CRUD operation
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  setdate: any;

  constructor(
    private fb: FormBuilder,
    private _govsecurity: governmentsecuritycomponentservice
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
            return (
              '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' +
              " " +
              '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>'
            );
          },
        },
        {
          title: "Submission Date",
          data: "SUBMISSION_DATE",
        },
        {
          title: "Cert/Policy Date",
          data: "CERT_POLICY_DATE",
        },
        {
          title: "Cert/Policy No.",
          data: "CERT_POLICY_NO",
        },
        {
          title: "Margin %",
          data: "MARGIN",
        },
        {
          title: "Assured Name",
          data: "ASSURED_NAME",
        },
        {
          title: "Paid Up Amount",
          data: "PAIDUP_AMT",
        },
        {
          title: "Sum of Assured",
          data: "SUM_ASSURED",
        },
        {
          title: "Premium Amount",
          data: "PREMIUM",
        },
        {
          title: "Surrender Value",
          data: "SURRENDER_VALUE",
        },
        {
          title: "Premium Due Date",
          data: "PREMIUM_DUE_DATE",
        },
        {
          title: "Matured Due Date",
          data: "MATURE_DUE_DATE",
        },
        {
          title: "Nominee",
          data: "NOMINEE",
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
      CERT_POLICY_DATE: ["", [Validators.required]],
      CERT_POLICY_NO: ["", [Validators.pattern, Validators.required]],
      MARGIN: ["", [Validators.pattern, Validators.required]],
      ASSURED_NAME: ["", [Validators.pattern]],
      PAIDUP_AMT: ["", [Validators.pattern]],
      SUM_ASSURED: ["", [Validators.pattern, Validators.required]],
      PREMIUM: ["", [Validators.pattern, Validators.required]],
      SURRENDER_VALUE: ["", Validators.pattern],
      PREMIUM_DUE_DATE: ["", Validators.required],
      MATURE_DUE_DATE: ["", Validators.required],
      NOMINEE: ["", Validators.pattern],
      REMARK: ["", Validators.pattern],
    });
  }

  submit(data: any) {
    const formVal = this.angForm.value;
    const dataToSend = {
      SUBMISSION_DATE: formVal.SUBMISSION_DATE,
      CERT_POLICY_DATE: formVal.CERT_POLICY_DATE,
      CERT_POLICY_NO: formVal.CERT_POLICY_NO,
      MARGIN: formVal.MARGIN,
      ASSURED_NAME: formVal.ASSURED_NAME,
      PAIDUP_AMT: formVal.PAIDUP_AMT,
      SUM_ASSURED: formVal.SUM_ASSURED,
      PREMIUM: formVal.PREMIUM,
      SURRENDER_VALUE: formVal.SURRENDER_VALUE,
      PREMIUM_DUE_DATE: formVal.PREMIUM_DUE_DATE,
      MATURE_DUE_DATE: formVal.MATURE_DUE_DATE,
      NOMINEE: formVal.NOMINEE,
      REMARK: formVal.REMARK,
    };
    this._govsecurity.postData(dataToSend).subscribe(
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
    this._govsecurity.getFormData(id).subscribe((data) => {
      this.updateID = data.id;
      this.angForm.setValue({
        SUBMISSION_DATE: data.SUBMISSION_DATE,
        CERT_POLICY_DATE: data.CERT_POLICY_DATE,
        " CERT_POLICY_NO": data.CERT_POLICY_NO,
        MARGIN: data.MARGIN,
        ASSURED_NAME: data.ASSURED_NAME,
        " PAIDUP_AMT": data.PAIDUP_AMT,
        SUM_ASSURED: data.SUM_ASSURED,
        PREMIUM: data.PREMIUM,
        SURRENDER_VALUE: data.SURRENDER_VALUE,
        PREMIUM_DUE_DATE: data.PREMIUM_DUE_DATE,
        MATURE_DUE_DATE: data.MATURE_DUE_DATE,
        NOMINEE: data.NOMINEE,
        REMARK: data.REMARK,
      });
    });
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data["id"] = this.updateID;
    this._govsecurity.updateData(data).subscribe(() => {
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
        this._govsecurity.deleteData(id).subscribe((data1) => {
          this.governmentmasters = data1;
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
        }),
          Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe.", "error");
      }
    });
  }
  //for checking dates
  checkdate(data: any) {
    // debugger
    // console.log(data.value);
    //fetch premium due date value
    let premium = document.getElementById(
      "premium_due_date"
    ) as HTMLInputElement;
    this.setdate = premium.value;
   
    if (data != "") {
      // debugger
      if (this.setdate > data) {
        console.log("if condition is true ");
        Swal.fire(
          "Cancelled",
          "Premium Due Date must be less than Mature due date",
          "error"
        );
      } else {
        console.log("else condition is true ");
      }
    }
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
