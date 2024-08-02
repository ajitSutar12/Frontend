(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~4926e085"],{

/***/ "./src/app/shared/dropdownService/bank-Master-dropdown.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/dropdownService/bank-Master-dropdown.service.ts ***!
  \************************************************************************/
/*! exports provided: BankMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankMasterService", function() { return BankMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class BankMasterService {
    constructor(http) {
        this.http = http;
        this.bankMasterObject = new Array();
        // API 
        //// bank-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getBankList() {
        this.bankMasterObject = [];
        return this.http.get(this.url + '/bank-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.BANK_CODE + ' ' + element.BANK_NAME, value: element.id, name: element.BANK_NAME };
                this.bankMasterObject.push(obj);
            });
            return this.bankMasterObject;
        }));
    }
}
BankMasterService.ɵfac = function BankMasterService_Factory(t) { return new (t || BankMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BankMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BankMasterService, factory: BankMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BankMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/elements/scheme-type.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/elements/scheme-type.service.ts ***!
  \********************************************************/
/*! exports provided: SchemeTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeTypeService", function() { return SchemeTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class SchemeTypeService {
    getCharacters() {
        return this.cloneOptions(SchemeTypeService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(SchemeTypeService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(SchemeTypeService.PLAYER_ONE);
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
SchemeTypeService.PLAYER_ONE = [
    { value: 'AG', label: 'Pigmy Agent(AG)' },
    { value: 'CA', label: 'Current Deposit(CA)' },
    { value: 'CC', label: 'Cash Credit(CC)' },
    { value: 'DS', label: 'Dispute Loan(DS)' },
    { value: 'GS', label: 'Anamat Account(GS)' },
    { value: 'GL', label: 'General Ledger(GL)' },
    { value: 'IV', label: 'Investment Account(IV)' },
    { value: 'LN', label: 'Term Loan(LN)' },
    { value: 'PG', label: 'Pigmy Deposit(PG)' },
    { value: 'SB', label: 'Savings Deposit(SB)' },
    { value: 'SH', label: 'Shares(SH)' },
    { value: 'TD', label: 'Term Deposit(TD)' },
    { value: 'LK', label: 'Locker(LK)' }
];
SchemeTypeService.ɵfac = function SchemeTypeService_Factory(t) { return new (t || SchemeTypeService)(); };
SchemeTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchemeTypeService, factory: SchemeTypeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeTypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/pigmy-report/iframe5/iframe5/iframe5.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/reports/pigmy-report/iframe5/iframe5/iframe5.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Iframe5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe5Component", function() { return Iframe5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class Iframe5Component {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
    ngOnInit() {
    }
}
Iframe5Component.ɵfac = function Iframe5Component_Factory(t) { return new (t || Iframe5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
Iframe5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Iframe5Component, selectors: [["app-iframe5"]], inputs: { url: "url" }, decls: 9, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "card"], ["novalidate", ""], [1, "card-block"], [1, "embed-responsive", "embed-responsive-16by9"], [1, "loader"], ["src", "assets/Loading.gif"], [3, "src"]], template: function Iframe5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, styles: [".loader[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12;\n  top: 15;\n  margin-left: 43%;\n  margin-top: 5%;\n  background: url(/src/assets/loading.gif) 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvcmVwb3J0cy9waWdteS1yZXBvcnQvaWZyYW1lNS9pZnJhbWU1L2lmcmFtZTUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvcGlnbXktcmVwb3J0L2lmcmFtZTUvaWZyYW1lNS9pZnJhbWU1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEyO1xyXG4gICAgdG9wOiAxNTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MyU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvc3JjL2Fzc2V0cy9sb2FkaW5nLmdpZikgMCAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Iframe5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iframe5',
                templateUrl: './iframe5.component.html',
                styleUrls: ['./iframe5.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/transaction/voucher-entry/voucher-entry.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/transaction/voucher-entry/voucher-entry.component.ts ***!
  \****************************************************************************/
/*! exports provided: VoucherEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherEntryComponent", function() { return VoucherEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/elements/transaction-cash-mode.service */ "./src/app/shared/elements/transaction-cash-mode.service.ts");
/* harmony import */ var _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/elements/transaction-transfer-mode.service */ "./src/app/shared/elements/transaction-transfer-mode.service.ts");
/* harmony import */ var _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/elements/scheme-type.service */ "./src/app/shared/elements/scheme-type.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _voucher_entry_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./voucher-entry.service */ "./src/app/theme/transaction/voucher-entry/voucher-entry.service.ts");
/* harmony import */ var _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../master/customer/saving-master/saving-master.service */ "./src/app/theme/master/customer/saving-master/saving-master.service.ts");
/* harmony import */ var src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../master/customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/dropdownService/bank-Master-dropdown.service */ "./src/app/shared/dropdownService/bank-Master-dropdown.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _submit_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../submit.directive */ "./src/app/theme/submit.directive.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../button.directive */ "./src/app/theme/button.directive.ts");
/* harmony import */ var _reports_pigmy_report_iframe5_iframe5_iframe5_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../reports/pigmy-report/iframe5/iframe5/iframe5.component */ "./src/app/theme/reports/pigmy-report/iframe5/iframe5/iframe5.component.ts");





























const _c0 = ["triggerhide"];
const _c1 = ["triggerhide1"];
const _c2 = ["focusbutton"];
const _c3 = ["swiper"];
const _c4 = ["submitbtn"];
const _c5 = ["INTAMT"];
const _c6 = ["NOTINTAMT"];
const _c7 = ["token"];
const _c8 = ["bankNameField"];
const _c9 = ["narrationField"];
const _c10 = ["tran_mode"];
const _c11 = ["myDiv"];
function VoucherEntryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.previewImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VoucherEntryComponent_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r47.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r47.label, "");
} }
function VoucherEntryComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoucherEntryComponent_div_30_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.angForm.controls["branch_code"].errors == null ? null : ctx_r4.angForm.controls["branch_code"].errors.required);
} }
function VoucherEntryComponent_ng_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r49.S_ACNOTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.S_ACNOTYPE);
} }
function VoucherEntryComponent_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoucherEntryComponent_div_62_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["scheme_type"].errors == null ? null : ctx_r7.angForm.controls["scheme_type"].errors.required);
} }
function VoucherEntryComponent_ng_option_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r51.S_APPL, " ", item_r51.S_NAME, "");
} }
function VoucherEntryComponent_div_74_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoucherEntryComponent_div_74_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["scheme"].errors == null ? null : ctx_r10.angForm.controls["scheme"].errors.required);
} }
function VoucherEntryComponent_ng_option_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r53.AC_NO, " ", item_r53.AC_NAME, "");
} }
function VoucherEntryComponent_div_87_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoucherEntryComponent_div_87_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.angForm.controls["account_no"].errors == null ? null : ctx_r13.angForm.controls["account_no"].errors.required);
} }
function VoucherEntryComponent_ng_option_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r55.id, " ", item_r55.value, "");
} }
function VoucherEntryComponent_div_100_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoucherEntryComponent_div_100_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.angForm.controls["tran_mode"].errors == null ? null : ctx_r16.angForm.controls["tran_mode"].errors.required);
} }
function VoucherEntryComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Token Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_113_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 107, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VoucherEntryComponent_div_113_Template_input_keypress_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); return $event.charCode >= 48 && $event.charCode < 58; })("focusout", function VoucherEntryComponent_div_113_Template_input_focusout_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.checkTokenCondition($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c12 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function VoucherEntryComponent_div_114_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cheque Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function VoucherEntryComponent_div_114_div_1_Template_input_keyup_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.chequeNoData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cheque Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c12))("maxDate", ctx_r61.maxDate)("minDate", ctx_r61.minDate);
} }
function VoucherEntryComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoucherEntryComponent_div_114_div_1_Template, 15, 4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 111, 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_div_114_Template_textarea_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.BankName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_div_114_Template_i_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](280); return _r44.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.showChequeDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r21.BankName);
} }
function VoucherEntryComponent_div_133_tbody_17_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_div_133_tbody_17_tr_1_td_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r77.IntersetHeadDate = $event; })("bsValueChange", function VoucherEntryComponent_div_133_tbody_17_tr_1_td_3_Template_input_bsValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r79.getColumnValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c12))("ngModel", ctx_r73.IntersetHeadDate)("minDate", ctx_r73.interestMinDate)("maxDate", ctx_r73.interestMaxDate);
} }
function VoucherEntryComponent_div_133_tbody_17_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function VoucherEntryComponent_div_133_tbody_17_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 123, 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VoucherEntryComponent_div_133_tbody_17_tr_1_td_5_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); return $event.charCode == 46 || $event.charCode >= 48 && $event.charCode < 58; })("keydown.Tab", function VoucherEntryComponent_div_133_tbody_17_tr_1_td_5_Template_input_keydown_Tab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const i_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r83.getInputHeadAmt($event, i_r72); })("change", function VoucherEntryComponent_div_133_tbody_17_tr_1_td_5_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const i_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r85.getInputHeadAmt($event, i_r72); })("focus", function VoucherEntryComponent_div_133_tbody_17_tr_1_td_5_Template_input_focus_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r87.selectAllContent($event); })("focusout", function VoucherEntryComponent_div_133_tbody_17_tr_1_td_5_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const i_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r88.checkBalanceFlag($event, i_r72); return ctx_r88.decimalAllContent($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r71.Amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r71.IS_GLBAL_MAINTAIN == "1");
} }
function VoucherEntryComponent_div_133_tbody_17_tr_1_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 123, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VoucherEntryComponent_div_133_tbody_17_tr_1_td_6_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); return $event.charCode == 46 || $event.charCode >= 48 && $event.charCode < 58; })("keydown.Tab", function VoucherEntryComponent_div_133_tbody_17_tr_1_td_6_Template_input_keydown_Tab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const i_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r94.getInputHeadAmt($event, i_r72); })("change", function VoucherEntryComponent_div_133_tbody_17_tr_1_td_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const i_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r96.getInputHeadAmt($event, i_r72); })("focus", function VoucherEntryComponent_div_133_tbody_17_tr_1_td_6_Template_input_focus_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r98.selectAllContent($event); })("focusout", function VoucherEntryComponent_div_133_tbody_17_tr_1_td_6_Template_input_focusout_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const i_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r99.checkBalanceFlag($event, i_r72); return ctx_r99.decimalAllContent($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r71.Amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r71.IS_GLBAL_MAINTAIN == "1");
} }
function VoucherEntryComponent_div_133_tbody_17_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VoucherEntryComponent_div_133_tbody_17_tr_1_td_3_Template, 2, 5, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VoucherEntryComponent_div_133_tbody_17_tr_1_td_4_Template, 1, 0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VoucherEntryComponent_div_133_tbody_17_tr_1_td_5_Template, 3, 2, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoucherEntryComponent_div_133_tbody_17_tr_1_td_6_Template, 3, 2, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r71.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r71.FIELD_AMOUNT == "INTEREST_AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r71.FIELD_AMOUNT != "INTEREST_AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r71.FIELD_AMOUNT == "INTEREST_AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r71.FIELD_AMOUNT != "INTEREST_AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r71.Balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r71.type);
} }
function VoucherEntryComponent_div_133_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoucherEntryComponent_div_133_tbody_17_tr_1_Template, 12, 7, "tr", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r68.headData);
} }
function VoucherEntryComponent_div_133_tbody_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Head");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Interset Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VoucherEntryComponent_div_133_tbody_17_Template, 2, 1, "tbody", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VoucherEntryComponent_div_133_tbody_18_Template, 4, 0, "tbody", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r24.headData == null ? null : ctx_r24.headData.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r24.headData == null ? null : ctx_r24.headData.length) == 0);
} }
function VoucherEntryComponent_div_134_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 133, 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.Tab", function VoucherEntryComponent_div_134_div_2_button_1_Template_button_keydown_Tab_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r111.focus(); })("click", function VoucherEntryComponent_div_134_div_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); ctx_r113.submit(); return _r2.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r109.disableSubmit);
} }
function VoucherEntryComponent_div_134_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoucherEntryComponent_div_134_div_2_button_1_Template, 3, 1, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.showButton);
} }
function VoucherEntryComponent_div_134_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_div_134_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r114.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_134_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_div_134_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r116.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_134_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_div_134_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r118.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_134_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_div_134_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r120.Approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_134_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_div_134_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r122.unApprove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unapprove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_134_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VoucherEntryComponent_div_134_div_2_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VoucherEntryComponent_div_134_button_3_Template, 2, 0, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VoucherEntryComponent_div_134_button_4_Template, 2, 0, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VoucherEntryComponent_div_134_button_5_Template, 2, 0, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VoucherEntryComponent_div_134_button_7_Template, 2, 0, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VoucherEntryComponent_div_134_button_8_Template, 2, 0, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 130, 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_div_134_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](98); return _r14.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "focus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.submitbtnshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.newbtnShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.rejectShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.approveShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.unapproveShow);
} }
function VoucherEntryComponent_div_135_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-iframe5", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx_r126.iframe5url);
} }
function VoucherEntryComponent_div_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Report Frame");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoucherEntryComponent_div_135_div_6_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.showRepo);
} }
function VoucherEntryComponent_div_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pigmy Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 0.00 Cr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherEntryComponent_div_207_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Open Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r28.opendate, "");
} }
function VoucherEntryComponent_div_208_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "As On Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.asondate, "");
} }
function VoucherEntryComponent_div_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sanction Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.sanctiondate, "");
} }
function VoucherEntryComponent_div_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Expiry Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.expirydate, "");
} }
function VoucherEntryComponent_div_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Renewal Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r32.renewaldate, "");
} }
function VoucherEntryComponent_div_212_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sanctions Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r33.sanctionamt, "");
} }
function VoucherEntryComponent_div_213_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Deposit Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r34.depositamt, "");
} }
function VoucherEntryComponent_div_214_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Maturity Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r35.maturityamt, "");
} }
function VoucherEntryComponent_img_244_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function VoucherEntryComponent_img_244_Template_img_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r127.showImage(ctx_r127.customerImg); })("mouseout", function VoucherEntryComponent_img_244_Template_img_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r129.hideImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r36.customerImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VoucherEntryComponent_img_247_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function VoucherEntryComponent_img_247_Template_img_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.showImage(ctx_r130.signture); })("mouseout", function VoucherEntryComponent_img_247_Template_img_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r132.hideImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r37.signture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VoucherEntryComponent_div_248_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.Customer_Name);
} }
function VoucherEntryComponent_li_256_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PAN ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.Customer_Pan_No);
} }
function VoucherEntryComponent_li_257_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+91 ", ctx_r40.Customer_Contact_No, "");
} }
function VoucherEntryComponent_tr_275_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_tr_275_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r135); const item_r133 = ctx.$implicit; const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r134.getNarration(item_r133.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r133 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r133.NARRATION, " ");
} }
function VoucherEntryComponent_tr_296_Template(rf, ctx) { if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_tr_296_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138); const item_r136 = ctx.$implicit; const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r137.getBankName(item_r136.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r136 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r136.name, " ");
} }
class VoucherEntryComponent {
    constructor(sanitizer, TransactionCashModeService, TransactionTransferModeService, SchemeTypeService, ownbranchMasterService, _SchemeCodeDropdown, _service, savingMasterService, _ACMasterDropdownService, _CustomerIdService, _bankmasterService, fb, router) {
        this.sanitizer = sanitizer;
        this.TransactionCashModeService = TransactionCashModeService;
        this.TransactionTransferModeService = TransactionTransferModeService;
        this.SchemeTypeService = SchemeTypeService;
        this.ownbranchMasterService = ownbranchMasterService;
        this._SchemeCodeDropdown = _SchemeCodeDropdown;
        this._service = _service;
        this.savingMasterService = savingMasterService;
        this._ACMasterDropdownService = _ACMasterDropdownService;
        this._CustomerIdService = _CustomerIdService;
        this._bankmasterService = _bankmasterService;
        this.fb = fb;
        this.router = router;
        this.isRadioVisible = true;
        this.reloadTablePassing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.iframe5url = '';
        this.report_url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].report_url;
        this.showRepo = false;
        this.branchCode = null;
        this.branch_codeList = null;
        this.allScheme = new Array(); //from schme master
        this.Pass = 0;
        this.Unpass = 0;
        this.ClearBalance = 0;
        this.AfterVoucher = 0;
        this.InputHeadAmt = 0.00;
        this.pigmyamount = 0;
        this.DatatableHideShow = true;
        this.rejectShow = false;
        this.approveShow = false;
        this.unapproveShow = false;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.submitForm = true;
        // for show hide photo and signature
        this.ShowDocuments = false;
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
            { id: 2, value: 'Deposit for Closing', tran_drcr: 'C', tran_type: 'CS' },
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
        this.totalAmt = 0;
        this.showChequeDetails = false;
        this.DayOpBal = 0;
        this.headData = [];
        this.headShow = false;
        // customerImg: string
        // signture: string
        this.customerImg = 'assets/images/nouser.png';
        this.signture = 'assets/images/nosignature.png';
        this.Customer_Pan_No = '---';
        this.Customer_Contact_No = '---';
        this.disableSubmit = false;
        this.modalClass = 'modalHide';
        this.isShow = false;
        this.submitbtnshow = true;
        this.extenstionaftervoucher = '';
        this.PreviewDiv = false;
        this.tokenshowhide = false;
        this.visibleAnimate = false;
        this.visible = false;
        this.updateShow = false;
        this.newbtnShow = false;
        // Variables for hide/show add and update button
        this.showButton = true;
        this.btnshw = true;
        this.headFlag = false;
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
        if (this.childMessage != undefined) {
            this.editClickHandler(this.childMessage);
        }
    }
    ngOnInit() {
        this.createForm();
        //Day opening Amount
        // this.DayOpBal = 1000;
        // get session branch data
        let user = JSON.parse(localStorage.getItem('user'));
        this.loginUser = user;
        this.type = 'cash';
        // this.tranModeList = this.TranModeCash;
        //get syspara details
        this._service.getSysParaData().subscribe(data => {
            // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
            //debugger
            this.date = data[0].CURRENT_DATE;
            let nextDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, 'DD/MM/YYYY').add(3, 'month').format('YYYY-MM-DD');
            let lastDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, 'DD/MM/YYYY').subtract(3, 'month').format('YYYY-MM-DD');
            this.maxDate = new Date(nextDate);
            this.maxDate.setDate(this.maxDate.getDate());
            this.minDate = new Date(lastDate);
            this.minDate.setDate(this.minDate.getDate());
        });
        this._bankmasterService.getBankList().subscribe(banks => {
            this.bankName = banks;
        });
        //branch List
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(data => {
            this.branch_code = data;
            this.selectedBranch = user.branchId;
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
    printData(data) {
        this.isShow = true;
        this.submitbtnshow = false;
        let obj = data;
        let branch = obj.BRANCH_CODE;
        let voucherNo = obj.TRAN_NO;
        let voucherType = obj.TRAN_SOURCE_TYPE;
        let tran_type = obj.TRAN_TYPE;
        this.iframe5url = this.report_url + "examples/VoucherPrinting.php?&date='" + obj.TRAN_DATE + "'&VoucharNo='" + voucherNo + "'&voucher_type='" + voucherType + "'&tran_type='" + tran_type + "'&Branch='" + branch + "'&branchcode=" + branch + "";
        // console.log(this.iframe5url);
        this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
        this.showRepo = true;
    }
    close() {
        this.isShow = false;
        this.submitbtnshow = true;
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
    createForm() {
        this.angForm = this.fb.group({
            branch_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            temp_over_draft: [''],
            over_draft: [''],
            token: [0],
            particulars: [''],
            total_amt: [0],
            amt: [0],
            slip_no: [''],
            tran_mode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            account_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            scheme: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            scheme_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            date: [''],
            type: ['cash'],
            chequeDate: [''],
            chequeNo: [''],
            bank: [''],
            Intdate: ['']
        });
    }
    resetscheme() {
        if (this.tempschmetype != this.selectedCode) {
            this.selectedScheme = null;
            this.selectedMode = null;
            this.selectedAccountno = null;
            this.introducerACNo = [];
        }
    }
    selectedSchemeCode() {
        this.allScheme = [];
        this.headData = [];
        this.master.forEach(element => {
            if (element.S_ACNOTYPE == this.selectedCode) {
                this.allScheme.push(element);
            }
        });
    }
    getIntroducer(item) {
        //debugger
        var _a, _b, _c, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        this.tempschmetype = this.selectedCode;
        this.introducerACNo = [];
        this.obj = [item.id, this.selectedBranch];
        this.Submitscheme = item;
        if (this.tempscheme != this.selectedScheme) {
            this.selectedAccountno = null;
        }
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
                    this.introducerACNo = data;
                });
                break;
            case 'LK':
                this.savingMasterService.getLokcerSchemeList1(this.obj).subscribe(data1 => {
                    this.introducerACNo = data1;
                });
                break;
        }
        let object = this.TranData.find(t => t.key === this.selectedCode);
        //debugger
        if (this.type == 'cash') {
            this.tranModeList = [];
            object.data.cash.forEach(ele => {
                let obj = this.TranModeCash.find(t => t.id === ele);
                this.tranModeList.push(obj);
            });
            if (this.Submitscheme.S_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && Number(this.DayOpBal) > 0 && this.Submitscheme.S_INSTTYPE == '0') {
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1);
            }
            if (((_a = this.Submitscheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && ((_b = this.Submitscheme) === null || _b === void 0 ? void 0 : _b.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_c = this.Submitscheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_e = this.Submitscheme) === null || _e === void 0 ? void 0 : _e.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_f = this.Submitscheme) === null || _f === void 0 ? void 0 : _f.S_ACNOTYPE) == 'LN' && ((_g = this.Submitscheme) === null || _g === void 0 ? void 0 : _g.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9);
        }
        else {
            this.tranModeList = [];
            object.data.transfer.forEach(ele => {
                let obj = this.TranModeTransfer.find(t => t.id === ele);
                this.tranModeList.push(obj);
            });
            if (this.Submitscheme.S_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && Number(this.DayOpBal) > 0 && this.Submitscheme.S_INSTTYPE == '0') {
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1);
            }
            if (((_h = this.Submitscheme) === null || _h === void 0 ? void 0 : _h.S_ACNOTYPE) == 'TD' && ((_j = this.Submitscheme) === null || _j === void 0 ? void 0 : _j.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_k = this.Submitscheme) === null || _k === void 0 ? void 0 : _k.S_ACNOTYPE) == 'PG' && ((_l = this.Submitscheme) === null || _l === void 0 ? void 0 : _l.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_m = this.Submitscheme) === null || _m === void 0 ? void 0 : _m.S_ACNOTYPE) == 'LN' && ((_o = this.Submitscheme) === null || _o === void 0 ? void 0 : _o.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9);
        }
    }
    //Transaction mode select
    transactionMode(mode) {
        // debugger
        this.selectedMode = null;
        this.type = mode;
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
            branch: this.branchCODE
        };
        this._service.getledgerbalance(obj).subscribe(data => {
            var _a, _b, _c, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            //debugger
            this.DayOpBal = Math.abs(data);
            let object = this.TranData.find(t => t.key === this.selectedCode);
            if (this.type == 'cash') {
                this.tranModeList = [];
                object.data.cash.forEach(ele => {
                    let obj = this.TranModeCash.find(t => t.id === ele);
                    this.tranModeList.push(obj);
                });
                if (((_a = this.Submitscheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && Number(this.DayOpBal) > 0 && this.Submitscheme.S_INSTTYPE == '0') {
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1);
                }
                if (((_b = this.Submitscheme) === null || _b === void 0 ? void 0 : _b.S_ACNOTYPE) == 'TD' && ((_c = this.Submitscheme) === null || _c === void 0 ? void 0 : _c.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_e = this.Submitscheme) === null || _e === void 0 ? void 0 : _e.S_ACNOTYPE) == 'PG' && ((_f = this.Submitscheme) === null || _f === void 0 ? void 0 : _f.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_g = this.Submitscheme) === null || _g === void 0 ? void 0 : _g.S_ACNOTYPE) == 'LN' && ((_h = this.Submitscheme) === null || _h === void 0 ? void 0 : _h.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9);
                this.angForm.patchValue({
                    chequeDate: null
                });
            }
            else {
                this.tranModeList = [];
                object.data.transfer.forEach(ele => {
                    let obj = this.TranModeTransfer.find(t => t.id === ele);
                    this.tranModeList.push(obj);
                });
                if (((_j = this.Submitscheme) === null || _j === void 0 ? void 0 : _j.S_ACNOTYPE) == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && Number(this.DayOpBal) > 0 && this.Submitscheme.S_INSTTYPE == '0') {
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1);
                }
                if (((_k = this.Submitscheme) === null || _k === void 0 ? void 0 : _k.S_ACNOTYPE) == 'TD' && ((_l = this.Submitscheme) === null || _l === void 0 ? void 0 : _l.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_m = this.Submitscheme) === null || _m === void 0 ? void 0 : _m.S_ACNOTYPE) == 'PG' && ((_o = this.Submitscheme) === null || _o === void 0 ? void 0 : _o.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_p = this.Submitscheme) === null || _p === void 0 ? void 0 : _p.S_ACNOTYPE) == 'LN' && ((_q = this.Submitscheme) === null || _q === void 0 ? void 0 : _q.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9);
            }
        });
    }
    //get Narration Details 
    getNarration(ele) {
        this.particulars = ele;
        let el = this.triggerhide.nativeElement;
        el.click();
        this.narrationField.nativeElement.focus();
    }
    getBankName(ele) {
        this.BankName = ele;
        let el = this.triggerhide1.nativeElement;
        el.click();
        this.bankNameField.nativeElement.focus();
    }
    selectAllContent($event) {
        $event.target.select();
    }
    //submit Form
    submit() {
        var _a, _b;
        //debugger
        if (this.angForm.status == "INVALID") {
            this.angForm.markAllAsTouched();
        }
        else if (this.submitTranMode.tran_drcr == 'D' && this.angForm.controls['type'].value == 'cash' && this.selectedCode != 'GL' && (this.angForm.controls['token'].value == 0 || this.angForm.controls['token'].value == null || this.angForm.controls['token'].value == '')) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('warning', 'Please enter token number', 'warning');
        }
        // else if (Number(this.angForm.controls['amt'].value) == 0) {
        //   Swal.fire('Oops!', 'Amount cannot be 0', 'error');
        // }
        else {
            //debugger
            let user = JSON.parse(localStorage.getItem('user'));
            let obj = this.angForm.value;
            obj['user'] = user;
            for (let ele of this.headData) {
                if (ele['INTEREST_DATE_INPUT'] == '0' && ele.FIELD_AMOUNT == 'INTEREST_AMOUNT') {
                    ele['date'] = null;
                }
            }
            obj['branch_code'] = this.selectedBranch;
            obj['InputHead'] = this.headData;
            obj['scheme'] = this.Submitscheme;
            obj['account_no'] = this.submitCustomer;
            obj['tran_mode'] = this.submitTranMode;
            obj['amt'] = Number(this.angForm.controls['amt'].value).toFixed(2);
            if (this.submitTranMode.id == 4 && this.submitTranMode.tran_drcr == 'D' && (((_a = this.Submitscheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'CC' || ((_b = this.Submitscheme) === null || _b === void 0 ? void 0 : _b.S_ACNOTYPE) == 'LN')) {
                let ledgerbal = Number(this.tempDayOpBal) > 0 ? Number(this.tempDayOpBal) : 0;
                let amount = Number(this.angForm.controls['amt'].value);
                if (amount > ledgerbal)
                    obj['isOverdraftTaken'] = 1;
                else
                    obj['isOverdraftTaken'] = 0;
            }
            // console.log(obj);
            if (Number(this.totalAmt) != 0 && this.totalAmt != undefined && this.totalAmt != '' && this.totalAmt != '0.00' && this.totalAmt != 'NaN.00') {
                this.disableSubmit = true;
                this._service.insertVoucher(obj).subscribe(data => {
                    this.disableSubmit = false;
                    // this.getVoucherData();
                    // Swal.fire('Success!', 'Voucher update Successfully !', 'success');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        icon: 'success',
                        title: 'Voucher update Successfully!',
                        html: '<b>Please Note Down Voucher Number : </b>' + data.TRAN_NO + '<br>',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#3085d6',
                        confirmButtonText: 'Print',
                        cancelButtonText: 'OK'
                    }).then((result) => {
                        if (result.isConfirmed == true) {
                            this.printData(data);
                        }
                    });
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
                    this.angForm.patchValue({
                        type: 'cash',
                    });
                    this.type = 'cash';
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
                    this.disableSubmit = false;
                });
            }
            else {
                this.swiper.nativeElement.focus();
                this.disableSubmit = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', 'Invalid Amount Details', 'error');
            }
        }
    }
    // Reset Function
    resetForm() {
        this.createForm();
    }
    //get Amount Details
    getAmt(ele) {
        let count = 0;
        if (this.headData.length != 0) {
            this.headData.forEach(element => {
                count = Number(element.Amount) + Number(count);
            });
            let num = Number(ele) + Number(count);
            // this.totalAmt = num 
            this.totalAmt = parseFloat(num.toString()).toFixed(2);
        }
        else {
            // this.totalAmt = ele 
            this.totalAmt = parseFloat(ele).toFixed(2);
        }
    }
    getDecimal(event) {
        var t = event.target.value;
        event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    }
    changeMode(item) {
        //debugger
        this.angForm.patchValue({
            amt: 0
        });
        this.totalAmt = 0;
        this.submitForm = true;
        this.headData = [];
        this.submitTranMode = item;
        if (this.submitTranMode.tran_type == 'TR') {
            this.showChequeDetails = true;
            this.angForm.controls['chequeNo'].reset();
            this.angForm.controls['chequeDate'].reset();
            this.angForm.controls['bank'].reset();
        }
        else {
            this.showChequeDetails = false;
        }
        if (item.id == 6) {
            this.angForm.controls.amt.setValue('0.00');
            this.angForm.controls['amt'].disable();
        }
        else if (item.id == 2 || item.id == 5 || item.id == 15) {
            this.angForm.patchValue({
                amt: Number(this.ClearBalance).toFixed(2)
            });
            this.angForm.controls['amt'].disable();
        }
        else {
            this.angForm.controls.amt.setValue('0.00');
            this.angForm.controls['amt'].enable();
        }
        // if (this.selectedCode == 'GL') {
        //   this.showChequeDetails = true
        // }
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
        // let lastdate = Number(rowData[0]) - 1;
        // // let result    = rowData[2]+'-'+rowData[1]+'-'+lastdate;
        // this.IntersetHeadDate = lastdate + '/' + rowData[1] + '/' + rowData[2];
        this.IntersetHeadDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, 'DD/MM/YYYY').subtract(1, 'days').format('DD/MM/YYYY');
        this._service.getHeadDetails(obj).subscribe(data => {
            // debugger
            console.log(this.Submitscheme);
            if (data.length != 0) {
                if (!this.headFlag) {
                    // this.headData = data;
                    this.headShow = true;
                    for (let item of data) {
                        let value = {};
                        // value = data.find(data => data['FIELD_AMOUNT'] == headType[i].FieldAmount)
                        // if (value != undefined) {
                        console.log(item);
                        if (this.submitTranMode.tran_drcr == item.DRCR_APPLICABLE || item.DRCR_APPLICABLE == 'B') {
                            item['Amount'] = 0;
                            if (this.Submitscheme.S_ACNOTYPE == 'TD') {
                                if (this.Submitscheme.IS_RECURRING_TYPE == '1' && this.Submitscheme.INTEREST_RULE == '0' && item.HEAD_TYPE == 'PNI') {
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
        if (this.Submitscheme.S_ACNOTYPE == 'TD' || this.Submitscheme.S_ACNOTYPE == 'SB' || this.Submitscheme.S_ACNOTYPE == 'PG' || this.Submitscheme.S_ACNOTYPE == 'AG' || this.Submitscheme.S_ACNOTYPE == 'CA') {
            // this.interestMaxDate = moment(this.date, 'DD/MM/YYYY')
            this.interestMaxDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY").subtract(1, 'days');
            this.interestMaxDate = this.interestMaxDate._d;
            this.interestMinDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.date, "DD/MM/YYYY").subtract(1, 'months');
            this.interestMinDate = this.interestMinDate._d;
        }
        else if (this.Submitscheme.S_ACNOTYPE == 'LN' || this.Submitscheme.S_ACNOTYPE == 'CC' || this.Submitscheme.S_ACNOTYPE == 'DS') {
            // this.interestMinDate = moment(this.date, 'DD/MM/YYYY')
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
    }
    updateheadbalance(date) {
        let newobj = {
            accountNo: this.submitCustomer.BANKACNO,
            scheme: this.Submitscheme.S_APPL,
            currentDate: date,
            schemeType: this.selectedCode,
        };
        let balancedata;
        this._service.getInputHeadBal(newobj).subscribe(data1 => {
            balancedata = data1;
            // this.headData.forEach(element =>
            for (let element of this.headData) {
                let newobj = {
                    acno: element === null || element === void 0 ? void 0 : element.GL_CODE,
                    scheme: '101',
                    date: this.date,
                    schemeType: this.selectedCode,
                    field: element.FIELD_AMOUNT,
                    currentDate: date,
                    accountNo: this.submitCustomer.BANKACNO,
                };
                if (element.FIELD_AMOUNT == 'INTEREST_AMOUNT') {
                    element['date'] = this.IntersetHeadDate;
                    if ((this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15 || this.selectedMode == 6) && element.IS_GLBAL_MAINTAIN == '1') {
                        element['Amount'] = Math.round(Math.abs(data1.intpenal.InterestAmount));
                        element['Balance'] = Math.round(Math.abs(data1.intpenal.InterestAmount));
                    }
                    else {
                        element['Amount'] = 0;
                        element['Balance'] = Math.round(Math.abs(data1.intpenal.InterestAmount));
                    }
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
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
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
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
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
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
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
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
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
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
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
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
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
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
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
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
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
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
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
                    element['Balance'] = Math.abs(data1.overduebal).toFixed(2);
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
                    element['type'] = (data1.overduebal <= 0 ? 'Cr' : 'Dr');
                }
            }
            if (this.selectedMode == 2 || this.selectedMode == 5 || this.selectedMode == 15) {
                let count = 0;
                this.headData.forEach(element => {
                    let amount = Number.isNaN(element.Amount) ? 0 : Number(element.Amount);
                    count = amount + Number(count);
                });
                this.totalAmt = count + Number(this.ClearBalance);
                this.totalAmt = Number(this.totalAmt).toFixed(2);
            }
            else {
                this.totalAmt = 0;
            }
        });
    }
    showlgindetails() {
        //debugger
        if (this.angForm.controls['account_no'].value != null && this.selectedCode != 'GL') {
            this.ShowDocuments = true;
            console.log(this.submitCustomer.idmasterID);
            this._CustomerIdService.getFormData(this.submitCustomer.idmasterID).subscribe(data => {
                this.Customer_Name = data.AC_NAME;
                this.Customer_Pan_No = data.AC_PANNO;
                this.Customer_Contact_No = data.AC_MOBILENO;
                this.Status = this.submitCustomer.IS_DORMANT;
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
            this.Customer_Name = null;
            this.Customer_Pan_No = null;
            this.Customer_Contact_No = null;
            this.Status = this.submitCustomer.IS_DORMANT;
        }
    }
    //get customer today voucher data
    getVoucherData(item) {
        this.submitCustomer = null;
        this.angForm.controls['total_amt'].reset();
        this.angForm.controls['amt'].reset();
        this.angForm.controls['tran_mode'].reset();
        this.submitCustomer = item;
        this.tempscheme = this.selectedScheme;
        //Hide / Show and show account wie Photo and signature
        let customer = this.angForm.controls['account_no'].value;
        var startdate = this.angForm.controls['date'].value;
        let formDT = moment__WEBPACK_IMPORTED_MODULE_4__(startdate, 'DD/MM/YYYY');
        var addInFrom;
        // if (this.Submitscheme.S_ACNOTYPE == 'PG') {
        //   addInFrom = startdate;
        // } else {
        addInFrom = moment__WEBPACK_IMPORTED_MODULE_4__(formDT, "DD/MM/YYYY").subtract(0, 'days').format('DD/MM/YYYY');
        // }
        let obj = {
            scheme: this.Submitscheme.S_APPL,
            acno: this.Submitscheme.S_APPL == '980' ? this.submitCustomer.AC_NO : this.submitCustomer.BANKACNO,
            date: addInFrom,
            branch: this.branchCODE
        };
        this._service.getledgerbalance(obj).subscribe(data => {
            var _a, _b, _c, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            //debugger
            this.DayOpBal = Math.abs(data);
            this.DayOpBal = Number(this.DayOpBal).toFixed(2);
            let object = this.TranData.find(t => t.key === this.selectedCode);
            //debugger
            if (this.type == 'cash') {
                this.tranModeList = [];
                object.data.cash.forEach(ele => {
                    let obj = this.TranModeCash.find(t => t.id === ele);
                    this.tranModeList.push(obj);
                });
                if (this.submitCustomer.AC_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && Number(this.DayOpBal) > 0 && this.Submitscheme.S_INSTTYPE == '0') {
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1);
                }
                if (((_a = this.Submitscheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && ((_b = this.Submitscheme) === null || _b === void 0 ? void 0 : _b.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_c = this.Submitscheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_e = this.Submitscheme) === null || _e === void 0 ? void 0 : _e.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_f = this.Submitscheme) === null || _f === void 0 ? void 0 : _f.S_ACNOTYPE) == 'LN' && ((_g = this.Submitscheme) === null || _g === void 0 ? void 0 : _g.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            }
            else {
                this.tranModeList = [];
                object.data.transfer.forEach(ele => {
                    let obj = this.TranModeTransfer.find(t => t.id === ele);
                    this.tranModeList.push(obj);
                });
                if (this.submitCustomer.AC_ACNOTYPE == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && Number(this.DayOpBal) > 0 && this.Submitscheme.S_INSTTYPE == '0') {
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1);
                }
                if (((_h = this.Submitscheme) === null || _h === void 0 ? void 0 : _h.S_ACNOTYPE) == 'TD' && ((_j = this.Submitscheme) === null || _j === void 0 ? void 0 : _j.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_k = this.Submitscheme) === null || _k === void 0 ? void 0 : _k.S_ACNOTYPE) == 'PG' && ((_l = this.Submitscheme) === null || _l === void 0 ? void 0 : _l.WITHDRAWAL_APPLICABLE) == '0')
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
                if (((_m = this.Submitscheme) === null || _m === void 0 ? void 0 : _m.S_ACNOTYPE) == 'LN' && ((_o = this.Submitscheme) === null || _o === void 0 ? void 0 : _o.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                    this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9);
            }
        });
    }
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
        let value = event.target.value;
        this.headData[i].Amount = value;
        let data = this.headData[i];
        if (data.FIELD_AMOUNT != 'PENAL_INT_AMOUNT') {
            if ((this.submitTranMode.id == 5 || this.submitTranMode.id == 2) && Number(data.Balance) != 0 && Number(value)) {
                this.headData[i].Amount = 0;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Please Fill ' + data.DESCRIPTION + ' Amount', 'error');
            }
            else {
                if (data.CHECK_REQUIRE == '1' && Number(value) != Number(data.Balance)) {
                    this.headData[i].Amount = 0;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Please Fill ' + data.DESCRIPTION + ' Amount', 'error');
                }
            }
        }
    }
    //cheque no captial functionOops
    chequeNoData(event) {
        //debugger
        this.angForm.patchValue({
            chequeNo: event.target.value.toUpperCase()
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
    //decimal content show purpose wrote below function
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
    // Check Voucher Conditions On Amount Field
    checkCondition($event) {
        let obj = {
            value: Number($event),
            clearBalance: Number(this.ClearBalance),
            accountNo: this.submitCustomer.BANKACNO,
            schemeType: this.selectedCode,
            scheme: this.Submitscheme.S_APPL,
            tran: this.submitTranMode.tran_drcr,
            tranMode: this.submitTranMode.id,
            odAmount: this.overdraftAmt,
            currentDate: this.date,
            totalAmt: this.angForm.controls['total_amt'].value,
            type: this.typeclearbal
        };
        if (Number(obj.value) >= 20000 && this.submitTranMode.tran_type == 'CS') {
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
                    this.swiper.nativeElement.focus();
                    this.submitForm = true;
                }
                else {
                    this.checkamtcondition($event);
                    this.checkSanctionAmountWithAmount();
                    this.swiper.nativeElement.blur();
                }
            });
        }
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
                    this.swiper.nativeElement.focus();
                    this.submitForm = true;
                }
                else {
                    this.checkamtcondition($event);
                    this.checkSanctionAmountWithAmount();
                    this.swiper.nativeElement.blur();
                }
            });
        }
        if (Number(obj.value) >= 200000 && this.submitTranMode.tran_type == 'CS') {
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
                    this.modalClass = 'modalShow';
                    this.checkamtcondition($event);
                    this.checkSanctionAmountWithAmount();
                    this.swiper.nativeElement.blur();
                    this.modalClass = 'modalHide';
                }
                else {
                    this.angForm.controls['amt'].reset();
                    this.angForm.controls['total_amt'].reset(0);
                    this.SideDetails();
                    this.submitForm = true;
                    this.swiper.nativeElement.focus();
                }
            });
        }
        else {
            this.checkamtcondition($event);
        }
    }
    checkamtcondition($event) {
        let obj = {
            // value: Number($event.target.value),
            value: Number(this.angForm.controls['amt'].value),
            clearBalance: Number(this.ClearBalance),
            accountNo: this.submitCustomer.BANKACNO,
            schemeType: this.selectedCode,
            scheme: this.Submitscheme.S_APPL,
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
                this.angForm.controls['amt'].reset();
                this.swiper.nativeElement.focus();
                this.angForm.controls['total_amt'].reset(0);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                // this.submitForm = true
                this.modalClass = 'modalHide';
            }
            else {
                this._service.clearWithdrawBal(obj).subscribe(data => {
                    if (data != 0) {
                        this.angForm.controls['amt'].reset();
                        this.swiper.nativeElement.focus();
                        this.angForm.controls['total_amt'].reset(0);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                        // this.submitForm = true
                        this.modalClass = 'modalHide';
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
                                    //debugger
                                    if (data != 0) {
                                        this.SideDetails();
                                        this.angForm.controls['amt'].reset();
                                        this.angForm.controls['total_amt'].reset(0);
                                        this.swiper.nativeElement.focus();
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                        // this.submitForm = true
                                        this.modalClass = 'modalHide';
                                    }
                                    else {
                                        this._service.BalancePresentOrOverdraft(obj).subscribe(data => {
                                            //debugger
                                            if (data != 0) {
                                                this.SideDetails();
                                                this.angForm.controls['amt'].reset();
                                                this.angForm.controls['total_amt'].reset(0);
                                                this.swiper.nativeElement.focus();
                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                // this.submitForm = true
                                                this.modalClass = 'modalHide';
                                            }
                                            else {
                                                this._service.ClearBalanceDebitAmt(obj).subscribe(data => {
                                                    //debugger
                                                    if (data != 0) {
                                                        this.SideDetails();
                                                        this.angForm.controls['amt'].reset();
                                                        this.angForm.controls['total_amt'].reset(0);
                                                        this.swiper.nativeElement.focus();
                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                        // this.submitForm = true
                                                        this.modalClass = 'modalHide';
                                                    }
                                                    else {
                                                        this._service.InstructionFreezeAc(obj).subscribe(data => {
                                                            //debugger
                                                            if (data != 0) {
                                                                this.SideDetails();
                                                                this.angForm.controls['amt'].reset();
                                                                this.angForm.controls['total_amt'].reset(0);
                                                                this.swiper.nativeElement.focus();
                                                                let el = this.focusbutton.nativeElement;
                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                // this.submitForm = true
                                                                this.modalClass = 'modalHide';
                                                            }
                                                            else {
                                                                this._service.MinBalanceChecking(obj).subscribe(data => {
                                                                    //debugger
                                                                    if (data != 0) {
                                                                        this.SideDetails();
                                                                        this.angForm.controls['amt'].reset();
                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                        this.swiper.nativeElement.focus();
                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                        // this.submitForm = true
                                                                        this.modalClass = 'modalHide';
                                                                    }
                                                                    else {
                                                                        this._service.CheckClearBalAndAmt(obj).subscribe(data => {
                                                                            //debugger
                                                                            if (data != 0) {
                                                                                this.SideDetails();
                                                                                this.angForm.controls['amt'].reset();
                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                this.swiper.nativeElement.focus();
                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                // this.submitForm = true
                                                                                this.modalClass = 'modalHide';
                                                                            }
                                                                            else {
                                                                                this._service.WithdrawAmtClosingEqualClearBal(obj).subscribe(data => {
                                                                                    //debugger
                                                                                    if (data != 0) {
                                                                                        this.SideDetails();
                                                                                        this.angForm.controls['amt'].reset();
                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                        this.swiper.nativeElement.focus();
                                                                                        // let el: HTMLElement = this.focusbutton.nativeElement;
                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                        // this.submitForm = true
                                                                                        this.modalClass = 'modalHide';
                                                                                    }
                                                                                    else {
                                                                                        this._service.DepositeAmountAndIntallments(obj).subscribe(data => {
                                                                                            //debugger
                                                                                            if (data != 0) {
                                                                                                this.SideDetails();
                                                                                                this.angForm.controls['amt'].reset();
                                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                                this.swiper.nativeElement.focus();
                                                                                                let el = this.focusbutton.nativeElement;
                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                // this.submitForm = true
                                                                                                this.modalClass = 'modalHide';
                                                                                            }
                                                                                            else {
                                                                                                this._service.DepositAndTotalInstallments(obj).subscribe(data => {
                                                                                                    //debugger
                                                                                                    if (data != 0) {
                                                                                                        this.SideDetails();
                                                                                                        this.angForm.controls['amt'].reset();
                                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                                        this.swiper.nativeElement.focus();
                                                                                                        let el = this.focusbutton.nativeElement;
                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                        // this.submitForm = true
                                                                                                        this.modalClass = 'modalHide';
                                                                                                    }
                                                                                                    else {
                                                                                                        this._service.DepositAndDepositAmount(obj).subscribe(data => {
                                                                                                            //debugger
                                                                                                            if (data != 0) {
                                                                                                                this.SideDetails();
                                                                                                                this.angForm.controls['amt'].reset();
                                                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                                                this.swiper.nativeElement.focus();
                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                // this.submitForm = true
                                                                                                                this.modalClass = 'modalHide';
                                                                                                            }
                                                                                                            else {
                                                                                                                this._service.PremcloseTdateTamtCom(obj).subscribe(data => {
                                                                                                                    //debugger
                                                                                                                    if (data != 0) {
                                                                                                                        this.SideDetails();
                                                                                                                        this.angForm.controls['amt'].reset();
                                                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                                                        this.swiper.nativeElement.focus();
                                                                                                                        let el = this.focusbutton.nativeElement;
                                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                        // this.submitForm = true
                                                                                                                        this.modalClass = 'modalHide';
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        this._service.PrecloseTrDateTrAmtComCol(obj).subscribe(data => {
                                                                                                                            //debugger
                                                                                                                            if (data != 0) {
                                                                                                                                this.SideDetails();
                                                                                                                                this.angForm.controls['amt'].reset();
                                                                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                                                                this.swiper.nativeElement.focus();
                                                                                                                                let el = this.focusbutton.nativeElement;
                                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                // this.submitForm = true
                                                                                                                                this.modalClass = 'modalHide';
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                this._service.ComVouamtClearbalAndStrs(obj).subscribe(data => {
                                                                                                                                    //debugger
                                                                                                                                    if (data != 0) {
                                                                                                                                        this.SideDetails();
                                                                                                                                        this.angForm.controls['amt'].reset();
                                                                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                                                                        this.swiper.nativeElement.focus();
                                                                                                                                        let el = this.focusbutton.nativeElement;
                                                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                        // this.submitForm = true
                                                                                                                                        this.modalClass = 'modalHide';
                                                                                                                                    }
                                                                                                                                    else {
                                                                                                                                        this._service.DepositGreaterShareLimitAmt(obj).subscribe(data => {
                                                                                                                                            //debugger
                                                                                                                                            if (data != 0) {
                                                                                                                                                this.SideDetails();
                                                                                                                                                this.angForm.controls['amt'].reset();
                                                                                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                                                                                this.swiper.nativeElement.focus();
                                                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                // this.submitForm = true
                                                                                                                                                this.modalClass = 'modalHide';
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                this._service.ZeroBalance(obj).subscribe(data => {
                                                                                                                                                    //debugger
                                                                                                                                                    if (data != 0) {
                                                                                                                                                        this.SideDetails();
                                                                                                                                                        this.angForm.controls['amt'].reset();
                                                                                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                                                                                        this.swiper.nativeElement.focus();
                                                                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                        // this.submitForm = true
                                                                                                                                                        this.modalClass = 'modalHide';
                                                                                                                                                    }
                                                                                                                                                    else {
                                                                                                                                                        this._service.CashWithdraw(obj).subscribe(data => {
                                                                                                                                                            //debugger
                                                                                                                                                            if (data != 0) {
                                                                                                                                                                this.SideDetails();
                                                                                                                                                                this.angForm.controls['amt'].reset();
                                                                                                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                                                                                                this.swiper.nativeElement.focus();
                                                                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                                // this.submitForm = true
                                                                                                                                                                this.modalClass = 'modalHide';
                                                                                                                                                            }
                                                                                                                                                            else {
                                                                                                                                                                this._service.CheckClearBalNotEqualAmt(obj).subscribe(data => {
                                                                                                                                                                    //debugger
                                                                                                                                                                    if (data != 0) {
                                                                                                                                                                        this.SideDetails();
                                                                                                                                                                        this.angForm.controls['amt'].reset();
                                                                                                                                                                        this.angForm.controls['total_amt'].reset(0);
                                                                                                                                                                        this.swiper.nativeElement.focus();
                                                                                                                                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                                        // this.submitForm = true
                                                                                                                                                                        this.modalClass = 'modalHide';
                                                                                                                                                                    }
                                                                                                                                                                    else {
                                                                                                                                                                        this._service.withdrawClosingCondition(obj).subscribe(data => {
                                                                                                                                                                            //debugger
                                                                                                                                                                            if (data != 0) {
                                                                                                                                                                                this.SideDetails();
                                                                                                                                                                                this.angForm.controls['amt'].reset();
                                                                                                                                                                                this.angForm.controls['total_amt'].reset(0);
                                                                                                                                                                                // this.tran_mode.nativeElement.focus()
                                                                                                                                                                                this.tran_mode.focus();
                                                                                                                                                                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                                                                                                                                                // this.submitForm = true
                                                                                                                                                                                this.modalClass = 'modalHide';
                                                                                                                                                                            }
                                                                                                                                                                            else {
                                                                                                                                                                                this.submitForm = false;
                                                                                                                                                                                this.modalClass = 'modalHide';
                                                                                                                                                                                this.swiper.nativeElement.blur();
                                                                                                                                                                                if (this.headData.length == 0)
                                                                                                                                                                                    this.submitbtn.nativeElement.focus();
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
    // Check Voucher Conditions On Account Field
    checkAccountCondition() {
        var _a, _b, _c;
        let data1 = localStorage.getItem('user');
        let result = JSON.parse(data1);
        let tempacno = this.submitCustomer.id;
        let obj = {
            clearBalance: Number(this.ClearBalance),
            accountNo: (_a = this.submitCustomer) === null || _a === void 0 ? void 0 : _a.BANKACNO,
            accno: (_b = this.submitCustomer) === null || _b === void 0 ? void 0 : _b.AC_NO,
            schemeType: this.selectedCode,
            scheme: (_c = this.Submitscheme) === null || _c === void 0 ? void 0 : _c.S_APPL,
            usertype: result.RoleDefine[0].RoleId,
            currentDate: this.date
        };
        this._service.CheckAccountCloseFlagInDailytran(obj).subscribe(data => {
            if (data != 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                this.selectedAccountno = null;
                this.showlgindetails();
            }
            else {
                this._service.specialInstruction(obj).subscribe(data => {
                    if (data != 0) {
                        if (data.restriction == '1') {
                            this.selectedAccountno = null;
                            this.showlgindetails();
                        }
                        else {
                            this.selectedAccountno = tempacno;
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
                        this._service.CheckLoginFlagInDpmaster(obj).subscribe(data => {
                            if (data != 0) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                this.selectedAccountno = null;
                                this.showlgindetails();
                            }
                            else {
                                this._service.checkDormantAccount(obj).subscribe(data => {
                                    if (data != 0) {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                        this.selectedAccountno = null;
                                        this.showlgindetails();
                                    }
                                    else {
                                        this._service.InstructionFreezeAc(obj).subscribe(data => {
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
                                                        this.selectedAccountno = null;
                                                        this.showlgindetails();
                                                    }
                                                });
                                            }
                                            else {
                                                this._service.IsDirectEntryAllow(obj).subscribe(data => {
                                                    if (data != 0) {
                                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                                                        this.selectedAccountno = null;
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
        var _a, _b, _c, _e;
        if (this.angForm.controls['type'].value == 'cash' && ((_a = this.submitTranMode) === null || _a === void 0 ? void 0 : _a.tran_drcr) == 'D') {
            this.tokenshowhide = true;
        }
        else {
            this.tokenshowhide = false;
        }
        let obj = {
            accountNo: this.submitCustomer.BANKACNO,
            schemeType: this.selectedCode,
            scheme: this.Submitscheme.S_APPL,
            tran: (_b = this.submitTranMode) === null || _b === void 0 ? void 0 : _b.tran_drcr,
            tranMode: (_c = this.submitTranMode) === null || _c === void 0 ? void 0 : _c.id,
            currentDate: this.date
        };
        if (((_e = this.submitTranMode) === null || _e === void 0 ? void 0 : _e.id) == 7 && this.selectedCode == 'SH') {
            this.angForm.controls['amt'].disable();
            this.angForm.controls['particulars'].disable();
            let other2amounttotal;
            this._service.calculateDividend(obj).subscribe(data => {
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
                    'particulars': str + ' Paid Dividend'
                });
            });
        }
        this._service.StandingOrInterestInstruction(obj).subscribe(data => {
            if (data != 0) {
                this.selectedMode = null;
                // this.submitForm = true
                this.modalClass = 'modalHide';
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
            }
            else {
                this._service.VoucherPassing(obj).subscribe(data => {
                    if (data != 0) {
                        this.selectedMode = null;
                        // this.submitForm = true
                        this.modalClass = 'modalHide';
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                    }
                    else {
                        this._service.LienMarkChecking(obj).subscribe(data => {
                            if (data != 0) {
                                this.selectedMode = null;
                                // this.submitForm = true
                                this.modalClass = 'modalHide';
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                            }
                            else {
                                this._service.RecurringTypeDeposite(obj).subscribe(data => {
                                    if (data != 0) {
                                        this.selectedMode = null;
                                        // this.submitForm = true
                                        this.modalClass = 'modalHide';
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
    // Check Voucher Conditions On Interest Date
    getColumnValue(event) {
        if (event != null) {
            let obj = {
                accountNo: this.submitCustomer.BANKACNO,
                schemeType: this.selectedCode,
                scheme: this.Submitscheme.S_APPL,
                tran: this.submitTranMode.tran_drcr,
                tranMode: this.submitTranMode.id,
                currentDate: this.date,
                interestDate: moment__WEBPACK_IMPORTED_MODULE_4__(event).format('DD/MM/YYYY')
            };
            let date = moment__WEBPACK_IMPORTED_MODULE_4__(event).format('DD/MM/YYYY');
            this.updateheadbalance(date);
            this._service.ComInterestDateAndCurrentDate(obj).subscribe(data => {
                if (data != 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                    this.angForm.controls['Intdate'].reset();
                }
                else {
                    this._service.ComInterestDateAndLastDMonth(obj).subscribe(data => {
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
        if (this.selectedCode != 'GL') {
            if (Number(event.target.value) != 0 && (event.target.value) != '' && (event.target.value) != null) {
                let data1 = localStorage.getItem('user');
                let result = JSON.parse(data1);
                this._service.getTokenlist(result.branch.id).subscribe((token) => {
                    let value = token.find(t => t.TOKEN_NO == Number(event.target.value));
                    if (value) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                            // position: 'top-end',
                            icon: 'warning',
                            title: 'Token number in use',
                            showConfirmButton: false,
                            timer: 1000
                        });
                        event.target.value = null;
                        this.token.nativeElement.focus();
                    }
                    else {
                        let obj = {
                            value: Number(event.target.value),
                            clearBalance: Number(this.ClearBalance),
                            accountNo: this.submitCustomer.BANKACNO,
                            schemeType: this.selectedCode,
                            scheme: this.Submitscheme.S_APPL,
                            tran: this.submitTranMode.tran_drcr,
                            tranMode: this.submitTranMode.id,
                            tran_type: this.submitTranMode.tran_type,
                            odAmount: this.overdraftAmt,
                            currentDate: this.date
                        };
                        this._service.ComInterestDateAndLastDMonth(obj).subscribe(data => {
                            if (data != 0) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', data.message, 'error');
                            }
                        }, err => {
                            console.log(err);
                        });
                    }
                });
            }
            else {
                // Swal.fire('warning', 'Please enter token number', 'warning')
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    // position: 'top-end',
                    icon: 'warning',
                    title: 'Please enter token number',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.token.nativeElement.focus();
            }
        }
    }
    ngAfterViewInit() {
        // this.dtTrigger.next();
        // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //   $('#transactiontable tfoot tr').appendTo('#transactiontable thead');
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
    onCloseModal() {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }
    getTranMode() {
        var _a, _b, _c, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        let object = this.TranData.find(t => t.key === this.selectedCode);
        if (this.type == 'cash') {
            this.tranModeList = [];
            object.data.cash.forEach(ele => {
                let obj = this.TranModeCash.find(t => t.id === ele);
                this.tranModeList.push(obj);
            });
            if (((_a = this.Submitscheme) === null || _a === void 0 ? void 0 : _a.S_ACNOTYPE) == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && Number(this.DayOpBal) > 0 && this.Submitscheme.S_INSTTYPE == '0') {
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1);
            }
            if (((_b = this.Submitscheme) === null || _b === void 0 ? void 0 : _b.S_ACNOTYPE) == 'TD' && ((_c = this.Submitscheme) === null || _c === void 0 ? void 0 : _c.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_e = this.Submitscheme) === null || _e === void 0 ? void 0 : _e.S_ACNOTYPE) == 'PG' && ((_f = this.Submitscheme) === null || _f === void 0 ? void 0 : _f.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_g = this.Submitscheme) === null || _g === void 0 ? void 0 : _g.S_ACNOTYPE) == 'LN' && ((_h = this.Submitscheme) === null || _h === void 0 ? void 0 : _h.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9);
            this.angForm.patchValue({
                chequeDate: null
            });
        }
        else {
            this.tranModeList = [];
            object.data.transfer.forEach(ele => {
                let obj = this.TranModeTransfer.find(t => t.id === ele);
                this.tranModeList.push(obj);
            });
            if (((_j = this.Submitscheme) === null || _j === void 0 ? void 0 : _j.S_ACNOTYPE) == 'TD' && this.Submitscheme.INTEREST_RULE == "0" && this.Submitscheme.IS_RECURRING_TYPE == "0" && this.Submitscheme.IS_CALLDEPOSIT_TYPE == "0" && this.Submitscheme.REINVESTMENT == "0" && Number(this.DayOpBal) > 0 && this.Submitscheme.S_INSTTYPE == '0') {
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 1);
            }
            if (((_k = this.Submitscheme) === null || _k === void 0 ? void 0 : _k.S_ACNOTYPE) == 'TD' && ((_l = this.Submitscheme) === null || _l === void 0 ? void 0 : _l.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_m = this.Submitscheme) === null || _m === void 0 ? void 0 : _m.S_ACNOTYPE) == 'PG' && ((_o = this.Submitscheme) === null || _o === void 0 ? void 0 : _o.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_p = this.Submitscheme) === null || _p === void 0 ? void 0 : _p.S_ACNOTYPE) == 'LN' && ((_q = this.Submitscheme) === null || _q === void 0 ? void 0 : _q.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4 && ele.id !== 9);
        }
    }
    checkbalanceforpassing(editdata) {
        let date = editdata.TRAN_DATE;
        let newobj = {
            accountNo: editdata.TRAN_ACNO,
            scheme: editdata.scheme.S_APPL,
            currentDate: editdata.INTEREST_DATE,
            schemeType: editdata.TRAN_ACNOTYPE,
        };
        let balancedata;
        this._service.getInputHeadBal(newobj).subscribe(data1 => {
            balancedata = data1;
            // this.headData.forEach(element =>
            for (let element of this.headData) {
                let newobj = {
                    acno: element === null || element === void 0 ? void 0 : element.GL_CODE,
                    scheme: '101',
                    date: this.date,
                    schemeType: editdata.TRAN_ACNOTYPE,
                    field: element.FIELD_AMOUNT,
                    currentDate: date,
                    accountNo: editdata.TRAN_ACNO,
                };
                if (element.FIELD_AMOUNT == 'INTEREST_AMOUNT') {
                    element['date'] = this.IntersetHeadDate;
                    element['Balance'] = Math.round(Math.abs(data1.intpenal.InterestAmount));
                    element['tempBalance'] = data1.intpenal.InterestAmount;
                    element['type'] = (data1.intpenal.InterestAmount <= 0 ? 'Cr' : 'Dr');
                }
                else if (element.FIELD_AMOUNT == 'PENAL_INT_AMOUNT') {
                    element['Balance'] = Math.round(Math.abs(data1.intpenal.PenalInterest));
                    element['tempBalance'] = data1.intpenal.PenalInterest;
                    element['type'] = (data1.intpenal.PenalInterest <= 0 ? 'Cr' : 'Dr');
                }
                else if (element.FIELD_AMOUNT == 'REC_PENAL_INT_AMOUNT') {
                    element['Balance'] = Math.round(Math.abs(data1.recpaypen));
                    element['tempBalance'] = data1.recpaypen;
                    element['type'] = (data1.recpaypen <= 0 ? 'Cr' : 'Dr');
                }
                else if (element.FIELD_AMOUNT == 'RECPAY_INT_AMOUNT' && element.HEAD_TYPE == 'PYI') {
                    element['Balance'] = Math.round(Math.abs(data1.recpaybal));
                    element['tempBalance'] = data1.recpaybal;
                    element['type'] = (data1.recpaybal <= 0 ? 'Cr' : 'Dr');
                }
                else if (element.FIELD_AMOUNT == 'RECPAY_INT_AMOUNT' && element.HEAD_TYPE == 'REC') {
                    element['Balance'] = Math.round(Math.abs(data1.recpaybal));
                    element['tempBalance'] = data1.recpaybal;
                    element['type'] = (data1.recpaybal <= 0 ? 'Cr' : 'Dr');
                }
                else if (element.FIELD_AMOUNT == 'OTHER2_AMOUNT') {
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER3_AMOUNT') {
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER4_AMOUNT') {
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER5_AMOUNT') {
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER6_AMOUNT') {
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER7_AMOUNT') {
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER8_AMOUNT') {
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER9_AMOUNT') {
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER11_AMOUNT') {
                    if ((element === null || element === void 0 ? void 0 : element.GL_CODE) != null) {
                        this._service.getOtheramountbal(newobj).subscribe(data2 => {
                            element['Balance'] = Math.round(Math.abs(data2));
                            element['tempBalance'] = data2;
                            element['type'] = (data2 <= 0 ? 'Cr' : 'Dr');
                        });
                    }
                }
                else if (element.FIELD_AMOUNT == 'OTHER10_AMOUNT') {
                    element['Balance'] = Math.abs(data1.overduebal).toFixed(2);
                    element['tempBalance'] = data1.overduebal;
                    element['type'] = (data1.overduebal <= 0 ? 'Cr' : 'Dr');
                }
                else {
                    element['Balance'] = 0;
                    element['tempBalance'] = 0;
                    element['type'] = (data1.overduebal <= 0 ? 'Cr' : 'Dr');
                }
            }
        });
    }
    btnShow(id) {
        this.btnshw = false;
        this.editClickHandler(id);
    }
    editClickHandler(id) {
        this._service.getFormData(id).subscribe((data) => {
            //debugger
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
            this.selectedBranch = data.BRANCH_CODE;
            this.selectedCode = data.SYSTRAN_TYPE == 'IBT' ? data.IBT_ACNOTYPE : data.TRAN_ACNOTYPE;
            this.IntersetHeadDate = data.INTEREST_DATE;
            this.selectedSchemeCode();
            this.headFlag = true;
            this.headData = data.InputHead;
            this.IntersetHeadDate = data.INTEREST_DATE;
            this.checkbalanceforpassing(data);
            this.headShow = true;
            this.selectedScheme = data.scheme.id;
            this.Submitscheme = data.scheme;
            this.selectedMode = data.tran_mode[0].id;
            this.introducerACNo = [];
            this.obj = [this.selectedScheme, this.selectedBranch];
            switch (this.selectedCode) {
                case 'SB':
                    this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
                case 'SH':
                    this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
                case 'CA':
                    this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
                case 'LN':
                    this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
                case 'TD':
                    this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
                case 'DS':
                    this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
                case 'CC':
                    this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
                case 'GS':
                    this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
                case 'PG':
                    this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
                case 'AG':
                    this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
                case 'LK':
                    this.savingMasterService.getLokcerSchemeList1(this.obj).subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
                case 'IV':
                    this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
                case 'GL':
                    this._ACMasterDropdownService.getACMasterList1().subscribe(data1 => {
                        this.introducerACNo = data1;
                    });
                    break;
            }
            this.selectedAccountno = data.account_no[0].id;
            this.getVoucherData(data.account_no[0]);
            this.headData.forEach(ele => {
                this.totalAmt = Number(this.totalAmt) + Number(ele.Amount);
            });
            this.totalAmt = Number(this.totalAmt) + Number(data.TRAN_AMOUNT);
            if (data.TRAN_TYPE == 'TR')
                this.showChequeDetails = true;
            else
                this.showChequeDetails = false;
            this.angForm.patchValue({
                type: data.TRAN_TYPE == 'CS' ? 'cash' : data.TRAN_TYPE == 'TR' ? 'transfer' : '',
                date: data.TRAN_DATE,
                // account_no: data.TRAN_ACNO,
                chequeNo: data.CHEQUE_NO,
                chequeDate: data.CHEQUE_DATE,
                amt: Number(data.TRAN_AMOUNT).toFixed(2),
                total_amt: Number(this.totalAmt).toFixed(2),
                particulars: data.NARRATION,
                token: data.TOKEN_NO,
            });
            this.type = data.TRAN_TYPE == 'CS' ? 'cash' : data.TRAN_TYPE == 'TR' ? 'transfer' : '';
            this.getTranMode();
            // this.resetscheme();
            // this.checkAccountCondition();
            this.showlgindetails();
            this.SideDetails();
            // this.checktranCondition();
            // this.updateheadbalance()
            this.angForm.patchValue({
                tran_mode: data.tran_mode[0].id,
            });
            this.selectedMode = data.tran_mode[0].id;
            if (this.type == 'cash' && data.TRAN_DRCR == 'D') {
                this.tokenshowhide = true;
            }
            else {
                this.tokenshowhide = false;
            }
        });
    }
    updateData() {
    }
    //approve account
    Approve() {
        let obj = {
            id: this.updateID,
            userid: this.loginUser.id
        };
        this._service.approve(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Approved', 'Voucher approved successfully', 'success');
            var button = document.getElementById('trigger');
            button.click();
            this.reloadTablePassing.emit();
            this.angForm.enable();
        }, err => {
            console.log('something is wrong');
        });
    }
    //reject account
    reject() {
        let obj = {
            id: this.updateID,
        };
        this._service.reject(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Rejected', 'Voucher rejected successfully', 'success');
            var button = document.getElementById('trigger');
            button.click();
            this.reloadTablePassing.emit();
            this.angForm.enable();
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
            BRANCH_CODE: this.branch_code
        };
        this._service.unapporveVoucher(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Unapproved', 'Voucher unapproved successfully', 'success');
            var button = document.getElementById('trigger');
            button.click();
            this.angForm.enable();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    closeModal() {
        this.angForm.enable();
        var button = document.getElementById('trigger');
        button.click();
        this.reloadTablePassing.emit();
    }
    addNewData() {
        this.createForm();
        this.angForm.enable();
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
        addInFrom = moment__WEBPACK_IMPORTED_MODULE_4__(formDT, "DD/MM/YYYY").subtract(0, 'days').format('DD/MM/YYYY');
        // }
        let obj = {
            scheme: this.Submitscheme.S_APPL,
            acno: this.Submitscheme.S_APPL == '980' ? this.submitCustomer.AC_NO : this.submitCustomer.BANKACNO,
            date: addInFrom,
            branch: this.branchCode
        };
        this._service.getledgerbalance(obj).subscribe(data => {
            var _a, _b, _c, _e, _f, _g;
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
            if (((_c = this.Submitscheme) === null || _c === void 0 ? void 0 : _c.S_ACNOTYPE) == 'PG' && ((_e = this.Submitscheme) === null || _e === void 0 ? void 0 : _e.WITHDRAWAL_APPLICABLE) == '0')
                this.tranModeList = this.tranModeList.filter(ele => ele.id !== 4);
            if (((_f = this.Submitscheme) === null || _f === void 0 ? void 0 : _f.S_ACNOTYPE) == 'LN' && ((_g = this.Submitscheme) === null || _g === void 0 ? void 0 : _g.IS_DEPO_LOAN) == '1' && Number(this.DayOpBal) > 0)
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
    onFocus(ele) {
        ele.open();
        console.log(ele);
    }
    onOpen(select) {
        //debugger
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
            // this.submitForm = true
            this.totalAmt = 0;
            this.angForm.controls.amt.setValue('0.00');
            this.swiper.nativeElement.focus();
        }
        else {
            this.submitForm = false;
            if (this.headData.length == 0)
                this.submitbtn.nativeElement.focus();
            this.totalAmt = parseFloat(value).toFixed(2);
        }
    }
    focusSubmit() {
        if (this.headData.length == 0)
            this.submitbtn.nativeElement.focus();
    }
    checkBalanceFlag(event, i) {
        if (this.headData[i].CHECK_REQUIRE == '1' && Number(event.target.value) == 0) {
            if (this.headData[i].FIELD_AMOUNT == 'INTEREST_AMOUNT')
                this.INTAMT.nativeElement.focus();
            else
                this.NOTINTAMT.nativeElement.focus();
            // this.submitForm = true
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Info', 'Please fill proper amount!', 'info');
        }
    }
    getBranch(ele) {
        this.branchCODE = ele;
        this.selectedScheme = null;
        this.selectedAccountno = null;
        this.introducerACNo = [];
    }
    adjustsize() {
        this.myDiv.nativeElement.style.height = 'auto';
        this.myDiv.nativeElement.style.height = `${this.myDiv.nativeElement.scrollHeight}px`;
    }
}
VoucherEntryComponent.ɵfac = function VoucherEntryComponent_Factory(t) { return new (t || VoucherEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_7__["TransactionCashModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_8__["TransactionTransferModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_9__["SchemeTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_voucher_entry_service__WEBPACK_IMPORTED_MODULE_12__["VoucherEntryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_13__["SavingMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["ACMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_15__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["BankMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"])); };
VoucherEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoucherEntryComponent, selectors: [["app-voucher-entry"]], viewQuery: function VoucherEntryComponent_Query(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerhide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerhide1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusbutton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.swiper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitbtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.INTAMT = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.NOTINTAMT = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.token = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bankNameField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.narrationField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tran_mode = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, inputs: { isRadioVisible: "isRadioVisible", childMessage: "childMessage" }, outputs: { reloadTablePassing: "reloadTablePassing" }, decls: 301, vars: 70, consts: [["style", "width: 270px;height: 335px;z-index: 1000;\n      position: absolute;margin-top: 14%;margin-left:51%", 4, "ngIf"], [1, "row"], [1, "col-md-9"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [1, "card-body"], ["action", "javascript:", "appSubmit", "", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "solid"], [1, "col-sm-12", "col-md-2"], ["for", "AC_BRANCH"], [1, "col-sm-12", "col-md-3"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["formControlName", "branch_code", "appTheme", "", "autofocus", "", 3, "ngModel", "virtualScroll", "selectOnTab", "ngModelChange", "focus", "change"], ["branchcode", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-12", "col-md-4"], [1, "form-radio"], [1, "radio", "radio-inline"], [1, "inputRadio"], ["type", "radio", "name", "type", "value", "cash", "formControlName", "type", 3, "change"], [1, "helper"], ["type", "radio", "name", "type", "value", "transfer", "formControlName", "type", 3, "change"], [1, "col-sm-12", "col-md-1"], ["for", "date"], [1, "col-md-2"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "date", "disabled", "", 1, "form-control", 3, "bsConfig", "ngModel", "isDisabled", "ngModelChange"], [1, "col-sm-2"], ["bindValue", "value", "id", "S_ACNOTYPE", "bindLabel", "S_ACNOTYPE", "formControlName", "scheme_type", "required", "", 3, "ngModel", "virtualScroll", "selectOnTab", "ngModelChange", "change", "focus"], ["selecttype", ""], [1, "col-sm-12", "col-md-6"], ["bindValue", "id", "formControlName", "scheme", "appTheme", "", 3, "ngModel", "virtualScroll", "selectOnTab", "ngModelChange", "change", "focus"], ["selectcode", ""], [1, "col-sm-6"], ["formControlName", "account_no", "bindValue", "id", "appTheme", "", 3, "ngModel", "virtualScroll", "selectOnTab", "ngModelChange", "change", "focus"], ["select", ""], ["bindValue", "id", "formControlName", "tran_mode", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "change", "focus"], ["tran_mode", ""], ["for", "AC_PARTICULAR"], [1, "col-md-5"], ["formControlName", "particulars", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["narrationField", "", "myDiv", ""], [1, "fa", "fa-info-circle", "errspan", 3, "click"], ["class", "col-sm-12 col-md-2", 4, "ngIf"], ["class", "col-md-2", 4, "ngIf"], [4, "ngIf"], ["type", "text", "name", "AC_PARTICULAR", "placeholder", " ", "id", "AC_PARTICULAR", "value", "0", "maxlength", "15", "appTheme", "", "required", "", "formControlName", "amt", 1, "form-control", 3, "keypress", "keyup", "focus", "keydown.Tab", "change", "focusout"], ["amt", "", "swiper", ""], [1, "col-md-1"], ["type", "text", "name", "AC_PARTICULAR", "placeholder", " ", "id", "AC_PARTICULAR", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "required", "", "formControlName", "total_amt", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "row", 4, "ngIf"], [1, "col-md-3", "col-sm-12", "col-xm-12"], [1, "requiredlable"], [1, "transaction-item"], [1, "d-flex"], [1, "avatar", "bg-light-primary", "rounded", "float-start"], [1, "avatar-content"], [1, "fa", "fa-google-wallet", "field-icon"], [1, "transaction-percentage"], [1, "transaction-title", 2, "font-size", "12px"], [1, "fw-bolder", "transaction-title", "text-primary", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], ["aria-hidden", "true", 1, "fa", "fa-inr"], ["class", "col-md-12", 4, "ngIf"], [1, "avatar", "bg-light-success", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "avatar", "bg-light-danger", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-danger", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "avatar", "bg-light-info", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-info", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "col-md"], [1, "transaction-title", 2, "font-size", "15px"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "15px"], [1, "user-avatar-section"], ["class", "img-fluid rounded mt-3 mb-2", "height", "50", "width", "80", "alt", "User avatar", 3, "src", "mouseover", "mouseout", 4, "ngIf"], ["class", "img-fluid rounded mt-3 mb-2", "height", "25", "width", "80", "alt", "User avatar", 3, "src", "mouseover", "mouseout", 4, "ngIf"], ["class", "user-info text-center", 4, "ngIf"], [1, "info-container"], [1, "list-unstyled"], [1, "mb-75"], [1, "fw-bolder", "me-25"], [1, "badge", "bg-light-success"], ["class", "mb-75", 4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [1, "table", "table-bordered"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "id", "triggerhide", 1, "btn", "btn-outline-primary", "btn-sm", 2, "display", "none", 3, "click"], ["triggerhide", ""], ["modalLarge1", ""], ["type", "button", "id", "triggerhide1", 1, "btn", "btn-outline-primary", "btn-sm", 2, "display", "none", 3, "click"], ["triggerhide1", ""], [2, "width", "270px", "height", "335px", "z-index", "1000", "position", "absolute", "margin-top", "14%", "margin-left", "51%"], ["width", "400", "height", "300", 3, "src"], [3, "value"], [1, "alert", "alert-danger"], ["type", "text", "formControlName", "token", "maxlength", "4", 1, "form-control", 3, "keypress", "focusout"], ["token", ""], ["for", ""], [1, "col-md-6"], ["formControlName", "bank", "rows", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["bankNameField", ""], ["for", "ChequeNo"], ["type", "text", "name", "ChequeNo", "placeholder", " ", "id", "ChequeNo", "value", "", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "formControlName", "chequeNo", "maxlength", "10", 1, "form-control", 2, "text-transform", "capitalize", 3, "keyup"], ["for", "ChequeDate"], ["type", "text", "placeholder", "dd/mm/yyyy", "appButton", "", "minlength", "10", "maxlength", "10", "bsDatepicker", "", "formControlName", "chequeDate", 1, "form-control", 3, "bsConfig", "maxDate", "minDate"], [1, "table", "table-bordered", "table-hover", "compact"], [2, "text-align", "right"], [4, "ngFor", "ngForOf"], [1, "bg-light-danger", "text-right"], [1, "text-danger"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "appButton", "", "minlength", "10", "maxlength", "10", "formControlName", "Intdate", 1, "form-control", 3, "bsConfig", "ngModel", "minDate", "maxDate", "ngModelChange", "bsValueChange"], ["type", "text", "pattern", "\\d{1,8}(\\.\\d{2})?", "maxlength", "11", 2, "width", "100%", "border", "none", "text-align", "right", 3, "value", "disabled", "keypress", "keydown.Tab", "change", "focus", "focusout"], ["INTAMT", ""], ["NOTINTAMT", ""], ["colspan", "5", 1, "no-data-available"], [1, "col-sm", 2, "float", "right"], ["class", "btn btn-outline-primary btn-sm btn-submit", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [2, "display", "none", 3, "click"], ["focusbutton", ""], ["type", "submit", "class", "btn btn-outline-primary btn-sm btn-submit", "appTheme", "", 3, "disabled", "keydown.Tab", "click", 4, "ngIf"], ["type", "submit", "appTheme", "", 1, "btn", "btn-outline-primary", "btn-sm", "btn-submit", 3, "disabled", "keydown.Tab", "click"], ["submitbtn", ""], [1, "btn", "btn-outline-primary", "btn-sm", "btn-submit", 3, "click"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "col-12"], [3, "url"], ["height", "50", "width", "80", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], ["height", "25", "width", "80", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], [1, "user-info", "text-center"], [3, "click"]], template: function VoucherEntryComponent_Template(rf, ctx) { if (rf & 1) {
        const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VoucherEntryComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Voucher Entry");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_ng_select_ngModelChange_27_listener($event) { return ctx.selectedBranch = $event; })("focus", function VoucherEntryComponent_Template_ng_select_focus_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx.onFocus(_r2); })("change", function VoucherEntryComponent_Template_ng_select_change_27_listener($event) { return ctx.getBranch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, VoucherEntryComponent_ng_option_29_Template, 2, 2, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, VoucherEntryComponent_div_30_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoucherEntryComponent_Template_input_change_35_listener() { return ctx.transactionMode("cash"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoucherEntryComponent_Template_input_change_40_listener() { return ctx.transactionMode("transfer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Transfer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_input_ngModelChange_49_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Scheme Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ng-select", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_ng_select_ngModelChange_59_listener($event) { return ctx.selectedCode = $event; })("change", function VoucherEntryComponent_Template_ng_select_change_59_listener() { ctx.selectedSchemeCode(); return ctx.resetscheme(); })("focus", function VoucherEntryComponent_Template_ng_select_focus_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60); return ctx.onFocus(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, VoucherEntryComponent_ng_option_61_Template, 2, 2, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, VoucherEntryComponent_div_62_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ng-select", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_ng_select_ngModelChange_71_listener($event) { return ctx.selectedScheme = $event; })("change", function VoucherEntryComponent_Template_ng_select_change_71_listener($event) { return ctx.getIntroducer($event); })("focus", function VoucherEntryComponent_Template_ng_select_focus_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72); return ctx.onFocus(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, VoucherEntryComponent_ng_option_73_Template, 2, 3, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, VoucherEntryComponent_div_74_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ng-select", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_ng_select_ngModelChange_84_listener($event) { return ctx.selectedAccountno = $event; })("change", function VoucherEntryComponent_Template_ng_select_change_84_listener($event) { ctx.getVoucherData($event); ctx.checkAccountCondition(); ctx.showlgindetails(); return ctx.SideDetails(); })("focus", function VoucherEntryComponent_Template_ng_select_focus_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](85); return ctx.onFocus(_r11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, VoucherEntryComponent_ng_option_86_Template, 2, 3, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, VoucherEntryComponent_div_87_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Transaction Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ng-select", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_ng_select_ngModelChange_97_listener($event) { return ctx.selectedMode = $event; })("change", function VoucherEntryComponent_Template_ng_select_change_97_listener($event) { ctx.changeMode($event); return ctx.checktranCondition(); })("focus", function VoucherEntryComponent_Template_ng_select_focus_97_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](98); return ctx.onFocus(_r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, VoucherEntryComponent_ng_option_99_Template, 2, 3, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, VoucherEntryComponent_div_100_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Particulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "textarea", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_textarea_ngModelChange_108_listener($event) { return ctx.particulars = $event; })("keyup", function VoucherEntryComponent_Template_textarea_keyup_108_listener() { return ctx.adjustsize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_Template_i_click_111_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](259); return _r41.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, VoucherEntryComponent_div_112_Template, 3, 0, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, VoucherEntryComponent_div_113_Template, 5, 0, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, VoucherEntryComponent_div_114_Template, 12, 2, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "input", 52, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VoucherEntryComponent_Template_input_keypress_122_listener($event) { return $event.charCode == 46 || $event.charCode >= 48 && $event.charCode < 58; })("keyup", function VoucherEntryComponent_Template_input_keyup_122_listener($event) { return ctx.getaftervoucher($event); })("focus", function VoucherEntryComponent_Template_input_focus_122_listener($event) { return ctx.selectAllContent($event); })("keydown.Tab", function VoucherEntryComponent_Template_input_keydown_Tab_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](123); ctx.decimalAllContent(_r22.value); ctx.checkCondition(_r22.value); return ctx.checkSanctionAmountWithAmount(); })("change", function VoucherEntryComponent_Template_input_change_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](123); ctx.decimalAllContent(_r22.value); ctx.checkCondition(_r22.value); ctx.checkSanctionAmountWithAmount(); return ctx.checkIfZero(_r22.value); })("keyup", function VoucherEntryComponent_Template_input_keyup_122_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](123); ctx.getDecimal($event); return ctx.getAmt(_r22.value); })("focusout", function VoucherEntryComponent_Template_input_focusout_122_listener($event) { ctx.focusSubmit(); return ctx.getDecimalPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_input_ngModelChange_132_listener($event) { return ctx.totalAmt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, VoucherEntryComponent_div_133_Template, 19, 2, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, VoucherEntryComponent_div_134_Template, 12, 6, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, VoucherEntryComponent_div_135_Template, 7, 1, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h6", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Day Opening Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, VoucherEntryComponent_div_157_Template, 12, 0, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Unpassed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Uneffected Clearing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " 0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Overdraft Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](207, VoucherEntryComponent_div_207_Template, 11, 1, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](208, VoucherEntryComponent_div_208_Template, 11, 1, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](209, VoucherEntryComponent_div_209_Template, 11, 1, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](210, VoucherEntryComponent_div_210_Template, 11, 1, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](211, VoucherEntryComponent_div_211_Template, 11, 1, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](212, VoucherEntryComponent_div_212_Template, 12, 1, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](213, VoucherEntryComponent_div_213_Template, 12, 1, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](214, VoucherEntryComponent_div_214_Template, 12, 1, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h6", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Cleared Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "After this voucher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](244, VoucherEntryComponent_img_244_Template, 1, 1, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](247, VoucherEntryComponent_img_247_Template, 1, 1, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](248, VoucherEntryComponent_div_248_Template, 3, 1, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "ul", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "li", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](256, VoucherEntryComponent_li_256_Template, 5, 1, "li", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](257, VoucherEntryComponent_li_257_Template, 5, 1, "li", 87);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "app-modal-basic", 88, 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h4", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Narration Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_Template_button_click_263_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](259); return _r41.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "perfect-scrollbar", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "table", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Paticulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](275, VoucherEntryComponent_tr_275_Template, 2, 1, "tr", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "button", 98, 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_Template_button_click_276_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](259); return _r41.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "app-modal-basic", 88, 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "h4", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Bank Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_Template_button_click_284_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](280); return _r44.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "perfect-scrollbar", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "table", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Bank Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](296, VoucherEntryComponent_tr_296_Template, 2, 1, "tr", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "button", 101, 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_Template_button_click_297_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](280); return _r44.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PreviewDiv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedBranch)("virtualScroll", true)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["branch_code"].invalid && (ctx.angForm.controls["branch_code"].dirty || ctx.angForm.controls["branch_code"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](69, _c12))("ngModel", ctx.date)("isDisabled", ctx.isture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCode)("virtualScroll", true)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allSchemeCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["scheme_type"].invalid && (ctx.angForm.controls["scheme_type"].dirty || ctx.angForm.controls["scheme_type"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedScheme)("virtualScroll", true)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["scheme"].invalid && (ctx.angForm.controls["scheme"].dirty || ctx.angForm.controls["scheme"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedAccountno)("virtualScroll", true)("selectOnTab", true);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.particulars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tokenshowhide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tokenshowhide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showChequeDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.totalAmt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRadioVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.DayOpBalance, " ", ctx.extensionopenbal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.submitCustomer == null ? null : ctx.submitCustomer.AC_ACNOTYPE) == "PG");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Customer_Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Status == true || ctx.Status == 1 ? "Inactive" : "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Customer_Pan_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Customer_Contact_No);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.narrationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bankName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.modalClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _submit_directive__WEBPACK_IMPORTED_MODULE_19__["SubmitDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _theme_directive__WEBPACK_IMPORTED_MODULE_21__["ThemeDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_23__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["ɵr"], _button_directive__WEBPACK_IMPORTED_MODULE_25__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _reports_pigmy_report_iframe5_iframe5_iframe5_component__WEBPACK_IMPORTED_MODULE_26__["Iframe5Component"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 20px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: ridge;\n  border-color: #817d7de3;\n  padding: 0.4%;\n  margin-bottom: 3px;\n  padding-right: 12px;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.transaction-item[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.bg-light-primary[_ngcontent-%COMP%] {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367F0 !important;\n}\n\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.357rem !important;\n}\n\n.float-start[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin-right: 1.2rem;\n}\n\n.avatar.bg-light-primary[_ngcontent-%COMP%] {\n  color: #7367F0 !important;\n}\n\n.avatar.bg-light-success[_ngcontent-%COMP%] {\n  color: #28C76F !important;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background-color: #C3C3C3;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n  color: #FFF;\n  display: inline-flex;\n  font-size: 1rem;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 600;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n}\n\n.avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 0.857rem;\n}\n\n.bg-light-success[_ngcontent-%COMP%] {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28C76F !important;\n}\n\n.bg-light-danger[_ngcontent-%COMP%] {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #EA5455 !important;\n}\n\n.transaction-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.errspan[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 21px;\n  margin-top: -20px;\n  position: relative;\n  z-index: 2;\n  color: red;\n}\n\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: white !important;\n  color: black !important;\n}\n\n.inputRadio[_ngcontent-%COMP%]:focus-within {\n  color: red;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #ff5252;\n  color: #ff5252;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 11px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 14px;\n  border-radius: 5px;\n  padding-bottom: 22px;\n  padding-top: 4px;\n  height: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 13px;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px;\n  max-height: 18px;\n  align-items: center;\n  font-size: 11px;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 18px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vdm91Y2hlci1lbnRyeS92b3VjaGVyLWVudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFDSDs7QUFFQztFQUNFLFdBQUE7QUFDSDs7QUFFQztFQUtFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtBQUpIOztBQVFDO0VBQ0UscUJBQUE7QUFMSDs7QUFRQztFQUNFLHdCQUFBO0FBTEg7O0FBUUM7RUFDRSxhQUFBO0VBSUEsbUJBQUE7RUFJQSw4QkFBQTtBQUxIOztBQVFDO0VBRUUsd0JBQUE7QUFOSDs7QUFTQztFQUNFLGdEQUFBO0VBQ0EseUJBQUE7QUFOSDs7QUFTQztFQUNFLGtDQUFBO0FBTkg7O0FBU0M7RUFDRSxzQkFBQTtBQU5IOztBQVNDO0VBQ0Usb0JBQUE7QUFOSDs7QUFTQztFQUNFLHlCQUFBO0FBTkg7O0FBU0M7RUFDRSx5QkFBQTtBQU5IOztBQVNDO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUlBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQU5IOztBQVNDO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFOSDs7QUFTQztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBSUEsYUFBQTtFQUlBLHVCQUFBO0VBSUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTkg7O0FBU0M7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0FBTkg7O0FBU0M7RUFDRSw4Q0FBQTtFQUNBLHlCQUFBO0FBTkg7O0FBU0M7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFOSDs7QUFVQztFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQVBIOztBQVVDO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtBQVBIOztBQVVDO0VBQ0UsVUFBQTtBQVBIOztBQVVDO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBUEY7O0FBVUE7RUFFRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVJGOztBQVdBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFSRjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBVEY7O0FBWUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVRGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFURjs7QUFZQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQVRGIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vdm91Y2hlci1lbnRyeS92b3VjaGVyLWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5yZXF1aXJlZCB7XHJcbiAgIGNvbG9yOiByZWQ7XHJcbiAgIGZvbnQtc2l6ZTogMjBweDtcclxuIH1cclxuXHJcbiAuYnRuIHtcclxuICAgbWFyZ2luOiAzcHg7XHJcbiB9XHJcblxyXG4gZGl2LnNvbGlkIHtcclxuICAgLy8gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgIC8vICBwYWRkaW5nOiAyJVxyXG5cclxuICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgYm9yZGVyLXN0eWxlOiByaWRnZTtcclxuICAgYm9yZGVyLWNvbG9yOiAjODE3ZDdkZTM7XHJcbiAgIHBhZGRpbmc6IDAuNCU7XHJcbiAgIC8vIHBhZGRpbmc6IDAuNyU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuIH1cclxuXHJcblxyXG4gLmNhcmQtdHJhbnNhY3Rpb24gLnRyYW5zYWN0aW9uLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuIH1cclxuXHJcbiAudHJhbnNhY3Rpb24taXRlbSB7XHJcbiAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAuY2FyZC10cmFuc2FjdGlvbiAudHJhbnNhY3Rpb24taXRlbSB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuIH1cclxuXHJcbiAuZC1mbGV4IHtcclxuXHJcbiAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAuYmctbGlnaHQtcHJpbWFyeSB7XHJcbiAgIGJhY2tncm91bmQ6IHJnYmEoMTE1LCAxMDMsIDI0MCwgLjEyKSAhaW1wb3J0YW50O1xyXG4gICBjb2xvcjogIzczNjdGMCAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5yb3VuZGVkIHtcclxuICAgYm9yZGVyLXJhZGl1czogMC4zNTdyZW0gIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAuZmxvYXQtc3RhcnQge1xyXG4gICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtIC5hdmF0YXIge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcclxuIH1cclxuXHJcbiAuYXZhdGFyLmJnLWxpZ2h0LXByaW1hcnkge1xyXG4gICBjb2xvcjogIzczNjdGMCAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5hdmF0YXIuYmctbGlnaHQtc3VjY2VzcyB7XHJcbiAgIGNvbG9yOiAjMjhDNzZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmF2YXRhciB7XHJcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNDM0MzQzM7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIGNvbG9yOiAjRkZGO1xyXG4gICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XHJcbiAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XHJcbiAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcclxuICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG4gfVxyXG5cclxuIC5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtIC5hdmF0YXIgLmF2YXRhci1jb250ZW50IHtcclxuICAgd2lkdGg6IDQycHg7XHJcbiAgIGhlaWdodDogNDJweDtcclxuIH1cclxuXHJcbiAuYXZhdGFyIC5hdmF0YXItY29udGVudCB7XHJcbiAgIHdpZHRoOiAzMnB4O1xyXG4gICBoZWlnaHQ6IDMycHg7XHJcbiAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICBmb250LXNpemU6IC44NTdyZW07XHJcbiB9XHJcblxyXG4gLmJnLWxpZ2h0LXN1Y2Nlc3Mge1xyXG4gICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxOTksIDExMSwgLjEyKSAhaW1wb3J0YW50O1xyXG4gICBjb2xvcjogIzI4Qzc2RiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5iZy1saWdodC1kYW5nZXIge1xyXG4gICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgODQsIDg1LCAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgIGNvbG9yOiAjRUE1NDU1ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLnRyYW5zYWN0aW9uLXRpdGxlIHtcclxuICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICBtYXJnaW4tbGVmdDogNXB4O1xyXG5cclxuIH1cclxuXHJcbiAuZXJyc3BhbiB7XHJcbiAgIGZsb2F0OiByaWdodDtcclxuICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG4gICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICB6LWluZGV4OiAyO1xyXG4gICBjb2xvcjogcmVkO1xyXG4gfVxyXG5cclxuIC5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAuaW5wdXRSYWRpbzpmb2N1cy13aXRoaW4ge1xyXG4gICBjb2xvcjogcmVkO1xyXG4gfVxyXG5cclxuIC5jYXJkLWJvZHkge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmY1MjUyO1xyXG4gIGNvbG9yOiAjZmY1MjUyO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAvLyBmbG9hdDogbGVmdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIycHg7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAvLyBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICBjb2xvcjogIzMzMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1pbi1oZWlnaHQ6IDE4cHg7XHJcbiAgbWF4LWhlaWdodDogMThweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5ib3JkZXItbGFibGUtZmx0IC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7IFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHBhZGRpbmc6IDByZW0gMC43cmVtO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1ibG9jayB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoucherEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voucher-entry',
                templateUrl: './voucher-entry.component.html',
                styleUrls: ['./voucher-entry.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }, { type: _shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_7__["TransactionCashModeService"] }, { type: _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_8__["TransactionTransferModeService"] }, { type: _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_9__["SchemeTypeService"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["OwnbranchMasterService"] }, { type: src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SchemeCodeDropdownService"] }, { type: _voucher_entry_service__WEBPACK_IMPORTED_MODULE_12__["VoucherEntryService"] }, { type: _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_13__["SavingMasterService"] }, { type: src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["ACMasterDropdownService"] }, { type: _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_15__["CustomerIdService"] }, { type: _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["BankMasterService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"] }]; }, { isRadioVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reloadTablePassing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], childMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], triggerhide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }], triggerhide1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide1']
        }], focusbutton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['focusbutton']
        }], swiper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['swiper']
        }], submitbtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['submitbtn']
        }], INTAMT: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['INTAMT']
        }], NOTINTAMT: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['NOTINTAMT']
        }], token: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['token']
        }], bankNameField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['bankNameField']
        }], narrationField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['narrationField']
        }], tran_mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tran_mode']
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myDiv']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~4926e085.js.map