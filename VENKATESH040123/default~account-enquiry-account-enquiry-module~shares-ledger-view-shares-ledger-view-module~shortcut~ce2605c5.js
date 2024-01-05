(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~account-enquiry-account-enquiry-module~shares-ledger-view-shares-ledger-view-module~shortcut~ce2605c5"],{

/***/ "./src/app/theme/view/shares-ledger-view/shares-ledger-view-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/view/shares-ledger-view/shares-ledger-view-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: SharesLedgerViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesLedgerViewRoutingModule", function() { return SharesLedgerViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shares_ledger_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shares-ledger-view.component */ "./src/app/theme/view/shares-ledger-view/shares-ledger-view.component.ts");





const routes = [
    {
        path: '',
        component: _shares_ledger_view_component__WEBPACK_IMPORTED_MODULE_2__["SharesLedgerViewComponent"],
        data: {
            title: 'Shares Ledger View',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class SharesLedgerViewRoutingModule {
}
SharesLedgerViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharesLedgerViewRoutingModule });
SharesLedgerViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharesLedgerViewRoutingModule_Factory(t) { return new (t || SharesLedgerViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharesLedgerViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesLedgerViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/view/shares-ledger-view/shares-ledger-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/view/shares-ledger-view/shares-ledger-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SharesLedgerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesLedgerViewComponent", function() { return SharesLedgerViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs-compat */ "./node_modules/rxjs-compat/Rx.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _submit_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../submit.directive */ "./src/app/theme/submit.directive.ts");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../button.directive */ "./src/app/theme/button.directive.ts");



















function SharesLedgerViewComponent_ng_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r21.label, "");
} }
function SharesLedgerViewComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesLedgerViewComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharesLedgerViewComponent_div_27_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["BRANCH_CODE"].errors == null ? null : ctx_r3.angForm.controls["BRANCH_CODE"].errors.required);
} }
function SharesLedgerViewComponent_ng_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r23.id, " ", values_r23.label, " ");
} }
function SharesLedgerViewComponent_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesLedgerViewComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharesLedgerViewComponent_div_39_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r6.angForm.controls["AC_TYPE"].errors.required);
} }
function SharesLedgerViewComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dormant Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesLedgerViewComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Account Closed On: ", ctx_r8.acCloseDate, "");
} }
function SharesLedgerViewComponent_ng_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r25.label, " ", values_r25.name, "");
} }
function SharesLedgerViewComponent_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesLedgerViewComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharesLedgerViewComponent_div_54_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["AC_NO"].errors == null ? null : ctx_r11.angForm.controls["AC_NO"].errors.required);
} }
function SharesLedgerViewComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Freez Status:", ctx_r12.freezStataus, "");
} }
function SharesLedgerViewComponent_div_67_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesLedgerViewComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharesLedgerViewComponent_div_67_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.angForm.controls["FROM_DATE"].errors == null ? null : ctx_r14.angForm.controls["FROM_DATE"].errors.required);
} }
function SharesLedgerViewComponent_div_78_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesLedgerViewComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharesLedgerViewComponent_div_78_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.angForm.controls["TO_DATE"].errors == null ? null : ctx_r16.angForm.controls["TO_DATE"].errors.required);
} }
function SharesLedgerViewComponent_div_89_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesLedgerViewComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharesLedgerViewComponent_div_89_div_1_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.angForm.controls["AC_OPDATE"].errors == null ? null : ctx_r17.angForm.controls["AC_OPDATE"].errors.required);
} }
function SharesLedgerViewComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SharesLedgerViewComponent_div_93_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.getTransactionsDeatils(); })("keydown.Tab", function SharesLedgerViewComponent_div_93_Template_button_keydown_Tab_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesLedgerViewComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "color": a0 }; };
function SharesLedgerViewComponent_table_102_tbody_36_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, data_r36.TRAN_STATUS == "0" ? "#226de9" : "#212529"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36.TRAN_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36 == null ? null : data_r36.NARRATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36.TRAN_TYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36.TRAN_DRCR == "D" ? data_r36.TRAN_AMOUNT : "0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36.TRAN_DRCR == "C" ? data_r36.TRAN_AMOUNT : "0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r36.closeBalance, " ", data_r36.TRAN_DR_CR, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36.TRAN_DRCR == "D" ? data_r36.DIVIDEND_AMOUNT : "0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36.TRAN_DRCR == "C" ? data_r36.DIVIDEND_AMOUNT : "0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r36.dividendBalance, " ", data_r36.dividendBalance != 0 ? data_r36.DIV_DR_CR : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r36.BONUS_AMOUNT, " ", data_r36.BONUS_AMOUNT != null ? data_r36.drcr : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r36.REBIT_AMOUNT, " ", data_r36.REBIT_AMOUNT != null ? data_r36.drcr : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36.CERTIFICATE_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36.TOTAL_SHARES == null || data_r36.TOTAL_SHARES == undefined ? data_r36.NO_OF_SHARES : data_r36.TOTAL_SHARES);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r36.SHARES_FROM_NO, " - ", data_r36.SHARES_TO_NO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36.FACE_VALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36.TRAN_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36.OFFICER_CODE);
} }
function SharesLedgerViewComponent_table_102_tbody_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharesLedgerViewComponent_table_102_tbody_36_tr_1_Template, 35, 25, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Grand Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.tableData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.debitTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.creditTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.debitDivTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.creditDivTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.bonusTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.rebitTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.totalShares);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.debitTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.creditTotal);
} }
function SharesLedgerViewComponent_table_102_tbody_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharesLedgerViewComponent_table_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Transaction Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Debit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Credit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Closing Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Debit Dividend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Credit Dividend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dividend Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bonus Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Rebit Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Certificate Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Number Of Shares");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Shares From - To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Face Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Voucher Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Officer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SharesLedgerViewComponent_table_102_tbody_36_Template, 52, 10, "tbody", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SharesLedgerViewComponent_table_102_tbody_37_Template, 4, 0, "tbody", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.tableData == null ? null : ctx_r20.tableData.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.tableData == null ? null : ctx_r20.tableData.length) == 0);
} }
const _c1 = function (a0) { return { "form-submitted": a0 }; };
const _c2 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
class SharesLedgerViewComponent {
    constructor(fb, http, schemeCodeDropdownService, schemeAccountNoService, ownbranchMasterService, config, systemParameter) {
        this.fb = fb;
        this.http = http;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.schemeAccountNoService = schemeAccountNoService;
        this.ownbranchMasterService = ownbranchMasterService;
        this.config = config;
        this.systemParameter = systemParameter;
        this.formSubmitted = false;
        //api 
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_compat__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.ngscheme = null;
        this.accountedit = null;
        // Date variables
        this.todate = null;
        this.fromdate = null;
        this.bsValue = new Date();
        // for grid variable declaration
        this.dormantac = false;
        this.acclosedon = false;
        this.freezeac = false;
        this.tableData = [];
        this.debitTotal = 0;
        this.creditTotal = 0;
        this.debitDivTotal = 0;
        this.creditDivTotal = 0;
        this.normalInt = 0;
        this.recpayInt = 0;
        this.overDueAmt = 0;
        this.penalInt = 0;
        this.recpenalInt = 0;
        this.otherAmount = 0;
        this.addedPenal = 0;
        this.grandTotal = 0;
        this.accountOpenDate = null;
        this.ngBranchCode = null;
        this.showLoader = false;
        this.showView = true;
        this.rebitTotal = 0;
        this.bonusTotal = 0;
        this.totalShares = 0;
        this.systemParameter.getFormData(1).subscribe(data => {
            this.maxDate = moment__WEBPACK_IMPORTED_MODULE_4__(data.CURRENT_DATE, 'DD/MM/YYYY');
            this.maxDate = this.maxDate._d;
            this.minDate = this.maxDate._d;
        });
    }
    ngOnChanges() {
        this.createForm();
        this.showView = false;
        this.ngBranchCode = this.accBranch;
        this.ngscheme = this.accScheme;
        this.getschemename = this.accSchemeName;
        this.getAccountlist();
        this.accountedit = this.accAcNo;
        this.fromdate = this.accFromDate;
        this.todate = this.accToDate;
        this.accountEvent = this.accountEvent;
        this.changeAccountDetails(this.accountEvent);
        this.getLedgerTransactionsDeatils();
        this.angForm.controls['BRANCH_CODE'].disable();
        this.angForm.controls['AC_TYPE'].disable();
        this.angForm.controls['AC_NO'].disable();
        this.angForm.controls['FROM_DATE'].disable();
        this.angForm.controls['TO_DATE'].disable();
    }
    changeAccountDetails(event) {
        this.tableData = [];
        this.transactions = null;
        this.debitTotal = 0;
        this.debitDivTotal = 0;
        this.creditDivTotal = 0;
        this.creditTotal = 0;
        this.rebitTotal = 0;
        this.bonusTotal = 0;
        this.totalShares = 0;
        this.normalInt = 0;
        this.recpayInt = 0;
        this.overDueAmt = 0;
        this.penalInt = 0;
        this.recpenalInt = 0;
        this.otherAmount = 0;
        this.addedPenal = 0;
        this.grandTotal = 0;
        this.acno = event.AC_NO;
        this.bankacno = event.BANKACNO;
        this.dormantac = event.IS_DORMANT;
        this.acclosedon = event.AC_CLOSEDT == null || event.AC_CLOSEDT == '' ? false : true;
        this.acCloseDate = event.AC_CLOSEDT == null || event.AC_CLOSEDT == '' ? '' : event.AC_CLOSEDT;
        this.freezeac = event.AC_FREEZE_STATUS == null || event.AC_FREEZE_STATUS == '' ? false : true;
        this.freezStataus = event.AC_FREEZE_STATUS == null || event.AC_FREEZE_STATUS == '' ? '' : event.AC_FREEZE_STATUS;
        let maturedAmount = Number(event.AUTO_MATURED_PAYABLEAMT) + Number(event.AUTO_MATURED_INTERESTAMT);
        this.angForm.patchValue({
            AC_OPDATE: event.AC_OPDATE,
            AMOUNT: maturedAmount
        });
        this.accountOpenDate = moment__WEBPACK_IMPORTED_MODULE_4__(event.AC_OPDATE, 'DD/MM/YYYY');
        this.accountOpenDate = this.accountOpenDate._d;
    }
    getLedgerTransactionsDeatils() {
        this.showLoader = true;
        this.tableData = [];
        this.debitTotal = 0;
        this.creditTotal = 0;
        this.debitDivTotal = 0;
        this.creditDivTotal = 0;
        this.normalInt = 0;
        this.rebitTotal = 0;
        this.bonusTotal = 0;
        this.totalShares = 0;
        this.recpayInt = 0;
        this.overDueAmt = 0;
        this.penalInt = 0;
        this.recpenalInt = 0;
        this.otherAmount = 0;
        this.addedPenal = 0;
        this.grandTotal = 0;
        this.transactions = null;
        // let obj = [this.getschemename, this.ngscheme, this.bankacno, moment(this.fromdate).format('DD/MM/YYYY'), moment(this.todate).format('DD/MM/YYYY'), this.acno, this.ngBranchCode]
        let toDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.todate, 'DD/MM/YYYY');
        let toDt = moment__WEBPACK_IMPORTED_MODULE_4__(toDate).format('DD/MM/YYYY');
        let fromDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.fromdate, 'DD/MM/YYYY');
        let fromDatet = moment__WEBPACK_IMPORTED_MODULE_4__(fromDate).format('DD/MM/YYYY');
        let obj = [this.getschemename, this.ngscheme, this.bankacno, fromDatet, toDt];
        this.http.post(this.url + '/ledger-view/shareView', obj).subscribe((data) => {
            var _a, _b, _c;
            let closeBal = 0;
            let grandOpening = 0;
            grandOpening = Math.abs((_a = data[0]) === null || _a === void 0 ? void 0 : _a.openingBal);
            closeBal = Math.abs((_b = data[0]) === null || _b === void 0 ? void 0 : _b.openingBal);
            ((_c = data[0]) === null || _c === void 0 ? void 0 : _c.openingBal) < 0 ? this.drcr = 'Cr' : this.drcr = 'Dr';
            this.transactions = this.sort_by_key(data, 'TRAN_DATE');
            // console.log(this.transactions, 'Tran data')
            // if (this.transactions.length != 0) {
            let divBal = 0;
            let obj = {
                TRAN_DATE: moment__WEBPACK_IMPORTED_MODULE_4__(this.fromdate).format('DD/MM/YYYY'),
                NARRATION: 'Opening Balance',
                closeBalance: closeBal,
                dividendBalance: divBal,
                DIV_DR_CR: this.drcr,
                TRAN_DR_CR: this.drcr,
            };
            this.tableData.push(obj);
            this.transactions.forEach((element) => {
                if (element.TRAN_SOURCE_TYPE != 'Opening Balance' && element.TRAN_STATUS != '2') {
                    if (element.TRAN_MODE == '7') {
                        element['DIVIDEND_AMOUNT'] = element.OTHER2_AMOUNT;
                    }
                    //total credit and debit amount
                    if (element.TRAN_STATUS != '0') {
                        if (element.WARRENT_DATE != null && element.WARRENT_DATE != '') {
                            element['TRAN_DRCR'] = 'C';
                            element['TRAN_TYPE'] = 'UP';
                            element['TRAN_DATE'] = element.WARRENT_DATE;
                            element['drcr'] = 'Cr';
                        }
                        else if (element.DIV_PAID_DATE != null && element.DIV_PAID_DATE != '') {
                            element['TRAN_DRCR'] = 'D';
                            element['TRAN_TYPE'] = 'PD';
                            element['TRAN_DATE'] = element.DIV_PAID_DATE;
                            element['drcr'] = 'Dr';
                        }
                        else if (element.TRAN_DATE != null && element.TRAN_DATE != '' && element.REBIT_PAID_DATE == null) {
                            element['TRAN_DATE'] = element.TRAN_DATE;
                            // element['TRAN_DRCR'] = 'C'
                            element['TRAN_TYPE'] = 'UP';
                            element['drcr'] = 'Cr';
                            // element['isRebit'] = true
                        }
                        else if (element.REBIT_PAID_DATE != null && element.REBIT_PAID_DATE != '') {
                            element['TRAN_DATE'] = element.REBIT_PAID_DATE;
                            element['TRAN_DRCR'] = 'D';
                            element['TRAN_TYPE'] = 'PD';
                            element['drcr'] = 'Dr';
                            element['isRebit'] = true;
                        }
                        if (element.isRebit == true) {
                            element['REBIT_AMOUNT'] = element.TRAN_AMOUNT;
                            element['TRAN_AMOUNT'] = '0.00';
                            element.TRAN_DRCR == 'C' ? this.rebitTotal = this.rebitTotal + Number(element.TRAN_AMOUNT) : this.rebitTotal = this.rebitTotal + 0;
                            element.TRAN_DRCR == 'D' ? this.rebitTotal = this.rebitTotal - Number(element.TRAN_AMOUNT) : this.rebitTotal = this.rebitTotal - 0;
                        }
                        if (element.isRebit == undefined) {
                            if (element.TRAN_DRCR == 'C') {
                                element.TRAN_AMOUNT != undefined ? this.creditTotal = this.creditTotal + Number(element.TRAN_AMOUNT) : this.creditTotal = this.creditTotal + 0;
                                element.DIVIDEND_AMOUNT != undefined ? this.creditDivTotal = this.creditDivTotal + Number(element.DIVIDEND_AMOUNT) : this.creditDivTotal = this.creditDivTotal + 0;
                            }
                            if (element.TRAN_DRCR == 'D') {
                                element.TRAN_AMOUNT != undefined ? this.debitTotal = this.debitTotal + Number(element.TRAN_AMOUNT) : this.debitTotal = this.debitTotal + 0;
                                element.DIVIDEND_AMOUNT != undefined ? this.debitDivTotal = this.debitDivTotal + Number(element.DIVIDEND_AMOUNT) : this.debitDivTotal = this.debitDivTotal + 0;
                            }
                            //closing balance calculation
                            if (this.drcr == 'Cr') {
                                element.TRAN_DRCR == 'C' ? element.TRAN_AMOUNT != undefined ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal + 0 : element.TRAN_AMOUNT != undefined ? closeBal = closeBal - Number(element.TRAN_AMOUNT) : closeBal = closeBal - 0;
                                closeBal > 0 ? element['TRAN_DR_CR'] = 'Cr' : element['TRAN_DR_CR'] = 'Dr';
                                element['closeBalance'] = Math.abs(closeBal);
                                element.TRAN_DRCR == 'C' ? element.DIVIDEND_AMOUNT != undefined ? divBal = divBal + Number(element.DIVIDEND_AMOUNT) : divBal = divBal + 0 : element.DIVIDEND_AMOUNT != undefined ? divBal = divBal - Number(element.DIVIDEND_AMOUNT) : divBal = divBal - 0;
                                divBal > 0 ? element['DIV_DR_CR'] = 'Cr' : element['DIV_DR_CR'] = 'Dr';
                                element['dividendBalance'] = Math.abs(divBal);
                            }
                            else if (this.drcr == 'Dr') {
                                element.TRAN_DRCR == 'D' ? element.TRAN_AMOUNT != undefined ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal + 0 : element.TRAN_AMOUNT != undefined ? closeBal = closeBal - Number(element.TRAN_AMOUNT) : closeBal = closeBal - 0;
                                closeBal > 0 ? element['TRAN_DR_CR'] = 'Dr' : element['TRAN_DR_CR'] = 'Cr';
                                element['closeBalance'] = Math.abs(closeBal);
                                element.TRAN_DRCR == 'D' ? element.DIVIDEND_AMOUNT != undefined ? divBal = divBal + Number(element.DIVIDEND_AMOUNT) : divBal = divBal + 0 : element.DIVIDEND_AMOUNT != undefined ? divBal = divBal - Number(element.DIVIDEND_AMOUNT) : divBal = divBal - 0;
                                divBal > 0 ? element['DIV_DR_CR'] = 'Dr' : element['DIV_DR_CR'] = 'Cr';
                                element['dividendBalance'] = Math.abs(divBal);
                            }
                            if (element.TOTAL_SHARES != null || element.TOTAL_SHARES != '' || element.NO_OF_SHARES != null || element.NO_OF_SHARES != '') {
                                element.TOTAL_SHARES != undefined ? this.totalShares = this.totalShares + Number(element.TOTAL_SHARES) : this.totalShares = this.totalShares + 0;
                                element.NO_OF_SHARES != undefined ? this.totalShares = this.totalShares + Number(element.NO_OF_SHARES) : this.totalShares = this.totalShares + 0;
                            }
                        }
                        else {
                            element['closeBalance'] = closeBal;
                            element['dividendBalance'] = divBal;
                        }
                        this.tableData.push(element);
                    }
                }
            });
            // console.log(this.tableData, 'table')
            //grand total amount
            this.grandTotal = this.creditTotal + grandOpening;
            // }
            // else {
            //   this.tableData = []
            //   this.debitTotal = 0
            //   this.creditTotal = 0
            //   this.debitDivTotal = 0
            //   this.creditDivTotal = 0
            //   this.normalInt = 0
            //   this.rebitTotal = 0
            //   this.bonusTotal = 0
            //   this.totalShares = 0
            //   this.recpayInt = 0
            //   this.overDueAmt = 0
            //   this.penalInt = 0
            //   this.recpenalInt = 0
            //   this.otherAmount = 0
            //   this.addedPenal = 0
            //   this.grandTotal = 0
            //   Swal.fire('Info', 'No Records Found', 'info')
            // }
        });
    }
    ngOnInit() {
        this.createForm();
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            var filtered = data.filter(function (scheme) {
                return (scheme.name == 'SH');
            });
            this.allScheme = filtered;
        });
        //branch List
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.branch_code = data;
        });
        this.systemParameter.getFormData(1).subscribe(data => {
            let year = moment__WEBPACK_IMPORTED_MODULE_4__(data.CURRENT_DATE, "DD/MM/YYYY").year();
            // this.fromdate = `01/04/${year - 1}`
            this.todate = data.CURRENT_DATE;
            this.fromdate = moment__WEBPACK_IMPORTED_MODULE_4__(`01/04/${year - 1}`, 'DD/MM/YYYY');
            this.fromdate = this.fromdate._d;
        });
    }
    createForm() {
        this.angForm = this.fb.group({
            AC_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            AC_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            FROM_DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            TO_DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            AC_OPDATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            BRANCH_CODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.ngBranchCode = result.branch.id;
            this.angForm.controls['BRANCH_CODE'].enable();
        }
        else {
            this.angForm.controls['BRANCH_CODE'].disable();
            this.ngBranchCode = result.branch.id;
        }
    }
    schemechange(event) {
        this.getschemename = event.name;
        this.ngscheme = event.value;
        this.getAccountlist();
    }
    getdata() {
        this.ngscheme = null;
        this.accountedit = null;
    }
    // Fetching account from seleted scheme
    getAccountlist() {
        this.showLoader = false;
        this.accountedit = null;
        this.Cust_ID = null;
        this.tableData = [];
        this.transactions = null;
        this.debitTotal = 0;
        this.creditTotal = 0;
        this.debitDivTotal = 0;
        this.rebitTotal = 0;
        this.bonusTotal = 0;
        this.totalShares = 0;
        this.creditDivTotal = 0;
        this.normalInt = 0;
        this.recpayInt = 0;
        this.overDueAmt = 0;
        this.penalInt = 0;
        this.recpenalInt = 0;
        this.otherAmount = 0;
        this.addedPenal = 0;
        this.grandTotal = 0;
        let obj = [this.ngscheme, this.ngBranchCode];
        switch (this.getschemename) {
            case 'SH':
                this.schemeAccountNoService.getShareMasterAcListForBalUpdation(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
                    this.schemeACNo = data;
                });
                break;
        }
    }
    //get account details
    getAccountDetails(event) {
        this.showLoader = false;
        this.tableData = [];
        this.transactions = null;
        this.debitTotal = 0;
        this.debitDivTotal = 0;
        this.creditDivTotal = 0;
        this.creditTotal = 0;
        this.rebitTotal = 0;
        this.bonusTotal = 0;
        this.totalShares = 0;
        this.normalInt = 0;
        this.recpayInt = 0;
        this.overDueAmt = 0;
        this.penalInt = 0;
        this.recpenalInt = 0;
        this.otherAmount = 0;
        this.addedPenal = 0;
        this.grandTotal = 0;
        this.acno = event.label;
        this.bankacno = event.bankacno;
        this.dormantac = event.dormant;
        this.acclosedon = event.acClose == null || event.acClose == '' ? false : true;
        this.acCloseDate = event.acClose == null || event.acClose == '' ? '' : event.acClose;
        this.freezeac = event.freez == null || event.freez == '' ? false : true;
        this.freezStataus = event.freez == null || event.freez == '' ? '' : event.freez;
        let maturedAmount = Number(event.autoMaturedPayableAmt) + Number(event.autoMaturedIntrestAmt);
        this.angForm.patchValue({
            AC_OPDATE: event.opendate,
            AMOUNT: maturedAmount
        });
        this.accountOpenDate = moment__WEBPACK_IMPORTED_MODULE_4__(event.opendate, 'DD/MM/YYYY');
        this.accountOpenDate = this.accountOpenDate._d;
    }
    //transactions list in table
    getTransactionsDeatils() {
        this.showLoader = true;
        this.tableData = [];
        this.debitTotal = 0;
        this.creditTotal = 0;
        this.debitDivTotal = 0;
        this.creditDivTotal = 0;
        this.normalInt = 0;
        this.rebitTotal = 0;
        this.bonusTotal = 0;
        this.totalShares = 0;
        this.recpayInt = 0;
        this.overDueAmt = 0;
        this.penalInt = 0;
        this.recpenalInt = 0;
        this.otherAmount = 0;
        this.addedPenal = 0;
        this.grandTotal = 0;
        this.transactions = null;
        // let obj = [this.getschemename, this.ngscheme, this.bankacno, moment(this.angForm.controls['FROM_DATE'].value).format('DD/MM/YYYY'), moment(this.angForm.controls['TO_DATE'].value).format('DD/MM/YYYY'), this.acno, this.ngBranchCode]
        let toDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.angForm.controls['TO_DATE'].value, 'DD/MM/YYYY');
        let toDt = moment__WEBPACK_IMPORTED_MODULE_4__(toDate).format('DD/MM/YYYY');
        let fromDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.angForm.controls['FROM_DATE'].value, 'DD/MM/YYYY');
        let fromDatet = moment__WEBPACK_IMPORTED_MODULE_4__(fromDate).format('DD/MM/YYYY');
        let obj = [this.getschemename, this.ngscheme, this.bankacno, fromDatet, toDt];
        this.http.post(this.url + '/ledger-view/shareView', obj).subscribe((data) => {
            var _a, _b, _c;
            let closeBal = 0;
            let grandOpening = 0;
            grandOpening = Math.abs((_a = data[0]) === null || _a === void 0 ? void 0 : _a.openingBal);
            closeBal = Math.abs((_b = data[0]) === null || _b === void 0 ? void 0 : _b.openingBal);
            ((_c = data[0]) === null || _c === void 0 ? void 0 : _c.openingBal) < 0 ? this.drcr = 'Cr' : this.drcr = 'Dr';
            this.transactions = this.sort_by_key(data, 'TRAN_DATE');
            // console.log(this.transactions, 'Tran data')
            // if (this.transactions.length != 0) {
            let divBal = 0;
            let obj = {
                TRAN_DATE: moment__WEBPACK_IMPORTED_MODULE_4__(this.angForm.controls['FROM_DATE'].value).format('DD/MM/YYYY'),
                NARRATION: 'Opening Balance',
                closeBalance: closeBal,
                dividendBalance: divBal,
                DIV_DR_CR: this.drcr,
                TRAN_DR_CR: this.drcr,
            };
            this.tableData.push(obj);
            if (this.transactions.length >= 1 && this.transactions[0].TRAN_STATUS != undefined) {
                this.transactions.forEach((element) => {
                    if (element.TRAN_SOURCE_TYPE != 'Opening Balance' && element.TRAN_STATUS != '2') {
                        if (element.TRAN_MODE == '7') {
                            element['DIVIDEND_AMOUNT'] = element.OTHER2_AMOUNT;
                        }
                        //total credit and debit amount
                        if (element.TRAN_STATUS != '0') {
                            if (element.WARRENT_DATE != null && element.WARRENT_DATE != '') {
                                element['TRAN_DRCR'] = 'C';
                                element['TRAN_TYPE'] = 'UP';
                                element['TRAN_DATE'] = element.WARRENT_DATE;
                                element['drcr'] = 'Cr';
                            }
                            else if (element.DIV_PAID_DATE != null && element.DIV_PAID_DATE != '') {
                                element['TRAN_DRCR'] = 'D';
                                element['TRAN_TYPE'] = 'PD';
                                element['TRAN_DATE'] = element.DIV_PAID_DATE;
                                element['drcr'] = 'Dr';
                            }
                            else if (element.TRAN_DATE != null && element.TRAN_DATE != '' && element.REBIT_PAID_DATE == null) {
                                element['TRAN_DATE'] = element.TRAN_DATE;
                                // element['TRAN_DRCR'] = 'C'
                                element['TRAN_TYPE'] = 'UP';
                                element['drcr'] = 'Cr';
                                // element['isRebit'] = true
                            }
                            else if (element.REBIT_PAID_DATE != null && element.REBIT_PAID_DATE != '') {
                                element['TRAN_DATE'] = element.REBIT_PAID_DATE;
                                element['TRAN_DRCR'] = 'D';
                                element['TRAN_TYPE'] = 'PD';
                                element['drcr'] = 'Dr';
                                element['isRebit'] = true;
                            }
                            if (element.isRebit == true) {
                                element['REBIT_AMOUNT'] = element.TRAN_AMOUNT;
                                element['TRAN_AMOUNT'] = '0.00';
                                element.TRAN_DRCR == 'C' ? this.rebitTotal = this.rebitTotal + Number(element.TRAN_AMOUNT) : this.rebitTotal = this.rebitTotal + 0;
                                element.TRAN_DRCR == 'D' ? this.rebitTotal = this.rebitTotal - Number(element.TRAN_AMOUNT) : this.rebitTotal = this.rebitTotal - 0;
                            }
                            if (element.isRebit == undefined) {
                                if (element.TRAN_DRCR == 'C') {
                                    element.TRAN_AMOUNT != undefined ? this.creditTotal = this.creditTotal + Number(element.TRAN_AMOUNT) : this.creditTotal = this.creditTotal + 0;
                                    element.DIVIDEND_AMOUNT != undefined ? this.creditDivTotal = this.creditDivTotal + Number(element.DIVIDEND_AMOUNT) : this.creditDivTotal = this.creditDivTotal + 0;
                                }
                                if (element.TRAN_DRCR == 'D') {
                                    element.TRAN_AMOUNT != undefined ? this.debitTotal = this.debitTotal + Number(element.TRAN_AMOUNT) : this.debitTotal = this.debitTotal + 0;
                                    element.DIVIDEND_AMOUNT != undefined ? this.debitDivTotal = this.debitDivTotal + Number(element.DIVIDEND_AMOUNT) : this.debitDivTotal = this.debitDivTotal + 0;
                                }
                                //closing balance calculation
                                if (this.drcr == 'Cr') {
                                    element.TRAN_DRCR == 'C' ? element.TRAN_AMOUNT != undefined ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal + 0 : element.TRAN_AMOUNT != undefined ? closeBal = closeBal - Number(element.TRAN_AMOUNT) : closeBal = closeBal - 0;
                                    closeBal > 0 ? element['TRAN_DR_CR'] = 'Cr' : element['TRAN_DR_CR'] = 'Dr';
                                    element['closeBalance'] = Math.abs(closeBal);
                                    element.TRAN_DRCR == 'C' ? element.DIVIDEND_AMOUNT != undefined ? divBal = divBal + Number(element.DIVIDEND_AMOUNT) : divBal = divBal + 0 : element.DIVIDEND_AMOUNT != undefined ? divBal = divBal - Number(element.DIVIDEND_AMOUNT) : divBal = divBal - 0;
                                    divBal > 0 ? element['DIV_DR_CR'] = 'Cr' : element['DIV_DR_CR'] = 'Dr';
                                    element['dividendBalance'] = Math.abs(divBal);
                                }
                                else if (this.drcr == 'Dr') {
                                    element.TRAN_DRCR == 'D' ? element.TRAN_AMOUNT != undefined ? closeBal = closeBal + Number(element.TRAN_AMOUNT) : closeBal = closeBal + 0 : element.TRAN_AMOUNT != undefined ? closeBal = closeBal - Number(element.TRAN_AMOUNT) : closeBal = closeBal - 0;
                                    closeBal > 0 ? element['TRAN_DR_CR'] = 'Dr' : element['TRAN_DR_CR'] = 'Cr';
                                    element['closeBalance'] = Math.abs(closeBal);
                                    element.TRAN_DRCR == 'D' ? element.DIVIDEND_AMOUNT != undefined ? divBal = divBal + Number(element.DIVIDEND_AMOUNT) : divBal = divBal + 0 : element.DIVIDEND_AMOUNT != undefined ? divBal = divBal - Number(element.DIVIDEND_AMOUNT) : divBal = divBal - 0;
                                    divBal > 0 ? element['DIV_DR_CR'] = 'Dr' : element['DIV_DR_CR'] = 'Cr';
                                    element['dividendBalance'] = Math.abs(divBal);
                                }
                                if (element.TOTAL_SHARES != null || element.TOTAL_SHARES != '' || element.NO_OF_SHARES != null || element.NO_OF_SHARES != '') {
                                    element.TOTAL_SHARES != undefined ? this.totalShares = this.totalShares + Number(element.TOTAL_SHARES) : this.totalShares = this.totalShares + 0;
                                    element.NO_OF_SHARES != undefined ? this.totalShares = this.totalShares + Number(element.NO_OF_SHARES) : this.totalShares = this.totalShares + 0;
                                }
                            }
                            else {
                                element['closeBalance'] = closeBal;
                                element['dividendBalance'] = divBal;
                            }
                            this.tableData.push(element);
                        }
                    }
                });
            }
            // console.log(this.tableData, 'table')
            //grand total amount
            this.grandTotal = this.creditTotal + grandOpening;
            // }
            // else {
            //   this.tableData = []
            //   this.debitTotal = 0
            //   this.creditTotal = 0
            //   this.debitDivTotal = 0
            //   this.creditDivTotal = 0
            //   this.normalInt = 0
            //   this.rebitTotal = 0
            //   this.bonusTotal = 0
            //   this.totalShares = 0
            //   this.recpayInt = 0
            //   this.overDueAmt = 0
            //   this.penalInt = 0
            //   this.recpenalInt = 0
            //   this.otherAmount = 0
            //   this.addedPenal = 0
            //   this.grandTotal = 0
            //   Swal.fire('Info', 'No Records Found', 'info')
            // }
        });
    }
    sort_by_key(array, key) {
        return array.sort(function (a, b) {
            let p = moment__WEBPACK_IMPORTED_MODULE_4__(a[key], 'DD/MM/YYYY');
            let q = moment__WEBPACK_IMPORTED_MODULE_4__(b[key], 'DD/MM/YYYY');
            return (p < q) ? -1 : ((p > q) ? 1 : 0);
        });
    }
    //filter object
    filterObject(ele) {
        this.Cust_ID = [];
        if (ele.key == 'Backspace' && ele.target.value == '') {
            this.Cust_ID = [];
        }
        else {
            for (let element of this.schemeACNo) {
                if (JSON.stringify(element.label).includes(ele.target.value.toUpperCase())) {
                    this.Cust_ID.push(element);
                }
            }
        }
    }
    onFocus(ele) {
        ele.open();
    }
}
SharesLedgerViewComponent.ɵfac = function SharesLedgerViewComponent_Factory(t) { return new (t || SharesLedgerViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_7__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_8__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"])); };
SharesLedgerViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharesLedgerViewComponent, selectors: [["app-shares-ledger-view"]], inputs: { accBranch: "accBranch", accScheme: "accScheme", accAcNo: "accAcNo", accFromDate: "accFromDate", accToDate: "accToDate", accSchemeName: "accSchemeName", accountEvent: "accountEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 103, vars: 54, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "appSubmit", "", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "card-block"], [1, "solid"], [1, "col-sm-12", "col-md-2"], ["for", "BRANCH_CODE"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["appTheme", "", "id", "BRANCH_CODE", "bindValue", "value", "formControlName", "BRANCH_CODE", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", "autofocus", "", 3, "ngModel", "selectOnTab", "virtualScroll", "ngClass", "ngModelChange", "change", "focus"], ["BRANCH_CODE", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["for", "AC_TYPE"], [1, "col-sm-12", "col-md-3"], ["appTheme", "", "id", "AC_TYPE", "bindValue", "value", "formControlName", "AC_TYPE", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme", 3, "ngModel", "virtualScroll", "selectOnTab", "ngClass", "ngModelChange", "change", "focus"], ["AC_TYPE", ""], ["class", "col-sm", 4, "ngIf"], ["for", "AC_NO"], [1, "col-sm-12", "col-md-4"], ["appTheme", "", "id", "AC_NO", "bindValue", "value", "formControlName", "AC_NO", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Account Number", 3, "ngModel", "selectOnTab", "virtualScroll", "ngModelChange", "focus", "change"], ["AC_NO", ""], ["for", "FROM_DATE"], [1, "form-group", "input-group"], ["appTheme", "", "type", "text", "placeholder", "dd/mm/yyyy", "name", "FROM_DATE", "id", "FROM_DATE", "appButton", "", "minlength", "10", "maxlength", "10", "formControlName", "FROM_DATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsValue", "minDate", "maxDate", "bsConfig", "ngClass", "ngModelChange", "keydown.Tab", "keypress"], ["FROM_DATE", "bsDatepicker"], ["for", "TO_DATE"], ["appTheme", "", "type", "text", "placeholder", "dd/mm/yyyy", "name", "TO_DATE", "id", "TO_DATE", "appButton", "", "minlength", "8", "maxlength", "10", "formControlName", "TO_DATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "minDate", "maxDate", "ngClass", "ngModelChange", "keydown.Tab", "keypress"], ["TO_DATE", "bsDatepicker"], ["for", "AC_OPDATE"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_OPDATE", "id", "AC_OPDATE", "formControlName", "AC_OPDATE", "appButton", "", "minlength", "10", "maxlength", "10", "bsDatepicker", "", "disabled", "", 1, "form-control", 3, "bsConfig", "maxDate", "ngClass", "keypress"], [1, "col-sm-3", 2, "font-size", "13px"], [1, "btn", "btn-primary"], ["class", "row", 4, "ngIf"], [1, "col-sm-12"], [1, "table-responsive", "fixTableHead"], ["class", "table table-striped table-bordered table-hover compact", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "col-sm"], [2, "color", "#1e5bc5"], [2, "color", "red", "font-size", "15px"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click", "keydown.Tab"], [1, "modalShow"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], [1, "td_center"], [1, "td_right"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [2, "font-weight", "600px"], [2, "color", "green"], [2, "font-size", "13px"], [1, "td_right", 2, "font-size", "13px"], [3, "ngStyle"], ["colspan", "13", 1, "no-data-available", 2, "text-align", "center"]], template: function SharesLedgerViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Shares Ledger View");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SharesLedgerViewComponent_Template_ng_select_ngModelChange_24_listener($event) { return ctx.ngBranchCode = $event; })("change", function SharesLedgerViewComponent_Template_ng_select_change_24_listener() { return ctx.getdata(); })("focus", function SharesLedgerViewComponent_Template_ng_select_focus_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return ctx.onFocus(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SharesLedgerViewComponent_ng_option_26_Template, 2, 2, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SharesLedgerViewComponent_div_27_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ng-select", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SharesLedgerViewComponent_Template_ng_select_ngModelChange_36_listener($event) { return ctx.ngscheme = $event; })("change", function SharesLedgerViewComponent_Template_ng_select_change_36_listener($event) { return ctx.schemechange($event); })("focus", function SharesLedgerViewComponent_Template_ng_select_focus_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); return ctx.onFocus(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SharesLedgerViewComponent_ng_option_38_Template, 2, 3, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SharesLedgerViewComponent_div_39_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SharesLedgerViewComponent_div_40_Template, 4, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SharesLedgerViewComponent_div_41_Template, 4, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ng-select", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SharesLedgerViewComponent_Template_ng_select_ngModelChange_51_listener($event) { return ctx.accountedit = $event; })("focus", function SharesLedgerViewComponent_Template_ng_select_focus_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return ctx.onFocus(_r9); })("change", function SharesLedgerViewComponent_Template_ng_select_change_51_listener($event) { return ctx.getAccountDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, SharesLedgerViewComponent_ng_option_53_Template, 2, 3, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, SharesLedgerViewComponent_div_54_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, SharesLedgerViewComponent_div_55_Template, 4, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SharesLedgerViewComponent_Template_input_ngModelChange_65_listener($event) { return ctx.fromdate = $event; })("keydown.Tab", function SharesLedgerViewComponent_Template_input_keydown_Tab_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66); return _r13.hide(); })("keypress", function SharesLedgerViewComponent_Template_input_keypress_65_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, SharesLedgerViewComponent_div_67_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SharesLedgerViewComponent_Template_input_ngModelChange_76_listener($event) { return ctx.todate = $event; })("keydown.Tab", function SharesLedgerViewComponent_Template_input_keydown_Tab_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77); return _r15.hide(); })("keypress", function SharesLedgerViewComponent_Template_input_keypress_76_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, SharesLedgerViewComponent_div_78_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Account Opening Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function SharesLedgerViewComponent_Template_input_keypress_88_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, SharesLedgerViewComponent_div_89_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u00A0 Unpassed Accounts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, SharesLedgerViewComponent_div_93_Template, 3, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, SharesLedgerViewComponent_div_94_Template, 3, 0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, SharesLedgerViewComponent_table_102_Template, 38, 2, "table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngBranchCode)("selectOnTab", true)("virtualScroll", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["BRANCH_CODE"].invalid && (ctx.angForm.controls["BRANCH_CODE"].dirty || ctx.angForm.controls["BRANCH_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngscheme)("virtualScroll", true)("selectOnTab", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TYPE"].invalid && (ctx.angForm.controls["AC_TYPE"].dirty || ctx.angForm.controls["AC_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dormantac);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.acclosedon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accountedit)("selectOnTab", true)("virtualScroll", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schemeACNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_NO"].invalid && (ctx.angForm.controls["AC_NO"].dirty || ctx.angForm.controls["AC_NO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.freezeac);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fromdate)("bsValue", ctx.bsValue)("minDate", ctx.accountOpenDate)("maxDate", ctx.maxDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["FROM_DATE"].invalid && (ctx.angForm.controls["FROM_DATE"].dirty || ctx.angForm.controls["FROM_DATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.todate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c2))("minDate", ctx.fromdate)("maxDate", ctx.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](49, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["TO_DATE"].invalid && (ctx.angForm.controls["TO_DATE"].dirty || ctx.angForm.controls["TO_DATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](51, _c2))("maxDate", ctx.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_OPDATE"].invalid && (ctx.angForm.controls["AC_OPDATE"].dirty || ctx.angForm.controls["AC_OPDATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableData.length == 0 && ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.tableData == null ? null : ctx.tableData.length) != 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _submit_directive__WEBPACK_IMPORTED_MODULE_12__["SubmitDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], _theme_directive__WEBPACK_IMPORTED_MODULE_13__["ThemeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerInputDirective"], _button_directive__WEBPACK_IMPORTED_MODULE_16__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: ridge;\n  border-color: #817d7de3;\n  padding: 0.4%;\n  margin-bottom: 3px;\n  padding-right: 12px;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-body[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  padding-bottom: 4% !important;\n  transition: all ease-in 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #ff5252;\n  color: #ff5252;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 11px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 14px;\n  border-radius: 5px;\n  padding-bottom: 22px;\n  padding-top: 4px;\n  height: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 13px;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px !important;\n  max-height: 18px !important;\n  align-items: center;\n  font-size: 11px !important;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 18px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 5px;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 5px;\n  padding-left: 15px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #fafad7 !important;\n  transform: translate(0%, -5%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdmlldy9zaGFyZXMtbGVkZ2VyLXZpZXcvc2hhcmVzLWxlZGdlci12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBRUksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQUpKOztBQU9BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFFSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFMSjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQU5KOztBQVNBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU5KOztBQVNBO0VBQ0ksOEJBQUE7RUFDQSxpQkFBQTtBQU5KOztBQVNBO0VBQ0ksb0NBQUE7RUFDQSw2QkFBQTtBQU5KIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdmlldy9zaGFyZXMtbGVkZ2VyLXZpZXcvc2hhcmVzLWxlZGdlci12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmRpdi5zb2xpZCB7XHJcbiAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXN0eWxlOiByaWRnZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzgxN2Q3ZGUzO1xyXG4gICAgcGFkZGluZzogMC40JTtcclxuICAgIC8vIHBhZGRpbmc6IDAuNyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG5cclxuLmNhcmQgLmNhcmQtYmxvY2sge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbi5tYWluLWJvZHkgLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNCUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuM3M7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmNTI1MjtcclxuICAgIGNvbG9yOiAjZmY1MjUyO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAgIC8vIGZsb2F0OiBsZWZ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWluLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmJvcmRlci1sYWJsZS1mbHQgLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgcGFkZGluZzogMHJlbSAwLjdyZW07XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWJsb2NrIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jb2wtMSxcclxuLmNvbC0yLFxyXG4uY29sLTMsXHJcbi5jb2wtNCxcclxuLmNvbC01LFxyXG4uY29sLTYsXHJcbi5jb2wtNyxcclxuLmNvbC04LFxyXG4uY29sLTksXHJcbi5jb2wtMTAsXHJcbi5jb2wtMTEsXHJcbi5jb2wtMTIsXHJcbi5jb2wsXHJcbi5jb2wtYXV0byxcclxuLmNvbC1zbS0xLFxyXG4uY29sLXNtLTIsXHJcbi5jb2wtc20tMyxcclxuLmNvbC1zbS00LFxyXG4uY29sLXNtLTUsXHJcbi5jb2wtc20tNixcclxuLmNvbC1zbS03LFxyXG4uY29sLXNtLTgsXHJcbi5jb2wtc20tOSxcclxuLmNvbC1zbS0xMCxcclxuLmNvbC1zbS0xMSxcclxuLmNvbC1zbS0xMixcclxuLmNvbC1zbSxcclxuLmNvbC1zbS1hdXRvLFxyXG4uY29sLW1kLTEsXHJcbi5jb2wtbWQtMixcclxuLmNvbC1tZC0zLFxyXG4uY29sLW1kLTQsXHJcbi5jb2wtbWQtNSxcclxuLmNvbC1tZC02LFxyXG4uY29sLW1kLTcsXHJcbi5jb2wtbWQtOCxcclxuLmNvbC1tZC05LFxyXG4uY29sLW1kLTEwLFxyXG4uY29sLW1kLTExLFxyXG4uY29sLW1kLTEyLFxyXG4uY29sLW1kLFxyXG4uY29sLW1kLWF1dG8sXHJcbi5jb2wtbGctMSxcclxuLmNvbC1sZy0yLFxyXG4uY29sLWxnLTMsXHJcbi5jb2wtbGctNCxcclxuLmNvbC1sZy01LFxyXG4uY29sLWxnLTYsXHJcbi5jb2wtbGctNyxcclxuLmNvbC1sZy04LFxyXG4uY29sLWxnLTksXHJcbi5jb2wtbGctMTAsXHJcbi5jb2wtbGctMTEsXHJcbi5jb2wtbGctMTIsXHJcbi5jb2wtbGcsXHJcbi5jb2wtbGctYXV0byxcclxuLmNvbC14bC0xLFxyXG4uY29sLXhsLTIsXHJcbi5jb2wteGwtMyxcclxuLmNvbC14bC00LFxyXG4uY29sLXhsLTUsXHJcbi5jb2wteGwtNixcclxuLmNvbC14bC03LFxyXG4uY29sLXhsLTgsXHJcbi5jb2wteGwtOSxcclxuLmNvbC14bC0xMCxcclxuLmNvbC14bC0xMSxcclxuLmNvbC14bC0xMixcclxuLmNvbC14bCxcclxuLmNvbC14bC1hdXRvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbn1cclxuXHJcbnRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZDcgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNSUpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesLedgerViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shares-ledger-view',
                templateUrl: './shares-ledger-view.component.html',
                styleUrls: ['./shares-ledger-view.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_7__["SchemeCodeDropdownService"] }, { type: src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_8__["SchemeAccountNoService"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["OwnbranchMasterService"] }, { type: _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectConfig"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"] }]; }, { accBranch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], accScheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], accAcNo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], accFromDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], accToDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], accSchemeName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], accountEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/view/shares-ledger-view/shares-ledger-view.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/view/shares-ledger-view/shares-ledger-view.module.ts ***!
  \****************************************************************************/
/*! exports provided: SharesLedgerViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesLedgerViewModule", function() { return SharesLedgerViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _shares_ledger_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shares-ledger-view.component */ "./src/app/theme/view/shares-ledger-view/shares-ledger-view.component.ts");
/* harmony import */ var _shares_ledger_view_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shares-ledger-view-routing.module */ "./src/app/theme/view/shares-ledger-view/shares-ledger-view-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../theme.module */ "./src/app/theme/theme.module.ts");


















class SharesLedgerViewModule {
}
SharesLedgerViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharesLedgerViewModule });
SharesLedgerViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharesLedgerViewModule_Factory(t) { return new (t || SharesLedgerViewModule)(); }, providers: [src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__["SchemeAccountNoService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OwnbranchMasterService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_14__["SystemMasterParametersService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shares_ledger_view_routing_module__WEBPACK_IMPORTED_MODULE_4__["SharesLedgerViewRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["DatepickerModule"].forRoot(),
            _theme_module__WEBPACK_IMPORTED_MODULE_15__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharesLedgerViewModule, { declarations: [_shares_ledger_view_component__WEBPACK_IMPORTED_MODULE_3__["SharesLedgerViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shares_ledger_view_routing_module__WEBPACK_IMPORTED_MODULE_4__["SharesLedgerViewRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["DatepickerModule"], _theme_module__WEBPACK_IMPORTED_MODULE_15__["ThemeModule"]], exports: [_shares_ledger_view_component__WEBPACK_IMPORTED_MODULE_3__["SharesLedgerViewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesLedgerViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shares_ledger_view_routing_module__WEBPACK_IMPORTED_MODULE_4__["SharesLedgerViewRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["DatepickerModule"].forRoot(),
                    _theme_module__WEBPACK_IMPORTED_MODULE_15__["ThemeModule"]
                ],
                declarations: [_shares_ledger_view_component__WEBPACK_IMPORTED_MODULE_3__["SharesLedgerViewComponent"]],
                exports: [_shares_ledger_view_component__WEBPACK_IMPORTED_MODULE_3__["SharesLedgerViewComponent"]],
                providers: [src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__["SchemeAccountNoService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OwnbranchMasterService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_14__["SystemMasterParametersService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~account-enquiry-account-enquiry-module~shares-ledger-view-shares-ledger-view-module~shortcut~ce2605c5.js.map