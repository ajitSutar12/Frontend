(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~db13f0ff"],{

/***/ "./src/app/shared/elements/acountno.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/elements/acountno.service.ts ***!
  \*****************************************************/
/*! exports provided: AcountnoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcountnoService", function() { return AcountnoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class AcountnoService {
    getCharacters() {
        return this.cloneOptions(AcountnoService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(AcountnoService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(AcountnoService.PLAYER_ONE);
        characters[1].disabled = true;
        characters[4].disabled = true;
        return characters;
    }
    loadOptions(options) {
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]((obs) => {
            setTimeout(() => {
                obs.next(this.cloneOptions(options));
                obs.complete();
            }, 5000);
        });
    }
    cloneOptions(options) {
        return options.map(option => ({ value: option.value, label: option.label }));
    }
}
AcountnoService.PLAYER_ONE = [
    { value: '0', label: '12314142' },
    { value: '1', label: '2142434' },
    { value: '2', label: '2232323' },
    { value: '3', label: '454545' }
];
AcountnoService.ɵfac = function AcountnoService_Factory(t) { return new (t || AcountnoService)(); };
AcountnoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AcountnoService, factory: AcountnoService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcountnoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing-routing.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing-routing.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: TermDepositAccountClosingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositAccountClosingRoutingModule", function() { return TermDepositAccountClosingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _term_deposit_account_closing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./term-deposit-account-closing.component */ "./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.component.ts");





const routes = [
    {
        path: '',
        component: _term_deposit_account_closing_component__WEBPACK_IMPORTED_MODULE_2__["TermDepositAccountClosingComponent"],
        data: {
            title: 'Deposite Ac Closing',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class TermDepositAccountClosingRoutingModule {
}
TermDepositAccountClosingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermDepositAccountClosingRoutingModule });
TermDepositAccountClosingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermDepositAccountClosingRoutingModule_Factory(t) { return new (t || TermDepositAccountClosingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermDepositAccountClosingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositAccountClosingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: TermDepositAccountClosingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositAccountClosingComponent", function() { return TermDepositAccountClosingComponent; });
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
/* harmony import */ var _multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../multi-voucher/multi-voucher.service */ "./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts");
/* harmony import */ var _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../master/customer/saving-master/saving-master.service */ "./src/app/theme/master/customer/saving-master/saving-master.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _term_deposit_account_closing_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./term-deposit-account-closing.service */ "./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.service.ts");
/* harmony import */ var _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../master/customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../button.directive */ "./src/app/theme/button.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





























const _c0 = ["triggerhide"];
const _c1 = ["triggerNarrationhide"];
const _c2 = ["narrationField"];
function TermDepositAccountClosingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.previewImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TermDepositAccountClosingComponent_ng_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r33.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r33.label, "");
} }
function TermDepositAccountClosingComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_29_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["branch_code"].errors == null ? null : ctx_r3.angForm.controls["branch_code"].errors.required);
} }
function TermDepositAccountClosingComponent_ng_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r35.id, " ", item_r35.label, "");
} }
function TermDepositAccountClosingComponent_div_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_49_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["scheme"].errors == null ? null : ctx_r6.angForm.controls["scheme"].errors.required);
} }
function TermDepositAccountClosingComponent_ng_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r37.label, " ", item_r37.name, "");
} }
function TermDepositAccountClosingComponent_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_62_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["account_no"].errors == null ? null : ctx_r9.angForm.controls["account_no"].errors.required);
} }
function TermDepositAccountClosingComponent_label_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Matured Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_label_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Premature Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TermDepositAccountClosingComponent_div_76_Template_input_focus_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.selectAllContent($event); })("keypress", function TermDepositAccountClosingComponent_div_76_Template_input_keypress_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Closing Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Quaters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "After Matured Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Interest Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TermDepositAccountClosingComponent_div_78_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.getMaturedIntRate(); })("focus", function TermDepositAccountClosingComponent_div_78_Template_input_focus_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.selectAllContent($event); })("keypress", function TermDepositAccountClosingComponent_div_78_Template_input_keypress_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Interest Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TermDepositAccountClosingComponent_div_78_Template_input_focus_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.selectAllContent($event); })("keypress", function TermDepositAccountClosingComponent_div_78_Template_input_keypress_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Paid/Posted Interest -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TermDepositAccountClosingComponent_div_88_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.getNetInterest(); })("focus", function TermDepositAccountClosingComponent_div_88_Template_input_focus_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.selectAllContent($event); })("keyup", function TermDepositAccountClosingComponent_div_88_Template_input_keyup_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.getDecimal($event); })("focusout", function TermDepositAccountClosingComponent_div_88_Template_input_focusout_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.getDecimalPoint($event); })("keypress", function TermDepositAccountClosingComponent_div_88_Template_input_keypress_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_span_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_span_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_span_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r65.id, " ", item_r65.label, "");
} }
function TermDepositAccountClosingComponent_div_196_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_196_div_30_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.angForm.controls["Tscheme"].errors == null ? null : ctx_r57.angForm.controls["Tscheme"].errors.required);
} }
function TermDepositAccountClosingComponent_div_196_ng_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r67.label, " ", values_r67.name, " ");
} }
function TermDepositAccountClosingComponent_div_196_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_196_div_43_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r60.angForm.controls["TschemeAC"].errors == null ? null : ctx_r60.angForm.controls["TschemeAC"].errors.required);
} }
function TermDepositAccountClosingComponent_div_196_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_196_div_63_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r61.angForm.controls["amount"].errors == null ? null : ctx_r61.angForm.controls["amount"].errors.pattern) || (ctx_r61.angForm.controls["amount"].errors == null ? null : ctx_r61.angForm.controls["amount"].errors.required) || (ctx_r61.angForm.controls["amount"].errors == null ? null : ctx_r61.angForm.controls["amount"].errors.maxlength));
} }
function TermDepositAccountClosingComponent_div_196_button_65_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_div_196_button_65_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.addTransferAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_button_66_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_div_196_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.updateTransferAcccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_tbody_82_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_div_196_tbody_82_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const indexOfelement_r77 = ctx.index; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r78.editTransferAccount(indexOfelement_r77); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r76.Scheme == undefined || data_r76.Scheme == null ? data_r76.depoCloseTranAc.S_APPL : data_r76.Scheme, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r76.TRANSFER_ACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r76.NARRATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r76.TRAN_AMOUNT, " ");
} }
function TermDepositAccountClosingComponent_div_196_tbody_82_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r75.transferTotalAmount, " ");
} }
function TermDepositAccountClosingComponent_div_196_tbody_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_196_tbody_82_tr_1_Template, 11, 8, "tr", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TermDepositAccountClosingComponent_div_196_tbody_82_tr_2_Template, 5, 2, "tr", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r64.multigrid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r64.multigrid.length != 0);
} }
const _c3 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function TermDepositAccountClosingComponent_div_196_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cheque Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function TermDepositAccountClosingComponent_div_196_Template_input_keypress_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122 || $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cheque Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 126, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.Tab", function TermDepositAccountClosingComponent_div_196_Template_input_keydown_Tab_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return _r54.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "sub", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ng-select", 128, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_div_196_Template_ng_select_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.selectedTransScheme = $event; })("change", function TermDepositAccountClosingComponent_div_196_Template_ng_select_change_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.getTransferAccountList($event); })("focus", function TermDepositAccountClosingComponent_div_196_Template_ng_select_focus_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.onFocus(_r55); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TermDepositAccountClosingComponent_div_196_ng_option_29_Template, 2, 3, "ng-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TermDepositAccountClosingComponent_div_196_div_30_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "sub", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ng-select", 132, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_div_196_Template_ng_select_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.ngacno = $event; })("change", function TermDepositAccountClosingComponent_div_196_Template_ng_select_change_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.getTransferAccountDeatil($event); })("focus", function TermDepositAccountClosingComponent_div_196_Template_ng_select_focus_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.onFocus(_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TermDepositAccountClosingComponent_div_196_ng_option_42_Template, 2, 3, "ng-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TermDepositAccountClosingComponent_div_196_div_43_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "textarea", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_div_196_Template_textarea_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.particulars = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_div_196_Template_i_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](369); return _r27.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "sub", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TermDepositAccountClosingComponent_div_196_Template_input_focus_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.selectAllContent($event); })("keyup", function TermDepositAccountClosingComponent_div_196_Template_input_keyup_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.getDecimal($event); })("focusout", function TermDepositAccountClosingComponent_div_196_Template_input_focusout_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.getDecimalPoint($event); })("keypress", function TermDepositAccountClosingComponent_div_196_Template_input_keypress_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, TermDepositAccountClosingComponent_div_196_div_63_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, TermDepositAccountClosingComponent_div_196_button_65_Template, 2, 0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, TermDepositAccountClosingComponent_div_196_button_66_Template, 2, 0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "table", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, TermDepositAccountClosingComponent_div_196_tbody_82_Template, 3, 2, "tbody", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxDate", ctx_r20.maxDate)("minDate", ctx_r20.minDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3))("maxDate", ctx_r20.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.selectedTransScheme)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.Scheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.angForm.controls["Tscheme"].invalid && (ctx_r20.angForm.controls["Tscheme"].dirty || ctx_r20.angForm.controls["Tscheme"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.ngacno)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.schemeACNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.angForm.controls["TschemeAC"].invalid && (ctx_r20.angForm.controls["TschemeAC"].dirty || ctx_r20.angForm.controls["TschemeAC"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.particulars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.angForm.controls["amount"].invalid && (ctx_r20.angForm.controls["amount"].dirty || ctx_r20.angForm.controls["amount"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.jointShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.jointUpdateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.multigrid.length != 0);
} }
function TermDepositAccountClosingComponent_button_199_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_button_199_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); ctx_r95.submit(); return _r1.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_button_200_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_button_200_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_button_201_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_button_201_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.ResetForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_button_203_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_button_203_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_button_205_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_button_205_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.Approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_button_206_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_button_206_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.unApprove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unapprove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_tr_385_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_tr_385_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const item_r107 = ctx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.getNarration(item_r107.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r107.NARRATION, " ");
} }
function TermDepositAccountClosingComponent_tr_406_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_tr_406_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const item_r110 = ctx.$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.getFormNarration(item_r110.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r110.NARRATION, " ");
} }
class TermDepositAccountClosingComponent {
    constructor(TransactionCashModeService, TransactionTransferModeService, SchemeTypeService, ownbranchMasterService, _service, savingMasterService, schemeAccountNoService, fb, router, http, _TDService, _CustomerIdService, schemeCodeDropdownService, systemParameter) {
        this.TransactionCashModeService = TransactionCashModeService;
        this.TransactionTransferModeService = TransactionTransferModeService;
        this.SchemeTypeService = SchemeTypeService;
        this.ownbranchMasterService = ownbranchMasterService;
        this._service = _service;
        this.savingMasterService = savingMasterService;
        this.schemeAccountNoService = schemeAccountNoService;
        this.fb = fb;
        this.router = router;
        this.http = http;
        this._TDService = _TDService;
        this._CustomerIdService = _CustomerIdService;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.systemParameter = systemParameter;
        this.reloadTablePassing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formSubmitted = false;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.updateID = 0;
        // for radio button
        this.isTransfer = false;
        this.branchCode = null;
        this.branch_codeList = null;
        this.allScheme = new Array(); //from schme master
        this.Pass = 0;
        this.Unpass = 0;
        this.ClearBalance = 0;
        this.AfterVoucher = 0;
        this.InputHeadAmt = 0.00;
        this.EditFlag = false;
        this.isture = true;
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
        this.showChequeDetails = false;
        this.DayOpBal = 0.00;
        this.headShow = false;
        this.mainMaster = new Array();
        this.showAdd = true;
        this.showUpdate = false;
        this.customerImg = 'assets/images/nouser.png';
        this.signture = 'assets/images/nosignature.png';
        this.multigrid = [];
        this.DatatableHideShow = true;
        this.rejectShow = false;
        this.approveShow = false;
        this.afterMaturedInt = false;
        this.prematureRate = '0';
        this.INTRATE = 0.00;
        this.preMature = false;
        this.intRateShow = 0;
        this.modalClass = 'modalHide';
        this.calQuarter = 0;
        this.calMonths = 0;
        this.calDays = 0;
        this.calMonthDays = 0;
        this.NET_EXC_INTAMT = 0;
        this.selectedTransScheme = null;
        this.ngacno = null;
        this.jointShowButton = true;
        this.jointUpdateShow = false;
        this.transferTotalAmount = 0;
        this.PreviewDiv = false;
        this.visibleAnimate = false;
        this.visible = false;
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = true;
        this.unapproveShow = false;
        if (this.childMessage != undefined) {
            this.editClickHandler(this.childMessage);
        }
        this.systemParameter.getFormData(1).subscribe(data => {
            let nextDate = moment__WEBPACK_IMPORTED_MODULE_4__(data.CURRENT_DATE, 'DD/MM/YYYY').add(3, 'month').format('YYYY-MM-DD');
            let lastDate = moment__WEBPACK_IMPORTED_MODULE_4__(data.CURRENT_DATE, 'DD/MM/YYYY').subtract(3, 'month').format('YYYY-MM-DD');
            this.maxDate = new Date(nextDate);
            this.maxDate.setDate(this.maxDate.getDate());
            this.minDate = new Date(lastDate);
            this.minDate.setDate(this.minDate.getDate());
            this.logDate = data.CURRENT_DATE;
        });
    }
    ngOnInit() {
        this.createForm();
        //Day opening Amount
        // this.DayOpBal = 1000;
        // get session branch data
        let user = JSON.parse(localStorage.getItem('user'));
        this.type = 'tranfer';
        this.tranModeList = this.TranModeCash;
        //get syspara details
        this._service.getSysParaData().subscribe(data => {
            this.date = data[0].CURRENT_DATE;
        });
        //branch List
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(data => {
            this.branch_code = data;
            this.selectedBranch = user.branchId;
        });
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(data => {
            var allscheme = data.filter(function (scheme) {
                return (scheme.name == 'TD');
            });
            this.allScheme = allscheme;
        });
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(data => {
            var schemeList = data.filter(function (schemeName) {
                return (schemeName.name == 'TD' || schemeName.name == 'SB' || schemeName.name == 'CA' || schemeName.name == 'LN' || schemeName.name == 'CC' || schemeName.name == 'DS' || schemeName.name == 'PG' || schemeName.name == 'GL');
            });
            this.Scheme = schemeList;
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
            slip_no: [''],
            account_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            scheme: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            scheme_type: [''],
            date: [''],
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('cash'),
            POSTED_INT: [0],
            Intdate: [''],
            SAVING_PIGMY: ['FormC'],
            chequeNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            ChequeDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            // Token_Num: ['', [Validators.pattern]],
            particulars: [null],
            amount: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            ClosingQuaters: [0],
            QInterest: [0],
            ClosingMonth: [''],
            MInterest: [0],
            DInterest: [0],
            ClosingDays: [0],
            TDS_AMT: [0],
            SURCHARGE_AMT: [0],
            PENAL_INT: [0],
            EXCESS_INT: [0],
            InterestRate: [0],
            maturedIntAmt: [0],
            maturedInterest: [0],
            TOTAL_INT: [0],
            narration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            TschemeAC: [''],
            Tscheme: [''],
            MaturedDays: [''],
            NET_INTAMT: [0],
            NETPAYABLEAMT: [0],
            LEDGER_BAL: [0],
            PAYABLE_INTAMT: [0],
            TRAN_NO: ['']
        });
        this._service.getSysParaData().subscribe(data => {
            this.date = data[0].CURRENT_DATE;
            this.angForm.patchValue({
                date: this.date
            });
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.angForm.controls['branch_code'].enable();
            this.selectedBranch = result.branch.id;
        }
        else {
            this.angForm.controls['branch_code'].disable();
            this.angForm.patchValue({
                'branch_code': result.branch.id
            });
            this.selectedBranch = result.branch.id;
        }
    }
    schemechange(event) {
        this.getschemename = event.name;
        this.selectedScheme = event.value;
        this.isInterestApplicable = event.intapp;
        this.FIXED_MATURITY_AMT = event.FIXED_MATURITY_AMT;
        this.monthDays = event.monthDays;
        this.Quarterly = event.Quarterly;
        this.prematureRate = event.prematureRate;
        this.interestUptoCalDate = event.interestUptoCalDate;
        this.afterMatureIntRate = event.afterMatureIntRate;
        this.customer = null;
        this.introducerACNo = [];
        this.getIntroducer();
    }
    //get account no according scheme for introducer
    getIntroducer() {
        this.introducerACNo = [];
        this.customer = null;
        this.obj = [this.selectedScheme, this.selectedBranch];
        // switch (this.getschemename) {
        //   case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
            this.introducerACNo = data;
        });
        // break;
        // }
    }
    getAccountDetails(event) {
        this.bankacno = event.bankacno;
        this.customerId = event.id;
        this.dormant = event.dormant;
        let mem = [this.bankacno, this.getschemename, this.selectedScheme];
        this.modalClass = 'modalShow';
        this.intRateShow = 0;
        this.NET_EXC_INTAMT = 0;
        this.transferTotalAmount = 0;
        this.multigrid = [];
        this.angForm.patchValue({
            InterestRate: 0,
            MaturedDays: 0,
            ClosingQuaters: 0,
            QInterest: 0,
            ClosingMonth: 0,
            MInterest: 0,
            ClosingDays: 0,
            DInterest: 0,
            maturedInterest: 0,
            maturedIntAmt: 0,
            TOTAL_INT: 0,
            POSTED_INT: 0,
            NET_INTAMT: 0,
            LEDGER_BAL: 0,
            PAYABLE_INTAMT: 0,
            TDS_AMT: 0,
            SURCHARGE_AMT: 0,
            PENAL_INT: 0,
            NETPAYABLEAMT: 0
        });
        this.http.get(this.url + '/term-deposit-account-closing/details/' + mem).subscribe((data) => {
            this.modalClass = 'modalHide';
            if (data[0].ODGIVEN == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Overdraft given so Account cannot close', 'error');
                this.customer = null;
                return;
            }
            else if (data[0].ISFREEZ == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Freezed account so Account cannot close', 'error');
                this.customer = null;
                return;
            }
            else if (data[0].ISCLOSED == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Account is already closed so account cannot close', 'error');
                this.customer = null;
                return;
            }
            else if (data[0].PASSINGPENDING == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Account is already closed but passing pending', 'error');
                this.customer = null;
                return;
            }
            else if (data[0].ISLIEN == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Account is liened so account cannot close', 'error');
                this.customer = null;
                return;
            }
            if (Number(data[0].LedgerBal) >= 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Balance is insufficient so account cannot close', 'error');
                this.customer = null;
                return;
            }
            this.DayOpBal = data[0].AC_SCHMAMT;
            this.Pass = data[0].AC_MATUAMT;
            this.INTRATE = data[0].AC_INTRATE;
            this.lastIntDate = data[0].AC_LINTEDT;
            this.opDate = data[0].AC_OPDATE;
            this.asOnDate = data[0].AC_ASON_DATE;
            this.maturityDate = data[0].AC_LINTEDT != null ? data[0].AC_LINTEDT : data[0].AC_EXPDT;
            this.maturityDate1 = data[0].AC_EXPDT;
            this.recNo = data[0].AC_REF_RECEIPTNO;
            this.operator = data[0].operation;
            this.months = data[0].AC_MONTHS;
            this.days = data[0].AC_DAYS;
            this.interestCategory = data[0].AC_INTCATA;
            this.preMature = data[0].preMature;
            this.angForm.patchValue({
                LEDGER_BAL: Number(Math.abs(data[0].LedgerBal)).toFixed(2),
                PAYABLE_INTAMT: Number(Math.abs(data[0].payableInterest)).toFixed(2),
                TDS_AMT: Number(data[0].tds_amt),
                PENAL_INT: Number(data[0].penalInterest)
            });
            if (this.isInterestApplicable == '1') {
                this.angForm.patchValue({
                    InterestRate: data[0].AC_INTRATE
                });
                this.intRateShow = data[0].AC_INTRATE;
            }
            else {
                this.angForm.patchValue({
                    InterestRate: '0'
                });
                this.intRateShow = 0;
            }
            if (data[0].preMature == '1') {
                this.angForm.patchValue({
                    InterestRate: Number(data[0].prematureRate) - Number(this.prematureRate)
                });
                this.afterMaturedInt = false;
                this.intRateShow = Number(data[0].prematureRate) - Number(this.prematureRate);
                if (data[0].post_Interest < 0) {
                    this.angForm.patchValue({
                        // EXCESS_INT: Number(data[0].post_Interest).toFixed(2),
                        NET_INTAMT: Number(data[0].post_Interest).toFixed(0),
                        POSTED_INT: 0,
                    });
                    this.NET_EXC_INTAMT = Number(data[0].post_Interest);
                }
                else if (data[0].post_Interest > 0) {
                    this.angForm.patchValue({
                        POSTED_INT: Number(data[0].post_Interest).toFixed(0),
                        NET_INTAMT: 0
                        // EXCESS_INT: 0
                    });
                    this.NET_EXC_INTAMT = 0;
                }
                else {
                    this.angForm.patchValue({
                        POSTED_INT: 0,
                        NET_INTAMT: 0
                        // EXCESS_INT: 0
                    });
                    this.NET_EXC_INTAMT = 0;
                }
                this.getMonthDays();
            }
            else {
                this.angForm.patchValue({
                    InterestRate: data[0].AC_INTRATE
                });
                this.intRateShow = data[0].AC_INTRATE;
                if (this.interestUptoCalDate == '1') {
                    this.afterMaturedInt = false;
                    this.angForm.patchValue({
                        TOTAL_INT: Math.round(data[0].InterestAmount) //FUNCTION AMT
                    });
                }
                else {
                    this.afterMaturedInt = true;
                    // var b1 = moment(this.maturityDate, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY');
                    // var a1 = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
                    var a1 = moment__WEBPACK_IMPORTED_MODULE_4__(this.maturityDate, "DD/MM/YYYY");
                    var b1;
                    this.lastIntDate == null ? b1 = moment__WEBPACK_IMPORTED_MODULE_4__(this.opDate, 'DD/MM/YYYY') : b1 = moment__WEBPACK_IMPORTED_MODULE_4__(this.lastIntDate, "DD/MM/YYYY");
                    var b = moment__WEBPACK_IMPORTED_MODULE_4__(b1, 'DD/MM/YYYY');
                    var a = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY");
                    let Days = a1.diff(b1, 'days');
                    let total_int = Math.abs(Number(Math.abs(data[0].LedgerBal)) * Days * (parseFloat(this.angForm.controls['InterestRate'].value) / 36500));
                    this.angForm.patchValue({
                        TOTAL_INT: Math.round(total_int)
                    });
                }
                if (this.afterMatureIntRate != 0 && this.afterMatureIntRate != '') {
                    // var b = moment(this.date, "DD/MM/YYYY");
                    // var a = this.lastIntDate != '' && this.lastIntDate != null ? moment(this.lastIntDate, 'DD/MM/YYYY') : (this.asOnDate != '' && this.asOnDate != null) ? moment(this.asOnDate, "DD/MM/YYYY") : moment(this.opDate, "DD/MM/YYYY")
                    // let maturedDays = Math.abs(a.diff(b, 'days'))
                    // let total_int = Number(this.angForm.controls['TOTAL_INT'].value) + Math.abs(maturedDays * (parseFloat(this.afterMatureIntRate) / 100))
                    this.angForm.patchValue({
                        InterestRate: this.afterMatureIntRate,
                        MaturedDays: data[0].totDays,
                        TOTAL_INT: Math.round(data[0].InterestAmount)
                    });
                    // this.intRateShow = this.afterMatureIntRate
                    // this.afterMaturedInt = false
                    // var b = moment(this.maturityDate, "DD/MM/YYYY");
                    // var a = (this.asOnDate != '' && this.asOnDate != null) ? moment(this.asOnDate, "DD/MM/YYYY") : moment(this.opDate, "DD/MM/YYYY")
                    // let maturedDays = Math.abs(a.diff(b, 'days'))
                    // let total_int = Math.abs(maturedDays * (parseFloat(this.afterMatureIntRate) / 100))
                    // this.angForm.patchValue({
                    //   InterestRate: this.afterMatureIntRate,
                    //   MaturedDays: maturedDays,
                    //   TOTAL_INT: Math.round(total_int)
                    // })
                    // this.intRateShow = this.afterMatureIntRate
                    // this.afterMaturedInt = false
                }
                else {
                    var a1 = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY").subtract(1, 'days');
                    this.afterMaturedInt = true;
                    var b = moment__WEBPACK_IMPORTED_MODULE_4__(this.maturityDate, "DD/MM/YYYY");
                    var a = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY");
                    let maturedDays = Math.abs(a1.diff(b, 'days'));
                    this.angForm.patchValue({
                        MaturedDays: maturedDays,
                    });
                }
                if (this.FIXED_MATURITY_AMT == '1' && this.interestUptoCalDate == '0') {
                    if (Number(this.Pass) < Number(Math.abs(data[0].LedgerBal))) {
                        let excessInt = Number(Math.abs(data[0].LedgerBal)) - Number(this.Pass);
                        this.angForm.patchValue({
                            POSTED_INT: excessInt,
                            NET_INTAMT: 0,
                            TOTAL_INT: 0
                        });
                        this.afterMaturedInt = false;
                    }
                }
            }
            let total_int = this.angForm.controls['TOTAL_INT'].value;
            let post_int = this.angForm.controls['POSTED_INT'].value;
            let netInt = (Math.abs(Number(total_int) - Number(post_int))).toFixed(0);
            this.angForm.patchValue({
                NET_INTAMT: (netInt)
            });
            this.NET_EXC_INTAMT = Number(total_int) - Number(post_int);
            let ledgerAmt = Number(this.angForm.controls['LEDGER_BAL'].value);
            let netAmt = Number(this.angForm.controls['NET_INTAMT'].value);
            let TDSAmt = Number(this.angForm.controls['TDS_AMT'].value);
            let surchargeAmt = Number(this.angForm.controls['SURCHARGE_AMT'].value);
            let penalAmt = Number(this.angForm.controls['PENAL_INT'].value);
            let totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (Number(ledgerAmt) + Number(netAmt) - Number(TDSAmt) - Number(surchargeAmt) - Number(penalAmt)).toFixed(2) : (Number(ledgerAmt) - Number(Math.abs(netAmt)) - Number(TDSAmt) - Number(surchargeAmt) - Number(penalAmt)).toFixed(2);
            this.angForm.patchValue({
                NETPAYABLEAMT: totalNetAmt
            });
            this.getNetPayAmount();
        });
        this.showCustomerDeatils();
    }
    getNetPayAmount() {
        let ledgerAmt = Number(this.angForm.controls['LEDGER_BAL'].value);
        let netAmt = Number(this.angForm.controls['NET_INTAMT'].value);
        let TDSAmt = Number(this.angForm.controls['TDS_AMT'].value);
        let surchargeAmt = Number(this.angForm.controls['SURCHARGE_AMT'].value);
        let penalAmt = Number(this.angForm.controls['PENAL_INT'].value);
        let totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (Math.abs(ledgerAmt + netAmt - TDSAmt - surchargeAmt - penalAmt)).toFixed(2) : (Math.abs(ledgerAmt - Math.abs(netAmt) - TDSAmt - surchargeAmt - penalAmt)).toFixed(2);
        this.preMature == false ? totalNetAmt = (Number(totalNetAmt) + Number(this.angForm.controls['PAYABLE_INTAMT'].value)).toFixed(2) : totalNetAmt = totalNetAmt;
        this.angForm.patchValue({
            NETPAYABLEAMT: totalNetAmt
        });
    }
    getNetInterest() {
        let total_int = this.angForm.controls['TOTAL_INT'].value;
        let post_int = this.angForm.controls['POSTED_INT'].value;
        let netInt = (Number(total_int) - Number(post_int)).toFixed(0);
        this.NET_EXC_INTAMT = Number(total_int) - Number(post_int);
        this.angForm.patchValue({
            NET_INTAMT: Math.abs(Number(netInt))
        });
        this.getNetPayAmount();
    }
    getMaturedIntRate() {
        let total_int1 = Number(this.angForm.controls['TOTAL_INT'].value) - Number(this.angForm.controls['maturedIntAmt'].value);
        let ledgerAmt = Number(this.angForm.controls['LEDGER_BAL'].value);
        let maturedIntAmt = Math.abs(ledgerAmt * Number(this.angForm.controls['MaturedDays'].value) * (parseFloat(this.angForm.controls['maturedInterest'].value) / 36500));
        // let total_int = maturedIntAmt - Number(this.angForm.controls['maturedInterest'].value) + Number(this.angForm.controls['TOTAL_INT'].value)
        let total_int = maturedIntAmt + Number(total_int1);
        this.angForm.patchValue({
            maturedIntAmt: Math.round(maturedIntAmt),
            TOTAL_INT: Math.round(total_int),
            NET_INTAMT: Math.round(total_int)
        });
    }
    getMonthDays() {
        let Days = 0;
        if (this.asOnDate != null && this.asOnDate != "") {
            var b1 = moment__WEBPACK_IMPORTED_MODULE_4__(this.asOnDate, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY');
            var b = moment__WEBPACK_IMPORTED_MODULE_4__(b1, 'DD/MM/YYYY');
            let matureDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY');
            var a = moment__WEBPACK_IMPORTED_MODULE_4__(matureDate, "DD/MM/YYYY");
            Days = a.diff(b, 'days');
            if (this.Quarterly != '' && this.Quarterly == 'Q') {
                this.calQuarter = Math.floor(a.diff(b, 'months') / 3);
                if (Days > 90)
                    this.calDays = Days - 90;
                this.calMonths = 0;
            }
            else {
                Days = a.diff(b, 'days');
                if (this.monthDays == 'M') {
                    this.calMonths = a.diff(b, 'months');
                    this.calQuarter = 0;
                    this.calDays = 0;
                }
                else if (this.monthDays == 'D' || this.monthDays == 'P') {
                    this.calDays = a.diff(b, 'days');
                    this.calQuarter = 0;
                    this.calMonths = 0;
                }
                else if (this.monthDays == 'B') {
                    this.calMonths = a.diff(b, 'months');
                    // this.calDays = a.diff(b, 'days')
                    // this.calDays = this.calDays - (this.calMonths * 30)
                    this.calQuarter = 0;
                    var bd = moment__WEBPACK_IMPORTED_MODULE_4__(b, "DD-MM-YYYY");
                    var ab = moment__WEBPACK_IMPORTED_MODULE_4__(a, "DD-MM-YYYY");
                    var Diffmonths = ab.diff(bd, 'months');
                    bd.add(this.calMonths, 'months');
                    var Diffdays = ab.diff(bd, 'days');
                    this.calDays = Diffdays;
                }
            }
        }
        else {
            var b1 = moment__WEBPACK_IMPORTED_MODULE_4__(this.opDate, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY');
            var b = moment__WEBPACK_IMPORTED_MODULE_4__(b1, "DD/MM/YYYY");
            let matureDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY');
            var a = moment__WEBPACK_IMPORTED_MODULE_4__(matureDate, "DD/MM/YYYY");
            Days = a.diff(b, 'days');
            if (this.Quarterly != '' && this.Quarterly == 'Q') {
                this.calQuarter = Math.floor(a.diff(b, 'months') / 3);
                if (Days > 90)
                    this.calDays = Days - 90;
                this.calMonths = 0;
            }
            else {
                Days = a.diff(b, 'days');
                if (this.monthDays == 'M') {
                    this.calMonths = a.diff(b, 'months');
                    this.calQuarter = 0;
                    this.calDays = 0;
                }
                else if (this.monthDays == 'D' || this.monthDays == 'P') {
                    this.calDays = a.diff(b, 'days');
                    this.calQuarter = 0;
                    this.calMonths = 0;
                }
                else if (this.monthDays == 'B') {
                    var bd = moment__WEBPACK_IMPORTED_MODULE_4__(b, "DD-MM-YYYY");
                    var ab = moment__WEBPACK_IMPORTED_MODULE_4__(a, "DD-MM-YYYY");
                    this.calMonths = a.diff(b, 'months');
                    // this.calDays = a.diff(b, 'days')
                    // this.calDays = this.calDays - (this.calMonths * 30)
                    var Diffmonths = ab.diff(bd, 'months');
                    bd.add(this.calMonths, 'months');
                    var Diffdays = ab.diff(bd, 'days');
                    this.calDays = Diffdays;
                    this.calQuarter = 0;
                }
            }
        }
        let balance = Number(this.angForm.controls['LEDGER_BAL'].value) - Number(this.angForm.controls['POSTED_INT'].value);
        let daysInterest = ((balance * this.calDays * Number(this.angForm.controls['InterestRate'].value)) / 36500);
        let monthInterest = ((balance * this.calMonths * Number(this.angForm.controls['InterestRate'].value)) / 1200);
        let qurterInterest = ((balance * this.calQuarter * Number(this.angForm.controls['InterestRate'].value)) / 1200);
        let totalInterest = (Number(daysInterest) + Number(monthInterest) + Number(qurterInterest)).toFixed(2);
        this.angForm.patchValue({
            ClosingQuaters: this.calQuarter,
            ClosingMonth: this.calMonths,
            ClosingDays: this.calDays,
            DInterest: Math.abs(Math.round(Number(daysInterest))),
            MInterest: Math.abs(Math.round(Number(monthInterest))),
            QInterest: Math.abs(Math.round(Number(qurterInterest))),
            TOTAL_INT: Math.abs(Math.round(Number(totalInterest)))
        });
    }
    getEditData() {
        let mem = [this.bankacno, this.getschemename, this.selectedScheme];
        this.http.get(this.url + '/term-deposit-account-closing/details/' + mem).subscribe((data) => {
            this.DayOpBal = data[0].AC_SCHMAMT;
            this.Pass = data[0].AC_MATUAMT;
            this.INTRATE = data[0].AC_INTRATE;
            this.lastIntDate = data[0].AC_LINTEDT;
            this.opDate = data[0].AC_OPDATE;
            this.asOnDate = data[0].AC_ASON_DATE;
            this.maturityDate = data[0].AC_EXPDT;
            this.recNo = data[0].AC_REF_RECEIPTNO;
            this.operator = data[0].operation;
            this.months = data[0].AC_MONTHS;
            this.days = data[0].AC_DAYS;
            this.interestCategory = data[0].AC_INTCATA;
            this.preMature = data[0].preMature;
            this.angForm.patchValue({
                LEDGER_BAL: Number(data[0].LedgerBal).toFixed(2),
                PAYABLE_INTAMT: Number(data[0].payableInterest).toFixed(2),
                TDS_AMT: data[0].tds_amt
            });
            this.getNetPayAmount();
            if (this.isInterestApplicable == '1') {
                this.angForm.patchValue({
                    InterestRate: data[0].AC_INTRATE
                });
                this.intRateShow = data[0].AC_INTRATE;
            }
            else {
                this.angForm.patchValue({
                    InterestRate: '0'
                });
                this.intRateShow = 0;
            }
            if (data[0].post_Interest < 0) {
                this.angForm.patchValue({
                    // EXCESS_INT: data[0].post_Interest,
                    NET_INTAMT: data[0].post_Interest,
                    POSTED_INT: 0,
                });
                this.NET_EXC_INTAMT = (data[0].post_Interest);
            }
            else if (data[0].post_Interest > 0) {
                this.angForm.patchValue({
                    POSTED_INT: Number(data[0].post_Interest).toFixed(0),
                    NET_INTAMT: 0
                    // EXCESS_INT: 0
                });
                this.NET_EXC_INTAMT = 0;
            }
            else {
                this.angForm.patchValue({
                    POSTED_INT: 0,
                    NET_INTAMT: 0
                    // EXCESS_INT: 0
                });
                this.NET_EXC_INTAMT = 0;
            }
            if (data[0].preMature == '1') {
                this.angForm.patchValue({
                    InterestRate: parseFloat(data[0].prematureRate) - parseFloat(this.prematureRate)
                });
                this.afterMaturedInt = false;
                this.intRateShow = parseFloat(data[0].prematureRate) - parseFloat(this.prematureRate);
                this.getMonthDays();
            }
            else {
                this.angForm.patchValue({
                    InterestRate: data[0].AC_INTRATE
                });
                this.intRateShow = data[0].AC_INTRATE;
                if (this.interestUptoCalDate == '1') {
                    this.afterMaturedInt = false;
                    this.angForm.patchValue({
                        TOTAL_INT: Math.round(data[0].InterestAmount)
                    });
                }
                else {
                    this.afterMaturedInt = true;
                    var b = moment__WEBPACK_IMPORTED_MODULE_4__(this.maturityDate, "DD/MM/YYYY");
                    var a = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY");
                    let Days = b.diff(a, 'days');
                    let total_int = Math.abs(Days * (parseFloat(this.angForm.controls['InterestRate'].value) / 100));
                    this.angForm.patchValue({
                        TOTAL_INT: Math.round(total_int)
                    });
                }
                if (this.afterMatureIntRate != 0 && this.afterMatureIntRate != '') {
                    var b = moment__WEBPACK_IMPORTED_MODULE_4__(this.maturityDate, "DD/MM/YYYY");
                    var a = (this.asOnDate != '' && this.asOnDate != null) ? moment__WEBPACK_IMPORTED_MODULE_4__(this.asOnDate, "DD/MM/YYYY") : moment__WEBPACK_IMPORTED_MODULE_4__(this.opDate, "DD/MM/YYYY");
                    let maturedDays = Math.abs(a.diff(b, 'days'));
                    let total_int = Math.abs(maturedDays * (parseFloat(this.afterMatureIntRate) / 100));
                    this.angForm.patchValue({
                        InterestRate: this.afterMatureIntRate,
                        MaturedDays: maturedDays,
                        TOTAL_INT: Math.round(total_int)
                    });
                    this.intRateShow = this.afterMatureIntRate;
                    this.afterMaturedInt = false;
                }
                else {
                    this.afterMaturedInt = true;
                    var b = moment__WEBPACK_IMPORTED_MODULE_4__(this.maturityDate, "DD/MM/YYYY");
                    var a = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY");
                    let maturedDays = Math.abs(a.diff(b, 'days'));
                    this.angForm.patchValue({
                        MaturedDays: maturedDays,
                    });
                }
            }
            let total_int = this.angForm.controls['TOTAL_INT'].value;
            let post_int = this.angForm.controls['POSTED_INT'].value;
            let netInt = (Number(total_int) - Number(post_int)).toFixed(0);
            this.NET_EXC_INTAMT = Number(total_int) - Number(post_int);
            this.angForm.patchValue({
                NET_INTAMT: netInt
            });
        });
        this.getNetPayAmount();
    }
    //get account no according scheme for transfer
    getTransferAccountList(event) {
        this.transferSchemeDetails = event;
        this.obj = [this.selectedTransScheme, this.selectedBranch];
        this.ngacno = null;
        switch (event.name) {
            case 'SB':
                this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
                    this.schemeACNo = data;
                });
                break;
            case 'CA':
                this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
                    this.schemeACNo = data;
                });
                break;
            case 'LN':
                this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
                    this.schemeACNo = data;
                });
                break;
            case 'TD':
                this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
                    this.schemeACNo = data;
                });
                break;
            case 'DS':
                this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
                    this.schemeACNo = data;
                });
                break;
            case 'CC':
                this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
                    this.schemeACNo = data;
                });
                break;
            case 'PG':
                this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
                    this.schemeACNo = data;
                });
                break;
            case 'GL':
                this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
                    this.schemeACNo = data;
                });
                break;
        }
    }
    getTransferAccountDeatil(event) {
        this.transferAccountDetails = event;
    }
    //transfer account grid functions
    addTransferAccount() {
        this.formSubmitted = true;
        let formVal = this.angForm.value;
        var object = {
            Scheme: this.transferSchemeDetails.id,
            TRANSFER_ACNOTYPE: this.transferSchemeDetails.name,
            TRANSFER_ACNO: formVal.TschemeAC,
            TRANSFER_ACTYPE: this.selectedTransScheme,
            ACNO: this.ngacno,
            NARRATION: formVal.particulars,
            TRAN_AMOUNT: formVal.amount,
            AC_CLOSED: '0'
        };
        if (formVal.Tscheme == "" || formVal.Tscheme == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Select Scheme!", "error");
        }
        else if (formVal.TschemeAC == "" || formVal.TschemeAC == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Select Account!", "info");
        }
        else if (formVal.amount == "" || formVal.amount == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Insert Amount!", "info");
        }
        else if (this.multigrid.find(ob => ob['TRANSFER_ACNO'] === object.TRANSFER_ACNO)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Info', 'This Account is Already Exists!', 'error');
        }
        else {
            if (object.TRANSFER_ACNO != this.bankacno) {
                let termAmount = 0;
                if (this.transferSchemeDetails.name == 'TD' && this.transferSchemeDetails.installmentType == 0) {
                    let obj = {
                        Scheme: this.transferSchemeDetails.id,
                        BANKACNO: object.TRANSFER_ACNO,
                        Date: this.date
                    };
                    let ledgerBal;
                    this.http.post(this.url + '/term-deposit-account-closing/ledgerBalance', obj).subscribe((bal) => {
                        ledgerBal = bal;
                        termAmount = Number(this.transferAccountDetails.depositAmount) - Number(ledgerBal);
                    });
                    this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount);
                    let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value);
                    if (comparison <= this.transferTotalAmount) {
                        if (formVal.amount >= termAmount) {
                            this.multigrid.push(object);
                            this.resetgrid();
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Amount Must be less than or same as ${termAmount}`, 'info');
                            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount);
                        }
                    }
                    else {
                        this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
                    }
                }
                else if (this.transferSchemeDetails.name == 'LN' || this.transferSchemeDetails.name == 'DS') {
                    let obj = {
                        Scheme: this.transferSchemeDetails.id,
                        BANKACNO: object.TRANSFER_ACNO,
                        Date: this.date
                    };
                    let ledgerBal;
                    this.http.post(this.url + '/term-deposit-account-closing/ledgerBalance', obj).subscribe((bal) => {
                        ledgerBal = bal;
                        if (Number(ledgerBal) == Number(formVal.amount)) {
                            object['AC_CLOSED'] = '1';
                            this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount);
                            let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value);
                            if (comparison >= this.transferTotalAmount) {
                                this.multigrid.push(object);
                                this.resetgrid();
                            }
                            else {
                                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
                            }
                        }
                        else if (Number(ledgerBal) > Number(formVal.amount)) {
                            this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount);
                            let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value);
                            if (comparison >= this.transferTotalAmount) {
                                this.multigrid.push(object);
                                this.resetgrid();
                            }
                            else {
                                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
                            }
                        }
                        else if (Number(ledgerBal) < Number(formVal.amount)) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Amount Is Greater Than Closing Balance`, 'info');
                        }
                    });
                }
                else {
                    this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount);
                    let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value);
                    if (comparison >= this.transferTotalAmount) {
                        this.multigrid.push(object);
                        this.resetgrid();
                    }
                    else {
                        this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
                    }
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', 'Closing Account And Transfer Account Cannot Be Same', 'info');
                this.resetgrid();
            }
        }
    }
    editTransferAccount(id) {
        this.transferIndex = id;
        this.transferACID = this.multigrid[id].id;
        this.transferGrid = this.multigrid[id];
        this.jointShowButton = false;
        this.jointUpdateShow = true;
        this.angForm.patchValue({
            particulars: this.multigrid[id].NARRATION,
            amount: this.multigrid[id].TRAN_AMOUNT
        });
        this.ngacno = this.multigrid[id].ACNO;
        this.selectedTransScheme = this.multigrid[id].TRANSFER_ACTYPE;
    }
    updateTransferAcccount() {
        let index = this.transferIndex;
        let formVal = this.angForm.value;
        var object = {
            Scheme: this.transferSchemeDetails.id,
            TRANSFER_ACNOTYPE: this.transferSchemeDetails.name,
            TRANSFER_ACNO: formVal.TschemeAC,
            TRANSFER_ACTYPE: this.selectedTransScheme,
            ACNO: this.ngacno,
            NARRATION: formVal.particulars,
            TRAN_AMOUNT: formVal.amount,
            id: this.transferACID
        };
        if (formVal.Tscheme == "" || formVal.Tscheme == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Select Scheme!", "error");
        }
        else if (formVal.TschemeAC == "" || formVal.TschemeAC == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Select Acoount!", "info");
        }
        else if (formVal.amount == "" || formVal.amount == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Insert Amount!", "info");
        }
        // else {
        // if (object.TRANSFER_ACNO != this.bankacno) {
        //   this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
        //   if (Number(this.angForm.controls['NETPAYABLEAMT'].value) >= this.transferTotalAmount) {
        //     this.transferTotalAmount = this.transferTotalAmount - Number(this.multigrid[index].TRAN_AMOUNT)
        //     this.multigrid[index] = object
        //     this.jointShowButton = true;
        //     this.jointUpdateShow = false;
        //     this.resetgrid();
        //   }
        //   else {
        //      Swal.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info')
        //     this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount)
        //   }
        // }
        // else {
        //   Swal.fire('info', 'Closing Account And Transfer Account Cannot Be Same', 'info')
        //   this.resetgrid();
        // }
        else {
            if (object.TRANSFER_ACNO != this.bankacno) {
                let termAmount = 0;
                if (this.transferSchemeDetails.name == 'TD' && this.transferSchemeDetails.installmentType == 0) {
                    let obj = {
                        Scheme: this.transferSchemeDetails.id,
                        BANKACNO: object.TRANSFER_ACNO,
                        Date: this.date
                    };
                    let ledgerBal;
                    this.http.post(this.url + '/term-deposit-account-closing/ledgerBalance', obj).subscribe((bal) => {
                        ledgerBal = bal;
                        termAmount = Number(this.transferAccountDetails.depositAmount) - Number(ledgerBal);
                    });
                    let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value);
                    this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount);
                    if (Number(this.angForm.controls['NETPAYABLEAMT'].value) >= this.transferTotalAmount) {
                        if (formVal.amount >= termAmount) {
                            this.multigrid[index] = object;
                            this.jointShowButton = true;
                            this.jointUpdateShow = false;
                            this.resetgrid();
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Amount Must be less than or same as ${termAmount}`, 'info');
                            this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount);
                        }
                    }
                    else {
                        this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
                    }
                }
                else if (this.transferSchemeDetails.name == 'LN' || this.transferSchemeDetails.name == 'DS') {
                    let obj = {
                        Scheme: this.transferSchemeDetails.id,
                        BANKACNO: object.TRANSFER_ACNO,
                        Date: this.date
                    };
                    let ledgerBal;
                    this.http.post(this.url + '/term-deposit-account-closing/ledgerBalance', obj).subscribe((bal) => {
                        ledgerBal = bal;
                        if (Number(ledgerBal) == Number(formVal.amount)) {
                            object['AC_CLOSED'] = '1';
                            this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount);
                            let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value);
                            if (Number(this.angForm.controls['NETPAYABLEAMT'].value) >= this.transferTotalAmount) {
                                this.multigrid[index] = object;
                                this.jointShowButton = true;
                                this.jointUpdateShow = false;
                                this.resetgrid();
                            }
                            else {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
                                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount);
                            }
                        }
                        else if (Number(ledgerBal) > Number(formVal.amount)) {
                            let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value);
                            this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount);
                            if (Number(this.angForm.controls['NETPAYABLEAMT'].value) >= this.transferTotalAmount) {
                                this.multigrid[index] = object;
                                this.jointShowButton = true;
                                this.jointUpdateShow = false;
                                this.resetgrid();
                            }
                            else {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
                                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount);
                            }
                        }
                        else if (Number(ledgerBal) < Number(formVal.amount)) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Amount Is Greater Than Closing Balance`, 'info');
                        }
                    });
                }
                else {
                    let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value);
                    this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount);
                    if (Number(this.angForm.controls['NETPAYABLEAMT'].value) >= this.transferTotalAmount) {
                        this.multigrid[index] = object;
                        this.jointShowButton = true;
                        this.jointUpdateShow = false;
                        this.resetgrid();
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
                        this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount);
                    }
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', 'Closing Account And Transfer Account Cannot Be Same', 'info');
                this.resetgrid();
            }
        }
    }
    //transfer and cash radio button effect
    isFormA(value) {
        if (value == 1) {
            this.isTransfer = false;
            this.multigrid = [];
        }
        else if (value == 2) {
            this.isTransfer = true;
            this.multigrid = [];
        }
    }
    //get Narration Details 
    getNarration(ele) {
        this.particulars = ele;
        let el = this.triggerhide.nativeElement;
        el.click();
        this.narrationField.nativeElement.focus();
    }
    //get Narration Details 
    getFormNarration(ele) {
        this.narration = ele;
        let el = this.triggerNarrationhide.nativeElement;
        el.click();
    }
    showCustomerDeatils() {
        if (this.angForm.controls['account_no'].value != null) {
            this._CustomerIdService.getFormData(this.customerId).subscribe(data => {
                this.Customer_info = data;
                this.Status = this.dormant;
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
        }
    }
    submit() {
        let formValue = this.angForm.value;
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value);
        if (formValue.SAVING_PIGMY == 'FormT' && comparison != this.transferTotalAmount) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", `Transfer Amount should be  Rs.${comparison}!`, "info");
        }
        else if ((formValue.SAVING_PIGMY == 'FormT' && comparison == this.transferTotalAmount) || formValue.SAVING_PIGMY == 'FormC') {
            let dataToSend = {
                TRAN_DATE: this.date,
                TRAN_TYPE: formValue.SAVING_PIGMY == 'FormT' ? 'TR' : 'CS',
                BRANCH_CODE: this.selectedBranch,
                TRAN_ACNOTYPE: 'TD',
                TRAN_ACTYPE: this.selectedScheme,
                TRAN_ACNO: this.bankacno,
                SURCHARGE_AMOUNT: formValue.SURCHARGE_AMT,
                PENAL_INTEREST_AMOUNT: formValue.PENAL_INT,
                NET_INTEREST_AMOUNT: formValue.NET_INTAMT,
                EXCESS_INTEREST: this.NET_EXC_INTAMT >= 0 ? 0 : this.NET_EXC_INTAMT,
                TOTAL_INTEREST_AMOUNT: formValue.TOTAL_INT,
                NET_PAYABLE_AMOUNT: formValue.NETPAYABLEAMT,
                INTEREST_RATE: formValue.InterestRate,
                IS_PREMATURE_CLOSE: this.preMature == true ? 1 : 0,
                NARRATION: formValue.narration,
                // TOKEN_NO: formValue.Token_Num,
                PAYABLE_INTEREST_AMOUNT: formValue.PAYABLE_INTAMT,
                CHEQUE_NO: formValue.chequeNo,
                TDS_AMT: formValue.TDS_AMT,
                USER: result.id,
                LEDGER_BAL: formValue.LEDGER_BAL,
                CHEQUE_DATE: (formValue.ChequeDate == '' || formValue.ChequeDate == 'Invalid date') ? '' : moment__WEBPACK_IMPORTED_MODULE_4__(formValue.ChequeDate).format('DD/MM/YYYY'),
                PAID_INTEREST_AMOUNT: formValue.POSTED_INT,
                AFT_MATURE_INT_RATE: formValue.maturedInterest,
                AFT_MATURE_INT_AMT: formValue.maturedIntAmt,
                multigrid: this.multigrid
            };
            this._TDService.postData(dataToSend).subscribe(data => {
                // this.getVoucherData();
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', 'Account Closed Successfully !', 'success');
                this.transferTotalAmount = 0;
                this.multigrid = [];
                this.customerImg = 'assets/images/nouser.png';
                this.signture = 'assets/images/nosignature.png';
                this.DayOpBal = null;
                this.Pass = null;
                this.INTRATE = null;
                this.lastIntDate = null;
                this.opDate = null;
                this.asOnDate = null;
                this.maturityDate = null;
                this.recNo = null;
                this.operator = null;
                this.months = null;
                this.days = null;
                this.interestCategory = null;
                this.preMature = null;
                this.resetForm();
            }, err => {
                console.log(err);
            });
        }
    }
    resetForm() {
        this.isTransfer = false;
        this.customer = null;
        this._service.getSysParaData().subscribe(data => {
            this.date = data[0].CURRENT_DATE;
        });
        this.createForm();
    }
    resetgrid() {
        this.angForm.controls["Tscheme"].reset();
        this.angForm.controls["particulars"].reset();
        this.angForm.controls["TschemeAC"].reset();
        this.angForm.controls["amount"].reset();
    }
    //get Amount Details
    getAmt(ele) {
        this.totalAmt = ele.target.value + '.00';
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
    }
    editClickHandler(id) {
        this._TDService.getFormData(id).subscribe((data1) => {
            this.angForm.disable();
            this.updatecheckdata = data1;
            if (data1.TRAN_STATUS == '0') {
                this.showButton = false;
                this.updateShow = true;
                this.newbtnShow = true;
                this.approveShow = true;
                this.rejectShow = true;
                this.unapproveShow = false;
            }
            else if (data1.TRAN_STATUS != '0') {
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
            this.date = data1.TRAN_DATE;
            this.updateID = data1.id;
            this.getschemename = data1.TRAN_ACNOTYPE;
            this.selectedScheme = Number(data1.TRAN_ACTYPE);
            this.selectedBranch = data1.BRANCH_CODE;
            this.customerId = data1.customerID;
            this.dormant = data1.dormant;
            data1.IS_PREMATURE_CLOSE == '1' ? this.preMature = true : this.preMature = false;
            this.getIntroducer();
            this.customer = data1.TRAN_ACNO;
            this.bankacno = data1.TRAN_ACNO;
            let mem = [this.bankacno, this.getschemename, this.selectedScheme];
            this.http.get(this.url + '/term-deposit-account-closing/details/' + mem).subscribe((data) => {
                if (Number(data[0].LedgerBal) > 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Account cannot close', 'error');
                    return;
                }
                this.DayOpBal = data[0].AC_SCHMAMT;
                this.Pass = data[0].AC_MATUAMT;
                this.INTRATE = data[0].AC_INTRATE;
                this.lastIntDate = data[0].AC_LINTEDT;
                this.opDate = data[0].AC_OPDATE;
                this.asOnDate = data[0].AC_ASON_DATE;
                this.maturityDate = data[0].AC_EXPDT;
                this.recNo = data[0].AC_REF_RECEIPTNO;
                this.operator = data[0].operation;
                this.months = data[0].AC_MONTHS;
                this.days = data[0].AC_DAYS;
                this.interestCategory = data[0].AC_INTCATA;
                this.preMature = data[0].preMature;
                this.angForm.patchValue({
                    LEDGER_BAL: Number(Math.abs(data[0].LedgerBal)).toFixed(2),
                    PAYABLE_INTAMT: Number(Math.abs(data[0].payableInterest)).toFixed(2),
                    TDS_AMT: Number(data[0].tds_amt),
                    PENAL_INT: Number(data[0].penalInterest)
                });
                if (this.isInterestApplicable == '1') {
                    this.angForm.patchValue({
                        InterestRate: data[0].AC_INTRATE
                    });
                    this.intRateShow = data[0].AC_INTRATE;
                }
                else {
                    this.angForm.patchValue({
                        InterestRate: '0'
                    });
                    this.intRateShow = 0;
                }
                if (data[0].post_Interest < 0) {
                    this.angForm.patchValue({
                        // EXCESS_INT: Number(data[0].post_Interest).toFixed(2),
                        NET_INTAMT: Number(data[0].post_Interest).toFixed(0),
                        POSTED_INT: 0,
                    });
                    this.NET_EXC_INTAMT = Number(data[0].post_Interest);
                }
                else if (data[0].post_Interest > 0) {
                    this.angForm.patchValue({
                        POSTED_INT: Number(data[0].post_Interest).toFixed(2),
                        NET_INTAMT: 0
                        // EXCESS_INT: 0
                    });
                    this.NET_EXC_INTAMT = 0;
                }
                else {
                    this.angForm.patchValue({
                        POSTED_INT: 0,
                        NET_INTAMT: 0
                        // EXCESS_INT: 0
                    });
                    this.NET_EXC_INTAMT = 0;
                }
                if (data[0].preMature == '1') {
                    this.angForm.patchValue({
                        InterestRate: Number(data[0].prematureRate) - Number(this.prematureRate)
                    });
                    this.afterMaturedInt = false;
                    this.intRateShow = Number(data[0].prematureRate) - Number(this.prematureRate);
                    this.getMonthDays();
                }
                else {
                    this.angForm.patchValue({
                        InterestRate: data[0].AC_INTRATE
                    });
                    this.intRateShow = data[0].AC_INTRATE;
                    if (this.interestUptoCalDate == '1') {
                        this.afterMaturedInt = false;
                        this.angForm.patchValue({
                            TOTAL_INT: Math.round(data[0].InterestAmount) //FUNCTION AMT
                        });
                    }
                    else {
                        this.afterMaturedInt = true;
                        var b = moment__WEBPACK_IMPORTED_MODULE_4__(this.maturityDate, "DD/MM/YYYY");
                        var a = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY");
                        let Days = b.diff(a, 'days');
                        let total_int = Math.abs(Days * (parseFloat(this.angForm.controls['InterestRate'].value) / 100));
                        this.angForm.patchValue({
                            TOTAL_INT: Math.round(total_int)
                        });
                    }
                    if (this.afterMatureIntRate != 0 && this.afterMatureIntRate != '') {
                        var b = moment__WEBPACK_IMPORTED_MODULE_4__(this.maturityDate, "DD/MM/YYYY");
                        var a = (this.asOnDate != '' && this.asOnDate != null) ? moment__WEBPACK_IMPORTED_MODULE_4__(this.asOnDate, "DD/MM/YYYY") : moment__WEBPACK_IMPORTED_MODULE_4__(this.opDate, "DD/MM/YYYY");
                        let maturedDays = Math.abs(a.diff(b, 'days'));
                        let total_int = Math.abs(maturedDays * (parseFloat(this.afterMatureIntRate) / 100));
                        this.angForm.patchValue({
                            InterestRate: this.afterMatureIntRate,
                            MaturedDays: maturedDays,
                            TOTAL_INT: Math.round(total_int)
                        });
                        this.intRateShow = this.afterMatureIntRate;
                        this.afterMaturedInt = false;
                    }
                    else {
                        this.afterMaturedInt = true;
                        var b = moment__WEBPACK_IMPORTED_MODULE_4__(this.maturityDate, "DD/MM/YYYY");
                        var a = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY");
                        let maturedDays = Math.abs(a.diff(b, 'days'));
                        this.angForm.patchValue({
                            MaturedDays: maturedDays,
                        });
                    }
                }
                let total_int = this.angForm.controls['TOTAL_INT'].value;
                let post_int = this.angForm.controls['POSTED_INT'].value;
                let netInt = (Math.abs(Number(total_int) - Number(post_int))).toFixed(0);
                this.angForm.patchValue({
                    NET_INTAMT: (netInt)
                });
                this.NET_EXC_INTAMT = Number(total_int) - Number(post_int);
                let ledgerAmt = Number(this.angForm.controls['LEDGER_BAL'].value);
                let netAmt = Number(this.angForm.controls['NET_INTAMT'].value);
                let TDSAmt = Number(this.angForm.controls['TDS_AMT'].value);
                let surchargeAmt = Number(this.angForm.controls['SURCHARGE_AMT'].value);
                let penalAmt = Number(this.angForm.controls['PENAL_INT'].value);
                let totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (ledgerAmt + netAmt - TDSAmt - surchargeAmt - penalAmt).toFixed(2) : (ledgerAmt - Math.abs(netAmt) - TDSAmt - surchargeAmt - penalAmt).toFixed(2);
                this.angForm.patchValue({
                    NETPAYABLEAMT: totalNetAmt
                });
                this.getNetPayAmount();
                if (data1.TRAN_TYPE == 'TR') {
                    this.isTransfer = true;
                    this.multigrid = data1.multigrid;
                }
                else {
                    this.isTransfer = false;
                }
                this.transferTotalAmount = Number(data1.NET_PAYABLE_AMOUNT);
                this.angForm.patchValue({
                    TRAN_NO: data1.TRAN_NO,
                    branch_code: data1.BRANCH_CODE,
                    // scheme: Number(data1.TRAN_ACTYPE),
                    // account_no: data1.TRAN_ACNO,
                    date: data1.TRAN_DATE,
                    SAVING_PIGMY: data1.TRAN_TYPE == 'CS' ? 'FormC' : 'FormT',
                    chequeNo: data1.CHEQUE_NO,
                    ChequeDate: data1.CHEQUE_DATE,
                    LEDGER_BAL: Number(data1.LEDGER_BAL).toFixed(2),
                    // Token_Num: data1.TOKEN_NO,
                    PENAL_INT: data1.PENAL_INTEREST_AMOUNT,
                    InterestRate: data1.INTEREST_RATE,
                    maturedIntAmt: data1.AFT_MATURE_INT_AMT,
                    maturedInterest: data1.AFT_MATURE_INT_RATE,
                    POSTED_INT: data1.PAID_INTEREST_AMOUNT,
                    TOTAL_INT: data1.TOTAL_INTEREST_AMOUNT,
                    narration: data1.NARRATION,
                    NET_INTAMT: data1.NET_INTEREST_AMOUNT,
                    NETPAYABLEAMT: data1.NET_PAYABLE_AMOUNT,
                    PAYABLE_INTAMT: Number(data1.PAYABLE_INTEREST_AMOUNT).toFixed(2),
                    TDS_AMT: data1.TDS_AMOUNT,
                    SURCHARGE_AMT: data1.SURCHARGE_AMOUNT,
                    EXCESS_INT: data1.EXCESS_INT != 0 ? this.NET_EXC_INTAMT = data1.EXCESS_INT : this.NET_EXC_INTAMT = 0
                });
                // this.getEditData()
                this.showCustomerDeatils();
            });
        });
    }
    updateData() {
        let formValue = this.angForm.value;
        if (formValue.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLEAMT'].value) != this.transferTotalAmount) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Check Net Payable Amount and Transfer Amount!", "info");
        }
        else if ((formValue.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLEAMT'].value) == this.transferTotalAmount) || formValue.SAVING_PIGMY == 'FormC') {
            let ChequeDate;
            let data = localStorage.getItem('user');
            let result = JSON.parse(data);
            let dataToSend = {
                id: this.updateID,
                TRAN_NO: formValue.TRAN_NO,
                TRAN_DATE: this.date,
                TRAN_TYPE: formValue.SAVING_PIGMY == 'FormT' ? 'TR' : 'CS',
                BRANCH_CODE: this.selectedBranch,
                TRAN_ACNOTYPE: 'TD',
                TRAN_ACTYPE: this.selectedScheme,
                TRAN_ACNO: this.bankacno,
                LEDGER_BAL: formValue.LEDGER_BAL,
                SURCHARGE_AMOUNT: formValue.SURCHARGE_AMT,
                PENAL_INTEREST_AMOUNT: formValue.PENAL_INT,
                NET_INTEREST_AMOUNT: formValue.NET_INTAMT,
                EXCESS_INTEREST: this.NET_EXC_INTAMT >= 0 ? 0 : this.NET_EXC_INTAMT,
                TOTAL_INTEREST_AMOUNT: formValue.TOTAL_INT,
                NET_PAYABLE_AMOUNT: formValue.NETPAYABLEAMT,
                INTEREST_RATE: formValue.InterestRate,
                IS_PREMATURE_CLOSE: this.preMature == true ? 1 : 0,
                NARRATION: formValue.narration,
                // TOKEN_NO: formValue.Token_Num,
                PAYABLE_INTEREST_AMOUNT: formValue.PAYABLE_INTAMT,
                CHEQUE_NO: formValue.chequeNo,
                TDS_AMT: formValue.TDS_AMT,
                USER: result.id,
                PAID_INTEREST_AMOUNT: formValue.POSTED_INT,
                AFT_MATURE_INT_RATE: formValue.maturedInterest,
                AFT_MATURE_INT_AMT: formValue.maturedIntAmt,
                multigrid: this.multigrid
            };
            if (this.updatecheckdata.CHEQUE_DATE != formValue.ChequeDate) {
                (formValue.ChequeDate == 'Invalid date' || formValue.ChequeDate == '' || formValue.ChequeDate == null) ? (ChequeDate = '', formValue['ChequeDate'] = ChequeDate) : (ChequeDate = formValue.ChequeDate, dataToSend['CHEQUE_DATE'] = moment__WEBPACK_IMPORTED_MODULE_4__(ChequeDate).format('DD/MM/YYYY'));
            }
            else {
                dataToSend['CHEQUE_DATE'] = formValue.ChequeDate;
            }
            this._TDService.updateData(dataToSend).subscribe(data => {
                // this.getVoucherData();
                this.angForm.enable();
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', 'Account Close Updated Successfully !', 'success');
                this.multigrid = [];
                this.resetForm();
                var button = document.getElementById('trigger');
                button.click();
            }, err => {
                console.log(err);
            });
        }
    }
    addNewData() {
        this.showButton = true;
        this.angForm.enable();
        this.updateShow = false;
        this.newbtnShow = true;
        this.resetForm();
    }
    //approve account
    Approve() {
        let ChequeDate;
        let formValue = this.angForm.value;
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let dataToSend = {
            id: this.updateID,
            TRAN_NO: formValue.TRAN_NO,
            TRAN_DATE: this.date,
            TRAN_TYPE: formValue.SAVING_PIGMY == 'FormT' ? 'TR' : 'CS',
            BRANCH_CODE: this.selectedBranch,
            TRAN_ACNOTYPE: 'TD',
            TRAN_ACTYPE: this.selectedScheme,
            TRAN_ACNO: this.bankacno,
            LEDGER_BAL: formValue.LEDGER_BAL,
            SURCHARGE_AMOUNT: formValue.SURCHARGE_AMT,
            PENAL_INTEREST_AMOUNT: formValue.PENAL_INT,
            NET_INTEREST_AMOUNT: formValue.NET_INTAMT,
            TOTAL_INTEREST_AMOUNT: formValue.TOTAL_INT,
            NET_PAYABLE_AMOUNT: formValue.NETPAYABLEAMT,
            INTEREST_RATE: formValue.InterestRate,
            IS_PREMATURE_CLOSE: this.preMature == true ? 1 : 0,
            NARRATION: formValue.narration,
            // TOKEN_NO: formValue.Token_Num,
            PAYABLE_INTEREST_AMOUNT: formValue.PAYABLE_INTAMT,
            CHEQUE_NO: formValue.chequeNo,
            TDS_AMT: formValue.TDS_AMT,
            USER: result.USER_NAME,
            PAID_INTEREST_AMOUNT: formValue.POSTED_INT,
            AFT_MATURE_INT_RATE: formValue.maturedInterest,
            AFT_MATURE_INT_AMT: formValue.maturedIntAmt,
            EXCESS_INTEREST: this.NET_EXC_INTAMT >= 0 ? 0 : formValue.EXCESS_INT,
            userID: result.id,
            multigrid: this.multigrid
        };
        if (this.updatecheckdata.CHEQUE_DATE != formValue.ChequeDate) {
            (formValue.ChequeDate == 'Invalid date' || formValue.ChequeDate == '' || formValue.ChequeDate == null) ? (ChequeDate = '', formValue['ChequeDate'] = ChequeDate) : (ChequeDate = formValue.ChequeDate, dataToSend['CHEQUE_DATE'] = moment__WEBPACK_IMPORTED_MODULE_4__(ChequeDate).format('DD/MM/YYYY'));
        }
        else {
            dataToSend['CHEQUE_DATE'] = formValue.ChequeDate;
        }
        this._TDService.approve(dataToSend).subscribe(data => {
            this.angForm.enable();
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Approved', 'Term Deposit Account Closing Approved Successfully', 'success');
            // this.child.reload()
            var button = document.getElementById('trigger');
            button.click();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    //reject account
    reject() {
        let ChequeDate;
        let formValue = this.angForm.value;
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let dataToSend = {
            LEDGER_BAL: formValue.LEDGER_BAL,
            id: this.updateID,
            TRAN_NO: formValue.TRAN_NO,
            TRAN_DATE: this.date,
            TRAN_TYPE: formValue.SAVING_PIGMY == 'FormT' ? 'TR' : 'CS',
            BRANCH_CODE: this.selectedBranch,
            TRAN_ACNOTYPE: 'TD',
            TRAN_ACTYPE: this.selectedScheme,
            TRAN_ACNO: this.bankacno,
            SURCHARGE_AMOUNT: formValue.SURCHARGE_AMT,
            PENAL_INTEREST_AMOUNT: formValue.PENAL_INT,
            NET_INTEREST_AMOUNT: formValue.NET_INTAMT,
            TOTAL_INTEREST_AMOUNT: formValue.TOTAL_INT,
            NET_PAYABLE_AMOUNT: formValue.NETPAYABLEAMT,
            INTEREST_RATE: formValue.InterestRate,
            IS_PREMATURE_CLOSE: this.preMature == true ? 1 : 0,
            NARRATION: formValue.narration,
            // TOKEN_NO: formValue.Token_Num,
            PAYABLE_INTEREST_AMOUNT: formValue.PAYABLE_INTAMT,
            CHEQUE_NO: formValue.chequeNo,
            TDS_AMT: formValue.TDS_AMT,
            USER: result.USER_NAME,
            PAID_INTEREST_AMOUNT: formValue.POSTED_INT,
            AFT_MATURE_INT_RATE: formValue.maturedInterest,
            AFT_MATURE_INT_AMT: formValue.maturedIntAmt,
            userID: result.id
        };
        if (this.updatecheckdata.CHEQUE_DATE != formValue.ChequeDate) {
            (formValue.ChequeDate == 'Invalid date' || formValue.ChequeDate == '' || formValue.ChequeDate == null) ? (ChequeDate = '', formValue['ChequeDate'] = ChequeDate) : (ChequeDate = formValue.ChequeDate, dataToSend['CHEQUE_DATE'] = moment__WEBPACK_IMPORTED_MODULE_4__(ChequeDate).format('DD/MM/YYYY'));
        }
        else {
            dataToSend['CHEQUE_DATE'] = formValue.ChequeDate;
        }
        this._TDService.reject(dataToSend).subscribe(data => {
            this.angForm.enable();
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Rejected', 'Term Deposit Account Closing Rejected Successfully', 'success');
            // this.child.reload()
            var button = document.getElementById('trigger');
            button.click();
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
            LOG_DATE: this.logDate
        };
        this._TDService.unapprove(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Unapproved', 'Account unapproved successfully', 'success');
            this.angForm.enable();
            var button = document.getElementById('trigger');
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
    getDecimalPoint(event) {
        if (event.target.value != '')
            event.target.value = parseFloat(event.target.value).toFixed(2);
    }
    getDecimal(event) {
        var t = event.target.value;
        event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    }
    selectAllContent($event) {
        $event.target.select();
    }
    onFocus(ele) {
        ele.open();
    }
    onOpen(select) {
        //debugger
        select.open();
    }
    onClose(select) {
        select.close();
    }
    closeModal() {
        var button = document.getElementById('trigger');
        button.click();
        this.reloadTablePassing.emit();
    }
    getBranch() {
        this.introducerACNo = null;
        this.customer = null;
        this.getIntroducer();
    }
    ResetForm() {
        this.ngOnInit();
        this.resetForm();
        this.DayOpBal = 0;
        this.Pass = 0;
        this.INTRATE = 0;
        this.lastIntDate = '';
        this.opDate = '';
        this.asOnDate = '';
        this.maturityDate = '';
        this.maturityDate1 = '';
        this.recNo = 0;
        this.operator = '';
        this.months = 0;
        this.days = 0;
        this.interestCategory = '';
        this.preMature = false;
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = true;
    }
}
TermDepositAccountClosingComponent.ɵfac = function TermDepositAccountClosingComponent_Factory(t) { return new (t || TermDepositAccountClosingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__["TransactionCashModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__["TransactionTransferModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__["SchemeTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_10__["MultiVoucherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_11__["SavingMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_term_deposit_account_closing_service__WEBPACK_IMPORTED_MODULE_15__["TermDepositAccountClosingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_16__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_18__["SystemMasterParametersService"])); };
TermDepositAccountClosingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermDepositAccountClosingComponent, selectors: [["app-term-deposit-account-closing"]], viewQuery: function TermDepositAccountClosingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerhide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerNarrationhide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.narrationField = _t.first);
    } }, inputs: { childMessage: "childMessage" }, outputs: { reloadTablePassing: "reloadTablePassing" }, decls: 411, vars: 61, consts: [["style", "width: 270px;height: 335px;z-index: 1000;\n    position: absolute;margin-top: 14%;margin-left:51%", 4, "ngIf"], ["novalidate", "", 3, "formGroup"], [1, "row"], [1, "col-md-9"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [1, "card-body"], [1, "solid"], [1, "col-sm-12", "col-md-2"], ["for", "AC_BRANCH"], [1, "col-sm-12", "col-md-4"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["formControlName", "branch_code", "autofocus", "", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "focus", "change"], ["branchcode", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["for", "AC_EXPDT"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "date", "disabled", "", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelChange"], ["for", "scheme"], ["bindValue", "value", "appTheme", "", "formControlName", "scheme", 3, "ngModel", "selectOnTab", "ngModelChange", "focus", "change"], ["selectcode", ""], [1, "col-sm-6"], ["bindValue", "bankacno", "appTheme", "", "formControlName", "account_no", 3, "ngModel", "selectOnTab", "ngModelChange", "focus", "change"], ["accountNumber", ""], [1, "col-sm"], ["style", "color: rgb(7, 144, 7);", 4, "ngIf"], ["style", "color: rgb(194, 55, 55);", 4, "ngIf"], [1, "col-md-6", "solid1"], [1, "col-md-4"], [1, "col-md-3"], ["type", "text", "maxlength", "12", "pattern", "\\d{1,20}(\\.\\d{1,2})?", "formControlName", "InterestRate", "disabled", "", 1, "form-control", 2, "text-align", "righ t", 3, "keypress"], ["class", "row", 4, "ngIf"], ["class", " row", 4, "ngIf"], [1, "col-md-6"], ["type", "text", "maxlength", "15", "formControlName", "TOTAL_INT", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keypress"], ["type", "text", "maxlength", "15", "formControlName", "NET_INTAMT", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout", "keypress"], ["for", "narration"], [1, "col-md"], ["formControlName", "narration", 1, "form-control", 3, "ngModel", "ngModelChange"], ["narrationField", ""], [1, "fa", "fa-info-circle", "errspan", 3, "click"], ["type", "text", "maxlength", "15", "formControlName", "LEDGER_BAL", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout", "keypress"], ["style", "font-weight: 800; font-size: 16px;", 4, "ngIf"], ["type", "text", "maxlength", "15", "formControlName", "PAYABLE_INTAMT", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout", "keypress"], ["type", "text", "maxlength", "15", "disabled", "", "formControlName", "NET_INTAMT", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout", "change", "keypress"], [2, "font-weight", "800", "font-size", "16px"], ["type", "text", "maxlength", "15", "formControlName", "TDS_AMT", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout", "change", "keypress"], ["type", "text", "maxlength", "15", "formControlName", "SURCHARGE_AMT", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout", "change", "keypress"], ["type", "text", "maxlength", "15", "formControlName", "PENAL_INT", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout", "change", "keypress"], ["type", "text", "maxlength", "15", "disabled", "", "formControlName", "NETPAYABLEAMT", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout", "keypress"], [1, "form-radio"], [1, "radio", "radio-inline"], [1, "inputRadio"], ["type", "radio", "formControlName", "SAVING_PIGMY", "name", "SAVING_PIGMY", "value", "FormC", "id", "formT", 3, "change"], [1, "helper"], ["type", "radio", "value", "FormT", "formControlName", "SAVING_PIGMY", "id", "formC", "name", "SAVING_PIGMY", 3, "change"], ["class", "row", "id", "FORMA", 4, "ngIf"], [1, "col-sm", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm btn-submit", "appTheme", "", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [1, "col-md-3", "col-sm-12", "col-xm-12"], [1, "transaction-item"], [1, "avatar", "bg-light-primary", "rounded", "float-start"], [1, "avatar-content"], [1, "fa", "fa-google-wallet", "field-icon"], [1, "d-flex"], [1, "transaction-percentage"], [1, "transaction-title", 2, "font-size", "12px"], [1, "fw-bolder", "transaction-title", "text-primary", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], ["aria-hidden", "true", 1, "fa", "fa-inr"], [1, "avatar", "bg-light-success", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "avatar", "bg-light-info", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-danger", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "user-avatar-section"], ["height", "50", "width", "80", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], ["height", "25", "width", "80", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], [1, "user-info", "text-center"], [1, "info-container"], [1, "list-unstyled"], [1, "mb-75"], [1, "fw-bolder", "me-25"], [1, "badge", "bg-light-success"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [1, "table", "table-bordered"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 2, "display", "none", 3, "click"], ["triggerhide", ""], ["modalNarration", ""], ["triggerNarrationhide", ""], [2, "width", "270px", "height", "335px", "z-index", "1000", "position", "absolute", "margin-top", "14%", "margin-left", "51%"], ["width", "400", "height", "300", 3, "src"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], [2, "color", "rgb(7, 144, 7)"], [2, "color", "rgb(194, 55, 55)"], ["type", "text", "maxlength", "6", "pattern", "^[0-9]+$", "formControlName", "MaturedDays", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "focus", "keypress"], ["colspan", "2"], ["formControlName", "ClosingQuaters", "type", "text", "disabled", "", 2, "width", "50%", "text-align", "right"], ["type", "text", "maxlength", "12", "formControlName", "QInterest", "disabled", "", 2, "text-align", "right"], ["type", "text", "formControlName", "ClosingMonth", "disabled", "", 2, "width", "50%", "text-align", "right"], ["type", "text", "maxlength", "12", "formControlName", "MInterest", "disabled", "", 2, "text-align", "right"], ["type", "text", "formControlName", "ClosingDays", "disabled", "", 2, "width", "50%", "text-align", "right"], ["type", "text", "maxlength", "12", "formControlName", "DInterest", "disabled", "", 2, "text-align", "right"], ["maxlength", "5", "formControlName", "maturedInterest", "type", "text", 1, "form-control", 2, "width", "50%", "text-align", "right", 3, "change", "focus", "keypress"], ["disabled", "", "maxlength", "12", "formControlName", "maturedIntAmt", "type", "text", 1, "form-control", 2, "width", "50%", "text-align", "right", 3, "focus", "keypress"], ["type", "text", "maxlength", "15", "formControlName", "POSTED_INT", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout", "keypress"], ["id", "FORMA", 1, "row"], [1, "col-sm-12"], ["for", "chequeNo"], [1, "col-md-2"], ["type", "text", "name", "chequeNo", "placeholder", " ", "id", "chequeNo", "value", "", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "formControlName", "chequeNo", "maxlength", "10", 1, "form-control", 2, "text-transform", "capitalize", 3, "keypress"], ["for", "ChequeDate"], ["type", "text", "placeholder", "dd/mm/yyyy", "placement", "top", "appButton", "", "minlength", "10", "maxlength", "10", "bsDatepicker", "", "formControlName", "ChequeDate", 1, "form-control", 3, "maxDate", "minDate", "bsConfig", "keydown.Tab"], ["ChequeDate", "bsDatepicker"], ["formControlName", "Tscheme", "bindValue", "value", "bindLabel", "label", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "change", "focus"], ["tscheme", ""], ["for", "TschemeAC"], [1, "col-sm-12", "col-md-5"], ["id", "TschemeAC", "formControlName", "TschemeAC", "bindLabel", "label", "bindValue", "bankacno", "title", "Compulsory Selection", "placeholder", "Account Number", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "change", "focus"], ["taccNumber", ""], ["for", "AC_PARTICULAR"], ["formControlName", "particulars", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "amount"], ["type", "text", "name", "amount", "id", "amount", "formControlName", "amount", "appTheme", "", "maxlength", "12", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout", "keypress"], ["type", "button", "class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "compact"], [2, "text-align", "right"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], [3, "ngClass"], ["id", "editbutton", "placement", "top", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], ["colspan", "4", 2, "text-align", "right"], ["type", "submit", "appTheme", "", 1, "btn", "btn-outline-primary", "btn-sm", "btn-submit", 3, "click"], [3, "click"]], template: function TermDepositAccountClosingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TermDepositAccountClosingComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Deposit Account Closing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "sub", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Branch Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "sub", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ng-select", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_Template_ng_select_ngModelChange_26_listener($event) { return ctx.selectedBranch = $event; })("focus", function TermDepositAccountClosingComponent_Template_ng_select_focus_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return ctx.onFocus(_r1); })("change", function TermDepositAccountClosingComponent_Template_ng_select_change_26_listener() { return ctx.getBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TermDepositAccountClosingComponent_ng_option_28_Template, 2, 2, "ng-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TermDepositAccountClosingComponent_div_29_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_Template_input_ngModelChange_36_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "sub", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ng-select", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_Template_ng_select_ngModelChange_46_listener($event) { return ctx.selectedScheme = $event; })("focus", function TermDepositAccountClosingComponent_Template_ng_select_focus_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return ctx.onFocus(_r4); })("change", function TermDepositAccountClosingComponent_Template_ng_select_change_46_listener($event) { return ctx.schemechange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TermDepositAccountClosingComponent_ng_option_48_Template, 2, 3, "ng-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TermDepositAccountClosingComponent_div_49_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "sub", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ng-select", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_Template_ng_select_ngModelChange_59_listener($event) { return ctx.customer = $event; })("focus", function TermDepositAccountClosingComponent_Template_ng_select_focus_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60); return ctx.onFocus(_r7); })("change", function TermDepositAccountClosingComponent_Template_ng_select_change_59_listener($event) { return ctx.getAccountDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, TermDepositAccountClosingComponent_ng_option_61_Template, 2, 3, "ng-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, TermDepositAccountClosingComponent_div_62_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, TermDepositAccountClosingComponent_label_64_Template, 2, 0, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, TermDepositAccountClosingComponent_label_65_Template, 2, 0, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Interest Rate(%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function TermDepositAccountClosingComponent_Template_input_keypress_75_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, TermDepositAccountClosingComponent_div_76_Template, 8, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, TermDepositAccountClosingComponent_div_77_Template, 29, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, TermDepositAccountClosingComponent_div_78_Template, 16, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TermDepositAccountClosingComponent_Template_input_change_87_listener() { return ctx.getNetInterest(); })("focus", function TermDepositAccountClosingComponent_Template_input_focus_87_listener($event) { return ctx.selectAllContent($event); })("keypress", function TermDepositAccountClosingComponent_Template_input_keypress_87_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, TermDepositAccountClosingComponent_div_88_Template, 8, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Net/Excess Interest Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TermDepositAccountClosingComponent_Template_input_change_99_listener() { return ctx.getNetPayAmount(); })("focus", function TermDepositAccountClosingComponent_Template_input_focus_99_listener($event) { return ctx.selectAllContent($event); })("keyup", function TermDepositAccountClosingComponent_Template_input_keyup_99_listener($event) { return ctx.getDecimal($event); })("focusout", function TermDepositAccountClosingComponent_Template_input_focusout_99_listener($event) { return ctx.getDecimalPoint($event); })("keypress", function TermDepositAccountClosingComponent_Template_input_keypress_99_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Narration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "textarea", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_Template_textarea_ngModelChange_107_listener($event) { return ctx.narration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_Template_i_click_109_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](390); return _r30.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Ledger Balance Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TermDepositAccountClosingComponent_Template_input_change_118_listener() { return ctx.getNetPayAmount(); })("focus", function TermDepositAccountClosingComponent_Template_input_focus_118_listener($event) { return ctx.selectAllContent($event); })("keyup", function TermDepositAccountClosingComponent_Template_input_keyup_118_listener($event) { return ctx.getDecimal($event); })("focusout", function TermDepositAccountClosingComponent_Template_input_focusout_118_listener($event) { return ctx.getDecimalPoint($event); })("keypress", function TermDepositAccountClosingComponent_Template_input_keypress_118_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, TermDepositAccountClosingComponent_span_122_Template, 2, 0, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Payable Interest Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TermDepositAccountClosingComponent_Template_input_change_127_listener() { return ctx.getNetPayAmount(); })("focus", function TermDepositAccountClosingComponent_Template_input_focus_127_listener($event) { return ctx.selectAllContent($event); })("keyup", function TermDepositAccountClosingComponent_Template_input_keyup_127_listener($event) { return ctx.getDecimal($event); })("focusout", function TermDepositAccountClosingComponent_Template_input_focusout_127_listener($event) { return ctx.getDecimalPoint($event); })("keypress", function TermDepositAccountClosingComponent_Template_input_keypress_127_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, TermDepositAccountClosingComponent_span_131_Template, 2, 0, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, TermDepositAccountClosingComponent_span_132_Template, 2, 0, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Net Interest/Excess Interest Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TermDepositAccountClosingComponent_Template_input_focus_137_listener($event) { return ctx.selectAllContent($event); })("keyup", function TermDepositAccountClosingComponent_Template_input_keyup_137_listener($event) { return ctx.getDecimal($event); })("focusout", function TermDepositAccountClosingComponent_Template_input_focusout_137_listener($event) { return ctx.getDecimalPoint($event); })("change", function TermDepositAccountClosingComponent_Template_input_change_137_listener() { return ctx.getNetPayAmount(); })("keypress", function TermDepositAccountClosingComponent_Template_input_keypress_137_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " TDS Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TermDepositAccountClosingComponent_Template_input_focus_147_listener($event) { return ctx.selectAllContent($event); })("keyup", function TermDepositAccountClosingComponent_Template_input_keyup_147_listener($event) { return ctx.getDecimal($event); })("focusout", function TermDepositAccountClosingComponent_Template_input_focusout_147_listener($event) { return ctx.getDecimalPoint($event); })("change", function TermDepositAccountClosingComponent_Template_input_change_147_listener() { return ctx.getNetPayAmount(); })("keypress", function TermDepositAccountClosingComponent_Template_input_keypress_147_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Surcharge Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TermDepositAccountClosingComponent_Template_input_focus_157_listener($event) { return ctx.selectAllContent($event); })("keyup", function TermDepositAccountClosingComponent_Template_input_keyup_157_listener($event) { return ctx.getDecimal($event); })("focusout", function TermDepositAccountClosingComponent_Template_input_focusout_157_listener($event) { return ctx.getDecimalPoint($event); })("change", function TermDepositAccountClosingComponent_Template_input_change_157_listener() { return ctx.getNetPayAmount(); })("keypress", function TermDepositAccountClosingComponent_Template_input_keypress_157_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Penal Interest Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TermDepositAccountClosingComponent_Template_input_focus_167_listener($event) { return ctx.selectAllContent($event); })("keyup", function TermDepositAccountClosingComponent_Template_input_keyup_167_listener($event) { return ctx.getDecimal($event); })("focusout", function TermDepositAccountClosingComponent_Template_input_focusout_167_listener($event) { return ctx.getDecimalPoint($event); })("change", function TermDepositAccountClosingComponent_Template_input_change_167_listener() { return ctx.getNetPayAmount(); })("keypress", function TermDepositAccountClosingComponent_Template_input_keypress_167_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Net Payable Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TermDepositAccountClosingComponent_Template_input_focus_178_listener($event) { return ctx.selectAllContent($event); })("keyup", function TermDepositAccountClosingComponent_Template_input_keyup_178_listener($event) { return ctx.getDecimal($event); })("focusout", function TermDepositAccountClosingComponent_Template_input_focusout_178_listener($event) { return ctx.getDecimalPoint($event); })("keypress", function TermDepositAccountClosingComponent_Template_input_keypress_178_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Payment Details:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TermDepositAccountClosingComponent_Template_input_change_188_listener() { return ctx.isFormA(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TermDepositAccountClosingComponent_Template_input_change_193_listener() { return ctx.isFormA(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Transfer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](196, TermDepositAccountClosingComponent_div_196_Template, 83, 18, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](199, TermDepositAccountClosingComponent_button_199_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](200, TermDepositAccountClosingComponent_button_200_Template, 2, 0, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](201, TermDepositAccountClosingComponent_button_201_Template, 2, 0, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, TermDepositAccountClosingComponent_button_203_Template, 2, 0, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](205, TermDepositAccountClosingComponent_button_205_Template, 2, 0, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](206, TermDepositAccountClosingComponent_button_206_Template, 2, 0, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Deposit Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Maturity Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Int Rate% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Last Int. Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Opening Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "As On Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Maturity Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Receipt No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Operation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function TermDepositAccountClosingComponent_Template_img_mouseover_344_listener() { return ctx.showImage(ctx.customerImg); })("mouseout", function TermDepositAccountClosingComponent_Template_img_mouseout_344_listener() { return ctx.hideImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function TermDepositAccountClosingComponent_Template_img_mouseover_347_listener() { return ctx.showImage(ctx.signture); })("mouseout", function TermDepositAccountClosingComponent_Template_img_mouseout_347_listener() { return ctx.hideImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "ul", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "li", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "li", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "PAN ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "li", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Contact:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "app-modal-basic", 88, 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "h4", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Narration Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_Template_button_click_373_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](369); return _r27.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "perfect-scrollbar", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "table", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Paticulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](385, TermDepositAccountClosingComponent_tr_385_Template, 2, 1, "tr", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "button", 98, 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_Template_button_click_386_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](369); return _r27.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "app-modal-basic", 88, 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "h4", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Narration Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_Template_button_click_394_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](390); return _r30.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "perfect-scrollbar", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "table", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Paticulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](406, TermDepositAccountClosingComponent_tr_406_Template, 2, 1, "tr", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "button", 98, 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_Template_button_click_407_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](390); return _r30.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PreviewDiv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedBranch)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["branch_code"].invalid && (ctx.angForm.controls["branch_code"].dirty || ctx.angForm.controls["branch_code"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](60, _c3))("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedScheme)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["scheme"].invalid && (ctx.angForm.controls["scheme"].dirty || ctx.angForm.controls["scheme"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.introducerACNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["account_no"].invalid && (ctx.angForm.controls["account_no"].dirty || ctx.angForm.controls["account_no"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.preMature && ctx.customer != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preMature && ctx.customer != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.preMature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preMature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.afterMaturedInt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Interest Amount @ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](83, 57, ctx.intRateShow, "1.2-2"), " %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preMature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.narration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.preMature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.NET_EXC_INTAMT >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.NET_EXC_INTAMT < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTransfer);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.DayOpBal, ".00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Pass, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.INTRATE, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.lastIntDate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.opDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.asOnDate == null ? "---" : ctx.asOnDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.maturityDate1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.operator, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.days);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.customerImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.signture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Customer_info == null ? null : ctx.Customer_info.AC_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Status == true || ctx.Status == 1 ? "Inactive" : "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Customer_info == null ? null : ctx.Customer_info.AC_PANNO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Customer_info == null ? null : ctx.Customer_info.AC_MOBILENO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.narrationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.narrationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.modalClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _theme_directive__WEBPACK_IMPORTED_MODULE_21__["ThemeDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_23__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["ɵr"], _button_directive__WEBPACK_IMPORTED_MODULE_25__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DecimalPipe"]], styles: [".table-responsive[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  overflow-x: auto;\n  padding-top: -46px;\n  margin: -8px;\n  margin-right: -28px;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 20px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n}\n\ndiv.solid1[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: thin;\n  padding: 1%;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.transaction-item[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.bg-light-primary[_ngcontent-%COMP%] {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367F0 !important;\n}\n\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.357rem !important;\n}\n\n.float-start[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin-right: 1.2rem;\n}\n\n.avatar.bg-light-primary[_ngcontent-%COMP%] {\n  color: #7367F0 !important;\n}\n\n.avatar.bg-light-success[_ngcontent-%COMP%] {\n  color: #28C76F !important;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background-color: #C3C3C3;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n  color: #FFF;\n  display: inline-flex;\n  font-size: 1rem;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 600;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n}\n\n.avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 0.857rem;\n}\n\n.bg-light-success[_ngcontent-%COMP%] {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28C76F !important;\n}\n\n.bg-light-danger[_ngcontent-%COMP%] {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #EA5455 !important;\n}\n\n.transaction-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.errspan[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 21px;\n  margin-top: -20px;\n  position: relative;\n  z-index: 2;\n  color: red;\n}\n\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: white !important;\n  color: black !important;\n}\n\n.main-body[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  padding-bottom: 4% !important;\n  transition: all ease-in 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #ff5252;\n  color: #ff5252;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 11px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 14px;\n  border-radius: 5px;\n  padding-bottom: 22px;\n  padding-top: 4px;\n  height: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 14px;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px;\n  max-height: 18px;\n  align-items: center;\n  font-size: 11px;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 18px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 5px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-bottom: 0px;\n  padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vdGVybS1kZXBvc2l0LWFjY291bnQtY2xvc2luZy90ZXJtLWRlcG9zaXQtYWNjb3VudC1jbG9zaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUlBLG1CQUFBO0VBSUEsOEJBQUE7QUFDRjs7QUFFQTtFQUVFLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnREFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQ0FBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFHQTtFQUNFLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFJQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUlBLGFBQUE7RUFJQSx1QkFBQTtFQUlBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsOENBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBSUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGtDQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUVFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RyYW5zYWN0aW9uL3Rlcm0tZGVwb3NpdC1hY2NvdW50LWNsb3NpbmcvdGVybS1kZXBvc2l0LWFjY291bnQtY2xvc2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogLTQ2cHg7XHJcbiAgbWFyZ2luOiAtOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTI4cHg7XHJcbn1cclxuXHJcbi5yZXF1aXJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luOiAzcHg7XHJcbn1cclxuXHJcbmRpdi5zb2xpZCB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nOiAyJVxyXG59XHJcblxyXG5kaXYuc29saWQxIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBwYWRkaW5nOiAxJVxyXG59XHJcblxyXG4uY2FyZC10cmFuc2FjdGlvbiAudHJhbnNhY3Rpb24taXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZC1mbGV4IHtcclxuXHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctbGlnaHQtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMTUsIDEwMywgMjQwLCAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM3MzY3RjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdW5kZWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzU3cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbG9hdC1zdGFydCB7XHJcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtdHJhbnNhY3Rpb24gLnRyYW5zYWN0aW9uLWl0ZW0gLmF2YXRhciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XHJcbn1cclxuXHJcbi5hdmF0YXIuYmctbGlnaHQtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICM3MzY3RjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF2YXRhci5iZy1saWdodC1zdWNjZXNzIHtcclxuICBjb2xvcjogIzI4Qzc2RiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDM0MzQzM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY2FyZC10cmFuc2FjdGlvbiAudHJhbnNhY3Rpb24taXRlbSAuYXZhdGFyIC5hdmF0YXItY29udGVudCB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG59XHJcblxyXG4uYXZhdGFyIC5hdmF0YXItY29udGVudCB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogLjg1N3JlbTtcclxufVxyXG5cclxuLmJnLWxpZ2h0LXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE5OSwgMTExLCAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMyOEM3NkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWxpZ2h0LWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDg0LCA4NSwgLjEyKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjRUE1NDU1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG59XHJcblxyXG4uZXJyc3BhbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMjFweDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpbi1ib2R5IC5wYWdlLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNCUgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjNzO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmNTI1MjtcclxuICBjb2xvcjogI2ZmNTI1MjtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgLy8gZmxvYXQ6IGxlZnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMnB4O1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtaW4taGVpZ2h0OiAxOHB4O1xyXG4gIG1heC1oZWlnaHQ6IDE4cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCAuYm9yZGVyLWxhYmxlLWZsdCAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIGhlaWdodDogMjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHBhZGRpbmc6IDByZW0gMC43cmVtO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1ibG9jayB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMzVweDtcclxufVxyXG5cclxuLmNvbC0xLFxyXG4uY29sLTIsXHJcbi5jb2wtMyxcclxuLmNvbC00LFxyXG4uY29sLTUsXHJcbi5jb2wtNixcclxuLmNvbC03LFxyXG4uY29sLTgsXHJcbi5jb2wtOSxcclxuLmNvbC0xMCxcclxuLmNvbC0xMSxcclxuLmNvbC0xMixcclxuLmNvbCxcclxuLmNvbC1hdXRvLFxyXG4uY29sLXNtLTEsXHJcbi5jb2wtc20tMixcclxuLmNvbC1zbS0zLFxyXG4uY29sLXNtLTQsXHJcbi5jb2wtc20tNSxcclxuLmNvbC1zbS02LFxyXG4uY29sLXNtLTcsXHJcbi5jb2wtc20tOCxcclxuLmNvbC1zbS05LFxyXG4uY29sLXNtLTEwLFxyXG4uY29sLXNtLTExLFxyXG4uY29sLXNtLTEyLFxyXG4uY29sLXNtLFxyXG4uY29sLXNtLWF1dG8sXHJcbi5jb2wtbWQtMSxcclxuLmNvbC1tZC0yLFxyXG4uY29sLW1kLTMsXHJcbi5jb2wtbWQtNCxcclxuLmNvbC1tZC01LFxyXG4uY29sLW1kLTYsXHJcbi5jb2wtbWQtNyxcclxuLmNvbC1tZC04LFxyXG4uY29sLW1kLTksXHJcbi5jb2wtbWQtMTAsXHJcbi5jb2wtbWQtMTEsXHJcbi5jb2wtbWQtMTIsXHJcbi5jb2wtbWQsXHJcbi5jb2wtbWQtYXV0byxcclxuLmNvbC1sZy0xLFxyXG4uY29sLWxnLTIsXHJcbi5jb2wtbGctMyxcclxuLmNvbC1sZy00LFxyXG4uY29sLWxnLTUsXHJcbi5jb2wtbGctNixcclxuLmNvbC1sZy03LFxyXG4uY29sLWxnLTgsXHJcbi5jb2wtbGctOSxcclxuLmNvbC1sZy0xMCxcclxuLmNvbC1sZy0xMSxcclxuLmNvbC1sZy0xMixcclxuLmNvbC1sZyxcclxuLmNvbC1sZy1hdXRvLFxyXG4uY29sLXhsLTEsXHJcbi5jb2wteGwtMixcclxuLmNvbC14bC0zLFxyXG4uY29sLXhsLTQsXHJcbi5jb2wteGwtNSxcclxuLmNvbC14bC02LFxyXG4uY29sLXhsLTcsXHJcbi5jb2wteGwtOCxcclxuLmNvbC14bC05LFxyXG4uY29sLXhsLTEwLFxyXG4uY29sLXhsLTExLFxyXG4uY29sLXhsLTEyLFxyXG4uY29sLXhsLFxyXG4uY29sLXhsLWF1dG8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositAccountClosingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-term-deposit-account-closing',
                templateUrl: './term-deposit-account-closing.component.html',
                styleUrls: ['./term-deposit-account-closing.component.scss']
            }]
    }], function () { return [{ type: _shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__["TransactionCashModeService"] }, { type: _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__["TransactionTransferModeService"] }, { type: _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__["SchemeTypeService"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["OwnbranchMasterService"] }, { type: _multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_10__["MultiVoucherService"] }, { type: _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_11__["SavingMasterService"] }, { type: _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__["SchemeAccountNoService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"] }, { type: _term_deposit_account_closing_service__WEBPACK_IMPORTED_MODULE_15__["TermDepositAccountClosingService"] }, { type: _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_16__["CustomerIdService"] }, { type: src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["SchemeCodeDropdownService"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_18__["SystemMasterParametersService"] }]; }, { reloadTablePassing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], childMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], triggerhide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }], triggerNarrationhide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerNarrationhide']
        }], narrationField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['narrationField']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TermDepositAccountClosingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositAccountClosingModule", function() { return TermDepositAccountClosingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _term_deposit_account_closing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./term-deposit-account-closing.component */ "./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.component.ts");
/* harmony import */ var _term_deposit_account_closing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./term-deposit-account-closing-routing.module */ "./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/elements/scheme-code.service */ "./src/app/shared/elements/scheme-code.service.ts");
/* harmony import */ var _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/elements/acountno.service */ "./src/app/shared/elements/acountno.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../multi-voucher/multi-voucher.service */ "./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var src_app_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/elements/transaction-cash-mode.service */ "./src/app/shared/elements/transaction-cash-mode.service.ts");
/* harmony import */ var src_app_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/elements/transaction-transfer-mode.service */ "./src/app/shared/elements/transaction-transfer-mode.service.ts");
/* harmony import */ var src_app_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/elements/scheme-type.service */ "./src/app/shared/elements/scheme-type.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../master/customer/saving-master/saving-master.service */ "./src/app/theme/master/customer/saving-master/saving-master.service.ts");
/* harmony import */ var _term_deposit_account_closing_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./term-deposit-account-closing.service */ "./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../master/customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../theme.module */ "./src/app/theme/theme.module.ts");
























// import { DepositClosingVoucherComponent} from '../../passing/centralised-passing/deposit-closing-voucher/deposit-closing-voucher.component';



class TermDepositAccountClosingModule {
}
TermDepositAccountClosingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermDepositAccountClosingModule });
TermDepositAccountClosingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermDepositAccountClosingModule_Factory(t) { return new (t || TermDepositAccountClosingModule)(); }, providers: [_shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeService"], _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_9__["AcountnoService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
            multi: true
        }, _term_deposit_account_closing_service__WEBPACK_IMPORTED_MODULE_21__["TermDepositAccountClosingService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__["SystemMasterParametersService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OwnbranchMasterService"], _multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_14__["MultiVoucherService"],
        _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_23__["CustomerIdService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_15__["SchemeAccountNoService"], src_app_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_16__["TransactionCashModeService"], src_app_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_17__["TransactionTransferModeService"],
        src_app_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_18__["SchemeTypeService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["SchemeCodeDropdownService"], _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_20__["SavingMasterService"],], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _term_deposit_account_closing_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermDepositAccountClosingRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["DatepickerModule"].forRoot(),
            _theme_module__WEBPACK_IMPORTED_MODULE_24__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermDepositAccountClosingModule, { declarations: [_term_deposit_account_closing_component__WEBPACK_IMPORTED_MODULE_2__["TermDepositAccountClosingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _term_deposit_account_closing_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermDepositAccountClosingRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["DatepickerModule"], _theme_module__WEBPACK_IMPORTED_MODULE_24__["ThemeModule"]], exports: [_term_deposit_account_closing_component__WEBPACK_IMPORTED_MODULE_2__["TermDepositAccountClosingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositAccountClosingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _term_deposit_account_closing_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermDepositAccountClosingRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["DatepickerModule"].forRoot(),
                    _theme_module__WEBPACK_IMPORTED_MODULE_24__["ThemeModule"]
                ],
                declarations: [_term_deposit_account_closing_component__WEBPACK_IMPORTED_MODULE_2__["TermDepositAccountClosingComponent"]],
                exports: [_term_deposit_account_closing_component__WEBPACK_IMPORTED_MODULE_2__["TermDepositAccountClosingComponent"]],
                providers: [_shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeService"], _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_9__["AcountnoService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
                        multi: true
                    }, _term_deposit_account_closing_service__WEBPACK_IMPORTED_MODULE_21__["TermDepositAccountClosingService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__["SystemMasterParametersService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OwnbranchMasterService"], _multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_14__["MultiVoucherService"],
                    _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_23__["CustomerIdService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_15__["SchemeAccountNoService"], src_app_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_16__["TransactionCashModeService"], src_app_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_17__["TransactionTransferModeService"],
                    src_app_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_18__["SchemeTypeService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["SchemeCodeDropdownService"], _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_20__["SavingMasterService"],]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.service.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.service.ts ***!
  \********************************************************************************************************/
/*! exports provided: TermDepositAccountClosingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositAccountClosingService", function() { return TermDepositAccountClosingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class TermDepositAccountClosingService {
    constructor(http) {
        this.http = http;
        // API
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + "/term-deposit-account-closing/insert", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Please Input Proper Data !");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http
            .get(this.url + "/term-deposit-account-closing/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + "/term-deposit-account-closing/updateTermDepositClosing", data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http
            .delete(this.url + "/term-deposit-account-closing/delete/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //approve master
    approve(data) {
        return this.http.post(this.url + '/term-deposit-account-closing/approve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //unapprove master
    unapprove(data) {
        return this.http.post(this.url + '/term-deposit-account-closing/unapprove', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //reject master
    reject(data) {
        return this.http.post(this.url + '/term-deposit-account-closing/reject', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
TermDepositAccountClosingService.ɵfac = function TermDepositAccountClosingService_Factory(t) { return new (t || TermDepositAccountClosingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
TermDepositAccountClosingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TermDepositAccountClosingService, factory: TermDepositAccountClosingService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositAccountClosingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~db13f0ff.js.map