(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["daily-reports-dailyReports-module"],{

/***/ "./src/app/theme/reports/daily-reports/daily-reports.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/daily-reports.component.ts ***!
  \************************************************************************/
/*! exports provided: DailyReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportsComponent", function() { return DailyReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



class DailyReportsComponent {
    constructor() { }
    ngOnInit() {
    }
    fileChangeEvent(fileInput) {
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;
            if (fileInput.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';
                return false;
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](allowed_types, fileInput.target.files[0].type)) {
                this.imageError = 'Only Images are allowed ( JPG | PNG )';
                return false;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    const img_height = rs.currentTarget['height'];
                    const img_width = rs.currentTarget['width'];
                    console.log(img_height, img_width);
                    if (img_height > max_height && img_width > max_width) {
                        this.imageError =
                            'Maximum dimentions allowed ' +
                                max_height +
                                '*' +
                                max_width +
                                'px';
                        return false;
                    }
                    else {
                        const imgBase64Path = e.target.result;
                        this.cardImageBase64 = imgBase64Path;
                        this.isImageSaved = true;
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    removeImage() {
        this.cardImageBase64 = null;
        this.isImageSaved = false;
    }
}
DailyReportsComponent.ɵfac = function DailyReportsComponent_Factory(t) { return new (t || DailyReportsComponent)(); };
DailyReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DailyReportsComponent, selectors: [["app-daily-reports"]], decls: 0, vars: 0, template: function DailyReportsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvZGFpbHktcmVwb3J0cy9kYWlseS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daily-reports',
                templateUrl: './daily-reports.component.html',
                styleUrls: ['./daily-reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/dailyReports-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/dailyReports-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: DailyReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportsRoutingModule", function() { return DailyReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        // component: DailyReportsComponent,
        data: {
            title: 'Daily Reports',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        },
        children: [
            // {
            //   path: 'BnkDayBookSummary',
            //   loadChildren: () => import('./bnk-day-book-summary/bnk-day-book-summary.module').then(m => m.BnkDayBookSummaryModule)
            // },
            {
                path: 'BnkSubsidaryDetail',
                loadChildren: () => Promise.all(/*! import() | bnk-subsidary-detail-bnk-subsidary-detail-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-subsidary-detail-bnk-subsidary-detail-module")]).then(__webpack_require__.bind(null, /*! ./bnk-subsidary-detail/bnk-subsidary-detail.module */ "./src/app/theme/reports/daily-reports/bnk-subsidary-detail/bnk-subsidary-detail.module.ts")).then(m => m.BnkSubsidaryDetailModule)
            },
            {
                path: 'BnkScrollDetailBoth',
                loadChildren: () => Promise.all(/*! import() | bnk-scroll-detail-both-bnk-scroll-detail-both-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("common"), __webpack_require__.e("bnk-scroll-detail-both-bnk-scroll-detail-both-module")]).then(__webpack_require__.bind(null, /*! ./bnk-scroll-detail-both/bnk-scroll-detail-both.module */ "./src/app/theme/reports/daily-reports/bnk-scroll-detail-both/bnk-scroll-detail-both.module.ts")).then(m => m.BnkScrollDetailBothModule)
            },
            {
                path: 'IntInstructionExecutionFailure',
                loadChildren: () => Promise.all(/*! import() | bnk-instructions-interest-debit-bnk-instructions-interest-debit-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("bnk-instructions-interest-debit-bnk-instructions-interest-debit-module")]).then(__webpack_require__.bind(null, /*! ./bnk-instructions-interest-debit/bnk-instructions-interest-debit.module */ "./src/app/theme/reports/daily-reports/bnk-instructions-interest-debit/bnk-instructions-interest-debit.module.ts")).then(m => m.BnkInstructionsInterestDebitModule)
            },
            {
                path: 'StandingInstExecutionFailure',
                loadChildren: () => Promise.all(/*! import() | bnk-instructions-standing-debit-bnk-instructions-standing-debit-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("bnk-instructions-standing-debit-bnk-instructions-standing-debit-module")]).then(__webpack_require__.bind(null, /*! ./bnk-instructions-standing-debit/bnk-instructions-standing-debit.module */ "./src/app/theme/reports/daily-reports/bnk-instructions-standing-debit/bnk-instructions-standing-debit.module.ts")).then(m => m.BnkInstructionsStandingDebitModule)
            },
            {
                path: 'StandingInstExecutionCredit',
                loadChildren: () => Promise.all(/*! import() | bnk-expect-standing-inst-credit-bnk-expect-standing-inst-credit-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("bnk-expect-standing-inst-credit-bnk-expect-standing-inst-credit-module")]).then(__webpack_require__.bind(null, /*! ./bnk-expect-standing-inst-credit/bnk-expect-standing-inst-credit.module */ "./src/app/theme/reports/daily-reports/bnk-expect-standing-inst-credit/bnk-expect-standing-inst-credit.module.ts")).then(m => m.BnkExpectStandingInstCreditModule)
            },
            {
                path: 'StandingInstExecutionDebit',
                loadChildren: () => Promise.all(/*! import() | bnk-expect-stand-instruction-bnk-expect-stand-instruction-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("bnk-expect-stand-instruction-bnk-expect-stand-instruction-module")]).then(__webpack_require__.bind(null, /*! ./bnk-expect-stand-instruction/bnk-expect-stand-instruction.module */ "./src/app/theme/reports/daily-reports/bnk-expect-stand-instruction/bnk-expect-stand-instruction.module.ts")).then(m => m.BnkExpectStandInstructionModule)
            },
            {
                path: 'IntInstructExecutionCredit',
                loadChildren: () => Promise.all(/*! import() | bnk-expect-int-instruct-credit-bnk-expect-int-instruct-credit-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("bnk-expect-int-instruct-credit-bnk-expect-int-instruct-credit-module")]).then(__webpack_require__.bind(null, /*! ./bnk-expect-int-instruct-credit/bnk-expect-int-instruct-credit.module */ "./src/app/theme/reports/daily-reports/bnk-expect-int-instruct-credit/bnk-expect-int-instruct-credit.module.ts")).then(m => m.BnkExpectIntInstructCreditModule)
            },
            {
                path: 'IntInstructExecutionDebit',
                loadChildren: () => Promise.all(/*! import() | bnk-expect-int-instruct-bnk-expect-int-instruct-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("bnk-expect-int-instruct-bnk-expect-int-instruct-module")]).then(__webpack_require__.bind(null, /*! ./bnk-expect-int-instruct/bnk-expect-int-instruct.module */ "./src/app/theme/reports/daily-reports/bnk-expect-int-instruct/bnk-expect-int-instruct.module.ts")).then(m => m.BnkExpectIntInstructModule)
            },
            {
                path: 'iframe1',
                loadChildren: () => __webpack_require__.e(/*! import() | iframe1-iframe1-module */ "iframe1-iframe1-module").then(__webpack_require__.bind(null, /*! ./iframe1/iframe1.module */ "./src/app/theme/reports/daily-reports/iframe1/iframe1.module.ts")).then(m => m.Iframe1Module)
            },
            {
                path: 'TFormDayBookComponent',
                loadChildren: () => Promise.all(/*! import() | t-form-day-book-t-form-day-book-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("t-form-day-book-t-form-day-book-module")]).then(__webpack_require__.bind(null, /*! ./t-form-day-book/t-form-day-book.module */ "./src/app/theme/reports/daily-reports/t-form-day-book/t-form-day-book.module.ts")).then(m => m.TFormDayBookModule)
            },
            // {
            //   path: 'SubsidiarySummaryComponent',
            //   loadChildren: () => import('./subsidiary-summary/subsidiary-summary.module').then(m => m.SubsidiarySummaryModule)
            // },
            {
                path: 'VouchersPrintingComponent',
                loadChildren: () => Promise.all(/*! import() | vouchers-printing-vouchers-printing-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~f8b8f8d0"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~d2c58f51"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~4926e085"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~e740a259"), __webpack_require__.e("common"), __webpack_require__.e("vouchers-printing-vouchers-printing-module")]).then(__webpack_require__.bind(null, /*! ./vouchers-printing/vouchers-printing.module */ "./src/app/theme/reports/daily-reports/vouchers-printing/vouchers-printing.module.ts")).then(m => m.VouchersPrintingModule)
            },
            {
                path: 'otherSubsidiary',
                loadChildren: () => Promise.all(/*! import() | other-sbsidiary-other-sbsidiary-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("other-sbsidiary-other-sbsidiary-module")]).then(__webpack_require__.bind(null, /*! ./other-sbsidiary/other-sbsidiary.module */ "./src/app/theme/reports/daily-reports/other-sbsidiary/other-sbsidiary.module.ts")).then(m => m.OtherSbsidiaryModule)
            },
            {
                path: 'SubsidiarySummery',
                loadChildren: () => Promise.all(/*! import() | sbsidiary-summery-sbsidiary-summery-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("sbsidiary-summery-sbsidiary-summery-module")]).then(__webpack_require__.bind(null, /*! ./sbsidiary-summery/sbsidiary-summery.module */ "./src/app/theme/reports/daily-reports/sbsidiary-summery/sbsidiary-summery.module.ts")).then(m => m.SbsidiarySummeryModule)
            },
        ]
    }
];
class DailyReportsRoutingModule {
}
DailyReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DailyReportsRoutingModule });
DailyReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DailyReportsRoutingModule_Factory(t) { return new (t || DailyReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DailyReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/dailyReports.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/dailyReports.module.ts ***!
  \********************************************************************/
/*! exports provided: DailyReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportsModule", function() { return DailyReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _daily_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily-reports.component */ "./src/app/theme/reports/daily-reports/daily-reports.component.ts");
/* harmony import */ var _dailyReports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dailyReports-routing.module */ "./src/app/theme/reports/daily-reports/dailyReports-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");





// import {ChartModule} from 'angular2-chartjs';





class DailyReportsModule {
}
DailyReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DailyReportsModule });
DailyReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DailyReportsModule_Factory(t) { return new (t || DailyReportsModule)(); }, providers: [src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_7__["SystemMasterParametersService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dailyReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["DailyReportsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            // ChartModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DailyReportsModule, { declarations: [_daily_reports_component__WEBPACK_IMPORTED_MODULE_2__["DailyReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dailyReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["DailyReportsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        // ChartModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dailyReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["DailyReportsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                    // ChartModule
                ],
                declarations: [_daily_reports_component__WEBPACK_IMPORTED_MODULE_2__["DailyReportsComponent"],],
                providers: [src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_7__["SystemMasterParametersService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SystemMasterParametersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemMasterParametersService", function() { return SystemMasterParametersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class SystemMasterParametersService {
    constructor(http) {
        this.http = http;
        // API 
        // url = "http://localhost:4000/system-master-parameters";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/system-master-parameters/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            let errorMessage = 'Please add valid length';
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Kindly Add Valid Length !');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/system-master-parameters/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/system-master-parameters/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/system-master-parameters/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getData() {
        return this.http.get(this.url + '/system-master-parameters/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
SystemMasterParametersService.ɵfac = function SystemMasterParametersService_Factory(t) { return new (t || SystemMasterParametersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
SystemMasterParametersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SystemMasterParametersService, factory: SystemMasterParametersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemMasterParametersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=daily-reports-dailyReports-module.js.map