(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["final-reports-finalReports-module"],{

/***/ "./src/app/theme/reports/final-reports/final-reports.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/reports/final-reports/final-reports.component.ts ***!
  \************************************************************************/
/*! exports provided: FinalReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalReportsComponent", function() { return FinalReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FinalReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FinalReportsComponent.ɵfac = function FinalReportsComponent_Factory(t) { return new (t || FinalReportsComponent)(); };
FinalReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinalReportsComponent, selectors: [["app-final-reports"]], decls: 2, vars: 0, template: function FinalReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "final-reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvZmluYWwtcmVwb3J0cy9maW5hbC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinalReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-final-reports',
                templateUrl: './final-reports.component.html',
                styleUrls: ['./final-reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/final-reports/finalReports-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/reports/final-reports/finalReports-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: FinalReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalReportsRoutingModule", function() { return FinalReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        // component: FinalReportsComponent,
        data: {
            title: 'Final Reports',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        },
        children: [
            {
                path: 'BnkTrialBal',
                loadChildren: () => Promise.all(/*! import() | bnk-trial-bal-bnk-trial-bal-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("common"), __webpack_require__.e("bnk-trial-bal-bnk-trial-bal-module")]).then(__webpack_require__.bind(null, /*! ./bnk-trial-bal/bnk-trial-bal.module */ "./src/app/theme/reports/final-reports/bnk-trial-bal/bnk-trial-bal.module.ts")).then(m => m.BnkTrialBalModule)
            },
            {
                path: 'BnkTrialBaldetail',
                loadChildren: () => Promise.all(/*! import() | bnk-trial-baldetail-bnk-trial-baldetail-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("common"), __webpack_require__.e("bnk-trial-baldetail-bnk-trial-baldetail-module")]).then(__webpack_require__.bind(null, /*! ./bnk-trial-baldetail/bnk-trial-baldetail.module */ "./src/app/theme/reports/final-reports/bnk-trial-baldetail/bnk-trial-baldetail.module.ts")).then(m => m.BnkTrialBaldetailModule)
            },
            {
                path: 'RecePayRep',
                loadChildren: () => Promise.all(/*! import() | rece-pay-rep-rece-pay-rep-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("common"), __webpack_require__.e("rece-pay-rep-rece-pay-rep-module")]).then(__webpack_require__.bind(null, /*! ./rece-pay-rep/rece-pay-rep.module */ "./src/app/theme/reports/final-reports/rece-pay-rep/rece-pay-rep.module.ts")).then(m => m.RecePayRepModule)
            },
            {
                path: 'BalanceSheet',
                loadChildren: () => Promise.all(/*! import() | balance-sheet-balance-sheet-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("common"), __webpack_require__.e("balance-sheet-balance-sheet-module")]).then(__webpack_require__.bind(null, /*! ./balance-sheet/balance-sheet.module */ "./src/app/theme/reports/final-reports/balance-sheet/balance-sheet.module.ts")).then(m => m.BalanceSheetModule)
            },
            {
                path: 'ProfitLossAccount',
                loadChildren: () => Promise.all(/*! import() | profit-loss-account-profit-loss-account-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("common"), __webpack_require__.e("profit-loss-account-profit-loss-account-module")]).then(__webpack_require__.bind(null, /*! ./profit-loss-account/profit-loss-account.module */ "./src/app/theme/reports/final-reports/profit-loss-account/profit-loss-account.module.ts")).then(m => m.ProfitLossAccountModule)
            },
            {
                path: 'NProfitLoss',
                loadChildren: () => Promise.all(/*! import() | n-profit-loss-n-profit-loss-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("common"), __webpack_require__.e("n-profit-loss-n-profit-loss-module")]).then(__webpack_require__.bind(null, /*! ./n-profit-loss/n-profit-loss.module */ "./src/app/theme/reports/final-reports/n-profit-loss/n-profit-loss.module.ts")).then(m => m.NProfitLossModule)
            },
            {
                path: 'NBalanceSheet',
                loadChildren: () => Promise.all(/*! import() | n-balance-sheet-n-balance-sheet-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("common"), __webpack_require__.e("n-balance-sheet-n-balance-sheet-module")]).then(__webpack_require__.bind(null, /*! ./n-balance-sheet/n-balance-sheet.module */ "./src/app/theme/reports/final-reports/n-balance-sheet/n-balance-sheet.module.ts")).then(m => m.NBalanceSheetModule)
            },
            {
                path: 'RecePayRepDetails',
                loadChildren: () => Promise.all(/*! import() | rece-pay-rep-details-rece-pay-rep-details-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("common"), __webpack_require__.e("rece-pay-rep-details-rece-pay-rep-details-module")]).then(__webpack_require__.bind(null, /*! ./rece-pay-rep-details/rece-pay-rep-details.module */ "./src/app/theme/reports/final-reports/rece-pay-rep-details/rece-pay-rep-details.module.ts")).then(m => m.RecePayRepDetailsModule)
            },
        ]
    }
];
class FinalReportsRoutingModule {
}
FinalReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FinalReportsRoutingModule });
FinalReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FinalReportsRoutingModule_Factory(t) { return new (t || FinalReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FinalReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinalReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/final-reports/finalReports.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/reports/final-reports/finalReports.module.ts ***!
  \********************************************************************/
/*! exports provided: FinalReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalReportsModule", function() { return FinalReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _final_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./final-reports.component */ "./src/app/theme/reports/final-reports/final-reports.component.ts");
/* harmony import */ var _finalReports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finalReports-routing.module */ "./src/app/theme/reports/final-reports/finalReports-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");





// import {ChartModule} from 'angular2-chartjs';



class FinalReportsModule {
}
FinalReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FinalReportsModule });
FinalReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FinalReportsModule_Factory(t) { return new (t || FinalReportsModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _finalReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["FinalReportsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FinalReportsModule, { declarations: [_final_reports_component__WEBPACK_IMPORTED_MODULE_2__["FinalReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _finalReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["FinalReportsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinalReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _finalReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["FinalReportsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_final_reports_component__WEBPACK_IMPORTED_MODULE_2__["FinalReportsComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=final-reports-finalReports-module.js.map