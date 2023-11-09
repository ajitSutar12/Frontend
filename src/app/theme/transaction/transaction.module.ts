import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';

// import { CashCreditAcRenewalComponent } from './cash-credit-ac-renewal/cash-credit-ac-renewal.component';
// import { ReconciliationEntryComponent } from './reconciliation-entry/reconciliation-entry.component';
// import { DeadStockTransactionComponent } from './dead-stock-transaction/dead-stock-transaction.component';
// import { DeadStockPurchaseComponent } from './dead-stock-purchase/dead-stock-purchase.component';
// import { TermDepositReceiptPrintingComponent } from './term-deposit-receipt-printing/term-deposit-receipt-printing.component';
// import { PassbookPrintingComponent } from './passbook-printing/passbook-printing.component';
// import { CashDenominationComponent } from './cash-denomination/cash-denomination.component';
// import { TermDepositAccountClosingComponent } from './term-deposit-account-closing/term-deposit-account-closing.component';
//  import { ShareTransactionsComponent } from './share-transactions/share-transactions.component';
// import { DividendPayComponent } from './dividend-pay/dividend-pay.component';
// import { PigmyChartEntryComponent } from './pigmy-chart-entry/pigmy-chart-entry.component';
// import { DDTransactionComponent } from './d-dtransaction/d-dtransaction.component';
// import { MemberLoanComponent } from './member-loan/member-loan.component';
// import { RecoveryComponent } from './recovery/recovery.component';
// import { MemberTransferComponent } from './member-transfer/member-transfer.component';
// import { MemberDAPDTComponent } from './member-dapdt/member-dapdt.component';
// import { MultiVoucherComponent } from './multi-voucher/multi-voucher.component';
// import { VoucherEntryComponent } from './voucher-entry/voucher-entry.component';  

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
// import { VoucherPrintingComponent } from './voucher-printing/voucher-printing.component';
// import { GoldSilverReceiptPrintComponent } from './gold-silver-receipt-print/gold-silver-receipt-print.component';


// import { CashierComponent } from './cashier/cashier.component';
//  import { LockerComponent } from './locker/locker.component';
// import { PigmyAccountClosingComponent } from './Savings/pigmy-account-closing/pigmy-account-closing.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class TransactionModule { }
