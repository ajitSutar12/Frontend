import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-budget-master',
  templateUrl: './budget-master.component.html',
  styleUrls: ['./budget-master.component.scss'],
})

export class BudgetMasterComponent implements OnInit {
  angForm: FormGroup;
  timeLeft: number;

  dtExportButtonOptions: any = {};

  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    BudgetYear: "",
  };

  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/budget_master.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Account Number',
          data: 'AccountNumber'
        }, {
          title: 'Account Name',
          data: 'AccountName'
        }, {
          title: 'Allocated Budget Amount',
          data: 'AllocatedBudgetAmount'
        },
      ],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],

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
      BudgetYear: ['', [Validators.required, Validators.pattern]],
    });
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }

  //function for edit button clicked
  editClickHandler(info: any): void {
    this.message.BudgetYear = info.BudgetYear;
    this.showButton = false;
    this.updateShow = true;
  }

  //function for delete button clicked
  delClickHandler() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe.',
          'error'
        )
      }
    })
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

}
