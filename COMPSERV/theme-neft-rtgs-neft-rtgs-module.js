(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-neft-rtgs-neft-rtgs-module"],{

/***/ "./src/app/theme/neft-rtgs/neft-rtgs-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/neft-rtgs/neft-rtgs-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NeftRtgsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeftRtgsRoutingModule", function() { return NeftRtgsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'neftRtgs',
            status: false
        },
        children: [
            {
                path: 'neftTransfer',
                loadChildren: () => Promise.all(/*! import() | neft-transaction-neft-transaction-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("neft-transaction-neft-transaction-module")]).then(__webpack_require__.bind(null, /*! ./neft-transaction/neft-transaction.module */ "./src/app/theme/neft-rtgs/neft-transaction/neft-transaction.module.ts")).then(m => m.NeftTransactionModule)
            },
            {
                path: 'rtgsTransfer',
                loadChildren: () => Promise.all(/*! import() | rtgs-transaction-rtgs-transaction-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("rtgs-transaction-rtgs-transaction-module")]).then(__webpack_require__.bind(null, /*! ./rtgs-transaction/rtgs-transaction.module */ "./src/app/theme/neft-rtgs/rtgs-transaction/rtgs-transaction.module.ts")).then(m => m.RtgsTransactionModule)
            },
            {
                path: 'billPayment',
                loadChildren: () => Promise.all(/*! import() | bill-payment-bill-payment-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("bill-payment-bill-payment-module")]).then(__webpack_require__.bind(null, /*! ./bill-payment/bill-payment.module */ "./src/app/theme/neft-rtgs/bill-payment/bill-payment.module.ts")).then(m => m.BillPaymentModule)
            },
            {
                path: 'fundTransfer',
                loadChildren: () => __webpack_require__.e(/*! import() | fund-transfer-fund-transfer-module */ "fund-transfer-fund-transfer-module").then(__webpack_require__.bind(null, /*! ./fund-transfer/fund-transfer.module */ "./src/app/theme/neft-rtgs/fund-transfer/fund-transfer.module.ts")).then(m => m.FundTransferModule)
            },
        ]
    }
];
class NeftRtgsRoutingModule {
}
NeftRtgsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NeftRtgsRoutingModule });
NeftRtgsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NeftRtgsRoutingModule_Factory(t) { return new (t || NeftRtgsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NeftRtgsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NeftRtgsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/neft-rtgs/neft-rtgs.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/neft-rtgs/neft-rtgs.module.ts ***!
  \*****************************************************/
/*! exports provided: NeftRtgsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeftRtgsModule", function() { return NeftRtgsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _neft_rtgs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neft-rtgs-routing.module */ "./src/app/theme/neft-rtgs/neft-rtgs-routing.module.ts");




class NeftRtgsModule {
}
NeftRtgsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NeftRtgsModule });
NeftRtgsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NeftRtgsModule_Factory(t) { return new (t || NeftRtgsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _neft_rtgs_routing_module__WEBPACK_IMPORTED_MODULE_2__["NeftRtgsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NeftRtgsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _neft_rtgs_routing_module__WEBPACK_IMPORTED_MODULE_2__["NeftRtgsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NeftRtgsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _neft_rtgs_routing_module__WEBPACK_IMPORTED_MODULE_2__["NeftRtgsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-neft-rtgs-neft-rtgs-module.js.map