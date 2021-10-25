import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-debts',
  templateUrl: './book-debts.component.html',
  styleUrls: ['./book-debts.component.scss']
})
export class BookDebtsComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  constructor(private fb: FormBuilder) { this.createForm(); }

  message = {
    subm_date: "",
    stmt_date: "",
    Margin: "",
    remarks: "",
    DebtorsOpeningBalance: "",
    AddCreditSales: "",
    LessRecoveries: "",
    LessOveragedDebtors: "",
    CreditorsOutstanding: "",
    DebtorsClosingBalance: "",
  };

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/security-details.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        }, {
          title: 'Submission Date',
          data: 'subm_date'
        }, {
          title: 'Statement Date',
          data: 'stmt_date'
        }, {
          title: 'Debtors Opening Balance.',
          data: 'deposit_amount'
        }, {
          title: 'Credit Sales',
          data: 'premium_amount'
        }, {
          title: 'Recovery',
          data: 'fg_cost'
        }, {
          title: 'Overaged Debtors',
          data: 'receipt_no'
        }, {
          title: 'Debtors Closing Balance',
          data: 'total_value'
        }, {
          title: 'Creditors O/S Balance',
          data: 'deposit_bal'
        }, {
          title: 'Margin %',
          data: 'margin'
        }, {
          title: 'Remarks',
          data: 'remarks'
        },
      ],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ],
      //row click handler code
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).off('click');
        $('td', row).on('click', '#editbtn', () => {
          self.editClickHandler(data);
        });
        $('td', row).on('click', '#delbtn', () => {
          self.delClickHandler(data);
        });
        return row;
      }
    };
  }


  createForm() {
    this.angForm = this.fb.group({

      subm_date: ['', [Validators.required]],
      stmt_date: ['', [Validators.required]],
      Margin: ['', [Validators.pattern]],
      remarks: ['', [Validators.pattern]],
      DebtorsOpeningBalance: ['', [Validators.pattern, Validators.required]],
      CreditorsOutstanding: ['', [Validators.pattern]],
      AddCreditSales: ['', [Validators.pattern]],
      LessRecoveries: ['', [Validators.pattern]],
      LessOveragedDebtors: ['', [Validators.pattern]],
      DebtorsClosingBalance:['',[Validators.pattern, Validators.required]]
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
    this.message.subm_date = info.subm_date;
    this.message.stmt_date = info.stmt_date;
    this.message.Margin = info.Margin;
    this.message.DebtorsOpeningBalance = info.DebtorsOpeningBalance;
    this.message.AddCreditSales = info.AddCreditSales;
    this.message.LessRecoveries = info.LessRecoveries;
    this.message.LessOveragedDebtors = info.LessOveragedDebtors;
    this.message.CreditorsOutstanding = info.CreditorsOutstanding;
    this.message.remarks = info.remarks;
    this.message.DebtorsClosingBalance = info.DebtorsClosingBalance;
    this.showButton = false;
    this.updateShow = true;
  }

  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function for delete button clicked
  delClickHandler(info: any): void {
    this.message.subm_date = info.subm_date;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Submission Date." + this.message.subm_date + "  data",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#229954',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your data is safe.',
          'error'
        )
      }
    })
  }

}