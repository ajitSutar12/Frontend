(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["noting-charges-notingCharges-module"],{

/***/ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/dropdownService/ac-master-dropdown.service.ts ***!
  \**********************************************************************/
/*! exports provided: ACMasterDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACMasterDropdownService", function() { return ACMasterDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ACMasterDropdownService {
    constructor(http) {
        this.http = http;
        // // gl-account-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.acMasterObject = new Array();
    }
    getACMasterList() {
        this.acMasterObject = [];
        return this.http.get(this.url + '/gl-account-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NAME, value: element.id, name: element.AC_NO };
                this.acMasterObject.push(obj);
            });
            return this.acMasterObject;
        }));
    }
    getACMasterList1() {
        this.acMasterObject = [];
        return this.http.get(this.url + '/gl-account-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { AC_NAME: element.AC_NAME, id: element.id, AC_NO: element.AC_NO };
                this.acMasterObject.push(obj);
            });
            return this.acMasterObject;
        }));
    }
    getACMasterbranch(branchid) {
        this.acMasterObject = [];
        return this.http.get(this.url + '/gl-account-master/branch/' + branchid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                // let obj = { label: element.AC_NAME, value: element.id, name: element.AC_NO };
                // let obj = { label: element.AC_NO + ' ' + element.AC_NAME + ' ', value: element.id };
                let obj = { label: element.AC_NO + ' ' + element.AC_NAME + ' ', value: element.id, name: element.AC_NO };
                this.acMasterObject.push(obj);
            });
            return this.acMasterObject;
        }));
    }
}
ACMasterDropdownService.ɵfac = function ACMasterDropdownService_Factory(t) { return new (t || ACMasterDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ACMasterDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ACMasterDropdownService, factory: ACMasterDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ACMasterDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

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

/***/ "./src/app/theme/master/maintainance/noting-charges/noting-charges.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/master/maintainance/noting-charges/noting-charges.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NotingChargesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotingChargesComponent", function() { return NotingChargesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var _noting_charges_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./noting-charges.service */ "./src/app/theme/master/maintainance/noting-charges/noting-charges.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");


















function NotingChargesComponent_ng_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r22.label, "");
} }
function NotingChargesComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_23_div_1_Template, 2, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["BRANCH"].errors == null ? null : ctx_r3.angForm.controls["BRANCH"].errors.required);
} }
function NotingChargesComponent_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r24.S_APPL, " ", values_r24.S_NAME, "");
} }
function NotingChargesComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_34_div_1_Template, 2, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["Scheme"].errors == null ? null : ctx_r6.angForm.controls["Scheme"].errors.required);
} }
function NotingChargesComponent_ng_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r26.label, " ", values_r26.name, "");
} }
function NotingChargesComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_46_div_1_Template, 2, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["FROM_AC"].errors == null ? null : ctx_r9.angForm.controls["FROM_AC"].errors.required);
} }
function NotingChargesComponent_ng_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r28.label, " ", values_r28.name, "");
} }
function NotingChargesComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_57_div_1_Template, 2, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.angForm.controls["TO_AC"].errors == null ? null : ctx_r12.angForm.controls["TO_AC"].errors.required);
} }
function NotingChargesComponent_ng_option_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r30.DESCRIPTION, "");
} }
function NotingChargesComponent_div_83_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_83_div_1_Template, 2, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.angForm.controls["AMOUNT_TYPE"].errors == null ? null : ctx_r15.angForm.controls["AMOUNT_TYPE"].errors.required);
} }
function NotingChargesComponent_div_105_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_105_div_1_Template, 2, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.angForm.controls["TRAN_AMOUNT"].errors == null ? null : ctx_r16.angForm.controls["TRAN_AMOUNT"].errors.pattern);
} }
function NotingChargesComponent_ng_option_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", values_r33.label, " ");
} }
function NotingChargesComponent_button_125_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotingChargesComponent_button_125_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.submit(); })("keydown.Tab", function NotingChargesComponent_button_125_Template_button_keydown_Tab_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_button_126_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotingChargesComponent_button_126_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_132_tbody_21_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NotingChargesComponent_div_132_tbody_21_tr_1_Template_input_focus_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r46.selectAllContent($event); })("keypress", function NotingChargesComponent_div_132_tbody_21_tr_1_Template_input_keypress_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); return $event.charCode >= 48 && $event.charCode < 58; })("focusout", function NotingChargesComponent_div_132_tbody_21_tr_1_Template_input_focusout_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const data_r42 = ctx.$implicit; const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r49.getChargesAmount(data_r42.id, data_r42.AC_NO, data_r42.BANKACNO, _r44.value, _r45.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function NotingChargesComponent_div_132_tbody_21_tr_1_Template_input_focusout_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const data_r42 = ctx.$implicit; const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r50.getNarration(data_r42.id, data_r42.AC_NO, data_r42.BANKACNO, _r45.value, _r44.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r42.AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r42.AC_NAME == "" || data_r42.AC_NAME == null ? "-" : data_r42.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r42.TRAN_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r42.NARRATION);
} }
function NotingChargesComponent_div_132_tbody_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_132_tbody_21_tr_1_Template, 11, 4, "tr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.notingChargesArr);
} }
function NotingChargesComponent_div_132_tbody_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Charges Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Narration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NotingChargesComponent_div_132_Template_input_keyup_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.filterObject($event, "AC_NO"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NotingChargesComponent_div_132_Template_input_keyup_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.filterObject($event, "AC_NAME"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NotingChargesComponent_div_132_tbody_21_Template, 2, 1, "tbody", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NotingChargesComponent_div_132_tbody_22_Template, 4, 0, "tbody", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtTrigger", ctx_r21.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r21.notingChargesArr == null ? null : ctx_r21.notingChargesArr.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r21.notingChargesArr == null ? null : ctx_r21.notingChargesArr.length) == 0);
} }
const _c0 = function (a0) { return { "form-submitted": a0 }; };
// Handling datatable data
class DataTableResponse {
}
class NotingChargesComponent {
    constructor(fb, systemParameter, ownbranchMasterService, schemeAccountNoService, acMasterDropdownService, _service, http) {
        this.fb = fb;
        this.systemParameter = systemParameter;
        this.ownbranchMasterService = ownbranchMasterService;
        this.schemeAccountNoService = schemeAccountNoService;
        this.acMasterDropdownService = acMasterDropdownService;
        this._service = _service;
        this.http = http;
        //api 
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
        this.formSubmitted = false;
        this.modalClass = 'modalHide';
        this.dtOptions = {};
        // dtTrigger: Subject<any> = new Subject<any>();
        // dtExportButtonOptions: any = {};
        this.showButton = true;
        this.updateShow = false;
        //variable for checkbox and radio button 
        this.isAddinprinciple = false;
        this.isCreateglentry = false;
        this.isDebit = false;
        // isiscreateglentry: boolean = false;
        // dropdown ngmodel variables
        this.ngscheme = null;
        this.ngfromac = null;
        this.ngtoac = null;
        this.ngchargestype = null;
        this.ngtransferglacno = null;
        this.notingdate = null;
        this.ngBranchCode = null;
        // For reloading angular datatable after CRUD operation
        // @ViewChild(DataTableDirective, { static: false })
        // dtElement: DataTableDirective;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.filterData = {};
        this.ngglacno = null;
        this.showTable = false;
        this.systemParameter.getFormData(1).subscribe(data => {
            this.maxDate = moment__WEBPACK_IMPORTED_MODULE_5__(data.CURRENT_DATE, 'DD/MM/YYYY');
            this.maxDate = this.maxDate._d;
            this.minDate = this.maxDate;
        });
    }
    ngOnInit() {
        this.createForm();
        this.getSystemParaDate();
        this.http.get(this.url + '/noting-charges/scheme').subscribe((data) => {
            this.scheme = data;
        });
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(data => {
            this.branch_code = data;
        });
        this.acMasterDropdownService.getACMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe((data) => {
            this.acMaster = data;
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.angForm.controls['BRANCH'].enable();
        }
        else {
            this.angForm.controls['BRANCH'].disable();
            this.ngBranchCode = result.branch.id;
        }
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            dom: 'ftip'
        };
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    createForm() {
        this.angForm = this.fb.group({
            Scheme: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            FROM_AC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            TO_AC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AMOUNT_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            transeferglaccno: ['',],
            BRANCH: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            TRAN_DATE: [''],
            TRAN_AMOUNT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            addInPrinciple: [false],
            TRAN_DRCR: ['D', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            GL_ENTRY: [false]
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.angForm.controls['BRANCH'].enable();
        }
        else {
            this.angForm.controls['BRANCH'].disable();
            this.angForm.patchValue({
                'BRANCH': result.branch.id
            });
            this.ngBranchCode = result.branch.id;
        }
    }
    getBranch(event) {
        this.branchCode = event.name;
        this.branchid = event.value;
        this.ngscheme = null;
        this.ngfromac = null;
        this.ngtoac = null;
        this.arrTable = [];
        this.notingChargesArr = [];
    }
    //get scheme value and type
    schemechange(event) {
        this.getschemename = event.S_ACNOTYPE;
        this.ngscheme = event.id;
        this.getSchemeAccount();
    }
    //get account no according scheme for introducer
    getSchemeAccount() {
        this.obj = [this.ngscheme, this.ngBranchCode];
        this.ngfromac = null;
        this.ngtoac = null;
        this.ngchargestype = null;
        this.http.get(this.url + '/noting-charges/headType/' + this.getschemename).subscribe((data) => {
            this.chargesType = data;
        });
        switch (this.getschemename) {
            case 'GL':
                this.schemeAccountNoService.getGeneralLedgerList1(this.obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(data => {
                    this.fromAC = data;
                    this.toAC = data;
                });
                break;
            case 'GS':
                this.schemeAccountNoService.getAnamatSchemeList1(this.obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(data => {
                    this.fromAC = data;
                    this.toAC = data;
                });
                break;
            case 'IV':
                this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(data => {
                    this.fromAC = data;
                    this.toAC = data;
                });
                break;
            case 'TD':
                this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(data => {
                    this.fromAC = data;
                    this.toAC = data;
                });
                break;
            case 'LN':
                this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(data => {
                    this.fromAC = data;
                    this.toAC = data;
                });
                break;
            case 'PG':
                this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(data => {
                    this.fromAC = data;
                    this.toAC = data;
                });
                break;
            case 'SB':
                this.schemeAccountNoService.getSavingSchemeList1(this.obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(data => {
                    this.fromAC = data;
                    this.toAC = data;
                });
                break;
            case 'SH':
                this.schemeAccountNoService.getShareSchemeList1(this.obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(data => {
                    this.fromAC = data;
                    this.toAC = data;
                });
                break;
        }
    }
    //get sys para current date
    getSystemParaDate() {
        this.systemParameter.getFormData(1).subscribe(data => {
            this.angForm.patchValue({
                'TRAN_DATE': data.CURRENT_DATE,
            });
        });
    }
    //load table based on from and to account number
    getTable() {
        this.arrTable = [];
        this.notingChargesArr = [];
        var memFrom = this.angForm.controls['FROM_AC'].value;
        var memTo = this.angForm.controls['TO_AC'].value;
        if (this.angForm.controls['FROM_AC'].value <= this.angForm.controls['TO_AC'].value && this.angForm.controls['TO_AC'].value != '') {
            this.showTable = true;
            this.mem = [memFrom, memTo, this.ngscheme, this.ngBranchCode, this.getschemename];
            this.dtTrigger.unsubscribe();
            this.http.get(this.url + '/noting-charges/glacno/' + this.ngscheme).subscribe((data) => {
                this.S_GLACNO = data;
            });
            this.http.get(this.url + '/noting-charges/accounts/' + this.mem).subscribe((data) => {
                this.arrTable = data;
                this.gridData = data;
                this.arrTable.forEach(element => {
                    var object = {
                        AC_NO: element.AC_NO,
                        AC_NAME: element.AC_NAME,
                        id: element.id,
                        BANKACNO: element.BANKACNO == undefined || element.BANKACNO == null ? '' : element.BANKACNO,
                        TRAN_AMOUNT: '',
                        NARRATION: ''
                    };
                    this.notingChargesArr.push(object);
                });
                this.dtTrigger.next();
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("To Account Number Must Be Greater Than From Account Number");
            this.angForm.patchValue({
                TO_AC: ''
            });
            this.arrTable = [];
            this.notingChargesArr = [];
        }
    }
    //filter object
    filterObject(ele, type) {
        let matchArray = new Array();
        this.notingChargesArr = [];
        this.gridData.forEach(element => {
            if (JSON.stringify(element.AC_NO).includes(ele.target.value)) {
                this.notingChargesArr.push(element);
            }
            else if (JSON.stringify(element.AC_NAME).includes(ele.target.value.toUpperCase())) {
                this.notingChargesArr.push(element);
            }
        });
    }
    //get charge amount to all account number
    getCommanChargeAmount() {
        this.notingChargesArr.forEach(item => item.TRAN_AMOUNT = this.angForm.controls['TRAN_AMOUNT'].value);
    }
    //get narration to all account number
    getCommanNarration(event) {
        this.FIELD_GL = event.FIELD_GL;
        this.GL_CODE = event.GL_CODE;
        this.FIELD_AMOUNT = event.FIELD_AMOUNT;
        this.DESCRIPTION = event.DESCRIPTION;
        this.notingChargesArr.forEach(item => item.NARRATION = event.DESCRIPTION);
    }
    //get charge amount to particular account number
    getChargesAmount(id, AC_NO, BANKACNO, chargesAmt, Narration) {
        if (chargesAmt != '' || chargesAmt != 0) {
            if (this.notingChargesArr.length != 0) {
                if (this.notingChargesArr.some(item => item.AC_NO === AC_NO)) {
                    this.notingChargesArr.forEach((element) => {
                        if (element.AC_NO == AC_NO) {
                            element['TRAN_AMOUNT'] = chargesAmt;
                        }
                    });
                }
                else {
                    var object = {
                        AC_NO: AC_NO,
                        id: id,
                        BANKACNO: BANKACNO,
                        TRAN_AMOUNT: chargesAmt,
                        NARRATION: Narration
                    };
                    this.notingChargesArr.push(object);
                }
            }
            else {
                var object = {
                    AC_NO: AC_NO,
                    id: id,
                    BANKACNO: BANKACNO,
                    TRAN_AMOUNT: chargesAmt,
                    NARRATION: Narration
                };
                this.notingChargesArr.push(object);
            }
        }
    }
    //get narration to particular account number
    getNarration(id, AC_NO, BANKACNO, Narration, chargesAmt) {
        if (Narration != '') {
            if (this.notingChargesArr.length != 0) {
                if (this.notingChargesArr.some(item => item.AC_NO === AC_NO)) {
                    this.notingChargesArr.forEach((element) => {
                        if (element.AC_NO == AC_NO) {
                            element['NARRATION'] = Narration;
                        }
                    });
                }
                else {
                    var object = {
                        AC_NO: AC_NO,
                        id: id,
                        BANKACNO: BANKACNO,
                        TRAN_AMOUNT: chargesAmt,
                        NARRATION: Narration
                    };
                    this.notingChargesArr.push(object);
                }
            }
            else {
                var object = {
                    AC_NO: AC_NO,
                    id: id,
                    BANKACNO: BANKACNO,
                    TRAN_AMOUNT: chargesAmt,
                    NARRATION: Narration
                };
                this.notingChargesArr.push(object);
            }
        }
    }
    //select content of field
    selectAllContent($event) {
        $event.target.select();
    }
    submit() {
        let notingdate;
        this.formSubmitted = true;
        if (this.notingChargesArr.length != 0) {
            const formVal = this.angForm.value;
            let data = localStorage.getItem('user');
            let result = JSON.parse(data);
            const dataToSend = {
                TRAN_DATE: formVal.TRAN_DATE,
                USER: result.id,
                TRAN_GLACNO: this.ngglacno,
                notingChargesArr: this.notingChargesArr,
                TRAN_AMOUNT: formVal.TRAN_AMOUNT,
                TRAN_ACNOTYPE: this.getschemename,
                TRAN_ACTYPE: this.ngscheme,
                TRAN_DRCR: formVal.TRAN_DRCR,
                GL_ENTRY: formVal.GL_ENTRY,
                BRANCH_CODE: this.branchCode,
                addInPrinciple: formVal.addInPrinciple,
                AMOUNT_TYPE: this.ngchargestype,
                BranchID: this.branchid,
                S_GLACNO: this.S_GLACNO,
                FIELD_GL: this.FIELD_GL,
                GL_CODE: this.GL_CODE,
                FIELD_AMOUNT: this.FIELD_AMOUNT,
                DESCRIPTION: this.DESCRIPTION
            };
            this._service.postData(dataToSend).subscribe(data => {
                this.formSubmitted = false;
                if (data == '') {
                    this.modalClass = 'modalShow';
                    dataToSend['DailyFlag'] = 'Insert';
                    this._service.dailyTableInsert(dataToSend).subscribe(data => {
                        this.modalClass = 'modalHide';
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Success!', 'Data Added Successfully !', 'success');
                    });
                }
                else {
                    this.modalClass = 'modalHide';
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        text: "Today's Charges Posting Already Done.Do You Want To Overwrite?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#229954",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Overwrite it!",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.modalClass = 'modalShow';
                            dataToSend['DailyFlag'] = 'Overwrite';
                            this._service.dailyTableInsert(dataToSend).subscribe((data) => {
                                this.modalClass = 'modalHide';
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Overwritten!", "success");
                            }),
                                (error) => {
                                    console.log(error);
                                };
                        }
                        else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                            dataToSend['DailyFlag'] = 'Insert';
                            this._service.dailyTableInsert(dataToSend).subscribe(data => {
                            });
                        }
                    });
                }
            }, (error) => {
                console.log(error);
            });
            //To clear form
            this.resetForm();
            this.notingChargesArr = [];
            this.arrTable = [];
        }
    }
    resetForm() {
        this.ngscheme = null;
        this.ngchargestype = null;
        this.ngBranchCode = null;
        this.ngfromac = null;
        this.ngtoac = null;
        this.ngglacno = null;
        this.notingChargesArr = [];
        this.arrTable = [];
        this.getSystemParaDate();
        this.createForm();
    }
    //function for edit button clicked
    editClickHandler(info) {
        let notingdate;
        this.showButton = false;
        this.updateShow = true;
    }
    //function for delete button clicked
    delClickHandler(info) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want to delete scheme Code.  data",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your data is safe.', 'error');
            }
        });
    }
    updateData() {
        let notingdate;
        this.showButton = true;
        this.updateShow = false;
    }
    onFocus(ele) {
        ele.open();
    }
    getDecimal(event) {
        var t = event.target.value;
        event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    }
    getDecimalPoint(event) {
        if (event.target.value != '')
            event.target.value = parseFloat(event.target.value).toFixed(2);
        else
            event.target.value = 0;
    }
}
NotingChargesComponent.ɵfac = function NotingChargesComponent_Factory(t) { return new (t || NotingChargesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_7__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_9__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ACMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_noting_charges_service__WEBPACK_IMPORTED_MODULE_11__["NotingChargesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"])); };
NotingChargesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotingChargesComponent, selectors: [["app-noting-charges"]], decls: 134, vars: 54, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "appSubmit", "", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "card-block"], [1, "col-sm-4"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["appTheme", "", "id", "BRANCH", "bindValue", "value", "formControlName", "BRANCH", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", 3, "ngModel", "selectOnTab", "virtualScroll", "ngClass", "ngModelChange", "focus", "change"], ["BRANCH", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "BRANCH"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["appTheme", "", "id", "Scheme", "bindValue", "id", "formControlName", "Scheme", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme Code", 3, "ngModel", "selectOnTab", "ngClass", "virtualScroll", "ngModelChange", "focus", "change"], ["Scheme", ""], ["for", "Scheme"], [1, "col-sm-5"], ["appTheme", "", "id", "FROM_AC", "bindValue", "value", "formControlName", "FROM_AC", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "From A/C", 3, "ngModel", "selectOnTab", "virtualScroll", "ngClass", "ngModelChange", "focus"], ["FROM_AC", ""], ["for", "FROM_AC"], ["appTheme", "", "id", "TO_AC", "bindValue", "value", "formControlName", "TO_AC", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "To A/C", 3, "ngModel", "virtualScroll", "selectOnTab", "ngClass", "ngModelChange", "change", "focus"], ["TO_AC", ""], ["for", "TO_AC"], [1, "col-sm-3"], [1, "form-group", "input-group"], ["type", "text", "name", "TRAN_DATE", "formControlName", "TRAN_DATE", "disabled", "", 1, "form-control"], ["for", "date"], [1, "col-sm"], [1, "checkbox", "checkbox-primary"], [1, "border-checkbox-group", "border-checkbox-group-primary"], ["type", "checkbox", "id", "checkbox1", "value", "checkbox", "formControlName", "addInPrinciple", 1, "border-checkbox"], ["for", "checkbox1", 1, "border-checkbox-label"], ["appTheme", "", "id", "AMOUNT_TYPE", "bindValue", "FIELD_AMOUNT", "formControlName", "AMOUNT_TYPE", "bindLabel", "DESCRIPTION", "title", "Compulsory Selection", "required", "", "placeholder", "Charges Type", 3, "ngModel", "virtualScroll", "selectOnTab", "ngClass", "ngModelChange", "change", "focus"], ["AMOUNT_TYPE", ""], ["for", "AMOUNT_TYPE"], [1, "form-radio"], [1, "radio", "radio-inline"], [1, "inputRadio"], ["type", "radio", "formControlName", "TRAN_DRCR", "name", "TRAN_DRCR", "value", "D"], [1, "helper"], ["type", "radio", "formControlName", "TRAN_DRCR", "name", "TRAN_DRCR", "value", "C"], ["type", "text", "name", "To", "placeholder", " ", "id", "TRAN_AMOUNT", "title", "Input allowed only  0-9", "formControlName", "TRAN_AMOUNT", 1, "form-control", 2, "text-align", "right", 3, "focusout", "keyup", "keypress", "change"], ["for", "TRAN_AMOUNT"], ["type", "checkbox", "id", "checkbox2", "value", "checkbox", "formControlName", "GL_ENTRY", 1, "border-checkbox"], ["for", "checkbox2", 1, "border-checkbox-label"], [1, "col-sm-6"], ["appTheme", "", "id", "S_GLACNO", "bindValue", "value", "formControlName", "transeferglaccno", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Transfer G.L.A/c No", 3, "ngModel", "virtualScroll", "selectOnTab", "ngClass", "ngModelChange", "focus"], ["S_GLACNO", ""], ["for", "transeferglaccno"], [1, "row", 2, "float", "right"], [1, "col-sm-2"], ["class", "btn btn-outline-primary btn-sm btn-submit", "appTheme", "", 3, "click", "keydown.Tab", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["for", ""], [1, "col-sm-12"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], ["appTheme", "", 1, "btn", "btn-outline-primary", "btn-sm", "btn-submit", 3, "click", "keydown.Tab"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtTrigger"], [1, "td_right"], [1, "td_center"], ["type", "text", 1, "form-control", 3, "keyup"], ["type", "text", 1, "form-control", 2, "text-transform", "uppercase", 3, "keyup"], [4, "ngFor", "ngForOf"], ["type", "text", "name", "chargesAmt", "id", "chargesAmt", 1, "form-control", 2, "text-align", "right", 3, "value", "focus", "keypress", "focusout"], ["chargesAmt", ""], ["type", "text", "name", "Narration", "id", "Narration", 1, "form-control", 3, "value", "focusout"], ["Narration", ""], ["colspan", "6", 1, "no-data-available", 2, "text-align", "center"]], template: function NotingChargesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Charges Noting");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ng-select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotingChargesComponent_Template_ng_select_ngModelChange_18_listener($event) { return ctx.ngBranchCode = $event; })("focus", function NotingChargesComponent_Template_ng_select_focus_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.onFocus(_r1); })("change", function NotingChargesComponent_Template_ng_select_change_18_listener($event) { return ctx.getBranch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NotingChargesComponent_ng_option_20_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NotingChargesComponent_div_23_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ng-select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotingChargesComponent_Template_ng_select_ngModelChange_27_listener($event) { return ctx.ngscheme = $event; })("focus", function NotingChargesComponent_Template_ng_select_focus_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx.onFocus(_r4); })("change", function NotingChargesComponent_Template_ng_select_change_27_listener($event) { return ctx.schemechange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NotingChargesComponent_ng_option_29_Template, 2, 3, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Scheme Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, NotingChargesComponent_div_34_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ng-select", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotingChargesComponent_Template_ng_select_ngModelChange_39_listener($event) { return ctx.ngfromac = $event; })("focus", function NotingChargesComponent_Template_ng_select_focus_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); return ctx.onFocus(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NotingChargesComponent_ng_option_41_Template, 2, 3, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "From Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, NotingChargesComponent_div_46_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ng-select", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotingChargesComponent_Template_ng_select_ngModelChange_50_listener($event) { return ctx.ngtoac = $event; })("change", function NotingChargesComponent_Template_ng_select_change_50_listener() { return ctx.getTable(); })("focus", function NotingChargesComponent_Template_ng_select_focus_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51); return ctx.onFocus(_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, NotingChargesComponent_ng_option_52_Template, 2, 3, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "To Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, NotingChargesComponent_div_57_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Noting Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Add in Principle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ng-select", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotingChargesComponent_Template_ng_select_ngModelChange_76_listener($event) { return ctx.ngchargestype = $event; })("change", function NotingChargesComponent_Template_ng_select_change_76_listener($event) { return ctx.getCommanNarration($event); })("focus", function NotingChargesComponent_Template_ng_select_focus_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77); return ctx.onFocus(_r13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, NotingChargesComponent_ng_option_78_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Charges Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, NotingChargesComponent_div_83_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Debit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function NotingChargesComponent_Template_input_focusout_102_listener($event) { return ctx.getDecimalPoint($event); })("keyup", function NotingChargesComponent_Template_input_keyup_102_listener($event) { return ctx.getDecimal($event); })("keypress", function NotingChargesComponent_Template_input_keypress_102_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; })("change", function NotingChargesComponent_Template_input_change_102_listener() { return ctx.getCommanChargeAmount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Charges Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, NotingChargesComponent_div_105_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Create GL Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ng-select", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotingChargesComponent_Template_ng_select_ngModelChange_116_listener($event) { return ctx.ngglacno = $event; })("focus", function NotingChargesComponent_Template_ng_select_focus_116_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](117); return ctx.onFocus(_r17); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, NotingChargesComponent_ng_option_118_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Transfer G.L. A/C No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, NotingChargesComponent_button_125_Template, 2, 0, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, NotingChargesComponent_button_126_Template, 2, 0, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, NotingChargesComponent_div_132_Template, 23, 3, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngBranchCode)("selectOnTab", true)("virtualScroll", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["BRANCH"].invalid && (ctx.angForm.controls["BRANCH"].dirty || ctx.angForm.controls["BRANCH"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngscheme)("selectOnTab", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c0, ctx.formSubmitted))("virtualScroll", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["Scheme"].invalid && (ctx.angForm.controls["Scheme"].dirty || ctx.angForm.controls["Scheme"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngfromac)("selectOnTab", true)("virtualScroll", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fromAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["FROM_AC"].invalid && (ctx.angForm.controls["FROM_AC"].dirty || ctx.angForm.controls["FROM_AC"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngtoac)("virtualScroll", true)("selectOnTab", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["TO_AC"].invalid && (ctx.angForm.controls["TO_AC"].dirty || ctx.angForm.controls["TO_AC"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngchargestype)("virtualScroll", true)("selectOnTab", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chargesType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AMOUNT_TYPE"].invalid && (ctx.angForm.controls["AMOUNT_TYPE"].dirty || ctx.angForm.controls["AMOUNT_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["TRAN_AMOUNT"].invalid && (ctx.angForm.controls["TRAN_AMOUNT"].dirty || ctx.angForm.controls["TRAN_AMOUNT"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngglacno)("virtualScroll", true)("selectOnTab", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.acMaster);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.modalClass);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵr"], angular_datatables__WEBPACK_IMPORTED_MODULE_15__["DataTableDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9tYWludGFpbmFuY2Uvbm90aW5nLWNoYXJnZXMvbm90aW5nLWNoYXJnZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotingChargesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-noting-charges',
                templateUrl: './noting-charges.component.html',
                styleUrls: ['./noting-charges.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_7__["SystemMasterParametersService"] }, { type: _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["OwnbranchMasterService"] }, { type: src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_9__["SchemeAccountNoService"] }, { type: _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ACMasterDropdownService"] }, { type: _noting_charges_service__WEBPACK_IMPORTED_MODULE_11__["NotingChargesService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/maintainance/noting-charges/noting-charges.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/master/maintainance/noting-charges/noting-charges.service.ts ***!
  \************************************************************************************/
/*! exports provided: NotingChargesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotingChargesService", function() { return NotingChargesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class NotingChargesService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
    }
    //submit data for form
    postData(data1) {
        return this.http.post(this.url + '/noting-charges/insert', data1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            let errorMessage = 'Please add valid length';
            console.log(error);
            // window.alert(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }));
    }
    //submit data for form
    dailyTableInsert(data1) {
        return this.http.post(this.url + '/noting-charges/dailyInsert', data1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            let errorMessage = 'Please add valid length';
            console.log(error);
            // window.alert(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/term-loan-master/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
}
NotingChargesService.ɵfac = function NotingChargesService_Factory(t) { return new (t || NotingChargesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
NotingChargesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotingChargesService, factory: NotingChargesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotingChargesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/maintainance/noting-charges/notingCharges-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/master/maintainance/noting-charges/notingCharges-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: NotingChargesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotingChargesRoutingModule", function() { return NotingChargesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _noting_charges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noting-charges.component */ "./src/app/theme/master/maintainance/noting-charges/noting-charges.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/theme.module */ "./src/app/theme/theme.module.ts");







const routes = [
    {
        path: '',
        component: _noting_charges_component__WEBPACK_IMPORTED_MODULE_2__["NotingChargesComponent"],
        data: {
            title: 'Noting Charges',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class NotingChargesRoutingModule {
}
NotingChargesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotingChargesRoutingModule });
NotingChargesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotingChargesRoutingModule_Factory(t) { return new (t || NotingChargesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"], src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotingChargesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"], src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotingChargesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"], src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/maintainance/noting-charges/notingCharges.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/master/maintainance/noting-charges/notingCharges.module.ts ***!
  \**********************************************************************************/
/*! exports provided: NotingChargesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotingChargesModule", function() { return NotingChargesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _noting_charges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noting-charges.component */ "./src/app/theme/master/maintainance/noting-charges/noting-charges.component.ts");
/* harmony import */ var _notingCharges_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notingCharges-routing.module */ "./src/app/theme/master/maintainance/noting-charges/notingCharges-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var _noting_charges_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./noting-charges.service */ "./src/app/theme/master/maintainance/noting-charges/noting-charges.service.ts");


















class NotingChargesModule {
}
NotingChargesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotingChargesModule });
NotingChargesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotingChargesModule_Factory(t) { return new (t || NotingChargesModule)(); }, providers: [_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_13__["SchemeAccountNoService"], _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["ACMasterDropdownService"], _noting_charges_service__WEBPACK_IMPORTED_MODULE_15__["NotingChargesService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _notingCharges_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotingChargesRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            // SelectModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotingChargesModule, { declarations: [_noting_charges_component__WEBPACK_IMPORTED_MODULE_2__["NotingChargesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _notingCharges_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotingChargesRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        // SelectModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotingChargesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _notingCharges_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotingChargesRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    // SelectModule,
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"].forRoot()
                ],
                declarations: [_noting_charges_component__WEBPACK_IMPORTED_MODULE_2__["NotingChargesComponent"]],
                providers: [_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_13__["SchemeAccountNoService"], _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["ACMasterDropdownService"], _noting_charges_service__WEBPACK_IMPORTED_MODULE_15__["NotingChargesService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
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
//# sourceMappingURL=noting-charges-notingCharges-module.js.map