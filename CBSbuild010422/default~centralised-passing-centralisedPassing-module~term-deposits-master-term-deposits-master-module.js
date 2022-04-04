(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~centralised-passing-centralisedPassing-module~term-deposits-master-term-deposits-master-module"],{

/***/ "./src/app/shared/dropdownService/operation-master-dropdown.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/dropdownService/operation-master-dropdown.service.ts ***!
  \*****************************************************************************/
/*! exports provided: OperationMasterDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationMasterDropdownService", function() { return OperationMasterDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class OperationMasterDropdownService {
    constructor(http) {
        this.http = http;
        // // operation-master";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.operationMasterObject = new Array();
    }
    getOperationMasterList() {
        this.operationMasterObject = [];
        return this.http.get(this.url + '/operation-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.NAME, value: element.id };
                this.operationMasterObject.push(obj);
            });
            return this.operationMasterObject;
        }));
    }
}
OperationMasterDropdownService.ɵfac = function OperationMasterDropdownService_Factory(t) { return new (t || OperationMasterDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
OperationMasterDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OperationMasterDropdownService, factory: OperationMasterDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperationMasterDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/elements/accountcode.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/elements/accountcode.service.ts ***!
  \********************************************************/
/*! exports provided: AccountcodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountcodeService", function() { return AccountcodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class AccountcodeService {
    getCharacters() {
        return this.cloneOptions(AccountcodeService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(AccountcodeService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(AccountcodeService.PLAYER_ONE);
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
AccountcodeService.PLAYER_ONE = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
];
AccountcodeService.ɵfac = function AccountcodeService_Factory(t) { return new (t || AccountcodeService)(); };
AccountcodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountcodeService, factory: AccountcodeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountcodeService, [{
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

/***/ "./src/app/shared/elements/title.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/elements/title.service.ts ***!
  \**************************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class TitleService {
    getCharacters() {
        return this.cloneOptions(TitleService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(TitleService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(TitleService.PLAYER_ONE);
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
TitleService.PLAYER_ONE = [
    { value: '0', label: 'Mr.' },
    { value: '1', label: 'Mrs.' },
    { value: '2', label: 'Miss' }
];
TitleService.ɵfac = function TitleService_Factory(t) { return new (t || TitleService)(); };
TitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TitleService, factory: TitleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/term-deposits-master/term-deposits-master-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/master/customer/term-deposits-master/term-deposits-master-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: TermDepositsMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositsMasterRoutingModule", function() { return TermDepositsMasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _term_deposits_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./term-deposits-master.component */ "./src/app/theme/master/customer/term-deposits-master/term-deposits-master.component.ts");





const routes = [
    {
        path: '',
        component: _term_deposits_master_component__WEBPACK_IMPORTED_MODULE_2__["TermDepositsMasterComponent"],
        data: {
            title: 'Term Deposits Master',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class TermDepositsMasterRoutingModule {
}
TermDepositsMasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermDepositsMasterRoutingModule });
TermDepositsMasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermDepositsMasterRoutingModule_Factory(t) { return new (t || TermDepositsMasterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermDepositsMasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositsMasterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/term-deposits-master/term-deposits-master.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/master/customer/term-deposits-master/term-deposits-master.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TermDepositsMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositsMasterComponent", function() { return TermDepositsMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_elements_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/elements/title.service */ "./src/app/shared/elements/title.service.ts");
/* harmony import */ var _shared_elements_accountcode_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/elements/accountcode.service */ "./src/app/shared/elements/accountcode.service.ts");
/* harmony import */ var _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/customer-id-master-dropdown.service */ "./src/app/shared/dropdownService/customer-id-master-dropdown.service.ts");
/* harmony import */ var _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _term_deposits_master_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./term-deposits-master.service */ "./src/app/theme/master/customer/term-deposits-master/term-deposits-master.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/dropdownService/category-master-dropdown.service */ "./src/app/shared/dropdownService/category-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/dropdownService/interest-category-master-dropdown.service */ "./src/app/shared/dropdownService/interest-category-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_operation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/dropdownService/operation-master-dropdown.service */ "./src/app/shared/dropdownService/operation-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/dropdownService/cast-master-dropdown.service */ "./src/app/shared/dropdownService/cast-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/dropdownService/city-master-dropdown.service */ "./src/app/shared/dropdownService/city-master-dropdown.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _utility_scheme_parameters_term_deposit_scheme_term_deposit_scheme_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service */ "./src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service.ts");
/* harmony import */ var _instruction_interest_instruction_interest_instruction_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../instruction/interest-instruction/interest-instruction.service */ "./src/app/theme/master/instruction/interest-instruction/interest-instruction.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _customer_id_customer_id_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../customer-id/customer-id.component */ "./src/app/theme/master/customer/customer-id/customer-id.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _instruction_interest_instruction_interest_instruction_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../instruction/interest-instruction/interest-instruction.component */ "./src/app/theme/master/instruction/interest-instruction/interest-instruction.component.ts");









// Handling datatable data





























const _c0 = ["ctdTabset"];
function TermDepositsMasterComponent_ng_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", values_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", values_r17.label, " ");
} }
function TermDepositsMasterComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_div_24_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r2.angForm.controls["AC_TYPE"].errors.required);
} }
function TermDepositsMasterComponent_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", values_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", values_r19.label, "");
} }
function TermDepositsMasterComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_div_35_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.angForm.controls["AC_CUSTID"].errors == null ? null : ctx_r4.angForm.controls["AC_CUSTID"].errors.required);
} }
function TermDepositsMasterComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "JOINT ACCOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_75_div_24_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r21.angForm.controls["AC_OPDATE"].errors == null ? null : ctx_r21.angForm.controls["AC_OPDATE"].errors.required);
} }
function TermDepositsMasterComponent_ng_template_75_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_75_div_31_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r22.angForm.controls["REF_ACNO"].errors == null ? null : ctx_r22.angForm.controls["REF_ACNO"].errors.pattern) || (ctx_r22.angForm.controls["REF_ACNO"].errors == null ? null : ctx_r22.angForm.controls["REF_ACNO"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_75_ng_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", values_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", values_r40.label, "");
} }
function TermDepositsMasterComponent_ng_template_75_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_75_div_60_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r24.angForm.controls["AC_CATG"].errors == null ? null : ctx_r24.angForm.controls["AC_CATG"].errors.required);
} }
function TermDepositsMasterComponent_ng_template_75_ng_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", values_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", values_r42.label, "");
} }
function TermDepositsMasterComponent_ng_template_75_div_70_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_75_div_70_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r26.angForm.controls["AC_OPR_CODE"].errors == null ? null : ctx_r26.angForm.controls["AC_OPR_CODE"].errors.required);
} }
function TermDepositsMasterComponent_ng_template_75_ng_option_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", values_r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", values_r44.label, "");
} }
function TermDepositsMasterComponent_ng_template_75_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_75_div_81_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r28.angForm.controls["AC_INTCATA"].errors == null ? null : ctx_r28.angForm.controls["AC_INTCATA"].errors.required);
} }
function TermDepositsMasterComponent_ng_template_75_div_88_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_75_div_88_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r29.angForm.controls["AC_REF_RECEIPTNO"].errors == null ? null : ctx_r29.angForm.controls["AC_REF_RECEIPTNO"].errors.pattern) || (ctx_r29.angForm.controls["AC_REF_RECEIPTNO"].errors == null ? null : ctx_r29.angForm.controls["AC_REF_RECEIPTNO"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_75_div_95_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_75_div_95_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_PANNO"].errors == null ? null : ctx_r30.angForm.controls["AC_PANNO"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_75_div_116_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_75_div_116_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r32.angForm.controls["AC_MONTHS"].errors == null ? null : ctx_r32.angForm.controls["AC_MONTHS"].errors.pattern) || (ctx_r32.angForm.controls["AC_MONTHS"].errors == null ? null : ctx_r32.angForm.controls["AC_MONTHS"].errors.required) || (ctx_r32.angForm.controls["AC_MONTHS"].errors == null ? null : ctx_r32.angForm.controls["AC_MONTHS"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_75_div_123_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_75_div_123_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r33.angForm.controls["AC_DAYS"].errors == null ? null : ctx_r33.angForm.controls["AC_DAYS"].errors.pattern) || (ctx_r33.angForm.controls["AC_DAYS"].errors == null ? null : ctx_r33.angForm.controls["AC_DAYS"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_75_div_140_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_75_div_140_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r35.angForm.controls["AC_SCHMAMT"].errors == null ? null : ctx_r35.angForm.controls["AC_SCHMAMT"].errors.pattern) || (ctx_r35.angForm.controls["AC_SCHMAMT"].errors == null ? null : ctx_r35.angForm.controls["AC_SCHMAMT"].errors.required) || (ctx_r35.angForm.controls["AC_SCHMAMT"].errors == null ? null : ctx_r35.angForm.controls["AC_SCHMAMT"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_75_div_150_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This feild is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_75_div_150_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r36.angForm.controls["AC_INTRATE"].errors == null ? null : ctx_r36.angForm.controls["AC_INTRATE"].errors.pattern) || (ctx_r36.angForm.controls["AC_INTRATE"].errors == null ? null : ctx_r36.angForm.controls["AC_INTRATE"].errors.required));
} }
function TermDepositsMasterComponent_ng_template_75_div_157_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_75_div_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_75_div_157_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r37.angForm.controls["AC_MATUAMT"].errors == null ? null : ctx_r37.angForm.controls["AC_MATUAMT"].errors.pattern) || (ctx_r37.angForm.controls["AC_MATUAMT"].errors == null ? null : ctx_r37.angForm.controls["AC_MATUAMT"].errors.maxlength));
} }
const _c1 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
const _c2 = function (a0) { return { "form-submitted": a0 }; };
function TermDepositsMasterComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Member Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Member Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focusout", function TermDepositsMasterComponent_ng_template_75_Template_input_focusout_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](100); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r53.disabledate(_r31.value); })("keypress", function TermDepositsMasterComponent_ng_template_75_Template_input_keypress_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Open Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, TermDepositsMasterComponent_ng_template_75_div_24_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function TermDepositsMasterComponent_ng_template_75_Template_input_keypress_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); return $event.charCode >= 65 && $event.charCode < 90 || $event.charCode >= 97 && $event.charCode < 122 || $event.charCode <= 32 || $event.charCode == 46 || $event.charCode == 45 || $event.charCode == 47 || $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Manual Reference Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, TermDepositsMasterComponent_ng_template_75_div_31_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Cast");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Birth Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Occupation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "ng-select", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_75_Template_ng_select_ngModelChange_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r57.ngCategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, TermDepositsMasterComponent_ng_template_75_ng_option_55_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, TermDepositsMasterComponent_ng_template_75_div_60_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "ng-select", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_75_Template_ng_select_ngModelChange_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r58.ngOperation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, TermDepositsMasterComponent_ng_template_75_ng_option_65_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, TermDepositsMasterComponent_ng_template_75_div_70_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "ng-select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_75_Template_ng_select_ngModelChange_75_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r59.ngIntCategory = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, TermDepositsMasterComponent_ng_template_75_ng_option_76_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "Interest Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, TermDepositsMasterComponent_ng_template_75_div_81_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Receipt No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, TermDepositsMasterComponent_ng_template_75_div_88_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](92, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "PAN No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, TermDepositsMasterComponent_ng_template_75_div_95_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "input", 108, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("bsValueChange", function TermDepositsMasterComponent_ng_template_75_Template_input_bsValueChange_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r60.getMaturityDate(); })("keypress", function TermDepositsMasterComponent_ng_template_75_Template_input_keypress_99_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](101, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "As On Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "Period:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_75_Template_input_ngModelChange_111_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r62.setMaturityDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "Months");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](116, TermDepositsMasterComponent_ng_template_75_div_116_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_75_Template_input_ngModelChange_120_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r63.setMaturityDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](123, TermDepositsMasterComponent_ng_template_75_div_123_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "input", 115, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focusout", function TermDepositsMasterComponent_ng_template_75_Template_input_focusout_127_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r64.CheckmonthDays(); })("bsValueChange", function TermDepositsMasterComponent_ng_template_75_Template_input_bsValueChange_127_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r65.monthDays(); })("keypress", function TermDepositsMasterComponent_ng_template_75_Template_input_keypress_127_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](129, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "Maturity Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_75_Template_input_ngModelChange_135_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r67.setMaturityDate(); })("focusout", function TermDepositsMasterComponent_ng_template_75_Template_input_focusout_135_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r68.checkAmount(); })("keypress", function TermDepositsMasterComponent_ng_template_75_Template_input_keypress_135_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Deposit Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](140, TermDepositsMasterComponent_ng_template_75_div_140_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function TermDepositsMasterComponent_ng_template_75_Template_input_keypress_145_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); return $event.charCode >= 48 && $event.charCode < 58; })("ngModelChange", function TermDepositsMasterComponent_ng_template_75_Template_input_ngModelChange_145_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r71.setMaturityDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "label", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "Interest Rate%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](150, TermDepositsMasterComponent_ng_template_75_div_150_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function TermDepositsMasterComponent_ng_template_75_Template_input_keypress_154_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "label", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156, "Maturity Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](157, TermDepositsMasterComponent_ng_template_75_div_157_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](161, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, " Discounted Interest Applicable? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](167, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "label", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "Recovery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_75_Template_button_click_171_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r73.switchNgBTab("addressTab"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](172, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](45, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](46, _c2, ctx_r8.formSubmitted))("maxDate", ctx_r8.maxDate)("bsValue", ctx_r8.bsValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_OPDATE"].invalid && (ctx_r8.angForm.controls["AC_OPDATE"].dirty || ctx_r8.angForm.controls["AC_OPDATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["REF_ACNO"].invalid && (ctx_r8.angForm.controls["REF_ACNO"].dirty || ctx_r8.angForm.controls["REF_ACNO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r8.ngCategory)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](48, _c2, ctx_r8.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r8.categoryMasterdropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_CATG"].invalid && (ctx_r8.angForm.controls["AC_CATG"].dirty || ctx_r8.angForm.controls["AC_CATG"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r8.ngOperation)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](50, _c2, ctx_r8.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r8.OperationMasterDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_OPR_CODE"].invalid && (ctx_r8.angForm.controls["AC_OPR_CODE"].dirty || ctx_r8.angForm.controls["AC_OPR_CODE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r8.ngIntCategory)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](52, _c2, ctx_r8.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r8.IntrestCategoryMasterDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_INTCATA"].invalid && (ctx_r8.angForm.controls["AC_INTCATA"].dirty || ctx_r8.angForm.controls["AC_INTCATA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_REF_RECEIPTNO"].invalid && (ctx_r8.angForm.controls["AC_REF_RECEIPTNO"].dirty || ctx_r8.angForm.controls["AC_REF_RECEIPTNO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_PANNO"].invalid && (ctx_r8.angForm.controls["AC_PANNO"].dirty || ctx_r8.angForm.controls["AC_PANNO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](101, 39, ctx_r8.datemax, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](54, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](55, _c2, ctx_r8.formSubmitted))("maxDate", ctx_r8.maxDate)("bsValue", ctx_r8.bsValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_MONTHS"].invalid && (ctx_r8.angForm.controls["AC_MONTHS"].dirty || ctx_r8.angForm.controls["AC_MONTHS"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_DAYS"].invalid && (ctx_r8.angForm.controls["AC_DAYS"].dirty || ctx_r8.angForm.controls["AC_DAYS"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](129, 42, ctx_r8.datemax, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](57, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](58, _c2, ctx_r8.formSubmitted))("minDate", ctx_r8.minDate)("bsValue", ctx_r8.bsValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r8.AC_SCHMAMT != null ? ctx_r8.AC_SCHMAMT.toFixed(2) : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](60, _c2, ctx_r8.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_SCHMAMT"].invalid && (ctx_r8.angForm.controls["AC_SCHMAMT"].dirty || ctx_r8.angForm.controls["AC_SCHMAMT"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](62, _c2, ctx_r8.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_INTRATE"].invalid && (ctx_r8.angForm.controls["AC_INTRATE"].dirty || ctx_r8.angForm.controls["AC_INTRATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_MATUAMT"].invalid && (ctx_r8.angForm.controls["AC_MATUAMT"].dirty || ctx_r8.angForm.controls["AC_MATUAMT"].touched));
} }
function TermDepositsMasterComponent_ng_template_77_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_77_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_77_div_14_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r74.angForm.controls["AC_HONO"].errors == null ? null : ctx_r74.angForm.controls["AC_HONO"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_77_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_77_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_77_div_21_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r75.angForm.controls["AC_WARD"].errors == null ? null : ctx_r75.angForm.controls["AC_WARD"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_77_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_77_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_77_div_28_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r76.angForm.controls["AC_GALLI"].errors == null ? null : ctx_r76.angForm.controls["AC_GALLI"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_77_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_77_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_77_div_35_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r77.angForm.controls["AC_AREA"].errors == null ? null : ctx_r77.angForm.controls["AC_AREA"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_77_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_77_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_77_div_42_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r78.angForm.controls["AC_ADDR"].errors == null ? null : ctx_r78.angForm.controls["AC_ADDR"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_77_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_77_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_77_div_56_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r79.angForm.controls["AC_PIN"].errors == null ? null : ctx_r79.angForm.controls["AC_PIN"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_77_ng_container_86_div_8_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r87.angForm.controls["AC_THONO"].errors == null ? null : ctx_r87.angForm.controls["AC_THONO"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_77_ng_container_86_div_15_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r88.angForm.controls["AC_TWARD"].errors == null ? null : ctx_r88.angForm.controls["AC_TWARD"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_77_ng_container_86_div_22_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r89.angForm.controls["AC_TGALLI"].errors == null ? null : ctx_r89.angForm.controls["AC_TGALLI"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_77_ng_container_86_div_29_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r90.angForm.controls["AC_TAREA"].errors == null ? null : ctx_r90.angForm.controls["AC_TAREA"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_77_ng_container_86_div_36_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r91.angForm.controls["AC_TADDR"].errors == null ? null : ctx_r91.angForm.controls["AC_TADDR"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_ng_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", values_r99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", values_r99.CITY_NAME, "");
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_77_ng_container_86_div_51_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r93.angForm.controls["AC_TPIN"].errors == null ? null : ctx_r93.angForm.controls["AC_TPIN"].errors.pattern) || (ctx_r93.angForm.controls["AC_TPIN"].errors == null ? null : ctx_r93.angForm.controls["AC_TPIN"].errors.minlength) || (ctx_r93.angForm.controls["AC_TPIN"].errors == null ? null : ctx_r93.angForm.controls["AC_TPIN"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_77_ng_container_86_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TermDepositsMasterComponent_ng_template_77_ng_container_86_div_8_Template, 2, 1, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TermDepositsMasterComponent_ng_template_77_ng_container_86_div_15_Template, 2, 1, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, TermDepositsMasterComponent_ng_template_77_ng_container_86_div_22_Template, 2, 1, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, TermDepositsMasterComponent_ng_template_77_ng_container_86_div_29_Template, 2, 1, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, TermDepositsMasterComponent_ng_template_77_ng_container_86_div_36_Template, 2, 1, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ng-select", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_77_ng_container_86_Template_ng_select_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r101.ngCity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, TermDepositsMasterComponent_ng_template_77_ng_container_86_ng_option_42_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "label", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function TermDepositsMasterComponent_ng_template_77_ng_container_86_Template_input_keypress_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r102); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "label", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, TermDepositsMasterComponent_ng_template_77_ng_container_86_div_51_Template, 2, 1, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r80.angForm.controls["AC_THONO"].invalid && (ctx_r80.angForm.controls["AC_THONO"].dirty || ctx_r80.angForm.controls["AC_THONO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r80.angForm.controls["AC_TWARD"].invalid && (ctx_r80.angForm.controls["AC_TWARD"].dirty || ctx_r80.angForm.controls["AC_TWARD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r80.angForm.controls["AC_TGALLI"].invalid && (ctx_r80.angForm.controls["AC_TGALLI"].dirty || ctx_r80.angForm.controls["AC_TGALLI"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r80.angForm.controls["AC_TAREA"].invalid && (ctx_r80.angForm.controls["AC_TAREA"].dirty || ctx_r80.angForm.controls["AC_TAREA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r80.angForm.controls["AC_TADDR"].invalid && (ctx_r80.angForm.controls["AC_TADDR"].dirty || ctx_r80.angForm.controls["AC_TADDR"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r80.ngCity)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c2, ctx_r80.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r80.cityMasterServiceDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r80.angForm.controls["AC_TPIN"].invalid && (ctx_r80.angForm.controls["AC_TPIN"].dirty || ctx_r80.angForm.controls["AC_TPIN"].touched));
} }
function TermDepositsMasterComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h6", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " --------- Permanent Address --------- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TermDepositsMasterComponent_ng_template_77_div_14_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, TermDepositsMasterComponent_ng_template_77_div_21_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, TermDepositsMasterComponent_ng_template_77_div_28_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, TermDepositsMasterComponent_ng_template_77_div_35_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "label", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, TermDepositsMasterComponent_ng_template_77_div_42_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "label", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, TermDepositsMasterComponent_ng_template_77_div_56_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Residential Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "label", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "h6", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " --------- Temporory Address --------- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_77_Template_input_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r104.tempAsPermanent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "label", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Is Temporory Address same as Permanent Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, TermDepositsMasterComponent_ng_template_77_ng_container_86_Template, 52, 11, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_77_Template_button_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r105); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r106.switchNgBTab("introducer"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_HONO"].invalid && (ctx_r9.angForm.controls["AC_HONO"].dirty || ctx_r9.angForm.controls["AC_HONO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_WARD"].invalid && (ctx_r9.angForm.controls["AC_WARD"].dirty || ctx_r9.angForm.controls["AC_WARD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_GALLI"].invalid && (ctx_r9.angForm.controls["AC_GALLI"].dirty || ctx_r9.angForm.controls["AC_GALLI"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_AREA"].invalid && (ctx_r9.angForm.controls["AC_AREA"].dirty || ctx_r9.angForm.controls["AC_AREA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_ADDR"].invalid && (ctx_r9.angForm.controls["AC_ADDR"].dirty || ctx_r9.angForm.controls["AC_ADDR"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_PIN"].invalid && (ctx_r9.angForm.controls["AC_PIN"].dirty || ctx_r9.angForm.controls["AC_PIN"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r9.tempAddress);
} }
function TermDepositsMasterComponent_ng_template_79_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_79_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_79_div_22_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r107.angForm.controls["AC_GRDNAME"].errors == null ? null : ctx_r107.angForm.controls["AC_GRDNAME"].errors.pattern) || (ctx_r107.angForm.controls["AC_GRDNAME"].errors == null ? null : ctx_r107.angForm.controls["AC_GRDNAME"].errors.required) || (ctx_r107.angForm.controls["AC_GRDNAME"].errors == null ? null : ctx_r107.angForm.controls["AC_GRDNAME"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_79_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_79_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_79_div_29_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r108.angForm.controls["AC_GRDRELE"].errors == null ? null : ctx_r108.angForm.controls["AC_GRDRELE"].errors.pattern) || (ctx_r108.angForm.controls["AC_GRDRELE"].errors == null ? null : ctx_r108.angForm.controls["AC_GRDRELE"].errors.required) || (ctx_r108.angForm.controls["AC_GRDRELE"].errors == null ? null : ctx_r108.angForm.controls["AC_GRDRELE"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_79_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_79_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_79_div_36_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r109.angForm.controls["SIGNATURE_AUTHORITY"].errors == null ? null : ctx_r109.angForm.controls["SIGNATURE_AUTHORITY"].errors.pattern) || (ctx_r109.angForm.controls["SIGNATURE_AUTHORITY"].errors == null ? null : ctx_r109.angForm.controls["SIGNATURE_AUTHORITY"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_79_ng_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", values_r116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", values_r116.label, "");
} }
function TermDepositsMasterComponent_ng_template_79_ng_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", values_r117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", values_r117.label, "");
} }
function TermDepositsMasterComponent_ng_template_79_ng_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", values_r118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", values_r118.label, " ", values_r118.name, "");
} }
function TermDepositsMasterComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Minor Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focusout", function TermDepositsMasterComponent_ng_template_79_Template_input_focusout_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r119.disabledate(ctx_r119.date.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Birth Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "input", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function TermDepositsMasterComponent_ng_template_79_Template_input_keypress_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122 || $event.charCode <= 32 || $event.charCode == 46 || $event.charCode == 45 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Guardian Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, TermDepositsMasterComponent_ng_template_79_div_22_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function TermDepositsMasterComponent_ng_template_79_Template_input_keypress_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122 || $event.charCode <= 32 || $event.charCode == 46 || $event.charCode == 45 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Relation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, TermDepositsMasterComponent_ng_template_79_div_29_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function TermDepositsMasterComponent_ng_template_79_Template_input_keypress_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122 || $event.charCode <= 32 || $event.charCode == 46 || $event.charCode == 45 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Signature Authority");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, TermDepositsMasterComponent_ng_template_79_div_36_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "b", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "INTRODUCER");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ng-select", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_79_Template_ng_select_ngModelChange_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r124.code = $event; })("change", function TermDepositsMasterComponent_ng_template_79_Template_ng_select_change_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r125.getBranch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, TermDepositsMasterComponent_ng_template_79_ng_option_47_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "label", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "ng-select", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_79_Template_ng_select_ngModelChange_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r126.acno = $event; })("change", function TermDepositsMasterComponent_ng_template_79_Template_ng_select_change_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r127.getIntro($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, TermDepositsMasterComponent_ng_template_79_ng_option_54_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "label", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Account Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "ng-select", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_79_Template_ng_select_ngModelChange_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r128.ngIntroducer = $event; })("focus", function TermDepositsMasterComponent_ng_template_79_Template_ng_select_focus_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r129.getIntroducer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, TermDepositsMasterComponent_ng_template_79_ng_option_61_Template, 2, 3, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "label", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_79_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r130.switchNgBTab("nominee"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r10.MINOR == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r10.introducerReq === true ? "formSubmitted" : "")("required", ctx_r10.introducerReq);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_GRDNAME"].invalid && (ctx_r10.angForm.controls["AC_GRDNAME"].dirty || ctx_r10.angForm.controls["AC_GRDNAME"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r10.introducerReq === true ? "formSubmitted" : "")("required", ctx_r10.introducerReq);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_GRDRELE"].invalid && (ctx_r10.angForm.controls["AC_GRDRELE"].dirty || ctx_r10.angForm.controls["AC_GRDRELE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r10.introducerReq === true ? "formSubmitted" : "")("required", ctx_r10.introducerReq);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["SIGNATURE_AUTHORITY"].invalid && (ctx_r10.angForm.controls["SIGNATURE_AUTHORITY"].dirty || ctx_r10.angForm.controls["SIGNATURE_AUTHORITY"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.code)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c2, ctx_r10.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r10.OwnbranchMasterDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.acno)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c2, ctx_r10.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r10.SchemeCodeDropdownDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.ngIntroducer)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](24, _c2, ctx_r10.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r10.introducerACNo);
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_div_13_div_11_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r140.angForm.controls["AC_NNAME"].errors == null ? null : ctx_r140.angForm.controls["AC_NNAME"].errors.pattern) || (ctx_r140.angForm.controls["AC_NNAME"].errors == null ? null : ctx_r140.angForm.controls["AC_NNAME"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_div_13_div_20_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r141.angForm.controls["AC_NRELA"].errors == null ? null : ctx_r141.angForm.controls["AC_NRELA"].errors.pattern) || (ctx_r141.angForm.controls["AC_NRELA"].errors == null ? null : ctx_r141.angForm.controls["AC_NRELA"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This fiels is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_div_13_div_31_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r143.angForm.controls["AC_NDATE"].errors == null ? null : ctx_r143.angForm.controls["AC_NDATE"].errors.required);
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This fiels is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_div_13_div_38_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r144.angForm.controls["AGE"].errors == null ? null : ctx_r144.angForm.controls["AGE"].errors.pattern) || (ctx_r144.angForm.controls["AGE"].errors == null ? null : ctx_r144.angForm.controls["AGE"].errors.min) || (ctx_r144.angForm.controls["AGE"].errors == null ? null : ctx_r144.angForm.controls["AGE"].errors.max));
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_div_13_div_45_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r145.angForm.controls["AC_NHONO"].errors == null ? null : ctx_r145.angForm.controls["AC_NHONO"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_div_13_div_52_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r146.angForm.controls["AC_NWARD"].errors == null ? null : ctx_r146.angForm.controls["AC_NWARD"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_div_13_div_60_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r147.angForm.controls["AC_NGALLI"].errors == null ? null : ctx_r147.angForm.controls["AC_NGALLI"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_67_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_div_13_div_67_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r148.angForm.controls["AC_NAREA"].errors == null ? null : ctx_r148.angForm.controls["AC_NAREA"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_74_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_div_13_div_74_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r149.angForm.controls["AC_NADDR"].errors == null ? null : ctx_r149.angForm.controls["AC_NADDR"].errors.pattern);
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_89_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_13_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_div_13_div_89_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r150.angForm.controls["AC_NPIN"].errors == null ? null : ctx_r150.angForm.controls["AC_NPIN"].errors.pattern) || (ctx_r150.angForm.controls["AC_NPIN"].errors == null ? null : ctx_r150.angForm.controls["AC_NPIN"].errors.minlength) || (ctx_r150.angForm.controls["AC_NPIN"].errors == null ? null : ctx_r150.angForm.controls["AC_NPIN"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_81_div_13_button_91_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_div_13_button_91_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r164); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r163.addNominee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Add Nominee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_13_button_92_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_div_13_button_92_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r166); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r165.updateNominee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Update Nominee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function TermDepositsMasterComponent_ng_template_81_div_13_Template_input_keypress_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r168); return $event.charCode >= 65 && $event.charCode < 90 || $event.charCode >= 97 && $event.charCode < 122 || $event.charCode <= 32; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, TermDepositsMasterComponent_ng_template_81_div_13_div_11_Template, 2, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function TermDepositsMasterComponent_ng_template_81_div_13_Template_input_keypress_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r168); return $event.charCode >= 65 && $event.charCode < 90 || $event.charCode >= 97 && $event.charCode < 122 || $event.charCode <= 32; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Relation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, TermDepositsMasterComponent_ng_template_81_div_13_div_20_Template, 2, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 203, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_81_div_13_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r168); const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r170.ngnomineedate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Nomination Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, TermDepositsMasterComponent_ng_template_81_div_13_div_31_Template, 2, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focusout", function TermDepositsMasterComponent_ng_template_81_div_13_Template_input_focusout_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r168); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r171.age(); })("keypress", function TermDepositsMasterComponent_ng_template_81_div_13_Template_input_keypress_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r168); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "label", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, TermDepositsMasterComponent_ng_template_81_div_13_div_38_Template, 2, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "label", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, TermDepositsMasterComponent_ng_template_81_div_13_div_45_Template, 2, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "input", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "label", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, TermDepositsMasterComponent_ng_template_81_div_13_div_52_Template, 2, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "label", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, TermDepositsMasterComponent_ng_template_81_div_13_div_60_Template, 2, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "input", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "label", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, TermDepositsMasterComponent_ng_template_81_div_13_div_67_Template, 2, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "label", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, TermDepositsMasterComponent_ng_template_81_div_13_div_74_Template, 2, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "ng-select", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_81_div_13_Template_ng_select_ngModelChange_78_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r168); const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r173.ngNcity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "input", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function TermDepositsMasterComponent_ng_template_81_div_13_Template_input_keypress_86_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r168); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "label", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](89, TermDepositsMasterComponent_ng_template_81_div_13_div_89_Template, 2, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, TermDepositsMasterComponent_ng_template_81_div_13_button_91_Template, 2, 0, "button", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, TermDepositsMasterComponent_ng_template_81_div_13_button_92_Template, 2, 0, "button", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c2, ctx_r131.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r131.angForm.controls["AC_NNAME"].invalid && (ctx_r131.angForm.controls["AC_NNAME"].dirty || ctx_r131.angForm.controls["AC_NNAME"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](24, _c2, ctx_r131.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r131.angForm.controls["AC_NRELA"].invalid && (ctx_r131.angForm.controls["AC_NRELA"].dirty || ctx_r131.angForm.controls["AC_NRELA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](26, 19, ctx_r131.datemax, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r131.ngnomineedate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](26, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r131.angForm.controls["AC_NDATE"].invalid && (ctx_r131.angForm.controls["AC_NDATE"].dirty || ctx_r131.angForm.controls["AC_NDATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r131.angForm.controls["AGE"].invalid && (ctx_r131.angForm.controls["AGE"].dirty || ctx_r131.angForm.controls["AGE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r131.angForm.controls["AC_NHONO"].invalid && (ctx_r131.angForm.controls["AC_NHONO"].dirty || ctx_r131.angForm.controls["AC_NHONO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r131.angForm.controls["AC_NWARD"].invalid && (ctx_r131.angForm.controls["AC_NWARD"].dirty || ctx_r131.angForm.controls["AC_NWARD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r131.angForm.controls["AC_NGALLI"].invalid && (ctx_r131.angForm.controls["AC_NGALLI"].dirty || ctx_r131.angForm.controls["AC_NGALLI"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r131.angForm.controls["AC_NAREA"].invalid && (ctx_r131.angForm.controls["AC_NAREA"].dirty || ctx_r131.angForm.controls["AC_NAREA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r131.angForm.controls["AC_NADDR"].invalid && (ctx_r131.angForm.controls["AC_NADDR"].dirty || ctx_r131.angForm.controls["AC_NADDR"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r131.cityMasterServiceDropdown)("ngModel", ctx_r131.ngNcity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r131.angForm.controls["AC_NPIN"].invalid && (ctx_r131.angForm.controls["AC_NPIN"].dirty || ctx_r131.angForm.controls["AC_NPIN"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r131.nomineeShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r131.nomineeUpdateShow);
} }
function TermDepositsMasterComponent_ng_template_81_tbody_43_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_tbody_43_tr_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r179); const indexOfelement_r177 = ctx.index; const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r178.editNominee(indexOfelement_r177); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_tbody_43_tr_1_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r179); const indexOfelement_r177 = ctx.index; const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r180.delNominee(indexOfelement_r177); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "td", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r176 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r176.AC_NNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r176.AC_NRELA);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r176.AGE === "" || data_r176.AGE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r176.AGE === "" || data_r176.AGE == null ? "-" : data_r176.AGE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r176.AC_NDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r176.AC_NDATE === "" ? "-" : data_r176.AC_NDATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r176.AC_NHONO === "" || data_r176.AC_NHONO == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r176.AC_NHONO === "" || data_r176.AC_NHONO == null ? "-" : data_r176.AC_NHONO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r176.AC_NWARD === "" || data_r176.AC_NWARD == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r176.AC_NWARD === "" || data_r176.AC_NWARD == null ? "-" : data_r176.AC_NWARD, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r176.AC_NADDR === "" || data_r176.AC_NADDR == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r176.AC_NADDR === "" || data_r176.AC_NADDR == null ? "-" : data_r176.AC_NADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r176.AC_NGALLI === "" || data_r176.AC_NGALLI == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r176.AC_NGALLI === "" || data_r176.AC_NGALLI == null ? "-" : data_r176.AC_NGALLI, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r176.AC_NAREA === "" || data_r176.AC_NAREA == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r176.AC_NAREA === "" || data_r176.AC_NAREA == null ? "-" : data_r176.AC_NAREA, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r176.AC_NCTCODE === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r176.AC_NCTCODE === "" ? "-" : data_r176.AC_CITYNAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r176.AC_NPIN === "" || data_r176.AC_NPIN == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r176.AC_NPIN === "" || data_r176.AC_NPIN == null ? "-" : data_r176.AC_NPIN, " ");
} }
function TermDepositsMasterComponent_ng_template_81_tbody_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_tbody_43_tr_1_Template, 29, 20, "tr", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r132.multiNominee);
} }
function TermDepositsMasterComponent_ng_template_81_tbody_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_55_ng_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r184 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", values_r184);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", values_r184.label, "");
} }
function TermDepositsMasterComponent_ng_template_81_div_55_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_div_55_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r186); const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r185.addJointAcccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Add Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_55_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_div_55_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r188); const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r187.updateJointAcccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Update Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ng-select", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_ng_template_81_div_55_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r190); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r189.jointID = $event; })("change", function TermDepositsMasterComponent_ng_template_81_div_55_Template_ng_select_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r190); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r191.getJointCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TermDepositsMasterComponent_ng_template_81_div_55_ng_option_6_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Customer Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, TermDepositsMasterComponent_ng_template_81_div_55_button_25_Template, 2, 0, "button", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, TermDepositsMasterComponent_ng_template_81_div_55_button_26_Template, 2, 0, "button", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r134.jointID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c2, ctx_r134.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r134.joint_Cust_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r134.jointShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r134.jointUpdateShow);
} }
function TermDepositsMasterComponent_ng_template_81_tbody_69_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_tbody_69_tr_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r196); const indexOfelement_r194 = ctx.index; const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r195.editJointAc(indexOfelement_r194); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_tbody_69_tr_1_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r196); const indexOfelement_r194 = ctx.index; const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r197.delJointAc(indexOfelement_r194); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r193 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r193.JOINT_AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r193.JOINT_AC_CUSTID === "" ? "-" : data_r193.JOINT_AC_CUSTID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r193.JOINT_ACNAME === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r193.JOINT_ACNAME === "" ? "-" : data_r193.JOINT_ACNAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r193.OPERATOR === "" ? "td_left" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r193.OPERATOR === "" ? "-" : data_r193.OPERATOR, " ");
} }
function TermDepositsMasterComponent_ng_template_81_tbody_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_tbody_69_tr_1_Template, 13, 6, "tr", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r135.multiJointAC);
} }
function TermDepositsMasterComponent_ng_template_81_tbody_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_81_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required and Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_81_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_div_81_div_10_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r198.angForm.controls["ATTERONEY_NAME"].errors == null ? null : ctx_r198.angForm.controls["ATTERONEY_NAME"].errors.pattern) || (ctx_r198.angForm.controls["ATTERONEY_NAME"].errors == null ? null : ctx_r198.angForm.controls["ATTERONEY_NAME"].errors.required) || (ctx_r198.angForm.controls["ATTERONEY_NAME"].errors == null ? null : ctx_r198.angForm.controls["ATTERONEY_NAME"].errors.maxlength));
} }
function TermDepositsMasterComponent_ng_template_81_div_81_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_81_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_div_81_div_21_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r200.angForm.controls["DATE_APPOINTED"].errors == null ? null : ctx_r200.angForm.controls["DATE_APPOINTED"].errors.required);
} }
function TermDepositsMasterComponent_ng_template_81_div_81_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_div_81_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r207); const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r206.addAttorney(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Add Attorney ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_81_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_div_81_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r209); const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r208.updateAttorney(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_81_div_81_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function TermDepositsMasterComponent_ng_template_81_div_81_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r211); return $event.charCode >= 65 && $event.charCode < 90 || $event.charCode >= 97 && $event.charCode < 122 || $event.charCode <= 32; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, TermDepositsMasterComponent_ng_template_81_div_81_div_10_Template, 2, 1, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 244, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focusout", function TermDepositsMasterComponent_ng_template_81_div_81_Template_input_focusout_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r211); const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15); const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r212.disabledate(_r199.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Appointed on");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, TermDepositsMasterComponent_ng_template_81_div_81_div_21_Template, 2, 1, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "input", 246, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focusout", function TermDepositsMasterComponent_ng_template_81_div_81_Template_input_focusout_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r211); const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15); const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r213.disabledate(_r199.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "label", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, TermDepositsMasterComponent_ng_template_81_div_81_button_33_Template, 2, 0, "button", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, TermDepositsMasterComponent_ng_template_81_div_81_button_34_Template, 2, 0, "button", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r137.angForm.controls["ATTERONEY_NAME"].invalid && (ctx_r137.angForm.controls["ATTERONEY_NAME"].dirty || ctx_r137.angForm.controls["ATTERONEY_NAME"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 12, ctx_r137.datemax, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxDate", ctx_r137.maxDate)("maxDate", ctx_r137.maxDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r137.angForm.controls["DATE_APPOINTED"].invalid && (ctx_r137.angForm.controls["DATE_APPOINTED"].dirty || ctx_r137.angForm.controls["DATE_APPOINTED"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](27, 15, ctx_r137.datemax, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("minDate", ctx_r137.minDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c1))("bsValue", ctx_r137.bsValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r137.attorneyShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r137.attorneyUpdateShow);
} }
function TermDepositsMasterComponent_ng_template_81_tbody_95_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_tbody_95_tr_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r218); const indexOfelement_r216 = ctx.index; const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r217.editAttorney(indexOfelement_r216); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_tbody_95_tr_1_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r218); const indexOfelement_r216 = ctx.index; const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r219.delAttorney(indexOfelement_r216); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r215 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r215.ATTERONEY_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r215.ATTERONEY_NAME === "" ? "-" : data_r215.ATTERONEY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r215.DATE_APPOINTED === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r215.DATE_APPOINTED === "" ? "-" : data_r215.DATE_APPOINTED, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r215.DATE_EXPIRY === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r215.DATE_EXPIRY === "" ? "-" : data_r215.DATE_EXPIRY, " ");
} }
function TermDepositsMasterComponent_ng_template_81_tbody_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_81_tbody_95_tr_1_Template, 13, 6, "tr", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r138.multiAttorney);
} }
function TermDepositsMasterComponent_ng_template_81_tbody_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { isActive: a0 }; };
function TermDepositsMasterComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    const _r221 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_Template_input_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r221); const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r220.nominee($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "b", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "NOMINEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TermDepositsMasterComponent_ng_template_81_div_13_Template, 93, 27, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "table", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Relation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Nomination Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Pin code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, TermDepositsMasterComponent_ng_template_81_tbody_43_Template, 2, 1, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, TermDepositsMasterComponent_ng_template_81_tbody_44_Template, 4, 0, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_Template_input_click_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r221); const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r222.jointAccount($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "label", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "b", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "JOINT ACCOUNTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, TermDepositsMasterComponent_ng_template_81_div_55_Template, 27, 7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "table", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "td", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "td", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Customer ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "td", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, TermDepositsMasterComponent_ng_template_81_tbody_69_Template, 2, 1, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, TermDepositsMasterComponent_ng_template_81_tbody_70_Template, 4, 0, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_Template_input_click_75_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r221); const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r223.ispowerof($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "label", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "b", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "POWER OF ATTORNEY");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, TermDepositsMasterComponent_ng_template_81_div_81_Template, 35, 20, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "table", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "td", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "td", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Appointed on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "td", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Expiry Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, TermDepositsMasterComponent_ng_template_81_tbody_95_Template, 2, 1, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, TermDepositsMasterComponent_ng_template_81_tbody_96_Template, 4, 0, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_81_Template_button_click_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r221); const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r224.switchNgBTab("documents"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c3, ctx_r11.nomineeTrue));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.nomineeTrue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r11.multiNominee == null ? null : ctx_r11.multiNominee.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r11.multiNominee == null ? null : ctx_r11.multiNominee.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c3, ctx_r11.JointAccountsTrue));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.JointAccountsTrue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r11.multiJointAC == null ? null : ctx_r11.multiJointAC.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r11.multiJointAC == null ? null : ctx_r11.multiJointAC.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c3, ctx_r11.PowerofAttorneyTrue));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.PowerofAttorneyTrue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r11.multiAttorney == null ? null : ctx_r11.multiAttorney.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r11.multiAttorney == null ? null : ctx_r11.multiAttorney.length) == 0);
} }
function TermDepositsMasterComponent_ng_template_83_tbody_14_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_83_tbody_14_tr_1_Template_span_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r232); const data_r229 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); const _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17); const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); _r227.show(); return ctx_r231.viewImagePreview($event, ctx_r231.documentUrl + data_r229.PATH); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r229 = ctx.$implicit;
    const indexOfelement_r230 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](indexOfelement_r230 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r229.DocumentMaster.NAME);
} }
function TermDepositsMasterComponent_ng_template_83_tbody_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_ng_template_83_tbody_14_tr_1_Template, 8, 2, "tr", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r225.customerDoc);
} }
function TermDepositsMasterComponent_ng_template_83_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "table", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "View Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TermDepositsMasterComponent_ng_template_83_tbody_14_Template, 2, 1, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TermDepositsMasterComponent_ng_template_83_tbody_15_Template, 4, 0, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "app-modal-basic", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_83_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r234); const _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17); return _r227.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "img", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_83_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r234); const _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17); return _r227.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_83_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r234); const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r236.switchNgBTab("interestInstruction"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r12.customerDoc == null ? null : ctx_r12.customerDoc.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r12.customerDoc == null ? null : ctx_r12.customerDoc.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dialogClass", "modal-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r12.selectedImagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function TermDepositsMasterComponent_ng_template_85_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_85_button_24_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r244); const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r243.submit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_85_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_85_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r246); const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r245.addNewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_85_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_85_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r248); const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r247.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_85_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_85_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r250); const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r249.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_85_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_85_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r252); const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r251.Approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TermDepositsMasterComponent_ng_template_85_Template(rf, ctx) { if (rf & 1) {
    const _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Interest Instruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_85_Template_span_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r254); const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10); return _r237.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "app-modal-basic", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Interest Instruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_85_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r254); const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10); return _r237.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "app-interest-instruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_ng_template_85_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r254); const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10); return _r237.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, TermDepositsMasterComponent_ng_template_85_button_24_Template, 2, 0, "button", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, TermDepositsMasterComponent_ng_template_85_button_25_Template, 2, 0, "button", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, TermDepositsMasterComponent_ng_template_85_button_27_Template, 2, 0, "button", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, TermDepositsMasterComponent_ng_template_85_button_29_Template, 2, 0, "button", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, TermDepositsMasterComponent_ng_template_85_button_31_Template, 2, 0, "button", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dialogClass", "modal-xl");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.showButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.newbtnShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.updateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.rejectShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.approveShow);
} }
function TermDepositsMasterComponent_tbody_94_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_tbody_94_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r260); const data_r258 = ctx.$implicit; const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r259.editClickHandler(data_r258.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "td", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r258 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.AC_TYPE === "" || data_r258.AC_TYPE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.AC_TYPE === "" || data_r258.AC_TYPE == null ? "-" : data_r258.DPMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.BANKACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.BANKACNO === "" ? "-" : data_r258.BANKACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.AC_CUSTID === "" ? "-" : data_r258.AC_CUSTID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.AC_NAME === "" ? "-" : data_r258.AC_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", (data_r258.idmaster.custAddress[0] == null ? null : data_r258.idmaster.custAddress[0].AC_ADDR) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (data_r258.idmaster.custAddress[0] == null ? null : data_r258.idmaster.custAddress[0].AC_ADDR) === "" ? "-" : data_r258.idmaster.custAddress[0] == null ? null : data_r258.idmaster.custAddress[0].AC_ADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", (data_r258.idmaster.custAddress[0].city == null ? null : data_r258.idmaster.custAddress[0].city.CITY_NAME) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (data_r258.idmaster.custAddress[0].city == null ? null : data_r258.idmaster.custAddress[0].city.CITY_NAME) === "" ? "-" : data_r258.idmaster.custAddress[0].city == null ? null : data_r258.idmaster.custAddress[0].city.CITY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.REF_ACNO === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.REF_ACNO === "" ? "-" : data_r258.REF_ACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.AC_MBDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.AC_MBDATE === "" ? "-" : data_r258.AC_MBDATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.AC_OPDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.AC_OPDATE === "" ? "-" : data_r258.AC_OPDATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.AC_ASON_DATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.AC_ASON_DATE === "" ? "-" : data_r258.AC_ASON_DATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.AC_EXPDT === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.AC_EXPDT === "" ? "-" : data_r258.AC_EXPDT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.AC_REF_RECEIPTNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.AC_REF_RECEIPTNO === "" ? "-" : data_r258.AC_REF_RECEIPTNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.AC_SCHMAMT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.AC_SCHMAMT === "" ? "-" : data_r258.AC_SCHMAMT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.AC_MATUAMT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.AC_MATUAMT === "" ? "-" : data_r258.AC_MATUAMT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.AC_MINOR === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.AC_MINOR === "" ? "-" : data_r258.AC_MINOR === true ? "Yes" : "No", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r258.SIGNATURE_AUTHORITY === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r258.SIGNATURE_AUTHORITY === "" ? "-" : data_r258.SIGNATURE_AUTHORITY, " ");
} }
function TermDepositsMasterComponent_tbody_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TermDepositsMasterComponent_tbody_94_tr_1_Template, 35, 32, "tr", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r14.termDepositMaster);
} }
function TermDepositsMasterComponent_tbody_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class DataTableResponse {
}
class TermDepositsMasterComponent {
    constructor(TitleService, AccountcodeService, fb, customerID, customerIdService, TermDepositMasterService, systemParameter, categoryMasterService, IntrestCategoryMasterDropdownService, OperationMasterDropdownService, CastMasterService, cityMasterService, http, OwnbranchMasterService, SchemeCodeDropdownService, datePipe, schemeAccountNoService, _termDepositScheme, _InterestInstruction) {
        this.TitleService = TitleService;
        this.AccountcodeService = AccountcodeService;
        this.fb = fb;
        this.customerID = customerID;
        this.customerIdService = customerIdService;
        this.TermDepositMasterService = TermDepositMasterService;
        this.systemParameter = systemParameter;
        this.categoryMasterService = categoryMasterService;
        this.IntrestCategoryMasterDropdownService = IntrestCategoryMasterDropdownService;
        this.OperationMasterDropdownService = OperationMasterDropdownService;
        this.CastMasterService = CastMasterService;
        this.cityMasterService = cityMasterService;
        this.http = http;
        this.OwnbranchMasterService = OwnbranchMasterService;
        this.SchemeCodeDropdownService = SchemeCodeDropdownService;
        this.datePipe = datePipe;
        this.schemeAccountNoService = schemeAccountNoService;
        this._termDepositScheme = _termDepositScheme;
        this._InterestInstruction = _InterestInstruction;
        this.getUserData = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.formSubmitted = false;
        //api 
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].base_url;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtExportButtonOptions = {};
        //Scheme type variable
        this.schemeType = 'TD';
        this.isDisabled = true;
        this.selectedCharacter = '3';
        this.timeLeft = 5;
        this.dataSub = null;
        // Variables for hide/show add and update button
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.introducerReq = false;
        //variable to get ID to update
        this.updateID = 0;
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.counter = 1;
        this.rowData = [];
        this.showDialog = false;
        this.selectedOption = '3';
        // isDisabled = true;
        //temp address flag variable
        this.tempAddress = true;
        //nominee, joint ac and attorney variables 
        this.nomineeShowButton = true;
        this.nomineeUpdateShow = false;
        this.multiNominee = [];
        this.multiJointAC = [];
        this.multiAttorney = [];
        //display code according choice
        this.nomineeTrue = false;
        this.JointAccountsTrue = false;
        this.PowerofAttorneyTrue = false;
        this.jointShowButton = true;
        this.jointUpdateShow = false;
        this.attorneyShowButton = true;
        this.attorneyUpdateShow = false;
        //add required validation to attorney fields
        this.DATE_EXPIRY = false;
        this.DATE_APPOINTED = false;
        this.ATTERONEY_NAME = false;
        //variable for checkbox and radio button 
        this.isOperation = false;
        //url to display document
        this.documentUrl = this.url + '/';
        //array of document of customer
        this.customerDoc = [];
        this.selectedValue = null;
        this.id = null;
        this.ngCategory = null;
        this.ngOperation = null;
        this.ngIntCategory = null;
        this.ngCity = null;
        this.code = null;
        this.acno = null;
        this.ngIntroducer = null;
        this.ngNcity = null;
        this.jointID = null;
        this.AC_TYPE = false;
        this.DatatableHideShow = true;
        this.rejectShow = false;
        this.approveShow = false;
        this.visible = false;
        this.visibleAnimate = false;
        this.total = 0;
        if (this.childMessage != undefined) {
            this.editClickHandler(this.childMessage);
        }
        this.maxDate = new Date();
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate());
        this.maxDate.setDate(this.maxDate.getDate());
    }
    ngOnInit() {
        this.createForm();
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
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
                dataTableParameters['filterData'] = this.filterData;
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                this.page = dataTableParameters.start / dataTableParameters.length;
                this.http
                    .post(this.url + '/term-deposits-master', dataTableParameters).subscribe(resp => {
                    this.termDepositMaster = resp.data;
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
                    title: 'Action',
                },
                // {
                //   title: 'Scheme Type',
                //   data: 'AC_ACNOTYPE'
                // },
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Account No',
                    data: 'BANKACNO'
                },
                {
                    title: 'Customer ID',
                    data: 'AC_CUSTID'
                },
                {
                    title: 'Member Name',
                    data: 'AC_NAME'
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
                    title: 'Manual Reference Number',
                    data: 'REF_ACNO'
                },
                {
                    title: 'Birth Date',
                    data: 'AC_MBDATE'
                },
                {
                    title: 'Opening Date',
                    data: 'AC_OPDATE'
                },
                {
                    title: 'As On Date',
                    data: 'AC_ASON_DATE'
                },
                {
                    title: 'Maturity Date',
                    data: 'AC_EXPDT'
                },
                {
                    title: 'Receipt No.',
                    data: 'AC_REF_RECEIPTNO'
                },
                {
                    title: 'Deposit Amount',
                    data: 'AC_SCHMAMT'
                },
                {
                    title: 'Maturity Amount',
                    data: 'AC_MATUAMT'
                },
                {
                    title: 'Minor Details',
                    data: 'AC_MINOR'
                },
                {
                    title: 'Signature Authority',
                    data: 'SIGNATURE_AUTHORITY'
                },
            ],
            dom: 'Blrtip',
        };
        this.customerID.getCustomerIDMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.Cust_ID = data;
            this.joint_Cust_ID = data;
        });
        this.SchemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.SchemeCodeDropdownDropdown = data;
        });
        this.CastMasterService.getcastList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.CastMasterDropdown = data;
        });
        this.OwnbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.OwnbranchMasterDropdown = data;
        });
        this.cityMasterService.getcityList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.cityMasterServiceDropdown = data;
        });
        this.OperationMasterDropdownService.getOperationMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.OperationMasterDropdown = data;
        });
        this.categoryMasterService.getcategoryList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.categoryMasterdropdown = data;
        });
        this.IntrestCategoryMasterDropdownService.getIntrestCategoaryMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.IntrestCategoryMasterDropdown = data;
        });
        this.SchemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.scheme = data;
            this.selectedValue = this.scheme[0].value;
        });
    }
    createForm() {
        this.getSystemParaDate();
        this.angForm = this.fb.group({
            AC_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_ACNOTYPE: ['TD'],
            AC_NO: [''],
            AC_INTRATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_CUSTID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_TITLE: [''],
            AC_NAME: [''],
            AC_MEMBTYPE: [''],
            BANKACNO: [''],
            AC_MEMBNO: [''],
            AC_OPDATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            REF_ACNO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_CAST: ['',],
            AC_OCODE: ['',],
            AC_CATG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_OPR_CODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_INTCATA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_PANNO: ['',],
            AC_IS_RECOVERY: [false],
            AC_REF_RECEIPTNO: [''],
            AC_ASON_DATE: [],
            AC_MONTHS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_DAYS: [],
            AC_EXPDT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_SCHMAMT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_MATUAMT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            IS_DISCOUNTED_INT_RATE: [''],
            AC_BIRTH_DT: [''],
            AC_RENEW_DATE: [''],
            AC_HONO: ['',],
            AC_WARD: ['',],
            AC_GALLI: ['',],
            AC_AREA: ['',],
            AC_ADDR: [''],
            AC_CTCODE: [''],
            AC_TCTCODE: [''],
            AC_PIN: ['',],
            AC_EMAIL: [''],
            AC_MOBNO: [''],
            AC_PHNO: [''],
            AC_ADDFLAG: [true],
            AC_ADDTYPE: ['P'],
            AC_THONO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TWARD: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TGALLI: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TAREA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TADDR: [''],
            AC_TPIN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_PHONE_RES: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_PHONE_OFFICE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_MOBILENO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]],
            //minor and introducer
            AC_MINOR: ['', []],
            AC_MBDATE: ['', []],
            AC_GRDNAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_GRDRELE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_INTROBRANCH: ['', []],
            AC_INTROID: [''],
            AC_INTRACNO: [''],
            AC_INTRNAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            SIGNATURE_AUTHORITY: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            //nominee controls (NOMINEELINK table)
            AC_NNAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NRELA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NDATE: ['',],
            AGE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NHONO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NWARD: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NADDR: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NGALLI: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NAREA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NCTCODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_NPIN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            //joint ac
            JOINT_AC_CUSTID: ['',],
            JOINT_ACNAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            OPERATOR: [true],
            //attorney
            ATTERONEY_NAME: ['', []],
            DATE_APPOINTED: ['', []],
            DATE_EXPIRY: ['', []],
        });
    }
    //nominee, joint account and attorney selection display
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
    addNewCustomer(newCustomer) {
        this.customerID.getCustomerIDMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.Cust_ID = data;
            this.id = newCustomer;
            this.getCustomer(newCustomer);
        });
    }
    //function to toggle temp address field
    tempAsPermanent() {
        this.tempAddress = !this.tempAddress;
    }
    //calculate age for minor details
    ageCalculator(birthDate) {
        let showAge;
        if (birthDate) {
            const convertAge = new Date(birthDate);
            const timeDiff = Math.abs(Date.now() - convertAge.getTime());
            showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
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
    //set open date
    getSystemParaDate() {
        this.systemParameter.getFormData(1).subscribe(data => {
            this.tempopendate = data.CURRENT_DATE;
            this.openingDate = data.CURRENT_DATE;
            this.angForm.patchValue({
                AC_OPDATE: data.CURRENT_DATE,
                AC_ASON_DATE: data.CURRENT_DATE
            });
            if (data.ON_LINE === true) {
                this.angForm.controls['AC_OPDATE'].disable();
            }
            else {
                this.angForm.controls['AC_OPDATE'].enable();
            }
        });
        this.getMaturityDate();
    }
    //get maturity date
    getMaturityDate() {
        this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
            if (data.S_INTASON == true) {
                document.getElementById('AC_ASON_DATE').removeAttribute("disabled");
            }
            else {
                document.getElementById('AC_ASON_DATE').setAttribute("disabled", "true");
                let months = this.angForm.controls['AC_MONTHS'].value;
                let days = this.angForm.controls['AC_DAYS'].value;
                // var maturityDt = new Date(this.angForm.controls['AC_ASON_DATE'].value)
                // var year = maturityDt.getFullYear();
                // var month = new Date(maturityDt).getMonth();
                // var day = new Date(maturityDt).getDate();
                // var maturityMonth = month + Number(months)
                // var maturityDay = day + Number(days)
                // var date = new Date(year, maturityMonth, maturityDay);
                // var maturityDate = this.datePipe.transform(date, "DD/MM/YYYY")
                // var check = moment(n.entry.date_entered, 'YYYY/MM/DD');
                // var month = check.format('M');
                // var day = check.format('D');
                // var year = check.format('YYYY');
                var maturityDt = moment__WEBPACK_IMPORTED_MODULE_9__(this.angForm.controls['AC_ASON_DATE'].value, 'DD/MM/YYYY');
                var year = maturityDt.format('YYYY');
                var month = maturityDt.format('M');
                var day = maturityDt.format('D');
                var maturityMonth = Number(month) + Number(months);
                var maturityDay = Number(day) + Number(days);
                var date = new Date(Number(year), Number(maturityMonth), Number(maturityDay));
                var maturityDate = moment__WEBPACK_IMPORTED_MODULE_9__(date).format("DD/MM/YYYY");
                this.expiryDate = maturityDate;
                this.angForm.patchValue({
                    AC_EXPDT: maturityDate
                });
            }
            if (data.PERIOD_APPLICABLE == true) {
                document.getElementById('AC_MONTHS').removeAttribute("disabled");
                document.getElementById('AC_DAYS').removeAttribute("disabled");
            }
            else {
                document.getElementById('AC_MONTHS').setAttribute("disabled", "true");
                document.getElementById('AC_DAYS').setAttribute("disabled", "true");
            }
            if (data.RECEIPT_NO_INPUT == true) {
                document.getElementById('AC_REF_RECEIPTNO').removeAttribute("disabled");
            }
            else {
                document.getElementById('AC_REF_RECEIPTNO').setAttribute("disabled", "true");
            }
            // if (data.RECEIPT_TYPE != null) {
            //   this._InterestInstruction.getFormData(this.selectedValue).subscribe(data => {
            //     this.http.get<any>(
            //       this.url + '/td-receipt-type',
            //     ).subscribe(resp => {
            //       if (resp.length != 0) {
            //         resp.forEach(async (element) => {
            //           if (data.RECEIPT_TYPE == element.RECEIPT_TYPE) {
            //             this.angForm.patchValue({
            //               AC_REF_RECEIPTNO: element.LAST_RECEIPT_NO + 1
            //             })
            //           } else {
            //             this.angForm.patchValue({
            //               AC_REF_RECEIPTNO: 0
            //             })
            //           }
            //         })
            //       }
            //       else {
            //         this.angForm.patchValue({
            //           AC_REF_RECEIPTNO: 0
            //         })
            //       }
            //     })
            //   })
            // }
            if (data.INTEREST_RULE == "Compounding") {
                if (data.S_INTCALTP == "CalculationOnDays") {
                    if (data.S_INTCALC_METHOD == "SimpleInterest") {
                        this.simpleInterestCalculation();
                    }
                    else if (data.S_INTCALC_METHOD == "CompountInterest") {
                        this.installmentType = data.COMPOUND_INT_BASIS;
                        this.compoundInterestCalculation();
                    }
                    else {
                        this.angForm.patchValue({
                            AC_MATUAMT: 0
                        });
                    }
                }
            }
        });
    }
    simpleInterestCalculation() {
        var date1 = this.angForm.controls['AC_ASON_DATE'].value;
        var date2 = this.angForm.controls['AC_EXPDT'].value;
        // date1 = moment(date1).format('DD/MM/YYYY');
        // date2 = moment(date2).format('DD/MM/YYYY');
        var startDate = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY");
        var endDate = moment__WEBPACK_IMPORTED_MODULE_9__(date2, "DD/MM/YYYY");
        var result = endDate.diff(startDate, 'days');
        this.result = Math.round(Math.floor(this.angForm.controls['AC_SCHMAMT'].value) * (Math.floor(result)) * Math.floor(this.angForm.controls['AC_INTRATE'].value) / 36500 + Math.floor(this.angForm.controls['AC_SCHMAMT'].value));
        this.angForm.patchValue({
            AC_MATUAMT: this.result
        });
    }
    checkAmount() {
        const formVal = this.angForm.value;
        this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
            if (data.MAX_DEP_LMT != '' || data.MULTIPLE_OF_AMT != '') {
                if (this.angForm.controls['AC_SCHMAMT'].value > data.MAX_DEP_LMT) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deposit Amount Should Be Less Than " + data.MAX_DEP_LMT, "error");
                    this.angForm.controls['AC_SCHMAMT'].reset();
                }
                else if (((this.angForm.controls['AC_SCHMAMT'].value) % (data.MULTIPLE_OF_AMT)) != 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deposit Amount Should Be Multiple Of " + data.MULTIPLE_OF_AMT, "error");
                }
            }
            else {
                this.angForm.patchValue({
                    AC_MATUAMT: formVal.AC_MATUAMT
                });
            }
        });
    }
    CheckmonthDays() {
        this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
            if (data.UNIT_OF_PERIOD == "BOTH") {
                if (this.angForm.controls['AC_MONTHS'].value < data.MIN_MONTH && this.angForm.controls['AC_DAYS'].value < data.AC_DAYS) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + "and " + data.MIN_DAYS, "error");
                    this.angForm.controls['AC_MONTHS'].reset();
                    this.angForm.controls['MIN_DAYS'].reset();
                }
                if (this.angForm.controls['AC_DAYS'].value < data.MIN_DAYS) {
                    this.angForm.controls['AC_DAYS'].reset();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Days Must Be Geater Than " + data.MIN_DAYS, "error");
                }
            }
            else if (data.UNIT_OF_PERIOD == "DAYS") {
                if (this.angForm.controls['AC_DAYS'].value < data.MIN_DAYS) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Days Must Be Geater Than " + data.MIN_DAYS, "error");
                    this.angForm.controls['AC_DAYS'].reset();
                }
            }
            else if (data.UNIT_OF_PERIOD == "MONTHS") {
                if (this.angForm.controls['AC_MONTHS'].value < data.MIN_MONTH) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Month Must Be Geater Than " + data.MIN_MONTH, "error");
                    this.angForm.controls['AC_MONTHS'].reset();
                }
            }
            if (data.UNIT_OF_PERIOD == "Both" && data.IS_AUTO_PERIOD_CALCULATE == true) {
                if (this.angForm.controls['AC_MONTHS'].value < data.MIN_MONTH && this.angForm.controls['AC_DAYS'].value < data.MIN_DAYS) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + "and " + data.MIN_DAYS, "error");
                    this.angForm.controls['AC_MONTHS'].reset();
                    this.angForm.controls['AC_DAYS'].reset();
                }
            }
            if (data.MULTIPLE_OF_DAYS != null) {
                if (((this.angForm.controls['AC_DAYS'].value) % (data.MULTIPLE_OF_DAYS)) != 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Days Should Be Multiple Of " + data.MULTIPLE_OF_DAYS, "error");
                }
            }
            if (data.MULTIPLE_OF_MONTH != null) {
                if (((this.angForm.controls['AC_MONTHS'].value) % (data.MULTIPLE_OF_MONTH)) != 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Month Should Be Multiple Of " + data.MULTIPLE_OF_MONTH, "error");
                }
            }
        });
    }
    monthDays() {
        const formVal = this.angForm.value;
        this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
            var date1 = this.angForm.controls['AC_ASON_DATE'].value;
            var date2 = this.angForm.controls['AC_EXPDT'].value;
            // date1 = moment(date1).format('DD/MM/YYYY');
            // date2 = moment(date2).format('DD/MM/YYYY');
            var b = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY");
            var a = moment__WEBPACK_IMPORTED_MODULE_9__(date2, "DD/MM/YYYY");
            var months = a.diff(b, 'months');
            b.add(months, 'months');
            var days = a.diff(b, 'days');
            if (data.IS_AUTO_PERIOD_CALCULATE == true) {
                this.angForm.patchValue({
                    AC_MONTHS: months,
                    AC_DAYS: days,
                });
            }
            else {
                this.angForm.patchValue({
                    AC_MONTHS: '',
                    AC_DAYS: ''
                });
            }
        });
    }
    compoundInterestCalculation() {
        const formVal = this.angForm.value;
        var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 1;
        var date1 = this.angForm.controls['AC_ASON_DATE'].value;
        var date2 = this.angForm.controls['AC_EXPDT'].value;
        // date1 = moment(date1).format('DD/MM/YYYY');
        var startDate = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY");
        var endDate = moment__WEBPACK_IMPORTED_MODULE_9__(date2, "DD/MM/YYYY");
        var result = endDate.diff(startDate, 'days');
        var amount = this.angForm.controls['AC_SCHMAMT'].value;
        var maturityAmount = this.angForm.controls['AC_MATUAMT'].value;
        for (this.i = 1; this.i <= Quarters; this.i++) {
            let totalInterest;
            var sample = parseFloat(amount);
            var totalInt = (parseFloat(amount) * (this.angForm.controls['AC_INTRATE'].value) * Math.trunc((result) / (Quarters)) / 36500).toFixed(10);
            totalInterest = Number(totalInt);
            amount = (parseFloat(amount) + (totalInterest)).toFixed(10);
            totalInterest = 0;
        }
        maturityAmount = Math.round(parseFloat(amount) + (parseFloat(amount) * (this.angForm.controls['AC_INTRATE'].value) * ((result) - Math.trunc((result) / (Quarters)) * (Quarters))) / 36500);
        this.angForm.patchValue({
            AC_MATUAMT: maturityAmount
        });
    }
    //Interest Calculation Type		
    // Months and Days Base	
    // Start with Months + Days	
    monthProductBaseCompound() {
        var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 3;
        var date1 = this.angForm.controls['AC_ASON_DATE'].value;
        var date2 = this.angForm.controls['AC_EXPDT'].value;
        // date1 = moment(date1).format('DD/MM/YYYY');
        var b = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY");
        var a = moment__WEBPACK_IMPORTED_MODULE_9__(date2, "DD/MM/YYYY");
        var months = a.diff(b, 'months');
        b.add(months, 'months');
        var days = a.diff(b, 'days');
        var End = moment__WEBPACK_IMPORTED_MODULE_9__(date2, "DD/MM/YYYY").subtract(1, 'days');
        var EndDate = End.format("DD/MM/YYYY");
        var Start = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY").subtract(1, 'days');
        var StartDate = Start.format("DD/MM/YYYY");
        var CurrentDate = this.angForm.controls['AC_ASON_DATE'].value;
        var lngMonths = 0;
        var lngDays = 0;
        var VcumPeriod = 0;
        var IntAmount = 0;
        var vmonth = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY").add(1, 'days');
        var Mth = vmonth.format("DD/MM/YYYY");
        var vMth = new Date(Mth).getMonth();
        var PeriodEndDate = EndDate;
        VcumPeriod = 12;
        var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
        var year = oneDate.format('YYYY');
        PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "09", "30"]).format('YYYY/MM/DD');
        if (CurrentDate >= EndDate) {
        }
        else {
            this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
                if (data.S_INTCALC_METHOD == true) {
                    if (data.COMPOUND_INT_BASIS == "Yearly") {
                        PeriodEndDate = EndDate;
                        VcumPeriod = 12;
                    }
                    else if (data.COMPOUND_INT_BASIS == "HalfYearly") {
                        if (vMth >= 4 && vMth <= 9) {
                            var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                            var year = oneDate.format('YYYY');
                            PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "09", "30"]).format('YYYY/MM/DD');
                        }
                        else {
                            var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                            var year = oneDate.format('YYYY');
                            PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "03", "31"]).format('YYYY/MM/DD');
                            if (PeriodEndDate < CurrentDate) {
                                var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                                var year = oneDate.format('YYYY');
                                var PeriodEnd = moment__WEBPACK_IMPORTED_MODULE_9__([year, "03", "31"]).format('YYYY/MM/DD');
                                var Period = moment__WEBPACK_IMPORTED_MODULE_9__(PeriodEnd, 'YYYY/MM/DD').add(1, 'days');
                                PeriodEndDate = Period.toString();
                            }
                        }
                        VcumPeriod = 6;
                    }
                    else if (data.COMPOUND_INT_BASIS == "Quarterly") {
                        if (vMth >= 1 && vMth <= 3) {
                            var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                            var year = oneDate.format('YYYY');
                            PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "03", "31"]).format('YYYY/MM/DD');
                            if (PeriodEndDate < CurrentDate) {
                                var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                                var year = oneDate.format('YYYY');
                                var PeriodEnd = moment__WEBPACK_IMPORTED_MODULE_9__([year, "03", "31"]).format('YYYY/MM/DD');
                                var Period = moment__WEBPACK_IMPORTED_MODULE_9__(PeriodEnd, 'YYYY/MM/DD').add(1, 'days');
                                PeriodEndDate = Period.toString();
                            }
                        }
                        else if (vMth >= 4 && vMth <= 6) {
                            var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                            var year = oneDate.format('YYYY');
                            PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "06", "30"]).format('YYYY/MM/DD');
                        }
                        else if (vMth >= 7 && vMth <= 9) {
                            var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                            var year = oneDate.format('YYYY');
                            PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "09", "30"]).format('YYYY/MM/DD');
                        }
                        else {
                            var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                            var year = oneDate.format('YYYY');
                            PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "12", "30"]).format('YYYY/MM/DD');
                        }
                        VcumPeriod = 3;
                    }
                    else if (data.COMPOUND_INT_BASIS == "Monthly") {
                        var current = new Date(CurrentDate);
                        let year = current.getFullYear();
                        var month = new Date(CurrentDate).getMonth();
                        var day = new Date(current).getDate();
                        var exe_day = month + 1;
                        var nextDate = new Date(year, exe_day, day);
                        var lastDay = new Date(current.getFullYear(), nextDate.getMonth() + 1, 0);
                        var nextExeDate = this.datePipe.transform(lastDay, "YYYY/MM/DD");
                        VcumPeriod = 3;
                    }
                    else if (data.COMPOUND_INT_BASIS == "Monthly") {
                        if (data.COMPOUND_INT_DAYS <= 0) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('You Must Assign Valid Compound Basis Days For The Scheme Please Contact To Software Engineer');
                        }
                        VcumPeriod = 0;
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('You Must Assign Valid Compound Basis Days For The Scheme Please Contact To Software Engineer');
                    }
                    if (PeriodEndDate > EndDate) {
                        PeriodEndDate = EndDate;
                    }
                }
            });
        }
    }
    recurringSimpleInterest() {
        var noOfInstallment = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 1;
        var amount = this.angForm.controls['AC_SCHMAMT'].value;
        var rate = this.angForm.controls['AC_INTRATE'].value;
        var Interest = (noOfInstallment * noOfInstallment + noOfInstallment) / 2 * amount * rate / 1200;
        var maturity = (Number(amount) * Number(noOfInstallment)) + Number(Interest);
    }
    recurringCompoundInterest() {
        var date1 = this.angForm.controls['AC_ASON_DATE'].value;
        var date2 = this.angForm.controls['AC_EXPDT'].value;
        // date1 = moment(date1).format('DD/MM/YYYY');
        var b = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY");
        var a = moment__WEBPACK_IMPORTED_MODULE_9__(date2, "DD/MM/YYYY");
        var months = a.diff(b, 'months');
        b.add(months, 'months');
        var days = a.diff(b, 'days');
        var amount = this.angForm.controls['AC_SCHMAMT'].value;
        var rate = this.angForm.controls['AC_INTRATE'].value;
        var noOfInstallment = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 1;
        var totalInterest = 0;
        for (this.i = 1; this.i <= noOfInstallment; this.i++) {
            totalInterest = Math.round((totalInterest + (amount * (Math.pow((1 + (rate * 1) / (12 * 100)), (this.i / 1))) - amount)));
        }
        var maturity = (Number(amount) * Number(noOfInstallment)) + Number(totalInterest);
    }
    getBranch() {
        this.getIntroducer();
    }
    getIntro(event) {
        this.getschemename = event.name;
        this.getIntroducer();
    }
    getIntroducer() {
        this.obj = [this.acno, this.code];
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
    }
    //get introducer name according account no
    getIntroducerName(value) {
        this.angForm.patchValue({
            AC_INTRNAME: value.name
        });
    }
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
                AC_CUSTID: data.id
                // AC_MONTHS: '',
                // AC_DAYS: '',
            });
            this.id = data.id;
            this.ageCalculator(data.AC_BIRTH_DT);
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
            this.ageCalculator(data.AC_BIRTH_DT);
        });
        this.onCloseModal();
    }
    // Method to insert data into database through NestJS
    submit() {
        this.formSubmitted = true;
        if (this.angForm.valid) {
            let opdate;
            let temdate;
            let asondate;
            let maturitydate;
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
            let bankCode = Number(result.branch.syspara.BANK_CODE);
            let schecode;
            this.scheme.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (element.value == this.selectedValue) {
                    schecode = element.name;
                }
            }));
            if (this.tempopendate != this.openingDate) {
                temdate = (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == 'Invalid date') ? opdate = '' : opdate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_OPDATE).format('DD/MM/YYYY');
            }
            else {
                temdate = this.openingDate;
            }
            let asonDate;
            if (this.tempopendate != formVal.AC_ASON_DATE) {
                asondate = (formVal.AC_ASON_DATE == '' || formVal.AC_ASON_DATE == 'Invalid date') ? asonDate = '' : asonDate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_ASON_DATE).format('DD/MM/YYYY');
            }
            else {
                asondate = this.tempopendate;
            }
            let expiry;
            if (this.expiryDate != formVal.AC_EXPDT) {
                expiry = (formVal.AC_EXPDT == '' || formVal.AC_EXPDT == 'Invalid date') ? expiry = '' : asonDate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_EXPDT).format('DD/MM/YYYY');
            }
            else {
                expiry = this.expiryDate;
            }
            const dataToSend = {
                'branchCode': branchCode,
                'bankCode': bankCode,
                'schemeCode': schecode,
                'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
                'AC_TYPE': formVal.AC_TYPE,
                'AC_NO': formVal.AC_NO,
                'AC_INTRATE': formVal.AC_INTRATE,
                'AC_CUSTID': formVal.AC_CUSTID,
                'AC_NAME': formVal.AC_NAME,
                'REF_ACNO': formVal.REF_ACNO,
                'AC_OPDATE': temdate,
                'AC_CATG': formVal.AC_CATG,
                'AC_OPR_CODE': formVal.AC_OPR_CODE,
                'AC_INTCATA': formVal.AC_INTCATA,
                'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
                'AC_REF_RECEIPTNO': formVal.AC_REF_RECEIPTNO,
                'AC_ASON_DATE': asondate,
                // 'AC_ASON_DATE': (formVal.AC_ASON_DATE == '' || formVal.AC_ASON_DATE == 'Invalid date') ? asondate = '' : asondate = moment(formVal.AC_ASON_DATE).format('DD/MM/YYYY'),
                'AC_MONTHS': formVal.AC_MONTHS,
                'AC_EXPDT': expiry,
                // 'AC_EXPDT': (formVal.AC_EXPDT == '' || formVal.AC_EXPDT == 'Invalid date') ? maturitydate = '' : maturitydate = moment(formVal.AC_EXPDT).format('DD/MM/YYYY'),
                'AC_SCHMAMT': formVal.AC_SCHMAMT,
                'AC_MATUAMT': formVal.AC_MATUAMT,
                'IS_DISCOUNTED_INT_RATE': formVal.IS_DISCOUNTED_INT_RATE,
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
                //minor and introducer
                'AC_MINOR': formVal.AC_MINOR,
                'AC_MBDATE': formVal.AC_MBDATE,
                'AC_GRDNAME': formVal.AC_GRDNAME,
                'AC_GRDRELE': formVal.AC_GRDRELE,
                'AC_INTROBRANCH': formVal.AC_INTROBRANCH,
                'AC_INTROID': formVal.AC_INTROID,
                'AC_INTRACNO': formVal.AC_INTRACNO,
                'AC_INTRNAME': formVal.AC_INTRNAME,
                'SIGNATURE_AUTHORITY': formVal.SIGNATURE_AUTHORITY,
                //nominee
                'NomineeData': this.multiNominee,
                //Joint Account
                'JointAccountData': this.multiJointAC,
                //Attorney
                'PowerOfAttorneyData': this.multiAttorney
            };
            this.TermDepositMasterService.postData(dataToSend).subscribe(data => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
        }
    }
    //Method for append data into fields
    editClickHandler(id) {
        let opdate;
        let asondate;
        let maturitydate;
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.TermDepositMasterService.getFormData(id).subscribe(data => {
            this.updateID = data.id;
            this.updatecheckdata = data;
            this.getCustomer(data.AC_CUSTID);
            //get nominee to edit
            this.multiNominee = data.nomineeDetails;
            //get joint accounts to edit
            this.multiJointAC = data.jointAccounts;
            //get attorney to edit
            this.multiAttorney = data.powerOfAttorney;
            this.ngCategory = data.AC_CATG,
                this.ngOperation = data.AC_OPR_CODE;
            this.ngIntCategory = data.AC_INTCATA;
            this.angForm.patchValue({
                AC_TYPE: data.AC_TYPE,
                'AC_NO': data.AC_NO,
                'BANKACNO': data.BANKACNO,
                'AC_SHORT_NAME': data.AC_SHORT_NAME,
                'AC_AGE': data.AC_AGE,
                'REF_ACNO': data.REF_ACNO,
                'AC_OPDATE': data.AC_OPDATE,
                'AC_RENEW_DATE': data.AC_RENEW_DATE,
                'AC_EXPDT': data.AC_EXPDT,
                // 'AC_CATG': data.AC_CATG,
                // AC_INTCATA: data.AC_INTCATA,
                'AC_MONTHS': data.AC_MONTHS,
                'AC_SCHMAMT': data.AC_SCHMAMT,
                'AC_IS_RECOVERY': data.AC_IS_RECOVERY,
                'AC_REF_RECEIPTNO': data.AC_REF_RECEIPTNO,
                'AC_ASON_DATE': data.AC_ASON_DATE,
                'AC_MATUAMT': data.AC_MATUAMT,
                'IS_DISCOUNTED_INT_RATE': data.IS_DISCOUNTED_INT_RATE,
                //minor and introducer
                'AC_MINOR': data.AC_MINOR,
                'AC_MBDATE': data.AC_MBDATE,
                'AC_GRDNAME': data.AC_GRDNAME,
                'AC_GRDRELE': data.AC_GRDRELE,
                AC_INTROBRANCH: data.AC_INTROBRANCH,
                AC_INTROID: data.AC_INTROID,
                AC_INTRACNO: data.AC_INTRACNO,
                'AC_INTRNAME': data.AC_INTRNAME,
                'PG_COMM_TYPE': data.PG_COMM_TYPE,
                'SIGNATURE_AUTHORITY': data.SIGNATURE_AUTHORITY,
                'AC_INTRATE': data.AC_INTRATE
            });
        });
    }
    //Method for update data 
    updateData() {
        let opdate;
        let asondate;
        let maturitydate;
        let data = this.angForm.value;
        if (data.AC_ADDFLAG == true) {
            this.addType = 'P';
        }
        else if (data.AC_ADDFLAG == false) {
            this.addType = 'T';
        }
        if (this.angForm.controls['AC_TCTCODE'].value == "") {
            data['AC_TCTCODE'] = null;
        }
        data['AC_ADDTYPE'] = this.addType;
        data['NomineeData'] = this.multiNominee;
        data['JointAccountData'] = this.multiJointAC;
        data['PowerOfAttorneyData'] = this.multiAttorney;
        data['id'] = this.updateID;
        // (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = data.AC_OPDATE, data['AC_OPDATE'] = moment(opdate).format('DD/MM/YYYY')),
        // (data.AC_ASON_DATE == 'Invalid date' || data.AC_ASON_DATE == '' || data.AC_ASON_DATE == null) ? (asondate = '', data['AC_ASON_DATE'] = asondate) : (asondate = data.AC_ASON_DATE, data['AC_ASON_DATE'] = moment(asondate).format('DD/MM/YYYY')),
        // (data.AC_EXPDT == 'Invalid date' || data.AC_EXPDT == '' || data.AC_EXPDT == null) ? (maturitydate = '', data['AC_EXPDT'] = maturitydate) : (maturitydate = data.AC_EXPDT, data['AC_EXPDT'] = moment(maturitydate).format('DD/MM/YYYY'))
        if (this.updatecheckdata.AC_OPDATE != this.openingDate) {
            (this.openingDate == 'Invalid date' || this.openingDate == '' || this.openingDate == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = this.openingDate, data['AC_OPDATE'] = moment__WEBPACK_IMPORTED_MODULE_9__(opdate).format('DD/MM/YYYY'));
        }
        else {
            data['AC_OPDATE'] = this.openingDate;
        }
        if (this.updatecheckdata.AC_ASON_DATE != data.AC_ASON_DATE) {
            (data.AC_ASON_DATE == 'Invalid date' || data.AC_ASON_DATE == '' || data.AC_ASON_DATE == null) ? (asondate = '', data['AC_ASON_DATE'] = asondate) : (asondate = data.AC_ASON_DATE, data['AC_ASON_DATE'] = moment__WEBPACK_IMPORTED_MODULE_9__(asondate).format('DD/MM/YYYY'));
        }
        else {
            data['AC_ASON_DATE'] = data.AC_ASON_DATE;
        }
        if (this.updatecheckdata.AC_EXPDT != data.AC_EXPDT) {
            (data.AC_EXPDT == 'Invalid date' || data.AC_EXPDT == '' || data.AC_EXPDT == null) ? (maturitydate = '', data['AC_EXPDT'] = maturitydate) : (maturitydate = data.AC_EXPDT, data['AC_EXPDT'] = moment__WEBPACK_IMPORTED_MODULE_9__(maturitydate).format('DD/MM/YYYY'));
        }
        else {
            data['AC_EXPDT'] = data.AC_EXPDT;
        }
        this.TermDepositMasterService.updateData(data).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Success!', 'Record Updated Successfully !', 'success');
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
    //Method for delete data
    delClickHandler(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want to delete Share master data.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.TermDepositMasterService.deleteData(id).subscribe(data1 => {
                    this.termDepositMaster = data1;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
                }), (error) => {
                    console.log(error);
                };
                // to reload after delete of data
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.ajax.reload();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Your data is safe.', 'error');
            }
        });
    }
    // Reset Function
    resetForm() {
        this.createForm();
        this.resetNominee();
        this.resetJointAC();
        this.resetAttorney();
        this.PowerofAttorneyTrue = false;
        this.JointAccountsTrue = false;
        this.nomineeTrue = false;
        this.tempAddress = true;
        this.selectedValue = null;
        this.id = null;
        this.ngCategory = null;
        this.ngOperation = null;
        this.ngIntCategory = null;
        this.ngCity = null;
        this.code = null;
        this.acno = null;
        this.ngIntroducer = null;
        this.ngNcity = null;
        this.jointID = null;
        this.getSystemParaDate();
    }
    ngAfterViewInit() {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then((dtInstance) => {
            $('#termmastertable tfoot tr').appendTo('#termmastertable thead');
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
    addNewData() {
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.multiNominee = [];
        this.multiJointAC = [];
        this.multiAttorney = [];
        this.customerDoc = [];
        this.tempAddress = true;
        this.resetForm();
        this.getSystemParaDate();
    }
    nominee($event) {
        if ($event.target.checked) {
            this.nomineeTrue = true;
        }
        else {
            this.nomineeTrue = false;
        }
    }
    addNominee() {
        var _a, _b;
        const formVal = this.angForm.value;
        var object = {
            AC_NNAME: formVal.AC_NNAME,
            AC_NRELA: formVal.AC_NRELA,
            AC_NDATE: moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_NDATE).format('DD/MM/YYYY'),
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
        }
        else if (formVal.AC_NNAME != "") {
            if (formVal.AC_NRELA == "" || formVal.AC_NRELA == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
            }
            else if (formVal.AC_NRELA != "") {
                if (formVal.AC_NDATE == "" || formVal.AC_NDATE == null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
                }
                else if (formVal.AC_NCTCODE != "") {
                    if (formVal.AC_NCTCODE == "" || formVal.AC_NCTCODE == null) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
                    }
                    else {
                        if (this.multiNominee.find(ob => ob['AC_NNAME'].toUpperCase() === formVal.AC_NNAME.toUpperCase())) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'This Nominee is Already Exists!', 'error');
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
    // editNominee(id) {
    //   this.nomineeIndex = id
    //   this.nomineeID = this.multiNominee[id].id;
    //   this.nomineedataedit = this.multiNominee[id]
    //   this.nomineeTrue = true
    //   this.nomineeShowButton = false;
    //   this.nomineeUpdateShow = true;
    //   this.ngnomineedate = this.multiNominee[id].AC_NDATE
    //   this.ngNcity = this.multiNominee[id].AC_CITYNAME,
    //     this.angForm.patchValue({
    //       AC_NNAME: this.multiNominee[id].AC_NNAME,
    //       AC_NRELA: this.multiNominee[id].AC_NRELA,
    //       AGE: this.multiNominee[id].AGE,
    //       AC_NHONO: this.multiNominee[id].AC_NHONO,
    //       AC_NWARD: this.multiNominee[id].AC_NWARD,
    //       AC_NADDR: this.multiNominee[id].AC_NADDR,
    //       AC_NGALLI: this.multiNominee[id].AC_NGALLI,
    //       AC_NAREA: this.multiNominee[id].AC_NAREA,
    //       AC_NPIN: this.multiNominee[id].AC_NPIN,
    //     })
    // }
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
    // editNominee(id) {
    //   let nodate
    //   this.nomineeIndex = id
    //   this.nomineeID = this.multiNominee[id].id;
    //   this.nomineeTrue = true
    //   this.nomineeShowButton = false;
    //   this.nomineeUpdateShow = true;
    //   this.angForm.patchValue({
    //     AC_NNAME: this.multiNominee[id].AC_NNAME,
    //     AC_NRELA: this.multiNominee[id].AC_NRELA,
    //     // AC_NDATE: this.multiNominee[id].AC_NDATE,
    //     AC_NDATE: (this.multiNominee[id].AC_NDATE == 'Invalid date' || this.multiNominee[id].AC_NDATE == '' || this.multiNominee[id].AC_NDATE == null) ? nodate = '' : nodate = this.multiNominee[id].AC_NDATE,
    //     AGE: this.multiNominee[id].AGE,
    //     AC_NHONO: this.multiNominee[id].AC_NHONO,
    //     AC_NWARD: this.multiNominee[id].AC_NWARD,
    //     AC_NADDR: this.multiNominee[id].AC_NADDR,
    //     AC_NGALLI: this.multiNominee[id].AC_NGALLI,
    //     AC_NAREA: this.multiNominee[id].AC_NAREA,
    //     AC_NCTCODE: this.multiNominee[id].AC_NCTCODE,
    //     AC_NPIN: this.multiNominee[id].AC_NPIN,
    //   })
    // }
    // updateNominee() {
    //   let index = this.nomineeIndex;
    //   this.nomineeShowButton = true;
    //   this.nomineeUpdateShow = false;
    //   const formVal = this.angForm.value;
    //   let nodate
    //   var object = {
    //     AC_NNAME: formVal.AC_NNAME,
    //     AC_NRELA: formVal.AC_NRELA,
    //     AC_NDATE: (formVal.AC_NDATE == '' || formVal.AC_NDATE == 'Invalid date' || formVal.AC_NDATE == null) ? nodate = '' : nodate = moment(formVal.AC_NDATE).format('DD/MM/YYYY'),
    //     AGE: formVal.AGE,
    //     AC_NHONO: formVal.AC_NHONO,
    //     AC_NWARD: formVal.AC_NWARD,
    //     AC_NADDR: formVal.AC_NADDR,
    //     AC_NGALLI: formVal.AC_NGALLI,
    //     AC_NAREA: formVal.AC_NAREA,
    //     AC_NCTCODE: formVal.AC_NCTCODE,
    //     AC_NPIN: formVal.AC_NPIN,
    //     id: this.nomineeID
    //   }
    //   if (formVal.AC_NNAME == "" || formVal.AC_NNAME == null) {
    //     Swal.fire("Please Insert Mandatory Record For Nominee");
    //   }
    //   else if (formVal.AC_NNAME != "") {
    //     if (formVal.AC_NRELA == "" || formVal.AC_NRELA == null) {
    //       Swal.fire("Please Insert Mandatory Record For Nominee");
    //     } else if (formVal.AC_NRELA != "") {
    //       if (formVal.AC_NDATE == "" || formVal.AC_NDATE == null) {
    //         Swal.fire("Please Insert Mandatory Record For Nominee");
    //       }
    //       else {
    //         if (this.multiNominee.find(ob => ob['AC_NNAME'].toUpperCase() === formVal.AC_NNAME.toUpperCase())) {
    //           Swal.fire("This Nominee is Already Exists", "error");
    //         } else {
    //           this.multiNominee[index] = object;
    //         }
    //       }
    //     }
    //     else {
    //       this.multiNominee[index] = object;
    //     }
    //   }
    //   else {
    //     this.multiNominee[index] = object;
    //   }
    //   this.resetNominee()
    // }
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Please Insert Mandatory Record For Nominee");
        }
        else if (formVal.AC_NNAME != "") {
            if (formVal.AC_NRELA == "" || formVal.AC_NRELA == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
            }
            else if (formVal.AC_NRELA != "") {
                if (formVal.AC_NDATE == "" || formVal.AC_NDATE == null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
                }
                else if (formVal.AC_NCTCODE != "") {
                    if (formVal.AC_NCTCODE == "" || formVal.AC_NCTCODE == null) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
                    }
                    else {
                        this.multiNominee[index] = object;
                    }
                }
            }
            else {
                this.multiNominee[index] = object;
            }
        }
        else {
            this.multiNominee[index] = object;
        }
        this.resetNominee();
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
    //Joint ac
    jointAccount($event) {
        if ($event.target.checked) {
            this.JointAccountsTrue = true;
        }
        else {
            this.JointAccountsTrue = false;
        }
    }
    getJointCustomer(id) {
        this.customerIdService.getFormData(id.value).subscribe(data => {
            this.angForm.patchValue({
                JOINT_ACNAME: data.AC_NAME,
                JOINT_AC_CUSTID: id.value
            });
        });
        this.jointID = id.value;
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
            JOINT_AC_CUSTID: this.jointID,
            JOINT_ACNAME: formVal.JOINT_ACNAME,
            OPERATOR: value,
        };
        if (formVal.AC_CUSTID != "") {
            if (object.JOINT_AC_CUSTID != undefined) {
                if (this.id != this.jointID) {
                    if (this.multiJointAC.length == 0) {
                        this.multiJointAC.push(object);
                        this.angForm.controls['JOINT_AC_CUSTID'].reset();
                        this.jointID = null;
                        this.jointID = '';
                        this.resetJointAC();
                    }
                    else {
                        if (this.multiJointAC.find(ob => ob['JOINT_AC_CUSTID'] == this.jointID)) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'This Customer is Already Joint Account Holder', 'warning');
                            this.jointID = null;
                            this.jointID = '';
                            this.angForm.controls['JOINT_AC_CUSTID'].reset();
                            this.resetJointAC();
                        }
                        else {
                            this.multiJointAC.push(object);
                            this.jointID = null;
                            this.jointID = '';
                            this.angForm.controls['JOINT_AC_CUSTID'].reset();
                            this.resetJointAC();
                        }
                    }
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', "Please Select Different Customer id", 'warning');
                    this.jointID = null;
                    this.jointID = '';
                    this.angForm.controls['JOINT_AC_CUSTID'].reset();
                    this.resetJointAC();
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', "Please Select Guarantor Customer Id", 'warning');
                this.jointID = null;
                this.jointID = '';
                this.angForm.controls['JOINT_AC_CUSTID'].reset();
                this.resetJointAC();
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', "Please Select Customer Id", 'warning');
            this.jointID = null;
            this.jointID = '';
            this.angForm.controls['JOINT_AC_CUSTID'].reset();
            this.resetJointAC();
        }
    }
    editJointAc(id) {
        this.jointIndex = id;
        this.jointACID = this.multiJointAC[id].id;
        this.JointAccountsTrue = true;
        this.jointShowButton = false;
        this.jointUpdateShow = true;
        this.angForm.patchValue({
            JOINT_AC_CUSTID: this.multiJointAC[id].JOINT_AC_CUSTID,
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
            if (this.id != this.jointID) {
                if (this.multiJointAC.length == 0) {
                    this.multiJointAC[index] = object;
                    this.jointID = null;
                    this.jointID = '';
                    this.angForm.controls['JOINT_AC_CUSTID'].reset();
                    this.resetJointAC();
                }
                else {
                    if (this.multiJointAC.find(ob => ob['JOINT_AC_CUSTID'] === formVal.JOINT_AC_CUSTID)) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("This Customer is Already Exists", "error");
                        this.jointID = null;
                        this.jointID = '';
                        this.angForm.controls['JOINT_AC_CUSTID'].reset();
                        this.resetJointAC();
                    }
                    else {
                        this.multiJointAC[index] = object;
                        this.jointID = null;
                        this.jointID = '';
                        this.angForm.controls['JOINT_AC_CUSTID'].reset();
                        this.resetJointAC();
                    }
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Please Select Different Customer id", "error");
                this.jointID = null;
                this.jointID = '';
                this.angForm.controls['JOINT_AC_CUSTID'].reset();
                this.resetJointAC();
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Please Select Customer Id", "error");
            this.jointID = null;
            this.jointID = '';
            this.angForm.controls['JOINT_AC_CUSTID'].reset();
            this.resetJointAC();
        }
    }
    delJointAc(id) {
        this.multiJointAC.splice(id, 1);
    }
    resetJointAC() {
        this.angForm.controls['JOINT_ACNAME'].reset();
        this.angForm.patchValue({
            JOINT_ACNAME: ''
        });
        this.jointID.clearFilter();
    }
    clearFilter() {
        this.jointID = '';
    }
    //power of attorney
    // addAttorney() {
    //   let appdate
    //   let exdate
    //   const formVal = this.angForm.value;
    //   var object = {
    //     ATTERONEY_NAME: formVal.ATTERONEY_NAME,
    //     DATE_APPOINTED: (formVal.DATE_APPOINTED == '' || formVal.DATE_APPOINTED == 'Invalid date') ? appdate = '' : appdate = moment(formVal.DATE_APPOINTED).format('DD/MM/YYYY'),
    //     DATE_EXPIRY: (formVal.DATE_EXPIRY == '' || formVal.DATE_EXPIRY == 'Invalid date') ? exdate = '' : exdate = moment(formVal.DATE_EXPIRY).format('DD/MM/YYYY')
    //   }
    //   if (formVal.ATTERONEY_NAME == "" || formVal.ATTERONEY_NAME == null) {
    //     Swal.fire("Please Insert Mandatory Record For Power Of Attorney");
    //   } else if (formVal.ATTERONEY_NAME != "") {
    //     if (formVal.DATE_APPOINTED == "" || formVal.DATE_APPOINTED == null) {
    //       Swal.fire("Please Insert Mandatory Record For Power Of Attorney");
    //     } else if (formVal.DATE_APPOINTED != "") {
    //       if (formVal.DATE_EXPIRY == "" || formVal.DATE_EXPIRY == null) {
    //         Swal.fire("Please Insert Mandatory Record For Power Of Attorney");
    //       }
    //       else {
    //         if (this.multiAttorney.find(ob => ob['ATTERONEY_NAME'].toUpperCase() === formVal.ATTERONEY_NAME.toUpperCase())) {
    //           Swal.fire("This Attorney is Already Exists", "error");
    //         } else {
    //           this.multiAttorney.push(object);
    //         }
    //       }
    //     }
    //     else {
    //       this.multiAttorney.push(object);
    //     }
    //   }
    //   else {
    //     this.multiAttorney.push(object);
    //   }
    //   this.resetAttorney()
    // }
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'Please Insert Mandatory Record For Power Of Attorney!', 'warning');
        }
        else if (formVal.ATTERONEY_NAME != "") {
            if (formVal.DATE_APPOINTED == "" || formVal.DATE_APPOINTED == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'Please Insert Mandatory Record For Power Of Attorney!', 'warning');
            }
            else if (formVal.DATE_APPOINTED != "") {
                if (formVal.DATE_EXPIRY == "" || formVal.DATE_EXPIRY == null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'Please Insert Mandatory Record For Power Of Attorney!', 'warning');
                }
                else {
                    if (this.multiAttorney.find(ob => ob['ATTERONEY_NAME'].toUpperCase() === formVal.ATTERONEY_NAME.toUpperCase())) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'This Attorney is Already Exists!', 'error');
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Please Insert Mandatory Record For Power Of Attorney");
        }
        else if (formVal.ATTERONEY_NAME != "") {
            if (formVal.DATE_APPOINTED == "" || formVal.DATE_APPOINTED == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Please Insert Mandatory Record For Power Of Attorney");
            }
            else if (formVal.DATE_APPOINTED != "") {
                if (formVal.DATE_EXPIRY == "" || formVal.DATE_EXPIRY == null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Please Insert Mandatory Record For Power Of Attorney");
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
    setMaturityDate() {
        this.schemedata(this.selectedValue);
        this.angForm.patchValue({
            AC_MATUAMT: this.angForm.controls['AC_SCHMAMT'].value
        });
    }
    // data scheme master
    schemedata(id) {
        this._termDepositScheme.getFormData(id).subscribe(data => {
            // this.recurringCompoundInterest()
            if (data.IS_CAL_MATURITY_AMT != true) {
                this.setMaturityDate();
            }
            else {
                // call calculation function
                if (data.INTEREST_RULE == "MonthBasis+Transactionwise" || data.INTEREST_RULE == "Compounding") {
                    if (data.S_INTCALTP == "CalculationOnDays" && data.S_INTCALC_METHOD == "SimpleInterest") {
                        this.simpleInterestCalculation();
                    }
                    else if (data.S_INTCALTP == "CalculationOnDays" && data.S_INTCALC_METHOD == "CompountInterest") {
                        if (data.COMPOUND_INT_BASIS == "Monthly" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == true) {
                            var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 1;
                        }
                        else if (data.COMPOUND_INT_BASIS == "Quarterly" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == true) {
                            var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 3;
                        }
                        else if (data.COMPOUND_INT_BASIS == "Half Yearly" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == true) {
                            var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 6;
                        }
                        else if (data.COMPOUND_INT_BASIS == "Yearly" || data.COMPOUND_INT_DAYS != '' || data.IS_DISCOUNTED_INT_RATE == true) {
                            var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 12;
                        }
                        var date1 = this.angForm.controls['AC_ASON_DATE'].value;
                        var date2 = this.angForm.controls['AC_EXPDT'].value;
                        // date1 = moment(date1).format('DD/MM/YYYY');
                        var startDate = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY");
                        var endDate = moment__WEBPACK_IMPORTED_MODULE_9__(date2, "DD/MM/YYYY");
                        var result = endDate.diff(startDate, 'days');
                        var amount = this.angForm.controls['AC_SCHMAMT'].value;
                        var maturityAmount = this.angForm.controls['AC_MATUAMT'].value;
                        for (this.i = 1; this.i <= Quarters; this.i++) {
                            let totalInterest;
                            var sample = parseFloat(amount);
                            var totalInt = (parseFloat(amount) * (this.angForm.controls['AC_INTRATE'].value) * Math.trunc((result) / (Quarters)) / 36500).toFixed(10);
                            totalInterest = Number(totalInt);
                            amount = (parseFloat(amount) + (totalInterest)).toFixed(10);
                            totalInterest = 0;
                        }
                        maturityAmount = Math.round(parseFloat(amount) + (parseFloat(amount) * (this.angForm.controls['AC_INTRATE'].value) * ((result) - Math.trunc((result) / (Quarters)) * (Quarters))) / 36500);
                        this.angForm.patchValue({
                            AC_MATUAMT: maturityAmount
                        });
                    }
                    else if (data.S_INTCALTP == "MonthProductBase" && data.S_INTCALC_METHOD == "SimpleInterest") {
                        var date1 = this.angForm.controls['AC_ASON_DATE'].value;
                        var date2 = this.angForm.controls['AC_EXPDT'].value;
                        // date1 = moment(date1).format('DD/MM/YYYY');
                        // date2 = moment(date2).format('DD/MM/YYYY');
                        var b = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY");
                        var a = moment__WEBPACK_IMPORTED_MODULE_9__(date2, "DD/MM/YYYY");
                        var months = a.diff(b, 'months');
                        b.add(months, 'months');
                        var days = a.diff(b, 'days');
                        var tmpAmt1 = Math.round(((this.angForm.controls['AC_SCHMAMT'].value * this.angForm.controls['AC_INTRATE'].value * months) / (12 * 100)));
                        var tmpAmt2 = Math.round(((this.angForm.controls['AC_SCHMAMT'].value * this.angForm.controls['AC_INTRATE'].value * days) / (365 * 100)));
                        var Interest = (tmpAmt1 + tmpAmt2);
                        var Maturity = Math.round(Number(this.angForm.controls['AC_SCHMAMT'].value) + Interest);
                        this.angForm.patchValue({
                            AC_MATUAMT: Maturity
                        });
                    }
                    else if (data.S_INTCALTP == "MonthProductBase" && data.S_INTCALC_METHOD == "CompountInterest") {
                        this.angForm.patchValue({
                            AC_MATUAMT: 0
                        });
                    }
                    else if (data.S_INTCALTP == "Month&DaysBase" && data.IS_START_WITH_MONTHS == true && data.S_INTCALC_METHOD == "SimpleInterest") {
                        var date1 = this.angForm.controls['AC_ASON_DATE'].value;
                        var date2 = this.angForm.controls['AC_EXPDT'].value;
                        // date1 = moment(date1).format('DD/MM/YYYY');
                        // date2 = moment(date2).format('DD/MM/YYYY');
                        var b = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY");
                        var a = moment__WEBPACK_IMPORTED_MODULE_9__(date2, "DD/MM/YYYY");
                        var months = a.diff(b, 'months');
                        b.add(months, 'months');
                        var days = a.diff(b, 'days');
                        var tmpAmt1 = Math.round(((this.angForm.controls['AC_SCHMAMT'].value * this.angForm.controls['AC_INTRATE'].value * months) / (12 * 100)));
                        var tmpAmt2 = Math.round(((this.angForm.controls['AC_SCHMAMT'].value * this.angForm.controls['AC_INTRATE'].value * days) / (365 * 100)));
                        var Interest = (tmpAmt1 + tmpAmt2);
                        var Maturity = Math.round(Number(this.angForm.controls['AC_SCHMAMT'].value) + Interest);
                        this.angForm.patchValue({
                            AC_MATUAMT: Maturity
                        });
                    }
                    else if (data.S_INTCALTP == "Month&DaysBase" && data.IS_START_WITH_MONTHS == true && data.S_INTCALC_METHOD == "CompountInterest") {
                        var Quarters = Math.floor(this.angForm.controls['AC_MONTHS'].value) / 3;
                        var date1 = this.angForm.controls['AC_ASON_DATE'].value;
                        var date2 = this.angForm.controls['AC_EXPDT'].value;
                        // date1 = moment(date1).format('DD/MM/YYYY');
                        var b = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY");
                        var a = moment__WEBPACK_IMPORTED_MODULE_9__(date2, "DD/MM/YYYY");
                        var months = a.diff(b, 'months');
                        b.add(months, 'months');
                        var days = a.diff(b, 'days');
                        var End = moment__WEBPACK_IMPORTED_MODULE_9__(date2, "DD/MM/YYYY").subtract(1, 'days');
                        var EndDate = End.format("DD/MM/YYYY");
                        var Start = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY").subtract(1, 'days');
                        var StartDate = Start.format("DD/MM/YYYY");
                        var CurrentDate = this.angForm.controls['AC_ASON_DATE'].value;
                        var lngMonths = 0;
                        var lngDays = 0;
                        var VcumPeriod = 0;
                        var IntAmount = 0;
                        var vmonth = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY").add(1, 'days');
                        var Mth = vmonth.format("DD/MM/YYYY");
                        var vMth = new Date(Mth).getMonth();
                        var PeriodEndDate = EndDate;
                        VcumPeriod = 12;
                        var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                        var year = oneDate.format('YYYY');
                        PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "09", "30"]).format('YYYY/MM/DD');
                        if (CurrentDate >= EndDate) {
                        }
                        else {
                            this._termDepositScheme.getFormData(this.selectedValue).subscribe(data => {
                                if (data.S_INTCALC_METHOD == true) {
                                    if (data.COMPOUND_INT_BASIS == "Yearly") {
                                        PeriodEndDate = EndDate;
                                        VcumPeriod = 12;
                                    }
                                    else if (data.COMPOUND_INT_BASIS == "HalfYearly") {
                                        if (vMth >= 4 && vMth <= 9) {
                                            var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                                            var year = oneDate.format('YYYY');
                                            PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "09", "30"]).format('YYYY/MM/DD');
                                        }
                                        else {
                                            var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                                            var year = oneDate.format('YYYY');
                                            PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "03", "31"]).format('YYYY/MM/DD');
                                            if (PeriodEndDate < CurrentDate) {
                                                var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                                                var year = oneDate.format('YYYY');
                                                var PeriodEnd = moment__WEBPACK_IMPORTED_MODULE_9__([year, "03", "31"]).format('YYYY/MM/DD');
                                                var Period = moment__WEBPACK_IMPORTED_MODULE_9__(PeriodEnd, 'YYYY/MM/DD').add(1, 'days');
                                                PeriodEndDate = Period.toString();
                                            }
                                        }
                                        VcumPeriod = 6;
                                    }
                                    else if (data.COMPOUND_INT_BASIS == "Quarterly") {
                                        if (vMth >= 1 && vMth <= 3) {
                                            var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                                            var year = oneDate.format('YYYY');
                                            PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "03", "31"]).format('YYYY/MM/DD');
                                            if (PeriodEndDate < CurrentDate) {
                                                var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                                                var year = oneDate.format('YYYY');
                                                var PeriodEnd = moment__WEBPACK_IMPORTED_MODULE_9__([year, "03", "31"]).format('YYYY/MM/DD');
                                                var Period = moment__WEBPACK_IMPORTED_MODULE_9__(PeriodEnd, 'YYYY/MM/DD').add(1, 'days');
                                                PeriodEndDate = Period.toString();
                                            }
                                        }
                                        else if (vMth >= 4 && vMth <= 6) {
                                            var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                                            var year = oneDate.format('YYYY');
                                            PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "06", "30"]).format('YYYY/MM/DD');
                                        }
                                        else if (vMth >= 7 && vMth <= 9) {
                                            var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                                            var year = oneDate.format('YYYY');
                                            PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "09", "30"]).format('YYYY/MM/DD');
                                        }
                                        else {
                                            var oneDate = moment__WEBPACK_IMPORTED_MODULE_9__(CurrentDate, 'YYYY/MM/DD').add(1, 'days');
                                            var year = oneDate.format('YYYY');
                                            PeriodEndDate = moment__WEBPACK_IMPORTED_MODULE_9__([year, "12", "30"]).format('YYYY/MM/DD');
                                        }
                                        VcumPeriod = 3;
                                    }
                                    else if (data.COMPOUND_INT_BASIS == "Monthly") {
                                        var current = new Date(CurrentDate);
                                        let year = current.getFullYear();
                                        var month = new Date(CurrentDate).getMonth();
                                        var day = new Date(current).getDate();
                                        var exe_day = month + 1;
                                        var nextDate = new Date(year, exe_day, day);
                                        var lastDay = new Date(current.getFullYear(), nextDate.getMonth() + 1, 0);
                                        var nextExeDate = this.datePipe.transform(lastDay, "YYYY/MM/DD");
                                        VcumPeriod = 3;
                                    }
                                    else if (data.COMPOUND_INT_BASIS == "Monthly") {
                                        if (data.COMPOUND_INT_DAYS <= 0) {
                                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('You Must Assign Valid Compound Basis Days For The Scheme Please Contact To Software Engineer');
                                        }
                                        VcumPeriod = 0;
                                    }
                                    else {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('You Must Assign Valid Compound Basis Days For The Scheme Please Contact To Software Engineer');
                                    }
                                    if (PeriodEndDate > EndDate) {
                                        PeriodEndDate = EndDate;
                                    }
                                }
                            });
                        }
                    }
                    else if (data.S_INTCALTP == "DaysProductBase" && data.S_INTCALC_METHOD == "SimpleInterest") {
                        this.simpleInterestCalculation();
                    }
                }
                else if (data.INTEREST_RULE == "SimpleasperSharesClosingBalance") {
                    if (data.S_INTCALTP == "CalculationOnDays" && data.S_INTCALC_METHOD == "SimpleInterest") {
                        this.recurringSimpleInterest();
                    }
                    else if (data.S_INTCALTP == "CalculationOnDays" && data.S_INTCALC_METHOD == "CompountInterest") {
                        this.recurringSimpleInterest();
                    }
                    else if (data.S_INTCALTP == "MonthProductBase" && data.S_INTCALC_METHOD == "SimpleInterest") {
                        this.recurringSimpleInterest();
                    }
                    else if (data.S_INTCALTP == "MonthProductBase" && data.S_INTCALC_METHOD == "CompountInterest") {
                        this.recurringCompoundInterest();
                    }
                    else if (data.S_INTCALTP == "Month&DaysBase" && data.IS_START_WITH_MONTHS == true && data.S_INTCALC_METHOD == "SimpleInterest") {
                        var date1 = this.angForm.controls['AC_ASON_DATE'].value;
                        var date2 = this.angForm.controls['AC_EXPDT'].value;
                        // date1 = moment(date1).format('DD/MM/YYYY');
                        // date2 = moment(date2).format('DD/MM/YYYY');
                        var b = moment__WEBPACK_IMPORTED_MODULE_9__(date1, "DD/MM/YYYY");
                        var a = moment__WEBPACK_IMPORTED_MODULE_9__(date2, "DD/MM/YYYY");
                        var months = a.diff(b, 'months');
                        b.add(months, 'months');
                        var days = a.diff(b, 'days');
                        var tmpAmt1 = Math.round(((this.angForm.controls['AC_SCHMAMT'].value * this.angForm.controls['AC_INTRATE'].value * months) / (12 * 100)));
                        var tmpAmt2 = Math.round(((this.angForm.controls['AC_SCHMAMT'].value * this.angForm.controls['AC_INTRATE'].value * days) / (365 * 100)));
                        var Interest = (tmpAmt1 + tmpAmt2);
                        var Maturity = Math.round(Number(this.angForm.controls['AC_SCHMAMT'].value) + Interest);
                        this.angForm.patchValue({
                            AC_MATUAMT: Maturity
                        });
                    }
                    else if (data.S_INTCALTP == "Month&DaysBase" && data.IS_START_WITH_MONTHS == true && data.S_INTCALC_METHOD == "CompountInterest") {
                        this.recurringCompoundInterest();
                    }
                    else if (data.S_INTCALTP == "DaysProductBase" && data.S_INTCALC_METHOD == "SimpleInterest") {
                        this.recurringSimpleInterest();
                    }
                }
            }
        });
    }
    switchNgBTab(id) {
        this.ctdTabset.select(id);
    }
    viewImagePreview(ele, id) {
        this.selectedImagePreview = id;
    }
    decimalAllContent($event) {
        let value = Number($event.target.value);
        let data = value.toFixed(2);
        $event.target.value = data;
    }
    onCloseModal() {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }
    //approve account
    Approve() {
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = {
            id: this.updateID,
            user: user.id
        };
        this.TermDepositMasterService.approve(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Approved', 'Term Deposit Account approved successfully', 'success');
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
        this.TermDepositMasterService.reject(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Rejected', 'Term Deposit Account rejected successfully', 'success');
            var button = document.getElementById('triggerhide');
            button.click();
        }, err => {
            console.log('something is wrong');
        });
    }
}
TermDepositsMasterComponent.ɵfac = function TermDepositsMasterComponent_Factory(t) { return new (t || TermDepositsMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_elements_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_elements_accountcode_service__WEBPACK_IMPORTED_MODULE_11__["AccountcodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["CustomerIDMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_term_deposits_master_service__WEBPACK_IMPORTED_MODULE_14__["TermDepositMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_15__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["categoryMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["IntrestCategoryMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_dropdownService_operation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["OperationMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["CastMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["cityMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_23__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_25__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utility_scheme_parameters_term_deposit_scheme_term_deposit_scheme_service__WEBPACK_IMPORTED_MODULE_26__["TermDepositSchemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_instruction_interest_instruction_interest_instruction_service__WEBPACK_IMPORTED_MODULE_27__["InterestInstructionService"])); };
TermDepositsMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TermDepositsMasterComponent, selectors: [["app-term-deposits-master"]], viewQuery: function TermDepositsMasterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ctdTabset = _t.first);
    } }, inputs: { childMessage: "childMessage" }, outputs: { getUserData: "getUserData" }, decls: 132, vars: 20, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [1, "card-block"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "col-sm-3"], [1, "form-group", "form-primary", "form-static-label"], ["autofocus", "", 1, "border-lable-flt"], ["bindValue", "value", "id", "AC_TYPE", "bindLabel", "label", "formControlName", "AC_TYPE", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme", 3, "ngModel", "disabled", "ngClass", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "AC_TYPE"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-4"], [1, "border-lable-flt"], ["id", "AC_CUSTID", "bindValue", "value", "formControlName", "AC_CUSTID", "title", "Compulsory Selection", "required", "", "placeholder", "Customer Id", 2, "width", "85%", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "AC_CUSTID"], ["id", "custicon", "placement", "bottom", "ngbTooltip", "Add New Customer", 1, "fa", "fa-fw", "fa-plus-circle", "field-icon", 3, "click"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "newCustomerEvent"], [1, "app-modal-footer"], ["type", "button", "id", "triggerhide", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "col-sm-1"], [1, "form-group", "input-group"], ["type", "text", "name", "AC_TITLE", "placeholder", " ", "id", "AC_TITLE", "formControlName", "AC_TITLE", "disabled", "", 1, "form-control"], ["for", "AC_TITLE"], [1, "col-sm", 2, "max-width", "250%"], ["type", "text", "name", "AC_NAME", "placeholder", " ", "id", "AC_NAME", "formControlName", "AC_NAME", "disabled", "", 1, "form-control"], ["for", "AC_NAME"], [1, "col-sm-2", 2, "float", "right"], ["type", "text", "name", "BANKACNO", "placeholder", " ", "id", "BANKACNO", "formControlName", "BANKACNO", "disabled", "", 1, "form-control"], ["for", "BANKACNO"], ["class", "col-sm-2", 4, "ngIf"], [1, "col-sm"], [1, "nav-pills", "tabFont"], ["ctdTabset", "ngbTabset"], ["title", "Basic"], ["ngbTabContent", ""], ["title", "Address", "role", "tab", "data-toggle", "tab", "id", "addressTab"], ["title", "Introducer/Minor Details", "id", "introducer"], ["title", "Nominee/Joint a/cs/Attorney", "id", "nominee"], ["title", "Documents", "id", "documents"], ["title", "Interest Instruction", "id", "interestInstruction"], [1, "card", "shadow"], [1, "table-responsive"], ["id", "termmastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions", "dtTrigger"], [4, "ngIf"], [1, "filters"], ["filters", ""], [1, "testing"], ["type", "text", "name", "AC_TYPE", 1, "form-control"], ["type", "text", "name", "BANKACNO", 1, "form-control"], ["type", "text", "name", "AC_CUSTID", 1, "form-control"], ["type", "text", "name", "AC_NAME", 1, "form-control"], ["type", "text", "name", "AC_ADDR", 1, "form-control"], ["type", "text", "name", "AC_CTCODE", 1, "form-control"], ["type", "text", "name", "REF_ACNO", 1, "form-control"], ["type", "text", "name", "AC_MBDATE", 1, "form-control"], ["type", "text", "name", "AC_OPDATE", 1, "form-control"], ["type", "text", "name", "AC_RENEAC_ASON_DATEW_DATE", 1, "form-control"], ["type", "text", "name", "AC_EXPDT", 1, "form-control"], ["type", "text", "name", "AC_REF_RECEIPTNO", 1, "form-control"], ["type", "text", "name", "AC_SCHMAMT", 1, "form-control"], ["type", "text", "name", "AC_MATUAMT", 1, "form-control"], ["type", "text", "name", "AC_MINOR", 1, "form-control"], ["type", "text", "name", "SIGNATURE_AUTHORITY", 1, "form-control"], [3, "value"], [1, "alert", "alert-danger"], [1, "col-sm-2"], [2, "color", "#1e5bc5"], [1, "m-t-15"], [1, "card", "border-primary"], [1, "card-block", "highlight"], ["type", "text", "name", "AC_MEMBTYPE", "placeholder", " ", "id", "AC_MEMBTYPE", "formControlName", "AC_MEMBTYPE", "disabled", "", 1, "form-control"], ["for", "AC_MEMBTYPE"], ["type", "text", "name", "AC_MEMBNO", "placeholder", " ", "id", "AC_MEMBNO", "formControlName", "AC_MEMBNO", "disabled", "", 1, "form-control", 2, "text-align", "right"], ["for", "AC_MEMBNO"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_OPDATE", "id", "AC_OPDATE", "required", "", "minlength", "10", "maxlength", "10", "formControlName", "AC_OPDATE", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "ngClass", "maxDate", "bsValue", "focusout", "keypress"], ["for", "AC_OPDATE"], [1, "border-lable-flt", 2, "background", "transparent"], ["type", "text", "name", "REF_ACNO", "placeholder", " ", "id", "REF_ACNO", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "maxlength", "25", "formControlName", "REF_ACNO", 1, "form-control", 3, "keypress"], ["for", "REF_ACNO"], ["type", "text", "name", "AC_CAST", "placeholder", " ", "id", "AC_CAST", "formControlName", "AC_CAST", "disabled", "", 1, "form-control"], ["for", "AC_CAST"], ["type", "text", "name", "AC_BIRTH_DT", "placeholder", " ", "id", "AC_BIRTH_DT", "formControlName", "AC_BIRTH_DT", "disabled", "", 1, "form-control"], ["for", "AC_BIRTH_DT"], ["type", "text", "name", "AC_OCODE", "placeholder", " ", "id", "AC_OCODE", "formControlName", "AC_OCODE", "disabled", "", 1, "form-control"], ["for", "AC_OCODE"], ["id", "AC_CATG", "bindValue", "value", "formControlName", "AC_CATG", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Category", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "AC_CATG"], ["id", "AC_OPR_CODE", "bindValue", "value", "formControlName", "AC_OPR_CODE", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Operation", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "AC_OPR_CODE"], ["id", "AC_INTCATA", "bindValue", "value", "formControlName", "AC_INTCATA", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Interest Category", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "AC_INTCATA"], ["type", "text", "name", "AC_REF_RECEIPTNO", "placeholder", " ", "id", "AC_REF_RECEIPTNO", "formControlName", "AC_REF_RECEIPTNO", "disabled", "", 1, "form-control", 2, "text-align", "right"], ["for", "AC_REF_RECEIPTNO"], ["type", "text", "name", "AC_PANNO", "placeholder", " ", "id", "AC_PANNO", "disabled", "", "formControlName", "AC_PANNO", 1, "form-control"], ["for", "AC_PANNO"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_ASON_DATE", "id", "AC_ASON_DATE", "minlength", "10", "maxlength", "10", "formControlName", "AC_ASON_DATE", "bsDatepicker", "", 1, "form-control", 3, "max", "bsConfig", "ngClass", "maxDate", "bsValue", "bsValueChange", "keypress"], ["date", ""], ["for", "AC_ASON_DATE"], ["type", "text", "name", "AC_MONTHS", "placeholder", " ", "id", "AC_MONTHS", "maxlength", "3", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "AC_MONTHS", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "ngModelChange"], ["for", "AC_MONTHS"], ["type", "text", "name", "AC_DAYS", "placeholder", " ", "id", "AC_DAYS", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "maxlength", "4", "formControlName", "AC_DAYS", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "ngModelChange"], ["for", "AC_DAYS"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_EXPDT", "id", "AC_EXPDT", "formControlName", "AC_EXPDT", "minlength", "10", "maxlength", "10", "bsDatepicker", "", 1, "form-control", 3, "max", "bsConfig", "ngClass", "minDate", "bsValue", "focusout", "bsValueChange", "keypress"], ["for", "AC_EXPDT"], ["type", "text", "name", "AC_SCHMAMT", "placeholder", " ", "id", "AC_SCHMAMT", "title", "Input allowed only  0-9", "pattern", "\\d{1,10}(\\.\\d{2})?", "maxlength", "13", "formControlName", "AC_SCHMAMT", "required", "", 1, "form-control", 2, "text-align", "right", 3, "value", "ngClass", "ngModelChange", "focusout", "keypress"], ["for", "AC_SCHMAMT"], ["type", "text", "name", "AC_INTRATE", "placeholder", " ", "id", "AC_INTRATE", "required", "", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "AC_INTRATE", 1, "form-control", 2, "text-align", "right", 3, "ngClass", "keypress", "ngModelChange"], ["for", "AC_INTRATE"], ["type", "text", "name", "AC_MATUAMT", "placeholder", " ", "id", "AC_MATUAMT", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "maxlength", "13", "pattern", "\\d{1,10}(\\.\\d{2})?", "formControlName", "AC_MATUAMT", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", "AC_MATUAMT"], [1, "checkbox", "checkbox-primary"], [1, "border-checkbox-group", "border-checkbox-group-primary"], ["type", "checkbox", "id", "IS_DISCOUNTED_INT_RATE", "formControlName", "IS_DISCOUNTED_INT_RATE", 1, "border-checkbox"], ["for", "IS_DISCOUNTED_INT_RATE", 1, "border-checkbox-label"], ["type", "checkbox", "id", "AC_IS_RECOVERY", "formControlName", "AC_IS_RECOVERY", 1, "border-checkbox"], ["for", "AC_IS_RECOVERY", 1, "border-checkbox-label"], [1, "col-sm-1", 2, "float", "right", "margin-top", "6px"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [2, "text-align", "center", "font-size", "16px"], ["type", "text", "name", "AC_HONO", "placeholder", " ", "id", "AC_HONO", "formControlName", "AC_HONO", "disabled", "", 1, "form-control"], ["for", "AC_HONO"], ["type", "text", "name", "AC_WARD", "placeholder", " ", "id", "AC_WARD", "formControlName", "AC_WARD", "disabled", "", 1, "form-control"], ["for", "AC_WARD"], ["type", "text", "name", "AC_GALLI", "placeholder", " ", "id", "AC_GALLI", "formControlName", "AC_GALLI", "disabled", "", 1, "form-control"], ["for", "AC_GALLI"], ["type", "text", "name", "AC_AREA", "placeholder", " ", "id", "AC_AREA", "formControlName", "AC_AREA", "disabled", "", 1, "form-control"], ["for", "AC_AREA"], ["type", "text", "name", "AC_ADDR", "placeholder", " ", "id", "AC_ADDR", "formControlName", "AC_ADDR", "disabled", "", 1, "form-control"], ["for", "AC_ADDR"], ["type", "text", "name", "AC_CTCODE", "bindValue", "id", "placeholder", " ", "id", "AC_CTCODE", "formControlName", "AC_CTCODE", "disabled", "", 1, "form-control"], ["for", "AC_CTCODE"], ["type", "text", "name", "AC_PIN", "placeholder", " ", "id", "AC_PIN", "formControlName", "AC_PIN", "disabled", "", 1, "form-control"], ["for", "AC_PIN"], ["type", "text", "name", "AC_PHNO", "placeholder", " ", "id", "AC_PHNO", "formControlName", "AC_PHNO", "disabled", "", 1, "form-control"], ["for", "AC_PHNO"], ["type", "text", "name", "AC_MOBNO", "placeholder", " ", "id", "AC_MOBNO", "formControlName", "AC_MOBNO", "disabled", "", 1, "form-control"], ["for", "AC_MOBNO"], ["type", "text", "name", "AC_EMAIL", "placeholder", " ", "id", "AC_EMAIL", "formControlName", "AC_EMAIL", "disabled", "", 1, "form-control"], ["for", "AC_EMAIL"], [1, "col-sm-5"], ["type", "checkbox", "id", "AC_ADDFLAG", "formControlName", "AC_ADDFLAG", 1, "border-checkbox", 3, "click"], ["for", "AC_ADDFLAG", 1, "border-checkbox-label"], [1, "col-sm", 2, "float", "right", "margin-top", "6px"], ["type", "text", "name", "AC_THONO", "placeholder", " ", "id", "AC_THONO", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "25", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "formControlName", "AC_THONO", 1, "form-control"], ["for", "AC_THONO"], ["class", "\n                                  form-group form-primary form-static-label\n                                ", "class", "alert alert-danger", 4, "ngIf"], ["type", "text", "name", "AC_TWARD", "placeholder", " ", "id", "AC_TWARD", "pattern", "^[A-Za-z\\./ -]+$", "maxlength", "10", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_TWARD", 1, "form-control"], ["for", "AC_TWARD"], ["type", "text", "name", "AC_TGALLI", "placeholder", " ", "id", "AC_TGALLI", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "formControlName", "AC_TGALLI", 1, "form-control"], ["for", "AC_TGALLI"], ["type", "text", "name", "AC_TAREA", "placeholder", " ", "id", "AC_TAREA", "pattern", "^[A-Za-z\\./ -]+$", "maxlength", "60", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_TAREA", 1, "form-control"], ["for", "AC_TAREA"], ["type", "text", "name", "AC_TADDR", "placeholder", " ", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "id", "AC_TADDR", "formControlName", "AC_TADDR", 1, "form-control"], ["for", "AC_TADDR"], ["id", "AC_TCTCODE", "bindValue", "id", "bindLabel", "CITY_NAME", "formControlName", "AC_TCTCODE", "title", "Compulsory Selection", "placeholder", "City", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "CITY_NAME"], ["type", "text", "name", "AC_TPIN", "placeholder", " ", "id", "AC_TPIN", "pattern", "^[0-9]+$", "minlength", "6", "maxlength", "6", "title", "Input allowed only  0-9", "formControlName", "AC_TPIN", 1, "form-control", 3, "keypress"], ["for", "AC_TPIN"], ["type", "checkbox", "id", "ac_minor", "name", "AC_MINOR", "formControlName", "AC_MINOR", "maxlength", "100", "disabled", "", 1, "border-checkbox", 3, "checked"], ["for", "ac_minor", 1, "border-checkbox-label"], ["type", "text", "name", "AC_MBDATE", "placeholder", " ", "id", "AC_MBDATE", "formControlName", "AC_MBDATE", "disabled", "", 1, "form-control", 3, "focusout"], ["for", "AC_MBDATE"], ["type", "text", "name", "AC_GRDNAME", "placeholder", " ", "id", "AC_GRDNAME", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "maxlength", "100", "formControlName", "AC_GRDNAME", 1, "form-control", 3, "ngClass", "required", "keypress"], ["for", "AC_GRDNAME"], ["type", "text", "name", "AC_GRDRELE", "placeholder", " ", "id", "AC_GRDRELE", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "maxlength", "25", "formControlName", "AC_GRDRELE", 1, "form-control", 3, "ngClass", "required", "keypress"], ["for", "AC_GRDRELE"], ["type", "text", "name", "SIGNATURE_AUTHORITY", "placeholder", " ", "id", "SIGNATURE_AUTHORITY", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "maxlength", "100", "formControlName", "SIGNATURE_AUTHORITY", 1, "form-control", 3, "ngClass", "required", "keypress"], ["for", "SIGNATURE_AUTHORITY"], [2, "color", "dodgerblue"], ["id", "AC_INTROBRANCH", "bindValue", "value", "formControlName", "AC_INTROBRANCH", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "AC_INTROBRANCH"], ["id", "AC_INTROID", "bindValue", "value", "formControlName", "AC_INTROID", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Account Type", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "AC_INTROID"], ["id", "AC_INTRACNO", "bindValue", "value", "formControlName", "AC_INTRACNO", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Account Number", 3, "ngModel", "ngClass", "ngModelChange", "focus"], ["for", "AC_INTRACNO"], ["type", "checkbox", "id", "nomineeId", 1, "border-checkbox", 3, "click"], ["for", "nomineeId", 1, "border-checkbox-label", 3, "ngClass"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], ["type", "checkbox", "id", "jointAccount", 1, "border-checkbox", 3, "click"], ["for", "jointAccount", 1, "border-checkbox-label", 3, "ngClass"], [2, "max-width", "10px"], [2, "max-width", "20px"], [2, "max-width", "15px"], ["type", "checkbox", "id", "powerofattorney", 1, "border-checkbox", 3, "click"], ["for", "powerofattorney", 1, "border-checkbox-label", 3, "ngClass"], ["type", "text", "name", "AC_NNAME", "placeholder", " ", "id", "AC_NNAME", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_NNAME", "maxlength", "100", 1, "form-control", 3, "ngClass", "keypress"], ["for", "AC_NNAME"], ["class", "\n                                        form-group\n                                        form-primary\n                                        form-static-label\n                                      ", "class", "alert alert-danger", 4, "ngIf"], ["type", "text", "name", "AC_NRELA", "placeholder", " ", "id", "AC_NRELA", "pattern", "^[A-Za-z\\./ -]+$", "maxlength", "25", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_NRELA", 1, "form-control", 3, "ngClass", "keypress"], ["for", "AC_NRELA"], ["type", "text", "placeholder", "DD/MM/YYYY", "name", "AC_NDATE", "id", "AC_NDATE", "formControlName", "AC_NDATE", "bsDatepicker", "", 1, "form-control", 3, "max", "ngModel", "bsConfig", "ngModelChange"], ["for", "AC_NDATE"], ["type", "text", "name", "AGE", "placeholder", " ", "pattern", "^[0-9]+$", "min", "1", "max", "100", "title", "Input allowed only 0-9", "id", "AGE", "formControlName", "AGE", 1, "form-control", 2, "text-align", "right", 3, "focusout", "keypress"], ["for", "AGE"], ["type", "text", "name", "AC_NHONO", "placeholder", " ", "id", "AC_NHONO", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "25", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "formControlName", "AC_NHONO", 1, "form-control"], ["for", "AC_NHONO"], ["type", "text", "name", "AC_NWARD", "placeholder", " ", "id", "AC_NWARD", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "10", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_NWARD", 1, "form-control"], ["for", "AC_NWARD"], ["type", "text", "name", "AC_NGALLI", "placeholder", " ", "id", "AC_NGALLI", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "40", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "formControlName", "AC_NGALLI", 1, "form-control"], ["for", "AC_NGALLI"], ["type", "text", "name", "AC_NAREA", "placeholder", " ", "id", "AC_NAREA", "pattern", "^[A-Za-z\\./ -]+$", "maxlength", "60", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_NAREA", 1, "form-control"], ["for", "AC_NAREA"], ["type", "text", "name", "AC_NADDR", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "id", "AC_NADDR", "formControlName", "AC_NADDR", 1, "form-control"], ["for", "AC_NADDR"], ["id", "AC_NCTCODE", "bindLabel", "CITY_NAME", "formControlName", "AC_NCTCODE", "placeholder", "City", 3, "items", "ngModel", "ngModelChange"], ["for", "AC_NCTCODE"], ["type", "text", "name", "AC_NPIN", "placeholder", " ", "id", "AC_NPIN", "pattern", "^[0-9]+$", "minlength", "6", "maxlength", "6", "title", "Input allowed only  0-9", "formControlName", "AC_NPIN", 1, "form-control", 3, "keypress"], ["for", "AC_NPIN"], [1, "row", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "top", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], ["id", "deletebutton", "placement", "right", "ngbTooltip", "Delete", 1, "fa", "fa-fw", "fa-trash-o", 3, "click"], [1, "td_right", 3, "ngClass"], [1, "td_center", 3, "ngClass"], [1, "td_left", 3, "ngClass"], ["colspan", "12", 1, "no-data-available", 2, "text-align", "center"], ["id", "JOINT_AC_CUSTID", "bindValue", "value", "bindLabel", "label", "formControlName", "JOINT_AC_CUSTID", "title", "Compulsory Selection", "placeholder", "Customer Id", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "JOINT_AC_CUSTID"], ["type", "text", "name", "JOINT_ACNAME", "placeholder", " ", "id", "JOINT_ACNAME", "formControlName", "JOINT_ACNAME", "disabled", "", 1, "form-control"], ["for", "JOINT_ACNAME"], ["type", "checkbox", "name", "OPERATOR", "id", "operator", "formControlName", "OPERATOR", "checked", "", 1, "border-checkbox"], ["for", "operator", 1, "border-checkbox-label"], ["type", "button", "class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["colspan", "4", 1, "no-data-available", 2, "text-align", "center"], ["type", "text", "name", "ATTERONEY_NAME", "placeholder", " ", "id", "ATTERONEY_NAME", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "ATTERONEY_NAME", "maxlength", "100", 1, "form-control", 3, "keypress"], ["for", "ATTERONEY_NAME"], ["class", "\n                                      form-group form-primary form-static-label\n                                    ", "class", "alert alert-danger", 4, "ngIf"], ["type", "text", "placeholder", "DD/MM/YYYY", "name", "DATE_APPOINTED", "id", "DATE_APPOINTED", "formControlName", "DATE_APPOINTED", "bsDatepicker", "", 1, "form-control", 3, "max", "maxDate", "bsConfig", "focusout"], ["for", "DATE_APPOINTED"], ["type", "text", "placeholder", "DD/MM/YYYY", "name", "DATE_EXPIRY", "id", "DATE_EXPIRY", "formControlName", "DATE_EXPIRY", "bsDatepicker", "", 1, "form-control", 3, "max", "minDate", "bsConfig", "bsValue", "focusout"], ["for", "DATE_EXPIRY"], [3, "ngClass"], [1, "td_center", 2, "max-width", "15px", 3, "ngClass"], [2, "max-width", "25px"], ["alt", "docu", 1, "form-control", 2, "width", "100%", "height", "100%", 3, "src"], [2, "align-items", "center"], ["placement", "right", "ngbTooltip", "Show Image", 1, "fa", "fa-fw", "fa-eye", "field-icon", 2, "font-size", "20px", "color", "#0f459b", "cursor", "pointer", 3, "click"], ["colspan", "3", 1, "no-data-available", 2, "text-align", "center"], ["id", "icon", "placement", "bottom", "ngbTooltip", "Add Interest Instruction", 1, "fa", "fa-fw", "fa-plus-circle", "field-icon", 3, "click"], [1, "col-sm", 2, "float", "right"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], ["colspan", "16", 1, "no-data-available"]], template: function TermDepositsMasterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Deposit Account Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_Template_ng_select_ngModelChange_18_listener($event) { return ctx.selectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, TermDepositsMasterComponent_ng_option_19_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Scheme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, TermDepositsMasterComponent_div_24_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TermDepositsMasterComponent_Template_ng_select_ngModelChange_28_listener($event) { return ctx.id = $event; })("change", function TermDepositsMasterComponent_Template_ng_select_change_28_listener($event) { return ctx.getCustomer($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, TermDepositsMasterComponent_ng_option_29_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Customer Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_Template_span_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r261); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](37); return _r5.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, TermDepositsMasterComponent_div_35_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "app-modal-basic", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Customer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r261); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](37); return _r5.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "perfect-scrollbar", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "app-customer-id", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("newCustomerEvent", function TermDepositsMasterComponent_Template_app_customer_id_newCustomerEvent_46_listener($event) { return ctx.addNewCustomer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TermDepositsMasterComponent_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r261); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](37); _r5.hide(); return ctx.onCloseModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, TermDepositsMasterComponent_div_69_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "ngb-tabset", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "ngb-tab", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, TermDepositsMasterComponent_ng_template_75_Template, 173, 64, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "ngb-tab", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, TermDepositsMasterComponent_ng_template_77_Template, 91, 8, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "ngb-tab", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, TermDepositsMasterComponent_ng_template_79_Template, 68, 26, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "ngb-tab", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, TermDepositsMasterComponent_ng_template_81_Template, 101, 19, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "ngb-tab", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, TermDepositsMasterComponent_ng_template_83_Template, 34, 5, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "ngb-tab", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](85, TermDepositsMasterComponent_ng_template_85_Template, 32, 7, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "table", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](94, TermDepositsMasterComponent_tbody_94_Template, 2, 1, "tbody", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, TermDepositsMasterComponent_tbody_95_Template, 4, 0, "tbody", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "tfoot", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "tr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](99, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](103, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](105, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](109, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](111, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](113, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](115, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](117, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](119, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](121, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](123, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](125, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](127, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](129, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](131, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedValue)("disabled", ctx.AC_TYPE)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c2, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TYPE"].invalid && (ctx.angForm.controls["AC_TYPE"].dirty || ctx.angForm.controls["AC_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c2, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Cust_ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_CUSTID"].invalid && (ctx.angForm.controls["AC_CUSTID"].dirty || ctx.angForm.controls["AC_CUSTID"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.multiJointAC == null ? null : ctx.multiJointAC.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.termDepositMaster == null ? null : ctx.termDepositMaster.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.termDepositMaster == null ? null : ctx.termDepositMaster.length) == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTooltip"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_30__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__["PerfectScrollbarComponent"], _customer_id_customer_id_component__WEBPACK_IMPORTED_MODULE_32__["CustomerIdComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTabContent"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__["ɵr"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_33__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_33__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _instruction_interest_instruction_interest_instruction_component__WEBPACK_IMPORTED_MODULE_34__["InterestInstructionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9jdXN0b21lci90ZXJtLWRlcG9zaXRzLW1hc3Rlci90ZXJtLWRlcG9zaXRzLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOutTranslate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](TermDepositsMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'app-term-deposits-master',
                templateUrl: './term-deposits-master.component.html',
                styleUrls: ['./term-deposits-master.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOutTranslate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _shared_elements_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"] }, { type: _shared_elements_accountcode_service__WEBPACK_IMPORTED_MODULE_11__["AccountcodeService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["CustomerIDMasterDropdownService"] }, { type: _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIdService"] }, { type: _term_deposits_master_service__WEBPACK_IMPORTED_MODULE_14__["TermDepositMasterService"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_15__["SystemMasterParametersService"] }, { type: _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["categoryMasterService"] }, { type: _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["IntrestCategoryMasterDropdownService"] }, { type: _shared_dropdownService_operation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["OperationMasterDropdownService"] }, { type: _shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["CastMasterService"] }, { type: _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["cityMasterService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"] }, { type: _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__["OwnbranchMasterService"] }, { type: _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_23__["SchemeCodeDropdownService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"] }, { type: _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_25__["SchemeAccountNoService"] }, { type: _utility_scheme_parameters_term_deposit_scheme_term_deposit_scheme_service__WEBPACK_IMPORTED_MODULE_26__["TermDepositSchemeService"] }, { type: _instruction_interest_instruction_interest_instruction_service__WEBPACK_IMPORTED_MODULE_27__["InterestInstructionService"] }]; }, { childMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], getUserData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: false }]
        }], ctdTabset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['ctdTabset']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/master/customer/term-deposits-master/term-deposits-master.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/master/customer/term-deposits-master/term-deposits-master.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TermDepositsMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositsMasterModule", function() { return TermDepositsMasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _term_deposits_master_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./term-deposits-master-routing.module */ "./src/app/theme/master/customer/term-deposits-master/term-deposits-master-routing.module.ts");
/* harmony import */ var _term_deposits_master_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./term-deposits-master.component */ "./src/app/theme/master/customer/term-deposits-master/term-deposits-master.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/elements/scheme-code.service */ "./src/app/shared/elements/scheme-code.service.ts");
/* harmony import */ var _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../customer-id/customer-id.module */ "./src/app/theme/master/customer/customer-id/customer-id.module.ts");
/* harmony import */ var _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/customer-id-master-dropdown.service */ "./src/app/shared/dropdownService/customer-id-master-dropdown.service.ts");
/* harmony import */ var _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/category-master-dropdown.service */ "./src/app/shared/dropdownService/category-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/city-master-dropdown.service */ "./src/app/shared/dropdownService/city-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_operation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/dropdownService/operation-master-dropdown.service */ "./src/app/shared/dropdownService/operation-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/dropdownService/interest-category-master-dropdown.service */ "./src/app/shared/dropdownService/interest-category-master-dropdown.service.ts");
/* harmony import */ var _shared_elements_title_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/elements/title.service */ "./src/app/shared/elements/title.service.ts");
/* harmony import */ var _shared_elements_accountcode_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/elements/accountcode.service */ "./src/app/shared/elements/accountcode.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _term_deposits_master_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./term-deposits-master.service */ "./src/app/theme/master/customer/term-deposits-master/term-deposits-master.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _utility_scheme_parameters_term_deposit_scheme_term_deposit_scheme_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service */ "./src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _instruction_interest_instruction_interest_instruction_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../instruction/interest-instruction/interest-instruction.module */ "./src/app/theme/master/instruction/interest-instruction/interest-instruction.module.ts");
/* harmony import */ var _instruction_interest_instruction_interest_instruction_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../instruction/interest-instruction/interest-instruction.service */ "./src/app/theme/master/instruction/interest-instruction/interest-instruction.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");

































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class TermDepositsMasterModule {
}
TermDepositsMasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermDepositsMasterModule });
TermDepositsMasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermDepositsMasterModule_Factory(t) { return new (t || TermDepositsMasterModule)(); }, providers: [
        _shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OwnbranchMasterService"],
        ,
        _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__["CustomerIdService"], _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIDMasterDropdownService"],
        _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["cityMasterService"],
        _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["SchemeCodeDropdownService"],
        _shared_dropdownService_operation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["OperationMasterDropdownService"], _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["categoryMasterService"],
        _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["IntrestCategoryMasterDropdownService"], _shared_elements_accountcode_service__WEBPACK_IMPORTED_MODULE_19__["AccountcodeService"],
        _shared_elements_title_service__WEBPACK_IMPORTED_MODULE_18__["TitleService"],
        _utility_scheme_parameters_term_deposit_scheme_term_deposit_scheme_service__WEBPACK_IMPORTED_MODULE_23__["TermDepositSchemeService"],
        _instruction_interest_instruction_interest_instruction_service__WEBPACK_IMPORTED_MODULE_26__["InterestInstructionService"],
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        _term_deposits_master_service__WEBPACK_IMPORTED_MODULE_21__["TermDepositMasterService"],
        _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_22__["SystemMasterParametersService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
        _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_24__["SchemeAccountNoService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _term_deposits_master_routing_module__WEBPACK_IMPORTED_MODULE_4__["TermDepositsMasterRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_9__["CustomerIdModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__["PerfectScrollbarModule"],
            _instruction_interest_instruction_interest_instruction_module__WEBPACK_IMPORTED_MODULE_25__["InterestInstructionModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_28__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_28__["DatepickerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermDepositsMasterModule, { declarations: [_term_deposits_master_component__WEBPACK_IMPORTED_MODULE_5__["TermDepositsMasterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _term_deposits_master_routing_module__WEBPACK_IMPORTED_MODULE_4__["TermDepositsMasterRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_9__["CustomerIdModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__["PerfectScrollbarModule"],
        _instruction_interest_instruction_interest_instruction_module__WEBPACK_IMPORTED_MODULE_25__["InterestInstructionModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_28__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_28__["DatepickerModule"]], exports: [_term_deposits_master_component__WEBPACK_IMPORTED_MODULE_5__["TermDepositsMasterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositsMasterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _term_deposits_master_routing_module__WEBPACK_IMPORTED_MODULE_4__["TermDepositsMasterRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_9__["CustomerIdModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__["PerfectScrollbarModule"],
                    _instruction_interest_instruction_interest_instruction_module__WEBPACK_IMPORTED_MODULE_25__["InterestInstructionModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_28__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_28__["DatepickerModule"].forRoot()
                ],
                declarations: [_term_deposits_master_component__WEBPACK_IMPORTED_MODULE_5__["TermDepositsMasterComponent"]],
                exports: [_term_deposits_master_component__WEBPACK_IMPORTED_MODULE_5__["TermDepositsMasterComponent"]],
                providers: [
                    _shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OwnbranchMasterService"],
                    ,
                    _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__["CustomerIdService"], _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIDMasterDropdownService"],
                    _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["cityMasterService"],
                    _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["SchemeCodeDropdownService"],
                    _shared_dropdownService_operation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["OperationMasterDropdownService"], _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["categoryMasterService"],
                    _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["IntrestCategoryMasterDropdownService"], _shared_elements_accountcode_service__WEBPACK_IMPORTED_MODULE_19__["AccountcodeService"],
                    _shared_elements_title_service__WEBPACK_IMPORTED_MODULE_18__["TitleService"],
                    _utility_scheme_parameters_term_deposit_scheme_term_deposit_scheme_service__WEBPACK_IMPORTED_MODULE_23__["TermDepositSchemeService"],
                    _instruction_interest_instruction_interest_instruction_service__WEBPACK_IMPORTED_MODULE_26__["InterestInstructionService"],
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                    _term_deposits_master_service__WEBPACK_IMPORTED_MODULE_21__["TermDepositMasterService"],
                    _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_22__["SystemMasterParametersService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
                    _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_24__["SchemeAccountNoService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/term-deposits-master/term-deposits-master.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/master/customer/term-deposits-master/term-deposits-master.service.ts ***!
  \********************************************************************************************/
/*! exports provided: TermDepositMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositMasterService", function() { return TermDepositMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class TermDepositMasterService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/term-deposits-master/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data !');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/term-deposits-master/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/term-deposits-master/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/term-deposits-master/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //approve master
    approve(data) {
        return this.http.post(this.url + '/term-deposits-master/approve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //reject master
    reject(data) {
        return this.http.post(this.url + '/term-deposits-master/reject', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
TermDepositMasterService.ɵfac = function TermDepositMasterService_Factory(t) { return new (t || TermDepositMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
TermDepositMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TermDepositMasterService, factory: TermDepositMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: TermDepositSchemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositSchemeService", function() { return TermDepositSchemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class TermDepositSchemeService {
    constructor(http) {
        this.http = http;
        // API 
        // // term-deposit-scheme";
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/term-deposit-scheme/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            let errorMessage = 'Please add valid length';
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Kindly Add Valid Length !');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/term-deposit-scheme/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/term-deposit-scheme/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/term-deposit-scheme/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getAllData() {
        return this.http.get(this.url + '/term-deposit-scheme/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
TermDepositSchemeService.ɵfac = function TermDepositSchemeService_Factory(t) { return new (t || TermDepositSchemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
TermDepositSchemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TermDepositSchemeService, factory: TermDepositSchemeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositSchemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~centralised-passing-centralisedPassing-module~term-deposits-master-term-deposits-master-module.js.map