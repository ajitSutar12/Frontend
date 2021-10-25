import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reconciliation-ote',
  templateUrl: './reconciliation-ote.component.html',
  styleUrls: ['./reconciliation-ote.component.scss'],
})

export class ReconciliationOTEComponent implements OnInit {
  angForm: FormGroup;

  dtExportButtonOptions: any = {};
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable for checkbox and radio button 
  isInHeadOfficeBooks: boolean = true;
  isAllEntries: boolean = false;

  message = {
    inheadofficebooks: "",
    inbankbranchbooks: "",
    allentries: "",
    pendingentries: "",
    date: "",
    chequeno: "",
    particulars: "",
    debitamt: "",
    creditamt: "",
    statementdate: "",
    branchcode: "",
    glaccount: "",
    GLAccount: "",
    BranchCode: "",
    Withdrawals: '',
    Withdrawal: '',
    Deposits: '',
    Deposit: '',
    Amount: '',
    Amount1: '',
  };

  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/reconciliation-ote.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'In Head Office Books',
          data: 'inheadofficebooks'
        }, {
          title: 'In Bank/Branch Books',
          data: 'inbankbranchbooks'
        }, {
          title: 'All Entries',
          data: 'allentries'
        }, {
          title: 'Pending Entries',
          data: 'pendingentries'
        }, {
          title: 'Date',
          data: 'date'
        }, {
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
        {
          title: 'Branch Code',
          data: 'branchcode'
        },
        {
          title: 'GL Account',
          data: 'glaccount'
        }
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

  // runTimer() {
  //   const timer = setInterval(() => {
  //     this.timeLeft -= 1;
  //     if (this.timeLeft === 0) {
  //       clearInterval(timer);
  //     }
  //   }, 1000);
  // }

  createForm() {
    this.angForm = this.fb.group({
      GLAccount: ['', [Validators.required, Validators.pattern]],
      SchemeType: [''],
      AcName: [''],
      DebitCredit: [''],
      BranchCode: [''],
      Withdrawals: [''],
      Withdrawal: [''],
      Deposit: [''],
      Deposits: [''],
      Amount: [''],
      Amount1: [''],
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
    this.message.inheadofficebooks = info.inheadofficebooks;
    this.message.inbankbranchbooks = info.inbankbranchbooks;
    this.message.allentries = info.allentries;
    this.message.pendingentries = info.pendingentries;
    this.message.date = info.date;
    this.message.chequeno = info.chequeno;
    this.message.particulars = info.particulars;
    this.message.debitamt = info.debitamt;
    this.message.creditamt = info.creditamt;
    this.message.statementdate = info.statementdate;
    this.message.branchcode = info.branchcode;
    this.message.glaccount = info.glaccount;

    this.showButton = false;
    this.updateShow = true;

    //code for radio button
    if (this.message.inheadofficebooks == "Yes") {
      this.isInHeadOfficeBooks = true;      //return boolean value and display checked radio button
    }
    else {
      this.isInHeadOfficeBooks = false;   //return boolean value and display unchecked radio button
    }

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

