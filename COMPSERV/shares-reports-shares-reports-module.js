(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shares-reports-shares-reports-module"],{

/***/ "./src/app/theme/reports/shares-reports/shares-reports-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/reports/shares-reports/shares-reports-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SharesReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesReportsRoutingModule", function() { return SharesReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




// import {SharesReportsComponent} from './shares-reports.component'
const routes = [
    {
        path: '',
        // component:  SharesReportsComponent,
        data: {
            title: 'Shares Report',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        },
        children: [
            {
                path: 'cityMemberList',
                loadChildren: () => Promise.all(/*! import() | citywise-member-list-citywise-member-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("citywise-member-list-citywise-member-list-module")]).then(__webpack_require__.bind(null, /*! ./citywise-member-list/citywise-member-list.module */ "./src/app/theme/reports/shares-reports/citywise-member-list/citywise-member-list.module.ts")).then(m => m.CitywiseMemberListModule)
            },
            {
                path: 'dividendPaidList',
                loadChildren: () => Promise.all(/*! import() | dividend-paid-list-dividend-paid-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("dividend-paid-list-dividend-paid-list-module")]).then(__webpack_require__.bind(null, /*! ./dividend-paid-list/dividend-paid-list.module */ "./src/app/theme/reports/shares-reports/dividend-paid-list/dividend-paid-list.module.ts")).then(m => m.DividendPaidListModule)
            },
            {
                path: 'sharesIssueRegister',
                loadChildren: () => Promise.all(/*! import() | shares-issue-register-shares-issue-register-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("shares-issue-register-shares-issue-register-module")]).then(__webpack_require__.bind(null, /*! ./shares-issue-register/shares-issue-register.module */ "./src/app/theme/reports/shares-reports/shares-issue-register/shares-issue-register.module.ts")).then(m => m.SharesIssueRegisterModule)
            },
            {
                path: 'sharesReturnRegister',
                loadChildren: () => Promise.all(/*! import() | shares-return-register-shares-return-register-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("shares-return-register-shares-return-register-module")]).then(__webpack_require__.bind(null, /*! ./shares-return-register/shares-return-register.module */ "./src/app/theme/reports/shares-reports/shares-return-register/shares-return-register.module.ts")).then(m => m.SharesReturnRegisterModule)
            },
            {
                path: 'sharesTransferRegister',
                loadChildren: () => Promise.all(/*! import() | shares-transfer-register-shares-transfer-register-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("shares-transfer-register-shares-transfer-register-module")]).then(__webpack_require__.bind(null, /*! ./shares-transfer-register/shares-transfer-register.module */ "./src/app/theme/reports/shares-reports/shares-transfer-register/shares-transfer-register.module.ts")).then(m => m.SharesTransferRegisterModule)
            },
            {
                path: 'unpaidDividendList',
                loadChildren: () => Promise.all(/*! import() | unpaid-dividend-list-unpaid-dividend-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("unpaid-dividend-list-unpaid-dividend-list-module")]).then(__webpack_require__.bind(null, /*! ./unpaid-dividend-list/unpaid-dividend-list.module */ "./src/app/theme/reports/shares-reports/unpaid-dividend-list/unpaid-dividend-list.module.ts")).then(m => m.UnpaidDividendListModule)
            },
            {
                path: 'monthlyRecoveryPrint',
                loadChildren: () => Promise.all(/*! import() | monthly-recovery-print-monthly-recovery-print-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("monthly-recovery-print-monthly-recovery-print-module")]).then(__webpack_require__.bind(null, /*! ./monthly-recovery-print/monthly-recovery-print.module */ "./src/app/theme/reports/shares-reports/monthly-recovery-print/monthly-recovery-print.module.ts")).then(m => m.MonthlyRecoveryPrintModule)
            },
            {
                path: 'monthlyRecoverySubsidiary',
                loadChildren: () => Promise.all(/*! import() | monthly-recovery-subsidiary-monthly-recovery-subsidiary-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("monthly-recovery-subsidiary-monthly-recovery-subsidiary-module")]).then(__webpack_require__.bind(null, /*! ./monthly-recovery-subsidiary/monthly-recovery-subsidiary.module */ "./src/app/theme/reports/shares-reports/monthly-recovery-subsidiary/monthly-recovery-subsidiary.module.ts")).then(m => m.MonthlyRecoverySubsidiaryModule)
            },
            {
                path: 'mrutunjay-register',
                loadChildren: () => Promise.all(/*! import() | mrutunjay-register-mrutunjay-register-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("mrutunjay-register-mrutunjay-register-module")]).then(__webpack_require__.bind(null, /*! ./mrutunjay-register/mrutunjay-register.module */ "./src/app/theme/reports/shares-reports/mrutunjay-register/mrutunjay-register.module.ts")).then(m => m.MrutunjayRegisterModule)
            },
            {
                path: 'shares-nominee-list',
                loadChildren: () => Promise.all(/*! import() | shares-nominee-list-shares-nominee-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("shares-nominee-list-shares-nominee-list-module")]).then(__webpack_require__.bind(null, /*! ./shares-nominee-list/shares-nominee-list.module */ "./src/app/theme/reports/shares-reports/shares-nominee-list/shares-nominee-list.module.ts")).then(m => m.SharesNomineeListModule)
            },
            {
                path: 'shares-account-label-print',
                loadChildren: () => Promise.all(/*! import() | shares-account-label-print-shares-account-label-print-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("shares-account-label-print-shares-account-label-print-module")]).then(__webpack_require__.bind(null, /*! ./shares-account-label-print/shares-account-label-print.module */ "./src/app/theme/reports/shares-reports/shares-account-label-print/shares-account-label-print.module.ts")).then(m => m.SharesAccountLabelPrintModule)
            },
            {
                path: 'birthday-wish',
                loadChildren: () => Promise.all(/*! import() | birthday-wish-birthday-wish-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("birthday-wish-birthday-wish-module")]).then(__webpack_require__.bind(null, /*! ./birthday-wish/birthday-wish.module */ "./src/app/theme/reports/shares-reports/birthday-wish/birthday-wish.module.ts")).then(m => m.BirthdayWishModule)
            },
            {
                path: 'dividentpaid',
                loadChildren: () => Promise.all(/*! import() | dividentpaid-dividentpaid-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("dividentpaid-dividentpaid-module")]).then(__webpack_require__.bind(null, /*! ./dividentpaid/dividentpaid.module */ "./src/app/theme/reports/shares-reports/dividentpaid/dividentpaid.module.ts")).then(m => m.DividentpaidModule)
            }
        ]
    }
];
class SharesReportsRoutingModule {
}
SharesReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharesReportsRoutingModule });
SharesReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharesReportsRoutingModule_Factory(t) { return new (t || SharesReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharesReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/shares-reports/shares-reports.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/reports/shares-reports/shares-reports.module.ts ***!
  \***********************************************************************/
/*! exports provided: SharesReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesReportsModule", function() { return SharesReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shares_reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shares-reports-routing.module */ "./src/app/theme/reports/shares-reports/shares-reports-routing.module.ts");




class SharesReportsModule {
}
SharesReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharesReportsModule });
SharesReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharesReportsModule_Factory(t) { return new (t || SharesReportsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shares_reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharesReportsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharesReportsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shares_reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharesReportsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shares_reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharesReportsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=shares-reports-shares-reports-module.js.map