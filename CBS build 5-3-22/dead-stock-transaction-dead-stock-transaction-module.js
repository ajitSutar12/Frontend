(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dead-stock-transaction-dead-stock-transaction-module"],{

/***/ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/dropdownService/ac-master-dropdown.service.ts ***!
  \**********************************************************************/
/*! exports provided: ACMasterDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACMasterDropdownService", function() { return ACMasterDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ACMasterDropdownService {
    constructor(http) {
        this.http = http;
        // // gl-account-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.acMasterObject = new Array();
    }
    getACMasterList() {
        this.acMasterObject = [];
        return this.http.get(this.url + '/gl-account-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NAME, value: element.id, name: element.AC_NO };
                this.acMasterObject.push(obj);
            });
            return this.acMasterObject;
        }));
    }
    getACMasterbranch(branchid) {
        this.acMasterObject = [];
        return this.http.get(this.url + '/gl-account-master/branch/' + branchid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                // let obj = { label: element.AC_NAME, value: element.id, name: element.AC_NO };
                // let obj = { label: element.AC_NO + ' ' + element.AC_NAME + ' ', value: element.id };
                let obj = { label: element.AC_NO + ' ' + element.AC_NAME + ' ', value: element.id, name: element.AC_NO };
                this.acMasterObject.push(obj);
            });
            return this.acMasterObject;
        }));
    }
}
ACMasterDropdownService.ɵfac = function ACMasterDropdownService_Factory(t) { return new (t || ACMasterDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ACMasterDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ACMasterDropdownService, factory: ACMasterDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ACMasterDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
                let obj = { label: element.CODE + ' ' + element.NAME, value: element.id, name: element.CODE };
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
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_APPL, id: element.S_ACNOTYPE, dividend: element.DIVIDEND_PERCENTAGE, divMethod: element.INTEREST_RULE, isAddBonus: element.IS_ADD_BONUS_IN_DIVIDEND, INT_ROUND_OFF: element.INT_ROUND_OFF };
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
                let obj = { label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL, glacno: element.S_GLACNO };
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

/***/ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: DeadStockTransactionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadStockTransactionRoutingModule", function() { return DeadStockTransactionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dead_stock_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dead-stock-transaction.component */ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.component.ts");





const routes = [
    {
        path: '',
        component: _dead_stock_transaction_component__WEBPACK_IMPORTED_MODULE_2__["DeadStockTransactionComponent"],
        data: {
            title: 'Dead Stock Transaction',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class DeadStockTransactionRoutingModule {
}
DeadStockTransactionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DeadStockTransactionRoutingModule });
DeadStockTransactionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DeadStockTransactionRoutingModule_Factory(t) { return new (t || DeadStockTransactionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeadStockTransactionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeadStockTransactionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DeadStockTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadStockTransactionComponent", function() { return DeadStockTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs-compat */ "./node_modules/rxjs-compat/Rx.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _dead_stock_transaction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dead-stock-transaction.service */ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.service.ts");
/* harmony import */ var _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");




















const _c0 = ["triggerhide"];
function DeadStockTransactionComponent_ng_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r11.label, "");
} }
function DeadStockTransactionComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_25_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["BRANCH_CODE"].errors == null ? null : ctx_r2.angForm.controls["BRANCH_CODE"].errors.required);
} }
function DeadStockTransactionComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_50_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["TRANSACTION_TYPE"].errors == null ? null : ctx_r3.angForm.controls["TRANSACTION_TYPE"].errors.required);
} }
function DeadStockTransactionComponent_ng_option_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r14.label, "");
} }
function DeadStockTransactionComponent_div_98_ng_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r19.label, "");
} }
function DeadStockTransactionComponent_div_98_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_98_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_98_div_11_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r16.angForm.controls["AC_TYPE"].errors.required);
} }
function DeadStockTransactionComponent_div_98_ng_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r21.label, " ", values_r21.name, "");
} }
function DeadStockTransactionComponent_div_98_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_98_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_98_div_22_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.angForm.controls["AC_NO"].errors == null ? null : ctx_r18.angForm.controls["AC_NO"].errors.required);
} }
function DeadStockTransactionComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Transfer GL Scheme Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ng-select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_div_98_Template_ng_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.schemeedit = $event; })("change", function DeadStockTransactionComponent_div_98_Template_ng_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.schemechange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DeadStockTransactionComponent_div_98_ng_option_10_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DeadStockTransactionComponent_div_98_div_11_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Transfer GL Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ng-select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_div_98_Template_ng_select_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.accountedit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DeadStockTransactionComponent_div_98_ng_option_21_Template, 2, 3, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DeadStockTransactionComponent_div_98_div_22_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.schemeedit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.ACMasterDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.angForm.controls["AC_TYPE"].invalid && (ctx_r5.angForm.controls["AC_TYPE"].dirty || ctx_r5.angForm.controls["AC_TYPE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.accountedit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.schemeACNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.angForm.controls["AC_NO"].invalid && (ctx_r5.angForm.controls["AC_NO"].dirty || ctx_r5.angForm.controls["AC_NO"].touched));
} }
function DeadStockTransactionComponent_div_99_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_99_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_99_div_10_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.angForm.controls["RESOLUTION_DATE"].errors == null ? null : ctx_r27.angForm.controls["RESOLUTION_DATE"].errors.required);
} }
function DeadStockTransactionComponent_div_99_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Input allowed only 0-9. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_99_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_99_div_20_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.angForm.controls["RESOLUTION_NUM"].errors == null ? null : ctx_r28.angForm.controls["RESOLUTION_NUM"].errors.required);
} }
const _c1 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
const _c2 = function (a0) { return { "form-submitted": a0 }; };
function DeadStockTransactionComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resolution Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_div_99_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.ngresolutiondate = $event; })("keypress", function DeadStockTransactionComponent_div_99_Template_input_keypress_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DeadStockTransactionComponent_div_99_div_10_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Resolution Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_div_99_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.ngresolutionnum = $event; })("keypress", function DeadStockTransactionComponent_div_99_Template_input_keypress_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122 || $event.charCode >= 48 && $event.charCode < 58 || $event.charCode <= 32 || $event.charCode == 46 || $event.charCode == 45 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DeadStockTransactionComponent_div_99_div_20_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.ngresolutiondate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("maxDate", ctx_r6.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx_r6.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["RESOLUTION_DATE"].invalid && (ctx_r6.angForm.controls["RESOLUTION_DATE"].dirty || ctx_r6.angForm.controls["RESOLUTION_DATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx_r6.formSubmitted))("ngModel", ctx_r6.ngresolutionnum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["RESOLUTION_NUM"].invalid && (ctx_r6.angForm.controls["RESOLUTION_NUM"].dirty || ctx_r6.angForm.controls["RESOLUTION_NUM"].touched));
} }
function DeadStockTransactionComponent_div_102_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeadStockTransactionComponent_div_102_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeadStockTransactionComponent_div_102_div_9_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.angForm.controls["NARRATION"].errors == null ? null : ctx_r36.angForm.controls["NARRATION"].errors.required);
} }
function DeadStockTransactionComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Narration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_div_102_Template_textarea_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.narration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_div_102_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](104); return _r8.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DeadStockTransactionComponent_div_102_div_9_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.narration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["NARRATION"].invalid && (ctx_r7.angForm.controls["NARRATION"].dirty || ctx_r7.angForm.controls["NARRATION"].touched));
} }
function DeadStockTransactionComponent_tr_120_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_tr_120_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const item_r41 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.getNarration(item_r41.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.NARRATION, " ");
} }
class DeadStockTransactionComponent {
    constructor(fb, http, systemParameter, deadstocktransaction, ACMasterDropdownService, schemeCodeDropdownService, schemeAccountNoService, ownbranchMasterService, config) {
        this.fb = fb;
        this.http = http;
        this.systemParameter = systemParameter;
        this.deadstocktransaction = deadstocktransaction;
        this.ACMasterDropdownService = ACMasterDropdownService;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.schemeAccountNoService = schemeAccountNoService;
        this.ownbranchMasterService = ownbranchMasterService;
        this.config = config;
        this.formSubmitted = false;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.ngBranchCode = null;
        this.ngtransactiondate = null;
        // Date variables
        this.ngresolutiondate = null;
        this.isTransfer = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_compat__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //Transaction type variable
        this.ngtransactiontype = null;
        this.transactiontype = [
            { id: 'S', label: 'Sales' },
            { id: 'B', label: 'Breakage' },
            { id: 'G', label: 'Gain' },
            { id: 'L', label: 'Loss' },
            { id: 'D', label: 'Depriciation' },
            { id: 'T', label: 'Transfer' }
        ];
        this.dtExportButtonOptions = {};
        this.Narration = false;
        this.Resolution = false;
        this.GLAccount = false;
        this.maxDate = new Date();
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate());
    }
    ngOnInit() {
        this.getSystemParaDate();
        this.createForm();
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.branch_code = data;
            this.ngBranchCode = data[0].value;
        });
        this.ACMasterDropdownService.getACMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.ACMasterDropdown = data;
        });
        // /Narration List
        this.deadstocktransaction.getNarrationMaster().subscribe(data => {
            this.narrationList = data;
        });
    }
    createForm() {
        this.angForm = this.fb.group({
            BRANCH_CODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            TRAN_DATE: [''],
            TRAN_YEAR: [''],
            TRANSACTION_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ITEM_CODE: [''],
            DEAD_STOCK: [''],
            AC_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            AC_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            RESOLUTION_DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            RESOLUTION_NUM: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            NARRATION: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
        });
    }
    getBranch() {
        this.getIntroducer();
    }
    schemechange(event) {
        this.getschemename = event.name;
        this.schemeedit = event.value;
        this.getIntroducer();
    }
    //get account no according scheme for introducer
    getIntroducer() {
        this.obj = [this.schemeedit, this.ngBranchCode];
        switch (this.getschemename) {
            case 'GL':
                this.schemeAccountNoService.getGeneralLedgerList1(this.obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
                    this.schemeACNo = data;
                });
                break;
        }
    }
    //get sys para current date
    getSystemParaDate() {
        this.systemParameter.getFormData(1).subscribe(data => {
            this.angForm.patchValue({
                'TRAN_DATE': data.CURRENT_DATE,
            });
            // var full = []
            var formatfullDate = data.CURRENT_DATE;
            var nyear = formatfullDate.split(/\//);
            let next = Number(nyear[2]) + 1;
            console.log(next);
            var transactionDate = nyear[2] + next;
            this.angForm.patchValue({
                TRAN_YEAR: transactionDate
            });
            console.log(transactionDate);
        });
    }
    //get Narration Details 
    getNarration(ele) {
        this.narration = ele;
        let el = this.triggerhide.nativeElement;
        el.click();
    }
    changetransaction() {
        this.schemeedit = null,
            this.accountedit = null,
            this.ngresolutionnum = null,
            this.narration = null,
            this.angForm.patchValue({
                // RESOLUTION_DATE: this.angForm.controls['RESOLUTION_DATE'].value,
                RESOLUTION_DATE: '',
            });
    }
    isFormA(value) {
        debugger;
        if (this.ngtransactiontype.label == 'Sales') {
            document.getElementById('formC').removeAttribute("disabled");
            if (value == 1) {
                this.GLAccount = true;
                this.Resolution = true;
                this.Narration = true;
            }
            else if (value == 2) {
                this.GLAccount = false;
                this.Resolution = true;
                this.Narration = true;
            }
            // this.angForm.get('type').reset();
        }
        if (this.ngtransactiontype.label == 'Breakage') {
            document.getElementById('formC').setAttribute("disabled", "true");
            if (value == 1) {
                this.GLAccount = true;
                this.Resolution = true;
                this.Narration = true;
            }
        }
        if (this.ngtransactiontype.label == 'Gain') {
            document.getElementById('formC').setAttribute("disabled", "true");
            if (value == 1) {
                this.GLAccount = true;
                this.Resolution = true;
                this.Narration = true;
            }
        }
        if (this.ngtransactiontype.label == 'Loss') {
            document.getElementById('formC').setAttribute("disabled", "true");
            if (value == 1) {
                this.GLAccount = true;
                this.Resolution = true;
                this.Narration = true;
            }
        }
        if (this.ngtransactiontype.label == 'Depriciation') {
            document.getElementById('formC').removeAttribute("disabled");
            if (value == 1) {
                this.GLAccount = true;
                this.Resolution = true;
                this.Narration = true;
            }
            else if (value == 2) {
                this.GLAccount = false;
                this.Resolution = true;
                this.Narration = true;
            }
        }
        if (this.ngtransactiontype.label == 'Transfer') {
            document.getElementById('formC').setAttribute("disabled", "true");
            if (value == 1) {
                this.GLAccount = true;
                this.Resolution = true;
                this.Narration = true;
            }
        }
        // this.angForm.patchValue({
        // })
    }
    // Reset Function
    resetForm() {
        this.createForm();
        this.ngBranchCode = null;
        this.schemeedit = null;
        this.accountedit = null;
    }
}
DeadStockTransactionComponent.ɵfac = function DeadStockTransactionComponent_Factory(t) { return new (t || DeadStockTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_6__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dead_stock_transaction_service__WEBPACK_IMPORTED_MODULE_7__["DeadStockTransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["ACMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_10__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectConfig"])); };
DeadStockTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeadStockTransactionComponent, selectors: [["app-dead-stock-transaction"]], viewQuery: function DeadStockTransactionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerhide = _t.first);
    } }, decls: 124, vars: 25, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "card-block"], [1, "col-sm-12", "col-md-2"], ["for", "BRANCH_CODE"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["id", "BRANCH_CODE", "bindValue", "value", "formControlName", "BRANCH_CODE", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", 3, "ngModel", "ngClass", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["for", "TRAN_DATE"], [1, "form-group", "input-group"], ["type", "text", "name", "TRAN_DATE", "formControlName", "TRAN_DATE", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "TRAN_YEAR"], ["type", "text", "name", "TRAN_YEAR", "placeholder", " ", "pattern", "^[0-9]+$", "title", "Input allowed only 0-9", "id", "TRAN_YEAR", "formControlName", "TRAN_YEAR", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", "TRANSACTION_TYPE"], ["id", "TRANSACTION_TYPE", "name", "type", "bindLabel", "label", "formControlName", "TRANSACTION_TYPE", "placeholder", "Transaction Type", "required", "", 3, "items", "ngClass", "ngModel", "change", "ngModelChange"], [1, "col-sm"], [1, "form-radio"], [1, "radio", "radio-inline"], ["type", "radio", "formControlName", "DEAD_STOCK", "name", "DEAD_STOCK", "value", "FormT", "id", "formT", 3, "change"], [1, "helper"], ["type", "radio", "value", "FormC", "formControlName", "DEAD_STOCK", "id", "formC", "name", "DEAD_STOCK", 3, "change"], [1, "col-sm-12"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions", "dtTrigger"], ["id", "ITEM_CODE", "bindValue", "value", "formControlName", "ITEM_CODE", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Item Code", 3, "ngClass"], ["type", "text", "name", "Quantity", "id", "Quantity", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "Rate", "id", "Rate", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "cgst", "id", "cgst", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "scgst", "id", "scgst", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "text", "name", "amount", "id", "amount", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["id", "FORMA", 1, "row"], ["class", "row", 4, "ngIf"], ["id", "FORMB", 1, "row"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [1, "col-md-12"], [1, "table", "table-bordered"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 2, "display", "none", 3, "click"], ["triggerhide", ""], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], ["for", "AC_TYPE"], ["id", "AC_TYPE", "bindValue", "value", "formControlName", "AC_TYPE", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Transfer Scheme Code", 3, "ngModel", "ngModelChange", "change"], ["for", "AC_NO"], ["id", "AC_NO", "bindValue", "value", "formControlName", "AC_NO", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Account No.", 3, "ngModel", "ngModelChange"], ["for", "RESOLUTION_DATE"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "RESOLUTION_DATE", "id", "RESOLUTION_DATE", "formControlName", "RESOLUTION_DATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "maxDate", "ngClass", "ngModelChange", "keypress"], ["for", "RESOLUTION_NUM"], [1, "col-md-2"], ["type", "text", "name", "RESOLUTION_NUM", "placeholder", " ", "maxlength", "4", "id", "RESOLUTION_NUM", "required", "", "title", "Input allowed only  0-9", "formControlName", "RESOLUTION_NUM", 1, "form-control", 2, "text-align", "right", 3, "ngClass", "ngModel", "ngModelChange", "keypress"], ["for", "NARRATION"], ["formControlName", "NARRATION", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-info-circle", "errspan", 3, "click"], [3, "click"]], template: function DeadStockTransactionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Deadstock Transactions");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_Template_ng_select_ngModelChange_23_listener($event) { return ctx.ngBranchCode = $event; })("change", function DeadStockTransactionComponent_Template_ng_select_change_23_listener() { return ctx.getBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DeadStockTransactionComponent_ng_option_24_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DeadStockTransactionComponent_div_25_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Transaction Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeadStockTransactionComponent_Template_input_ngModelChange_32_listener($event) { return ctx.ngtransactiondate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Transaction Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DeadStockTransactionComponent_Template_input_keypress_39_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Transaction Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ng-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DeadStockTransactionComponent_Template_ng_select_change_49_listener() { return ctx.changetransaction(); })("ngModelChange", function DeadStockTransactionComponent_Template_ng_select_ngModelChange_49_listener($event) { return ctx.ngtransactiontype = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DeadStockTransactionComponent_div_50_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DeadStockTransactionComponent_Template_input_change_55_listener() { return ctx.isFormA(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Transfer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DeadStockTransactionComponent_Template_input_change_60_listener() { return ctx.isFormA(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "table", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "CGST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "SCGST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ng-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, DeadStockTransactionComponent_ng_option_85_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DeadStockTransactionComponent_Template_input_keypress_87_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DeadStockTransactionComponent_Template_input_keypress_89_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DeadStockTransactionComponent_Template_input_keypress_91_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DeadStockTransactionComponent_Template_input_keypress_93_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DeadStockTransactionComponent_Template_input_keypress_95_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, DeadStockTransactionComponent_div_98_Template, 23, 6, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, DeadStockTransactionComponent_div_99_Template, 21, 13, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, DeadStockTransactionComponent_div_102_Template, 10, 2, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "app-modal-basic", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h4", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Narration Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_Template_button_click_108_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](104); return _r8.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "perfect-scrollbar", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "table", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Narration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, DeadStockTransactionComponent_tr_120_Template, 2, 1, "tr", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 52, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeadStockTransactionComponent_Template_button_click_121_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](104); return _r8.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Close");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngBranchCode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c2, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["BRANCH_CODE"].invalid && (ctx.angForm.controls["BRANCH_CODE"].dirty || ctx.angForm.controls["BRANCH_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngtransactiondate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.transactiontype)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c2, ctx.formSubmitted))("ngModel", ctx.ngtransactiontype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["TRANSACTION_TYPE"].invalid && (ctx.angForm.controls["TRANSACTION_TYPE"].dirty || ctx.angForm.controls["TRANSACTION_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c2, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.GLAccount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Resolution);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Narration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.narrationList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTableDirective"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_15__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["ɵr"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.errspan[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 21px;\n  margin-top: -20px;\n  position: relative;\n  z-index: 2;\n  color: red;\n}\n\n.deadstock[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 49%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vZGVhZC1zdG9jay10cmFuc2FjdGlvbi9kZWFkLXN0b2NrLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUU7RUFBWSxxQkFBQTtFQUF1QixVQUFBO0FBS3JDIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vZGVhZC1zdG9jay10cmFuc2FjdGlvbi9kZWFkLXN0b2NrLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIC5lcnJzcGFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMjFweDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfSBcclxuICAuZGVhZHN0b2NrIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOjQ5JTt9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeadStockTransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dead-stock-transaction',
                templateUrl: './dead-stock-transaction.component.html',
                styleUrls: ['./dead-stock-transaction.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_6__["SystemMasterParametersService"] }, { type: _dead_stock_transaction_service__WEBPACK_IMPORTED_MODULE_7__["DeadStockTransactionService"] }, { type: _shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["ACMasterDropdownService"] }, { type: src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["SchemeCodeDropdownService"] }, { type: src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_10__["SchemeAccountNoService"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"] }, { type: _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectConfig"] }]; }, { triggerhide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: DeadStockTransactionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadStockTransactionModule", function() { return DeadStockTransactionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dead_stock_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dead-stock-transaction.component */ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.component.ts");
/* harmony import */ var _dead_stock_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dead-stock-transaction-routing.module */ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _dead_stock_transaction_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dead-stock-transaction.service */ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");








// import {SelectModule} from 'ng-select';











class DeadStockTransactionModule {
}
DeadStockTransactionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DeadStockTransactionModule });
DeadStockTransactionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DeadStockTransactionModule_Factory(t) { return new (t || DeadStockTransactionModule)(); }, providers: [src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["ACMasterDropdownService"], _dead_stock_transaction_service__WEBPACK_IMPORTED_MODULE_14__["DeadStockTransactionService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__["SchemeAccountNoService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_13__["SystemMasterParametersService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dead_stock_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeadStockTransactionRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            // SelectModule
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeadStockTransactionModule, { declarations: [_dead_stock_transaction_component__WEBPACK_IMPORTED_MODULE_2__["DeadStockTransactionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dead_stock_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeadStockTransactionRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
        // SelectModule
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeadStockTransactionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dead_stock_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeadStockTransactionRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                    // SelectModule
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"].forRoot()
                ],
                providers: [src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["ACMasterDropdownService"], _dead_stock_transaction_service__WEBPACK_IMPORTED_MODULE_14__["DeadStockTransactionService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__["SchemeAccountNoService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_13__["SystemMasterParametersService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
                        multi: true
                    },],
                declarations: [_dead_stock_transaction_component__WEBPACK_IMPORTED_MODULE_2__["DeadStockTransactionComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/transaction/dead-stock-transaction/dead-stock-transaction.service.ts ***!
  \********************************************************************************************/
/*! exports provided: DeadStockTransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadStockTransactionService", function() { return DeadStockTransactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class DeadStockTransactionService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/dead-stock-transaction/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Please Input Proper Data!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    //get narration data
    getNarrationMaster() {
        return this.http.get(this.url + '/narration');
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/dead-stock-transaction/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/dead-stock-transaction/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/dead-stock-transaction/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
}
DeadStockTransactionService.ɵfac = function DeadStockTransactionService_Factory(t) { return new (t || DeadStockTransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
DeadStockTransactionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeadStockTransactionService, factory: DeadStockTransactionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeadStockTransactionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


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
}
SystemMasterParametersService.ɵfac = function SystemMasterParametersService_Factory(t) { return new (t || SystemMasterParametersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
SystemMasterParametersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SystemMasterParametersService, factory: SystemMasterParametersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemMasterParametersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dead-stock-transaction-dead-stock-transaction-module.js.map