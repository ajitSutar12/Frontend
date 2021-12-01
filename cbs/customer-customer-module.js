(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./src/app/theme/master/customer/customer-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/master/customer/customer-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        //component: CustomerComponent,
        data: {
            title: 'Customer',
            // icon: 'icon-home',
            // caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        },
        children: [
            {
                path: 'customerId',
                loadChildren: () => Promise.all(/*! import() | customer-id-customer-id-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~8ce6414a"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~fb55fefa"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~batch~bd71e2b1"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~current-account-ma~66d269b4")]).then(__webpack_require__.bind(null, /*! ./customer-id/customer-id.module */ "./src/app/theme/master/customer/customer-id/customer-id.module.ts")).then(m => m.CustomerIdModule)
            },
            {
                path: 'sharesMaster',
                loadChildren: () => Promise.all(/*! import() | shares-master-shares-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~8ce6414a"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~fb55fefa"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~batch~bd71e2b1"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~current-account-ma~66d269b4"), __webpack_require__.e("common"), __webpack_require__.e("shares-master-shares-master-module")]).then(__webpack_require__.bind(null, /*! ./shares-master/shares-master.module */ "./src/app/theme/master/customer/shares-master/shares-master.module.ts")).then(m => m.SharesMasterModule)
            },
            {
                path: 'anamatGSM',
                loadChildren: () => Promise.all(/*! import() | anamat-gsm-anamat-gsm-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~8ce6414a"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~fb55fefa"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~batch~bd71e2b1"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~current-account-ma~66d269b4"), __webpack_require__.e("common"), __webpack_require__.e("anamat-gsm-anamat-gsm-module")]).then(__webpack_require__.bind(null, /*! ./anamat-gsm/anamat-gsm.module */ "./src/app/theme/master/customer/anamat-gsm/anamat-gsm.module.ts")).then(m => m.AnamatGSMModule)
            },
            {
                path: 'savingMaster',
                loadChildren: () => Promise.all(/*! import() | saving-master-saving-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~8ce6414a"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~fb55fefa"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~batch~bd71e2b1"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~current-account-ma~66d269b4"), __webpack_require__.e("default~current-account-master-current-account-master-module~saving-master-saving-master-module"), __webpack_require__.e("common"), __webpack_require__.e("saving-master-saving-master-module")]).then(__webpack_require__.bind(null, /*! ./saving-master/saving-master.module */ "./src/app/theme/master/customer/saving-master/saving-master.module.ts")).then(m => m.SavingMasterModule)
            },
            {
                path: 'currentAccountMaster',
                loadChildren: () => Promise.all(/*! import() | current-account-master-current-account-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~8ce6414a"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~fb55fefa"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~batch~bd71e2b1"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~current-account-ma~66d269b4"), __webpack_require__.e("default~current-account-master-current-account-master-module~saving-master-saving-master-module"), __webpack_require__.e("current-account-master-current-account-master-module")]).then(__webpack_require__.bind(null, /*! ./current-account-master/current-account-master.module */ "./src/app/theme/master/customer/current-account-master/current-account-master.module.ts")).then(m => m.CurrentAccountMasterModule)
            },
            {
                path: 'termDepositsMaster',
                loadChildren: () => Promise.all(/*! import() | term-deposits-master-term-deposits-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("common"), __webpack_require__.e("term-deposits-master-term-deposits-master-module")]).then(__webpack_require__.bind(null, /*! ./term-deposits-master/term-deposits-master.module */ "./src/app/theme/master/customer/term-deposits-master/term-deposits-master.module.ts")).then(m => m.TermDepositsMasterModule)
            },
            {
                path: 'cashCreditMaster',
                loadChildren: () => Promise.all(/*! import() | cash-credit-master-cash-credit-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~8ce6414a"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~fb55fefa"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~batch~bd71e2b1"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~current-account-ma~66d269b4"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~dispute-loan-master-dispute-loan-master-module~~108e4581"), __webpack_require__.e("common"), __webpack_require__.e("cash-credit-master-cash-credit-master-module")]).then(__webpack_require__.bind(null, /*! ./cash-credit-master/cash-credit-master.module */ "./src/app/theme/master/customer/cash-credit-master/cash-credit-master.module.ts")).then(m => m.CashCreditMasterModule)
            },
            {
                path: 'termLoanMaster',
                loadChildren: () => Promise.all(/*! import() | term-loan-master-term-loan-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~8ce6414a"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~fb55fefa"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~batch~bd71e2b1"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~current-account-ma~66d269b4"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~dispute-loan-master-dispute-loan-master-module~~108e4581"), __webpack_require__.e("common"), __webpack_require__.e("term-loan-master-term-loan-master-module")]).then(__webpack_require__.bind(null, /*! ./term-loan-master/term-loan-master.module */ "./src/app/theme/master/customer/term-loan-master/term-loan-master.module.ts")).then(m => m.TermLoanMasterModule)
            },
            {
                path: 'disputeLoanMaster',
                loadChildren: () => Promise.all(/*! import() | dispute-loan-master-dispute-loan-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~8ce6414a"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~fb55fefa"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~batch~bd71e2b1"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~current-account-ma~66d269b4"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~dispute-loan-master-dispute-loan-master-module~~108e4581"), __webpack_require__.e("common"), __webpack_require__.e("dispute-loan-master-dispute-loan-master-module")]).then(__webpack_require__.bind(null, /*! ./dispute-loan-master/dispute-loan-master.module */ "./src/app/theme/master/customer/dispute-loan-master/dispute-loan-master.module.ts")).then(m => m.DisputeLoanMasterModule)
            },
            {
                path: 'pigmyAgentMaster',
                loadChildren: () => Promise.all(/*! import() | pigmy-agent-master-pigmy-agent-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("common"), __webpack_require__.e("pigmy-agent-master-pigmy-agent-master-module")]).then(__webpack_require__.bind(null, /*! ./pigmy-agent-master/pigmy-agent-master.module */ "./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.module.ts")).then(m => m.PigmyAgentMasterModule)
            },
            {
                path: 'pigmyAccountMaster',
                loadChildren: () => Promise.all(/*! import() | pigmy-account-master-pigmy-account-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("common"), __webpack_require__.e("pigmy-account-master-pigmy-account-master-module")]).then(__webpack_require__.bind(null, /*! ./pigmy-account-master/pigmy-account-master.module */ "./src/app/theme/master/customer/pigmy-account-master/pigmy-account-master.module.ts")).then(m => m.PigmyAccountMasterModule)
            },
            {
                path: 'deadStockMaster',
                loadChildren: () => Promise.all(/*! import() | dead-stock-master-dead-stock-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~8ce6414a"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~fb55fefa"), __webpack_require__.e("common"), __webpack_require__.e("dead-stock-master-dead-stock-master-module")]).then(__webpack_require__.bind(null, /*! ./dead-stock-master/dead-stock-master.module */ "./src/app/theme/master/customer/dead-stock-master/dead-stock-master.module.ts")).then(m => m.DeadStockMasterModule)
            },
            {
                path: 'deadStockMaster',
                loadChildren: () => Promise.all(/*! import() | dead-stock-master-dead-stock-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~8ce6414a"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~fb55fefa"), __webpack_require__.e("common"), __webpack_require__.e("dead-stock-master-dead-stock-master-module")]).then(__webpack_require__.bind(null, /*! ./dead-stock-master/dead-stock-master.module */ "./src/app/theme/master/customer/dead-stock-master/dead-stock-master.module.ts")).then(m => m.DeadStockMasterModule)
            },
            {
                path: 'accountOpening',
                loadChildren: () => Promise.all(/*! import() | account-opening-account-opening-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~8ce6414a"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~fb55fefa"), __webpack_require__.e("common"), __webpack_require__.e("account-opening-account-opening-module")]).then(__webpack_require__.bind(null, /*! ./account-opening/account-opening.module */ "./src/app/theme/master/customer/account-opening/account-opening.module.ts")).then(m => m.AccountOpeningModule)
            },
        ]
    }
];
class CustomerRoutingModule {
}
CustomerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomerRoutingModule });
CustomerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomerRoutingModule_Factory(t) { return new (t || CustomerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/customer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/master/customer/customer.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CustomerComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(); };
CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], decls: 2, vars: 0, template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "customer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer',
                templateUrl: './customer.component.html',
                styleUrls: ['./customer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/customer.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/master/customer/customer.module.ts ***!
  \**********************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.component */ "./src/app/theme/master/customer/customer.component.ts");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/theme/master/customer/customer-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class CustomerModule {
}
CustomerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomerModule });
CustomerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomerModule_Factory(t) { return new (t || CustomerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _customer_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerModule, { declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _customer_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _customer_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map