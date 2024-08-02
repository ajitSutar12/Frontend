(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["term-deposits-term-deposits-module"],{

/***/ "./src/app/theme/reports/term-deposits/term-deposits-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/reports/term-deposits/term-deposits-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TermDepositsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositsRoutingModule", function() { return TermDepositsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [{
        path: '',
        data: {
            title: 'Term Report ',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        },
        children: [
            {
                path: 'maturedbutnotpaid',
                loadChildren: () => Promise.all(/*! import() | matured-notpaid-matured-notpaid-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("matured-notpaid-matured-notpaid-module")]).then(__webpack_require__.bind(null, /*! ./matured-notpaid/matured-notpaid.module */ "./src/app/theme/reports/term-deposits/matured-notpaid/matured-notpaid.module.ts")).then(m => m.MaturedNotpaidModule)
            },
            {
                path: 'maturedbutnotclosed',
                loadChildren: () => Promise.all(/*! import() | matured-notclosed-matured-notclosed-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("matured-notclosed-matured-notclosed-module")]).then(__webpack_require__.bind(null, /*! ./matured-notclosed/matured-notclosed.module */ "./src/app/theme/reports/term-deposits/matured-notclosed/matured-notclosed.module.ts")).then(m => m.MaturedNotclosedModule)
            },
            {
                path: 'depositpaidlist',
                loadChildren: () => Promise.all(/*! import() | deposit-paidlist-deposit-paidlist-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("deposit-paidlist-deposit-paidlist-module")]).then(__webpack_require__.bind(null, /*! ./deposit-paidlist/deposit-paidlist.module */ "./src/app/theme/reports/term-deposits/deposit-paidlist/deposit-paidlist.module.ts")).then(m => m.DepositPaidlistModule)
            },
            {
                path: 'intratewisebalancelist',
                loadChildren: () => Promise.all(/*! import() | intratewise-balancelist-intratewise-balancelist-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("intratewise-balancelist-intratewise-balancelist-module")]).then(__webpack_require__.bind(null, /*! ./intratewise-balancelist/intratewise-balancelist.module */ "./src/app/theme/reports/term-deposits/intratewise-balancelist/intratewise-balancelist.module.ts")).then(m => m.IntratewiseBalancelistModule)
            },
            {
                path: 'custidwiseintpaidlist',
                loadChildren: () => Promise.all(/*! import() | custidwise-intpaidlist-custidwise-intpaidlist-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("custidwise-intpaidlist-custidwise-intpaidlist-module")]).then(__webpack_require__.bind(null, /*! ./custidwise-intpaidlist/custidwise-intpaidlist.module */ "./src/app/theme/reports/term-deposits/custidwise-intpaidlist/custidwise-intpaidlist.module.ts")).then(m => m.CustidwiseIntpaidlistModule)
            },
            {
                path: 'custidwiseloaninterestCertificate',
                loadChildren: () => Promise.all(/*! import() | custidwise-loanint-certificate-custidwise-loanint-certificate-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("custidwise-loanint-certificate-custidwise-loanint-certificate-module")]).then(__webpack_require__.bind(null, /*! ./custidwise-loanint-certificate/custidwise-loanint-certificate.module */ "./src/app/theme/reports/term-deposits/custidwise-loanint-certificate/custidwise-loanint-certificate.module.ts")).then(m => m.CustidwiseLoanintCertificateModule)
            },
            {
                path: 'IntRatewiseMaturityList',
                loadChildren: () => Promise.all(/*! import() | intratewise-maturity-list-intratewise-maturity-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("intratewise-maturity-list-intratewise-maturity-list-module")]).then(__webpack_require__.bind(null, /*! ./intratewise-maturity-list/intratewise-maturity-list.module */ "./src/app/theme/reports/term-deposits/intratewise-maturity-list/intratewise-maturity-list.module.ts")).then(m => m.IntratewiseMaturityListModule)
            },
            {
                path: 'custidwisedepositlist',
                loadChildren: () => Promise.all(/*! import() | custidwise-deposit-list-custidwise-deposit-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("custidwise-deposit-list-custidwise-deposit-list-module")]).then(__webpack_require__.bind(null, /*! ./custidwise-deposit-list/custidwise-deposit-list.module */ "./src/app/theme/reports/term-deposits/custidwise-deposit-list/custidwise-deposit-list.module.ts")).then(m => m.CustidwiseDepositListModule)
            },
            {
                path: 'tddetailrecurroverdue',
                loadChildren: () => Promise.all(/*! import() | tddetail-recurr-overdue-tddetail-recurr-overdue-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("tddetail-recurr-overdue-tddetail-recurr-overdue-module")]).then(__webpack_require__.bind(null, /*! ./tddetail-recurr-overdue/tddetail-recurr-overdue.module */ "./src/app/theme/reports/term-deposits/tddetail-recurr-overdue/tddetail-recurr-overdue.module.ts")).then(m => m.TddetailRecurrOverdueModule)
            },
            {
                path: 'prematuredAcCloselist',
                loadChildren: () => Promise.all(/*! import() | prematured-ac-close-prematured-ac-close-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("prematured-ac-close-prematured-ac-close-module")]).then(__webpack_require__.bind(null, /*! ./prematured-ac-close/prematured-ac-close.module */ "./src/app/theme/reports/term-deposits/prematured-ac-close/prematured-ac-close.module.ts")).then(m => m.PrematuredAcCloseModule)
            },
            {
                path: 'renewalDepositList',
                loadChildren: () => Promise.all(/*! import() | renewal-deposit-list-renewal-deposit-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("renewal-deposit-list-renewal-deposit-list-module")]).then(__webpack_require__.bind(null, /*! ./renewal-deposit-list/renewal-deposit-list.module */ "./src/app/theme/reports/term-deposits/renewal-deposit-list/renewal-deposit-list.module.ts")).then(m => m.RenewalDepositListModule)
            },
            {
                path: 'directorwiseDepositlist',
                loadChildren: () => Promise.all(/*! import() | directorwise-deposit-list-directorwise-deposit-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("directorwise-deposit-list-directorwise-deposit-list-module")]).then(__webpack_require__.bind(null, /*! ./directorwise-deposit-list/directorwise-deposit-list.module */ "./src/app/theme/reports/term-deposits/directorwise-deposit-list/directorwise-deposit-list.module.ts")).then(m => m.DirectorwiseDepositListModule)
            },
            {
                path: 'custidwiseInterestList',
                loadChildren: () => Promise.all(/*! import() | custidwise-interest-list-custidwise-interest-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("custidwise-interest-list-custidwise-interest-list-module")]).then(__webpack_require__.bind(null, /*! ./custidwise-interest-list/custidwise-interest-list.module */ "./src/app/theme/reports/term-deposits/custidwise-interest-list/custidwise-interest-list.module.ts")).then(m => m.CustidwiseInterestListModule)
            },
            {
                path: 'custidwiseMaturedList',
                loadChildren: () => Promise.all(/*! import() | custidwise-matured-deposit-list-custidwise-matured-deposit-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("custidwise-matured-deposit-list-custidwise-matured-deposit-list-module")]).then(__webpack_require__.bind(null, /*! ./custidwise-matured-deposit-list/custidwise-matured-deposit-list.module */ "./src/app/theme/reports/term-deposits/custidwise-matured-deposit-list/custidwise-matured-deposit-list.module.ts")).then(m => m.CustidwiseMaturedDepositListModule)
            },
            {
                path: 'abtypeDepositList',
                loadChildren: () => Promise.all(/*! import() | abtypedeposit-list-abtypedeposit-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("abtypedeposit-list-abtypedeposit-list-module")]).then(__webpack_require__.bind(null, /*! ./abtypedeposit-list/abtypedeposit-list.module */ "./src/app/theme/reports/term-deposits/abtypedeposit-list/abtypedeposit-list.module.ts")).then(m => m.AbtypedepositListModule)
            },
            {
                path: 'customerIdWiseTDSreport',
                loadChildren: () => Promise.all(/*! import() | customer-id-wise-tdsreport-customer-id-wise-tdsreport-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("common"), __webpack_require__.e("customer-id-wise-tdsreport-customer-id-wise-tdsreport-module")]).then(__webpack_require__.bind(null, /*! ./customer-id-wise-tdsreport/customer-id-wise-tdsreport.module */ "./src/app/theme/reports/term-deposits/customer-id-wise-tdsreport/customer-id-wise-tdsreport.module.ts")).then(m => m.CustomerIdWiseTDSreportModule)
            }, {
                path: 'AmountwiseDepositIntrestCerti',
                loadChildren: () => Promise.all(/*! import() | amountwise-deposit-intrest-certi-amountwise-deposit-intrest-certi-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("amountwise-deposit-intrest-certi-amountwise-deposit-intrest-certi-module")]).then(__webpack_require__.bind(null, /*! ./amountwise-deposit-intrest-certi/amountwise-deposit-intrest-certi.module */ "./src/app/theme/reports/term-deposits/amountwise-deposit-intrest-certi/amountwise-deposit-intrest-certi.module.ts")).then(m => m.AmountwiseDepositIntrestCertiModule)
            },
        ]
    }
];
class TermDepositsRoutingModule {
}
TermDepositsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermDepositsRoutingModule });
TermDepositsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermDepositsRoutingModule_Factory(t) { return new (t || TermDepositsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermDepositsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/term-deposits/term-deposits.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/reports/term-deposits/term-deposits.component.ts ***!
  \************************************************************************/
/*! exports provided: TermDepositsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositsComponent", function() { return TermDepositsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TermDepositsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TermDepositsComponent.ɵfac = function TermDepositsComponent_Factory(t) { return new (t || TermDepositsComponent)(); };
TermDepositsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermDepositsComponent, selectors: [["app-term-deposits"]], decls: 2, vars: 0, template: function TermDepositsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "term-deposits works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvdGVybS1kZXBvc2l0cy90ZXJtLWRlcG9zaXRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-term-deposits',
                templateUrl: './term-deposits.component.html',
                styleUrls: ['./term-deposits.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/term-deposits/term-deposits.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/reports/term-deposits/term-deposits.module.ts ***!
  \*********************************************************************/
/*! exports provided: TermDepositsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositsModule", function() { return TermDepositsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _term_deposits_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./term-deposits-routing.module */ "./src/app/theme/reports/term-deposits/term-deposits-routing.module.ts");
/* harmony import */ var _term_deposits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./term-deposits.component */ "./src/app/theme/reports/term-deposits/term-deposits.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");







class TermDepositsModule {
}
TermDepositsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermDepositsModule });
TermDepositsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermDepositsModule_Factory(t) { return new (t || TermDepositsModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _term_deposits_routing_module__WEBPACK_IMPORTED_MODULE_2__["TermDepositsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermDepositsModule, { declarations: [_term_deposits_component__WEBPACK_IMPORTED_MODULE_3__["TermDepositsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _term_deposits_routing_module__WEBPACK_IMPORTED_MODULE_2__["TermDepositsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_term_deposits_component__WEBPACK_IMPORTED_MODULE_3__["TermDepositsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _term_deposits_routing_module__WEBPACK_IMPORTED_MODULE_2__["TermDepositsRoutingModule"]
                ],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=term-deposits-term-deposits-module.js.map