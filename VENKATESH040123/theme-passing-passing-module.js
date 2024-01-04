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
                loadChildren: () => Promise.all(/*! import() | centralised-passing-centralisedPassing-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~a946a189"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~cash-~ddd43659"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~f8b8f8d0"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~centralised-passin~8d2c5d11"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~6dad4c2a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~d2c58f51"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~4926e085"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~e740a259"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~m~b549deb6"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~a3a628d8"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~scheme-param~af6ab334"), __webpack_require__.e("default~batch-voucher-batch-voucher-module~centralised-passing-centralisedPassing-module~master-unlo~093be79f"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~interest-instruction-interest-instruction-modu~e7ca019d"), __webpack_require__.e("default~button-button-module~centralised-passing-centralisedPassing-module~master-unlock-masterUnloc~175cd2f5"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~m~b193468d"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~b9e09a18"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~e2f6e169"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~m~e6cf2795"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~pigmy-accoun~38a78257"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~saving-maste~ff538ca8"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~current-account-master-current-account-master-~8973751f"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~share-transa~9f57c8de"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shares-maste~e8e7122d"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~locker-master-locker-master-module~master-unlo~ec09e23a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~db13f0ff"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~savings-pigm~27b97b3a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~465dbe6a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~pigmy-agent-~088f9406"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~dead-stock-purchase-dead-stock-purchase-module~b0ab237f"), __webpack_require__.e("default~cash-credit-ac-renewal-cash-credit-ac-renewal-module~centralised-passing-centralisedPassing-~5540bd3a"), __webpack_require__.e("default~account-opening-account-opening-module~centralised-passing-centralisedPassing-module~master-~f0beee37"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~dead-stock-transaction-dead-stock-transaction-~b51d2599"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~dead-stock-master-dead-stock-master-module~mas~e5765337"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~centralised-passing-centralisedPassing-module~master-unlock-mas~eabe2aa2"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~locker-rent-transactions-locker-rent-transacti~8c80da37"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~gold-silver-return-entry-gold-silver-return-en~b2f2e1b6"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~00882204")]).then(__webpack_require__.bind(null, /*! ./centralised-passing/centralisedPassing.module */ "./src/app/theme/passing/centralised-passing/centralisedPassing.module.ts")).then(m => m.CentralisedPassingModule)
            },
            {
                path: 'unapprove',
                loadChildren: () => Promise.all(/*! import() | master-unlock-masterUnlock-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~anamat-gsm-ana~a946a189"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~cash-~ddd43659"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~f8b8f8d0"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~centralised-passin~8d2c5d11"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~6dad4c2a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~d2c58f51"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~4926e085"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~e740a259"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~m~b549deb6"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~a3a628d8"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~scheme-param~af6ab334"), __webpack_require__.e("default~batch-voucher-batch-voucher-module~centralised-passing-centralisedPassing-module~master-unlo~093be79f"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~interest-instruction-interest-instruction-modu~e7ca019d"), __webpack_require__.e("default~button-button-module~centralised-passing-centralisedPassing-module~master-unlock-masterUnloc~175cd2f5"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~m~b193468d"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~b9e09a18"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~e2f6e169"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~m~e6cf2795"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~pigmy-accoun~38a78257"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~saving-maste~ff538ca8"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~current-account-master-current-account-master-~8973751f"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~share-transa~9f57c8de"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shares-maste~e8e7122d"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~locker-master-locker-master-module~master-unlo~ec09e23a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~db13f0ff"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~savings-pigm~27b97b3a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~465dbe6a"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~pigmy-agent-~088f9406"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~dead-stock-purchase-dead-stock-purchase-module~b0ab237f"), __webpack_require__.e("default~cash-credit-ac-renewal-cash-credit-ac-renewal-module~centralised-passing-centralisedPassing-~5540bd3a"), __webpack_require__.e("default~account-opening-account-opening-module~centralised-passing-centralisedPassing-module~master-~f0beee37"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~dead-stock-transaction-dead-stock-transaction-~b51d2599"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~dead-stock-master-dead-stock-master-module~mas~e5765337"), __webpack_require__.e("default~anamat-gsm-anamat-gsm-module~centralised-passing-centralisedPassing-module~master-unlock-mas~eabe2aa2"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~locker-rent-transactions-locker-rent-transacti~8c80da37"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~gold-silver-return-entry-gold-silver-return-en~b2f2e1b6"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~00882204"), __webpack_require__.e("master-unlock-masterUnlock-module")]).then(__webpack_require__.bind(null, /*! ./master-unlock/masterUnlock.module */ "./src/app/theme/passing/master-unlock/masterUnlock.module.ts")).then(m => m.MasterUnlockModule)
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