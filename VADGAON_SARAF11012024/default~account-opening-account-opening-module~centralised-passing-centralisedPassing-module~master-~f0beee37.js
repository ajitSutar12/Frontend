(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~account-opening-account-opening-module~centralised-passing-centralisedPassing-module~master-~f0beee37"],{

/***/ "./src/app/shared/dropdownService/clearing-branch-master-dropdown.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/dropdownService/clearing-branch-master-dropdown.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ClearingbranchMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearingbranchMasterService", function() { return ClearingbranchMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ClearingbranchMasterService {
    constructor(http) {
        this.http = http;
        this.ClearingbranchMasterObject = new Array();
        // API 
        // // clearing-branch-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getClearingbranchList() {
        this.ClearingbranchMasterObject = [];
        return this.http.get(this.url + '/clearing-branch-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.NAME, value: element.id };
                this.ClearingbranchMasterObject.push(obj);
            });
            return this.ClearingbranchMasterObject;
        }));
    }
}
ClearingbranchMasterService.ɵfac = function ClearingbranchMasterService_Factory(t) { return new (t || ClearingbranchMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ClearingbranchMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClearingbranchMasterService, factory: ClearingbranchMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClearingbranchMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/elements/a1.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/elements/a1.service.ts ***!
  \***********************************************/
/*! exports provided: A1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A1Service", function() { return A1Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class A1Service {
    getCharacters() {
        return this.cloneOptions(A1Service.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(A1Service.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(A1Service.PLAYER_ONE);
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
A1Service.PLAYER_ONE = [
    { value: '0', label: '1' },
    { value: '1', label: '2' },
    { value: '2', label: '3' }
];
A1Service.ɵfac = function A1Service_Factory(t) { return new (t || A1Service)(); };
A1Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: A1Service, factory: A1Service.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](A1Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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

/***/ "./src/app/shared/elements/scheme1.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/elements/scheme1.service.ts ***!
  \****************************************************/
/*! exports provided: Scheme1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheme1Service", function() { return Scheme1Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class Scheme1Service {
    getCharacters() {
        return this.cloneOptions(Scheme1Service.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(Scheme1Service.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(Scheme1Service.PLAYER_ONE);
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
Scheme1Service.PLAYER_ONE = [
    { value: '0', label: '111' },
    { value: '1', label: '222' },
    { value: '2', label: '333' },
    { value: '3', label: 'NA' }
];
Scheme1Service.ɵfac = function Scheme1Service_Factory(t) { return new (t || Scheme1Service)(); };
Scheme1Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Scheme1Service, factory: Scheme1Service.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Scheme1Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/account-opening/account-opening-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/master/customer/account-opening/account-opening-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AccountOpeningRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountOpeningRoutingModule", function() { return AccountOpeningRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _account_opening_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-opening.component */ "./src/app/theme/master/customer/account-opening/account-opening.component.ts");





const routes = [
    {
        path: '',
        component: _account_opening_component__WEBPACK_IMPORTED_MODULE_2__["AccountOpeningComponent"],
        data: {
            title: 'Investment Module',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class AccountOpeningRoutingModule {
}
AccountOpeningRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountOpeningRoutingModule });
AccountOpeningRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountOpeningRoutingModule_Factory(t) { return new (t || AccountOpeningRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountOpeningRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountOpeningRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/account-opening/account-opening.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/master/customer/account-opening/account-opening.component.ts ***!
  \************************************************************************************/
/*! exports provided: AccountOpeningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountOpeningComponent", function() { return AccountOpeningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs-compat */ "./node_modules/rxjs-compat/Rx.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/dropdownService/bank-Master-dropdown.service */ "./src/app/shared/dropdownService/bank-Master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_clearing_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/clearing-branch-master-dropdown.service */ "./src/app/shared/dropdownService/clearing-branch-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _policy_settings_information_bank_master_bank_master_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../policy-settings/information/bank-master/bank-master.service */ "./src/app/theme/master/policy-settings/information/bank-master/bank-master.service.ts");
/* harmony import */ var _account_opening_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./account-opening.service */ "./src/app/theme/master/customer/account-opening/account-opening.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_theme_utility_scheme_parameters_term_deposit_scheme_term_deposit_scheme_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service */ "./src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../button.directive */ "./src/app/theme/button.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






// Angular Datatable Directive  




















function AccountOpeningComponent_ng_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r33.label, "");
} }
function AccountOpeningComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_25_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r3.angForm.controls["AC_TYPE"].errors.required);
} }
function AccountOpeningComponent_ng_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r35.label, "");
} }
function AccountOpeningComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_42_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["INVEST_BANK"].errors == null ? null : ctx_r6.angForm.controls["INVEST_BANK"].errors.required);
} }
function AccountOpeningComponent_ng_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r37.label, "");
} }
function AccountOpeningComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_53_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["INVEST_BRANCH"].errors == null ? null : ctx_r9.angForm.controls["INVEST_BRANCH"].errors.required);
} }
function AccountOpeningComponent_div_69_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_69_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r10.angForm.controls["AC_REF_RECEIPTNO"].errors == null ? null : ctx_r10.angForm.controls["AC_REF_RECEIPTNO"].errors.required) || (ctx_r10.angForm.controls["AC_REF_RECEIPTNO"].errors == null ? null : ctx_r10.angForm.controls["AC_REF_RECEIPTNO"].errors.pattern) || (ctx_r10.angForm.controls["AC_REF_RECEIPTNO"].errors == null ? null : ctx_r10.angForm.controls["AC_REF_RECEIPTNO"].errors.maxlength));
} }
function AccountOpeningComponent_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_81_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.angForm.controls["AC_OPDATE"].errors == null ? null : ctx_r13.angForm.controls["AC_OPDATE"].errors.required);
} }
function AccountOpeningComponent_div_93_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_93_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.angForm.controls["AC_ASON_DATE"].errors == null ? null : ctx_r16.angForm.controls["AC_ASON_DATE"].errors.required);
} }
function AccountOpeningComponent_div_106_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_106_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r17.angForm.controls["AC_MONTHS"].errors == null ? null : ctx_r17.angForm.controls["AC_MONTHS"].errors.pattern) || (ctx_r17.angForm.controls["AC_MONTHS"].errors == null ? null : ctx_r17.angForm.controls["AC_MONTHS"].errors.required));
} }
function AccountOpeningComponent_div_115_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_115_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r18.angForm.controls["AC_DAYS"].errors == null ? null : ctx_r18.angForm.controls["AC_DAYS"].errors.pattern) || (ctx_r18.angForm.controls["AC_DAYS"].errors == null ? null : ctx_r18.angForm.controls["AC_DAYS"].errors.required));
} }
function AccountOpeningComponent_div_127_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_127_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.angForm.controls["AC_EXPDT"].errors == null ? null : ctx_r21.angForm.controls["AC_EXPDT"].errors.required);
} }
function AccountOpeningComponent_div_137_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_137_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r22.angForm.controls["AC_SCHMAMT"].errors == null ? null : ctx_r22.angForm.controls["AC_SCHMAMT"].errors.pattern) || (ctx_r22.angForm.controls["AC_SCHMAMT"].errors == null ? null : ctx_r22.angForm.controls["AC_SCHMAMT"].errors.required));
} }
function AccountOpeningComponent_div_146_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only . 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_146_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r23.angForm.controls["AC_INTRATE"].errors == null ? null : ctx_r23.angForm.controls["AC_INTRATE"].errors.pattern) || (ctx_r23.angForm.controls["AC_INTRATE"].errors == null ? null : ctx_r23.angForm.controls["AC_INTRATE"].errors.required));
} }
function AccountOpeningComponent_div_153_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_153_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.angForm.controls["AC_MATUAMT"].errors == null ? null : ctx_r24.angForm.controls["AC_MATUAMT"].errors.pattern);
} }
function AccountOpeningComponent_button_163_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountOpeningComponent_button_163_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.submit($event); })("keydown.Tab", function AccountOpeningComponent_button_163_Template_button_keydown_Tab_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_button_164_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountOpeningComponent_button_164_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r51.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_button_165_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountOpeningComponent_button_165_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.addNewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_button_167_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountOpeningComponent_button_167_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r55.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_button_169_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountOpeningComponent_button_169_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r57.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_button_171_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountOpeningComponent_button_171_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r59.Approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_button_172_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountOpeningComponent_button_172_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r61.unApprove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Unapprove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_173_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountOpeningComponent_div_173_tbody_8_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); const data_r67 = ctx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); ctx_r68.editClickHandler(data_r67.id, 0); return ctx_r68.gotoTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r67.AC_TYPE === "" || data_r67.AC_TYPE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r67.AC_TYPE === "" || data_r67.AC_TYPE == null ? "-" : data_r67.DPMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r67.AC_NO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r67.AC_NO === "" ? "-" : data_r67.BANKACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r67.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r67.AC_NAME === "" ? "-" : data_r67.AC_NAME, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r67.INVEST_BANK === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r67.INVEST_BANK === "" ? "-" : data_r67.INVEST_BANK, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r67.INVEST_BRANCH === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r67.INVEST_BRANCH === "" ? "-" : data_r67.INVEST_BRANCH, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r67.AC_OPDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r67.AC_OPDATE === "" ? "-" : data_r67.AC_OPDATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r67.AC_ASON_DATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r67.AC_ASON_DATE === "" ? "-" : data_r67.AC_ASON_DATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r67.AC_EXPDT === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r67.AC_EXPDT === "" ? "-" : data_r67.AC_EXPDT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r67.AC_REF_RECEIPTNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r67.AC_REF_RECEIPTNO === "" ? "-" : data_r67.AC_REF_RECEIPTNO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r67.AC_INTRATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r67.AC_INTRATE === "" ? "-" : data_r67.AC_INTRATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r67.AC_SCHMAMT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r67.AC_SCHMAMT === "" ? "-" : data_r67.AC_SCHMAMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r67.AC_MATUAMT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r67.AC_MATUAMT === "" ? "-" : data_r67.AC_MATUAMT, "");
} }
function AccountOpeningComponent_div_173_tbody_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountOpeningComponent_div_173_tbody_8_tr_1_Template, 27, 24, "tr", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r63.investmentMaster);
} }
function AccountOpeningComponent_div_173_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AccountOpeningComponent_div_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AccountOpeningComponent_div_173_tbody_8_Template, 2, 1, "tbody", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AccountOpeningComponent_div_173_tbody_9_Template, 4, 0, "tbody", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tfoot", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r32.dtExportButtonOptions)("dtTrigger", ctx_r32.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r32.investmentMaster == null ? null : ctx_r32.investmentMaster.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r32.investmentMaster == null ? null : ctx_r32.investmentMaster.length) == 0);
} }
const _c0 = function (a0) { return { "form-submitted": a0 }; };
const _c1 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
// Handling datatable data
class DataTableResponse {
}
class AccountOpeningComponent {
    constructor(fb, bankMasterService, ownbranchMasterService, schemeCodeDropdownService, bankService, investmentService, http, _termDepositScheme, systemParameter) {
        this.fb = fb;
        this.bankMasterService = bankMasterService;
        this.ownbranchMasterService = ownbranchMasterService;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.bankService = bankService;
        this.investmentService = investmentService;
        this.http = http;
        this._termDepositScheme = _termDepositScheme;
        this.systemParameter = systemParameter;
        this.reloadTablePassing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //api 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.formSubmitted = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_compat__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        //Datatable variable
        this.dtExportButtonOptions = {};
        this.dtExportOptions = {};
        //variables for pagination
        this.page = 1;
        this.itemsPerPage = 10;
        this.currentJustify = 'start';
        this.active = 1;
        this.activeKeep = 1;
        //variable to get ID to update
        this.updateID = 0;
        // Filter Variable
        this.filterData = {};
        //Scheme type variable
        this.schemeType = 'IV';
        //variables for  add and update button
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.id = '';
        this.AC_TYPE = false;
        this.code = null;
        this.ngBank = null;
        this.ngBranch = null;
        this.DatatableHideShow = true;
        this.rejectShow = false;
        this.approveShow = false;
        this.unapproveShow = false;
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate());
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate());
        this.systemParameter.getFormData(1).subscribe(data => {
            this.maxDate = moment__WEBPACK_IMPORTED_MODULE_8__(data.CURRENT_DATE, 'DD/MM/YYYY');
            this.maxDate = this.maxDate._d;
            this.logDate = data.CURRENT_DATE;
        });
    }
    ngOnInit() {
        this.createForm();
        // Fetching Server side data
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
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
                let data = localStorage.getItem('user');
                let result = JSON.parse(data);
                let branchCode = result.branch.id;
                dataTableParameters['branchCode'] = branchCode;
                dataTableParameters['filterData'] = this.filterData;
                this.http
                    .post(this.url + '/investment', dataTableParameters).subscribe(resp => {
                    this.investmentMaster = resp.data;
                    console.log('this.investmentMaster', this.investmentMaster);
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
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Account Number',
                    data: 'BANKACNO'
                },
                {
                    title: 'Member Name',
                    data: 'AC_NAME'
                },
                {
                    title: 'Bank Code',
                    data: 'INVEST_BANK'
                },
                {
                    title: 'Branch Code',
                    data: 'INVEST_BRANCH'
                },
                {
                    title: 'Account Open Date',
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
                    title: 'Receipt Number',
                    data: 'AC_REF_RECEIPTNO'
                },
                {
                    title: 'Interest Rate',
                    data: 'AC_INTRATE'
                },
                {
                    title: 'Deposit Amount',
                    data: 'AC_SCHMAMT'
                },
                {
                    title: 'Maturity Amount',
                    data: 'AC_MATUAMT'
                },
            ],
            dom: 'Blrtip',
        };
        this.bankMasterService.getBankList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(data => {
            this.BankCode = data;
        });
        this.ownbranchMasterService.getClearingbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(data => {
            this.branch_code = data;
        });
        this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(data => {
            this.scheme = data;
            this.code = this.scheme[0].value;
        });
        this._termDepositScheme.getFormData(this.code).subscribe(data => {
            if (data.UNIT_OF_PERIOD == "B") {
                this.angForm.controls['AC_MONTHS'].enable();
                this.angForm.controls['AC_DAYS'].enable();
            }
            else if (data.UNIT_OF_PERIOD == "D") {
                this.angForm.controls['AC_MONTHS'].disable();
                this.angForm.controls['AC_DAYS'].enable();
            }
            else if (data.UNIT_OF_PERIOD == "M") {
                this.angForm.controls['AC_MONTHS'].enable();
                this.angForm.controls['AC_DAYS'].disable();
            }
        });
    }
    createForm() {
        this.angForm = this.fb.group({
            AC_ACNOTYPE: ['IV'],
            AC_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_NO: [''],
            INVEST_BANK: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            INVEST_BRANCH: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_NAME: [''],
            AC_REF_RECEIPTNO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_OPDATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_ASON_DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_EXPDT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_MONTHS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_DAYS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_SCHMAMT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_INTRATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_MATUAMT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_CLOSEDT: ['']
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.angForm.controls['INVEST_BRANCH'].enable();
            this.ngBranch = result.branch.id;
        }
        else {
            this.angForm.controls['INVEST_BRANCH'].disable();
            this.angForm.patchValue({
                'INVEST_BRANCH': result.branch.id
            });
            this.ngBranch = result.branch.id;
        }
    }
    getBranch(event) {
        this.ngBranch = event.value;
    }
    submit() {
        const formVal = this.angForm.value;
        //get bank code and branch code from session
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;
        let bankCode = Number(result.branch.syspara.BANK_CODE);
        let schecode;
        this.scheme.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (element.value == this.code) {
                schecode = element.name;
            }
        }));
        const dataToSend = {
            'branchCode': branchCode,
            'bankCode': bankCode,
            'schemeCode': schecode,
            'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
            'AC_TYPE': formVal.AC_TYPE,
            'AC_NO': formVal.AC_NO,
            'INVEST_BANK': formVal.INVEST_BANK,
            'INVEST_BRANCH': this.ngBranch,
            'AC_NAME': formVal.AC_NAME,
            'AC_REF_RECEIPTNO': formVal.AC_REF_RECEIPTNO,
            'AC_OPDATE': (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == null || formVal.AC_OPDATE == 'Invalid date') ? '' : moment__WEBPACK_IMPORTED_MODULE_8__(formVal.AC_OPDATE).format('DD/MM/YYYY'),
            'AC_ASON_DATE': (formVal.AC_ASON_DATE == '' || formVal.AC_ASON_DATE == null || formVal.AC_ASON_DATE == 'Invalid date') ? '' : moment__WEBPACK_IMPORTED_MODULE_8__(formVal.AC_ASON_DATE).format('DD/MM/YYYY'),
            'AC_EXPDT': (formVal.AC_EXPDT == '' || formVal.AC_EXPDT == null || formVal.AC_EXPDT == 'Invalid date') ? '' : formVal.AC_EXPDT,
            'AC_MONTHS': formVal.AC_MONTHS,
            'AC_DAYS': formVal.AC_DAYS,
            'AC_SCHMAMT': formVal.AC_SCHMAMT,
            'AC_INTRATE': formVal.AC_INTRATE,
            'AC_MATUAMT': formVal.AC_MATUAMT,
            'AC_CLOSEDT': (formVal.AC_CLOSEDT == '' || formVal.AC_CLOSEDT == null || formVal.AC_CLOSEDT == 'Invalid date') ? '' : moment__WEBPACK_IMPORTED_MODULE_8__(formVal.AC_CLOSEDT).format('DD/MM/YYYY'),
        };
        this.investmentService.postData(dataToSend).subscribe(data => {
            // Swal.fire('Success!', 'Data Added Successfully !', 'success');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'success',
                title: 'Account Created successfully!',
                html: '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
                    '<b>ACCOUNT NO : </b>' + data.BANKACNO + '<br>'
            });
            this.formSubmitted = false;
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.ajax.reload();
            });
        }, (error) => {
            console.log(error);
        });
        this.ngBank = null;
        this.addNewData();
        //To clear form
        this.resetForm();
    }
    addNewData() {
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.angForm.controls['AC_CLOSEDT'].disable();
        this.resetForm();
    }
    // Reset Function
    resetForm() {
        this.angForm.controls['AC_CLOSEDT'].disable();
        this.code = null;
        this.ngBank = null;
        // this.ngBranch = null
        this.createForm();
    }
    getBankName(event) {
        this.bankService.getFormData(event.value).subscribe(data => {
            this.angForm.patchValue({
                INVEST_BANK: event.value,
                AC_NAME: data.BANK_NAME
            });
        });
    }
    //Method for append data into fields
    editClickHandler(id, status) {
        this.angForm.controls['AC_CLOSEDT'].enable();
        this.investmentService.getFormData(id).subscribe(data => {
            this.updatecheckdata = data;
            if (data.SYSCHNG_LOGIN != null && data.status == 0) {
                this.unapproveShow = true;
                this.showButton = false;
                this.updateShow = false;
                this.newbtnShow = true;
                this.approveShow = false;
                this.rejectShow = false;
            }
            else if (data.SYSCHNG_LOGIN == null && status == 0) {
                this.unapproveShow = false;
                this.showButton = false;
                this.updateShow = true;
                this.newbtnShow = true;
                this.approveShow = false;
                this.rejectShow = false;
            }
            else if (data.SYSCHNG_LOGIN == null && data.status == 1) {
                this.unapproveShow = false;
                this.showButton = false;
                this.updateShow = true;
                this.newbtnShow = true;
                this.approveShow = true;
                this.rejectShow = true;
            }
            else {
                this.approveShow = false;
                this.rejectShow = false;
                this.unapproveShow = false;
                this.showButton = false;
                this.updateShow = false;
                this.newbtnShow = true;
            }
            this.updateID = data.id;
            this.angForm.setValue({
                'AC_ACNOTYPE': data.AC_ACNOTYPE,
                'AC_TYPE': data.AC_TYPE,
                'AC_NO': data.AC_NO,
                'INVEST_BANK': Number(data.INVEST_BANK),
                'INVEST_BRANCH': Number(data.INVEST_BRANCH),
                'AC_NAME': data.AC_NAME,
                'AC_REF_RECEIPTNO': data.AC_REF_RECEIPTNO,
                'AC_OPDATE': data.AC_OPDATE,
                'AC_ASON_DATE': data.AC_ASON_DATE,
                'AC_EXPDT': data.AC_EXPDT,
                'AC_MONTHS': data.AC_MONTHS,
                'AC_DAYS': data.AC_DAYS,
                'AC_SCHMAMT': data.AC_SCHMAMT,
                'AC_INTRATE': data.AC_INTRATE,
                'AC_MATUAMT': data.AC_MATUAMT,
                'AC_CLOSEDT': data.AC_CLOSEDT
            });
            this.ngBank = Number(data.INVEST_BANK);
            this.ngBranch = Number(data.INVEST_BRANCH);
        });
    }
    //Method for update data 
    updateData() {
        let data = this.angForm.value;
        let opdate;
        let AC_ASON_DATE;
        let AC_EXPDT;
        let AC_CLOSEDT;
        if (this.updatecheckdata.AC_OPDATE != data.AC_OPDATE) {
            (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = data.AC_OPDATE, data['AC_OPDATE'] = moment__WEBPACK_IMPORTED_MODULE_8__(opdate).format('DD/MM/YYYY'));
        }
        else {
            data['AC_OPDATE'] = data.AC_OPDATE;
        }
        if (this.updatecheckdata.AC_ASON_DATE != data.AC_ASON_DATE) {
            (data.AC_ASON_DATE == 'Invalid date' || data.AC_ASON_DATE == '' || data.AC_ASON_DATE == null) ? (AC_ASON_DATE = '', data['AC_ASON_DATE'] = AC_ASON_DATE) : (AC_ASON_DATE = data.AC_ASON_DATE, data['AC_ASON_DATE'] = moment__WEBPACK_IMPORTED_MODULE_8__(AC_ASON_DATE).format('DD/MM/YYYY'));
        }
        else {
            data['AC_ASON_DATE'] = data.AC_ASON_DATE;
        }
        if (this.updatecheckdata.AC_EXPDT != data.AC_EXPDT) {
            (data.AC_EXPDT == 'Invalid date' || data.AC_EXPDT == '' || data.AC_EXPDT == null) ? (AC_EXPDT = '', data['AC_EXPDT'] = AC_EXPDT) : (AC_EXPDT = data.AC_EXPDT, data['AC_EXPDT'] = moment__WEBPACK_IMPORTED_MODULE_8__(AC_EXPDT).format('DD/MM/YYYY'));
        }
        else {
            data['AC_EXPDT'] = data.AC_EXPDT;
        }
        if (this.updatecheckdata.AC_CLOSEDT != data.AC_CLOSEDT) {
            (data.AC_CLOSEDT == 'Invalid date' || data.AC_CLOSEDT == '' || data.AC_CLOSEDT == null) ? (AC_CLOSEDT = '', data['AC_CLOSEDT'] = AC_CLOSEDT) : (AC_CLOSEDT = data.AC_CLOSEDT, data['AC_CLOSEDT'] = moment__WEBPACK_IMPORTED_MODULE_8__(AC_CLOSEDT).format('DD/MM/YYYY'));
        }
        else {
            data['AC_CLOSEDT'] = data.AC_CLOSEDT;
        }
        data['id'] = this.updateID;
        this.investmentService.updateData(data).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Success!', 'Record Updated Successfully !', 'success');
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.ajax.reload();
            });
            this.showButton = true;
            this.updateShow = false;
            this.newbtnShow = false;
            this.resetForm();
        });
    }
    ngAfterViewInit() {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then((dtInstance) => {
            $('#mastertable tfoot tr').appendTo('#mastertable thead');
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
    //approve account
    Approve() {
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = {
            id: this.updateID,
            user: user.id
        };
        this.investmentService.approve(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Approved', 'Investment Account approved successfully', 'success');
            var button = document.getElementById('triggerhide');
            button.click();
            this.reloadTablePassing.emit();
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
        this.investmentService.reject(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Rejected', 'Investment Account rejected successfully', 'success');
            var button = document.getElementById('triggerhide');
            button.click();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    closeModal() {
        var button = document.getElementById('triggerhide');
        button.click();
        this.reloadTablePassing.emit();
    }
    // for decimal 
    getDecimal(event) {
        var t = event.target.value;
        event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    }
    getDecimalPoint(event) {
        if (event.target.value != '')
            event.target.value = parseFloat(event.target.value).toFixed(2);
        else
            event.target.value = 0;
    }
    onFocus(ele) {
        ele.open();
    }
    checkmargin(ele) {
        //check  if given value  is below 50
        if (ele.target.value <= 50) {
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Invalid Input", "Please Insert Values Below 50", "error");
            ele.target.value = 0;
        }
    }
    gotoTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    unApprove() {
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = {
            id: this.updateID,
            user: user.id,
            LOG_DATE: this.logDate
        };
        this.investmentService.unapporve(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Unapproved', 'Account unapproved successfully', 'success');
            var button = document.getElementById('trigger');
            button.click();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    setMaturityDate() {
        var maturityDt = moment__WEBPACK_IMPORTED_MODULE_8__(this.angForm.controls['AC_ASON_DATE'].value, 'DD/MM/YYYY');
        let expiryT = moment__WEBPACK_IMPORTED_MODULE_8__(maturityDt, 'DD/MM/YYYY').add(Number(this.angForm.controls['AC_DAYS'].value), 'days').format('DD/MM/YYYY');
        let expiryDate = moment__WEBPACK_IMPORTED_MODULE_8__(expiryT, 'DD/MM/YYYY').add(Number(this.angForm.controls['AC_MONTHS'].value), 'months').format('DD/MM/YYYY');
        this.angForm.patchValue({
            AC_EXPDT: expiryDate
        });
    }
    CheckmonthDays() {
        this._termDepositScheme.getFormData(this.code).subscribe(data => {
            if (data.UNIT_OF_PERIOD == "B") {
                this.angForm.controls['AC_MONTHS'].enable();
                this.angForm.controls['AC_DAYS'].enable();
                if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + " Month and " + data.MIN_DAYS + " Days", "error");
                    this.angForm.controls['AC_MONTHS'].reset();
                    this.angForm.controls['AC_DAYS'].reset();
                }
            }
            else if (data.UNIT_OF_PERIOD == "D") {
                this.angForm.patchValue({
                    AC_MONTHS: ''
                });
                this.angForm.controls['AC_MONTHS'].disable();
                this.angForm.controls['AC_DAYS'].enable();
                if (Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Days Must Be Geater Than " + data.MIN_DAYS + ' Days', "error");
                    this.angForm.controls['AC_DAYS'].reset();
                }
            }
            else if (data.UNIT_OF_PERIOD == "M") {
                this.angForm.patchValue({
                    AC_DAYS: '',
                });
                this.angForm.controls['AC_MONTHS'].enable();
                this.angForm.controls['AC_DAYS'].disable();
                if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH)) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Month Must Be Geater Than " + data.MIN_MONTH + ' Months', "error");
                    this.angForm.controls['AC_MONTHS'].reset();
                }
            }
            if (data.UNIT_OF_PERIOD == "B" && data.IS_AUTO_PERIOD_CALCULATE == '1') {
                this.angForm.controls['AC_MONTHS'].enable();
                this.angForm.controls['AC_DAYS'].enable();
                if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + "and " + data.MIN_DAYS, "error");
                    this.angForm.controls['AC_MONTHS'].reset();
                    this.angForm.controls['AC_DAYS'].reset();
                }
            }
            var date1 = this.angForm.controls['AC_ASON_DATE'].value;
            let expiryT = moment__WEBPACK_IMPORTED_MODULE_8__(date1, 'DD/MM/YYYY').add(Number(this.angForm.controls['AC_DAYS'].value), 'days').format('DD/MM/YYYY');
            let expiryDate = moment__WEBPACK_IMPORTED_MODULE_8__(expiryT, 'DD/MM/YYYY').add(Number(this.angForm.controls['AC_MONTHS'].value), 'months').format('DD/MM/YYYY');
            this.expiryDate = expiryDate;
            this.angForm.patchValue({
                AC_EXPDT: expiryDate
            });
            if (data.MULTIPLE_OF_DAYS != null) {
                if ((Number((this.angForm.controls['AC_DAYS'].value)) % Number((data.MULTIPLE_OF_DAYS))) != 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Days Should Be Multiple Of " + data.MULTIPLE_OF_DAYS, "error");
                }
            }
            if (data.MULTIPLE_OF_MONTH != null) {
                if ((Number((this.angForm.controls['AC_MONTHS'].value)) % Number((data.MULTIPLE_OF_MONTH))) != 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Month Should Be Multiple Of " + data.MULTIPLE_OF_MONTH, "error");
                }
            }
        });
    }
    monthDays() {
        if (this.code != null) {
            this._termDepositScheme.getFormData(this.code).subscribe(data => {
                if (this.angForm.controls['AC_EXPDT'].value != null && this.angForm.controls['AC_EXPDT'].value != '') {
                    var date1 = this.angForm.controls['AC_ASON_DATE'].value;
                    var date2 = this.angForm.controls['AC_EXPDT'].value;
                    var b = moment__WEBPACK_IMPORTED_MODULE_8__(date1, "DD-MM-YYYY");
                    var a = moment__WEBPACK_IMPORTED_MODULE_8__(date2, "DD-MM-YYYY");
                    var bd = moment__WEBPACK_IMPORTED_MODULE_8__(date1, "DD-MM-YYYY");
                    var ab = moment__WEBPACK_IMPORTED_MODULE_8__(date2, "DD-MM-YYYY");
                    var months = a.diff(b, 'months');
                    var days = a.diff(b, 'days');
                    b.add(months, 'months');
                    var Diffmonths = ab.diff(bd, 'months');
                    bd.add(months, 'months');
                    var Diffdays = ab.diff(bd, 'days');
                    if (data.IS_AUTO_PERIOD_CALCULATE == '1') {
                        this.angForm.patchValue({
                            AC_MONTHS: months,
                            AC_DAYS: Diffdays,
                        });
                    }
                    else {
                        if (data.UNIT_OF_PERIOD == "B") {
                            this.angForm.controls['AC_MONTHS'].enable();
                            this.angForm.controls['AC_DAYS'].enable();
                            this.angForm.patchValue({
                                AC_MONTHS: months,
                                AC_DAYS: Diffdays,
                            });
                            if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH) && Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Month And Days Must Be Geater Than " + data.MIN_MONTH + " Month and " + data.MIN_DAYS + " Days", "error");
                                this.angForm.controls['AC_MONTHS'].reset();
                                this.angForm.controls['AC_DAYS'].reset();
                                this.angForm.controls['AC_EXPDT'].reset();
                            }
                            else {
                                this.angForm.patchValue({
                                    AC_MONTHS: months,
                                    AC_DAYS: Diffdays
                                });
                            }
                        }
                        else if (data.UNIT_OF_PERIOD == "D") {
                            this.angForm.patchValue({
                                AC_MONTHS: '',
                                AC_DAYS: days,
                            });
                            this.angForm.controls['AC_MONTHS'].disable();
                            this.angForm.controls['AC_DAYS'].enable();
                            if (Number(this.angForm.controls['AC_DAYS'].value) < Number(data.MIN_DAYS)) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Days Must Be Geater Than " + data.MIN_DAYS + ' Days', "error");
                                this.angForm.controls['AC_DAYS'].reset();
                                this.angForm.controls['AC_EXPDT'].reset();
                            }
                        }
                        else if (data.UNIT_OF_PERIOD == "M") {
                            this.angForm.patchValue({
                                AC_DAYS: '',
                                AC_MONTHS: months,
                            });
                            this.angForm.controls['AC_MONTHS'].enable();
                            this.angForm.controls['AC_DAYS'].disable();
                            if (Number(this.angForm.controls['AC_MONTHS'].value) < Number(data.MIN_MONTH)) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Month Must Be Geater Than " + data.MIN_MONTH + ' Months', "error");
                                this.angForm.controls['AC_MONTHS'].reset();
                                this.angForm.controls['AC_EXPDT'].reset();
                            }
                        }
                    }
                }
            });
            let obj = {
                scheme: this.code,
                // AC_INTCATA: this.ngIntCategory,
                days: Number(this.angForm.controls['AC_DAYS'].value),
                month: Number(this.angForm.controls['AC_MONTHS'].value)
            };
            this.http.post(this.url + '/term-deposits-master/getInterestRate', obj).subscribe(data => {
                // debugger
                let int;
                if (this.angForm.controls['AC_INTRATE'].value != '' && data == 0) {
                    int = this.angForm.controls['AC_INTRATE'].value;
                }
                else {
                    int = data;
                }
                this.angForm.patchValue({
                    AC_INTRATE: int
                });
            });
        }
    }
}
AccountOpeningComponent.ɵfac = function AccountOpeningComponent_Factory(t) { return new (t || AccountOpeningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["BankMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_clearing_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ClearingbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_policy_settings_information_bank_master_bank_master_service__WEBPACK_IMPORTED_MODULE_12__["BankService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_opening_service__WEBPACK_IMPORTED_MODULE_13__["InvestmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_theme_utility_scheme_parameters_term_deposit_scheme_term_deposit_scheme_service__WEBPACK_IMPORTED_MODULE_15__["TermDepositSchemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_16__["SystemMasterParametersService"])); };
AccountOpeningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccountOpeningComponent, selectors: [["app-account-opening"]], viewQuery: function AccountOpeningComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, inputs: { childMessage: "childMessage" }, outputs: { reloadTablePassing: "reloadTablePassing" }, decls: 174, vars: 93, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "appTheme", "", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "card-block"], [1, "col-sm-3"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["appTheme", "", "bindValue", "value", "id", "AC_TYPE", "formControlName", "AC_TYPE", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme", "autofocus", "", 3, "ngModel", "disabled", "selectOnTab", "virtualScroll", "ngClass", "ngModelChange", "focus"], ["ACTYPE", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "AC_TYPE"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-2"], [1, "form-group", "input-group"], ["type", "text", "name", "AC_NO", "placeholder", " ", "id", "AC_NO", "formControlName", "AC_NO", "disabled", "", 1, "form-control", 2, "text-align", "right"], ["for", "AC_NO"], [1, "col-sm"], ["appTheme", "", "bindValue", "value", "id", "INVEST_BANK", "formControlName", "INVEST_BANK", "title", "Compulsory Selection", "required", "", "placeholder", "Bank Code", 3, "ngModel", "virtualScroll", "ngClass", "selectOnTab", "ngModelChange", "change", "focus"], ["INVEST_BANK", ""], ["for", "INVEST_BANK"], ["appTheme", "", "bindValue", "value", "id", "INVEST_BRANCH", "formControlName", "INVEST_BRANCH", "title", "Compulsory Selection", "required", "", "placeholder", "Branch Code", 3, "ngModel", "ngClass", "virtualScroll", "selectOnTab", "ngModelChange", "focus", "change"], ["INVEST_BRANCH", ""], ["for", "INVEST_BRANCH"], [1, "col-sm-4"], ["type", "text", "name", "AC_NAME", "placeholder", " ", "id", "AC_NAME", "pattern", "^[A-Za-z\\./ -]+$", "formControlName", "AC_NAME", "title", "Input allowed only  A-Z a-z  - / . (Space)", "disabled", "", 1, "form-control"], ["for", "AC_NAME"], ["appTheme", "", "type", "text", "name", "AC_REF_RECEIPTNO", "placeholder", " ", "id", "AC_REF_RECEIPTNO", "required", "", "pattern", "^[A-Za-z0-9]+$", "maxlength", "20", "title", "Input allowed only 0-9", "formControlName", "AC_REF_RECEIPTNO", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", "AC_REF_RECEIPTNO"], ["appTheme", "", "appButton", "", "minlength", "10", "maxlength", "10", "type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_OPDATE", "id", "AC_OPDATE", "formControlName", "AC_OPDATE", "bsDatepicker", "", 1, "form-control", 3, "max", "bsConfig", "maxDate", "ngClass", "bsValue", "keydown.Tab", "keypress"], ["date", "", "AC_OPDATE", "bsDatepicker"], ["for", "AC_OPDATE"], ["appTheme", "", "appButton", "", "minlength", "10", "maxlength", "10", "type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_ASON_DATE", "id", "AC_ASON_DATE", "formControlName", "AC_ASON_DATE", "bsDatepicker", "", 1, "form-control", 3, "max", "bsConfig", "maxDate", "ngClass", "bsValue", "keydown.Tab", "keypress"], ["date", "", "AC_ASON_DATE", "bsDatepicker"], ["for", "AC_ASON_DATE"], ["appTheme", "", "type", "text", "name", "AC_MONTHS", "placeholder", " ", "id", "AC_MONTHS", "required", "", "pattern", "^[0-9]+$", "title", "Input allowed only 0-9", "formControlName", "AC_MONTHS", 1, "form-control", 2, "text-align", "right", 3, "change", "ngModelChange", "keypress"], ["for", "AC_MONTHS"], ["appTheme", "", "type", "text", "name", "AC_DAYS", "placeholder", " ", "id", "AC_DAYS", "required", "", "pattern", "^[0-9]+$", "title", "Input allowed only 0-9", "formControlName", "AC_DAYS", 1, "form-control", 2, "text-align", "right", 3, "change", "ngModelChange", "keypress"], ["for", "AC_DAYS"], ["appTheme", "", "appButton", "", "minlength", "10", "maxlength", "10", "type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_EXPDT", "id", "AC_EXPDT", "formControlName", "AC_EXPDT", "bsDatepicker", "", "disabled", "", 1, "form-control", 3, "max", "bsConfig", "minDate", "ngClass", "bsValue", "keydown.Tab", "bsValueChange", "keypress"], ["date", "", "AC_EXPDT", "bsDatepicker"], ["for", "AC_EXPDT"], ["appTheme", "", "type", "text", "name", "AC_SCHMAMT", "placeholder", " ", "id", "AC_SCHMAMT", "required", "", "title", "Input allowed only  0-9", "formControlName", "AC_SCHMAMT", 1, "form-control", 2, "text-align", "right", 3, "ngClass", "keyup", "focusout", "keypress"], ["for", "AC_SCHMAMT"], ["appTheme", "", "type", "text", "name", "AC_INTRATE", "placeholder", " ", "id", "AC_INTRATE", "required", "", "title", "Input allowed only . 0-9(after decimal 1 0r 2 digits) ", "formControlName", "AC_INTRATE", 1, "form-control", 2, "text-align", "right", 3, "keyup", "keypress"], ["for", "AC_INTRATE"], ["type", "text", "name", "AC_MATUAMT", "placeholder", " ", "id", "AC_MATUAMT", "title", "Input allowed only  0-9", "formControlName", "AC_MATUAMT", 1, "form-control", 2, "text-align", "right", 3, "ngClass", "keyup", "focusout", "keypress"], ["for", "AC_MATUAMT"], ["type", "text", "appButton", "", "minlength", "10", "maxlength", "10", "placeholder", "dd/mm/yyyy", "name", "AC_CLOSEDT", "id", "AC_CLOSEDT", "formControlName", "AC_CLOSEDT", "bsDatepicker", "", "disabled", "", 1, "form-control", 3, "max", "bsConfig", "minDate", "ngClass", "bsValue", "keypress"], ["for", "AC_CLOSEDT"], [1, "col-sm", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm btn-submit", "appTheme", "", 3, "click", "keydown.Tab", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], ["type", "submit", "appTheme", "", 1, "btn", "btn-outline-primary", "btn-sm", "btn-submit", 3, "click", "keydown.Tab"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "card", "shadow"], [1, "table-responsive"], ["id", "mastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 3, "dtOptions", "dtTrigger"], [1, "filters"], ["filters", ""], [1, "testing"], ["type", "text", "name", "AC_TYPE", 1, "form-control"], ["type", "text", "name", "BANKACNO", 1, "form-control"], ["type", "text", "name", "AC_NAME", 1, "form-control"], ["type", "text", "name", "INVEST_BANK", 1, "form-control"], ["type", "text", "name", "INVEST_BRANCH", 1, "form-control"], ["type", "text", "name", "AC_OPDATE", 1, "form-control"], ["type", "text", "name", "AC_ASON_DATE", 1, "form-control"], ["type", "text", "name", "AC_EXPDT", 1, "form-control"], ["type", "text", "name", "AC_REF_RECEIPTNO", 1, "form-control"], ["type", "text", "name", "AC_INTRATE", 1, "form-control"], ["type", "text", "name", "AC_SCHMAMT", 1, "form-control"], ["type", "text", "name", "AC_MATUAMT", 1, "form-control"], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [3, "ngClass"], ["colspan", "6", 1, "no-data-available"]], template: function AccountOpeningComponent_Template(rf, ctx) { if (rf & 1) {
        const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Investment Account Opening");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ng-select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AccountOpeningComponent_Template_ng_select_ngModelChange_18_listener($event) { return ctx.code = $event; })("focus", function AccountOpeningComponent_Template_ng_select_focus_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19); return ctx.onFocus(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AccountOpeningComponent_ng_option_20_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Scheme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AccountOpeningComponent_div_25_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ng-select", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AccountOpeningComponent_Template_ng_select_ngModelChange_35_listener($event) { return ctx.ngBank = $event; })("change", function AccountOpeningComponent_Template_ng_select_change_35_listener($event) { return ctx.getBankName($event); })("focus", function AccountOpeningComponent_Template_ng_select_focus_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36); return ctx.onFocus(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AccountOpeningComponent_ng_option_37_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Bank Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, AccountOpeningComponent_div_42_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ng-select", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AccountOpeningComponent_Template_ng_select_ngModelChange_46_listener($event) { return ctx.ngBranch = $event; })("focus", function AccountOpeningComponent_Template_ng_select_focus_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47); return ctx.onFocus(_r7); })("change", function AccountOpeningComponent_Template_ng_select_change_46_listener($event) { return ctx.getBranch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AccountOpeningComponent_ng_option_48_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Branch Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, AccountOpeningComponent_div_53_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Bank Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AccountOpeningComponent_Template_input_keypress_64_listener($event) { return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 48 && $event.charCode < 58 || $event.charCode >= 97 && $event.charCode <= 122; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Receipt Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, AccountOpeningComponent_div_69_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.Tab", function AccountOpeningComponent_Template_input_keydown_Tab_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](75); return _r12.hide(); })("keypress", function AccountOpeningComponent_Template_input_keypress_73_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Account Open Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, AccountOpeningComponent_div_81_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.Tab", function AccountOpeningComponent_Template_input_keydown_Tab_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](87); return _r15.hide(); })("keypress", function AccountOpeningComponent_Template_input_keypress_85_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](88, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "As On Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, AccountOpeningComponent_div_93_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Deposit Period:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AccountOpeningComponent_Template_input_change_101_listener() { return ctx.CheckmonthDays(); })("ngModelChange", function AccountOpeningComponent_Template_input_ngModelChange_101_listener() { return ctx.setMaturityDate(); })("keypress", function AccountOpeningComponent_Template_input_keypress_101_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, AccountOpeningComponent_div_106_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AccountOpeningComponent_Template_input_change_110_listener() { return ctx.CheckmonthDays(); })("ngModelChange", function AccountOpeningComponent_Template_input_ngModelChange_110_listener() { return ctx.setMaturityDate(); })("keypress", function AccountOpeningComponent_Template_input_keypress_110_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, AccountOpeningComponent_div_115_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.Tab", function AccountOpeningComponent_Template_input_keydown_Tab_119_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](121); return _r20.hide(); })("bsValueChange", function AccountOpeningComponent_Template_input_bsValueChange_119_listener() { return ctx.monthDays(); })("keypress", function AccountOpeningComponent_Template_input_keypress_119_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](122, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Maturity Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](127, AccountOpeningComponent_div_127_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AccountOpeningComponent_Template_input_keyup_132_listener($event) { return ctx.getDecimal($event); })("focusout", function AccountOpeningComponent_Template_input_focusout_132_listener($event) { return ctx.getDecimalPoint($event); })("keypress", function AccountOpeningComponent_Template_input_keypress_132_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Deposit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](137, AccountOpeningComponent_div_137_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AccountOpeningComponent_Template_input_keyup_141_listener($event) { ctx.checkmargin($event); return ctx.getDecimal($event); })("keypress", function AccountOpeningComponent_Template_input_keypress_141_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Interest Rate % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](146, AccountOpeningComponent_div_146_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AccountOpeningComponent_Template_input_keyup_150_listener($event) { return ctx.getDecimal($event); })("focusout", function AccountOpeningComponent_Template_input_focusout_150_listener($event) { return ctx.getDecimalPoint($event); })("keypress", function AccountOpeningComponent_Template_input_keypress_150_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Maturity Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](153, AccountOpeningComponent_div_153_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AccountOpeningComponent_Template_input_keypress_157_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](158, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Account Closed Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](163, AccountOpeningComponent_button_163_Template, 2, 0, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](164, AccountOpeningComponent_button_164_Template, 2, 0, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](165, AccountOpeningComponent_button_165_Template, 2, 0, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](167, AccountOpeningComponent_button_167_Template, 2, 0, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](169, AccountOpeningComponent_button_169_Template, 2, 0, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](171, AccountOpeningComponent_button_171_Template, 2, 0, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](172, AccountOpeningComponent_button_172_Template, 2, 0, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](173, AccountOpeningComponent_div_173_Template, 38, 4, "div", 57);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.code)("disabled", ctx.AC_TYPE)("selectOnTab", true)("virtualScroll", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](71, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TYPE"].invalid && (ctx.angForm.controls["AC_TYPE"].dirty || ctx.angForm.controls["AC_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ngBank)("virtualScroll", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](73, _c0, ctx.formSubmitted))("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.BankCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["INVEST_BANK"].invalid && (ctx.angForm.controls["INVEST_BANK"].dirty || ctx.angForm.controls["INVEST_BANK"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ngBranch)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](75, _c0, ctx.formSubmitted))("virtualScroll", true)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["INVEST_BRANCH"].invalid && (ctx.angForm.controls["INVEST_BRANCH"].dirty || ctx.angForm.controls["INVEST_BRANCH"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_REF_RECEIPTNO"].invalid && (ctx.angForm.controls["AC_REF_RECEIPTNO"].dirty || ctx.angForm.controls["AC_REF_RECEIPTNO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](76, 59, ctx.datemax, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](77, _c1))("maxDate", ctx.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](78, _c0, ctx.formSubmitted))("bsValue", ctx.bsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_OPDATE"].invalid && (ctx.angForm.controls["AC_OPDATE"].dirty || ctx.angForm.controls["AC_OPDATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](88, 62, ctx.datemax, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](80, _c1))("maxDate", ctx.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](81, _c0, ctx.formSubmitted))("bsValue", ctx.bsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_ASON_DATE"].invalid && (ctx.angForm.controls["AC_ASON_DATE"].dirty || ctx.angForm.controls["AC_ASON_DATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_MONTHS"].invalid && (ctx.angForm.controls["AC_MONTHS"].dirty || ctx.angForm.controls["AC_MONTHS"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_DAYS"].invalid && (ctx.angForm.controls["AC_DAYS"].dirty || ctx.angForm.controls["AC_DAYS"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](122, 65, ctx.datemax, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](83, _c1))("minDate", ctx.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](84, _c0, ctx.formSubmitted))("bsValue", ctx.bsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_EXPDT"].invalid && (ctx.angForm.controls["AC_EXPDT"].dirty || ctx.angForm.controls["AC_EXPDT"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](86, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_SCHMAMT"].invalid && (ctx.angForm.controls["AC_SCHMAMT"].dirty || ctx.angForm.controls["AC_SCHMAMT"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_INTRATE"].invalid && (ctx.angForm.controls["AC_INTRATE"].dirty || ctx.angForm.controls["AC_INTRATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](88, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_MATUAMT"].invalid && (ctx.angForm.controls["AC_MATUAMT"].dirty || ctx.angForm.controls["AC_MATUAMT"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](158, 68, ctx.datemax, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](90, _c1))("minDate", ctx.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](91, _c0, ctx.formSubmitted))("bsValue", ctx.bsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.approveShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newbtnShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.updateShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rejectShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.approveShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unapproveShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.DatatableHideShow);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _theme_directive__WEBPACK_IMPORTED_MODULE_17__["ThemeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerInputDirective"], _button_directive__WEBPACK_IMPORTED_MODULE_21__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["ɵr"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9jdXN0b21lci9hY2NvdW50LW9wZW5pbmcvYWNjb3VudC1vcGVuaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountOpeningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-account-opening',
                templateUrl: './account-opening.component.html',
                styleUrls: ['./account-opening.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["BankMasterService"] }, { type: _shared_dropdownService_clearing_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ClearingbranchMasterService"] }, { type: _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SchemeCodeDropdownService"] }, { type: _policy_settings_information_bank_master_bank_master_service__WEBPACK_IMPORTED_MODULE_12__["BankService"] }, { type: _account_opening_service__WEBPACK_IMPORTED_MODULE_13__["InvestmentService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"] }, { type: src_app_theme_utility_scheme_parameters_term_deposit_scheme_term_deposit_scheme_service__WEBPACK_IMPORTED_MODULE_15__["TermDepositSchemeService"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_16__["SystemMasterParametersService"] }]; }, { childMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], reloadTablePassing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/master/customer/account-opening/account-opening.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/master/customer/account-opening/account-opening.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AccountOpeningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountOpeningModule", function() { return AccountOpeningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _account_opening_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-opening.component */ "./src/app/theme/master/customer/account-opening/account-opening.component.ts");
/* harmony import */ var _account_opening_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-opening-routing.module */ "./src/app/theme/master/customer/account-opening/account-opening-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/elements/scheme1.service */ "./src/app/shared/elements/scheme1.service.ts");
/* harmony import */ var _shared_elements_a1_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/elements/a1.service */ "./src/app/shared/elements/a1.service.ts");
/* harmony import */ var _shared_elements_branch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/elements/branch.service */ "./src/app/shared/elements/branch.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/bank-Master-dropdown.service */ "./src/app/shared/dropdownService/bank-Master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _policy_settings_information_bank_master_bank_master_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../policy-settings/information/bank-master/bank-master.service */ "./src/app/theme/master/policy-settings/information/bank-master/bank-master.service.ts");
/* harmony import */ var _account_opening_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./account-opening.service */ "./src/app/theme/master/customer/account-opening/account-opening.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/theme/theme.module */ "./src/app/theme/theme.module.ts");
/* harmony import */ var src_app_shared_dropdownService_clearing_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/dropdownService/clearing-branch-master-dropdown.service */ "./src/app/shared/dropdownService/clearing-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_theme_utility_scheme_parameters_term_deposit_scheme_term_deposit_scheme_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service */ "./src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service.ts");

























class AccountOpeningModule {
}
AccountOpeningModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountOpeningModule });
AccountOpeningModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountOpeningModule_Factory(t) { return new (t || AccountOpeningModule)(); }, providers: [_shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__["Scheme1Service"], _shared_elements_a1_service__WEBPACK_IMPORTED_MODULE_7__["A1Service"], _shared_elements_branch_service__WEBPACK_IMPORTED_MODULE_8__["BranchService"],
        _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["BankMasterService"],
        _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"],
        _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["SchemeCodeDropdownService"], src_app_shared_dropdownService_clearing_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["ClearingbranchMasterService"], src_app_theme_utility_scheme_parameters_term_deposit_scheme_term_deposit_scheme_service__WEBPACK_IMPORTED_MODULE_22__["TermDepositSchemeService"],
        _policy_settings_information_bank_master_bank_master_service__WEBPACK_IMPORTED_MODULE_13__["BankService"],
        _account_opening_service__WEBPACK_IMPORTED_MODULE_14__["InvestmentService"],
        _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_19__["SystemMasterParametersService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["UserAuthInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _account_opening_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountOpeningRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["DatepickerModule"].forRoot(),
            src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_20__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountOpeningModule, { declarations: [_account_opening_component__WEBPACK_IMPORTED_MODULE_2__["AccountOpeningComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _account_opening_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountOpeningRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["DatepickerModule"], src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_20__["ThemeModule"]], exports: [_account_opening_component__WEBPACK_IMPORTED_MODULE_2__["AccountOpeningComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountOpeningModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _account_opening_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountOpeningRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["DatepickerModule"].forRoot(),
                    src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_20__["ThemeModule"]
                ],
                declarations: [_account_opening_component__WEBPACK_IMPORTED_MODULE_2__["AccountOpeningComponent"]],
                exports: [_account_opening_component__WEBPACK_IMPORTED_MODULE_2__["AccountOpeningComponent"]],
                providers: [_shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__["Scheme1Service"], _shared_elements_a1_service__WEBPACK_IMPORTED_MODULE_7__["A1Service"], _shared_elements_branch_service__WEBPACK_IMPORTED_MODULE_8__["BranchService"],
                    _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["BankMasterService"],
                    _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"],
                    _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["SchemeCodeDropdownService"], src_app_shared_dropdownService_clearing_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["ClearingbranchMasterService"], src_app_theme_utility_scheme_parameters_term_deposit_scheme_term_deposit_scheme_service__WEBPACK_IMPORTED_MODULE_22__["TermDepositSchemeService"],
                    _policy_settings_information_bank_master_bank_master_service__WEBPACK_IMPORTED_MODULE_13__["BankService"],
                    _account_opening_service__WEBPACK_IMPORTED_MODULE_14__["InvestmentService"],
                    _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_19__["SystemMasterParametersService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["UserAuthInterceptor"],
                        multi: true
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/account-opening/account-opening.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/master/customer/account-opening/account-opening.service.ts ***!
  \**********************************************************************************/
/*! exports provided: InvestmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentService", function() { return InvestmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class InvestmentService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/investment/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/investment/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/investment/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/investment/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //approve master
    approve(data) {
        return this.http.post(this.url + '/investment/approve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //unapporve master
    unapporve(data) {
        return this.http.post(this.url + '/investment/unapporve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //reject master
    reject(data) {
        return this.http.post(this.url + '/investment/reject', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
InvestmentService.ɵfac = function InvestmentService_Factory(t) { return new (t || InvestmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
InvestmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InvestmentService, factory: InvestmentService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/policy-settings/information/bank-master/bank-master.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/theme/master/policy-settings/information/bank-master/bank-master.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: BankService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankService", function() { return BankService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class BankService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/bank-master/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data !');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/bank-master/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/bank-master/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/bank-master/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
BankService.ɵfac = function BankService_Factory(t) { return new (t || BankService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
BankService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BankService, factory: BankService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BankService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~account-opening-account-opening-module~centralised-passing-centralisedPassing-module~master-~f0beee37.js.map