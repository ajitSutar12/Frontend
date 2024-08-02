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

/***/ "./src/app/theme/master/policy-settings/definations/term-deposit-ir/term-deposit-ir.service.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/theme/master/policy-settings/definations/term-deposit-ir/term-deposit-ir.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TermDepositInterestRateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositInterestRateService", function() { return TermDepositInterestRateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class TermDepositInterestRateService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/interest-rate-for-term-deposit/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/interest-rate-for-term-deposit/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/interest-rate-for-term-deposit/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/interest-rate-for-term-deposit/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
TermDepositInterestRateService.ɵfac = function TermDepositInterestRateService_Factory(t) { return new (t || TermDepositInterestRateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
TermDepositInterestRateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TermDepositInterestRateService, factory: TermDepositInterestRateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositInterestRateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _master_policy_settings_definations_term_deposit_ir_term_deposit_ir_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../master/policy-settings/definations/term-deposit-ir/term-deposit-ir.service */ "./src/app/theme/master/policy-settings/definations/term-deposit-ir/term-deposit-ir.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _term_deposit_account_closing_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./term-deposit-account-closing.service */ "./src/app/theme/transaction/term-deposit-account-closing/term-deposit-account-closing.service.ts");
/* harmony import */ var _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../master/customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _voucher_entry_voucher_entry_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../voucher-entry/voucher-entry.service */ "./src/app/theme/transaction/voucher-entry/voucher-entry.service.ts");
/* harmony import */ var src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../button.directive */ "./src/app/theme/button.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
































const _c0 = ["triggerhide"];
const _c1 = ["triggerNarrationhide"];
const _c2 = ["narrationField"];
const _c3 = ["INTAMT"];
const _c4 = ["NOTINTAMT"];
const _c5 = ["submitbtn"];
const _c6 = ["swiper"];
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
const _c7 = function (a0) { return { "movable-text": a0 }; };
function TermDepositAccountClosingComponent_ng_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c7, ctx_r5.isOptionTooLong(item_r35)));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c7, ctx_r8.isOptionTooLong(item_r37)));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Matured Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_label_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 109);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 110);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 111);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 117);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "After Matured Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Interest Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TermDepositAccountClosingComponent_div_78_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.getMaturedIntRate(); })("focus", function TermDepositAccountClosingComponent_div_78_Template_input_focus_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.selectAllContent($event); })("keypress", function TermDepositAccountClosingComponent_div_78_Template_input_keypress_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Interest Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 119);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 120);
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
    const item_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r73.S_ACNOTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r73.S_ACNOTYPE);
} }
function TermDepositAccountClosingComponent_div_196_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_196_div_30_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r57.angForm.controls["scheme_type"].errors == null ? null : ctx_r57.angForm.controls["scheme_type"].errors.required);
} }
function TermDepositAccountClosingComponent_div_196_ng_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r75 = ctx.$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c7, ctx_r59.isOptionTooLong(item_r75)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r75.S_APPL, " ", item_r75.S_NAME, " ");
} }
function TermDepositAccountClosingComponent_div_196_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_196_div_42_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r60.angForm.controls["scheme"].errors == null ? null : ctx_r60.angForm.controls["scheme"].errors.required);
} }
function TermDepositAccountClosingComponent_div_196_ng_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r77 = ctx.$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c7, ctx_r62.isOptionTooLong(item_r77)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r77.AC_NO, " ", item_r77.AC_NAME, "");
} }
function TermDepositAccountClosingComponent_div_196_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_196_div_55_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.angForm.controls["account_no"].errors == null ? null : ctx_r63.angForm.controls["account_no"].errors.required);
} }
function TermDepositAccountClosingComponent_div_196_ng_option_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r79.id, " ", item_r79.value, "");
} }
function TermDepositAccountClosingComponent_div_196_div_76_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_196_div_76_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r66.angForm.controls["tran_mode"].errors == null ? null : ctx_r66.angForm.controls["tran_mode"].errors.required);
} }
const _c8 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r90.IntersetHeadDate = $event; })("bsValueChange", function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_3_Template_input_bsValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r92.getColumnValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c8))("ngModel", ctx_r86.IntersetHeadDate);
} }
function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 156, 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_5_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); return $event.charCode == 46 || $event.charCode >= 48 && $event.charCode < 58; })("keyup", function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_5_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const i_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r96.getInputHeadAmt($event, i_r85); })("focusout", function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_5_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const i_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r98.checkBalanceFlag($event, i_r85); return ctx_r98.decimalAllContent($event.value); })("focus", function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_5_Template_input_focus_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r100.selectAllContent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r84.Amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r84.IS_GLBAL_MAINTAIN == "1" && (ctx_r88.selectedMode == 2 || ctx_r88.selectedMode == 5 || ctx_r88.selectedMode == 15 || ctx_r88.selectedMode == 6));
} }
function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 158, 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_6_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); return $event.charCode == 46 || $event.charCode >= 48 && $event.charCode < 58; })("keyup", function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_6_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const i_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r105.getInputHeadAmt($event, i_r85); })("focusout", function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_6_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const i_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r107.checkBalanceFlag($event, i_r85); return ctx_r107.decimalAllContent($event.value); })("focus", function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_6_Template_input_focus_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r109.selectAllContent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r84.Amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r84.IS_GLBAL_MAINTAIN == "1" && (ctx_r89.selectedMode == 2 || ctx_r89.selectedMode == 5 || ctx_r89.selectedMode == 15 || ctx_r89.selectedMode == 6));
} }
function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_3_Template, 2, 3, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_4_Template, 1, 0, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_5_Template, 3, 2, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_td_6_Template, 3, 2, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r84.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r84.FIELD_AMOUNT == "INTEREST_AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r84.FIELD_AMOUNT != "INTEREST_AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r84.FIELD_AMOUNT == "INTEREST_AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r84.FIELD_AMOUNT != "INTEREST_AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r84.Balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r84.type);
} }
function TermDepositAccountClosingComponent_div_196_div_96_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_196_div_96_tbody_17_tr_1_Template, 12, 7, "tr", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r81.headData);
} }
function TermDepositAccountClosingComponent_div_196_div_96_tbody_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Head");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Interset Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TermDepositAccountClosingComponent_div_196_div_96_tbody_17_Template, 2, 1, "tbody", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TermDepositAccountClosingComponent_div_196_div_96_tbody_18_Template, 4, 0, "tbody", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r69.headData == null ? null : ctx_r69.headData.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r69.headData == null ? null : ctx_r69.headData.length) == 0);
} }
function TermDepositAccountClosingComponent_div_196_button_101_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_div_196_button_101_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r111.addTransferAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_button_102_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_div_196_button_102_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r113.updateTransferAcccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_div_196_tbody_119_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_div_196_tbody_119_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120); const indexOfelement_r118 = ctx.index; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r119.editTransferAccount(indexOfelement_r118); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r117.Scheme == undefined || data_r117.Scheme == null ? data_r117.depoCloseTranAc.S_APPL : data_r117.Scheme, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r117.TRANSFER_ACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r117.NARRATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r117.TRAN_AMOUNT, " ");
} }
function TermDepositAccountClosingComponent_div_196_tbody_119_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r116.transferTotalAmount, " ");
} }
function TermDepositAccountClosingComponent_div_196_tbody_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TermDepositAccountClosingComponent_div_196_tbody_119_tr_1_Template, 11, 8, "tr", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TermDepositAccountClosingComponent_div_196_tbody_119_tr_2_Template, 5, 2, "tr", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r72.multigrid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r72.multigrid.length != 0);
} }
function TermDepositAccountClosingComponent_div_196_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cheque Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function TermDepositAccountClosingComponent_div_196_Template_input_keypress_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122 || $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cheque Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 127, 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.Tab", function TermDepositAccountClosingComponent_div_196_Template_input_keydown_Tab_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return _r54.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Scheme Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "sub", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ng-select", 130, 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_div_196_Template_ng_select_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r124.selectedCode = $event; })("change", function TermDepositAccountClosingComponent_div_196_Template_ng_select_change_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r125.selectedSchemeCode(); ctx_r125.getTransferAccountList($event); return ctx_r125.resetscheme(); })("focus", function TermDepositAccountClosingComponent_div_196_Template_ng_select_focus_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r126.onFocus(_r55); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TermDepositAccountClosingComponent_div_196_ng_option_29_Template, 2, 2, "ng-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TermDepositAccountClosingComponent_div_196_div_30_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "sub", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ng-select", 133, 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_div_196_Template_ng_select_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r127.selectedScheme = $event; })("change", function TermDepositAccountClosingComponent_div_196_Template_ng_select_change_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r128.getIntroducer1($event); })("focus", function TermDepositAccountClosingComponent_div_196_Template_ng_select_focus_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r129.onFocus(_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TermDepositAccountClosingComponent_div_196_ng_option_41_Template, 3, 6, "ng-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TermDepositAccountClosingComponent_div_196_div_42_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "sub", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ng-select", 135, 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_div_196_Template_ng_select_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.customer = $event; })("focus", function TermDepositAccountClosingComponent_div_196_Template_ng_select_focus_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r131.onFocus(_r61); })("change", function TermDepositAccountClosingComponent_div_196_Template_ng_select_change_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r132.getVoucherData($event); ctx_r132.SideDetails(); ctx_r132.checkAccountCondition(); return ctx_r132.showlgindetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, TermDepositAccountClosingComponent_div_196_ng_option_54_Template, 3, 6, "ng-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, TermDepositAccountClosingComponent_div_196_div_55_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "textarea", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_div_196_Template_textarea_ngModelChange_63_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r133.particulars = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_div_196_Template_i_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](369); return _r27.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Transaction Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "sub", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ng-select", 140, 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_div_196_Template_ng_select_ngModelChange_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.selectedMode = $event; })("focus", function TermDepositAccountClosingComponent_div_196_Template_ng_select_focus_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r136.onFocus(_r64); })("change", function TermDepositAccountClosingComponent_div_196_Template_ng_select_change_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r137.changeMode($event); return ctx_r137.checktranCondition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, TermDepositAccountClosingComponent_div_196_ng_option_75_Template, 2, 3, "ng-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, TermDepositAccountClosingComponent_div_196_div_76_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "sub", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 143, 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function TermDepositAccountClosingComponent_div_196_Template_input_keypress_86_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); return $event.charCode == 46 || $event.charCode >= 48 && $event.charCode < 58; })("keyup", function TermDepositAccountClosingComponent_div_196_Template_input_keyup_86_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r139.getaftervoucher($event); })("focus", function TermDepositAccountClosingComponent_div_196_Template_input_focus_86_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r140.selectAllContent($event); })("keydown.Tab", function TermDepositAccountClosingComponent_div_196_Template_input_keydown_Tab_86_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r141.decimalAllContent(_r67.value); ctx_r141.checkCondition(_r67.value); return ctx_r141.checkSanctionAmountWithAmount(); })("change", function TermDepositAccountClosingComponent_div_196_Template_input_change_86_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r142.decimalAllContent(_r67.value); ctx_r142.checkCondition(_r67.value); ctx_r142.checkSanctionAmountWithAmount(); return ctx_r142.checkIfZero(_r67.value); })("keyup", function TermDepositAccountClosingComponent_div_196_Template_input_keyup_86_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r143.getDecimal($event); return ctx_r143.getAmt(_r67.value); })("focusout", function TermDepositAccountClosingComponent_div_196_Template_input_focusout_86_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r144.focusSubmit(); return ctx_r144.getDecimalPoint($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_div_196_Template_input_ngModelChange_95_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r145.totalAmt = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, TermDepositAccountClosingComponent_div_196_div_96_Template, 19, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, TermDepositAccountClosingComponent_div_196_button_101_Template, 2, 0, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, TermDepositAccountClosingComponent_div_196_button_102_Template, 2, 0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "table", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, TermDepositAccountClosingComponent_div_196_tbody_119_Template, 3, 2, "tbody", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxDate", ctx_r20.maxDate)("minDate", ctx_r20.minDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c8))("maxDate", ctx_r20.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.selectedCode)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.allSchemeCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.angForm.controls["scheme_type"].invalid && (ctx_r20.angForm.controls["scheme_type"].dirty || ctx_r20.angForm.controls["scheme_type"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.selectedScheme)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.allScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.angForm.controls["scheme"].invalid && (ctx_r20.angForm.controls["scheme"].dirty || ctx_r20.angForm.controls["scheme"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.customer)("selectOnTab", true)("virtualScroll", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.introducerACNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.angForm.controls["account_no"].invalid && (ctx_r20.angForm.controls["account_no"].dirty || ctx_r20.angForm.controls["account_no"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.particulars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.selectedMode)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.tranModeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.angForm.controls["tran_mode"].invalid && (ctx_r20.angForm.controls["tran_mode"].dirty || ctx_r20.angForm.controls["tran_mode"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.totalAmt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.headShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.jointShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.jointUpdateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.multigrid.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total Credit : ", ctx_r20.transferTotalAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total Debit : ", ctx_r20.totalNetAmt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Difference: ", ctx_r20.transferTotalAmount - ctx_r20.totalNetAmt, " ");
} }
function TermDepositAccountClosingComponent_button_199_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_button_199_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r147); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); ctx_r146.submit(); return _r1.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_button_200_Template(rf, ctx) { if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_button_200_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r148.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_button_201_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_button_201_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r150.ResetForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_button_203_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_button_203_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r153); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r152.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_button_205_Template(rf, ctx) { if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_button_205_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r155); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r154.Approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_button_206_Template(rf, ctx) { if (rf & 1) {
    const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_button_206_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r157); const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r156.unApprove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unapprove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TermDepositAccountClosingComponent_tr_385_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_tr_385_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160); const item_r158 = ctx.$implicit; const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r159.getNarration(item_r158.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r158.NARRATION, " ");
} }
function TermDepositAccountClosingComponent_tr_406_Template(rf, ctx) { if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_tr_406_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163); const item_r161 = ctx.$implicit; const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r162.getFormNarration(item_r161.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r161 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r161.NARRATION, " ");
} }
class TermDepositAccountClosingComponent {
    constructor(TransactionCashModeService, TransactionTransferModeService, SchemeTypeService, ownbranchMasterService, _service, savingMasterService, schemeAccountNoService, fb, termDepositInterestRateService, router, http, _TDService, _CustomerIdService, _vservice, cdr, _ACMasterDropdownService, schemeCodeDropdownService, systemParameter) {
        this.TransactionCashModeService = TransactionCashModeService;
        this.TransactionTransferModeService = TransactionTransferModeService;
        this.SchemeTypeService = SchemeTypeService;
        this.ownbranchMasterService = ownbranchMasterService;
        this._service = _service;
        this.savingMasterService = savingMasterService;
        this.schemeAccountNoService = schemeAccountNoService;
        this.fb = fb;
        this.termDepositInterestRateService = termDepositInterestRateService;
        this.router = router;
        this.http = http;
        this._TDService = _TDService;
        this._CustomerIdService = _CustomerIdService;
        this._vservice = _vservice;
        this.cdr = cdr;
        this._ACMasterDropdownService = _ACMasterDropdownService;
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
        this.submitForm = false;
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
            { key: 'AG', data: { cash: [1, 4, 5], transfer: [1] } },
            { key: 'SB', data: { cash: [1, 2, 4, 5], transfer: [1] } },
            { key: 'CA', data: { cash: [1, 2, 4, 5], transfer: [1] } },
            { key: 'CC', data: { cash: [1, 2, 4, 5], transfer: [1, 2] } },
            { key: 'DS', data: { cash: [1, 2, 4], transfer: [1] } },
            { key: 'LN', data: { cash: [1, 2, 4], transfer: [1, 2] } },
            { key: 'GL', data: { cash: [1, 4], transfer: [1] } },
            { key: 'GS', data: { cash: [1, 4], transfer: [1] } },
            { key: 'SH', data: { cash: [1, 4, 5, 7], transfer: [1] } },
            { key: 'IV', data: { cash: [1, 2, 4], transfer: [1] } },
            { key: 'PG', data: { cash: [1, 4, 5, 10], transfer: [1] } },
            { key: 'TD', data: { cash: [1, 4, 5, 6, 10], transfer: [1] } },
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
        this.totalAmt = 0;
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
        this.headFlag = false;
        this.user = [];
        this.tokenshowhide = false;
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
    createForm() {
        this.angForm = this.fb.group({
            branch_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            temp_over_draft: [''],
            over_draft: [''],
            token: [''],
            slip_no: [''],
            account_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            scheme: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            scheme_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            date: [''],
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('cash'),
            POSTED_INT: [0],
            Intdate: [''],
            SAVING_PIGMY: ['FormC'],
            chequeNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            ChequeDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            // Token_Num: ['', [Validators.pattern]],
            particulars: [null],
            tran_mode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
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
            TRAN_NO: [''],
            total_amt: [0],
            amount: [0],
        });
        this._service.getSysParaData().subscribe(data => {
            this.date = data[0].CURRENT_DATE;
            this.angForm.patchValue({
                date: this.date
            });
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        // if (result.RoleDefine[0].Role.id == 1) {
        //   this.angForm.controls['branch_code'].enable()
        //   this.selectedBranch = result.branch.id
        // }
        // else {
        this.angForm.controls['branch_code'].disable();
        this.angForm.patchValue({
            'branch_code': result.branch.id
        });
        this.selectedBranch = result.branch.id;
        // }
    }
    schemechange(event) {
        this.getschemename = event.name;
        this.selectedScheme = event.value;
        this.schemeget = event.id;
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
    getScheme(event) {
        this.Scode = event.S_NAME;
        this.schemecode = event.S_APPL;
    }
    getAccountDetails(event) {
        this.bankacno = event.bankacno;
        this.customerId = event.id;
        this.dormant = event.dormant;
        let mem = [this.bankacno, this.getschemename, this.selectedScheme];
        // this.modalClass = 'modalShow';
        this.intRateShow = 0;
        this.NET_EXC_INTAMT = 0;
        this.transferTotalAmount = 0;
        this.multigrid = [];
        this.form = this.fb.group({
            scheme_type: [''],
            account_no: [''],
            scheme: ['']
        });
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
            else if (data[0].ISLIEN === true) {
                let cashRadio = document.getElementById('formT');
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Transfer to Loan Account?',
                    text: 'Do you want to transfer to the loan account?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'Cancel'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.isTransfer = true;
                        cashRadio.disabled = true;
                        let obj1 = { DEPO_AC_NO: event.bankacno };
                        this.http.post('http://192.168.1.174:7265/term-deposits-master/ownDeposit', obj1).subscribe((demo) => {
                            // console.log(demo);
                            this.getdata = demo;
                            if (demo && demo.length > 0) {
                                this.form.patchValue({
                                    scheme_type: this.getdata[0].AC_ACNOTYPE,
                                    account_no: this.getdata[0].AC_NO
                                });
                            }
                            let acType = { AC_TYPE: demo[0].AC_TYPE };
                            // Second POST request
                            this.http.post('http://192.168.1.174:7265/scheme-parameters/AC_TYPE', acType).subscribe((response) => {
                                this.getscheme = response;
                                if (response && response.length > 0) {
                                    this.form.patchValue({
                                        scheme: this.getscheme[0].S_NAME,
                                    });
                                }
                            });
                        });
                    }
                    else {
                        this.customer = null;
                    }
                });
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
            this.customer = data[0].BANKACNO;
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
                    InterestRate: Number(this.multiField) - Number(this.prematureRate)
                });
                this.afterMaturedInt = false;
                this.intRateShow = Number(this.multiField) - Number(this.prematureRate);
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
                    this.angForm.patchValue({
                        InterestRate: this.afterMatureIntRate,
                        MaturedDays: data[0].totDays,
                        TOTAL_INT: Math.round(data[0].InterestAmount)
                    });
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
            this.totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (Number(ledgerAmt) + Number(netAmt) - Number(TDSAmt) - Number(surchargeAmt) - Number(penalAmt)).toFixed(2) : (Number(ledgerAmt) - Number(Math.abs(netAmt)) - Number(TDSAmt) - Number(surchargeAmt) - Number(penalAmt)).toFixed(2);
            this.angForm.patchValue({
                NETPAYABLEAMT: this.totalNetAmt
            });
            this.getNetPayAmount();
        });
        this.showCustomerDeatils();
        let obj = { DEPO_AC_NO: event.bankacno };
        this.http.post('http://192.168.1.157:4771/term-deposits-master/ownDeposit', obj)
            .subscribe((data) => {
            this.getdata = data;
        });
        this.termDepositInterestRateService.getFormData(event.id).subscribe(data => {
            this.multiField = data.rate[0].INT_RATE;
        });
    }
    getNetPayAmount() {
        let ledgerAmt = Number(this.angForm.controls['LEDGER_BAL'].value);
        let netAmt = Number(this.angForm.controls['NET_INTAMT'].value);
        let TDSAmt = Number(this.angForm.controls['TDS_AMT'].value);
        let surchargeAmt = Number(this.angForm.controls['SURCHARGE_AMT'].value);
        let penalAmt = Number(this.angForm.controls['PENAL_INT'].value);
        this.totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (Math.abs(ledgerAmt + netAmt - TDSAmt - surchargeAmt - penalAmt)).toFixed(2) : (Math.abs(ledgerAmt - Math.abs(netAmt) - TDSAmt - surchargeAmt - penalAmt)).toFixed(2);
        this.preMature == false ? this.totalNetAmt = (Number(this.totalNetAmt) + Number(this.angForm.controls['PAYABLE_INTAMT'].value)).toFixed(2) : this.totalNetAmt = this.totalNetAmt;
        this.angForm.patchValue({
            NETPAYABLEAMT: this.totalNetAmt
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
                this.schemeAccountNoService.getGeneralLedgerListForClosing().subscribe(data => {
                    this.schemeACNo = data;
                });
                break;
        }
    }
    getTransferAccountDeatil(event) {
        this.transferAccountDetails = event;
    }
    changeMode(item) {
        this.submitForm = true;
        this.headData = [];
        this.submitTranMode = item;
        if (this.submitTranMode.tran_type == 'TR') {
            this.showChequeDetails = true;
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
            this.sendFunction(this.ChequeDate);
            this.updateheadbalance(this.ChequeDate);
            this.calculateVoucher();
            if (data.length != 0) {
                if (!this.headFlag) {
                    // this.headData = data;
                    this.headShow = true;
                    for (let item of data) {
                        let value = {};
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
        // if (this.submitScheme.S_ACNOTYPE == 'TD' || this.submitScheme.S_ACNOTYPE == 'SB' || this.submitScheme.S_ACNOTYPE == 'PG' || this.submitScheme.S_ACNOTYPE == 'AG' || this.submitScheme.S_ACNOTYPE == 'CA') {
        //   this.interestMaxDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
        //   this.interestMaxDate = this.interestMaxDate._d
        //   this.interestMinDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'months')
        //   this.interestMinDate = this.interestMinDate._d
        // }
        // else if (this.submitScheme.S_ACNOTYPE == 'LN' || this.submitScheme.S_ACNOTYPE == 'CC' || this.submitScheme.S_ACNOTYPE == 'DS') {
        //   this.interestMinDate = moment(this.date, "DD/MM/YYYY").subtract(1, 'days')
        //   this.interestMinDate = this.interestMinDate._d
        //   this.interestMaxDate = moment(this.date, "DD/MM/YYYY").add(1, 'months')
        //   this.interestMaxDate = this.interestMaxDate._d
        // }
        this.angForm.patchValue({
            amount: 0
        });
        if (item.id == 6) {
            this.angForm.controls.amount.setValue('0.00');
            this.angForm.controls.totalAmt.setValue('0.00');
            this.totalAmt = 0.00;
            this.angForm.controls['amount'].disable();
        }
        else if (item.id == 2 || item.id == 5 || item.id == 15) {
            this.angForm.patchValue({
                amount: Number(this.ClearBalance).toFixed(2)
            });
            // this.getaftervoucher()
            this.angForm.controls['amount'].disable();
            this.decimalAllContent(this.ClearBalance);
            this.checkCondition(this.ClearBalance);
            this.checkSanctionAmountWithAmount();
            this.checkamtcondition(this.ClearBalance);
            this.getAmt(this.ClearBalance);
        }
        else {
            this.angForm.controls.amount.setValue('0.00');
            this.angForm.controls['amount'].enable();
        }
        // if (this.selectedCode == 'GL') {
        //   this.showChequeDetails = true
        // }
    }
    decimalAllContent($event) {
        if (this.submitTranMode == undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Please First Select Tran Mode then enter Amount', 'error');
            this.tran_mode.focus();
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
            var t = $event;
            $event = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
        }
    }
    sendFunction(mlsdate) {
        let formValues = this.angForm.value;
        let userData = JSON.parse(localStorage.getItem("user"));
        this.date = userData.branch.syspara.CURRENT_DATE;
        let obj = {
            'accountNo': this.submitAccountNo.BANKACNO,
            'schemeType': this.submitScheme.S_ACNOTYPE,
            'scheme': this.submitScheme.S_APPL,
            'currentDate': this.date,
        };
        this.http.post('http://192.168.1.108:7266/voucher/getInputHeadBal', obj).subscribe((data1) => {
            this.balancedata = data1;
            // console.log(data1);
            for (let element of this.headData) {
                let newobj = {
                    acno: element === null || element === void 0 ? void 0 : element.GL_CODE,
                    scheme: '101',
                    date: this.ChequeDate,
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
                    element['mlsdate'] = this.IntersetHeadDate;
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
            this.totalCredit = this.user.reduce((total, row) => total + (+row.amount), 0).toFixed(2);
            this.totalDebit = 0;
            this.deamount = this.totalCredit - this.totalDebit;
            this.paidamt = this.SanAmount - this.deamount;
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
    checkCondition($event) {
        let obj = {
            value: Number($event),
            clearBalance: Number(this.ClearBalance),
            accountNo: this.submitAccountNo.BANKACNO,
            schemeType: this.selectedCode,
            scheme: this.submitScheme.S_APPL,
            tran: this.submitTranMode.tran_drcr,
            tranMode: this.submitTranMode.id,
            // odAmount: this.overdraftAmt,
            currentDate: this.ChequeDate,
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
                    this.amount.nativeElement.blur();
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
                    this.amount.nativeElement.blur();
                }
                else {
                    this.angForm.controls['amount'].reset();
                    // this.angForm.controls['total_amount'].reset(0);
                    this.submitForm = true;
                    this.SideDetails();
                }
            });
        }
        else {
            this.checkamtcondition($event);
        }
    }
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
        };
        if (this.submitTranMode.id == 7 && this.selectedCode == 'SH') {
            this.angForm.controls['amount'].disable();
            this.angForm.controls['particulars'].disable();
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
                    'amount': data.count,
                    'particulars': str + ' Paid Dividend'
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
    getaftervoucher(event) {
        this.submitForm = true;
        var t = event.target.value;
        if (this.submitCustomer.AC_ACNOTYPE == 'LN' && this.submitTranMode.tran_drcr == 'D') {
            let value = Number(event.target.value);
            let data = value.toFixed(0);
            event.target.value = data;
        }
        else
            event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
        let value = Number(event.target.value);
        let tran = this.submitTranMode.tran_drcr;
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
            else if (value < Number(this.ClearBalance)) {
                this.extenstionaftervoucher = this.typeclearbal;
            }
        }
        else {
            this.AfterVoucher = Math.abs(Number(this.ClearBalance) + value);
            this.AfterVoucher = Number(this.AfterVoucher).toFixed(2);
            this.extenstionaftervoucher = 'Cr';
        }
    }
    checkSanctionAmountWithAmount() {
        var _a, _b;
        // let ledgerbal = Number(this.tempDayOpBal) > 0 ? Number(this.tempDayOpBal) : 0
        let sancAmt = (Number(this.sanctionamt) - Number(this.ClearBalance)) + Number(this.overdraftAmt);
        if (sancAmt < Number(this.angForm.controls['amt'].value) && this.submitTranMode.id == 4 && this.submitTranMode.tran_drcr == 'D' && this.Submitscheme.IS_GOLD_LOAN != '1' && (((_a = this.Submitscheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'CC' || ((_b = this.Submitscheme) === null || _b === void 0 ? void 0 : _b.S_ACNOTYPE) == 'LN')) {
            this.SideDetails();
            this.angForm.controls['amt'].reset();
            this.angForm.patchValue({
                total_amt: 0.00,
                amt: 0.00
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', `Access Denied, Amount Can't Be Withdraw More Than Rs. ${sancAmt}`, 'error');
            this.swiper.nativeElement.focus();
            this.submitForm = true;
            this.angForm.patchValue({
                total_amt: 0.00,
                amt: 0.00
            });
        }
    }
    checkamtcondition($event) {
        let obj = {
            // value: Number($event.target.value),
            value: Number(this.angForm.controls['amount'].value),
            // clearBalance: Number(this.ClearBalance),
            accountNo: this.submitAccountNo.BANKACNO,
            schemeType: this.selectedCode,
            scheme: this.submitScheme.S_APPL,
            // tran: this.submitTranMode.tran_drcr,
            tranMode: this.submitTranMode.id,
            // odAmount: this.overdraftAmt,
            // currentDate: this.date,
            totalAmt: this.angForm.controls['total_amt'].value,
            type: this.typeclearbal
        };
        this._service.checkZeroBalance(obj).subscribe(data => {
            // this.modalClass = 'modalShow';
            if (data != 0) {
                this.SideDetails();
                this.angForm.controls['amount'].reset();
                this.angForm.controls['total_amount'].reset(0);
                this.amount.nativeElement.focus();
                this.submitForm = true;
                // this.modalClass = 'modalHide';
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
            }
            else {
                this._service.clearWithdrawBal(obj).subscribe(data => {
                    if (data != 0) {
                        this.SideDetails();
                        this.angForm.controls['amount'].reset();
                        this.angForm.controls['total_amount'].reset(0);
                        this.amount.nativeElement.focus();
                        this.submitForm = true;
                        // this.modalClass = 'modalHide';
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                    }
                    else {
                        this._service.CheckPanNoInIDMaster(obj).subscribe(data => {
                            if (data != 0) {
                                // this.submitForm = true
                                // this.modalClass = 'modalHide';
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
                                        this.angForm.controls['amount'].reset();
                                        this.angForm.controls['total_amount'].reset(0);
                                        this.SideDetails();
                                    }
                                });
                            }
                            else {
                                this._service.ClearVoucherSameBal(obj).subscribe(data => {
                                    if (data != 0) {
                                        this.SideDetails();
                                        this.angForm.controls['amount'].reset();
                                        this.angForm.controls['total_amount'].reset(0);
                                        this.amount.nativeElement.focus();
                                        this.submitForm = true;
                                        // this.modalClass = 'modalHide';
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                    }
                                    else {
                                        this._service.BalancePresentOrOverdraft(obj).subscribe(data => {
                                            if (data != 0) {
                                                this.SideDetails();
                                                this.angForm.controls['amount'].reset();
                                                this.angForm.controls['total_amount'].reset(0);
                                                this.amount.nativeElement.focus();
                                                this.submitForm = true;
                                                // this.modalClass = 'modalHide';
                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                            }
                                            else {
                                                this._service.ClearBalanceDebitAmt(obj).subscribe(data => {
                                                    if (data != 0) {
                                                        this.SideDetails();
                                                        this.angForm.controls['amount'].reset();
                                                        this.angForm.controls['total_amount'].reset(0);
                                                        this.amount.nativeElement.focus();
                                                        this.submitForm = true;
                                                        // this.modalClass = 'modalHide';
                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                    }
                                                    else {
                                                        this._vservice.InstructionFreezeAc(obj).subscribe(data => {
                                                            if (data != 0) {
                                                                this.SideDetails();
                                                                this.angForm.controls['amount'].reset();
                                                                this.angForm.controls['total_amount'].reset(0);
                                                                this.amount.nativeElement.focus();
                                                                this.submitForm = true;
                                                                // this.modalClass = 'modalHide';
                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                            }
                                                            else {
                                                                this._vservice.MinBalanceChecking(obj).subscribe(data => {
                                                                    if (data != 0) {
                                                                        this.SideDetails();
                                                                        this.angForm.controls['amount'].reset();
                                                                        this.angForm.controls['total_amount'].reset(0);
                                                                        this.amount.nativeElement.focus();
                                                                        this.submitForm = true;
                                                                        // this.modalClass = 'modalHide';
                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                    }
                                                                    else {
                                                                        this._vservice.CheckClearBalAndAmt(obj).subscribe(data => {
                                                                            if (data != 0) {
                                                                                this.SideDetails();
                                                                                this.angForm.controls['amount'].reset();
                                                                                this.angForm.controls['total_amount'].reset(0);
                                                                                this.amount.nativeElement.focus();
                                                                                this.submitForm = true;
                                                                                // this.modalClass = 'modalHide';
                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                            }
                                                                            else {
                                                                                this._vservice.WithdrawAmtClosingEqualClearBal(obj).subscribe(data => {
                                                                                    if (data != 0) {
                                                                                        this.SideDetails();
                                                                                        this.angForm.controls['amount'].reset();
                                                                                        this.angForm.controls['total_amount'].reset(0);
                                                                                        this.amount.nativeElement.focus();
                                                                                        this.submitForm = true;
                                                                                        // this.modalClass = 'modalHide';
                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                    }
                                                                                    else {
                                                                                        this._vservice.DepositeAmountAndIntallments(obj).subscribe(data => {
                                                                                            if (data != 0) {
                                                                                                this.SideDetails();
                                                                                                this.angForm.controls['amount'].reset();
                                                                                                this.angForm.controls['total_amount'].reset(0);
                                                                                                this.amount.nativeElement.focus();
                                                                                                this.submitForm = true;
                                                                                                // this.modalClass = 'modalHide';
                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                            }
                                                                                            else {
                                                                                                this._vservice.DepositAndTotalInstallments(obj).subscribe(data => {
                                                                                                    if (data != 0) {
                                                                                                        this.SideDetails();
                                                                                                        this.angForm.controls['amount'].reset();
                                                                                                        this.angForm.controls['total_amount'].reset(0);
                                                                                                        this.amount.nativeElement.focus();
                                                                                                        this.submitForm = true;
                                                                                                        // this.modalClass = 'modalHide';
                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                    }
                                                                                                    else {
                                                                                                        this._vservice.DepositAndDepositAmount(obj).subscribe(data => {
                                                                                                            if (data != 0) {
                                                                                                                this.SideDetails();
                                                                                                                this.angForm.controls['amount'].reset();
                                                                                                                this.angForm.controls['total_amount'].reset(0);
                                                                                                                this.amount.nativeElement.focus();
                                                                                                                this.submitForm = true;
                                                                                                                // this.modalClass = 'modalHide';
                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                            }
                                                                                                            else {
                                                                                                                this._vservice.PremcloseTdateTamtCom(obj).subscribe(data => {
                                                                                                                    if (data != 0) {
                                                                                                                        this.SideDetails();
                                                                                                                        this.angForm.controls['amount'].reset();
                                                                                                                        this.angForm.controls['total_amount'].reset(0);
                                                                                                                        this.amount.nativeElement.focus();
                                                                                                                        this.submitForm = true;
                                                                                                                        // this.modalClass = 'modalHide';
                                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        this._vservice.PrecloseTrDateTrAmtComCol(obj).subscribe(data => {
                                                                                                                            if (data != 0) {
                                                                                                                                this.SideDetails();
                                                                                                                                this.angForm.controls['amount'].reset();
                                                                                                                                this.angForm.controls['total_amount'].reset(0);
                                                                                                                                this.amount.nativeElement.focus();
                                                                                                                                this.submitForm = true;
                                                                                                                                // this.modalClass = 'modalHide';
                                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                this._vservice.ComVouamtClearbalAndStrs(obj).subscribe(data => {
                                                                                                                                    if (data != 0) {
                                                                                                                                        this.SideDetails();
                                                                                                                                        this.angForm.controls['amount'].reset();
                                                                                                                                        this.angForm.controls['total_amount'].reset(0);
                                                                                                                                        this.amount.nativeElement.focus();
                                                                                                                                        this.submitForm = true;
                                                                                                                                        // this.modalClass = 'modalHide';
                                                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                    }
                                                                                                                                    else {
                                                                                                                                        this._vservice.DepositGreaterShareLimitAmt(obj).subscribe(data => {
                                                                                                                                            if (data != 0) {
                                                                                                                                                this.SideDetails();
                                                                                                                                                this.angForm.controls['amount'].reset();
                                                                                                                                                this.angForm.controls['total_amount'].reset(0);
                                                                                                                                                this.amount.nativeElement.focus();
                                                                                                                                                this.submitForm = true;
                                                                                                                                                // this.modalClass = 'modalHide';
                                                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                this._vservice.ZeroBalance(obj).subscribe(data => {
                                                                                                                                                    if (data != 0) {
                                                                                                                                                        this.SideDetails();
                                                                                                                                                        this.angForm.controls['amount'].reset();
                                                                                                                                                        this.angForm.controls['total_amount'].reset(0);
                                                                                                                                                        this.amount.nativeElement.focus();
                                                                                                                                                        this.submitForm = true;
                                                                                                                                                        // this.modalClass = 'modalHide';
                                                                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                    }
                                                                                                                                                    else {
                                                                                                                                                        this._vservice.CashWithdraw(obj).subscribe(data => {
                                                                                                                                                            if (data != 0) {
                                                                                                                                                                this.SideDetails();
                                                                                                                                                                this.angForm.controls['amount'].reset();
                                                                                                                                                                this.angForm.controls['total_amount'].reset(0);
                                                                                                                                                                this.amount.nativeElement.focus();
                                                                                                                                                                this.submitForm = true;
                                                                                                                                                                // this.modalClass = 'modalHide';
                                                                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                                // } else {
                                                                                                                                                                //   this._vservice.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                                                                                                //     if (data != 0) {
                                                                                                                                                                //       this.SideDetails()
                                                                                                                                                                //       this.angForm.controls['amt'].reset();
                                                                                                                                                                //       this.angForm.controls['total_amt'].reset(0);
                                                                                                                                                                //       this.amt.nativeElement.focus();
                                                                                                                                                                //       this.submitForm = true
                                                                                                                                                                this.modalClass = 'modalHide';
                                                                                                                                                                //       Swal.fire('Oops!', data.message, 'error');
                                                                                                                                                            }
                                                                                                                                                            else {
                                                                                                                                                                this._vservice.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                                                                                                    // debugger
                                                                                                                                                                    if (data != 0) {
                                                                                                                                                                        this.SideDetails();
                                                                                                                                                                        this.angForm.controls['amount'].reset();
                                                                                                                                                                        this.angForm.controls['total_amount'].reset(0);
                                                                                                                                                                        this.amount.nativeElement.focus();
                                                                                                                                                                        this.submitForm = true;
                                                                                                                                                                        // this.modalClass = 'modalHide';
                                                                                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                                    }
                                                                                                                                                                    else {
                                                                                                                                                                        this._vservice.withdrawClosingCondition(obj).subscribe(data => {
                                                                                                                                                                            if (data != 0) {
                                                                                                                                                                                this.SideDetails();
                                                                                                                                                                                this.angForm.controls['amount'].reset();
                                                                                                                                                                                this.angForm.controls['total_amount'].reset(0);
                                                                                                                                                                                this.selectMode.focus();
                                                                                                                                                                                this.submitForm = true;
                                                                                                                                                                                // this.modalClass = 'modalHide';
                                                                                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                                            }
                                                                                                                                                                            else {
                                                                                                                                                                                this.submitForm = false;
                                                                                                                                                                                this.amount.nativeElement.blur();
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
                this.totalAmt = count + Number(this.angForm.controls['amount'].value);
                this.submitForm = false;
                if (this.headData.length == 0)
                    this.submitbtn.nativeElement.focus();
            }
        }
        this.totalAmt = Number(this.totalAmt).toFixed(2);
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
    Add() {
        var _a, _b;
        if (Number(this.totalAmt) != 0 && this.totalAmt != undefined) {
            let user = JSON.parse(localStorage.getItem('user'));
            let obj = this.angForm.value;
            obj['user'] = user;
            for (let ele of this.headData) {
                if (ele['INTEREST_DATE_INPUT'] == '0' && ele.FIELD_AMOUNT == 'INTEREST_AMOUNT') {
                    ele['ChequeDate'] = null;
                }
            }
            obj['InputHead'] = this.headData;
            obj['tran_mode'] = this.submitTranMode;
            obj['scheme'] = this.submitScheme;
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
            this.angForm.controls['temp_over_draft'].reset();
            this.angForm.controls['over_draft'].reset();
            this.angForm.controls['token'].reset();
            // this.angForm.controls['particulars'].reset()
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
            this.selectedCode = '';
            this.selectedScheme = '';
            this.selectedMode = '';
            this.customer = '';
            // this.calculateVoucher()
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', 'Please once check your voucher, and fill requied data', 'error');
        }
    }
    SideDetails() {
        //debugger
        this.AfterVoucher = 0;
        this.extenstionaftervoucher = '';
        // this.angForm.controls['amt'].reset()
        // this.angForm.controls['total_amt'].reset()
        this.SideView = true;
        if (this.submitCustomer.AC_ACNOTYPE == 'LN' || this.submitCustomer.AC_ACNOTYPE == 'CC' || this.submitCustomer.AC_ACNOTYPE == 'DS') {
            this.ShowLNCC = true;
            this.ShownotLNCC = false;
            this.sanctionamt = (this.submitCustomer.AC_SANCTION_AMOUNT != null ? this.submitCustomer.AC_SANCTION_AMOUNT : 0);
            this.sanctionamt = Number(this.sanctionamt).toFixed(2);
            this.sanctiondate = (this.submitCustomer.AC_SANCTION_DATE != null ? this.submitCustomer.AC_SANCTION_DATE : '---');
            this.expirydate = (this.submitCustomer.AC_EXPIRE_DATE != null ? this.submitCustomer.AC_EXPIRE_DATE : '---');
            this.asondate = (this.submitCustomer.AC_ASON_DATE != null ? this.submitCustomer.AC_ASON_DATE : '---');
            this.opendate = (this.submitCustomer.AC_OPDATE != null ? this.submitCustomer.AC_OPDATE : '---');
            this.renewaldate = (this.submitCustomer.AC_OPEN_OLD_DATE != null ? this.submitCustomer.AC_OPEN_OLD_DATE : '---');
        }
        else if (this.submitCustomer.AC_ACNOTYPE == 'TD' || this.submitCustomer.AC_ACNOTYPE == 'PG' || this.submitCustomer.AC_ACNOTYPE == 'IV') {
            this.ShowLNCC = false;
            this.ShownotLNCC = true;
            this.expirydate = (this.submitCustomer.AC_EXPDT != null ? this.submitCustomer.AC_EXPDT : '---');
            this.maturityamt = (this.submitCustomer.AC_MATUAMT != null ? this.submitCustomer.AC_MATUAMT : 0);
            this.maturityamt = Number(this.maturityamt).toFixed(2);
            this.depositamt = (this.submitCustomer.AC_SCHMAMT != null ? this.submitCustomer.AC_SCHMAMT : 0);
            this.depositamt = Number(this.depositamt).toFixed(2);
            this.asondate = (this.submitCustomer.AC_ASON_DATE != null ? this.submitCustomer.AC_ASON_DATE : '---');
            this.opendate = (this.submitCustomer.AC_OPDATE != null ? this.submitCustomer.AC_OPDATE : '---');
        }
        else {
            this.ShowLNCC = false;
            this.ShownotLNCC = false;
        }
        if (this.submitCustomer.AC_ACNOTYPE == 'PG') {
            let obj = {
                scheme: this.Submitscheme.S_APPL,
                acno: this.Submitscheme.S_APPL == '980' ? this.submitCustomer.AC_NO : this.submitCustomer.BANKACNO,
                date: addInFrom,
                branch: this.branchCODE
            };
            this._service.getpigmychartBalance(obj).subscribe(data2 => {
                console.log(data2, 'pigmy');
                this.pigmyamount = data2;
            });
        }
        this.submitCustomer.AC_ODAMT == undefined ? this.submitCustomer.AC_ODAMT = 0 : this.submitCustomer.AC_ODAMT = this.submitCustomer.AC_ODAMT;
        this.submitCustomer.AC_SODAMT == undefined ? this.submitCustomer.AC_SODAMT = 0 : this.submitCustomer.AC_SODAMT = this.submitCustomer.AC_SODAMT;
        this.overdraftAmt = Number(this.submitCustomer.AC_ODAMT) + Number(this.submitCustomer.AC_SODAMT);
        this.overdraftAmt = Number(this.overdraftAmt).toFixed(2);
        var startdate = this.angForm.controls['date'].value;
        let formDT = moment__WEBPACK_IMPORTED_MODULE_4__(startdate, 'DD/MM/YYYY');
        var addInFrom;
        // if (this.Submitscheme.S_ACNOTYPE == 'PG') {
        //   addInFrom = startdate;
        // } else {
        addInFrom = moment__WEBPACK_IMPORTED_MODULE_4__(formDT, "DD/MM/YYYY").subtract(1, 'days').format('DD/MM/YYYY');
        // }
        let obj = {
            scheme: this.Submitscheme.S_APPL,
            acno: this.Submitscheme.S_APPL == '980' ? this.submitCustomer.AC_NO : this.submitCustomer.BANKACNO,
            date: addInFrom,
            branch: this.branchCode
        };
        this._service.getledgerbalance(obj).subscribe(data => {
            var _a, _b, _c, _d, _e, _f;
            //debugger
            this.DayOpBal = Math.abs(data);
            this.DayOpBalance = Number(this.DayOpBal).toFixed(2);
            if (data < 0) {
                this.extensionopenbal = 'Cr';
            }
            else {
                this.extensionopenbal = 'Dr';
            }
            //debugger
            this.tempDayOpBal = data;
            if (this.submitCustomer.AC_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && Number(this.DayOpBal) > 0 && this.Submitscheme.S_INSTTYPE == '0') {
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1);
            }
            if (((_a = this.Submitscheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && ((_b = this.Submitscheme) === null || _b === void 0 ? void 0 : _b.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_c = this.Submitscheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_d = this.Submitscheme) === null || _d === void 0 ? void 0 : _d.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_e = this.Submitscheme) === null || _e === void 0 ? void 0 : _e.S_ACNOTYPE) == 'LN' && ((_f = this.Submitscheme) === null || _f === void 0 ? void 0 : _f.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9);
            this._service.getPassedUnpassedBalance(obj).subscribe(data1 => {
                this.Pass = Math.abs(data1.passedamt).toFixed(2);
                this.Unpass = Math.abs(data1.unpassamt).toFixed(2);
                this.passextension = (data1.passextension != undefined ? data1.passextension : '');
                this.unpassextension = (data1.unpassextension != undefined ? data1.unpassextension : '');
                // this.ClearBalance = this.DayOpBal + this.Pass
                var open = (this.tempDayOpBal <= 0 ? Math.abs(this.tempDayOpBal) : (-this.tempDayOpBal));
                var pass = (data1.passedamt <= 0 ? Math.abs(data1.passedamt) : (-data1.passedamt));
                var unpass = (data1.unpassamt <= 0 ? Math.abs(data1.unpassamt) : (-data1.unpassamt));
                // let value = open + pass + data2;
                // let value = open + pass + this.pigmyamount;
                let value = open + pass;
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
    }
    updateheadbalance(ChequeDate) {
        let formValues = this.angForm.value;
        let newobj = {
            'accountNo': formValues.TschemeAC,
            'schemeType': this.submitScheme.name,
            'scheme': this.submitScheme.label,
            'currentDate': moment__WEBPACK_IMPORTED_MODULE_4__(formValues.ChequeDate, 'DD/MM/YYYY').format('DD/MM/YYYY'),
        };
        let balancedata;
        this._vservice.getInputHeadBal(newobj).subscribe(data1 => {
            this.headData.forEach((element, index) => {
                element.Amount = data1.someProperty;
                element.Balance = data1.someOtherProperty;
            });
            for (let element of this.headData) {
                let newobj = {
                    acno: element === null || element === void 0 ? void 0 : element.GL_CODE,
                    scheme: '101',
                    date: this.ChequeDate,
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
                    element['ChequeDate'] = this.IntersetHeadDate;
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
    checkAccountCondition(event) {
        this.acno = event.AC_NO;
        this.BANKACNO = event.BANKACNO;
        let schemetype = event.AC_ACNOTYPE;
        let scheme = this.submitScheme.S_NAME;
        let data1 = localStorage.getItem('user');
        let result = JSON.parse(data1);
        // let tempacno = this.submitAccountNo.BANKACNO
        let obj = {
            clearBalance: Number(this.ClearBalance),
            accountNo: this.submitAccountNo.BANKACNO,
            accno: this.submitAccountNo.AC_NO,
            schemeType: this.selectedCode,
            scheme: this.submitScheme.S_APPL,
            usertype: result.RoleDefine[0].RoleId,
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
                            // this.customer = tempacno
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
    showlgindetails() {
        throw new Error('Method not implemented.');
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
        let date = this.ChequeDate;
        var rowData = date.split('/');
        let lastdate = Number(rowData[0]) - 1;
        // let result    = rowData[2]+'-'+rowData[1]+'-'+lastdate;
        this.IntersetHeadDate = lastdate + '/' + rowData[1] + '/' + rowData[2];
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
    getIntroducer1(item) {
        this.id = item.id;
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
                var _a, _b, _c, _d, _e, _f;
                let obj = this.TranModeCash.find(t => t.id === ele);
                this.tranModeList.push(obj);
                if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == 0 && this.submitScheme.IS_RECURRING_TYPE == 0 && this.submitScheme.IS_CALLDEPOSIT_TYPE == 0 && this.submitScheme.REINVESTMENT == 0 && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
                    this.tranModeList = this.tranModeList.filter(ele => ele.id != 1);
                }
                if (((_a = this.submitScheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && ((_b = this.submitScheme) === null || _b === void 0 ? void 0 : _b.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_c = this.submitScheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_d = this.submitScheme) === null || _d === void 0 ? void 0 : _d.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_e = this.submitScheme) === null || _e === void 0 ? void 0 : _e.S_ACNOTYPE) == 'LN' && ((_f = this.submitScheme) === null || _f === void 0 ? void 0 : _f.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            });
        }
        else {
            this.tranModeList = [];
            object.data.transfer.forEach(ele => {
                var _a, _b, _c, _d, _e, _f;
                let obj = this.TranModeTransfer.find(t => t.id === ele);
                this.tranModeList.push(obj);
                if (this.submitScheme.S_ACNOTYPE == 'TD' && this.submitScheme.INTEREST_RULE == 0 && this.submitScheme.IS_RECURRING_TYPE == 0 && this.submitScheme.IS_CALLDEPOSIT_TYPE == 0 && this.submitScheme.REINVESTMENT == 0 && Math.abs(Number(this.DayOpBal)) > 0 && this.submitScheme.S_INSTTYPE == '0') {
                    this.tranModeList = this.tranModeList.filter(ele => ele.id != 1);
                }
                if (((_a = this.submitScheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && ((_b = this.submitScheme) === null || _b === void 0 ? void 0 : _b.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_c = this.submitScheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_d = this.submitScheme) === null || _d === void 0 ? void 0 : _d.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_e = this.submitScheme) === null || _e === void 0 ? void 0 : _e.S_ACNOTYPE) == 'LN' && ((_f = this.submitScheme) === null || _f === void 0 ? void 0 : _f.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            });
        }
    }
    resetscheme() {
        // console.log(this.tempschmetype)
        if (this.tempschmetype != this.selectedCode) {
            this.selectedScheme = null;
            this.customer = null;
            this.introducerACNo = [];
        }
    }
    //transfer account grid functions
    addTransferAccount() {
        this.formSubmitted = true;
        let formVal = this.angForm.value;
        // this.getscheme = this.allScheme[0].id;
        var object = {
            // Scheme: this.submitScheme.S_NAME,
            Scheme: this.schemeget,
            // TRANSFER_ACNOTYPE: this.transferSchemeDetails.name,
            TRANSFER_ACNO: this.submitAccountNo.AC_NO,
            TRANSFER_ACTYPE: this.submitAccountNo.AC_TYPE,
            TRANSFER_ACNOTYPE: formVal.scheme_type,
            ACNO: this.customer,
            NARRATION: formVal.particulars,
            TRAN_AMOUNT: formVal.total_amt,
            AC_CLOSED: '0'
        };
        // console.log(this.multigrid)
        this.getTransferAccountList(event);
        if (formVal.scheme == "" || formVal.scheme == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Select Scheme!", "error");
        }
        else if (formVal.account_no == "" || formVal.account_no == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Select Account!", "info");
            // this.resetgrid()
        }
        else if (formVal.total_amt == "" || formVal.total_amt == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Insert Amount!", "info");
            // this.resetgrid()
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
                            // this.resetgrid();
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
                        if (Number(ledgerBal) == Number(formVal.total_amt)) {
                            object['AC_CLOSED'] = '1';
                            this.transferTotalAmount = this.transferTotalAmount + Number(formVal.total_amt);
                            let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value);
                            if (comparison >= this.transferTotalAmount) {
                                this.multigrid.push(object);
                            }
                            else {
                                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.total_amt);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
                            }
                        }
                        else if (Number(ledgerBal) > Number(formVal.total_amt)) {
                            this.transferTotalAmount = this.transferTotalAmount + Number(formVal.total_amt);
                            let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value);
                            if (comparison >= this.transferTotalAmount) {
                                this.multigrid.push(object);
                                // this.resetgrid();
                            }
                            else {
                                this.transferTotalAmount = this.transferTotalAmount - Number(formVal.total_amt);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
                            }
                        }
                        else if (Number(ledgerBal) < Number(formVal.total_amt)) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Amount Is Greater Than Closing Balance`, 'info');
                        }
                    });
                }
                else {
                    this.transferTotalAmount = this.transferTotalAmount + Number(formVal.total_amt);
                    let comparison = Number(this.angForm.controls['NETPAYABLEAMT'].value);
                    if (comparison >= this.transferTotalAmount) {
                        this.multigrid.push(object);
                    }
                    else {
                        this.transferTotalAmount = this.transferTotalAmount - Number(formVal.total_amt);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
                    }
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', 'Closing Account And Transfer Account Cannot Be Same', 'info');
                // this.resetgrid();
            }
            // this.resetgrid()
        }
    }
    editTransferAccount(id) {
        this.transferIndex = id;
        this.transferACID = this.multigrid[id].id;
        // this.getscheme = this.allScheme[id].id;
        this.transferGrid = this.multigrid[id];
        this.jointShowButton = false;
        this.jointUpdateShow = true;
        this.angForm.patchValue({
            particulars: this.multigrid[id].NARRATION,
            amount: this.multigrid[id].TRAN_AMOUNT,
            account_no: this.multigrid[id].TRANSFER_ACNO,
            scheme_type: this.selectedTransScheme,
            scheme: this.submitScheme.S_NAME,
        });
        this.ngacno = this.multigrid[id].ACNO;
        this.selectedTransScheme = this.multigrid[id].TRANSFER_ACTYPE;
    }
    updateTransferAcccount() {
        let index = this.transferIndex;
        let formVal = this.angForm.value;
        var object = {
            Scheme: this.submitScheme.S_NAME,
            TRANSFER_ACNO: this.submitAccountNo.AC_NO,
            TRANSFER_ACTYPE: this.selectedTransScheme,
            NARRATION: formVal.particulars,
            TRAN_AMOUNT: formVal.amount,
        };
        if (formVal.scheme == "" || formVal.scheme == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Select Scheme!", "error");
        }
        else if (formVal.account_no == "" || formVal.account_no == null) {
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
    //movable
    isOptionTooLong(option) {
        const selectedText = option.label + ' ' + option.name;
        return selectedText.length > 40;
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
                const successMessage = `Account Closed Successfully ! <b> Please Note Voucher Number </b> <br> ${data.TRAN_NO}`;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', successMessage, 'success');
                let totalDebit = formValue.amount;
                let totalCredit = data.NET_PAYABLE_AMOUNT;
                let difference = totalCredit - totalDebit;
                this.totalDebit = totalDebit;
                this.totalCredit = totalCredit;
                this.difference = difference;
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
        this.angForm.controls["scheme_type"].reset();
        // this.angForm.controls["scheme"].reset();
        // this.angForm.controls["account_no"].reset();
        this.angForm.controls["tran_mode"].reset();
        this.angForm.controls["total_amt"].reset();
        this.angForm.controls["chequeNo"].reset();
        this.angForm.controls["ChequeDate"].reset();
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
            this.angForm.enable();
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
            this.monthDays = data1.SCHEME.S_INTCALTP;
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
                this.totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (ledgerAmt + netAmt - TDSAmt - surchargeAmt - penalAmt).toFixed(2) : (ledgerAmt - Math.abs(netAmt) - TDSAmt - surchargeAmt - penalAmt).toFixed(2);
                this.angForm.patchValue({
                    NETPAYABLEAMT: this.totalNetAmt
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
                    type: data1.TRAN_TYPE == 'CS' ? 'cash' : data1.TRAN_TYPE == 'TR' ? 'transfer' : '',
                    TRAN_NO: data1.TRAN_NO,
                    branch_code: data1.BRANCH_CODE,
                    selectedScheme: Number(data1.SCHEME.S_NAME),
                    account_no: data1.TRAN_ACNO,
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
    getVoucherData(item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.submitAccountNo = item;
        let customer = this.angForm.controls['account_no'].value;
        this.DayOpBal = 0;
        this.selectedMode = null;
        // this.angForm.controls['total_amt'].reset()
        // this.angForm.controls['amt'].reset()
        // this.angForm.controls['tran_mode'].reset();
        this.tempscheme = this.selectedScheme;
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
            date: addInFrom
        };
        //
        this._vservice.getledgerbalance(openingobj).subscribe(data => {
            this.DayOpBal = Math.abs(data);
            // this.DayOpBal = Number(this.DayOpBal).toFixed(2)
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
            if (((_c = this.submitScheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_d = this.submitScheme) === null || _d === void 0 ? void 0 : _d.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_e = this.submitScheme) === null || _e === void 0 ? void 0 : _e.S_ACNOTYPE) == 'LN' && ((_f = this.submitScheme) === null || _f === void 0 ? void 0 : _f.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
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
            if (((_g = this.submitScheme) === null || _g === void 0 ? void 0 : _g.S_ACNOTYPE) == 'TD' && ((_h = this.submitScheme) === null || _h === void 0 ? void 0 : _h.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_j = this.submitScheme) === null || _j === void 0 ? void 0 : _j.S_ACNOTYPE) == 'PG' && ((_k = this.submitScheme) === null || _k === void 0 ? void 0 : _k.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_l = this.submitScheme) === null || _l === void 0 ? void 0 : _l.S_ACNOTYPE) == 'LN' && ((_m = this.submitScheme) === null || _m === void 0 ? void 0 : _m.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
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
    ResetForm() {
        this.ngOnInit();
        this.resetForm();
        this.scheme_type = '';
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
TermDepositAccountClosingComponent.ɵfac = function TermDepositAccountClosingComponent_Factory(t) { return new (t || TermDepositAccountClosingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__["TransactionCashModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__["TransactionTransferModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__["SchemeTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_10__["MultiVoucherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_11__["SavingMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_policy_settings_definations_term_deposit_ir_term_deposit_ir_service__WEBPACK_IMPORTED_MODULE_13__["TermDepositInterestRateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_term_deposit_account_closing_service__WEBPACK_IMPORTED_MODULE_16__["TermDepositAccountClosingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_17__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_voucher_entry_voucher_entry_service__WEBPACK_IMPORTED_MODULE_18__["VoucherEntryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["ACMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_21__["SystemMasterParametersService"])); };
TermDepositAccountClosingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermDepositAccountClosingComponent, selectors: [["app-term-deposit-account-closing"]], viewQuery: function TermDepositAccountClosingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerhide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerNarrationhide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.narrationField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.INTAMT = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.NOTINTAMT = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitbtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.swiper = _t.first);
    } }, inputs: { childMessage: "childMessage" }, outputs: { reloadTablePassing: "reloadTablePassing" }, decls: 411, vars: 61, consts: [["style", "width: 270px;height: 335px;z-index: 1000;\n    position: absolute;margin-top: 14%;margin-left:51%", 4, "ngIf"], ["novalidate", "", 3, "formGroup"], [1, "row"], [1, "col-md-9"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [1, "card-body"], [1, "solid"], [1, "col-sm-12", "col-md-2"], ["for", "AC_BRANCH"], [1, "col-sm-12", "col-md-4"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["formControlName", "branch_code", "autofocus", "", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "focus"], ["branchcode", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["for", "AC_EXPDT"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "date", "disabled", "", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelChange"], ["for", "scheme"], ["bindValue", "value", "appTheme", "", "formControlName", "scheme", 3, "ngModel", "selectOnTab", "ngModelChange", "focus", "change"], ["selectcode", ""], [1, "col-sm-6"], ["bindValue", "bankacno", "appTheme", "", "formControlName", "account_no", 3, "ngModel", "selectOnTab", "ngModelChange", "focus", "change"], ["accountNumber", ""], [1, "col-sm"], ["style", "color: rgb(7, 144, 7);", 4, "ngIf"], ["style", "color: rgb(194, 55, 55);", 4, "ngIf"], [1, "col-md-6", "solid1"], [1, "col-md-4"], [1, "col-md-3"], ["type", "text", "maxlength", "12", "pattern", "\\d{1,20}(\\.\\d{1,2})?", "formControlName", "InterestRate", "disabled", "", 1, "form-control", 2, "text-align", "righ t", 3, "keypress"], ["class", "row", 4, "ngIf"], ["class", " row", 4, "ngIf"], [1, "col-md-6"], ["type", "text", "maxlength", "15", "formControlName", "TOTAL_INT", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keypress"], ["type", "text", "maxlength", "15", "formControlName", "NET_INTAMT", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout", "keypress"], ["for", "narration"], [1, "col-md"], ["formControlName", "narration", 1, "form-control", 3, "ngModel", "ngModelChange"], ["narrationField", ""], [1, "fa", "fa-info-circle", "errspan", 3, "click"], ["type", "text", "maxlength", "15", "formControlName", "LEDGER_BAL", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout", "keypress"], ["style", "font-weight: 800; font-size: 16px;", 4, "ngIf"], ["type", "text", "maxlength", "15", "formControlName", "PAYABLE_INTAMT", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout", "keypress"], ["type", "text", "maxlength", "15", "disabled", "", "formControlName", "NET_INTAMT", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout", "change", "keypress"], [2, "font-weight", "800", "font-size", "16px"], ["type", "text", "maxlength", "15", "formControlName", "TDS_AMT", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout", "change", "keypress"], ["type", "text", "maxlength", "15", "formControlName", "SURCHARGE_AMT", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout", "change", "keypress"], ["type", "text", "maxlength", "15", "formControlName", "PENAL_INT", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout", "change", "keypress"], ["type", "text", "maxlength", "15", "disabled", "", "formControlName", "NETPAYABLEAMT", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout", "keypress"], [1, "form-radio"], [1, "radio", "radio-inline"], [1, "inputRadio"], ["type", "radio", "formControlName", "SAVING_PIGMY", "name", "SAVING_PIGMY", "value", "FormC", "id", "formT", 3, "change"], [1, "helper"], ["type", "radio", "value", "FormT", "formControlName", "SAVING_PIGMY", "id", "formC", "name", "SAVING_PIGMY", 3, "change"], ["class", "row", "id", "FORMA", 4, "ngIf"], [1, "col-sm", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm btn-submit", "appTheme", "", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [1, "col-md-3", "col-sm-12", "col-xm-12"], [1, "transaction-item"], [1, "avatar", "bg-light-primary", "rounded", "float-start"], [1, "avatar-content"], [1, "fa", "fa-google-wallet", "field-icon"], [1, "d-flex"], [1, "transaction-percentage"], [1, "transaction-title", 2, "font-size", "12px"], [1, "fw-bolder", "transaction-title", "text-primary", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], ["aria-hidden", "true", 1, "fa", "fa-inr"], [1, "avatar", "bg-light-success", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "avatar", "bg-light-info", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-danger", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "user-avatar-section"], ["height", "50", "width", "80", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], ["height", "25", "width", "80", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], [1, "user-info", "text-center"], [1, "info-container"], [1, "list-unstyled"], [1, "mb-75"], [1, "fw-bolder", "me-25"], [1, "badge", "bg-light-success"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [1, "table", "table-bordered"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 2, "display", "none", 3, "click"], ["triggerhide", ""], ["modalNarration", ""], ["triggerNarrationhide", ""], [2, "width", "270px", "height", "335px", "z-index", "1000", "position", "absolute", "margin-top", "14%", "margin-left", "51%"], ["width", "400", "height", "300", 3, "src"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "ngClass"], [2, "color", "rgb(7, 144, 7)"], [2, "color", "rgb(194, 55, 55)"], ["type", "text", "maxlength", "6", "pattern", "^[0-9]+$", "formControlName", "MaturedDays", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "focus", "keypress"], ["colspan", "2"], ["formControlName", "ClosingQuaters", "type", "text", "disabled", "", 2, "width", "50%", "text-align", "right"], ["type", "text", "maxlength", "12", "formControlName", "QInterest", "disabled", "", 2, "text-align", "right"], ["type", "text", "formControlName", "ClosingMonth", "disabled", "", 2, "width", "50%", "text-align", "right"], ["type", "text", "maxlength", "12", "formControlName", "MInterest", "disabled", "", 2, "text-align", "right"], ["type", "text", "formControlName", "ClosingDays", "disabled", "", 2, "width", "50%", "text-align", "right"], ["type", "text", "maxlength", "12", "formControlName", "DInterest", "disabled", "", 2, "text-align", "right"], ["maxlength", "5", "formControlName", "maturedInterest", "type", "text", 1, "form-control", 2, "width", "50%", "text-align", "right", 3, "change", "focus", "keypress"], ["disabled", "", "maxlength", "12", "formControlName", "maturedIntAmt", "type", "text", 1, "form-control", 2, "width", "50%", "text-align", "right", 3, "focus", "keypress"], ["type", "text", "maxlength", "15", "formControlName", "POSTED_INT", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout", "keypress"], ["id", "FORMA", 1, "row"], [1, "col-sm-12"], ["for", "chequeNo"], [1, "col-md-2"], ["type", "text", "name", "chequeNo", "placeholder", " ", "id", "chequeNo", "value", "", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "formControlName", "chequeNo", "maxlength", "10", 1, "form-control", 2, "text-transform", "capitalize", 3, "keypress"], ["for", "ChequeDate"], ["type", "text", "placeholder", "dd/mm/yyyy", "placement", "top", "appButton", "", "minlength", "10", "maxlength", "10", "bsDatepicker", "", "formControlName", "ChequeDate", 1, "form-control", 3, "maxDate", "minDate", "bsConfig", "keydown.Tab"], ["ChequeDate", "bsDatepicker"], [1, "col-sm-2"], ["formControlName", "scheme_type", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "change", "focus"], ["selectCode", ""], [1, "col-sm-12", "col-md-6"], ["bindValue", "id", "appTheme", "", "formControlName", "scheme", 3, "ngModel", "selectOnTab", "ngModelChange", "change", "focus"], ["selectScheme", ""], ["bindValue", "id", "formControlName", "account_no", "appTheme", "", 3, "ngModel", "selectOnTab", "virtualScroll", "ngModelChange", "focus", "change"], ["selectAcc", ""], ["for", "AC_PARTICULAR"], ["formControlName", "particulars", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-4"], ["bindValue", "id", "formControlName", "tran_mode", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "focus", "change"], ["selectMode", ""], ["for", "amount"], ["type", "text", "name", "AC_PARTICULAR", "placeholder", " ", "id", "AC_PARTICULAR", "value", "0", "maxlength", "15", "appTheme", "", "required", "", "formControlName", "amount", 1, "form-control", 3, "keypress", "keyup", "focus", "keydown.Tab", "change", "focusout"], ["amt", "", "swiper", ""], ["for", "total_amount"], ["type", "text", "name", "total_amount", "placeholder", " ", "id", "total_amount", "title", "Input allowed only A-Z a-z 0-9 - / . (Space)", "required", "", "formControlName", "total_amt", "disabled", "", 1, "form-control", 2, "text-transform", "capitalize", "font-size", "15px", 3, "ngModel", "ngModelChange"], [1, "col-md-8"], ["type", "button", "class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "compact"], [2, "text-align", "right"], [4, "ngFor", "ngForOf"], [1, "bg-light-danger", "text-right"], [1, "text-danger"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "Intdate", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelChange", "bsValueChange"], ["type", "text", "pattern", "\\d{1,8}(\\.\\d{2})?", "maxlength", "11", 2, "width", "100%", "border", "none", "text-align", "right", 3, "value", "disabled", "keypress", "keyup", "focusout", "focus"], ["INTAMT", ""], ["type", "text", "pattern", "\\d{1,8}(\\.\\d{2})?", "maxlength", "11", "pattern", "\\d{1,10}(\\.\\d{1,2})?", 2, "width", "100%", "border", "none", "text-align", "right", 3, "value", "disabled", "keypress", "keyup", "focusout", "focus"], ["NOTINTAMT", ""], ["colspan", "5", 1, "no-data-available"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["id", "editbutton", "placement", "top", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], ["colspan", "4", 2, "text-align", "right"], ["type", "submit", "appTheme", "", 1, "btn", "btn-outline-primary", "btn-sm", "btn-submit", 3, "click"], [3, "click"]], template: function TermDepositAccountClosingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_Template_ng_select_ngModelChange_26_listener($event) { return ctx.selectedBranch = $event; })("focus", function TermDepositAccountClosingComponent_Template_ng_select_focus_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return ctx.onFocus(_r1); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_Template_ng_select_ngModelChange_46_listener($event) { return ctx.selectedScheme = $event; })("focus", function TermDepositAccountClosingComponent_Template_ng_select_focus_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return ctx.onFocus(_r4); })("change", function TermDepositAccountClosingComponent_Template_ng_select_change_46_listener($event) { return ctx.schemechange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TermDepositAccountClosingComponent_ng_option_48_Template, 3, 6, "ng-option", 18);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TermDepositAccountClosingComponent_Template_ng_select_ngModelChange_59_listener($event) { return ctx.customer = $event; })("focus", function TermDepositAccountClosingComponent_Template_ng_select_focus_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60); return ctx.onFocus(_r7); })("change", function TermDepositAccountClosingComponent_Template_ng_select_change_59_listener($event) { return ctx.getAccountDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, TermDepositAccountClosingComponent_ng_option_61_Template, 3, 6, "ng-option", 18);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_Template_i_click_109_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](390); return _r30.show(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](196, TermDepositAccountClosingComponent_div_196_Template, 127, 31, "div", 61);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_Template_button_click_373_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](369); return _r27.hide(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_Template_button_click_386_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](369); return _r27.hide(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_Template_button_click_394_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](390); return _r30.hide(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermDepositAccountClosingComponent_Template_button_click_407_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](390); return _r30.hide(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](60, _c8))("ngModel", ctx.date);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _theme_directive__WEBPACK_IMPORTED_MODULE_24__["ThemeDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_26__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_27__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgClass"], _button_directive__WEBPACK_IMPORTED_MODULE_28__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DecimalPipe"]], styles: [".table-responsive[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  overflow-x: auto;\n  padding-top: -46px;\n  margin: -8px;\n  margin-right: -28px;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 20px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n}\n\ndiv.solid1[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: thin;\n  padding: 1%;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.transaction-item[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.bg-light-primary[_ngcontent-%COMP%] {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367F0 !important;\n}\n\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.357rem !important;\n}\n\n.float-start[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin-right: 1.2rem;\n}\n\n.avatar.bg-light-primary[_ngcontent-%COMP%] {\n  color: #7367F0 !important;\n}\n\n.avatar.bg-light-success[_ngcontent-%COMP%] {\n  color: #28C76F !important;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background-color: #C3C3C3;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n  color: #FFF;\n  display: inline-flex;\n  font-size: 1rem;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 600;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n}\n\n.avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 0.857rem;\n}\n\n.bg-light-success[_ngcontent-%COMP%] {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28C76F !important;\n}\n\n.bg-light-danger[_ngcontent-%COMP%] {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #EA5455 !important;\n}\n\n.transaction-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.errspan[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 21px;\n  margin-top: -20px;\n  position: relative;\n  z-index: 2;\n  color: red;\n}\n\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: white !important;\n  color: black !important;\n}\n\n.main-body[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  padding-bottom: 4% !important;\n  transition: all ease-in 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #ff5252;\n  color: #ff5252;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 11px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 14px;\n  border-radius: 5px;\n  padding-bottom: 22px;\n  padding-top: 4px;\n  height: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 14px;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px;\n  max-height: 18px;\n  align-items: center;\n  font-size: 11px;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 18px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 5px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-bottom: 0px;\n  padding-top: 4px;\n}\n\n.movable-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.movable-text[_ngcontent-%COMP%] {\n  animation: marquee 15s linear infinite;\n  \n}\n\n@keyframes marquee {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vdGVybS1kZXBvc2l0LWFjY291bnQtY2xvc2luZy90ZXJtLWRlcG9zaXQtYWNjb3VudC1jbG9zaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUlBLG1CQUFBO0VBSUEsOEJBQUE7QUFDRjs7QUFFQTtFQUVFLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnREFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQ0FBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFHQTtFQUNFLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFJQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUlBLGFBQUE7RUFJQSx1QkFBQTtFQUlBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsOENBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBSUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGtDQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUVFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxzQ0FBQTtFQUF3QyxzQkFBQTtBQUQxQzs7QUFJQTtFQUNFO0lBQUssd0JBQUE7RUFBTDtFQUNBO0lBQU8sNEJBQUE7RUFFUDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vdGVybS1kZXBvc2l0LWFjY291bnQtY2xvc2luZy90ZXJtLWRlcG9zaXQtYWNjb3VudC1jbG9zaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAtNDZweDtcclxuICBtYXJnaW46IC04cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjhweDtcclxufVxyXG5cclxuLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucmVxdWlyZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBtYXJnaW46IDNweDtcclxufVxyXG5cclxuZGl2LnNvbGlkIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDIlXHJcbn1cclxuXHJcbmRpdi5zb2xpZDEge1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIHBhZGRpbmc6IDElXHJcbn1cclxuXHJcbi5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtdHJhbnNhY3Rpb24gLnRyYW5zYWN0aW9uLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kLWZsZXgge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1saWdodC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDExNSwgMTAzLCAyNDAsIC4xMikgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzczNjdGMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm91bmRlZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNTdyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsb2F0LXN0YXJ0IHtcclxuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC10cmFuc2FjdGlvbiAudHJhbnNhY3Rpb24taXRlbSAuYXZhdGFyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcclxufVxyXG5cclxuLmF2YXRhci5iZy1saWdodC1wcmltYXJ5IHtcclxuICBjb2xvcjogIzczNjdGMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXZhdGFyLmJnLWxpZ2h0LXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjMjhDNzZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MzQzNDMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI0ZGRjtcclxuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtIC5hdmF0YXIgLmF2YXRhci1jb250ZW50IHtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbn1cclxuXHJcbi5hdmF0YXIgLmF2YXRhci1jb250ZW50IHtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAuODU3cmVtO1xyXG59XHJcblxyXG4uYmctbGlnaHQtc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTk5LCAxMTEsIC4xMikgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzI4Qzc2RiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctbGlnaHQtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgODQsIDg1LCAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNFQTU0NTUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbn1cclxuXHJcbi5lcnJzcGFuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluLWJvZHkgLnBhZ2Utd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0JSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuM3M7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmY1MjUyO1xyXG4gIGNvbG9yOiAjZmY1MjUyO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAvLyBmbG9hdDogbGVmdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIycHg7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAvLyBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICBjb2xvcjogIzMzMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1pbi1oZWlnaHQ6IDE4cHg7XHJcbiAgbWF4LWhlaWdodDogMThweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5ib3JkZXItbGFibGUtZmx0IC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgcGFkZGluZzogMHJlbSAwLjdyZW07XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWJsb2NrIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG59XHJcblxyXG4uY29sLTEsXHJcbi5jb2wtMixcclxuLmNvbC0zLFxyXG4uY29sLTQsXHJcbi5jb2wtNSxcclxuLmNvbC02LFxyXG4uY29sLTcsXHJcbi5jb2wtOCxcclxuLmNvbC05LFxyXG4uY29sLTEwLFxyXG4uY29sLTExLFxyXG4uY29sLTEyLFxyXG4uY29sLFxyXG4uY29sLWF1dG8sXHJcbi5jb2wtc20tMSxcclxuLmNvbC1zbS0yLFxyXG4uY29sLXNtLTMsXHJcbi5jb2wtc20tNCxcclxuLmNvbC1zbS01LFxyXG4uY29sLXNtLTYsXHJcbi5jb2wtc20tNyxcclxuLmNvbC1zbS04LFxyXG4uY29sLXNtLTksXHJcbi5jb2wtc20tMTAsXHJcbi5jb2wtc20tMTEsXHJcbi5jb2wtc20tMTIsXHJcbi5jb2wtc20sXHJcbi5jb2wtc20tYXV0byxcclxuLmNvbC1tZC0xLFxyXG4uY29sLW1kLTIsXHJcbi5jb2wtbWQtMyxcclxuLmNvbC1tZC00LFxyXG4uY29sLW1kLTUsXHJcbi5jb2wtbWQtNixcclxuLmNvbC1tZC03LFxyXG4uY29sLW1kLTgsXHJcbi5jb2wtbWQtOSxcclxuLmNvbC1tZC0xMCxcclxuLmNvbC1tZC0xMSxcclxuLmNvbC1tZC0xMixcclxuLmNvbC1tZCxcclxuLmNvbC1tZC1hdXRvLFxyXG4uY29sLWxnLTEsXHJcbi5jb2wtbGctMixcclxuLmNvbC1sZy0zLFxyXG4uY29sLWxnLTQsXHJcbi5jb2wtbGctNSxcclxuLmNvbC1sZy02LFxyXG4uY29sLWxnLTcsXHJcbi5jb2wtbGctOCxcclxuLmNvbC1sZy05LFxyXG4uY29sLWxnLTEwLFxyXG4uY29sLWxnLTExLFxyXG4uY29sLWxnLTEyLFxyXG4uY29sLWxnLFxyXG4uY29sLWxnLWF1dG8sXHJcbi5jb2wteGwtMSxcclxuLmNvbC14bC0yLFxyXG4uY29sLXhsLTMsXHJcbi5jb2wteGwtNCxcclxuLmNvbC14bC01LFxyXG4uY29sLXhsLTYsXHJcbi5jb2wteGwtNyxcclxuLmNvbC14bC04LFxyXG4uY29sLXhsLTksXHJcbi5jb2wteGwtMTAsXHJcbi5jb2wteGwtMTEsXHJcbi5jb2wteGwtMTIsXHJcbi5jb2wteGwsXHJcbi5jb2wteGwtYXV0byB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG4ubW92YWJsZS10ZXh0IHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubW92YWJsZS10ZXh0IHtcclxuICBhbmltYXRpb246IG1hcnF1ZWUgMTVzIGxpbmVhciBpbmZpbml0ZTsgLyogQWRqdXN0ZWQgZHVyYXRpb24gKi9cclxufVxyXG5cclxuQGtleWZyYW1lcyBtYXJxdWVlIHtcclxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9IFxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositAccountClosingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-term-deposit-account-closing',
                templateUrl: './term-deposit-account-closing.component.html',
                styleUrls: ['./term-deposit-account-closing.component.scss']
            }]
    }], function () { return [{ type: _shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__["TransactionCashModeService"] }, { type: _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__["TransactionTransferModeService"] }, { type: _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__["SchemeTypeService"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["OwnbranchMasterService"] }, { type: _multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_10__["MultiVoucherService"] }, { type: _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_11__["SavingMasterService"] }, { type: _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__["SchemeAccountNoService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _master_policy_settings_definations_term_deposit_ir_term_deposit_ir_service__WEBPACK_IMPORTED_MODULE_13__["TermDepositInterestRateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"] }, { type: _term_deposit_account_closing_service__WEBPACK_IMPORTED_MODULE_16__["TermDepositAccountClosingService"] }, { type: _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_17__["CustomerIdService"] }, { type: _voucher_entry_voucher_entry_service__WEBPACK_IMPORTED_MODULE_18__["VoucherEntryService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["ACMasterDropdownService"] }, { type: src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["SchemeCodeDropdownService"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_21__["SystemMasterParametersService"] }]; }, { reloadTablePassing: [{
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
        }], INTAMT: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['INTAMT']
        }], NOTINTAMT: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['NOTINTAMT']
        }], submitbtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['submitbtn']
        }], swiper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['swiper']
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
/* harmony import */ var src_app_shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/dropdownService/bank-Master-dropdown.service */ "./src/app/shared/dropdownService/bank-Master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var _master_policy_settings_definations_term_deposit_ir_term_deposit_ir_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../master/policy-settings/definations/term-deposit-ir/term-deposit-ir.service */ "./src/app/theme/master/policy-settings/definations/term-deposit-ir/term-deposit-ir.service.ts");
























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
        src_app_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_18__["SchemeTypeService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["SchemeCodeDropdownService"], _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_20__["SavingMasterService"], src_app_shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_25__["BankMasterService"], src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_26__["ACMasterDropdownService"], _master_policy_settings_definations_term_deposit_ir_term_deposit_ir_service__WEBPACK_IMPORTED_MODULE_27__["TermDepositInterestRateService"]], imports: [[
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
                    src_app_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_18__["SchemeTypeService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["SchemeCodeDropdownService"], _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_20__["SavingMasterService"], src_app_shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_25__["BankMasterService"], src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_26__["ACMasterDropdownService"], _master_policy_settings_definations_term_deposit_ir_term_deposit_ir_service__WEBPACK_IMPORTED_MODULE_27__["TermDepositInterestRateService"]]
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