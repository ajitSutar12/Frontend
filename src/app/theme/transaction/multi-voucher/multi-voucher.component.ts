import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { SchemeTypeService } from '../../../shared/elements/scheme-type.service';
import { SchemeCodeService } from '../../../shared/elements/scheme-code.service';
import { AgentCodeService } from '../../../shared/elements/agent-code.service';
import { TransactionModeService } from '../../../shared/elements/transaction-mode.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-multi-voucher',
  templateUrl: './multi-voucher.component.html',
  styleUrls: ['./multi-voucher.component.scss'],
  
})
export class MultiVoucherComponent implements OnInit {
  dtExportButtonOptions: any = {};
  SchemeTypeOption: Array<IOption> = this.SchemeTypeService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  private dataSub: Subscription = null;

  autocompleteItems = ['AG', 'CA', 'CC', 'DS', 'GS', 'GL', 'IV', 'LN', 'PG', 'SB', 'SH', 'TD'];
  autocompleteItemsAsObjects = [
    { value: 'AG', id: 'Pigmy Agent(AG)' },
    { value: 'CA', id: 'Current Deposit(CA)' },
    { value: 'CC', id: 'Cash Credit(CC)' },
    { value: 'DS', id: 'Dispute Loan(DS)' },
    { value: 'GS', id: 'Anamat Account(GS)' },
    { value: 'GL', id: 'General Ledger(GL)' },
    { value: 'IV', id: 'Investment Account(IV)' },
    { value: 'LN', id: 'Term Loan(LN)' },
    { value: 'PG', id: 'Pigmy Deposit(PG)' },
    { value: 'SB', id: 'Savings Deposit(SB)' },
    { value: 'SH', id: 'Shares(SH)' },
    { value: 'TD', id: 'Term Deposit(TD)' }
];
  
  SchemeCodeOption: Array<IOption> = this.SchemeCodeService.getCharacters();
  selectedOption1 = '3';
  isDisabled1 = true;
  characters1: Array<IOption>;
  selectedCharacter1 = '3';
  timeLeft1 = 5;

  private dataSub1: Subscription = null;

  autocompleteItems1 = ['40100', '40200', '40300', '40400'];
  autocompleteItemsAsObjects1 = [
    { value: '40100', id: 0 },
    { value: '40200', id: 1 },
    { value: '40300', id: 2 },
    { value: '40400', id: 3 },
  ];
  
  AccNoOption: Array<IOption> = this.AgentCodeService.getCharacters();
  selectedOption3 = '3';
  isDisabled3 = true;
  characters3: Array<IOption>;
  selectedCharacter3 = '3';
  timeLeft3 = 5;

  private dataSub3: Subscription = null;

  autocompleteItems3 = ['1', '2', '3', '4'];
  autocompleteItemsAsObjects3 = [
    { value: '1', id: 0 },
    { value: '2', id: 1 },
    { value: '3', id: 2 },
    { value: '4', id: 3 },
  ];


  TransactionModeOption: Array<IOption> = this.TransactionModeService.getCharacters();
  selectedOption4 = '3';
  isDisabled4 = true;
  characters4: Array<IOption>;
  selectedCharacter4 = '3';
  timeLeft4 = 5;

  private dataSub4: Subscription = null;

  autocompleteItems4 = ['0', '1', '2', '3'];
  autocompleteItemsAsObjects4 = [
    { value: '0', id: 'Deposit/Receipts' },
    { value: '1', id: 'Deposit Closing' },
    { value: '2', id: 'Credit Transfer' },
    { value: '3', id: 'Credit Transfer for Closing' }
  ];


  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable for checkbox and radio button 
  isCredit: boolean = true;

  //Transaction Mode
  titleForSchemeType: boolean = false;
  transactioncreditMode: boolean = true;
  transactiondebitMode: boolean = false;

  //Select option for Transaction mode, scheme type 

  //object created to get data when row is clicked
  message = {
    voucherno: "",
    voucherdate: "",
    branchcode: "",
    SchemeType: "",
    SchemeCode: "",
    AccountNumber: "",
    TransactionMode: "",
    voucheramount: "",
    credit: "",
    debit: "",
    chequeno: "",
    particulars: "",
    totaldebitamount: "",
    totalcreditamount: "",
    dayopeningbalance: "",
    passed: "",
    unpassed: "",
    clearedbalance: "",
    afterthisvoucher: ""
  };

  //function executes when edit button clicked
  editClickHandler(info: any): void {
    this.message.voucherno = info.voucherno;
    this.message.voucherdate = info.voucherdate;
    this.message.branchcode = info.branchcode;
    this.message.SchemeType = info.SchemeType;
    this.message.SchemeCode = info.SchemeCode;
    this.message.AccountNumber = info.AccountNumber;
    this.message.TransactionMode = info.TransactionMode;
    this.message.voucheramount = info.voucheramount;
    this.message.credit = info.credit;
    this.message.debit = info.debit;
    this.message.chequeno = info.chequeno;
    this.message.particulars = info.particulars;
    this.message.totaldebitamount = info.totaldebitamount;
    this.message.totalcreditamount = info.totalcreditamount;
    this.message.dayopeningbalance = info.dayopeningbalance;
    this.message.passed = info.passed;
    this.message.unpassed = info.unpassed;;
    this.message.clearedbalance = info.clearedbalance;
    this.message.afterthisvoucher = info.afterthisvoucher;
    
    //code for radio button
    if (this.message.credit == "Yes") {
      this.isCredit = true;      //return boolean value and display checked radio button
    }
    else {
      this.isCredit = false;   //return boolean value and display unchecked radio button
    }
    //return boolean value and toggle add to update button
    this.showButton = false;
    this.updateShow = true;
  }

  //function execute when delete button clicked
  delClickHandler(info:any):void  {
    this.message.voucherno=info.voucherno;
        Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete Voucher No." + this.message.voucherno + "  data", 
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
  
  constructor(public SchemeCodeService : SchemeCodeService, public SchemeTypeService: SchemeTypeService, public AgentCodeService: AgentCodeService, public TransactionModeService: TransactionModeService) { }

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/multi-voucher-entry.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Voucher No',
          data: 'voucherno'
        },
        {
          title: 'Voucher Date',
          data: 'voucherdate'
        },
        {
          title: 'Branch Code',
          data: 'branchcode'
        },
        {
          title: 'Scheme Type',
          data: 'SchemeType'
        },
        {
          title: 'Scheme Code',
          data: 'SchemeCode'
        },
        {
          title: 'Account No.',
          data: 'AccountNumber'
        },

        {
          title: 'Transaction Mode',
          data: 'TransactionMode'
        },
        {
          title: 'Voucher Amount',
          data: 'voucheramount'
        },
        {
          title: 'Credit',
          data: 'credit'
        },
        {
          title: 'Debit',
          data: 'debit'
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
          title: 'Total Debit Amount',
          data: 'totaldebitamount'
        },
        {
          title: 'Total Credit Amount',
          data: 'totalcreditamount'
        },
        {
          title: 'Day Opening Balance',
          data: 'dayopeningbalance'
        },
        {
          title: 'Passed',
          data: 'passed'
        },
        {
          title: 'Unpassed',
          data: 'unpassed'
        },
        {
          title: 'Cleared Balance',
          data: 'clearedbalance'
        },
        {
          title: 'After This Voucher',
          data: 'afterthisvoucher'
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
    this.amountDetails = {
      ajax: 'fake-data/amount-details.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Receipt / Payment Head',
          data: 'ReceiptPaymentHead'
        },
        {
          title: 'Interest Date',
          data: 'InterestDate'
        },
        {
          title: 'Amount',
          data: 'Amount'
        },
        {
          title: 'Balance',
          data: 'Balance'
        },
        {
          title: 'Type',
          data: 'Type'
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
    this.runTimer();
    this.dataSub = this.SchemeCodeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub1 = this.SchemeTypeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub3 = this.AgentCodeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub4 = this.TransactionModeService.loadCharacters().subscribe((options) => {
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
  //function toggle update to add button
  updateData() {
    this.showButton = true;
    this.updateShow = false;
  }
  creditMode() {
    this.transactioncreditMode = true;
    this.transactiondebitMode = false;
  }
  debitMode() {
    this.transactioncreditMode = false;
    this.transactiondebitMode = true;
  }

  public schemeTypeSelected;
  public transactionModeSelected;

  amountDetails: any = {};

  isToken: boolean = true;
  jointAc: boolean = true;
  dormantAc: boolean = true;
  isSanctionOverDraft: boolean = true;
  isTemparoryOverDraft: boolean = true;
  isDrawingPower: boolean = false;
  isOverdueAmount: boolean = false;
  isOtherExpenses: boolean = false;
  sanctionLimit: boolean = false;
  isCheque: boolean = false;
  voucherAmount: boolean = true;
  totalAmount: boolean = true;
  isAmountDetails: boolean = false;
  isPanNo: boolean = true;
  dividendYear: boolean = false;
  isBranch: boolean = false;

  changeFn() {
    this.titleForSchemeType = true;
    if (this.schemeTypeSelected == 'AG' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'DT' || this.transactionModeSelected == 'WP' || this.transactionModeSelected == 'WC' || this.transactionModeSelected == 'DTC')) {
      this.isToken = false;
      this.jointAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
    }
    else if (this.schemeTypeSelected == 'SB' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'DC' || this.transactionModeSelected == 'CTC')) {
      this.isToken = false;
    }
    else if (this.schemeTypeSelected == 'CC' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'DC')) {
      this.jointAc = false;
      this.dormantAc = false;
      this.isToken = false;
      this.isDrawingPower = true;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
      this.sanctionLimit = true;
      this.isAmountDetails = true;
    }
    else if (this.schemeTypeSelected == 'CC' && (this.transactionModeSelected == 'WP' || this.transactionModeSelected == 'WC' || this.transactionModeSelected == 'DTC' || this.transactionModeSelected == 'DIA')) {
      this.jointAc = false;
      this.dormantAc = false;
      this.isToken = true;
      this.isDrawingPower = true;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
      this.sanctionLimit = true;
      this.isAmountDetails = true;
    }
    else if (this.schemeTypeSelected == 'CC' && (this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'CTC' || this.transactionModeSelected == 'DT')) {
      this.jointAc = false;
      this.dormantAc = false;
      this.isToken = false;
      this.isDrawingPower = true;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
      this.sanctionLimit = true;
      this.isAmountDetails = true;
      this.isCheque = true;
    }
    else if (this.schemeTypeSelected == 'DS' && this.transactionModeSelected == 'DR') {
      this.jointAc = false;
      this.dormantAc = false;
      this.isToken = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isAmountDetails = true;
      this.sanctionLimit = true;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
    }
    else if (this.schemeTypeSelected == 'DS' && this.transactionModeSelected == 'CTCBT') {
      this.jointAc = false;
      this.dormantAc = false;
      this.isToken = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isAmountDetails = true;
      this.sanctionLimit = true;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
      this.isBranch = true;
    }
    else if (this.schemeTypeSelected == 'DS' && (this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'CTC' || this.transactionModeSelected == 'DT')) {
      this.jointAc = false;
      this.dormantAc = false;
      this.isToken = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isAmountDetails = true;
      this.sanctionLimit = true;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
      this.isCheque = true;
    }
    else if (this.schemeTypeSelected == 'DS' && this.transactionModeSelected == 'DC') {
      this.jointAc = false;
      this.dormantAc = false;
      this.isToken = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isAmountDetails = true;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
    }
    else if (this.schemeTypeSelected == 'DS' && this.transactionModeSelected == 'WP') {
      this.jointAc = false;
      this.dormantAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isAmountDetails = true;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
      this.isCheque = true;
      this.sanctionLimit = true;
    }
    else if (this.schemeTypeSelected == 'DS' && this.transactionModeSelected == 'DIA') {
      this.jointAc = false;
      this.dormantAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isAmountDetails = true;
      this.isOverdueAmount = true;
      this.sanctionLimit = true;
      this.voucherAmount = false;
      this.totalAmount = false;
    }
    else if (this.schemeTypeSelected == 'LN' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'DC')) {
      this.jointAc = false;
      this.dormantAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isToken = false;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
      this.sanctionLimit = true;
      this.isAmountDetails = true;
    }
    else if (this.schemeTypeSelected == 'LN' && (this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'CTC' || this.transactionModeSelected == 'DT')) {
      this.jointAc = false;
      this.dormantAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isToken = false;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
      this.sanctionLimit = true;
      this.isAmountDetails = true;
      this.isCheque = true;
    }
    else if (this.schemeTypeSelected == 'LN' && this.transactionModeSelected == 'WP') {
      this.jointAc = false;
      this.dormantAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
      this.sanctionLimit = true;
      this.isAmountDetails = true;
      this.isCheque = true;
    }
    else if (this.schemeTypeSelected == 'LN' && this.transactionModeSelected == 'DIA') {
      this.jointAc = false;
      this.dormantAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
      this.sanctionLimit = true;
      this.isAmountDetails = true;
    }
    else if (this.schemeTypeSelected == 'LN' && this.transactionModeSelected == 'CTCBT') {
      this.jointAc = false;
      this.dormantAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isToken = false;
      this.isOverdueAmount = true;
      this.isOtherExpenses = true;
      this.sanctionLimit = true;
      this.isAmountDetails = true;
      this.isBranch = true;
    }
    else if (this.schemeTypeSelected == 'SH' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'CT')) {
      this.jointAc = false;
      this.dormantAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isToken = false;
      this.isPanNo = false;
    }
    else if (this.schemeTypeSelected == 'SH' && (this.transactionModeSelected == 'WP' || this.transactionModeSelected == 'DT')) {
      this.jointAc = false;
      this.dormantAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isPanNo = false;
    }
    else if (this.schemeTypeSelected == 'SH' && this.transactionModeSelected == 'WD') {
      this.jointAc = false;
      this.dormantAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isPanNo = false;
      this.dividendYear = true;
      this.isAmountDetails = true;
    }
    else if (this.schemeTypeSelected == 'SH' && this.transactionModeSelected == 'DTD') {
      this.jointAc = false;
      this.dormantAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isAmountDetails = true;
    }
    else if (this.schemeTypeSelected == 'GS' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'WP' || this.transactionModeSelected == 'DT')) {
      this.jointAc = false;
      this.dormantAc = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.isToken = false;
    }
    else {
      this.isToken = true;
      this.jointAc = true;
      this.dormantAc = true;
      this.isSanctionOverDraft = true;
      this.isTemparoryOverDraft = true;
      this.isDrawingPower = false;
      this.isOverdueAmount = false;
      this.isOtherExpenses = false;
      this.sanctionLimit = false;
      this.isAmountDetails = false;
      this.isCheque = false;
      this.voucherAmount = true;
      this.totalAmount = true;
      this.isPanNo = true;
      this.dividendYear = false;
      this.isBranch = false;
    }
  }
}
