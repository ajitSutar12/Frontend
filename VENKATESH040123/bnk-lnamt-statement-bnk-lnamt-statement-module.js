(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bnk-lnamt-statement-bnk-lnamt-statement-module"],{

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

/***/ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/dropdownService/scheme-code-dropdown.service.ts ***!
  \************************************************************************/
/*! exports provided: SchemeCodeDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeCodeDropdownService", function() { return SchemeCodeDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class SchemeCodeDropdownService {
    constructor(http) {
        this.http = http;
        this.schemeCodeObject = new Array();
        this.schemeObject = new Array();
        // // scheme-parameters";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getSchemeCodeList(scheme) {
        this.schemeCodeObject = [];
        return this.http.get(this.url + '/scheme-parameters/' + scheme)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_APPL, id: element.S_ACNOTYPE, dividend: element.DIVIDEND_PERCENTAGE, divMethod: element.INTEREST_RULE, isAddBonus: element.IS_ADD_BONUS_IN_DIVIDEND, INT_ROUND_OFF: element.INT_ROUND_OFF, IS_WEEKLY_REPAY: element.IS_WEEKLY_REPAY, IS_RECURRING_TYPE: element.IS_RECURRING_TYPE };
                this.schemeCodeObject.push(obj);
            });
            return this.schemeCodeObject;
        }));
    }
    getAllSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = {
                    label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL, glacno: element.S_GLACNO, intapp: element.S_INT_APPLICABLE, SVR_CHARGE_GLCODE: element.SVR_CHARGE_GLCODE, SVR_CHARGE_RATE: element.SVR_CHARGE_RATE, prematureRate: element.LESS_PREMATURE_INT_RATE, schemeMethod: element.INTEREST_RULE, monthDays: element.S_INTCALTP, Quarterly: element.COMPOUND_INT_BASIS, interestUptoCalDate: element.IS_INTUPTODATE, afterMatureIntRate: element.AFTER_MATURE_INT_RATE, rebateRate: element.REBATE_INTRATE, installmentType: element.S_INSTTYPE, IS_DEPO_LOAN: element.IS_DEPO_LOAN, IS_GOLD_LOAN: element.IS_GOLD_LOAN,
                    FIXED_MATURITY_AMT: element.FIXED_MATURITY_AMT, IS_WEEKLY_REPAY: element.IS_WEEKLY_REPAY
                };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getAllSchemeList1() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE, code: element.S_APPL };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositSchemeRD() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/term/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                // let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                let obj = { label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL, glacno: element.S_GLACNO, intapp: element.S_INT_APPLICABLE, SVR_CHARGE_GLCODE: element.SVR_CHARGE_GLCODE, SVR_CHARGE_RATE: element.SVR_CHARGE_RATE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositSchemePatD() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/pat/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositeScheme() {
        return this.http.get(this.url + '/scheme-parameters/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_ACNOTYPE + ' ' + element.S_APPL, value: element.id };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTdReceiptScheme() {
        return this.http.get(this.url + '/scheme-parameters/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.RECEIPT_TYPE, value: element.id };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getAllSchemeListINT() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/interest')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
}
SchemeCodeDropdownService.ɵfac = function SchemeCodeDropdownService_Factory(t) { return new (t || SchemeCodeDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SchemeCodeDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchemeCodeDropdownService, factory: SchemeCodeDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeCodeDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/statement/bnk-lnamt-statement/bnk-lnamt-statement-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/reports/statement/bnk-lnamt-statement/bnk-lnamt-statement-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: BnkLNamtStatementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BnkLNamtStatementRoutingModule", function() { return BnkLNamtStatementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bnk_lnamt_statement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bnk-lnamt-statement.component */ "./src/app/theme/reports/statement/bnk-lnamt-statement/bnk-lnamt-statement.component.ts");





const routes = [
    {
        path: '',
        component: _bnk_lnamt_statement_component__WEBPACK_IMPORTED_MODULE_2__["BnkLNamtStatementComponent"],
        data: {
            title: 'Loan Statement other amount',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class BnkLNamtStatementRoutingModule {
}
BnkLNamtStatementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BnkLNamtStatementRoutingModule });
BnkLNamtStatementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BnkLNamtStatementRoutingModule_Factory(t) { return new (t || BnkLNamtStatementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BnkLNamtStatementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BnkLNamtStatementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/statement/bnk-lnamt-statement/bnk-lnamt-statement.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/reports/statement/bnk-lnamt-statement/bnk-lnamt-statement.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: BnkLNamtStatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BnkLNamtStatementComponent", function() { return BnkLNamtStatementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _iframe2_iframe2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../iframe2/iframe2.component */ "./src/app/theme/reports/statement/iframe2/iframe2.component.ts");

// Creating and maintaining form fields with validation





















function BnkLNamtStatementComponent_ng_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r9.label, "");
} }
function BnkLNamtStatementComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BnkLNamtStatementComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BnkLNamtStatementComponent_div_25_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ngForm.controls["BRANCH_CODE"].errors == null ? null : ctx_r1.ngForm.controls["BRANCH_CODE"].errors.required);
} }
function BnkLNamtStatementComponent_ng_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r11.id, " ", values_r11.label, " ");
} }
function BnkLNamtStatementComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BnkLNamtStatementComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BnkLNamtStatementComponent_div_37_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.ngForm.controls["Scheme_code"].errors == null ? null : ctx_r3.ngForm.controls["Scheme_code"].errors.required);
} }
function BnkLNamtStatementComponent_ng_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r13.label, " ", values_r13.name, "");
} }
function BnkLNamtStatementComponent_div_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BnkLNamtStatementComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BnkLNamtStatementComponent_div_49_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.ngForm.controls["Starting_Account"].errors == null ? null : ctx_r5.ngForm.controls["Starting_Account"].errors.required);
} }
function BnkLNamtStatementComponent_div_61_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BnkLNamtStatementComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BnkLNamtStatementComponent_div_61_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r6.ngForm.controls["Starting_Date"].errors == null ? null : ctx_r6.ngForm.controls["Starting_Date"].errors.maxlength) || (ctx_r6.ngForm.controls["Starting_Date"].errors == null ? null : ctx_r6.ngForm.controls["Starting_Date"].errors.minlength) || (ctx_r6.ngForm.controls["Starting_Date"].errors == null ? null : ctx_r6.ngForm.controls["Starting_Date"].errors.required));
} }
function BnkLNamtStatementComponent_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BnkLNamtStatementComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BnkLNamtStatementComponent_div_72_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r7.ngForm.controls["Ending_Date"].errors == null ? null : ctx_r7.ngForm.controls["Ending_Date"].errors.maxlength) || (ctx_r7.ngForm.controls["Ending_Date"].errors == null ? null : ctx_r7.ngForm.controls["Ending_Date"].errors.minlength) || (ctx_r7.ngForm.controls["Ending_Date"].errors == null ? null : ctx_r7.ngForm.controls["Ending_Date"].errors.required));
} }
function BnkLNamtStatementComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-iframe2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx_r8.iframe2url);
} }
const _c0 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
class BnkLNamtStatementComponent {
    constructor(fb, _ownbranchmasterservice, router, http, schemeCodeDropdownService, schemeAccountNoService, sanitizer, systemParameter) {
        this.fb = fb;
        this._ownbranchmasterservice = _ownbranchmasterservice;
        this.router = router;
        this.http = http;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.schemeAccountNoService = schemeAccountNoService;
        this.sanitizer = sanitizer;
        this.systemParameter = systemParameter;
        this.startingdate = null;
        this.endingdate = null;
        this.iframe2url = '';
        this.clicked = false;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].base_url;
        this.report_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].report_url;
        this.formSubmitted = false;
        // for dropdown ng module
        this.ngbranch = null;
        this.schemeCode = null;
        this.startingAccount = null;
        this.EndingAccount = null;
        this.showRepo = false;
        this.endingdate = moment__WEBPACK_IMPORTED_MODULE_7__().format('DD/MM/YYYY');
        this.maxDate = new Date();
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate());
    }
    ngOnInit() {
        this.createForm();
        //branch List
        this._ownbranchmasterservice.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(data => {
            this.branchOption = data;
        });
        // Scheme Code
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(data => {
            var filtered = data.filter(function (scheme) {
                return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
            });
            this.scheme = filtered;
        });
        this.systemParameter.getFormData(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(data => {
            this.endingdate = data.CURRENT_DATE;
        });
        this.systemParameter.getFormData(1).subscribe(data => {
            let year = moment__WEBPACK_IMPORTED_MODULE_7__(data.CURRENT_DATE, "DD/MM/YYYY").year();
            // this.fromdate = `01/04/${year - 1}`      
            this.endingdate = data.CURRENT_DATE;
            this.startingdate = moment__WEBPACK_IMPORTED_MODULE_7__(`01/04/${year - 1}`, 'DD/MM/YYYY');
            this.startingdate = this.startingdate._d;
        });
    }
    // validations for ngForm
    createForm() {
        this.ngForm = this.fb.group({
            BRANCH_CODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Scheme_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Starting_Account: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // Ending_Account: ['', [Validators.required]],
            Starting_Date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Ending_Date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Print_Closed_Account: [''],
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.ngbranch = result.branch.id;
            this.ngForm.controls['BRANCH_CODE'].enable();
        }
        else {
            this.ngForm.controls['BRANCH_CODE'].disable();
            this.ngbranch = result.branch.id;
        }
    }
    getBranch() {
        this.getIntroducer();
    }
    getIntro(event) {
        this.getschemename = event.name;
        this.getIntroducer();
    }
    getIntroducer() {
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;
        this.obj = [this.schemeCode, branchCode];
        switch (this.getschemename) {
            case 'LN':
                this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
                    this.startingacc = data;
                    this.startingAccount = null;
                    this.endingacc = data;
                    this.EndingAccount = null;
                });
                break;
            case 'CC':
                this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
                    this.startingacc = data;
                    this.startingAccount = null;
                    this.endingacc = data;
                    this.EndingAccount = null;
                });
                break;
            case 'DS':
                this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
                    this.startingacc = data;
                    this.startingAccount = null;
                    this.endingacc = data;
                    this.EndingAccount = null;
                });
                break;
        }
    }
    View(event) {
        debugger;
        event.preventDefault();
        this.formSubmitted = true;
        let userData = JSON.parse(localStorage.getItem('user'));
        let bankName = userData.branch.syspara.BANK_NAME;
        let branchName = userData.branch.NAME;
        if (this.ngForm.valid) {
            this.showRepo = true;
            let obj = this.ngForm.value;
            let startDate = moment__WEBPACK_IMPORTED_MODULE_7__(obj.Starting_Date).format('DD/MM/YYYY');
            //  let endDate = moment(obj.Ending_Date).format('DD/MM/YYYY');
            let endDate;
            if (this.endingdate == obj.Ending_Date) {
                endDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.endingdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
            }
            else {
                endDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.endingdate, 'DD/MM/YYYY').format('DD/MM/YYYY');
            }
            ;
            var sdate = moment__WEBPACK_IMPORTED_MODULE_7__(obj.Starting_Date).subtract(1, "day").format('DD/MM/YYYY');
            let branch = obj.BRANCH_CODE;
            let startingcode = obj.Starting_Account;
            //  let endingcode =obj.Ending_Account;
            let PrintEveryAccountonNewPage = obj.Print_Every_Account_on_New_Page;
            let PrintClosedAccount = obj.Print_Closed_Account;
            let PrintAddedPenalInterest = obj.Print_Added_Penal_Interest;
            let PrintConciseReporteme = obj.Print_Concise_Report;
            let scheme = obj.Scheme_code;
            this.iframe2url = this.report_url + "examples/LoanStatement.php?startDate='" + startDate + "'&endDate='" + endDate + "'&branch='" + this.ngbranch + "'&sdate='" + sdate + "'&startingcode=" + startingcode + "&endingcode=" + startingcode + "&scheme= " + scheme +
                " &PrintEveryAccountonNewPage= '" + PrintEveryAccountonNewPage + "' &PrintClosedAccount= '" + PrintClosedAccount + "'&PrintAddedPenalInterest= '" + PrintAddedPenalInterest + "' &PrintConciseReporteme= '" + PrintConciseReporteme + "' &bankName=" + bankName + "";
            this.iframe2url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe2url);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
        }
    }
    //load acno according start and end acno
    loadAcno() {
        this.memFrom = this.ngForm.controls['Starting_Account'].value;
        this.memTo = this.ngForm.controls['Ending_Account'].value;
        this.branch = this.ngForm.controls['BRANCH_CODE'].value;
        if (this.ngForm.controls['Starting_Account'].value < this.ngForm.controls['Ending_Account'].value) {
            this.mem = [this.memFrom, this.memTo, this.branch];
            if (this.getschemename == 'LN') {
                this.http.get(this.url + '/term-loan-master/scheme/' + this.mem).subscribe((data) => {
                });
            }
            else if (this.getschemename == 'CC') {
                this.http.get(this.url + '/cash-credit-master/scheme/' + this.mem).subscribe((data) => {
                });
            }
            else if (this.getschemename == 'DS') {
                this.http.get(this.url + '/dispute-loan-master/scheme/' + this.mem).subscribe((data) => {
                });
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false; });
        }
    }
    close() {
        this.resetForm();
    }
    resetForm() {
        // this.createForm()
        // this.ngForm.controls.BRANCH_CODE.reset();
        this.ngForm.controls.Scheme_code.reset();
        this.ngForm.controls.Starting_Account.reset();
        // this.ngForm.controls.Ending_Account.reset();
        this.showRepo = false;
        this.clicked = false;
    }
}
BnkLNamtStatementComponent.ɵfac = function BnkLNamtStatementComponent_Factory(t) { return new (t || BnkLNamtStatementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_2__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_4__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_3__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__["SystemMasterParametersService"])); };
BnkLNamtStatementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BnkLNamtStatementComponent, selectors: [["app-bnk-lnamt-statement"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_4__["SchemeCodeDropdownService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_3__["SchemeAccountNoService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_2__["OwnbranchMasterService"]])], decls: 89, vars: 23, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [3, "formGroup"], [1, "card-block"], [1, "col-sm-12", "col-md-2"], ["for", "Branch"], [1, "col-sm-12", "col-md-3"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["id", "BRANCH_CODE", "bindValue", "value", "formControlName", "BRANCH_CODE", "bindLabel", "label", "placeholder", "Branch", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-12", "col-md-1"], ["for", "Scheme Code"], ["formControlName", "Scheme_code", "bindValue", "value", "bindLabel", "label", "placeholder", "Scheme Code", 3, "ngModel", "ngModelChange", "change"], ["for", "Starting Account"], ["formControlName", "Starting_Account", "bindValue", "value", "bindLabel", "label", "placeholder", "Starting Account", 3, "ngModel", "ngModelChange"], ["for", "Starting Date"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "Starting_Date", "id", "Starting_Date", "appButton", "", "minlength", "10", "maxlength", "10", "formControlName", "Starting_Date", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "maxDate", "ngModelChange", "keypress"], ["for", "Ending Date"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "Ending_Date", "id", "Ending_Date", "appButton", "", "minlength", "10", "maxlength", "10", "formControlName", "Ending_Date", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "ngModel", "maxDate", "minDate", "ngModelChange", "keypress"], [1, "col-md-9"], [1, "col-md-2"], ["type", "submit", "value", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], [1, "col-md-1"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [3, "url"]], template: function BnkLNamtStatementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Term Loan Statement With Other Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Branch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BnkLNamtStatementComponent_Template_ng_select_ngModelChange_23_listener($event) { return ctx.ngbranch = $event; })("change", function BnkLNamtStatementComponent_Template_ng_select_change_23_listener() { return ctx.getBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BnkLNamtStatementComponent_ng_option_24_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BnkLNamtStatementComponent_div_25_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Scheme Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BnkLNamtStatementComponent_Template_ng_select_ngModelChange_35_listener($event) { return ctx.schemeCode = $event; })("change", function BnkLNamtStatementComponent_Template_ng_select_change_35_listener($event) { return ctx.getIntro($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BnkLNamtStatementComponent_ng_option_36_Template, 2, 3, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, BnkLNamtStatementComponent_div_37_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Account No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ng-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BnkLNamtStatementComponent_Template_ng_select_ngModelChange_47_listener($event) { return ctx.startingAccount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, BnkLNamtStatementComponent_ng_option_48_Template, 2, 3, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, BnkLNamtStatementComponent_div_49_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Starting Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BnkLNamtStatementComponent_Template_input_ngModelChange_60_listener($event) { return ctx.startingdate = $event; })("keypress", function BnkLNamtStatementComponent_Template_input_keypress_60_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, BnkLNamtStatementComponent_div_61_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Ending Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BnkLNamtStatementComponent_Template_input_ngModelChange_71_listener($event) { return ctx.endingdate = $event; })("keypress", function BnkLNamtStatementComponent_Template_input_keypress_71_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, BnkLNamtStatementComponent_div_72_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BnkLNamtStatementComponent_Template_button_click_77_listener($event) { ctx.View($event); return ctx.clicked = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BnkLNamtStatementComponent_Template_button_click_80_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Report Frame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, BnkLNamtStatementComponent_div_88_Template, 2, 1, "div", 31);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngbranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branchOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["BRANCH_CODE"].invalid && (ctx.ngForm.controls["BRANCH_CODE"].dirty || ctx.ngForm.controls["BRANCH_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.schemeCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["Scheme_code"].invalid && (ctx.ngForm.controls["Scheme_code"].dirty || ctx.ngForm.controls["Scheme_code"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.startingAccount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.startingacc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["Starting_Account"].invalid && (ctx.ngForm.controls["Starting_Account"].dirty || ctx.ngForm.controls["Starting_Account"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.startingdate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0))("maxDate", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["Starting_Date"].invalid && (ctx.ngForm.controls["Starting_Date"].dirty || ctx.ngForm.controls["Starting_Date"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0))("ngModel", ctx.endingdate)("maxDate", ctx.maxDate)("minDate", ctx.startingdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["Ending_Date"].invalid && (ctx.ngForm.controls["Ending_Date"].dirty || ctx.ngForm.controls["Ending_Date"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.clicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRepo);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵr"], _iframe2_iframe2_component__WEBPACK_IMPORTED_MODULE_16__["Iframe2Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvc3RhdGVtZW50L2Juay1sbmFtdC1zdGF0ZW1lbnQvYm5rLWxuYW10LXN0YXRlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BnkLNamtStatementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bnk-lnamt-statement',
                templateUrl: './bnk-lnamt-statement.component.html',
                styleUrls: ['./bnk-lnamt-statement.component.scss'],
                providers: [_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_4__["SchemeCodeDropdownService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_3__["SchemeAccountNoService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_2__["OwnbranchMasterService"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_2__["OwnbranchMasterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }, { type: _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_4__["SchemeCodeDropdownService"] }, { type: _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_3__["SchemeAccountNoService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] }, { type: src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__["SystemMasterParametersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/statement/bnk-lnamt-statement/bnk-lnamt-statement.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/reports/statement/bnk-lnamt-statement/bnk-lnamt-statement.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: BnkLNamtStatementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BnkLNamtStatementModule", function() { return BnkLNamtStatementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _bnk_lnamt_statement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bnk-lnamt-statement.component */ "./src/app/theme/reports/statement/bnk-lnamt-statement/bnk-lnamt-statement.component.ts");
/* harmony import */ var _bnk_lnamt_statement_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bnk-lnamt-statement-routing.module */ "./src/app/theme/reports/statement/bnk-lnamt-statement/bnk-lnamt-statement-routing.module.ts");
/* harmony import */ var _iframe2_iframe2_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../iframe2/iframe2.module */ "./src/app/theme/reports/statement/iframe2/iframe2.module.ts");













class BnkLNamtStatementModule {
}
BnkLNamtStatementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BnkLNamtStatementModule });
BnkLNamtStatementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BnkLNamtStatementModule_Factory(t) { return new (t || BnkLNamtStatementModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["DatepickerModule"].forRoot(),
            _bnk_lnamt_statement_routing_module__WEBPACK_IMPORTED_MODULE_9__["BnkLNamtStatementRoutingModule"],
            _iframe2_iframe2_module__WEBPACK_IMPORTED_MODULE_10__["Iframe2Module"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BnkLNamtStatementModule, { declarations: [_bnk_lnamt_statement_component__WEBPACK_IMPORTED_MODULE_8__["BnkLNamtStatementComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["DatepickerModule"], _bnk_lnamt_statement_routing_module__WEBPACK_IMPORTED_MODULE_9__["BnkLNamtStatementRoutingModule"],
        _iframe2_iframe2_module__WEBPACK_IMPORTED_MODULE_10__["Iframe2Module"]], exports: [_bnk_lnamt_statement_component__WEBPACK_IMPORTED_MODULE_8__["BnkLNamtStatementComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BnkLNamtStatementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["DatepickerModule"].forRoot(),
                    _bnk_lnamt_statement_routing_module__WEBPACK_IMPORTED_MODULE_9__["BnkLNamtStatementRoutingModule"],
                    _iframe2_iframe2_module__WEBPACK_IMPORTED_MODULE_10__["Iframe2Module"]
                ],
                declarations: [_bnk_lnamt_statement_component__WEBPACK_IMPORTED_MODULE_8__["BnkLNamtStatementComponent"]],
                exports: [_bnk_lnamt_statement_component__WEBPACK_IMPORTED_MODULE_8__["BnkLNamtStatementComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=bnk-lnamt-statement-bnk-lnamt-statement-module.js.map