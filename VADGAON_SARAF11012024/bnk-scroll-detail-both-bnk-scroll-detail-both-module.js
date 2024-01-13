(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bnk-scroll-detail-both-bnk-scroll-detail-both-module"],{

/***/ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts ***!
  \******************************************************************************/
/*! exports provided: OwnbranchMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnbranchMasterService", function() { return OwnbranchMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class OwnbranchMasterService {
    constructor(http) {
        this.http = http;
        this.OwnbranchMasterObject = new Array();
        // API 
        //// own-branch-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getOwnbranchList() {
        this.OwnbranchMasterObject = [];
        return this.http.get(this.url + '/own-branch-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.CODE + ' ' + element.NAME, value: element.id, name: element.CODE, branchName: element.NAME };
                this.OwnbranchMasterObject.push(obj);
            });
            return this.OwnbranchMasterObject;
        }));
    }
}
OwnbranchMasterService.ɵfac = function OwnbranchMasterService_Factory(t) { return new (t || OwnbranchMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
OwnbranchMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OwnbranchMasterService, factory: OwnbranchMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnbranchMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/bnk-scroll-detail-both/bnk-scroll-detail-both-routing.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/bnk-scroll-detail-both/bnk-scroll-detail-both-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BnkScrollDetailBothRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BnkScrollDetailBothRoutingModule", function() { return BnkScrollDetailBothRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bnk_scroll_detail_both_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bnk-scroll-detail-both.component */ "./src/app/theme/reports/daily-reports/bnk-scroll-detail-both/bnk-scroll-detail-both.component.ts");





const routes = [
    {
        path: '',
        component: _bnk_scroll_detail_both_component__WEBPACK_IMPORTED_MODULE_2__["BnkScrollDetailBothComponent"],
        data: {
            title: 'ScrollBook Debit/Credit',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class BnkScrollDetailBothRoutingModule {
}
BnkScrollDetailBothRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BnkScrollDetailBothRoutingModule });
BnkScrollDetailBothRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BnkScrollDetailBothRoutingModule_Factory(t) { return new (t || BnkScrollDetailBothRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BnkScrollDetailBothRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BnkScrollDetailBothRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/bnk-scroll-detail-both/bnk-scroll-detail-both.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/bnk-scroll-detail-both/bnk-scroll-detail-both.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: BnkScrollDetailBothComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BnkScrollDetailBothComponent", function() { return BnkScrollDetailBothComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_theme_transaction_cash_denomination_cash_denomination_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/theme/transaction/cash-denomination/cash-denomination.service */ "./src/app/theme/transaction/cash-denomination/cash-denomination.service.ts");
/* harmony import */ var src_app_theme_utility_cashier_um_cashier_um_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/theme/utility/cashier-um/cashier-um.service */ "./src/app/theme/utility/cashier-um/cashier-um.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _iframe1_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../iframe1/iframe1/iframe1.component */ "./src/app/theme/reports/daily-reports/iframe1/iframe1/iframe1.component.ts");

// Creating and maintaining form fields with validation

// Displaying Sweet Alert

















function BnkScrollDetailBothComponent_ng_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r8.label, "");
} }
function BnkScrollDetailBothComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BnkScrollDetailBothComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BnkScrollDetailBothComponent_div_24_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.angForm.controls["Branch"].errors == null ? null : ctx_r1.angForm.controls["Branch"].errors.required);
} }
function BnkScrollDetailBothComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BnkScrollDetailBothComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BnkScrollDetailBothComponent_div_42_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["Scroll_Type"].errors == null ? null : ctx_r2.angForm.controls["Scroll_Type"].errors.required);
} }
function BnkScrollDetailBothComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BnkScrollDetailBothComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BnkScrollDetailBothComponent_div_52_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["CURRENT_DATE"].errors == null ? null : ctx_r3.angForm.controls["CURRENT_DATE"].errors.required);
} }
function BnkScrollDetailBothComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cashier Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BnkScrollDetailBothComponent_div_55_ng_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", values_r14.id, " ", values_r14.F_NAME, " ", values_r14.L_NAME, "");
} }
function BnkScrollDetailBothComponent_div_55_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BnkScrollDetailBothComponent_div_55_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BnkScrollDetailBothComponent_div_55_div_5_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.angForm.controls["Cashier_Code"].errors == null ? null : ctx_r13.angForm.controls["Cashier_Code"].errors.required);
} }
function BnkScrollDetailBothComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BnkScrollDetailBothComponent_div_55_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.cashiar = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BnkScrollDetailBothComponent_div_55_ng_option_4_Template, 2, 4, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BnkScrollDetailBothComponent_div_55_div_5_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.cashiar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.cashier_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.angForm.controls["Cashier_Code"].invalid && (ctx_r5.angForm.controls["Cashier_Code"].dirty || ctx_r5.angForm.controls["Cashier_Code"].touched));
} }
function BnkScrollDetailBothComponent_div_78_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BnkScrollDetailBothComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BnkScrollDetailBothComponent_div_78_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["Print_Code"].errors == null ? null : ctx_r6.angForm.controls["Print_Code"].errors.required);
} }
function BnkScrollDetailBothComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-iframe1", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx_r7.iframe1url);
} }
const _c0 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
const _c1 = function (a0) { return { "form-submitted": a0 }; };
class BnkScrollDetailBothComponent {
    constructor(fb, http, router, config, _ownbranchmasterservice, systemParameter, sanitizer, _services, _service) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.config = config;
        this._ownbranchmasterservice = _ownbranchmasterservice;
        this.systemParameter = systemParameter;
        this.sanitizer = sanitizer;
        this._services = _services;
        this._service = _service;
        this.formSubmitted = false;
        this.fromdate = null;
        this.showRepo = false;
        this.clicked = false;
        this.bsValue = new Date();
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.report_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].report_url;
        this.iframe1url = ' ';
        this.selectedScrollType = 'cash';
        this.isTransferSelected = false;
        this.fromdate = moment__WEBPACK_IMPORTED_MODULE_3__().format('DD/MM/YYYY');
        this.maxDate = new Date();
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate());
    }
    ngOnInit() {
        this.createForm();
        this._ownbranchmasterservice.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(data2 => {
            this.branchOption = data2;
        });
        // this.castMasterService.getcastList().pipe(first()).subscribe(data => {
        //   this.Cashiercode = data;
        //   console.log(data);
        // });
        let user = JSON.parse(localStorage.getItem('user'));
        this._services.getOwnbranchList().subscribe(data => {
            console.log(data);
            this.branch_list = data;
            this.SelectedBranch = user.branchId;
            this._services.getList({ branch_id: this.SelectedBranch }).subscribe(data => {
                console.log(data);
                this.Cashiercode = data;
                console.log(data);
            });
        });
        this._service.getUserDetails().subscribe(data => {
            this.cashier_list = data;
            console.log(this.cashier_list);
        }, err => {
            console.log(err);
        });
        //get date from syspara current_date
        this.systemParameter.getFormData(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(data => {
            this.fromdate = data.CURRENT_DATE;
        });
        //cashier code
        // let data: any = localStorage.getItem('user');
        // let result = JSON.parse(data);
        // if (result.RoleDefine[0].Role.id == 1) {
        //   this.angForm.controls['BRANCH_CODE'].enable()
        //   this.ngbranch = result.branch.id
        // }
        // else {
        //   this.angForm.controls['BRANCH_CODE'].disable()
        //   this.ngbranch = result.branch.id
        // }
    }
    createForm() {
        this.angForm = this.fb.group({
            Scroll_Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('cash'),
            Branch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // Cashier_Code: ['',[Validators.required]],
            Cashier_Code: [''],
            Print_Code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Debit'),
            CURRENT_DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.ngbranch = result.branch.id;
            this.angForm.controls['Branch'].enable();
        }
        else {
            this.angForm.controls['Branch'].disable();
            this.ngbranch = result.branch.id;
        }
    }
    onScrollTypeChange() {
        this.isTransferSelected = this.selectedScrollType === 'transfer';
    }
    view(event) {
        debugger;
        event.preventDefault();
        this.formSubmitted = true;
        let userData = JSON.parse(localStorage.getItem('user'));
        let bankName = userData.branch.syspara.BANK_NAME;
        let branchName = userData.branch.NAME;
        this.branchno = userData.branch.CODE;
        if (this.selectedScrollType === 'cash' && this.angForm.valid) {
            if (this.angForm.controls['Print_Code'].value == "Debit") {
                this.showRepo = true;
                let obj = this.angForm.value;
                // let Startdate = moment(obj.CURRENT_DATE).format('DD/MM/YYYY');
                let Startdate;
                let OpeningData;
                if (this.fromdate == obj.CURRENT_DATE) {
                    Startdate = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
                    OpeningData = moment__WEBPACK_IMPORTED_MODULE_3__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                }
                else {
                    Startdate = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
                    OpeningData = moment__WEBPACK_IMPORTED_MODULE_3__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                }
                ;
                let stype = obj.Scroll_Type;
                let branch = obj.Branch;
                let ccode = obj.Cashier_Code;
                let pcode = obj.Print_Code;
                // let rdio  = obj.radio
                this.iframe1url = this.report_url + "examples/ScrollBookDebit.php?Startdate='" + Startdate + "'&stype='" + stype + "'&branch='" + branch + "'&branchcode='" + this.branchno + "'&ccode='" + ccode + "'&pcode='" + pcode + "'&bankName=" + bankName + "&opDate=" + OpeningData;
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (this.angForm.controls['Print_Code'].value == "Credit") {
                // if (this.selectedScrollType === 'cash' && this.angForm.valid) {
                this.showRepo = true;
                let obj = this.angForm.value;
                // let Startdate = moment(obj.CURRENT_DATE).format('DD/MM/YYYY');
                let Startdate;
                let OpeningData;
                if (this.fromdate == obj.CURRENT_DATE) {
                    Startdate = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
                    OpeningData = moment__WEBPACK_IMPORTED_MODULE_3__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                }
                else {
                    Startdate = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
                    OpeningData = moment__WEBPACK_IMPORTED_MODULE_3__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                }
                ;
                let stype = obj.Scroll_Type;
                let branch = obj.Branch;
                let ccode = obj.Cashier_Code;
                let pcode = obj.Print_Code;
                let rdio = obj.radio;
                this.iframe1url = this.report_url + "examples/ScrollBookCredit.php?Startdate='" + Startdate + "'&stype='" + stype + "'&branch='" + branch + "'&branchcode='" + this.branchno + "'&ccode='" + ccode + "'&pcode='" + pcode + "'&rdio='" + rdio + "&bankName=" + bankName + "&opDate=" + OpeningData;
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (this.angForm.controls['Print_Code'].value == "Both") {
                this.showRepo = true;
                let obj = this.angForm.value;
                // let Startdate = moment(obj.CURRENT_DATE).format('DD/MM/YYYY');
                let Startdate;
                let OpeningData;
                if (this.fromdate == obj.CURRENT_DATE) {
                    Startdate = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
                    OpeningData = moment__WEBPACK_IMPORTED_MODULE_3__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                }
                else {
                    Startdate = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
                    OpeningData = moment__WEBPACK_IMPORTED_MODULE_3__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                }
                ;
                let stype = obj.Scroll_Type;
                let branch = obj.Branch;
                let ccode = obj.Cashier_Code;
                let pcode = obj.Print_Code;
                let rdio = obj.radio;
                this.iframe1url = this.report_url + "examples/ScrollBookBoth.php?Startdate='" + Startdate + "'&stype='" + stype + "'&branch='" + branch + "'&ccode='" + ccode + "'&pcode='" + pcode + "'&rdio='" + rdio + "&bankName=" + bankName + "&opDate='" + OpeningData + "'";
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
        }
        else if (this.selectedScrollType === 'transfer') {
            if (this.angForm.controls['Print_Code'].value == "Debit") {
                this.showRepo = true;
                let obj = this.angForm.value;
                // let Startdate = moment(obj.CURRENT_DATE).format('DD/MM/YYYY');
                let Startdate;
                let OpeningData;
                if (this.fromdate == obj.CURRENT_DATE) {
                    Startdate = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
                    OpeningData = moment__WEBPACK_IMPORTED_MODULE_3__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                }
                else {
                    Startdate = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
                    OpeningData = moment__WEBPACK_IMPORTED_MODULE_3__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                }
                ;
                let stype = obj.Scroll_Type;
                let branch = obj.Branch;
                // let ccode = obj.Cashier_Code
                let pcode = obj.Print_Code;
                // let rdio  = obj.radio
                this.iframe1url = this.report_url + "examples/ScrollBookDebit.php?Startdate='" + Startdate + "'&stype='" + stype + "'&branch='" + branch + "'&branchcode='" + this.branchno + "'&pcode='" + pcode + "'&bankName=" + bankName + "&opDate=" + OpeningData;
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else if (this.angForm.controls['Print_Code'].value == "Credit") {
                // if (this.selectedScrollType === 'cash' && this.angForm.valid) {
                this.showRepo = true;
                let obj = this.angForm.value;
                // let Startdate = moment(obj.CURRENT_DATE).format('DD/MM/YYYY');
                let Startdate;
                let OpeningData;
                if (this.fromdate == obj.CURRENT_DATE) {
                    Startdate = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
                    OpeningData = moment__WEBPACK_IMPORTED_MODULE_3__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                }
                else {
                    Startdate = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
                    OpeningData = moment__WEBPACK_IMPORTED_MODULE_3__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                }
                ;
                let stype = obj.Scroll_Type;
                let branch = obj.Branch;
                // let ccode = obj.Cashier_Code
                let pcode = obj.Print_Code;
                let rdio = obj.radio;
                this.iframe1url = this.report_url + "examples/ScrollBookCredit.php?Startdate='" + Startdate + "'&stype='" + stype + "'&branch='" + branch + "'&branchcode='" + this.branchno + "'&pcode='" + pcode + "'&rdio='" + rdio + "&bankName=" + bankName + "&opDate=" + OpeningData;
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
            else {
                this.showRepo = true;
                let obj = this.angForm.value;
                // let Startdate = moment(obj.CURRENT_DATE).format('DD/MM/YYYY');
                let Startdate;
                let OpeningData;
                if (this.fromdate == obj.CURRENT_DATE) {
                    Startdate = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
                    OpeningData = moment__WEBPACK_IMPORTED_MODULE_3__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                }
                else {
                    Startdate = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
                    OpeningData = moment__WEBPACK_IMPORTED_MODULE_3__(Startdate, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
                }
                ;
                let stype = obj.Scroll_Type;
                let branch = obj.Branch;
                // let ccode = obj.Cashier_Code
                let pcode = obj.Print_Code;
                let rdio = obj.radio;
                this.iframe1url = this.report_url + "examples/ScrollBookBoth.php?Startdate='" + Startdate + "'&stype='" + stype + "'&branch='" + branch + "'&pcode='" + pcode + "'&rdio='" + rdio + "&bankName=" + bankName + "&opDate='" + OpeningData + "'";
                this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false; });
        }
    }
    getBranch() {
        this.obj1 = [this.ngbranch];
    }
    close() {
        this.resetForm();
    }
    // Reset Function
    resetForm() {
        // this.createForm();
        this.angForm.controls.Cashier_Code.reset();
        this.showRepo = false;
        this.clicked = false;
    }
}
BnkScrollDetailBothComponent.ɵfac = function BnkScrollDetailBothComponent_Factory(t) { return new (t || BnkScrollDetailBothComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_10__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_transaction_cash_denomination_cash_denomination_service__WEBPACK_IMPORTED_MODULE_12__["CashDenominationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_utility_cashier_um_cashier_um_service__WEBPACK_IMPORTED_MODULE_13__["CashierUmService"])); };
BnkScrollDetailBothComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BnkScrollDetailBothComponent, selectors: [["app-bnk-scroll-detail-both"]], decls: 95, vars: 22, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["novalidate", "", 3, "formGroup"], [1, "card-block"], [1, "col-sm-12", "col-md-2"], ["for", ""], [1, "form-group", "form-primary", "form-static-label"], ["autofocus", "", 1, "border-lable-flt"], ["id", "BRANCH_CODE", "bindValue", "value", "formControlName", "Branch", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "form-radio"], [1, "radio", "radio-inline"], ["type", "radio", "name", "Scroll_Type", "value", "cash", "formControlName", "Scroll_Type", 3, "checked", "ngModel", "ngModelChange"], [1, "helper"], ["type", "radio", "name", "Scroll_Type", "value", "transfer", "formControlName", "Scroll_Type", 3, "ngModel", "ngModelChange", "change"], [1, "col-sm-12", "col-md-1"], [1, "form-group", "input-group"], [1, "border-lable-flt"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "CURRENT_DATE", "id", "CURRENT_DATE", "appButton", "", "minlength", "8", "maxlength", "10", "formControlName", "CURRENT_DATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsValue", "bsConfig", "ngClass", "ngModelChange", "keypress"], ["class", "col-sm-12 col-md-2", 4, "ngIf"], [1, "col-sm-12", "col-md-3"], ["type", "radio", "name", "Print_Code", "value", "Debit", "formControlName", "Print_Code", 3, "checked"], ["type", "radio", "name", "Print_Code", "value", "Credit", "formControlName", "Print_Code"], ["type", "radio", "name", "Print_Code", "value", "Both", "formControlName", "Print_Code"], [1, "col-md-9"], [1, "col-md-1"], ["type", "submit", "value", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], ["type", "submit", "value", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], ["bindValue", "id", "formControlName", "Cashier_Code", "bindLabel", "label", "placeholder", "", "required", "", 3, "ngModel", "ngModelChange"], [3, "url"]], template: function BnkScrollDetailBothComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Scroll Book Debit/Credit/Both");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Branch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BnkScrollDetailBothComponent_Template_ng_select_ngModelChange_22_listener($event) { return ctx.ngbranch = $event; })("change", function BnkScrollDetailBothComponent_Template_ng_select_change_22_listener() { return ctx.getBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BnkScrollDetailBothComponent_ng_option_23_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BnkScrollDetailBothComponent_div_24_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Scroll Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BnkScrollDetailBothComponent_Template_input_ngModelChange_34_listener($event) { return ctx.selectedScrollType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BnkScrollDetailBothComponent_Template_input_ngModelChange_39_listener($event) { return ctx.selectedScrollType = $event; })("change", function BnkScrollDetailBothComponent_Template_input_change_39_listener() { return ctx.onScrollTypeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, BnkScrollDetailBothComponent_div_42_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BnkScrollDetailBothComponent_Template_input_ngModelChange_51_listener($event) { return ctx.fromdate = $event; })("keypress", function BnkScrollDetailBothComponent_Template_input_keypress_51_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, BnkScrollDetailBothComponent_div_52_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, BnkScrollDetailBothComponent_div_54_Template, 3, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, BnkScrollDetailBothComponent_div_55_Template, 6, 3, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Print Side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Debit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Both");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, BnkScrollDetailBothComponent_div_78_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BnkScrollDetailBothComponent_Template_button_click_82_listener($event) { ctx.view($event); return ctx.clicked = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BnkScrollDetailBothComponent_Template_button_click_85_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Report Frame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, BnkScrollDetailBothComponent_div_94_Template, 2, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngbranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branchOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["Branch"].invalid && (ctx.angForm.controls["Branch"].dirty || ctx.angForm.controls["Branch"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true)("ngModel", ctx.selectedScrollType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedScrollType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["Scroll_Type"].invalid && (ctx.angForm.controls["Scroll_Type"].dirty || ctx.angForm.controls["Scroll_Type"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fromdate)("bsValue", ctx.bsValue)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["CURRENT_DATE"].invalid && (ctx.angForm.controls["CURRENT_DATE"].dirty || ctx.angForm.controls["CURRENT_DATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedScrollType === "cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedScrollType === "cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["Print_Code"].invalid && (ctx.angForm.controls["Print_Code"].dirty || ctx.angForm.controls["Print_Code"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.clicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRepo);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"], _iframe1_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_16__["Iframe1Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvZGFpbHktcmVwb3J0cy9ibmstc2Nyb2xsLWRldGFpbC1ib3RoL2Juay1zY3JvbGwtZGV0YWlsLWJvdGguY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BnkScrollDetailBothComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bnk-scroll-detail-both',
                templateUrl: './bnk-scroll-detail-both.component.html',
                styleUrls: ['./bnk-scroll-detail-both.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectConfig"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["OwnbranchMasterService"] }, { type: src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_10__["SystemMasterParametersService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] }, { type: src_app_theme_transaction_cash_denomination_cash_denomination_service__WEBPACK_IMPORTED_MODULE_12__["CashDenominationService"] }, { type: src_app_theme_utility_cashier_um_cashier_um_service__WEBPACK_IMPORTED_MODULE_13__["CashierUmService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/bnk-scroll-detail-both/bnk-scroll-detail-both.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/bnk-scroll-detail-both/bnk-scroll-detail-both.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BnkScrollDetailBothModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BnkScrollDetailBothModule", function() { return BnkScrollDetailBothModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _bnk_scroll_detail_both_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bnk-scroll-detail-both.component */ "./src/app/theme/reports/daily-reports/bnk-scroll-detail-both/bnk-scroll-detail-both.component.ts");
/* harmony import */ var _bnk_scroll_detail_both_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bnk-scroll-detail-both-routing.module */ "./src/app/theme/reports/daily-reports/bnk-scroll-detail-both/bnk-scroll-detail-both-routing.module.ts");
/* harmony import */ var _iframe1_iframe1_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../iframe1/iframe1.module */ "./src/app/theme/reports/daily-reports/iframe1/iframe1.module.ts");
/* harmony import */ var src_app_theme_transaction_cash_denomination_cash_denomination_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/theme/transaction/cash-denomination/cash-denomination.service */ "./src/app/theme/transaction/cash-denomination/cash-denomination.service.ts");
/* harmony import */ var src_app_theme_utility_cashier_um_cashier_um_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/theme/utility/cashier-um/cashier-um.service */ "./src/app/theme/utility/cashier-um/cashier-um.service.ts");




















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class BnkScrollDetailBothModule {
}
BnkScrollDetailBothModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BnkScrollDetailBothModule });
BnkScrollDetailBothModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BnkScrollDetailBothModule_Factory(t) { return new (t || BnkScrollDetailBothModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_8__["SystemMasterParametersService"],
        src_app_theme_transaction_cash_denomination_cash_denomination_service__WEBPACK_IMPORTED_MODULE_15__["CashDenominationService"], src_app_theme_utility_cashier_um_cashier_um_service__WEBPACK_IMPORTED_MODULE_16__["CashierUmService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
            multi: true
        },
        src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["OwnbranchMasterService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["DatepickerModule"].forRoot(),
            _bnk_scroll_detail_both_routing_module__WEBPACK_IMPORTED_MODULE_13__["BnkScrollDetailBothRoutingModule"],
            _iframe1_iframe1_module__WEBPACK_IMPORTED_MODULE_14__["Iframe1Module"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BnkScrollDetailBothModule, { declarations: [_bnk_scroll_detail_both_component__WEBPACK_IMPORTED_MODULE_12__["BnkScrollDetailBothComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["DatepickerModule"], _bnk_scroll_detail_both_routing_module__WEBPACK_IMPORTED_MODULE_13__["BnkScrollDetailBothRoutingModule"],
        _iframe1_iframe1_module__WEBPACK_IMPORTED_MODULE_14__["Iframe1Module"]], exports: [_bnk_scroll_detail_both_component__WEBPACK_IMPORTED_MODULE_12__["BnkScrollDetailBothComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BnkScrollDetailBothModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["DatepickerModule"].forRoot(),
                    _bnk_scroll_detail_both_routing_module__WEBPACK_IMPORTED_MODULE_13__["BnkScrollDetailBothRoutingModule"],
                    _iframe1_iframe1_module__WEBPACK_IMPORTED_MODULE_14__["Iframe1Module"]
                ],
                declarations: [_bnk_scroll_detail_both_component__WEBPACK_IMPORTED_MODULE_12__["BnkScrollDetailBothComponent"]],
                exports: [_bnk_scroll_detail_both_component__WEBPACK_IMPORTED_MODULE_12__["BnkScrollDetailBothComponent"]],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                    _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_8__["SystemMasterParametersService"],
                    src_app_theme_transaction_cash_denomination_cash_denomination_service__WEBPACK_IMPORTED_MODULE_15__["CashDenominationService"], src_app_theme_utility_cashier_um_cashier_um_service__WEBPACK_IMPORTED_MODULE_16__["CashierUmService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
                        multi: true
                    },
                    src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["OwnbranchMasterService"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/iframe1/iframe1-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/iframe1/iframe1-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: Iframe1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe1RoutingModule", function() { return Iframe1RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iframe1/iframe1.component */ "./src/app/theme/reports/daily-reports/iframe1/iframe1/iframe1.component.ts");





const routes = [
    {
        path: '',
        component: _iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_2__["Iframe1Component"],
        data: {
            title: 'Iframe4',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class Iframe1RoutingModule {
}
Iframe1RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Iframe1RoutingModule });
Iframe1RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Iframe1RoutingModule_Factory(t) { return new (t || Iframe1RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Iframe1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Iframe1RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/iframe1/iframe1.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/iframe1/iframe1.module.ts ***!
  \***********************************************************************/
/*! exports provided: Iframe1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe1Module", function() { return Iframe1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _iframe1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iframe1-routing.module */ "./src/app/theme/reports/daily-reports/iframe1/iframe1-routing.module.ts");
/* harmony import */ var _iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iframe1/iframe1.component */ "./src/app/theme/reports/daily-reports/iframe1/iframe1/iframe1.component.ts");






class Iframe1Module {
}
Iframe1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Iframe1Module });
Iframe1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Iframe1Module_Factory(t) { return new (t || Iframe1Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _iframe1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Iframe1RoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Iframe1Module, { declarations: [_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_3__["Iframe1Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _iframe1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Iframe1RoutingModule"]], exports: [_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_3__["Iframe1Component"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Iframe1Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_3__["Iframe1Component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _iframe1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Iframe1RoutingModule"]
                ],
                exports: [_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_3__["Iframe1Component"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/iframe1/iframe1/iframe1.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/iframe1/iframe1/iframe1.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Iframe1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe1Component", function() { return Iframe1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");







class Iframe1Component {
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
        this.url1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
    ngOnInit() {
    }
    view(event) { }
    close($event) {
        this.showRepo = true;
        let obj = this.angForm.value;
        this.resetForm();
        this.comp.pdf;
        this.comp.url;
        // const url="http://localhost:4200/reports";
        // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    //  close(){
    //   this.resetForm()
    // }
    // Reset Function
    resetForm() {
        this.showRepo = false;
    }
}
Iframe1Component.ɵfac = function Iframe1Component_Factory(t) { return new (t || Iframe1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
Iframe1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Iframe1Component, selectors: [["app-iframe1"]], inputs: { url: "url" }, decls: 9, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "card"], ["novalidate", ""], [1, "card-block"], [1, "embed-responsive", "embed-responsive-16by9"], [1, "loader"], ["src", "assets/Loading.gif"], [3, "src"]], template: function Iframe1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, styles: [".loader[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12;\n  top: 15;\n  margin-left: 43%;\n  margin-top: 5%;\n  background: url(/src/assets/loading.gif) 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvcmVwb3J0cy9kYWlseS1yZXBvcnRzL2lmcmFtZTEvaWZyYW1lMS9pZnJhbWUxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9yZXBvcnRzL2RhaWx5LXJlcG9ydHMvaWZyYW1lMS9pZnJhbWUxL2lmcmFtZTEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTI7XHJcbiAgICB0b3A6IDE1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQzJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9zcmMvYXNzZXRzL2xvYWRpbmcuZ2lmKSAwIDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Iframe1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iframe1',
                templateUrl: './iframe1.component.html',
                styleUrls: ['./iframe1.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=bnk-scroll-detail-both-bnk-scroll-detail-both-module.js.map