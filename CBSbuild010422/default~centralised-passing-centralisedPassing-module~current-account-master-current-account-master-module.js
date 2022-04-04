(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~centralised-passing-centralisedPassing-module~current-account-master-current-account-master-module"],{

/***/ "./src/app/theme/master/customer/current-account-master/current-account-master-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/theme/master/customer/current-account-master/current-account-master-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CurrentAccountMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentAccountMasterRoutingModule", function() { return CurrentAccountMasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _current_account_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current-account-master.component */ "./src/app/theme/master/customer/current-account-master/current-account-master.component.ts");





const routes = [
    {
        path: '',
        component: _current_account_master_component__WEBPACK_IMPORTED_MODULE_2__["CurrentAccountMasterComponent"],
        data: {
            title: 'Current Account Master',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class CurrentAccountMasterRoutingModule {
}
CurrentAccountMasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CurrentAccountMasterRoutingModule });
CurrentAccountMasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CurrentAccountMasterRoutingModule_Factory(t) { return new (t || CurrentAccountMasterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CurrentAccountMasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentAccountMasterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/current-account-master/current-account-master.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/theme/master/customer/current-account-master/current-account-master.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CurrentAccountMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentAccountMasterComponent", function() { return CurrentAccountMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _current_account_master_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./current-account-master.service */ "./src/app/theme/master/customer/current-account-master/current-account-master.service.ts");
/* harmony import */ var _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/customer-id-master-dropdown.service */ "./src/app/shared/dropdownService/customer-id-master-dropdown.service.ts");
/* harmony import */ var _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/category-master-dropdown.service */ "./src/app/shared/dropdownService/category-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/dropdownService/director-master-dropdown.service */ "./src/app/shared/dropdownService/director-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/dropdownService/city-master-dropdown.service */ "./src/app/shared/dropdownService/city-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_operation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/dropdownService/operation-master-dropdown.service */ "./src/app/shared/dropdownService/operation-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/dropdownService/interest-category-master-dropdown.service */ "./src/app/shared/dropdownService/interest-category-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_minimum_balance_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/dropdownService/minimum-balance-master-dropdown.service */ "./src/app/shared/dropdownService/minimum-balance-master-dropdown.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _customer_id_customer_id_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../customer-id/customer-id.component */ "./src/app/theme/master/customer/customer-id/customer-id.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");



//animation

// Creating and maintaining form fields with validation 

// Displaying Sweet Alert

// Angular Datatable Directive  




























const _c0 = ["ctdTabset"];
function CurrentAccountMasterComponent_ng_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r14.label, "");
} }
function CurrentAccountMasterComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_div_24_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r2.angForm.controls["AC_TYPE"].errors.required);
} }
function CurrentAccountMasterComponent_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r16.label, "");
} }
function CurrentAccountMasterComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_div_35_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.angForm.controls["AC_CUSTID"].errors == null ? null : ctx_r4.angForm.controls["AC_CUSTID"].errors.required);
} }
function CurrentAccountMasterComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "JOINT ACCOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_76_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_76_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_76_div_10_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.angForm.controls["AC_PROPRITOR_NAME"].errors == null ? null : ctx_r18.angForm.controls["AC_PROPRITOR_NAME"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_76_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_76_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_76_div_32_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r20.angForm.controls["AC_OPDATE"].errors == null ? null : ctx_r20.angForm.controls["AC_OPDATE"].errors.required);
} }
function CurrentAccountMasterComponent_ng_template_76_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_76_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_76_div_48_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.angForm.controls["REF_ACNO"].errors == null ? null : ctx_r22.angForm.controls["REF_ACNO"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_76_ng_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r35.label, "");
} }
function CurrentAccountMasterComponent_ng_template_76_div_70_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_76_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_76_div_70_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.angForm.controls["AC_CATG"].errors == null ? null : ctx_r24.angForm.controls["AC_CATG"].errors.required);
} }
function CurrentAccountMasterComponent_ng_template_76_ng_option_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r37.label, "");
} }
function CurrentAccountMasterComponent_ng_template_76_div_80_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_76_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_76_div_80_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r26.angForm.controls["AC_OPR_CODE"].errors == null ? null : ctx_r26.angForm.controls["AC_OPR_CODE"].errors.required);
} }
function CurrentAccountMasterComponent_ng_template_76_ng_option_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r39.label, "");
} }
function CurrentAccountMasterComponent_ng_template_76_div_91_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_76_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_76_div_91_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r28.angForm.controls["AC_BALCATG"].errors == null ? null : ctx_r28.angForm.controls["AC_BALCATG"].errors.required);
} }
function CurrentAccountMasterComponent_ng_template_76_ng_option_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r41.label, "");
} }
function CurrentAccountMasterComponent_ng_template_76_div_101_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_76_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_76_div_101_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_INTCATA"].errors == null ? null : ctx_r30.angForm.controls["AC_INTCATA"].errors.required);
} }
function CurrentAccountMasterComponent_ng_template_76_div_114_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_76_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_76_div_114_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.angForm.controls["AC_SCHMAMT"].errors == null ? null : ctx_r31.angForm.controls["AC_SCHMAMT"].errors.pattern);
} }
const _c1 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
const _c2 = function (a0) { return { "form-submitted": a0 }; };
function CurrentAccountMasterComponent_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CurrentAccountMasterComponent_ng_template_76_Template_input_keypress_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); return $event.charCode >= 65 && $event.charCode < 90 || $event.charCode >= 97 && $event.charCode < 122 || $event.charCode <= 32 || $event.charCode == 46 || $event.charCode == 45 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Proprietor Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CurrentAccountMasterComponent_ng_template_76_div_10_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Member Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Member Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_76_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.openingDate = $event; })("focusout", function CurrentAccountMasterComponent_ng_template_76_Template_input_focusout_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r47.disabledate(_r19.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Opening Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CurrentAccountMasterComponent_ng_template_76_div_32_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 69, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function CurrentAccountMasterComponent_ng_template_76_Template_input_focusout_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.disabledate(_r19.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Birth Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CurrentAccountMasterComponent_ng_template_76_Template_input_keypress_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); return $event.charCode >= 65 && $event.charCode < 90 || $event.charCode >= 97 && $event.charCode < 122 || $event.charCode <= 32 || $event.charCode == 46 || $event.charCode == 45 || $event.charCode == 47 || $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Manual Reference Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, CurrentAccountMasterComponent_ng_template_76_div_48_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Cast");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Occupation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ng-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_76_Template_ng_select_ngModelChange_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.ngCategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, CurrentAccountMasterComponent_ng_template_76_ng_option_65_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, CurrentAccountMasterComponent_ng_template_76_div_70_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ng-select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_76_Template_ng_select_ngModelChange_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r51.ngOccupation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, CurrentAccountMasterComponent_ng_template_76_ng_option_75_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, CurrentAccountMasterComponent_ng_template_76_div_80_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "ng-select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_76_Template_ng_select_ngModelChange_85_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.ngBalCategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, CurrentAccountMasterComponent_ng_template_76_ng_option_86_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Balance Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, CurrentAccountMasterComponent_ng_template_76_div_91_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "ng-select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_76_Template_ng_select_ngModelChange_95_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.ngIntCategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, CurrentAccountMasterComponent_ng_template_76_ng_option_96_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Interest Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, CurrentAccountMasterComponent_ng_template_76_div_101_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "PAN Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function CurrentAccountMasterComponent_ng_template_76_Template_input_focusout_111_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.decimalAllContent($event); })("keypress", function CurrentAccountMasterComponent_ng_template_76_Template_input_keypress_111_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Installment Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, CurrentAccountMasterComponent_ng_template_76_div_114_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Recovery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_76_Template_button_click_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.switchNgBTab("address"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_PROPRITOR_NAME"].invalid && (ctx_r8.angForm.controls["AC_PROPRITOR_NAME"].dirty || ctx_r8.angForm.controls["AC_PROPRITOR_NAME"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.openingDate)("maxDate", ctx_r8.maxDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](34, _c2, ctx_r8.formSubmitted))("bsValue", ctx_r8.bsValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_OPDATE"].invalid && (ctx_r8.angForm.controls["AC_OPDATE"].dirty || ctx_r8.angForm.controls["AC_OPDATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](38, 30, ctx_r8.datemax, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c1))("bsValue", ctx_r8.bsValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["REF_ACNO"].invalid && (ctx_r8.angForm.controls["REF_ACNO"].dirty || ctx_r8.angForm.controls["REF_ACNO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.ngCategory)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](37, _c2, ctx_r8.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_CATG"].invalid && (ctx_r8.angForm.controls["AC_CATG"].dirty || ctx_r8.angForm.controls["AC_CATG"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.ngOccupation)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](39, _c2, ctx_r8.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.operation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_OPR_CODE"].invalid && (ctx_r8.angForm.controls["AC_OPR_CODE"].dirty || ctx_r8.angForm.controls["AC_OPR_CODE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.ngBalCategory)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](41, _c2, ctx_r8.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.bal_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_BALCATG"].invalid && (ctx_r8.angForm.controls["AC_BALCATG"].dirty || ctx_r8.angForm.controls["AC_BALCATG"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.ngIntCategory)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](43, _c2, ctx_r8.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.int_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_INTCATA"].invalid && (ctx_r8.angForm.controls["AC_INTCATA"].dirty || ctx_r8.angForm.controls["AC_INTCATA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r8.AC_SCHMAMT != null ? ctx_r8.AC_SCHMAMT.toFixed(2) : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_SCHMAMT"].invalid && (ctx_r8.angForm.controls["AC_SCHMAMT"].dirty || ctx_r8.angForm.controls["AC_SCHMAMT"].touched));
} }
function CurrentAccountMasterComponent_ng_template_78_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_78_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_78_div_14_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r57.angForm.controls["AC_HONO"].errors == null ? null : ctx_r57.angForm.controls["AC_HONO"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_78_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_78_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_78_div_21_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r58.angForm.controls["AC_WARD"].errors == null ? null : ctx_r58.angForm.controls["AC_WARD"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_78_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_78_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_78_div_28_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r59.angForm.controls["AC_GALLI"].errors == null ? null : ctx_r59.angForm.controls["AC_GALLI"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_78_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_78_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_78_div_35_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.angForm.controls["AC_AREA"].errors == null ? null : ctx_r60.angForm.controls["AC_AREA"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_78_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_78_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_78_div_42_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r61.angForm.controls["AC_ADDR"].errors == null ? null : ctx_r61.angForm.controls["AC_ADDR"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_78_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_78_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_78_div_56_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r62.angForm.controls["AC_PIN"].errors == null ? null : ctx_r62.angForm.controls["AC_PIN"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_8_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r70.angForm.controls["AC_THONO"].errors == null ? null : ctx_r70.angForm.controls["AC_THONO"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_15_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r71.angForm.controls["AC_TWARD"].errors == null ? null : ctx_r71.angForm.controls["AC_TWARD"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_22_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.angForm.controls["AC_TGALLI"].errors == null ? null : ctx_r72.angForm.controls["AC_TGALLI"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_29_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r73.angForm.controls["AC_TAREA"].errors == null ? null : ctx_r73.angForm.controls["AC_TAREA"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_36_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r74.angForm.controls["AC_TADDR"].errors == null ? null : ctx_r74.angForm.controls["AC_TADDR"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_ng_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r82.CITY_NAME, "");
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_51_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r76.angForm.controls["AC_TPIN"].errors == null ? null : ctx_r76.angForm.controls["AC_TPIN"].errors.pattern) || (ctx_r76.angForm.controls["AC_TPIN"].errors == null ? null : ctx_r76.angForm.controls["AC_TPIN"].errors.minlength) || (ctx_r76.angForm.controls["AC_TPIN"].errors == null ? null : ctx_r76.angForm.controls["AC_TPIN"].errors.maxlength));
} }
function CurrentAccountMasterComponent_ng_template_78_ng_container_86_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_8_Template, 2, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_15_Template, 2, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_22_Template, 2, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_29_Template, 2, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_36_Template, 2, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ng-select", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_78_ng_container_86_Template_ng_select_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r84.ngCity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, CurrentAccountMasterComponent_ng_template_78_ng_container_86_ng_option_42_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CurrentAccountMasterComponent_ng_template_78_ng_container_86_Template_input_keypress_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r85); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, CurrentAccountMasterComponent_ng_template_78_ng_container_86_div_51_Template, 2, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.angForm.controls["AC_THONO"].invalid && (ctx_r63.angForm.controls["AC_THONO"].dirty || ctx_r63.angForm.controls["AC_THONO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.angForm.controls["AC_TWARD"].invalid && (ctx_r63.angForm.controls["AC_TWARD"].dirty || ctx_r63.angForm.controls["AC_TWARD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.angForm.controls["AC_TGALLI"].invalid && (ctx_r63.angForm.controls["AC_TGALLI"].dirty || ctx_r63.angForm.controls["AC_TGALLI"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.angForm.controls["AC_TAREA"].invalid && (ctx_r63.angForm.controls["AC_TAREA"].dirty || ctx_r63.angForm.controls["AC_TAREA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.angForm.controls["AC_TADDR"].invalid && (ctx_r63.angForm.controls["AC_TADDR"].dirty || ctx_r63.angForm.controls["AC_TADDR"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r63.ngCity)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c2, ctx_r63.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r63.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.angForm.controls["AC_TPIN"].invalid && (ctx_r63.angForm.controls["AC_TPIN"].dirty || ctx_r63.angForm.controls["AC_TPIN"].touched));
} }
function CurrentAccountMasterComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " --------- Permanent Address --------- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CurrentAccountMasterComponent_ng_template_78_div_14_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CurrentAccountMasterComponent_ng_template_78_div_21_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CurrentAccountMasterComponent_ng_template_78_div_28_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, CurrentAccountMasterComponent_ng_template_78_div_35_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, CurrentAccountMasterComponent_ng_template_78_div_42_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, CurrentAccountMasterComponent_ng_template_78_div_56_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Residential Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h6", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " --------- Temporory Address --------- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_78_Template_input_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r87.tempAsPermanent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Is Temporory Address same as Permanent Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, CurrentAccountMasterComponent_ng_template_78_ng_container_86_Template, 52, 11, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_78_Template_button_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r88); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r89.switchNgBTab("introducer"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_HONO"].invalid && (ctx_r9.angForm.controls["AC_HONO"].dirty || ctx_r9.angForm.controls["AC_HONO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_WARD"].invalid && (ctx_r9.angForm.controls["AC_WARD"].dirty || ctx_r9.angForm.controls["AC_WARD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_GALLI"].invalid && (ctx_r9.angForm.controls["AC_GALLI"].dirty || ctx_r9.angForm.controls["AC_GALLI"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_AREA"].invalid && (ctx_r9.angForm.controls["AC_AREA"].dirty || ctx_r9.angForm.controls["AC_AREA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_ADDR"].invalid && (ctx_r9.angForm.controls["AC_ADDR"].dirty || ctx_r9.angForm.controls["AC_ADDR"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_PIN"].invalid && (ctx_r9.angForm.controls["AC_PIN"].dirty || ctx_r9.angForm.controls["AC_PIN"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r9.tempAddress);
} }
function CurrentAccountMasterComponent_ng_template_80_ng_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r93.label, "");
} }
function CurrentAccountMasterComponent_ng_template_80_ng_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r94.label, "");
} }
function CurrentAccountMasterComponent_ng_template_80_ng_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", values_r95.label, " ", values_r95.name, " ");
} }
function CurrentAccountMasterComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "INTRODUCER");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ng-select", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_80_Template_ng_select_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r96.code = $event; })("change", function CurrentAccountMasterComponent_ng_template_80_Template_ng_select_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r98.getBranch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CurrentAccountMasterComponent_ng_template_80_ng_option_13_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ng-select", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_80_Template_ng_select_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r99.acno = $event; })("change", function CurrentAccountMasterComponent_ng_template_80_Template_ng_select_change_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r100.getIntro($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CurrentAccountMasterComponent_ng_template_80_ng_option_20_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Account Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ng-select", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_80_Template_ng_select_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r101.ngIntroducer = $event; })("focus", function CurrentAccountMasterComponent_ng_template_80_Template_ng_select_focus_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r102.getIntroducer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CurrentAccountMasterComponent_ng_template_80_ng_option_27_Template, 2, 3, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_80_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r103.switchNgBTab("nominee"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.code)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c2, ctx_r10.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.branch_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.acno)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c2, ctx_r10.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.allScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.ngIntroducer)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c2, ctx_r10.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.introducerACNo);
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_div_13_div_11_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r113.angForm.controls["AC_NNAME"].errors == null ? null : ctx_r113.angForm.controls["AC_NNAME"].errors.pattern) || (ctx_r113.angForm.controls["AC_NNAME"].errors == null ? null : ctx_r113.angForm.controls["AC_NNAME"].errors.maxlength));
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_div_13_div_20_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r114.angForm.controls["AC_NRELA"].errors == null ? null : ctx_r114.angForm.controls["AC_NRELA"].errors.pattern) || (ctx_r114.angForm.controls["AC_NRELA"].errors == null ? null : ctx_r114.angForm.controls["AC_NRELA"].errors.maxlength));
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This fiels is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_div_13_div_29_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r115.angForm.controls["AC_NDATE"].errors == null ? null : ctx_r115.angForm.controls["AC_NDATE"].errors.required);
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This fiels is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_div_13_div_36_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r116.angForm.controls["AGE"].errors == null ? null : ctx_r116.angForm.controls["AGE"].errors.pattern) || (ctx_r116.angForm.controls["AGE"].errors == null ? null : ctx_r116.angForm.controls["AGE"].errors.min) || (ctx_r116.angForm.controls["AGE"].errors == null ? null : ctx_r116.angForm.controls["AGE"].errors.max));
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_div_13_div_43_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r117.angForm.controls["AC_NHONO"].errors == null ? null : ctx_r117.angForm.controls["AC_NHONO"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_div_13_div_50_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r118.angForm.controls["AC_NWARD"].errors == null ? null : ctx_r118.angForm.controls["AC_NWARD"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_58_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_div_13_div_58_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r119.angForm.controls["AC_NGALLI"].errors == null ? null : ctx_r119.angForm.controls["AC_NGALLI"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_65_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_div_13_div_65_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r120.angForm.controls["AC_NAREA"].errors == null ? null : ctx_r120.angForm.controls["AC_NAREA"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_div_13_div_72_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r121.angForm.controls["AC_NADDR"].errors == null ? null : ctx_r121.angForm.controls["AC_NADDR"].errors.pattern);
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_87_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_div_13_div_87_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r122.angForm.controls["AC_NPIN"].errors == null ? null : ctx_r122.angForm.controls["AC_NPIN"].errors.pattern) || (ctx_r122.angForm.controls["AC_NPIN"].errors == null ? null : ctx_r122.angForm.controls["AC_NPIN"].errors.minlength) || (ctx_r122.angForm.controls["AC_NPIN"].errors == null ? null : ctx_r122.angForm.controls["AC_NPIN"].errors.maxlength));
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_button_89_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_div_13_button_89_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r135.addNominee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add Nominee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_button_90_Template(rf, ctx) { if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_div_13_button_90_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r138); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r137.updateNominee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update Nominee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CurrentAccountMasterComponent_ng_template_82_div_13_Template_input_keypress_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r140); return $event.charCode >= 65 && $event.charCode < 90 || $event.charCode >= 97 && $event.charCode < 122 || $event.charCode <= 32; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CurrentAccountMasterComponent_ng_template_82_div_13_div_11_Template, 2, 1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CurrentAccountMasterComponent_ng_template_82_div_13_Template_input_keypress_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r140); return $event.charCode >= 65 && $event.charCode < 90 || $event.charCode >= 97 && $event.charCode < 122 || $event.charCode <= 32; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Relation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CurrentAccountMasterComponent_ng_template_82_div_13_div_20_Template, 2, 1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_82_div_13_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r140); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r142.ngnomineedate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Nomination Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CurrentAccountMasterComponent_ng_template_82_div_13_div_29_Template, 2, 1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function CurrentAccountMasterComponent_ng_template_82_div_13_Template_input_focusout_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r140); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r143.age(); })("keypress", function CurrentAccountMasterComponent_ng_template_82_div_13_Template_input_keypress_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r140); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, CurrentAccountMasterComponent_ng_template_82_div_13_div_36_Template, 2, 1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, CurrentAccountMasterComponent_ng_template_82_div_13_div_43_Template, 2, 1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, CurrentAccountMasterComponent_ng_template_82_div_13_div_50_Template, 2, 1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, CurrentAccountMasterComponent_ng_template_82_div_13_div_58_Template, 2, 1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, CurrentAccountMasterComponent_ng_template_82_div_13_div_65_Template, 2, 1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, CurrentAccountMasterComponent_ng_template_82_div_13_div_72_Template, 2, 1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ng-select", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_82_div_13_Template_ng_select_ngModelChange_76_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r140); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r145.ngNcity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CurrentAccountMasterComponent_ng_template_82_div_13_Template_input_keypress_84_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r140); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, CurrentAccountMasterComponent_ng_template_82_div_13_div_87_Template, 2, 1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, CurrentAccountMasterComponent_ng_template_82_div_13_button_89_Template, 2, 0, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, CurrentAccountMasterComponent_ng_template_82_div_13_button_90_Template, 2, 0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c2, ctx_r104.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.angForm.controls["AC_NNAME"].invalid && (ctx_r104.angForm.controls["AC_NNAME"].dirty || ctx_r104.angForm.controls["AC_NNAME"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c2, ctx_r104.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.angForm.controls["AC_NRELA"].invalid && (ctx_r104.angForm.controls["AC_NRELA"].dirty || ctx_r104.angForm.controls["AC_NRELA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r104.ngnomineedate)("minDate", ctx_r104.minDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.angForm.controls["AC_NDATE"].invalid && (ctx_r104.angForm.controls["AC_NDATE"].dirty || ctx_r104.angForm.controls["AC_NDATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.angForm.controls["AGE"].invalid && (ctx_r104.angForm.controls["AGE"].dirty || ctx_r104.angForm.controls["AGE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.angForm.controls["AC_NHONO"].invalid && (ctx_r104.angForm.controls["AC_NHONO"].dirty || ctx_r104.angForm.controls["AC_NHONO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.angForm.controls["AC_NWARD"].invalid && (ctx_r104.angForm.controls["AC_NWARD"].dirty || ctx_r104.angForm.controls["AC_NWARD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.angForm.controls["AC_NGALLI"].invalid && (ctx_r104.angForm.controls["AC_NGALLI"].dirty || ctx_r104.angForm.controls["AC_NGALLI"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.angForm.controls["AC_NAREA"].invalid && (ctx_r104.angForm.controls["AC_NAREA"].dirty || ctx_r104.angForm.controls["AC_NAREA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.angForm.controls["AC_NADDR"].invalid && (ctx_r104.angForm.controls["AC_NADDR"].dirty || ctx_r104.angForm.controls["AC_NADDR"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r104.Ncity)("ngModel", ctx_r104.ngNcity)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c2, ctx_r104.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.angForm.controls["AC_NPIN"].invalid && (ctx_r104.angForm.controls["AC_NPIN"].dirty || ctx_r104.angForm.controls["AC_NPIN"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.nomineeShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.nomineeUpdateShow);
} }
function CurrentAccountMasterComponent_ng_template_82_tbody_43_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_tbody_43_tr_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151); const indexOfelement_r149 = ctx.index; const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r150.editNominee(indexOfelement_r149); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_tbody_43_tr_1_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151); const indexOfelement_r149 = ctx.index; const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r152.delNominee(indexOfelement_r149); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r148 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r148.AC_NNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r148.AC_NRELA);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r148.AGE === "" || data_r148.AGE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r148.AGE === "" || data_r148.AGE == null ? "-" : data_r148.AGE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r148.AC_NDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r148.AC_NDATE === "" ? "-" : data_r148.AC_NDATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r148.AC_NHONO === "" || data_r148.AC_NHONO == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r148.AC_NHONO === "" || data_r148.AC_NHONO == null ? "-" : data_r148.AC_NHONO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r148.AC_NWARD === "" || data_r148.AC_NWARD == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r148.AC_NWARD === "" || data_r148.AC_NWARD == null ? "-" : data_r148.AC_NWARD, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r148.AC_NADDR === "" || data_r148.AC_NADDR == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r148.AC_NADDR === "" || data_r148.AC_NADDR == null ? "-" : data_r148.AC_NADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r148.AC_NGALLI === "" || data_r148.AC_NGALLI == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r148.AC_NGALLI === "" || data_r148.AC_NGALLI == null ? "-" : data_r148.AC_NGALLI, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r148.AC_NAREA === "" || data_r148.AC_NAREA == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r148.AC_NAREA === "" || data_r148.AC_NAREA == null ? "-" : data_r148.AC_NAREA, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r148.AC_NCTCODE === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r148.AC_NCTCODE === "" ? "-" : data_r148.AC_CITYNAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r148.AC_NPIN === "" || data_r148.AC_NPIN == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r148.AC_NPIN === "" || data_r148.AC_NPIN == null ? "-" : data_r148.AC_NPIN, " ");
} }
function CurrentAccountMasterComponent_ng_template_82_tbody_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_tbody_43_tr_1_Template, 29, 20, "tr", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r105.multiNominee);
} }
function CurrentAccountMasterComponent_ng_template_82_tbody_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_55_ng_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r156 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r156.label, "");
} }
function CurrentAccountMasterComponent_ng_template_82_div_55_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_div_55_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r157.addJointAcccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_55_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_div_55_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r160); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r159.updateJointAcccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ng-select", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_82_div_55_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r162); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r161.jointID = $event; })("change", function CurrentAccountMasterComponent_ng_template_82_div_55_Template_ng_select_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r162); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r163.getJointCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CurrentAccountMasterComponent_ng_template_82_div_55_ng_option_6_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Customer Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CurrentAccountMasterComponent_ng_template_82_div_55_button_25_Template, 2, 0, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CurrentAccountMasterComponent_ng_template_82_div_55_button_26_Template, 2, 0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r107.jointID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c2, ctx_r107.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r107.Cust_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r107.jointShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r107.jointUpdateShow);
} }
function CurrentAccountMasterComponent_ng_template_82_tbody_69_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_tbody_69_tr_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r168); const indexOfelement_r166 = ctx.index; const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r167.editJointAc(indexOfelement_r166); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_tbody_69_tr_1_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r168); const indexOfelement_r166 = ctx.index; const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r169.delJointAc(indexOfelement_r166); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r165 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r165.JOINT_AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r165.JOINT_AC_CUSTID === "" ? "-" : data_r165.JOINT_AC_CUSTID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r165.JOINT_ACNAME === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r165.JOINT_ACNAME === "" ? "-" : data_r165.JOINT_ACNAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r165.OPERATOR === "" ? "td_left" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r165.OPERATOR === "" ? "-" : data_r165.OPERATOR, " ");
} }
function CurrentAccountMasterComponent_ng_template_82_tbody_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_tbody_69_tr_1_Template, 13, 6, "tr", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r108.multiJointAC);
} }
function CurrentAccountMasterComponent_ng_template_82_tbody_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_81_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_81_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_div_81_div_10_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r170.angForm.controls["ATTERONEY_NAME"].errors == null ? null : ctx_r170.angForm.controls["ATTERONEY_NAME"].errors.pattern) || (ctx_r170.angForm.controls["ATTERONEY_NAME"].errors == null ? null : ctx_r170.angForm.controls["ATTERONEY_NAME"].errors.required) || (ctx_r170.angForm.controls["ATTERONEY_NAME"].errors == null ? null : ctx_r170.angForm.controls["ATTERONEY_NAME"].errors.maxlength));
} }
function CurrentAccountMasterComponent_ng_template_82_div_81_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_81_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_div_81_div_19_div_1_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r171.angForm.controls["DATE_APPOINTED"].errors == null ? null : ctx_r171.angForm.controls["DATE_APPOINTED"].errors.required);
} }
function CurrentAccountMasterComponent_ng_template_82_div_81_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_div_81_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r177); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r176.addAttorney(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add Attorney ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_81_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_div_81_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r179); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r178.updateAttorney(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_82_div_81_Template(rf, ctx) { if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CurrentAccountMasterComponent_ng_template_82_div_81_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181); return $event.charCode >= 65 && $event.charCode < 90 || $event.charCode >= 97 && $event.charCode < 122 || $event.charCode <= 32; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CurrentAccountMasterComponent_ng_template_82_div_81_div_10_Template, 2, 1, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_82_div_81_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181); const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r182.ngappointeddate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Appointed on");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CurrentAccountMasterComponent_ng_template_82_div_81_div_19_Template, 2, 1, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_ng_template_82_div_81_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181); const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r183.ngexpiryddate = $event; })("bsValueChange", function CurrentAccountMasterComponent_ng_template_82_div_81_Template_input_bsValueChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r181); const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r184.checkdate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CurrentAccountMasterComponent_ng_template_82_div_81_button_29_Template, 2, 0, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CurrentAccountMasterComponent_ng_template_82_div_81_button_30_Template, 2, 0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r110.angForm.controls["ATTERONEY_NAME"].invalid && (ctx_r110.angForm.controls["ATTERONEY_NAME"].dirty || ctx_r110.angForm.controls["ATTERONEY_NAME"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r110.ngappointeddate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c1))("maxDate", ctx_r110.maxDate)("maxDate", ctx_r110.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r110.angForm.controls["DATE_APPOINTED"].invalid && (ctx_r110.angForm.controls["DATE_APPOINTED"].dirty || ctx_r110.angForm.controls["DATE_APPOINTED"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r110.ngexpiryddate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1))("minDate", ctx_r110.minDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r110.attorneyShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r110.attorneyUpdateShow);
} }
function CurrentAccountMasterComponent_ng_template_82_tbody_95_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_tbody_95_tr_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r189); const indexOfelement_r187 = ctx.index; const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r188.editAttorney(indexOfelement_r187); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_tbody_95_tr_1_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r189); const indexOfelement_r187 = ctx.index; const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r190.delAttorney(indexOfelement_r187); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r186 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r186.ATTERONEY_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r186.ATTERONEY_NAME === "" ? "-" : data_r186.ATTERONEY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r186.DATE_APPOINTED === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r186.DATE_APPOINTED === "" ? "-" : data_r186.DATE_APPOINTED, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r186.DATE_EXPIRY === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r186.DATE_EXPIRY === "" ? "-" : data_r186.DATE_EXPIRY, " ");
} }
function CurrentAccountMasterComponent_ng_template_82_tbody_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_82_tbody_95_tr_1_Template, 13, 6, "tr", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r111.multiAttorney);
} }
function CurrentAccountMasterComponent_ng_template_82_tbody_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { isActive: a0 }; };
function CurrentAccountMasterComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_Template_input_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r192); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r191.nominee($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "NOMINEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CurrentAccountMasterComponent_ng_template_82_div_13_Template, 91, 27, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "table", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Relation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Nomination Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Pin code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, CurrentAccountMasterComponent_ng_template_82_tbody_43_Template, 2, 1, "tbody", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, CurrentAccountMasterComponent_ng_template_82_tbody_44_Template, 4, 0, "tbody", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_Template_input_click_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r192); const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r193.jointAccount($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "b", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "JOINT ACCOUNTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, CurrentAccountMasterComponent_ng_template_82_div_55_Template, 27, 7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "table", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "td", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "td", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Customer ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, CurrentAccountMasterComponent_ng_template_82_tbody_69_Template, 2, 1, "tbody", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, CurrentAccountMasterComponent_ng_template_82_tbody_70_Template, 4, 0, "tbody", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_Template_input_click_75_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r192); const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r194.ispowerof($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "b", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "POWER OF ATTORNEY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, CurrentAccountMasterComponent_ng_template_82_div_81_Template, 31, 13, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "table", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "td", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Appointed on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Expiry Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, CurrentAccountMasterComponent_ng_template_82_tbody_95_Template, 2, 1, "tbody", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, CurrentAccountMasterComponent_ng_template_82_tbody_96_Template, 4, 0, "tbody", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_82_Template_button_click_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r192); const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r195.switchNgBTab("documents"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c3, ctx_r11.nomineeTrue));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.nomineeTrue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r11.multiNominee == null ? null : ctx_r11.multiNominee.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r11.multiNominee == null ? null : ctx_r11.multiNominee.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c3, ctx_r11.JointAccountsTrue));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.JointAccountsTrue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r11.multiJointAC == null ? null : ctx_r11.multiJointAC.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r11.multiJointAC == null ? null : ctx_r11.multiJointAC.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c3, ctx_r11.PowerofAttorneyTrue));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.PowerofAttorneyTrue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r11.multiAttorney == null ? null : ctx_r11.multiAttorney.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r11.multiAttorney == null ? null : ctx_r11.multiAttorney.length) == 0);
} }
function CurrentAccountMasterComponent_ng_template_84_tbody_14_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_84_tbody_14_tr_1_Template_span_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r208); const data_r205 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); _r198.show(); return ctx_r207.viewImagePreview($event, ctx_r207.documentUrl + data_r205.PATH); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r205 = ctx.$implicit;
    const indexOfelement_r206 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](indexOfelement_r206 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r205.DocumentMaster.NAME);
} }
function CurrentAccountMasterComponent_ng_template_84_tbody_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_ng_template_84_tbody_14_tr_1_Template, 8, 2, "tr", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r196.customerDoc);
} }
function CurrentAccountMasterComponent_ng_template_84_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_84_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_84_button_32_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r210); const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r209.submit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_84_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_84_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r212); const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r211.addNewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_84_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_84_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r214); const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r213.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_84_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_84_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r216); const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r215.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_84_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_84_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r218); const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r217.Approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    const _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "View Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CurrentAccountMasterComponent_ng_template_84_tbody_14_Template, 2, 1, "tbody", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CurrentAccountMasterComponent_ng_template_84_tbody_15_Template, 4, 0, "tbody", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "app-modal-basic", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_84_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r220); const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); return _r198.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_ng_template_84_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r220); const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); return _r198.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CurrentAccountMasterComponent_ng_template_84_button_32_Template, 2, 0, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CurrentAccountMasterComponent_ng_template_84_button_33_Template, 2, 0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, CurrentAccountMasterComponent_ng_template_84_button_35_Template, 2, 0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CurrentAccountMasterComponent_ng_template_84_button_37_Template, 2, 0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, CurrentAccountMasterComponent_ng_template_84_button_39_Template, 2, 0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r12.customerDoc == null ? null : ctx_r12.customerDoc.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r12.customerDoc == null ? null : ctx_r12.customerDoc.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dialogClass", "modal-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r12.selectedImagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.showButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.newbtnShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.updateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.rejectShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.approveShow);
} }
function CurrentAccountMasterComponent_div_85_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_div_85_tbody_8_tr_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r228); const data_r226 = ctx.$implicit; const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r227.editClickHandler(data_r226.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r226 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r226.AC_TYPE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r226.AC_TYPE === "" || data_r226.AC_TYPE == null ? "-" : data_r226.DPMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r226.BANKACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r226.BANKACNO === "" ? "-" : data_r226.BANKACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r226.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r226.AC_NAME === "" ? "-" : data_r226.AC_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r226.AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r226.AC_CUSTID === "" ? "-" : data_r226.AC_CUSTID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (data_r226.idmaster.custAddress[0] == null ? null : data_r226.idmaster.custAddress[0].AC_ADDR) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r226.idmaster.custAddress[0] == null ? null : data_r226.idmaster.custAddress[0].AC_ADDR) === "" ? "-" : data_r226.idmaster.custAddress[0] == null ? null : data_r226.idmaster.custAddress[0].AC_ADDR, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (data_r226.idmaster.custAddress[0].city == null ? null : data_r226.idmaster.custAddress[0].city.CITY_NAME) === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r226.idmaster.custAddress[0].city == null ? null : data_r226.idmaster.custAddress[0].city.CITY_NAME) === "" ? "-" : data_r226.idmaster.custAddress[0].city == null ? null : data_r226.idmaster.custAddress[0].city.CITY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r226.AC_PROPRITOR_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r226.AC_OPDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r226.AC_OPDATE === "" ? "-" : data_r226.AC_OPDATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r226.REF_ACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r226.REF_ACNO === "" ? "-" : data_r226.REF_ACNO, " ");
} }
function CurrentAccountMasterComponent_div_85_tbody_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurrentAccountMasterComponent_div_85_tbody_8_tr_1_Template, 20, 17, "tr", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r222.currentAccountMaster);
} }
function CurrentAccountMasterComponent_div_85_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurrentAccountMasterComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CurrentAccountMasterComponent_div_85_tbody_8_Template, 2, 1, "tbody", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CurrentAccountMasterComponent_div_85_tbody_9_Template, 4, 0, "tbody", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tfoot", 213, 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r13.dtExportButtonOptions)("dtTrigger", ctx_r13.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r13.currentAccountMaster == null ? null : ctx_r13.currentAccountMaster.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r13.currentAccountMaster == null ? null : ctx_r13.currentAccountMaster.length) == 0);
} }
// Handling datatable data
class DataTableResponse {
}
class CurrentAccountMasterComponent {
    constructor(http, currentAccountMasterService, customerID, customerIdService, categoryMasterService, directorMasterDropdownService, ownbranchMasterService, cityMasterService, schemeCodeDropdownService, operationMasterDropdownService, intrestCategoryMasterDropdownService, minimumBalanceMasterDropdownService, systemParameter, schemeAccountNoService, fb) {
        this.http = http;
        this.currentAccountMasterService = currentAccountMasterService;
        this.customerID = customerID;
        this.customerIdService = customerIdService;
        this.categoryMasterService = categoryMasterService;
        this.directorMasterDropdownService = directorMasterDropdownService;
        this.ownbranchMasterService = ownbranchMasterService;
        this.cityMasterService = cityMasterService;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.operationMasterDropdownService = operationMasterDropdownService;
        this.intrestCategoryMasterDropdownService = intrestCategoryMasterDropdownService;
        this.minimumBalanceMasterDropdownService = minimumBalanceMasterDropdownService;
        this.systemParameter = systemParameter;
        this.schemeAccountNoService = schemeAccountNoService;
        this.fb = fb;
        this.getUserData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formSubmitted = false;
        //api 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].base_url;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //Datatable variable
        this.dtExportButtonOptions = {};
        //variables for pagination
        this.page = 1;
        this.itemsPerPage = 10;
        this.currentJustify = 'start';
        this.active = 1;
        this.activeKeep = 1;
        // Variables for hide/show add and update and new button
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.openingDate = null;
        this.AC_TYPE = false;
        //variable to get ID to update
        this.updateID = 0;
        //filter variable
        this.filterData = {};
        this.DatatableHideShow = true;
        this.rejectShow = false;
        this.approveShow = false;
        //display code according choice
        this.nomineeTrue = false;
        this.JointAccountsTrue = false;
        this.PowerofAttorneyTrue = false;
        //url to display document
        this.documentUrl = this.url + '/';
        //array of document of customer
        this.customerDoc = [];
        //introducer variables
        // acno: any
        this.introducerReq = false;
        //temp address flag variable
        this.tempAddress = true;
        this.multiNominee = [];
        this.multiJointAC = [];
        this.multiAttorney = [];
        this.nomineeShowButton = true;
        this.nomineeUpdateShow = false;
        this.jointShowButton = true;
        this.jointUpdateShow = false;
        this.attorneyShowButton = true;
        this.attorneyUpdateShow = false;
        //add required validation to attorney fields
        this.DATE_EXPIRY = false;
        this.DATE_APPOINTED = false;
        this.ATTERONEY_NAME = false;
        //Scheme type variable
        this.schemeType = 'CA';
        this.selectedOption = '3';
        this.isDisabled = true;
        this.selectedCharacter = '3';
        this.timeLeft = 5;
        this.id = '';
        // jointID: string = '';
        this.dataSub = null;
        this.selectedValue = null;
        this.newcustid = null;
        this.ngCategory = null;
        this.ngOccupation = null;
        this.ngBalCategory = null;
        this.ngIntCategory = null;
        this.ngCity = null;
        this.code = null;
        this.acno = null;
        this.ngIntroducer = null;
        this.ngNcity = null;
        this.jointID = null;
        this.visible = false;
        this.visibleAnimate = false;
        this.selectedImgArrayDetails = [];
        this.showImage = false;
        this.cityName = false;
        this.nextButton = true;
        this.maxDate = new Date();
        this.minDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate());
        this.minDate.setDate(this.minDate.getDate());
        if (this.childMessage != undefined) {
            this.editClickHandler(this.childMessage);
        }
        this.datemax = new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2);
    }
    ngOnInit() {
        this.getSystemParaDate(); //function to set date
        this.createForm();
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                dataTableParameters.columns.forEach(element => {
                    if (element.search.value != '') {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                let data = localStorage.getItem('user');
                let result = JSON.parse(data);
                let branchCode = result.branch.id;
                dataTableParameters['branchCode'] = branchCode;
                dataTableParameters['filterData'] = this.filterData;
                this.http
                    .post(this.url + '/current-account-master', dataTableParameters).subscribe(resp => {
                    this.currentAccountMaster = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsTotal,
                        data: []
                    });
                });
            },
            columnDefs: [{
                    targets: '_all',
                    defaultContent: ""
                }],
            columns: [
                {
                    title: 'Action'
                },
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Account Number',
                    data: ' BANKACNO'
                },
                {
                    title: 'Member Name',
                    data: 'AC_NAME'
                },
                {
                    title: 'Customer ID',
                    data: 'AC_CUSTID'
                },
                {
                    title: 'Detail Address',
                    data: 'AC_ADDR'
                },
                {
                    title: 'City',
                    data: 'AC_CTCODE'
                },
                {
                    title: 'Proprietor Name',
                    data: 'AC_PROPRITOR_NAME'
                },
                {
                    title: 'Opening Date',
                    data: 'AC_OPDATE'
                },
                {
                    title: 'Manual Reference Number',
                    data: 'REF_ACNO'
                },
            ],
            dom: 'Blrtip',
        };
        this.customerID.getCustomerIDMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.Cust_ID = data;
            this.joint_Cust_ID = data;
        });
        this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.scheme = data;
            this.selectedValue = this.scheme[0].value;
            console.log(data);
        });
        this.categoryMasterService.getcategoryList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.category = data;
        });
        this.directorMasterDropdownService.getDirectorMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.director = data;
        });
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.branch_code = data;
        });
        this.cityMasterService.getcityList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.city = data;
            this.Ncity = data;
        });
        this.operationMasterDropdownService.getOperationMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.operation = data;
        });
        this.minimumBalanceMasterDropdownService.getMinimumBalanceMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.bal_category = data;
        });
        this.intrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.int_category = data;
        });
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.allScheme = data;
        });
    }
    //function to toggle temp address field
    tempAsPermanent() {
        this.tempAddress = !this.tempAddress;
    }
    //function to get new customer data
    addNewCustomer(newCustomer) {
        this.customerID.getCustomerIDMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.Cust_ID = data;
            this.id = newCustomer;
            this.getCustomer(newCustomer);
        });
    }
    customer(event) {
        this.getCustomer(event.value);
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;
        let obj = [branchCode, this.selectedValue];
        this.currentAccountMasterService.getData(obj).subscribe(data => {
            if ((data === null || data === void 0 ? void 0 : data.length) == 0) {
                this.getCustomer(event.value);
            }
            else {
                if (data.find(data => data['AC_TYPE'] == this.selectedValue && data['AC_CUSTID'] == event.value && (data['AC_CLOSEDT'] == '' || data['AC_CLOSEDT'] == null))) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        icon: 'info',
                        title: 'Current Account Already Exists For This Scheme',
                    });
                    //  this.resetForm()
                    event.id = null;
                    this.newcustid = null;
                    this.newcustid = '';
                    this.angForm.controls['AC_CUSTID'].reset();
                    this.angForm.patchValue({
                        AC_TITLE: '',
                        AC_NAME: '',
                        AC_MEMBTYPE: '',
                        AC_MEMBNO: '',
                        AC_CAST: '',
                        AC_OCODE: '',
                        AC_BIRTH_DT: '',
                        AC_MOBNO: '',
                        AC_PHNO: '',
                        AC_EMAIL: '',
                        AC_PANNO: '',
                    });
                }
                else {
                    this.getCustomer(event.value);
                }
            }
        });
    }
    //function to get existing customer data according selection
    getCustomer(id) {
        this.customerIdService.getFormData(id).subscribe(data => {
            var _a, _b;
            this.customerDoc = data.custdocument;
            this.tempAddress = data.custAddress[0].AC_ADDFLAG;
            if (data.castMaster == null) {
                data.castMaster = "";
            }
            if (data.occupMaster == null) {
                data.occupMaster = "";
            }
            this.newcustid = data.id;
            this.angForm.patchValue({
                AC_TITLE: data.AC_TITLE,
                AC_NAME: data.AC_NAME,
                AC_MEMBTYPE: data.AC_MEMBTYPE,
                AC_MEMBNO: data.AC_MEMBNO,
                AC_CAST: data.castMaster.NAME,
                AC_OCODE: data.occupMaster.NAME,
                AC_BIRTH_DT: data.AC_BIRTH_DT,
                AC_MOBNO: data.AC_MOBILENO,
                AC_PHNO: data.AC_PHONE_RES,
                AC_EMAIL: data.AC_EMAILID,
                AC_PANNO: data.AC_PANNO,
            });
            let permadd;
            let temp;
            data.custAddress.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (element.AC_ADDTYPE == 'P') {
                    permadd = element;
                }
            }));
            this.angForm.patchValue({
                AC_ADDFLAG: permadd === null || permadd === void 0 ? void 0 : permadd.AC_ADDFLAG,
                AC_HONO: permadd === null || permadd === void 0 ? void 0 : permadd.AC_HONO,
                AC_WARD: permadd === null || permadd === void 0 ? void 0 : permadd.AC_WARD,
                AC_ADDR: permadd === null || permadd === void 0 ? void 0 : permadd.AC_ADDR,
                AC_GALLI: permadd === null || permadd === void 0 ? void 0 : permadd.AC_GALLI,
                AC_AREA: permadd === null || permadd === void 0 ? void 0 : permadd.AC_AREA,
                AC_CTCODE: (_a = permadd.city) === null || _a === void 0 ? void 0 : _a.CITY_NAME,
                AC_PIN: permadd === null || permadd === void 0 ? void 0 : permadd.AC_PIN,
            });
            data.custAddress.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (element.AC_ADDTYPE == 'T') {
                    temp = element;
                }
            }));
            this.ngCity = (_b = temp === null || temp === void 0 ? void 0 : temp.city) === null || _b === void 0 ? void 0 : _b.id,
                this.angForm.patchValue({
                    AC_THONO: temp === null || temp === void 0 ? void 0 : temp.AC_HONO,
                    AC_TWARD: temp === null || temp === void 0 ? void 0 : temp.AC_WARD,
                    AC_TADDR: temp === null || temp === void 0 ? void 0 : temp.AC_ADDR,
                    AC_TGALLI: temp === null || temp === void 0 ? void 0 : temp.AC_GALLI,
                    AC_TAREA: temp === null || temp === void 0 ? void 0 : temp.AC_AREA,
                    AC_TPIN: temp === null || temp === void 0 ? void 0 : temp.AC_PIN,
                });
        });
        this.onCloseModal();
    }
    //formcontrols with validation
    createForm() {
        this.angForm = this.fb.group({
            //basic controls
            AC_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_ACNOTYPE: ['CA'],
            AC_NO: [''],
            BANKACNO: [''],
            AC_CUSTID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_NAME: [''],
            AC_TITLE: [''],
            AC_MEMBTYPE: [''],
            AC_MEMBNO: [''],
            AC_OPDATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_BIRTH_DT: [''],
            REF_ACNO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_PROPRITOR_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_CAST: [''],
            AC_OCODE: [''],
            AC_CATG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_OPR_CODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_BALCATG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_INTCATA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_PANNO: [''],
            AC_SCHMAMT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_IS_RECOVERY: [''],
            //Address
            AC_HONO: ['',],
            AC_WARD: ['',],
            AC_ADDR: ['',],
            AC_GALLI: ['',],
            AC_AREA: [''],
            AC_CTCODE: [''],
            AC_PIN: [''],
            AC_ADDFLAG: [true],
            AC_ADDTYPE: ['P'],
            AC_THONO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TWARD: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TADDR: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TGALLI: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TAREA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TCTCODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TPIN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_PHNO: [''],
            AC_MOBNO: [''],
            AC_EMAIL: [''],
            AC_INTROBRANCH: ['', []],
            AC_INTROID: [''],
            AC_INTRACNO: [''],
            AC_INTRNAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            SIGNATURE_AUTHORITY: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            //nominee controls (NOMINEELINK table)
            AC_NNAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NRELA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NDATE: ['',],
            AGE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(100)]],
            AC_NHONO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NWARD: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NADDR: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NGALLI: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NAREA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NCTCODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NPIN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            //joint ac
            JOINT_AC_CUSTID: [''],
            JOINT_ACNAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            OPERATOR: [true],
            //attorney
            ATTERONEY_NAME: ['', []],
            DATE_APPOINTED: ['', []],
            DATE_EXPIRY: ['', []],
        });
    }
    // Method to insert data into database through NestJS
    submit(event) {
        event.preventDefault();
        this.formSubmitted = true;
        let temdate;
        let opdate;
        if (this.angForm.valid) {
            const formVal = this.angForm.value;
            if (formVal.AC_ADDFLAG == true) {
                this.addType = 'P';
            }
            else if (formVal.AC_ADDFLAG == false) {
                this.addType = 'T';
            }
            if (this.angForm.controls['AC_TCTCODE'].value == "") {
                formVal.AC_TCTCODE = 0;
            }
            //get bank code and branch code from session
            let data = localStorage.getItem('user');
            let result = JSON.parse(data);
            let branchCode = result.branch.id;
            let schecode;
            if (this.tempopendate != this.openingDate) {
                temdate = (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == 'Invalid date') ? opdate = '' : opdate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_OPDATE).format('DD/MM/YYYY');
            }
            else {
                temdate = this.openingDate;
            }
            this.scheme.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (element.value == this.selectedValue) {
                    schecode = element.name;
                }
            }));
            let bankCode = Number(result.branch.syspara.BANK_CODE);
            const dataToSend = {
                'branchCode': branchCode,
                'bankCode': bankCode,
                'schemeCode': schecode,
                'AC_PROPRITOR_NAME': formVal.AC_PROPRITOR_NAME,
                'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
                'AC_TYPE': formVal.AC_TYPE,
                'AC_CATG': formVal.AC_CATG,
                'AC_BALCATG': formVal.AC_BALCATG,
                'AC_OPR_CODE': formVal.AC_OPR_CODE,
                'AC_CUSTID': formVal.AC_CUSTID,
                'AC_INTCATA': formVal.AC_INTCATA,
                'AC_OPDATE': temdate,
                'AC_NAME': formVal.AC_NAME,
                'AC_SCHMAMT': formVal.AC_SCHMAMT,
                'REF_ACNO': formVal.REF_ACNO,
                'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
                //temp address 
                AC_ADDFLAG: formVal.AC_ADDFLAG,
                AC_ADDTYPE: this.addType,
                AC_THONO: formVal.AC_THONO,
                AC_TWARD: formVal.AC_TWARD,
                AC_TADDR: formVal.AC_TADDR,
                AC_TGALLI: formVal.AC_TGALLI,
                AC_TAREA: formVal.AC_TAREA,
                AC_TCTCODE: formVal.AC_TCTCODE,
                AC_TPIN: formVal.AC_TPIN,
                'AC_INTROBRANCH': formVal.AC_INTROBRANCH,
                'AC_INTROID': formVal.AC_INTROID,
                'AC_INTRACNO': formVal.AC_INTRACNO,
                'AC_INTRNAME': formVal.AC_INTRNAME,
                //nominee
                'NomineeData': this.multiNominee,
                //Joint Account
                'JointAccountData': this.multiJointAC,
                //Attorney
                'PowerOfAttorneyData': this.multiAttorney
            };
            this.currentAccountMasterService.postData(dataToSend).subscribe(data => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    icon: 'success',
                    title: 'Account Created successfully!',
                    html: '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
                        '<b>ACCOUNT NO : </b>' + data.BANKACNO + '<br>'
                });
                this.formSubmitted = false;
                // to reload after insertion of data
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.ajax.reload();
                });
            }, (error) => {
                console.log(error);
            });
            //To clear form
            this.resetForm();
            this.multiNominee = [];
            this.multiJointAC = [];
            this.multiAttorney = [];
            this.customerDoc = [];
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
        }
    }
    //Method for append data into fields
    editClickHandler(id) {
        let opdate;
        this.angForm.controls['AC_TYPE'].disable();
        this.currentAccountMasterService.getFormData(id).subscribe(data => {
            this.updatecheckdata = data;
            if (data.SYSCHNG_LOGIN == null) {
                this.showButton = false;
                this.updateShow = true;
                this.newbtnShow = true;
            }
            else {
                this.showButton = false;
                this.updateShow = false;
                this.newbtnShow = true;
            }
            this.updateID = data.id;
            this.getCustomer(data.AC_CUSTID);
            //get nominee to edit
            this.multiNominee = data.nomineeDetails;
            //get joint accounts to edit
            this.multiJointAC = data.jointAccounts;
            //get attorney to edit
            this.multiAttorney = data.powerOfAttorney;
            this.selectedValue = data.AC_TYPE;
            this.ngCategory = data.AC_CATG;
            this.ngOccupation = data.AC_OPR_CODE;
            this.ngBalCategory = data.AC_BALCATG;
            this.ngIntCategory = data.AC_INTCATA;
            if ((data.AC_INTROBRANCH != null && data.AC_INTROID != null && data.AC_INTRACNO != null) || (data.AC_INTROBRANCH != "" && data.AC_INTROID != "" && data.AC_INTRACNO != "")) {
                this.code = data.AC_INTROBRANCH,
                    this.acno = Number(data.AC_INTROID),
                    this.obj = [this.acno, this.code];
                this.allScheme.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (element.value == this.acno) {
                        this.getschemename = element.name;
                    }
                }));
                switch (this.getschemename) {
                    case 'SB':
                        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
                            this.introducerACNo = data;
                        });
                        break;
                    case 'SH':
                        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
                            this.introducerACNo = data;
                        });
                        break;
                    case 'CA':
                        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
                            this.introducerACNo = data;
                        });
                        break;
                    case 'LN':
                        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
                            this.introducerACNo = data;
                        });
                        break;
                    case 'TD':
                        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
                            this.introducerACNo = data;
                        });
                        break;
                    case 'DS':
                        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
                            this.introducerACNo = data;
                        });
                        break;
                    case 'CC':
                        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
                            this.introducerACNo = data;
                        });
                        break;
                    case 'GS':
                        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
                            this.introducerACNo = data;
                        });
                        break;
                    case 'PG':
                        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
                            this.introducerACNo = data;
                        });
                        break;
                    case 'AG':
                        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
                            this.introducerACNo = data;
                        });
                        break;
                    case 'IV':
                        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
                            this.introducerACNo = data;
                        });
                        break;
                }
                this.ngIntroducer = Number(data.AC_INTRACNO);
            }
            else {
                this.code = null;
                this.acno = null;
                this.obj = null;
            }
            this.angForm.patchValue({
                'AC_ACNOTYPE': data.AC_ACNOTYPE,
                'AC_NO': data.AC_NO,
                'AC_PROPRITOR_NAME': data.AC_PROPRITOR_NAME,
                'AC_OPDATE': (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? opdate = '' : opdate = data.AC_OPDATE,
                'AC_SCHMAMT': data.AC_SCHMAMT,
                'REF_ACNO': data.REF_ACNO,
                'AC_IS_RECOVERY': data.AC_IS_RECOVERY,
                'BANKACNO': data.BANKACNO,
                //minor and introducer
                'AC_MINOR': data.AC_MINOR,
                'AC_MBDATE': data.AC_MBDATE,
                'AC_GRDNAME': data.AC_GRDNAME,
                'AC_GRDRELE': data.AC_GRDRELE,
                'AC_INTRNAME': data.AC_INTRNAME,
                'SIGNATURE_AUTHORITY': data.SIGNATURE_AUTHORITY,
                AC_TYPE: data.AC_TYPE
            });
            this.selectedValue = data.AC_TYPE;
        });
    }
    //Method for update data 
    updateData() {
        let opdate;
        this.angForm.controls['AC_TYPE'].enable();
        let data = this.angForm.value;
        if (data.AC_ADDFLAG == true) {
            this.addType = 'P';
        }
        else if (data.AC_ADDFLAG == false) {
            this.addType = 'T';
        }
        if (this.angForm.controls['AC_TCTCODE'].value == "") {
            data['AC_TCTCODE '] = null;
        }
        data['AC_TYPE'] = this.selectedValue;
        data['AC_ADDTYPE'] = this.addType;
        data['NomineeData'] = this.multiNominee;
        data['JointAccountData'] = this.multiJointAC;
        data['PowerOfAttorneyData'] = this.multiAttorney;
        data['AC_CATG'] = this.ngCategory;
        data['AC_OPR_CODE'] = this.ngOccupation;
        data['AC_BALCATG'] = this.ngBalCategory;
        data['AC_INTCATA'] = this.ngIntCategory;
        data['AC_INTROBRANCH'] = this.code;
        data['AC_INTROID'] = this.acno;
        data['AC_INTRACNO'] = this.ngIntroducer;
        data['id'] = this.updateID;
        if (this.updatecheckdata.AC_OPDATE != this.openingDate) {
            (this.openingDate == 'Invalid date' || this.openingDate == '' || this.openingDate == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = this.openingDate, data['AC_OPDATE'] = moment__WEBPACK_IMPORTED_MODULE_9__(opdate).format('DD/MM/YYYY'));
        }
        else {
            data['AC_OPDATE'] = this.openingDate;
        }
        this.currentAccountMasterService.updateData(data).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Success!', 'Record Updated Successfully !', 'success');
            this.showButton = true;
            this.updateShow = false;
            this.newbtnShow = false;
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.ajax.reload();
            });
            this.multiNominee = [];
            this.multiJointAC = [];
            this.multiAttorney = [];
            this.customerDoc = [];
            this.resetForm();
        });
    }
    //reset function while update
    // addNewData() {
    //   this.angForm.controls['AC_TYPE'].enable()
    //   this.showButton = true;
    //   this.updateShow = false;
    //   this.newbtnShow = false;
    //   this.multiNominee = []
    //   this.multiJointAC = []
    //   this.multiAttorney = []
    //   this.customerDoc = []
    //   this.tempAddress = true
    //   this.resetForm();
    //   this.getSystemParaDate()
    // }
    addNewData() {
        this.angForm.controls['AC_TYPE'].enable();
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.multiNominee = [];
        this.multiJointAC = [];
        this.multiAttorney = [];
        this.customerDoc = [];
        this.tempAddress = true;
        this.acno = null;
        this.ngIntroducer = null;
        this.ngCategory = null;
        this.ngBalCategory = null;
        this.ngIntCategory = null;
        this.ngOccupation = null;
        this.resetForm();
        this.getSystemParaDate();
    }
    //Method for delete data
    delClickHandler(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want to delete Current Account master data.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.currentAccountMasterService.deleteData(id).subscribe(data1 => {
                    this.currentAccountMaster = data1;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
                }), (error) => {
                    console.log(error);
                };
                // to reload after delete of data
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.ajax.reload();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'Your data is safe.', 'error');
            }
        });
    }
    ngAfterViewInit() {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then((dtInstance) => {
            $('#mastertable tfoot tr').appendTo('#mastertable thead');
            dtInstance.columns().every(function () {
                const that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (this['value'] != '') {
                        that
                            .search(this['value'])
                            .draw();
                    }
                    else {
                        that
                            .search(this['value'])
                            .draw();
                    }
                });
            });
        });
    }
    // Reset Function
    resetForm() {
        this.resetNominee();
        this.resetJointAC();
        this.resetAttorney();
        this.PowerofAttorneyTrue = false;
        this.JointAccountsTrue = false;
        this.nomineeTrue = false;
        this.customerDoc = [];
        this.angForm.controls['AC_TYPE'].enable();
        this.tempAddress = true;
        this.selectedValue = null;
        this.newcustid = null;
        this.ngCategory = null;
        this.ngOccupation = null;
        this.ngBalCategory = null;
        this.ngIntCategory = null;
        this.ngCity = null;
        this.code = null;
        this.acno = null;
        this.ngIntroducer = null;
        this.ngNcity = null;
        this.jointID = null;
        this.createForm();
        this.getSystemParaDate();
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
    rerender() {
        this.dtElement.dtInstance.then((dtInstance) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
        });
    }
    getSystemParaDate() {
        this.systemParameter.getFormData(1).subscribe(data => {
            this.tempopendate = data.CURRENT_DATE;
            this.openingDate = data.CURRENT_DATE;
            this.ngappointeddate = data.CURRENT_DATE;
            if (data.ON_LINE === true) {
                this.angForm.controls['AC_OPDATE'].disable();
            }
            else {
                this.angForm.controls['AC_OPDATE'].enable();
            }
        });
    }
    viewImagePreview(ele, id) {
        this.selectedImagePreview = id;
    }
    onCloseModal() {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }
    getBranch() {
        this.getIntroducer();
    }
    getIntro(event) {
        this.getschemename = event.name;
        this.getIntroducer();
    }
    //get account no according scheme for introducer
    getIntroducer() {
        this.obj = [this.acno, this.code];
        switch (this.getschemename) {
            case 'SB':
                this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'SH':
                this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'CA':
                this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'LN':
                this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'TD':
                this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'DS':
                this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'CC':
                this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'GS':
                this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'PG':
                this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'AG':
                this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'IV':
                this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
        }
    }
    //get introducer name according account no
    getIntroducerName(value) {
        this.angForm.patchValue({
            AC_INTRNAME: value.name
        });
    }
    //calculate age for minor details
    ageCalculator(birthDate) {
        let showAge;
        if (birthDate) {
            showAge = moment__WEBPACK_IMPORTED_MODULE_9__().diff(moment__WEBPACK_IMPORTED_MODULE_9__(birthDate, "DD-MM-YYYY"), 'years');
            if (showAge <= 18) {
                this.angForm.controls['AC_MINOR'].setValue(true);
                this.angForm.controls['AC_GRDNAME'].enable();
                this.angForm.controls['AC_GRDRELE'].enable();
                this.angForm.controls['SIGNATURE_AUTHORITY'].enable();
                this.angForm.patchValue({
                    AC_MBDATE: this.angForm.controls['AC_BIRTH_DT'].value
                });
                this.introducerReq = true;
            }
            else if (showAge > 18) {
                this.angForm.controls['AC_MINOR'].setValue(false);
                this.angForm.controls['AC_GRDNAME'].disable();
                this.angForm.controls['AC_GRDRELE'].disable();
                this.angForm.controls['SIGNATURE_AUTHORITY'].disable();
                this.angForm.controls['AC_GRDNAME'].reset();
                this.angForm.controls['AC_GRDRELE'].reset();
                this.angForm.controls['SIGNATURE_AUTHORITY'].reset();
                this.angForm.controls['AC_MBDATE'].reset();
                this.introducerReq = false;
            }
        }
    }
    //Nominee
    addNominee() {
        var _a, _b;
        const formVal = this.angForm.value;
        let date1 = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_NDATE).format('DD/MM/YYYY');
        this.cityName = true;
        this.NbirthDate = date1;
        var object = {
            AC_NNAME: formVal.AC_NNAME,
            AC_NRELA: formVal.AC_NRELA,
            AC_NDATE: this.NbirthDate,
            AGE: formVal.AGE,
            AC_NHONO: formVal.AC_NHONO,
            AC_NWARD: formVal.AC_NWARD,
            AC_NADDR: formVal.AC_NADDR,
            AC_NGALLI: formVal.AC_NGALLI,
            AC_NAREA: formVal.AC_NAREA,
            AC_NCTCODE: (_a = formVal.AC_NCTCODE) === null || _a === void 0 ? void 0 : _a.id,
            AC_NPIN: formVal.AC_NPIN,
            AC_CITYNAME: (_b = formVal.AC_NCTCODE) === null || _b === void 0 ? void 0 : _b.CITY_NAME
        };
        if (formVal.AC_NNAME == "" || formVal.AC_NNAME == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
        }
        else if (formVal.AC_NNAME != "") {
            if (formVal.AC_NRELA == "" || formVal.AC_NRELA == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
            }
            else if (formVal.AC_NRELA != "") {
                if (formVal.AC_NDATE == "" || formVal.AC_NDATE == null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
                }
                else if (formVal.AC_NCTCODE != "") {
                    if (formVal.AC_NCTCODE == "" || formVal.AC_NCTCODE == null) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
                    }
                    else {
                        if (this.multiNominee.find(ob => ob['AC_NNAME'].toUpperCase() === formVal.AC_NNAME.toUpperCase())) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'This Nominee is Already Exists!', 'error');
                        }
                        else {
                            object['AC_NCTCODE'] = formVal.AC_NCTCODE.id,
                                object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME;
                            this.multiNominee.push(object);
                            this.resetNominee();
                        }
                    }
                }
            }
            else {
                object['AC_NCTCODE'] = formVal.AC_NCTCODE.id;
                object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME;
                this.multiNominee.push(object);
                this.resetNominee();
            }
        }
        else {
            object['AC_NCTCODE'] = formVal.AC_NCTCODE.id;
            object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME;
            this.multiNominee.push(object);
            this.resetNominee();
        }
    }
    editNominee(id) {
        this.nomineeIndex = id;
        this.nomineeID = this.multiNominee[id].id;
        this.nomineedataedit = this.multiNominee[id];
        this.nomineeTrue = true;
        this.nomineeShowButton = false;
        this.nomineeUpdateShow = true;
        this.ngnomineedate = this.multiNominee[id].AC_NDATE;
        this.ngNcity = this.multiNominee[id].AC_CITYNAME,
            this.angForm.patchValue({
                AC_NNAME: this.multiNominee[id].AC_NNAME,
                AC_NRELA: this.multiNominee[id].AC_NRELA,
                AGE: this.multiNominee[id].AGE,
                AC_NHONO: this.multiNominee[id].AC_NHONO,
                AC_NWARD: this.multiNominee[id].AC_NWARD,
                AC_NADDR: this.multiNominee[id].AC_NADDR,
                AC_NGALLI: this.multiNominee[id].AC_NGALLI,
                AC_NAREA: this.multiNominee[id].AC_NAREA,
                AC_NPIN: this.multiNominee[id].AC_NPIN,
            });
    }
    updateNominee() {
        let index = this.nomineeIndex;
        this.nomineeShowButton = true;
        this.nomineeUpdateShow = false;
        let date1;
        const formVal = this.angForm.value;
        if (this.nomineedataedit.AC_NDATE != formVal.AC_NDATE) {
            date1 = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_NDATE).format('DD/MM/YYYY');
        }
        else {
            date1 = formVal.AC_NDATE;
        }
        var object = {
            AC_NNAME: formVal.AC_NNAME,
            AC_NRELA: formVal.AC_NRELA,
            AC_NDATE: date1,
            AGE: formVal.AGE,
            AC_NHONO: formVal.AC_NHONO,
            AC_NWARD: formVal.AC_NWARD,
            AC_NADDR: formVal.AC_NADDR,
            AC_NGALLI: formVal.AC_NGALLI,
            AC_NAREA: formVal.AC_NAREA,
            AC_NCTCODE: formVal.AC_NCTCODE.id,
            AC_NPIN: formVal.AC_NPIN,
            AC_CITYNAME: formVal.AC_NCTCODE.CITY_NAME,
            id: this.nomineeID
        };
        if (typeof (formVal.AC_NCTCODE) == 'string') {
            object['AC_CITYNAME'] = formVal.AC_NCTCODE;
        }
        else {
            object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME;
        }
        if (formVal.AC_NNAME == "" || formVal.AC_NNAME == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Insert Mandatory Record For Nominee");
        }
        else if (formVal.AC_NNAME != "") {
            if (formVal.AC_NRELA == "" || formVal.AC_NRELA == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
            }
            else if (formVal.AC_NRELA != "") {
                if (formVal.AC_NDATE == "" || formVal.AC_NDATE == null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
                }
                else if (formVal.AC_NCTCODE != "") {
                    if (formVal.AC_NCTCODE == "" || formVal.AC_NCTCODE == null) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
                    }
                    else {
                        this.multiNominee[index] = object;
                        this.resetNominee();
                    }
                }
            }
            else {
                this.multiNominee[index] = object;
                this.resetNominee();
            }
        }
        else {
            this.multiNominee[index] = object;
            this.resetNominee();
        }
    }
    delNominee(id) {
        this.multiNominee.splice(id, 1);
    }
    resetNominee() {
        this.angForm.controls['AC_NNAME'].reset();
        this.angForm.controls['AC_NRELA'].reset();
        this.angForm.controls['AC_NDATE'].reset();
        this.angForm.controls['AGE'].reset();
        this.angForm.controls['AC_NHONO'].reset();
        this.angForm.controls['AC_NWARD'].reset();
        this.angForm.controls['AC_NADDR'].reset();
        this.angForm.controls['AC_NGALLI'].reset();
        this.angForm.controls['AC_NAREA'].reset();
        this.angForm.controls['AC_NCTCODE'].reset();
        this.angForm.controls['AC_NPIN'].reset();
    }
    getJointCustomer(event) {
        this.joint = event.name;
        this.tempjoint = event.value;
        this.customerIdService.getFormData(event.value).subscribe(data => {
            this.angForm.patchValue({
                JOINT_ACNAME: data.AC_NAME
            });
        });
    }
    addJointAcccount() {
        const formVal = this.angForm.value;
        let value;
        if (formVal.OPERATOR == true) {
            value = 'Yes';
        }
        else {
            value = 'No';
        }
        var object = {
            JOINT_AC_CUSTID: this.joint,
            JOINT_ACNAME: formVal.JOINT_ACNAME,
            OPERATOR: value,
        };
        if (formVal.AC_CUSTID != "") {
            if (object.JOINT_AC_CUSTID != undefined) {
                if (this.newcustid != this.joint) {
                    if (this.multiJointAC.length == 0) {
                        this.multiJointAC.push(object);
                        this.resetJointAC();
                        this.jointID = null;
                    }
                    else {
                        if (this.multiJointAC.find(ob => ob['JOINT_AC_CUSTID'] == this.joint)) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'This Customer is Already Joint Account Holder', 'warning');
                        }
                        else {
                            this.multiJointAC.push(object);
                            this.resetJointAC();
                            this.jointID = null;
                        }
                    }
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', "Please Select Different Customer id", 'warning');
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', "Please Select Guarantor Customer Id", 'warning');
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', "Please Select Customer Id", 'warning');
        }
    }
    editJointAc(id) {
        this.jointIndex = id;
        this.jointACID = this.multiJointAC[id].id;
        this.JointAccountsTrue = true;
        this.jointShowButton = false;
        this.jointUpdateShow = true;
        this.angForm.patchValue({
            JOINT_AC_CUSTID: this.multiJointAC[id].JOINT_AC_CUSTID.toString(),
            JOINT_ACNAME: this.multiJointAC[id].JOINT_ACNAME,
            OPERATOR: this.multiJointAC[id].OPERATOR
        });
    }
    updateJointAcccount() {
        let index = this.jointIndex;
        this.jointShowButton = true;
        this.jointUpdateShow = false;
        const formVal = this.angForm.value;
        var object = {
            JOINT_AC_CUSTID: formVal.JOINT_AC_CUSTID,
            JOINT_ACNAME: formVal.JOINT_ACNAME,
            OPERATOR: formVal.OPERATOR,
            id: this.jointACID
        };
        if (object.JOINT_AC_CUSTID != undefined) {
            if (this.newcustid != this.jointID) {
                if (this.multiJointAC.length == 0) {
                    this.multiJointAC[index] = object;
                }
                else {
                    if (this.multiJointAC.find(ob => ob['JOINT_AC_CUSTID'] === formVal.JOINT_AC_CUSTID)) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("This Customer is Already Exists", "error");
                    }
                    else {
                        this.multiJointAC[index] = object;
                    }
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Different Customer id", "error");
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Customer Id", "error");
        }
        this.resetJointAC();
    }
    delJointAc(id) {
        this.multiJointAC.splice(id, 1);
    }
    resetJointAC() {
        // this.jointID = null
        // this.jointID.handleClearClick();
        // this.angForm.controls['JOINT_AC_CUSTID'].reset();
        this.angForm.controls['JOINT_ACNAME'].reset();
        this.angForm.patchValue({
            JOINT_ACNAME: ''
        });
        this.jointID.clearFilter();
        // .handleClearClick();
    }
    clearFilter() {
        this.jointID = '';
    }
    //power of attorney
    addAttorney() {
        const formVal = this.angForm.value;
        let temdate;
        let apdate;
        if (this.tempopendate != this.ngappointeddate) {
            temdate = (formVal.DATE_APPOINTED == '' || formVal.DATE_APPOINTED == 'Invalid date') ? apdate = '' : apdate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.DATE_APPOINTED).format('DD/MM/YYYY');
        }
        else {
            temdate = this.ngappointeddate;
        }
        var object = {
            ATTERONEY_NAME: formVal.ATTERONEY_NAME,
            DATE_APPOINTED: temdate,
            DATE_EXPIRY: moment__WEBPACK_IMPORTED_MODULE_9__(formVal.DATE_EXPIRY).format('DD/MM/YYYY')
        };
        if (formVal.ATTERONEY_NAME == "" || formVal.ATTERONEY_NAME == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'Please Insert Mandatory Record For Power Of Attorney!', 'warning');
        }
        else if (formVal.ATTERONEY_NAME != "") {
            if (formVal.DATE_APPOINTED == "" || formVal.DATE_APPOINTED == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'Please Insert Mandatory Record For Power Of Attorney!', 'warning');
            }
            else if (formVal.DATE_APPOINTED != "") {
                if (formVal.DATE_EXPIRY == "" || formVal.DATE_EXPIRY == null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'Please Insert Mandatory Record For Power Of Attorney!', 'warning');
                }
                else {
                    if (this.multiAttorney.find(ob => ob['ATTERONEY_NAME'].toUpperCase() === formVal.ATTERONEY_NAME.toUpperCase())) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('', 'This Attorney is Already Exists!', 'error');
                    }
                    else {
                        this.multiAttorney.push(object);
                        this.resetAttorney();
                    }
                }
            }
            else {
                this.multiAttorney.push(object);
                this.resetAttorney();
            }
        }
        else {
            this.multiAttorney.push(object);
            this.resetAttorney();
        }
    }
    ispowerof($event) {
        if ($event.target.checked) {
            this.PowerofAttorneyTrue = true;
            this.DATE_EXPIRY = true;
            this.DATE_APPOINTED = true;
            this.ATTERONEY_NAME = true;
        }
        else {
            this.PowerofAttorneyTrue = false;
            this.DATE_EXPIRY = false;
            this.DATE_APPOINTED = false;
            this.ATTERONEY_NAME = false;
        }
    }
    jointAccount($event) {
        if ($event.target.checked) {
            this.JointAccountsTrue = true;
        }
        else {
            this.JointAccountsTrue = false;
        }
    }
    nominee($event) {
        if ($event.target.checked) {
            this.nomineeTrue = true;
        }
        else {
            this.nomineeTrue = false;
        }
    }
    OpenLink(val) {
        if (val == 1) {
            this.nomineeTrue = !this.nomineeTrue;
            this.JointAccountsTrue = false;
            this.PowerofAttorneyTrue = false;
        }
        if (val == 2) {
            this.JointAccountsTrue = !this.JointAccountsTrue;
            this.nomineeTrue = false;
            this.PowerofAttorneyTrue = false;
        }
        if (val == 3) {
            this.PowerofAttorneyTrue = !this.PowerofAttorneyTrue;
            this.JointAccountsTrue = false;
            this.nomineeTrue = false;
        }
    }
    editAttorney(id) {
        this.attorneyIndex = id;
        this.attorneyID = this.multiAttorney[id].id;
        this.tempupdateattorny = this.multiAttorney[id];
        this.PowerofAttorneyTrue = true;
        this.attorneyShowButton = false;
        this.attorneyUpdateShow = true;
        this.angForm.patchValue({
            ATTERONEY_NAME: this.multiAttorney[id].ATTERONEY_NAME,
            DATE_APPOINTED: this.multiAttorney[id].DATE_APPOINTED,
            DATE_EXPIRY: this.multiAttorney[id].DATE_EXPIRY
        });
    }
    updateAttorney() {
        let index = this.attorneyIndex;
        this.attorneyShowButton = true;
        this.attorneyUpdateShow = false;
        const formVal = this.angForm.value;
        let appdate;
        let EXdate;
        let date1;
        let date2;
        if (this.tempupdateattorny.DATE_APPOINTED != formVal.DATE_APPOINTED) {
            date1 = (formVal.DATE_APPOINTED == '' || formVal.DATE_APPOINTED == 'Invalid date' || formVal.DATE_APPOINTED == null) ? appdate = '' : appdate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.DATE_APPOINTED).format('DD/MM/YYYY');
        }
        else {
            date1 = formVal.DATE_APPOINTED;
        }
        if (this.tempupdateattorny.DATE_EXPIRY != formVal.DATE_EXPIRY) {
            date2 = (formVal.DATE_EXPIRY == '' || formVal.DATE_EXPIRY == 'Invalid date' || formVal.DATE_EXPIRY == null) ? EXdate = '' : EXdate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.DATE_EXPIRY).format('DD/MM/YYYY');
        }
        else {
            date2 = formVal.DATE_EXPIRY;
        }
        var object = {
            ATTERONEY_NAME: formVal.ATTERONEY_NAME,
            DATE_APPOINTED: date1,
            DATE_EXPIRY: date2,
            id: this.attorneyID
        };
        if (formVal.ATTERONEY_NAME == "" || formVal.ATTERONEY_NAME == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Insert Mandatory Record For Power Of Attorney");
        }
        else if (formVal.ATTERONEY_NAME != "") {
            if (formVal.DATE_APPOINTED == "" || formVal.DATE_APPOINTED == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Insert Mandatory Record For Power Of Attorney");
            }
            else if (formVal.DATE_APPOINTED != "") {
                if (formVal.DATE_EXPIRY == "" || formVal.DATE_EXPIRY == null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Insert Mandatory Record For Power Of Attorney");
                }
                else {
                    this.multiAttorney[index] = object;
                    this.resetAttorney();
                }
            }
            else {
                this.multiAttorney[index] = object;
                this.resetAttorney();
            }
        }
        else {
            this.multiAttorney[index] = object;
            this.resetAttorney();
        }
    }
    delAttorney(id) {
        this.multiAttorney.splice(id, 1);
    }
    resetAttorney() {
        this.angForm.controls['ATTERONEY_NAME'].reset();
        this.angForm.controls['DATE_APPOINTED'].reset();
        this.angForm.controls['DATE_EXPIRY'].reset();
    }
    next() {
        this.nextButton != this.nextButton;
    }
    switchNgBTab(id) {
        this.ctdTabset.select(id);
    }
    checkdate(ele) {
        let date = document.getElementById("DATE_APPOINTED").value;
        let date1 = document.getElementById("DATE_EXPIRY").value;
        if (date1 != "") {
            if (moment__WEBPACK_IMPORTED_MODULE_9__(date).isAfter(date1)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'Expiry Date must be greater than Appointed date', 'error');
                this.resetexpirydate = "";
                this.angForm.controls['DATE_EXPIRY'].reset();
            }
        }
    }
    age() {
        if (this.angForm.controls['AGE'].value > 100) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'Please Input Proper Age', 'error');
            this.angForm.controls['AGE'].reset();
        }
    }
    decimalAllContent($event) {
        let value = Number($event.target.value);
        let data = value.toFixed(2);
        $event.target.value = data;
    }
    //approve account
    Approve() {
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = {
            id: this.updateID,
            user: user.id
        };
        this.currentAccountMasterService.approve(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Approved', 'Current Account approved successfully', 'success');
            var button = document.getElementById('triggerhide');
            button.click();
            this.getUserData.emit('welcome to stackoverflow!');
        }, err => {
            console.log('something is wrong');
        });
    }
    //reject account
    reject() {
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = {
            id: this.updateID,
            user: user.id
        };
        this.currentAccountMasterService.reject(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Rejected', 'Current Account rejected successfully', 'success');
            var button = document.getElementById('triggerhide');
            button.click();
        }, err => {
            console.log('something is wrong');
        });
    }
}
CurrentAccountMasterComponent.ɵfac = function CurrentAccountMasterComponent_Factory(t) { return new (t || CurrentAccountMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_current_account_master_service__WEBPACK_IMPORTED_MODULE_11__["CurrentAccountMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["CustomerIDMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["categoryMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["DirectorMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["cityMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_operation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["OperationMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["IntrestCategoryMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_minimum_balance_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["MinimumBalanceMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_22__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_23__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
CurrentAccountMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CurrentAccountMasterComponent, selectors: [["app-current-account-master"]], viewQuery: function CurrentAccountMasterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ctdTabset = _t.first);
    } }, inputs: { childMessage: "childMessage" }, outputs: { getUserData: "getUserData" }, decls: 86, vars: 17, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [1, "card-block"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "col-sm-3"], [1, "form-group", "form-primary", "form-static-label"], ["autofocus", "", 1, "border-lable-flt"], ["bindValue", "value", "id", "AC_TYPE", "formControlName", "AC_TYPE", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme", 3, "ngModel", "disabled", "ngClass", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "AC_TYPE"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-4"], [1, "border-lable-flt"], ["id", "AC_CUSTID", "bindValue", "value", "formControlName", "AC_CUSTID", "title", "Compulsory Selection", "required", "", "placeholder", "Customer Id", 2, "width", "85%", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "AC_CUSTID"], ["id", "custicon", "placement", "bottom", "ngbTooltip", "Add New Customer", 1, "fa", "fa-fw", "fa-plus-circle", "field-icon", 3, "click"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "newCustomerEvent"], [1, "app-modal-footer"], ["type", "button", "id", "triggerhide", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "col-sm-1"], [1, "form-group", "input-group"], ["type", "text", "name", "AC_TITLE", "placeholder", " ", "id", "AC_TITLE", "formControlName", "AC_TITLE", "disabled", "", 1, "form-control"], ["for", "AC_TITLE"], [1, "col-sm"], ["type", "text", "name", "AC_NAME", "placeholder", " ", "id", "AC_NAME", "formControlName", "AC_NAME", "disabled", "", 1, "form-control"], ["for", "AC_NAME"], [1, "col-sm-2", 2, "float", "right"], ["type", "text", "name", "BANKACNO", "placeholder", " ", "id", "BANKACNO", "formControlName", "BANKACNO", "disabled", "", 1, "form-control"], ["for", "BANKACNO"], ["class", "col-sm-2", 4, "ngIf"], [1, "nav-pills", "tabFont"], ["ctdTabset", "ngbTabset"], ["title", "Basic"], ["ngbTabContent", ""], ["title", "Address", "role", "tab", "data-toggle", "tab", "id", "address"], ["title", "Introducer Details", "id", "introducer"], ["title", "Nominee/Joint a/cs/Attorney", "id", "nominee"], ["title", "Documents", "id", "documents"], ["class", "row", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "col-sm-2"], [2, "color", "#1e5bc5"], [1, "m-t-15"], [1, "card", "border-primary"], [1, "card-block", "highlight"], ["type", "text", "name", "AC_PROPRITOR_NAME", "placeholder", " ", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z - / . (Space)", "id", "AC_PROPRITOR_NAME", "formControlName", "AC_PROPRITOR_NAME", 1, "form-control", 2, "text-transform", "capitalize", 3, "keypress"], ["for", "AC_PROPRITOR_NAME"], ["type", "text", "name", "AC_MEMBTYPE", "placeholder", " ", "id", "AC_MEMBTYPE", "formControlName", "AC_MEMBTYPE", "disabled", "", 1, "form-control"], ["for", "AC_MEMBTYPE"], ["type", "text", "name", "AC_MEMBNO", "placeholder", " ", "id", "AC_MEMBNO", "formControlName", "AC_MEMBNO", "disabled", "", 1, "form-control"], ["for", "AC_MEMBNO"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_OPDATE", "id", "AC_OPDATE", "required", "", "disabled", "", "formControlName", "AC_OPDATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "maxDate", "bsConfig", "ngClass", "bsValue", "ngModelChange", "focusout"], ["date", ""], ["for", "AC_OPDATE"], ["type", "text", "placeholder", "Datepicker", "name", "AC_BIRTH_DT", "id", "AC_BIRTH_DT", "formControlName", "AC_BIRTH_DT", "disabled", "", "bsDatepicker", "", 1, "form-control", 3, "max", "bsConfig", "bsValue", "focusout"], ["for", "AC_BIRTH_DT"], [1, "border-lable-flt", 2, "background", "transparent"], ["type", "text", "name", "REF_ACNO", "placeholder", " ", "id", "REF_ACNO", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "maxlength", "25", "formControlName", "REF_ACNO", 1, "form-control", 3, "keypress"], ["for", "REF_ACNO"], ["type", "text", "name", "AC_CAST", "placeholder", " ", "id", "AC_CAST", "formControlName", "AC_CAST", "disabled", "", 1, "form-control"], ["for", "AC_CAST"], ["type", "text", "name", "AC_OCODE", "placeholder", " ", "id", "AC_OCODE", "formControlName", "AC_OCODE", "disabled", "", 1, "form-control"], ["for", "AC_OCODE"], ["id", "AC_CATG", "bindValue", "value", "formControlName", "AC_CATG", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Category", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "AC_CATG"], ["id", "AC_OPR_CODE", "bindValue", "value", "formControlName", "AC_OPR_CODE", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Operation", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "AC_OPR_CODE"], ["id", "AC_BALCATG", "bindValue", "value", "formControlName", "AC_BALCATG", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Balance Category ", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "BC_NAME"], ["id", "AC_INTCATA", "bindValue", "value", "formControlName", "AC_INTCATA", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Interest Category", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "AC_INTCATA"], ["type", "text", "name", "AC_PANNO", "placeholder", " ", "id", "AC_PANNO", "formControlName", "AC_PANNO", "disabled", "", 1, "form-control"], ["for", "AC_PANNO"], ["type", "text", "name", "AC_SCHMAMT", "placeholder", " ", "id", "AC_SCHMAMT", "pattern", "\\d{1,20}(\\.\\d{2})?", "maxlength", "6", "title", "Input allowed only  0-9", "formControlName", "AC_SCHMAMT", 1, "form-control", 2, "text-align", "right", 3, "value", "focusout", "keypress"], ["for", "AC_SCHMAMT"], [1, "checkbox", "checkbox-primary"], [1, "border-checkbox-group", "border-checkbox-group-primary"], ["type", "checkbox", "id", "AC_IS_RECOVERY", "formControlName", "AC_IS_RECOVERY", 1, "border-checkbox"], ["for", "AC_IS_RECOVERY", 1, "border-checkbox-label"], [1, "col-sm", 2, "float", "right", "margin-top", "6px"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [2, "text-align", "center", "font-size", "16px"], ["type", "text", "name", "AC_HONO", "placeholder", " ", "id", "AC_HONO", "formControlName", "AC_HONO", "disabled", "", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_HONO"], ["type", "text", "name", "AC_WARD", "placeholder", " ", "id", "AC_WARD", "formControlName", "AC_WARD", "disabled", "", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_WARD"], ["type", "text", "name", "AC_GALLI", "placeholder", " ", "id", "AC_GALLI", "formControlName", "AC_GALLI", "disabled", "", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_GALLI"], ["type", "text", "name", "AC_AREA", "placeholder", " ", "id", "AC_AREA", "formControlName", "AC_AREA", "disabled", "", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_AREA"], ["type", "text", "name", "AC_ADDR", "placeholder", " ", "id", "AC_ADDR", "formControlName", "AC_ADDR", "disabled", "", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_ADDR"], ["type", "text", "name", "AC_CTCODE", "bindValue", "id", "placeholder", " ", "id", "AC_CTCODE", "formControlName", "AC_CTCODE", "disabled", "", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_CTCODE"], ["type", "text", "name", "AC_PIN", "placeholder", " ", "id", "AC_PIN", "formControlName", "AC_PIN", "disabled", "", 1, "form-control"], ["for", "AC_PIN"], ["type", "text", "name", "AC_PHNO", "placeholder", " ", "id", "AC_PHNO", "formControlName", "AC_PHNO", "disabled", "", 1, "form-control"], ["for", "AC_PHNO"], ["type", "text", "name", "AC_MOBNO", "placeholder", " ", "id", "AC_MOBNO", "formControlName", "AC_MOBNO", "disabled", "", 1, "form-control"], ["for", "AC_MOBNO"], ["type", "text", "name", "AC_EMAIL", "placeholder", " ", "id", "AC_EMAIL", "formControlName", "AC_EMAIL", "disabled", "", 1, "form-control"], ["for", "AC_EMAIL"], [1, "col-sm-5"], ["type", "checkbox", "id", "AC_ADDFLAG", "formControlName", "AC_ADDFLAG", 1, "border-checkbox", 3, "click"], ["for", "AC_ADDFLAG", 1, "border-checkbox-label"], ["type", "text", "name", "AC_THONO", "placeholder", " ", "id", "AC_THONO", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "25", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "formControlName", "AC_THONO", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_THONO"], ["class", "\n                                                          form-group form-primary form-static-label\n                                                        ", "class", "alert alert-danger", 4, "ngIf"], ["type", "text", "name", "AC_TWARD", "placeholder", " ", "id", "AC_TWARD", "pattern", "^[A-Za-z\\./ -]+$", "maxlength", "10", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_TWARD", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_TWARD"], ["type", "text", "name", "AC_TGALLI", "placeholder", " ", "id", "AC_TGALLI", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "formControlName", "AC_TGALLI", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_TGALLI"], ["type", "text", "name", "AC_TAREA", "placeholder", " ", "id", "AC_TAREA", "pattern", "^[A-Za-z\\./ -]+$", "maxlength", "60", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_TAREA", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_TAREA"], ["type", "text", "name", "AC_TADDR", "placeholder", " ", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "id", "AC_TADDR", "formControlName", "AC_TADDR", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_TADDR"], ["id", "AC_TCTCODE", "bindValue", "id", "bindLabel", "CITY_NAME", "formControlName", "AC_TCTCODE", "title", "Compulsory Selection", "placeholder", "City", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "CITY_NAME"], ["type", "text", "name", "AC_TPIN", "placeholder", " ", "id", "AC_TPIN", "pattern", "^[0-9]+$", "minlength", "6", "maxlength", "6", "title", "Input allowed only  0-9", "formControlName", "AC_TPIN", 1, "form-control", 3, "keypress"], ["for", "AC_TPIN"], [2, "color", "dodgerblue"], ["id", "AC_INTROBRANCH", "bindValue", "value", "formControlName", "AC_INTROBRANCH", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "AC_INTROBRANCH"], ["id", "AC_INTROID", "bindValue", "value", "formControlName", "AC_INTROID", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Account Type", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "AC_INTROID"], ["id", "AC_INTRACNO", "bindValue", "value", "formControlName", "AC_INTRACNO", "bindLabel", "AC_NO", "title", "Compulsory Selection", "placeholder", "Account Number", 3, "ngModel", "ngClass", "ngModelChange", "focus"], ["for", "AC_INTRACNO"], ["type", "checkbox", "id", "nomineeId", 1, "border-checkbox", 3, "click"], ["for", "nomineeId", 1, "border-checkbox-label", 3, "ngClass"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], ["type", "checkbox", "id", "jointAccount", 1, "border-checkbox", 3, "click"], ["for", "jointAccount", 1, "border-checkbox-label", 3, "ngClass"], [2, "max-width", "10px"], [2, "max-width", "20px"], [2, "max-width", "15px"], ["type", "checkbox", "id", "powerofattorney", 1, "border-checkbox", 3, "click"], ["for", "powerofattorney", 1, "border-checkbox-label", 3, "ngClass"], ["type", "text", "name", "AC_NNAME", "placeholder", " ", "id", "AC_NNAME", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_NNAME", "maxlength", "100", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "AC_NNAME"], ["class", "\n                                                              form-group\n                                                              form-primary\n                                                              form-static-label\n                                                            ", "class", "alert alert-danger", 4, "ngIf"], ["type", "text", "name", "AC_NRELA", "placeholder", " ", "id", "AC_NRELA", "pattern", "^[A-Za-z\\./ -]+$", "maxlength", "25", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_NRELA", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "AC_NRELA"], ["type", "text", "placeholder", "Datepicker", "placeholder", "dd/mm/yyyy", "name", "AC_NDATE", "id", "AC_NDATE", "formControlName", "AC_NDATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "minDate", "bsConfig", "ngModelChange"], ["for", "AC_NDATE"], ["type", "text", "name", "AGE", "placeholder", " ", "pattern", "^[0-9]+$", "min", "1", "max", "100", "title", "Input allowed only 0-9", "id", "AGE", "formControlName", "AGE", 1, "form-control", 2, "text-align", "right", 3, "focusout", "keypress"], ["for", "AGE"], ["type", "text", "name", "AC_NHONO", "placeholder", " ", "id", "AC_NHONO", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "25", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "formControlName", "AC_NHONO", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_NHONO"], ["type", "text", "name", "AC_NWARD", "placeholder", " ", "id", "AC_NWARD", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "10", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_NWARD", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_NWARD"], ["type", "text", "name", "AC_NGALLI", "placeholder", " ", "id", "AC_NGALLI", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "40", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "formControlName", "AC_NGALLI", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_NGALLI"], ["type", "text", "name", "AC_NAREA", "placeholder", " ", "id", "AC_NAREA", "pattern", "^[A-Za-z\\./ -]+$", "maxlength", "60", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_NAREA", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_NAREA"], ["type", "text", "name", "AC_NADDR", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "id", "AC_NADDR", "formControlName", "AC_NADDR", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_NADDR"], ["id", "AC_NCTCODE", "bindLabel", "CITY_NAME", "formControlName", "AC_NCTCODE", "placeholder", "City", 3, "items", "ngModel", "ngClass", "ngModelChange"], ["for", "AC_NCTCODE"], ["type", "text", "name", "AC_NPIN", "placeholder", " ", "id", "AC_NPIN", "pattern", "^[0-9]+$", "minlength", "6", "maxlength", "6", "title", "Input allowed only  0-9", "formControlName", "AC_NPIN", 1, "form-control", 3, "keypress"], ["for", "AC_NPIN"], [1, "row", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "top", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], ["id", "deletebutton", "placement", "right", "ngbTooltip", "Delete", 1, "fa", "fa-fw", "fa-trash-o", 3, "click"], [1, "td_right", 3, "ngClass"], [1, "td_center", 3, "ngClass"], [1, "td_left", 3, "ngClass"], ["colspan", "12", 1, "no-data-available", 2, "text-align", "center"], ["id", "JOINT_AC_CUSTID", "bindValue", "value", "formControlName", "JOINT_AC_CUSTID", "title", "Compulsory Selection", "placeholder", "Customer Id", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "JOINT_AC_CUSTID"], ["type", "text", "name", "JOINT_ACNAME", "placeholder", " ", "id", "JOINT_ACNAME", "formControlName", "JOINT_ACNAME", "disabled", "", 1, "form-control"], ["for", "JOINT_ACNAME"], ["type", "checkbox", "name", "OPERATOR", "id", "operator", "formControlName", "OPERATOR", "checked", "", 1, "border-checkbox"], ["for", "operator", 1, "border-checkbox-label"], ["type", "button", "class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["colspan", "4", 1, "no-data-available", 2, "text-align", "center"], ["type", "text", "name", "ATTERONEY_NAME", "placeholder", " ", "id", "ATTERONEY_NAME", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "ATTERONEY_NAME", "maxlength", "100", 1, "form-control", 3, "keypress"], ["for", "ATTERONEY_NAME"], ["class", "\n                                                            form-group form-primary form-static-label\n                                                          ", "class", "alert alert-danger", 4, "ngIf"], ["type", "text", "placeholder", "Datepicker", "name", "DATE_APPOINTED", "placeholder", "dd/mm/yyyy", "id", "DATE_APPOINTED", "formControlName", "DATE_APPOINTED", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "maxDate", "ngModelChange"], ["for", "DATE_APPOINTED"], ["type", "text", "placeholder", "Datepicker", "name", "DATE_EXPIRY", "placeholder", "dd/mm/yyyy", "id", "DATE_EXPIRY", "formControlName", "DATE_EXPIRY", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "minDate", "ngModelChange", "bsValueChange"], ["for", "DATE_EXPIRY"], [3, "ngClass"], [1, "td_center", 2, "max-width", "15px", 3, "ngClass"], [2, "max-width", "25px"], ["alt", "docu", 1, "form-control", 2, "width", "100%", "height", "100%", 3, "src"], [1, "col-sm", 2, "float", "right"], [2, "align-items", "center"], ["placement", "right", "ngbTooltip", "Show Image", 1, "fa", "fa-fw", "fa-eye", "field-icon", 2, "font-size", "20px", "color", "#0f459b", "cursor", "pointer", 3, "click"], ["colspan", "3", 1, "no-data-available", 2, "text-align", "center"], [1, "card", "shadow"], ["id", "mastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions", "dtTrigger"], [1, "filters"], ["filters", ""], [1, "testing"], ["type", "text", "name", "AC_TYPE", 1, "form-control"], ["type", "text", "name", "AC_NO", 1, "form-control"], ["type", "text", "name", "AC_NAME", 1, "form-control"], ["type", "text", "name", "AC_CUSTID", 1, "form-control"], ["type", "text", "name", "AC_ADDR", 1, "form-control"], ["type", "text", "name", "AC_CTCODE", 1, "form-control"], ["type", "text", "name", "AC_PROPRITOR_NAME", 1, "form-control"], ["type", "text", "name", "AC_OPDATE", 1, "form-control"], ["type", "text", "name", "REF_ACNO", 1, "form-control"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], ["colspan", "9", 1, "no-data-available", 2, "text-align", "center"]], template: function CurrentAccountMasterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r229 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Current Account Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_Template_ng_select_ngModelChange_18_listener($event) { return ctx.selectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CurrentAccountMasterComponent_ng_option_19_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Scheme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CurrentAccountMasterComponent_div_24_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrentAccountMasterComponent_Template_ng_select_ngModelChange_28_listener($event) { return ctx.newcustid = $event; })("change", function CurrentAccountMasterComponent_Template_ng_select_change_28_listener($event) { return ctx.customer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CurrentAccountMasterComponent_ng_option_29_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Customer Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_Template_span_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r229); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37); return _r5.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, CurrentAccountMasterComponent_div_35_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "app-modal-basic", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Customer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r229); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37); return _r5.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "perfect-scrollbar", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "app-customer-id", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newCustomerEvent", function CurrentAccountMasterComponent_Template_app_customer_id_newCustomerEvent_46_listener($event) { return ctx.addNewCustomer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurrentAccountMasterComponent_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r229); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37); _r5.hide(); return ctx.onCloseModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, CurrentAccountMasterComponent_div_69_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ngb-tabset", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ngb-tab", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, CurrentAccountMasterComponent_ng_template_76_Template, 124, 45, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ngb-tab", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, CurrentAccountMasterComponent_ng_template_78_Template, 91, 8, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ngb-tab", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, CurrentAccountMasterComponent_ng_template_80_Template, 34, 16, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "ngb-tab", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, CurrentAccountMasterComponent_ng_template_82_Template, 101, 19, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "ngb-tab", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, CurrentAccountMasterComponent_ng_template_84_Template, 40, 10, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, CurrentAccountMasterComponent_div_85_Template, 32, 4, "div", 51);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedValue)("disabled", ctx.AC_TYPE)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c2, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TYPE"].invalid && (ctx.angForm.controls["AC_TYPE"].dirty || ctx.angForm.controls["AC_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newcustid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c2, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Cust_ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_CUSTID"].invalid && (ctx.angForm.controls["AC_CUSTID"].dirty || ctx.angForm.controls["AC_CUSTID"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.multiJointAC == null ? null : ctx.multiJointAC.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.DatatableHideShow);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTooltip"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_27__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_28__["PerfectScrollbarComponent"], _customer_id_customer_id_component__WEBPACK_IMPORTED_MODULE_29__["CustomerIdComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTabContent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_30__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_30__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_25__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9jdXN0b21lci9jdXJyZW50LWFjY291bnQtbWFzdGVyL2N1cnJlbnQtYWNjb3VudC1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInOutTranslate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translate(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CurrentAccountMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-current-account-master',
                templateUrl: './current-account-master.component.html',
                styleUrls: ['./current-account-master.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInOutTranslate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translate(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }, { type: _current_account_master_service__WEBPACK_IMPORTED_MODULE_11__["CurrentAccountMasterService"] }, { type: _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["CustomerIDMasterDropdownService"] }, { type: _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIdService"] }, { type: _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["categoryMasterService"] }, { type: _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["DirectorMasterDropdownService"] }, { type: _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["OwnbranchMasterService"] }, { type: _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["cityMasterService"] }, { type: _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["SchemeCodeDropdownService"] }, { type: _shared_dropdownService_operation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["OperationMasterDropdownService"] }, { type: _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["IntrestCategoryMasterDropdownService"] }, { type: _shared_dropdownService_minimum_balance_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["MinimumBalanceMasterDropdownService"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_22__["SystemMasterParametersService"] }, { type: _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_23__["SchemeAccountNoService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, { childMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], getUserData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: false }]
        }], ctdTabset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['ctdTabset']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/master/customer/current-account-master/current-account-master.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/theme/master/customer/current-account-master/current-account-master.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: CurrentAccountMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentAccountMasterModule", function() { return CurrentAccountMasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _current_account_master_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current-account-master-routing.module */ "./src/app/theme/master/customer/current-account-master/current-account-master-routing.module.ts");
/* harmony import */ var _current_account_master_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-account-master.component */ "./src/app/theme/master/customer/current-account-master/current-account-master.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../customer-id/customer-id.module */ "./src/app/theme/master/customer/customer-id/customer-id.module.ts");
/* harmony import */ var _current_account_master_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./current-account-master.service */ "./src/app/theme/master/customer/current-account-master/current-account-master.service.ts");
/* harmony import */ var _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/customer-id-master-dropdown.service */ "./src/app/shared/dropdownService/customer-id-master-dropdown.service.ts");
/* harmony import */ var _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/category-master-dropdown.service */ "./src/app/shared/dropdownService/category-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/dropdownService/director-master-dropdown.service */ "./src/app/shared/dropdownService/director-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/dropdownService/city-master-dropdown.service */ "./src/app/shared/dropdownService/city-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_operation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/dropdownService/operation-master-dropdown.service */ "./src/app/shared/dropdownService/operation-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/dropdownService/interest-category-master-dropdown.service */ "./src/app/shared/dropdownService/interest-category-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_minimum_balance_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/dropdownService/minimum-balance-master-dropdown.service */ "./src/app/shared/dropdownService/minimum-balance-master-dropdown.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");










//Service file of dropdown


















class CurrentAccountMasterModule {
}
CurrentAccountMasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CurrentAccountMasterModule });
CurrentAccountMasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CurrentAccountMasterModule_Factory(t) { return new (t || CurrentAccountMasterModule)(); }, providers: [_current_account_master_service__WEBPACK_IMPORTED_MODULE_9__["CurrentAccountMasterService"], _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIDMasterDropdownService"], _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__["CustomerIdService"],
        _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["categoryMasterService"], _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["DirectorMasterDropdownService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["OwnbranchMasterService"], _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["cityMasterService"],
        _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["SchemeCodeDropdownService"], _shared_dropdownService_operation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["OperationMasterDropdownService"], _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["IntrestCategoryMasterDropdownService"],
        _shared_dropdownService_minimum_balance_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["MinimumBalanceMasterDropdownService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_20__["SystemMasterParametersService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_21__["SchemeAccountNoService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _current_account_master_routing_module__WEBPACK_IMPORTED_MODULE_4__["CurrentAccountMasterRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_8__["CustomerIdModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__["DatepickerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CurrentAccountMasterModule, { declarations: [_current_account_master_component__WEBPACK_IMPORTED_MODULE_5__["CurrentAccountMasterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _current_account_master_routing_module__WEBPACK_IMPORTED_MODULE_4__["CurrentAccountMasterRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_8__["CustomerIdModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__["DatepickerModule"]], exports: [_current_account_master_component__WEBPACK_IMPORTED_MODULE_5__["CurrentAccountMasterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentAccountMasterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _current_account_master_routing_module__WEBPACK_IMPORTED_MODULE_4__["CurrentAccountMasterRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_8__["CustomerIdModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__["DatepickerModule"].forRoot()
                ],
                declarations: [_current_account_master_component__WEBPACK_IMPORTED_MODULE_5__["CurrentAccountMasterComponent"]],
                exports: [_current_account_master_component__WEBPACK_IMPORTED_MODULE_5__["CurrentAccountMasterComponent"]],
                providers: [_current_account_master_service__WEBPACK_IMPORTED_MODULE_9__["CurrentAccountMasterService"], _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIDMasterDropdownService"], _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__["CustomerIdService"],
                    _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["categoryMasterService"], _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["DirectorMasterDropdownService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["OwnbranchMasterService"], _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["cityMasterService"],
                    _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["SchemeCodeDropdownService"], _shared_dropdownService_operation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["OperationMasterDropdownService"], _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["IntrestCategoryMasterDropdownService"],
                    _shared_dropdownService_minimum_balance_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["MinimumBalanceMasterDropdownService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_20__["SystemMasterParametersService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_21__["SchemeAccountNoService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/current-account-master/current-account-master.service.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/theme/master/customer/current-account-master/current-account-master.service.ts ***!
  \************************************************************************************************/
/*! exports provided: CurrentAccountMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentAccountMasterService", function() { return CurrentAccountMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class CurrentAccountMasterService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/current-account-master/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    getData(obj) {
        return this.http.get(this.url + '/current-account-master/alldata' + obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/current-account-master/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/current-account-master/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/current-account-master/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //approve master
    approve(data) {
        return this.http.post(this.url + '/current-account-master/approve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //reject master
    reject(data) {
        return this.http.post(this.url + '/current-account-master/reject', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
CurrentAccountMasterService.ɵfac = function CurrentAccountMasterService_Factory(t) { return new (t || CurrentAccountMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
CurrentAccountMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrentAccountMasterService, factory: CurrentAccountMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentAccountMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~centralised-passing-centralisedPassing-module~current-account-master-current-account-master-module.js.map