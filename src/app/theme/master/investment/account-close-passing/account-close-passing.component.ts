import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { AcountnoService } from '../../../../shared/elements/acountno.service';
import { A1Service } from '../../../../shared/elements/a1.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-account-close-passing',
  templateUrl: './account-close-passing.component.html',
  styleUrls: ['./account-close-passing.component.scss']
})

export class AccountClosePassingComponent implements OnInit {
  angForm: FormGroup;

  dtExportButtonOptions: any = {}; //Datatable variable

  a: Array<IOption> = this.Scheme1Service.getCharacters();
  b: Array<IOption> = this.AcountnoService.getCharacters();
  DebitScheme: Array<IOption> = this.A1Service.getCharacters();
  Debit: Array<IOption> = this.A1Service.getCharacters();

  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  cash1True: boolean = false;
  transfer1True: boolean = true;

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable to enable view voucher
  viewVouchers = false;

  //variable for checkbox and radio button 
  isCash: boolean = false;

  //object created to get data when row is clicked
  message = {
    TransactionNo: "",
    TransactionDate: "",
    Scheme: "",
    AccountNo: "",
    Cash: "",
    Transfer: "",
    AcOpenDate: "",
    LastInterestDate: "",
    LedgerBalance: "",
    InterestDays: "",
    ReceiptNo: "",
    InterestuptoDate: "",
    IntersetAmount: "",
    ClosingAmount: "",
    NetAmount: "",
    DebitScheme: "",
    DebitGLAcNo: "",
    Narration: ""
  };

  constructor(private fb: FormBuilder, public Scheme1Service: Scheme1Service, public AcountnoService: AcountnoService, public A1Service: A1Service) { this.createForm(); }

  ngOnInit(): void {

    this.dtExportButtonOptions = {
      ajax: 'fake-data/account-close-passing.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Transaction Date',
          data: 'TransactionDate'
        },
        {
          title: 'Transaction No',
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
          title: 'Interest Days',
          data: 'InterestDays'
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
          title: 'Interset Amount',
          data: 'IntersetAmount'
        },
        {
          title: 'Closing Amount',
          data: 'ClosingAmount'
        },
        {
          title: 'Net Amount',
          data: 'NetAmount'
        },
        {
          title: 'Debit Scheme',
          data: 'DebitScheme'
        },
        {
          title: 'Debit GL A/c No',
          data: 'DebitGLAcNo'
        },
        {
          title: 'Narration',
          data: 'Narration'
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
      TransactionDate: ['',],
      AcOpenDate: [''],
      InterestuptoDate: [''],
      Scheme: ['', [Validators.required]],
      AccountNo: ['', [Validators.required]],
      LedgerBalance: ['',],
      InterestDays: ['',],
      ReceiptNo: ['',],
      IntersetAmount: ['', [Validators.pattern]],
      ClosingAmount: ['', [Validators.pattern, Validators.required]],
      NetAmount: ['',],
      DebitScheme: [''],
      DebitGLAcNo: ['',],
      Narration: [''],
      AccountName: ['',],
      TotalDebit: ['',],
      Credit: ['',],
      CashAmount: ['',],
      LastInterestDate: ['']
    });
  }

  submit() {
    console.log(this.angForm.valid);
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    }
  }
  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }

  //function executes when edit button clicked
  editClickHandler(info: any): void {
    this.message.TransactionDate = info.TransactionDate;
    this.message.Scheme = info.Scheme;
    this.message.AccountNo = info.AccountNo;
    this.message.ReceiptNo = info.ReceiptNo;
    this.message.AcOpenDate = info.AcOpenDate;
    this.message.TransactionNo = info.TransactionNo;
    this.message.Cash = info.Cash;
    this.message.Transfer = info.Transfer;
    this.message.LastInterestDate = info.LastInterestDate;
    this.message.LedgerBalance = info.LedgerBalance;
    this.message.InterestDays = info.InterestDays;
    this.message.InterestuptoDate = info.InterestuptoDate;
    this.message.IntersetAmount = info.IntersetAmount;
    this.message.ClosingAmount = info.ClosingAmount;
    this.message.NetAmount = info.NetAmount;
    this.message.DebitScheme = info.DebitScheme;
    this.message.DebitGLAcNo = info.DebitGLAcNo;
    this.message.Narration = info.Narration;
    //code for radio button
    if (this.message.Cash == "Yes") {
      this.isCash = true;      //return boolean value and display checked radio button
    }
    else {
      this.isCash = false;   //return boolean value and display unchecked radio button
    }
    //return boolean value and toggle add to update button
    this.showButton = false;
    this.updateShow = true;
  }

  //function execute when delete button clicked
  delClickHandler(info: any): void {
    this.message.TransactionDate = info.TransactionDate;
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Transaction Date." + this.message.TransactionDate + "  data",
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

  // function to view vouchers data
  viewVouchersData(val) {
    if (val == 1) {
      this.viewVouchers = true;
    }
  }

  OpenLink(val) {
    // 
    if (val == 1) {
      this.cash1True = true;
      this.transfer1True = false;
    }
    if (val == 2) {
      this.cash1True = false;
      this.transfer1True = true;
    }

  }
}
