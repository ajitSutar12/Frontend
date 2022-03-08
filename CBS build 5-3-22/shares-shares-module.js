(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shares-shares-module"],{

/***/ "./src/app/theme/master/shares/shares-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/master/shares/shares-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: SharesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesRoutingModule", function() { return SharesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




// import {SharesComponent} from './shares.component';
const routes = [
    {
        path: '',
        // component: SharesComponent,
        data: {
            title: 'Shares',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        },
        children: [
            {
                path: 'dividendCalculation',
                loadChildren: () => Promise.all(/*! import() | dividend-calculation-dividend-calculation-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("default~account-opening-account-opening-module~accountwise-document-acceptance-accountwise-document-~58247202"), __webpack_require__.e("default~analytics-analytics-module~anamat-gsm-anamat-gsm-module~balance-updation-balance-updation-mo~cd10a818"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~balance-updation-balance~e589de83"), __webpack_require__.e("default~balance-updation-balance-updation-module~cash-credit-ac-renewal-cash-credit-ac-renewal-modul~8d3dd98c"), __webpack_require__.e("common"), __webpack_require__.e("dividend-calculation-dividend-calculation-module")]).then(__webpack_require__.bind(null, /*! ./dividend-calculation/dividend-calculation.module */ "./src/app/theme/master/shares/dividend-calculation/dividend-calculation.module.ts")).then(m => m.DividendCalculationModule)
            },
            {
                path: 'dividendPosting',
                loadChildren: () => Promise.all(/*! import() | dividend-posting-dividend-posting-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("default~account-opening-account-opening-module~accountwise-document-acceptance-accountwise-document-~58247202"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~balance-updation-balance~e589de83"), __webpack_require__.e("dividend-posting-dividend-posting-module")]).then(__webpack_require__.bind(null, /*! ./dividend-posting/dividend-posting.module */ "./src/app/theme/master/shares/dividend-posting/dividend-posting.module.ts")).then(m => m.DividendPostingModule)
            },
            {
                path: 'dividendTransferEntry',
                loadChildren: () => Promise.all(/*! import() | dividend-transfer-entry-dividend-transfer-entry-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("default~account-opening-account-opening-module~accountwise-document-acceptance-accountwise-document-~58247202"), __webpack_require__.e("default~balance-updation-balance-updation-module~cash-credit-ac-renewal-cash-credit-ac-renewal-modul~8d3dd98c"), __webpack_require__.e("dividend-transfer-entry-dividend-transfer-entry-module")]).then(__webpack_require__.bind(null, /*! ./dividend-transfer-entry/dividend-transfer-entry.module */ "./src/app/theme/master/shares/dividend-transfer-entry/dividend-transfer-entry.module.ts")).then(m => m.DividendTransferEntryModule)
            },
            {
                path: 'dividendTransferPosting',
                loadChildren: () => Promise.all(/*! import() | dividend-transfer-posting-dividend-transfer-posting-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~cea22399"), __webpack_require__.e("dividend-transfer-posting-dividend-transfer-posting-module")]).then(__webpack_require__.bind(null, /*! ./dividend-transfer-posting/dividend-transfer-posting.module */ "./src/app/theme/master/shares/dividend-transfer-posting/dividend-transfer-posting.module.ts")).then(m => m.DividendTransferPostingModule)
            },
            {
                path: 'unpaidDividendEntry',
                loadChildren: () => Promise.all(/*! import() | unpaid-dividend-entry-unpaid-dividend-entry-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~cea22399"), __webpack_require__.e("common"), __webpack_require__.e("unpaid-dividend-entry-unpaid-dividend-entry-module")]).then(__webpack_require__.bind(null, /*! ./unpaid-dividend-entry/unpaid-dividend-entry.module */ "./src/app/theme/master/shares/unpaid-dividend-entry/unpaid-dividend-entry.module.ts")).then(m => m.UnpaidDividendEntryModule)
            },
            {
                path: 'yearWiseUnpaidDividendEntry',
                loadChildren: () => Promise.all(/*! import() | year-wise-unpaid-dividend-entry-year-wise-unpaid-dividend-entry-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("default~account-opening-account-opening-module~accountwise-document-acceptance-accountwise-document-~58247202"), __webpack_require__.e("default~analytics-analytics-module~anamat-gsm-anamat-gsm-module~balance-updation-balance-updation-mo~cd10a818"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~balance-updation-balance~e589de83"), __webpack_require__.e("year-wise-unpaid-dividend-entry-year-wise-unpaid-dividend-entry-module")]).then(__webpack_require__.bind(null, /*! ./year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.module */ "./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.module.ts")).then(m => m.YearWiseUnpaidDividendEntryModule)
            },
        ]
    }
];
class SharesRoutingModule {
}
SharesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharesRoutingModule });
SharesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharesRoutingModule_Factory(t) { return new (t || SharesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/shares/shares.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/master/shares/shares.component.ts ***!
  \*********************************************************/
/*! exports provided: SharesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesComponent", function() { return SharesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SharesComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharesComponent.ɵfac = function SharesComponent_Factory(t) { return new (t || SharesComponent)(); };
SharesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharesComponent, selectors: [["app-shares"]], decls: 2, vars: 0, template: function SharesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shares works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9zaGFyZXMvc2hhcmVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shares',
                templateUrl: './shares.component.html',
                styleUrls: ['./shares.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/shares/shares.module.ts":
/*!******************************************************!*\
  !*** ./src/app/theme/master/shares/shares.module.ts ***!
  \******************************************************/
/*! exports provided: SharesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesModule", function() { return SharesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shares_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shares.component */ "./src/app/theme/master/shares/shares.component.ts");
/* harmony import */ var _shares_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shares-routing.module */ "./src/app/theme/master/shares/shares-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");








class SharesModule {
}
SharesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharesModule });
SharesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharesModule_Factory(t) { return new (t || SharesModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shares_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharesRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharesModule, { declarations: [_shares_component__WEBPACK_IMPORTED_MODULE_2__["SharesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shares_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharesRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shares_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharesRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_shares_component__WEBPACK_IMPORTED_MODULE_2__["SharesComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=shares-shares-module.js.map