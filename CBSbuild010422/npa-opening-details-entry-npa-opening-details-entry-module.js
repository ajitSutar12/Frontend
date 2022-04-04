(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npa-opening-details-entry-npa-opening-details-entry-module"],{

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
                let obj = { label: element.CODE + ' ' + element.NAME, value: element.id, name: element.CODE };
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
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_APPL, id: element.S_ACNOTYPE, dividend: element.DIVIDEND_PERCENTAGE, divMethod: element.INTEREST_RULE, isAddBonus: element.IS_ADD_BONUS_IN_DIVIDEND, INT_ROUND_OFF: element.INT_ROUND_OFF };
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
                let obj = { label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL, glacno: element.S_GLACNO, intapp: element.S_INT_APPLICABLE };
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
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            console.log('in service', this.schemeObject);
            return this.schemeObject;
        }));
    }
    getTermDepositSchemeRD() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/term/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
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

/***/ "./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry-routing.module.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry-routing.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: NpaOpeningDetailsEntryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpaOpeningDetailsEntryRoutingModule", function() { return NpaOpeningDetailsEntryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _npa_opening_details_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./npa-opening-details-entry.component */ "./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry.component.ts");





const routes = [
    {
        path: '',
        component: _npa_opening_details_entry_component__WEBPACK_IMPORTED_MODULE_2__["NpaOpeningDetailsEntryComponent"],
        data: {
            title: 'NPA Opening Details Entry',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class NpaOpeningDetailsEntryRoutingModule {
}
NpaOpeningDetailsEntryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NpaOpeningDetailsEntryRoutingModule });
NpaOpeningDetailsEntryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NpaOpeningDetailsEntryRoutingModule_Factory(t) { return new (t || NpaOpeningDetailsEntryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NpaOpeningDetailsEntryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NpaOpeningDetailsEntryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: NpaOpeningDetailsEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpaOpeningDetailsEntryComponent", function() { return NpaOpeningDetailsEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _npa_opening_details_entry_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./npa-opening-details-entry.service */ "./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");






// Angular Datatable Directive












function NpaOpeningDetailsEntryComponent_ng_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r12.label, "");
} }
function NpaOpeningDetailsEntryComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NpaOpeningDetailsEntryComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NpaOpeningDetailsEntryComponent_div_22_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.npaOpeningForm.controls["BRANCH"].errors == null ? null : ctx_r2.npaOpeningForm.controls["BRANCH"].errors.required);
} }
function NpaOpeningDetailsEntryComponent_ng_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r14.label, "");
} }
function NpaOpeningDetailsEntryComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NpaOpeningDetailsEntryComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NpaOpeningDetailsEntryComponent_div_32_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.npaOpeningForm.controls["AC_TYPE"].errors == null ? null : ctx_r4.npaOpeningForm.controls["AC_TYPE"].errors.required);
} }
function NpaOpeningDetailsEntryComponent_ng_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r16.label, " ", values_r16.name, "");
} }
function NpaOpeningDetailsEntryComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NpaOpeningDetailsEntryComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NpaOpeningDetailsEntryComponent_div_42_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.npaOpeningForm.controls["FROM_AC"].errors == null ? null : ctx_r6.npaOpeningForm.controls["FROM_AC"].errors.required);
} }
function NpaOpeningDetailsEntryComponent_ng_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r18.label, " ", values_r18.name, "");
} }
function NpaOpeningDetailsEntryComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NpaOpeningDetailsEntryComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NpaOpeningDetailsEntryComponent_div_52_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.npaOpeningForm.controls["TO_AC"].errors == null ? null : ctx_r8.npaOpeningForm.controls["TO_AC"].errors.required);
} }
function NpaOpeningDetailsEntryComponent_button_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.npaOpeningForm.invalid);
} }
function NpaOpeningDetailsEntryComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NpaOpeningDetailsEntryComponent_button_55_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function NpaOpeningDetailsEntryComponent_div_58_tbody_17_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function NpaOpeningDetailsEntryComponent_div_58_tbody_17_tr_1_Template_input_keypress_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; })("bsValueChange", function NpaOpeningDetailsEntryComponent_div_58_tbody_17_tr_1_Template_input_bsValueChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const data_r25 = ctx.$implicit; const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.getLastTranDate(data_r25.id, data_r25.AC_NO, _r27.value, _r28.value, _r29.value, _r30.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NpaOpeningDetailsEntryComponent_div_58_tbody_17_tr_1_Template_input_focus_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r34.selectAllContent($event); })("keypress", function NpaOpeningDetailsEntryComponent_div_58_tbody_17_tr_1_Template_input_keypress_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); return $event.charCode >= 48 && $event.charCode < 58; })("focusout", function NpaOpeningDetailsEntryComponent_div_58_tbody_17_tr_1_Template_input_focusout_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const data_r25 = ctx.$implicit; const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r36.getPostedInterest(data_r25.id, data_r25.AC_NO, _r28.value, _r27.value, _r29.value, _r30.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NpaOpeningDetailsEntryComponent_div_58_tbody_17_tr_1_Template_input_focus_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r37.selectAllContent($event); })("keypress", function NpaOpeningDetailsEntryComponent_div_58_tbody_17_tr_1_Template_input_keypress_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); return $event.charCode >= 48 && $event.charCode < 58; })("focusout", function NpaOpeningDetailsEntryComponent_div_58_tbody_17_tr_1_Template_input_focusout_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const data_r25 = ctx.$implicit; const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.getDepositAmount(data_r25.id, data_r25.AC_NO, _r29.value, _r27.value, _r28.value, _r30.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NpaOpeningDetailsEntryComponent_div_58_tbody_17_tr_1_Template_input_change_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const data_r25 = ctx.$implicit; const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r40.checkDisputeFlag(data_r25.id, data_r25.AC_NO, $event, _r27.value, _r28.value, _r29.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r25.AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r25.AC_NAME == "" || data_r25.AC_NAME == null ? "-" : data_r25.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r25.AC_ACTDATE == null || data_r25.AC_ACTDATE == "" ? "" : data_r25.AC_ACTDATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r25.OP_POSTED_INT == null || data_r25.OP_POSTED_INT == "" ? 0 : data_r25.OP_POSTED_INT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r25.AC_OP_TOTAL_DEPOSITAMT == null || data_r25.AC_OP_TOTAL_DEPOSITAMT == "" ? 0 : data_r25.AC_OP_TOTAL_DEPOSITAMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r25.IS_DISPUTE_LOAN === true ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", data_r25.IS_DISPUTE_LOAN === true ? true : null);
} }
function NpaOpeningDetailsEntryComponent_div_58_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NpaOpeningDetailsEntryComponent_div_58_tbody_17_tr_1_Template, 17, 9, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.arrTable);
} }
function NpaOpeningDetailsEntryComponent_div_58_tbody_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NpaOpeningDetailsEntryComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last Transaction Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total Posted Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Total Deposit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Is Dispute Loan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NpaOpeningDetailsEntryComponent_div_58_tbody_17_Template, 2, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NpaOpeningDetailsEntryComponent_div_58_tbody_18_Template, 4, 0, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r11.dtOptions)("dtTrigger", ctx_r11.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.arrTable == null ? null : ctx_r11.arrTable.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.arrTable == null ? null : ctx_r11.arrTable.length) == 0);
} }
const _c1 = function (a0) { return { "form-submitted": a0 }; };
class DataTableResponse {
}
class NpaOpeningDetailsEntryComponent {
    constructor(fb, http, _npaService, schemeCodeDropdownService, schemeAccountNoService, ownbranchMasterService) {
        this.fb = fb;
        this.http = http;
        this._npaService = _npaService;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.schemeAccountNoService = schemeAccountNoService;
        this.ownbranchMasterService = ownbranchMasterService;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
        this.formSubmitted = false;
        this.dtExportButtonOptions = {};
        this.showButton = true;
        this.updateShow = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        //dropdown ngmodel variables
        this.ngscheme = null;
        this.ngfromac = null;
        this.ngtoac = null;
        this.ngBranchCode = null;
        this.showTable = false;
        this.npaEntryArray = [];
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            dom: 'ftip'
        };
        this.createForm();
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(data => {
            var allscheme = data.filter(function (scheme) {
                return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
            });
            this.scheme = allscheme;
        });
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(data => {
            this.branch_code = data;
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.npaOpeningForm.controls['BRANCH'].enable();
        }
        else {
            this.npaOpeningForm.controls['BRANCH'].disable();
            this.ngBranchCode = result.branch.id;
        }
    }
    createForm() {
        this.npaOpeningForm = this.fb.group({
            AC_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            FROM_AC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            TO_AC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            BRANCH: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    getBranch() {
        this.ngscheme = null;
        this.ngfromac = null;
        this.ngtoac = null;
        this.arrTable = [];
        this.npaEntryArray = [];
    }
    //get account no according scheme
    getAccountList(event) {
        this.ngfromac = null;
        this.ngtoac = null;
        this.arrTable = [];
        this.npaEntryArray = [];
        let obj = [this.ngscheme, this.ngBranchCode];
        switch (event.name) {
            case 'DS':
                this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(data => {
                    this.ToAC = data;
                    this.fromAC = data;
                });
                break;
            case 'LN':
                this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(data => {
                    this.ToAC = data;
                    this.fromAC = data;
                });
                break;
            case 'CC':
                this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(data => {
                    this.ToAC = data;
                    this.fromAC = data;
                });
                break;
        }
        this.getschemename = event.name;
    }
    getTable() {
        this.arrTable = [];
        this.npaEntryArray = [];
        var memFrom = this.npaOpeningForm.controls['FROM_AC'].value;
        var memTo = this.npaOpeningForm.controls['TO_AC'].value;
        if (this.npaOpeningForm.controls['FROM_AC'].value < this.npaOpeningForm.controls['TO_AC'].value) {
            this.showTable = true;
            this.mem = [memFrom, memTo, this.ngscheme, this.ngBranchCode, this.getschemename];
            this.http.get(this.url + '/term-loan-master/npaopening/' + this.mem).subscribe((data) => {
                this.arrTable = data;
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("To Account Number Must Be Greater Than From Account Number");
            this.npaOpeningForm.patchValue({
                TO_AC: ''
            });
            this.arrTable = [];
            this.npaEntryArray = [];
        }
    }
    //select content of field
    selectAllContent($event) {
        $event.target.select();
    }
    //push receipt no into object
    getLastTranDate(id, acno, AC_ACTDATE, OP_POSTED_INT, AC_OP_TOTAL_DEPOSITAMT, IS_DISPUTE_LOAN) {
        if (AC_ACTDATE != '' || AC_ACTDATE != 'Invalid date') {
            if (this.npaEntryArray.length != 0) {
                if (this.npaEntryArray.some(item => item.AC_NO === acno)) {
                    this.npaEntryArray.forEach((element) => {
                        if (element.AC_NO == acno) {
                            element['AC_ACTDATE'] = AC_ACTDATE;
                        }
                    });
                }
                else {
                    var object = {
                        AC_ACTDATE: AC_ACTDATE,
                        AC_NO: acno,
                        id: id,
                        OP_POSTED_INT: OP_POSTED_INT,
                        AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
                        IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
                    };
                    this.npaEntryArray.push(object);
                }
            }
            else {
                var object = {
                    AC_ACTDATE: AC_ACTDATE,
                    AC_NO: acno,
                    id: id,
                    OP_POSTED_INT: OP_POSTED_INT,
                    AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
                    IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
                };
                this.npaEntryArray.push(object);
            }
        }
        console.log(this.npaEntryArray);
    }
    //push amount in npaEntryArray array
    getPostedInterest(id, acno, OP_POSTED_INT, AC_ACTDATE, AC_OP_TOTAL_DEPOSITAMT, IS_DISPUTE_LOAN) {
        if (OP_POSTED_INT != '') {
            if (this.npaEntryArray.length != 0) {
                if (this.npaEntryArray.some(item => item.AC_NO === acno)) {
                    this.npaEntryArray.forEach((element) => {
                        if (element.AC_NO == acno) {
                            element['OP_POSTED_INT'] = OP_POSTED_INT;
                        }
                    });
                }
                else {
                    var object = {
                        AC_ACTDATE: AC_ACTDATE,
                        AC_NO: acno,
                        id: id,
                        OP_POSTED_INT: OP_POSTED_INT,
                        AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
                        IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
                    };
                    this.npaEntryArray.push(object);
                }
            }
            else {
                var object = {
                    AC_ACTDATE: AC_ACTDATE,
                    AC_NO: acno,
                    id: id,
                    OP_POSTED_INT: OP_POSTED_INT,
                    AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
                    IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
                };
                this.npaEntryArray.push(object);
            }
        }
        console.log(this.npaEntryArray);
    }
    getDepositAmount(id, acno, AC_OP_TOTAL_DEPOSITAMT, AC_ACTDATE, OP_POSTED_INT, IS_DISPUTE_LOAN) {
        if (AC_OP_TOTAL_DEPOSITAMT != '') {
            if (this.npaEntryArray.length != 0) {
                if (this.npaEntryArray.some(item => item.AC_NO === acno)) {
                    this.npaEntryArray.forEach((element) => {
                        if (element.AC_NO == acno) {
                            element['AC_OP_TOTAL_DEPOSITAMT'] = AC_OP_TOTAL_DEPOSITAMT;
                        }
                    });
                }
                else {
                    var object = {
                        AC_ACTDATE: AC_ACTDATE,
                        AC_NO: acno,
                        id: id,
                        OP_POSTED_INT: OP_POSTED_INT,
                        AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
                        IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
                    };
                    this.npaEntryArray.push(object);
                }
            }
            else {
                var object = {
                    AC_ACTDATE: AC_ACTDATE,
                    AC_NO: acno,
                    id: id,
                    OP_POSTED_INT: OP_POSTED_INT,
                    AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
                    IS_DISPUTE_LOAN: IS_DISPUTE_LOAN
                };
                this.npaEntryArray.push(object);
            }
        }
        console.log(this.npaEntryArray);
    }
    checkDisputeFlag(id, acno, flag, AC_ACTDATE, OP_POSTED_INT, AC_OP_TOTAL_DEPOSITAMT) {
        let isDispute = false;
        if (flag.target.checked) {
            isDispute = true;
        }
        else {
            isDispute = false;
        }
        if (this.npaEntryArray.length != 0) {
            if (this.npaEntryArray.some(item => item.AC_NO === acno)) {
                this.npaEntryArray.forEach((element) => {
                    if (element.AC_NO == acno) {
                        element['IS_DISPUTE_LOAN'] = isDispute;
                    }
                });
            }
            else {
                var object = {
                    AC_ACTDATE: AC_ACTDATE,
                    AC_NO: acno,
                    id: id,
                    OP_POSTED_INT: OP_POSTED_INT,
                    AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
                    IS_DISPUTE_LOAN: isDispute
                };
                this.npaEntryArray.push(object);
            }
        }
        else {
            var object = {
                AC_ACTDATE: AC_ACTDATE,
                AC_NO: acno,
                id: id,
                OP_POSTED_INT: OP_POSTED_INT,
                AC_OP_TOTAL_DEPOSITAMT: AC_OP_TOTAL_DEPOSITAMT,
                IS_DISPUTE_LOAN: isDispute
            };
            this.npaEntryArray.push(object);
        }
    }
    submit() {
        if (this.npaEntryArray.length != 0) {
            const dataToSend = {
                'npaEntryArray': this.npaEntryArray
            };
            console.log(dataToSend);
            this._npaService.postData(dataToSend).subscribe((data) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Success!", "Data Updated Successfully !", "success");
            }, (error) => {
                console.log(error);
            });
            //To clear form
            this.resetForm();
            this.arrTable = [];
            this.npaEntryArray = [];
        }
    }
    resetForm() {
        this.createForm();
        this.ngscheme = null;
        this.ngfromac = null;
        this.ngtoac = null;
        this.ngBranchCode = null;
        this.arrTable = [];
        this.npaEntryArray = [];
    }
    //function for edit button clicked
    editClickHandler(info) {
        this.showButton = false;
        this.updateShow = true;
    }
    //function for delete button clicked
    delClickHandler(info) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want to delete A/c no  data",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Cancelled', 'Your data is safe.', 'error');
            }
        });
    }
    updateData() {
        this.showButton = true;
        this.updateShow = false;
    }
    ngAfterViewInit() {
        this.dtTrigger.next();
        // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //   $('#npaopeningdetailstable tfoot tr').appendTo('#npaopeningdetailstable thead');
        //   dtInstance.columns().every(function () {
        //     const that = this;
        //     $('input', this.footer()).on('keyup change', function () {
        //       if (this['value'] != '') {
        //         that
        //           .search(this['value'])
        //           .draw();
        //       } else {
        //         that
        //           .search(this['value'])
        //           .draw();
        //       }
        //     });
        //   });
        // });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
}
NpaOpeningDetailsEntryComponent.ɵfac = function NpaOpeningDetailsEntryComponent_Factory(t) { return new (t || NpaOpeningDetailsEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_npa_opening_details_entry_service__WEBPACK_IMPORTED_MODULE_8__["NpaOpeningDetailsEntryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_10__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"])); };
NpaOpeningDetailsEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NpaOpeningDetailsEntryComponent, selectors: [["app-npa-opening-details-entry"]], viewQuery: function NpaOpeningDetailsEntryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 59, vars: 28, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "novalidate", "", 3, "formGroup", "ngSubmit"], ["myform", "ngForm"], [1, "card-block"], [1, "col-sm-2"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["id", "BRANCH", "bindValue", "value", "formControlName", "BRANCH", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", 3, "ngModel", "ngClass", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "BRANCH"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm"], ["id", "AC_TYPE", "bindValue", "value", "formControlName", "AC_TYPE", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme Code", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "AC_TYPE"], ["id", "FROM_AC", "bindValue", "value", "formControlName", "FROM_AC", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "From A/C", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "FROM_AC"], ["id", "TO_AC", "bindValue", "value", "formControlName", "TO_AC", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "To A/C", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "TO_AC"], ["class", "btn btn-outline-primary btn-sm", 3, "disabled", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [1, "col-sm-12"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions", "dtTrigger"], [1, "td_right"], [1, "td_center"], [4, "ngFor", "ngForOf"], ["type", "text", "name", "AC_ACTDATE", "id", "AC_ACTDATE", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "value", "keypress", "bsValueChange"], ["AC_ACTDATE", ""], ["type", "text", "name", "OP_POSTED_INT", "id", "OP_POSTED_INT", 1, "form-control", 2, "text-align", "right", 3, "value", "focus", "keypress", "focusout"], ["OP_POSTED_INT", ""], ["type", "text", "name", "AC_OP_TOTAL_DEPOSITAMT", "id", "AC_OP_TOTAL_DEPOSITAMT", 1, "form-control", 2, "text-align", "right", 3, "value", "focus", "keypress", "focusout"], ["AC_OP_TOTAL_DEPOSITAMT", ""], ["type", "checkbox", "id", "IS_DISPUTE_LOAN", 1, "border-checkbox", 3, "value", "change"], ["IS_DISPUTE_LOAN", ""], ["colspan", "6", 1, "no-data-available", 2, "text-align", "center"]], template: function NpaOpeningDetailsEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Opening NPA Details Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NpaOpeningDetailsEntryComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NpaOpeningDetailsEntryComponent_Template_ng_select_ngModelChange_18_listener($event) { return ctx.ngBranchCode = $event; })("change", function NpaOpeningDetailsEntryComponent_Template_ng_select_change_18_listener() { return ctx.getBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NpaOpeningDetailsEntryComponent_ng_option_19_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NpaOpeningDetailsEntryComponent_div_22_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NpaOpeningDetailsEntryComponent_Template_ng_select_ngModelChange_26_listener($event) { return ctx.ngscheme = $event; })("change", function NpaOpeningDetailsEntryComponent_Template_ng_select_change_26_listener($event) { return ctx.getAccountList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NpaOpeningDetailsEntryComponent_ng_option_27_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Scheme Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NpaOpeningDetailsEntryComponent_div_32_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ng-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NpaOpeningDetailsEntryComponent_Template_ng_select_ngModelChange_36_listener($event) { return ctx.ngfromac = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, NpaOpeningDetailsEntryComponent_ng_option_37_Template, 2, 3, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "From Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, NpaOpeningDetailsEntryComponent_div_42_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ng-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NpaOpeningDetailsEntryComponent_Template_ng_select_ngModelChange_46_listener($event) { return ctx.ngtoac = $event; })("change", function NpaOpeningDetailsEntryComponent_Template_ng_select_change_46_listener() { return ctx.getTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, NpaOpeningDetailsEntryComponent_ng_option_47_Template, 2, 3, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "To Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, NpaOpeningDetailsEntryComponent_div_52_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, NpaOpeningDetailsEntryComponent_button_54_Template, 2, 1, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, NpaOpeningDetailsEntryComponent_button_55_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, NpaOpeningDetailsEntryComponent_div_58_Template, 19, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.npaOpeningForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngBranchCode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.npaOpeningForm.controls["BRANCH"].invalid && (ctx.npaOpeningForm.controls["BRANCH"].dirty || ctx.npaOpeningForm.controls["BRANCH"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngscheme)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.npaOpeningForm.controls["AC_TYPE"].invalid && (ctx.npaOpeningForm.controls["AC_TYPE"].dirty || ctx.npaOpeningForm.controls["AC_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngfromac)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fromAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.npaOpeningForm.controls["FROM_AC"].invalid && (ctx.npaOpeningForm.controls["FROM_AC"].dirty || ctx.npaOpeningForm.controls["FROM_AC"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngtoac)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ToAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.npaOpeningForm.controls["TO_AC"].invalid && (ctx.npaOpeningForm.controls["TO_AC"].dirty || ctx.npaOpeningForm.controls["TO_AC"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵr"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9tYWludGFpbmFuY2UvbnBhLW9wZW5pbmctZGV0YWlscy1lbnRyeS9ucGEtb3BlbmluZy1kZXRhaWxzLWVudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NpaOpeningDetailsEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-npa-opening-details-entry',
                templateUrl: './npa-opening-details-entry.component.html',
                styleUrls: ['./npa-opening-details-entry.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }, { type: _npa_opening_details_entry_service__WEBPACK_IMPORTED_MODULE_8__["NpaOpeningDetailsEntryService"] }, { type: _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["SchemeCodeDropdownService"] }, { type: _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_10__["SchemeAccountNoService"] }, { type: _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: NpaOpeningDetailsEntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpaOpeningDetailsEntryModule", function() { return NpaOpeningDetailsEntryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _npa_opening_details_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./npa-opening-details-entry.component */ "./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry.component.ts");
/* harmony import */ var _npa_opening_details_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./npa-opening-details-entry-routing.module */ "./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry-routing.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _npa_opening_details_entry_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./npa-opening-details-entry.service */ "./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");




// import { SelectModule } from 'ng-select';













class NpaOpeningDetailsEntryModule {
}
NpaOpeningDetailsEntryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NpaOpeningDetailsEntryModule, bootstrap: [_npa_opening_details_entry_component__WEBPACK_IMPORTED_MODULE_2__["NpaOpeningDetailsEntryComponent"]] });
NpaOpeningDetailsEntryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NpaOpeningDetailsEntryModule_Factory(t) { return new (t || NpaOpeningDetailsEntryModule)(); }, providers: [_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["SchemeCodeDropdownService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_6__["SchemeAccountNoService"], _npa_opening_details_entry_service__WEBPACK_IMPORTED_MODULE_10__["NpaOpeningDetailsEntryService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["OwnbranchMasterService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _npa_opening_details_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["NpaOpeningDetailsEntryRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
            // SelectModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["DatepickerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NpaOpeningDetailsEntryModule, { declarations: [_npa_opening_details_entry_component__WEBPACK_IMPORTED_MODULE_2__["NpaOpeningDetailsEntryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        _npa_opening_details_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["NpaOpeningDetailsEntryRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
        // SelectModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["DatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NpaOpeningDetailsEntryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                    _npa_opening_details_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["NpaOpeningDetailsEntryRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                    // SelectModule,
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["DatepickerModule"].forRoot()
                ],
                providers: [_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["SchemeCodeDropdownService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_6__["SchemeAccountNoService"], _npa_opening_details_entry_service__WEBPACK_IMPORTED_MODULE_10__["NpaOpeningDetailsEntryService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["OwnbranchMasterService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["UserAuthInterceptor"],
                        multi: true
                    },],
                declarations: [_npa_opening_details_entry_component__WEBPACK_IMPORTED_MODULE_2__["NpaOpeningDetailsEntryComponent"]],
                bootstrap: [_npa_opening_details_entry_component__WEBPACK_IMPORTED_MODULE_2__["NpaOpeningDetailsEntryComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry.service.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: NpaOpeningDetailsEntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpaOpeningDetailsEntryService", function() { return NpaOpeningDetailsEntryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class NpaOpeningDetailsEntryService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
    }
    //get data for form
    loadData() {
        return this.http.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res));
    }
    //submit data for form
    postData(data1) {
        return this.http.post(this.url + '/term-loan-master/entryNpa', data1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            let errorMessage = 'Please add valid length';
            console.log(error);
            // window.alert(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }));
    }
    //delete record from table
    deleteData(id) {
        return this.http.delete(this.url + '/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // updateData(data): Observable<any> {
    //     let result = this.http.post(this.url + '/update/', data).pipe(catchError(this.handleError));
    //     console.log(result);
    //     return result;
    // }
    // updateData(id:any,data:any):Observable<any>{
    //   return this.http.post(this.url +'/update/'+id,data).pipe(catchError(this.handleError));
    // }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/term-loan-master/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
}
NpaOpeningDetailsEntryService.ɵfac = function NpaOpeningDetailsEntryService_Factory(t) { return new (t || NpaOpeningDetailsEntryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
NpaOpeningDetailsEntryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NpaOpeningDetailsEntryService, factory: NpaOpeningDetailsEntryService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NpaOpeningDetailsEntryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=npa-opening-details-entry-npa-opening-details-entry-module.js.map