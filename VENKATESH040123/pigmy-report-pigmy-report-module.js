(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pigmy-report-pigmy-report-module"],{

/***/ "./src/app/theme/reports/pigmy-report/pigmy-report-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/reports/pigmy-report/pigmy-report-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PigmyReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PigmyReportRoutingModule", function() { return PigmyReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        // component: PigmyReportComponent,
        data: {
            title: 'Pigmy Report ',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        },
        children: [
            {
                path: 'BnkPigmyCollectionChart',
                loadChildren: () => Promise.all(/*! import() | bnk-pigmy-collection-chart-bnk-pigmy-collection-chart-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-pigmy-collection-chart-bnk-pigmy-collection-chart-module")]).then(__webpack_require__.bind(null, /*! ./bnk-pigmy-collection-chart/bnk-pigmy-collection-chart.module */ "./src/app/theme/reports/pigmy-report/bnk-pigmy-collection-chart/bnk-pigmy-collection-chart.module.ts")).then(m => m.BnkPigmyCollectionChartModule)
            },
            {
                path: 'BnkPigmyBalanceList',
                loadChildren: () => Promise.all(/*! import() | bnk-pigmy-balance-list-bnk-pigmy-balance-list-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-pigmy-balance-list-bnk-pigmy-balance-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-pigmy-balance-list/bnk-pigmy-balance-list.module */ "./src/app/theme/reports/pigmy-report/bnk-pigmy-balance-list/bnk-pigmy-balance-list.module.ts")).then(m => m.BnkPigmyBalanceListModule)
            },
            {
                path: 'BnkPigmyBalanceBook',
                loadChildren: () => Promise.all(/*! import() | bnk-pigmy-balance-book-bnk-pigmy-balance-book-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-pigmy-balance-book-bnk-pigmy-balance-book-module")]).then(__webpack_require__.bind(null, /*! ./bnk-pigmy-balance-book/bnk-pigmy-balance-book.module */ "./src/app/theme/reports/pigmy-report/bnk-pigmy-balance-book/bnk-pigmy-balance-book.module.ts")).then(m => m.BnkPigmyBalanceBookModule)
            },
            {
                path: 'BnkPigmyBlankChart',
                loadChildren: () => Promise.all(/*! import() | bnk-pigmy-blank-chart-bnk-pigmy-blank-chart-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-pigmy-blank-chart-bnk-pigmy-blank-chart-module")]).then(__webpack_require__.bind(null, /*! ./bnk-pigmy-blank-chart/bnk-pigmy-blank-chart.module */ "./src/app/theme/reports/pigmy-report/bnk-pigmy-blank-chart/bnk-pigmy-blank-chart.module.ts")).then(m => m.BnkPigmyBlankChartModule)
            },
            {
                path: 'BnkPigmyCommissionRepo',
                loadChildren: () => Promise.all(/*! import() | bnk-pigmy-commission-repo-bnk-pigmy-commission-repo-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-pigmy-commission-repo-bnk-pigmy-commission-repo-module")]).then(__webpack_require__.bind(null, /*! ./bnk-pigmy-commission-repo/bnk-pigmy-commission-repo.module */ "./src/app/theme/reports/pigmy-report/bnk-pigmy-commission-repo/bnk-pigmy-commission-repo.module.ts")).then(m => m.BnkPigmyCommissionRepoModule)
            },
            {
                path: 'pigmyhandbook',
                loadChildren: () => Promise.all(/*! import() | pigmy-handbook-pigmy-handbook-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("pigmy-handbook-pigmy-handbook-module")]).then(__webpack_require__.bind(null, /*! ./pigmy-handbook/pigmy-handbook.module */ "./src/app/theme/reports/pigmy-report/pigmy-handbook/pigmy-handbook.module.ts")).then(m => m.PigmyHandbookModule)
            },
            {
                path: 'pigmymaturedAclist',
                loadChildren: () => Promise.all(/*! import() | bnk-pigmy-matured-aclist-bnk-pigmy-matured-aclist-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("common"), __webpack_require__.e("bnk-pigmy-matured-aclist-bnk-pigmy-matured-aclist-module")]).then(__webpack_require__.bind(null, /*! ./bnk-pigmy-matured-aclist/bnk-pigmy-matured-aclist.module */ "./src/app/theme/reports/pigmy-report/bnk-pigmy-matured-aclist/bnk-pigmy-matured-aclist.module.ts")).then(m => m.BnkPigmyMaturedAclistModule)
            },
        ]
    }
];
class PigmyReportRoutingModule {
}
PigmyReportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PigmyReportRoutingModule });
PigmyReportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PigmyReportRoutingModule_Factory(t) { return new (t || PigmyReportRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PigmyReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PigmyReportRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/pigmy-report/pigmy-report.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/reports/pigmy-report/pigmy-report.component.ts ***!
  \**********************************************************************/
/*! exports provided: PigmyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PigmyReportComponent", function() { return PigmyReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PigmyReportComponent {
    constructor() { }
    ngOnInit() {
    }
}
PigmyReportComponent.ɵfac = function PigmyReportComponent_Factory(t) { return new (t || PigmyReportComponent)(); };
PigmyReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PigmyReportComponent, selectors: [["app-pigmy-report"]], decls: 2, vars: 0, template: function PigmyReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pigmy-report works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvcGlnbXktcmVwb3J0L3BpZ215LXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PigmyReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pigmy-report',
                templateUrl: './pigmy-report.component.html',
                styleUrls: ['./pigmy-report.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/pigmy-report/pigmy-report.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/reports/pigmy-report/pigmy-report.module.ts ***!
  \*******************************************************************/
/*! exports provided: PigmyReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PigmyReportModule", function() { return PigmyReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pigmy_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pigmy-report.component */ "./src/app/theme/reports/pigmy-report/pigmy-report.component.ts");
/* harmony import */ var _pigmy_report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pigmy-report-routing.module */ "./src/app/theme/reports/pigmy-report/pigmy-report-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");





// import {ChartModule} from 'angular2-chartjs';



class PigmyReportModule {
}
PigmyReportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PigmyReportModule });
PigmyReportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PigmyReportModule_Factory(t) { return new (t || PigmyReportModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pigmy_report_routing_module__WEBPACK_IMPORTED_MODULE_3__["PigmyReportRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PigmyReportModule, { declarations: [_pigmy_report_component__WEBPACK_IMPORTED_MODULE_2__["PigmyReportComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pigmy_report_routing_module__WEBPACK_IMPORTED_MODULE_3__["PigmyReportRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PigmyReportModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pigmy_report_routing_module__WEBPACK_IMPORTED_MODULE_3__["PigmyReportRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_pigmy_report_component__WEBPACK_IMPORTED_MODULE_2__["PigmyReportComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pigmy-report-pigmy-report-module.js.map