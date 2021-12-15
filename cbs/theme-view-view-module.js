(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-view-view-module"],{

/***/ "./src/app/theme/view/view-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/theme/view/view-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoutingModule", function() { return ViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'View',
            status: false
        },
        children: [
            {
                path: 'accountEnquiry',
                loadChildren: () => Promise.all(/*! import() | account-enquiry-account-enquiry-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("account-enquiry-account-enquiry-module")]).then(__webpack_require__.bind(null, /*! ./account-enquiry/account-enquiry.module */ "./src/app/theme/view/account-enquiry/account-enquiry.module.ts")).then(m => m.AccountEnquiryModule)
            },
            {
                path: 'masterCard',
                loadChildren: () => Promise.all(/*! import() | master-card-master-card-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("master-card-master-card-module")]).then(__webpack_require__.bind(null, /*! ./master-card/master-card.module */ "./src/app/theme/view/master-card/master-card.module.ts")).then(m => m.MasterCardModule)
            },
            {
                path: 'ledgerView',
                loadChildren: () => Promise.all(/*! import() | ledger-view-ledger-view-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("ledger-view-ledger-view-module")]).then(__webpack_require__.bind(null, /*! ./ledger-view/ledger-view.module */ "./src/app/theme/view/ledger-view/ledger-view.module.ts")).then(m => m.LedgerViewModule)
            },
            {
                path: 'sharesLedgerView',
                loadChildren: () => Promise.all(/*! import() | shares-ledger-view-shares-ledger-view-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("shares-ledger-view-shares-ledger-view-module")]).then(__webpack_require__.bind(null, /*! ./shares-ledger-view/shares-ledger-view.module */ "./src/app/theme/view/shares-ledger-view/shares-ledger-view.module.ts")).then(m => m.SharesLedgerViewModule)
            },
            {
                path: 'managerView',
                loadChildren: () => __webpack_require__.e(/*! import() | manager-view-manager-view-module */ "manager-view-manager-view-module").then(__webpack_require__.bind(null, /*! ./manager-view/manager-view.module */ "./src/app/theme/view/manager-view/manager-view.module.ts")).then(m => m.ManagerViewModule)
            },
            {
                path: 'voucherView',
                loadChildren: () => Promise.all(/*! import() | voucher-view-voucher-view-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("voucher-view-voucher-view-module")]).then(__webpack_require__.bind(null, /*! ./voucher-view/voucher-view.module */ "./src/app/theme/view/voucher-view/voucher-view.module.ts")).then(m => m.VoucherViewModule)
            },
            {
                path: 'customerView',
                loadChildren: () => Promise.all(/*! import() | customer-view-customer-view-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("customer-view-customer-view-module")]).then(__webpack_require__.bind(null, /*! ./customer-view/customer-view.module */ "./src/app/theme/view/customer-view/customer-view.module.ts")).then(m => m.CustomerViewModule)
            },
            {
                path: 'guarantorView',
                loadChildren: () => Promise.all(/*! import() | guarantor-view-guarantor-view-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("guarantor-view-guarantor-view-module")]).then(__webpack_require__.bind(null, /*! ./guarantor-view/guarantor-view.module */ "./src/app/theme/view/guarantor-view/guarantor-view.module.ts")).then(m => m.GuarantorViewModule)
            },
            {
                path: 'memberView',
                loadChildren: () => Promise.all(/*! import() | member-view-member-view-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("member-view-member-view-module")]).then(__webpack_require__.bind(null, /*! ./member-view/member-view.module */ "./src/app/theme/view/member-view/member-view.module.ts")).then(m => m.GeneralLedgerModule)
            },
            {
                path: 'memberLiablityView',
                loadChildren: () => Promise.all(/*! import() | member-liablity-view-member-liablity-view-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("member-liablity-view-member-liablity-view-module")]).then(__webpack_require__.bind(null, /*! ./member-liablity-view/member-liablity-view.module */ "./src/app/theme/view/member-liablity-view/member-liablity-view.module.ts")).then(m => m.MemberLiablityViewModule)
            },
            {
                path: 'otherView',
                loadChildren: () => Promise.all(/*! import() | other-view-other-view-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~2f043d06"), __webpack_require__.e("default~day-book-ie-day-book-ie-module~dead-stock-transaction-dead-stock-transaction-module~demand-d~0b944824"), __webpack_require__.e("other-view-other-view-module")]).then(__webpack_require__.bind(null, /*! ./other-view/other-view.module */ "./src/app/theme/view/other-view/other-view.module.ts")).then(m => m.OtherViewModule)
            },
        ]
    }
];
class ViewRoutingModule {
}
ViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewRoutingModule });
ViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewRoutingModule_Factory(t) { return new (t || ViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/view/view.module.ts":
/*!*******************************************!*\
  !*** ./src/app/theme/view/view.module.ts ***!
  \*******************************************/
/*! exports provided: ViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-routing.module */ "./src/app/theme/view/view-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");






class ViewModule {
}
ViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewModule });
ViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewModule_Factory(t) { return new (t || ViewModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _view_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _view_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _view_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewRoutingModule"]
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
//# sourceMappingURL=theme-view-view-module.js.map