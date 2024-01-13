(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-extension-invoice-invoice-module"],{

/***/ "./src/app/theme/extension/invoice/invoice-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/extension/invoice/invoice-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function() { return InvoiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Invoice',
            status: false
        },
        children: [
            {
                path: 'basic',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-invoice-basic-invoice-module */ "basic-invoice-basic-invoice-module").then(__webpack_require__.bind(null, /*! ./basic-invoice/basic-invoice.module */ "./src/app/theme/extension/invoice/basic-invoice/basic-invoice.module.ts")).then(m => m.BasicInvoiceModule)
            },
            {
                path: 'summary',
                loadChildren: () => Promise.all(/*! import() | invoice-summary-invoice-summary-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~analytics-analytics-module~chart-js-chart-js-module~chart-widget-chart-widget-module~crm-das~590074bb"), __webpack_require__.e("invoice-summary-invoice-summary-module")]).then(__webpack_require__.bind(null, /*! ./invoice-summary/invoice-summary.module */ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.module.ts")).then(m => m.InvoiceSummaryModule)
            },
            {
                path: 'list',
                loadChildren: () => __webpack_require__.e(/*! import() | invoice-list-invoice-list-module */ "invoice-list-invoice-list-module").then(__webpack_require__.bind(null, /*! ./invoice-list/invoice-list.module */ "./src/app/theme/extension/invoice/invoice-list/invoice-list.module.ts")).then(m => m.InvoiceListModule)
            }
        ]
    }
];
class InvoiceRoutingModule {
}
InvoiceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvoiceRoutingModule });
InvoiceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvoiceRoutingModule_Factory(t) { return new (t || InvoiceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvoiceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/extension/invoice/invoice.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/extension/invoice/invoice.module.ts ***!
  \***********************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-routing.module */ "./src/app/theme/extension/invoice/invoice-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





class InvoiceModule {
}
InvoiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvoiceModule });
InvoiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvoiceModule_Factory(t) { return new (t || InvoiceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoiceRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvoiceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoiceRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _invoice_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvoiceRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-extension-invoice-invoice-module.js.map