(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balance-book-balanceBook-module"],{

/***/ "./src/app/theme/reports/balance-book/balance-book.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/reports/balance-book/balance-book.component.ts ***!
  \**********************************************************************/
/*! exports provided: BalanceBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceBookComponent", function() { return BalanceBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BalanceBookComponent {
    constructor() {
        this.multiNominee = [];
        this.showButton = true;
    }
    ngOnInit() {
        // Method to insert data into database through NestJS
        // submit() {
        //   const formVal = this.angForm.value;
        //   const dataToSend = {
        //     // 'NomineeData': this.multiNominee,
        //   };
        // }
    }
}
BalanceBookComponent.ɵfac = function BalanceBookComponent_Factory(t) { return new (t || BalanceBookComponent)(); };
BalanceBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BalanceBookComponent, selectors: [["app-balance-book"]], decls: 2, vars: 0, template: function BalanceBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "balance books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvYmFsYW5jZS1ib29rL2JhbGFuY2UtYm9vay5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalanceBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-balance-book',
                templateUrl: './balance-book.component.html',
                styleUrls: ['./balance-book.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/balance-book/balanceBook-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/reports/balance-book/balanceBook-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: BalanceBookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceBookRoutingModule", function() { return BalanceBookRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        // component: BalanceBookComponent,
        data: {
            title: 'Balance Book',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        },
        children: [
            {
                path: 'BnkDedskBalList',
                loadChildren: () => Promise.all(/*! import() | bnk-dedsk-bal-list-bnk-dedsk-bal-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("common"), __webpack_require__.e("bnk-dedsk-bal-list-bnk-dedsk-bal-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-dedsk-bal-list/bnk-dedsk-bal-list.module */ "./src/app/theme/reports/balance-book/bnk-dedsk-bal-list/bnk-dedsk-bal-list.module.ts")).then(m => m.BnkDedskBalListModule)
            },
            {
                path: 'BnkLedgerABTypeList',
                loadChildren: () => Promise.all(/*! import() | bnk-ledger-abtype-list-bnk-ledger-abtype-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("bnk-ledger-abtype-list-bnk-ledger-abtype-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-ledger-abtype-list/bnk-ledger-abtype-list.module */ "./src/app/theme/reports/balance-book/bnk-ledger-abtype-list/bnk-ledger-abtype-list.module.ts")).then(m => m.BnkLedgerABTypeListModule)
            },
            {
                path: 'BnkACBalBook',
                loadChildren: () => Promise.all(/*! import() | bnk-acbal-book-bnk-acbal-book-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("bnk-acbal-book-bnk-acbal-book-module")]).then(__webpack_require__.bind(null, /*! ./bnk-acbal-book/bnk-acbal-book.module */ "./src/app/theme/reports/balance-book/bnk-acbal-book/bnk-acbal-book.module.ts")).then(m => m.BnkACBalBookModule)
            },
            {
                path: 'BnkDptAMList',
                loadChildren: () => Promise.all(/*! import() | bnk-dptambal-list-bnk-dptambal-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("bnk-dptambal-list-bnk-dptambal-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-dptambal-list/bnk-dptambal-list.module */ "./src/app/theme/reports/balance-book/bnk-dptambal-list/bnk-dptambal-list.module.ts")).then(m => m.BnkDptambalListModule)
            },
            {
                path: 'CatbalList',
                loadChildren: () => Promise.all(/*! import() | bnk-catbal-list-bnk-catbal-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("bnk-catbal-list-bnk-catbal-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-catbal-list/bnk-catbal-list.module */ "./src/app/theme/reports/balance-book/bnk-catbal-list/bnk-catbal-list.module.ts")).then(m => m.BnkCatbalListModule)
            },
            {
                path: 'SubSummary',
                loadChildren: () => Promise.all(/*! import() | bnk-sub-summary-bnk-sub-summary-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("common"), __webpack_require__.e("bnk-sub-summary-bnk-sub-summary-module")]).then(__webpack_require__.bind(null, /*! ./bnk-sub-summary/bnk-sub-summary.module */ "./src/app/theme/reports/balance-book/bnk-sub-summary/bnk-sub-summary.module.ts")).then(m => m.BnkSubSummaryModule)
            },
            {
                path: 'DebbalReport',
                loadChildren: () => Promise.all(/*! import() | bnk-debbal-report-bnk-debbal-report-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("bnk-debbal-report-bnk-debbal-report-module")]).then(__webpack_require__.bind(null, /*! ./bnk-debbal-report/bnk-debbal-report.module */ "./src/app/theme/reports/balance-book/bnk-debbal-report/bnk-debbal-report.module.ts")).then(m => m.BnkDebbalReportModule)
            },
            {
                path: 'BnkCustIDBalList',
                loadChildren: () => Promise.all(/*! import() | bnk-cust-idbal-list-bnk-cust-idbal-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("bnk-cust-idbal-list-bnk-cust-idbal-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-cust-idbal-list/bnk-cust-idbal-list.module */ "./src/app/theme/reports/balance-book/bnk-cust-idbal-list/bnk-cust-idbal-list.module.ts")).then(m => m.BnkCustIDBalListModule)
            },
            {
                path: 'BnkGLConsistRepo',
                loadChildren: () => Promise.all(/*! import() | bnk-glconsist-repo-bnk-glconsist-repo-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~9b8ef625"), __webpack_require__.e("common"), __webpack_require__.e("bnk-glconsist-repo-bnk-glconsist-repo-module")]).then(__webpack_require__.bind(null, /*! ./bnk-glconsist-repo/bnk-glconsist-repo.module */ "./src/app/theme/reports/balance-book/bnk-glconsist-repo/bnk-glconsist-repo.module.ts")).then(m => m.BnkGLConsistRepoModule)
            },
            {
                path: 'BnkReceiveIntList',
                loadChildren: () => Promise.all(/*! import() | bnk-receive-int-list-bnk-receive-int-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("bnk-receive-int-list-bnk-receive-int-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-receive-int-list/bnk-receive-int-list.module */ "./src/app/theme/reports/balance-book/bnk-receive-int-list/bnk-receive-int-list.module.ts")).then(m => m.BnkReceiveIntListModule)
            },
            {
                path: 'BnkPayIntList',
                loadChildren: () => Promise.all(/*! import() | bnk-pay-int-list-bnk-pay-int-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("bnk-pay-int-list-bnk-pay-int-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-pay-int-list/bnk-pay-int-list.module */ "./src/app/theme/reports/balance-book/bnk-pay-int-list/bnk-pay-int-list.module.ts")).then(m => m.BnkPayIntListModule)
            },
            {
                path: 'BnkDedskBalListDepre',
                loadChildren: () => Promise.all(/*! import() | bnk-dedsk-bal-list-depre-bnk-dedsk-bal-list-depre-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("bnk-dedsk-bal-list-depre-bnk-dedsk-bal-list-depre-module")]).then(__webpack_require__.bind(null, /*! ./bnk-dedsk-bal-list-depre/bnk-dedsk-bal-list-depre.module */ "./src/app/theme/reports/balance-book/bnk-dedsk-bal-list-depre/bnk-dedsk-bal-list-depre.module.ts")).then(m => m.BnkDedskBalListDepreModule)
            },
            {
                path: 'BnkOtherBalList',
                loadChildren: () => Promise.all(/*! import() | bnk-other-bal-list-bnk-other-bal-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("bnk-other-bal-list-bnk-other-bal-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-other-bal-list/bnk-other-bal-list.module */ "./src/app/theme/reports/balance-book/bnk-other-bal-list/bnk-other-bal-list.module.ts")).then(m => m.BnkOtherBalListModule)
            },
            {
                path: 'iframe',
                loadChildren: () => __webpack_require__.e(/*! import() | iframe-iframe-module */ "common").then(__webpack_require__.bind(null, /*! ./iframe/iframe.module */ "./src/app/theme/reports/balance-book/iframe/iframe.module.ts")).then(m => m.IframeModule)
            },
            {
                path: 'BnkACBalList',
                loadChildren: () => Promise.all(/*! import() | bnk-acbal-list-bnk-acbal-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("bnk-acbal-list-bnk-acbal-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-acbal-list/bnk-acbal-list.module */ "./src/app/theme/reports/balance-book/bnk-acbal-list/bnk-acbal-list.module.ts")).then(m => m.BnkAcbalListModule)
            },
            {
                path: 'AmountBalList',
                loadChildren: () => Promise.all(/*! import() | bnk-ambal-list-bnk-ambal-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("bnk-ambal-list-bnk-ambal-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-ambal-list/bnk-ambal-list.module */ "./src/app/theme/reports/balance-book/bnk-ambal-list/bnk-ambal-list.module.ts")).then(m => m.BnkAmbalListModule)
            },
            {
                path: 'DeadStockDepCatList',
                loadChildren: () => Promise.all(/*! import() | ded-dep-catwiselist-ded-dep-catwiselist-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("common"), __webpack_require__.e("ded-dep-catwiselist-ded-dep-catwiselist-module")]).then(__webpack_require__.bind(null, /*! ./ded-dep-catwiselist/ded-dep-catwiselist.module */ "./src/app/theme/reports/balance-book/ded-dep-catwiselist/ded-dep-catwiselist.module.ts")).then(m => m.DedDepCatwiselistModule)
            },
            {
                path: 'BalConCertificate',
                loadChildren: () => Promise.all(/*! import() | bal-con-certificate-bal-con-certificate-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("common"), __webpack_require__.e("bal-con-certificate-bal-con-certificate-module")]).then(__webpack_require__.bind(null, /*! ./bal-con-certificate/bal-con-certificate.module */ "./src/app/theme/reports/balance-book/bal-con-certificate/bal-con-certificate.module.ts")).then(m => m.BalConCertificateModule)
            },
            {
                path: 'shortballist',
                loadChildren: () => Promise.all(/*! import() | short-bal-list-short-bal-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("common"), __webpack_require__.e("short-bal-list-short-bal-list-module")]).then(__webpack_require__.bind(null, /*! ./short-bal-list/short-bal-list.module */ "./src/app/theme/reports/balance-book/short-bal-list/short-bal-list.module.ts")).then(m => m.ShortBalListModule)
            },
            {
                path: 'ledgBwiseDLdetails',
                loadChildren: () => Promise.all(/*! import() | ledg-bwise-dl-details-ledg-bwise-dl-details-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("ledg-bwise-dl-details-ledg-bwise-dl-details-module")]).then(__webpack_require__.bind(null, /*! ./ledg-bwise-dl-details/ledg-bwise-dl-details.module */ "./src/app/theme/reports/balance-book/ledg-bwise-dl-details/ledg-bwise-dl-details.module.ts")).then(m => m.LedgBwiseDlDetailsModule)
            },
            {
                path: 'AmtSizeWiseBalList',
                loadChildren: () => Promise.all(/*! import() | amtsize-wise-bal-list-amtsize-wise-bal-list-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("amtsize-wise-bal-list-amtsize-wise-bal-list-module")]).then(__webpack_require__.bind(null, /*! ./amtsize-wise-bal-list/amtsize-wise-bal-list.module */ "./src/app/theme/reports/balance-book/amtsize-wise-bal-list/amtsize-wise-bal-list.module.ts")).then(m => m.AmtsizeWiseBalListModule)
            },
            {
                path: 'ledgBwiseBtypeMember',
                loadChildren: () => Promise.all(/*! import() | ledg-bwise-btype-member-ledg-bwise-btype-member-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("ledg-bwise-btype-member-ledg-bwise-btype-member-module")]).then(__webpack_require__.bind(null, /*! ./ledg-bwise-btype-member/ledg-bwise-btype-member.module */ "./src/app/theme/reports/balance-book/ledg-bwise-btype-member/ledg-bwise-btype-member.module.ts")).then(m => m.LedgBwiseBtypeMemberModule)
            },
        ]
    }
];
class BalanceBookRoutingModule {
}
BalanceBookRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BalanceBookRoutingModule });
BalanceBookRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BalanceBookRoutingModule_Factory(t) { return new (t || BalanceBookRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BalanceBookRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalanceBookRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/balance-book/balanceBook.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/reports/balance-book/balanceBook.module.ts ***!
  \******************************************************************/
/*! exports provided: BalanceBookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceBookModule", function() { return BalanceBookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _balance_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance-book.component */ "./src/app/theme/reports/balance-book/balance-book.component.ts");
/* harmony import */ var _balanceBook_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balanceBook-routing.module */ "./src/app/theme/reports/balance-book/balanceBook-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");





// import {ChartModule} from 'angular2-chartjs';



class BalanceBookModule {
}
BalanceBookModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BalanceBookModule });
BalanceBookModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BalanceBookModule_Factory(t) { return new (t || BalanceBookModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _balanceBook_routing_module__WEBPACK_IMPORTED_MODULE_3__["BalanceBookRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BalanceBookModule, { declarations: [_balance_book_component__WEBPACK_IMPORTED_MODULE_2__["BalanceBookComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _balanceBook_routing_module__WEBPACK_IMPORTED_MODULE_3__["BalanceBookRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalanceBookModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _balanceBook_routing_module__WEBPACK_IMPORTED_MODULE_3__["BalanceBookRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_balance_book_component__WEBPACK_IMPORTED_MODULE_2__["BalanceBookComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=balance-book-balanceBook-module.js.map