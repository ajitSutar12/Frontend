import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { A1Service } from '../../../../shared/elements/a1.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transaction-entry',
  templateUrl: './transaction-entry.component.html',
  styleUrls: ['./transaction-entry.component.scss']
})
export class TransactionEntryComponent implements OnInit {

  angForm: FormGroup;
  dtExportButtonOptions: any = {}; //Datatable variable
  a: Array<IOption> = this.Scheme1Service.getCharacters();
  b: Array<IOption> = this.AcountnoService.getCharacters();
  Credit: Array<IOption> = this.A1Service.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable to enable view voucher
  viewVouchers = false;

  //variable for checkbox and radio button 
  isDeposit: boolean = true;

  //object created to get data when row is clicked
  message = {
    TransactionNo: "",
    Scheme: "",
    AccountNo: "",
    Cash: "",
    Transfer: "",
    AcOpenDate: "",
    LastInterestDate: "",
    LedgerBalance: "",
    Deposit: "",
    InterestReceived: "",
    ReceiptNo: "",
    InterestuptoDate: "",
    TransactionAmount: "",
    CreditGLAcNo: "",
    Narration: "",
    TransactionDate: ""
  };

  constructor(private fb: FormBuilder, public Scheme1Service: Scheme1Service, public AcountnoService: AcountnoService, public A1Service: A1Service) { this.createForm(); }

  ngOnInit(): void {

    this.dtExportButtonOptions = {
      ajax: 'fake-data/transaction-entry.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'TransactionNo',
          data: 'TransactionNo'
        },
        {
          title: 'Scheme',
          data: 'Scheme'
        },
        {
          title: 'Account No.',
          data: 'AccountNo'
        },

        {
          title: 'Cash',
          data: 'Cash'
        },
        {
          title: 'Transfer',
          data: 'Transfer'
        },
        {
          title: 'A/c Open Date',
          data: 'AcOpenDate'
        },
        {
          title: 'Last Interest Date',
          data: 'LastInterestDate'
        },
        {
          title: 'Ledger Balance',
          data: 'LedgerBalance'
        },
        {
          title: 'Deposit',
          data: 'Deposit'
        },
        {
          title: 'Interest Received',
          data: 'InterestReceived'
        },
        {
          title: 'Receipt No.',
          data: 'ReceiptNo'
        },
        {
          title: 'Interest upto Date',
          data: 'InterestuptoDate'
        },
        {
          title: 'Transaction Amount',
          data: 'TransactionAmount'
        },
        {
          title: 'Credit GL A/c No',
          data: 'CreditGLAcNo'
        },
        {
          title: 'Narration',
          data: 'Narration'
        },
        {
          title: 'Transaction Date',
          data: 'TransactionDate'
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

    this.dataSub = this.Scheme1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.AcountnoService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.A1Service.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
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
      TransactionNo: ['',],
      Date: ['',],
      AcOpenDate: [''],
      LastInterestDate: [''],
      Scheme: ['', [Validators.required]],
      AccountNo: ['', [Validators.required]],
      LedgerBalance: ['',],
      InterestuptoDate: [''],
      ReceiptNo: ['',],
      TransactionAmount: ['', [Validators.pattern, Validators.required]],
      CreditGLAcNo: ['',],
      Narration: ['', [Validators.pattern],],
      AccountName: ['',],
      TotalDebit: ['',],
      Credit: ['',],
      CashAmount: ['',],
    });
  }

  submit() {
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }
  //function executes when edit button clicked
  editClickHandler(info: any): void {
    this.message.Scheme = info.Scheme;
    this.message.AccountNo = info.AccountNo;
    this.message.ReceiptNo = info.ReceiptNo;
    this.message.AcOpenDate = info.AcOpenDate;
    this.message.TransactionNo = info.TransactionNo;
    this.message.Cash = info.Cash;
    this.message.Transfer = info.Transfer;
    this.message.LastInterestDate = info.LastInterestDate;
    this.message.LedgerBalance = info.LedgerBalance;
    this.message.Deposit = info.Deposit;
    this.message.InterestReceived = info.InterestReceived;
    this.message.InterestuptoDate = info.InterestuptoDate;
    this.message.TransactionAmount = info.TransactionAmount;
    this.message.CreditGLAcNo = info.CreditGLAcNo;
    this.message.Narration = info.Narration;
    this.message.TransactionDate = info.TransactionDate;
    //code for radio button
    if (this.message.Deposit == "Yes") {
      this.isDeposit = true;      //return boolean value and display checked radio button
    }
    else {
      this.isDeposit = false;   //return boolean value and display unchecked radio button
    }
    //return boolean value and toggle add to update button
    this.showButton = false;
    this.updateShow = true;
  }

  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function execute when delete button clicked
  delClickHandler(info: any): void {
    this.message.TransactionNo = info.TransactionNo;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Transaction No." + this.message.TransactionNo + "  data",
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
          'Your data  is safe.',
          'error'
        )
      }
    })
  }

  // function to view vouchers data
  viewVouchersData(val) {
    if (val == 1) {
      this.viewVouchers = true;
    }
  }
}
