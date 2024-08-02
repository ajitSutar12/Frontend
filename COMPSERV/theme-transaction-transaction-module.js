(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-transaction-transaction-module"],{

/***/ "./src/app/theme/transaction/transaction-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/transaction/transaction-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TransactionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRoutingModule", function() { return TransactionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Transaction',
            status: false
        },
        children: [
            {
                path: 'voucherEntry',
                loadChildren: () => Promise.all(/*! import() | voucher-entry-voucher-entry-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~b4ec420a"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~9b8ef625"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~03f63e01"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~4926e085"), __webpack_require__.e("voucher-entry-voucher-entry-module")]).then(__webpack_require__.bind(null, /*! ./voucher-entry/voucher-entry.module */ "./src/app/theme/transaction/voucher-entry/voucher-entry.module.ts")).then(m => m.VoucherEntryModule)
            },
            {
                path: 'multiVoucher',
                loadChildren: () => Promise.all(/*! import() | multi-voucher-multi-voucher-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~b4ec420a"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~9b8ef625"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~03f63e01"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~e740a259"), __webpack_require__.e("multi-voucher-multi-voucher-module")]).then(__webpack_require__.bind(null, /*! ./multi-voucher/multi-voucher.module */ "./src/app/theme/transaction/multi-voucher/multi-voucher.module.ts")).then(m => m.MultiVoucherModule)
            },
            {
                path: 'batchVoucher',
                loadChildren: () => Promise.all(/*! import() | batch-voucher-batch-voucher-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~b4ec420a"), __webpack_require__.e("default~batch-voucher-batch-voucher-module~centralised-passing-centralisedPassing-module~master-unlo~093be79f"), __webpack_require__.e("batch-voucher-batch-voucher-module")]).then(__webpack_require__.bind(null, /*! ./batch-voucher/batch-voucher.module */ "./src/app/theme/transaction/batch-voucher/batch-voucher.module.ts")).then(m => m.BatchVoucherModule)
            },
            {
                path: 'memberDAPDT',
                loadChildren: () => Promise.all(/*! import() | member-dapdt-member-dapdt-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("member-dapdt-member-dapdt-module")]).then(__webpack_require__.bind(null, /*! ./member-dapdt/member-dapdt.module */ "./src/app/theme/transaction/member-dapdt/member-dapdt.module.ts")).then(m => m.MemberDAPDTModule)
            },
            {
                path: 'memberTransfer',
                loadChildren: () => __webpack_require__.e(/*! import() | member-transfer-member-transfer-module */ "member-transfer-member-transfer-module").then(__webpack_require__.bind(null, /*! ./member-transfer/member-transfer.module */ "./src/app/theme/transaction/member-transfer/member-transfer.module.ts")).then(m => m.MemberTransferModule)
            },
            {
                path: 'recovery',
                loadChildren: () => __webpack_require__.e(/*! import() | recovery-recovery-module */ "recovery-recovery-module").then(__webpack_require__.bind(null, /*! ./recovery/recovery.module */ "./src/app/theme/transaction/recovery/recovery.module.ts")).then(m => m.RecoveryModule)
            },
            {
                path: 'memberLoan',
                loadChildren: () => __webpack_require__.e(/*! import() | member-loan-member-loan-module */ "member-loan-member-loan-module").then(__webpack_require__.bind(null, /*! ./member-loan/member-loan.module */ "./src/app/theme/transaction/member-loan/member-loan.module.ts")).then(m => m.MemberLoanModule)
            },
            {
                path: 'dDTransaction',
                loadChildren: () => __webpack_require__.e(/*! import() | d-dtransaction-d-dtransaction-module */ "d-dtransaction-d-dtransaction-module").then(__webpack_require__.bind(null, /*! ./d-dtransaction/d-dtransaction.module */ "./src/app/theme/transaction/d-dtransaction/d-dtransaction.module.ts")).then(m => m.DDTransactionModule)
            },
            {
                path: 'pigmyChartEntry',
                loadChildren: () => Promise.all(/*! import() | pigmy-chart-entry-pigmy-chart-entry-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~b2eeeb56"), __webpack_require__.e("pigmy-chart-entry-pigmy-chart-entry-module")]).then(__webpack_require__.bind(null, /*! ./pigmy-chart-entry/pigmy-chart-entry.module */ "./src/app/theme/transaction/pigmy-chart-entry/pigmy-chart-entry.module.ts")).then(m => m.PigmyChartEntryModule)
            },
            {
                path: 'dividendPay',
                loadChildren: () => __webpack_require__.e(/*! import() | dividend-pay-dividend-pay-module */ "dividend-pay-dividend-pay-module").then(__webpack_require__.bind(null, /*! ./dividend-pay/dividend-pay.module */ "./src/app/theme/transaction/dividend-pay/dividend-pay.module.ts")).then(m => m.DividendPayModule)
            },
            {
                path: 'cashCreditAcRenewal',
                loadChildren: () => Promise.all(/*! import() | cash-credit-ac-renewal-cash-credit-ac-renewal-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~b4ec420a"), __webpack_require__.e("default~cash-credit-ac-renewal-cash-credit-ac-renewal-module~centralised-passing-centralisedPassing-~5540bd3a"), __webpack_require__.e("cash-credit-ac-renewal-cash-credit-ac-renewal-module")]).then(__webpack_require__.bind(null, /*! ./cash-credit-ac-renewal/cash-credit-ac-renewal.module */ "./src/app/theme/transaction/cash-credit-ac-renewal/cash-credit-ac-renewal.module.ts")).then(m => m.CashCreditAcRenewalModule)
            },
            {
                path: 'shareTransactions',
                loadChildren: () => Promise.all(/*! import() | share-transactions-share-transactions-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~9b8ef625"), __webpack_require__.e("default~day-book-ie-day-book-ie-module~demand-draft-dei-demand-draft-dei-module~demo-demo-module~for~51e11cb8"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~npa-reg-perc~d82b9c27"), __webpack_require__.e("default~button-button-module~centralised-passing-centralisedPassing-module~master-unlock-masterUnloc~175cd2f5"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~share-transa~9f57c8de"), __webpack_require__.e("share-transactions-share-transactions-module")]).then(__webpack_require__.bind(null, /*! ./share-transactions/share-transactions.module */ "./src/app/theme/transaction/share-transactions/share-transactions.module.ts")).then(m => m.ShareTransactionsModule)
            },
            {
                path: 'termDepositAccountClosing',
                loadChildren: () => Promise.all(/*! import() | term-deposit-account-closing-term-deposit-account-closing-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~b4ec420a"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~9b8ef625"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~03f63e01"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~db13f0ff"), __webpack_require__.e("term-deposit-account-closing-term-deposit-account-closing-module")]).then(__webpack_require__.bind(null, /*! ./term-deposit-account-closing/term-deposit-account-closing.module */ "./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.module.ts")).then(m => m.TermDepositAccountClosingModule)
            },
            {
                path: 'TermDepositeAcRenewal',
                loadChildren: () => Promise.all(/*! import() | term-deposite-ac-renewal-term-deposite-ac-renewal-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~b4ec420a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~465dbe6a"), __webpack_require__.e("term-deposite-ac-renewal-term-deposite-ac-renewal-module")]).then(__webpack_require__.bind(null, /*! ./term-deposite-ac-renewal/term-deposite-ac-renewal.module */ "./src/app/theme/transaction/term-deposite-ac-renewal/term-deposite-ac-renewal.module.ts")).then(m => m.TermDepositeAcRenewalModule)
            },
            {
                path: 'cashDenomination',
                loadChildren: () => Promise.all(/*! import() | cash-denomination-cash-denomination-module */[__webpack_require__.e("common"), __webpack_require__.e("cash-denomination-cash-denomination-module")]).then(__webpack_require__.bind(null, /*! ./cash-denomination/cash-denomination.module */ "./src/app/theme/transaction/cash-denomination/cash-denomination.module.ts")).then(m => m.CashDenominationModule)
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
                loadChildren: () => Promise.all(/*! import() | dead-stock-purchase-dead-stock-purchase-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~b4ec420a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~dead-stock-purchase-dead-stock-purchase-module~b0ab237f"), __webpack_require__.e("dead-stock-purchase-dead-stock-purchase-module")]).then(__webpack_require__.bind(null, /*! ./dead-stock-purchase/dead-stock-purchase.module */ "./src/app/theme/transaction/dead-stock-purchase/dead-stock-purchase.module.ts")).then(m => m.DeadStockPurchaseModule)
            },
            {
                path: 'deadStockTransaction',
                loadChildren: () => Promise.all(/*! import() | dead-stock-transaction-dead-stock-transaction-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~b4ec420a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~dead-stock-transaction-dead-stock-transaction-~b51d2599"), __webpack_require__.e("dead-stock-transaction-dead-stock-transaction-module")]).then(__webpack_require__.bind(null, /*! ./dead-stock-transaction/dead-stock-transaction.module */ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.module.ts")).then(m => m.DeadStockTransactionModule)
            },
            {
                path: 'reconciliationEntry',
                loadChildren: () => Promise.all(/*! import() | reconciliation-entry-reconciliation-entry-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~b4ec420a"), __webpack_require__.e("reconciliation-entry-reconciliation-entry-module")]).then(__webpack_require__.bind(null, /*! ./reconciliation-entry/reconciliation-entry.module */ "./src/app/theme/transaction/reconciliation-entry/reconciliation-entry.module.ts")).then(m => m.ReconciliationEntryModule)
            },
            {
                path: 'savingspigmyaccountclosing',
                loadChildren: () => Promise.all(/*! import() | savings-pigmy-account-closing-savings-Pigmy-Account-Closing-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~b4ec420a"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~cash-~ddd43659"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~savings-pigm~27b97b3a"), __webpack_require__.e("savings-pigmy-account-closing-savings-Pigmy-Account-Closing-module")]).then(__webpack_require__.bind(null, /*! ./savings-pigmy-account-closing/savings-Pigmy-Account-Closing.module */ "./src/app/theme/transaction/savings-pigmy-account-closing/savings-Pigmy-Account-Closing.module.ts")).then(m => m.SavingsPigmyAccountClosingModule)
            },
            {
                path: 'goldsilverreturnentry',
                loadChildren: () => Promise.all(/*! import() | gold-silver-return-entry-gold-silver-return-entry-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~b4ec420a"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~cash-~ddd43659"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~gold-silver-return-entry-gold-silver-return-en~b2f2e1b6"), __webpack_require__.e("gold-silver-return-entry-gold-silver-return-entry-module")]).then(__webpack_require__.bind(null, /*! ./gold-silver-return-entry/gold-silver-return-entry.module */ "./src/app/theme/transaction/gold-silver-return-entry/gold-silver-return-entry.module.ts")).then(m => m.GoldSilverReturnEntryModule)
            },
            {
                path: 'locker',
                loadChildren: () => Promise.all(/*! import() | locker-locker-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("locker-locker-module")]).then(__webpack_require__.bind(null, /*! ./locker/locker.module */ "./src/app/theme/transaction/locker/locker.module.ts")).then(m => m.LockerModule)
            },
            {
                path: 'cashier',
                loadChildren: () => __webpack_require__.e(/*! import() | cashier-cashier-module */ "cashier-cashier-module").then(__webpack_require__.bind(null, /*! ./cashier/cashier.module */ "./src/app/theme/transaction/cashier/cashier.module.ts")).then(m => m.CashierModule)
            },
            // {
            //   path: 'voucherPrint',
            //   loadChildren: () => import('./voucher-printing/voucher-printing.module').then(m =>m.VoucherPrintingModule)
            // },
            {
                path: 'cashRecoveryTransaction',
                loadChildren: () => Promise.all(/*! import() | cash-recovery-transaction-cash-recovery-transaction-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("cash-recovery-transaction-cash-recovery-transaction-module")]).then(__webpack_require__.bind(null, /*! ./cash-recovery-transaction/cash-recovery-transaction.module */ "./src/app/theme/transaction/cash-recovery-transaction/cash-recovery-transaction.module.ts")).then(m => m.CashRecoveryTransactionModule)
            },
            {
                path: 'consolidationTransaction',
                loadChildren: () => Promise.all(/*! import() | consolidation-transaction-consolidation-transaction-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("consolidation-transaction-consolidation-transaction-module")]).then(__webpack_require__.bind(null, /*! ./consolidation-transaction/consolidation-transaction.module */ "./src/app/theme/transaction/consolidation-transaction/consolidation-transaction.module.ts")).then(m => m.ConsolidationTransactionModule)
            },
            {
                path: 'inwardRegister',
                loadChildren: () => Promise.all(/*! import() | inward-register-inward-register-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("inward-register-inward-register-module")]).then(__webpack_require__.bind(null, /*! ./inward-register/inward-register.module */ "./src/app/theme/transaction/inward-register/inward-register.module.ts")).then(m => m.InwardRegisterModule)
            },
            // {
            //   path: 'goldSilverReceipt',
            //   loadChildren: () => import('./gold-silver-receipt-print/gold-silver-receipt-print.module').then(m => m.GoldSilverReceiptPrintModule)
            // },
            {
                path: 'ddtransaction',
                loadChildren: () => Promise.all(/*! import() | dd-transaction-dd-transaction-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("dd-transaction-dd-transaction-module")]).then(__webpack_require__.bind(null, /*! ./dd-transaction/dd-transaction.module */ "./src/app/theme/transaction/dd-transaction/dd-transaction.module.ts")).then(m => m.DdTransactionModule)
            },
            {
                path: 'investmentAccountRenewal',
                loadChildren: () => Promise.all(/*! import() | investment-ac-renewal-investment-ac-renewal-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~b4ec420a"), __webpack_require__.e("common"), __webpack_require__.e("investment-ac-renewal-investment-ac-renewal-module")]).then(__webpack_require__.bind(null, /*! ./investment-ac-renewal/investment-ac-renewal.module */ "./src/app/theme/transaction/investment-ac-renewal/investment-ac-renewal.module.ts")).then(m => m.InvestmentAcRenewalModule)
            },
        ]
    }
];
class TransactionRoutingModule {
}
TransactionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransactionRoutingModule });
TransactionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TransactionRoutingModule_Factory(t) { return new (t || TransactionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransactionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/transaction.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/transaction/transaction.module.ts ***!
  \*********************************************************/
/*! exports provided: TransactionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionModule", function() { return TransactionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _transaction_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction-routing.module */ "./src/app/theme/transaction/transaction-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");



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



// import { VoucherPrintingComponent } from './voucher-printing/voucher-printing.component';
// import { GoldSilverReceiptPrintComponent } from './gold-silver-receipt-print/gold-silver-receipt-print.component';
// import { CashierComponent } from './cashier/cashier.component';
//  import { LockerComponent } from './locker/locker.component';
// import { PigmyAccountClosingComponent } from './Savings/pigmy-account-closing/pigmy-account-closing.component';
class TransactionModule {
}
TransactionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransactionModule });
TransactionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TransactionModule_Factory(t) { return new (t || TransactionModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _transaction_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransactionRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransactionModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _transaction_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransactionRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _transaction_routing_module__WEBPACK_IMPORTED_MODULE_2__["TransactionRoutingModule"]
                ],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-transaction-transaction-module.js.map