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
    getACMasterbranch(branchid) {
        this.acMasterObject = [];
        return this.http.get(this.url + '/gl-account-master/branch/' + branchid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NAME, value: element.id, name: element.AC_NO };
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
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





// Angular Datatable Directive












function NotingChargesComponent_ng_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r16.label, "");
} }
function NotingChargesComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_22_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["BRANCH"].errors == null ? null : ctx_r2.angForm.controls["BRANCH"].errors.required);
} }
function NotingChargesComponent_ng_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r18.S_APPL, " ", values_r18.S_NAME, "");
} }
function NotingChargesComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_32_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.angForm.controls["Scheme"].errors == null ? null : ctx_r4.angForm.controls["Scheme"].errors.required);
} }
function NotingChargesComponent_ng_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r20.label, " ", values_r20.name, "");
} }
function NotingChargesComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_42_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["FROM_AC"].errors == null ? null : ctx_r6.angForm.controls["FROM_AC"].errors.required);
} }
function NotingChargesComponent_ng_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r22.label, " ", values_r22.name, "");
} }
function NotingChargesComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_52_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["TO_AC"].errors == null ? null : ctx_r8.angForm.controls["TO_AC"].errors.required);
} }
function NotingChargesComponent_ng_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r24.FIELD_AMOUNT, "");
} }
function NotingChargesComponent_div_77_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_77_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AMOUNT_TYPE"].errors == null ? null : ctx_r10.angForm.controls["AMOUNT_TYPE"].errors.required);
} }
function NotingChargesComponent_div_100_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_100_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["TRAN_AMOUNT"].errors == null ? null : ctx_r11.angForm.controls["TRAN_AMOUNT"].errors.pattern);
} }
function NotingChargesComponent_ng_option_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", values_r27.label, " ");
} }
function NotingChargesComponent_button_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r13.angForm.invalid);
} }
function NotingChargesComponent_button_119_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotingChargesComponent_button_119_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_122_tbody_13_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NotingChargesComponent_div_122_tbody_13_tr_1_Template_input_focus_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r37.selectAllContent($event); })("keypress", function NotingChargesComponent_div_122_tbody_13_tr_1_Template_input_keypress_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); return $event.charCode >= 48 && $event.charCode < 58; })("focusout", function NotingChargesComponent_div_122_tbody_13_tr_1_Template_input_focusout_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const data_r33 = ctx.$implicit; const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r40.getChargesAmount(data_r33.id, data_r33.AC_NO, data_r33.BANKACNO, _r35.value, _r36.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function NotingChargesComponent_div_122_tbody_13_tr_1_Template_input_focusout_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const data_r33 = ctx.$implicit; const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.getNarration(data_r33.id, data_r33.AC_NO, data_r33.BANKACNO, _r36.value, _r35.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r33.AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r33.AC_NAME == "" || data_r33.AC_NAME == null ? "-" : data_r33.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r33.TRAN_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r33.NARRATION);
} }
function NotingChargesComponent_div_122_tbody_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotingChargesComponent_div_122_tbody_13_tr_1_Template, 11, 4, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.notingChargesArr);
} }
function NotingChargesComponent_div_122_tbody_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotingChargesComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Charges Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Narration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NotingChargesComponent_div_122_tbody_13_Template, 2, 1, "tbody", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NotingChargesComponent_div_122_tbody_14_Template, 4, 0, "tbody", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r15.dtOptions)("dtTrigger", ctx_r15.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r15.notingChargesArr == null ? null : ctx_r15.notingChargesArr.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r15.notingChargesArr == null ? null : ctx_r15.notingChargesArr.length) == 0);
} }
const _c0 = function (a0) { return { "form-submitted": a0 }; };
// Handling datatable data
class DataTableResponse {
}
class NotingChargesComponent {
    constructor(fb, systemParameter, ownbranchMasterService, schemeAccountNoService, acMasterDropdownService, http) {
        this.fb = fb;
        this.systemParameter = systemParameter;
        this.ownbranchMasterService = ownbranchMasterService;
        this.schemeAccountNoService = schemeAccountNoService;
        this.acMasterDropdownService = acMasterDropdownService;
        this.http = http;
        //api 
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
        this.formSubmitted = false;
        this.dtExportButtonOptions = {};
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
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.filterData = {};
        this.ngglacno = null;
        this.showTable = false;
        this.maxDate = new Date();
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate());
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
            TRAN_DRCR: ['D']
        });
    }
    getBranch() {
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
    getTable() {
        this.arrTable = [];
        this.notingChargesArr = [];
        var memFrom = this.angForm.controls['FROM_AC'].value;
        var memTo = this.angForm.controls['TO_AC'].value;
        if (this.angForm.controls['FROM_AC'].value < this.angForm.controls['TO_AC'].value) {
            this.showTable = true;
            this.mem = [memFrom, memTo, this.ngscheme, this.ngBranchCode, this.getschemename];
            this.http.get(this.url + '/noting-charges/accounts/' + this.mem).subscribe((data) => {
                this.arrTable = data;
                console.log(this.arrTable);
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
                console.log(this.notingChargesArr);
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
    getCommanChargeAmount() {
        this.notingChargesArr.forEach(item => item.TRAN_AMOUNT = this.angForm.controls['TRAN_AMOUNT'].value);
    }
    getCommanNarration() {
        this.notingChargesArr.forEach(item => item.NARRATION = this.angForm.controls['AMOUNT_TYPE'].value);
    }
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
        console.log(this.notingChargesArr);
    }
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
        console.log(this.notingChargesArr);
    }
    //select content of field
    selectAllContent($event) {
        $event.target.select();
    }
    submit() {
        let notingdate;
        this.formSubmitted = true;
        console.log(this.angForm.valid);
        if (this.angForm.valid) {
            const formVal = this.angForm.value;
            const dataToSend = {
                Scheme: formVal.Scheme,
                FROM_AC: formVal.FROM_AC,
                TO_AC: formVal.TO_AC,
                Date: formVal.Date,
                chargestype: formVal.chargestype,
                transeferglaccno: formVal.transeferglaccno,
                ChargesAmount: formVal.ChargesAmount,
            };
            console.log(this.angForm.value);
        }
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
    ngAfterViewInit() {
        this.dtTrigger.next();
        // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //   $('#notingtable tfoot tr').appendTo('#notingtable thead');
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
    updateData() {
        let notingdate;
        this.showButton = true;
        this.updateShow = false;
    }
}
NotingChargesComponent.ɵfac = function NotingChargesComponent_Factory(t) { return new (t || NotingChargesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_7__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_9__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ACMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"])); };
NotingChargesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotingChargesComponent, selectors: [["app-noting-charges"]], viewQuery: function NotingChargesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 123, vars: 40, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "white"], [1, "required"], ["action", "javascript:", "novalidate", "", 3, "formGroup", "ngSubmit"], ["myform", "ngForm"], [1, "card-block"], [1, "col-sm-2"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["id", "BRANCH", "bindValue", "value", "formControlName", "BRANCH", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", 3, "ngModel", "ngClass", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "BRANCH"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm"], ["id", "Scheme", "bindValue", "id", "formControlName", "Scheme", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme Code", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "Scheme"], ["id", "FROM_AC", "bindValue", "value", "formControlName", "FROM_AC", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "From A/C", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "FROM_AC"], ["id", "TO_AC", "bindValue", "value", "formControlName", "TO_AC", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "To A/C", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "TO_AC"], [1, "col-sm-3"], [1, "form-group", "input-group"], ["type", "text", "name", "TRAN_DATE", "formControlName", "TRAN_DATE", "TRAN_DRCR", "", "disabled", "", 1, "form-control"], ["for", "date"], [1, "checkbox", "checkbox-primary"], [1, "border-checkbox-group", "border-checkbox-group-primary"], ["type", "checkbox", "id", "checkbox1", "value", "checkbox", "formControlName", "addInPrinciple", 1, "border-checkbox"], ["for", "checkbox1", 1, "border-checkbox-label"], ["id", "AMOUNT_TYPE", "bindValue", "FIELD_AMOUNT", "formControlName", "AMOUNT_TYPE", "bindLabel", "FIELD_AMOUNT", "title", "Compulsory Selection", "required", "", "placeholder", "Charges Type", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "AMOUNT_TYPE"], [1, "form-radio"], [1, "radio", "radio-inline"], ["type", "radio", "formControlName", "TRAN_DRCR", "name", "TRAN_DRCR", "value", "D"], [1, "helper"], ["type", "radio", "formControlName", "TRAN_DRCR", "name", "TRAN_DRCR", "value", "C"], ["type", "text", "name", "To", "placeholder", " ", "id", "TRAN_AMOUNT", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "TRAN_AMOUNT", 1, "form-control", 3, "change"], ["for", "TRAN_AMOUNT"], ["type", "checkbox", "id", "checkbox2", "value", "checkbox", 1, "border-checkbox"], ["for", "checkbox2", 1, "border-checkbox-label"], ["id", "S_GLACNO", "bindValue", "value", "formControlName", "transeferglaccno", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Transfer G.L.A/c No", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "transeferglaccno"], ["class", "btn btn-outline-primary btn-sm", 3, "disabled", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [1, "col-sm-12"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions", "dtTrigger"], [1, "td_right"], [1, "td_center"], [4, "ngFor", "ngForOf"], ["type", "text", "name", "chargesAmt", "id", "chargesAmt", 1, "form-control", 2, "text-align", "right", 3, "value", "focus", "keypress", "focusout"], ["chargesAmt", ""], ["type", "text", "name", "Narration", "id", "Narration", 1, "form-control", 3, "value", "focusout"], ["Narration", ""], ["colspan", "6", 1, "no-data-available", 2, "text-align", "center"]], template: function NotingChargesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NotingChargesComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotingChargesComponent_Template_ng_select_ngModelChange_18_listener($event) { return ctx.ngBranchCode = $event; })("change", function NotingChargesComponent_Template_ng_select_change_18_listener() { return ctx.getBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NotingChargesComponent_ng_option_19_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NotingChargesComponent_div_22_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotingChargesComponent_Template_ng_select_ngModelChange_26_listener($event) { return ctx.ngscheme = $event; })("change", function NotingChargesComponent_Template_ng_select_change_26_listener($event) { return ctx.schemechange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NotingChargesComponent_ng_option_27_Template, 2, 3, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Scheme Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NotingChargesComponent_div_32_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ng-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotingChargesComponent_Template_ng_select_ngModelChange_36_listener($event) { return ctx.ngfromac = $event; })("change", function NotingChargesComponent_Template_ng_select_change_36_listener() { return ctx.getTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, NotingChargesComponent_ng_option_37_Template, 2, 3, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "From A/C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, NotingChargesComponent_div_42_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ng-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotingChargesComponent_Template_ng_select_ngModelChange_46_listener($event) { return ctx.ngtoac = $event; })("change", function NotingChargesComponent_Template_ng_select_change_46_listener() { return ctx.getTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, NotingChargesComponent_ng_option_47_Template, 2, 3, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "To A/C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, NotingChargesComponent_div_52_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Noting Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Add in Principle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ng-select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotingChargesComponent_Template_ng_select_ngModelChange_71_listener($event) { return ctx.ngchargestype = $event; })("change", function NotingChargesComponent_Template_ng_select_change_71_listener() { return ctx.getCommanNarration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, NotingChargesComponent_ng_option_72_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Charges Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, NotingChargesComponent_div_77_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Debit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NotingChargesComponent_Template_input_change_97_listener() { return ctx.getCommanChargeAmount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Charges Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, NotingChargesComponent_div_100_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Create GL Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "ng-select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotingChargesComponent_Template_ng_select_ngModelChange_111_listener($event) { return ctx.ngglacno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, NotingChargesComponent_ng_option_112_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Transfer G.L. A/C No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, NotingChargesComponent_button_118_Template, 2, 1, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, NotingChargesComponent_button_119_Template, 2, 0, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, NotingChargesComponent_div_122_Template, 15, 4, "div", 47);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngBranchCode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["BRANCH"].invalid && (ctx.angForm.controls["BRANCH"].dirty || ctx.angForm.controls["BRANCH"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngscheme)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["Scheme"].invalid && (ctx.angForm.controls["Scheme"].dirty || ctx.angForm.controls["Scheme"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngfromac)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fromAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["FROM_AC"].invalid && (ctx.angForm.controls["FROM_AC"].dirty || ctx.angForm.controls["FROM_AC"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngtoac)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["TO_AC"].invalid && (ctx.angForm.controls["TO_AC"].dirty || ctx.angForm.controls["TO_AC"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngchargestype)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chargesType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AMOUNT_TYPE"].invalid && (ctx.angForm.controls["AMOUNT_TYPE"].dirty || ctx.angForm.controls["AMOUNT_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["TRAN_AMOUNT"].invalid && (ctx.angForm.controls["TRAN_AMOUNT"].dirty || ctx.angForm.controls["TRAN_AMOUNT"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngglacno)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.acMaster);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵr"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9tYWludGFpbmFuY2Uvbm90aW5nLWNoYXJnZXMvbm90aW5nLWNoYXJnZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotingChargesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-noting-charges',
                templateUrl: './noting-charges.component.html',
                styleUrls: ['./noting-charges.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_7__["SystemMasterParametersService"] }, { type: _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["OwnbranchMasterService"] }, { type: src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_9__["SchemeAccountNoService"] }, { type: _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ACMasterDropdownService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], { static: false }]
        }] }); })();


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
NotingChargesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotingChargesRoutingModule_Factory(t) { return new (t || NotingChargesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotingChargesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotingChargesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"]],
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

















class NotingChargesModule {
}
NotingChargesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotingChargesModule });
NotingChargesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotingChargesModule_Factory(t) { return new (t || NotingChargesModule)(); }, providers: [_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_13__["SchemeAccountNoService"], _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["ACMasterDropdownService"], {
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
                providers: [_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_13__["SchemeAccountNoService"], _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["ACMasterDropdownService"], {
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
}
SystemMasterParametersService.ɵfac = function SystemMasterParametersService_Factory(t) { return new (t || SystemMasterParametersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
SystemMasterParametersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SystemMasterParametersService, factory: SystemMasterParametersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemMasterParametersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=noting-charges-notingCharges-module.js.map