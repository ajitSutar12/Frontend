(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["other-reports-otherReports-module"],{

/***/ "./src/app/theme/reports/other-reports/other-reports.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/reports/other-reports/other-reports.component.ts ***!
  \************************************************************************/
/*! exports provided: OtherReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherReportsComponent", function() { return OtherReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _other_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-reports.service */ "./src/app/theme/reports/other-reports/other-reports.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

// Creating and maintaining form fields with validation









class OtherReportsComponent {
    constructor(fb, http, router, _OtherReportService, sanitizer) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this._OtherReportService = _OtherReportService;
        this.sanitizer = sanitizer;
        this.formSubmitted = false;
        // ng model variable
        this.ageCaldate = null;
        this.showRepo = false;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
        this.maxDate = new Date();
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate());
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.angForm = this.fb.group({
            MINAGECAl_DATE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    submit(event) {
        debugger;
        this.showRepo = true;
        let obj = this.angForm.value;
        let date = moment__WEBPACK_IMPORTED_MODULE_2__(obj.MINAGECAl_DATE).format('DD/MM/YYYY');
        const url = "http://localhost/NewReport/report-code/Report/examples/MinorList.php?startDate='" + date + "'";
        console.log(url);
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        // let ageCaldate
        // event.preventDefault();
        // this.formSubmitted = true;
        // // if (this.angForm.valid) {
        //   const formVal = this.angForm.value;
        //   const dataToSend = {
        //     'startDate': (formVal.startDate == '' || formVal.startDate == 'Invalid date') ? ageCaldate = '' : ageCaldate = moment(formVal.startDate).format('DD/MM/YYYY'),
        //   };
        //   this._OtherReportService.postData(dataToSend).subscribe(
        //     (data) => {
        //       Swal.fire("Success!", "Data Added Successfully !", "success");
        //       this.formSubmitted = false;
        //     },
        //     (error) => {
        //       console.log(error);
        //     }
        //   );
        //To clear form
        // this.resetForm();
        this.formSubmitted = false;
        // }
    }
    // Reset Function
    resetForm() {
        this.createForm();
    }
}
OtherReportsComponent.ɵfac = function OtherReportsComponent_Factory(t) { return new (t || OtherReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_other_reports_service__WEBPACK_IMPORTED_MODULE_6__["OtherReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"])); };
OtherReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherReportsComponent, selectors: [["app-other-reports"]], decls: 0, vars: 0, template: function OtherReportsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvb3RoZXItcmVwb3J0cy9vdGhlci1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-other-reports',
                templateUrl: './other-reports.component.html',
                styleUrls: ['./other-reports.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _other_reports_service__WEBPACK_IMPORTED_MODULE_6__["OtherReportService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/other-reports/other-reports.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/reports/other-reports/other-reports.service.ts ***!
  \**********************************************************************/
/*! exports provided: OtherReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherReportService", function() { return OtherReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class OtherReportService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
}
OtherReportService.ɵfac = function OtherReportService_Factory(t) { return new (t || OtherReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
OtherReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OtherReportService, factory: OtherReportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/other-reports/otherReports-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/reports/other-reports/otherReports-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: OtherReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherReportsRoutingModule", function() { return OtherReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        // component: OtherReportsComponent,
        data: {
            title: 'Other Reports',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        },
        children: [
            {
                path: 'BnkMinorsList',
                loadChildren: () => Promise.all(/*! import() | bnk-minors-list-bnk-minors-list-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-minors-list-bnk-minors-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-minors-list/bnk-minors-list.module */ "./src/app/theme/reports/other-reports/bnk-minors-list/bnk-minors-list.module.ts")).then(m => m.BnkMinorsListModule)
            },
            {
                path: 'BnkNomineeList',
                loadChildren: () => Promise.all(/*! import() | bnk-nominee-list-bnk-nominee-list-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-nominee-list-bnk-nominee-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-nominee-list/bnk-nominee-list.module */ "./src/app/theme/reports/other-reports/bnk-nominee-list/bnk-nominee-list.module.ts")).then(m => m.BnkNomineeListModule)
            },
            {
                path: 'BnkGuaranterList',
                loadChildren: () => Promise.all(/*! import() | bnk-guaranter-list-bnk-guaranter-list-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-guaranter-list-bnk-guaranter-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-guaranter-list/bnk-guaranter-list.module */ "./src/app/theme/reports/other-reports/bnk-guaranter-list/bnk-guaranter-list.module.ts")).then(m => m.BnkGuaranterListModule)
            },
            {
                path: 'BnkLienMarkedAcList',
                loadChildren: () => Promise.all(/*! import() | bnk-lien-marked-ac-list-bnk-lien-marked-ac-list-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("common"), __webpack_require__.e("bnk-lien-marked-ac-list-bnk-lien-marked-ac-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-lien-marked-ac-list/bnk-lien-marked-ac-list.module */ "./src/app/theme/reports/other-reports/bnk-lien-marked-ac-list/bnk-lien-marked-ac-list.module.ts")).then(m => m.BnkLienMarkedAcListModule)
            },
            {
                path: 'BnkDormantAcList',
                loadChildren: () => Promise.all(/*! import() | bnk-dormant-ac-list-bnk-dormant-ac-list-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-dormant-ac-list-bnk-dormant-ac-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-dormant-ac-list/bnk-dormant-ac-list.module */ "./src/app/theme/reports/other-reports/bnk-dormant-ac-list/bnk-dormant-ac-list.module.ts")).then(m => m.BnkDormantAcListModule)
            },
            {
                path: 'BnkAmountMovement',
                loadChildren: () => Promise.all(/*! import() | bnk-amount-movement-bnk-amount-movement-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("bnk-amount-movement-bnk-amount-movement-module")]).then(__webpack_require__.bind(null, /*! ./bnk-amount-movement/bnk-amount-movement.module */ "./src/app/theme/reports/other-reports/bnk-amount-movement/bnk-amount-movement.module.ts")).then(m => m.BnkAmountMovementModule)
            },
            {
                path: 'BnkDepAmountMovementDetail',
                loadChildren: () => Promise.all(/*! import() | bnk-dep-amount-movement-detail-bnk-dep-amount-movement-detail-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-dep-amount-movement-detail-bnk-dep-amount-movement-detail-module")]).then(__webpack_require__.bind(null, /*! ./bnk-dep-amount-movement-detail/bnk-dep-amount-movement-detail.module */ "./src/app/theme/reports/other-reports/bnk-dep-amount-movement-detail/bnk-dep-amount-movement-detail.module.ts")).then(m => m.BnkDepAmountMovementDetailModule)
            },
            {
                path: 'BnkLNAmountMovementDetail',
                loadChildren: () => Promise.all(/*! import() | bnk-lnamount-movement-detail-bnk-lnamount-movement-detail-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-lnamount-movement-detail-bnk-lnamount-movement-detail-module")]).then(__webpack_require__.bind(null, /*! ./bnk-lnamount-movement-detail/bnk-lnamount-movement-detail.module */ "./src/app/theme/reports/other-reports/bnk-lnamount-movement-detail/bnk-lnamount-movement-detail.module.ts")).then(m => m.BnkLNAmountMovementDetailModule)
            },
            {
                path: 'BnkGurDetailsList',
                loadChildren: () => Promise.all(/*! import() | bnk-gur-details-list-bnk-gur-details-list-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("bnk-gur-details-list-bnk-gur-details-list-module")]).then(__webpack_require__.bind(null, /*! ./bnk-gur-details-list/bnk-gur-details-list.module */ "./src/app/theme/reports/other-reports/bnk-gur-details-list/bnk-gur-details-list.module.ts")).then(m => m.BnkGurDetailsListModule)
            },
            {
                path: 'BnkNonGuaranteerView',
                loadChildren: () => Promise.all(/*! import() | bnk-non-guaranteer-view-bnk-non-guaranteer-view-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-non-guaranteer-view-bnk-non-guaranteer-view-module")]).then(__webpack_require__.bind(null, /*! ./bnk-non-guaranteer-view/bnk-non-guaranteer-view.module */ "./src/app/theme/reports/other-reports/bnk-non-guaranteer-view/bnk-non-guaranteer-view.module.ts")).then(m => m.BnkNonGuaranteerViewModule)
            },
            {
                path: 'custidIntroducerList',
                loadChildren: () => Promise.all(/*! import() | custidwise-introducer-list-custidwise-introducer-list-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("custidwise-introducer-list-custidwise-introducer-list-module")]).then(__webpack_require__.bind(null, /*! ./custidwise-introducer-list/custidwise-introducer-list.module */ "./src/app/theme/reports/other-reports/custidwise-introducer-list/custidwise-introducer-list.module.ts")).then(m => m.CustidwiseIntroducerListModule)
            },
            {
                path: 'serviceChargeList',
                loadChildren: () => Promise.all(/*! import() | service-charges-list-service-charges-list-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("service-charges-list-service-charges-list-module")]).then(__webpack_require__.bind(null, /*! ./service-charges-list/service-charges-list.module */ "./src/app/theme/reports/other-reports/service-charges-list/service-charges-list.module.ts")).then(m => m.ServiceChargesListModule)
            },
            {
                path: 'minorToMajorlist',
                loadChildren: () => Promise.all(/*! import() | minor-to-major-list-minor-to-major-list-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("minor-to-major-list-minor-to-major-list-module")]).then(__webpack_require__.bind(null, /*! ./minor-to-major-list/minor-to-major-list.module */ "./src/app/theme/reports/other-reports/minor-to-major-list/minor-to-major-list.module.ts")).then(m => m.MinorToMajorListModule)
            },
            {
                path: 'tranLessAclist',
                loadChildren: () => Promise.all(/*! import() | transactionless-account-list-transactionless-account-list-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("transactionless-account-list-transactionless-account-list-module")]).then(__webpack_require__.bind(null, /*! ./transactionless-account-list/transactionless-account-list.module */ "./src/app/theme/reports/other-reports/transactionless-account-list/transactionless-account-list.module.ts")).then(m => m.TransactionlessAccountListModule)
            },
            {
                path: 'dormantAccountList',
                loadChildren: () => Promise.all(/*! import() | dormant-account-dormant-account-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("dormant-account-dormant-account-module")]).then(__webpack_require__.bind(null, /*! ./dormant-account/dormant-account.module */ "./src/app/theme/reports/other-reports/dormant-account/dormant-account.module.ts")).then(m => m.DormantAccountModule)
            },
        ]
    }
];
class OtherReportsRoutingModule {
}
OtherReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OtherReportsRoutingModule });
OtherReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OtherReportsRoutingModule_Factory(t) { return new (t || OtherReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OtherReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/other-reports/otherReports.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/reports/other-reports/otherReports.module.ts ***!
  \********************************************************************/
/*! exports provided: OtherReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherReportsModule", function() { return OtherReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _other_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other-reports.component */ "./src/app/theme/reports/other-reports/other-reports.component.ts");
/* harmony import */ var _otherReports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otherReports-routing.module */ "./src/app/theme/reports/other-reports/otherReports-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





// import {ChartModule} from 'angular2-chartjs';






class OtherReportsModule {
}
OtherReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OtherReportsModule });
OtherReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OtherReportsModule_Factory(t) { return new (t || OtherReportsModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _otherReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["OtherReportsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatepickerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OtherReportsModule, { declarations: [_other_reports_component__WEBPACK_IMPORTED_MODULE_2__["OtherReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _otherReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["OtherReportsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _otherReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["OtherReportsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatepickerModule"].forRoot()
                ],
                declarations: [_other_reports_component__WEBPACK_IMPORTED_MODULE_2__["OtherReportsComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=other-reports-otherReports-module.js.map