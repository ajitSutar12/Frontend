(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~centralised-passing-centralisedPassing-module~dead-stock-transaction-dead-stock-transaction-~b51d2599"],{

/***/ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: DeadStockTransactionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadStockTransactionRoutingModule", function() { return DeadStockTransactionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dead_stock_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dead-stock-transaction.component */ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.component.ts");





const routes = [
    {
        path: '',
        component: _dead_stock_transaction_component__WEBPACK_IMPORTED_MODULE_2__["DeadStockTransactionComponent"],
        data: {
            title: 'DeadStock Transaction',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class DeadStockTransactionRoutingModule {
}
DeadStockTransactionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DeadStockTransactionRoutingModule });
DeadStockTransactionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DeadStockTransactionRoutingModule_Factory(t) { return new (t || DeadStockTransactionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeadStockTransactionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeadStockTransactionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DeadStockTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadStockTransactionComponent", function() { return DeadStockTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs-compat */ "./node_modules/rxjs-compat/Rx.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _dead_stock_transaction_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dead-stock-transaction.service */ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.service.ts");
/* harmony import */ var _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../button.directive */ "./src/app/theme/button.directive.ts");






// Displaying Sweet Alert


















const _c0 = ["triggerhide"];
function DeadStockTransactionComponent_ng_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r22.label, "");
} }
function DeadStockTransactionComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_27_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["BRANCH_CODE"].errors == null ? null : ctx_r3.angForm.controls["BRANCH_CODE"].errors.required);
} }
function DeadStockTransactionComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_53_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.angForm.controls["TRANSACTION_TYPE"].errors == null ? null : ctx_r5.angForm.controls["TRANSACTION_TYPE"].errors.required);
} }
function DeadStockTransactionComponent_div_68_ng_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r31.id, " ", values_r31.label, "");
} }
function DeadStockTransactionComponent_div_68_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_68_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_68_div_12_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r27.angForm.controls["AC_TYPE"].errors.required);
} }
function DeadStockTransactionComponent_div_68_ng_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r33.AC_NO, " ", values_r33.AC_NAME, "");
} }
function DeadStockTransactionComponent_div_68_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_68_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_68_div_24_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_NO"].errors == null ? null : ctx_r30.angForm.controls["AC_NO"].errors.required);
} }
function DeadStockTransactionComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Transfer GL Scheme Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ng-select", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_div_68_Template_ng_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.schemeedit = $event; })("change", function DeadStockTransactionComponent_div_68_Template_ng_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.schemechange($event); })("focus", function DeadStockTransactionComponent_div_68_Template_ng_select_focus_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.onFocus(_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DeadStockTransactionComponent_div_68_ng_option_11_Template, 2, 3, "ng-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DeadStockTransactionComponent_div_68_div_12_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Transfer GL Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ng-select", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_div_68_Template_ng_select_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.accountedit = $event; })("focus", function DeadStockTransactionComponent_div_68_Template_ng_select_focus_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.onFocus(_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DeadStockTransactionComponent_div_68_ng_option_23_Template, 2, 3, "ng-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DeadStockTransactionComponent_div_68_div_24_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.schemeedit)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.ACMasterDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_TYPE"].invalid && (ctx_r6.angForm.controls["AC_TYPE"].dirty || ctx_r6.angForm.controls["AC_TYPE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.accountedit)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.schemeACNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_NO"].invalid && (ctx_r6.angForm.controls["AC_NO"].dirty || ctx_r6.angForm.controls["AC_NO"].touched));
} }
function DeadStockTransactionComponent_div_69_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_69_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_69_div_11_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.angForm.controls["RESOLUTION_DATE"].errors == null ? null : ctx_r42.angForm.controls["RESOLUTION_DATE"].errors.required);
} }
function DeadStockTransactionComponent_div_69_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Input allowed only 0-9. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_69_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_69_div_21_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.angForm.controls["RESOLUTION_NUM"].errors == null ? null : ctx_r43.angForm.controls["RESOLUTION_NUM"].errors.required);
} }
const _c1 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
const _c2 = function (a0) { return { "form-submitted": a0 }; };
function DeadStockTransactionComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resolution Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_div_69_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.ngresolutiondate = $event; })("keydown.Tab", function DeadStockTransactionComponent_div_69_Template_input_keydown_Tab_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r41.hide(); })("keypress", function DeadStockTransactionComponent_div_69_Template_input_keypress_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DeadStockTransactionComponent_div_69_div_11_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Resolution Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_div_69_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.ngresolutionnum = $event; })("keypress", function DeadStockTransactionComponent_div_69_Template_input_keypress_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DeadStockTransactionComponent_div_69_div_21_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.ngresolutiondate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("maxDate", ctx_r7.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx_r7.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["RESOLUTION_DATE"].invalid && (ctx_r7.angForm.controls["RESOLUTION_DATE"].dirty || ctx_r7.angForm.controls["RESOLUTION_DATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx_r7.formSubmitted))("ngModel", ctx_r7.ngresolutionnum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["RESOLUTION_NUM"].invalid && (ctx_r7.angForm.controls["RESOLUTION_NUM"].dirty || ctx_r7.angForm.controls["RESOLUTION_NUM"].touched));
} }
function DeadStockTransactionComponent_div_72_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_72_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_72_div_9_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.angForm.controls["NARRATION"].errors == null ? null : ctx_r52.angForm.controls["NARRATION"].errors.required);
} }
function DeadStockTransactionComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Narration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_div_72_Template_textarea_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.narration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_div_72_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](143); return _r19.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DeadStockTransactionComponent_div_72_div_9_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.narration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["NARRATION"].invalid && (ctx_r8.angForm.controls["NARRATION"].dirty || ctx_r8.angForm.controls["NARRATION"].touched));
} }
function DeadStockTransactionComponent_ng_option_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r57.ITEM_CODE, " ", values_r57.ITEM_NAME, "");
} }
function DeadStockTransactionComponent_tbody_130_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 90, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DeadStockTransactionComponent_tbody_130_tr_1_Template_input_focus_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.selectAllContent($event); })("focusout", function DeadStockTransactionComponent_tbody_130_tr_1_Template_input_focusout_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r65.getDecimalPoint($event); })("change", function DeadStockTransactionComponent_tbody_130_tr_1_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const data_r59 = ctx.$implicit; const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r66.getColumnValue(data_r59.ITEM_CODE, _r60.name, _r60.value, _r61.name, _r61.value, _r62.name, _r62.value); })("keypress", function DeadStockTransactionComponent_tbody_130_tr_1_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DeadStockTransactionComponent_tbody_130_tr_1_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const data_r59 = ctx.$implicit; const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68.getColumnValue(data_r59.ITEM_CODE, _r60.name, _r60.value, _r61.name, _r61.value, _r62.name, _r62.value); })("keypress", function DeadStockTransactionComponent_tbody_130_tr_1_Template_input_keypress_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 94, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DeadStockTransactionComponent_tbody_130_tr_1_Template_input_focus_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.selectAllContent($event); })("focusout", function DeadStockTransactionComponent_tbody_130_tr_1_Template_input_focusout_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r71.getDecimalPoint($event); })("change", function DeadStockTransactionComponent_tbody_130_tr_1_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const data_r59 = ctx.$implicit; const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.getColumnValue(data_r59.ITEM_CODE, _r60.name, _r60.value, _r61.name, _r61.value, _r62.name, _r62.value); })("keypress", function DeadStockTransactionComponent_tbody_130_tr_1_Template_input_keypress_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r59.ITEM_CODE, " ", data_r59.ITEM_NAME, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r59.ITEM_QTY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r59.ITEM_RATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r59.TRAN_AMOUNT);
} }
function DeadStockTransactionComponent_tbody_130_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_tbody_130_tr_1_Template, 12, 5, "tr", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DeadStockTransactionComponent_tbody_130_Template_input_keypress_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.itemArr);
} }
function DeadStockTransactionComponent_tbody_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_button_134_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_button_134_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); ctx_r76.submit(); return _r1.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_button_135_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_button_135_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_button_136_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_button_136_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); ctx_r80.addNewData(); return _r1.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_button_138_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_button_138_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_button_140_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_button_140_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.Approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_button_141_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_button_141_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.unApprove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unapprove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_tr_159_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_tr_159_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const item_r88 = ctx.$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.getNarration(item_r88.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r88.NARRATION, " ");
} }
class DeadStockTransactionComponent {
    constructor(fb, http, systemParameter, _service, ACMasterDropdownService, schemeCodeDropdownService, schemeAccountNoService, ownbranchMasterService, config) {
        this.fb = fb;
        this.http = http;
        this.systemParameter = systemParameter;
        this._service = _service;
        this.ACMasterDropdownService = ACMasterDropdownService;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.schemeAccountNoService = schemeAccountNoService;
        this.ownbranchMasterService = ownbranchMasterService;
        this.config = config;
        this.reloadTablePassing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formSubmitted = false;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.ngBranchCode = null;
        this.ngtransactiondate = null;
        // Date variables
        this.ngresolutiondate = null;
        this.isTransfer = false;
        this.totalAmt = 0;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_compat__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //Transaction type variable
        this.ngtransactiontype = null;
        this.transactiontype = [
            { id: 'S', label: 'Sales' },
            { id: 'B', label: 'Breakage' },
            { id: 'G', label: 'Gain' },
            { id: 'L', label: 'Loss' },
            { id: 'D', label: 'Depriciation' },
            { id: 'T', label: 'Transfer' }
        ];
        this.DatatableHideShow = true;
        this.rejectShow = false;
        this.approveShow = false;
        this.unapproveShow = false;
        this.Narration = false;
        this.Resolution = false;
        this.GLAccount = false;
        this.itemArr = [];
        this.ngItem = null;
        this.deadstockDetailAmount = {};
        this.dtExportButtonOptions = {};
        this.depTotal = 0;
        this.visibleAnimate = false;
        this.visible = false;
        this.updateShow = false;
        this.newbtnShow = false;
        // Variables for hide/show add and update button
        this.showButton = true;
        this.updateID = 0;
        if (this.childMessage != undefined) {
            this.editClickHandler(this.childMessage);
        }
        this.maxDate = new Date();
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate());
        this.systemParameter.getFormData(1).subscribe(data => {
            this.maxDate = moment__WEBPACK_IMPORTED_MODULE_5__(data.CURRENT_DATE, 'DD/MM/YYYY');
            this.maxDate = this.maxDate._d;
            this.minDate = this.maxDate;
            this.logDate = data.CURRENT_DATE;
        });
    }
    ngOnInit() {
        this.getSystemParaDate();
        this.createForm();
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.branch_code = data;
        });
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            var filtered = data.filter(function (scheme) {
                return (scheme.name == 'GL' || scheme.name == 'GS');
            });
            this.ACMasterDropdown = filtered;
        });
        // /Narration List
        this._service.getNarrationMaster().subscribe(data => {
            this.narrationList = data;
        });
        this.http.get(this.url + '/deadstock-purchase/itemList').subscribe((data) => {
            this.itemcode = data;
        });
    }
    createForm() {
        this.angForm = this.fb.group({
            BRANCH_CODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            TRAN_DATE: [''],
            TRAN_YEAR: [''],
            TRANSACTION_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ITEM_CODE: [''],
            DEAD_STOCK: ['FormT'],
            AC_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            AC_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            RESOLUTION_DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            RESOLUTION_NUM: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            NARRATION: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            amount: [''],
            Rate: [''],
            Quantity: [''],
            Total_AMT: [''],
        });
        this.getSystemParaDate();
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.angForm.controls['BRANCH_CODE'].enable();
            this.ngBranchCode = result.branch.id;
        }
        else {
            this.angForm.controls['BRANCH_CODE'].disable();
            this.angForm.patchValue({
                'BRANCH_CODE': result.branch.id
            });
            this.ngBranchCode = result.branch.id;
        }
    }
    getBranch() {
        this.getIntroducer();
    }
    schemechange(event) {
        this.getschemename = event.name;
        this.schemeedit = event.value;
        this.GL_ACNO = event.glacno;
        this.getIntroducer();
    }
    //get account no according scheme for introducer
    getIntroducer() {
        this.accountedit = null;
        this.obj = [this.schemeedit, this.ngBranchCode];
        switch (this.getschemename) {
            case 'GS':
                this.schemeAccountNoService.getAnamatSchemeList1(this.obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
                    this.schemeACNo = data;
                });
                break;
            case 'GL':
                this.http.get(this.url + '/gl-account-master/').subscribe(data => {
                    this.schemeACNo = data;
                });
                // this.schemeAccountNoService.getGeneralLedgerList1(this.obj).pipe(first()).subscribe(data => {
                //   this.schemeACNo = data;
                // })
                break;
        }
    }
    //get sys para current date
    getSystemParaDate() {
        this.systemParameter.getFormData(1).subscribe(data => {
            this.angForm.patchValue({
                'TRAN_DATE': data.CURRENT_DATE,
            });
            var formatfullDate = data.CURRENT_DATE;
            var nyear = formatfullDate.split(/\//);
            let transactionDate;
            let prev = Number(nyear[2]) - 1;
            if (nyear[1] > 3) {
                let next = Number(nyear[2]) + 1;
                transactionDate = nyear[2] + next;
            }
            else {
                transactionDate = prev + nyear[2];
            }
            this.angForm.patchValue({
                TRAN_YEAR: transactionDate
            });
        });
    }
    //get Narration Details 
    getNarration(ele) {
        this.narration = ele;
        let el = this.triggerhide.nativeElement;
        el.click();
    }
    changetransaction() {
        this.tranType = this.ngtransactiontype.label;
        if (this.ngtransactiontype.label == 'Sales') {
            this.angForm.patchValue({
                DEAD_STOCK: 'FormT'
            });
            this.angForm.controls['DEAD_STOCK'].enable();
            this.radioDeadStock = 'FormT';
        }
        else {
            // this.angForm.patchValue({
            //   DEAD_STOCK: 'FormT'
            // })
            this.angForm.patchValue({
                DEAD_STOCK: 'FormT'
            });
            this.radioDeadStock = 'FormT';
            this.angForm.controls['DEAD_STOCK'].disable();
        }
        this.GLAccount = true;
        this.Resolution = true;
        this.Narration = true;
        this.schemeedit = null;
        this.accountedit = null;
        this.ngresolutionnum = null;
        this.narration = null;
        this.angForm.patchValue({
            RESOLUTION_DATE: '',
        });
    }
    isFormA(value) {
        if (this.ngtransactiontype.label == 'Sales') {
            document.getElementById('formC').removeAttribute("disabled");
            if (value == 1) {
                this.GLAccount = true;
                this.Resolution = true;
                this.Narration = true;
            }
            else if (value == 2) {
                this.GLAccount = false;
                this.Resolution = true;
                this.Narration = true;
            }
        }
    }
    isFormUpdate(value) {
        if (this.ngtransactiontype == 'Sales') {
            document.getElementById('formC').removeAttribute("disabled");
            if (value == 1) {
                this.GLAccount = true;
                this.Resolution = true;
                this.Narration = true;
            }
            else if (value == 2) {
                this.GLAccount = false;
                this.Resolution = true;
                this.Narration = true;
            }
        }
        else {
            this.GLAccount = true;
            this.Resolution = true;
            this.Narration = true;
        }
    }
    //add items details in array
    addItem() {
        var _a, _b, _c, _e;
        const formVal = this.angForm.value;
        let object = {
            itemId: (_a = formVal.ITEM_CODE) === null || _a === void 0 ? void 0 : _a.id,
            ITEM_GLACNO: formVal.ITEM_CODE.GL_ACNO,
            ITEM_CODE: (_b = formVal.ITEM_CODE) === null || _b === void 0 ? void 0 : _b.ITEM_CODE,
            ITEM_TYPE: (_c = formVal.ITEM_CODE) === null || _c === void 0 ? void 0 : _c.ITEM_TYPE,
            ITEM_NAME: (_e = formVal.ITEM_CODE) === null || _e === void 0 ? void 0 : _e.ITEM_NAME,
            ITEM_QTY: formVal.Quantity,
            ITEM_RATE: formVal.Rate,
            TRAN_AMOUNT: formVal.amount,
        };
        if (formVal.ITEM_CODE == "" || formVal.ITEM_CODE == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Warning!", "Please Insert Mandatory Record for item!", "info");
        }
        else if (formVal.Quantity == "" || formVal.Quantity == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Warning!", "Please Insert Mandatory Record for Quantity!", "info");
        }
        else if (formVal.Rate == "" || formVal.Rate == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Warning!", "Please Insert Mandatory Record for Rate!", "info");
        }
        else if (formVal.amount == "" || formVal.amount == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Warning!", "Please Insert Mandatory Record for Amount", "info");
        }
        else if (this.itemArr.length != 0) {
            if (this.itemArr.some(item => item.id === object.itemId)) {
                this.itemArr.forEach((element) => {
                    if (element.id == object.itemId) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('', 'This Item is Already Exists!', 'info');
                    }
                });
            }
            else {
                if (this.deadstockDetailAmount['totalAmt'] > formVal.amount) {
                    object['dep'] = this.deadstockDetailAmount['totalAmt'] - formVal.amount;
                    this.depTotal = this.depTotal + Number(object['dep']);
                }
                this.itemArr.push(object);
                this.resetItem();
                this.totalAmt = this.totalAmt + parseInt(object.TRAN_AMOUNT);
                this.angForm.patchValue({
                    Total_AMT: this.totalAmt
                });
            }
        }
        else {
            if (this.deadstockDetailAmount['totalAmt'] > formVal.amount) {
                object['dep'] = this.deadstockDetailAmount['totalAmt'] - formVal.amount;
                this.depTotal = this.depTotal + Number(object['dep']);
            }
            this.itemArr.push(object);
            this.resetItem();
            this.totalAmt = this.totalAmt + parseInt(object.TRAN_AMOUNT);
            this.angForm.patchValue({
                Total_AMT: this.totalAmt
            });
        }
    }
    // reset table controls
    resetItem() {
        this.angForm.patchValue({
            amount: '',
            Rate: '',
            Quantity: '',
        });
        // this.ngItem = null
    }
    //get table Column wise value in array
    getColumnValue(id, quanName, quanValue, rateName, rateValue, amountName, amountValue) {
        if ((quanValue != '' || quanValue != 0) && Number(quanValue) <= this.itemQuan) {
            if (this.itemArr.length != 0) {
                if (this.itemArr.some(item => item.id === id)) {
                    this.itemArr.forEach((element) => {
                        if (element.id == id) {
                            this.totalAmt = this.totalAmt + Number(amountValue) - Number(element[`${amountName}`]);
                            element[`${quanName}`] = quanValue;
                            element[`${rateName}`] = rateValue;
                            element[`${amountName}`] = amountValue;
                            let rate = (amountValue / quanValue);
                            element[`${rateName}`] = rate;
                            this.angForm.patchValue({
                                Total_AMT: this.totalAmt
                            });
                        }
                    });
                }
            }
        }
        else {
            if (this.itemArr.some(item => item.id === id)) {
                this.itemArr.forEach((element) => {
                    if (element.id == id) {
                        element[`Quantity`] = this.itemQuan;
                    }
                });
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('', 'This Item Quantity Limit Exceeded !', 'info');
        }
    }
    getItemDetails(event) {
        let obj = [event.ITEM_CODE, event.ITEM_TYPE, event.id];
        this.OP_BALANCE = event.OP_BALANCE;
        this.http.get(this.url + '/deadstock-purchase/amount/' + obj).subscribe((data) => {
            this.deadstockDetailAmount['totalAmt'] = data['totalAmt'];
            let rate = (this.deadstockDetailAmount['totalAmt'] / event.PURCHASE_QUANTITY);
            this.angForm.patchValue({
                amount: data['totalAmt'],
                Quantity: event.PURCHASE_QUANTITY,
                Rate: rate
            });
            this.itemQuan = event.PURCHASE_QUANTITY;
        });
    }
    getRate() {
        let Quantity = this.angForm.controls['Quantity'].value;
        let rate = (this.angForm.controls['amount'].value / Quantity);
        this.angForm.patchValue({
            Rate: rate
        });
    }
    //select content of field
    selectAllContent($event) {
        $event.target.select();
    }
    //insert method
    submit() {
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let billDate;
        let chequeDate;
        // if (this.itemArr.length != 0) {
        if (this.angForm.controls['Total_AMT'].value > 0) {
            const formVal = this.angForm.value;
            const dataToSend = {
                itemArr: this.itemArr,
                BRANCH_CODE: this.ngBranchCode,
                TRAN_DATE: formVal.TRAN_DATE,
                TRAN_YEAR: formVal.TRAN_YEAR,
                RESO_DATE: (formVal.RESOLUTION_DATE == '' || formVal.RESOLUTION_DATE == 'Invalid date' || formVal.RESOLUTION_DATE == null || formVal.RESOLUTION_DATE == undefined) ? billDate = '' : billDate = moment__WEBPACK_IMPORTED_MODULE_5__(formVal.RESOLUTION_DATE).format('DD/MM/YYYY'),
                DEAD_STOCK: this.radioDeadStock,
                // DEAD_STOCK: formVal.DEAD_STOCK,
                AC_TYPE: formVal.AC_TYPE,
                AC_NO: formVal.AC_NO,
                RESO_NO: formVal.RESOLUTION_NUM,
                NARRATION: formVal.NARRATION,
                Total_AMT: formVal.Total_AMT,
                USER: result.USER_NAME,
                ACNOTYPE: this.getschemename,
                GL_ACNO: this.GL_ACNO,
                tranType: this.tranType,
                depTotal: this.depTotal
            };
            this._service.postData(dataToSend).subscribe((data) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Success!", "Data Updated Successfully !", "success");
                this.formSubmitted = false;
            }, (error) => {
                console.log(error);
            });
            this.resetForm();
            this.itemArr = [];
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
        }
    }
    updateData() {
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let billDate;
        let chequeDate;
        // if (this.itemArr.length != 0) {
        if (this.angForm.controls['Total_AMT'].value > 0) {
            const formVal = this.angForm.value;
            const dataToSend = {
                id: this.updateID,
                itemArr: this.itemArr,
                BRANCH_CODE: this.ngBranchCode,
                TRAN_DATE: formVal.TRAN_DATE,
                TRAN_YEAR: formVal.TRAN_YEAR,
                // RESO_DATE: (formVal.RESOLUTION_DATE == '' || formVal.RESOLUTION_DATE == 'Invalid date' || formVal.RESOLUTION_DATE == null || formVal.RESOLUTION_DATE == undefined) ? billDate = '' : billDate = moment(formVal.RESOLUTION_DATE).format('DD/MM/YYYY'),
                DEAD_STOCK: formVal.DEAD_STOCK,
                AC_TYPE: formVal.AC_TYPE,
                AC_NO: formVal.AC_NO,
                RESO_NO: formVal.RESOLUTION_NUM,
                NARRATION: formVal.NARRATION,
                Total_AMT: formVal.Total_AMT,
                USER: result.USER_NAME,
                ACNOTYPE: this.getschemename,
                GL_ACNO: this.GL_ACNO,
                tranType: this.tranType,
                depTotal: this.depTotal
            };
            if (this.updatecheckdata.RESO_DATE != formVal.RESOLUTION_DATE) {
                (formVal.RESOLUTION_DATE == 'Invalid date' || formVal.RESOLUTION_DATE == '' || formVal.RESOLUTION_DATE == null) ? (billDate = '', formVal['RESOLUTION_DATE'] = billDate) : (billDate = formVal.RESOLUTION_DATE, dataToSend['RESO_DATE'] = moment__WEBPACK_IMPORTED_MODULE_5__(billDate).format('DD/MM/YYYY'));
            }
            else {
                dataToSend['RESO_DATE'] = formVal.RESOLUTION_DATE;
            }
            this._service.updateData(dataToSend).subscribe((data) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Success!", "Data Updated Successfully !", "success");
                this.formSubmitted = false;
            }, (error) => {
                console.log(error);
            });
            this.resetForm();
            this.itemArr = [];
            var button = document.getElementById('triggerhide');
            button.click();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
        }
        this.reloadTablePassing.emit();
    }
    // Reset Function
    resetForm() {
        this.ngBranchCode = null;
        this.schemeedit = null;
        this.accountedit = null;
        this.depTotal = 0;
        this.totalAmt = 0;
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.createForm();
    }
    addNewData() {
        var button = document.getElementById('triggerhide');
        button.click();
        this.reloadTablePassing.emit();
    }
    editClickHandler(id) {
        // debugger
        this._service.getFormData(id).subscribe((data) => {
            this.angForm.disable();
            this.updatecheckdata = data;
            if (data.TRAN_STATUS == '0') {
                this.showButton = false;
                this.updateShow = true;
                this.newbtnShow = true;
                this.approveShow = true;
                this.rejectShow = true;
                this.unapproveShow = false;
            }
            else if (data.TRAN_STATUS != '0') {
                this.showButton = false;
                this.updateShow = false;
                this.newbtnShow = true;
                this.approveShow = false;
                this.rejectShow = false;
                this.unapproveShow = true;
            }
            else {
                this.showButton = false;
                this.updateShow = false;
                this.newbtnShow = true;
                this.approveShow = false;
                this.rejectShow = false;
                this.unapproveShow = false;
            }
            this.updateID = data.id;
            if (data.TRAN_ENTRY_TYPE == 'SEL') {
                this.ngtransactiontype = 'Sales';
            }
            if (data.TRAN_TYPE == 'CS')
                this.isFormUpdate(2);
            else
                this.isFormUpdate(1);
            this.getschemename = data.TRANSFER_ACNOTYPE;
            this.schemeedit = Number(data.TRANSFER_ACTYPE);
            this.GL_ACNO = data.TRAN_GLACNO;
            this.tranType = data.TRAN_ENTRY_TYPE;
            if (data.TRAN_ENTRY_TYPE == 'SEL') {
                this.tranType = 'Sales';
            }
            else if (data.TRAN_ENTRY_TYPE == 'BRK') {
                this.tranType = 'Breakage';
            }
            else if (data.TRAN_ENTRY_TYPE == 'GIN') {
                this.tranType = 'Gain';
            }
            else if (data.TRAN_ENTRY_TYPE == 'LOS') {
                this.tranType = 'Loss';
            }
            else if (data.TRAN_ENTRY_TYPE == 'DPR') {
                this.tranType = 'Depriciation';
            }
            else if (data.TRAN_ENTRY_TYPE == 'TRF') {
                this.tranType = 'Transfer';
            }
            this.getIntroducer();
            this.angForm.patchValue({
                BRANCH_CODE: data.BRANCH_CODE,
                TRAN_DATE: data.TRAN_DATE,
                TRAN_YEAR: data.TRAN_YEAR,
                TRANSACTION_TYPE: data.TRAN_ENTRY_TYPE,
                DEAD_STOCK: data.TRAN_TYPE == 'CS' ? 'FormC' : 'FormT',
                AC_TYPE: Number(data.TRANSFER_ACTYPE),
                AC_NO: data.TRANSFER_ACNO,
                RESOLUTION_DATE: data.RESO_DATE,
                RESOLUTION_NUM: data.RESO_NO,
                NARRATION: data.NARRATION,
                Total_AMT: data.TRAN_AMOUNT
            });
            this.totalAmt = data.TRAN_AMOUNT;
            this.itemArr = data.deadstockHead;
        });
    }
    //approve account
    Approve() {
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let billDate;
        let chequeDate;
        // if (this.itemArr.length != 0) {
        if (this.angForm.controls['Total_AMT'].value > 0) {
            const formVal = this.angForm.value;
            const dataToSend = {
                id: this.updateID,
                TRAN_NO: this.updatecheckdata.TRAN_NO,
                TRAN_ENTRY_TYPE: this.updatecheckdata.TRAN_ENTRY_TYPE,
                itemArr: this.itemArr,
                BRANCH_CODE: this.ngBranchCode,
                TRAN_DATE: formVal.TRAN_DATE,
                TRAN_YEAR: formVal.TRAN_YEAR,
                DEAD_STOCK: formVal.DEAD_STOCK,
                AC_TYPE: formVal.AC_TYPE,
                AC_NO: formVal.AC_NO,
                RESO_NO: formVal.RESOLUTION_NUM,
                NARRATION: formVal.NARRATION,
                Total_AMT: formVal.Total_AMT,
                USER: result.USER_NAME,
                ACNOTYPE: this.getschemename,
                GL_ACNO: this.GL_ACNO,
                tranType: this.tranType,
                depTotal: this.depTotal,
                userID: result.id
            };
            if (this.updatecheckdata.RESO_DATE != formVal.RESOLUTION_DATE) {
                (formVal.RESOLUTION_DATE == 'Invalid date' || formVal.RESOLUTION_DATE == '' || formVal.RESOLUTION_DATE == null) ? (billDate = '', formVal['RESOLUTION_DATE'] = billDate) : (billDate = formVal.RESOLUTION_DATE, dataToSend['RESO_DATE'] = moment__WEBPACK_IMPORTED_MODULE_5__(billDate).format('DD/MM/YYYY'));
            }
            else {
                dataToSend['RESO_DATE'] = formVal.RESOLUTION_DATE;
            }
            this._service.approve(dataToSend).subscribe(data => {
                this.angForm.enable();
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Success', 'Deadstock Transaction approved successfully', 'success');
                var button = document.getElementById('triggerhide');
                button.click();
                this.reloadTablePassing.emit();
            }, err => {
                console.log('something is wrong');
            });
            this.resetForm();
            this.itemArr = [];
            this.depTotal = 0;
        }
    }
    //reject account
    reject() {
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = {
            id: this.updateID,
            user: user.id
        };
        this._service.reject(obj).subscribe(data => {
            this.angForm.enable();
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Success', 'Deadstock Transaction rejected successfully', 'success');
            var button = document.getElementById('triggerhide');
            button.click();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    onCloseModal() {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }
    closeModal() {
        var button = document.getElementById('triggerhide');
        button.click();
        this.reloadTablePassing.emit();
    }
    getDecimalPoint(event) {
        if (event.target.value != '')
            event.target.value = parseFloat(event.target.value).toFixed(2);
    }
    getDecimal(event) {
        var t = event.target.value;
        event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    }
    onFocus(ele) {
        ele.open();
    }
    onOpen(select) {
        select.open();
    }
    onClose(select) {
        select.close();
    }
    unApprove() {
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = {
            id: this.updateID,
            user: user.id,
            LOG_DATE: this.logDate
        };
        this._service.unapprove(obj).subscribe(data => {
            this.angForm.enable();
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Unapproved', 'Account unapproved successfully', 'success');
            var button = document.getElementById('triggerhide');
            button.click();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
}
DeadStockTransactionComponent.ɵfac = function DeadStockTransactionComponent_Factory(t) { return new (t || DeadStockTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_8__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dead_stock_transaction_service__WEBPACK_IMPORTED_MODULE_9__["DeadStockTransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ACMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectConfig"])); };
DeadStockTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeadStockTransactionComponent, selectors: [["app-dead-stock-transaction"]], viewQuery: function DeadStockTransactionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerhide = _t.first);
    } }, inputs: { childMessage: "childMessage" }, outputs: { reloadTablePassing: "reloadTablePassing" }, decls: 163, vars: 39, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "card-block"], [1, "solid"], [1, "col-sm-12", "col-md-2"], ["for", "BRANCH_CODE"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["id", "BRANCH_CODE", "bindValue", "value", "formControlName", "BRANCH_CODE", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", "appTheme", "", "autofocus", "", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "change", "focus"], ["selectBranch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["for", "TRAN_DATE"], [1, "form-group", "input-group"], ["type", "text", "name", "TRAN_DATE", "formControlName", "TRAN_DATE", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "TRAN_YEAR"], ["type", "text", "name", "TRAN_YEAR", "placeholder", " ", "pattern", "^[0-9]+$", "title", "Input allowed only 0-9", "id", "TRAN_YEAR", "formControlName", "TRAN_YEAR", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", "TRANSACTION_TYPE"], ["id", "TRANSACTION_TYPE", "name", "type", "bindLabel", "label", "formControlName", "TRANSACTION_TYPE", "appTheme", "", "placeholder", "Transaction Type", "required", "", 3, "items", "selectOnTab", "ngClass", "ngModel", "focus", "change", "ngModelChange"], ["TRANSACTION_TYPE", ""], [1, "col-sm"], [1, "form-radio"], [1, "radio", "radio-inline"], [1, "inputRadio"], ["type", "radio", "formControlName", "DEAD_STOCK", "name", "DEAD_STOCK", "value", "FormT", "id", "formT", 3, "ngModel", "change", "ngModelChange"], [1, "helper"], ["type", "radio", "formControlName", "DEAD_STOCK", "id", "formC", "name", "DEAD_STOCK", "value", "FormC", 3, "change"], ["id", "FORMA", 1, "row"], [1, "col-sm-12"], ["class", "row", 4, "ngIf"], ["id", "FORMB", 1, "row"], [1, "col-md"], ["for", "ITEM_CODE"], [1, "col-md-2"], ["id", "ITEM_CODE", "bindLabel", "ITEM_NAME", "formControlName", "ITEM_CODE", "placeholder", "Item Code", "appTheme", "", 3, "items", "ngModel", "ngClass", "selectOnTab", "ngModelChange", "change", "focus"], ["ITEM_CODE", ""], ["for", "Quantity"], [1, "col-md-1"], ["type", "text", "appTheme", "", "name", "Quantity", "id", "Quantity", "formControlName", "Quantity", 1, "form-control", 2, "text-align", "right", 3, "keyup", "focus", "keypress"], ["for", "Rate"], ["type", "text", "name", "Rate", "id", "Rate", "formControlName", "Rate", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", "amount"], ["type", "text", "name", "amount", "id", "amount", "formControlName", "amount", "appTheme", "", "maxlength", "15", 1, "form-control", 2, "text-align", "right", 3, "keyup", "focus", "focusout", "keypress"], [1, "col-sm", 2, "float", "right"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions", "dtTrigger"], [4, "ngIf"], ["type", "submit", "class", "btn btn-outline-primary btn-sm btn-submit", "appTheme", "", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [1, "col-md-12"], [1, "table", "table-bordered"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 2, "display", "none", 3, "click"], ["triggerhide", ""], [3, "value"], [1, "alert", "alert-danger"], ["for", "AC_TYPE"], ["id", "AC_TYPE", "bindValue", "value", "formControlName", "AC_TYPE", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Transfer Scheme Code", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "change", "focus"], ["AC_TYPE", ""], ["for", "AC_NO"], [1, "col-sm-12", "col-md-4"], ["id", "AC_NO", "bindValue", "AC_NO", "formControlName", "AC_NO", "bindLabel", "AC_NO", "title", "Compulsory Selection", "required", "", "placeholder", "Account Number", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "focus"], ["AC_NO", ""], ["for", "RESOLUTION_DATE"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "RESOLUTION_DATE", "id", "RESOLUTION_DATE", "appButton", "", "minlength", "10", "maxlength", "10", "formControlName", "RESOLUTION_DATE", "appTheme", "", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "maxDate", "ngClass", "ngModelChange", "keydown.Tab", "keypress"], ["RESOLUTION_DATE", "bsDatepicker"], ["for", "RESOLUTION_NUM"], ["type", "text", "name", "RESOLUTION_NUM", "placeholder", " ", "maxlength", "4", "appTheme", "", "id", "RESOLUTION_NUM", "required", "", "title", "Input allowed only  0-9", "formControlName", "RESOLUTION_NUM", 1, "form-control", 2, "text-align", "right", 3, "ngClass", "ngModel", "ngModelChange", "keypress"], ["for", "NARRATION"], [1, "col-md-4"], ["formControlName", "NARRATION", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-info-circle", "errspan", 3, "click"], [4, "ngFor", "ngForOf"], ["colspan", "3", 2, "text-align", "right"], ["type", "text", "name", "cgst", "id", "cgst", "formControlName", "Total_AMT", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "ITEM_QTY", "id", "ITEM_QTY", 1, "form-control", 2, "text-align", "right", 3, "value", "focus", "focusout", "change", "keypress"], ["Quantity", ""], ["type", "text", "name", "ITEM_RATE", "id", "ITEM_RATE", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "value", "change", "keypress"], ["Rate", ""], ["type", "text", "name", "TRAN_AMOUNT", "id", "TRAN_AMOUNT", 1, "form-control", 2, "text-align", "right", 3, "value", "focus", "focusout", "change", "keypress"], ["Amount", ""], ["colspan", "4", 1, "no-data-available", 2, "text-align", "center"], ["type", "submit", "appTheme", "", 1, "btn", "btn-outline-primary", "btn-sm", "btn-submit", 3, "click"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [3, "click"]], template: function DeadStockTransactionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Deadstock Transactions");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ng-select", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_Template_ng_select_ngModelChange_24_listener($event) { return ctx.ngBranchCode = $event; })("change", function DeadStockTransactionComponent_Template_ng_select_change_24_listener() { return ctx.getBranch(); })("focus", function DeadStockTransactionComponent_Template_ng_select_focus_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return ctx.onFocus(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DeadStockTransactionComponent_ng_option_26_Template, 2, 2, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DeadStockTransactionComponent_div_27_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Transaction Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_Template_input_ngModelChange_34_listener($event) { return ctx.ngtransactiondate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Transaction Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DeadStockTransactionComponent_Template_input_keypress_41_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Transaction Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ng-select", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DeadStockTransactionComponent_Template_ng_select_focus_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return ctx.onFocus(_r4); })("change", function DeadStockTransactionComponent_Template_ng_select_change_51_listener() { return ctx.changetransaction(); })("ngModelChange", function DeadStockTransactionComponent_Template_ng_select_ngModelChange_51_listener($event) { return ctx.ngtransactiontype = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DeadStockTransactionComponent_div_53_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DeadStockTransactionComponent_Template_input_change_58_listener() { return ctx.isFormA(1); })("ngModelChange", function DeadStockTransactionComponent_Template_input_ngModelChange_58_listener($event) { return ctx.radioDeadStock = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Transfer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DeadStockTransactionComponent_Template_input_change_63_listener() { return ctx.isFormA(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, DeadStockTransactionComponent_div_68_Template, 25, 8, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, DeadStockTransactionComponent_div_69_Template, 22, 13, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, DeadStockTransactionComponent_div_72_Template, 10, 2, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ng-select", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_Template_ng_select_ngModelChange_83_listener($event) { return ctx.ngItem = $event; })("change", function DeadStockTransactionComponent_Template_ng_select_change_83_listener($event) { return ctx.getItemDetails($event); })("focus", function DeadStockTransactionComponent_Template_ng_select_focus_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](84); return ctx.onFocus(_r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, DeadStockTransactionComponent_ng_option_85_Template, 2, 3, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DeadStockTransactionComponent_Template_input_keyup_94_listener() { return ctx.getRate(); })("focus", function DeadStockTransactionComponent_Template_input_focus_94_listener($event) { return ctx.selectAllContent($event); })("keypress", function DeadStockTransactionComponent_Template_input_keypress_94_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DeadStockTransactionComponent_Template_input_keypress_103_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DeadStockTransactionComponent_Template_input_keyup_112_listener() { return ctx.getRate(); })("focus", function DeadStockTransactionComponent_Template_input_focus_112_listener($event) { return ctx.selectAllContent($event); })("focusout", function DeadStockTransactionComponent_Template_input_focusout_112_listener($event) { return ctx.getDecimalPoint($event); })("keypress", function DeadStockTransactionComponent_Template_input_keypress_112_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_Template_button_click_114_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Add Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "table", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, DeadStockTransactionComponent_tbody_130_Template, 7, 1, "tbody", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, DeadStockTransactionComponent_tbody_131_Template, 4, 0, "tbody", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, DeadStockTransactionComponent_button_134_Template, 2, 0, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, DeadStockTransactionComponent_button_135_Template, 2, 0, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, DeadStockTransactionComponent_button_136_Template, 2, 0, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, DeadStockTransactionComponent_button_138_Template, 2, 0, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, DeadStockTransactionComponent_button_140_Template, 2, 0, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, DeadStockTransactionComponent_button_141_Template, 2, 0, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "app-modal-basic", 56, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h4", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Narration Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_Template_button_click_147_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](143); return _r19.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "perfect-scrollbar", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "table", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Narration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, DeadStockTransactionComponent_tr_159_Template, 2, 1, "tr", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "button", 67, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_Template_button_click_160_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](143); return _r19.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngBranchCode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c2, ctx.formSubmitted))("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["BRANCH_CODE"].invalid && (ctx.angForm.controls["BRANCH_CODE"].dirty || ctx.angForm.controls["BRANCH_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngtransactiondate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.transactiontype)("selectOnTab", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c2, ctx.formSubmitted))("ngModel", ctx.ngtransactiontype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["TRANSACTION_TYPE"].invalid && (ctx.angForm.controls["TRANSACTION_TYPE"].dirty || ctx.angForm.controls["TRANSACTION_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioDeadStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.GLAccount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Resolution);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Narration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.itemcode)("ngModel", ctx.ngItem)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c2, ctx.formSubmitted))("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.itemArr == null ? null : ctx.itemArr.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.itemArr == null ? null : ctx.itemArr.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.approveShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newbtnShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rejectShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.approveShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unapproveShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.narrationList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _theme_directive__WEBPACK_IMPORTED_MODULE_15__["ThemeDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], angular_datatables__WEBPACK_IMPORTED_MODULE_17__["DataTableDirective"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_18__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["ɵr"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerInputDirective"], _button_directive__WEBPACK_IMPORTED_MODULE_21__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerDirective"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.errspan[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 21px;\n  margin-top: -20px;\n  position: relative;\n  z-index: 2;\n  color: red;\n}\n\n.deadstock[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 49%;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: ridge;\n  border-color: #817d7de3;\n  padding: 0.7%;\n  margin-bottom: 3px;\n  padding-right: 12px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #ff5252;\n  color: #ff5252;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 11px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 14px;\n  border-radius: 5px;\n  padding-bottom: 22px;\n  padding-top: 4px;\n  height: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 13px;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px !important;\n  max-height: 18px !important;\n  align-items: center;\n  font-size: 11px;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 18px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 5px;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 5px;\n  padding-left: 15px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vZGVhZC1zdG9jay10cmFuc2FjdGlvbi9kZWFkLXN0b2NrLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUVFLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFFRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBc0VFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSEYiLCJmaWxlIjoic3JjL2FwcC90aGVtZS90cmFuc2FjdGlvbi9kZWFkLXN0b2NrLXRyYW5zYWN0aW9uL2RlYWQtc3RvY2stdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5lcnJzcGFuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5kZWFkc3RvY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNDklO1xyXG59XHJcblxyXG5kaXYuc29saWQge1xyXG4gIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXN0eWxlOiByaWRnZTtcclxuICBib3JkZXItY29sb3I6ICM4MTdkN2RlMztcclxuICAvLyBwYWRkaW5nOiAwLjUlO1xyXG4gIHBhZGRpbmc6IDAuNyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmY1MjUyO1xyXG4gIGNvbG9yOiAjZmY1MjUyO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAvLyBmbG9hdDogbGVmdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIycHg7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAvLyBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICBjb2xvcjogIzMzMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1pbi1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCAuYm9yZGVyLWxhYmxlLWZsdCAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIGhlaWdodDogMjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHBhZGRpbmc6IDByZW0gMC43cmVtO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1ibG9jayB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jb2wtMSxcclxuLmNvbC0yLFxyXG4uY29sLTMsXHJcbi5jb2wtNCxcclxuLmNvbC01LFxyXG4uY29sLTYsXHJcbi5jb2wtNyxcclxuLmNvbC04LFxyXG4uY29sLTksXHJcbi5jb2wtMTAsXHJcbi5jb2wtMTEsXHJcbi5jb2wtMTIsXHJcbi5jb2wsXHJcbi5jb2wtYXV0byxcclxuLmNvbC1zbS0xLFxyXG4uY29sLXNtLTIsXHJcbi5jb2wtc20tMyxcclxuLmNvbC1zbS00LFxyXG4uY29sLXNtLTUsXHJcbi5jb2wtc20tNixcclxuLmNvbC1zbS03LFxyXG4uY29sLXNtLTgsXHJcbi5jb2wtc20tOSxcclxuLmNvbC1zbS0xMCxcclxuLmNvbC1zbS0xMSxcclxuLmNvbC1zbS0xMixcclxuLmNvbC1zbSxcclxuLmNvbC1zbS1hdXRvLFxyXG4uY29sLW1kLTEsXHJcbi5jb2wtbWQtMixcclxuLmNvbC1tZC0zLFxyXG4uY29sLW1kLTQsXHJcbi5jb2wtbWQtNSxcclxuLmNvbC1tZC02LFxyXG4uY29sLW1kLTcsXHJcbi5jb2wtbWQtOCxcclxuLmNvbC1tZC05LFxyXG4uY29sLW1kLTEwLFxyXG4uY29sLW1kLTExLFxyXG4uY29sLW1kLTEyLFxyXG4uY29sLW1kLFxyXG4uY29sLW1kLWF1dG8sXHJcbi5jb2wtbGctMSxcclxuLmNvbC1sZy0yLFxyXG4uY29sLWxnLTMsXHJcbi5jb2wtbGctNCxcclxuLmNvbC1sZy01LFxyXG4uY29sLWxnLTYsXHJcbi5jb2wtbGctNyxcclxuLmNvbC1sZy04LFxyXG4uY29sLWxnLTksXHJcbi5jb2wtbGctMTAsXHJcbi5jb2wtbGctMTEsXHJcbi5jb2wtbGctMTIsXHJcbi5jb2wtbGcsXHJcbi5jb2wtbGctYXV0byxcclxuLmNvbC14bC0xLFxyXG4uY29sLXhsLTIsXHJcbi5jb2wteGwtMyxcclxuLmNvbC14bC00LFxyXG4uY29sLXhsLTUsXHJcbi5jb2wteGwtNixcclxuLmNvbC14bC03LFxyXG4uY29sLXhsLTgsXHJcbi5jb2wteGwtOSxcclxuLmNvbC14bC0xMCxcclxuLmNvbC14bC0xMSxcclxuLmNvbC14bC0xMixcclxuLmNvbC14bCxcclxuLmNvbC14bC1hdXRvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeadStockTransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dead-stock-transaction',
                templateUrl: './dead-stock-transaction.component.html',
                styleUrls: ['./dead-stock-transaction.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_8__["SystemMasterParametersService"] }, { type: _dead_stock_transaction_service__WEBPACK_IMPORTED_MODULE_9__["DeadStockTransactionService"] }, { type: _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ACMasterDropdownService"] }, { type: src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SchemeCodeDropdownService"] }, { type: src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__["SchemeAccountNoService"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OwnbranchMasterService"] }, { type: _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectConfig"] }]; }, { childMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], triggerhide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }], reloadTablePassing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: DeadStockTransactionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadStockTransactionModule", function() { return DeadStockTransactionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dead_stock_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dead-stock-transaction.component */ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.component.ts");
/* harmony import */ var _dead_stock_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dead-stock-transaction-routing.module */ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _dead_stock_transaction_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dead-stock-transaction.service */ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../theme.module */ "./src/app/theme/theme.module.ts");








// import {SelectModule} from 'ng-select';












class DeadStockTransactionModule {
}
DeadStockTransactionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DeadStockTransactionModule });
DeadStockTransactionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DeadStockTransactionModule_Factory(t) { return new (t || DeadStockTransactionModule)(); }, providers: [src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["ACMasterDropdownService"], _dead_stock_transaction_service__WEBPACK_IMPORTED_MODULE_14__["DeadStockTransactionService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__["SchemeAccountNoService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_13__["SystemMasterParametersService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dead_stock_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeadStockTransactionRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            // SelectModule
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"].forRoot(),
            _theme_module__WEBPACK_IMPORTED_MODULE_17__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeadStockTransactionModule, { declarations: [_dead_stock_transaction_component__WEBPACK_IMPORTED_MODULE_2__["DeadStockTransactionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dead_stock_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeadStockTransactionRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
        // SelectModule
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"], _theme_module__WEBPACK_IMPORTED_MODULE_17__["ThemeModule"]], exports: [_dead_stock_transaction_component__WEBPACK_IMPORTED_MODULE_2__["DeadStockTransactionComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeadStockTransactionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dead_stock_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeadStockTransactionRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                    // SelectModule
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"].forRoot(),
                    _theme_module__WEBPACK_IMPORTED_MODULE_17__["ThemeModule"]
                ],
                providers: [src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["ACMasterDropdownService"], _dead_stock_transaction_service__WEBPACK_IMPORTED_MODULE_14__["DeadStockTransactionService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__["SchemeAccountNoService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_13__["SystemMasterParametersService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
                        multi: true
                    },],
                declarations: [_dead_stock_transaction_component__WEBPACK_IMPORTED_MODULE_2__["DeadStockTransactionComponent"]],
                exports: [_dead_stock_transaction_component__WEBPACK_IMPORTED_MODULE_2__["DeadStockTransactionComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.service.ts ***!
  \********************************************************************************************/
/*! exports provided: DeadStockTransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadStockTransactionService", function() { return DeadStockTransactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class DeadStockTransactionService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/deadstock-purchase/TranInsert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Please Input Proper Data!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    //get narration data
    getNarrationMaster() {
        return this.http.get(this.url + '/narration');
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/deadstock-purchase/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/deadstock-purchase/tranUpdate', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/dead-stock-transaction/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    //approve master
    approve(data) {
        return this.http.post(this.url + '/deadstock-purchase/DeadstockTranapprove', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    //unapprove master
    unapprove(data) {
        return this.http.post(this.url + '/deadstock-purchase/unapprove', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    //reject master
    reject(data) {
        return this.http.post(this.url + '/deadstock-purchase/reject', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
}
DeadStockTransactionService.ɵfac = function DeadStockTransactionService_Factory(t) { return new (t || DeadStockTransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
DeadStockTransactionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeadStockTransactionService, factory: DeadStockTransactionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeadStockTransactionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~centralised-passing-centralisedPassing-module~dead-stock-transaction-dead-stock-transaction-~b51d2599.js.map