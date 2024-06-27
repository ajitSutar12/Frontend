import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Transaction',
      status: false
    },
    children: [
      {
        path: 'voucherEntry',
        loadChildren: () => import('./voucher-entry/voucher-entry.module').then(m => m.VoucherEntryModule)
      },
      {
        path: 'multiVoucher',
        loadChildren: () => import('./multi-voucher/multi-voucher.module').then(m => m.MultiVoucherModule)
      },
      {
        path: 'batchVoucher',
        loadChildren: () => import('./batch-voucher/batch-voucher.module').then(m => m.BatchVoucherModule)
      },
      {
        path: 'memberDAPDT',
        loadChildren: () => import('./member-dapdt/member-dapdt.module').then(m => m.MemberDAPDTModule)
      },
      {
        path: 'memberTransfer',
        loadChildren: () => import('./member-transfer/member-transfer.module').then(m => m.MemberTransferModule)
      },
      {
        path: 'recovery',
        loadChildren: () => import('./recovery/recovery.module').then(m => m.RecoveryModule)
      },
      {
        path: 'memberLoan',
        loadChildren: () => import('./member-loan/member-loan.module').then(m => m.MemberLoanModule)
      },
      {
        path: 'dDTransaction',
        loadChildren: () => import('./d-dtransaction/d-dtransaction.module').then(m => m.DDTransactionModule)
      },
      {
        path: 'pigmyChartEntry',
        loadChildren: () => import('./pigmy-chart-entry/pigmy-chart-entry.module').then(m => m.PigmyChartEntryModule)
      },
      {
        path: 'dividendPay',
        loadChildren: () => import('./dividend-pay/dividend-pay.module').then(m => m.DividendPayModule)
      },
      {
        path: 'cashCreditAcRenewal',
        loadChildren: () => import('./cash-credit-ac-renewal/cash-credit-ac-renewal.module').then(m => m.CashCreditAcRenewalModule)
      },
      {
        path: 'shareTransactions',
        loadChildren: () => import('./share-transactions/share-transactions.module').then(m => m.ShareTransactionsModule)
      },
      {
        path: 'termDepositAccountClosing',
        loadChildren: () => import('./term-deposit-account-closing/term-deposit-account-closing.module').then(m => m.TermDepositAccountClosingModule)
      },
      {
        path: 'TermDepositeAcRenewal',
        loadChildren: () => import('./term-deposite-ac-renewal/term-deposite-ac-renewal.module').then(m => m.TermDepositeAcRenewalModule)
      },
      {
        path: 'cashDenomination',
        loadChildren: () => import('./cash-denomination/cash-denomination.module').then(m => m.CashDenominationModule)
      },
      // {
      //   path: 'passbookPrinting',
      //   loadChildren: () => import('./passbook-printing/passbook-printing.module').then(m => m.PassbookPrintingModule)
      // },
      // {
      //   path: 'termDepositReceiptPrinting',
      //   loadChildren: () => import('./term-deposit-receipt-printing/term-deposit-receipt-printing.module').then(m => m.TermDepositReceiptPrintingModule)
      // },
      {
        path: 'deadStockPurchase',
        loadChildren: () => import('./dead-stock-purchase/dead-stock-purchase.module').then(m => m.DeadStockPurchaseModule)
      },
      {
        path: 'deadStockTransaction',
        loadChildren: () => import('./dead-stock-transaction/dead-stock-transaction.module').then(m => m.DeadStockTransactionModule)
      },
      {
        path: 'reconciliationEntry',
        loadChildren: () => import('./reconciliation-entry/reconciliation-entry.module').then(m => m.ReconciliationEntryModule)
      },
      {
        path: 'savingspigmyaccountclosing',
        loadChildren: () => import('./savings-pigmy-account-closing/savings-Pigmy-Account-Closing.module').then(m => m.SavingsPigmyAccountClosingModule)
      },
      {
        path: 'goldsilverreturnentry',
        loadChildren: () => import('./gold-silver-return-entry/gold-silver-return-entry.module').then(m => m.GoldSilverReturnEntryModule)
      },
      {
        path: 'locker',
        loadChildren: () => import('./locker/locker.module').then(m => m.LockerModule)
      },
      {
        path: 'cashier',
        loadChildren: () => import('./cashier/cashier.module').then(m =>m.CashierModule)
      },
      // {
      //   path: 'voucherPrint',
      //   loadChildren: () => import('./voucher-printing/voucher-printing.module').then(m =>m.VoucherPrintingModule)
      // },
      {
        path: 'cashRecoveryTransaction',
        loadChildren: () => import('./cash-recovery-transaction/cash-recovery-transaction.module').then(m =>m.CashRecoveryTransactionModule)
      },
      {
        path: 'consolidationTransaction',
        loadChildren: () => import('./consolidation-transaction/consolidation-transaction.module').then(m => m.ConsolidationTransactionModule)
      },
      {
        path: 'inwardRegister',
        loadChildren: () => import('./inward-register/inward-register.module').then(m => m.InwardRegisterModule)
      },
      // {
      //   path: 'goldSilverReceipt',
      //   loadChildren: () => import('./gold-silver-receipt-print/gold-silver-receipt-print.module').then(m => m.GoldSilverReceiptPrintModule)
      // },
      {
        path: 'ddtransaction',
        loadChildren: () => import('./dd-transaction/dd-transaction.module').then(m => m.DdTransactionModule)
      },
      {
        path: 'investmentAccountRenewal',
        loadChildren: () => import('./investment-ac-renewal/investment-ac-renewal.module').then(m => m.InvestmentAcRenewalModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
