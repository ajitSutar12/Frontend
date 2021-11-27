(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-reports-reports-module"],{

/***/ "./src/app/theme/reports/reports-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/reports/reports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Reports',
            status: false
        },
        children: [
            {
                path: 'allReportsWithSearching',
                loadChildren: () => Promise.all(/*! import() | all-reports-with-searching-allReportsWithSearching-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~batch~918fc962"), __webpack_require__.e("all-reports-with-searching-allReportsWithSearching-module")]).then(__webpack_require__.bind(null, /*! ./all-reports-with-searching/allReportsWithSearching.module */ "./src/app/theme/reports/all-reports-with-searching/allReportsWithSearching.module.ts")).then(m => m.AllReportsWithSearchingModule)
            },
            ///
            {
                path: 'dailyReports',
                loadChildren: () => __webpack_require__.e(/*! import() | daily-reports-dailyReports-module */ "daily-reports-dailyReports-module").then(__webpack_require__.bind(null, /*! ./daily-reports/dailyReports.module */ "./src/app/theme/reports/daily-reports/dailyReports.module.ts")).then(m => m.DailyReportsModule)
            },
            //
            {
                path: 'statement',
                loadChildren: () => __webpack_require__.e(/*! import() | statement-statement-module */ "statement-statement-module").then(__webpack_require__.bind(null, /*! ./statement/statement.module */ "./src/app/theme/reports/statement/statement.module.ts")).then(m => m.StatementModule)
            },
            //
            {
                path: 'balanceBook',
                loadChildren: () => __webpack_require__.e(/*! import() | balance-book-balanceBook-module */ "balance-book-balanceBook-module").then(__webpack_require__.bind(null, /*! ./balance-book/balanceBook.module */ "./src/app/theme/reports/balance-book/balanceBook.module.ts")).then(m => m.BalanceBookModule)
            },
            //
            {
                path: 'registers',
                loadChildren: () => __webpack_require__.e(/*! import() | registers-registers-module */ "registers-registers-module").then(__webpack_require__.bind(null, /*! ./registers/registers.module */ "./src/app/theme/reports/registers/registers.module.ts")).then(m => m.RegistersModule)
            },
            //
            {
                path: 'denominationReports',
                loadChildren: () => __webpack_require__.e(/*! import() | denomination-reports-denominationReports-module */ "denomination-reports-denominationReports-module").then(__webpack_require__.bind(null, /*! ./denomination-reports/denominationReports.module */ "./src/app/theme/reports/denomination-reports/denominationReports.module.ts")).then(m => m.DenominationReportsModule)
            },
            //
            {
                path: 'termDepositReports',
                loadChildren: () => __webpack_require__.e(/*! import() | term-deposit-reports-termDepositReports-module */ "term-deposit-reports-termDepositReports-module").then(__webpack_require__.bind(null, /*! ./term-deposit-reports/termDepositReports.module */ "./src/app/theme/reports/term-deposit-reports/termDepositReports.module.ts")).then(m => m.TermDepositReportsModule)
            },
            //
            {
                path: 'loanReports',
                loadChildren: () => __webpack_require__.e(/*! import() | loan-reports-loanReports-module */ "loan-reports-loanReports-module").then(__webpack_require__.bind(null, /*! ./loan-reports/loanReports.module */ "./src/app/theme/reports/loan-reports/loanReports.module.ts")).then(m => m.LoanReportsModule)
            },
            //
            {
                path: 'npaReports',
                loadChildren: () => __webpack_require__.e(/*! import() | npa-reports-npaReports-module */ "npa-reports-npaReports-module").then(__webpack_require__.bind(null, /*! ./npa-reports/npaReports.module */ "./src/app/theme/reports/npa-reports/npaReports.module.ts")).then(m => m.NpaReportsModule)
            },
            //
            {
                path: 'sharesARR',
                loadChildren: () => __webpack_require__.e(/*! import() | shares-arr-sharesARR-module */ "shares-arr-sharesARR-module").then(__webpack_require__.bind(null, /*! ./shares-arr/sharesARR.module */ "./src/app/theme/reports/shares-arr/sharesARR.module.ts")).then(m => m.SharesARRModule)
            },
            //
            {
                path: 'sharesADR',
                loadChildren: () => __webpack_require__.e(/*! import() | shares-adr-sharesADR-module */ "shares-adr-sharesADR-module").then(__webpack_require__.bind(null, /*! ./shares-adr/sharesADR.module */ "./src/app/theme/reports/shares-adr/sharesADR.module.ts")).then(m => m.SharesADRModule)
            },
            //
            {
                path: 'nottice',
                loadChildren: () => __webpack_require__.e(/*! import() | nottice-nottice-module */ "nottice-nottice-module").then(__webpack_require__.bind(null, /*! ./nottice/nottice.module */ "./src/app/theme/reports/nottice/nottice.module.ts")).then(m => m.NotticeModule)
            },
            //
            {
                path: 'otherReports',
                loadChildren: () => __webpack_require__.e(/*! import() | other-reports-otherReports-module */ "other-reports-otherReports-module").then(__webpack_require__.bind(null, /*! ./other-reports/otherReports.module */ "./src/app/theme/reports/other-reports/otherReports.module.ts")).then(m => m.OtherReportsModule)
            },
            //
            {
                path: 'misReports',
                loadChildren: () => __webpack_require__.e(/*! import() | mis-reports-misReports-module */ "mis-reports-misReports-module").then(__webpack_require__.bind(null, /*! ./mis-reports/misReports.module */ "./src/app/theme/reports/mis-reports/misReports.module.ts")).then(m => m.MisReportsModule)
            },
            //
            {
                path: 'finalReports',
                loadChildren: () => __webpack_require__.e(/*! import() | final-reports-finalReports-module */ "final-reports-finalReports-module").then(__webpack_require__.bind(null, /*! ./final-reports/finalReports.module */ "./src/app/theme/reports/final-reports/finalReports.module.ts")).then(m => m.FinalReportsModule)
            },
        ]
    }
];
class ReportsRoutingModule {
}
ReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportsRoutingModule });
ReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/reports.module.ts":
/*!*************************************************!*\
  !*** ./src/app/theme/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/theme/reports/reports-routing.module.ts");




// import { FinalReportsComponent } from './final-reports/final-reports.component';
// import { MisReportsComponent } from './mis-reports/mis-reports.component';
// import { OtherReportsComponent } from './other-reports/other-reports.component';
// import { NotticeComponent } from './nottice/nottice.component';
// import { LatterComponent } from './nottice/latter/latter.component';
// import { SharesADRComponent } from './shares-adr/shares-adr.component';
// import { SharesARRComponent } from './shares-arr/shares-arr.component';
// import { NpaReportsComponent } from './npa-reports/npa-reports.component';
// import { LoanReportsComponent } from './loan-reports/loan-reports.component';
// import { TermDepositReportsComponent } from './term-deposit-reports/term-deposit-reports.component';
// import { DenominationReportsComponent } from './denomination-reports/denomination-reports.component';
// import { RegistersComponent } from './registers/registers.component';
// import { BalanceBookComponent } from './balance-book/balance-book.component';
// import { StatementComponent } from './statement/statement.component';
// import { DailyReportsComponent } from './daily-reports/daily-reports.component';
// import { AllReportsWithSearchingComponent } from './all-reports-with-searching/all-reports-with-searching.component';
class ReportsModule {
}
ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportsModule_Factory(t) { return new (t || ReportsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-reports-reports-module.js.map