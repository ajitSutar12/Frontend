(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balance-updation-balance-updation-module"],{

/***/ "./node_modules/rxjs-compat/Observable.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs-compat/Observable.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
exports.Observable = rxjs_1.Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/Observable.js":
/*!*****************************************!*\
  !*** ./node_modules/rxjs/Observable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! rxjs-compat/Observable */ "./node_modules/rxjs-compat/Observable.js"));
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/dropdownService/scheme-code-dropdown.service.ts ***!
  \************************************************************************/
/*! exports provided: SchemeCodeDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeCodeDropdownService", function() { return SchemeCodeDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class SchemeCodeDropdownService {
    constructor(http) {
        this.http = http;
        this.schemeCodeObject = new Array();
        this.schemeObject = new Array();
        // // scheme-parameters";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getSchemeCodeList(scheme) {
        this.schemeCodeObject = [];
        return this.http.get(this.url + '/scheme-parameters/' + scheme)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_APPL, id: element.S_ACNOTYPE };
                this.schemeCodeObject.push(obj);
            });
            return this.schemeCodeObject;
        }));
    }
    getAllSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getAllSchemeList1() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            console.log('in service', this.schemeObject);
            return this.schemeObject;
        }));
    }
    getTermDepositSchemeRD() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/term/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositeScheme() {
        return this.http.get(this.url + '/scheme-parameters/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_ACNOTYPE + ' ' + element.S_APPL, value: element.id };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTdReceiptScheme() {
        return this.http.get(this.url + '/scheme-parameters/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.RECEIPT_TYPE, value: element.id };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getAllSchemeListINT() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/interest')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
}
SchemeCodeDropdownService.ɵfac = function SchemeCodeDropdownService_Factory(t) { return new (t || SchemeCodeDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SchemeCodeDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchemeCodeDropdownService, factory: SchemeCodeDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeCodeDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/elements/balance-updation.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/elements/balance-updation.service.ts ***!
  \*************************************************************/
/*! exports provided: BalanceUpdationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceUpdationService", function() { return BalanceUpdationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class BalanceUpdationService {
    getCharacters() {
        return this.cloneOptions(BalanceUpdationService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(BalanceUpdationService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(BalanceUpdationService.PLAYER_ONE);
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
BalanceUpdationService.PLAYER_ONE = [
    { value: '0', label: 'Savings Deposit' },
    { value: '1', label: 'Term Deposit' },
    { value: '2', label: 'Investment  Account' },
    { value: '3', label: 'Anamat Account' },
    { value: '4', label: 'Agent Account' },
    { value: '5', label: 'Pigmy Deposit Account' },
    { value: '6', label: 'Loan/Cash Credit/Dispute Loan Account' },
    { value: '7', label: 'Shares Account' }
];
BalanceUpdationService.ɵfac = function BalanceUpdationService_Factory(t) { return new (t || BalanceUpdationService)(); };
BalanceUpdationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BalanceUpdationService, factory: BalanceUpdationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalanceUpdationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/elements/debit.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/elements/debit.service.ts ***!
  \**************************************************/
/*! exports provided: DebitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitService", function() { return DebitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class DebitService {
    getCharacters() {
        return this.cloneOptions(DebitService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(DebitService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(DebitService.PLAYER_ONE);
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
DebitService.PLAYER_ONE = [
    { value: '0', label: 'Credit' },
    { value: '1', label: 'Debit' }
];
DebitService.ɵfac = function DebitService_Factory(t) { return new (t || DebitService)(); };
DebitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DebitService, factory: DebitService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DebitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/balance-entry/balance-updation/balance-updation.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/master/balance-entry/balance-updation/balance-updation.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BalanceUpdationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceUpdationComponent", function() { return BalanceUpdationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs-compat */ "./node_modules/rxjs-compat/Rx.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_elements_balance_updation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/elements/balance-updation.service */ "./src/app/shared/elements/balance-updation.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_elements_debit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/elements/debit.service */ "./src/app/shared/elements/debit.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");




















const _c0 = ["autofocus"];
function BalanceUpdationComponent_ng_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r48.label, "");
} }
function BalanceUpdationComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BalanceUpdationComponent_div_25_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["BRANCH_CODE"].errors == null ? null : ctx_r2.angForm.controls["BRANCH_CODE"].errors.required);
} }
function BalanceUpdationComponent_ng_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r50.label, "");
} }
function BalanceUpdationComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BalanceUpdationComponent_div_36_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r4.angForm.controls["AC_TYPE"].errors.required);
} }
function BalanceUpdationComponent_ng_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r52.label, " ", values_r52.name, "");
} }
function BalanceUpdationComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BalanceUpdationComponent_div_55_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["FROM_AC"].errors == null ? null : ctx_r6.angForm.controls["FROM_AC"].errors.required);
} }
function BalanceUpdationComponent_ng_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r54.label, " ", values_r54.name, "");
} }
function BalanceUpdationComponent_div_66_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BalanceUpdationComponent_div_66_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["TO_AC"].errors == null ? null : ctx_r8.angForm.controls["TO_AC"].errors.required);
} }
function BalanceUpdationComponent_button_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.angForm.invalid);
} }
function BalanceUpdationComponent_td_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ledger Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Trans. Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Interest paid Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Closing Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Debit/Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payable Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total Interest paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total Penal Int");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tot.No of Installment Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "TDS O/p Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Op.Cr.Int in Financial Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Op.Int Paid in Financial Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A/c Open Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Credit Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Interest Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "O/p Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Balance Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Receivable Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total Int. Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Penal Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total Deposit Amt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tot.Posted Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NPA Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Is Dispute Loan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No.of Shares");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Share Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AC Close Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Purchase Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Supplier Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Purchase Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Purchase Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Purchase value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Opening Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Opening Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_td_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Depreciation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_5_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_6_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_7_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_8_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_9_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_10_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_11_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_12_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_13_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_14_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_15_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_16_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_17_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_18_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_19_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_20_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_21_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_22_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_23_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_23_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_24_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_25_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_26_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_27_Template(rf, ctx) { if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_27_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r140); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_28_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_28_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_29_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_30_Template(rf, ctx) { if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_30_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_31_Template(rf, ctx) { if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_31_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_32_Template(rf, ctx) { if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_32_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_33_Template(rf, ctx) { if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_33_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_34_Template(rf, ctx) { if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_34_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r154); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122 || $event.charCode <= 32 || $event.charCode == 46 || $event.charCode == 45 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_35_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_36_Template(rf, ctx) { if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_36_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_37_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_37_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_38_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_38_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r162); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_39_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_39_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_td_40_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_tbody_115_tr_1_td_40_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BalanceUpdationComponent_tbody_115_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BalanceUpdationComponent_tbody_115_tr_1_td_5_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BalanceUpdationComponent_tbody_115_tr_1_td_6_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BalanceUpdationComponent_tbody_115_tr_1_td_7_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BalanceUpdationComponent_tbody_115_tr_1_td_8_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BalanceUpdationComponent_tbody_115_tr_1_td_9_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BalanceUpdationComponent_tbody_115_tr_1_td_10_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BalanceUpdationComponent_tbody_115_tr_1_td_11_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BalanceUpdationComponent_tbody_115_tr_1_td_12_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BalanceUpdationComponent_tbody_115_tr_1_td_13_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BalanceUpdationComponent_tbody_115_tr_1_td_14_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BalanceUpdationComponent_tbody_115_tr_1_td_15_Template, 2, 0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BalanceUpdationComponent_tbody_115_tr_1_td_16_Template, 2, 0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BalanceUpdationComponent_tbody_115_tr_1_td_17_Template, 2, 0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BalanceUpdationComponent_tbody_115_tr_1_td_18_Template, 2, 0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BalanceUpdationComponent_tbody_115_tr_1_td_19_Template, 2, 0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BalanceUpdationComponent_tbody_115_tr_1_td_20_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BalanceUpdationComponent_tbody_115_tr_1_td_21_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BalanceUpdationComponent_tbody_115_tr_1_td_22_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BalanceUpdationComponent_tbody_115_tr_1_td_23_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BalanceUpdationComponent_tbody_115_tr_1_td_24_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BalanceUpdationComponent_tbody_115_tr_1_td_25_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BalanceUpdationComponent_tbody_115_tr_1_td_26_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BalanceUpdationComponent_tbody_115_tr_1_td_27_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BalanceUpdationComponent_tbody_115_tr_1_td_28_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, BalanceUpdationComponent_tbody_115_tr_1_td_29_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BalanceUpdationComponent_tbody_115_tr_1_td_30_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BalanceUpdationComponent_tbody_115_tr_1_td_31_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BalanceUpdationComponent_tbody_115_tr_1_td_32_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BalanceUpdationComponent_tbody_115_tr_1_td_33_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, BalanceUpdationComponent_tbody_115_tr_1_td_34_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, BalanceUpdationComponent_tbody_115_tr_1_td_35_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BalanceUpdationComponent_tbody_115_tr_1_td_36_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, BalanceUpdationComponent_tbody_115_tr_1_td_37_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, BalanceUpdationComponent_tbody_115_tr_1_td_38_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, BalanceUpdationComponent_tbody_115_tr_1_td_39_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, BalanceUpdationComponent_tbody_115_tr_1_td_40_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r57 = ctx.$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r57.AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r57.AC_NAME == "" || data_r57.AC_NAME == null ? "-" : data_r57.AC_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.ledgerbalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.productamount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.lastTranDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.lastintpaidDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.closingdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.debitcredit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.payableint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.totalintpaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.totalpenalint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.totalinstallmentrec);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.tdsopDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.intinfinancialyear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.opintpaidfinyear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.acopenDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.lastcreditDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.lastintDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.opproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.balanceDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.receivableint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.totalintrec);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.penalint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.totaldepositamt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.totalpostedint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.npaDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.isdisputeloan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.noofshares);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.shareamt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.accloseDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.purchaseDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.supliername);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.purchaserate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.purchasequantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.purchasevalue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.openingamt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.openingquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.lastdepreciationDate);
} }
function BalanceUpdationComponent_tbody_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BalanceUpdationComponent_tbody_115_tr_1_Template, 41, 38, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.arrTable);
} }
function BalanceUpdationComponent_tbody_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "form-submitted": a0 }; };
const _c2 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
class DataTableResponse {
}
class BalanceUpdationComponent {
    constructor(BalanceUpdationService, http, DebitService, fb, schemeCodeDropdownService, _ownbranchmasterservice, systemParameter, schemeAccountNoService, config) {
        this.BalanceUpdationService = BalanceUpdationService;
        this.http = http;
        this.DebitService = DebitService;
        this.fb = fb;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this._ownbranchmasterservice = _ownbranchmasterservice;
        this.systemParameter = systemParameter;
        this.schemeAccountNoService = schemeAccountNoService;
        this.config = config;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.formSubmitted = false;
        this.dtExportButtonOptions = {};
        this.dtOptions = {};
        this.dtTrigger = new rxjs_compat__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        //title select variables
        this.debit = this.DebitService.getCharacters();
        this.simpleOption = this.BalanceUpdationService.getCharacters();
        this.selectedOption = '3';
        this.isDisabled = true;
        this.selectedCharacter = '3';
        this.timeLeft = 5;
        this.ngscheme = null;
        this.ngfromac = null;
        this.ngtoac = null;
        this.dataSub = null;
        //variables for  add and update button
        this.showButton = true;
        this.updateShow = false;
        this.ngbranch = null;
        // for grid variable declaration
        this.ledgerbalance = false;
        this.lastTranDate = false;
        this.productamount = false;
        this.lastintpaidDate = false;
        this.closingdate = false;
        this.debitcredit = false;
        this.payableint = false;
        this.totalintpaid = false;
        this.totalpenalint = false;
        this.totalinstallmentrec = false;
        this.tdsopDate = false;
        this.intinfinancialyear = false;
        this.opintpaidfinyear = false;
        this.acopenDate = false;
        this.lastcreditDate = false;
        this.lastintDate = false;
        this.opproduct = false;
        this.balanceDate = false;
        this.receivableint = false;
        this.totalintrec = false;
        this.penalint = false;
        this.totaldepositamt = false;
        this.totalpostedint = false;
        this.npaDate = false;
        this.isdisputeloan = false;
        this.noofshares = false;
        this.shareamt = false;
        this.accloseDate = false;
        this.purchaseDate = false;
        this.supliername = false;
        this.purchaserate = false;
        this.purchasequantity = false;
        this.purchasevalue = false;
        this.openingamt = false;
        this.openingquantity = false;
        this.lastdepreciationDate = false;
        this.maxDate = new Date();
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate());
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            dom: 'ftip'
        };
        this.createForm();
        this.getSystemParaDate();
        this.dtExportButtonOptions = {
            ajax: 'fake-data/balance-updation.json',
            columns: [
                {
                    title: 'Action',
                    render: function (data, type, full) {
                        return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
                    }
                },
            ],
            dom: 'Bfrtip',
            buttons: [
                'copy',
                'print',
                'excel',
                'csv'
            ],
        };
        // this.runTimer();
        // this.dataSub = this.BalanceUpdationService.loadCharacters().subscribe((options) => {
        //   this.characters = options;
        // });
        // this.runTimer();
        // this.dataSub = this.DebitService.loadCharacters().subscribe((options) => {
        //   this.characters = options;
        // });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            dom: 'ftip'
        };
        this.createForm();
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            var allscheme = data.filter(function (scheme) {
                return (scheme.name == 'SB' || scheme.name == 'TD' || scheme.name == 'IV' || scheme.name == 'GS' || scheme.name == 'AG' || scheme.name == 'PG' || scheme.name == 'CC' || scheme.name == 'SH');
            });
            this.scheme = allscheme;
        });
        this._ownbranchmasterservice.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.branchOption = data;
        });
    }
    // runTimer() {
    //   const timer = setInterval(() => {
    //     this.timeLeft -= 1;
    //     if (this.timeLeft === 0) {
    //       clearInterval(timer);
    //     }
    //   }, 1000);
    // }
    getBranch() {
        this.getAccountList(jquery__WEBPACK_IMPORTED_MODULE_4__["event"]);
    }
    //get account no according scheme
    getAccountList(event) {
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;
        this.ngfromac = null;
        this.ngtoac = null;
        this.arrTable = [];
        let obj = [this.ngscheme, this.ngbranch];
        switch (event.name) {
            case 'SB':
                this.schemeAccountNoService.getSavingSchemeList1(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
                    this.ToAC = data;
                    this.fromAC = data;
                    this.lastTranDate = true;
                    this.ledgerbalance = true;
                    this.productamount = true;
                    this.lastintpaidDate = true;
                    this.closingdate = true;
                    this.debitcredit = true;
                    this.payableint = false;
                    this.totalintpaid = false;
                    this.totalpenalint = false;
                    this.totalinstallmentrec = false;
                    this.tdsopDate = false;
                    this.intinfinancialyear = false;
                    this.opintpaidfinyear = false;
                    this.acopenDate = false;
                    this.lastcreditDate = false;
                    this.lastintDate = false;
                    this.opproduct = false;
                    this.balanceDate = false;
                    this.receivableint = false;
                    this.totalintrec = false;
                    this.penalint = false;
                    this.totaldepositamt = false;
                    this.totalpostedint = false;
                    this.npaDate = false;
                    this.isdisputeloan = false;
                    this.noofshares = false;
                    this.shareamt = false;
                    this.accloseDate = false;
                });
                break;
            case 'TD':
                this.schemeAccountNoService.getTermDepositSchemeList1(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
                    this.ToAC = data;
                    this.fromAC = data;
                    this.ledgerbalance = true;
                    this.lastTranDate = true;
                    this.productamount = false;
                    this.lastintpaidDate = true;
                    this.closingdate = true;
                    this.debitcredit = true;
                    this.payableint = true;
                    this.totalintpaid = true;
                    this.totalpenalint = true;
                    this.totalinstallmentrec = true;
                    this.tdsopDate = true;
                    this.intinfinancialyear = true;
                    this.opintpaidfinyear = true;
                    this.acopenDate = false;
                    this.lastcreditDate = false;
                    this.lastintDate = false;
                    this.opproduct = false;
                    this.balanceDate = false;
                    this.receivableint = false;
                    this.totalintrec = false;
                    this.penalint = false;
                    this.totaldepositamt = false;
                    this.totalpostedint = false;
                    this.npaDate = false;
                    this.isdisputeloan = false;
                    this.noofshares = false;
                    this.shareamt = false;
                    this.accloseDate = false;
                });
                break;
            case 'IV':
                this.schemeAccountNoService.getInvestmentSchemeList1(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
                    this.ToAC = data;
                    this.fromAC = data;
                    console.log(data);
                    this.ledgerbalance = true;
                    this.lastTranDate = true;
                    this.productamount = false;
                    this.lastintpaidDate = true;
                    this.closingdate = true;
                    this.debitcredit = true;
                    this.payableint = true;
                    this.totalintpaid = true;
                    this.totalpenalint = false;
                    this.totalinstallmentrec = false;
                    this.tdsopDate = false;
                    this.intinfinancialyear = false;
                    this.opintpaidfinyear = false;
                    this.acopenDate = false;
                    this.lastcreditDate = false;
                    this.lastintDate = false;
                    this.opproduct = false;
                    this.balanceDate = false;
                    this.receivableint = false;
                    this.penalint = false;
                    this.totaldepositamt = false;
                    this.totalpostedint = false;
                    this.npaDate = false;
                    this.isdisputeloan = false;
                    this.noofshares = false;
                    this.shareamt = false;
                    this.accloseDate = false;
                });
                break;
            case 'GS':
                this.schemeAccountNoService.getAnamatSchemeList1(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
                    this.ToAC = data;
                    this.fromAC = data;
                    this.ledgerbalance = true;
                    this.lastTranDate = false;
                    this.productamount = false;
                    this.lastintpaidDate = false;
                    this.closingdate = true;
                    this.debitcredit = true;
                    this.payableint = false;
                    this.totalintpaid = false;
                    this.totalpenalint = false;
                    this.totalinstallmentrec = false;
                    this.tdsopDate = false;
                    this.intinfinancialyear = false;
                    this.opintpaidfinyear = true;
                    this.lastcreditDate = false;
                    this.lastintDate = false;
                    this.opproduct = false;
                    this.balanceDate = false;
                    this.receivableint = false;
                    this.totalintrec = false;
                    this.penalint = false;
                    this.totaldepositamt = false;
                    this.totalpostedint = false;
                    this.npaDate = false;
                    this.isdisputeloan = false;
                    this.noofshares = false;
                    this.shareamt = false;
                    this.accloseDate = false;
                });
                break;
            case 'AG':
                this.schemeAccountNoService.getPigmyAgentSchemeList1(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
                    this.ToAC = data;
                    this.fromAC = data;
                    this.ledgerbalance = true;
                    this.lastTranDate = true;
                    this.productamount = false;
                    this.lastintpaidDate = true;
                    this.closingdate = true;
                    this.debitcredit = true;
                    this.payableint = false;
                    this.totalintpaid = false;
                    this.totalpenalint = false;
                    this.totalinstallmentrec = false;
                    this.tdsopDate = false;
                    this.intinfinancialyear = false;
                    this.opintpaidfinyear = false;
                    this.acopenDate = false;
                    this.lastcreditDate = false;
                    this.lastintDate = false;
                    this.opproduct = false;
                    this.balanceDate = false;
                    this.receivableint = false;
                    this.totalintrec = false;
                    this.penalint = false;
                    this.totaldepositamt = false;
                    this.totalpostedint = false;
                    this.npaDate = false;
                    this.isdisputeloan = false;
                    this.noofshares = false;
                    this.shareamt = false;
                    this.accloseDate = false;
                });
                break;
            case 'PG':
                this.schemeAccountNoService.getPigmyAccountSchemeList1(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
                    this.ToAC = data;
                    this.fromAC = data;
                    console.log(data);
                    this.ledgerbalance = true;
                    this.lastTranDate = false;
                    this.productamount = false;
                    this.lastintpaidDate = false;
                    this.closingdate = true;
                    this.debitcredit = true;
                    this.payableint = true;
                    this.totalintpaid = false;
                    this.totalpenalint = false;
                    this.totalinstallmentrec = false;
                    this.tdsopDate = false;
                    this.intinfinancialyear = false;
                    this.opintpaidfinyear = false;
                    this.acopenDate = false;
                    this.lastcreditDate = true;
                    this.lastintDate = true;
                    this.opproduct = true;
                    this.balanceDate = false;
                    this.receivableint = false;
                    this.totalintrec = false;
                    this.penalint = false;
                    this.totaldepositamt = false;
                    this.npaDate = false;
                    this.isdisputeloan = false;
                    this.noofshares = false;
                    this.shareamt = false;
                    this.accloseDate = false;
                    this.totalpostedint = false;
                });
                break;
            case 'CC':
                this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
                    this.ToAC = data;
                    this.fromAC = data;
                    console.log(data);
                    this.ledgerbalance = true;
                    this.lastTranDate = true;
                    this.productamount = false;
                    this.lastintpaidDate = false;
                    this.closingdate = false;
                    this.debitcredit = true;
                    this.payableint = false;
                    this.totalintpaid = false;
                    this.totalpenalint = false;
                    this.totalinstallmentrec = false;
                    this.tdsopDate = false;
                    this.intinfinancialyear = false;
                    this.opintpaidfinyear = false;
                    this.acopenDate = false;
                    this.lastcreditDate = false;
                    this.lastintDate = true;
                    this.opproduct = false;
                    this.balanceDate = true;
                    this.receivableint = true;
                    this.totalintrec = true;
                    this.penalint = true;
                    this.totaldepositamt = true;
                    this.totalpostedint = true;
                    this.npaDate = true;
                    this.isdisputeloan = true;
                    this.noofshares = false;
                    this.shareamt = false;
                    this.accloseDate = false;
                });
                break;
            case 'SH':
                this.schemeAccountNoService.getShareSchemeList1(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
                    this.ToAC = data;
                    this.fromAC = data;
                    console.log(data);
                    this.ledgerbalance = false;
                    this.lastTranDate = false;
                    this.productamount = false;
                    this.lastintpaidDate = false;
                    this.closingdate = false;
                    this.debitcredit = true;
                    this.payableint = false;
                    this.totalintpaid = false;
                    this.totalpenalint = false;
                    this.totalinstallmentrec = false;
                    this.tdsopDate = false;
                    this.intinfinancialyear = false;
                    this.opintpaidfinyear = false;
                    this.acopenDate = false;
                    this.lastcreditDate = false;
                    this.lastintDate = false;
                    this.opproduct = false;
                    this.balanceDate = false;
                    this.receivableint = false;
                    this.totalintrec = false;
                    this.penalint = false;
                    this.totaldepositamt = false;
                    this.totalpostedint = false;
                    this.npaDate = false;
                    this.isdisputeloan = false;
                    this.noofshares = true;
                    this.shareamt = true;
                    this.accloseDate = true;
                });
                break;
        }
        this.getschemename = event.name;
    }
    createForm() {
        this.angForm = this.fb.group({
            BRANCH_CODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            AC_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            TRAN_DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            FROM_AC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            TO_AC: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
        });
    }
    ngAfterViewInit() {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then((dtInstance) => {
            $('#sharemastertable tfoot tr').appendTo('#sharemastertable thead');
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
    submit() {
        console.log(this.angForm.valid);
        if (this.angForm.valid) {
            console.log(this.angForm.value);
        }
    }
    addNewData() {
        this.showButton = true;
        // this.updateShow = false;
        this.resetForm();
    }
    //function for edit button clicked
    editClickHandler(info) {
        this.showButton = false;
        this.updateShow = true;
    }
    //function for delete button clicked
    delClickHandler() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your imaginary file is safe.', 'error');
            }
        });
    }
    getSystemParaDate() {
        this.systemParameter.getFormData(1).subscribe(data => {
            this.angForm.patchValue({
                'TRAN_DATE': data.CURRENT_DATE
            });
        });
    }
    // Reset Function
    resetForm() {
        this.createForm();
        this.getSystemParaDate();
        this.ngscheme = null;
        this.ngfromac = null;
        this.ngtoac = null;
    }
    //function toggle update to add button
    updateData() {
        this.showButton = true;
        this.updateShow = false;
        this.resetForm();
    }
}
BalanceUpdationComponent.ɵfac = function BalanceUpdationComponent_Factory(t) { return new (t || BalanceUpdationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_balance_updation_service__WEBPACK_IMPORTED_MODULE_7__["BalanceUpdationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_debit_service__WEBPACK_IMPORTED_MODULE_9__["DebitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_13__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectConfig"])); };
BalanceUpdationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BalanceUpdationComponent, selectors: [["app-balance-updation"]], viewQuery: function BalanceUpdationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myInputField = _t.first);
    } }, decls: 117, vars: 69, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "white"], [1, "required"], ["action", "javascript:", "novalidate", "", 3, "formGroup", "ngSubmit"], ["myform", "ngForm"], [1, "card-block"], [1, "col-sm-12", "col-md-2"], ["for", "BRANCH_CODE"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["id", "BRANCH_CODE", "bindValue", "value", "formControlName", "BRANCH_CODE", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", 3, "ngModel", "ngClass", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["for", "AC_TYPE"], ["id", "SchemeCode", "bindValue", "value", "formControlName", "AC_TYPE", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme Code", 3, "ngModel", "ngModelChange", "change"], ["for", "TRAN_DATE"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "TRAN_DATE", "id", "TRAN_DATE", "formControlName", "TRAN_DATE", "bsDatepicker", "", "disabled", "", 1, "form-control", 3, "bsConfig", "maxDate", "ngClass", "keypress"], ["for", "FROM_AC"], ["id", "FROM_AC", "bindValue", "value", "formControlName", "FROM_AC", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "From A/C", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "TO_AC"], ["id", "TO_AC", "bindValue", "value", "formControlName", "TO_AC", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "To A/C", 3, "ngModel", "ngClass", "ngModelChange"], [1, "col-sm"], ["class", "btn btn-outline-primary btn-sm", 3, "disabled", 4, "ngIf"], [1, "col-sm-12"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions", "dtTrigger"], [1, "td_right"], ["class", "td_right", 4, "ngIf"], ["class", "td_center", 4, "ngIf"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled"], [1, "td_center"], [4, "ngFor", "ngForOf"], ["class", "td_center", "class", "td_right", 4, "ngIf"], ["class", "td_right", "class", "td_right", 4, "ngIf"], ["type", "text", "name", "ledger_balance", "id", "ledger_balance", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "product_amount", "id", "product_amount", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "tran_date", "id", "tran_date", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "last_int_paid", "id", "last_int_paid", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "closing_date", "id", "closing_date", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "debit_credit", "id", "debit_credit", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "payable_int", "id", "payable_int", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "total_int_paid", "id", "total_int_paid", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "total_penal_int", "id", "total_penal_int", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "total_install_rec", "id", "total_install_rec", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "tds_op_date", "id", "tds_op_date", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "int_fin_year", "id", "int_fin_year", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "op_int_fin_year", "id", "op_int_fin_year", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "ac_open_date", "id", "ac_open_date", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "last_credit_date", "id", "last_credit_date", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "op_product", "id", "op_product", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "balance_date", "id", "balance_date", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "receivable_int", "id", "receivable_int", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "total_int_rec", "id", "total_int_rec", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "penal_int", "id", "penal_int", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "total_dep_amt", "id", "total_dep_amt", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "total_posted_int", "id", "total_posted_int", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "npa_Date", "id", "npa_Date", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "dispute_loan", "id", "dispute_loan", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "no_of_shares", "id", "no_of_shares", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "share_amt", "id", "share_amt", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "ac_close_date", "id", "ac_close_date", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "purchase_date", "id", "purchase_date", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "suplier_name", "id", "suplier_name", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "purchase_rate", "id", "purchase_rate", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "purchase_quantity", "id", "purchase_quantity", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "purchase_value", "id", "purchase_value", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "opening_amt", "id", "opening_amt", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "opening_quantity", "id", "opening_quantity", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "last_depreciation_date", "id", "last_depreciation_date", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["colspan", "12", 1, "no-data-available", 2, "text-align", "center"]], template: function BalanceUpdationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Balance Updation");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BalanceUpdationComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Branch Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BalanceUpdationComponent_Template_ng_select_ngModelChange_23_listener($event) { return ctx.ngbranch = $event; })("change", function BalanceUpdationComponent_Template_ng_select_change_23_listener() { return ctx.getBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BalanceUpdationComponent_ng_option_24_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BalanceUpdationComponent_div_25_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Scheme Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BalanceUpdationComponent_Template_ng_select_ngModelChange_34_listener($event) { return ctx.ngscheme = $event; })("change", function BalanceUpdationComponent_Template_ng_select_change_34_listener($event) { return ctx.getAccountList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, BalanceUpdationComponent_ng_option_35_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BalanceUpdationComponent_div_36_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Balance Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BalanceUpdationComponent_Template_input_keypress_43_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "From Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ng-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BalanceUpdationComponent_Template_ng_select_ngModelChange_53_listener($event) { return ctx.ngfromac = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, BalanceUpdationComponent_ng_option_54_Template, 2, 3, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, BalanceUpdationComponent_div_55_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "To Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ng-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BalanceUpdationComponent_Template_ng_select_ngModelChange_64_listener($event) { return ctx.ngtoac = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, BalanceUpdationComponent_ng_option_65_Template, 2, 3, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, BalanceUpdationComponent_div_66_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, BalanceUpdationComponent_button_68_Template, 2, 1, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Account Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, BalanceUpdationComponent_td_79_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, BalanceUpdationComponent_td_80_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, BalanceUpdationComponent_td_81_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, BalanceUpdationComponent_td_82_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, BalanceUpdationComponent_td_83_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, BalanceUpdationComponent_td_84_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, BalanceUpdationComponent_td_85_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, BalanceUpdationComponent_td_86_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, BalanceUpdationComponent_td_87_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, BalanceUpdationComponent_td_88_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, BalanceUpdationComponent_td_89_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, BalanceUpdationComponent_td_90_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, BalanceUpdationComponent_td_91_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, BalanceUpdationComponent_td_92_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, BalanceUpdationComponent_td_93_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, BalanceUpdationComponent_td_94_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, BalanceUpdationComponent_td_95_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, BalanceUpdationComponent_td_96_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, BalanceUpdationComponent_td_97_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, BalanceUpdationComponent_td_98_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, BalanceUpdationComponent_td_99_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, BalanceUpdationComponent_td_100_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, BalanceUpdationComponent_td_101_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, BalanceUpdationComponent_td_102_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, BalanceUpdationComponent_td_103_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, BalanceUpdationComponent_td_104_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, BalanceUpdationComponent_td_105_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, BalanceUpdationComponent_td_106_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, BalanceUpdationComponent_td_107_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, BalanceUpdationComponent_td_108_Template, 2, 0, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, BalanceUpdationComponent_td_109_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, BalanceUpdationComponent_td_110_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, BalanceUpdationComponent_td_111_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, BalanceUpdationComponent_td_112_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, BalanceUpdationComponent_td_113_Template, 2, 0, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, BalanceUpdationComponent_td_114_Template, 2, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, BalanceUpdationComponent_tbody_115_Template, 2, 1, "tbody", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, BalanceUpdationComponent_tbody_116_Template, 4, 0, "tbody", 33);
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngbranch)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branchOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["BRANCH_CODE"].invalid && (ctx.angForm.controls["BRANCH_CODE"].dirty || ctx.angForm.controls["BRANCH_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngscheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TYPE"].invalid && (ctx.angForm.controls["AC_TYPE"].dirty || ctx.angForm.controls["AC_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](62, _c2))("maxDate", ctx.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngfromac)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fromAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["FROM_AC"].invalid && (ctx.angForm.controls["FROM_AC"].dirty || ctx.angForm.controls["FROM_AC"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngtoac)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ToAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["TO_AC"].invalid && (ctx.angForm.controls["TO_AC"].dirty || ctx.angForm.controls["TO_AC"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ledgerbalance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productamount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastTranDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastintpaidDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.closingdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.debitcredit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.payableint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalintpaid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalpenalint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalinstallmentrec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tdsopDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.intinfinancialyear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opintpaidfinyear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.acopenDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastcreditDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastintDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opproduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.balanceDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.receivableint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalintrec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.penalint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totaldepositamt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalpostedint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.npaDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isdisputeloan);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noofshares);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shareamt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accloseDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.purchaseDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supliername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.purchaserate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.purchasequantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.purchasevalue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openingamt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openingquantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastdepreciationDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.arrTable == null ? null : ctx.arrTable.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.arrTable == null ? null : ctx.arrTable.length) == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerDirective"], angular_datatables__WEBPACK_IMPORTED_MODULE_17__["DataTableDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["ɵr"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9iYWxhbmNlLWVudHJ5L2JhbGFuY2UtdXBkYXRpb24vYmFsYW5jZS11cGRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalanceUpdationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-balance-updation',
                templateUrl: './balance-updation.component.html',
                styleUrls: ['./balance-updation.component.scss'],
            }]
    }], function () { return [{ type: _shared_elements_balance_updation_service__WEBPACK_IMPORTED_MODULE_7__["BalanceUpdationService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: _shared_elements_debit_service__WEBPACK_IMPORTED_MODULE_9__["DebitService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"] }, { type: src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__["SystemMasterParametersService"] }, { type: _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_13__["SchemeAccountNoService"] }, { type: _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectConfig"] }]; }, { myInputField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["autofocus"]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/master/balance-entry/balance-updation/balance-updation.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/master/balance-entry/balance-updation/balance-updation.module.ts ***!
  \****************************************************************************************/
/*! exports provided: BalanceUpdationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceUpdationModule", function() { return BalanceUpdationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _balance_updation_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./balance-updation.routing.module */ "./src/app/theme/master/balance-entry/balance-updation/balance-updation.routing.module.ts");
/* harmony import */ var _balance_updation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./balance-updation.component */ "./src/app/theme/master/balance-entry/balance-updation/balance-updation.component.ts");
/* harmony import */ var _shared_elements_balance_updation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/elements/balance-updation.service */ "./src/app/shared/elements/balance-updation.service.ts");
/* harmony import */ var _shared_elements_debit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/elements/debit.service */ "./src/app/shared/elements/debit.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");








// import { SelectModule } from 'ng-select';










class BalanceUpdationModule {
}
BalanceUpdationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BalanceUpdationModule });
BalanceUpdationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BalanceUpdationModule_Factory(t) { return new (t || BalanceUpdationModule)(); }, providers: [
        src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_14__["SystemMasterParametersService"],
        src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OwnbranchMasterService"],
        _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__["SchemeAccountNoService"],
        _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["SchemeCodeDropdownService"],
        _shared_elements_balance_updation_service__WEBPACK_IMPORTED_MODULE_6__["BalanceUpdationService"],
        _shared_elements_debit_service__WEBPACK_IMPORTED_MODULE_7__["DebitService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["UserAuthInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _balance_updation_routing_module__WEBPACK_IMPORTED_MODULE_4__["BalanceUpdationRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
            // SelectModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BalanceUpdationModule, { declarations: [_balance_updation_component__WEBPACK_IMPORTED_MODULE_5__["BalanceUpdationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _balance_updation_routing_module__WEBPACK_IMPORTED_MODULE_4__["BalanceUpdationRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
        // SelectModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalanceUpdationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _balance_updation_routing_module__WEBPACK_IMPORTED_MODULE_4__["BalanceUpdationRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                    // SelectModule,
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"].forRoot()
                ],
                declarations: [_balance_updation_component__WEBPACK_IMPORTED_MODULE_5__["BalanceUpdationComponent"]],
                providers: [
                    src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_14__["SystemMasterParametersService"],
                    src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OwnbranchMasterService"],
                    _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__["SchemeAccountNoService"],
                    _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["SchemeCodeDropdownService"],
                    _shared_elements_balance_updation_service__WEBPACK_IMPORTED_MODULE_6__["BalanceUpdationService"],
                    _shared_elements_debit_service__WEBPACK_IMPORTED_MODULE_7__["DebitService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["UserAuthInterceptor"],
                        multi: true
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/balance-entry/balance-updation/balance-updation.routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/theme/master/balance-entry/balance-updation/balance-updation.routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: BalanceUpdationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceUpdationRoutingModule", function() { return BalanceUpdationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _balance_updation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance-updation.component */ "./src/app/theme/master/balance-entry/balance-updation/balance-updation.component.ts");





const routes = [
    {
        path: '',
        component: _balance_updation_component__WEBPACK_IMPORTED_MODULE_2__["BalanceUpdationComponent"],
        data: {
            title: 'Balance Updation',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class BalanceUpdationRoutingModule {
}
BalanceUpdationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BalanceUpdationRoutingModule });
BalanceUpdationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BalanceUpdationRoutingModule_Factory(t) { return new (t || BalanceUpdationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BalanceUpdationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalanceUpdationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=balance-updation-balance-updation-module.js.map