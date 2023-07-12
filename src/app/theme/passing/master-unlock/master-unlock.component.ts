import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { MasterUnlockService } from './master-unlock.service'
@Component({
  selector: 'app-master-unlock',
  templateUrl: './master-unlock.component.html',
  styleUrls: ['./master-unlock.component.scss']
})
export class MasterUnlockComponent implements OnInit {
  // Created Form Group
  mySubscription: Subscription
  voucherTrue = false;
  batchvoucherTrue = false;
  multivoucherTrue = false;
  depositclosingvouchersTrue = false;
  savingpigmyclosingTrue = false;
  remittanceadviceTrue = false;
  cashremitanceTrue = false;
  deadstockpurchaseTrue = false;
  deadstocktransactionTrue = false;
  lockeraccloserentTrue = false;
  shareTransactionTrue = false;
  mastersavingTrue = true;
  goldsilverreturnTrue = false;
  termdepositacrenewalTrue = false;
  deprciationProcessTrue = false;
  lockermasterTrue = false;
  shareTransferTrue = false;
  memberCancelTrue = false;
  issueNewShareTrue = false;
  lockerRentTrue = false;
  //count variable
  voucher: any = 0;
  batch_voucher: any = 0;
  multi_voucher: any = 0;
  deposit_closing: any = 0;
  saving_pigmy_closing: any = 0;
  remittance_advice: any = 0;
  cash_remitance: any = 0;
  dead_stock_purchase: any = 0;
  dead_stock_transaction: any = 0;
  gold_silver_return: any = 0;
  locaker_ac_close: any = 0;
  term_deposit_ac_renewal: any = 0;
  lockerMasterCount: any = 0;
  deprciationProcess: any = 0;
  shareTransaction: any = 0;
  shareTransfer: any = 0;
  memberCancel: any = 0;
  issueNewShare: any = 0;
  lockerRent: any = 0;
  dtExportButtonOptions: any = {};
  constructor(private _service: MasterUnlockService) { }

  ngOnInit(): void {
    this.mySubscription = interval(100).subscribe((x => {
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let branchCode = result.branch.id;
      this._service.getCountOfPassing(branchCode).subscribe(data => {
        this.deposit_closing = data.depositClosingTran
        this.cash_remitance = data.cashRenewCount
        this.dead_stock_purchase = data.deadstockPurchase
        this.dead_stock_transaction = data.deadstockTransaction
        this.saving_pigmy_closing = data.savingPigmyClosingTran
        this.term_deposit_ac_renewal = data.termDepositRenewCount
        this.voucher = data.voucherPassing
        this.batch_voucher = data.batchVoucherPassing
        this.multi_voucher = data.multiVoucherPassing
        this.shareTransaction = data.shareTransaction
        this.lockerMasterCount = data.lockerMasterCount
        this.memberCancel = data.memberCancel
        this.issueNewShare = data.issueshare
        this.lockerRent = data.lockerrentPass
        this.shareTransfer = data.shareTransfer
        this.gold_silver_return = data.goldsilver
        this.deprciationProcess = data.deadstockDeprication
      })
    }));
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

  OpenLink(val) {
    if (val == 12) {
      this.mastersavingTrue = true;
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.shareTransactionTrue = false
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
      this.lockeraccloserentTrue = false;
    }
    else if (val == 21) {
      this.voucherTrue = true;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 22) {
      this.voucherTrue = false;
      this.batchvoucherTrue = true;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 23) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = true;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 24) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = true;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 25) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = true;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false
      this.lockerRentTrue = false;
    }
    else if (val == 26) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = true;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 27) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = true;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 28) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = true;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 29) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = true;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 30) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = true;
      this.deprciationProcessTrue = false;
      this.termdepositacrenewalTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 31) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.deprciationProcessTrue = false;
      this.termdepositacrenewalTrue = true;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 32) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = true;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.deprciationProcessTrue = false;
      this.termdepositacrenewalTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 33) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = true
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.deprciationProcessTrue = false;
      this.termdepositacrenewalTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 34) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.deprciationProcessTrue = false;
      this.termdepositacrenewalTrue = false;
      this.shareTransferTrue = true;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 35) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.deprciationProcessTrue = false;
      this.termdepositacrenewalTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = true;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;
    }
    else if (val == 36) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.deprciationProcessTrue = false;
      this.termdepositacrenewalTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = true;
      this.lockerRentTrue = false;
    }
    else if (val == 37) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false
      this.mastersavingTrue = false;
      this.goldsilverreturnTrue = false;
      this.deprciationProcessTrue = false;
      this.termdepositacrenewalTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = true;
    }
  }
}
