(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~savings-pigm~27b97b3a"],{

/***/ "./src/app/shared/elements/Narration.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/elements/Narration.service.ts ***!
  \******************************************************/
/*! exports provided: NarrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NarrationService", function() { return NarrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class NarrationService {
    getCharacters() {
        return this.cloneOptions(NarrationService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(NarrationService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(NarrationService.PLAYER_ONE);
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
NarrationService.PLAYER_ONE = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' }
];
NarrationService.ɵfac = function NarrationService_Factory(t) { return new (t || NarrationService)(); };
NarrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NarrationService, factory: NarrationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NarrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/savings-pigmy-account-closing/savings-Pigmy-Account-Closing-routing.module.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/theme/transaction/savings-pigmy-account-closing/savings-Pigmy-Account-Closing-routing.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SavingsPigmyAccountClosingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsPigmyAccountClosingRoutingModule", function() { return SavingsPigmyAccountClosingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _savings_pigmy_account_closing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./savings-pigmy-account-closing.component */ "./src/app/theme/transaction/savings-pigmy-account-closing/savings-pigmy-account-closing.component.ts");





const routes = [
    {
        path: '',
        component: _savings_pigmy_account_closing_component__WEBPACK_IMPORTED_MODULE_2__["SavingsPigmyAccountClosingComponent"],
        data: {
            title: 'SavingsPigmyAccountClosing',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class SavingsPigmyAccountClosingRoutingModule {
}
SavingsPigmyAccountClosingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SavingsPigmyAccountClosingRoutingModule });
SavingsPigmyAccountClosingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SavingsPigmyAccountClosingRoutingModule_Factory(t) { return new (t || SavingsPigmyAccountClosingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SavingsPigmyAccountClosingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavingsPigmyAccountClosingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/savings-pigmy-account-closing/savings-Pigmy-Account-Closing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/theme/transaction/savings-pigmy-account-closing/savings-Pigmy-Account-Closing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SavingsPigmyAccountClosingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsPigmyAccountClosingModule", function() { return SavingsPigmyAccountClosingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _savings_pigmy_account_closing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./savings-pigmy-account-closing.component */ "./src/app/theme/transaction/savings-pigmy-account-closing/savings-pigmy-account-closing.component.ts");
/* harmony import */ var _savings_Pigmy_Account_Closing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./savings-Pigmy-Account-Closing-routing.module */ "./src/app/theme/transaction/savings-pigmy-account-closing/savings-Pigmy-Account-Closing-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var _shared_elements_Narration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/elements/Narration.service */ "./src/app/shared/elements/Narration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../multi-voucher/multi-voucher.service */ "./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts");
/* harmony import */ var _savings_Pigmy_Account_Closing_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./savings-Pigmy-Account-Closing.service */ "./src/app/theme/transaction/savings-pigmy-account-closing/savings-Pigmy-Account-Closing.service.ts");
/* harmony import */ var _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../master/customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../theme.module */ "./src/app/theme/theme.module.ts");






// import {SelectModule} from 'ng-select';














//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



class SavingsPigmyAccountClosingModule {
}
SavingsPigmyAccountClosingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SavingsPigmyAccountClosingModule });
SavingsPigmyAccountClosingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SavingsPigmyAccountClosingModule_Factory(t) { return new (t || SavingsPigmyAccountClosingModule)(); }, providers: [src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], _shared_elements_Narration_service__WEBPACK_IMPORTED_MODULE_9__["NarrationService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_13__["SystemMasterParametersService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["SchemeCodeDropdownService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_16__["SchemeAccountNoService"], _multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_17__["MultiVoucherService"], _savings_Pigmy_Account_Closing_service__WEBPACK_IMPORTED_MODULE_18__["SavingPigmyAccountClosingService"], _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_19__["CustomerIdService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _savings_Pigmy_Account_Closing_routing_module__WEBPACK_IMPORTED_MODULE_3__["SavingsPigmyAccountClosingRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            //  SelectModule,
            // BrowserAnimationsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["DatepickerModule"].forRoot(),
            _theme_module__WEBPACK_IMPORTED_MODULE_20__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SavingsPigmyAccountClosingModule, { declarations: [_savings_pigmy_account_closing_component__WEBPACK_IMPORTED_MODULE_2__["SavingsPigmyAccountClosingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _savings_Pigmy_Account_Closing_routing_module__WEBPACK_IMPORTED_MODULE_3__["SavingsPigmyAccountClosingRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
        //  SelectModule,
        // BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["DatepickerModule"], _theme_module__WEBPACK_IMPORTED_MODULE_20__["ThemeModule"]], exports: [_savings_pigmy_account_closing_component__WEBPACK_IMPORTED_MODULE_2__["SavingsPigmyAccountClosingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavingsPigmyAccountClosingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _savings_Pigmy_Account_Closing_routing_module__WEBPACK_IMPORTED_MODULE_3__["SavingsPigmyAccountClosingRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                    ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                    //  SelectModule,
                    // BrowserAnimationsModule,
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["DatepickerModule"].forRoot(),
                    _theme_module__WEBPACK_IMPORTED_MODULE_20__["ThemeModule"]
                ],
                providers: [src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], _shared_elements_Narration_service__WEBPACK_IMPORTED_MODULE_9__["NarrationService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_13__["SystemMasterParametersService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["SchemeCodeDropdownService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_16__["SchemeAccountNoService"], _multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_17__["MultiVoucherService"], _savings_Pigmy_Account_Closing_service__WEBPACK_IMPORTED_MODULE_18__["SavingPigmyAccountClosingService"], _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_19__["CustomerIdService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                        useClass: _user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
                        multi: true
                    },],
                declarations: [_savings_pigmy_account_closing_component__WEBPACK_IMPORTED_MODULE_2__["SavingsPigmyAccountClosingComponent"]],
                exports: [_savings_pigmy_account_closing_component__WEBPACK_IMPORTED_MODULE_2__["SavingsPigmyAccountClosingComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/savings-pigmy-account-closing/savings-Pigmy-Account-Closing.service.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/theme/transaction/savings-pigmy-account-closing/savings-Pigmy-Account-Closing.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SavingPigmyAccountClosingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingPigmyAccountClosingService", function() { return SavingPigmyAccountClosingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class SavingPigmyAccountClosingService {
    constructor(http) {
        this.http = http;
        // API
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + "/saving-pigmy-account-closing/insert", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Please Input Proper Data !");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http
            .get(this.url + "/saving-pigmy-account-closing/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + "/saving-pigmy-account-closing/updateClosing", data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http
            .delete(this.url + "/saving-pigmy-account-closing/delete/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getSchemeCodeList() {
        return this.http.get(this.url + '/scheme-parameters');
    }
    //get narration data
    getNarrationMaster() {
        return this.http.get(this.url + '/narration');
    }
    //get syspara 
    getSysParaData() {
        return this.http.get(this.url + '/system-master-parameters');
    }
    //approve master
    approve(data) {
        return this.http.post(this.url + '/saving-pigmy-account-closing/approve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //unapprove master
    unapprove(data) {
        return this.http.post(this.url + '/saving-pigmy-account-closing/unapprove', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //reject master
    reject(data) {
        return this.http.post(this.url + '/saving-pigmy-account-closing/reject', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
SavingPigmyAccountClosingService.ɵfac = function SavingPigmyAccountClosingService_Factory(t) { return new (t || SavingPigmyAccountClosingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
SavingPigmyAccountClosingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SavingPigmyAccountClosingService, factory: SavingPigmyAccountClosingService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavingPigmyAccountClosingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/savings-pigmy-account-closing/savings-pigmy-account-closing.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/theme/transaction/savings-pigmy-account-closing/savings-pigmy-account-closing.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: SavingsPigmyAccountClosingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsPigmyAccountClosingComponent", function() { return SavingsPigmyAccountClosingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../multi-voucher/multi-voucher.service */ "./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts");
/* harmony import */ var _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../master/customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _savings_Pigmy_Account_Closing_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./savings-Pigmy-Account-Closing.service */ "./src/app/theme/transaction/savings-pigmy-account-closing/savings-Pigmy-Account-Closing.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");























const _c0 = ["triggerhide"];
const _c1 = ["narrationhide"];
function SavingsPigmyAccountClosingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.previewImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SavingsPigmyAccountClosingComponent_ng_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r31.label, "");
} }
function SavingsPigmyAccountClosingComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SavingsPigmyAccountClosingComponent_div_29_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["BRANCH_CODE"].errors == null ? null : ctx_r3.angForm.controls["BRANCH_CODE"].errors.required);
} }
function SavingsPigmyAccountClosingComponent_ng_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r33.id, " ", values_r33.label, " ");
} }
function SavingsPigmyAccountClosingComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SavingsPigmyAccountClosingComponent_div_50_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r6.angForm.controls["AC_TYPE"].errors.required);
} }
function SavingsPigmyAccountClosingComponent_ng_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r35.label, " ", values_r35.name, "");
} }
function SavingsPigmyAccountClosingComponent_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SavingsPigmyAccountClosingComponent_div_63_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_NO"].errors == null ? null : ctx_r9.angForm.controls["AC_NO"].errors.required);
} }
function SavingsPigmyAccountClosingComponent_label_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Matured Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_label_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Premature Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Posted Interest Amount -");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_span_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_div_148_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "- Other Charges Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SavingsPigmyAccountClosingComponent_div_148_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.getNetInterest(); })("focus", function SavingsPigmyAccountClosingComponent_div_148_Template_input_focus_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.selectAllContent($event); })("keyup", function SavingsPigmyAccountClosingComponent_div_148_Template_input_keyup_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.getDecimal($event); })("focusout", function SavingsPigmyAccountClosingComponent_div_148_Template_input_focusout_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.getDecimalPoint($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_div_149_ng_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r44.label, " ", values_r44.name, "");
} }
function SavingsPigmyAccountClosingComponent_div_149_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Other Charges To General ledger Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-select", 111, 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SavingsPigmyAccountClosingComponent_div_149_Template_ng_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.ngGlAcno = $event; })("focus", function SavingsPigmyAccountClosingComponent_div_149_Template_ng_select_focus_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.onFocus(_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SavingsPigmyAccountClosingComponent_div_149_ng_option_9_Template, 2, 3, "ng-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.ngGlAcno)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.GlACNo);
} }
function SavingsPigmyAccountClosingComponent_div_150_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Commission Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SavingsPigmyAccountClosingComponent_div_150_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.getNetInterest(); })("focus", function SavingsPigmyAccountClosingComponent_div_150_Template_input_focus_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.selectAllContent($event); })("keyup", function SavingsPigmyAccountClosingComponent_div_150_Template_input_keyup_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.getDecimal($event); })("focusout", function SavingsPigmyAccountClosingComponent_div_150_Template_input_focusout_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.getDecimalPoint($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_div_151_ng_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r55.label, " ", values_r55.name, "");
} }
function SavingsPigmyAccountClosingComponent_div_151_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Commission To General ledger Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-select", 114, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SavingsPigmyAccountClosingComponent_div_151_Template_ng_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.ngCommission = $event; })("focus", function SavingsPigmyAccountClosingComponent_div_151_Template_ng_select_focus_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.onFocus(_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SavingsPigmyAccountClosingComponent_div_151_ng_option_9_Template, 2, 3, "ng-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.ngCommission)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.GlACNo);
} }
function SavingsPigmyAccountClosingComponent_div_192_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r70.id, " ", values_r70.label, "");
} }
function SavingsPigmyAccountClosingComponent_div_192_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_div_192_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SavingsPigmyAccountClosingComponent_div_192_div_30_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r62.angForm.controls["Tscheme"].errors == null ? null : ctx_r62.angForm.controls["Tscheme"].errors.required);
} }
function SavingsPigmyAccountClosingComponent_div_192_ng_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r72.label, " ", values_r72.name, "");
} }
function SavingsPigmyAccountClosingComponent_div_192_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_div_192_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SavingsPigmyAccountClosingComponent_div_192_div_42_div_1_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r65.angForm.controls["TschemeAC"].errors == null ? null : ctx_r65.angForm.controls["TschemeAC"].errors.required);
} }
function SavingsPigmyAccountClosingComponent_div_192_button_62_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_div_192_button_62_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r74.addTransferAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_div_192_button_63_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_div_192_button_63_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r76.updateTransferAcccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_div_192_tbody_76_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_div_192_tbody_76_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const indexOfelement_r80 = ctx.index; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r81.editTransferAccount(indexOfelement_r80); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r79.TRANSFER_ACNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r79 == null ? null : data_r79.NARRATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r79.TRAN_AMOUNT);
} }
function SavingsPigmyAccountClosingComponent_div_192_tbody_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SavingsPigmyAccountClosingComponent_div_192_tbody_76_tr_1_Template, 9, 3, "tr", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r68.multigrid);
} }
function SavingsPigmyAccountClosingComponent_div_192_tbody_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function SavingsPigmyAccountClosingComponent_div_192_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cheque Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SavingsPigmyAccountClosingComponent_div_192_Template_input_keyup_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.chequeNoData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cheque Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 121, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.Tab", function SavingsPigmyAccountClosingComponent_div_192_Template_input_keydown_Tab_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return _r59.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Scheme Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "sub", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ng-select", 124, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SavingsPigmyAccountClosingComponent_div_192_Template_ng_select_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.ngschemecode = $event; })("focus", function SavingsPigmyAccountClosingComponent_div_192_Template_ng_select_focus_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.onFocus(_r60); })("change", function SavingsPigmyAccountClosingComponent_div_192_Template_ng_select_change_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.getTransferAccountList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SavingsPigmyAccountClosingComponent_div_192_ng_option_29_Template, 2, 3, "ng-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SavingsPigmyAccountClosingComponent_div_192_div_30_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "sub", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ng-select", 128, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SavingsPigmyAccountClosingComponent_div_192_Template_ng_select_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.ngacno = $event; })("change", function SavingsPigmyAccountClosingComponent_div_192_Template_ng_select_change_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.getTransferAccountDeatil($event); })("focus", function SavingsPigmyAccountClosingComponent_div_192_Template_ng_select_focus_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.onFocus(_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SavingsPigmyAccountClosingComponent_div_192_ng_option_41_Template, 2, 3, "ng-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SavingsPigmyAccountClosingComponent_div_192_div_42_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "textarea", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SavingsPigmyAccountClosingComponent_div_192_Template_textarea_ngModelChange_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.narration = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_div_192_Template_i_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](308); return _r25.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "sub", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function SavingsPigmyAccountClosingComponent_div_192_Template_input_keypress_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, SavingsPigmyAccountClosingComponent_div_192_button_62_Template, 2, 0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, SavingsPigmyAccountClosingComponent_div_192_button_63_Template, 2, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, SavingsPigmyAccountClosingComponent_div_192_tbody_76_Template, 2, 1, "tbody", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, SavingsPigmyAccountClosingComponent_div_192_tbody_77_Template, 4, 0, "tbody", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2))("maxDate", ctx_r18.maxDate)("minDate", ctx_r18.minDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.ngschemecode)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.scheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.angForm.controls["Tscheme"].invalid && (ctx_r18.angForm.controls["Tscheme"].dirty || ctx_r18.angForm.controls["Tscheme"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.ngacno)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.transferAcno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.angForm.controls["TschemeAC"].invalid && (ctx_r18.angForm.controls["TschemeAC"].dirty || ctx_r18.angForm.controls["TschemeAC"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.narration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.jointShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.jointUpdateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r18.multigrid == null ? null : ctx_r18.multigrid.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r18.multigrid == null ? null : ctx_r18.multigrid.length) == 0);
} }
function SavingsPigmyAccountClosingComponent_button_195_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_button_195_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); ctx_r95.submit(); return _r1.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_button_196_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_button_196_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_button_197_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_button_197_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.resetForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_button_199_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_button_199_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_button_201_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_button_201_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.Approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_button_202_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_button_202_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.unApprove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unapprove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingsPigmyAccountClosingComponent_tr_324_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_tr_324_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const item_r107 = ctx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.getNarration(item_r107.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r107.NARRATION, " ");
} }
function SavingsPigmyAccountClosingComponent_tr_345_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_tr_345_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const item_r110 = ctx.$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.getFormNarration(item_r110.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r110.NARRATION, " ");
} }
const _c3 = function (a0) { return { "form-submitted": a0 }; };
class SavingsPigmyAccountClosingComponent {
    constructor(
    // public NarrationService: NarrationService,
    fb, http, ownbranchMasterService, config, systemParameter, schemeCodeDropdownService, schemeAccountNoService, _service1, _CustomerIdService, _service) {
        this.fb = fb;
        this.http = http;
        this.ownbranchMasterService = ownbranchMasterService;
        this.config = config;
        this.systemParameter = systemParameter;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.schemeAccountNoService = schemeAccountNoService;
        this._service1 = _service1;
        this._CustomerIdService = _CustomerIdService;
        this._service = _service;
        this.reloadTablePassing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formSubmitted = false;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        this.jointShowButton = true;
        this.jointUpdateShow = false;
        this.CashTrue = true;
        this.TransferTrue = false;
        this.ngBranchCode = null;
        this.ngdate = null;
        this.ngscheme = null;
        this.accountedit = null;
        this.ngacno = null;
        this.ngglacno = null;
        this.selectedScheme = null;
        this.multigrid = [];
        //variables for  add and update button
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = true;
        this.ngFnarration = null;
        // for radio button
        this.isTransfer = false;
        this.selectedCode = null;
        this.ngschemecode = null;
        this.showChequeDetails = false;
        this.headShow = false;
        this.mainMaster = new Array();
        this.showAdd = true;
        this.showUpdate = false;
        this.customerImg = 'assets/images/nouser.png';
        this.signture = 'assets/images/nosignature.png';
        this.ngCommission = null;
        this.DatatableHideShow = true;
        this.rejectShow = false;
        this.unapproveShow = false;
        this.approveShow = false;
        this.ngGlAcno = null;
        this.INT_RATESHOW = 0;
        this.isHideForSaving = true;
        this.PreviewDiv = false;
        this.modalClass = 'modalHide';
        this.NET_EXC_INTAMT = 0;
        this.ledgerBalance = 0;
        this.isPrematureClose = 0;
        this.transferTotalAmount = 0;
        if (this.childMessage != undefined) {
            this.editClickHandler(this.childMessage);
        }
    }
    ngOnInit() {
        this.createForm();
        this.getSystemParaDate();
        //Narration List
        this._service.getNarrationMaster().subscribe(data => {
            this.narrationList = data;
        });
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.branch_code = data;
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.angForm.controls['BRANCH_CODE'].enable();
            this.ngBranchCode = result.branch.id;
        }
        else {
            this.angForm.controls['BRANCH_CODE'].disable();
            this.angForm.patchValue({
                'BRANCH_CODE': result.branch.id
            });
            this.ngBranchCode = result.branch.id;
        }
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            var allscheme = data.filter(function (scheme) {
                return (scheme.name == 'SB' || scheme.name == 'PG');
            });
            this.allScheme = allscheme;
        });
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            var allscheme = data.filter(function (scheme) {
                return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'TD' || scheme.name == 'PG' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'GL');
            });
            this.scheme = allscheme;
        });
        this.schemeAccountNoService.getGeneralLedgerListForClosing().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.http.get(this.url + '/system-master-parameters/' + 1).subscribe(data1 => {
                this.GlACNo = data.filter(ele => ele.label !== Number(data1['CASH_IN_HAND_ACNO']));
            });
        });
    }
    createForm() {
        this.angForm = this.fb.group({
            BRANCH_CODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            AC_TYPE: [''],
            AC_NO: [''],
            Voucher_Number: [''],
            OP_Date: [''],
            RENEWAL_DATE: [''],
            INT_RATE: [0],
            LAST_INT: [0],
            MATURITY_DATE: [''],
            INT_RATE2: [0],
            MONTHS: [''],
            INT_RATE3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            INT_RATE4: [''],
            INT_RATE5: [''],
            AMOUNT: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            INT_RATE6: [''],
            GL_AC: [''],
            SAVING_PIGMY: ['FormC'],
            chequeNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            ChequeDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            Token_Num: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            NARRATION: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            Tscheme: ['',],
            TschemeAC: [''],
            LastIntDate: [''],
            temp_over_draft: [''],
            over_draft: [''],
            token: [''],
            slip_no: [''],
            Intdate: [''],
            amount: [0],
            DepositAmount: [0],
            OpenDate: [''],
            OTHER_CHARGES_GLACNO: [],
            OTHER_CHARGES_AMOUNT: [0],
            COMMISSION_GLACNO: [],
            COMMISSION_CHARGES: [0],
            Months: [''],
            renewalDate: [''],
            maturityDate: [''],
            AC_Months: [''],
            AC_DAYS: [''],
            INTRATE: [''],
            INTREST_RATE: [0],
            CalCulateAmt: [0],
            TotalInterest: [0],
            LEDGER_BAL: [0],
            PAYABLE_INT: [0],
            POSTED_INT: [0],
            NET_INT: [0],
            PENAL_INT: [0],
            NETPAYABLE_AMT: [0],
            Fnarration: [''],
            EXCESS_INT: [0],
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.angForm.controls['BRANCH_CODE'].enable();
            this.ngBranchCode = result.branch.id;
        }
        else {
            this.angForm.controls['BRANCH_CODE'].disable();
            this.angForm.patchValue({
                'BRANCH_CODE': result.branch.id
            });
            this.ngBranchCode = result.branch.id;
        }
    }
    schemechange(event) {
        this.ngGlAcno = Number(event.SVR_CHARGE_GLCODE);
        this.getschemename = event.name;
        this.ngscheme = event.value;
        this.OTHER_CHARGES_AMOUNT = event.SVR_CHARGE_RATE;
        this.isInterestApplicable = event.intapp;
        this.schemeACNo = null;
        this.getAccountlist();
    }
    //  Fetching account from seleted scheme
    getAccountlist() {
        this.accountedit = null;
        this.obj = [this.ngscheme, this.ngBranchCode];
        switch (this.getschemename) {
            case 'SB':
                this.schemeAccountNoService.getSavingSchemeListforClosing(this.obj).subscribe(data => {
                    this.schemeACNo = data;
                });
                this.isHideForSaving = false;
                break;
            case 'PG':
                this.schemeAccountNoService.getPigmyAccountSchemeListforClosing(this.obj).subscribe(data => {
                    this.schemeACNo = data;
                });
                this.isHideForSaving = true;
                break;
        }
    }
    // get account no according scheme for transfer
    getTransferAccountList(event) {
        this.transferSchemeDetails = event;
        this.obj = [this.ngschemecode, this.ngBranchCode];
        this.ngacno = null;
        this.transferAcnoType = event.name;
        switch (event.name) {
            case 'SB':
                this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
                    this.transferAcno = data;
                });
                break;
            case 'SH':
                this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
                    this.transferAcno = data;
                });
                break;
            case 'CA':
                this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
                    this.transferAcno = data;
                });
                break;
            case 'LN':
                this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
                    this.transferAcno = data;
                });
                break;
            case 'TD':
                this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
                    this.transferAcno = data;
                });
                break;
            case 'DS':
                this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
                    this.transferAcno = data;
                });
                break;
            case 'CC':
                this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
                    this.transferAcno = data;
                });
                break;
            case 'GS':
                this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
                    this.transferAcno = data;
                });
                break;
            case 'PG':
                this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
                    this.transferAcno = data;
                });
                break;
            case 'AG':
                this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
                    this.transferAcno = data;
                });
                break;
            case 'IV':
                this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
                    this.transferAcno = data;
                });
                break;
        }
    }
    getTransferAccountDeatil(event) {
        this.transferAccountDetails = event;
    }
    //get sys para current date
    getSystemParaDate() {
        this.systemParameter.getFormData(1).subscribe(data => {
            this.sysparaData = data;
            this.date = data.CURRENT_DATE;
            this.logDate = data.CURRENT_DATE;
            let nextDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.date, 'DD/MM/YYYY').add(3, 'month').format('YYYY-MM-DD');
            let lastDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.date, 'DD/MM/YYYY').subtract(3, 'month').format('YYYY-MM-DD');
            this.maxDate = new Date(nextDate);
            this.maxDate.setDate(this.maxDate.getDate());
            this.minDate = new Date(lastDate);
            this.minDate.setDate(this.minDate.getDate());
            this.angForm.patchValue({
                'DATE': data.CURRENT_DATE,
            });
        });
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
    getAccountDetails(event) {
        this.bankacno = event.bankacno;
        this.customerId = event.customerId;
        this.dormant = event.dormant;
        let mem = [this.bankacno, this.getschemename, this.ngscheme];
        this.preMature = null;
        this.intrateShow = 0;
        this.transferTotalAmount = 0;
        this.NET_EXC_INTAMT = 0;
        this.multigrid = [];
        this.angForm.patchValue({
            INTREST_RATE: 0,
            Months: 0,
            CalCulateAmt: 0,
            TotalInterest: 0,
            POSTED_INT: 0,
            NET_INT: 0,
            Fnarration: null,
            LEDGER_BAL: 0,
            PAYABLE_INT: 0,
            OTHER_CHARGES_AMOUNT: 0,
            OTHER_CHARGES_GLACNO: null,
            COMMISSION_CHARGES: 0,
            COMMISSION_GLACNO: null,
            PENAL_INT: 0,
            NETPAYABLE_AMT: 0
        });
        this.modalClass = 'modalShow';
        this.http.get(this.url + '/saving-pigmy-account-closing/details/' + mem).subscribe((data) => {
            this.modalClass = 'modalHide';
            if (data[0].ODGIVEN == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Overdraft given so Account cannot close', 'error');
                this.accountedit = null;
                return;
            }
            else if (data[0].ISFREEZ == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Freezed account so Account cannot close', 'error');
                this.accountedit = null;
                return;
            }
            else if (data[0].ISCLOSED == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Account is already closed so account cannot close', 'error');
                this.accountedit = null;
                return;
            }
            else if (data[0].PASSINGPENDING == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Account is already closed but passing pending', 'error');
                this.accountedit = null;
                return;
            }
            else if (Number(data[0].ledgerBal) >= 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops', 'Balance is insufficient so account cannot close', 'error');
                this.accountedit = null;
                return;
            }
            this.preMature = data[0].preMature;
            this.OpenDate = data[0].AC_OPDATE;
            this.ledgerBalance = Math.abs(data[0].ledgerBal);
            this.renewalDate = data[0].AC_ASON_DATE;
            this.INTRATE = data[0].INT_RATE;
            this.INT_RATESHOW = data[0].intrate;
            this.LastIntDate = data[0].AC_LINTEDT;
            this.maturityDate = data[0].AC_EXPDT;
            this.angForm.patchValue({
                AC_Months: data[0].AC_MONTHS,
                AC_DAYS: data[0].AC_DAYS,
                POSTED_INT: data[0].post_Interest,
                LEDGER_BAL: Number(Math.abs(data[0].ledgerBal)).toFixed(2),
                PAYABLE_INT: Number(Math.abs(data[0].payableInterest)).toFixed(2),
                PENAL_INT: Number(data[0].penalInterest).toFixed(2)
            });
            if (this.isInterestApplicable == '1') {
                this.angForm.patchValue({
                    INTREST_RATE: data[0].INT_RATE,
                    TotalInterest: Number(Math.abs(data[0].ledgerBal)) == 0 ? 0 : Number(this.customRound(data[0].currentInterest)),
                    CalCulateAmt: Number(Math.abs(data[0].ledgerBal)) == 0 ? 0 : Number(this.customRound(data[0].currentInterest))
                });
                this.intrateShow = data[0].INT_RATE;
            }
            else {
                this.angForm.patchValue({
                    INTREST_RATE: '0',
                    TotalInterest: 0,
                    CalCulateAmt: 0
                });
                this.intrateShow = 0;
            }
            if (data[0].post_Interest < 0) {
                this.angForm.patchValue({
                    // EXCESS_INT: Number(data[0].post_Interest).toFixed(2),
                    NET_INT: Number(data[0].post_Interest).toFixed(0),
                    POSTED_INT: 0,
                });
                this.NET_EXC_INTAMT = Number(data[0].post_Interest);
            }
            else if (data[0].post_Interest > 0) {
                this.angForm.patchValue({
                    POSTED_INT: Number(data[0].post_Interest).toFixed(0),
                    NET_INT: 0
                    // EXCESS_INT: 0
                });
                this.NET_EXC_INTAMT = 0;
            }
            else {
                this.angForm.patchValue({
                    POSTED_INT: 0,
                    NET_INT: 0
                    // EXCESS_INT: 0
                });
                this.NET_EXC_INTAMT = 0;
            }
            let netInt = 0;
            var months;
            netInt = Number(this.angForm.controls['TotalInterest'].value) - Number(data[0].post_Interest);
            if (data[0].AC_LINTEDT != "" && data[0].AC_LINTEDT != null) {
                var date1 = data[0].AC_LINTEDT;
                var date2 = this.angForm.controls['DATE'].value;
                var b = moment__WEBPACK_IMPORTED_MODULE_5__(date1, "DD/MM/YYYY");
                var a = moment__WEBPACK_IMPORTED_MODULE_5__(date2, "DD/MM/YYYY");
                months = a.diff(b, 'months');
            }
            else {
                var date1 = data[0].AC_OPDATE;
                var date2 = this.angForm.controls['DATE'].value;
                var b = moment__WEBPACK_IMPORTED_MODULE_5__(date1, "DD/MM/YYYY");
                var a = moment__WEBPACK_IMPORTED_MODULE_5__(date2, "DD/MM/YYYY");
                months = a.diff(b, 'months');
            }
            this.angForm.patchValue({
                Months: months,
                NET_INT: Math.abs(this.customRound(netInt))
            });
            this.getNetInterest();
            this.showCustomerDeatils();
        }, (error) => {
            var _a;
            console.log(error, 'err');
            this.modalClass = 'modalHide';
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message, 'error');
        });
    }
    calculation() {
        this.angForm.patchValue({
            OTHER_CHARGES_GLACNO: this.OTHER_CHARGES_GLACNO,
            OTHER_CHARGES_AMOUNT: this.OTHER_CHARGES_AMOUNT
        });
    }
    chequeNoData(event) {
        //debugger
        this.angForm.patchValue({
            chequeNo: event.target.value.toUpperCase()
        });
    }
    getNetInterest() {
        let ledger_bal = Number(this.angForm.controls['LEDGER_BAL'].value);
        let net_int = Number(this.angForm.controls['NET_INT'].value);
        let other_charge_amt = Number(this.angForm.controls['OTHER_CHARGES_AMOUNT'].value);
        let comm_amt = Number(this.angForm.controls['COMMISSION_CHARGES'].value);
        let penal_amt = Number(this.angForm.controls['PENAL_INT'].value);
        let totalNetAmt = Number(this.NET_EXC_INTAMT) >= 0 ? (Math.abs(ledger_bal + net_int - other_charge_amt - comm_amt - penal_amt)).toFixed(2) : (Math.abs(ledger_bal - Math.abs(net_int) - other_charge_amt - comm_amt - penal_amt)).toFixed(2);
        this.preMature == false || this.preMature == null ? totalNetAmt = (Number(totalNetAmt) + Number(this.angForm.controls['PAYABLE_INT'].value)).toFixed(2) : totalNetAmt = totalNetAmt;
        this.angForm.patchValue({
            NETPAYABLE_AMT: totalNetAmt
        });
    }
    getTotalNetInterest() {
        let total_int = this.angForm.controls['TotalInterest'].value;
        let post_int = this.angForm.controls['POSTED_INT'].value;
        let netInt = (Number(total_int) - Number(post_int)).toFixed(0);
        this.NET_EXC_INTAMT = Number(total_int) - Number(post_int);
        this.angForm.patchValue({
            NET_INT: Math.abs(Number(netInt))
        });
        this.getNetInterest();
    }
    //transfer account grid functions
    addTransferAccount() {
        this.formSubmitted = true;
        let formVal = this.angForm.value;
        var object = {
            TRANSFER_ACNO: formVal.TschemeAC,
            TRANSFER_ACTYPE: this.ngschemecode,
            ACNO: this.ngacno,
            NARRATION: formVal.NARRATION,
            TRAN_AMOUNT: formVal.amount,
            TRANSFER_ACNOTYPE: this.transferAcnoType,
            AC_CLOSED: '0'
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
        else if (this.multigrid.find(ob => ob['TRANSFER_ACNO'] === object.TRANSFER_ACNO)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Info', 'This Account is Already Exists!', 'error');
        }
        else {
            if (object.TRANSFER_ACNO != this.accountedit) {
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
                    let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value);
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
                            let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value);
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
                            let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value);
                            if (comparison >= this.transferTotalAmount) {
                                this.multigrid.push(object);
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
                    this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount);
                    let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value);
                    if (comparison >= this.transferTotalAmount) {
                        this.multigrid.push(object);
                        this.resetgrid();
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${Math.abs(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
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
    editTransferAccount(id) {
        this.transferIndex = id;
        this.transferACID = this.multigrid[id].id;
        this.transferGrid = this.multigrid[id];
        this.jointShowButton = false;
        this.jointUpdateShow = true;
        this.angForm.patchValue({
            NARRATION: this.multigrid[id].NARRATION,
            amount: this.multigrid[id].TRAN_AMOUNT
        });
        this.ngacno = this.multigrid[id].ACNO;
        this.ngschemecode = this.multigrid[id].TRANSFER_ACTYPE;
        this.transferAcnoType = this.multigrid[id].TRANSFER_ACNOTYPE;
    }
    updateTransferAcccount() {
        let index = this.transferIndex;
        this.jointShowButton = true;
        this.jointUpdateShow = false;
        let cheqDate;
        const formVal = this.angForm.value;
        var object = {
            TRANSFER_ACNO: formVal.TschemeAC,
            TRANSFER_ACTYPE: this.ngschemecode,
            ACNO: this.ngacno,
            NARRATION: formVal.NARRATION,
            TRAN_AMOUNT: formVal.amount,
            TRANSFER_ACNOTYPE: this.transferAcnoType,
            id: this.transferACID
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
        else {
            if (object.TRANSFER_ACNO != this.accountedit) {
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
                    let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value);
                    if (comparison >= this.transferTotalAmount) {
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
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('info', `Please check Transfer Amount with ${(comparison - this.transferTotalAmount).toFixed(2)}`, 'info');
                        this.transferTotalAmount = this.transferTotalAmount - Number(formVal.amount);
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
                            let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value);
                            if (comparison >= this.transferTotalAmount) {
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
                            this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount);
                            let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value);
                            if (comparison >= this.transferTotalAmount) {
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
                    this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount);
                    let comparison = Number(this.angForm.controls['NETPAYABLE_AMT'].value);
                    if (comparison >= this.transferTotalAmount) {
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
    resetgrid() {
        this.ngacno = null;
        this.ngschemecode = null;
        this.angForm.controls["NARRATION"].reset();
        this.angForm.controls["amount"].reset();
    }
    //transfer and cash radio button effect
    isFormA(value) {
        if (value == 1) {
            this.isTransfer = false;
        }
        if (value == 2) {
            this.isTransfer = true;
        }
    }
    showCustomerDeatils() {
        if (this.angForm.controls['AC_NO'].value != null) {
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
        const formVal = this.angForm.value;
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (formVal.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLE_AMT'].value) != this.transferTotalAmount) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Check Net Payable Amount and Transfer Amount!", "info");
        }
        else if ((formVal.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLE_AMT'].value) == this.transferTotalAmount) || formVal.SAVING_PIGMY == 'FormC') {
            const dataToSend = {
                LEDGER_BAL: formVal.LEDGER_BAL,
                TRAN_DATE: formVal.DATE,
                TRAN_TYPE: formVal.SAVING_PIGMY == 'FormT' ? 'TR' : 'CS',
                BRANCH_CODE: this.ngBranchCode,
                TRAN_ACNOTYPE: this.getschemename,
                TRAN_ACTYPE: this.ngscheme,
                TRAN_ACNO: this.bankacno,
                PAID_INTEREST_AMOUNT: formVal.POSTED_INT,
                OTHER_CHARGES_AMOUNT: formVal.OTHER_CHARGES_AMOUNT,
                PENAL_INTEREST_AMOUNT: formVal.PENAL_INT,
                NET_INTEREST_AMOUNT: formVal.NET_INT,
                TOTAL_INTEREST_AMOUNT: formVal.TotalInterest,
                NET_PAYABLE_AMOUNT: formVal.NETPAYABLE_AMT,
                INTEREST_RATE: formVal.INTREST_RATE,
                IS_PREMATURE_CLOSE: this.preMature == true ? 1 : 0,
                EXCESS_INTEREST: this.NET_EXC_INTAMT >= 0 ? 0 : this.NET_EXC_INTAMT,
                NARRATION: formVal.Fnarration,
                // TOKEN_NO: formVal.Token_Num,
                COMMISSION_CHARGES: formVal.COMMISSION_CHARGES,
                COMMISSION_GLACNO: formVal.COMMISSION_GLACNO,
                OTHER_CHARGES_GLACNO: formVal.OTHER_CHARGES_GLACNO,
                PAYABLE_INTEREST_AMOUNT: formVal.PAYABLE_INT,
                CHEQUE_NO: formVal.chequeNo,
                CHEQUE_DATE: (formVal.ChequeDate == '' || formVal.ChequeDate == 'Invalid date') ? '' : moment__WEBPACK_IMPORTED_MODULE_5__(formVal.ChequeDate).format('DD/MM/YYYY'),
                USER: result.id,
                multigrid: this.multigrid
            };
            this._service.postData(dataToSend).subscribe(data => {
                // this.getVoucherData();
                // Swal.fire('Success!', 'Account Closed Successfully !',  'success');
                const successMessage = ` Account Closed successfully ! Voucher Number ${data}`;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', successMessage, 'success');
                this.multigrid = [];
                this.resetForm();
            }, err => {
                console.log(err);
            });
        }
    }
    addNewData() {
        var button = document.getElementById('triggerhide');
        button.click();
        this.reloadTablePassing.emit();
        this.resetForm();
    }
    resetForm() {
        this.ngOnInit();
        this.createForm();
        this.preMature = null;
        this.OpenDate = '';
        this.ledgerBalance = 0;
        this.renewalDate = '';
        this.INTRATE = 0;
        this.INT_RATESHOW = 0;
        this.LastIntDate = '';
        this.maturityDate = '';
        var button = document.getElementById('triggerhide');
        button.click();
        this.reloadTablePassing.emit();
    }
    //function toggle update to add button
    updateData() {
        const formVal = this.angForm.value;
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (formVal.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLE_AMT'].value) != this.transferTotalAmount) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Warning!", "Please Check Net Payable Amount and Transfer Amount!", "info");
        }
        else if ((formVal.SAVING_PIGMY == 'FormT' && Number(this.angForm.controls['NETPAYABLE_AMT'].value) == this.transferTotalAmount) || formVal.SAVING_PIGMY == 'FormC') {
            const dataToSend = {
                id: this.updateID,
                TRAN_NO: this.TRAN_NO,
                LEDGER_BAL: formVal.LEDGER_BAL,
                TRAN_DATE: formVal.DATE,
                TRAN_TYPE: formVal.SAVING_PIGMY == 'FormT' ? 'TR' : 'CS',
                BRANCH_CODE: this.ngBranchCode,
                TRAN_ACNOTYPE: this.getschemename,
                TRAN_ACTYPE: this.ngscheme,
                TRAN_ACNO: this.bankacno,
                PAID_INTEREST_AMOUNT: formVal.POSTED_INT,
                OTHER_CHARGES_AMOUNT: formVal.OTHER_CHARGES_AMOUNT,
                PENAL_INTEREST_AMOUNT: formVal.PENAL_INT,
                NET_INTEREST_AMOUNT: formVal.NET_INT,
                TOTAL_INTEREST_AMOUNT: formVal.TotalInterest,
                NET_PAYABLE_AMOUNT: formVal.NETPAYABLE_AMT,
                INTEREST_RATE: formVal.INTREST_RATE,
                IS_PREMATURE_CLOSE: this.preMature == true ? 1 : 0,
                NARRATION: formVal.Fnarration,
                // TOKEN_NO: formVal.Token_Num,
                COMMISSION_CHARGES: formVal.COMMISSION_CHARGES,
                COMMISSION_GLACNO: formVal.COMMISSION_GLACNO,
                OTHER_CHARGES_GLACNO: formVal.OTHER_CHARGES_GLACNO,
                PAYABLE_INTEREST_AMOUNT: formVal.PAYABLE_INT,
                CHEQUE_NO: formVal.chequeNo,
                // CHEQUE_DATE: (formVal.ChequeDate == '' || formVal.ChequeDate == 'Invalid date') ? '' : moment(formVal.ChequeDate).format('DD/MM/YYYY'),
                USER: result.id,
                multigrid: this.multigrid,
                EXCESS_INTEREST: this.NET_EXC_INTAMT >= 0 ? 0 : this.NET_EXC_INTAMT,
            };
            let ChequeDate;
            if (this.updatecheckdata.CHEQUE_DATE != formVal.ChequeDate) {
                (formVal.ChequeDate == 'Invalid date' || formVal.ChequeDate == '' || formVal.ChequeDate == null) ? (ChequeDate = '', formVal['ChequeDate'] = ChequeDate) : (ChequeDate = formVal.ChequeDate, dataToSend['CHEQUE_DATE'] = moment__WEBPACK_IMPORTED_MODULE_5__(ChequeDate).format('DD/MM/YYYY'));
            }
            else {
                dataToSend['CHEQUE_DATE'] = formVal.ChequeDate;
            }
            this._service.updateData(dataToSend).subscribe(data => {
                // this.getVoucherData();
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', 'Account Closing Updated Successfully !', 'success');
                var button = document.getElementById('triggerhide');
                button.click();
                this.reloadTablePassing.emit();
                this.multigrid = [];
                this.resetForm();
            }, err => {
                console.log(err);
            });
        }
    }
    //function for edit button clicked
    editClickHandler(id) {
        this._service.getFormData(id).subscribe((data) => {
            // console.log(data);
            this.angForm.disable();
            let mem = [data.TRAN_ACNO, data.TRAN_ACNOTYPE, data.TRAN_ACTYPE];
            this.http.get(this.url + '/saving-pigmy-account-closing/details/' + mem).subscribe((data1) => {
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
                this.updatecheckdata = data;
                // if (Number(data1[0].ledgerBal) >= 0) {
                //   Swal.fire('Oops', 'Account cannot close', 'error')
                //   return
                // }
                this.preMature = data1[0].preMature;
                this.OpenDate = data1[0].AC_OPDATE;
                this.ledgerBalance = Math.abs(data.LEDGER_BAL);
                this.renewalDate = data1[0].AC_ASON_DATE;
                this.INTRATE = data1[0].INT_RATE;
                this.LastIntDate = data1[0].AC_LINTEDT;
                this.maturityDate = data1[0].AC_EXPDT;
                this.angForm.patchValue({
                    AC_Months: data1[0].AC_MONTHS,
                    AC_DAYS: data1[0].AC_DAYS,
                    POSTED_INT: data1[0].post_Interest,
                    LEDGER_BAL: Number(Math.abs(data1[0].ledgerBal)).toFixed(2),
                    PAYABLE_INT: Number(Math.abs(data1[0].payableInterest)).toFixed(2),
                    PENAL_INT: Number(data1[0].penalInterest).toFixed(2)
                });
                if (this.isInterestApplicable == '1') {
                    this.angForm.patchValue({
                        INTREST_RATE: data1[0].INT_RATE,
                        TotalInterest: Number(this.customRound(data1[0].currentInterest)),
                        CalCulateAmt: Number(this.customRound(data1[0].currentInterest))
                    });
                    this.intrateShow = data1[0].INT_RATE;
                }
                else {
                    this.angForm.patchValue({
                        INTREST_RATE: '0',
                        TotalInterest: 0,
                        CalCulateAmt: 0
                    });
                    this.intrateShow = 0;
                }
                if (data1[0].post_Interest < 0) {
                    this.angForm.patchValue({
                        NET_INT: Number(data1[0].post_Interest).toFixed(0),
                        POSTED_INT: 0,
                    });
                    this.NET_EXC_INTAMT = Number(data1[0].post_Interest);
                }
                else if (data1[0].post_Interest > 0) {
                    this.angForm.patchValue({
                        POSTED_INT: Number(data1[0].post_Interest).toFixed(0),
                        NET_INT: 0
                    });
                    this.NET_EXC_INTAMT = 0;
                }
                else {
                    this.angForm.patchValue({
                        POSTED_INT: 0,
                        NET_INT: 0
                    });
                    this.NET_EXC_INTAMT = 0;
                }
                let netInt = 0;
                var months;
                netInt = Number(this.angForm.controls['TotalInterest'].value) - Number(data1[0].post_Interest);
                if (data1[0].AC_LINTEDT != "" && data1[0].AC_LINTEDT != null) {
                    var date1 = data1[0].AC_LINTEDT;
                    var date2 = this.angForm.controls['DATE'].value;
                    var b = moment__WEBPACK_IMPORTED_MODULE_5__(date1, "DD/MM/YYYY");
                    var a = moment__WEBPACK_IMPORTED_MODULE_5__(date2, "DD/MM/YYYY");
                    months = a.diff(b, 'months');
                }
                else {
                    var date1 = data1[0].AC_OPDATE;
                    var date2 = this.angForm.controls['DATE'].value;
                    var b = moment__WEBPACK_IMPORTED_MODULE_5__(date1, "DD/MM/YYYY");
                    var a = moment__WEBPACK_IMPORTED_MODULE_5__(date2, "DD/MM/YYYY");
                    months = a.diff(b, 'months');
                }
                this.angForm.patchValue({
                    Months: months,
                    NET_INT: Math.abs(this.customRound(netInt))
                });
                this.getNetInterest();
                this.showCustomerDeatils();
                if (data.SYSCHNG_LOGIN == null) {
                    this.showButton = false;
                    this.updateShow = true;
                    this.newbtnShow = true;
                }
                else {
                    this.showButton = false;
                    this.updateShow = false;
                    this.newbtnShow = true;
                }
                this.date = data.TRAN_DATE;
                this.updateID = data.id;
                this.TRAN_NO = data.TRAN_NO;
                this.multigrid = data.depoclosetran;
                if (data.TRAN_TYPE == 'CS') {
                    this.isFormA(1);
                }
                else {
                    this.isFormA(2);
                    this.transferTotalAmount = Number(data.NET_PAYABLE_AMOUNT);
                }
                data.TRAN_ACNOTYPE == 'SB' ? this.isHideForSaving = false : this.isHideForSaving = true;
                this.getschemename = data.TRAN_ACNOTYPE;
                this.ngscheme = Number(data.TRAN_ACTYPE);
                this.ngBranchCode = data.BRANCH_CODE;
                data.IS_PREMATURE_CLOSE == '1' ? this.preMature = true : this.preMature = false;
                this.bankacno = data.TRAN_ACNO;
                this.getAccountlist();
                this.angForm.patchValue({
                    TRAN_NO: data.TRAN_NO,
                    BRANCH_CODE: data.BRANCH_CODE,
                    SAVING_PIGMY: data.TRAN_TYPE == 'CS' ? 'FormC' : 'FormT',
                    chequeNo: data.CHEQUE_NO,
                    ChequeDate: data.CHEQUE_DATE,
                    Fnarration: data.NARRATION,
                    LEDGER_BAL: Number(data.LEDGER_BAL).toFixed(2),
                    NET_INT: Number(data.NET_INTEREST_AMOUNT).toFixed(2),
                    NETPAYABLE_AMT: Number(data.NET_PAYABLE_AMOUNT).toFixed(2),
                    OTHER_CHARGES_AMOUNT: Number(data.OTHER_CHARGES_AMOUNT).toFixed(2),
                    OTHER_CHARGES_GLACNO: data.OTHER_CHARGES_GLACNO,
                    COMMISSION_CHARGES: Number(data.COMMISSION_CHARGES),
                    POSTED_INT: Number(data.PAID_INTEREST_AMOUNT).toFixed(2),
                    PAYABLE_INT: Number(data.PAYABLE_INTEREST_AMOUNT).toFixed(2),
                    PENAL_INT: Number(data.PENAL_INTEREST_AMOUNT).toFixed(2),
                    TotalInterest: Number(data.TOTAL_INTEREST_AMOUNT).toFixed(2),
                    COMMISSION_GLACNO: data.COMMISSION_GLACNO,
                    AC_NO: data.TRAN_ACNO,
                    AC_TYPE: Number(data.TRAN_ACTYPE),
                    DATE: data.TRAN_DATE,
                    EXCESS_INT: data.EXCESS_INT != 0 ? this.NET_EXC_INTAMT = data.EXCESS_INT : this.NET_EXC_INTAMT = 0
                });
                this.accountedit = data.TRAN_ACNO;
                this.customerId = data.customerId;
                this.dormant = data.dormant;
                this.ngCommission = data.COMMISSION_GLACNO;
                this.ngGlAcno = data.OTHER_CHARGES_GLACNO;
                this.showCustomerDeatils();
            }, (error) => {
                var _a;
                console.log(error, 'err');
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Oops!', (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message, 'error');
            });
        });
    }
    //function for delete button clicked
    delClickHandler(info) {
        // this.message.BranchCode = info.title;
        // Swal.fire({
        //   title: 'Are you sure?',
        //   text: "Do you want to delete title." + this.message.BranchCode + "  data",
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
    //approve account
    Approve() {
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        const dataToSend = {
            id: this.updateID,
            TRAN_NO: this.TRAN_NO,
            USER: result.id
        };
        this._service.approve(dataToSend).subscribe(data => {
            this.angForm.enable();
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Approved', 'Saving and Pigmy Account Closing approved successfully', 'success');
            var button = document.getElementById('triggerhide');
            button.click();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    //reject account
    reject() {
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        const dataToSend = {
            id: this.updateID,
            TRAN_NO: this.TRAN_NO,
            USER: result.id
        };
        this._service.reject(dataToSend).subscribe(data => {
            this.angForm.enable();
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Rejected', 'Saving and Pigmy Account Closing rejected successfully', 'success');
            var button = document.getElementById('triggerhide');
            button.click();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    OpenLink(val) {
        // 
        if (val == 1) {
            this.CashTrue = true;
            this.TransferTrue = false;
        }
        if (val == 2) {
            this.CashTrue = false;
            this.TransferTrue = true;
        }
    }
    //get Narration Details 
    getNarration(ele) {
        this.narration = ele;
        let el = this.triggerhide.nativeElement;
        el.click();
    }
    //get Narration Details 
    getFormNarration(ele) {
        this.ngFnarration = ele;
        let el = this.narrationhide.nativeElement;
        el.click();
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
        var button = document.getElementById('triggerhide');
        button.click();
        this.reloadTablePassing.emit();
    }
    unApprove() {
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = {
            id: this.updateID,
            user: user.id,
            LOG_DATE: this.logDate
        };
        this._service.unapprove(obj).subscribe(data => {
            this.angForm.enable();
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Unapproved', 'Account unapproved successfully', 'success');
            var button = document.getElementById('triggerhide');
            button.click();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    customRound(number) {
        var wholeNumber = Math.floor(number);
        var decimalPart = number - wholeNumber;
        if (decimalPart >= 0.5) {
            wholeNumber++;
        }
        else {
            return wholeNumber;
        }
        return Math.round(number);
    }
    getBranch() {
        this.ngscheme = null;
    }
}
SavingsPigmyAccountClosingComponent.ɵfac = function SavingsPigmyAccountClosingComponent_Factory(t) { return new (t || SavingsPigmyAccountClosingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_7__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_9__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_12__["MultiVoucherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_savings_Pigmy_Account_Closing_service__WEBPACK_IMPORTED_MODULE_14__["SavingPigmyAccountClosingService"])); };
SavingsPigmyAccountClosingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavingsPigmyAccountClosingComponent, selectors: [["app-savings-pigmy-account-closing"]], viewQuery: function SavingsPigmyAccountClosingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerhide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.narrationhide = _t.first);
    } }, inputs: { childMessage: "childMessage" }, outputs: { reloadTablePassing: "reloadTablePassing" }, decls: 350, vars: 56, consts: [["style", "width: 270px;height: 335px;z-index: 1000;\n    position: absolute;margin-top: 14%;margin-left:51%", 4, "ngIf"], ["novalidate", "", 3, "formGroup"], [1, "row"], [1, "col-md-9"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [1, "card-body"], [1, "solid"], [1, "col-sm-12", "col-md-2"], ["for", "BRANCH_CODE"], [1, "col-sm-12", "col-md-3"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["id", "BRANCH_CODE", "bindValue", "value", "formControlName", "BRANCH_CODE", "bindLabel", "label", "title", "Compulsory Selection", "appTheme", "", "autofocus", "", "placeholder", "Branch", 3, "ngModel", "selectOnTab", "ngClass", "ngModelChange", "change", "focus"], ["branchcode", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm"], [1, "col-sm-12", "col-md-1", "labelWidth"], ["for", "DATE"], [1, "col-md-2"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "dd/mm/yyyy", "formControlName", "DATE", "disabled", "", 1, "form-control"], ["for", "AC_TYPE"], [1, "col-sm-12", "col-md-4"], ["id", "AC_TYPE", "bindValue", "value", "formControlName", "AC_TYPE", "bindLabel", "label", "appTheme", "", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "change", "focus"], ["selectcode", ""], ["for", "AC_NO"], [1, "col-sm-12", "col-md-5"], [1, "form-group", "form-priminry", "form-static-label"], ["id", "AC_NO", "bindValue", "bankacno", "formControlName", "AC_NO", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Account No.", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "change", "focus"], ["accountNumber", ""], ["style", "color: rgb(7, 144, 7);", 4, "ngIf"], ["style", "color: rgb(194, 55, 55);", 4, "ngIf"], [1, "col-md-6", "solid1"], [1, "col-md-4"], [1, "col-md-3"], ["type", "text", "formControlName", "INTREST_RATE", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "formControlName", "Months", "disabled", "", 2, "text-align", "right"], ["disabled", "", "formControlName", "CalCulateAmt", "type", "text", 2, "text-align", "right"], [1, "col-md-6"], ["formControlName", "TotalInterest", "type", "text", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keypress"], ["class", "row", 4, "ngIf"], ["formControlName", "NET_INT", "type", "text", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout"], ["for", "Fnarration"], [1, "col-md"], ["formControlName", "Fnarration", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-info-circle", "errspan", 3, "click"], ["formControlName", "LEDGER_BAL", "type", "text", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout"], ["style", "font-weight: 800; font-size: 16px;", 4, "ngIf"], ["formControlName", "PAYABLE_INT", "type", "text", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout"], [2, "font-weight", "800", "font-size", "16px"], ["formControlName", "NET_INT", "type", "text", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout"], ["formControlName", "PENAL_INT", "type", "text", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout"], ["formControlName", "NETPAYABLE_AMT", "type", "text", "disabled", "", 1, "form-control", 2, "text-align", "right", 3, "focus", "keyup", "focusout"], [1, "form-radio"], [1, "radio", "radio-inline"], [1, "inputRadio"], ["type", "radio", "formControlName", "SAVING_PIGMY", "name", "SAVING_PIGMY", "value", "FormC", "id", "formT", 3, "change"], [1, "helper"], ["type", "radio", "value", "FormT", "formControlName", "SAVING_PIGMY", "id", "formC", "name", "SAVING_PIGMY", 3, "change"], ["class", "row", "id", "FORMA", 4, "ngIf"], [1, "col-sm", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm btn-submit", "appTheme", "", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [1, "col-md-3", "col-sm-12", "col-xm-12"], [1, "transaction-item"], [1, "d-flex"], [1, "avatar", "bg-light-info", "rounded", "float-start"], [1, "avatar-content"], [1, "fa", "fa-google-wallet", "field-icon"], [1, "transaction-percentage"], [1, "transaction-title", 2, "font-size", "12px"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "avatar", "bg-light-success", "rounded", "float-start"], [1, "avatar", "bg-light-primary", "rounded", "float-start"], [1, "user-avatar-section"], ["height", "50", "width", "80", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], ["height", "25", "width", "80", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], [1, "user-info", "text-center"], [1, "info-container"], [1, "list-unstyled"], [1, "mb-75"], [1, "fw-bolder", "me-25"], [1, "badge", "bg-light-success"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [1, "table", "table-bordered"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 2, "display", "none", 3, "click"], ["triggerhide", ""], ["formnarration", ""], ["narrationhide", ""], [2, "width", "270px", "height", "335px", "z-index", "1000", "position", "absolute", "margin-top", "14%", "margin-left", "51%"], ["width", "400", "height", "300", 3, "src"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], [2, "color", "rgb(7, 144, 7)"], [2, "color", "rgb(194, 55, 55)"], ["formControlName", "POSTED_INT", "type", "text", "disabled", "", 1, "form-control", 2, "text-align", "right"], ["formControlName", "OTHER_CHARGES_AMOUNT", "type", "text", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout"], ["id", "GlACNo", "bindValue", "value", "formControlName", "OTHER_CHARGES_GLACNO", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Account No.", 3, "ngModel", "selectOnTab", "ngModelChange", "focus"], ["OTHER_CHARGES_GLACNO", ""], ["formControlName", "COMMISSION_CHARGES", "type", "text", 1, "form-control", 2, "text-align", "right", 3, "change", "focus", "keyup", "focusout"], ["id", "COMM_GLCODE", "bindValue", "value", "formControlName", "COMMISSION_GLACNO", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Account No.", 3, "ngModel", "selectOnTab", "ngModelChange", "focus"], ["COMMISSION_GLACNO", ""], ["id", "FORMA", 1, "row"], [1, "col-sm-12"], ["for", "chequeNo"], ["type", "text", "name", "chequeNo", "placeholder", " ", "id", "chequeNo", "value", "", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "required", "", "formControlName", "chequeNo", "maxlength", "10", 1, "form-control", 2, "text-transform", "capitalize", 3, "keyup"], ["for", "ChequeDate"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "ChequeDate", 1, "form-control", 3, "bsConfig", "maxDate", "minDate", "keydown.Tab"], ["ChequeDate", "bsDatepicker"], ["for", "Tscheme"], ["id", "Tscheme", "bindValue", "value", "formControlName", "Tscheme", "bindLabel", "label", "title", "Compulsory Selection", "appTheme", "", "placeholder", "Scheme", 3, "ngModel", "selectOnTab", "ngModelChange", "focus", "change"], ["Tscheme", ""], ["for", "TschemeAC"], [1, "col-sm-12", "col-md"], ["id", "TschemeAC", "formControlName", "TschemeAC", "bindLabel", "label", "bindValue", "bankacno", "title", "Compulsory Selection", "placeholder", "Account Number", "appTheme", "", 3, "ngModel", "selectOnTab", "ngModelChange", "change", "focus"], ["TschemeAC", ""], ["for", "NARRATION"], ["formControlName", "NARRATION", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "amount"], ["type", "text", "name", "amount", "id", "amount", "formControlName", "amount", "appTheme", "", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["type", "button", "class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [1, "table", "table-bordered", "table-hover", "compact"], [2, "text-align", "right"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "top", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], ["colspan", "5", 1, "no-data-available", 2, "text-align", "center"], ["type", "submit", "appTheme", "", 1, "btn", "btn-outline-primary", "btn-sm", "btn-submit", 3, "click"], [3, "click"]], template: function SavingsPigmyAccountClosingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SavingsPigmyAccountClosingComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Savings-Pigmy Account Closing");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "sub", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ng-select", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SavingsPigmyAccountClosingComponent_Template_ng_select_ngModelChange_26_listener($event) { return ctx.ngBranchCode = $event; })("change", function SavingsPigmyAccountClosingComponent_Template_ng_select_change_26_listener() { return ctx.getBranch(); })("focus", function SavingsPigmyAccountClosingComponent_Template_ng_select_focus_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return ctx.onFocus(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SavingsPigmyAccountClosingComponent_ng_option_28_Template, 2, 2, "ng-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SavingsPigmyAccountClosingComponent_div_29_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "sub", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ng-select", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SavingsPigmyAccountClosingComponent_Template_ng_select_ngModelChange_47_listener($event) { return ctx.ngscheme = $event; })("change", function SavingsPigmyAccountClosingComponent_Template_ng_select_change_47_listener($event) { return ctx.schemechange($event); })("focus", function SavingsPigmyAccountClosingComponent_Template_ng_select_focus_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48); return ctx.onFocus(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, SavingsPigmyAccountClosingComponent_ng_option_49_Template, 2, 3, "ng-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, SavingsPigmyAccountClosingComponent_div_50_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "sub", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ng-select", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SavingsPigmyAccountClosingComponent_Template_ng_select_ngModelChange_60_listener($event) { return ctx.accountedit = $event; })("change", function SavingsPigmyAccountClosingComponent_Template_ng_select_change_60_listener($event) { return ctx.getAccountDetails($event); })("focus", function SavingsPigmyAccountClosingComponent_Template_ng_select_focus_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61); return ctx.onFocus(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, SavingsPigmyAccountClosingComponent_ng_option_62_Template, 2, 3, "ng-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, SavingsPigmyAccountClosingComponent_div_63_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, SavingsPigmyAccountClosingComponent_label_65_Template, 2, 0, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, SavingsPigmyAccountClosingComponent_label_66_Template, 2, 0, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Interest Rate %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Interest Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SavingsPigmyAccountClosingComponent_Template_input_change_98_listener() { return ctx.getTotalNetInterest(); })("focus", function SavingsPigmyAccountClosingComponent_Template_input_focus_98_listener($event) { return ctx.selectAllContent($event); })("keypress", function SavingsPigmyAccountClosingComponent_Template_input_keypress_98_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, SavingsPigmyAccountClosingComponent_div_99_Template, 9, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Net Interest Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SavingsPigmyAccountClosingComponent_Template_input_focus_111_listener($event) { return ctx.selectAllContent($event); })("keyup", function SavingsPigmyAccountClosingComponent_Template_input_keyup_111_listener($event) { return ctx.getDecimal($event); })("focusout", function SavingsPigmyAccountClosingComponent_Template_input_focusout_111_listener($event) { return ctx.getDecimalPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Narration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "textarea", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SavingsPigmyAccountClosingComponent_Template_textarea_ngModelChange_119_listener($event) { return ctx.ngFnarration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_Template_i_click_120_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](329); return _r28.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Ledger Balance Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SavingsPigmyAccountClosingComponent_Template_input_change_128_listener() { return ctx.getNetInterest(); })("focus", function SavingsPigmyAccountClosingComponent_Template_input_focus_128_listener($event) { return ctx.selectAllContent($event); })("keyup", function SavingsPigmyAccountClosingComponent_Template_input_keyup_128_listener($event) { return ctx.getDecimal($event); })("focusout", function SavingsPigmyAccountClosingComponent_Template_input_focusout_128_listener($event) { return ctx.getDecimalPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, SavingsPigmyAccountClosingComponent_span_132_Template, 2, 0, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Payable Interest Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SavingsPigmyAccountClosingComponent_Template_input_focus_137_listener($event) { return ctx.selectAllContent($event); })("keyup", function SavingsPigmyAccountClosingComponent_Template_input_keyup_137_listener($event) { return ctx.getDecimal($event); })("focusout", function SavingsPigmyAccountClosingComponent_Template_input_focusout_137_listener($event) { return ctx.getDecimalPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Net Interest Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SavingsPigmyAccountClosingComponent_Template_input_change_147_listener() { return ctx.getNetInterest(); })("focus", function SavingsPigmyAccountClosingComponent_Template_input_focus_147_listener($event) { return ctx.selectAllContent($event); })("keyup", function SavingsPigmyAccountClosingComponent_Template_input_keyup_147_listener($event) { return ctx.getDecimal($event); })("focusout", function SavingsPigmyAccountClosingComponent_Template_input_focusout_147_listener($event) { return ctx.getDecimalPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, SavingsPigmyAccountClosingComponent_div_148_Template, 8, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, SavingsPigmyAccountClosingComponent_div_149_Template, 10, 3, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, SavingsPigmyAccountClosingComponent_div_150_Template, 10, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, SavingsPigmyAccountClosingComponent_div_151_Template, 10, 3, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Penal Interest Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SavingsPigmyAccountClosingComponent_Template_input_change_161_listener() { return ctx.getNetInterest(); })("focus", function SavingsPigmyAccountClosingComponent_Template_input_focus_161_listener($event) { return ctx.selectAllContent($event); })("keyup", function SavingsPigmyAccountClosingComponent_Template_input_keyup_161_listener($event) { return ctx.getDecimal($event); })("focusout", function SavingsPigmyAccountClosingComponent_Template_input_focusout_161_listener($event) { return ctx.getDecimalPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Net Payable Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SavingsPigmyAccountClosingComponent_Template_input_focus_172_listener($event) { return ctx.selectAllContent($event); })("keyup", function SavingsPigmyAccountClosingComponent_Template_input_keyup_172_listener($event) { return ctx.getDecimal($event); })("focusout", function SavingsPigmyAccountClosingComponent_Template_input_focusout_172_listener($event) { return ctx.getDecimalPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Payment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SavingsPigmyAccountClosingComponent_Template_input_change_184_listener() { return ctx.isFormA(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SavingsPigmyAccountClosingComponent_Template_input_change_189_listener() { return ctx.isFormA(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Transfer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](192, SavingsPigmyAccountClosingComponent_div_192_Template, 78, 17, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](195, SavingsPigmyAccountClosingComponent_button_195_Template, 2, 0, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](196, SavingsPigmyAccountClosingComponent_button_196_Template, 2, 0, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](197, SavingsPigmyAccountClosingComponent_button_197_Template, 2, 0, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](199, SavingsPigmyAccountClosingComponent_button_199_Template, 2, 0, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](201, SavingsPigmyAccountClosingComponent_button_201_Template, 2, 0, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](202, SavingsPigmyAccountClosingComponent_button_202_Template, 2, 0, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h6", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Opening Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h6", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Opening Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h6", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Renewal Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "h6", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Interest Rate% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "h6", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Last Interest Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h6", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Maturity Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function SavingsPigmyAccountClosingComponent_Template_img_mouseover_283_listener() { return ctx.showImage(ctx.customerImg); })("mouseout", function SavingsPigmyAccountClosingComponent_Template_img_mouseout_283_listener() { return ctx.hideImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function SavingsPigmyAccountClosingComponent_Template_img_mouseover_286_listener() { return ctx.showImage(ctx.signture); })("mouseout", function SavingsPigmyAccountClosingComponent_Template_img_mouseout_286_listener() { return ctx.hideImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "ul", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "li", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "PAN ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "li", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Contact:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "app-modal-basic", 88, 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "h4", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Narration Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_Template_button_click_312_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](308); return _r25.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "perfect-scrollbar", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "table", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Narration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](324, SavingsPigmyAccountClosingComponent_tr_324_Template, 2, 1, "tr", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "button", 98, 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_Template_button_click_325_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](308); return _r25.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "app-modal-basic", 88, 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "h4", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Narration Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_Template_button_click_333_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](329); return _r28.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "perfect-scrollbar", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "table", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Narration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](345, SavingsPigmyAccountClosingComponent_tr_345_Template, 2, 1, "tr", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "button", 98, 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingsPigmyAccountClosingComponent_Template_button_click_346_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](329); return _r28.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PreviewDiv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngBranchCode)("selectOnTab", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c3, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["BRANCH_CODE"].invalid && (ctx.angForm.controls["BRANCH_CODE"].dirty || ctx.angForm.controls["BRANCH_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngscheme)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c3, ctx.formSubmitted))("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TYPE"].invalid && (ctx.angForm.controls["AC_TYPE"].dirty || ctx.angForm.controls["AC_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accountedit)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schemeACNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_NO"].invalid && (ctx.angForm.controls["AC_NO"].dirty || ctx.angForm.controls["AC_NO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.preMature && ctx.accountedit != null && ctx.getschemename == "PG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preMature && ctx.accountedit != null && ctx.getschemename == "PG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.INTRATE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Interest Amount @ ", ctx.intrateShow, " %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHideForSaving);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngFnarration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preMature == false || ctx.preMature == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHideForSaving && ctx.preMature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHideForSaving && ctx.preMature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHideForSaving && ctx.preMature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHideForSaving && ctx.preMature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ledgerBalance, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.OpenDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.renewalDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.INT_RATESHOW);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.LastIntDate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.maturityDate, " ");
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _theme_directive__WEBPACK_IMPORTED_MODULE_16__["ThemeDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_17__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__["BsDatepickerDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTooltip"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 20px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\ndiv.solid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: -3%;\n  height: 20px;\n  line-height: 20px;\n  font-size: 17px;\n}\n\ndiv.solid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n}\n\ndiv.solid1[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: thin;\n  padding: 1%;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.transaction-item[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.bg-light-primary[_ngcontent-%COMP%] {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367F0 !important;\n}\n\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.357rem !important;\n}\n\n.float-start[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin-right: 1.2rem;\n}\n\n.avatar.bg-light-primary[_ngcontent-%COMP%] {\n  color: #7367F0 !important;\n}\n\n.avatar.bg-light-success[_ngcontent-%COMP%] {\n  color: #28C76F !important;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background-color: #C3C3C3;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n  color: #FFF;\n  display: inline-flex;\n  font-size: 1rem;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 600;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n}\n\n.avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 0.857rem;\n}\n\n.bg-light-success[_ngcontent-%COMP%] {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28C76F !important;\n}\n\n.bg-light-danger[_ngcontent-%COMP%] {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #EA5455 !important;\n}\n\n.transaction-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.errspan[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 21px;\n  margin-top: -20px;\n  position: relative;\n  z-index: 2;\n  color: red;\n}\n\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: white !important;\n  color: black !important;\n}\n\n.main-body[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  padding-bottom: 4% !important;\n  transition: all ease-in 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #ff5252;\n  color: #ff5252;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 11px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 14px;\n  border-radius: 5px;\n  padding-bottom: 22px;\n  padding-top: 4px;\n  height: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 14px;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px;\n  max-height: 18px;\n  align-items: center;\n  font-size: 11px;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 18px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 5px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-bottom: 0px;\n  padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vc2F2aW5ncy1waWdteS1hY2NvdW50LWNsb3Npbmcvc2F2aW5ncy1waWdteS1hY2NvdW50LWNsb3NpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUlBLG1CQUFBO0VBSUEsOEJBQUE7QUFBRjs7QUFHQTtFQUVFLHdCQUFBO0FBREY7O0FBSUE7RUFDRSxnREFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxrQ0FBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFJQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUlBLGFBQUE7RUFJQSx1QkFBQTtFQUlBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsOENBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBS0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLGtDQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUVFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RyYW5zYWN0aW9uL3NhdmluZ3MtcGlnbXktYWNjb3VudC1jbG9zaW5nL3NhdmluZ3MtcGlnbXktYWNjb3VudC1jbG9zaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiAzcHg7XG59XG5cblxuZGl2LnNvbGlkIGgzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogLTMlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmRpdi5zb2xpZCBoMyBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmRpdi5zb2xpZCB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBhZGRpbmc6IDIlXG59XG5cbmRpdi5zb2xpZDEge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIHBhZGRpbmc6IDElXG59XG5cbi5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi50cmFuc2FjdGlvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC10cmFuc2FjdGlvbiAudHJhbnNhY3Rpb24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmQtZmxleCB7XG5cbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4uYmctbGlnaHQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTE1LCAxMDMsIDI0MCwgLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzczNjdGMCAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzU3cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5mbG9hdC1zdGFydCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtIC5hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcbn1cblxuLmF2YXRhci5iZy1saWdodC1wcmltYXJ5IHtcbiAgY29sb3I6ICM3MzY3RjAgIWltcG9ydGFudDtcbn1cblxuLmF2YXRhci5iZy1saWdodC1zdWNjZXNzIHtcbiAgY29sb3I6ICMyOEM3NkYgIWltcG9ydGFudDtcbn1cblxuLmF2YXRhciB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDM0MzQzM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRkZGO1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2FyZC10cmFuc2FjdGlvbiAudHJhbnNhY3Rpb24taXRlbSAuYXZhdGFyIC5hdmF0YXItY29udGVudCB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG59XG5cbi5hdmF0YXIgLmF2YXRhci1jb250ZW50IHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogLjg1N3JlbTtcbn1cblxuLmJnLWxpZ2h0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxOTksIDExMSwgLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI4Qzc2RiAhaW1wb3J0YW50O1xufVxuXG4uYmctbGlnaHQtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDg0LCA4NSwgLjEyKSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0VBNTQ1NSAhaW1wb3J0YW50O1xufVxuXG4udHJhbnNhY3Rpb24tdGl0bGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG5cbn1cblxuLmVycnNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjFweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZvcm0tY29udHJvbDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1ib2R5IC5wYWdlLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIHBhZGRpbmctYm90dG9tOiA0JSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjNzO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY1MjUyO1xuICBjb2xvcjogI2ZmNTI1MjtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gIC8vIGZsb2F0OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDIycHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAvLyBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWluLWhlaWdodDogMThweDtcbiAgbWF4LWhlaWdodDogMThweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uaW5wdXQtZ3JvdXAgLmJvcmRlci1sYWJsZS1mbHQgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBoZWlnaHQ6IDE4cHg7XG4gIHBhZGRpbmc6IDByZW0gMC43cmVtO1xufVxuXG4uY2FyZCAuY2FyZC1ibG9jayB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbi5jb2wtMSxcbi5jb2wtMixcbi5jb2wtMyxcbi5jb2wtNCxcbi5jb2wtNSxcbi5jb2wtNixcbi5jb2wtNyxcbi5jb2wtOCxcbi5jb2wtOSxcbi5jb2wtMTAsXG4uY29sLTExLFxuLmNvbC0xMixcbi5jb2wsXG4uY29sLWF1dG8sXG4uY29sLXNtLTEsXG4uY29sLXNtLTIsXG4uY29sLXNtLTMsXG4uY29sLXNtLTQsXG4uY29sLXNtLTUsXG4uY29sLXNtLTYsXG4uY29sLXNtLTcsXG4uY29sLXNtLTgsXG4uY29sLXNtLTksXG4uY29sLXNtLTEwLFxuLmNvbC1zbS0xMSxcbi5jb2wtc20tMTIsXG4uY29sLXNtLFxuLmNvbC1zbS1hdXRvLFxuLmNvbC1tZC0xLFxuLmNvbC1tZC0yLFxuLmNvbC1tZC0zLFxuLmNvbC1tZC00LFxuLmNvbC1tZC01LFxuLmNvbC1tZC02LFxuLmNvbC1tZC03LFxuLmNvbC1tZC04LFxuLmNvbC1tZC05LFxuLmNvbC1tZC0xMCxcbi5jb2wtbWQtMTEsXG4uY29sLW1kLTEyLFxuLmNvbC1tZCxcbi5jb2wtbWQtYXV0byxcbi5jb2wtbGctMSxcbi5jb2wtbGctMixcbi5jb2wtbGctMyxcbi5jb2wtbGctNCxcbi5jb2wtbGctNSxcbi5jb2wtbGctNixcbi5jb2wtbGctNyxcbi5jb2wtbGctOCxcbi5jb2wtbGctOSxcbi5jb2wtbGctMTAsXG4uY29sLWxnLTExLFxuLmNvbC1sZy0xMixcbi5jb2wtbGcsXG4uY29sLWxnLWF1dG8sXG4uY29sLXhsLTEsXG4uY29sLXhsLTIsXG4uY29sLXhsLTMsXG4uY29sLXhsLTQsXG4uY29sLXhsLTUsXG4uY29sLXhsLTYsXG4uY29sLXhsLTcsXG4uY29sLXhsLTgsXG4uY29sLXhsLTksXG4uY29sLXhsLTEwLFxuLmNvbC14bC0xMSxcbi5jb2wteGwtMTIsXG4uY29sLXhsLFxuLmNvbC14bC1hdXRvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavingsPigmyAccountClosingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-savings-pigmy-account-closing',
                templateUrl: './savings-pigmy-account-closing.component.html',
                styleUrls: ['./savings-pigmy-account-closing.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_7__["OwnbranchMasterService"] }, { type: _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectConfig"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_9__["SystemMasterParametersService"] }, { type: src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"] }, { type: src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__["SchemeAccountNoService"] }, { type: _multi_voucher_multi_voucher_service__WEBPACK_IMPORTED_MODULE_12__["MultiVoucherService"] }, { type: _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIdService"] }, { type: _savings_Pigmy_Account_Closing_service__WEBPACK_IMPORTED_MODULE_14__["SavingPigmyAccountClosingService"] }]; }, { childMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], triggerhide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }], narrationhide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['narrationhide']
        }], reloadTablePassing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~savings-pigm~27b97b3a.js.map