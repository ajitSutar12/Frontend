(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~centralised-passing-centralisedPassing-module~multi-voucher-multi-voucher-module"],{

/***/ "./src/app/theme/transaction/multi-voucher/multi-voucher-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/transaction/multi-voucher/multi-voucher-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: MultiVoucherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiVoucherRoutingModule", function() { return MultiVoucherRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _multi_voucher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multi-voucher.component */ "./src/app/theme/transaction/multi-voucher/multi-voucher.component.ts");





const routes = [
    {
        path: '',
        component: _multi_voucher_component__WEBPACK_IMPORTED_MODULE_2__["MultiVoucherComponent"],
        data: {
            title: 'Multi Voucher',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class MultiVoucherRoutingModule {
}
MultiVoucherRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MultiVoucherRoutingModule });
MultiVoucherRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MultiVoucherRoutingModule_Factory(t) { return new (t || MultiVoucherRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MultiVoucherRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiVoucherRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/multi-voucher/multi-voucher.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/transaction/multi-voucher/multi-voucher.component.ts ***!
  \****************************************************************************/
/*! exports provided: MultiVoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiVoucherComponent", function() { return MultiVoucherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/elements/transaction-cash-mode.service */ "./src/app/shared/elements/transaction-cash-mode.service.ts");
/* harmony import */ var _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/elements/transaction-transfer-mode.service */ "./src/app/shared/elements/transaction-transfer-mode.service.ts");
/* harmony import */ var _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/elements/scheme-type.service */ "./src/app/shared/elements/scheme-type.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _multi_voucher_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./multi-voucher.service */ "./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts");
/* harmony import */ var _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../master/customer/saving-master/saving-master.service */ "./src/app/theme/master/customer/saving-master/saving-master.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");



















const _c0 = ["triggerhide"];
function MultiVoucherComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.previewImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MultiVoucherComponent_ng_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r19.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r19.label, "");
} }
function MultiVoucherComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_28_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["branch_code"].errors == null ? null : ctx_r2.angForm.controls["branch_code"].errors.required);
} }
function MultiVoucherComponent_ng_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r21.S_ACNOTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r21.S_ACNOTYPE);
} }
function MultiVoucherComponent_div_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_49_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.angForm.controls["scheme_type"].errors == null ? null : ctx_r4.angForm.controls["scheme_type"].errors.required);
} }
function MultiVoucherComponent_ng_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r23.S_APPL, " ", item_r23.S_NAME, "");
} }
function MultiVoucherComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_60_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["scheme"].errors == null ? null : ctx_r6.angForm.controls["scheme"].errors.required);
} }
function MultiVoucherComponent_ng_option_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r25.AC_NO, " ", item_r25.AC_NAME, "");
} }
function MultiVoucherComponent_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_72_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["account_no"].errors == null ? null : ctx_r8.angForm.controls["account_no"].errors.required);
} }
function MultiVoucherComponent_ng_option_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r27.id, " ", item_r27.value, "");
} }
function MultiVoucherComponent_div_84_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_84_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["tran_mode"].errors == null ? null : ctx_r10.angForm.controls["tran_mode"].errors.required);
} }
const _c1 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function MultiVoucherComponent_div_93_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cheque No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cheque Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1))("maxDate", ctx_r29.maxDate);
} }
function MultiVoucherComponent_div_93_ng_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r31.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r31.name, "");
} }
function MultiVoucherComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_93_div_1_Template, 15, 3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ng-select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_div_93_Template_ng_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.bank = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MultiVoucherComponent_div_93_ng_option_10_Template, 2, 2, "ng-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.showChequeDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.bank);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.bankName);
} }
function MultiVoucherComponent_div_110_tr_18_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_div_110_tr_18_td_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.IntersetHeadDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1))("ngModel", ctx_r37.IntersetHeadDate);
} }
function MultiVoucherComponent_div_110_tr_18_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function MultiVoucherComponent_div_110_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiVoucherComponent_div_110_tr_18_td_3_Template, 2, 3, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiVoucherComponent_div_110_tr_18_td_4_Template, 1, 0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function MultiVoucherComponent_div_110_tr_18_Template_input_keypress_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); return $event.charCode >= 48 && $event.charCode < 58; })("keyup", function MultiVoucherComponent_div_110_tr_18_Template_input_keyup_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const i_r36 = ctx.index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.getInputHeadAmt($event, i_r36); })("focusout", function MultiVoucherComponent_div_110_tr_18_Template_input_focusout_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.decimalAllContent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r35.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r35.INTEREST_DATE_INPUT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r35.INTEREST_DATE_INPUT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r34.EditFlag ? item_r35.Amount : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r35.DRCR_APPLICABLE == "C" ? "Cr" : "Dr");
} }
function MultiVoucherComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Head");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Interset Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Interset Amt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MultiVoucherComponent_div_110_tr_18_Template, 12, 5, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.headData);
} }
function MultiVoucherComponent_button_113_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_button_113_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.Add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_button_114_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_button_114_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_ng_container_131_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r52 = ctx.$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r52.SHORT_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r52.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r52.Amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r52.DRCR_APPLICABLE == "C" ? ctx_r51.CR : ctx_r51.DR);
} }
function MultiVoucherComponent_ng_container_131_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_ng_container_131_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const in_r50 = ctx.index; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.showHide(in_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_ng_container_131_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const in_r50 = ctx.index; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.editVoucher(in_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_ng_container_131_Template_span_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const in_r50 = ctx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.deleteData(in_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Head");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Int. Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Int. Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Balance Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MultiVoucherComponent_ng_container_131_tr_34_Template, 11, 4, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    const in_r50 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.scheme_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.scheme.S_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.account_no.BANKACNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.tran_mode.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.total_amt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", in_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r49.InputHead);
} }
function MultiVoucherComponent_tr_267_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_tr_267_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const item_r57 = ctx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.getNarration(item_r57.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r57.NARRATION, " ");
} }
// Handling datatable data
class DataTableResponse {
}
class MultiVoucherComponent {
    constructor(TransactionCashModeService, TransactionTransferModeService, SchemeTypeService, ownbranchMasterService, _SchemeCodeDropdown, _service, savingMasterService, fb, router) {
        this.TransactionCashModeService = TransactionCashModeService;
        this.TransactionTransferModeService = TransactionTransferModeService;
        this.SchemeTypeService = SchemeTypeService;
        this.ownbranchMasterService = ownbranchMasterService;
        this._SchemeCodeDropdown = _SchemeCodeDropdown;
        this._service = _service;
        this.savingMasterService = savingMasterService;
        this.fb = fb;
        this.router = router;
        this.branchCode = null;
        this.branch_codeList = null;
        this.allScheme = new Array(); //from schme master
        this.Pass = 0;
        this.Unpass = 0;
        this.ClearBalance = 0;
        this.AfterVoucher = 0;
        this.InputHeadAmt = 0.00;
        this.EditFlag = false;
        //object created to get data when row is clicked
        this.TranModeTransfer = [
            { id: 1, value: 'Credit Transfer', tran_drcr: 'C', tran_type: 'TR' },
            { id: 2, value: 'Credit Transfer for Closing', tran_drcr: 'C', tran_type: 'TR' },
            { id: 3, value: 'Credit Transfer for Penal Interest', tran_drcr: 'C', tran_type: 'TR' },
            { id: 4, value: 'Debit Transfer', tran_drcr: 'D', tran_type: 'TR' },
            { id: 5, value: 'Debit Transfer for Closing', tran_drcr: 'D', tran_type: 'TR' },
            { id: 6, value: 'Debit Transfer Interest', tran_drcr: 'D', tran_type: 'TR' },
            { id: 7, value: 'Debit Transfer Dividend', tran_drcr: 'D', tran_type: 'TR' },
            { id: 8, value: 'Debit Transfer for Demand Draft', tran_drcr: 'D', tran_type: 'TR' },
            { id: 9, value: 'Debit Interest on Account', tran_drcr: 'D', tran_type: 'TR' },
            { id: 10, value: 'Credit Interest on Account', tran_drcr: 'C', tran_type: 'TR' },
            { id: 11, value: 'Debit Transfer for Penal Interest', tran_drcr: 'D', tran_type: 'TR' },
            { id: 12, value: 'Debit Monthly Recovery', tran_drcr: 'D', tran_type: 'TR' },
            { id: 13, value: 'Debit for Pay Order', tran_drcr: 'D', tran_type: 'TR' },
            { id: 14, value: 'Credit Transfer for Rebit Interest', tran_drcr: 'C', tran_type: 'TR' },
            { id: 15, value: 'Credit Transfer for Closing With Branch Transfer', tran_drcr: 'C', tran_type: 'TR' }
        ];
        this.TranModeCash = [
            { id: 1, value: 'Deposit / Receipts', tran_drcr: 'C', tran_type: 'CS' },
            { id: 2, value: 'Deposit Closing', tran_drcr: 'C', tran_type: 'CS' },
            { id: 3, value: 'Deposit Penal Interest', tran_drcr: 'D', tran_type: 'CS' },
            { id: 4, value: 'Withdrawals / Payments', tran_drcr: 'D', tran_type: 'CS' },
            { id: 5, value: 'Withdrawals for Closing', tran_drcr: 'D', tran_type: 'CS' },
            { id: 6, value: 'Withdrawals Interest', tran_drcr: 'D', tran_type: 'CS' },
            { id: 7, value: 'Withdrawals Dividend', tran_drcr: 'D', tran_type: 'CS' },
            { id: 10, value: 'Credit Interest on Account', tran_drcr: 'C', tran_type: 'CS' },
            { id: 13, value: 'Deposit for Pay Order', tran_drcr: 'C', tran_type: 'CS' },
            { id: 14, value: 'Deposit for Rebit Interest', tran_drcr: 'C', tran_type: 'CS' },
        ];
        //////////////////////////////////////////////////////
        ////////////////////Scheme type wise tran mode //////
        this.TranData = [
            { key: 'AG', data: { cash: [1, 4, 5], transfer: [1, 4] } },
            { key: 'SB', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5] } },
            { key: 'CA', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5] } },
            { key: 'CC', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5, 9] } },
            { key: 'DS', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9, 15] } },
            { key: 'LN', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9, 15] } },
            { key: 'GL', data: { cash: [1, 4], transfer: [1, 4] } },
            { key: 'GS', data: { cash: [1, 4], transfer: [1, 4] } },
            { key: 'SH', data: { cash: [1, 4, 5, 7], transfer: [1, 4, 5, 7] } },
            { key: 'IV', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9] } },
            { key: 'PG', data: { cash: [1, 4, 5, 10], transfer: [1, 4, 5, 10] } },
            { key: 'TD', data: { cash: [1, 4, 5, 6, 10], transfer: [1, 4, 5, 6, 9, 10] } },
        ];
        this.bankName = [
            {
                name: 'Bank of India',
                id: 1
            },
            {
                name: 'State bank of India',
                id: 2
            }
        ];
        this.isture = true;
        this.showChequeDetails = false;
        this.headShow = false;
        this.mainMaster = new Array();
        this.showAdd = true;
        this.showUpdate = false;
        this.customerImg = '../../../../assets/images/user-card/img-round4.jpg';
        this.signture = '../../../../assets/sign/signture.jpg';
        this.DatatableHideShow = true;
        this.rejectShow = false;
        this.approveShow = false;
        this.PreviewDiv = false;
        if (this.childMessage != undefined) {
            this.editClickHandler(this.childMessage);
        }
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate());
    }
    ngOnInit() {
        this.createForm();
        //Day opening Amount
        this.DayOpBal = 1000;
        // get session branch data
        let user = JSON.parse(localStorage.getItem('user'));
        this.type = 'tranfer';
        this.tranModeList = this.TranModeCash;
        //get syspara details
        this._service.getSysParaData().subscribe(data => {
            debugger;
            // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
            this.date = data[0].CURRENT_DATE;
            console.log(this.date);
        });
        //branch List
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(data => {
            this.branch_code = data;
            this.selectedBranch = user.branchId;
        });
        //Scheme Code
        this._service.getSchemeCodeList().subscribe(data => {
            console.log(data);
            this.master = data;
            this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()];
        });
        //Narration List
        this._service.getNarrationMaster().subscribe(data => {
            this.narrationList = data;
        });
    }
    createForm() {
        this.angForm = this.fb.group({
            branch_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            temp_over_draft: [''],
            over_draft: [''],
            token: [''],
            particulars: [''],
            total_amt: [''],
            amt: [''],
            slip_no: [''],
            tran_mode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            account_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            scheme: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            scheme_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            date: [''],
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('cash'),
            chequeDate: [''],
            chequeNo: [''],
            bank: [''],
            Intdate: ['']
        });
    }
    selectedSchemeCode() {
        this.allScheme = [];
        this.master.forEach(element => {
            if (element.S_ACNOTYPE == this.selectedCode) {
                this.allScheme.push(element);
            }
        });
        let object = this.TranData.find(t => t.key === this.selectedCode);
        if (this.type == 'cash') {
            this.tranModeList = [];
            object.data.cash.forEach(ele => {
                debugger;
                let obj = this.TranModeCash.find(t => t.id === ele);
                this.tranModeList.push(obj);
            });
        }
        else {
            this.tranModeList = [];
            object.data.transfer.forEach(ele => {
                let obj = this.TranModeTransfer.find(t => t.id === ele);
                this.tranModeList.push(obj);
            });
        }
        //get Head details
        let obj = { 'code': this.selectedCode };
        let date = this.date;
        var rowData = date.split('/');
        let lastdate = Number(rowData[0]) - 1;
        // let result    = rowData[2]+'-'+rowData[1]+'-'+lastdate;
        this.IntersetHeadDate = lastdate + '/' + rowData[1] + '/' + rowData[2];
        console.log('IntrestDate', this.IntersetHeadDate);
        this._service.getHeadDetails(obj).subscribe(data => {
            if (data.length != 0) {
                this.headData = data;
                this.headShow = true;
                this.headData.forEach(element => {
                    element['date'] = this.IntersetHeadDate;
                    element['Amount'] = 0.00;
                });
                console.log(this.headData);
            }
            else {
                this.headShow = false;
            }
        }, err => {
            console.log(err);
        });
    }
    //get account no according scheme for introducer
    getIntroducer() {
        this.introducerACNo = [];
        this.obj = [this.selectedScheme.id, this.selectedBranch];
        switch (this.selectedCode) {
            case 'SB':
                this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'SH':
                this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'CA':
                this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'LN':
                this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'TD':
                this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'DS':
                this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'CC':
                this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'GS':
                this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'PG':
                this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'AG':
                this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'IV':
                this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
        }
    }
    //Transaction mode select
    transactionMode(mode) {
        this.type = mode;
        let object = this.TranData.find(t => t.key === this.selectedCode);
        if (this.type == 'cash') {
            this.tranModeList = [];
            object.data.cash.forEach(ele => {
                debugger;
                let obj = this.TranModeCash.find(t => t.id === ele);
                this.tranModeList.push(obj);
            });
        }
        else {
            this.tranModeList = [];
            object.data.transfer.forEach(ele => {
                let obj = this.TranModeTransfer.find(t => t.id === ele);
                this.tranModeList.push(obj);
            });
        }
    }
    //get Narration Details 
    getNarration(ele) {
        this.particulars = ele;
        let el = this.triggerhide.nativeElement;
        el.click();
    }
    //submit Form
    Add() {
        debugger;
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = this.angForm.value;
        obj['user'] = user;
        obj['InputHead'] = this.headData;
        console.log(obj);
        this.mainMaster.push(obj);
        this.angForm.controls['temp_over_draft'].reset();
        this.angForm.controls['over_draft'].reset();
        this.angForm.controls['token'].reset();
        this.angForm.controls['particulars'].reset();
        this.angForm.controls['total_amt'].reset();
        this.angForm.controls['amt'].reset();
        this.angForm.controls['slip_no'].reset();
        this.angForm.controls['tran_mode'].reset();
        this.angForm.controls['account_no'].reset();
        this.angForm.controls['scheme'].reset();
        this.angForm.controls['scheme_type'].reset();
        this.angForm.controls['type'].reset();
        this.angForm.controls['chequeDate'].reset();
        this.angForm.controls['chequeDate'].reset();
        this.angForm.controls['chequeNo'].reset();
        this.angForm.controls['bank'].reset();
        // this.getVoucherData();
        this.headData = [];
        this.headShow = false;
        this.showChequeDetails = false;
    }
    submit() {
        this._service.insertVoucher(this.mainMaster).subscribe(data => {
            // this.getVoucherData();
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', 'Voucher update Successfully !', 'success');
            this.mainMaster = [];
            this.headData = [];
            this.headShow = false;
        }, err => {
            console.log(err);
        });
    }
    //get Amount Details
    getAmt(ele) {
        this.totalAmt = ele.target.value + '.00';
    }
    //Mode data
    changeMode() {
        debugger;
        if (this.selectedMode.tran_drcr == 'D') {
            this.showChequeDetails = true;
        }
        else {
            this.showChequeDetails = false;
        }
        if (this.selectedCode == 'GL') {
            this.showChequeDetails = true;
        }
    }
    //get customer today voucher data
    getVoucherData() {
        debugger;
        let customer = this.angForm.controls['account_no'].value;
        let obj = {
            'customer': customer.BANKACNO,
            'date': this.date
        };
        //Check Account Close or not
        let Obj = {
            'customer_ACNO': customer.BANKACNO,
            'type': this.selectedCode
        };
        this._service.checkAccountCloseOrNot(Obj).subscribe(data => {
            if (data == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'Access dined Account Close Already!', 'error');
                return 0;
            }
        }, err => {
            console.log(err);
        });
        this._service.getVoucherPassAndUnpassData(obj).subscribe(data => {
            debugger;
            let passType = '';
            let unpassType = '';
            //DayOfOpening 
            this.ClearBalance = this.ClearBalance + this.DayOpBal;
            //Pass condition checked
            if (data.passObj.pass == undefined) {
                this.Pass = 0;
                passType = 'Cr';
            }
            else {
                this.Pass = data.passObj.pass;
                passType = data.passObj.type;
            }
            //Unpass condition checked
            if (data.unpassObj.UnPass == undefined) {
                this.Unpass = 0;
                let unpassType = 'Cr';
            }
            else {
                this.Unpass = data.unpassObj.UnPass;
                let unpassType = data.unpassObj.type;
            }
            if (passType == 'Cr') {
                this.ClearBalance = this.Pass + this.ClearBalance;
            }
            else {
                this.ClearBalance = this.Pass - this.ClearBalance;
            }
            if (unpassType == 'Cr') {
                this.ClearBalance = this.Unpass + this.ClearBalance;
            }
            else {
                this.ClearBalance = this.Unpass - this.ClearBalance;
            }
            // this.ClearBalance = this.DayOpBal + this.Pass + this.Unpass;
            this.AfterVoucher = this.ClearBalance;
        }, err => {
            console.log(err);
        });
    }
    //get Input head Amount
    getInputHeadAmt(ele, i) {
        let value = ele.target.value;
        this.headData[i].Amount = value;
        console.log(this.headData);
    }
    //decimal content show purpose wrote below function
    decimalAllContent($event) {
        let value = Number($event.target.value);
        let data = value.toFixed(2);
        $event.target.value = data;
    }
    hideImage() {
        // document.getElementById("full").src = "";
        this.previewImg = '';
        this.PreviewDiv = false;
    }
    showImage(img) {
        var src = img;
        console.log(src);
        var largeSrc = src.replace('small', 'large');
        this.previewImg = src;
        this.PreviewDiv = true;
        // document.getElementById('full').src = largeSrc;
    }
    showHide(reportId) {
        debugger;
        var ev = document.getElementById(reportId).hidden;
        if (ev) {
            document.getElementById(reportId).hidden = false;
        }
        else {
            document.getElementById(reportId).hidden = true;
        }
    }
    deleteData(index) {
        this.mainMaster.splice(index, 1);
    }
    //Edit Voucher Data
    editVoucher(index) {
        debugger;
        this.EditFlag = true;
        this.index = index;
        var data = this.mainMaster[index];
        this.selectedCode = data.scheme_type;
        this.selectedScheme = data.scheme;
        this.customer = data.account_no;
        this.selectedMode = data.tran_mode;
        this.particulars = data.particulars;
        this.bank = data.bank;
        this.angForm.patchValue({
            'chequeNo': data.chequeNo,
            'chequeDate': data.chequeDate,
            'amt': data.Amount,
            'particulars': data.particulars,
            'total_amt': data.total_amt
        });
        // this.changeMode();
        this.headData = data.InputHead;
        if (this.headData.length > 0) {
            this.headShow = true;
        }
        if (data.chequeDate != '') {
            this.showChequeDetails = true;
        }
        this.showAdd = false;
        this.showUpdate = true;
    }
    update() {
        this.mainMaster[this.index] = this.angForm.value;
        this.showAdd = true;
        this.showUpdate = false;
        this.EditFlag = false;
        this.angForm.controls['temp_over_draft'].reset();
        this.angForm.controls['over_draft'].reset();
        this.angForm.controls['token'].reset();
        this.angForm.controls['particulars'].reset();
        this.angForm.controls['total_amt'].reset();
        this.angForm.controls['amt'].reset();
        this.angForm.controls['slip_no'].reset();
        this.angForm.controls['tran_mode'].reset();
        this.angForm.controls['account_no'].reset();
        this.angForm.controls['scheme'].reset();
        this.angForm.controls['scheme_type'].reset();
        this.angForm.controls['type'].reset();
        this.angForm.controls['chequeDate'].reset();
        this.angForm.controls['chequeDate'].reset();
        this.angForm.controls['chequeNo'].reset();
        this.angForm.controls['bank'].reset();
        // this.getVoucherData();
        this.headData = [];
        this.headShow = false;
        this.showChequeDetails = false;
    }
    editClickHandler(id) { }
}
MultiVoucherComponent.ɵfac = function MultiVoucherComponent_Factory(t) { return new (t || MultiVoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_4__["TransactionCashModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_5__["TransactionTransferModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_6__["SchemeTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_7__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multi_voucher_service__WEBPACK_IMPORTED_MODULE_9__["MultiVoucherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_10__["SavingMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"])); };
MultiVoucherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiVoucherComponent, selectors: [["app-multi-voucher"]], viewQuery: function MultiVoucherComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerhide = _t.first);
    } }, inputs: { childMessage: "childMessage" }, decls: 271, vars: 37, consts: [["style", "width: 270px;height: 335px;z-index: 1000;\n    position: absolute;margin-top: 14%;margin-left:51%", 4, "ngIf"], [1, "row"], [1, "col-md-9"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "solid"], [1, "col-sm-12", "col-md-2"], ["for", "AC_BRANCH"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["formControlName", "branch_code", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-12", "col-md-4"], [1, "col-md-1"], [1, "col-sm-12", "col-md-1"], ["for", "AC_EXPDT"], [1, "col-md-2"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "date", "disabled", "", 1, "form-control", 3, "bsConfig", "ngModel", "isDisabled", "ngModelChange"], [1, "col-sm-2"], ["formControlName", "scheme_type", 3, "ngModel", "ngModelChange", "change"], [1, "col-sm-12", "col-md-6"], ["formControlName", "scheme", 3, "ngModel", "ngModelChange", "change"], [1, "col-sm-6"], ["formControlName", "account_no", 3, "ngModel", "ngModelChange", "change"], [1, "col-sm-4"], ["formControlName", "tran_mode", 3, "ngModel", "ngModelChange", "change"], ["for", "AC_PARTICULAR"], [1, "col-md-4"], ["formControlName", "particulars", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-info-circle", "errspan", 3, "click"], [4, "ngIf"], ["type", "text", "name", "AC_PARTICULAR", "placeholder", " ", "id", "AC_PARTICULAR", "maxlength", "15", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "required", "", "formControlName", "amt", 1, "form-control", 2, "text-transform", "capitalize", 3, "keypress", "focusout", "keyup"], ["type", "text", "name", "AC_PARTICULAR", "placeholder", " ", "id", "AC_PARTICULAR", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "required", "", "formControlName", "total_amt", "disabled", "", 1, "form-control", 2, "text-transform", "capitalize", "font-size", "15px", 3, "ngModel", "ngModelChange"], ["class", "row", 4, "ngIf"], ["class", "btn btn-sm", "style", "float: right;", 3, "click", 4, "ngIf"], ["class", "btn btn-sm", "style", "float: right", 3, "click", 4, "ngIf"], [1, "table", "table-bordered", "table-hover", "compact"], [2, "text-align", "right"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "text-center"], ["type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "col-md-3", "col-sm-12", "col-xm-12"], [1, "transaction-item"], [1, "d-flex"], [1, "avatar", "bg-light-primary", "rounded", "float-start"], [1, "avatar-content"], [1, "fa", "fa-google-wallet", "field-icon"], [1, "transaction-percentage"], [1, "transaction-title", 2, "font-size", "12px"], [1, "fw-bolder", "transaction-title", "text-primary", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], ["aria-hidden", "true", 1, "fa", "fa-inr"], [1, "avatar", "bg-light-success", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "avatar", "bg-light-danger", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-danger", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "col-md"], [1, "transaction-title", 2, "font-size", "15px"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "15px"], [1, "user-avatar-section"], [1, "d-flex", "align-items-center", "flex-column"], ["height", "110", "width", "110", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], [1, "user-info", "text-center"], ["height", "50", "width", "110", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], [1, "info-container"], [1, "list-unstyled"], [1, "mb-75"], [1, "fw-bolder", "me-25"], [1, "badge", "bg-light-success"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [1, "table", "table-bordered"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 2, "display", "none", 3, "click"], ["triggerhide", ""], [2, "width", "270px", "height", "335px", "z-index", "1000", "position", "absolute", "margin-top", "14%", "margin-left", "51%"], ["width", "400", "height", "300", 3, "src"], [3, "value"], [1, "alert", "alert-danger"], ["for", ""], [1, "col-md-6"], ["formControlName", "bank", 3, "ngModel", "ngModelChange"], ["for", "ChequeNo"], ["type", "text", "name", "ChequeNo", "placeholder", " ", "id", "ChequeNo", "value", "", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "required", "", "formControlName", "chequeNo", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "ChequeDate"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "chequeDate", 1, "form-control", 3, "bsConfig", "maxDate"], ["type", "text", 2, "width", "100%", "border", "none", "text-align", "right", 3, "value", "keypress", "keyup", "focusout"], [1, "bg-light-danger", "text-right"], [1, "text-danger"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "Intdate", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelChange"], [1, "btn", "btn-sm", 2, "float", "right", 3, "click"], [1, "fa", "fa-plus-circle", "grab", 3, "click"], [1, "fa", "fa-fw", "fa-edit", "field-icon", "grab", 3, "click"], [1, "fa", "fa-fw", "fa-trash-o", "grab", 3, "click"], [3, "id", "hidden"], [3, "click"]], template: function MultiVoucherComponent_Template(rf, ctx) { if (rf & 1) {
        const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiVoucherComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Multi Voucher Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Branch Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ng-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_26_listener($event) { return ctx.selectedBranch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MultiVoucherComponent_ng_option_27_Template, 2, 2, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MultiVoucherComponent_div_28_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_input_ngModelChange_37_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Scheme Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ng-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_47_listener($event) { return ctx.selectedCode = $event; })("change", function MultiVoucherComponent_Template_ng_select_change_47_listener() { return ctx.selectedSchemeCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MultiVoucherComponent_ng_option_48_Template, 2, 2, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MultiVoucherComponent_div_49_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ng-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_58_listener($event) { return ctx.selectedScheme = $event; })("change", function MultiVoucherComponent_Template_ng_select_change_58_listener() { return ctx.getIntroducer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, MultiVoucherComponent_ng_option_59_Template, 2, 3, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, MultiVoucherComponent_div_60_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Account No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ng-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_70_listener($event) { return ctx.customer = $event; })("change", function MultiVoucherComponent_Template_ng_select_change_70_listener() { return ctx.getVoucherData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, MultiVoucherComponent_ng_option_71_Template, 2, 3, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, MultiVoucherComponent_div_72_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Transaction Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ng-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_82_listener($event) { return ctx.selectedMode = $event; })("change", function MultiVoucherComponent_Template_ng_select_change_82_listener() { return ctx.changeMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, MultiVoucherComponent_ng_option_83_Template, 2, 3, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, MultiVoucherComponent_div_84_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Particulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "textarea", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_textarea_ngModelChange_91_listener($event) { return ctx.particulars = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_i_click_92_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](251); return _r16.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, MultiVoucherComponent_div_93_Template, 11, 3, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function MultiVoucherComponent_Template_input_keypress_101_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; })("focusout", function MultiVoucherComponent_Template_input_focusout_101_listener($event) { return ctx.decimalAllContent($event); })("keyup", function MultiVoucherComponent_Template_input_keyup_101_listener($event) { return ctx.getAmt($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_input_ngModelChange_109_listener($event) { return ctx.totalAmt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, MultiVoucherComponent_div_110_Template, 19, 1, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, MultiVoucherComponent_button_113_Template, 2, 0, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, MultiVoucherComponent_button_114_Template, 2, 0, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Scheme Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Account NO.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Transaction Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, MultiVoucherComponent_ng_container_131_Template, 35, 9, "ng-container", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_button_click_137_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Update");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Day Opening Bal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Unpassed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Uneffected Clearing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " 0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Cleared Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "After this voucher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "= ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MultiVoucherComponent_Template_img_mouseover_226_listener() { return ctx.showImage(ctx.customerImg); })("mouseout", function MultiVoucherComponent_Template_img_mouseout_226_listener() { return ctx.hideImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Ajit Sutar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MultiVoucherComponent_Template_img_mouseover_232_listener() { return ctx.showImage(ctx.signture); })("mouseout", function MultiVoucherComponent_Template_img_mouseout_232_listener() { return ctx.hideImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "ul", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "PAN ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "ADFE2323D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Contact:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "+91 7636456273");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "app-modal-basic", 75, 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h4", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Narration Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_button_click_255_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](251); return _r16.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "perfect-scrollbar", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "table", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Paticulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](267, MultiVoucherComponent_tr_267_Template, 2, 1, "tr", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "button", 85, 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_button_click_268_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](251); return _r16.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PreviewDiv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["branch_code"].invalid && (ctx.angForm.controls["branch_code"].dirty || ctx.angForm.controls["branch_code"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c1))("ngModel", ctx.date)("isDisabled", ctx.isture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allSchemeCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["scheme_type"].invalid && (ctx.angForm.controls["scheme_type"].dirty || ctx.angForm.controls["scheme_type"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["scheme"].invalid && (ctx.angForm.controls["scheme"].dirty || ctx.angForm.controls["scheme"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.introducerACNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["account_no"].invalid && (ctx.angForm.controls["account_no"].dirty || ctx.angForm.controls["account_no"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tranModeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["tran_mode"].invalid && (ctx.angForm.controls["tran_mode"].dirty || ctx.angForm.controls["tran_mode"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.particulars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showChequeDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.totalAmt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAdd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mainMaster);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.DayOpBal, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Pass, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.Unpass, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ClearBalance, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.AfterVoucher, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.customerImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.signture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.narrationList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_15__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵr"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 20px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.transaction-item[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.bg-light-primary[_ngcontent-%COMP%] {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367F0 !important;\n}\n\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.357rem !important;\n}\n\n.float-start[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin-right: 1.2rem;\n}\n\n.avatar.bg-light-primary[_ngcontent-%COMP%] {\n  color: #7367F0 !important;\n}\n\n.avatar.bg-light-success[_ngcontent-%COMP%] {\n  color: #28C76F !important;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background-color: #C3C3C3;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n  color: #FFF;\n  display: inline-flex;\n  font-size: 1rem;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 600;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n}\n\n.avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 0.857rem;\n}\n\n.bg-light-success[_ngcontent-%COMP%] {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28C76F !important;\n}\n\n.bg-light-danger[_ngcontent-%COMP%] {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #EA5455 !important;\n}\n\n.transaction-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.errspan[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 21px;\n  margin-top: -20px;\n  position: relative;\n  z-index: 2;\n  color: red;\n}\n\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: white !important;\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vbXVsdGktdm91Y2hlci9tdWx0aS12b3VjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUNDO0VBQ0csVUFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBRTtFQUNFLFdBQUE7QUFHSjs7QUFBRTtFQUFXLG1CQUFBO0VBQW9CLFdBQUE7QUFLakM7O0FBRkU7RUFDRSxxQkFBQTtBQUtKOztBQUhBO0VBQ0Usd0JBQUE7QUFNRjs7QUFIQTtFQUNFLGFBQUE7RUFJQSxtQkFBQTtFQUlBLDhCQUFBO0FBTUY7O0FBSkE7RUFFRSx3QkFBQTtBQU1GOztBQUpBO0VBQ0UsZ0RBQUE7RUFDQSx5QkFBQTtBQU9GOztBQUxBO0VBQ0Usa0NBQUE7QUFRRjs7QUFOQTtFQUNFLHNCQUFBO0FBU0Y7O0FBUEE7RUFDRSxvQkFBQTtBQVVGOztBQVBBO0VBQ0UseUJBQUE7QUFVRjs7QUFSQTtFQUNFLHlCQUFBO0FBV0Y7O0FBVEE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBSUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBWUY7O0FBVkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWFGOztBQVhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFJQSxhQUFBO0VBSUEsdUJBQUE7RUFJQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFjRjs7QUFYQTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7QUFjRjs7QUFaQTtFQUNFLDhDQUFBO0VBQ0EseUJBQUE7QUFlRjs7QUFaQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWVGOztBQVhBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBY0Y7O0FBWEE7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FBY0YiLCJmaWxlIjoic3JjL2FwcC90aGVtZS90cmFuc2FjdGlvbi9tdWx0aS12b3VjaGVyL211bHRpLXZvdWNoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuIH1cclxuIC5yZXF1aXJlZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgfVxyXG5cclxuICBkaXYuc29saWQge2JvcmRlci1zdHlsZTogc29saWQ7cGFkZGluZzoyJX1cclxuXHJcblxyXG4gIC5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcbi50cmFuc2FjdGlvbi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5kLWZsZXgge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxufVxyXG4uYmctbGlnaHQtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMTUsMTAzLDI0MCwuMTIpIWltcG9ydGFudDtcclxuICBjb2xvcjogIzczNjdGMCFpbXBvcnRhbnQ7XHJcbn1cclxuLnJvdW5kZWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzU3cmVtIWltcG9ydGFudDtcclxufVxyXG4uZmxvYXQtc3RhcnQge1xyXG4gIGZsb2F0OiBsZWZ0IWltcG9ydGFudDtcclxufVxyXG4uY2FyZC10cmFuc2FjdGlvbiAudHJhbnNhY3Rpb24taXRlbSAuYXZhdGFyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcclxufVxyXG5cclxuLmF2YXRhci5iZy1saWdodC1wcmltYXJ5IHtcclxuICBjb2xvcjogIzczNjdGMCFpbXBvcnRhbnQ7XHJcbn1cclxuLmF2YXRhci5iZy1saWdodC1zdWNjZXNzIHtcclxuICBjb2xvcjogIzI4Qzc2RiFpbXBvcnRhbnQ7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzNDM0MzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uY2FyZC10cmFuc2FjdGlvbiAudHJhbnNhY3Rpb24taXRlbSAuYXZhdGFyIC5hdmF0YXItY29udGVudCB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG59XHJcbi5hdmF0YXIgLmF2YXRhci1jb250ZW50IHtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAuODU3cmVtO1xyXG59XHJcblxyXG4uYmctbGlnaHQtc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwxOTksMTExLC4xMikhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMjhDNzZGIWltcG9ydGFudDtcclxufVxyXG4uYmctbGlnaHQtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCw4NCw4NSwuMTIpIWltcG9ydGFudDtcclxuICBjb2xvcjogI0VBNTQ1NSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi10aXRsZXtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbn1cclxuXHJcbi5lcnJzcGFuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0gXHJcblxyXG4uZm9ybS1jb250cm9sOmRpc2FibGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiVoucherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multi-voucher',
                templateUrl: './multi-voucher.component.html',
                styleUrls: ['./multi-voucher.component.scss'],
            }]
    }], function () { return [{ type: _shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_4__["TransactionCashModeService"] }, { type: _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_5__["TransactionTransferModeService"] }, { type: _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_6__["SchemeTypeService"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_7__["OwnbranchMasterService"] }, { type: src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeDropdownService"] }, { type: _multi_voucher_service__WEBPACK_IMPORTED_MODULE_9__["MultiVoucherService"] }, { type: _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_10__["SavingMasterService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }]; }, { childMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], triggerhide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/transaction/multi-voucher/multi-voucher.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/transaction/multi-voucher/multi-voucher.module.ts ***!
  \*************************************************************************/
/*! exports provided: MultiVoucherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiVoucherModule", function() { return MultiVoucherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multi-voucher.component */ "./src/app/theme/transaction/multi-voucher/multi-voucher.component.ts");
/* harmony import */ var _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multi-voucher-routing.module */ "./src/app/theme/transaction/multi-voucher/multi-voucher-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _multi_voucher_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./multi-voucher.service */ "./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var src_app_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/elements/transaction-cash-mode.service */ "./src/app/shared/elements/transaction-cash-mode.service.ts");
/* harmony import */ var src_app_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/elements/transaction-transfer-mode.service */ "./src/app/shared/elements/transaction-transfer-mode.service.ts");
/* harmony import */ var src_app_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/elements/scheme-type.service */ "./src/app/shared/elements/scheme-type.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../master/customer/saving-master/saving-master.service */ "./src/app/theme/master/customer/saving-master/saving-master.service.ts");






















class MultiVoucherModule {
}
MultiVoucherModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MultiVoucherModule });
MultiVoucherModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MultiVoucherModule_Factory(t) { return new (t || MultiVoucherModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["UserAuthInterceptor"],
            multi: true
        }, _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], _multi_voucher_service__WEBPACK_IMPORTED_MODULE_13__["MultiVoucherService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_14__["SchemeAccountNoService"], src_app_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_15__["TransactionCashModeService"], src_app_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_16__["TransactionTransferModeService"], src_app_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_17__["SchemeTypeService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["SchemeCodeDropdownService"], _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_19__["SavingMasterService"],], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__["MultiVoucherRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MultiVoucherModule, { declarations: [_multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__["MultiVoucherComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__["MultiVoucherRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"]], exports: [_multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__["MultiVoucherComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiVoucherModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__["MultiVoucherRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"].forRoot(),
                ],
                declarations: [_multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__["MultiVoucherComponent"]],
                exports: [_multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__["MultiVoucherComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["UserAuthInterceptor"],
                        multi: true
                    }, _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], _multi_voucher_service__WEBPACK_IMPORTED_MODULE_13__["MultiVoucherService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_14__["SchemeAccountNoService"], src_app_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_15__["TransactionCashModeService"], src_app_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_16__["TransactionTransferModeService"], src_app_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_17__["SchemeTypeService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["SchemeCodeDropdownService"], _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_19__["SavingMasterService"],]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~centralised-passing-centralisedPassing-module~multi-voucher-multi-voucher-module.js.map