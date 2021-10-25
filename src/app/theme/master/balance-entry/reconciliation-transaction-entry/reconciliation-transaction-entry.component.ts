import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reconciliation-transaction-entry',
  templateUrl: './reconciliation-transaction-entry.component.html',
  styleUrls: ['./reconciliation-transaction-entry.component.scss'],
})

export class ReconciliationTransactionEntryComponent implements OnInit {

  angForm: FormGroup;

  //Datatable
  dtExportButtonOptions: any = {};

  showButton: boolean = true;
  updateShow: boolean = false;

  message = {
    GLAccount: "",
    allentries: "",
    pendingentries: "",
    branchcode: "",
    fromdate: "",
    todate: "",
    date: "",
    type: "",
    chequeno: "",
    particulars: "",
    debitamt: "",
    creditamt: "",
    statementdate: "",
    ToAcNo: "",
    BranchCode: "",
    BalanceDate: "",
    FromDate: "",
    ToDate: "",
    Amounts: "",
    Amount: "",
    Deposit: "",
    Deposits: "",
    Withdrawal: "",
    Withdrawals: "",
  };

  //variable for checkbox and radio button 
  // isRecovery: boolean = false;
  isAllEntries: boolean = true;

  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/reconciliation-te.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'GL Account',
          data: 'glaccount'
        },
        {
          title: 'All Entries',
          data: 'allentries'
        },
        {
          title: 'Pending Entries',
          data: 'pendingentries'
        },
        {
          title: 'Branch Code',
          data: 'branchcode'
        },
        {
          title: 'From Date',
          data: 'fromdate'
        },
        {
          title: 'To Date',
          data: 'todate'
        },
        {
          title: 'Date',
          data: 'date'
        },
        {
          title: 'Type',
          data: 'type'
        },
        {
          title: 'Cheque No.',
          data: 'chequeno'
        },
        {
          title: 'Particulars',
          data: 'particulars'
        },
        {
          title: 'Debit Amt.',
          data: 'debitamt'
        },
        {
          title: 'Credit Amt.',
          data: 'creditamt'
        },
        {
          title: 'Statement Date',
          data: 'statementdate'
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
          self.delClickHandler();
        });
        return row;
      }
    };
  }

  createForm() {
    this.angForm = this.fb.group({
      GLAccount: ['', [Validators.required, Validators.pattern]],
      FromDate: ['', [Validators.required]],
      ToDate: ['', [Validators.required]],
      BranchCode: [''],
      Withdrawals: [''],
      Withdrawal: [''],
      Deposit: [''],
      Deposits: [''],
      Amount: [''],
      Amounts: [''],
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
    this.message.GLAccount = info.glaccount;
    this.message.allentries = info.allentries;
    this.message.pendingentries = info.pendingentries;
    this.message.branchcode = info.branchcode;
    this.message.fromdate = info.fromdate;
    this.message.todate = info.todate;
    this.message.date = info.date;
    this.message.type = info.type;
    this.message.chequeno = info.chequeno;
    this.message.particulars = info.particulars;
    this.message.debitamt = info.debitamt;
    this.message.creditamt = info.creditamt;
    this.message.statementdate = info.statementdate;

    this.showButton = false;
    this.updateShow = true;

    //code for radio button
    if (this.message.allentries == "Yes") {
      this.isAllEntries = true;      //return boolean value and display checked radio button
    }
    else {
      this.isAllEntries = false;   //return boolean value and display unchecked radio button
    }
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

