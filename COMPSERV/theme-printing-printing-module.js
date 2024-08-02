(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-printing-printing-module"],{

/***/ "./src/app/theme/printing/printing-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/printing/printing-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PrintingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintingRoutingModule", function() { return PrintingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Printing',
            status: false
        },
        children: [
            {
                path: 'passbookPrinting',
                loadChildren: () => __webpack_require__.e(/*! import() | passbook-printing-passbook-printing-module */ "passbook-printing-passbook-printing-module").then(__webpack_require__.bind(null, /*! ./passbook-printing/passbook-printing.module */ "./src/app/theme/printing/passbook-printing/passbook-printing.module.ts")).then(m => m.PassbookPrintingModule)
            },
            {
                path: 'termDepositReceiptPrinting',
                loadChildren: () => Promise.all(/*! import() | term-deposit-receipt-printing-term-deposit-receipt-printing-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~9b8ef625"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~b2eeeb56"), __webpack_require__.e("common"), __webpack_require__.e("term-deposit-receipt-printing-term-deposit-receipt-printing-module")]).then(__webpack_require__.bind(null, /*! ./term-deposit-receipt-printing/term-deposit-receipt-printing.module */ "./src/app/theme/printing/term-deposit-receipt-printing/term-deposit-receipt-printing.module.ts")).then(m => m.TermDepositReceiptPrintingModule)
            },
            {
                path: 'voucherPrint',
                loadChildren: () => Promise.all(/*! import() | voucher-printing-voucher-printing-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~9b8ef625"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~b2eeeb56"), __webpack_require__.e("common"), __webpack_require__.e("voucher-printing-voucher-printing-module")]).then(__webpack_require__.bind(null, /*! ./voucher-printing/voucher-printing.module */ "./src/app/theme/printing/voucher-printing/voucher-printing.module.ts")).then(m => m.VoucherPrintingModule)
            },
            {
                path: 'goldSilverReceipt',
                loadChildren: () => Promise.all(/*! import() | gold-silver-receipt-print-gold-silver-receipt-print-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("gold-silver-receipt-print-gold-silver-receipt-print-module")]).then(__webpack_require__.bind(null, /*! ./gold-silver-receipt-print/gold-silver-receipt-print.module */ "./src/app/theme/printing/gold-silver-receipt-print/gold-silver-receipt-print.module.ts")).then(m => m.GoldSilverReceiptPrintModule)
            },
            {
                path: 'tDReceiptPrinting',
                loadChildren: () => Promise.all(/*! import() | td-recipt-printing-td-recipt-printing-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~9b8ef625"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~b2eeeb56"), __webpack_require__.e("td-recipt-printing-td-recipt-printing-module")]).then(__webpack_require__.bind(null, /*! ./td-recipt-printing/td-recipt-printing.module */ "./src/app/theme/printing/td-recipt-printing/td-recipt-printing.module.ts")).then(m => m.TdReciptPrintingModule)
            },
        ]
    }
];
class PrintingRoutingModule {
}
PrintingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrintingRoutingModule });
PrintingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PrintingRoutingModule_Factory(t) { return new (t || PrintingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrintingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/printing/printing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/theme/printing/printing.module.ts ***!
  \***************************************************/
/*! exports provided: PrintingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintingModule", function() { return PrintingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _printing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printing-routing.module */ "./src/app/theme/printing/printing-routing.module.ts");




class PrintingModule {
}
PrintingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrintingModule });
PrintingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PrintingModule_Factory(t) { return new (t || PrintingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _printing_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrintingRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrintingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _printing_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrintingRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _printing_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrintingRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-printing-printing-module.js.map