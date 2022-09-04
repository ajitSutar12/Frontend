(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-reports-reports-module"],{

/***/ "./src/app/theme/reports/iframecomponent/iframecomponent.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/reports/iframecomponent/iframecomponent.component.ts ***!
  \****************************************************************************/
/*! exports provided: IframecomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframecomponentComponent", function() { return IframecomponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");







class IframecomponentComponent {
    constructor(fb, http, router, sanitizer) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.sanitizer = sanitizer;
        this.formSubmitted = false;
        // ng model variable
        this.ageCaldate = null;
        this.showRepo = false;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
        this.routes.params.subscribe(params => {
            this.comp = params['data'];
        });
    }
    ngOnInit() {
    }
    submit(event) { }
    Back($event) {
        debugger;
        this.showRepo = true;
        let obj = this.angForm.value;
        this.comp.pdf;
        this.comp.url;
        const url = "http://localhost:4200/reports";
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    close() {
        this.resetForm();
    }
    // Reset Function
    resetForm() {
        this.showRepo = false;
    }
}
IframecomponentComponent.ɵfac = function IframecomponentComponent_Factory(t) { return new (t || IframecomponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
IframecomponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IframecomponentComponent, selectors: [["app-iframecomponent"]], decls: 21, vars: 0, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [1, "card-block"], [1, "col-md-1"], ["type", "submit", "value", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"]], template: function IframecomponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Child component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Report Frame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IframecomponentComponent_Template_button_click_16_listener($event) { return ctx.Back($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IframecomponentComponent_Template_button_click_19_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvaWZyYW1lY29tcG9uZW50L2lmcmFtZWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IframecomponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iframecomponent',
                templateUrl: './iframecomponent.component.html',
                styleUrls: ['./iframecomponent.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/iframecomponent/iframecomponent.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/reports/iframecomponent/iframecomponent.module.ts ***!
  \*************************************************************************/
/*! exports provided: IframecomponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframecomponentModule", function() { return IframecomponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _iframecomponent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iframecomponent.component */ "./src/app/theme/reports/iframecomponent/iframecomponent.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






class IframecomponentModule {
}
IframecomponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IframecomponentModule });
IframecomponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IframecomponentModule_Factory(t) { return new (t || IframecomponentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IframecomponentModule, { declarations: [_iframecomponent_component__WEBPACK_IMPORTED_MODULE_2__["IframecomponentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]], exports: [_iframecomponent_component__WEBPACK_IMPORTED_MODULE_2__["IframecomponentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IframecomponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_iframecomponent_component__WEBPACK_IMPORTED_MODULE_2__["IframecomponentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
                ],
                exports: [_iframecomponent_component__WEBPACK_IMPORTED_MODULE_2__["IframecomponentComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/reports-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/reports/reports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _iframecomponent_iframecomponent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iframecomponent/iframecomponent.component */ "./src/app/theme/reports/iframecomponent/iframecomponent.component.ts");





const routes = [
    {
        path: '',
        data: {
            title: 'Reports',
            status: false
        },
        children: [
            {
                path: 'allReportsWithSearching',
                loadChildren: () => Promise.all(/*! import() | all-reports-with-searching-allReportsWithSearching-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~all-reports-with-searching-allReportsWithSearching-mo~7b9e4e99"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~cash-~357b9811"), __webpack_require__.e("all-reports-with-searching-allReportsWithSearching-module")]).then(__webpack_require__.bind(null, /*! ./all-reports-with-searching/allReportsWithSearching.module */ "./src/app/theme/reports/all-reports-with-searching/allReportsWithSearching.module.ts")).then(m => m.AllReportsWithSearchingModule)
            },
            ///
            {
                path: 'dailyReports',
                loadChildren: () => __webpack_require__.e(/*! import() | daily-reports-dailyReports-module */ "daily-reports-dailyReports-module").then(__webpack_require__.bind(null, /*! ./daily-reports/dailyReports.module */ "./src/app/theme/reports/daily-reports/dailyReports.module.ts")).then(m => m.DailyReportsModule)
            },
            //
            {
                path: 'statement',
                loadChildren: () => __webpack_require__.e(/*! import() | statement-statement-module */ "statement-statement-module").then(__webpack_require__.bind(null, /*! ./statement/statement.module */ "./src/app/theme/reports/statement/statement.module.ts")).then(m => m.StatementModule)
            },
            //
            {
                path: 'balanceBook',
                loadChildren: () => __webpack_require__.e(/*! import() | balance-book-balanceBook-module */ "balance-book-balanceBook-module").then(__webpack_require__.bind(null, /*! ./balance-book/balanceBook.module */ "./src/app/theme/reports/balance-book/balanceBook.module.ts")).then(m => m.BalanceBookModule)
            },
            //
            {
                path: 'registers',
                loadChildren: () => __webpack_require__.e(/*! import() | registers-registers-module */ "registers-registers-module").then(__webpack_require__.bind(null, /*! ./registers/registers.module */ "./src/app/theme/reports/registers/registers.module.ts")).then(m => m.RegistersModule)
            },
            //
            {
                path: 'denominationReports',
                loadChildren: () => __webpack_require__.e(/*! import() | denomination-reports-denominationReports-module */ "denomination-reports-denominationReports-module").then(__webpack_require__.bind(null, /*! ./denomination-reports/denominationReports.module */ "./src/app/theme/reports/denomination-reports/denominationReports.module.ts")).then(m => m.DenominationReportsModule)
            },
            //
            {
                path: 'termDepositReports',
                loadChildren: () => __webpack_require__.e(/*! import() | term-deposit-reports-termDepositReports-module */ "term-deposit-reports-termDepositReports-module").then(__webpack_require__.bind(null, /*! ./term-deposit-reports/termDepositReports.module */ "./src/app/theme/reports/term-deposit-reports/termDepositReports.module.ts")).then(m => m.TermDepositReportsModule)
            },
            //
            {
                path: 'loanReports',
                loadChildren: () => __webpack_require__.e(/*! import() | loan-reports-loanReports-module */ "loan-reports-loanReports-module").then(__webpack_require__.bind(null, /*! ./loan-reports/loanReports.module */ "./src/app/theme/reports/loan-reports/loanReports.module.ts")).then(m => m.LoanReportsModule)
            },
            //
            {
                path: 'npaReports',
                loadChildren: () => __webpack_require__.e(/*! import() | npa-reports-npaReports-module */ "npa-reports-npaReports-module").then(__webpack_require__.bind(null, /*! ./npa-reports/npaReports.module */ "./src/app/theme/reports/npa-reports/npaReports.module.ts")).then(m => m.NpaReportsModule)
            },
            //
            {
                path: 'sharesARR',
                loadChildren: () => __webpack_require__.e(/*! import() | shares-arr-sharesARR-module */ "shares-arr-sharesARR-module").then(__webpack_require__.bind(null, /*! ./shares-arr/sharesARR.module */ "./src/app/theme/reports/shares-arr/sharesARR.module.ts")).then(m => m.SharesARRModule)
            },
            //
            {
                path: 'sharesADR',
                loadChildren: () => __webpack_require__.e(/*! import() | shares-adr-sharesADR-module */ "shares-adr-sharesADR-module").then(__webpack_require__.bind(null, /*! ./shares-adr/sharesADR.module */ "./src/app/theme/reports/shares-adr/sharesADR.module.ts")).then(m => m.SharesADRModule)
            },
            //
            {
                path: 'nottice',
                loadChildren: () => __webpack_require__.e(/*! import() | nottice-nottice-module */ "nottice-nottice-module").then(__webpack_require__.bind(null, /*! ./nottice/nottice.module */ "./src/app/theme/reports/nottice/nottice.module.ts")).then(m => m.NotticeModule)
            },
            //
            {
                path: 'otherReports',
                loadChildren: () => Promise.all(/*! import() | other-reports-otherReports-module */[__webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("other-reports-otherReports-module")]).then(__webpack_require__.bind(null, /*! ./other-reports/otherReports.module */ "./src/app/theme/reports/other-reports/otherReports.module.ts")).then(m => m.OtherReportsModule)
            },
            //
            {
                path: 'misReports',
                loadChildren: () => __webpack_require__.e(/*! import() | mis-reports-misReports-module */ "mis-reports-misReports-module").then(__webpack_require__.bind(null, /*! ./mis-reports/misReports.module */ "./src/app/theme/reports/mis-reports/misReports.module.ts")).then(m => m.MisReportsModule)
            },
            //
            {
                path: 'finalReports',
                loadChildren: () => __webpack_require__.e(/*! import() | final-reports-finalReports-module */ "final-reports-finalReports-module").then(__webpack_require__.bind(null, /*! ./final-reports/finalReports.module */ "./src/app/theme/reports/final-reports/finalReports.module.ts")).then(m => m.FinalReportsModule)
            },
            //
            // {
            //   path: 'Report_Frame',
            //   loadChildren: () => import('./report-frame/report-frame.Module').then(m => m.ReportFrameModule)
            // },
            //
            {
                path: 'PigmyReport',
                loadChildren: () => __webpack_require__.e(/*! import() | pigmy-report-pigmy-report-module */ "pigmy-report-pigmy-report-module").then(__webpack_require__.bind(null, /*! ./pigmy-report/pigmy-report.module */ "./src/app/theme/reports/pigmy-report/pigmy-report.module.ts")).then(m => m.PigmyReportModule)
            },
            //
            {
                path: 'iframecomponent',
                component: _iframecomponent_iframecomponent_component__WEBPACK_IMPORTED_MODULE_2__["IframecomponentComponent"]
            },
        ]
    }
];
class ReportsRoutingModule {
}
ReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportsRoutingModule });
ReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/reports.module.ts":
/*!*************************************************!*\
  !*** ./src/app/theme/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/theme/reports/reports-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _iframecomponent_iframecomponent_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iframecomponent/iframecomponent.module */ "./src/app/theme/reports/iframecomponent/iframecomponent.module.ts");



// import { FinalReportsComponent } from './final-reports/final-reports.component';
// import { MisReportsComponent } from './mis-reports/mis-reports.component';
// import { OtherReportsComponent } from './other-reports/other-reports.component';
// import { NotticeComponent } from './nottice/nottice.component';
// import { LatterComponent } from './nottice/latter/latter.component';
// import { SharesADRComponent } from './shares-adr/shares-adr.component';
// import { SharesARRComponent } from './shares-arr/shares-arr.component';
// import { NpaReportsComponent } from './npa-reports/npa-reports.component';
// import { LoanReportsComponent } from './loan-reports/loan-reports.component';
// import { TermDepositReportsComponent } from './term-deposit-reports/term-deposit-reports.component';
// import { DenominationReportsComponent } from './denomination-reports/denomination-reports.component';
// import { RegistersComponent } from './registers/registers.component';
// import { BalanceBookComponent } from './balance-book/balance-book.component';
// import { StatementComponent } from './statement/statement.component';
// import { DailyReportsComponent } from './daily-reports/daily-reports.component';
// import { AllReportsWithSearchingComponent } from './all-reports-with-searching/all-reports-with-searching.component';
// import { ReportFrameComponent } from './report-frame/report-frame.component';
// import { PigmyReportComponent } from './pigmy-report/pigmy-report.component';




class ReportsModule {
}
ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportsModule_Factory(t) { return new (t || ReportsModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
            _iframecomponent_iframecomponent_module__WEBPACK_IMPORTED_MODULE_5__["IframecomponentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
        _iframecomponent_iframecomponent_module__WEBPACK_IMPORTED_MODULE_5__["IframecomponentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
                    _iframecomponent_iframecomponent_module__WEBPACK_IMPORTED_MODULE_5__["IframecomponentModule"]
                ], providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-reports-reports-module.js.map