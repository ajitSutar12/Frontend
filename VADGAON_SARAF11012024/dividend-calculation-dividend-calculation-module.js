(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dividend-calculation-dividend-calculation-module"],{

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
                let obj = { label: element.CODE + ' ' + element.NAME, value: element.id, name: element.CODE, branchName: element.NAME };
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
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_APPL, id: element.S_ACNOTYPE, dividend: element.DIVIDEND_PERCENTAGE, divMethod: element.INTEREST_RULE, isAddBonus: element.IS_ADD_BONUS_IN_DIVIDEND, INT_ROUND_OFF: element.INT_ROUND_OFF, IS_WEEKLY_REPAY: element.IS_WEEKLY_REPAY, IS_RECURRING_TYPE: element.IS_RECURRING_TYPE };
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
                let obj = {
                    label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL, glacno: element.S_GLACNO, intapp: element.S_INT_APPLICABLE, SVR_CHARGE_GLCODE: element.SVR_CHARGE_GLCODE, SVR_CHARGE_RATE: element.SVR_CHARGE_RATE, prematureRate: element.LESS_PREMATURE_INT_RATE, schemeMethod: element.INTEREST_RULE, monthDays: element.S_INTCALTP, Quarterly: element.COMPOUND_INT_BASIS, interestUptoCalDate: element.IS_INTUPTODATE, afterMatureIntRate: element.AFTER_MATURE_INT_RATE, rebateRate: element.REBATE_INTRATE, installmentType: element.S_INSTTYPE, IS_DEPO_LOAN: element.IS_DEPO_LOAN, IS_GOLD_LOAN: element.IS_GOLD_LOAN,
                    FIXED_MATURITY_AMT: element.FIXED_MATURITY_AMT, IS_WEEKLY_REPAY: element.IS_WEEKLY_REPAY
                };
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
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE, code: element.S_APPL };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositSchemeRD() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/term/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                // let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                let obj = { label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL, glacno: element.S_GLACNO, intapp: element.S_INT_APPLICABLE, SVR_CHARGE_GLCODE: element.SVR_CHARGE_GLCODE, SVR_CHARGE_RATE: element.SVR_CHARGE_RATE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositSchemePatD() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/pat/')
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

/***/ "./src/app/shared/elements/branch.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/elements/branch.service.ts ***!
  \***************************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class BranchService {
    getCharacters() {
        return this.cloneOptions(BranchService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(BranchService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(BranchService.PLAYER_ONE);
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
BranchService.PLAYER_ONE = [
    { value: '0', label: 'branch1' },
    { value: '1', label: 'branch2' },
    { value: '2', label: 'branch1' }
];
BranchService.ɵfac = function BranchService_Factory(t) { return new (t || BranchService)(); };
BranchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchService, factory: BranchService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/elements/scheme-code.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/elements/scheme-code.service.ts ***!
  \********************************************************/
/*! exports provided: SchemeCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeCodeService", function() { return SchemeCodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class SchemeCodeService {
    getCharacters() {
        return this.cloneOptions(SchemeCodeService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(SchemeCodeService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(SchemeCodeService.PLAYER_ONE);
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
SchemeCodeService.PLAYER_ONE = [
    { value: '40100', label: '40100' },
    { value: '40200', label: '40200' },
    { value: '40300', label: '40300' },
    { value: '40400', label: '40400' },
];
SchemeCodeService.ɵfac = function SchemeCodeService_Factory(t) { return new (t || SchemeCodeService)(); };
SchemeCodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchemeCodeService, factory: SchemeCodeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeCodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/shares/dividend-calculation/dividend-calculation-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/theme/master/shares/dividend-calculation/dividend-calculation-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: DividendCalculationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividendCalculationRoutingModule", function() { return DividendCalculationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dividend_calculation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dividend-calculation.component */ "./src/app/theme/master/shares/dividend-calculation/dividend-calculation.component.ts");





const routes = [
    {
        path: '',
        component: _dividend_calculation_component__WEBPACK_IMPORTED_MODULE_2__["DividendCalculationComponent"],
        data: {
            title: 'Dividend Calculation',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class DividendCalculationRoutingModule {
}
DividendCalculationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DividendCalculationRoutingModule });
DividendCalculationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DividendCalculationRoutingModule_Factory(t) { return new (t || DividendCalculationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DividendCalculationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividendCalculationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/shares/dividend-calculation/dividend-calculation.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/master/shares/dividend-calculation/dividend-calculation.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DividendCalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividendCalculationComponent", function() { return DividendCalculationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs-compat */ "./node_modules/rxjs-compat/Rx.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/elements/scheme-code.service */ "./src/app/shared/elements/scheme-code.service.ts");
/* harmony import */ var _shared_elements_branch_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/elements/branch.service */ "./src/app/shared/elements/branch.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _dividend_calculation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dividend-calculation.service */ "./src/app/theme/master/shares/dividend-calculation/dividend-calculation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _submit_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../submit.directive */ "./src/app/theme/submit.directive.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../button.directive */ "./src/app/theme/button.directive.ts");






// Angular Datatable Directive


















function DividendCalculationComponent_ng_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r25.label, "");
} }
function DividendCalculationComponent_ng_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r26.label, "");
} }
function DividendCalculationComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendCalculationComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DividendCalculationComponent_div_37_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r5.angForm.controls["AC_TYPE"].errors.required);
} }
function DividendCalculationComponent_div_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendCalculationComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DividendCalculationComponent_div_49_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["DIV_FROMDATE"].errors == null ? null : ctx_r7.angForm.controls["DIV_FROMDATE"].errors.required);
} }
function DividendCalculationComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendCalculationComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DividendCalculationComponent_div_60_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["DIV_TODATE"].errors == null ? null : ctx_r9.angForm.controls["DIV_TODATE"].errors.required);
} }
function DividendCalculationComponent_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendCalculationComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DividendCalculationComponent_div_71_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["WARRENT_DATE"].errors == null ? null : ctx_r11.angForm.controls["WARRENT_DATE"].errors.required);
} }
function DividendCalculationComponent_ng_option_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r31.AC_NO, " ", values_r31.AC_NAME, "");
} }
function DividendCalculationComponent_div_84_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendCalculationComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DividendCalculationComponent_div_84_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.angForm.controls["FROM_AC"].errors == null ? null : ctx_r14.angForm.controls["FROM_AC"].errors.required);
} }
function DividendCalculationComponent_ng_option_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r33.AC_NO, " ", values_r33.AC_NAME, "");
} }
function DividendCalculationComponent_div_96_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendCalculationComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DividendCalculationComponent_div_96_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.angForm.controls["TO_AC"].errors == null ? null : ctx_r17.angForm.controls["TO_AC"].errors.required);
} }
function DividendCalculationComponent_div_108_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required and input allowed only . 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendCalculationComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DividendCalculationComponent_div_108_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.angForm.controls["Dividend"].errors == null ? null : ctx_r19.angForm.controls["Dividend"].errors.required);
} }
function DividendCalculationComponent_div_119_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required and input allowed only . 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendCalculationComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DividendCalculationComponent_div_119_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.angForm.controls["Bonus"].errors == null ? null : ctx_r21.angForm.controls["Bonus"].errors.required);
} }
function DividendCalculationComponent_button_123_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DividendCalculationComponent_button_123_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DividendCalculationComponent_tbody_148_tr_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r40.WARRENT_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r40.S_APPL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r40.DIV_FROM_YEAR);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r40.DIV_TO_YEAR);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r40.FROM_AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r40.TO_AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r40.DIVIDEND_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r40.BONUS_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r40.DIVIDEND_STATUS == "0" ? "UP" : "PS");
} }
function DividendCalculationComponent_tbody_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DividendCalculationComponent_tbody_148_tr_1_Template, 19, 9, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.tablelist);
} }
function DividendCalculationComponent_tbody_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "form-submitted": a0 }; };
const _c1 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
// Handling datatable data
class DataTableResponse {
}
class DividendCalculationComponent {
    constructor(fb, SchemeCodeService, BranchService, http, schemeCodeDropdownService, schemeAccountNoService, _service, 
    // public MembernoService: MembernoService,
    datePipe, ownbranchMasterService, systemParameter) {
        this.fb = fb;
        this.SchemeCodeService = SchemeCodeService;
        this.BranchService = BranchService;
        this.http = http;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.schemeAccountNoService = schemeAccountNoService;
        this._service = _service;
        this.datePipe = datePipe;
        this.ownbranchMasterService = ownbranchMasterService;
        this.systemParameter = systemParameter;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.formSubmitted = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_compat__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtExportButtonOptions = {};
        // a: Array<IOption> = this.SchemeCodeService.getCharacters();
        this.WarrantDate = this.SchemeCodeService.getCharacters();
        this.BranchCode = this.BranchService.getCharacters();
        // b: Array<IOption> = this.MembernoService.getCharacters();
        this.selectedOption = "3";
        this.isDisabled = true;
        this.selectedCharacter = "3";
        this.timeLeft = 5;
        this.showButton = true;
        this.updateShow = false;
        // dropdown ngmodel names
        //Scheme type variable
        this.schemeType = "SH";
        this.ngscheme = null;
        this.ngfromac = null;
        this.ngtoac = null;
        // date variables
        this.divfromdate = null;
        this.divtodate = null;
        this.warrentdate = null;
        this.bsValue = new Date();
        this.dataSub = null;
        this.send = {};
        this.divArr = [];
        this.systemParameter.getFormData(1).subscribe(data => {
            this.maxDate = moment__WEBPACK_IMPORTED_MODULE_4__(data.CURRENT_DATE, 'DD/MM/YYYY');
            this.maxDate, this.minDate = this.maxDate._d;
        });
        let finYear;
        var sysDate = new Date();
        var year = sysDate.getFullYear();
        var month = new Date().getMonth();
        month > 2 ? (finYear = year) : (finYear = year - 1);
        // finYear = finYear - 1;
        var full = [];
        var fullDate = `03/31/${finYear}`;
        this.fromdate = new Date(fullDate);
        this.fromdate.setDate(this.fromdate.getDate());
        this.todate = new Date(fullDate);
        this.todate.setDate(this.fromdate.getDate());
        // this.fromdate = moment(this.divfromdate).subtract(1, "year").toDate();
        // const todate = moment(this.divtodate).subtract(1, "year");
    }
    ngOnInit() {
        this.createForm();
        // Fetching Server side data
        // this.dtExportButtonOptions = {
        //   pagingType: "full_numbers",
        //   paging: true,
        //   pageLength: 10,
        //   serverSide: true,
        //   processing: true,
        //   ajax: (dataTableParameters: any, callback) => {
        //     dataTableParameters.minNumber = dataTableParameters.start + 1;
        //     dataTableParameters.maxNumber =
        //       dataTableParameters.start + dataTableParameters.length;
        //     let datatableRequestParam: any;
        //     this.page = dataTableParameters.start / dataTableParameters.length;
        //     dataTableParameters.columns.forEach((element) => {
        //       if (element.search.value != "") {
        //         let string = element.search.value;
        //         this.filterData[element.data] = string;
        //       } else {
        //         let getColumnName = element.data;
        //         let columnValue = element.value;
        //         if (this.filterData.hasOwnProperty(element.data)) {
        //           let value = this.filterData[getColumnName];
        //           if (columnValue != undefined || value != undefined) {
        //             delete this.filterData[element.data];
        //           }
        //         }
        //       }
        //     });
        //     dataTableParameters["filterData"] = this.filterData;
        //     this.http
        //       .post<DataTableResponse>(
        //         this.url + "/dividend-calculation",
        //         dataTableParameters
        //       )
        //       .subscribe((resp) => {
        //         this.dividendcalculation = resp.data;
        //         callback({
        //           recordsTotal: resp.recordsTotal,
        //           recordsFiltered: resp.recordsTotal,
        //           data: [],
        //         });
        //       });
        //   },
        //   columns: [
        //     {
        //       title: "Action",
        //     },
        //     {
        //       title: "Scheme Code",
        //       data: "AC_TYPE",
        //     },
        //     {
        //       title: "Membership From",
        //       data: "FROM_AC",
        //     },
        //     {
        //       title: "Membership To",
        //       data: "TO_AC",
        //     },
        //     {
        //       title: "Div.Date From",
        //       data: "DIV_FROMDATE",
        //     },
        //     {
        //       title: "Div.Date To",
        //       data: "DIV_TODATE",
        //     },
        //     {
        //       title: "Warrent Date",
        //       data: "WARRENT_DATE",
        //     },
        //     {
        //       title: "Dividend %",
        //       data: "Dividend",
        //     },
        //     {
        //       title: "Bonus %",
        //       data: "Bonus",
        //     },
        //   ],
        //   dom: "Bfrtip",
        // };
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.branch_code = data;
        });
        this.http.get(this.url + '/dividend-calculation/table').subscribe(data => {
            this.tablelist = data;
        });
        this.schemeCodeDropdownService
            .getSchemeCodeList(this.schemeType)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe((data) => {
            this.scheme = data;
            // this.ngscheme = data[0].value;
            // this.shareDividend = data[0].dividend;
            // this.divMethod = data[0].divMethod;
            // this.isAddBonusInDividend = data[0].isAddBonus;
            // this.INT_ROUND_OFF = data[0].INT_ROUND_OFF;
            // this.angForm.patchValue({
            //   Dividend: this.shareDividend,
            // });
        });
        this.getDivTOYear();
    }
    createForm() {
        this.angForm = this.fb.group({
            BRANCH_CODE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            AC_TYPE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            FROM_AC: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            TO_AC: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            DIV_FROMDATE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            DIV_TODATE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            WARRENT_DATE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            Dividend: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            Bonus: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
        });
    }
    //get account no according scheme
    getAccountList() {
        if (this.ngBranch != null && this.ngscheme != null) {
            this.ngfromac = null;
            this.ngtoac = null;
            let trandate;
            if (this.formFromDate != this.divfromdate) {
                trandate = moment__WEBPACK_IMPORTED_MODULE_4__(this.angForm.controls["DIV_TODATE"].value).format('DD/MM/YYYY');
            }
            else {
                trandate = this.formEndDate;
            }
            var full = [];
            var fullDate = trandate;
            full = fullDate.split(" ");
            var date = full[0].split(/\//);
            var newDate = date[1] + "/" + date[0] + "/" + date[2];
            var k = new Date(newDate);
            var expiryDate = moment__WEBPACK_IMPORTED_MODULE_4__(k).format("DD.MM.YYYY");
            let obj = [this.ngscheme, this.ngBranch, expiryDate];
            this.http
                .get(this.url + "/dividend-calculation/check/" + obj)
                .subscribe((data) => {
                this.ToAC = data;
                this.fromAC = data;
            });
        }
    }
    getShareDividend(event) {
        this.shareDividend = event.dividend;
        this.divMethod = event.divMethod;
        this.isAddBonusInDividend = event.isAddBonus;
        this.INT_ROUND_OFF = event.INT_ROUND_OFF;
        this.angForm.patchValue({
            Dividend: event.dividend,
        });
    }
    //checks percentage of interest rate
    checkInt(event) {
        if (Number(event) > 25) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Info", "Please Input Dividend Percentage upto 25", "info");
            this.angForm.patchValue({
                Dividend: "",
            });
        }
    }
    //checks percentage of interest rate
    checkBonus(event) {
        if (Number(event) > 99) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Info", "Please Input Bonus Percentage upto 99", "info");
            this.angForm.patchValue({
                Bonus: "",
            });
        }
    }
    //select content of field
    selectAllContent($event) {
        $event.target.select();
    }
    getDivTOYear() {
        let finYear;
        var sysDate = new Date();
        var year = sysDate.getFullYear();
        var month = new Date().getMonth();
        month > 2 ? (finYear = year) : (finYear = year - 1);
        finYear = finYear - 1;
        var full = [];
        var fullDate = `01/04/${finYear}`;
        // let divYear=new Date(fullDate)
        full = fullDate.split(" ");
        var date = full[0].split(/\//);
        var newDate = date[1] + "/" + date[0] + "/" + date[2];
        var formatDate = new Date(newDate);
        // starting and end date
        let start = moment__WEBPACK_IMPORTED_MODULE_4__(formatDate);
        let end = moment__WEBPACK_IMPORTED_MODULE_4__(start).add(12, "M");
        var endDT = moment__WEBPACK_IMPORTED_MODULE_4__(end).subtract(1, "days").format("DD/MM/YYYY");
        let starting = moment__WEBPACK_IMPORTED_MODULE_4__(start).format("DD/MM/YYYY");
        this.formFromDate = starting;
        this.divfromdate = starting;
        this.formEndDate = endDT;
        this.divtodate = endDT;
        this.angForm.patchValue({
            DIV_FROMDATE: starting,
            DIV_TODATE: endDT,
        });
    }
    checkDivYear() {
        this.getAccountList();
        //Date range
        let startDate;
        let endDate;
        let divdatef = this.angForm.controls["DIV_FROMDATE"].value;
        let divdatet = this.angForm.controls["DIV_TODATE"].value;
        if (divdatef != '' && divdatet != '') {
            if (this.formFromDate != this.divfromdate) {
                startDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.angForm.controls["DIV_FROMDATE"].value).format('DD/MM/YYYY');
            }
            else {
                startDate = this.formFromDate;
            }
            if (this.formEndDate != this.divtodate) {
                endDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.angForm.controls["DIV_TODATE"].value).format('DD/MM/YYYY');
            }
            else {
                endDate = this.formEndDate;
            }
            var full = [];
            // startDate = moment(this.divfromdate).format("DD/MM/YYYY");
            // endDate = moment(this.divtodate).format("DD/MM/YYYY");
            var startDT = startDate;
            full = startDT.split(" ");
            var sdate = full[0].split(/\//);
            this.startYr = sdate[2];
            this.DIV_FROM_MONTH = sdate[1];
            var full = [];
            var endDT = endDate;
            full = endDT.split(" ");
            var date = full[0].split(/\//);
            this.endYr = date[2];
            this.DIV_TO_MONTH = date[1];
            let obj = [this.startYr, this.endYr];
            this.http
                .get(this.url + "/dividend-calculation/divYrcheck/" + obj)
                .subscribe((data) => {
                // data["divCheck"] = "Already Processed"
                if (data["historyCheck"] == "Already Posted") {
                    this.send["Flag"] = "history";
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Dividend Already Posted !", "warning");
                }
                else if (data["divCheck"] == "Already Processed") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        text: "Dividend Already Processed.Do You Want To Overwrite?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#229954",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Overwrite it!",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.send["Flag"] = "Overwrite";
                        }
                        else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                            this.send["Flag"] = "Insert";
                        }
                    });
                }
                else if (data["divCheck"] == "new") {
                    this.send["Flag"] = "Insert";
                }
            });
        }
    }
    getAccNumbers() {
        this.arrTable = [];
        this.divArr = [];
        var memFrom = this.angForm.controls["FROM_AC"].value;
        var memTo = this.angForm.controls["TO_AC"].value;
        if (this.angForm.controls["FROM_AC"].value <= this.angForm.controls["TO_AC"].value &&
            this.angForm.controls["TO_AC"].value != "") {
            let trandate;
            if (this.formFromDate != this.divfromdate) {
                trandate = moment__WEBPACK_IMPORTED_MODULE_4__(this.angForm.controls["DIV_TODATE"].value).format('DD/MM/YYYY');
            }
            else {
                trandate = this.formEndDate;
            }
            var full = [];
            var fullDate = trandate;
            full = fullDate.split(" ");
            var date = full[0].split(/\//);
            var newDate = date[1] + "/" + date[0] + "/" + date[2];
            var k = new Date(newDate);
            var expiryDate = moment__WEBPACK_IMPORTED_MODULE_4__(k).format("DD.MM.YYYY");
            let mem = [memFrom, memTo, this.ngscheme, this.ngBranch, expiryDate];
            this.http
                .get(this.url + "/dividend-calculation/accounts/" + mem)
                .subscribe((data) => {
                this.arrTable = data;
                this.arrTable.forEach((element) => {
                    var object = {
                        AC_NO: element.AC_NO,
                        AC_NAME: element.AC_NAME,
                        id: element.id,
                        AC_CLOSEDT: element.AC_CLOSEDT,
                        BANKACNO: element.BANKACNO == undefined || element.BANKACNO == null
                            ? ""
                            : element.BANKACNO,
                        BRANCH_CODE: element.BRANCH_CODE,
                        AC_OPDATE: element.AC_OPDATE
                    };
                    this.divArr.push(object);
                });
            });
        }
    }
    submit() {
        const formVal = this.angForm.value;
        let data = localStorage.getItem("user");
        let result = JSON.parse(data);
        const dataToSend = {
            DIV_FROMDATE: this.formFromDate == formVal.DIV_FROMDATE ? formVal.DIV_FROMDATE : moment__WEBPACK_IMPORTED_MODULE_4__(formVal.DIV_FROMDATE).format('DD/MM/YYYY'),
            DIV_TODATE: this.formEndDate == formVal.DIV_TODATE ? formVal.DIV_TODATE : moment__WEBPACK_IMPORTED_MODULE_4__(formVal.DIV_TODATE).format('DD/MM/YYYY'),
            USER: result.id,
            divMethod: this.divMethod,
            Dividend: formVal.Dividend,
            Bonus: formVal.Bonus,
            WARRENT_DATE: formVal.WARRENT_DATE == "" || formVal.WARRENT_DATE == "Invalid date" ? "" : moment__WEBPACK_IMPORTED_MODULE_4__(formVal.WARRENT_DATE).format("DD/MM/YYYY"),
            DIV_FROM_YEAR: this.startYr,
            DIV_TO_YEAR: this.endYr,
            ACTYPE: this.ngscheme,
            DIV_FROM_MONTH: this.DIV_FROM_MONTH,
            DIV_TO_MONTH: this.DIV_TO_MONTH,
            divArr: this.divArr,
            send: this.send,
            isAddBonus: this.isAddBonusInDividend,
        };
        console.log(dataToSend);
        if (this.send != 'history') {
            this._service.postData(dataToSend).subscribe((data) => {
                this.formSubmitted = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Success!", "Data Updated Successfully !", "success");
            });
            this.arrTable = [];
            this.divArr = [];
            this.resetForm();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Dividend Already Posted!", "warning");
        }
    }
    /**
     * @editClickHandler function for edit button clicked
     */
    editClickHandler(info) {
        this.updateShow = true;
    }
    // Reset Function
    resetForm() {
        this.createForm();
        this.ngscheme = null;
        this.ngfromac = null;
        this.ngtoac = null;
    }
    /**
     * @updateData function for update data
     */
    updateData() {
        // this.showButton = true;
        this.updateShow = false;
        // this.form.reset();
    }
    /**
    * @delClickHandler function for delete button
      @Swal sweetalert2
      @Swal.fire open a modal window to display message
    */
    //function for delete button clicked
    delClickHandler(info) {
        // this.message.SchemeCode = info.SchemeCode;
        // Swal.fire({
        //   title: 'Are you sure?',
        //   text: "Do you want to delete Scheme Code." + this.message.SchemeCode + "  data",
        //   icon: 'warning',
        //   showCancelButton: true,
        //   confirmButtonColor: '#229954',
        //   cancelButtonColor: '#d33',
        //   confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     Swal.fire(
        //       'Deleted!',
        //       'Your data has been deleted.',
        //       'success'
        //     )
        //   } else if (
        //     result.dismiss === Swal.DismissReason.cancel
        //   ) {
        //     Swal.fire(
        //       'Cancelled',
        //       'Your data is safe.',
        //       'error'
        //     )
        //   }
        // })
    }
    onFocus(ele) {
        ele.open();
    }
    checkmargin(ele) {
        //check  if given value  is below 25
        if (ele.target.value <= 25) {
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Invalid Input", "Please Insert Values Below 25", "error");
            ele.target.value = 0;
        }
    }
    checkmarginb(ele) {
        //check  if given value  is below 99
        if (ele.target.value <= 99) {
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Invalid Input", "Please Insert Values Below 99", "error");
            ele.target.value = 0;
        }
    }
    getBranch() {
        this.ngfromac = null;
        this.ngtoac = null;
        this.ngscheme = null;
        this.fromAC = null;
        this.ToAC = null;
    }
}
DividendCalculationComponent.ɵfac = function DividendCalculationComponent_Factory(t) { return new (t || DividendCalculationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_branch_service__WEBPACK_IMPORTED_MODULE_9__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dividend_calculation_service__WEBPACK_IMPORTED_MODULE_13__["DividendCalculationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_16__["SystemMasterParametersService"])); };
DividendCalculationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DividendCalculationComponent, selectors: [["app-dividend-calculation"]], viewQuery: function DividendCalculationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 150, vars: 60, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "appSubmit", "", "novalidate", "", 3, "formGroup", "ngSubmit"], ["myform", "ngForm"], [1, "card-block"], [1, "col-sm-12", "col-md-2"], ["for", "AC_TYPE"], [1, "col-sm-12", "col-md-3"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["appTheme", "", "id", "BRANCH_CODE", "bindValue", "value", "formControlName", "BRANCH_CODE", "bindLabel", "label", "title", "Compulsory Selection", "autofocus", "", "placeholder", "Branch", 3, "ngModel", "selectOnTab", "virtualScroll", "ngClass", "ngModelChange", "focus", "change"], ["branchcode", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appTheme", "", "id", "SchemeCode", "bindValue", "value", "formControlName", "AC_TYPE", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme Code", 3, "ngModel", "virtualScroll", "selectOnTab", "ngModelChange", "change", "focus"], ["AC_TYPE", ""], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["for", "DIV_FROMDATE"], [1, "form-group", "input-group"], ["appTheme", "", "appButton", "", "minlength", "10", "maxlength", "10", "type", "text", "placeholder", "dd/mm/yyyy", "name", "DIV_FROMDATE", "id", "DIV_FROMDATE", "formControlName", "DIV_FROMDATE", "bsDatepicker", "", 1, "form-control", 3, "bsValue", "ngModel", "bsConfig", "maxDate", "ngClass", "ngModelChange", "keydown.Tab", "keypress", "change"], ["DIV_FROMDATE", "bsDatepicker"], ["for", "DIV_TODATE"], ["appTheme", "", "appButton", "", "minlength", "10", "maxlength", "10", "type", "text", "placeholder", "dd/mm/yyyy", "name", "DIV_TODATE", "id", "DIV_TODATE", "formControlName", "DIV_TODATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "maxDate", "ngClass", "ngModelChange", "keydown.Tab", "keypress", "change"], ["DIV_TODATE", "bsDatepicker"], ["for", "WARRENT_DATE"], ["appTheme", "", "appButton", "", "minlength", "10", "maxlength", "10", "type", "text", "placeholder", "dd/mm/yyyy", "name", "WARRENT_DATE", "id", "WARRENT_DATE", "placement", "left", "formControlName", "WARRENT_DATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "minDate", "ngClass", "ngModelChange", "keydown.Tab", "keypress"], ["WARRENT_DATE", "bsDatepicker"], ["for", "FROM_AC"], [1, "col-sm-12", "col-md-4"], ["appTheme", "", "id", "FROM_AC", "bindValue", "AC_NO", "formControlName", "FROM_AC", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "From Account", 3, "ngModel", "ngClass", "virtualScroll", "selectOnTab", "ngModelChange", "focus"], ["FROM_AC", ""], ["for", "TO_AC"], ["appTheme", "", "id", "TO_AC", "bindValue", "AC_NO", "formControlName", "TO_AC", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "To Account", 3, "ngModel", "selectOnTab", "virtualScroll", "ngClass", "ngModelChange", "change", "focus"], ["TO_AC", ""], ["for", "Dividend"], ["appTheme", "", "type", "text", "name", "Dividend", "placeholder", " ", "id", "Dividend", "required", "", "value", " ", "title", "Input allowed only 0-9", "formControlName", "Dividend", 1, "form-control", 2, "text-align", "right", 3, "keyup", "focus", "keypress"], ["INT", ""], ["for", "Bonus"], ["appTheme", "", "type", "text", "name", "Bonus", "placeholder", " ", "id", "Bonus", "value", " ", "pattern", "\\d{1,5}(\\.\\d{2})?", "title", "Input allowed only 0-9", "formControlName", "Bonus", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "keypress"], ["Bonus", ""], [1, "col-sm"], ["appTheme", "", 1, "btn", "btn-outline-primary", "btn-sm", "btn-submit", 3, "disabled"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [1, "table-responsive", "fixTableHead"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], ["colspan", "12", 1, "no-data-available", 2, "text-align", "center"]], template: function DividendCalculationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dividend Calculation");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DividendCalculationComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ng-select", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DividendCalculationComponent_Template_ng_select_ngModelChange_23_listener($event) { return ctx.ngBranch = $event; })("focus", function DividendCalculationComponent_Template_ng_select_focus_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.onFocus(_r1); })("change", function DividendCalculationComponent_Template_ng_select_change_23_listener() { return ctx.getBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DividendCalculationComponent_ng_option_25_Template, 2, 2, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Scheme Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ng-select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DividendCalculationComponent_Template_ng_select_ngModelChange_34_listener($event) { return ctx.ngscheme = $event; })("change", function DividendCalculationComponent_Template_ng_select_change_34_listener($event) { ctx.getAccountList(); return ctx.getShareDividend($event); })("focus", function DividendCalculationComponent_Template_ng_select_focus_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return ctx.onFocus(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DividendCalculationComponent_ng_option_36_Template, 2, 2, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DividendCalculationComponent_div_37_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Dividend Date From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DividendCalculationComponent_Template_input_ngModelChange_47_listener($event) { return ctx.divfromdate = $event; })("keydown.Tab", function DividendCalculationComponent_Template_input_keydown_Tab_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48); return _r6.hide(); })("keypress", function DividendCalculationComponent_Template_input_keypress_47_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; })("change", function DividendCalculationComponent_Template_input_change_47_listener() { return ctx.checkDivYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DividendCalculationComponent_div_49_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Dividend Date To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DividendCalculationComponent_Template_input_ngModelChange_58_listener($event) { return ctx.divtodate = $event; })("keydown.Tab", function DividendCalculationComponent_Template_input_keydown_Tab_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); return _r8.hide(); })("keypress", function DividendCalculationComponent_Template_input_keypress_58_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; })("change", function DividendCalculationComponent_Template_input_change_58_listener() { return ctx.checkDivYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, DividendCalculationComponent_div_60_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Warrent Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DividendCalculationComponent_Template_input_ngModelChange_69_listener($event) { return ctx.warrentdate = $event; })("keydown.Tab", function DividendCalculationComponent_Template_input_keydown_Tab_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70); return _r10.hide(); })("keypress", function DividendCalculationComponent_Template_input_keypress_69_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, DividendCalculationComponent_div_71_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Member From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ng-select", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DividendCalculationComponent_Template_ng_select_ngModelChange_81_listener($event) { return ctx.ngfromac = $event; })("focus", function DividendCalculationComponent_Template_ng_select_focus_81_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82); return ctx.onFocus(_r12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, DividendCalculationComponent_ng_option_83_Template, 2, 3, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, DividendCalculationComponent_div_84_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Member To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ng-select", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DividendCalculationComponent_Template_ng_select_ngModelChange_93_listener($event) { return ctx.ngtoac = $event; })("change", function DividendCalculationComponent_Template_ng_select_change_93_listener() { return ctx.getAccNumbers(); })("focus", function DividendCalculationComponent_Template_ng_select_focus_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](94); return ctx.onFocus(_r15); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, DividendCalculationComponent_ng_option_95_Template, 2, 3, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, DividendCalculationComponent_div_96_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Dividend %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DividendCalculationComponent_Template_input_keyup_106_listener($event) { return ctx.checkmargin($event); })("focus", function DividendCalculationComponent_Template_input_focus_106_listener($event) { return ctx.selectAllContent($event); })("keypress", function DividendCalculationComponent_Template_input_keypress_106_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; })("keyup", function DividendCalculationComponent_Template_input_keyup_106_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](107); return ctx.checkInt(_r18.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, DividendCalculationComponent_div_108_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Bonus %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "input", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DividendCalculationComponent_Template_input_focus_117_listener($event) { return ctx.selectAllContent($event); })("keyup", function DividendCalculationComponent_Template_input_keyup_117_listener($event) { return ctx.checkmarginb($event); })("keypress", function DividendCalculationComponent_Template_input_keypress_117_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; })("keyup", function DividendCalculationComponent_Template_input_keyup_117_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](118); return ctx.checkBonus(_r20.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, DividendCalculationComponent_div_119_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, DividendCalculationComponent_button_123_Template, 2, 0, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "table", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Warrent Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Dividend From Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Dividend To Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "From Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "To Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Dividend Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Bouns Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, DividendCalculationComponent_tbody_148_Template, 2, 1, "tbody", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, DividendCalculationComponent_tbody_149_Template, 4, 0, "tbody", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngBranch)("selectOnTab", true)("virtualScroll", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngscheme)("virtualScroll", true)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TYPE"].invalid && (ctx.angForm.controls["AC_TYPE"].dirty || ctx.angForm.controls["AC_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsValue", ctx.bsValue)("ngModel", ctx.divfromdate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c1))("maxDate", ctx.fromdate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["DIV_FROMDATE"].invalid && (ctx.angForm.controls["DIV_FROMDATE"].dirty || ctx.angForm.controls["DIV_FROMDATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.divtodate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c1))("maxDate", ctx.todate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["DIV_TODATE"].invalid && (ctx.angForm.controls["DIV_TODATE"].dirty || ctx.angForm.controls["DIV_TODATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.warrentdate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](53, _c1))("minDate", ctx.minDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["WARRENT_DATE"].invalid && (ctx.angForm.controls["WARRENT_DATE"].dirty || ctx.angForm.controls["WARRENT_DATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngfromac)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c0, ctx.formSubmitted))("virtualScroll", true)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fromAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["FROM_AC"].invalid && (ctx.angForm.controls["FROM_AC"].dirty || ctx.angForm.controls["FROM_AC"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngtoac)("selectOnTab", true)("virtualScroll", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ToAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["TO_AC"].invalid && (ctx.angForm.controls["TO_AC"].dirty || ctx.angForm.controls["TO_AC"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["Dividend"].invalid && (ctx.angForm.controls["Dividend"].dirty || ctx.angForm.controls["Dividend"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["Bonus"].invalid && (ctx.angForm.controls["Bonus"].dirty || ctx.angForm.controls["Bonus"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.angForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.tablelist == null ? null : ctx.tablelist.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.tablelist == null ? null : ctx.tablelist.length) == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _submit_directive__WEBPACK_IMPORTED_MODULE_17__["SubmitDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectComponent"], _theme_directive__WEBPACK_IMPORTED_MODULE_19__["ThemeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerInputDirective"], _button_directive__WEBPACK_IMPORTED_MODULE_21__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["ɵr"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9zaGFyZXMvZGl2aWRlbmQtY2FsY3VsYXRpb24vZGl2aWRlbmQtY2FsY3VsYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividendCalculationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-dividend-calculation",
                templateUrl: "./dividend-calculation.component.html",
                styleUrls: ["./dividend-calculation.component.scss"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeService"] }, { type: _shared_elements_branch_service__WEBPACK_IMPORTED_MODULE_9__["BranchService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }, { type: _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SchemeCodeDropdownService"] }, { type: src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__["SchemeAccountNoService"] }, { type: _dividend_calculation_service__WEBPACK_IMPORTED_MODULE_13__["DividendCalculationService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["OwnbranchMasterService"] }, { type: src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_16__["SystemMasterParametersService"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/master/shares/dividend-calculation/dividend-calculation.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/master/shares/dividend-calculation/dividend-calculation.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DividendCalculationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividendCalculationModule", function() { return DividendCalculationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _dividend_calculation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dividend-calculation-routing.module */ "./src/app/theme/master/shares/dividend-calculation/dividend-calculation-routing.module.ts");
/* harmony import */ var _dividend_calculation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dividend-calculation.component */ "./src/app/theme/master/shares/dividend-calculation/dividend-calculation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/elements/scheme-code.service */ "./src/app/shared/elements/scheme-code.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _shared_elements_memberno_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/elements/memberno.service */ "./src/app/shared/elements/memberno.service.ts");
/* harmony import */ var _shared_elements_branch_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/elements/branch.service */ "./src/app/shared/elements/branch.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _dividend_calculation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dividend-calculation.service */ "./src/app/theme/master/shares/dividend-calculation/dividend-calculation.service.ts");
/* harmony import */ var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/theme/theme.module */ "./src/app/theme/theme.module.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");












// import { SelectModule } from 'ng-select';











class DividendCalculationModule {
}
DividendCalculationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DividendCalculationModule });
DividendCalculationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DividendCalculationModule_Factory(t) { return new (t || DividendCalculationModule)(); }, providers: [_shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_6__["SchemeCodeService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_7__["SchemeAccountNoService"], _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeDropdownService"], _shared_elements_memberno_service__WEBPACK_IMPORTED_MODULE_9__["MembernoService"], _shared_elements_branch_service__WEBPACK_IMPORTED_MODULE_10__["BranchService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["OwnbranchMasterService"], src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_19__["SystemMasterParametersService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _dividend_calculation_service__WEBPACK_IMPORTED_MODULE_16__["DividendCalculationService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["UserAuthInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dividend_calculation_routing_module__WEBPACK_IMPORTED_MODULE_3__["DividendCalculationRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            // SelectModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"].forRoot(),
            src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_17__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DividendCalculationModule, { declarations: [_dividend_calculation_component__WEBPACK_IMPORTED_MODULE_4__["DividendCalculationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dividend_calculation_routing_module__WEBPACK_IMPORTED_MODULE_3__["DividendCalculationRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
        // SelectModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"], src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_17__["ThemeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividendCalculationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dividend_calculation_routing_module__WEBPACK_IMPORTED_MODULE_3__["DividendCalculationRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                    // SelectModule,
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"].forRoot(),
                    src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_17__["ThemeModule"]
                ],
                declarations: [_dividend_calculation_component__WEBPACK_IMPORTED_MODULE_4__["DividendCalculationComponent"]],
                providers: [_shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_6__["SchemeCodeService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_7__["SchemeAccountNoService"], _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeDropdownService"], _shared_elements_memberno_service__WEBPACK_IMPORTED_MODULE_9__["MembernoService"], _shared_elements_branch_service__WEBPACK_IMPORTED_MODULE_10__["BranchService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["OwnbranchMasterService"], src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_19__["SystemMasterParametersService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _dividend_calculation_service__WEBPACK_IMPORTED_MODULE_16__["DividendCalculationService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["UserAuthInterceptor"],
                        multi: true
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/shares/dividend-calculation/dividend-calculation.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/master/shares/dividend-calculation/dividend-calculation.service.ts ***!
  \******************************************************************************************/
/*! exports provided: DividendCalculationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividendCalculationService", function() { return DividendCalculationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class DividendCalculationService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/dividend-calculation/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data !');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/dividend-calculation/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/dividend-calculation/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/dividend-calculation/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
DividendCalculationService.ɵfac = function DividendCalculationService_Factory(t) { return new (t || DividendCalculationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
DividendCalculationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DividendCalculationService, factory: DividendCalculationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividendCalculationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


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
    getData() {
        return this.http.get(this.url + '/system-master-parameters/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
SystemMasterParametersService.ɵfac = function SystemMasterParametersService_Factory(t) { return new (t || SystemMasterParametersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
SystemMasterParametersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SystemMasterParametersService, factory: SystemMasterParametersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemMasterParametersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dividend-calculation-dividend-calculation-module.js.map