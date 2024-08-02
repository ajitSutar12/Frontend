(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~e740a259"],{

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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/elements/transaction-cash-mode.service */ "./src/app/shared/elements/transaction-cash-mode.service.ts");
/* harmony import */ var _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/elements/transaction-transfer-mode.service */ "./src/app/shared/elements/transaction-transfer-mode.service.ts");
/* harmony import */ var _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/elements/scheme-type.service */ "./src/app/shared/elements/scheme-type.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _multi_voucher_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./multi-voucher.service */ "./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts");
/* harmony import */ var _voucher_entry_voucher_entry_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../voucher-entry/voucher-entry.service */ "./src/app/theme/transaction/voucher-entry/voucher-entry.service.ts");
/* harmony import */ var _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../master/customer/saving-master/saving-master.service */ "./src/app/theme/master/customer/saving-master/saving-master.service.ts");
/* harmony import */ var _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/dropdownService/bank-Master-dropdown.service */ "./src/app/shared/dropdownService/bank-Master-dropdown.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../master/customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../button.directive */ "./src/app/theme/button.directive.ts");



























const _c0 = ["triggerhide"];
const _c1 = ["triggrhide1"];
const _c2 = ["focusbutton"];
const _c3 = ["selectMode"];
const _c4 = ["amt"];
const _c5 = ["INTAMT"];
const _c6 = ["NOTINTAMT"];
const _c7 = ["submitbtn"];
const _c8 = ["bankNameField"];
const _c9 = ["narrationField"];
const _c10 = ["myDiv"];
function MultiVoucherComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.previewImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MultiVoucherComponent_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r49.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r49.label, "");
} }
function MultiVoucherComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_30_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.angForm.controls["branch_code"].errors == null ? null : ctx_r4.angForm.controls["branch_code"].errors.required);
} }
function MultiVoucherComponent_ng_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r51.S_ACNOTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r51.S_ACNOTYPE);
} }
function MultiVoucherComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_52_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["scheme_type"].errors == null ? null : ctx_r7.angForm.controls["scheme_type"].errors.required);
} }
function MultiVoucherComponent_ng_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r53.S_APPL, " ", item_r53.S_NAME, " ");
} }
function MultiVoucherComponent_div_64_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_64_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["scheme"].errors == null ? null : ctx_r10.angForm.controls["scheme"].errors.required);
} }
function MultiVoucherComponent_ng_option_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r55.AC_NO, " ", item_r55.AC_NAME, "");
} }
function MultiVoucherComponent_div_77_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_77_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.angForm.controls["account_no"].errors == null ? null : ctx_r13.angForm.controls["account_no"].errors.required);
} }
function MultiVoucherComponent_ng_option_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r57.id, " ", item_r57.value, "");
} }
function MultiVoucherComponent_div_90_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_90_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.angForm.controls["tran_mode"].errors == null ? null : ctx_r16.angForm.controls["tran_mode"].errors.required);
} }
const _c11 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function MultiVoucherComponent_div_101_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cheque No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function MultiVoucherComponent_div_101_div_1_Template_input_keyup_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.chequeNoData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cheque Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c11))("maxDate", ctx_r59.maxDate)("minDate", ctx_r59.minDate);
} }
function MultiVoucherComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_101_div_1_Template, 15, 4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 112, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_div_101_Template_textarea_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.selectBankName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_div_101_Template_i_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](319); return _r46.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.showChequeDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.selectBankName);
} }
function MultiVoucherComponent_div_119_tbody_17_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_div_119_tbody_17_tr_1_td_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r75.IntersetHeadDate = $event; })("bsValueChange", function MultiVoucherComponent_div_119_tbody_17_tr_1_td_3_Template_input_bsValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r77.getColumnValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c11))("ngModel", ctx_r71.IntersetHeadDate);
} }
function MultiVoucherComponent_div_119_tbody_17_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function MultiVoucherComponent_div_119_tbody_17_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 121, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function MultiVoucherComponent_div_119_tbody_17_tr_1_td_5_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); return $event.charCode == 46 || $event.charCode >= 48 && $event.charCode < 58; })("keyup", function MultiVoucherComponent_div_119_tbody_17_tr_1_td_5_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const i_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r81.getInputHeadAmt($event, i_r70); })("focusout", function MultiVoucherComponent_div_119_tbody_17_tr_1_td_5_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const i_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r83.checkBalanceFlag($event, i_r70); return ctx_r83.decimalAllContent($event.value); })("focus", function MultiVoucherComponent_div_119_tbody_17_tr_1_td_5_Template_input_focus_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r85.selectAllContent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r69.Amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r69.IS_GLBAL_MAINTAIN == "1" && (ctx_r73.selectedMode == 2 || ctx_r73.selectedMode == 5 || ctx_r73.selectedMode == 15 || ctx_r73.selectedMode == 6));
} }
function MultiVoucherComponent_div_119_tbody_17_tr_1_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 123, 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function MultiVoucherComponent_div_119_tbody_17_tr_1_td_6_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); return $event.charCode == 46 || $event.charCode >= 48 && $event.charCode < 58; })("keyup", function MultiVoucherComponent_div_119_tbody_17_tr_1_td_6_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const i_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r90.getInputHeadAmt($event, i_r70); })("focusout", function MultiVoucherComponent_div_119_tbody_17_tr_1_td_6_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const i_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r92.checkBalanceFlag($event, i_r70); return ctx_r92.decimalAllContent($event.value); })("focus", function MultiVoucherComponent_div_119_tbody_17_tr_1_td_6_Template_input_focus_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r94.selectAllContent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r69.Amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r69.IS_GLBAL_MAINTAIN == "1" && (ctx_r74.selectedMode == 2 || ctx_r74.selectedMode == 5 || ctx_r74.selectedMode == 15 || ctx_r74.selectedMode == 6));
} }
function MultiVoucherComponent_div_119_tbody_17_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiVoucherComponent_div_119_tbody_17_tr_1_td_3_Template, 2, 3, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiVoucherComponent_div_119_tbody_17_tr_1_td_4_Template, 1, 0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultiVoucherComponent_div_119_tbody_17_tr_1_td_5_Template, 3, 2, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MultiVoucherComponent_div_119_tbody_17_tr_1_td_6_Template, 3, 2, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r69.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r69.FIELD_AMOUNT == "INTEREST_AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r69.FIELD_AMOUNT != "INTEREST_AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r69.FIELD_AMOUNT == "INTEREST_AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r69.FIELD_AMOUNT != "INTEREST_AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r69.Balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r69.type);
} }
function MultiVoucherComponent_div_119_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiVoucherComponent_div_119_tbody_17_tr_1_Template, 12, 7, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r66.headData);
} }
function MultiVoucherComponent_div_119_tbody_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Head");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Interset Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MultiVoucherComponent_div_119_tbody_17_Template, 2, 1, "tbody", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MultiVoucherComponent_div_119_tbody_18_Template, 4, 0, "tbody", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r21.headData == null ? null : ctx_r21.headData.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r21.headData == null ? null : ctx_r21.headData.length) == 0);
} }
function MultiVoucherComponent_button_122_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_button_122_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); ctx_r96.Add(); return _r2.focus(); })("keydown.Tab", function MultiVoucherComponent_button_122_Template_button_keydown_Tab_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_button_123_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_button_123_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); ctx_r99.update(); return _r2.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_ng_container_143_tr_34_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r104 = ctx.$implicit;
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r104.SHORT_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r104.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r104.Amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r104.Balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r104.DRCR_APPLICABLE == "C" ? ctx_r103.CR : ctx_r103.DR);
} }
function MultiVoucherComponent_ng_container_143_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_ng_container_143_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const in_r102 = ctx.index; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.showHide(in_r102); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_ng_container_143_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const in_r102 = ctx.index; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.editVoucher(in_r102); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr", 131);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MultiVoucherComponent_ng_container_143_tr_34_Template, 11, 5, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r101 = ctx.$implicit;
    const in_r102 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r101.scheme_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r101.scheme.S_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r101.scheme_type == "GL" ? item_r101.account_no.AC_NO : item_r101.account_no.BANKACNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r101.tran_mode.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r101.total_amt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r101.NARRATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", in_r102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r101.InputHead);
} }
function MultiVoucherComponent_button_154_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 132, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_button_154_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); ctx_r109.submit(); return _r2.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r25.submitForm);
} }
function MultiVoucherComponent_button_155_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_button_155_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_button_156_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_button_156_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.addNewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_button_158_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_button_158_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r115.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_button_160_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_button_160_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r117.Approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_button_161_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_button_161_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.unApprove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unapprove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_div_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pigmy Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r32.pigmyamount, " Cr");
} }
function MultiVoucherComponent_div_236_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Open Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r33.opendate, "");
} }
function MultiVoucherComponent_div_237_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "As On Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r34.asondate, "");
} }
function MultiVoucherComponent_div_238_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sanction Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r35.sanctiondate, "");
} }
function MultiVoucherComponent_div_239_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Expiry Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r36.expirydate, "");
} }
function MultiVoucherComponent_div_240_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Renewal Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r37.renewaldate, "");
} }
function MultiVoucherComponent_div_241_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sanctions Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r38.sanctionamt, "");
} }
function MultiVoucherComponent_div_242_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Deposit Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r39.depositamt, "");
} }
function MultiVoucherComponent_div_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Maturity Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r40.maturityamt, ".00");
} }
function MultiVoucherComponent_img_273_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MultiVoucherComponent_img_273_Template_img_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r121.showImage(ctx_r121.customerImg); })("mouseout", function MultiVoucherComponent_img_273_Template_img_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r123.hideImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r41.customerImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MultiVoucherComponent_img_276_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MultiVoucherComponent_img_276_Template_img_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r124.showImage(ctx_r124.signture); })("mouseout", function MultiVoucherComponent_img_276_Template_img_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r126.hideImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r42.signture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MultiVoucherComponent_tr_314_Template(rf, ctx) { if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_tr_314_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r129); const item_r127 = ctx.$implicit; const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r128.getNarration(item_r127.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r127 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r127.NARRATION, " ");
} }
function MultiVoucherComponent_tr_335_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_tr_335_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const item1_r130 = ctx.$implicit; const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r131.getBankName(item1_r130.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item1_r130 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item1_r130.name, " ");
} }
// Handling datatable data
class DataTableResponse {
}
class MultiVoucherComponent {
    constructor(TransactionCashModeService, TransactionTransferModeService, SchemeTypeService, ownbranchMasterService, _SchemeCodeDropdown, _service, _vservice, savingMasterService, fb, _bankmasterService, router, _CustomerIdService, _ACMasterDropdownService) {
        this.TransactionCashModeService = TransactionCashModeService;
        this.TransactionTransferModeService = TransactionTransferModeService;
        this.SchemeTypeService = SchemeTypeService;
        this.ownbranchMasterService = ownbranchMasterService;
        this._SchemeCodeDropdown = _SchemeCodeDropdown;
        this._service = _service;
        this._vservice = _vservice;
        this.savingMasterService = savingMasterService;
        this.fb = fb;
        this._bankmasterService = _bankmasterService;
        this.router = router;
        this._CustomerIdService = _CustomerIdService;
        this._ACMasterDropdownService = _ACMasterDropdownService;
        this.reloadTablePassing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.branchCode = null;
        this.branch_codeList = null;
        this.allScheme = new Array(); //from schme master
        this.Pass = 0;
        this.Unpass = 0;
        this.ClearBalance = 0;
        this.AfterVoucher = 0;
        this.InputHeadAmt = 0.00;
        this.EditFlag = false;
        this.AmountEqual = false;
        //object created to get data when row is clicked
        this.pigmyamount = 0;
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
            { key: 'AG', data: { cash: [1, 4, 5], transfer: [1, 4, 5] } },
            { key: 'SB', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5] } },
            { key: 'CA', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5] } },
            { key: 'CC', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5, 9] } },
            { key: 'DS', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9, 15] } },
            { key: 'LN', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9, 15] } },
            { key: 'GL', data: { cash: [1, 4], transfer: [1, 4] } },
            { key: 'GS', data: { cash: [1, 4], transfer: [1, 4] } },
            { key: 'SH', data: { cash: [1, 4, 5, 7, 14], transfer: [1, 4, 5, 7, 14] } },
            { key: 'IV', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9] } },
            { key: 'PG', data: { cash: [1, 4, 5, 10], transfer: [1, 4, 5, 10] } },
            { key: 'TD', data: { cash: [1, 4, 5, 6, 10], transfer: [1, 4, 5, 6, 9, 10] } },
        ];
        this.isture = true;
        this.totalAmt = 0;
        this.showChequeDetails = false;
        this.DayOpBal = 0;
        this.headShow = false;
        this.mainMaster = new Array();
        this.showAdd = true;
        this.showUpdate = false;
        this.customerImg = 'assets/images/nouser.png';
        this.signture = 'assets/images/nosignature.png';
        this.Customer_Pan_No = '---';
        this.Customer_Contact_No = '---';
        this.submitForm = false;
        this.DatatableHideShow = true;
        this.rejectShow = false;
        this.approveShow = false;
        this.unapproveShow = false;
        this.modalClass = 'modalHide';
        this.headFlag = false;
        this.PreviewDiv = false;
        //Edit Voucher Data
        this.headflag = false;
        this.visibleAnimate = false;
        this.visible = false;
        this.updateShow = false;
        this.newbtnShow = false;
        // Variables for hide/show add and update button
        this.showButton = true;
        this.totalCredit = '0';
        this.totalDebit = '0';
        this.SideView = false;
        this.ShowLNCC = false;
        this.ShownotLNCC = false;
        this.maturityamt = 0;
        this.depositamt = 0;
        this.expirydate = '';
        this.sanctiondate = '';
        this.asondate = '';
        this.opendate = '';
        this.renewaldate = '';
        this.extenstionaftervoucher = '';
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.ShowDocuments = false;
        this.tokenshowhide = false;
        if (this.childMessage != undefined) {
            this.editClickHandler(this.childMessage);
        }
        // this.maxDate = new Date();
        // this.maxDate.setDate(this.maxDate.getDate());
    }
    ngOnInit() {
        this.createForm();
        //Day opening Amount
        //get session branch data
        let user = JSON.parse(localStorage.getItem('user'));
        this.loginUser = user;
        this.type = 'tranfer';
        //get syspara details
        this._service.getSysParaData().subscribe(data => {
            // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
            this.date = data[0].CURRENT_DATE;
            let nextDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, 'DD/MM/YYYY').add(3, 'month').format('YYYY-MM-DD');
            let lastDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, 'DD/MM/YYYY').subtract(3, 'month').format('YYYY-MM-DD');
            this.maxDate = new Date(nextDate);
            this.maxDate.setDate(this.maxDate.getDate());
            this.minDate = new Date(lastDate);
            this.minDate.setDate(this.minDate.getDate());
        });
        //branch List
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(data => {
            this.branch_code = data;
            this.selectedBranch = user.branchId;
        });
        this._bankmasterService.getBankList().subscribe(banks => {
            this.bankName = banks;
        });
        //Scheme Code
        this._service.getSchemeCodeList().subscribe(data => {
            var schemeList = data.filter(function (schemeName) {
                return (schemeName.S_ACNOTYPE != 'LK');
            });
            this.master = schemeList;
            //debugger
            this.allSchemeCode = [...new Map(schemeList.map(item => [item['S_ACNOTYPE'], item])).values()];
            this.allSchemeCode = this.allSchemeCode.sort(this.dynamicSort("S_ACNOTYPE"));
        });
        //Narration List
        this._service.getNarrationMaster().subscribe(data => {
            this.narrationList = data;
        });
    }
    // getBankName(ele) {
    //   this.bankName = ele;
    //   let el1: HTMLElement = this.triggrhide1.nativeElement;
    //   el1.click();
    // }
    createForm() {
        this.angForm = this.fb.group({
            branch_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            // temp_over_draft: [''],
            // over_draft: [''],
            token: [''],
            NARRATION: [''],
            total_amt: [''],
            amt: [0],
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
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.selectedBranch = result.branch.id;
            this.angForm.controls['branch_code'].enable();
            this.branchCode = result.branch.CODE;
        }
        else {
            this.angForm.controls['branch_code'].disable();
            this.selectedBranch = result.branch.id;
            this.branchCode = result.branch.CODE;
            this.angForm.patchValue({
                'branch_code': result.branch.id
            });
        }
    }
    selectedSchemeCode() {
        this.allScheme = [];
        this.master.forEach(element => {
            if (element.S_ACNOTYPE == this.selectedCode) {
                this.allScheme.push(element);
            }
        });
        //get Head details
        let obj = { 'code': this.selectedCode };
        let date = this.date;
        var rowData = date.split('/');
        let lastdate = Number(rowData[0]) - 1;
        // let result    = rowData[2]+'-'+rowData[1]+'-'+lastdate;
        this.IntersetHeadDate = lastdate + '/' + rowData[1] + '/' + rowData[2];
        // this._service.getHeadDetails(obj).subscribe(data => {
        //   if (data.length != 0) {
        //     if (!this.headflag) {
        //       this.headData = data;
        //       this.headShow = true;
        //       this.headData.forEach(element => {
        //         element['date'] = this.IntersetHeadDate;
        //         element['Amount'] = 0.00
        //       });
        //     }
        //   } else {
        //     this.headShow = false;
        //   }
        // }, err => {
        //   console.log(err);
        // })
    }
    getIntroducer(item, branch) {
        this.tempschmetype = this.selectedCode;
        this.introducerACNo = [];
        this.submitScheme = item;
        if (this.tempscheme != this.selectedScheme) {
            this.customer = null;
        }
        this.obj = [item.id, branch];
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
            case 'GL':
                this._ACMasterDropdownService.getACMasterList1().subscribe(data => {
                    console.log('data', data);
                    this.introducerACNo = data;
                });
                break;
        }
        let object = this.TranData.find(t => t.key === this.selectedCode);
        if (this.type == 'cash') {
            this.tranModeList = [];
            object.data.cash.forEach(ele => {
                var _a, _b, _c, _e, _f, _g;
                let obj = this.TranModeCash.find(t => t.id === ele);
                this.tranModeList.push(obj);
                if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == 0 && this.submitScheme.IS_RECURRING_TYPE == 0 && this.submitScheme.IS_CALLDEPOSIT_TYPE == 0 && this.submitScheme.REINVESTMENT == 0 && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
                    this.tranModeList = this.tranModeList.filter(ele => ele.id != 1);
                }
                if (((_a = this.submitScheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && ((_b = this.submitScheme) === null || _b === void 0 ? void 0 : _b.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_c = this.submitScheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_e = this.submitScheme) === null || _e === void 0 ? void 0 : _e.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_f = this.submitScheme) === null || _f === void 0 ? void 0 : _f.S_ACNOTYPE) == 'LN' && ((_g = this.submitScheme) === null || _g === void 0 ? void 0 : _g.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            });
        }
        else {
            this.tranModeList = [];
            object.data.transfer.forEach(ele => {
                var _a, _b, _c, _e, _f, _g;
                let obj = this.TranModeTransfer.find(t => t.id === ele);
                this.tranModeList.push(obj);
                if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == 0 && this.submitScheme.IS_RECURRING_TYPE == 0 && this.submitScheme.IS_CALLDEPOSIT_TYPE == 0 && this.submitScheme.REINVESTMENT == 0 && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
                    this.tranModeList = this.tranModeList.filter(ele => ele.id != 1);
                }
                if (((_a = this.submitScheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && ((_b = this.submitScheme) === null || _b === void 0 ? void 0 : _b.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_c = this.submitScheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_e = this.submitScheme) === null || _e === void 0 ? void 0 : _e.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_f = this.submitScheme) === null || _f === void 0 ? void 0 : _f.S_ACNOTYPE) == 'LN' && ((_g = this.submitScheme) === null || _g === void 0 ? void 0 : _g.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            });
        }
    }
    getIntroducer1(item) {
        this.tempschmetype = this.selectedCode;
        this.introducerACNo = [];
        this.submitScheme = item;
        if (this.tempscheme != this.selectedScheme) {
            this.customer = null;
        }
        this.obj = [item.id, this.selectedBranch];
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
            case 'GL':
                this._ACMasterDropdownService.getACMasterList1().subscribe(data => {
                    console.log('data', data);
                    this.introducerACNo = data;
                });
                break;
        }
        let object = this.TranData.find(t => t.key === this.selectedCode);
        if (this.type == 'cash') {
            this.tranModeList = [];
            object.data.cash.forEach(ele => {
                var _a, _b, _c, _e, _f, _g;
                let obj = this.TranModeCash.find(t => t.id === ele);
                this.tranModeList.push(obj);
                if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == 0 && this.submitScheme.IS_RECURRING_TYPE == 0 && this.submitScheme.IS_CALLDEPOSIT_TYPE == 0 && this.submitScheme.REINVESTMENT == 0 && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
                    this.tranModeList = this.tranModeList.filter(ele => ele.id != 1);
                }
                if (((_a = this.submitScheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && ((_b = this.submitScheme) === null || _b === void 0 ? void 0 : _b.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_c = this.submitScheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_e = this.submitScheme) === null || _e === void 0 ? void 0 : _e.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_f = this.submitScheme) === null || _f === void 0 ? void 0 : _f.S_ACNOTYPE) == 'LN' && ((_g = this.submitScheme) === null || _g === void 0 ? void 0 : _g.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            });
        }
        else {
            this.tranModeList = [];
            object.data.transfer.forEach(ele => {
                var _a, _b, _c, _e, _f, _g;
                let obj = this.TranModeTransfer.find(t => t.id === ele);
                this.tranModeList.push(obj);
                if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == 0 && this.submitScheme.IS_RECURRING_TYPE == 0 && this.submitScheme.IS_CALLDEPOSIT_TYPE == 0 && this.submitScheme.REINVESTMENT == 0 && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
                    this.tranModeList = this.tranModeList.filter(ele => ele.id != 1);
                }
                if (((_a = this.submitScheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && ((_b = this.submitScheme) === null || _b === void 0 ? void 0 : _b.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_c = this.submitScheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_e = this.submitScheme) === null || _e === void 0 ? void 0 : _e.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_f = this.submitScheme) === null || _f === void 0 ? void 0 : _f.S_ACNOTYPE) == 'LN' && ((_g = this.submitScheme) === null || _g === void 0 ? void 0 : _g.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            });
        }
    }
    //Transaction mode select
    transactionMode(mode) {
        this.type = mode;
        let object = this.TranData.find(t => t.key === this.selectedCode);
        if (this.type == 'cash') {
            this.tranModeList = [];
            object.data.cash.forEach(ele => {
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
    selectAllContent($event) {
        $event.target.select();
    }
    //get Narration Details 
    getNarration(ele) {
        this.particular = ele;
        let el = this.triggerhide.nativeElement;
        el.click();
        this.narrationField.nativeElement.focus();
    }
    //get Narration Details 
    getBankName(ele) {
        this.selectBankName = ele;
        let el = this.triggrhide1.nativeElement;
        el.click();
        this.bankNameField.nativeElement.focus();
    }
    //submit Form
    Add() {
        var _a, _b;
        if (Number(this.totalAmt) != 0 && this.totalAmt != undefined) {
            let user = JSON.parse(localStorage.getItem('user'));
            let obj = this.angForm.value;
            obj['user'] = user;
            for (let ele of this.headData) {
                if (ele['INTEREST_DATE_INPUT'] == '0' && ele.FIELD_AMOUNT == 'INTEREST_AMOUNT') {
                    ele['date'] = null;
                }
            }
            let chequeDate = moment__WEBPACK_IMPORTED_MODULE_4__(obj.chequeDate).format('DD/MM/YYYY');
            obj['InputHead'] = this.headData;
            obj['tran_mode'] = this.submitTranMode;
            obj['chequeDate'] = chequeDate;
            obj['scheme'] = this.submitScheme;
            obj['chequeDate'] = chequeDate;
            obj['account_no'] = this.submitAccountNo;
            obj['amt'] = Number(this.angForm.controls['amt'].value).toFixed(2);
            obj['branch_code'] = this.selectedBranch;
            obj['total_amt'] = Number(this.angForm.controls['total_amt'].value).toFixed(2);
            if (this.submitTranMode.id == 4 && this.submitTranMode.tran_drcr == 'D' && (((_a = this.submitScheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'CC' || ((_b = this.submitScheme) === null || _b === void 0 ? void 0 : _b.S_ACNOTYPE) == 'LN')) {
                let ledgerbal = Number(this.tempDayOpBal) > 0 ? Number(this.tempDayOpBal) : 0;
                let amount = Number(this.angForm.controls['amt'].value);
                if (amount > ledgerbal)
                    obj['isOverdraftTaken'] = 1;
                else
                    obj['isOverdraftTaken'] = 0;
            }
            else
                obj['isOverdraftTaken'] = 0;
            this.mainMaster.push(obj);
            this.DayOpBal = 0;
            // this.angForm.controls['temp_over_draft'].reset()
            // this.angForm.controls['over_draft'].reset()
            this.angForm.controls['token'].reset();
            // this.angForm.controls['NARRATION'].reset()
            this.angForm.controls['total_amt'].reset();
            this.angForm.controls['amt'].reset();
            this.angForm.controls['slip_no'].reset();
            this.angForm.controls['tran_mode'].reset();
            this.angForm.controls['account_no'].reset();
            this.angForm.controls['scheme'].reset();
            this.angForm.controls['scheme_type'].reset();
            this.angForm.controls['type'].reset();
            this.angForm.controls['chequeDate'].reset();
            this.angForm.controls['chequeNo'].reset();
            this.angForm.controls['bank'].reset();
            // this.getVoucherData();
            this.headData = [];
            this.headShow = false;
            this.showChequeDetails = false;
            this.submitAccountNo = {};
            this.submitScheme = {};
            this.submitTranMode = {};
            this.selectedCode = undefined;
            this.selectedScheme = '';
            this.selectedMode = '';
            this.customer = '';
            this.calculateVoucher();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', 'Please once check your voucher, and fill requied data', 'error');
        }
    }
    submit() {
        if (this.totalCredit == this.totalDebit && Number(this.totalCredit) != 0 && Number(this.totalDebit) != 0) {
            this._service.insertVoucher(this.mainMaster).subscribe(data => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'success',
                    title: 'Multi Voucher updated Successfully!',
                    html: '<b>Please Note Down Voucher Number : </b>' + data.TRAN_NO + '<br>'
                });
                // this.getVoucherData();
                // Swal.fire('Success!', 'Voucher update Successfully !', 'success');
                this.type = 'cash';
                this.mainMaster = [];
                this.headData = [];
                this.headShow = false;
                this.totalCredit = '0';
                this.totalDebit = '0';
                this.headData = [];
                this.selectedMode = null;
                this.Customer_Name = null;
                this.DayOpBal = 0;
                this.Pass = 0;
                this.Unpass = 0;
                this.sanctionamt = 0;
                this.ClearBalance = 0;
                this.overdraftAmt = 0;
                this.AfterVoucher = 0;
                this.customerImg = 'assets/images/nouser.png';
                this.signture = 'assets/images/nosignature.png';
                this.Status = '0';
                this.Customer_Pan_No = '---';
                this.Customer_Contact_No = '---';
                this.headShow = false;
                this.maturityamt = 0;
                this.depositamt = 0;
                this.expirydate = '';
                this.sanctiondate = '';
                this.asondate = '';
                this.opendate = '';
                this.renewaldate = '';
                this.showChequeDetails = false;
            }, err => {
                console.log(err);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Total credit amount ' + this.totalCredit + ' and ' + 'total debit amount' + this.totalDebit + ' are not match');
        }
    }
    //get Amount Details
    getAmt(ele) {
        let count = 0;
        if (this.headData.length != 0) {
            this.headData.forEach(element => {
                count = Number(element.Amount) + Number(count);
            });
            let num = Number(ele) + Number(count);
            // this.totalAmt = num + '.00'
            this.totalAmt = parseFloat(num.toString()).toFixed(2);
        }
        else {
            // this.totalAmt = ele.target.value + '.00'
            this.totalAmt = parseFloat(ele).toFixed(2);
        }
        this.totalAmt = parseFloat(this.totalAmt).toFixed(2);
    }
    changeMode(item) {
        //
        this.submitForm = true;
        this.headData = [];
        this.submitTranMode = item;
        if (this.submitTranMode.tran_type == 'TR') {
            this.showChequeDetails = true;
            // this.angForm.controls['chequeNo'].reset()
            // this.angForm.controls['chequeDate'].reset()
            // this.angForm.controls['bank'].reset()
        }
        else {
            this.showChequeDetails = false;
        }
        //get Head details
        let obj = { 'code': this.selectedCode };
        let headType = [
            { FieldAmount: 'INTEREST_AMOUNT' },
            { FieldAmount: 'PENAL_INT_AMOUNT' },
            { FieldAmount: 'REC_PENAL_INT_AMOUNT' },
            { FieldAmount: 'RECPAY_INT_AMOUNT' },
            { FieldAmount: 'RECPAY_INT_AMOUNT' },
            { FieldAmount: 'OTHER2_AMOUNT' },
            { FieldAmount: 'OTHER3_AMOUNT' },
            { FieldAmount: 'OTHER4_AMOUNT' },
            { FieldAmount: 'OTHER5_AMOUNT' },
            { FieldAmount: 'OTHER6_AMOUNT' },
            { FieldAmount: 'OTHER7_AMOUNT' },
            { FieldAmount: 'OTHER8_AMOUNT' },
            { FieldAmount: 'OTHER9_AMOUNT' },
            { FieldAmount: 'OTHER11_AMOUNT' },
            { FieldAmount: 'OTHER10_AMOUNT' }
        ];
        let date = this.date;
        var rowData = date.split('/');
        let lastdate = Number(rowData[0]) - 1;
        // let result    = rowData[2]+'-'+rowData[1]+'-'+lastdate;
        this.IntersetHeadDate = lastdate + '/' + rowData[1] + '/' + rowData[2];
        this._vservice.getHeadDetails(obj).subscribe(data => {
            if (data.length != 0) {
                if (!this.headFlag) {
                    // this.headData = data;
                    this.headShow = true;
                    // for (let i = 0; i <= headType.length; i++) {
                    //   let value = {}
                    //   value = data.find(data => data['FIELD_AMOUNT'] == headType[i].FieldAmount)
                    //   if (value != undefined) {
                    //     if (this.submitTranMode.tran_drcr == value['DRCR_APPLICABLE'] || value['DRCR_APPLICABLE'] == 'B') {
                    //       this.headData.push(value)
                    //     }
                    //   }
                    // }
                    for (let item of data) {
                        let value = {};
                        // value = data.find(data => data['FIELD_AMOUNT'] == headType[i].FieldAmount)
                        // if (value != undefined) {
                        if (this.submitTranMode.tran_drcr == item.DRCR_APPLICABLE || item.DRCR_APPLICABLE == 'B') {
                            item['Amount'] = 0;
                            item['Amount'] = 0;
                            if (this.submitScheme.S_ACNOTYPE == 'TD') {
                                if (this.submitScheme.IS_RECURRING_TYPE == '1' && this.submitScheme.INTEREST_RULE == '0' && item.HEAD_TYPE == 'PNI') {
                                    this.headData.push(item);
                                }
                                else {
                                    if (item.HEAD_TYPE != 'PNI') {
                                        this.headData.push(item);
                                    }
                                }
                            }
                            else {
                                this.headData.push(item);
                            }
                        }
                        // }
                    }
                    // this.updateheadbalance(this.date)
                }
            }
            else {
                this.headShow = false;
            }
        }, err => {
            console.log(err);
        });
        if (this.submitScheme.S_ACNOTYPE == 'TD' || this.submitScheme.S_ACNOTYPE == 'SB' || this.submitScheme.S_ACNOTYPE == 'PG' || this.submitScheme.S_ACNOTYPE == 'AG' || this.submitScheme.S_ACNOTYPE == 'CA') {
            this.interestMaxDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY").subtract(1, 'days');
            this.interestMaxDate = this.interestMaxDate._d;
            this.interestMinDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY").subtract(1, 'months');
            this.interestMinDate = this.interestMinDate._d;
        }
        else if (this.submitScheme.S_ACNOTYPE == 'LN' || this.submitScheme.S_ACNOTYPE == 'CC' || this.submitScheme.S_ACNOTYPE == 'DS') {
            this.interestMinDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY").subtract(1, 'days');
            this.interestMinDate = this.interestMinDate._d;
            this.interestMaxDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY").add(1, 'months');
            this.interestMaxDate = this.interestMaxDate._d;
        }
        if (item.id == 6) {
            this.angForm.controls.amt.setValue('0.00');
            this.angForm.controls.totalAmt.setValue('0.00');
            this.totalAmt = 0.00;
            this.angForm.controls['amt'].disable();
        }
        else if (item.id == 2 || item.id == 5 || item.id == 15) {
            this.angForm.patchValue({
                amt: Number(this.ClearBalance).toFixed(2)
            });
            // this.getaftervoucher()
            this.angForm.controls['amt'].disable();
            this.decimalAllContent(this.ClearBalance);
            this.checkCondition(this.ClearBalance);
            this.checkSanctionAmountWithAmount();
            this.checkamtcondition(this.ClearBalance);
            this.getAmt(this.ClearBalance);
        }
        else {
            this.angForm.controls.amt.setValue('0.00');
            this.angForm.controls['amt'].enable();
        }
        // if (this.selectedCode == 'GL') {
        //   this.showChequeDetails = true
        // }
    }
    getVoucherData(item) {
        var _a, _b, _c, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        this.DayOpBal = 0;
        this.selectedMode = null;
        this.angForm.controls['total_amt'].reset();
        this.angForm.controls['amt'].reset();
        this.angForm.controls['tran_mode'].reset();
        this.tempscheme = this.selectedScheme;
        this.submitAccountNo = item;
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', 'Access dined Account Close Already!', 'error');
                return 0;
            }
        }, err => {
            console.log(err);
        });
        var startdate = this.angForm.controls['date'].value;
        let formDT = moment__WEBPACK_IMPORTED_MODULE_4__(startdate, 'DD/MM/YYYY');
        var addInFrom;
        if (this.submitScheme.S_ACNOTYPE == 'PG') {
            addInFrom = startdate;
        }
        else {
            addInFrom = moment__WEBPACK_IMPORTED_MODULE_4__(formDT, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY');
        }
        let openingobj = {
            scheme: this.submitScheme.S_APPL,
            acno: this.submitScheme.S_APPL == '980' ? this.submitAccountNo.AC_NO : this.submitAccountNo.BANKACNO,
            date: addInFrom,
            branch: this.branchCode
        };
        //
        this._vservice.getledgerbalance(openingobj).subscribe(data => {
            this.DayOpBal = Math.abs(data);
            this.DayOpBal = Number(this.DayOpBal).toFixed(2);
        });
        let object = this.TranData.find(t => t.key === this.selectedCode);
        if (this.type == 'cash') {
            this.tranModeList = [];
            object.data.cash.forEach(ele => {
                let obj = this.TranModeCash.find(t => t.id === ele);
                this.tranModeList.push(obj);
            });
            if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == "0" && this.submitScheme.IS_RECURRING_TYPE == "0" && this.submitScheme.IS_CALLDEPOSIT_TYPE == "0" && this.submitScheme.REINVESTMENT == "0" && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1);
            }
            if (((_a = this.submitScheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && ((_b = this.submitScheme) === null || _b === void 0 ? void 0 : _b.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_c = this.submitScheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_e = this.submitScheme) === null || _e === void 0 ? void 0 : _e.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_f = this.submitScheme) === null || _f === void 0 ? void 0 : _f.S_ACNOTYPE) == 'LN' && ((_g = this.submitScheme) === null || _g === void 0 ? void 0 : _g.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
        }
        else {
            this.tranModeList = [];
            object.data.transfer.forEach(ele => {
                let obj = this.TranModeTransfer.find(t => t.id === ele);
                this.tranModeList.push(obj);
            });
            if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == "0" && this.submitScheme.IS_RECURRING_TYPE == "0" && this.submitScheme.IS_CALLDEPOSIT_TYPE == "0" && this.submitScheme.REINVESTMENT == "0" && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1);
            }
            if (((_h = this.submitScheme) === null || _h === void 0 ? void 0 : _h.S_ACNOTYPE) == 'TD' && ((_j = this.submitScheme) === null || _j === void 0 ? void 0 : _j.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_k = this.submitScheme) === null || _k === void 0 ? void 0 : _k.S_ACNOTYPE) == 'PG' && ((_l = this.submitScheme) === null || _l === void 0 ? void 0 : _l.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_m = this.submitScheme) === null || _m === void 0 ? void 0 : _m.S_ACNOTYPE) == 'LN' && ((_o = this.submitScheme) === null || _o === void 0 ? void 0 : _o.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
        }
    }
    // //get Input head Amount
    // getInputHeadAmt(ele, i) {
    //   var t = ele.target.value;
    //   ele.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    //   let value = Number(ele.target.value);
    //   if (Number(ele.target.value) > Number(this.headData[i].Balance) && this.headData[i].CHECK_BALANCE == '1') {
    //     Swal.fire('Info', 'Please fill proper amount!', 'info')
    //     this.headData[i].Amount = '0';
    //   }
    //   else {
    //     this.headData[i].Amount = value;
    //     let tran = this.submitTranMode.tran_drcr
    //     let count = 0
    //     this.headData.forEach(element => {
    //       count = Number(element.Amount) + Number(count)
    //     });
    //     this.totalAmt = count + Number(this.angForm.controls['amt'].value)
    //   }
    //   this.totalAmt = Number(this.totalAmt).toFixed(2)
    // }
    //get Input head Amount
    getInputHeadAmt(ele, i) {
        var _a;
        // let value = ele.target.value;
        var t = ele.target.value;
        ele.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
        let value = Number(ele.target.value);
        if (this.headData[i].Balance == undefined)
            this.headData[i].Balance = 0;
        if (Number(ele.target.value) > Number((_a = this.headData[i]) === null || _a === void 0 ? void 0 : _a.Balance) && this.headData[i].CHECK_BALANCE == '1') {
            this.headData[i].Amount = '0';
            if (this.headData[i].FIELD_AMOUNT == 'INTEREST_AMOUNT')
                this.INTAMT.nativeElement.focus();
            else
                this.NOTINTAMT.nativeElement.focus();
            this.submitForm = true;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Info', 'Please fill proper amount!', 'info');
        }
        else {
            if (this.headData[i].IS_GLBAL_MAINTAIN == '1' && Number(this.headData[i].Balance) != 0 && Number(this.headData[i].Balance) != Number(ele.target.value)) {
                this.headData[i].Amount = '0';
                if (this.headData[i].FIELD_AMOUNT == 'INTEREST_AMOUNT')
                    this.INTAMT.nativeElement.focus();
                else
                    this.NOTINTAMT.nativeElement.focus();
                this.submitForm = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', `Amount Must Be Equal to ${this.headData[i].Balance}`, 'error');
            }
            else {
                if (Number(this.headData[i].Amount) != 0)
                    this.totalAmt = Number(this.headData[i].Amount) - this.totalAmt;
                this.headData[i].Amount = Number(value);
                let tran = this.submitTranMode.tran_drcr;
                let count = 0;
                for (let element of this.headData) {
                    count = Number(element.Amount) + Number(count);
                }
                this.totalAmt = count + Number(this.angForm.controls['amt'].value);
                this.submitForm = false;
                if (this.headData.length == 0)
                    this.submitbtn.nativeElement.focus();
            }
        }
        this.totalAmt = Number(this.totalAmt).toFixed(2);
    }
    checkheadcondition(event, i) {
        console.log('event', event);
        let value = event.target.value;
        this.headData[i].Amount = value;
        let data = this.headData[i];
        if (data.FIELD_AMOUNT != 'PENAL_INT_AMOUNT') {
            if ((this.submitTranMode.id == 5 || this.submitTranMode.id == 2) && Number(data.Balance) != 0 && Number(data.Amount) != Number(data.Balance)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Please Fill ' + data.DESCRIPTION + ' Amount', 'error');
                this.headData[i].Amount = '0.00';
            }
            else {
                if (data.CHECK_REQUIRE == '1' && Number(data.Amount) != Number(data.Balance)) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Please Fill ' + data.DESCRIPTION + ' Amount', 'error');
                    this.headData[i].Amount = '0.00';
                }
            }
        }
    }
    //decimal content show purpose wrote below function
    decimalAllContent($event) {
        if (this.submitTranMode == undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Please First Select Tran Mode then enter Amount', 'error');
            let value = Number($event);
            this.totalAmt = 0;
            $event = 0;
            let amt = Number(this.AfterVoucher) - value;
            if (amt < 0) {
                amt = 0;
            }
            this.AfterVoucher = Math.abs(Number(parseFloat((amt).toString()).toFixed(2)));
        }
        else {
            let value = Number($event);
            let data = value.toFixed(2);
            $event = data;
        }
    }
    hideImage() {
        // document.getElementById("full").src = "";
        this.previewImg = '';
        this.PreviewDiv = false;
    }
    showImage(img) {
        var src = img;
        var largeSrc = src.replace('small', 'large');
        this.previewImg = src;
        this.PreviewDiv = true;
        // document.getElementById('full').src = largeSrc;
    }
    showHide(reportId) {
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
        this.calculateVoucher();
    }
    editVoucher(index) {
        // debugger
        this.headflag = true;
        this.EditFlag = true;
        this.index = index;
        var data = this.mainMaster[index];
        this.selectedCode = data.scheme_type;
        this.selectedSchemeCode();
        this.selectedScheme = data.scheme.id;
        this.getIntroducer(data.scheme, data.BRANCH_CODE);
        this.customer = data.account_no.id;
        this.selectedMode = data.tran_mode.id;
        this.particular = data.NARRATION;
        this.submitAccountNo = data.account_no;
        this.submitScheme = data.scheme;
        this.submitTranMode = data.tran_mode;
        this.bank = data.bank;
        this.angForm.patchValue({
            chequeNo: data.chequeNo,
            chequeDate: data.chequeDate,
            bank: data.bank,
            amt: Number(data.amt).toFixed(2),
            // NARRATION: data.NARRATION,
            total_amt: data.total_amt,
        });
        // this.changeMode(data.tran_mode);
        this.headData = [];
        this.headData = data.InputHead;
        if (this.headData.length > 0) {
            this.headShow = true;
        }
        if (data.chequeDate != undefined) {
            this.showChequeDetails = true;
        }
        this.showAdd = false;
        this.showUpdate = true;
        this.calculateVoucher();
        this.showlgindetails();
        this.SideDetails();
        this.angForm.patchValue({
            chequeNo: data.chequeNo,
            chequeDate: data.chequeDate,
            amt: Number(data.amt).toFixed(2),
            NARRATION: data.NARRATION,
            total_amt: Number(data.total_amt).toFixed(2),
            bank: data.bank
        });
    }
    update() {
        if (Number(this.totalAmt) != 0 && this.totalAmt != undefined) {
            let user = JSON.parse(localStorage.getItem('user'));
            let obj = this.angForm.value;
            obj['user'] = user;
            obj['InputHead'] = this.headData;
            obj['tran_mode'] = this.submitTranMode;
            obj['scheme'] = this.submitScheme;
            obj['account_no'] = this.submitAccountNo;
            obj['amt'] = Number(this.angForm.controls['amt'].value).toFixed(2);
            obj['total_amt'] = Number(this.angForm.controls['total_amt'].value).toFixed(2);
            this.mainMaster[this.index] = obj;
            this.showAdd = true;
            this.showUpdate = false;
            this.EditFlag = false;
            // this.angForm.controls['temp_over_draft'].reset()
            // this.angForm.controls['over_draft'].reset()
            this.angForm.controls['token'].reset();
            // this.angForm.controls['NARRATION'].reset()
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
            this.calculateVoucher();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', 'Please once check your voucher, and fill requied data', 'error');
        }
    }
    editClickHandler(id) {
        //
        this._service.getFormData(id).subscribe((data) => {
            //
            this.angForm.disable();
            // console.log(data);
            this.updateID = data[0].TRAN_NO;
            this.updatecheckdata = data;
            if (data[0].TRAN_STATUS == '0') {
                this.showButton = false;
                this.updateShow = false;
                this.newbtnShow = true;
                this.approveShow = true;
                this.rejectShow = true;
                this.unapproveShow = false;
            }
            else if (data[0].TRAN_STATUS != '0') {
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
            this.mainMaster = data;
            for (let ele of this.mainMaster) {
                ele['total_amt'] = Number(ele['total_amt']).toFixed(2);
            }
            this.selectedCode = data[0].scheme.S_ACNOTYPE;
            this.selectedSchemeCode();
            this.selectedScheme = data[0].scheme.id;
            this.getIntroducer(this.mainMaster[0].scheme, data[0].BRANCH_CODE);
            this.customer = data[0].account_no.id;
            this.submitAccountNo = data[0].account_no;
            this.selectedMode = data[0].tran_mode.id;
            this.particular = data[0].NARRATION;
            this.angForm.patchValue({
                scheme: this.selectedScheme,
                NARRATION: data[0].NARRATION,
                amt: Number(data[0].amt).toFixed(2)
            });
            this.calculateVoucher();
            this.showlgindetails();
            this.SideDetails();
        });
    }
    updateData() {
    }
    calculateVoucher() {
        this.totalCredit = '0';
        this.totalDebit = '0';
        for (let item of this.mainMaster) {
            if (item.tran_mode.tran_drcr == 'C') {
                this.totalCredit = Number(Number(this.totalCredit) + Number(item.total_amt)).toFixed(2);
                this.totalCredit = Number(this.totalCredit).toFixed(2);
            }
            else {
                this.totalDebit = Number(Number(this.totalDebit) + Number(item.total_amt)).toFixed(2);
                this.totalDebit = Number(this.totalDebit).toFixed(2);
            }
        }
    }
    //approve account
    Approve() {
        let obj = {
            id: Number(this.updateID),
            userid: this.loginUser.id,
            branch: this.selectedBranch
        };
        this._service.approve(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Approved', 'Multi Voucher approved successfully', 'success');
            var button = document.getElementById('trigger');
            button.click();
            this.angForm.enable();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    //reject account
    reject() {
        let obj = {
            id: this.updateID,
            branch: this.selectedBranch
        };
        this._service.reject(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Rejected', 'Multi Voucher rejected successfully', 'success');
            var button = document.getElementById('trigger');
            button.click();
            this.angForm.enable();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    unApprove() {
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = {
            id: this.updateID,
            user: user.id,
            LOG_DATE: this.date,
            BRANCH_CODE: this.updatecheckdata[0]['BRANCH_CODE']
        };
        this._service.unapporveMultiVoucher(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Unapproved', 'Multivoucher unapproved successfully', 'success');
            var button = document.getElementById('trigger');
            button.click();
            this.angForm.enable();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    addNewData() {
        this.createForm();
        this.angForm.enable();
    }
    resetscheme() {
        // console.log(this.tempschmetype)
        if (this.tempschmetype != this.selectedCode) {
            this.selectedScheme = null;
            this.customer = null;
            this.introducerACNo = [];
        }
    }
    SideDetails() {
        // debugger
        this.AfterVoucher = 0;
        this.extenstionaftervoucher = '';
        this.angForm.controls['amt'].reset();
        this.angForm.controls['total_amt'].reset();
        this.SideView = true;
        if (this.submitAccountNo.AC_ACNOTYPE == 'LN' || this.submitAccountNo.AC_ACNOTYPE == 'CC' || this.submitAccountNo.AC_ACNOTYPE == 'DS') {
            this.ShowLNCC = true;
            this.ShownotLNCC = false;
            this.sanctionamt = (this.submitAccountNo.AC_SANCTION_AMOUNT != null ? this.submitAccountNo.AC_SANCTION_AMOUNT : 0);
            this.sanctionamt = Number(this.sanctionamt).toFixed(2);
            this.sanctiondate = (this.submitAccountNo.AC_SANCTION_DATE != null ? this.submitAccountNo.AC_SANCTION_DATE : '---');
            this.expirydate = (this.submitAccountNo.AC_EXPIRE_DATE != null ? this.submitAccountNo.AC_EXPIRE_DATE : '---');
            this.asondate = (this.submitAccountNo.AC_ASON_DATE != null ? this.submitAccountNo.AC_ASON_DATE : '---');
            this.opendate = (this.submitAccountNo.AC_OPDATE != null ? this.submitAccountNo.AC_OPDATE : '---');
            this.renewaldate = (this.submitAccountNo.AC_OPEN_OLD_DATE != null ? this.submitAccountNo.AC_OPEN_OLD_DATE : '---');
        }
        else if (this.submitAccountNo.AC_ACNOTYPE == 'TD' || this.submitAccountNo.AC_ACNOTYPE == 'PG' || this.submitAccountNo.AC_ACNOTYPE == 'IV') {
            this.ShowLNCC = false;
            this.ShownotLNCC = true;
            this.expirydate = (this.submitAccountNo.AC_EXPDT != null ? this.submitAccountNo.AC_EXPDT : '---');
            this.maturityamt = (this.submitAccountNo.AC_MATUAMT != null ? this.submitAccountNo.AC_MATUAMT : 0);
            this.maturityamt = Number(this.maturityamt).toFixed(2);
            this.depositamt = (this.submitAccountNo.AC_SCHMAMT != null ? this.submitAccountNo.AC_SCHMAMT : 0);
            this.depositamt = Number(this.depositamt).toFixed(2);
            this.asondate = (this.submitAccountNo.AC_ASON_DATE != null ? this.submitAccountNo.AC_ASON_DATE : '---');
            this.opendate = (this.submitAccountNo.AC_OPDATE != null ? this.submitAccountNo.AC_OPDATE : '---');
        }
        else {
            this.ShowLNCC = false;
            this.ShownotLNCC = false;
        }
        this.overdraftAmt = Number(this.submitAccountNo.AC_ODAMT) + Number(this.submitAccountNo.AC_SODAMT);
        this.overdraftAmt = Number(this.overdraftAmt).toFixed(2);
        var startdate = this.angForm.controls['date'].value;
        // startdate = startdate.subtract(1, 'd');
        // startdate = startdate.format("DD-MM-YYYY");
        let formDT = moment__WEBPACK_IMPORTED_MODULE_4__(startdate, 'DD/MM/YYYY');
        var addInFrom;
        if (this.submitScheme.S_ACNOTYPE == 'PG') {
            addInFrom = startdate;
        }
        else {
            addInFrom = moment__WEBPACK_IMPORTED_MODULE_4__(formDT, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY');
        }
        let obj = {
            scheme: this.submitScheme.S_APPL,
            acno: this.submitScheme.S_APPL == '980' ? this.submitAccountNo.AC_NO : this.submitAccountNo.BANKACNO,
            date: addInFrom,
            branch: this.branchCode
        };
        //
        this._vservice.getpigmychartBalance(obj).subscribe(data2 => {
            this._vservice.getledgerbalance(obj).subscribe(data => {
                var _a, _b, _c, _e, _f, _g;
                this.DayOpBal = Math.abs(data);
                this.DayOpBal = Number(this.DayOpBal).toFixed(2);
                if (data < 0) {
                    this.extensionopenbal = 'Cr';
                }
                else {
                    this.extensionopenbal = 'Dr';
                }
                this.tempDayOpBal = data;
                if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == "0" && this.submitScheme.IS_RECURRING_TYPE == "0" && this.submitScheme.IS_CALLDEPOSIT_TYPE == "0" && this.submitScheme.REINVESTMENT == "0" && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1);
                }
                if (((_a = this.submitScheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && ((_b = this.submitScheme) === null || _b === void 0 ? void 0 : _b.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_c = this.submitScheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_e = this.submitScheme) === null || _e === void 0 ? void 0 : _e.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_f = this.submitScheme) === null || _f === void 0 ? void 0 : _f.S_ACNOTYPE) == 'LN' && ((_g = this.submitScheme) === null || _g === void 0 ? void 0 : _g.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                this._vservice.getPassedUnpassedBalance(obj).subscribe(data1 => {
                    //
                    this.Pass = Math.abs(data1.passedamt).toFixed(2);
                    this.Unpass = Math.abs(data1.unpassamt).toFixed(2);
                    this.passextension = (data1.passextension != undefined ? data1.passextension : '');
                    this.unpassextension = (data1.unpassextension != undefined ? data1.unpassextension : '');
                    // this.ClearBalance = this.DayOpBal + this.Pass
                    var open = (this.tempDayOpBal <= 0 ? Math.abs(this.tempDayOpBal) : (-this.tempDayOpBal));
                    var pass = (data1.passedamt <= 0 ? Math.abs(data1.passedamt) : (-data1.passedamt));
                    var unpass = (data1.unpassamt <= 0 ? Math.abs(data1.unpassamt) : (-data1.unpassamt));
                    this.pigmyamount = data2;
                    let value = open + pass + data2;
                    if (value < 0) {
                        this.ClearBalance = Math.abs(value).toFixed(2);
                        this.typeclearbal = 'Dr';
                    }
                    else {
                        this.ClearBalance = Math.abs(value).toFixed(2);
                        this.typeclearbal = 'Cr';
                    }
                });
            });
        });
    }
    showlgindetails() {
        if (this.angForm.controls['account_no'].value != null) {
            this.ShowDocuments = true;
            this._CustomerIdService.getFormData(this.submitAccountNo.idmasterID).subscribe(data => {
                this.Customer_Name = data.AC_NAME;
                this.Customer_Pan_No = data.AC_PANNO;
                this.Customer_Contact_No = data.AC_MOBILENO;
                this.Status = this.submitAccountNo.IS_DORMANT;
                if (data.custdocument.length != 0) {
                    data.custdocument.forEach(element => {
                        if (element.DocumentMasterID == 1) {
                            this.customerImg = this.url + '/' + element.PATH;
                        }
                        if (element.DocumentMasterID == 2) {
                            this.signture = this.url + '/' + element.PATH;
                        }
                    });
                }
                else {
                    this.customerImg = 'assets/images/nouser.png';
                    this.signture = 'assets/images/nosignature.png';
                }
            });
            // if((this.angForm.controls['account_no'].value.idmaster['AC_MOBILENO'])
        }
        else {
            this.ShowDocuments = false;
        }
    }
    checkSanctionAmountWithAmount() {
        var _a, _b;
        // let ledgerbal = Number(this.tempDayOpBal) > 0 ? Number(this.tempDayOpBal) : 0
        let sancAmt = (Number(this.sanctionamt) - Number(this.ClearBalance)) + Number(this.overdraftAmt);
        if (sancAmt < Number(this.angForm.controls['amt'].value) && this.submitTranMode.id == 4 && this.submitTranMode.tran_drcr == 'D' && (((_a = this.submitScheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'CC' || ((_b = this.submitScheme) === null || _b === void 0 ? void 0 : _b.S_ACNOTYPE) == 'LN') && this.submitScheme.IS_GOLD_LOAN != '1') {
            this.SideDetails();
            this.angForm.controls['amt'].reset();
            this.angForm.patchValue({
                total_amt: 0
            });
            this.amt.nativeElement.focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', `Access Denied, Amount Can't Be Withdraw More Than Rs. ${sancAmt}`, 'error');
            this.submitForm = true;
        }
    }
    // Check Voucher Conditions On Amount Field
    checkCondition($event) {
        let obj = {
            value: Number($event),
            clearBalance: Number(this.ClearBalance),
            accountNo: this.submitAccountNo.BANKACNO,
            schemeType: this.selectedCode,
            scheme: this.submitScheme.S_APPL,
            tran: this.submitTranMode.tran_drcr,
            tranMode: this.submitTranMode.id,
            odAmount: this.overdraftAmt,
            currentDate: this.date,
            totalAmt: this.angForm.controls['total_amt'].value,
            type: this.typeclearbal
        };
        if (Number(obj.value) >= 50000 && this.submitTranMode.tran_type == 'CS') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Are you sure?',
                html: '<span style="text-justify: inter-word;">If you want to countinue please click Yes button but This transaction make on your own risk</span>',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'No',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed == false) {
                    this.angForm.controls['amt'].reset();
                    this.angForm.controls['total_amt'].reset(0);
                    this.SideDetails();
                    this.submitForm = true;
                }
                else {
                    this.amt.nativeElement.blur();
                    this.checkamtcondition($event);
                    this.checkSanctionAmountWithAmount();
                }
            });
        }
        if (Number(obj.value) >= 200000) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Are you sure?',
                html: '<span style="text-justify: inter-word;">The government has banned cash transactions of Rs 2 lakh or more from April 1, 2017, through the Finance Act 2017.The newly inserted section 269ST in the Income Tax Act bans such cash dealings on a single day, in respect of a single transaction or transactions relating to one event or occasion from an individual. Contravention  of Section 269ST would entail levy of 100 percent penalty on receiver of the amount the tax department said in a public advertisement in leading dailies. This transaction make on your own risk</span>',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'No',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.checkamtcondition($event);
                    this.checkSanctionAmountWithAmount();
                    this.amt.nativeElement.blur();
                }
                else {
                    this.angForm.controls['amt'].reset();
                    this.angForm.controls['total_amt'].reset(0);
                    this.submitForm = true;
                    this.SideDetails();
                }
            });
        }
        else {
            this.checkamtcondition($event);
        }
    }
    //cheque no captial function
    chequeNoData(event) {
        //
        this.angForm.patchValue({
            chequeNo: event.target.value.toUpperCase()
        });
    }
    checkamtcondition($event) {
        let obj = {
            // value: Number($event.target.value),
            value: Number(this.angForm.controls['amt'].value),
            clearBalance: Number(this.ClearBalance),
            accountNo: this.submitAccountNo.BANKACNO,
            schemeType: this.selectedCode,
            scheme: this.submitScheme.S_APPL,
            tran: this.submitTranMode.tran_drcr,
            tranMode: this.submitTranMode.id,
            odAmount: this.overdraftAmt,
            currentDate: this.date,
            totalAmt: this.angForm.controls['total_amt'].value,
            type: this.typeclearbal
        };
        this._service.checkZeroBalance(obj).subscribe(data => {
            this.modalClass = 'modalShow';
            if (data != 0) {
                this.SideDetails();
                this.angForm.controls['amt'].reset();
                this.angForm.controls['total_amt'].reset(0);
                this.amt.nativeElement.focus();
                this.submitForm = true;
                this.modalClass = 'modalHide';
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
            }
            else {
                this._service.clearWithdrawBal(obj).subscribe(data => {
                    if (data != 0) {
                        this.SideDetails();
                        this.angForm.controls['amt'].reset();
                        this.angForm.controls['total_amt'].reset(0);
                        this.amt.nativeElement.focus();
                        this.submitForm = true;
                        this.modalClass = 'modalHide';
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                    }
                    else {
                        this._service.CheckPanNoInIDMaster(obj).subscribe(data => {
                            if (data != 0) {
                                // this.submitForm = true
                                this.modalClass = 'modalHide';
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                    title: data.message,
                                    html: `<span style="text-justify: inter-word;">If you want to countinue please click Yes button but This transaction make on your own risk</span>`,
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    cancelButtonText: 'No',
                                    confirmButtonText: 'Yes'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                    }
                                    else {
                                        this.angForm.controls['amt'].reset();
                                        this.angForm.controls['total_amt'].reset(0);
                                        this.SideDetails();
                                    }
                                });
                            }
                            else {
                                this._service.ClearVoucherSameBal(obj).subscribe(data => {
                                    if (data != 0) {
                                        this.SideDetails();
                                        this.angForm.controls['amt'].reset();
                                        this.angForm.controls['total_amt'].reset(0);
                                        this.amt.nativeElement.focus();
                                        this.submitForm = true;
                                        this.modalClass = 'modalHide';
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                    }
                                    else {
                                        this._service.BalancePresentOrOverdraft(obj).subscribe(data => {
                                            if (data != 0) {
                                                this.SideDetails();
                                                this.angForm.controls['amt'].reset();
                                                this.angForm.controls['total_amt'].reset(0);
                                                this.amt.nativeElement.focus();
                                                this.submitForm = true;
                                                this.modalClass = 'modalHide';
                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                            }
                                            else {
                                                this._service.ClearBalanceDebitAmt(obj).subscribe(data => {
                                                    if (data != 0) {
                                                        this.SideDetails();
                                                        this.angForm.controls['amt'].reset();
                                                        this.angForm.controls['total_amt'].reset(0);
                                                        this.amt.nativeElement.focus();
                                                        this.submitForm = true;
                                                        this.modalClass = 'modalHide';
                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                    }
                                                    else {
                                                        this._vservice.InstructionFreezeAc(obj).subscribe(data => {
                                                            if (data != 0) {
                                                                this.SideDetails();
                                                                this.angForm.controls['amt'].reset();
                                                                this.angForm.controls['total_amt'].reset(0);
                                                                this.amt.nativeElement.focus();
                                                                this.submitForm = true;
                                                                this.modalClass = 'modalHide';
                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                            }
                                                            else {
                                                                this._vservice.MinBalanceChecking(obj).subscribe(data => {
                                                                    if (data != 0) {
                                                                        this.SideDetails();
                                                                        this.angForm.controls['amt'].reset();
                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                        this.amt.nativeElement.focus();
                                                                        this.submitForm = true;
                                                                        this.modalClass = 'modalHide';
                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                    }
                                                                    else {
                                                                        this._vservice.CheckClearBalAndAmt(obj).subscribe(data => {
                                                                            if (data != 0) {
                                                                                this.SideDetails();
                                                                                this.angForm.controls['amt'].reset();
                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                this.amt.nativeElement.focus();
                                                                                this.submitForm = true;
                                                                                this.modalClass = 'modalHide';
                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                            }
                                                                            else {
                                                                                this._vservice.WithdrawAmtClosingEqualClearBal(obj).subscribe(data => {
                                                                                    if (data != 0) {
                                                                                        this.SideDetails();
                                                                                        this.angForm.controls['amt'].reset();
                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                        this.amt.nativeElement.focus();
                                                                                        this.submitForm = true;
                                                                                        this.modalClass = 'modalHide';
                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                    }
                                                                                    else {
                                                                                        this._vservice.DepositeAmountAndIntallments(obj).subscribe(data => {
                                                                                            if (data != 0) {
                                                                                                this.SideDetails();
                                                                                                this.angForm.controls['amt'].reset();
                                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                                this.amt.nativeElement.focus();
                                                                                                this.submitForm = true;
                                                                                                this.modalClass = 'modalHide';
                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                            }
                                                                                            else {
                                                                                                this._vservice.DepositAndTotalInstallments(obj).subscribe(data => {
                                                                                                    if (data != 0) {
                                                                                                        this.SideDetails();
                                                                                                        this.angForm.controls['amt'].reset();
                                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                                        this.amt.nativeElement.focus();
                                                                                                        this.submitForm = true;
                                                                                                        this.modalClass = 'modalHide';
                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                    }
                                                                                                    else {
                                                                                                        this._vservice.DepositAndDepositAmount(obj).subscribe(data => {
                                                                                                            if (data != 0) {
                                                                                                                this.SideDetails();
                                                                                                                this.angForm.controls['amt'].reset();
                                                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                                                this.amt.nativeElement.focus();
                                                                                                                this.submitForm = true;
                                                                                                                this.modalClass = 'modalHide';
                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                            }
                                                                                                            else {
                                                                                                                this._vservice.PremcloseTdateTamtCom(obj).subscribe(data => {
                                                                                                                    if (data != 0) {
                                                                                                                        this.SideDetails();
                                                                                                                        this.angForm.controls['amt'].reset();
                                                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                                                        this.amt.nativeElement.focus();
                                                                                                                        this.submitForm = true;
                                                                                                                        this.modalClass = 'modalHide';
                                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        this._vservice.PrecloseTrDateTrAmtComCol(obj).subscribe(data => {
                                                                                                                            if (data != 0) {
                                                                                                                                this.SideDetails();
                                                                                                                                this.angForm.controls['amt'].reset();
                                                                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                                                                this.amt.nativeElement.focus();
                                                                                                                                this.submitForm = true;
                                                                                                                                this.modalClass = 'modalHide';
                                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                this._vservice.ComVouamtClearbalAndStrs(obj).subscribe(data => {
                                                                                                                                    if (data != 0) {
                                                                                                                                        this.SideDetails();
                                                                                                                                        this.angForm.controls['amt'].reset();
                                                                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                                                                        this.amt.nativeElement.focus();
                                                                                                                                        this.submitForm = true;
                                                                                                                                        this.modalClass = 'modalHide';
                                                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                    }
                                                                                                                                    else {
                                                                                                                                        this._vservice.DepositGreaterShareLimitAmt(obj).subscribe(data => {
                                                                                                                                            if (data != 0) {
                                                                                                                                                this.SideDetails();
                                                                                                                                                this.angForm.controls['amt'].reset();
                                                                                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                                                                                this.amt.nativeElement.focus();
                                                                                                                                                this.submitForm = true;
                                                                                                                                                this.modalClass = 'modalHide';
                                                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                this._vservice.ZeroBalance(obj).subscribe(data => {
                                                                                                                                                    if (data != 0) {
                                                                                                                                                        this.SideDetails();
                                                                                                                                                        this.angForm.controls['amt'].reset();
                                                                                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                                                                                        this.amt.nativeElement.focus();
                                                                                                                                                        this.submitForm = true;
                                                                                                                                                        this.modalClass = 'modalHide';
                                                                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                    }
                                                                                                                                                    else {
                                                                                                                                                        this._vservice.CashWithdraw(obj).subscribe(data => {
                                                                                                                                                            if (data != 0) {
                                                                                                                                                                this.SideDetails();
                                                                                                                                                                this.angForm.controls['amt'].reset();
                                                                                                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                                                                                                this.amt.nativeElement.focus();
                                                                                                                                                                this.submitForm = true;
                                                                                                                                                                this.modalClass = 'modalHide';
                                                                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                                // } else {
                                                                                                                                                                //   this._vservice.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                                                                                                //     if (data != 0) {
                                                                                                                                                                //       this.SideDetails()
                                                                                                                                                                //       this.angForm.controls['amt'].reset();
                                                                                                                                                                //       this.angForm.controls['total_amt'].reset(0);
                                                                                                                                                                //       this.amt.nativeElement.focus();
                                                                                                                                                                //       this.submitForm = true
                                                                                                                                                                //       this.modalClass = 'modalHide';
                                                                                                                                                                //       Swal.fire('Oops!', data.message, 'error');
                                                                                                                                                            }
                                                                                                                                                            else {
                                                                                                                                                                this._vservice.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                                                                                                    // debugger
                                                                                                                                                                    if (data != 0) {
                                                                                                                                                                        this.SideDetails();
                                                                                                                                                                        this.angForm.controls['amt'].reset();
                                                                                                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                                                                                                        this.amt.nativeElement.focus();
                                                                                                                                                                        this.submitForm = true;
                                                                                                                                                                        this.modalClass = 'modalHide';
                                                                                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                                    }
                                                                                                                                                                    else {
                                                                                                                                                                        this._vservice.withdrawClosingCondition(obj).subscribe(data => {
                                                                                                                                                                            if (data != 0) {
                                                                                                                                                                                this.SideDetails();
                                                                                                                                                                                this.angForm.controls['amt'].reset();
                                                                                                                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                                                                                                                this.selectMode.focus();
                                                                                                                                                                                this.submitForm = true;
                                                                                                                                                                                this.modalClass = 'modalHide';
                                                                                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                                            }
                                                                                                                                                                            else {
                                                                                                                                                                                this.submitForm = false;
                                                                                                                                                                                this.amt.nativeElement.blur();
                                                                                                                                                                            }
                                                                                                                                                                        });
                                                                                                                                                                    }
                                                                                                                                                                }, err => {
                                                                                                                                                                    console.log(err);
                                                                                                                                                                });
                                                                                                                                                            }
                                                                                                                                                            //   }, err => {
                                                                                                                                                            //     console.log(err);
                                                                                                                                                            //   })
                                                                                                                                                            // }
                                                                                                                                                        }, err => {
                                                                                                                                                            console.log(err);
                                                                                                                                                        });
                                                                                                                                                    }
                                                                                                                                                }, err => {
                                                                                                                                                    console.log(err);
                                                                                                                                                });
                                                                                                                                            }
                                                                                                                                        }, err => {
                                                                                                                                            console.log(err);
                                                                                                                                        });
                                                                                                                                    }
                                                                                                                                }, err => {
                                                                                                                                    console.log(err);
                                                                                                                                });
                                                                                                                            }
                                                                                                                        }, err => {
                                                                                                                            console.log(err);
                                                                                                                        });
                                                                                                                    }
                                                                                                                }, err => {
                                                                                                                    console.log(err);
                                                                                                                });
                                                                                                            }
                                                                                                        }, err => {
                                                                                                            console.log(err);
                                                                                                        });
                                                                                                    }
                                                                                                }, err => {
                                                                                                    console.log(err);
                                                                                                });
                                                                                            }
                                                                                        }, err => {
                                                                                            console.log(err);
                                                                                        });
                                                                                    }
                                                                                }, err => {
                                                                                    console.log(err);
                                                                                });
                                                                            }
                                                                        }, err => {
                                                                            console.log(err);
                                                                        });
                                                                    }
                                                                }, err => {
                                                                    console.log(err);
                                                                });
                                                            }
                                                        }, err => {
                                                            console.log(err);
                                                        });
                                                    }
                                                }, err => {
                                                    console.log(err);
                                                });
                                            }
                                        }, err => {
                                            console.log(err);
                                        });
                                    }
                                }, err => {
                                    console.log(err);
                                });
                            }
                        }, err => {
                            console.log(err);
                        });
                    }
                }, err => {
                    console.log(err);
                });
            }
        }, err => {
            console.log(err);
        });
    }
    dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            /* next line works with strings and numbers,
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    }
    // Check Voucher Conditions On Account Field
    checkAccountCondition() {
        let data1 = localStorage.getItem('user');
        let result = JSON.parse(data1);
        let tempacno = this.submitAccountNo.BANKACNO;
        let obj = {
            clearBalance: Number(this.ClearBalance),
            accountNo: this.submitAccountNo.BANKACNO,
            accno: this.submitAccountNo.AC_NO,
            schemeType: this.selectedCode,
            scheme: this.submitScheme.S_APPL,
            usertype: result.RoleDefine[0].RoleId,
            currentDate: this.date
        };
        this._vservice.CheckAccountCloseFlagInDailytran(obj).subscribe(data => {
            if (data != 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                this.customer = null;
                this.showlgindetails();
            }
            else {
                this._vservice.specialInstruction(obj).subscribe(data => {
                    if (data != 0) {
                        if (data.restriction == 1) {
                            this.customer = null;
                            this.showlgindetails();
                        }
                        else {
                            this.customer = tempacno;
                        }
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                            title: 'Warning',
                            icon: 'warning',
                            html: data.message + '<br>' +
                                '<span style="font-weight:bold;">Instruction:</span>' + '<br>'
                                + data.DETAILS
                        });
                    }
                    else {
                        this._vservice.CheckLoginFlagInDpmaster(obj).subscribe(data => {
                            if (data != 0) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                this.customer = null;
                                this.showlgindetails();
                            }
                            else {
                                this._vservice.checkDormantAccount(obj).subscribe(data => {
                                    if (data != 0) {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                        this.customer = null;
                                        this.showlgindetails();
                                    }
                                    else {
                                        this._vservice.InstructionFreezeAc(obj).subscribe(data => {
                                            if (data != 0) {
                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                                                    title: 'Are you sure?',
                                                    text: data.message,
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    cancelButtonText: 'No',
                                                    confirmButtonText: 'Yes'
                                                }).then((result) => {
                                                    if (result.isConfirmed == false) {
                                                        this.customer = null;
                                                        this.showlgindetails();
                                                    }
                                                });
                                            }
                                            else {
                                                this._vservice.IsDirectEntryAllow(obj).subscribe(data => {
                                                    if (data != 0) {
                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                    }
                                                }, err => {
                                                    console.log(err);
                                                });
                                            }
                                        }, err => {
                                            console.log(err);
                                        });
                                    }
                                }, err => {
                                    console.log(err);
                                });
                            }
                        }, err => {
                            console.log(err);
                        });
                    }
                }, err => {
                    console.log(err);
                });
            }
        }, err => {
            console.log(err);
        });
    }
    // Check Voucher Conditions On Transaction Mode
    checktranCondition() {
        if (this.angForm.controls['type'].value == 'cash' && this.submitTranMode.tran_drcr == 'D') {
            this.tokenshowhide = true;
        }
        else {
            this.tokenshowhide = false;
        }
        let obj = {
            accountNo: this.submitAccountNo.BANKACNO,
            schemeType: this.selectedCode,
            scheme: this.submitScheme.S_APPL,
            tran: this.submitTranMode.tran_drcr,
            tranMode: this.submitTranMode.id,
            currentDate: this.date
        };
        if (this.submitTranMode.id == 7 && this.selectedCode == 'SH') {
            this.angForm.controls['amt'].disable();
            this.angForm.controls['NARRATION'].disable();
            let other2amounttotal;
            this._vservice.calculateDividend(obj).subscribe(data => {
                other2amounttotal = data.Bcount;
                let str = [];
                for (let x in data.calculationdata) {
                    str.push(data.calculationdata[x].DIV_FROM_YEAR);
                }
                this.headData.forEach(element => {
                    if (element.FIELD_TRAN_TABLE == 'OTHER2_AMOUNT') {
                        element['Balance'] = other2amounttotal;
                    }
                });
                this.angForm.patchValue({
                    'amt': data.count,
                    'NARRATION': str + ' Paid Dividend'
                });
            });
        }
        this._vservice.StandingOrInterestInstruction(obj).subscribe(data => {
            if (data != 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                this.selectedMode = null;
            }
            else {
                this._vservice.VoucherPassing(obj).subscribe(data => {
                    if (data != 0) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                        this.selectedMode = null;
                    }
                    else {
                        this._vservice.LienMarkChecking(obj).subscribe(data => {
                            if (data != 0) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                this.selectedMode = null;
                            }
                            else {
                                this._vservice.RecurringTypeDeposite(obj).subscribe(data => {
                                    if (data != 0) {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                        this.selectedMode = null;
                                    }
                                }, err => {
                                    console.log(err);
                                });
                            }
                        }, err => {
                            console.log(err);
                        });
                    }
                }, err => {
                    console.log(err);
                });
            }
        }, err => {
            console.log(err);
        });
    }
    // Check Voucher Conditions On Interest Date
    getColumnValue(event) {
        if (event != null) {
            let obj = {
                accountNo: this.submitAccountNo.BANKACNO,
                schemeType: this.selectedCode,
                scheme: this.submitScheme.S_APPL,
                tran: this.submitTranMode.tran_drcr,
                tranMode: this.submitTranMode.id,
                currentDate: this.date,
                interestDate: moment__WEBPACK_IMPORTED_MODULE_4__(event).format('DD/MM/YYYY')
            };
            let date = moment__WEBPACK_IMPORTED_MODULE_4__(event).format('DD/MM/YYYY');
            this.updateheadbalance(date);
            this._vservice.ComInterestDateAndCurrentDate(obj).subscribe(data => {
                if (data != 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                    this.angForm.controls['Intdate'].reset();
                }
                else {
                    this._vservice.ComInterestDateAndLastDMonth(obj).subscribe(data => {
                        if (data != 0) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                        }
                    }, err => {
                        console.log(err);
                    });
                }
            }, err => {
                console.log(err);
            });
        }
    }
    checkTokenCondition(event) {
        let obj = {
            value: Number(event.target.value),
            clearBalance: Number(this.ClearBalance),
            accountNo: this.submitAccountNo.BANKACNO,
            schemeType: this.selectedCode,
            scheme: this.submitScheme.S_APPL,
            tran: this.submitTranMode.tran_drcr,
            tranMode: this.submitTranMode.id,
            tran_type: this.submitTranMode.tran_type,
            odAmount: this.overdraftAmt,
            currentDate: this.date
        };
        this._vservice.ComInterestDateAndLastDMonth(obj).subscribe(data => {
            if (data != 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
            }
        }, err => {
            console.log(err);
        });
    }
    updateheadbalance(date) {
        let newobj = {
            accountNo: this.submitAccountNo.BANKACNO,
            scheme: this.submitScheme.S_APPL,
            currentDate: date,
            schemeType: this.selectedCode,
        };
        let balancedata;
        this._vservice.getInputHeadBal(newobj).subscribe(data1 => {
            balancedata = data1;
            //
            // this.headData.forEach(element =>
            for (let element of this.headData) {
                let newobj = {
                    acno: element === null || element === void 0 ? void 0 : element.GL_CODE,
                    scheme: '101',
                    date: this.date,
                    schemeType: this.selectedCode,
                };
                if (element.FIELD_AMOUNT == 'INTEREST_AMOUNT') {
                    if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                        element['Amount'] = Math.round(Math.abs(data1.intpenal.InterestAmount));
                        element['Balance'] = Math.round(Math.abs(data1.intpenal.InterestAmount));
                    }
                    else {
                        element['Amount'] = 0;
                        element['Balance'] = Math.round(Math.abs(data1.intpenal.InterestAmount));
                    }
                    element['date'] = this.IntersetHeadDate;
                    element['tempBalance'] = data1.intpenal.InterestAmount;
                    element['type'] = (data1.intpenal.InterestAmount <= 0 ? 'Cr' : 'Dr');
                }
                else if (element.FIELD_AMOUNT == 'PENAL_INT_AMOUNT') {
                    if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                        element['Amount'] = Math.round(Math.abs(data1.intpenal.PenalInterest));
                        element['Balance'] = Math.round(Math.abs(data1.intpenal.PenalInterest));
                    }
                    else {
                        element['Amount'] = 0;
                        element['Balance'] = Math.round(Math.abs(data1.intpenal.PenalInterest));
                    }
                    element['tempBalance'] = data1.intpenal.PenalInterest;
                    element['type'] = (data1.intpenal.PenalInterest <= 0 ? 'Cr' : 'Dr');
                }
                else if (element.FIELD_AMOUNT == 'REC_PENAL_INT_AMOUNT') {
                    if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                        element['Amount'] = Math.round(Math.abs(data1.recpaypen));
                        element['Balance'] = Math.round(Math.abs(data1.recpaypen));
                    }
                    else {
                        element['Amount'] = 0;
                        element['Balance'] = Math.round(Math.abs(data1.recpaypen));
                    }
                    element['tempBalance'] = data1.recpaypen;
                    element['type'] = (data1.recpaypen <= 0 ? 'Cr' : 'Dr');
                }
                else if (element.FIELD_AMOUNT == 'RECPAY_INT_AMOUNT' && element.HEAD_TYPE == 'PYI') {
                    if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                        element['Amount'] = Math.round(Math.abs(data1.recpaybal));
                        element['Balance'] = Math.round(Math.abs(data1.recpaybal));
                    }
                    else {
                        element['Amount'] = 0;
                        element['Balance'] = Math.round(Math.abs(data1.recpaybal));
                    }
                    element['tempBalance'] = data1.recpaybal;
                    element['type'] = (data1.recpaybal <= 0 ? 'Cr' : 'Dr');
                }
                else if (element.FIELD_AMOUNT == 'RECPAY_INT_AMOUNT' && element.HEAD_TYPE == 'REC') {
                    if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                        element['Amount'] = Math.round(Math.abs(data1.recpaybal));
                        element['Balance'] = Math.round(Math.abs(data1.recpaybal));
                    }
                    else {
                        element['Amount'] = 0;
                        element['Balance'] = Math.round(Math.abs(data1.recpaybal));
                    }
                    element['tempBalance'] = data1.recpaybal;
                    element['type'] = (data1.recpaybal <= 0 ? 'Cr' : 'Dr');
                }
                else if (element.FIELD_AMOUNT == 'OTHER2_AMOUNT') {
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                            if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                                element['Amount'] = Math.round(Number(element['Balance']));
                            }
                            else {
                                element['Amount'] = 0;
                            }
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER3_AMOUNT') {
                    element['Amount'] = 0;
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                            if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                                element['Amount'] = Math.round(Number(element['Balance']));
                            }
                            else {
                                element['Amount'] = 0;
                            }
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER4_AMOUNT') {
                    element['Amount'] = 0;
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                            if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                                element['Amount'] = Math.round(Number(element['Balance']));
                            }
                            else {
                                element['Amount'] = 0;
                            }
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER5_AMOUNT') {
                    element['Amount'] = 0;
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                            if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                                element['Amount'] = Math.round(Number(element['Balance']));
                            }
                            else {
                                element['Amount'] = 0;
                            }
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER6_AMOUNT') {
                    element['Amount'] = 0;
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                            if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                                element['Amount'] = Math.round(Number(element['Balance']));
                            }
                            else {
                                element['Amount'] = 0;
                            }
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER7_AMOUNT') {
                    element['Amount'] = 0;
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                            if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                                element['Amount'] = Math.round(Number(element['Balance']));
                            }
                            else {
                                element['Amount'] = 0;
                            }
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER8_AMOUNT') {
                    element['Amount'] = 0;
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                            if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                                element['Amount'] = Math.round(Number(element['Balance']));
                            }
                            else {
                                element['Amount'] = 0;
                            }
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER9_AMOUNT') {
                    element['Amount'] = 0;
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                            if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                                element['Amount'] = Math.round(Number(element['Balance']));
                            }
                            else {
                                element['Amount'] = 0;
                            }
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER11_AMOUNT') {
                    element['Amount'] = 0;
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._vservice.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                            if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                                element['Amount'] = Math.round(Number(element['Balance']));
                            }
                            else {
                                element['Amount'] = 0;
                            }
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER10_AMOUNT') {
                    element['Amount'] = 0;
                    element['Balance'] = Math.round(Math.abs(data1.overduebal));
                    element['tempBalance'] = data1.overduebal;
                    element['type'] = (data1.overduebal <= 0 ? 'Cr' : 'Dr');
                    if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                        element['Amount'] = Math.round(Number(element['Balance']));
                    }
                    else {
                        element['Amount'] = 0;
                    }
                }
                else {
                    element['Amount'] = 0;
                    element['Balance'] = 0;
                    element['tempBalance'] = 0;
                    element['type'] = 'Cr';
                }
            }
            if (this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15) {
                let count = 0;
                this.headData.forEach(element => {
                    count = Number(element.Amount) + Number(count);
                });
                this.totalAmt = count + Number(this.ClearBalance);
                this.totalAmt = Number(this.totalAmt).toFixed(2);
            }
            else {
                this.totalAmt = 0;
            }
            // );
        });
    }
    getaftervoucher(event) {
        this.submitForm = true;
        var t = event.target.value;
        event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
        let value = Number(event.target.value);
        let tran = this.submitTranMode.tran_drcr;
        // if (tran == 'D') {
        //   this.AfterVoucher = Math.abs(this.tempDayOpBal - value)
        //   this.extenstionaftervoucher = 'Dr'
        // } else {
        //   this.AfterVoucher = Math.abs(this.tempDayOpBal + value)
        //   this.extenstionaftervoucher = 'Cr'
        // }
        if (tran == 'D' && this.typeclearbal == 'Dr') {
            this.AfterVoucher = Math.abs(Number(this.ClearBalance) + value);
            this.AfterVoucher = Number(this.AfterVoucher).toFixed(2);
            this.extenstionaftervoucher = 'Dr';
        }
        else if (tran == 'D' && this.typeclearbal == 'Cr') {
            this.AfterVoucher = Math.abs(Number(this.ClearBalance) - value);
            this.AfterVoucher = Number(this.AfterVoucher).toFixed(2);
            if (value > Number(this.ClearBalance)) {
                if (tran == 'C') {
                    this.extenstionaftervoucher = 'Cr';
                }
                else {
                    this.extenstionaftervoucher = 'Dr';
                }
            }
            else if (value < Number(this.ClearBalance)) {
                this.extenstionaftervoucher = this.typeclearbal;
            }
        }
        else if (tran == 'C' && this.typeclearbal == 'Dr') {
            this.AfterVoucher = Math.abs(Number(this.ClearBalance) - value);
            this.AfterVoucher = Number(this.AfterVoucher).toFixed(2);
            if (value > Number(this.ClearBalance)) {
                if (tran == 'C') {
                    this.extenstionaftervoucher = 'Cr';
                }
                else {
                    this.extenstionaftervoucher = 'Dr';
                }
            }
        }
        else {
            this.AfterVoucher = Math.abs(Number(this.ClearBalance) + value);
            this.AfterVoucher = Number(this.AfterVoucher).toFixed(2);
            this.extenstionaftervoucher = 'Cr';
        }
    }
    onFocus(ele) {
        ele.open();
        console.log(ele);
    }
    onOpen(select) {
        //
        select.open();
    }
    onClose(select) {
        select.close();
    }
    getDecimalPoint(event) {
        if (event.target.value != '')
            event.target.value = parseFloat(event.target.value).toFixed(2);
    }
    checkIfZero(value) {
        if (Number(value) == 0 || value == 'NaN') {
            this.submitForm = true;
            this.angForm.controls.amt.setValue('0.00');
            this.amt.nativeElement.focus();
        }
        else {
            this.submitForm = false;
            this.totalAmt = parseFloat(value).toFixed(2);
        }
    }
    closeModal() {
        var button = document.getElementById('trigger');
        button.click();
        this.reloadTablePassing.emit();
    }
    checkBalanceFlag(event, i) {
        if (this.headData[i].CHECK_REQUIRE == '1' && Number(event.target.value) == 0) {
            if (this.headData[i].FIELD_AMOUNT == 'INTEREST_AMOUNT')
                this.INTAMT.nativeElement.focus();
            else
                this.NOTINTAMT.nativeElement.focus();
            this.submitForm = true;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Info', 'Please fill proper amount!', 'info');
        }
    }
    getBranch() {
        this.selectedScheme = null;
        this.selectedCode = null;
        this.customer = null;
        this.introducerACNo = [];
    }
    adjustsize() {
        this.myDiv.nativeElement.style.height = 'auto';
        this.myDiv.nativeElement.style.height = `${this.myDiv.nativeElement.scrollHeight}px`;
    }
}
MultiVoucherComponent.ɵfac = function MultiVoucherComponent_Factory(t) { return new (t || MultiVoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__["TransactionCashModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__["TransactionTransferModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__["SchemeTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multi_voucher_service__WEBPACK_IMPORTED_MODULE_11__["MultiVoucherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_voucher_entry_voucher_entry_service__WEBPACK_IMPORTED_MODULE_12__["VoucherEntryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_13__["SavingMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["BankMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_16__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["ACMasterDropdownService"])); };
MultiVoucherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiVoucherComponent, selectors: [["app-multi-voucher"]], viewQuery: function MultiVoucherComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerhide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggrhide1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusbutton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectMode = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.amt = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.INTAMT = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.NOTINTAMT = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitbtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bankNameField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.narrationField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, inputs: { childMessage: "childMessage" }, outputs: { reloadTablePassing: "reloadTablePassing" }, decls: 339, vars: 72, consts: [["style", "width: 270px;height: 335px;z-index: 1000;\n    position: absolute;margin-top: 14%;margin-left:51%", 4, "ngIf"], [1, "row"], [1, "col-md-9"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [1, "card-body"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "solid"], [1, "col-sm-12", "col-md-2"], ["for", "AC_BRANCH"], [1, "col-sm-12", "col-md-4"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["formControlName", "branch_code", "appTheme", "", "autofocus", "", 3, "ngModel", "selectOnTab", "ngModelChange", "focus", "change"], ["selectBranch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-md-1"], [1, "col-sm-12", "col-md-1"], ["for", "AC_EXPDT"], [1, "col-md-2"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "date", "disabled", "", 1, "form-control", 3, "bsConfig", "ngModel", "isDisabled", "ngModelChange"], [1, "col-sm-2"], ["formControlName", "scheme_type", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "change", "focus"], ["selectCode", ""], [1, "col-sm-12", "col-md-6"], ["bindValue", "id", "appTheme", "", "formControlName", "scheme", 3, "ngModel", "selectOnTab", "ngModelChange", "change", "focus"], ["selectScheme", ""], [1, "col-sm-6"], ["bindValue", "id", "formControlName", "account_no", "appTheme", "", 3, "ngModel", "selectOnTab", "virtualScroll", "ngModelChange", "focus", "change"], ["selectAcc", ""], [1, "col-sm-4"], ["bindValue", "id", "formControlName", "tran_mode", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "focus", "change"], ["selectMode", ""], ["for", "AC_PARTICULAR"], [1, "col-md-4"], ["formControlName", "NARRATION", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["myDiv", "", "narrationField", ""], [1, "fa", "fa-info-circle", "errspan", 3, "click"], [4, "ngIf"], ["type", "text", "name", "AC_PARTICULAR", "placeholder", " ", "id", "AC_PARTICULAR", "maxlength", "15", "appTheme", "", "title", "Input allowed only 0-9", "required", "", "formControlName", "amt", 1, "form-control", 3, "keypress", "keyup", "focus", "focusout", "keydown.Tab", "change"], ["amt", ""], ["type", "text", "name", "AC_PARTICULAR", "placeholder", " ", "id", "AC_PARTICULAR", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "required", "", "formControlName", "total_amt", "disabled", "", 1, "form-control", 2, "text-transform", "capitalize", "font-size", "15px", 3, "ngModel", "ngModelChange"], ["class", "row", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", "style", "float: right;", 3, "click", "keydown.Tab", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", "style", "float: right", 3, "click", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "compact"], [2, "text-align", "right"], [4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "col-sm", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [2, "display", "none", 3, "click"], ["focusbutton", ""], [1, "col-md-3", "col-sm-12", "col-xm-12"], [1, "requiredlable"], [1, "transaction-item"], [1, "d-flex"], [1, "avatar", "bg-light-primary", "rounded", "float-start"], [1, "avatar-content"], [1, "fa", "fa-google-wallet", "field-icon"], [1, "transaction-percentage"], [1, "transaction-title", 2, "font-size", "12px"], [1, "fw-bolder", "transaction-title", "text-primary", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], ["aria-hidden", "true", 1, "fa", "fa-inr"], ["class", "col-md-12", 4, "ngIf"], [1, "avatar", "bg-light-success", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "avatar", "bg-light-danger", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-danger", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "avatar", "bg-light-info", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-info", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "col-md"], [1, "transaction-title", 2, "font-size", "15px"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "15px"], [1, "user-avatar-section"], ["class", "img-fluid rounded mt-3 mb-2", "height", "50", "width", "80", "alt", "User avatar", 3, "src", "mouseover", "mouseout", 4, "ngIf"], ["class", "img-fluid rounded mt-3 mb-2", "height", "25", "width", "80", "alt", "User avatar", 3, "src", "mouseover", "mouseout", 4, "ngIf"], [1, "user-info", "text-center"], [1, "info-container"], [1, "list-unstyled"], [1, "mb-75"], [1, "fw-bolder", "me-25"], [1, "badge", "bg-light-success"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [1, "table", "table-bordered"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "id", "triggrhide", 1, "btn", "btn-outline-primary", "btn-sm", 2, "display", "none", 3, "click"], ["triggerhide", ""], ["modalLarge1", ""], ["type", "button", "id", "triggrhide1", 1, "btn", "btn-outline-primary", "btn-sm", 2, "display", "none", 3, "click"], ["triggrhide1", ""], [2, "width", "270px", "height", "335px", "z-index", "1000", "position", "absolute", "margin-top", "14%", "margin-left", "51%"], ["width", "400", "height", "300", 3, "src"], [3, "value"], [1, "alert", "alert-danger"], ["for", ""], [1, "col-md-6"], ["formControlName", "bank", 1, "form-control", 3, "ngModel", "ngModelChange"], ["bankNameField", ""], ["for", "ChequeNo"], ["type", "text", "name", "ChequeNo", "placeholder", " ", "id", "ChequeNo", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "required", "", "formControlName", "chequeNo", "maxlength", "10", 1, "form-control", 2, "text-transform", "capitalize", 3, "keyup"], ["for", "ChequeDate"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "appButton", "", "minlength", "8", "maxlength", "10", "formControlName", "chequeDate", 1, "form-control", 3, "bsConfig", "maxDate", "minDate"], [1, "bg-light-danger", "text-right"], [1, "text-danger"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "Intdate", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelChange", "bsValueChange"], ["type", "text", "pattern", "\\d{1,8}(\\.\\d{2})?", "maxlength", "11", 2, "width", "100%", "border", "none", "text-align", "right", 3, "value", "disabled", "keypress", "keyup", "focusout", "focus"], ["INTAMT", ""], ["type", "text", "pattern", "\\d{1,8}(\\.\\d{2})?", "maxlength", "11", "pattern", "\\d{1,10}(\\.\\d{1,2})?", 2, "width", "100%", "border", "none", "text-align", "right", 3, "value", "disabled", "keypress", "keyup", "focusout", "focus"], ["NOTINTAMT", ""], ["colspan", "5", 1, "no-data-available"], [1, "btn", "btn-outline-primary", "btn-sm", 2, "float", "right", 3, "click", "keydown.Tab"], [1, "btn", "btn-outline-primary", "btn-sm", 2, "float", "right", 3, "click"], [1, "fa", "fa-plus-circle", "grab", 3, "click"], [1, "fa", "fa-fw", "fa-edit", "field-icon", "grab", 3, "click"], [2, "text-align", "left"], [3, "id", "hidden"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], ["submitbtn", ""], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["height", "50", "width", "80", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], ["height", "25", "width", "80", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], [3, "click"]], template: function MultiVoucherComponent_Template(rf, ctx) { if (rf & 1) {
        const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Branch Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ng-select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_27_listener($event) { return ctx.selectedBranch = $event; })("focus", function MultiVoucherComponent_Template_ng_select_focus_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx.onFocus(_r2); })("change", function MultiVoucherComponent_Template_ng_select_change_27_listener() { return ctx.getBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MultiVoucherComponent_ng_option_29_Template, 2, 2, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MultiVoucherComponent_div_30_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_input_ngModelChange_39_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Scheme Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ng-select", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_49_listener($event) { return ctx.selectedCode = $event; })("change", function MultiVoucherComponent_Template_ng_select_change_49_listener() { ctx.selectedSchemeCode(); return ctx.resetscheme(); })("focus", function MultiVoucherComponent_Template_ng_select_focus_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); return ctx.onFocus(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, MultiVoucherComponent_ng_option_51_Template, 2, 2, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, MultiVoucherComponent_div_52_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ng-select", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_61_listener($event) { return ctx.selectedScheme = $event; })("change", function MultiVoucherComponent_Template_ng_select_change_61_listener($event) { return ctx.getIntroducer1($event); })("focus", function MultiVoucherComponent_Template_ng_select_focus_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62); return ctx.onFocus(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, MultiVoucherComponent_ng_option_63_Template, 2, 3, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, MultiVoucherComponent_div_64_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ng-select", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_74_listener($event) { return ctx.customer = $event; })("focus", function MultiVoucherComponent_Template_ng_select_focus_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](75); return ctx.onFocus(_r11); })("change", function MultiVoucherComponent_Template_ng_select_change_74_listener($event) { ctx.getVoucherData($event); ctx.SideDetails(); ctx.checkAccountCondition(); return ctx.showlgindetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, MultiVoucherComponent_ng_option_76_Template, 2, 3, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, MultiVoucherComponent_div_77_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Transaction Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ng-select", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_87_listener($event) { return ctx.selectedMode = $event; })("focus", function MultiVoucherComponent_Template_ng_select_focus_87_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](88); return ctx.onFocus(_r14); })("change", function MultiVoucherComponent_Template_ng_select_change_87_listener($event) { ctx.changeMode($event); return ctx.checktranCondition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, MultiVoucherComponent_ng_option_89_Template, 2, 3, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, MultiVoucherComponent_div_90_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Particulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "textarea", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_textarea_ngModelChange_97_listener($event) { return ctx.particular = $event; })("keyup", function MultiVoucherComponent_Template_textarea_keyup_97_listener() { return ctx.adjustsize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_i_click_100_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](298); return _r43.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, MultiVoucherComponent_div_101_Template, 12, 2, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "input", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function MultiVoucherComponent_Template_input_keypress_109_listener($event) { return $event.charCode == 46 || $event.charCode >= 48 && $event.charCode < 58; })("keyup", function MultiVoucherComponent_Template_input_keyup_109_listener($event) { return ctx.getaftervoucher($event); })("keyup", function MultiVoucherComponent_Template_input_keyup_109_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](110); return ctx.getAmt(_r20.value); })("focus", function MultiVoucherComponent_Template_input_focus_109_listener($event) { return ctx.selectAllContent($event); })("focusout", function MultiVoucherComponent_Template_input_focusout_109_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](110); ctx.getDecimalPoint($event); return ctx.checkIfZero(_r20.value); })("keydown.Tab", function MultiVoucherComponent_Template_input_keydown_Tab_109_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](110); ctx.decimalAllContent(_r20.value); ctx.checkCondition(_r20.value); return ctx.checkSanctionAmountWithAmount(); })("change", function MultiVoucherComponent_Template_input_change_109_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](110); ctx.decimalAllContent(_r20.value); ctx.checkCondition(_r20.value); return ctx.checkSanctionAmountWithAmount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_input_ngModelChange_118_listener($event) { return ctx.totalAmt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, MultiVoucherComponent_div_119_Template, 19, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, MultiVoucherComponent_button_122_Template, 2, 0, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, MultiVoucherComponent_button_123_Template, 2, 0, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "table", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Scheme Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Account NO.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Transaction Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Particulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, MultiVoucherComponent_ng_container_143_Template, 35, 10, "ng-container", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](154, MultiVoucherComponent_button_154_Template, 3, 1, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, MultiVoucherComponent_button_155_Template, 2, 0, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, MultiVoucherComponent_button_156_Template, 2, 0, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](158, MultiVoucherComponent_button_158_Template, 2, 0, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](160, MultiVoucherComponent_button_160_Template, 2, 0, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, MultiVoucherComponent_button_161_Template, 2, 0, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "button", 59, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_button_click_162_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](88); return _r14.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "focus");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h6", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Day Opening Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](186, MultiVoucherComponent_div_186_Template, 12, 1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Unpassed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Uneffected Clearing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " 0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Overdraft Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](236, MultiVoucherComponent_div_236_Template, 11, 1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](237, MultiVoucherComponent_div_237_Template, 11, 1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](238, MultiVoucherComponent_div_238_Template, 11, 1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](239, MultiVoucherComponent_div_239_Template, 11, 1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](240, MultiVoucherComponent_div_240_Template, 11, 1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](241, MultiVoucherComponent_div_241_Template, 12, 1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](242, MultiVoucherComponent_div_242_Template, 12, 1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](243, MultiVoucherComponent_div_243_Template, 12, 1, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Cleared Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "After this voucher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](273, MultiVoucherComponent_img_273_Template, 1, 1, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](276, MultiVoucherComponent_img_276_Template, 1, 1, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "ul", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "PAN ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Contact:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "app-modal-basic", 91, 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "h4", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Narration Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_button_click_302_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](298); return _r43.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "perfect-scrollbar", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "table", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Paticulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](314, MultiVoucherComponent_tr_314_Template, 2, 1, "tr", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "button", 101, 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_button_click_315_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](298); return _r43.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "app-modal-basic", 91, 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "h4", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Bank Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_button_click_323_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](319); return _r46.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "perfect-scrollbar", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "table", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Bank Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](335, MultiVoucherComponent_tr_335_Template, 2, 1, "tr", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "button", 104, 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_button_click_336_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](319); return _r46.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "Close");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedBranch)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["branch_code"].invalid && (ctx.angForm.controls["branch_code"].dirty || ctx.angForm.controls["branch_code"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](71, _c11))("ngModel", ctx.date)("isDisabled", ctx.isture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCode)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allSchemeCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["scheme_type"].invalid && (ctx.angForm.controls["scheme_type"].dirty || ctx.angForm.controls["scheme_type"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedScheme)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["scheme"].invalid && (ctx.angForm.controls["scheme"].dirty || ctx.angForm.controls["scheme"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer)("selectOnTab", true)("virtualScroll", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.introducerACNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["account_no"].invalid && (ctx.angForm.controls["account_no"].dirty || ctx.angForm.controls["account_no"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMode)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tranModeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["tran_mode"].invalid && (ctx.angForm.controls["tran_mode"].dirty || ctx.angForm.controls["tran_mode"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.particular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showChequeDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.totalAmt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAdd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mainMaster);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total Credit : ", ctx.totalCredit, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total Debit : ", ctx.totalDebit, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.DayOpBal, " ", ctx.extensionopenbal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.submitAccountNo == null ? null : ctx.submitAccountNo.AC_ACNOTYPE) == "PG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.Pass, " ", ctx.passextension, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.Unpass, " ", ctx.unpassextension, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.overdraftAmt, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowLNCC || ctx.ShownotLNCC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShownotLNCC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowLNCC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowLNCC || ctx.ShownotLNCC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowLNCC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShowLNCC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShownotLNCC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShownotLNCC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.ClearBalance, " ", ctx.typeclearbal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.AfterVoucher, " ", ctx.extenstionaftervoucher, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCode != "GL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCode != "GL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Customer_Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Status == true || ctx.Status == 1 ? "Inactive" : "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Customer_Pan_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+91 ", ctx.Customer_Contact_No, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.narrationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bankName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _theme_directive__WEBPACK_IMPORTED_MODULE_20__["ThemeDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_22__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["ɵr"], _button_directive__WEBPACK_IMPORTED_MODULE_24__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 20px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.transaction-item[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.bg-light-primary[_ngcontent-%COMP%] {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367F0 !important;\n}\n\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.357rem !important;\n}\n\n.float-start[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin-right: 1.2rem;\n}\n\n.avatar.bg-light-primary[_ngcontent-%COMP%] {\n  color: #7367F0 !important;\n}\n\n.avatar.bg-light-success[_ngcontent-%COMP%] {\n  color: #28C76F !important;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background-color: #C3C3C3;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n  color: #FFF;\n  display: inline-flex;\n  font-size: 1rem;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 600;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n}\n\n.avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 0.857rem;\n}\n\n.bg-light-success[_ngcontent-%COMP%] {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28C76F !important;\n}\n\n.bg-light-danger[_ngcontent-%COMP%] {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #EA5455 !important;\n}\n\n.transaction-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.errspan[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 21px;\n  margin-top: -20px;\n  position: relative;\n  z-index: 2;\n  color: red;\n}\n\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: white !important;\n  color: black !important;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #ff5252;\n  color: #ff5252;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 11px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 14px;\n  border-radius: 5px;\n  padding-bottom: 22px;\n  padding-top: 4px;\n  height: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 13px;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px !important;\n  max-height: 18px !important;\n  align-items: center;\n  font-size: 11px !important;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 18px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 5px;\n}\n\n.modalShow[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.8) url(\"https://i.stack.imgur.com/FhHRx.gif\") 50% 50% no-repeat;\n}\n\n.modalHide[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.8) url(\"https://i.stack.imgur.com/FhHRx.gif\") 50% 50% no-repeat;\n}\n\n.cellCss[_ngcontent-%COMP%] {\n  text-align: left;\n  word-wrap: break-word;\n  white-space: normal;\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vbXVsdGktdm91Y2hlci9tdWx0aS12b3VjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUdBO0VBQ0UscUJBQUE7QUFBRjs7QUFHQTtFQUNFLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBSUEsbUJBQUE7RUFJQSw4QkFBQTtBQUFGOztBQUdBO0VBRUUsd0JBQUE7QUFERjs7QUFJQTtFQUNFLGdEQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLGtDQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUlBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBSUEsYUFBQTtFQUlBLHVCQUFBO0VBSUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSw4Q0FBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtBQUZGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFFRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUxGOztBQVFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpR0FBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlHQUFBO0FBTkY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUxGIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vbXVsdGktdm91Y2hlci9tdWx0aS12b3VjaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucmVxdWlyZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBtYXJnaW46IDNweDtcclxufVxyXG5cclxuZGl2LnNvbGlkIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDIlXHJcbn1cclxuXHJcblxyXG4uY2FyZC10cmFuc2FjdGlvbiAudHJhbnNhY3Rpb24taXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZC1mbGV4IHtcclxuXHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctbGlnaHQtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMTUsIDEwMywgMjQwLCAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM3MzY3RjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdW5kZWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzU3cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbG9hdC1zdGFydCB7XHJcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtdHJhbnNhY3Rpb24gLnRyYW5zYWN0aW9uLWl0ZW0gLmF2YXRhciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XHJcbn1cclxuXHJcbi5hdmF0YXIuYmctbGlnaHQtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICM3MzY3RjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF2YXRhci5iZy1saWdodC1zdWNjZXNzIHtcclxuICBjb2xvcjogIzI4Qzc2RiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDM0MzQzM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY2FyZC10cmFuc2FjdGlvbiAudHJhbnNhY3Rpb24taXRlbSAuYXZhdGFyIC5hdmF0YXItY29udGVudCB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG59XHJcblxyXG4uYXZhdGFyIC5hdmF0YXItY29udGVudCB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogLjg1N3JlbTtcclxufVxyXG5cclxuLmJnLWxpZ2h0LXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE5OSwgMTExLCAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMyOEM3NkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWxpZ2h0LWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDg0LCA4NSwgLjEyKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjRUE1NDU1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG59XHJcblxyXG4uZXJyc3BhbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMjFweDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICNmZjUyNTI7XHJcbiAgY29sb3I6ICNmZjUyNTI7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xyXG4gIC8vIGZsb2F0OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjJweDtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC8vIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWluLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmJvcmRlci1sYWJsZS1mbHQgLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gIGhlaWdodDogMThweDtcclxuICBwYWRkaW5nOiAwcmVtIDAuN3JlbTtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtYmxvY2sge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5cclxuLm1vZGFsU2hvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpIHVybCgnaHR0cHM6Ly9pLnN0YWNrLmltZ3VyLmNvbS9GaEhSeC5naWYnKSA1MCUgNTAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLm1vZGFsSGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCkgdXJsKCdodHRwczovL2kuc3RhY2suaW1ndXIuY29tL0ZoSFJ4LmdpZicpIDUwJSA1MCUgbm8tcmVwZWF0O1xyXG59XHJcbi5jZWxsQ3NzIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiVoucherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multi-voucher',
                templateUrl: './multi-voucher.component.html',
                styleUrls: ['./multi-voucher.component.scss'],
            }]
    }], function () { return [{ type: _shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__["TransactionCashModeService"] }, { type: _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__["TransactionTransferModeService"] }, { type: _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__["SchemeTypeService"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["OwnbranchMasterService"] }, { type: src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"] }, { type: _multi_voucher_service__WEBPACK_IMPORTED_MODULE_11__["MultiVoucherService"] }, { type: _voucher_entry_voucher_entry_service__WEBPACK_IMPORTED_MODULE_12__["VoucherEntryService"] }, { type: _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_13__["SavingMasterService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["BankMasterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] }, { type: _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_16__["CustomerIdService"] }, { type: src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["ACMasterDropdownService"] }]; }, { reloadTablePassing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], childMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], triggerhide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }], triggrhide1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggrhide1']
        }], focusbutton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['focusbutton']
        }], selectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selectMode']
        }], amt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['amt']
        }], INTAMT: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['INTAMT']
        }], NOTINTAMT: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['NOTINTAMT']
        }], submitbtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['submitbtn']
        }], bankNameField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['bankNameField']
        }], narrationField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['narrationField']
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myDiv']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts ***!
  \**************************************************************************/
/*! exports provided: MultiVoucherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiVoucherService", function() { return MultiVoucherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class MultiVoucherService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
    }
    getSchemeCodeList() {
        return this.http.get(this.url + '/scheme-parameters');
    }
    //get narration data
    getNarrationMaster() {
        return this.http.get(this.url + '/narration');
    }
    //get syspara 
    getSysParaData() {
        return this.http.get(this.url + '/system-master-parameters');
    }
    //insert voucher entyr
    insertVoucher(data) {
        return this.http.post(this.url + '/voucher/insertMultiVoucher', data);
    }
    //Get Head details using head
    getHeadDetails(data) {
        return this.http.post(this.url + '/voucher/intrestHead', data);
    }
    //get voucher pass and unpass data
    getVoucherPassAndUnpassData(data) {
        return this.http.post(this.url + '/voucher/PassUnpassData', data);
    }
    //check customer account close or not
    checkAccountCloseOrNot(data) {
        return this.http.post(this.url + '/voucher/checkAccountCloseDetails', data);
    }
    // For append data
    getFormData(id) {
        console.log(id, 'id');
        // return this.http.post(this.url + '/voucher/editMulti', id);
        return this.http.post(this.url + "/voucher/editMulti/", id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    //approve master
    approve(data) {
        return this.http.post(this.url + '/voucher/multiApprove', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    //unapporveMultiVoucher master
    unapporveMultiVoucher(data) {
        return this.http.post(this.url + '/voucher/unapporveMultiVoucher', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    //reject master
    reject(data) {
        return this.http.post(this.url + '/voucher/multiReject', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Check Zero Balance of account
    checkZeroBalance(data) {
        return this.http.post(this.url + '/voucher/ZeroBalanceAc', data);
    }
    clearWithdrawBal(data) {
        return this.http.post(this.url + '/voucher/clearWithdrawBal', data);
    }
    CheckAccountCloseFlagInDailytran(data) {
        return this.http.post(this.url + '/voucher/CheckAccountCloseFlagInDailytran', data);
    }
    CheckLoginFlagInDpmaster(data) {
        return this.http.post(this.url + '/voucher/CheckLoginFlagInDpmaster', data);
    }
    specialInstruction(data) {
        return this.http.post(this.url + '/voucher/specialInstruction', data);
    }
    CheckPanNoInIDMaster(data) {
        return this.http.post(this.url + '/voucher/CheckPanNoInIDMaster', data);
    }
    ClearVoucherSameBal(data) {
        return this.http.post(this.url + '/voucher/ClearVoucherSameBal', data);
    }
    BalancePresentOrOverdraft(data) {
        return this.http.post(this.url + '/voucher/BalancePresentOrOverdraft', data);
    }
    ClearBalanceDebitAmt(data) {
        return this.http.post(this.url + '/voucher/ClearBalanceDebitAmt', data);
    }
}
MultiVoucherService.ɵfac = function MultiVoucherService_Factory(t) { return new (t || MultiVoucherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MultiVoucherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MultiVoucherService, factory: MultiVoucherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiVoucherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~e740a259.js.map