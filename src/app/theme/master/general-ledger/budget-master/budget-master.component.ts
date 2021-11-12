import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { animate, style, transition, trigger } from "@angular/animations";
import Swal from "sweetalert2";
import { BudgetserviceService } from "./budget-master.component.service";
// Angular Datatable Directive 
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';


// For fetching values from backend
interface budget {
  budgetYear: number;
  radio: string;
}

@Component({
  selector: "app-budget-master",
  templateUrl: "./budget-master.component.html",
  styleUrls: ["./budget-master.component.scss"],
})
export class BudgetMasterComponent implements OnInit {
  angForm: FormGroup;
  timeLeft: number;
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();


  dtExportButtonOptions: any = {};

  showButton: boolean = true;
  updateShow: boolean = false;
  updateID:number;

  message = {
    BudgetYear: "",
  };

  constructor(private fb: FormBuilder, private _budget: BudgetserviceService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: "fake-data/budget_master.json",
      columns: [
        {
          title: "Action",
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>';
            // + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>'
          },
        },
        {
          title: "Account Number",
          data: "AccountNumber",
        },
        {
          title: "Account Name",
          data: "AccountName",
        },
        {
          title: "Allocated Budget Amount",
          data: "AllocatedBudgetAmount",
        },
      ],
      dom: "Bfrtip",
      buttons: ["copy", "print", "excel", "csv"],
      //row click handler code
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $("td", row).off("click");
        $("td", row).on("click", "#editbtn", () => {
          self.editClickHandler(data);
        });
        $("td", row).on("click", "#delbtn", () => {
          self.delClickHandler(data);
        });
        return row;
      },
    };
  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  createForm() {
    this.angForm = this.fb.group({
      BudgetYear: ["", [Validators.required, Validators.pattern]],
      radio: [""],
    });
  }
  //Method to insert data into database on submitting form
  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      // console.log(this.angForm.value);
    }
    const formVal = this.angForm.value;
    const dataToSend = {
      budgetYear: formVal.BudgetYear,
      radio: formVal.radio,
    };
    // console.log(this.angForm.value);
    this._budget.postData(dataToSend).subscribe(
      (data1) => {
        Swal.fire("Success!", "Data Added Successfully !", "success");
        // to reload after insertion of data
        // this.rerender();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.BudgetYear = info.BudgetYear;
    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler(data: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#229954",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this._budget.deleteData(data);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe.", "error");
      }
    });
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
    let data = this.angForm.value;
    data['id'] = this.updateID;
    this._budget.updateData(data).subscribe(() => {
      Swal.fire('Success!', 'Record Updated Successfully !', 'success');
      this.showButton = true;
      this.updateShow = false;
      this.rerender();
       this.resetForm();
    })
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
    // Reset Function
    resetForm() {
      this.createForm();
    }
    
}
