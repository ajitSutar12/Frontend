(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loan-report-loan-report-module"],{

/***/ "./src/app/theme/reports/loan-report/loan-report-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/reports/loan-report/loan-report-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LoanReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanReportRoutingModule", function() { return LoanReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [{
        path: '',
        data: {
            title: 'Loan Report',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        },
        children: [
            // {
            //   path:'loanoverduelist',
            //   loadChildren: () => import('../npa-reports/loan-overdue-list/loan-overdue-list.module').then(m =>m.LoanOverdueListModule)
            // },
            {
                path: 'loansecurityreport',
                loadChildren: () => Promise.all(/*! import() | loan-security-report-loan-security-report-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("loan-security-report-loan-security-report-module")]).then(__webpack_require__.bind(null, /*! ./loan-security-report/loan-security-report.module */ "./src/app/theme/reports/loan-report/loan-security-report/loan-security-report.module.ts")).then(m => m.LoanSecurityReportModule)
            },
            {
                path: 'citiwiseLoanBalancereport',
                loadChildren: () => Promise.all(/*! import() | citiwise-loan-balance-citiwise-loan-balance-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("citiwise-loan-balance-citiwise-loan-balance-module")]).then(__webpack_require__.bind(null, /*! ./citiwise-loan-balance/citiwise-loan-balance.module */ "./src/app/theme/reports/loan-report/citiwise-loan-balance/citiwise-loan-balance.module.ts")).then(m => m.CitiwiseLoanBalanceModule)
            },
            {
                path: 'lcdLessdraftReport',
                loadChildren: () => Promise.all(/*! import() | lcd-lessdraft-report-lcd-lessdraft-report-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("lcd-lessdraft-report-lcd-lessdraft-report-module")]).then(__webpack_require__.bind(null, /*! ./lcd-lessdraft-report/lcd-lessdraft-report.module */ "./src/app/theme/reports/loan-report/lcd-lessdraft-report/lcd-lessdraft-report.module.ts")).then(m => m.LcdLessdraftReportModule)
            },
            {
                path: 'lcdOverdraftReport',
                loadChildren: () => Promise.all(/*! import() | lcd-overdraft-report-lcd-overdraft-report-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("lcd-overdraft-report-lcd-overdraft-report-module")]).then(__webpack_require__.bind(null, /*! ./lcd-overdraft-report/lcd-overdraft-report.module */ "./src/app/theme/reports/loan-report/lcd-overdraft-report/lcd-overdraft-report.module.ts")).then(m => m.LcdOverdraftReportModule)
            },
            {
                path: 'lcd-renewal-list',
                loadChildren: () => Promise.all(/*! import() | lcd-renewal-list-lcd-renewal-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("lcd-renewal-list-lcd-renewal-list-module")]).then(__webpack_require__.bind(null, /*! ./lcd-renewal-list/lcd-renewal-list.module */ "./src/app/theme/reports/loan-report/lcd-renewal-list/lcd-renewal-list.module.ts")).then(m => m.LcdRenewalListModule)
            },
            {
                path: 'lcd-turnover-list',
                loadChildren: () => Promise.all(/*! import() | lcd-turnover-list-lcd-turnover-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("lcd-turnover-list-lcd-turnover-list-module")]).then(__webpack_require__.bind(null, /*! ./lcd-turnover-list/lcd-turnover-list.module */ "./src/app/theme/reports/loan-report/lcd-turnover-list/lcd-turnover-list.module.ts")).then(m => m.LcdTurnoverListModule)
            },
            {
                path: 'penalinterestlist',
                loadChildren: () => Promise.all(/*! import() | penal-interest-list-penal-interest-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("penal-interest-list-penal-interest-list-module")]).then(__webpack_require__.bind(null, /*! ./penal-interest-list/penal-interest-list.module */ "./src/app/theme/reports/loan-report/penal-interest-list/penal-interest-list.module.ts")).then(m => m.PenalInterestListModule)
            },
            {
                path: 'pendingStockStatementlist',
                loadChildren: () => Promise.all(/*! import() | pending-stock-statement-list-pending-stock-statement-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("pending-stock-statement-list-pending-stock-statement-list-module")]).then(__webpack_require__.bind(null, /*! ./pending-stock-statement-list/pending-stock-statement-list.module */ "./src/app/theme/reports/loan-report/pending-stock-statement-list/pending-stock-statement-list.module.ts")).then(m => m.PendingStockStatementListModule)
            },
            {
                path: 'receivedStockstatementList',
                loadChildren: () => Promise.all(/*! import() | received-stock-statement-received-stock-statement-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("received-stock-statement-received-stock-statement-module")]).then(__webpack_require__.bind(null, /*! ./received-stock-statement/received-stock-statement.module */ "./src/app/theme/reports/loan-report/received-stock-statement/received-stock-statement.module.ts")).then(m => m.ReceivedStockStatementModule)
            },
            {
                path: 'recoverycwBalanceList',
                loadChildren: () => Promise.all(/*! import() | recovery-cw-balance-recovery-cw-balance-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("recovery-cw-balance-recovery-cw-balance-module")]).then(__webpack_require__.bind(null, /*! ./recovery-cw-balance/recovery-cw-balance.module */ "./src/app/theme/reports/loan-report/recovery-cw-balance/recovery-cw-balance.module.ts")).then(m => m.RecoveryCwBalanceModule)
            },
            {
                path: 'receivableInstallInterest',
                loadChildren: () => Promise.all(/*! import() | loan-receivableinst-intrest-loan-receivableinst-intrest-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("loan-receivableinst-intrest-loan-receivableinst-intrest-module")]).then(__webpack_require__.bind(null, /*! ./loan-receivableinst-intrest/loan-receivableinst-intrest.module */ "./src/app/theme/reports/loan-report/loan-receivableinst-intrest/loan-receivableinst-intrest.module.ts")).then(m => m.LoanReceivableinstIntrestModule)
            },
            {
                path: 'loanExpiredList',
                loadChildren: () => Promise.all(/*! import() | loan-expired-list-loan-expired-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("loan-expired-list-loan-expired-list-module")]).then(__webpack_require__.bind(null, /*! ./loan-expired-list/loan-expired-list.module */ "./src/app/theme/reports/loan-report/loan-expired-list/loan-expired-list.module.ts")).then(m => m.LoanExpiredListModule)
            },
            {
                path: 'loanduecertificate',
                loadChildren: () => Promise.all(/*! import() | loan-due-certificate-loan-due-certificate-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("loan-due-certificate-loan-due-certificate-module")]).then(__webpack_require__.bind(null, /*! ./loan-due-certificate/loan-due-certificate.module */ "./src/app/theme/reports/loan-report/loan-due-certificate/loan-due-certificate.module.ts")).then(m => m.LoanDueCertificateModule)
            },
            {
                path: 'CourtwiseDisputeLoandetail',
                loadChildren: () => Promise.all(/*! import() | courtwise-dispute-loandetail-courtwise-dispute-loandetail-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("courtwise-dispute-loandetail-courtwise-dispute-loandetail-module")]).then(__webpack_require__.bind(null, /*! ./courtwise-dispute-loandetail/courtwise-dispute-loandetail.module */ "./src/app/theme/reports/loan-report/courtwise-dispute-loandetail/courtwise-dispute-loandetail.module.ts")).then(m => m.CourtwiseDisputeLoandetailModule)
            },
            {
                path: 'CourtwiseDisputeList',
                loadChildren: () => Promise.all(/*! import() | courtwise-dispute-loanlist-courtwise-dispute-loanlist-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("courtwise-dispute-loanlist-courtwise-dispute-loanlist-module")]).then(__webpack_require__.bind(null, /*! ./courtwise-dispute-loanlist/courtwise-dispute-loanlist.module */ "./src/app/theme/reports/loan-report/courtwise-dispute-loanlist/courtwise-dispute-loanlist.module.ts")).then(m => m.CourtwiseDisputeLoanlistModule)
            },
            {
                path: 'DisputeLoanList',
                loadChildren: () => Promise.all(/*! import() | dispute-loandetails-dispute-loandetails-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("dispute-loandetails-dispute-loandetails-module")]).then(__webpack_require__.bind(null, /*! ./dispute-loandetails/dispute-loandetails.module */ "./src/app/theme/reports/loan-report/dispute-loandetails/dispute-loandetails.module.ts")).then(m => m.DisputeLoandetailsModule)
            },
            {
                path: 'loanCCACSanctionDatewise',
                loadChildren: () => Promise.all(/*! import() | loan-cc-ac-open-sanction-datewise-loan-cc-ac-open-sanction-datewise-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("loan-cc-ac-open-sanction-datewise-loan-cc-ac-open-sanction-datewise-module")]).then(__webpack_require__.bind(null, /*! ./loan-cc-ac-open-sanction-datewise/loan-cc-ac-open-sanction-datewise.module */ "./src/app/theme/reports/loan-report/loan-cc-ac-open-sanction-datewise/loan-cc-ac-open-sanction-datewise.module.ts")).then(m => m.LoanCCACOpenSanctionDatewiseModule)
            },
            {
                path: 'healthCodewise',
                loadChildren: () => Promise.all(/*! import() | health-codewise-overdue-health-codewise-overdue-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("health-codewise-overdue-health-codewise-overdue-module")]).then(__webpack_require__.bind(null, /*! ./health-codewise-overdue/health-codewise-overdue.module */ "./src/app/theme/reports/loan-report/health-codewise-overdue/health-codewise-overdue.module.ts")).then(m => m.HealthCodewiseOverdueModule)
            },
            {
                path: 'drawingPowerRegister',
                loadChildren: () => Promise.all(/*! import() | drawing-power-register-drawing-power-register-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("drawing-power-register-drawing-power-register-module")]).then(__webpack_require__.bind(null, /*! ./drawing-power-register/drawing-power-register.module */ "./src/app/theme/reports/loan-report/drawing-power-register/drawing-power-register.module.ts")).then(m => m.DrawingPowerRegisterModule)
            },
            {
                path: 'count-wise-lawad-loan',
                loadChildren: () => Promise.all(/*! import() | count-wise-lawad-loan-count-wise-lawad-loan-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("count-wise-lawad-loan-count-wise-lawad-loan-module")]).then(__webpack_require__.bind(null, /*! ./count-wise-lawad-loan/count-wise-lawad-loan.module */ "./src/app/theme/reports/loan-report/count-wise-lawad-loan/count-wise-lawad-loan.module.ts")).then(m => m.CountWiseLawadLoanModule)
            },
            {
                path: 'security-reports',
                loadChildren: () => Promise.all(/*! import() | security-reports-security-reports-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("security-reports-security-reports-module")]).then(__webpack_require__.bind(null, /*! ./security-reports/security-reports.module */ "./src/app/theme/reports/loan-report/security-reports/security-reports.module.ts")).then(m => m.SecurityReportsModule)
            },
            {
                path: 'interest-ratewise-classification-of-loan',
                loadChildren: () => Promise.all(/*! import() | interest-ratewise-classification-of-loan-interest-ratewise-classification-of-loan-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("interest-ratewise-classification-of-loan-interest-ratewise-classification-of-loan-module")]).then(__webpack_require__.bind(null, /*! ./interest-ratewise-classification-of-loan/interest-ratewise-classification-of-loan.module */ "./src/app/theme/reports/loan-report/interest-ratewise-classification-of-loan/interest-ratewise-classification-of-loan.module.ts")).then(m => m.InterestRatewiseClassificationOfLoanModule)
            },
            {
                path: 'LoanCashCreditExpiryList',
                loadChildren: () => Promise.all(/*! import() | loan-cash-credit-expiry-list-loan-cash-credit-expiry-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("loan-cash-credit-expiry-list-loan-cash-credit-expiry-list-module")]).then(__webpack_require__.bind(null, /*! ./loan-cash-credit-expiry-list/loan-cash-credit-expiry-list.module */ "./src/app/theme/reports/loan-report/loan-cash-credit-expiry-list/loan-cash-credit-expiry-list.module.ts")).then(m => m.LoanCashCreditExpiryListModule)
            },
        ]
    }
];
class LoanReportRoutingModule {
}
LoanReportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoanReportRoutingModule });
LoanReportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoanReportRoutingModule_Factory(t) { return new (t || LoanReportRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoanReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanReportRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/loan-report/loan-report.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/reports/loan-report/loan-report.component.ts ***!
  \********************************************************************/
/*! exports provided: LoanReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanReportComponent", function() { return LoanReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoanReportComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoanReportComponent.ɵfac = function LoanReportComponent_Factory(t) { return new (t || LoanReportComponent)(); };
LoanReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoanReportComponent, selectors: [["app-loan-report"]], decls: 2, vars: 0, template: function LoanReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loan-report works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvbG9hbi1yZXBvcnQvbG9hbi1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loan-report',
                templateUrl: './loan-report.component.html',
                styleUrls: ['./loan-report.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/loan-report/loan-report.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/reports/loan-report/loan-report.module.ts ***!
  \*****************************************************************/
/*! exports provided: LoanReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanReportModule", function() { return LoanReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loan_report_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-report-routing.module */ "./src/app/theme/reports/loan-report/loan-report-routing.module.ts");
/* harmony import */ var _loan_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-report.component */ "./src/app/theme/reports/loan-report/loan-report.component.ts");





class LoanReportModule {
}
LoanReportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoanReportModule });
LoanReportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoanReportModule_Factory(t) { return new (t || LoanReportModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _loan_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoanReportRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoanReportModule, { declarations: [_loan_report_component__WEBPACK_IMPORTED_MODULE_3__["LoanReportComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _loan_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoanReportRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanReportModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_loan_report_component__WEBPACK_IMPORTED_MODULE_3__["LoanReportComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _loan_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoanReportRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=loan-report-loan-report-module.js.map