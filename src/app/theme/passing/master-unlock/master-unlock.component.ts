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
  mastersharesTrue = false;
  masteranamatTrue = false;
  mastersavingTrue = true;
  mastercurrentTrue = false;
  masterdepositsTrue = false;
  masterinvestmentsTrue = false;
  masterpigmyagentTrue = false;
  masterpigmyTrue = false;
  mastercashcreditTrue = false;
  masterloanTrue = false;
  masterdisputeloanTrue = false;
  masterlockerdepositTrue = false;
  masterdeadstockTrue = false;
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
  share_master: any = 0;
  anamat_master: any = 0;
  saving_master: any = 0;
  current_master: any = 0;
  deposit_master: any = 0;
  investment_master: any = 0;
  pigmy_agent_master: any = 0;
  pigmy_master: any = 0;
  cash_credit_master: any = 0;
  loan_master: any = 0;
  dispute_loan_master: any = 0;
  locker_master: any = 0;
  dead_stock_master: any = 0;
  term_deposit_ac_renewal: any = 0;
  lockerMasterCount: any = 0;
  // deprciationProcess: any = 0;
  shareTransaction: any = 0;
  shareTransfer: any = 0;
  memberCancel: any = 0;
  issueNewShare: any = 0;
  lockerRent: any = 0;


  dtExportButtonOptions: any = {};
  constructor(private _service: MasterUnlockService) { }

  ngOnInit(): void {
    this.mySubscription = interval(1000).subscribe((x => {
      let data: any = localStorage.getItem('user');
      let result = JSON.parse(data);
      let branchCode = result.branch.id;
      this._service.getCountOfPassing(branchCode).subscribe(data => {
        this.saving_master = data.savingcount;
        this.current_master = data.currentcount;
        this.pigmy_agent_master = data.pigmyAgentCount;
        this.share_master = data.shareCount;
        this.anamat_master = data.anamatCount;
        this.deposit_master = data.termdepositcount;
        this.investment_master = data.investmentCount;
        this.pigmy_master = data.pigmyCount;
        this.cash_credit_master = data.cashCount;
        this.loan_master = data.loanCount;
        this.deposit_closing = data.depositClosingTran
        this.cash_remitance = data.cashRenewCount
        this.dead_stock_purchase = data.deadstockPurchase
        this.dead_stock_transaction = data.deadstockTransaction
        this.saving_pigmy_closing = data.savingPigmyClosingTran
        this.term_deposit_ac_renewal = data.termDepositRenewCount
        this.voucher = data.voucherPassing
        this.batch_voucher = data.batchVoucherPassing
        this.multi_voucher = data.multiVoucherPassing
        this.dead_stock_master = data.deadstockmasterCount
        this.shareTransaction = data.shareTransaction
        this.lockerMasterCount = data.lockerMasterCount
        this.shareTransfer = 0
        this.memberCancel = 0
        this.issueNewShare = 0
        this.lockerRent = 0
      })
    }));
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

  OpenLink(val) {
    if (val == 10) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      // this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      // this.lockeraccloserentTrue = false;
      this.shareTransactionTrue = false;
      this.mastersharesTrue = true;
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      // this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 11) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      // this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      // this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = true;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      // this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 12) {
      this.mastersavingTrue = true;
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      // this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      // this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;

      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      // this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 13) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      // this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      // this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = true;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      // this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 14) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      // this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      // this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = true;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      // this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 15) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      // this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      // this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = true;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      // this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 16) {
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = true;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      // this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 17) {
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = true;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      // this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 18) {
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = true;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      // this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 19) {
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = true;
      this.masterdisputeloanTrue = false;
      // this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 20) {
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      // this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = true;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.deprciationProcessTrue = false;
      this.termdepositacrenewalTrue = true;
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = true
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.deprciationProcessTrue = false;
      this.termdepositacrenewalTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 9) {
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
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
      this.goldsilverreturnTrue = false;
      this.termdepositacrenewalTrue = false;
      this.deprciationProcessTrue = false;
      this.shareTransferTrue = false;
      this.memberCancelTrue = false;
      this.issueNewShareTrue = false;
      this.lockerRentTrue = false;

    }
    else if (val == 34) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.multivoucherTrue = false;
      // this.lockermasterTrue = true;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
      // this.lockermasterTrue = true;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
      // this.lockermasterTrue = true;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
      // this.lockermasterTrue = true;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
      this.shareTransactionTrue = false
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = false;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
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
