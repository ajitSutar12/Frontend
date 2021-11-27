(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cash-denomination-cash-denomination-module"],{

/***/ "./src/app/theme/transaction/cash-denomination/cash-denomination-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/transaction/cash-denomination/cash-denomination-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CashDenominationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashDenominationRoutingModule", function() { return CashDenominationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Cash denomination',
            status: false
        },
        children: [
            {
                path: 'acceptD',
                loadChildren: () => Promise.all(/*! import() | accept-d-accept-d-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("accept-d-accept-d-module")]).then(__webpack_require__.bind(null, /*! ./accept-d/accept-d.module */ "./src/app/theme/transaction/cash-denomination/accept-d/accept-d.module.ts")).then(m => m.AcceptDModule)
            },
            {
                path: 'paymentDenomination',
                loadChildren: () => Promise.all(/*! import() | payment-denomination-payment-denomination-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("payment-denomination-payment-denomination-module")]).then(__webpack_require__.bind(null, /*! ./payment-denomination/payment-denomination.module */ "./src/app/theme/transaction/cash-denomination/payment-denomination/payment-denomination.module.ts")).then(m => m.PaymentDenominationModule)
            },
            {
                path: 'cashInDenomination',
                loadChildren: () => Promise.all(/*! import() | cash-in-denomination-cash-in-denomination-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("cash-in-denomination-cash-in-denomination-module")]).then(__webpack_require__.bind(null, /*! ./cash-in-denomination/cash-in-denomination.module */ "./src/app/theme/transaction/cash-denomination/cash-in-denomination/cash-in-denomination.module.ts")).then(m => m.CashInDenominationModule)
            },
            {
                path: 'cashOutDenomination',
                loadChildren: () => Promise.all(/*! import() | cash-out-denomination-cash-out-denomination-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("cash-out-denomination-cash-out-denomination-module")]).then(__webpack_require__.bind(null, /*! ./cash-out-denomination/cash-out-denomination.module */ "./src/app/theme/transaction/cash-denomination/cash-out-denomination/cash-out-denomination.module.ts")).then(m => m.CashOutDenominationModule)
            },
            {
                path: 'cashInitialisationEntry',
                loadChildren: () => Promise.all(/*! import() | cash-initialisation-entry-cash-initialisation-entry-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("cash-initialisation-entry-cash-initialisation-entry-module")]).then(__webpack_require__.bind(null, /*! ./cash-initialisation-entry/cash-initialisation-entry.module */ "./src/app/theme/transaction/cash-denomination/cash-initialisation-entry/cash-initialisation-entry.module.ts")).then(m => m.CashInitialisationEntryModule)
            },
            {
                path: 'safeValultToCashier',
                loadChildren: () => Promise.all(/*! import() | safe-vault-to-cashier-safe-vault-to-cashier-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("safe-vault-to-cashier-safe-vault-to-cashier-module")]).then(__webpack_require__.bind(null, /*! ./safe-vault-to-cashier/safe-vault-to-cashier.module */ "./src/app/theme/transaction/cash-denomination/safe-vault-to-cashier/safe-vault-to-cashier.module.ts")).then(m => m.SafeValultToCashierModule)
            },
            {
                path: 'cashierToSafeVault',
                loadChildren: () => Promise.all(/*! import() | cashier-to-safe-vault-cashier-to-safe-vault-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("cashier-to-safe-vault-cashier-to-safe-vault-module")]).then(__webpack_require__.bind(null, /*! ./cashier-to-safe-vault/cashier-to-safe-vault.module */ "./src/app/theme/transaction/cash-denomination/cashier-to-safe-vault/cashier-to-safe-vault.module.ts")).then(m => m.CashierToSafeVaultModule)
            },
        ]
    }
];
class CashDenominationRoutingModule {
}
CashDenominationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CashDenominationRoutingModule });
CashDenominationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CashDenominationRoutingModule_Factory(t) { return new (t || CashDenominationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CashDenominationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashDenominationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/cash-denomination/cash-denomination.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/transaction/cash-denomination/cash-denomination.component.ts ***!
  \************************************************************************************/
/*! exports provided: CashDenominationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashDenominationComponent", function() { return CashDenominationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CashDenominationComponent {
    constructor() { }
    ngOnInit() {
    }
}
CashDenominationComponent.ɵfac = function CashDenominationComponent_Factory(t) { return new (t || CashDenominationComponent)(); };
CashDenominationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CashDenominationComponent, selectors: [["app-cash-denomination"]], decls: 2, vars: 0, template: function CashDenominationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cash-denomination works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RyYW5zYWN0aW9uL2Nhc2gtZGVub21pbmF0aW9uL2Nhc2gtZGVub21pbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashDenominationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cash-denomination',
                templateUrl: './cash-denomination.component.html',
                styleUrls: ['./cash-denomination.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/cash-denomination/cash-denomination.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/transaction/cash-denomination/cash-denomination.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CashDenominationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashDenominationModule", function() { return CashDenominationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cash_denomination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cash-denomination.component */ "./src/app/theme/transaction/cash-denomination/cash-denomination.component.ts");
/* harmony import */ var _cash_denomination_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cash-denomination-routing.module */ "./src/app/theme/transaction/cash-denomination/cash-denomination-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class CashDenominationModule {
}
CashDenominationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CashDenominationModule });
CashDenominationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CashDenominationModule_Factory(t) { return new (t || CashDenominationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _cash_denomination_routing_module__WEBPACK_IMPORTED_MODULE_3__["CashDenominationRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CashDenominationModule, { declarations: [_cash_denomination_component__WEBPACK_IMPORTED_MODULE_2__["CashDenominationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _cash_denomination_routing_module__WEBPACK_IMPORTED_MODULE_3__["CashDenominationRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashDenominationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _cash_denomination_routing_module__WEBPACK_IMPORTED_MODULE_3__["CashDenominationRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_cash_denomination_component__WEBPACK_IMPORTED_MODULE_2__["CashDenominationComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cash-denomination-cash-denomination-module.js.map