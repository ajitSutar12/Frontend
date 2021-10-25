import { Component, OnInit } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { TransactionCashModeService } from '../../../shared/elements/transaction-cash-mode.service';
import { TransactionTransferModeService } from '../../../shared/elements/transaction-transfer-mode.service';
import { SchemeTypeService } from '../../../shared/elements/scheme-type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-voucher-entry',
  templateUrl: './voucher-entry.component.html',
  styleUrls: ['./voucher-entry.component.scss']
})
export class VoucherEntryComponent implements OnInit {
  dtExportButtonOptions: any = {}; //Datatable variable

  //variables for  add and update button
  showButton: boolean = true;
  updateShow: boolean = false;

  //variable for checkbox and radio button 
  isCash: boolean = true;

  //Transaction Mode
  titleForSchemeType: boolean = false;
  transactionCashMode: boolean = true;
  transactionTransferMode: boolean = false;

  //Select option for Transaction mode, scheme type 
  transactionCashModeOption: Array<IOption> = this.TransactionCashModeService.getCharacters();
  transactionTransferModeOption: Array<IOption> = this.TransactionTransferModeService.getCharacters();
  schemeTypeOption: Array<IOption> = this.SchemeTypeService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;
  private dataSub: Subscription = null;

  //object created to get data when row is clicked
  message = {
    VoucherNo: "",
    Cash: "",
    Transfer: "",
    VoucherDate: "",
    BranchCode: "",
    SchemeType: "",
    SchemeCode: "",
    AccountNumber: "",
    PANNumber: "",
    TransactionMode: "",
    SlipNumber: "",
    VoucherAmount: "",
    TotalAmount: "",
    Particulars: "",
    SanctionOverDraft: "",
    TemparoryOverDraft: "",
    TokenNo: "",
    DayOpeningBalance: "",
    Passed: "",
    Unpassed: "",
    ClearedBalance: "",
    AfterthisVoucher: ""
  };

  //function executes when edit button clicked
  editClickHandler(info: any): void {
    this.message.VoucherNo = info.VoucherNo;
    this.message.Cash = info.Cash;
    this.message.Transfer = info.Transfer;
    this.message.VoucherDate = info.VoucherDate;
    this.message.BranchCode = info.BranchCode;
    this.message.SchemeType = info.SchemeType;
    this.message.SchemeCode = info.SchemeCode;
    this.message.AccountNumber = info.AccountNumber;
    this.message.PANNumber = info.PANNumber;
    this.message.TransactionMode = info.TransactionMode;
    this.message.SlipNumber = info.SlipNumber;
    this.message.VoucherAmount = info.VoucherAmount;
    this.message.TotalAmount = info.TotalAmount;
    this.message.Particulars = info.Particulars;
    this.message.SanctionOverDraft = info.SanctionOverDraft;
    this.message.TemparoryOverDraft = info.TemparoryOverDraft;
    this.message.TokenNo = info.TokenNo;;
    this.message.DayOpeningBalance = info.DayOpeningBalance;
    this.message.Passed = info.Passed;
    this.message.Unpassed = info.Unpassed;
    this.message.ClearedBalance = info.ClearedBalance;
    this.message.AfterthisVoucher = info.AfterthisVoucher;
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

  constructor(public TransactionCashModeService: TransactionCashModeService, public TransactionTransferModeService: TransactionTransferModeService, public SchemeTypeService: SchemeTypeService) { }

  ngOnInit(): void {

    this.dtExportButtonOptions = {
      ajax: 'fake-data/voucher-entry.json',
      columns: [
        {
          title: 'Action',
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
          title: 'Voucher No',
          data: 'VoucherNo'
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
          title: 'Voucher Date',
          data: 'VoucherDate'
        },
        {
          title: 'Branch Code',
          data: 'BranchCode'
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
          title: 'Account Number',
          data: 'AccountNumber'
        },
        {
          title: 'PAN Number',
          data: 'PANNumber'
        },
        {
          title: 'Transaction Mode',
          data: 'TransactionMode'
        },
        {
          title: 'Slip Number',
          data: 'SlipNumber'
        },
        {
          title: 'Voucher Amount',
          data: 'VoucherAmount'
        },
        {
          title: 'Total Amount',
          data: 'TotalAmount'
        },
        {
          title: 'Particulars',
          data: 'Particulars'
        },
        {
          title: 'Sanction Over Draft',
          data: 'SanctionOverDraft'
        },
        {
          title: 'Temparory Over Draft',
          data: 'TemparoryOverDraft'
        },
        {
          title: 'Token No.',
          data: 'TokenNo'
        },
        {
          title: 'Day Opening Balance',
          data: 'DayOpeningBalance'
        },
        {
          title: 'Passed',
          data: 'Passed'
        },
        {
          title: 'Unpassed',
          data: 'Unpassed'
        },
        {
          title: 'Cleared Balance',
          data: 'ClearedBalance'
        },
        {
          title: 'After this Voucher',
          data: 'AfterthisVoucher'
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
          self.delClickHandler();
        });
        return row;
      }
    };
    this.runTimer();
    this.dataSub = this.TransactionCashModeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.TransactionTransferModeService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
    this.dataSub = this.SchemeTypeService.loadCharacters().subscribe((options) => {
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
  cashMode() {
    this.transactionCashMode = true;
    this.transactionTransferMode = false;
  }
  transferMode() {
    this.transactionCashMode = false;
    this.transactionTransferMode = true;
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
  isDepositAmount: boolean = false;

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
    else if (this.schemeTypeSelected == 'CA' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'DC' || this.transactionModeSelected == 'CTC')) {
      this.isToken = false;
    }
    else if (this.schemeTypeSelected == 'PG' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'CIOA')) {
      this.isOtherExpenses = true;
      this.isAmountDetails = true;
      this.isToken = false;
    }
    else if (this.schemeTypeSelected == 'PG' && (this.transactionModeSelected == 'WP' || this.transactionModeSelected == 'WC' || this.transactionModeSelected == 'DTC')) {
      this.isOtherExpenses = true;
      this.isAmountDetails = true;
      this.isCheque = true;
    }
    else if (this.schemeTypeSelected == 'PG' && this.transactionModeSelected == 'DT') {
      this.isOtherExpenses = true;
      this.isAmountDetails = true;
      this.isCheque = true;
      this.isPanNo = false;
    }
    else if (this.schemeTypeSelected == 'IV' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'DC' || this.transactionModeSelected == 'CTC')) {
      this.isOtherExpenses = true;
      this.isAmountDetails = true;
      this.jointAc = false;
      this.dormantAc = false;
      this.isPanNo = false;
      this.isToken = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
    }
    else if (this.schemeTypeSelected == 'IV' && this.transactionModeSelected == 'WP') {
      this.isCheque = true;
      this.isOtherExpenses = true;
      this.isAmountDetails = true;
      this.jointAc = false;
      this.dormantAc = false;
      this.isPanNo = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
    }
    else if (this.schemeTypeSelected == 'IV' && this.transactionModeSelected == 'DT') {
      this.isOverdueAmount = true;
      this.isCheque = true;
      this.isOtherExpenses = true;
      this.isAmountDetails = true;
      this.jointAc = false;
      this.dormantAc = false;
      this.isToken = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
    }
    else if (this.schemeTypeSelected == 'IV' && this.transactionModeSelected == 'DIA') {
      this.isAmountDetails = true;
      this.jointAc = false;
      this.dormantAc = false;
      this.isPanNo = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
      this.voucherAmount = false;
      this.totalAmount = false;
    }
    else if (this.schemeTypeSelected == 'TD' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'CT')) {
      this.isOtherExpenses = true;
      this.isAmountDetails = true;
      this.isDepositAmount = true;
      this.isToken = false;
    }
    else if (this.schemeTypeSelected == 'TD' && (this.transactionModeSelected == 'WP' || this.transactionModeSelected == 'DT' || this.transactionModeSelected == 'WC')) {
      this.isCheque = true;
      this.isOtherExpenses = true;
      this.isAmountDetails = true;
      this.isDepositAmount = true;
    }
    else if (this.schemeTypeSelected == 'TD' && this.transactionModeSelected == 'DTC') {
      this.voucherAmount = false;
    }
    else if (this.schemeTypeSelected == 'TD' && (this.transactionModeSelected == 'WI' || this.transactionModeSelected == 'DTI')) {
      this.isOtherExpenses = true;
      this.isAmountDetails = true;
      this.isDepositAmount = true;
      this.voucherAmount = false;
    }
    else if (this.schemeTypeSelected == 'TD' && this.transactionModeSelected == 'CIOA') {
      this.isOtherExpenses = true;
      this.isAmountDetails = true;
      this.isDepositAmount = true;
      this.isToken = false;
    }
    else if (this.schemeTypeSelected == 'GL' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'CT')) {
      this.jointAc = false;
      this.dormantAc = false;
      this.isPanNo = false;
      this.isToken = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
    }
    else if (this.schemeTypeSelected == 'GL' && (this.transactionModeSelected == 'WP' || this.transactionModeSelected == 'DT')) {
      this.isCheque = true;
      this.jointAc = false;
      this.dormantAc = false;
      this.isPanNo = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
    }
    else if (this.schemeTypeSelected == 'LK' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'CT')) {
      this.jointAc = false;
      this.dormantAc = false;
      this.isPanNo = false;
      this.isToken = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
    }
    else if (this.schemeTypeSelected == 'LK' && (this.transactionModeSelected == 'WC' || this.transactionModeSelected == 'DTC')) {
      this.jointAc = false;
      this.dormantAc = false;
      this.isPanNo = false;
      this.isToken = false;
      this.isSanctionOverDraft = false;
      this.isTemparoryOverDraft = false;
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
      this.titleForSchemeType = false;
      this.isDepositAmount = false;
    }
  }
}
