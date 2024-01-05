(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~shortcutkey-vouchers-vouchers-module~voucher-view-voucher-view-module"],{

/***/ "./src/app/theme/master/customer/customer-id/customer-id.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/master/customer/customer-id/customer-id.service.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerIdService", function() { return CustomerIdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class CustomerIdService {
    constructor(http) {
        this.http = http;
        // API 
        // // customer-id";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/customer-id/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/customer-id/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getData() {
        return this.http.get(this.url + '/customer-id/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/customer-id/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/customer-id/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
CustomerIdService.ɵfac = function CustomerIdService_Factory(t) { return new (t || CustomerIdService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
CustomerIdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomerIdService, factory: CustomerIdService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerIdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/pigmy-report/iframe5/iframe5-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/reports/pigmy-report/iframe5/iframe5-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: Iframe5RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe5RoutingModule", function() { return Iframe5RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _iframe5_iframe5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iframe5/iframe5.component */ "./src/app/theme/reports/pigmy-report/iframe5/iframe5/iframe5.component.ts");





const routes = [
    {
        path: '',
        component: _iframe5_iframe5_component__WEBPACK_IMPORTED_MODULE_2__["Iframe5Component"],
        data: {
            title: 'Iframe5',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class Iframe5RoutingModule {
}
Iframe5RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Iframe5RoutingModule });
Iframe5RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Iframe5RoutingModule_Factory(t) { return new (t || Iframe5RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Iframe5RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Iframe5RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/pigmy-report/iframe5/iframe5.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/reports/pigmy-report/iframe5/iframe5.module.ts ***!
  \**********************************************************************/
/*! exports provided: Iframe5Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe5Module", function() { return Iframe5Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _iframe5_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iframe5-routing.module */ "./src/app/theme/reports/pigmy-report/iframe5/iframe5-routing.module.ts");
/* harmony import */ var _iframe5_iframe5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iframe5/iframe5.component */ "./src/app/theme/reports/pigmy-report/iframe5/iframe5/iframe5.component.ts");





class Iframe5Module {
}
Iframe5Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Iframe5Module });
Iframe5Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Iframe5Module_Factory(t) { return new (t || Iframe5Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _iframe5_routing_module__WEBPACK_IMPORTED_MODULE_2__["Iframe5RoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Iframe5Module, { declarations: [_iframe5_iframe5_component__WEBPACK_IMPORTED_MODULE_3__["Iframe5Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _iframe5_routing_module__WEBPACK_IMPORTED_MODULE_2__["Iframe5RoutingModule"]], exports: [_iframe5_iframe5_component__WEBPACK_IMPORTED_MODULE_3__["Iframe5Component"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Iframe5Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_iframe5_iframe5_component__WEBPACK_IMPORTED_MODULE_3__["Iframe5Component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _iframe5_routing_module__WEBPACK_IMPORTED_MODULE_2__["Iframe5RoutingModule"]
                ],
                exports: [_iframe5_iframe5_component__WEBPACK_IMPORTED_MODULE_3__["Iframe5Component"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/multi-voucher/multi-voucher-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/transaction/multi-voucher/multi-voucher-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: MultiVoucherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiVoucherRoutingModule", function() { return MultiVoucherRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _multi_voucher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multi-voucher.component */ "./src/app/theme/transaction/multi-voucher/multi-voucher.component.ts");





const routes = [
    {
        path: '',
        component: _multi_voucher_component__WEBPACK_IMPORTED_MODULE_2__["MultiVoucherComponent"],
        data: {
            title: 'Multi Voucher',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class MultiVoucherRoutingModule {
}
MultiVoucherRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MultiVoucherRoutingModule });
MultiVoucherRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MultiVoucherRoutingModule_Factory(t) { return new (t || MultiVoucherRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MultiVoucherRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiVoucherRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/multi-voucher/multi-voucher.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/transaction/multi-voucher/multi-voucher.module.ts ***!
  \*************************************************************************/
/*! exports provided: MultiVoucherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiVoucherModule", function() { return MultiVoucherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multi-voucher.component */ "./src/app/theme/transaction/multi-voucher/multi-voucher.component.ts");
/* harmony import */ var _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multi-voucher-routing.module */ "./src/app/theme/transaction/multi-voucher/multi-voucher-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _multi_voucher_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./multi-voucher.service */ "./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var src_app_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/elements/transaction-cash-mode.service */ "./src/app/shared/elements/transaction-cash-mode.service.ts");
/* harmony import */ var src_app_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/elements/transaction-transfer-mode.service */ "./src/app/shared/elements/transaction-transfer-mode.service.ts");
/* harmony import */ var src_app_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/elements/scheme-type.service */ "./src/app/shared/elements/scheme-type.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../master/customer/saving-master/saving-master.service */ "./src/app/theme/master/customer/saving-master/saving-master.service.ts");
/* harmony import */ var _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../master/customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _voucher_entry_voucher_entry_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../voucher-entry/voucher-entry.service */ "./src/app/theme/transaction/voucher-entry/voucher-entry.service.ts");
/* harmony import */ var _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/dropdownService/bank-Master-dropdown.service */ "./src/app/shared/dropdownService/bank-Master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../theme.module */ "./src/app/theme/theme.module.ts");



























class MultiVoucherModule {
}
MultiVoucherModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MultiVoucherModule });
MultiVoucherModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MultiVoucherModule_Factory(t) { return new (t || MultiVoucherModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["UserAuthInterceptor"],
            multi: true
        }, _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"], _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__["BankMasterService"], _voucher_entry_voucher_entry_service__WEBPACK_IMPORTED_MODULE_21__["VoucherEntryService"], _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_20__["CustomerIdService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], _multi_voucher_service__WEBPACK_IMPORTED_MODULE_13__["MultiVoucherService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_14__["SchemeAccountNoService"], src_app_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_15__["TransactionCashModeService"], src_app_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_16__["TransactionTransferModeService"], src_app_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_17__["SchemeTypeService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["SchemeCodeDropdownService"], _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_19__["SavingMasterService"], src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_23__["ACMasterDropdownService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__["MultiVoucherRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"].forRoot(),
            _theme_module__WEBPACK_IMPORTED_MODULE_24__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MultiVoucherModule, { declarations: [_multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__["MultiVoucherComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__["MultiVoucherRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"], _theme_module__WEBPACK_IMPORTED_MODULE_24__["ThemeModule"]], exports: [_multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__["MultiVoucherComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiVoucherModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__["MultiVoucherRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"].forRoot(),
                    _theme_module__WEBPACK_IMPORTED_MODULE_24__["ThemeModule"]
                ],
                declarations: [_multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__["MultiVoucherComponent"]],
                exports: [_multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__["MultiVoucherComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["UserAuthInterceptor"],
                        multi: true
                    }, _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"], _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__["BankMasterService"], _voucher_entry_voucher_entry_service__WEBPACK_IMPORTED_MODULE_21__["VoucherEntryService"], _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_20__["CustomerIdService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], _multi_voucher_service__WEBPACK_IMPORTED_MODULE_13__["MultiVoucherService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_14__["SchemeAccountNoService"], src_app_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_15__["TransactionCashModeService"], src_app_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_16__["TransactionTransferModeService"], src_app_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_17__["SchemeTypeService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["SchemeCodeDropdownService"], _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_19__["SavingMasterService"], src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_23__["ACMasterDropdownService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/voucher-entry/voucher-entry-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/transaction/voucher-entry/voucher-entry-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: VoucherEntryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherEntryRoutingModule", function() { return VoucherEntryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _voucher_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voucher-entry.component */ "./src/app/theme/transaction/voucher-entry/voucher-entry.component.ts");





const routes = [
    {
        path: '',
        component: _voucher_entry_component__WEBPACK_IMPORTED_MODULE_2__["VoucherEntryComponent"],
        data: {
            title: 'voucher-entry',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class VoucherEntryRoutingModule {
}
VoucherEntryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VoucherEntryRoutingModule });
VoucherEntryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VoucherEntryRoutingModule_Factory(t) { return new (t || VoucherEntryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VoucherEntryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoucherEntryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/voucher-entry/voucher-entry.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/transaction/voucher-entry/voucher-entry.module.ts ***!
  \*************************************************************************/
/*! exports provided: VoucherEntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherEntryModule", function() { return VoucherEntryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _voucher_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voucher-entry.component */ "./src/app/theme/transaction/voucher-entry/voucher-entry.component.ts");
/* harmony import */ var _voucher_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voucher-entry-routing.module */ "./src/app/theme/transaction/voucher-entry/voucher-entry-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/elements/transaction-cash-mode.service */ "./src/app/shared/elements/transaction-cash-mode.service.ts");
/* harmony import */ var _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/elements/transaction-transfer-mode.service */ "./src/app/shared/elements/transaction-transfer-mode.service.ts");
/* harmony import */ var _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/elements/scheme-type.service */ "./src/app/shared/elements/scheme-type.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../master/customer/saving-master/saving-master.service */ "./src/app/theme/master/customer/saving-master/saving-master.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../master/customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/dropdownService/bank-Master-dropdown.service */ "./src/app/shared/dropdownService/bank-Master-dropdown.service.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../theme.module */ "./src/app/theme/theme.module.ts");
/* harmony import */ var _reports_pigmy_report_iframe5_iframe5_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../reports/pigmy-report/iframe5/iframe5.module */ "./src/app/theme/reports/pigmy-report/iframe5/iframe5.module.ts");


























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class VoucherEntryModule {
}
VoucherEntryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VoucherEntryModule });
VoucherEntryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VoucherEntryModule_Factory(t) { return new (t || VoucherEntryModule)(); }, providers: [_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__["TransactionCashModeService"], _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["BankMasterService"], _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_20__["CustomerIdService"], src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["ACMasterDropdownService"], _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__["TransactionTransferModeService"], _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__["SchemeTypeService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["SchemeCodeDropdownService"], _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_16__["SavingMasterService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _voucher_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["VoucherEntryRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["DatepickerModule"].forRoot(),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _theme_module__WEBPACK_IMPORTED_MODULE_22__["ThemeModule"],
            _reports_pigmy_report_iframe5_iframe5_module__WEBPACK_IMPORTED_MODULE_23__["Iframe5Module"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VoucherEntryModule, { declarations: [_voucher_entry_component__WEBPACK_IMPORTED_MODULE_2__["VoucherEntryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _voucher_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["VoucherEntryRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["DatepickerModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _theme_module__WEBPACK_IMPORTED_MODULE_22__["ThemeModule"],
        _reports_pigmy_report_iframe5_iframe5_module__WEBPACK_IMPORTED_MODULE_23__["Iframe5Module"]], exports: [_voucher_entry_component__WEBPACK_IMPORTED_MODULE_2__["VoucherEntryComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoucherEntryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _voucher_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["VoucherEntryRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["DatepickerModule"].forRoot(),
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _theme_module__WEBPACK_IMPORTED_MODULE_22__["ThemeModule"],
                    _reports_pigmy_report_iframe5_iframe5_module__WEBPACK_IMPORTED_MODULE_23__["Iframe5Module"]
                ],
                declarations: [_voucher_entry_component__WEBPACK_IMPORTED_MODULE_2__["VoucherEntryComponent"]],
                exports: [_voucher_entry_component__WEBPACK_IMPORTED_MODULE_2__["VoucherEntryComponent"]],
                providers: [_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__["TransactionCashModeService"], _shared_dropdownService_bank_Master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["BankMasterService"], _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_20__["CustomerIdService"], src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["ACMasterDropdownService"], _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__["TransactionTransferModeService"], _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__["SchemeTypeService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["SchemeCodeDropdownService"], _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_16__["SavingMasterService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


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


/***/ }),

/***/ "./src/app/theme/view/voucher-view/voucher-view-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/view/voucher-view/voucher-view-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: VoucherViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherViewRoutingModule", function() { return VoucherViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _voucher_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voucher-view.component */ "./src/app/theme/view/voucher-view/voucher-view.component.ts");





const routes = [
    {
        path: '',
        component: _voucher_view_component__WEBPACK_IMPORTED_MODULE_2__["VoucherViewComponent"],
        data: {
            title: 'Voucher View',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class VoucherViewRoutingModule {
}
VoucherViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VoucherViewRoutingModule });
VoucherViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VoucherViewRoutingModule_Factory(t) { return new (t || VoucherViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VoucherViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoucherViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/view/voucher-view/voucher-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/view/voucher-view/voucher-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: VoucherViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherViewComponent", function() { return VoucherViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_theme_transaction_voucher_entry_voucher_entry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/transaction/voucher-entry/voucher-entry.component */ "./src/app/theme/transaction/voucher-entry/voucher-entry.component.ts");
/* harmony import */ var src_app_theme_transaction_multi_voucher_multi_voucher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/theme/transaction/multi-voucher/multi-voucher.component */ "./src/app/theme/transaction/multi-voucher/multi-voucher.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _submit_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../submit.directive */ "./src/app/theme/submit.directive.ts");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../button.directive */ "./src/app/theme/button.directive.ts");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
























const _c0 = ["triggerhide"];
function VoucherViewComponent_ng_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r10.label, "");
} }
function VoucherViewComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherViewComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoucherViewComponent_div_26_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["BRANCH_CODE"].errors == null ? null : ctx_r2.angForm.controls["BRANCH_CODE"].errors.required);
} }
function VoucherViewComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherViewComponent_div_41_table_3_tbody_38_tr_1_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherViewComponent_div_41_table_3_tbody_38_tr_1_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherViewComponent_div_41_table_3_tbody_38_tr_1_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherViewComponent_div_41_table_3_tbody_38_tr_1_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherViewComponent_div_41_table_3_tbody_38_tr_1_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherViewComponent_div_41_table_3_tbody_38_tr_1_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clearing Voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherViewComponent_div_41_table_3_tbody_38_tr_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VoucherViewComponent_div_41_table_3_tbody_38_tr_1_td_13_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, VoucherViewComponent_div_41_table_3_tbody_38_tr_1_td_14_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VoucherViewComponent_div_41_table_3_tbody_38_tr_1_td_15_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VoucherViewComponent_div_41_table_3_tbody_38_tr_1_td_16_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VoucherViewComponent_div_41_table_3_tbody_38_tr_1_td_17_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VoucherViewComponent_div_41_table_3_tbody_38_tr_1_td_18_Template, 2, 0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.TRAN_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16 == null ? null : data_r16.TRAN_TIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.S_APPL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.TRAN_ACNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.TRAN_SOURCE_TYPE == null ? "---" : data_r16.TRAN_SOURCE_TYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r16.TRAN_TYPE == "CS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r16.TRAN_TYPE == "TR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r16.TRAN_TYPE == "JV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r16.TRAN_TYPE == "IS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r16.TRAN_TYPE == "CN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r16.TRAN_TYPE == "CL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.TRAN_DRCR == "C" ? "Credit" : "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.TRAN_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.INTEREST_AMOUNT == null ? "0.00" : data_r16.INTEREST_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.RECPAY_INT_AMOUNT == null ? "0.00" : data_r16.RECPAY_INT_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.OTHER10_AMOUNT == null ? "0.00" : data_r16.OTHER10_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.PENAL_INTEREST == null ? "0.00" : data_r16.PENAL_INTEREST);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r16.REC_PENAL_INT_AMOUNT == null ? "0.00" : data_r16.REC_PENAL_INT_AMOUNT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.OTHER_AMOUNT == 0 ? "0.00" : data_r16.OTHER_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r16.ADDED_PENAL_INTEREST == null ? "0.00" : data_r16.ADDED_PENAL_INTEREST, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.DIVIDEND_AMOUNT == null || data_r16.DIVIDEND_AMOUNT == 0 ? "0.00" : data_r16.DIVIDEND_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r16.USER_CODE);
} }
function VoucherViewComponent_div_41_table_3_tbody_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoucherViewComponent_div_41_table_3_tbody_38_tr_1_Template, 41, 23, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.tableData);
} }
function VoucherViewComponent_div_41_table_3_tbody_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoucherViewComponent_div_41_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Record Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Transaction Source Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Debit/Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Interest Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Receivable /Payable Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Receivable Overdue Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Penal Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Receivable Penal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Other Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Added Penal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Dividend Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, VoucherViewComponent_div_41_table_3_tbody_38_Template, 2, 1, "tbody", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, VoucherViewComponent_div_41_table_3_tbody_39_Template, 4, 0, "tbody", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r12.tableData == null ? null : ctx_r12.tableData.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r12.tableData == null ? null : ctx_r12.tableData.length) == 0);
} }
function VoucherViewComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VoucherViewComponent_div_41_table_3_Template, 40, 2, "table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.tableData == null ? null : ctx_r5.tableData.length) != 0);
} }
function VoucherViewComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-voucher-entry", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx_r7.voucherData);
} }
function VoucherViewComponent_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-multi-voucher", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childMessage", ctx_r8.multiVoucherData);
} }
const _c1 = function (a0) { return { "form-submitted": a0 }; };
const _c2 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
class VoucherViewComponent {
    constructor(fb, http, config, ownbranchMasterService, systemParameter) {
        this.fb = fb;
        this.http = http;
        this.config = config;
        this.ownbranchMasterService = ownbranchMasterService;
        this.systemParameter = systemParameter;
        this.dtExportButtonOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.formSubmitted = false;
        //api
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
        this.isLoading = false;
        this.bsValue = new Date();
        // dropdown variables 
        this.ngBranchCode = null;
        this.ngdate = null;
        this.tableData = [];
        this.voucherData = {};
        this.multiVoucherData = {};
        this.voucherMenu = null;
        this.systemParameter.getFormData(1).subscribe(data => {
            this.maxDate = moment__WEBPACK_IMPORTED_MODULE_4__(data.CURRENT_DATE, 'DD/MM/YYYY');
            this.maxDate = this.maxDate._d;
            this.minDate = this.maxDate._d;
            this.tranDate = data.CURRENT_DATE;
            this.ngdate = data.CURRENT_DATE;
        });
    }
    ngOnInit() {
        this.createForm();
        this.getSystemParaDate();
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(data => {
            this.branch_code = data;
        });
    }
    createForm() {
        this.angForm = this.fb.group({
            BRANCH_CODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            TRAN_DATE: ['']
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
        this.systemParameter.getFormData(1).subscribe(data => {
            this.angForm.patchValue({
                'TRAN_DATE': data.CURRENT_DATE,
            });
            this.tranDate = data.CURRENT_DATE;
        });
    }
    //get sys para current date
    getSystemParaDate() {
        this.systemParameter.getFormData(1).subscribe(data => {
            this.angForm.patchValue({
                'TRAN_DATE': data.CURRENT_DATE,
            });
            this.tranDate = data.CURRENT_DATE;
            this.ngdate = data.CURRENT_DATE;
        });
    }
    getBranch(eve) {
        this.ngBranchCode = eve.value;
        this.tableData = [];
        this.isLoading = false;
    }
    viewVoucher() {
        if (this.ngBranchCode != null && this.angForm.controls['TRAN_DATE'].value != '' && this.angForm.controls['TRAN_DATE'].value != null) {
            this.isLoading = true;
            this.tableData = [];
            let tranDT = this.tranDate == this.angForm.controls['TRAN_DATE'].value ? this.tranDate : moment__WEBPACK_IMPORTED_MODULE_4__(this.angForm.controls['TRAN_DATE'].value).format('DD/MM/YYYY');
            let obj = [this.ngBranchCode, tranDT];
            this.http.post(this.url + '/ledger-view/voucherView', obj).subscribe((data) => {
                this.tableData = this.sortData(data);
                if (this.tableData.length != 0) {
                    // console.log(data, 'voucher')
                }
                else {
                    this.tableData = [];
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Info', 'No Records Found', 'info');
                }
                this.isLoading = false;
            });
        }
    }
    sortData(data) {
        return data.sort((a, b) => {
            return (a.TRAN_NO) - (b.TRAN_NO);
        });
    }
    //get saving customer data
    getVoucherData(data) {
        if (data.TRAN_SOURCE_TYPE == 'VC') {
            this.voucherMenu = 'voucher';
            this.voucherData = data.id;
            this.voucherchild.editClickHandler(data.id);
            this.voucherchild.DatatableHideShow = false;
            this.voucherchild.rejectShow = false;
            this.voucherchild.approveShow = false;
            this.voucherchild.showButton = false;
            this.voucherchild.updateShow = false;
            this.voucherchild.newbtnShow = true;
        }
        else if (data.TRAN_SOURCE_TYPE == 'MV' || data.TRAN_SOURCE_TYPE == 'DC') {
            this.voucherMenu = 'multi';
            this.multiVoucherData = data.TRAN_NO;
            this.multichild.editClickHandler(data.TRAN_NO);
            this.multichild.DatatableHideShow = false;
            this.multichild.rejectShow = false;
            this.multichild.approveShow = false;
            this.multichild.showButton = false;
            this.multichild.updateShow = false;
            this.multichild.newbtnShow = true;
        }
    }
    getData(value) {
        let el = this.myDiv.nativeElement;
        el.click();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.ajax.reload();
        });
    }
    onFocus(ele) {
        ele.open();
    }
}
VoucherViewComponent.ɵfac = function VoucherViewComponent_Factory(t) { return new (t || VoucherViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__["SystemMasterParametersService"])); };
VoucherViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoucherViewComponent, selectors: [["app-voucher-view"]], viewQuery: function VoucherViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_theme_transaction_voucher_entry_voucher_entry_component__WEBPACK_IMPORTED_MODULE_7__["VoucherEntryComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_theme_transaction_multi_voucher_multi_voucher_component__WEBPACK_IMPORTED_MODULE_8__["MultiVoucherComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.voucherchild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multichild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 58, vars: 23, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "appSubmit", "", "novalidate", "", 3, "formGroup"], [1, "card-block"], [1, "solid"], [1, "col-sm-12", "col-md-2"], ["for", "BRANCH_CODE"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["appTheme", "", "id", "BRANCH_CODE", "bindValue", "value", "formControlName", "BRANCH_CODE", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", 3, "ngModel", "ngClass", "virtualScroll", "selectOnTab", "ngModelChange", "focus", "change"], ["BRANCH_CODE", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["for", "TRAN_DATE"], [1, "form-group", "input-group"], ["appTheme", "", "type", "text", "placeholder", "dd/mm/yyyy", "name", "TRAN_DATE", "id", "TRAN_DATE", "appButton", "", "minlength", "10", "maxlength", "10", "formControlName", "TRAN_DATE", "bsDatepicker", "", 1, "form-control", 3, "bsValue", "maxDate", "bsConfig", "ngModel", "ngClass", "ngModelChange", "keydown.Tab", "keypress", "bsValueChange"], ["TRAN_DATE", "bsDatepicker"], [1, "col-sm"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["class", "row", 4, "ngIf"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [4, "ngIf"], [1, "app-modal-footer"], ["type", "button", "id", "trigger", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["triggerhide", ""], [3, "value"], [1, "alert", "alert-danger"], [1, "loader-block"], ["id", "loader2", "viewBox", "0 0 100 100"], ["id", "circle-loader2", "cx", "50", "cy", "50", "r", "45"], [1, "table-responsive", "fixTableHead"], ["class", "table table-striped table-bordered table-hover compact", 4, "ngIf"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], [1, "td_center"], [1, "td_right"], [4, "ngFor", "ngForOf"], ["colspan", "10", 1, "no-data-available", 2, "text-align", "center"], [3, "childMessage"]], template: function VoucherViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Voucher View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ng-select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherViewComponent_Template_ng_select_ngModelChange_23_listener($event) { return ctx.ngBranchCode = $event; })("focus", function VoucherViewComponent_Template_ng_select_focus_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.onFocus(_r0); })("change", function VoucherViewComponent_Template_ng_select_change_23_listener($event) { ctx.getBranch($event); return ctx.viewVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, VoucherViewComponent_ng_option_25_Template, 2, 2, "ng-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, VoucherViewComponent_div_26_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Transaction Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherViewComponent_Template_input_ngModelChange_33_listener($event) { return ctx.ngdate = $event; })("keydown.Tab", function VoucherViewComponent_Template_input_keydown_Tab_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return _r3.hide(); })("keypress", function VoucherViewComponent_Template_input_keypress_33_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; })("bsValueChange", function VoucherViewComponent_Template_input_bsValueChange_33_listener() { return ctx.viewVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherViewComponent_Template_button_click_38_listener() { return ctx.viewVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, VoucherViewComponent_div_40_Template, 5, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, VoucherViewComponent_div_41_Template, 4, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "app-modal-basic", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherViewComponent_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43); return _r6.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "perfect-scrollbar", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, VoucherViewComponent_ng_container_52_Template, 2, 1, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, VoucherViewComponent_ng_container_53_Template, 2, 1, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherViewComponent_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43); return _r6.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngBranchCode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.formSubmitted))("virtualScroll", true)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["BRANCH_CODE"].invalid && (ctx.angForm.controls["BRANCH_CODE"].dirty || ctx.angForm.controls["BRANCH_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsValue", ctx.bsValue)("maxDate", ctx.maxDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c2))("ngModel", ctx.ngdate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Number of records:", ctx.tableData == null ? null : ctx.tableData.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.tableData == null ? null : ctx.tableData.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.voucherMenu == "voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.voucherMenu == "multi");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _submit_directive__WEBPACK_IMPORTED_MODULE_13__["SubmitDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], _theme_directive__WEBPACK_IMPORTED_MODULE_14__["ThemeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerInputDirective"], _button_directive__WEBPACK_IMPORTED_MODULE_17__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerDirective"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_18__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"], src_app_theme_transaction_voucher_entry_voucher_entry_component__WEBPACK_IMPORTED_MODULE_7__["VoucherEntryComponent"], src_app_theme_transaction_multi_voucher_multi_voucher_component__WEBPACK_IMPORTED_MODULE_8__["MultiVoucherComponent"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: ridge;\n  border-color: #817d7de3;\n  padding: 0.4%;\n  margin-bottom: 3px;\n  padding-right: 12px;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  overflow-x: auto;\n  padding-top: -46px;\n  margin: 0px;\n  margin-right: -28px;\n}\n\n.main-body[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  padding-bottom: 4% !important;\n  transition: all ease-in 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #ff5252;\n  color: #ff5252;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 11px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 14px;\n  border-radius: 5px;\n  padding-bottom: 22px;\n  padding-top: 4px;\n  height: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px;\n  max-height: 18px;\n  align-items: center;\n  font-size: 11px;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 18px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 5px;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 5px;\n  padding-left: 15px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #fafad7 !important;\n}\n\n.fixTableHead[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: 350px;\n}\n\n.fixTableHead[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  position: sticky;\n  top: -1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdmlldy92b3VjaGVyLXZpZXcvdm91Y2hlci12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBRUksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FBS0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFFSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNQTtFQUNJLG9DQUFBO0FBSEo7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdmlldy92b3VjaGVyLXZpZXcvdm91Y2hlci12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmRpdi5zb2xpZCB7XHJcbiAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXN0eWxlOiByaWRnZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzgxN2Q3ZGUzO1xyXG4gICAgcGFkZGluZzogMC40JTtcclxuICAgIC8vIHBhZGRpbmc6IDAuNyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IC00NnB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yOHB4O1xyXG59XHJcblxyXG4ubWFpbi1ib2R5IC5wYWdlLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjNzO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMC4ycmVtO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjUyNTI7XHJcbiAgICBjb2xvcjogI2ZmNTI1MjtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgICAvLyBmbG9hdDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjJweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1pbi1oZWlnaHQ6IDE4cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxOHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5ib3JkZXItbGFibGUtZmx0IC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHBhZGRpbmc6IDByZW0gMC43cmVtO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY29sLTEsXHJcbi5jb2wtMixcclxuLmNvbC0zLFxyXG4uY29sLTQsXHJcbi5jb2wtNSxcclxuLmNvbC02LFxyXG4uY29sLTcsXHJcbi5jb2wtOCxcclxuLmNvbC05LFxyXG4uY29sLTEwLFxyXG4uY29sLTExLFxyXG4uY29sLTEyLFxyXG4uY29sLFxyXG4uY29sLWF1dG8sXHJcbi5jb2wtc20tMSxcclxuLmNvbC1zbS0yLFxyXG4uY29sLXNtLTMsXHJcbi5jb2wtc20tNCxcclxuLmNvbC1zbS01LFxyXG4uY29sLXNtLTYsXHJcbi5jb2wtc20tNyxcclxuLmNvbC1zbS04LFxyXG4uY29sLXNtLTksXHJcbi5jb2wtc20tMTAsXHJcbi5jb2wtc20tMTEsXHJcbi5jb2wtc20tMTIsXHJcbi5jb2wtc20sXHJcbi5jb2wtc20tYXV0byxcclxuLmNvbC1tZC0xLFxyXG4uY29sLW1kLTIsXHJcbi5jb2wtbWQtMyxcclxuLmNvbC1tZC00LFxyXG4uY29sLW1kLTUsXHJcbi5jb2wtbWQtNixcclxuLmNvbC1tZC03LFxyXG4uY29sLW1kLTgsXHJcbi5jb2wtbWQtOSxcclxuLmNvbC1tZC0xMCxcclxuLmNvbC1tZC0xMSxcclxuLmNvbC1tZC0xMixcclxuLmNvbC1tZCxcclxuLmNvbC1tZC1hdXRvLFxyXG4uY29sLWxnLTEsXHJcbi5jb2wtbGctMixcclxuLmNvbC1sZy0zLFxyXG4uY29sLWxnLTQsXHJcbi5jb2wtbGctNSxcclxuLmNvbC1sZy02LFxyXG4uY29sLWxnLTcsXHJcbi5jb2wtbGctOCxcclxuLmNvbC1sZy05LFxyXG4uY29sLWxnLTEwLFxyXG4uY29sLWxnLTExLFxyXG4uY29sLWxnLTEyLFxyXG4uY29sLWxnLFxyXG4uY29sLWxnLWF1dG8sXHJcbi5jb2wteGwtMSxcclxuLmNvbC14bC0yLFxyXG4uY29sLXhsLTMsXHJcbi5jb2wteGwtNCxcclxuLmNvbC14bC01LFxyXG4uY29sLXhsLTYsXHJcbi5jb2wteGwtNyxcclxuLmNvbC14bC04LFxyXG4uY29sLXhsLTksXHJcbi5jb2wteGwtMTAsXHJcbi5jb2wteGwtMTEsXHJcbi5jb2wteGwtMTIsXHJcbi5jb2wteGwsXHJcbi5jb2wteGwtYXV0byB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG59XHJcblxyXG50cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWQ3ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUlKTtcclxufVxyXG5cclxuLmZpeFRhYmxlSGVhZCB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG5cclxuLmZpeFRhYmxlSGVhZCB0aGVhZCB0ZCB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAtMXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoucherViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voucher-view',
                templateUrl: './voucher-view.component.html',
                styleUrls: ['./voucher-view.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }, { type: _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectConfig"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__["SystemMasterParametersService"] }]; }, { voucherchild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_theme_transaction_voucher_entry_voucher_entry_component__WEBPACK_IMPORTED_MODULE_7__["VoucherEntryComponent"]]
        }], multichild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_theme_transaction_multi_voucher_multi_voucher_component__WEBPACK_IMPORTED_MODULE_8__["MultiVoucherComponent"]]
        }], myDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/view/voucher-view/voucher-view.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/view/voucher-view/voucher-view.module.ts ***!
  \****************************************************************/
/*! exports provided: VoucherViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherViewModule", function() { return VoucherViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _voucher_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voucher-view.component */ "./src/app/theme/view/voucher-view/voucher-view.component.ts");
/* harmony import */ var _voucher_view_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voucher-view-routing.module */ "./src/app/theme/view/voucher-view/voucher-view-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _transaction_voucher_entry_voucher_entry_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../transaction/voucher-entry/voucher-entry.module */ "./src/app/theme/transaction/voucher-entry/voucher-entry.module.ts");
/* harmony import */ var _transaction_multi_voucher_multi_voucher_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../transaction/multi-voucher/multi-voucher.module */ "./src/app/theme/transaction/multi-voucher/multi-voucher.module.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../theme.module */ "./src/app/theme/theme.module.ts");


















class VoucherViewModule {
}
VoucherViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VoucherViewModule });
VoucherViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VoucherViewModule_Factory(t) { return new (t || VoucherViewModule)(); }, providers: [src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["OwnbranchMasterService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_10__["SystemMasterParametersService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _voucher_view_routing_module__WEBPACK_IMPORTED_MODULE_4__["VoucherViewRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["DatepickerModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _transaction_voucher_entry_voucher_entry_module__WEBPACK_IMPORTED_MODULE_13__["VoucherEntryModule"],
            _transaction_multi_voucher_multi_voucher_module__WEBPACK_IMPORTED_MODULE_14__["MultiVoucherModule"],
            _theme_module__WEBPACK_IMPORTED_MODULE_15__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VoucherViewModule, { declarations: [_voucher_view_component__WEBPACK_IMPORTED_MODULE_3__["VoucherViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _voucher_view_routing_module__WEBPACK_IMPORTED_MODULE_4__["VoucherViewRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["DatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _transaction_voucher_entry_voucher_entry_module__WEBPACK_IMPORTED_MODULE_13__["VoucherEntryModule"],
        _transaction_multi_voucher_multi_voucher_module__WEBPACK_IMPORTED_MODULE_14__["MultiVoucherModule"],
        _theme_module__WEBPACK_IMPORTED_MODULE_15__["ThemeModule"]], exports: [_voucher_view_component__WEBPACK_IMPORTED_MODULE_3__["VoucherViewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoucherViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _voucher_view_routing_module__WEBPACK_IMPORTED_MODULE_4__["VoucherViewRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["DatepickerModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _transaction_voucher_entry_voucher_entry_module__WEBPACK_IMPORTED_MODULE_13__["VoucherEntryModule"],
                    _transaction_multi_voucher_multi_voucher_module__WEBPACK_IMPORTED_MODULE_14__["MultiVoucherModule"],
                    _theme_module__WEBPACK_IMPORTED_MODULE_15__["ThemeModule"]
                ],
                exports: [_voucher_view_component__WEBPACK_IMPORTED_MODULE_3__["VoucherViewComponent"]],
                declarations: [_voucher_view_component__WEBPACK_IMPORTED_MODULE_3__["VoucherViewComponent"]],
                providers: [src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["OwnbranchMasterService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_10__["SystemMasterParametersService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~shortcutkey-vouchers-vouchers-module~voucher-view-voucher-view-module.js.map