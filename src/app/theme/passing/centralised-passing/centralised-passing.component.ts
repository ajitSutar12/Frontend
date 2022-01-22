import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionServiceModule } from 'ng-connection-service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-centralised-passing',
  templateUrl: './centralised-passing.component.html',
  styleUrls: ['./centralised-passing.component.scss']
})
export class CentralisedPassingComponent implements OnInit {
  mySubscription: Subscription
  voucherTrue = true;
  batchvoucherTrue = false;
  depositclosingvouchersTrue = false;
  savingpigmyclosingTrue = false;
  remittanceadviceTrue = false;
  cashremitanceTrue = false;
  deadstockpurchaseTrue = false;
  deadstocktransactionTrue = false;
  lockeraccloserentTrue = false;
  mastersharesTrue = false;
  masteranamatTrue = false;
  mastersavingTrue = false;
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


  //count variable
  voucher : any = 0;
  batch_voucher : any = 0;
  deposit_closing : any = 0;
  saving_pigmy_closing : any = 0;
  remittance_advice:any = 0;
  cash_remitance: any =0;
  dead_stock_purchase: any=0;
  dead_stock_transaction: any = 0;
  locaker_ac_close: any = 0;
  share_master: any = 0;
  anamat_master: any = 0;
  saving_master:any = 12;
  current_master:any =0;
  deposit_master:any =0;
  investment_master:any=0;
  pigmy_agent_master:any=0;
  pigmy_master:any=0;
  cash_credit_master:any=0;
  loan_master:any=0;
  dispute_loan_master:any=0;
  locker_master:any=0;
  dead_stock_master:any=0;

  constructor(private_router: Router) {
  }
  ngOnInit(): void {
    this.mySubscription= interval(10000).subscribe((x =>{
        console.log('this function is working');
    }));
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

  OpenLink(val) {
    // 
    if (val == 1) {
      this.voucherTrue = true;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
    }
    if (val == 2) {
      this.voucherTrue = false;
      this.batchvoucherTrue = true;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
    }
    if (val == 3) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = true;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
    }
    if (val == 4) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = true;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
    }
    if (val == 5) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = true;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
    }
    if (val == 6) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = true;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
    }
    if (val == 7) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = true;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
    }
    if (val == 8) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = true;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
    }
    if (val == 9) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = true;
      this.mastersharesTrue = false;
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
    }
    if (val == 10) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
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
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
    }
    if (val == 11) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
    }
    if (val == 12) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
      this.masteranamatTrue = false;
      this.mastersavingTrue = true;
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
    }
    if (val == 13) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
    }
    if (val == 14) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
    }
    if (val == 15) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
    }
    if (val == 16) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
    }
    if (val == 17) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
    }
    if (val == 18) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
    }
    if (val == 19) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
    }
    if (val == 20) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
      this.masteranamatTrue = false;
      this.mastersavingTrue = false;
      this.mastercurrentTrue = false;
      this.masterdepositsTrue = false;
      this.masterinvestmentsTrue = false;
      this.masterpigmyagentTrue = false;
      this.masterpigmyTrue = false;
      this.mastercashcreditTrue = false;
      this.masterloanTrue = false;
      this.masterdisputeloanTrue = true;
      this.masterlockerdepositTrue = false;
      this.masterdeadstockTrue = false;
    }
    if (val == 21) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
      this.masterlockerdepositTrue = true;
      this.masterdeadstockTrue = false;
    }
    if (val == 22) {
      this.voucherTrue = false;
      this.batchvoucherTrue = false;
      this.depositclosingvouchersTrue = false;
      this.savingpigmyclosingTrue = false;
      this.remittanceadviceTrue = false;
      this.cashremitanceTrue = false;
      this.deadstockpurchaseTrue = false;
      this.deadstocktransactionTrue = false;
      this.lockeraccloserentTrue = false;
      this.mastersharesTrue = false;
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
      this.masterdeadstockTrue = true;
    }
  }

}
