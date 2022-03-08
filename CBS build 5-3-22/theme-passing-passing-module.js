(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-passing-passing-module"],{

/***/ "./src/app/theme/passing/passing-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/passing/passing-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PassingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassingRoutingModule", function() { return PassingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Passing',
            status: false
        },
        children: [
            {
                path: 'centralisedPassing',
                loadChildren: () => Promise.all(/*! import() | centralised-passing-centralisedPassing-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("default~account-opening-account-opening-module~accountwise-document-acceptance-accountwise-document-~58247202"), __webpack_require__.e("default~analytics-analytics-module~anamat-gsm-anamat-gsm-module~balance-updation-balance-updation-mo~cd10a818"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~balance-updation-balance~e589de83"), __webpack_require__.e("default~balance-updation-balance-updation-module~cash-credit-ac-renewal-cash-credit-ac-renewal-modul~8d3dd98c"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~cash-~9cd5fbc1"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~centralised-passin~026367b2"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~b55a141a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~current-account-master-current-account-master-~6d5c9f96"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~s~4f391a8a"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~53f833b5"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~interest-instruction-interest-instruction-modu~040f9f50"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~term-loan-master-term-loan-master-module"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~term-deposits-master-term-deposits-master-module"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~saving-master-saving-master-module"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~pigmy-account-master-pigmy-account-master-module"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~current-account-master-current-account-master-module"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~shares-master-shares-master-module"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~pigmy-agent-master-pigmy-agent-master-module"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~dead-stock-master-dead-stock-master-module"), __webpack_require__.e("default~account-opening-account-opening-module~centralised-passing-centralisedPassing-module"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~centralised-passing-centralisedPassing-module"), __webpack_require__.e("centralised-passing-centralisedPassing-module")]).then(__webpack_require__.bind(null, /*! ./centralised-passing/centralisedPassing.module */ "./src/app/theme/passing/centralised-passing/centralisedPassing.module.ts")).then(m => m.CentralisedPassingModule)
            },
            //
            {
                path: 'sharesTransactionPassing',
                loadChildren: () => Promise.all(/*! import() | shares-transaction-passing-sharesTransactionPassing-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("shares-transaction-passing-sharesTransactionPassing-module")]).then(__webpack_require__.bind(null, /*! ./shares-transaction-passing/sharesTransactionPassing.module */ "./src/app/theme/passing/shares-transaction-passing/sharesTransactionPassing.module.ts")).then(m => m.SharesTransactionPassingModule)
            },
            //
            {
                path: 'unapproval',
                loadChildren: () => Promise.all(/*! import() | unapproval-unapproval-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~cea22399"), __webpack_require__.e("default~day-book-ie-day-book-ie-module~demand-draft-dei-demand-draft-dei-module~demo-demo-module~for~21e8873b"), __webpack_require__.e("unapproval-unapproval-module")]).then(__webpack_require__.bind(null, /*! ./unapproval/unapproval.module */ "./src/app/theme/passing/unapproval/unapproval.module.ts")).then(m => m.UnapprovalModule)
            },
            //
            {
                path: 'masterUnlock',
                loadChildren: () => Promise.all(/*! import() | master-unlock-masterUnlock-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("master-unlock-masterUnlock-module")]).then(__webpack_require__.bind(null, /*! ./master-unlock/masterUnlock.module */ "./src/app/theme/passing/master-unlock/masterUnlock.module.ts")).then(m => m.MasterUnlockModule)
            },
        ]
    }
];
class PassingRoutingModule {
}
PassingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PassingRoutingModule });
PassingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PassingRoutingModule_Factory(t) { return new (t || PassingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PassingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PassingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/passing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/theme/passing/passing.module.ts ***!
  \*************************************************/
/*! exports provided: PassingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassingModule", function() { return PassingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _passing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passing-routing.module */ "./src/app/theme/passing/passing-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");



// import { MasterUnlockComponent } from './master-unlock/master-unlock.component';
// import { UnapprovalComponent } from './unapproval/unapproval.component';
// import { CentralisedPassingComponent } from './centralised-passing/centralised-passing.component';
// import { SharesTransactionPassingComponent } from './shares-transaction-passing/shares-transaction-passing.component';



class PassingModule {
}
PassingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PassingModule });
PassingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PassingModule_Factory(t) { return new (t || PassingModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _passing_routing_module__WEBPACK_IMPORTED_MODULE_2__["PassingRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PassingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _passing_routing_module__WEBPACK_IMPORTED_MODULE_2__["PassingRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PassingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _passing_routing_module__WEBPACK_IMPORTED_MODULE_2__["PassingRoutingModule"],
                ],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-passing-passing-module.js.map