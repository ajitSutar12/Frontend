(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["investment-investment-module"],{

/***/ "./src/app/theme/master/investment/investment-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/master/investment/investment-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: InvestmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentRoutingModule", function() { return InvestmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Investment',
            status: false
        },
        children: [
            {
                path: 'transactionEntry',
                loadChildren: () => Promise.all(/*! import() | transaction-entry-transaction-entry-module */[__webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~8ccd25db"), __webpack_require__.e("transaction-entry-transaction-entry-module")]).then(__webpack_require__.bind(null, /*! ./transaction-entry/transaction-entry.module */ "./src/app/theme/master/investment/transaction-entry/transaction-entry.module.ts")).then(m => m.TransactionEntryModule)
            },
            {
                path: 'accountClosing',
                loadChildren: () => Promise.all(/*! import() | account-closing-account-closing-module */[__webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~8ccd25db"), __webpack_require__.e("account-closing-account-closing-module")]).then(__webpack_require__.bind(null, /*! ./account-closing/account-closing.module */ "./src/app/theme/master/investment/account-closing/account-closing.module.ts")).then(m => m.AccountClosingModule)
            },
            {
                path: 'accountOpenPassing',
                loadChildren: () => Promise.all(/*! import() | account-open-passing-account-open-passing-module */[__webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~8ccd25db"), __webpack_require__.e("account-open-passing-account-open-passing-module")]).then(__webpack_require__.bind(null, /*! ./account-open-passing/account-open-passing.module */ "./src/app/theme/master/investment/account-open-passing/account-open-passing.module.ts")).then(m => m.AccountOpenPassingModule)
            },
            {
                path: 'transactionPassing',
                loadChildren: () => Promise.all(/*! import() | transaction-passing-transaction-passing-module */[__webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~8ccd25db"), __webpack_require__.e("transaction-passing-transaction-passing-module")]).then(__webpack_require__.bind(null, /*! ./transaction-passing/transaction-passing.module */ "./src/app/theme/master/investment/transaction-passing/transaction-passing.module.ts")).then(m => m.TransactionPassingModule)
            },
            {
                path: 'accountClosePassing',
                loadChildren: () => Promise.all(/*! import() | account-close-passing-account-close-passing-module */[__webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~8ccd25db"), __webpack_require__.e("account-close-passing-account-close-passing-module")]).then(__webpack_require__.bind(null, /*! ./account-close-passing/account-close-passing.module */ "./src/app/theme/master/investment/account-close-passing/account-close-passing.module.ts")).then(m => m.AccountClosePassingModule)
            },
        ]
    }
];
class InvestmentRoutingModule {
}
InvestmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvestmentRoutingModule });
InvestmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvestmentRoutingModule_Factory(t) { return new (t || InvestmentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvestmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestmentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/investment/investment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/master/investment/investment.component.ts ***!
  \*****************************************************************/
/*! exports provided: InvestmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentComponent", function() { return InvestmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InvestmentComponent {
    constructor() { }
    ngOnInit() {
    }
}
InvestmentComponent.ɵfac = function InvestmentComponent_Factory(t) { return new (t || InvestmentComponent)(); };
InvestmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestmentComponent, selectors: [["app-investment"]], decls: 2, vars: 0, template: function InvestmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "investment works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9pbnZlc3RtZW50L2ludmVzdG1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-investment',
                templateUrl: './investment.component.html',
                styleUrls: ['./investment.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/investment/investment.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/master/investment/investment.module.ts ***!
  \**************************************************************/
/*! exports provided: InvestmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentModule", function() { return InvestmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _investment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investment.component */ "./src/app/theme/master/investment/investment.component.ts");
/* harmony import */ var _investment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./investment-routing.module */ "./src/app/theme/master/investment/investment-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");








class InvestmentModule {
}
InvestmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvestmentModule });
InvestmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvestmentModule_Factory(t) { return new (t || InvestmentModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _investment_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvestmentRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvestmentModule, { declarations: [_investment_component__WEBPACK_IMPORTED_MODULE_2__["InvestmentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _investment_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvestmentRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _investment_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvestmentRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_investment_component__WEBPACK_IMPORTED_MODULE_2__["InvestmentComponent"],],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=investment-investment-module.js.map