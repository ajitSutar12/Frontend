(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~account-enquiry-account-enquiry-module~shortcutkey-accounts-accounts-module"],{

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

/***/ "./src/app/theme/view/account-enquiry/account-enquiry-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/view/account-enquiry/account-enquiry-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AccountEnquiryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEnquiryRoutingModule", function() { return AccountEnquiryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _account_enquiry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-enquiry.component */ "./src/app/theme/view/account-enquiry/account-enquiry.component.ts");





const routes = [
    {
        path: '',
        component: _account_enquiry_component__WEBPACK_IMPORTED_MODULE_2__["AccountEnquiryComponent"],
        data: {
            title: 'Account Enquiry',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class AccountEnquiryRoutingModule {
}
AccountEnquiryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountEnquiryRoutingModule });
AccountEnquiryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountEnquiryRoutingModule_Factory(t) { return new (t || AccountEnquiryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountEnquiryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountEnquiryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/view/account-enquiry/account-enquiry.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/view/account-enquiry/account-enquiry.component.ts ***!
  \*************************************************************************/
/*! exports provided: AccountEnquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEnquiryComponent", function() { return AccountEnquiryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs-compat */ "./node_modules/rxjs-compat/Rx.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../master/customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _submit_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../submit.directive */ "./src/app/theme/submit.directive.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../button.directive */ "./src/app/theme/button.directive.ts");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ledger_view_ledger_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ledger-view/ledger-view.component */ "./src/app/theme/view/ledger-view/ledger-view.component.ts");
/* harmony import */ var _shares_ledger_view_shares_ledger_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shares-ledger-view/shares-ledger-view.component */ "./src/app/theme/view/shares-ledger-view/shares-ledger-view.component.ts");
/* harmony import */ var _other_view_interest_paid_history_interest_paid_history_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../other-view/interest-paid-history/interest-paid-history.component */ "./src/app/theme/view/other-view/interest-paid-history/interest-paid-history.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");


























function AccountEnquiryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.previewImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AccountEnquiryComponent_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r81.label, "");
} }
function AccountEnquiryComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_30_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.angForm.controls["BRANCH_CODE"].errors == null ? null : ctx_r4.angForm.controls["BRANCH_CODE"].errors.required);
} }
function AccountEnquiryComponent_ng_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r83.id, " ", values_r83.label, " ");
} }
function AccountEnquiryComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_43_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r7.angForm.controls["AC_TYPE"].errors.required);
} }
function AccountEnquiryComponent_ng_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r85.AC_NO, " ", values_r85.AC_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (values_r85 == null ? null : values_r85.idmaster == null ? null : values_r85.idmaster.custAddress[0] == null ? null : values_r85.idmaster.custAddress[0].city == null ? null : values_r85.idmaster.custAddress[0].city.CITY_NAME) === "" ? "-" : values_r85 == null ? null : values_r85.idmaster == null ? null : values_r85.idmaster.custAddress[0] == null ? null : values_r85.idmaster.custAddress[0].city == null ? null : values_r85.idmaster.custAddress[0].city.CITY_NAME, " ");
} }
function AccountEnquiryComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_56_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_NO"].errors == null ? null : ctx_r10.angForm.controls["AC_NO"].errors.required);
} }
function AccountEnquiryComponent_div_67_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_67_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.angForm.controls["DATE"].errors == null ? null : ctx_r12.angForm.controls["DATE"].errors.required);
} }
function AccountEnquiryComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Freeze Status:", ctx_r13.freezStataus, "");
} }
function AccountEnquiryComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 70);
} }
function AccountEnquiryComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 70);
} }
function AccountEnquiryComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rebate Interest Rate: ", ctx_r16.REBATE_INTRATE, "");
} }
function AccountEnquiryComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 70);
} }
function AccountEnquiryComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lien Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 70);
} }
function AccountEnquiryComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dormant Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 74);
} }
function AccountEnquiryComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Account Closed On: ", ctx_r22.acCloseDate, "");
} }
function AccountEnquiryComponent_div_82_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Deposit Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Member Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pigmy Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Opening Balance Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r92.accountData == null ? null : ctx_r92.accountData.AC_BALDATE);
} }
function AccountEnquiryComponent_div_82_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ason Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r94.accountData == null ? null : ctx_r94.accountData.AC_ASON_DATE);
} }
function AccountEnquiryComponent_div_82_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 77);
} }
function AccountEnquiryComponent_div_82_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 77);
} }
function AccountEnquiryComponent_div_82_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Overdraft Amount : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r98.overdraftAmt, "1.2-2"));
} }
function AccountEnquiryComponent_div_82_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Period : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Months ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r100.accountData == null ? null : ctx_r100.accountData.AC_MONTHS) == "" || (ctx_r100.accountData == null ? null : ctx_r100.accountData.AC_MONTHS) == null ? 0 : ctx_r100.accountData == null ? null : ctx_r100.accountData.AC_MONTHS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r100.accountData == null ? null : ctx_r100.accountData.AC_DAYS) == "" || (ctx_r100.accountData == null ? null : ctx_r100.accountData.AC_DAYS) == null ? 0 : ctx_r100.accountData == null ? null : ctx_r100.accountData.AC_DAYS);
} }
function AccountEnquiryComponent_div_82_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Maturity Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r102.accountData == null ? null : ctx_r102.accountData.AC_EXPIRE_DATE) == undefined ? (ctx_r102.accountData == null ? null : ctx_r102.accountData.AC_EXPDT) == null || (ctx_r102.accountData == null ? null : ctx_r102.accountData.AC_EXPDT) == "" ? "---" : ctx_r102.accountData == null ? null : ctx_r102.accountData.AC_EXPDT : ctx_r102.accountData == null ? null : ctx_r102.accountData.AC_EXPIRE_DATE);
} }
function AccountEnquiryComponent_div_82_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 85);
} }
function AccountEnquiryComponent_div_82_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 85);
} }
function AccountEnquiryComponent_div_82_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Last Transaction Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r106.transactionData == null ? null : ctx_r106.transactionData.lastTransactionDate);
} }
function AccountEnquiryComponent_div_82_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Renewal Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r108.accountData == null ? null : ctx_r108.accountData.AC_RENEW_DATE);
} }
function AccountEnquiryComponent_div_82_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pigmy Scheme :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r110.PIGMY_ACTYPE);
} }
function AccountEnquiryComponent_div_82_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "'A' Type Member No:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r112.accountEvent == null ? null : ctx_r112.accountEvent.AC_MEMBNO) == null || (ctx_r112.accountEvent == null ? null : ctx_r112.accountEvent.AC_MEMBNO) == "null" ? "---" : ctx_r112.accountEvent == null ? null : ctx_r112.accountEvent.AC_MEMBNO);
} }
function AccountEnquiryComponent_div_82_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 85);
} }
function AccountEnquiryComponent_div_82_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Agent Scheme :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r115.accountData == null ? null : ctx_r115.accountData.AC_MEMBNO);
} }
function AccountEnquiryComponent_div_82_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Agent Code :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r117.accountData == null ? null : ctx_r117.accountData.AC_MEMBNO);
} }
function AccountEnquiryComponent_div_82_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interest Paid Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r119.accountData == null ? null : ctx_r119.accountData.AC_LINTEDT);
} }
function AccountEnquiryComponent_div_82_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Deposit Amount :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r121.accountData == null ? null : ctx_r121.accountData.AC_SCHMAMT, "1.2-2"));
} }
function AccountEnquiryComponent_div_82_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Maturity Amount :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r123.accountData == null ? null : ctx_r123.accountData.AC_MATUAMT, "1.2-2"));
} }
function AccountEnquiryComponent_div_82_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 85);
} }
function AccountEnquiryComponent_div_82_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 85);
} }
function AccountEnquiryComponent_div_82_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Last TDS Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r127.accountData == null ? null : ctx_r127.accountData.LAST_TDS_DATE);
} }
function AccountEnquiryComponent_div_82_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Receipt Number :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r129.accountData == null ? null : ctx_r129.accountData.AC_REF_RECEIPTNO);
} }
function AccountEnquiryComponent_div_82_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 87);
} }
function AccountEnquiryComponent_div_82_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interest Rate: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r132.transactionData == null ? null : ctx_r132.transactionData.interest_rate) == 0 ? ctx_r132.accountData == null ? null : ctx_r132.accountData.AC_INTRATE : ctx_r132.transactionData == null ? null : ctx_r132.transactionData.interest_rate);
} }
function AccountEnquiryComponent_div_82_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dividend Transfer Scheme:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r134.divtransferScheme);
} }
function AccountEnquiryComponent_div_82_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dividend Transfer Code :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_82_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r136.divtransferName);
} }
function AccountEnquiryComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_82_div_2_Template, 3, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_82_div_3_Template, 3, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_82_div_4_Template, 3, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Opening Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AccountEnquiryComponent_div_82_div_14_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AccountEnquiryComponent_div_82_div_15_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AccountEnquiryComponent_div_82_div_16_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AccountEnquiryComponent_div_82_div_17_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AccountEnquiryComponent_div_82_div_18_Template, 1, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AccountEnquiryComponent_div_82_div_19_Template, 1, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AccountEnquiryComponent_div_82_div_20_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AccountEnquiryComponent_div_82_div_21_Template, 5, 4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AccountEnquiryComponent_div_82_div_23_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AccountEnquiryComponent_div_82_div_24_Template, 9, 2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AccountEnquiryComponent_div_82_div_25_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AccountEnquiryComponent_div_82_div_26_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AccountEnquiryComponent_div_82_div_27_Template, 1, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AccountEnquiryComponent_div_82_div_28_Template, 1, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AccountEnquiryComponent_div_82_div_29_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AccountEnquiryComponent_div_82_div_30_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AccountEnquiryComponent_div_82_div_31_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AccountEnquiryComponent_div_82_div_32_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AccountEnquiryComponent_div_82_div_34_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AccountEnquiryComponent_div_82_div_35_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AccountEnquiryComponent_div_82_div_36_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AccountEnquiryComponent_div_82_div_37_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AccountEnquiryComponent_div_82_div_38_Template, 1, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AccountEnquiryComponent_div_82_div_39_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AccountEnquiryComponent_div_82_div_40_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AccountEnquiryComponent_div_82_div_41_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AccountEnquiryComponent_div_82_div_42_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AccountEnquiryComponent_div_82_div_43_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AccountEnquiryComponent_div_82_div_44_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AccountEnquiryComponent_div_82_div_46_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AccountEnquiryComponent_div_82_div_47_Template, 5, 4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AccountEnquiryComponent_div_82_div_48_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AccountEnquiryComponent_div_82_div_49_Template, 5, 4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AccountEnquiryComponent_div_82_div_50_Template, 1, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AccountEnquiryComponent_div_82_div_51_Template, 1, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AccountEnquiryComponent_div_82_div_52_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AccountEnquiryComponent_div_82_div_53_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AccountEnquiryComponent_div_82_div_55_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AccountEnquiryComponent_div_82_div_56_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AccountEnquiryComponent_div_82_div_57_Template, 1, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AccountEnquiryComponent_div_82_div_58_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AccountEnquiryComponent_div_82_div_59_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AccountEnquiryComponent_div_82_div_61_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AccountEnquiryComponent_div_82_div_62_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AccountEnquiryComponent_div_82_div_63_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AccountEnquiryComponent_div_82_div_64_Template, 4, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isOpeningDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isMemberDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isPigmyDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.opendate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_BALDATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_BALDATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_ASON_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_ASON_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_BALDATE));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_ASON_DATE));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.overdraftAmt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.overdraftAmt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_MONTHS) || (ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_DAYS));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_MONTHS) || (ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_DAYS));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_EXPIRE_DATE) || (ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_EXPDT) && (ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_ACNOTYPE) != "SH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_EXPIRE_DATE) || (ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_EXPDT) && (ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_ACNOTYPE) != "SH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_MONTHS) && !(ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_DAYS));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_EXPIRE_DATE) && !(ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_EXPDT) && (ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_ACNOTYPE) == "SH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isLastTranDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isLastTranDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isRenewalDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isRenewalDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.PIGMY_ACTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.PIGMY_ACTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isATypeMemNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isATypeMemNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r23.accountData == null ? null : ctx_r23.accountData.PIGMY_ACTYPE));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isAgentScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isAgentScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isAgentCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.isAgentCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_LINTEDT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_LINTEDT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_SCHMAMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_SCHMAMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_MATUAMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_MATUAMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_SCHMAMT));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_MATUAMT));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.LAST_TDS_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.LAST_TDS_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_REF_RECEIPTNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_REF_RECEIPTNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_REF_RECEIPTNO));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_INTRATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.accountData == null ? null : ctx_r23.accountData.AC_INTRATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.divtransferScheme && ctx_r23.getschemename == "SH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.divtransferScheme && ctx_r23.getschemename == "SH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.divtransferName && ctx_r23.getschemename == "SH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.divtransferName && ctx_r23.getschemename == "SH");
} }
function AccountEnquiryComponent_div_83_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TDS Amount : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_83_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r138.transactionData == null ? null : ctx_r138.transactionData.TDSAmount);
} }
function AccountEnquiryComponent_div_83_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 85);
} }
function AccountEnquiryComponent_div_83_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Installment Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_83_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r141.accountData == null ? null : ctx_r141.accountData.AC_SCHMAMT, "1.2-2"));
} }
function AccountEnquiryComponent_div_83_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interest On Months : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_83_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r143.transactionData == null ? null : ctx_r143.transactionData.intrestonMonth);
} }
function AccountEnquiryComponent_div_83_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interest On Days : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_83_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r145.transactionData == null ? null : ctx_r145.transactionData.intrestonDays);
} }
function AccountEnquiryComponent_div_83_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Total Products : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_83_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r147.transactionData == null ? null : ctx_r147.transactionData.totalProducts);
} }
function AccountEnquiryComponent_div_83_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Expected Installments : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_83_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r149.transactionData == null ? null : ctx_r149.transactionData.expectedInstallment);
} }
function AccountEnquiryComponent_div_83_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Received Installments : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_83_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r151.transactionData == null ? null : ctx_r151.transactionData.receivedInstallment);
} }
function AccountEnquiryComponent_div_83_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Due Installments : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_83_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r153.transactionData == null ? null : ctx_r153.transactionData.dueInstallment);
} }
function AccountEnquiryComponent_div_83_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Passbook Balance : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_83_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r155.transactionData == null ? null : ctx_r155.transactionData.passbookBal);
} }
function AccountEnquiryComponent_div_83_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduced By : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Salary Division : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sub Salary Division : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r156.introducerName == null ? "---" : ctx_r156.introducerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r156.transactionData == null ? null : ctx_r156.transactionData.salaryname) == null ? "---" : ctx_r156.transactionData == null ? null : ctx_r156.transactionData.salaryname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r156.transactionData == null ? null : ctx_r156.transactionData.subsalaryname) == null ? "---" : ctx_r156.transactionData == null ? null : ctx_r156.transactionData.subsalaryname);
} }
function AccountEnquiryComponent_div_83_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bank Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "bank name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Branch Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "branch name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Opening Balance : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccountEnquiryComponent_div_83_div_10_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AccountEnquiryComponent_div_83_div_11_Template, 4, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AccountEnquiryComponent_div_83_div_12_Template, 1, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AccountEnquiryComponent_div_83_div_13_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AccountEnquiryComponent_div_83_div_14_Template, 5, 4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Passed Amount : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Overdraft Interest : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AccountEnquiryComponent_div_83_div_32_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AccountEnquiryComponent_div_83_div_33_Template, 4, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Closing Balance : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Payable Interest : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AccountEnquiryComponent_div_83_div_51_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AccountEnquiryComponent_div_83_div_52_Template, 4, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AccountEnquiryComponent_div_83_div_53_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AccountEnquiryComponent_div_83_div_54_Template, 4, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Unpassed Amount : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Current Interest : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Penal Interest : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Total Closing Balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Total Interest : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, AccountEnquiryComponent_div_83_div_97_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, AccountEnquiryComponent_div_83_div_98_Template, 4, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, AccountEnquiryComponent_div_83_div_101_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, AccountEnquiryComponent_div_83_div_102_Template, 4, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, AccountEnquiryComponent_div_83_div_105_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, AccountEnquiryComponent_div_83_div_106_Template, 4, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, AccountEnquiryComponent_div_83_div_109_Template, 4, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, AccountEnquiryComponent_div_83_div_110_Template, 4, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, AccountEnquiryComponent_div_83_div_111_Template, 25, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, AccountEnquiryComponent_div_83_div_112_Template, 17, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.transactionData == null ? null : ctx_r24.transactionData.openingBal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.transactionData == null ? null : ctx_r24.transactionData.TDSAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.transactionData == null ? null : ctx_r24.transactionData.TDSAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r24.transactionData == null ? null : ctx_r24.transactionData.TDSAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isrecurringScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isrecurringScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.transactionData == null ? null : ctx_r24.transactionData.passedAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.transactionData == null ? null : ctx_r24.transactionData.overDraftInt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.transactionData == null ? null : ctx_r24.transactionData.intrestonMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.transactionData == null ? null : ctx_r24.transactionData.intrestonMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.transactionData == null ? null : ctx_r24.transactionData.closingBal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.transactionData == null ? null : ctx_r24.transactionData.payableInt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.transactionData == null ? null : ctx_r24.transactionData.intrestonDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.transactionData == null ? null : ctx_r24.transactionData.intrestonDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isTotalProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isTotalProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.transactionData == null ? null : ctx_r24.transactionData.unpassedAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.transactionData == null ? null : ctx_r24.transactionData.currentInt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.transactionData == null ? null : ctx_r24.transactionData.penalInt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.transactionData == null ? null : ctx_r24.transactionData.totalClosingBal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.transactionData == null ? null : ctx_r24.transactionData.totalInterest);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isrecurringScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isrecurringScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isrecurringScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isrecurringScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isrecurringScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isrecurringScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isrecurringScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isrecurringScheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isIntroducer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.isBankBranch);
} }
function AccountEnquiryComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " General Ledger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Opening Balance : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Current Balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Scheme Link To: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Balance Sheet Code: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Subsidiary Code: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Expenses Code: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Daily Liquidity Code: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Friday Liquidity Code: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.GLtransactionData == null ? null : ctx_r25.GLtransactionData.openingBal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.GLtransactionData == null ? null : ctx_r25.GLtransactionData.totalClosingBal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.GLtransactionData == null ? null : ctx_r25.GLtransactionData.schemeLinkGL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.GLtransactionData == null ? null : ctx_r25.GLtransactionData.schemeLinkGL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.GLtransactionData == null ? null : ctx_r25.GLtransactionData.schemeLinkGL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.GLtransactionData == null ? null : ctx_r25.GLtransactionData.schemeLinkGL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.GLtransactionData == null ? null : ctx_r25.GLtransactionData.schemeLinkGL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.GLtransactionData == null ? null : ctx_r25.GLtransactionData.schemeLinkGL);
} }
function AccountEnquiryComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Opening Shares Amount :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Opening Number of Shares:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Paid Dividend:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Shares Amount :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Number of Shares:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Unpaid Dividend:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Total Shares Amount :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Total Number of Shares:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Salary Division : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sub Salary Division : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Paid Bonus Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Retirement Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Left Months:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Unpaid Bonus Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.SHtransactionData == null ? null : ctx_r26.SHtransactionData.openingBal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.openingNumberShares);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.SHtransactionData == null ? null : ctx_r26.SHtransactionData.paidDividendAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.SHtransactionData == null ? null : ctx_r26.SHtransactionData.passedAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.numberofshares);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.SHtransactionData == null ? null : ctx_r26.SHtransactionData.unpaidDividendAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.SHtransactionData == null ? null : ctx_r26.SHtransactionData.totalsharesAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.openingNumberShares + ctx_r26.numberofshares);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r26.SHtransactionData == null ? null : ctx_r26.SHtransactionData.salaryname) == null ? "---" : ctx_r26.SHtransactionData == null ? null : ctx_r26.SHtransactionData.salaryname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r26.SHtransactionData == null ? null : ctx_r26.SHtransactionData.subsalaryname) == null ? "---" : ctx_r26.SHtransactionData == null ? null : ctx_r26.SHtransactionData.subsalaryname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.SHtransactionData == null ? null : ctx_r26.SHtransactionData.paidBonusAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r26.accountData == null ? null : ctx_r26.accountData.AC_RETIRE_DATE) == null || (ctx_r26.accountData == null ? null : ctx_r26.accountData.AC_RETIRE_DATE) == "" ? "---" : ctx_r26.accountData == null ? null : ctx_r26.accountData.AC_RETIRE_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.leftMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.SHtransactionData == null ? null : ctx_r26.SHtransactionData.unpaidBonusAmount);
} }
function AccountEnquiryComponent_div_86_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loan/Cash Credit Loan Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_86_div_2_Template, 3, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Interest Rate: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Overdraft Amount : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Opening Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Renewal Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Last Interest Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Expiry Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Period : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Months ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Overdue Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Drawing Power : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Security Amount : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Total Installments : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Sanction Limit : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Director Recommdation : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Due Installments : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Installment Type : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Installment Method : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Due Amount : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Installment Amount : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](159, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "+ Interest : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.isloanDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.loantransactionData == null ? null : ctx_r27.loantransactionData.interest_rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 21, ctx_r27.overdraftAmt, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.opendate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_BALDATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_LINTEDT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_EXPIRE_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_MONTHS) == "" || (ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_MONTHS) == null ? 0 : ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_MONTHS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r27.loantransactionData == null ? null : ctx_r27.loantransactionData.overdueDate) == null ? "---" : ctx_r27.loantransactionData == null ? null : ctx_r27.loantransactionData.overdueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_DRAWPOWER_AMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](90, 24, ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_SECURITY_AMT, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.totalInstallment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](108, 27, ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_SANCTION_AMOUNT, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r27.loantransactionData == null ? null : ctx_r27.loantransactionData.AC_RECOMMEND_BY) == undefined ? "---" : ctx_r27.loantransactionData == null ? null : ctx_r27.loantransactionData.AC_RECOMMEND_BY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.dueInstallmentLoan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_REPAYMODE) == "M" ? "Monthly" : (ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_REPAYMODE) == "Q" ? "Quarterly" : (ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_REPAYMODE) == "H" ? "Half Yearly" : (ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_REPAYMODE) == "Y" ? "Yearly" : (ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_REPAYMODE) == "O" ? "On Maturity" : "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.INSTALLMENT_METHOD) == "E" ? "EMI" : (ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.INSTALLMENT_METHOD) == "R" ? "Reducing" : (ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.INSTALLMENT_METHOD) == "I" ? "Plain" : (ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.INSTALLMENT_METHOD) == "Null" || (ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.INSTALLMENT_METHOD) == null ? "With Interest" : "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.loantransactionData == null ? null : ctx_r27.loantransactionData.dueBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](159, 30, ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.AC_INSTALLMENT, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.INSTALLMENT_METHOD) == "E" ? 0 : (ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.INSTALLMENT_METHOD) == "Null" || (ctx_r27.accountEvent == null ? null : ctx_r27.accountEvent.INSTALLMENT_METHOD) == null ? 0 : ctx_r27.loantransactionData == null ? null : ctx_r27.loantransactionData.currentInt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.totalInterest);
} }
function AccountEnquiryComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Day Opening Balance : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Transaction Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Penal Interest : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Passed Amount : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Other Receivable Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Receivable Penal: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Closing Balance : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Interest On Days : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Overdue Interest: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Unpassed Amount : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Received Interest : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Receivable Interest: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Total Closing Balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Rebate Interest : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Current Interest: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Total Receivable: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Total Interest: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Loan Reason: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Salary Division : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Sub Salary Division : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.openingBal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.lastTransactionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.penalInt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.passedAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.otherReceivedAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.receiveablePenal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.closingBal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.intrestonDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.overdueInt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.unpassedAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.receivedInterest);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.payableInt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.totalClosingBal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.rebateIntrest);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.currentInt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loanTotalReceivable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.loanTotalInterest);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.accountEvent == null ? null : ctx_r28.accountEvent.purpose == null ? null : ctx_r28.accountEvent.purpose.NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.salaryname) == null ? "---" : ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.salaryname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.subsalaryname) == null ? "---" : ctx_r28.loantransactionData == null ? null : ctx_r28.loantransactionData.subsalaryname);
} }
function AccountEnquiryComponent_a_103_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_103_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r159.viewView("attorney"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Attorney");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_li_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_li_105_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_li_105_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r162); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r161.viewView("interestReceivedHistory"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 Interest Received History ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_li_106_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_li_106_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r163.viewView("interestPaidHistory"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 Interest Paid History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_li_107_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_li_107_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r165.viewView("interestPostedHistory"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 Interest Posted History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_li_108_Template(rf, ctx) { if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_li_108_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r167.viewView("interestInstructions"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 Interest Instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_li_109_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_li_109_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r169.viewView("payableInterest"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 Payable Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_111_Template(rf, ctx) { if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_111_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r171.viewView("lienInfo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Lien Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_112_Template(rf, ctx) { if (rf & 1) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_112_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r174); const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r173.viewView("tdsDetail"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 TDS Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_114_Template(rf, ctx) { if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_114_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r175.viewView("goldsilver"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Goldsilver Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_115_Template(rf, ctx) { if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_115_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r177.viewView("guaranter"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Guarantor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_117_Template(rf, ctx) { if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_117_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r179.viewView("productview"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Product View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_118_Template(rf, ctx) { if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_118_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r182); const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r181.viewView("oldDeposits"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Old Deposits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_119_Template(rf, ctx) { if (rf & 1) {
    const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_119_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184); const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r183.viewView("coborrower"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Coborrower");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_li_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 NPA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_122_Template(rf, ctx) { if (rf & 1) {
    const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_122_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r186); const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r185.viewView("joints"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Joint Holders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_123_Template(rf, ctx) { if (rf & 1) {
    const _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_123_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188); const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r187.viewView("nominee"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Nominee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_125_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_125_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r189.viewView("accountInfo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Account Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_127_Template(rf, ctx) { if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_127_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r191.viewView("payableInterest"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Receivable Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_129_Template(rf, ctx) { if (rf & 1) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_129_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194); const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r193.viewView("document"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_a_130_Template(rf, ctx) { if (rf & 1) {
    const _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_a_130_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r196); const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx_r195.viewView("customerID"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_img_133_Template(rf, ctx) { if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AccountEnquiryComponent_img_133_Template_img_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r197.showImage(ctx_r197.customerImg); })("mouseout", function AccountEnquiryComponent_img_133_Template_img_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r199.hideImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r50.customerImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AccountEnquiryComponent_img_136_Template(rf, ctx) { if (rf & 1) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AccountEnquiryComponent_img_136_Template_img_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r201); const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r200.showImage(ctx_r200.signture); })("mouseout", function AccountEnquiryComponent_img_136_Template_img_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r201); const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r202.hideImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r51.signture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AccountEnquiryComponent_li_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_li_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r53.accountEvent == null ? null : ctx_r53.accountEvent.BANKACNO);
} }
function AccountEnquiryComponent_li_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Customer ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r54.idmaster.id);
} }
function AccountEnquiryComponent_li_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PAN ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r55.idmaster.AC_PANNO);
} }
function AccountEnquiryComponent_li_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Adhar Card Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r56.idmaster == null ? null : ctx_r56.idmaster.AC_ADHARNO);
} }
function AccountEnquiryComponent_li_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r57.idmaster.AC_MOBILENO);
} }
function AccountEnquiryComponent_li_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Guardian Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r58.accountEvent == null ? null : ctx_r58.accountEvent.AC_GRDNAME);
} }
function AccountEnquiryComponent_li_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Joint Holder Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r59.jointHolderName);
} }
function AccountEnquiryComponent_li_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Renewal Count:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r60.accountEvent == null ? null : ctx_r60.accountEvent.AC_RENEWAL_COUNT);
} }
function AccountEnquiryComponent_div_161_ng_container_2_app_ledger_view_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ledger-view", 100);
} if (rf & 2) {
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accBranch", ctx_r205.ngBranchCode)("accSchemeName", ctx_r205.getschemename)("accScheme", ctx_r205.ngscheme)("accAcNo", ctx_r205.accountedit)("accFromDate", ctx_r205.accFromDate)("accToDate", ctx_r205.fromdate)("accountEvent", ctx_r205.accountEvent);
} }
function AccountEnquiryComponent_div_161_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_161_ng_container_2_app_ledger_view_1_Template, 1, 7, "app-ledger-view", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r203.IsLedgerView && ctx_r203.getschemename != "SH");
} }
function AccountEnquiryComponent_div_161_ng_container_3_app_shares_ledger_view_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shares-ledger-view", 100);
} if (rf & 2) {
    const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accBranch", ctx_r206.ngBranchCode)("accSchemeName", ctx_r206.getschemename)("accScheme", ctx_r206.ngscheme)("accAcNo", ctx_r206.accountedit)("accFromDate", ctx_r206.accFromDate)("accToDate", ctx_r206.fromdate)("accountEvent", ctx_r206.accountEvent);
} }
function AccountEnquiryComponent_div_161_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_161_ng_container_3_app_shares_ledger_view_1_Template, 1, 7, "app-shares-ledger-view", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r204.IsLedgerView && ctx_r204.getschemename == "SH");
} }
function AccountEnquiryComponent_div_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_161_ng_container_2_Template, 2, 1, "ng-container", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_161_ng_container_3_Template, 2, 1, "ng-container", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r62.IsLedgerView && ctx_r62.ngscheme != null && ctx_r62.accountedit != null && ctx_r62.getschemename != "SH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r62.IsLedgerView && ctx_r62.ngscheme != null && ctx_r62.accountedit != null && ctx_r62.getschemename == "SH");
} }
function AccountEnquiryComponent_div_162_ng_container_2_app_interest_paid_history_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-interest-paid-history", 100);
} if (rf & 2) {
    const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accBranch", ctx_r208.ngBranchCode)("accSchemeName", ctx_r208.getschemename)("accScheme", ctx_r208.ngscheme)("accAcNo", ctx_r208.bankacno)("accFromDate", ctx_r208.opendate)("accToDate", ctx_r208.fromdate)("accountEvent", ctx_r208.accountEvent);
} }
function AccountEnquiryComponent_div_162_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_162_ng_container_2_app_interest_paid_history_1_Template, 1, 7, "app-interest-paid-history", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r207.IsInterestPaidHistoryView && ctx_r207.getschemename == "TD");
} }
function AccountEnquiryComponent_div_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_162_ng_container_2_Template, 2, 1, "ng-container", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.IsInterestPaidHistoryView && ctx_r63.ngscheme != null && ctx_r63.accountedit != null && ctx_r63.getschemename == "TD");
} }
function AccountEnquiryComponent_div_163_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Joint Holders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_163_div_3_table_3_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r216 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r216.JOINT_AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r216.JOINT_AC_CUSTID === "" ? "-" : data_r216.JOINT_AC_CUSTID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r216.JOINT_ACNAME === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r216.JOINT_ACNAME === "" ? "-" : data_r216.JOINT_ACNAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r216.OPERATOR === "" ? "td_left" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r216.OPERATOR === "" ? "-" : data_r216.OPERATOR, " ");
} }
function AccountEnquiryComponent_div_163_div_3_table_3_tbody_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_163_div_3_table_3_tbody_8_tr_1_Template, 7, 6, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r213.accountEvent == null ? null : ctx_r213.accountEvent.jointAccounts);
} }
function AccountEnquiryComponent_div_163_div_3_table_3_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_163_div_3_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AccountEnquiryComponent_div_163_div_3_table_3_tbody_8_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AccountEnquiryComponent_div_163_div_3_table_3_tbody_9_Template, 4, 0, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r212.jointAccounts == null ? null : ctx_r212.jointAccounts.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r212.accountEvent == null ? null : ctx_r212.accountEvent.jointAccounts == null ? null : ctx_r212.accountEvent.jointAccounts.length) == 0);
} }
function AccountEnquiryComponent_div_163_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_163_div_3_table_3_Template, 10, 2, "table", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r210.accountEvent == null ? null : ctx_r210.accountEvent.jointAccounts == null ? null : ctx_r210.accountEvent.jointAccounts.length) != 0 && (ctx_r210.accountEvent == null ? null : ctx_r210.accountEvent.jointAccounts) != undefined);
} }
function AccountEnquiryComponent_div_163_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Joint Holders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_163_div_2_Template, 5, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_163_div_3_Template, 4, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_163_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r64.accountEvent == null ? null : ctx_r64.accountEvent.jointAccounts.length) != 0 && (ctx_r64.accountEvent == null ? null : ctx_r64.accountEvent.jointAccounts) != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r64.accountEvent == null ? null : ctx_r64.accountEvent.jointAccounts == null ? null : ctx_r64.accountEvent.jointAccounts.length) != 0 && (ctx_r64.accountEvent == null ? null : ctx_r64.accountEvent.jointAccounts) != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r64.accountEvent == null ? null : ctx_r64.accountEvent.jointAccounts.length) == 0);
} }
function AccountEnquiryComponent_div_164_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nominee Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_164_table_6_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nominee_r224 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nominee_r224.AC_NNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nominee_r224.AC_NRELA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", nominee_r224.AGE === "" || nominee_r224.AGE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nominee_r224.AGE === "" || nominee_r224.AGE == null ? "-" : nominee_r224.AGE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", nominee_r224.AC_NDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nominee_r224.AC_NDATE === "" ? "-" : nominee_r224.AC_NDATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", nominee_r224.AC_NADDR === "" || nominee_r224.AC_NADDR == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nominee_r224.AC_NADDR === "" || nominee_r224.AC_NADDR == null ? "-" : nominee_r224.AC_NADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", nominee_r224.AC_NCTCODE === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nominee_r224.AC_NCTCODE === "" ? "-" : nominee_r224.AC_CITYNAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", nominee_r224.AC_NPIN === "" || nominee_r224.AC_NPIN == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nominee_r224.AC_NPIN === "" || nominee_r224.AC_NPIN == null ? "-" : nominee_r224.AC_NPIN, " ");
} }
function AccountEnquiryComponent_div_164_table_6_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_164_table_6_tbody_16_tr_1_Template, 15, 12, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r221.accountEvent.nomineeDetails);
} }
function AccountEnquiryComponent_div_164_table_6_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_164_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Relation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nomination Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pin code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AccountEnquiryComponent_div_164_table_6_tbody_16_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AccountEnquiryComponent_div_164_table_6_tbody_17_Template, 4, 0, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r219.accountEvent.nomineeDetails == null ? null : ctx_r219.accountEvent.nomineeDetails.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r219.accountEvent.nomineeDetails == null ? null : ctx_r219.accountEvent.nomineeDetails.length) == 0);
} }
function AccountEnquiryComponent_div_164_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nominee Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_164_div_2_Template, 4, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AccountEnquiryComponent_div_164_table_6_Template, 18, 2, "table", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AccountEnquiryComponent_div_164_div_7_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r65.accountEvent == null ? null : ctx_r65.accountEvent.nomineeDetails == null ? null : ctx_r65.accountEvent.nomineeDetails.length) != 0 && (ctx_r65.accountEvent == null ? null : ctx_r65.accountEvent.nomineeDetails) != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r65.accountEvent == null ? null : ctx_r65.accountEvent.nomineeDetails == null ? null : ctx_r65.accountEvent.nomineeDetails.length) != 0 && (ctx_r65.accountEvent == null ? null : ctx_r65.accountEvent.nomineeDetails) != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r65.accountEvent == null ? null : ctx_r65.accountEvent.nomineeDetails.length) == 0);
} }
function AccountEnquiryComponent_div_165_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Attorneys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_165_div_3_table_3_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r232 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r232.ATTERONEY_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r232.ATTERONEY_NAME === "" ? "-" : data_r232.ATTERONEY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r232.DATE_APPOINTED === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r232.DATE_APPOINTED === "" ? "-" : data_r232.DATE_APPOINTED, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r232.DATE_EXPIRY === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r232.DATE_EXPIRY === "" ? "-" : data_r232.DATE_EXPIRY, " ");
} }
function AccountEnquiryComponent_div_165_div_3_table_3_tbody_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_165_div_3_table_3_tbody_8_tr_1_Template, 7, 6, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r230.accountEvent == null ? null : ctx_r230.accountEvent.powerOfAttorney);
} }
function AccountEnquiryComponent_div_165_div_3_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Appointed on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AccountEnquiryComponent_div_165_div_3_table_3_tbody_8_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r229.accountEvent == null ? null : ctx_r229.accountEvent.powerOfAttorney == null ? null : ctx_r229.accountEvent.powerOfAttorney.length) != 0);
} }
function AccountEnquiryComponent_div_165_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_165_div_3_table_3_Template, 9, 1, "table", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r227.accountEvent == null ? null : ctx_r227.accountEvent.powerOfAttorney == null ? null : ctx_r227.accountEvent.powerOfAttorney.length) != 0);
} }
function AccountEnquiryComponent_div_165_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Attorney");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_165_div_2_Template, 4, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_165_div_3_Template, 4, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_165_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r66.accountEvent == null ? null : ctx_r66.accountEvent.powerOfAttorney == null ? null : ctx_r66.accountEvent.powerOfAttorney.length) != 0 && (ctx_r66.accountEvent == null ? null : ctx_r66.accountEvent.powerOfAttorney) != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r66.accountEvent == null ? null : ctx_r66.accountEvent.powerOfAttorney == null ? null : ctx_r66.accountEvent.powerOfAttorney.length) != 0 && (ctx_r66.accountEvent == null ? null : ctx_r66.accountEvent.powerOfAttorney) != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r66.accountEvent == null ? null : ctx_r66.accountEvent.powerOfAttorney.length) == 0);
} }
function AccountEnquiryComponent_div_166_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GUARANTER DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_166_div_3_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r240 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r240.GAC_CUSTID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r240.AC_MEMBNO == "" || data_r240.AC_MEMBNO == null ? "---" : data_r240.AC_MEMBNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r240.AC_MEMBTYPE == "" || data_r240.AC_MEMBTYPE == null ? "---" : data_r240.AC_MEMBTYPE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r240.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r240.EXP_DATE);
} }
function AccountEnquiryComponent_div_166_div_3_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_166_div_3_tbody_15_tr_1_Template, 11, 5, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r237.accountEvent == null ? null : ctx_r237.accountEvent.guaranterMaster);
} }
function AccountEnquiryComponent_div_166_div_3_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_166_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Member no");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Member Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AccountEnquiryComponent_div_166_div_3_tbody_15_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AccountEnquiryComponent_div_166_div_3_tbody_16_Template, 4, 0, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r235.accountEvent == null ? null : ctx_r235.accountEvent.guaranterMaster == null ? null : ctx_r235.accountEvent.guaranterMaster.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r235.accountEvent == null ? null : ctx_r235.accountEvent.guaranterMaster == null ? null : ctx_r235.accountEvent.guaranterMaster.length) == 0);
} }
function AccountEnquiryComponent_div_166_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "GUARANTER DETAILS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_166_div_2_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_166_div_3_Template, 17, 2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_166_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r67.accountEvent == null ? null : ctx_r67.accountEvent.guaranterMaster == null ? null : ctx_r67.accountEvent.guaranterMaster.length) != 0 && (ctx_r67.accountEvent == null ? null : ctx_r67.accountEvent.guaranterMaster) != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r67.accountEvent == null ? null : ctx_r67.accountEvent.guaranterMaster == null ? null : ctx_r67.accountEvent.guaranterMaster.length) != 0 && (ctx_r67.accountEvent == null ? null : ctx_r67.accountEvent.guaranterMaster) != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r67.accountEvent == null ? null : ctx_r67.accountEvent.guaranterMaster == null ? null : ctx_r67.accountEvent.guaranterMaster.length) == 0);
} }
function AccountEnquiryComponent_div_167_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Coborrowers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_167_div_3_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r247 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r247.CAC_CUSTID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r247.AC_NAME);
} }
function AccountEnquiryComponent_div_167_div_3_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_167_div_3_tbody_9_tr_1_Template, 5, 2, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r245.accountEvent == null ? null : ctx_r245.accountEvent.CoborrowerMaster);
} }
function AccountEnquiryComponent_div_167_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AccountEnquiryComponent_div_167_div_3_tbody_9_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r243.accountEvent == null ? null : ctx_r243.accountEvent.CoborrowerMaster == null ? null : ctx_r243.accountEvent.CoborrowerMaster.length) != 0);
} }
function AccountEnquiryComponent_div_167_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Coborrowers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_167_div_2_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_167_div_3_Template, 10, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_167_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r68.accountEvent == null ? null : ctx_r68.accountEvent.CoborrowerMaster == null ? null : ctx_r68.accountEvent.CoborrowerMaster.length) != 0 && (ctx_r68.accountEvent == null ? null : ctx_r68.accountEvent.CoborrowerMaster) != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r68.accountEvent == null ? null : ctx_r68.accountEvent.CoborrowerMaster == null ? null : ctx_r68.accountEvent.CoborrowerMaster.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r68.accountEvent == null ? null : ctx_r68.accountEvent.CoborrowerMaster == null ? null : ctx_r68.accountEvent.CoborrowerMaster.length) == 0);
} }
function AccountEnquiryComponent_div_168_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Old Deposits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_168_div_3_tbody_23_tr_1_Template(rf, ctx) { if (rf & 1) {
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
    const data_r254 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r254.AC_RENEWAL_COUNTER);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r254.OLD_ASON_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r254.OLD_MONTH);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r254.OLD_DAYS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r254.OLD_EXPIRY_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r254.OLD_AC_SCHEME_AMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r254.OLD_MATUAMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r254.OLD_INTEREST_RATE == "" || data_r254.OLD_INTEREST_RATE == null ? "---" : data_r254.OLD_INTEREST_RATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r254.OLD_RECEIPT_NO == "" || data_r254.OLD_RECEIPT_NO == null ? "---" : data_r254.OLD_RECEIPT_NO);
} }
function AccountEnquiryComponent_div_168_div_3_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_168_div_3_tbody_23_tr_1_Template, 19, 9, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r252.oldDepositArr);
} }
function AccountEnquiryComponent_div_168_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Renewal Counter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " As on Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Maturity Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Deposit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Maturiy AFmount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Receipt Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AccountEnquiryComponent_div_168_div_3_tbody_23_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r250.oldDepositArr == null ? null : ctx_r250.oldDepositArr.length) != 0);
} }
function AccountEnquiryComponent_div_168_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Old Deposits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_168_div_2_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_168_div_3_Template, 24, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_168_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r69.oldDepositArr == null ? null : ctx_r69.oldDepositArr.length) != 0 && ctx_r69.oldDepositArr != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r69.oldDepositArr == null ? null : ctx_r69.oldDepositArr.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r69.oldDepositArr == null ? null : ctx_r69.oldDepositArr.length) == 0);
} }
function AccountEnquiryComponent_div_169_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interest Instruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_169_div_3_tbody_17_tr_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r261 = ctx.$implicit;
    const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r261.interestCr.S_ACNOTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r261.interestCr.S_APPL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r261.CR_AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r260.accountEvent == null ? null : ctx_r260.accountEvent.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r261.TRAN_TYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r261.LAST_EXEC_DATE);
} }
function AccountEnquiryComponent_div_169_div_3_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_169_div_3_tbody_17_tr_1_Template, 13, 6, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r259.interestInstructionArr);
} }
function AccountEnquiryComponent_div_169_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scheme Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scheme Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Instruction Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Execution Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AccountEnquiryComponent_div_169_div_3_tbody_17_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r257.interestInstructionArr == null ? null : ctx_r257.interestInstructionArr.length) != 0);
} }
function AccountEnquiryComponent_div_169_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Interest Instruction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_169_div_2_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_169_div_3_Template, 18, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_169_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r70.interestInstructionArr == null ? null : ctx_r70.interestInstructionArr.length) != 0 && ctx_r70.interestInstructionArr != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r70.interestInstructionArr == null ? null : ctx_r70.interestInstructionArr.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r70.interestInstructionArr == null ? null : ctx_r70.interestInstructionArr.length) == 0);
} }
function AccountEnquiryComponent_div_170_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gold Silver Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_170_div_3_tbody_25_tr_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r268 = ctx.$implicit;
    const indexOfelement_r269 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](indexOfelement_r269 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r268.SUBMISSION_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r268 == null ? null : data_r268.AC_EXPIRE_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r268.BAG_RECEIPT_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r268.ARTICLE_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r268.NOMINEE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r268.NOMINEE_RELATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r268.TOTAL_WEIGHT_GMS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r268.CLEAR_WEIGHT_GMS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r268.REMARK);
} }
function AccountEnquiryComponent_div_170_div_3_tbody_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_170_div_3_tbody_25_tr_1_Template, 21, 10, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r266.goldsilverArr);
} }
function AccountEnquiryComponent_div_170_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submission Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Exp. Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Receipt Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Article Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nominee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Nominee Relation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Clear Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Gold Loan Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AccountEnquiryComponent_div_170_div_3_tbody_25_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r264.goldsilverArr == null ? null : ctx_r264.goldsilverArr.length) != 0);
} }
function AccountEnquiryComponent_div_170_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Gold Silver Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_170_div_2_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_170_div_3_Template, 26, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_170_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r71.goldsilverArr == null ? null : ctx_r71.goldsilverArr.length) != 0 && ctx_r71.goldsilverArr != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r71.goldsilverArr == null ? null : ctx_r71.goldsilverArr.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r71.goldsilverArr == null ? null : ctx_r71.goldsilverArr.length) == 0);
} }
function AccountEnquiryComponent_div_171_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lien Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r275 == null ? null : data_r275.masterData == null ? null : data_r275.masterData.LNCCMaster.S_APPL);
} }
function AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r275 == null ? null : data_r275.masterData == null ? null : data_r275.masterData.DPMaster.S_APPL, "");
} }
function AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r275 == null ? null : data_r275.masterData == null ? null : data_r275.masterData.LNCCMaster.S_NAME);
} }
function AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r275 == null ? null : data_r275.masterData == null ? null : data_r275.masterData.DPMaster.S_NAME, "");
} }
function AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r275.AC_NO);
} }
function AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r275.DEPO_AC_NO, " ");
} }
function AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_td_3_Template, 2, 1, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_td_4_Template, 2, 1, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_td_5_Template, 2, 1, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_td_6_Template, 2, 1, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_td_7_Template, 2, 1, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_td_8_Template, 2, 1, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r275 = ctx.$implicit;
    const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r275 == null ? null : data_r275.masterData.AC_ACNOTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r274.getschemename == "TD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r274.getschemename == "LN" || ctx_r274.getschemename == "CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r274.getschemename == "TD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r274.getschemename == "LN" || ctx_r274.getschemename == "CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r274.getschemename == "TD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r274.getschemename == "LN" || ctx_r274.getschemename == "CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r275 == null ? null : data_r275.masterData == null ? null : data_r275.masterData.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r275.SECU_CODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r275.REMARK);
} }
function AccountEnquiryComponent_div_171_div_3_tbody_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_171_div_3_tbody_19_tr_1_Template, 15, 10, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r273.lienInfoArr);
} }
function AccountEnquiryComponent_div_171_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scheme Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scheme Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Scheme Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Security Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Remark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AccountEnquiryComponent_div_171_div_3_tbody_19_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r271.lienInfoArr == null ? null : ctx_r271.lienInfoArr.length) != 0);
} }
function AccountEnquiryComponent_div_171_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lien Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_171_div_2_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_171_div_3_Template, 20, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_171_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r72.lienInfoArr == null ? null : ctx_r72.lienInfoArr.length) != 0 && ctx_r72.lienInfoArr != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r72.lienInfoArr == null ? null : ctx_r72.lienInfoArr.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r72.lienInfoArr == null ? null : ctx_r72.lienInfoArr.length) == 0);
} }
function AccountEnquiryComponent_div_172_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_172_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_172_div_4_tbody_17_tr_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r295 = ctx.$implicit;
    const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r294.customerID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r295.ACNOTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r295.ACTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r295.BANKACNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r295.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r295.ledgerBal, " ", data_r295.type, " ");
} }
function AccountEnquiryComponent_div_172_div_4_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_172_div_4_tbody_17_tr_1_Template, 13, 7, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r293.customerIDArr);
} }
function AccountEnquiryComponent_div_172_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scheme Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Scheme Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ledger Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AccountEnquiryComponent_div_172_div_4_tbody_17_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r291.customerIDArr == null ? null : ctx_r291.customerIDArr.length) != 0);
} }
function AccountEnquiryComponent_div_172_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_172_div_2_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_172_div_3_Template, 5, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_172_div_4_Template, 18, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AccountEnquiryComponent_div_172_div_5_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r73.customerIDArr == null ? null : ctx_r73.customerIDArr.length) != 0 && ctx_r73.customerIDArr != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r73.customerIDArr.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r73.customerIDArr == null ? null : ctx_r73.customerIDArr.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r73.customerIDArr == null ? null : ctx_r73.customerIDArr.length) == 0);
} }
function AccountEnquiryComponent_div_173_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interest Posted History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_173_div_3_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r302 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r302.TRAN_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r302.TRAN_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r302.TRAN_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r302.INTEREST_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r302.NARRATION);
} }
function AccountEnquiryComponent_div_173_div_3_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_173_div_3_tbody_15_tr_1_Template, 11, 5, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r300.interestPostedHistoryArr);
} }
function AccountEnquiryComponent_div_173_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Transaction Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Transaction Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Interest Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AccountEnquiryComponent_div_173_div_3_tbody_15_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r298.interestPostedHistoryArr == null ? null : ctx_r298.interestPostedHistoryArr.length) != 0);
} }
function AccountEnquiryComponent_div_173_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Interest Posted History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_173_div_2_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_173_div_3_Template, 16, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_173_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r74.interestPostedHistoryArr == null ? null : ctx_r74.interestPostedHistoryArr.length) != 0 && ctx_r74.interestPostedHistoryArr != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r74.interestPostedHistoryArr == null ? null : ctx_r74.interestPostedHistoryArr.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r74.interestPostedHistoryArr == null ? null : ctx_r74.interestPostedHistoryArr.length) == 0);
} }
function AccountEnquiryComponent_div_174_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interest Received History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_174_div_3_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r309 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r309.TRAN_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r309.TRAN_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r309.TRAN_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r309.INTEREST_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r309.NARRATION);
} }
function AccountEnquiryComponent_div_174_div_3_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_174_div_3_tbody_15_tr_1_Template, 11, 5, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r307.interestReceivedHistoryArr);
} }
function AccountEnquiryComponent_div_174_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Transaction Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Transaction Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Interest Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AccountEnquiryComponent_div_174_div_3_tbody_15_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r305.interestReceivedHistoryArr == null ? null : ctx_r305.interestReceivedHistoryArr.length) != 0);
} }
function AccountEnquiryComponent_div_174_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Interest Received History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_174_div_2_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_174_div_3_Template, 16, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_174_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r75.interestReceivedHistoryArr == null ? null : ctx_r75.interestReceivedHistoryArr.length) != 0 && ctx_r75.interestReceivedHistoryArr != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r75.interestReceivedHistoryArr == null ? null : ctx_r75.interestReceivedHistoryArr.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r75.interestReceivedHistoryArr == null ? null : ctx_r75.interestReceivedHistoryArr.length) == 0);
} }
function AccountEnquiryComponent_div_175_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Receivable Interest Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_175_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Payable Interest Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_175_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_175_div_2_div_1_Template, 3, 0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_175_div_2_div_2_Template, 3, 0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r311.getschemename == "LN" || ctx_r311.getschemename == "CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r311.getschemename != "LN" && ctx_r311.getschemename != "CC");
} }
function AccountEnquiryComponent_div_175_div_3_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Receivable Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_175_div_3_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payable Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_175_div_3_tbody_13_tr_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r320 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r320.TRAN_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r320.TRAN_DRCR);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r320.RECPAY_INT_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r320.NARRATION);
} }
function AccountEnquiryComponent_div_175_div_3_tbody_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_175_div_3_tbody_13_tr_1_Template, 9, 4, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r318.payableInterestArr);
} }
function AccountEnquiryComponent_div_175_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Transaction Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Debit/Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AccountEnquiryComponent_div_175_div_3_td_9_Template, 2, 0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccountEnquiryComponent_div_175_div_3_td_10_Template, 2, 0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Particulars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AccountEnquiryComponent_div_175_div_3_tbody_13_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r312.getschemename == "LN" || ctx_r312.getschemename == "CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r312.getschemename != "LN" && ctx_r312.getschemename != "CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r312.payableInterestArr == null ? null : ctx_r312.payableInterestArr.length) != 0);
} }
function AccountEnquiryComponent_div_175_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Receivable Interest Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_175_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Payable Interest Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_175_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_175_div_4_div_3_Template, 3, 0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_175_div_4_div_4_Template, 3, 0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r313.getschemename == "LN" || ctx_r313.getschemename == "CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r313.getschemename != "LN" && ctx_r313.getschemename != "CC");
} }
function AccountEnquiryComponent_div_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_175_div_2_Template, 5, 2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_175_div_3_Template, 14, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_175_div_4_Template, 8, 2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r76.payableInterestArr == null ? null : ctx_r76.payableInterestArr.length) != 0 && ctx_r76.payableInterestArr != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r76.payableInterestArr == null ? null : ctx_r76.payableInterestArr.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r76.payableInterestArr == null ? null : ctx_r76.payableInterestArr.length) == 0);
} }
function AccountEnquiryComponent_div_176_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Account Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_176_div_3_tbody_23_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r329 = ctx.$implicit;
    const indexOfelement_r330 = ctx.index;
    const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](indexOfelement_r330 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r328.accountEvent == null ? null : ctx_r328.accountEvent.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r329.AC_PHONE_RES);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r329.AC_PHONE_OFFICE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r329.AC_GALLI);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r329.AC_ADDR);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r329.AC_AREA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r329.city == null ? null : data_r329.city.CITY_NAME);
} }
function AccountEnquiryComponent_div_176_div_3_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_176_div_3_tbody_23_tr_1_Template, 18, 8, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r327.accountInfoArr);
} }
function AccountEnquiryComponent_div_176_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Receipt Printed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Phone No. (R )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Phone No. (O )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Address Line 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Address Line2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Address Line3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AccountEnquiryComponent_div_176_div_3_tbody_23_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r325.accountInfoArr.length != 0);
} }
function AccountEnquiryComponent_div_176_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Account Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_176_div_2_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_176_div_3_Template, 24, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_176_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r77.accountInfoArr.length != 0 && ctx_r77.accountInfoArr != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r77.accountInfoArr.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r77.accountInfoArr == null ? null : ctx_r77.accountInfoArr.length) == 0);
} }
function AccountEnquiryComponent_div_177_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TDS Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_177_div_3_tbody_17_tr_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r336 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r336.AC_ACNOTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r336.AC_TYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r336.AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r336.INTEREST_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r336.LAST_TDS_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r336.TDS_AMOUNT);
} }
function AccountEnquiryComponent_div_177_div_3_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_177_div_3_tbody_17_tr_1_Template, 13, 6, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r334.tdsDeatilsArr);
} }
function AccountEnquiryComponent_div_177_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Interest Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last TDS Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "TDS Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AccountEnquiryComponent_div_177_div_3_tbody_17_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r332.tdsDeatilsArr == null ? null : ctx_r332.tdsDeatilsArr.length) != 0);
} }
function AccountEnquiryComponent_div_177_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TDS Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_177_div_2_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_177_div_3_Template, 18, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_177_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r78.tdsDeatilsArr == null ? null : ctx_r78.tdsDeatilsArr.length) != 0 && ctx_r78.tdsDeatilsArr != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r78.tdsDeatilsArr == null ? null : ctx_r78.tdsDeatilsArr.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r78.tdsDeatilsArr == null ? null : ctx_r78.tdsDeatilsArr.length) == 0);
} }
function AccountEnquiryComponent_div_178_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_178_div_3_tbody_11_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_div_178_div_3_tbody_11_tr_1_Template_span_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r348); const data_r345 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); const ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); _r343.show(); return ctx_r347.viewImagePreview($event, ctx_r347.documentUrl + data_r345.PATH); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r345 = ctx.$implicit;
    const indexOfelement_r346 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](indexOfelement_r346 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r345.DocumentMaster.NAME);
} }
function AccountEnquiryComponent_div_178_div_3_tbody_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_178_div_3_tbody_11_tr_1_Template, 8, 2, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r341.accountEvent == null ? null : ctx_r341.accountEvent.idmaster == null ? null : ctx_r341.accountEvent.idmaster.custdocument);
} }
function AccountEnquiryComponent_div_178_div_3_tbody_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_178_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " View Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AccountEnquiryComponent_div_178_div_3_tbody_11_Template, 2, 1, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AccountEnquiryComponent_div_178_div_3_tbody_12_Template, 4, 0, "tbody", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-modal-basic", 54, 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_div_178_div_3_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r350); const _r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _r343.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_div_178_div_3_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r350); const _r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _r343.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r339.accountEvent == null ? null : ctx_r339.accountEvent.idmaster == null ? null : ctx_r339.accountEvent.idmaster.custdocument == null ? null : ctx_r339.accountEvent.idmaster.custdocument.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r339.accountEvent == null ? null : ctx_r339.accountEvent.custdocument == null ? null : ctx_r339.accountEvent.custdocument.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-md");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r339.selectedImagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AccountEnquiryComponent_div_178_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountEnquiryComponent_div_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_178_div_2_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_178_div_3_Template, 27, 4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_178_div_4_Template, 9, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r79.accountEvent == null ? null : ctx_r79.accountEvent.custdocument == null ? null : ctx_r79.accountEvent.custdocument.length) != 0 && ctx_r79.tdsDeatilsArr != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r79.accountEvent == null ? null : ctx_r79.accountEvent.idmaster == null ? null : ctx_r79.accountEvent.idmaster.custdocument == null ? null : ctx_r79.accountEvent.idmaster.custdocument.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r79.accountEvent == null ? null : ctx_r79.accountEvent.custdocument == null ? null : ctx_r79.accountEvent.custdocument.length) == 0);
} }
function AccountEnquiryComponent_div_179_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r352.productName, " product");
} }
function AccountEnquiryComponent_div_179_div_3_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r359 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r359.key, " ");
} }
function AccountEnquiryComponent_div_179_div_3_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r363 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ele_r363.value);
} }
function AccountEnquiryComponent_div_179_div_3_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountEnquiryComponent_div_179_div_3_tr_8_td_1_Template, 2, 1, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r360 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, data_r360));
} }
function AccountEnquiryComponent_div_179_div_3_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "- Interest Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r357.loanreceivedInterest);
} }
function AccountEnquiryComponent_div_179_div_3_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r358.productTotal - ctx_r358.loanreceivedInterest);
} }
function AccountEnquiryComponent_div_179_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AccountEnquiryComponent_div_179_div_3_td_5_Template, 2, 1, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AccountEnquiryComponent_div_179_div_3_tr_8_Template, 3, 3, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AccountEnquiryComponent_div_179_div_3_tr_23_Template, 14, 1, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AccountEnquiryComponent_div_179_div_3_tr_24_Template, 14, 1, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx_r353.productViewArr[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r353.productViewArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r353.productTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r353.isloanDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r353.isloanDetails);
} }
function AccountEnquiryComponent_div_179_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No Records! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r354.productName, " product");
} }
function AccountEnquiryComponent_div_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountEnquiryComponent_div_179_div_2_Template, 6, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccountEnquiryComponent_div_179_div_3_Template, 25, 7, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountEnquiryComponent_div_179_div_4_Template, 9, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r80.productViewArr == null ? null : ctx_r80.productViewArr.length) != 0 && ctx_r80.productViewArr != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r80.productViewArr == null ? null : ctx_r80.productViewArr.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r80.productViewArr == null ? null : ctx_r80.productViewArr.length) == 0);
} }
const _c0 = function (a0) { return { "form-submitted": a0 }; };
const _c1 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
class AccountEnquiryComponent {
    constructor(fb, _CustomerIdService, http, systemParameter, schemeCodeDropdownService, ownbranchMasterService) {
        this.fb = fb;
        this._CustomerIdService = _CustomerIdService;
        this.http = http;
        this.systemParameter = systemParameter;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.ownbranchMasterService = ownbranchMasterService;
        this.demo = new Array();
        this.formSubmitted = false;
        //api 
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        // dropdown variables
        this.ngscheme = null;
        this.accountedit = null;
        this.ngBranchCode = null;
        // Date variables
        this.todate = null;
        this.fromdate = null;
        this.accountOpenDate = null;
        this.maxDate = null;
        this.bsValue = new Date();
        this.dtOptions = {};
        this.dtTrigger = new rxjs_compat__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // for grid variable declaration
        this.dormantac = false;
        this.acclosedon = false;
        this.freezeac = false;
        this.jointHolderName = '';
        this.tableData = [];
        this.GLRecordShow = false;
        this.ShareRecordShow = false;
        this.isrecurringScheme = false;
        this.loanSchemeShow = false;
        this.overdraftAmt = null;
        this.interestOnMonth = false;
        this.interestOnDays = false;
        this.isATypeMemNo = false;
        this.isOpeningDetails = false;
        this.isMemberDetails = false;
        this.isTotalProducts = false;
        this.isPigmyDetails = false;
        this.isloanDetails = false;
        this.isAgentScheme = false;
        this.isAgentCode = false;
        this.isRenewalDate = false;
        this.isLastTranDate = false;
        this.isIntroducer = false;
        this.isBankBranch = false;
        this.totalProducts = 10;
        this.PreviewDiv = false;
        this.customerImg = 'assets/images/nouser.png';
        this.signture = 'assets/images/nosignature.png';
        //view variables
        this.attorneyView = false;
        this.nomineeView = false;
        this.interestPaidHistoryView = false;
        this.interestPostedHistoryView = false;
        this.interestInstructionView = false;
        this.intrestProjectionView = false;
        this.payableInterestView = false;
        this.lienInformationView = false;
        this.tdsDetailsView = false;
        this.productView = false;
        this.oldDepositsView = false;
        this.npaView = false;
        this.jointHolderView = false;
        this.accountInformationView = false;
        this.documentsView = false;
        this.customerIdView = false;
        this.securityView = false;
        this.interestReceivedHistoryView = false;
        this.securityDetailsView = false;
        this.gaurantorView = false;
        this.receivableInterestView = false;
        this.coborrowerView = false;
        this.totalInterest = 0;
        this.divtransferScheme = null;
        this.divtransferName = null;
        this.openingNumberShares = 0;
        this.numberofshares = 0;
        this.loanTotalInterest = 0;
        this.loanTotalReceivable = 0;
        this.rebateIntrest = 0;
        this.dueInstallmentLoan = 0;
        this.modalClass = 'modalHide';
        this.productName = '';
        this.oldDepositArr = [];
        this.tdsDeatilsArr = [];
        this.lienInfoArr = [];
        this.payableInterestArr = [];
        this.interestInstructionArr = [];
        this.interestPostedHistoryArr = [];
        this.interestReceivedHistoryArr = [];
        this.customerIDArr = [];
        this.goldsilverArr = [];
        this.productViewArr = [];
        this.productTotal = 0;
        this.loanreceivedInterest = 0;
        this.accountInfoArr = [];
        this.IsJointView = false;
        this.IsNomineeView = false;
        this.IsAttorneyView = false;
        this.IsGuaranterView = false;
        this.IsCoborrowerView = false;
        this.IsOldDepositsView = false;
        this.IsTDSDetailsView = false;
        this.IsDocumentView = false;
        this.IsPayableInterestView = false;
        this.IsInterestInstructionView = false;
        this.IsInterestPostedHistoryView = false;
        this.IsInterestReceivedHistoryView = false;
        this.IsInterestPaidHistoryView = false;
        this.IsCustomerIDView = false;
        this.IsGoldSilverView = false;
        this.IsLienInformationView = false;
        this.IsProductView = false;
        this.IsAccountInfoView = false;
        this.IsLedgerView = false;
        this.documentUrl = this.url + '/';
        // onScroll() {
        //   // Fetch the next page of items from the endpoint
        //   this.fetchItems().subscribe((newItems) => {
        //     this.schemeACNo = this.schemeACNo.concat(newItems);
        //     this.currentPage++;
        //   });
        // }
        this.currentPage = 1;
        this.pageSize = 10; // Number of items to load per page
        this.systemParameter.getFormData(1).subscribe(data => {
            this.maxDate = moment__WEBPACK_IMPORTED_MODULE_5__(data.CURRENT_DATE, 'DD/MM/YYYY');
            // this.maxDate = this.maxDate.subtract(1, "days");
            this.maxDate = this.maxDate._d;
        });
    }
    ngOnInit() {
        this.createForm();
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            var allscheme = data.filter(function (scheme) {
                return (scheme.name == 'SB' || scheme.name == 'CA' || scheme.name == 'AG' || scheme.name == 'GS' || scheme.name == 'PG' || scheme.name == 'TD' || scheme.name == 'LN' || scheme.name == 'DS' || scheme.name == 'CC' || scheme.name == 'GL' || scheme.name == 'SH');
            });
            this.allScheme = allscheme;
        });
        // this.schemeCodeDropdownService.getTermDepositSchemePatD().pipe(first()).subscribe(data => {
        //   this.allScheme.push(data)
        // })
        //branch List
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.branch_code = data;
        });
    }
    createForm() {
        this.angForm = this.fb.group({
            BRANCH_CODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            AC_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            AC_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
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
            this.current_date = data.CURRENT_DATE;
            this.angForm.patchValue({
                DATE: this.maxDate
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
    getBranch() {
        this.getschemename = null;
        this.accountedit = null;
        this.ngscheme = null;
        this.accountData = null;
        this.idmaster = null;
        this.freezeac = false;
        this.acCloseDate = null;
        this.freezStataus = null;
        this.dormantac = false;
        this.REBATE_INTRATE = 0;
        this.transactionData = null;
        this.IS_WEEKLY_REPAY = false;
    }
    schemechange(event) {
        this.schemeACNo = null;
        this.accountedit = null;
        this.getschemename = event.name;
        this.ngscheme = event.value;
        this.accountData = null;
        this.customerImg = 'assets/images/nouser.png';
        this.signture = 'assets/images/nosignature.png';
        this.dormantac = false;
        this.idmaster = null;
        this.freezeac = false;
        this.acCloseDate = null;
        this.freezStataus = null;
        this.schemeCode = event.id;
        this.transactionData = null;
        this.REBATE_INTRATE = event.rebateRate == undefined ? 0 : Number(event.rebateRate);
        this.IsLedgerView = false;
        this.IS_WEEKLY_REPAY = event.IS_WEEKLY_REPAY == '1' ? true : false;
        event.schemeMethod == 'SimpleasperSharesClosingBalance' ? this.isrecurringScheme = true : this.isrecurringScheme = false;
        this.getAccountlist();
    }
    // Fetching account from seleted scheme
    getAccountlist() {
        this.accountedit = null;
        this.accountData = null;
        this.transactionData = null;
        let obj = [this.ngscheme, this.ngBranchCode];
        switch (this.getschemename) {
            case 'SB':
                this.isLastTranDate = true;
                this.isOpeningDetails = true;
                this.isATypeMemNo = true;
                this.isMemberDetails = false;
                this.isPigmyDetails = false;
                this.isloanDetails = false;
                this.isRenewalDate = false;
                this.interestOnDays = true;
                this.interestOnMonth = true;
                this.isBankBranch = false;
                this.isIntroducer = true;
                //view icon show
                this.attorneyView = true;
                this.interestPaidHistoryView = false;
                this.interestInstructionView = true;
                this.lienInformationView = true;
                this.tdsDetailsView = true;
                this.oldDepositsView = true;
                this.jointHolderView = true;
                this.interestPostedHistoryView = true;
                this.payableInterestView = true;
                this.productView = true;
                this.nomineeView = true;
                this.accountInformationView = true;
                this.intrestProjectionView = true;
                this.documentsView = true;
                this.customerIdView = true;
                this.npaView = false;
                this.securityView = false;
                this.interestReceivedHistoryView = false;
                this.securityDetailsView = false;
                this.gaurantorView = false;
                this.receivableInterestView = false;
                this.coborrowerView = false;
                this.http.get(this.url + '/saving-master/balUpdate/' + obj).subscribe((data) => {
                    this.schemeACNo = data;
                    //  this.des =  this.schemeACNo.push(this.idmaster)
                    console.log(data);
                    console.log(this.des);
                    let some = this.schemeACNo.idmaster;
                    some.forEach(entry => {
                        this.demo.push(entry);
                    });
                    console.log(this.demo);
                    console.log(some, "some");
                });
                break;
            case 'CA':
                this.isLastTranDate = true;
                this.isOpeningDetails = true;
                this.isMemberDetails = false;
                this.isATypeMemNo = true;
                this.isPigmyDetails = false;
                this.isloanDetails = false;
                this.isRenewalDate = false;
                this.interestOnDays = true;
                this.interestOnMonth = true;
                this.isBankBranch = false;
                this.isIntroducer = true;
                //view icon show
                this.attorneyView = true;
                this.interestPaidHistoryView = false;
                this.interestInstructionView = true;
                this.lienInformationView = true;
                this.tdsDetailsView = true;
                this.oldDepositsView = true;
                this.jointHolderView = true;
                this.interestPostedHistoryView = true;
                this.payableInterestView = true;
                this.productView = true;
                this.nomineeView = true;
                this.accountInformationView = true;
                this.intrestProjectionView = true;
                this.documentsView = true;
                this.customerIdView = true;
                this.npaView = false;
                this.securityView = false;
                this.interestReceivedHistoryView = false;
                this.securityDetailsView = false;
                this.gaurantorView = false;
                this.receivableInterestView = false;
                this.coborrowerView = false;
                this.http.get(this.url + '/current-account-master/balUpdate/' + obj).subscribe(data => {
                    this.schemeACNo = data;
                    console.log(data);
                });
                break;
            case 'AG':
                this.isLastTranDate = true;
                this.isOpeningDetails = true;
                this.isMemberDetails = false;
                this.isATypeMemNo = true;
                this.isPigmyDetails = false;
                this.isloanDetails = false;
                this.isRenewalDate = false;
                this.interestOnDays = true;
                this.interestOnMonth = true;
                this.isBankBranch = false;
                this.isIntroducer = true;
                //view icon show
                this.attorneyView = true;
                this.interestPaidHistoryView = false;
                this.interestInstructionView = true;
                this.lienInformationView = true;
                this.tdsDetailsView = true;
                this.oldDepositsView = true;
                this.jointHolderView = true;
                this.interestPostedHistoryView = true;
                this.payableInterestView = true;
                this.productView = true;
                this.nomineeView = true;
                this.accountInformationView = true;
                this.intrestProjectionView = true;
                this.documentsView = true;
                this.customerIdView = true;
                this.npaView = false;
                this.securityView = false;
                this.interestReceivedHistoryView = false;
                this.securityDetailsView = false;
                this.gaurantorView = false;
                this.receivableInterestView = false;
                this.coborrowerView = false;
                this.http.get(this.url + '/pigmy-agent-master/balUpdate/' + obj).subscribe(data => {
                    this.schemeACNo = data;
                    console.log(data);
                });
                break;
            case 'GS':
                //view icon show
                this.attorneyView = true;
                this.interestPaidHistoryView = false;
                this.isMemberDetails = false;
                this.interestInstructionView = true;
                this.lienInformationView = true;
                this.tdsDetailsView = true;
                this.oldDepositsView = true;
                this.jointHolderView = true;
                this.interestPostedHistoryView = true;
                this.payableInterestView = true;
                this.productView = true;
                this.nomineeView = true;
                this.accountInformationView = true;
                this.intrestProjectionView = true;
                this.documentsView = true;
                this.customerIdView = true;
                this.npaView = false;
                this.securityView = false;
                this.interestReceivedHistoryView = false;
                this.securityDetailsView = false;
                this.gaurantorView = false;
                this.receivableInterestView = false;
                this.coborrowerView = false;
                this.http.get(this.url + '/anamat-gsm/balUpdate/' + obj).subscribe(data => {
                    this.schemeACNo = data;
                    console.log(data);
                });
                break;
            case 'PG':
                this.isOpeningDetails = false;
                this.isMemberDetails = false;
                this.isPigmyDetails = true;
                this.isloanDetails = false;
                this.isRenewalDate = true;
                this.isATypeMemNo = false;
                this.isBankBranch = false;
                this.isIntroducer = true;
                //view icon show
                this.attorneyView = true;
                this.interestPaidHistoryView = false;
                this.interestInstructionView = true;
                this.lienInformationView = true;
                this.tdsDetailsView = true;
                this.oldDepositsView = false;
                this.jointHolderView = true;
                this.interestPostedHistoryView = true;
                this.payableInterestView = true;
                this.productView = true;
                this.nomineeView = true;
                this.accountInformationView = true;
                this.intrestProjectionView = true;
                this.documentsView = true;
                this.customerIdView = true;
                this.npaView = false;
                this.securityView = false;
                this.interestReceivedHistoryView = false;
                this.securityDetailsView = false;
                this.gaurantorView = false;
                this.receivableInterestView = false;
                this.coborrowerView = false;
                this.http.get(this.url + '/pigmy-account-master/balUpdate/' + obj).subscribe(data => {
                    this.schemeACNo = data;
                    console.log(data);
                });
                break;
            case 'TD':
                this.isLastTranDate = true;
                this.isOpeningDetails = true;
                this.isMemberDetails = false;
                this.isATypeMemNo = true;
                this.isPigmyDetails = false;
                this.isloanDetails = false;
                this.isRenewalDate = false;
                this.interestOnDays = true;
                this.interestOnMonth = true;
                this.isBankBranch = false;
                this.isIntroducer = true;
                //view icon show
                this.attorneyView = true;
                this.interestPaidHistoryView = true;
                this.interestInstructionView = true;
                this.lienInformationView = true;
                this.tdsDetailsView = true;
                this.oldDepositsView = true;
                this.jointHolderView = true;
                this.interestPostedHistoryView = true;
                this.payableInterestView = true;
                this.productView = true;
                this.nomineeView = true;
                this.accountInformationView = true;
                this.intrestProjectionView = true;
                this.documentsView = true;
                this.customerIdView = true;
                this.npaView = false;
                this.securityView = false;
                this.interestReceivedHistoryView = false;
                this.securityDetailsView = false;
                this.gaurantorView = false;
                this.receivableInterestView = false;
                this.coborrowerView = false;
                this.http.get(this.url + '/term-deposits-master/balUpdate/' + obj).subscribe(data => {
                    this.schemeACNo = data;
                    console.log(data);
                });
                break;
            case 'LN':
                this.isOpeningDetails = false;
                this.isMemberDetails = false;
                this.isPigmyDetails = false;
                this.isloanDetails = true;
                //view icon show
                this.attorneyView = false;
                this.interestPaidHistoryView = false;
                this.interestInstructionView = true;
                this.lienInformationView = true;
                this.tdsDetailsView = false;
                this.oldDepositsView = false;
                this.jointHolderView = false;
                this.interestPostedHistoryView = true;
                this.payableInterestView = false;
                this.productView = true;
                this.nomineeView = false;
                this.accountInformationView = true;
                this.intrestProjectionView = true;
                this.documentsView = true;
                this.customerIdView = true;
                this.npaView = false;
                this.securityView = true;
                this.interestReceivedHistoryView = true;
                this.securityDetailsView = true;
                this.gaurantorView = true;
                this.receivableInterestView = true;
                this.coborrowerView = true;
                this.http.get(this.url + '/term-loan-master/balUpdate/' + obj).subscribe(data => {
                    this.schemeACNo = data;
                    console.log(data);
                });
                break;
            case 'DS':
                this.http.get(this.url + '/dispute-loan-master/balUpdate/' + obj).subscribe(data => {
                    this.schemeACNo = data;
                    console.log(data);
                });
                break;
            case 'CC':
                this.isloanDetails = true;
                this.isOpeningDetails = false;
                this.isMemberDetails = false;
                this.isPigmyDetails = false;
                //view icon show
                this.attorneyView = false;
                this.interestPaidHistoryView = false;
                this.interestInstructionView = true;
                this.lienInformationView = true;
                this.tdsDetailsView = false;
                this.oldDepositsView = false;
                this.jointHolderView = false;
                this.interestPostedHistoryView = true;
                this.payableInterestView = false;
                this.productView = true;
                this.nomineeView = false;
                this.accountInformationView = true;
                this.intrestProjectionView = true;
                this.documentsView = true;
                this.customerIdView = true;
                this.npaView = false;
                this.securityView = true;
                this.interestReceivedHistoryView = true;
                this.securityDetailsView = true;
                this.gaurantorView = true;
                this.receivableInterestView = true;
                this.coborrowerView = true;
                this.http.get(this.url + '/cash-credit-master/balUpdate/' + obj).subscribe(data => {
                    this.schemeACNo = data;
                    console.log(data);
                });
                break;
            case 'SH':
                //view icon show
                this.isMemberDetails = true;
                this.isOpeningDetails = false;
                this.isPigmyDetails = false;
                this.isloanDetails = false;
                this.attorneyView = false;
                this.interestPaidHistoryView = false;
                this.interestInstructionView = false;
                this.lienInformationView = false;
                this.tdsDetailsView = false;
                this.oldDepositsView = false;
                this.jointHolderView = false;
                this.interestPostedHistoryView = false;
                this.payableInterestView = false;
                this.productView = false;
                this.nomineeView = true;
                this.accountInformationView = true;
                this.intrestProjectionView = false;
                this.documentsView = true;
                this.customerIdView = true;
                this.npaView = false;
                this.securityView = false;
                this.interestReceivedHistoryView = false;
                this.securityDetailsView = false;
                this.gaurantorView = false;
                this.receivableInterestView = false;
                this.coborrowerView = false;
                this.http.get(this.url + '/share-master/balUpdate/' + obj).subscribe(data => {
                    this.schemeACNo = data;
                    console.log(data);
                });
                break;
            case 'GL':
                this.isloanDetails = false;
                this.isMemberDetails = false;
                this.isOpeningDetails = false;
                this.isPigmyDetails = false;
                //view icon show
                this.attorneyView = false;
                this.interestPaidHistoryView = false;
                this.interestInstructionView = false;
                this.lienInformationView = false;
                this.tdsDetailsView = false;
                this.oldDepositsView = false;
                this.jointHolderView = false;
                this.interestPostedHistoryView = false;
                this.payableInterestView = false;
                this.productView = false;
                this.nomineeView = false;
                this.accountInformationView = false;
                this.intrestProjectionView = false;
                this.documentsView = false;
                this.customerIdView = false;
                this.npaView = false;
                this.securityView = false;
                this.interestReceivedHistoryView = false;
                this.securityDetailsView = false;
                this.gaurantorView = false;
                this.receivableInterestView = false;
                this.coborrowerView = false;
                this.http.get(this.url + '/gl-account-master').subscribe(data => {
                    this.schemeACNo = data;
                    console.log(this.schemeACNo);
                });
                this.GLRecordShow = true;
                this.ShareRecordShow = false;
                break;
            case 'IV':
                this.isLastTranDate = true;
                this.isOpeningDetails = true;
                this.isMemberDetails = false;
                this.isATypeMemNo = true;
                this.isPigmyDetails = false;
                this.isloanDetails = false;
                this.isRenewalDate = false;
                this.interestOnDays = true;
                this.interestOnMonth = true;
                this.isBankBranch = true;
                this.isIntroducer = false;
                //view icon show
                this.attorneyView = true;
                this.interestPaidHistoryView = false;
                this.interestInstructionView = true;
                this.lienInformationView = true;
                this.tdsDetailsView = true;
                this.oldDepositsView = false;
                this.jointHolderView = true;
                this.interestPostedHistoryView = true;
                this.payableInterestView = true;
                this.productView = true;
                this.nomineeView = true;
                this.accountInformationView = true;
                this.intrestProjectionView = true;
                this.documentsView = true;
                this.customerIdView = true;
                this.npaView = false;
                this.securityView = false;
                this.interestReceivedHistoryView = false;
                this.securityDetailsView = false;
                this.gaurantorView = false;
                this.receivableInterestView = false;
                this.coborrowerView = false;
                this.http.get(this.url + '/investment/balUpdate/' + obj).subscribe(data => {
                    this.schemeACNo = data;
                    console.log(data);
                });
                break;
        }
    }
    //get account details
    getAccountDetails(event) {
        var _a, _b;
        this.accountEvent = event;
        this.customerIDArr = null;
        console.log('accountEvent?.AC_MEMBNO', (_a = this.accountEvent) === null || _a === void 0 ? void 0 : _a.AC_MEMBNO);
        this.accountData = event;
        this.IsLedgerView = false;
        if (this.getschemename == 'GL') {
            this.accountData = null;
            this.transactionData = null;
            this.loanSchemeShow = false;
            this.ShareRecordShow = false;
            this.AC_NO = event.AC_NO;
        }
        else {
            if (this.getschemename == 'SH') {
                this.ShareRecordShow = true;
                this.loanSchemeShow = false;
                if (this.accountEvent.AC_RETIRE_DATE != null && this.accountEvent.AC_RETIRE_DATE != '' && this.accountEvent.AC_RETIRE_DATE != 'Invalid date') {
                    this.http.get(this.url + '/system-master-parameters/' + 1).subscribe(data => {
                        let retireDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.accountEvent.AC_RETIRE_DATE, "DD/MM/YYYY");
                        let sysparaCurrentDate = moment__WEBPACK_IMPORTED_MODULE_5__(data['CURRENT_DATE'], "DD/MM/YYYY");
                        this.leftMonth = retireDate.diff(sysparaCurrentDate, 'months');
                    });
                }
                else {
                    this.leftMonth = 0;
                }
            }
            else if (this.getschemename == 'LN' || this.getschemename == 'CC') {
                this.loanSchemeShow = true;
                this.ShareRecordShow = false;
                this.accountData = null;
                this.transactionData = null;
                this.leftMonth = 0;
                this.http.get(this.url + '/system-master-parameters/' + 1).subscribe(data => {
                    let date = this.accountEvent.AC_OPEN_OLD_DATE == '' || this.accountEvent.AC_OPEN_OLD_DATE == null ? moment__WEBPACK_IMPORTED_MODULE_5__(this.accountEvent.AC_SANCTION_DATE, "DD/MM/YYYY") : moment__WEBPACK_IMPORTED_MODULE_5__(this.accountEvent.AC_OPEN_OLD_DATE, "DD/MM/YYYY");
                    let sysparaCurrentDate = moment__WEBPACK_IMPORTED_MODULE_5__(data['CURRENT_DATE'], "DD/MM/YYYY");
                    if (this.IS_WEEKLY_REPAY) {
                        let days = sysparaCurrentDate.diff(date, 'days');
                        let weeks = days / 7;
                        this.accountEvent['totalInstallment'] = this.roundoff(weeks, 30);
                    }
                    else {
                        this.accountEvent['totalInstallment'] = sysparaCurrentDate.diff(date, 'months');
                    }
                });
            }
            else {
                this.loanSchemeShow = false;
                this.ShareRecordShow = false;
                this.leftMonth = 0;
            }
            this.GLRecordShow = false;
            this.tableData = [];
            this.transactions = null;
            this.transactionData = null;
            this.dormantac = Number(event.IS_DORMANT) == 0 ? false : true;
            this.guardianName = event.AC_GRDNAME;
            this.opendate = event.AC_OPDATE;
            this.bankacno = event.BANKACNO;
            this.customerID = event.idmasterID;
            this.AC_NO = event.AC_NO;
            this.LAST_OD_DATE = event.LAST_OD_DATE;
            this.nominee = event === null || event === void 0 ? void 0 : event.nomineeDetails;
            (_b = event === null || event === void 0 ? void 0 : event.jointAccounts) === null || _b === void 0 ? void 0 : _b.forEach((element, index) => {
                if (index == 0) {
                    this.jointHolderName = element.JOINT_ACNAME;
                }
                else {
                    this.jointHolderName = this.jointHolderName + '/' + element.JOINT_ACNAME;
                }
            });
            this.idmaster = event.idmaster;
            let periodOverdraft = event.AC_SODAMT == undefined || event.AC_SODAMT == null ? 0 : Number(event.AC_SODAMT);
            let tempOverdraft = event.AC_ODAMT == undefined || event.AC_ODAMT == null ? 0 : Number(event.AC_ODAMT);
            let overdraftAmount = periodOverdraft + tempOverdraft;
            this.overdraftAmt = overdraftAmount;
            this.acclosedon = event.acClose == null || event.acClose == '' ? false : true;
            this.acCloseDate = event.AC_CLOSEDT == null || event.AC_CLOSEDT == '' ? null : event.AC_CLOSEDT;
            this.freezeac = event.AC_FREEZE_STATUS == null || event.AC_FREEZE_STATUS == '' ? false : true;
            this.freezStataus = event.AC_FREEZE_STATUS == null || event.AC_FREEZE_STATUS == '' ? '' : event.AC_FREEZE_STATUS;
            let maturedAmount = Number(event.autoMaturedPayableAmt) + Number(event.autoMaturedIntrestAmt);
            this.angForm.patchValue({
                AC_CLOSEDT: event.closeDate,
                AMOUNT: maturedAmount,
            });
            this.accountOpenDate = moment__WEBPACK_IMPORTED_MODULE_5__(event.opendate, 'DD/MM/YYYY');
            this.accountOpenDate = this.accountOpenDate._d;
            this._CustomerIdService.getFormData(this.idmaster.id).subscribe(data => {
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
    getTransactionDetails() {
        var _a, _b, _c, _e, _f, _g, _h, _j, _k, _l;
        if (this.accountedit != null && this.fromdate != null && this.fromdate != '') {
            this.modalClass = 'modalShow';
            let obj = {
                scheme: this.schemeCode,
                bankacno: this.bankacno,
                date: this.current_date == this.fromdate ? this.current_date : moment__WEBPACK_IMPORTED_MODULE_5__(this.angForm.controls['DATE'].value).format('DD/MM/YYYY'),
                AC_ACNOTYPE: this.getschemename,
                AC_TYPE: this.ngscheme,
                LAST_OD_DATE: this.LAST_OD_DATE,
                AC_NO: this.AC_NO,
                pigmyAgent: (_a = this.accountEvent) === null || _a === void 0 ? void 0 : _a.PIGMY_ACTYPE,
                shareActype: (_c = (_b = this.accountEvent) === null || _b === void 0 ? void 0 : _b.idmaster) === null || _c === void 0 ? void 0 : _c.AC_MEMBTYPE,
                shareAcno: (_f = (_e = this.accountEvent) === null || _e === void 0 ? void 0 : _e.idmaster) === null || _f === void 0 ? void 0 : _f.AC_MEMBNO,
                divtransferscheme: (_g = this.accountEvent) === null || _g === void 0 ? void 0 : _g.DIV_TRANSFER_ACNOTYPE,
                divtransferactype: (_h = this.accountEvent) === null || _h === void 0 ? void 0 : _h.DIV_TRANSFER_ACTYPE,
                divtransferacno: (_j = this.accountEvent) === null || _j === void 0 ? void 0 : _j.DIV_TRANSFER_ACNO,
                divtransferBranch: (_k = this.accountEvent) === null || _k === void 0 ? void 0 : _k.DIV_TRANSFER_BRANCH,
                installmentAmount: (_l = this.accountEvent) === null || _l === void 0 ? void 0 : _l.AC_INSTALLMENT,
                branch: this.ngBranchCode
            };
            this.http.post(this.url + '/ledger-view/accountView', obj).subscribe((data) => {
                var _a, _b, _c, _e, _f, _g, _h;
                this.modalClass = 'modalHide';
                if (this.getschemename == 'GL') {
                    this.accountData = null;
                    this.transactionData = null;
                    this.SHtransactionData = null;
                    this.loantransactionData = null;
                    this.GLtransactionData = data;
                    this.GLRecordShow = true;
                    this.loanSchemeShow = false;
                    this.ShareRecordShow = false;
                }
                else if (this.getschemename == 'SH') {
                    this.GLtransactionData = null;
                    this.loantransactionData = null;
                    this.SHtransactionData = data;
                    this.transactionData = null;
                    this.loanSchemeShow = false;
                    this.GLRecordShow = false;
                    this.ShareRecordShow = true;
                    this.divtransferScheme = data.divtransferScheme;
                    this.divtransferName = data.divtransferCode;
                    let facevalue = this.accountData.shareMaster.SHARES_FACE_VALUE == undefined || this.accountData.shareMaster.SHARES_FACE_VALUE == null ? 0 : Number(this.accountData.shareMaster.SHARES_FACE_VALUE);
                    let openingBalance = Number(this.SHtransactionData.openingBal);
                    let shareAmount = Number(this.SHtransactionData.passedAmount);
                    facevalue == 0 ? this.openingNumberShares = 0 : this.openingNumberShares = Math.floor(openingBalance / facevalue);
                    facevalue == 0 ? this.numberofshares = 0 : this.numberofshares = Math.floor(shareAmount / facevalue);
                }
                else if (this.getschemename == 'LN' || this.getschemename == 'CC') {
                    this.accountData = null;
                    this.loanSchemeShow = true;
                    this.ShareRecordShow = false;
                    this.GLRecordShow = false;
                    this.transactionData = null;
                    this.SHtransactionData = null;
                    this.loantransactionData = data;
                    this.GLtransactionData = null;
                    let interest = ((_a = this.accountEvent) === null || _a === void 0 ? void 0 : _a.INSTALLMENT_METHOD) == 'E' ? 0 : (((_b = this.accountEvent) === null || _b === void 0 ? void 0 : _b.INSTALLMENT_METHOD) == 'Null' ? 0 : (_c = this.loantransactionData) === null || _c === void 0 ? void 0 : _c.currentInt);
                    // this.totalInterest = Number(this.accountEvent.AC_INSTALLMENT) + Number(this.loantransactionData.currentInt)
                    this.totalInterest = Number(this.accountEvent.AC_INSTALLMENT) + Number(interest);
                    this.loanTotalInterest = Number(this.loantransactionData.penalInt) + Number(this.loantransactionData.receiveablePenal) + Number(this.loantransactionData.overdueInt) + Number(this.loantransactionData.payableInt) + Number(this.loantransactionData.currentInt);
                    this.loanTotalReceivable = Number(this.loanTotalInterest) + Number(this.loantransactionData.otherReceivedAmount) + Number(this.loantransactionData.totalClosingBalforLoan);
                    this.loanTotalReceivable = Math.abs(this.loanTotalReceivable);
                    this.rebateIntrest = Math.round((Number(this.loantransactionData.rebateAmount) * Number(this.REBATE_INTRATE)) / 100);
                    let wholeNumber = Number((_e = this.accountEvent) === null || _e === void 0 ? void 0 : _e.AC_INSTALLMENT) == 0 ? 0 : Number(this.loantransactionData.dueBalance) / Number((_f = this.accountEvent) === null || _f === void 0 ? void 0 : _f.AC_INSTALLMENT);
                    // wholeNumber = 10.01
                    let wholeNumber1 = Math.round(wholeNumber);
                    let fractionNumber = Number((_g = this.accountEvent) === null || _g === void 0 ? void 0 : _g.AC_INSTALLMENT) == 0 ? 0 : Number(this.loantransactionData.dueBalance) % Number((_h = this.accountEvent) === null || _h === void 0 ? void 0 : _h.AC_INSTALLMENT);
                    let dueInstall = fractionNumber > 0 ? wholeNumber1 + 1 : wholeNumber1;
                    this.dueInstallmentLoan = this.loantransactionData == null ? 0 : dueInstall;
                    // this.dueInstallmentLoan = this.loantransactionData == null ? 0 : Number(this.loantransactionData.dueBalance) / Number(this.accountEvent?.AC_INSTALLMENT)
                    let obj = [
                        this.ngscheme,
                        this.bankacno,
                        this.getschemename
                    ];
                    this.lienInfoArr = [];
                    this.http.get(this.url + '/ledger-view/lienInformaionView/' + obj).subscribe((data) => {
                        this.lienInfoArr = data;
                    });
                }
                else {
                    this.ShareRecordShow = false;
                    this.loanSchemeShow = false;
                    this.GLRecordShow = false;
                    this.GLtransactionData = null;
                    this.SHtransactionData = null;
                    this.loantransactionData = null;
                    this.transactionData = data;
                    this.PIGMY_ACTYPE = data.pigmyScheme;
                    this.introducerName = data.introducer;
                }
                this.modalClass = 'modalHide';
            }, (error) => {
                var _a;
                console.log(error, 'err');
                this.modalClass = 'modalHide';
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Oops!', (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message, 'error');
            });
        }
    }
    viewView(view) {
        var _a;
        if (view == 'joints') {
            this.IsJointView = true;
            this.IsLedgerView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsTDSDetailsView = false;
            this.IsOldDepositsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestPaidHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsProductView = false;
            this.IsAccountInfoView = false;
            this.productViewArr = [];
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.interestPostedHistoryArr = [];
            this.interestInstructionArr = [];
            this.payableInterestArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
        }
        else if (view == 'nominee') {
            this.IsJointView = false;
            this.IsLedgerView = false;
            this.IsNomineeView = true;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsInterestPaidHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsAccountInfoView = false;
            this.IsProductView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.interestPostedHistoryArr = [];
            this.interestInstructionArr = [];
            this.payableInterestArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
        }
        else if (view == 'attorney') {
            this.IsJointView = false;
            this.IsLedgerView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = true;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsInterestPaidHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsAccountInfoView = false;
            this.IsProductView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.interestPostedHistoryArr = [];
            this.interestInstructionArr = [];
            this.payableInterestArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
        }
        else if (view == 'guaranter') {
            this.IsJointView = false;
            this.IsLedgerView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = true;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestPaidHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsAccountInfoView = false;
            this.IsProductView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.interestPostedHistoryArr = [];
            this.interestInstructionArr = [];
            this.payableInterestArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
        }
        else if (view == 'coborrower') {
            this.IsJointView = false;
            this.IsLedgerView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = true;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsInterestPaidHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsAccountInfoView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsProductView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.interestPostedHistoryArr = [];
            this.interestInstructionArr = [];
            this.payableInterestArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
        }
        else if (view == 'document') {
            this.IsJointView = false;
            this.IsLedgerView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = true;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestPaidHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsLienInformationView = false;
            this.IsProductView = false;
            this.IsAccountInfoView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.interestPostedHistoryArr = [];
            this.interestInstructionArr = [];
            this.payableInterestArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
        }
        else if (view == 'oldDeposits') {
            this.IsJointView = false;
            this.IsLedgerView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsTDSDetailsView = false;
            this.IsOldDepositsView = true;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestPaidHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsProductView = false;
            this.IsAccountInfoView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.interestPostedHistoryArr = [];
            this.interestInstructionArr = [];
            this.payableInterestArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
            this.http.get(this.url + '/ledger-view/oldDepositView/' + this.bankacno).subscribe((data) => {
                this.oldDepositArr = data;
            });
        }
        else if (view == 'tdsDetail') {
            this.IsJointView = false;
            this.IsNomineeView = false;
            this.IsLedgerView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = true;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestPaidHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsAccountInfoView = false;
            this.IsProductView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.interestPostedHistoryArr = [];
            this.interestInstructionArr = [];
            this.payableInterestArr = [];
            this.oldDepositArr = [];
            this.accountInfoArr = [];
            this.http.get(this.url + '/ledger-view/tdsDetailsView/' + this.bankacno).subscribe((data) => {
                this.tdsDeatilsArr = data;
            });
        }
        else if (view == 'payableInterest') {
            this.IsJointView = false;
            this.IsLedgerView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = true;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestPaidHistoryView = false;
            this.IsAccountInfoView = false;
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsProductView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.interestPostedHistoryArr = [];
            this.interestInstructionArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
            let obj = [
                this.getschemename,
                this.bankacno
            ];
            this.http.get(this.url + '/ledger-view/payableInterestView/' + obj).subscribe((data) => {
                this.payableInterestArr = this.sort_by_key(data, 'TRAN_DATE');
            });
        }
        else if (view == 'interestReceivedHistory') {
            this.IsJointView = false;
            this.IsLedgerView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestReceivedHistoryView = true;
            this.interestPostedHistoryArr = [];
            this.IsInterestPaidHistoryView = false;
            this.IsAccountInfoView = false;
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsProductView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.payableInterestArr = [];
            this.interestInstructionArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
            let obj = [
                this.getschemename,
                this.bankacno
            ];
            this.http.get(this.url + '/ledger-view/interestReceivedHistoryView/' + obj).subscribe((data) => {
                this.interestReceivedHistoryArr = this.sort_by_key(data, 'TRAN_DATE');
            });
        }
        else if (view == 'interestPostedHistory') {
            this.IsJointView = false;
            this.IsLedgerView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = true;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsInterestPaidHistoryView = false;
            this.IsAccountInfoView = false;
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsProductView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.payableInterestArr = [];
            this.interestInstructionArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
            let obj = [
                this.getschemename,
                this.bankacno
            ];
            this.http.get(this.url + '/ledger-view/interestPostedHistoryView/' + obj).subscribe((data) => {
                this.interestPostedHistoryArr = this.sort_by_key(data, 'TRAN_DATE');
            });
        }
        else if (view == 'interestInstructions') {
            this.IsJointView = false;
            this.IsLedgerView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = true;
            this.IsInterestPaidHistoryView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsAccountInfoView = false;
            this.IsProductView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.interestPostedHistoryArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
            this.payableInterestArr = [];
            let obj = [
                this.ngscheme,
                this.AC_NO
            ];
            this.http.get(this.url + '/ledger-view/interestInstructionView/' + obj).subscribe((data) => {
                this.interestInstructionArr = data;
            });
        }
        else if (view == 'goldsilver') {
            this.IsJointView = false;
            this.IsNomineeView = false;
            this.IsLedgerView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPaidHistoryView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = true;
            this.IsAccountInfoView = false;
            this.IsLienInformationView = false;
            this.IsProductView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.customerIDArr = [];
            this.interestPostedHistoryArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.payableInterestArr = [];
            this.interestInstructionArr = [];
            this.accountInfoArr = [];
            let obj = [
                this.ngscheme,
                this.AC_NO
            ];
            this.http.get(this.url + '/ledger-view/goldsilverView/' + obj).subscribe((data) => {
                this.goldsilverArr = data;
            });
        }
        else if (view == 'lienInfo') {
            this.IsJointView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsLedgerView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsInterestPaidHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsAccountInfoView = false;
            this.IsLienInformationView = true;
            this.IsProductView = false;
            this.productViewArr = [];
            this.goldsilverArr = [];
            this.customerIDArr = [];
            this.interestPostedHistoryArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
            this.payableInterestArr = [];
            this.interestInstructionArr = [];
            let obj = [
                this.ngscheme,
                this.bankacno,
                this.getschemename
            ];
            this.lienInfoArr = [];
            this.http.get(this.url + '/ledger-view/lienInformaionView/' + obj).subscribe((data) => {
                this.lienInfoArr = data;
            });
        }
        else if (view == 'productview') {
            this.productTotal = 0;
            this.loanreceivedInterest = 0;
            this.IsJointView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsInterestPaidHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsAccountInfoView = false;
            this.IsLedgerView = false;
            this.IsProductView = true;
            this.customerIDArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.interestInstructionArr = [];
            this.interestPostedHistoryArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.payableInterestArr = [];
            this.accountInfoArr = [];
            if (this.getschemename == 'PG') {
                this.productName = 'Pigmy';
            }
            else if (this.getschemename == 'IV') {
                this.productName = 'Investment';
            }
            else if (this.getschemename == 'SB') {
                this.productName = 'Saving';
            }
            else if (this.getschemename == 'LN' || this.getschemename == 'CC') {
                this.productName = 'Loan';
            }
            else {
                this.productName = '';
            }
            this.productViewArr = (this.getschemename == 'LN' || this.getschemename == 'CC') ? this.loantransactionData.productView : this.transactionData.productView;
            for (let ele of this.productViewArr) {
                this.productTotal = Number(this.productTotal) + Number(ele['amount']);
            }
            this.http.post(this.url + '/ledger-view/loanreceivedInterest/', { lastinterestDate: (_a = this.accountEvent) === null || _a === void 0 ? void 0 : _a.AC_LINTEDT, bankacno: this.bankacno }).subscribe((data) => {
                this.loanreceivedInterest = data;
            });
        }
        else if (view == 'accountInfo') {
            this.IsJointView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsLedgerView = false;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestPaidHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsAccountInfoView = true;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsProductView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.interestInstructionArr = [];
            this.interestPostedHistoryArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.payableInterestArr = [];
            this.idmaster.custAddress.forEach(element => {
                if (element.AC_ADDTYPE == 'P')
                    this.accountInfoArr.push(element);
            });
            this.accountInfoArr[0]['AC_PHONE_RES'] = this.idmaster.AC_PHONE_RES;
            this.accountInfoArr[0]['AC_PHONE_OFFICE'] = this.idmaster.AC_PHONE_OFFICE;
        }
        else if (view == 'interestPaidHistory') {
            this.IsJointView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsInterestPaidHistoryView = true;
            this.IsAccountInfoView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsProductView = false;
            this.IsLedgerView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.interestInstructionArr = [];
            this.interestPostedHistoryArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.payableInterestArr = [];
            this.accountInfoArr = [];
        }
        else if (view == 'ledgerView') {
            this.IsJointView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsCoborrowerView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsCustomerIDView = false;
            this.IsInterestPaidHistoryView = false;
            this.IsAccountInfoView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsProductView = false;
            this.IsLedgerView = true;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.interestInstructionArr = [];
            this.interestPostedHistoryArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.payableInterestArr = [];
            this.accountInfoArr = [];
            let year = this.fromdate.getFullYear();
            year = year - 1;
            this.accFromDate = moment__WEBPACK_IMPORTED_MODULE_5__(`01/04/${year}`, 'DD/MM/YYYY');
            this.accFromDate = this.accFromDate._d;
        }
        else if (view == 'customerID') {
            this.IsJointView = false;
            this.IsNomineeView = false;
            this.IsAttorneyView = false;
            this.IsGuaranterView = false;
            this.IsInterestReceivedHistoryView = false;
            this.interestReceivedHistoryArr = [];
            this.IsCoborrowerView = false;
            this.IsOldDepositsView = false;
            this.IsTDSDetailsView = false;
            this.IsDocumentView = false;
            this.IsPayableInterestView = false;
            this.IsInterestInstructionView = false;
            this.IsInterestPostedHistoryView = false;
            this.IsInterestPaidHistoryView = false;
            this.IsCustomerIDView = true;
            this.IsAccountInfoView = false;
            this.IsGoldSilverView = false;
            this.IsLienInformationView = false;
            this.IsProductView = false;
            this.IsLedgerView = false;
            this.productViewArr = [];
            this.lienInfoArr = [];
            this.goldsilverArr = [];
            this.interestInstructionArr = [];
            this.interestPostedHistoryArr = [];
            this.oldDepositArr = [];
            this.tdsDeatilsArr = [];
            this.accountInfoArr = [];
            this.payableInterestArr = [];
            let obj = [
                this.customerID,
                this.angForm.controls['DATE'].value,
            ];
            this.http.get(this.url + '/ledger-view/customerIdView/' + obj).subscribe((data) => {
                this.customerIDArr = data;
            });
        }
    }
    viewImagePreview(ele, id) {
        this.selectedImagePreview = id;
    }
    sort_by_key(array, key) {
        return array.sort(function (a, b) {
            let p = moment__WEBPACK_IMPORTED_MODULE_5__(a[key], 'DD/MM/YYYY');
            let q = moment__WEBPACK_IMPORTED_MODULE_5__(b[key], 'DD/MM/YYYY');
            return (p < q) ? -1 : ((p > q) ? 1 : 0);
        });
    }
    onFocus(ele) {
        ele.open();
    }
    fetchItems() {
        // Implement your HTTP request to fetch items from the endpoint
        // You can use HttpClient or a service that handles the API call
        // Adjust the endpoint URL and parameters according to your API design
        const endpoint = this.url + '/term-deposits-master/balUpdate/'; // Replace with your actual endpoint URL
        let schemeid = [this.ngscheme, this.ngBranchCode];
        let obj = {
            schemeid: schemeid,
            page: this.currentPage.toString(),
            pageSize: this.pageSize.toString()
        };
        return this.http.post(endpoint, obj).subscribe(data => {
            this.schemeACNo = this.schemeACNo.concat(data);
            this.currentPage++;
        });
    }
    loadItems() {
        let schemeid = [this.ngscheme, this.ngBranchCode];
        let obj = {
            schemeid: schemeid,
            page: this.currentPage.toString(),
            pageSize: this.pageSize.toString()
        };
        const endpoint = this.url + '/term-deposits-master/balUpdate/'; // Replace with your actual endpoint URL
        this.http.post(endpoint, obj).subscribe((data) => {
            console.log(data, 'td rec');
            this.schemeACNo = this.schemeACNo.concat(data);
            this.currentPage++;
        });
    }
    onScroll() {
        this.loadItems();
    }
    roundoff(vAmount, vRemainingFactor) {
        let GetRoundOffAmount = Number(vAmount).toFixed(2);
        let pricision = GetRoundOffAmount.toString().split('.');
        if (Number(vRemainingFactor) <= 0) {
            GetRoundOffAmount = Math.round(Number(GetRoundOffAmount));
        }
        else if (Number(pricision[1]) >= Number(vRemainingFactor)) {
            GetRoundOffAmount = Number(pricision[0]) + 1;
        }
        else {
            GetRoundOffAmount = Number(pricision[0]);
        }
        return GetRoundOffAmount;
    }
}
AccountEnquiryComponent.ɵfac = function AccountEnquiryComponent_Factory(t) { return new (t || AccountEnquiryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_7__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_9__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"])); };
AccountEnquiryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountEnquiryComponent, selectors: [["app-account-enquiry"]], decls: 184, vars: 104, consts: [["style", "width: 270px;height: 335px;z-index: 1000;\n      position: absolute;margin-top: 14%;margin-left:51%", 4, "ngIf"], [1, "row"], [1, "col-md-9"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "appSubmit", "", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "card-block"], [1, "solid"], [1, "col-sm-12", "col-md-2"], ["for", "BRANCH_CODE"], [1, "col-sm-12", "col-md-3"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["appTheme", "", "id", "BRANCH_CODE", "bindValue", "value", "formControlName", "BRANCH_CODE", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", "autofocus", "", 3, "ngModel", "virtualScroll", "selectOnTab", "ngClass", "ngModelChange", "change", "focus"], ["BRANCH_CODE", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-1"], ["for", "AC_TYPE"], [1, "col-sm-12", "col-md-4"], ["appTheme", "", "id", "AC_TYPE", "bindValue", "value", "formControlName", "AC_TYPE", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme", 3, "ngModel", "virtualScroll", "selectOnTab", "ngClass", "ngModelChange", "change", "focus"], ["AC_TYPE", ""], ["for", "AC_NO"], [1, "col-sm-12", "col-md-10"], ["appTheme", "", "id", "AC_NO", "bindValue", "AC_NO", "formControlName", "AC_NO", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Account No.", 3, "ngModel", "virtualScroll", "selectOnTab", "ngModelChange", "change", "focus"], ["AC_NO", ""], ["for", "DATE"], [1, "form-group", "input-group"], ["appTheme", "", "appButton", "", "minlength", "10", "maxlength", "10", "type", "text", "placeholder", "dd/mm/yyyy", "name", "DATE", "id", "DATE", "formControlName", "DATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsValue", "minDate", "bsConfig", "ngClass", "ngModelChange", "keydown.Tab", "bsValueChange", "keypress"], ["DATE", "bsDatepicker"], [1, "col-sm", "col-md"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], ["class", "col-sm-3 col-md-3", 4, "ngIf"], ["class", "col-sm-3 col-md-3", "style", "float: right;", 4, "ngIf"], ["class", "solid", 4, "ngIf"], [1, "col-md-3", "col-sm-12", "col-xm-12"], [1, "col-md-12"], [1, "card-body"], [1, "info-container"], [1, "list-unstyled"], [1, "mb-75"], ["href", "javascript:void(0);", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-book", "fa-fw"], ["href", "javascript:void(0);", 3, "click", 4, "ngIf"], ["class", "mb-75", 4, "ngIf"], [1, "user-avatar-section"], ["class", "img-fluid rounded mt-3 mb-2", "height", "50", "width", "80", "alt", "User avatar", 3, "src", "mouseover", "mouseout", 4, "ngIf"], ["class", "img-fluid rounded mt-3 mb-2", "height", "25", "width", "80", "alt", "User avatar", 3, "src", "mouseover", "mouseout", 4, "ngIf"], [1, "user-info"], [2, "font-size", "13px", "font-weight", "800"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], ["class", "row", 4, "ngIf"], [1, "app-modal-footer"], ["type", "button", "id", "triggerhide", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [2, "width", "270px", "height", "335px", "z-index", "1000", "position", "absolute", "margin-top", "14%", "margin-left", "51%"], ["width", "400", "height", "300", 3, "src"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "col-sm-3", "col-md-3"], [2, "color", "#4374ca"], [2, "color", "#f378a3"], [2, "color", "#1e5bc5"], [1, "col-sm-3", "col-md-3", 2, "float", "right"], [2, "color", "red", "font-size", "13px"], ["class", "col-sm", 4, "ngIf"], [1, "col-sm-2"], [2, "color", "#3e8cd0", "text-align", "left"], ["class", "col-sm-2", 4, "ngIf"], ["class", "col-sm-4", 4, "ngIf"], ["class", "col-sm-8", 4, "ngIf"], [1, "col-sm"], [2, "text-align", "center", "color", "rgb(14 168 14)", "font-size", "12.5px", "font-weight", "800"], [2, "color", "#3e8cd0", "float", "right", "text-align", "right", "padding-right", "10px"], [1, "col-sm-4"], [2, "color", "#3e8cd0", "text-align", "left", "padding-right", "10px"], [1, "col-sm-8"], [1, "col-sm-2", 2, "text-align", "right"], [2, "color", "#3e8cd0", "padding-right", "10px"], ["class", "col-sm-2", "style", "text-align: right;", 4, "ngIf"], [2, "color", "#3e8cd0", "text-align", "right", "padding-right", "10px"], ["href", "javascript:void(0);"], ["height", "50", "width", "80", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], ["height", "25", "width", "80", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], [1, "fw-bolder", "me-25"], [1, "badge", "bg-light-success"], [2, "color", "green"], [2, "color", "green", "font-size", "11px"], [3, "accBranch", "accSchemeName", "accScheme", "accAcNo", "accFromDate", "accToDate", "accountEvent", 4, "ngIf"], [3, "accBranch", "accSchemeName", "accScheme", "accAcNo", "accFromDate", "accToDate", "accountEvent"], [1, "col-sm-12"], [1, "table-responsive"], ["class", "table table-striped table-bordered table-hover compact", 4, "ngIf"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], [2, "max-width", "20px"], [2, "max-width", "15px"], [4, "ngFor", "ngForOf"], [1, "td_right", 3, "ngClass"], [1, "td_left", 3, "ngClass"], ["colspan", "4", 1, "no-data-available", 2, "text-align", "center"], ["class", "table table-striped table-bordered table-hover compact", "style", "width: 100%;", 4, "ngIf"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact", 2, "width", "100%"], [1, "td_center", 3, "ngClass"], ["colspan", "7", 1, "no-data-available", 2, "text-align", "center"], [3, "ngClass"], [1, "td_center", 2, "max-width", "15px", 3, "ngClass"], ["colspan", "6", 1, "no-data-available"], [1, "loader-block"], ["id", "loader2", "viewBox", "0 0 100 100"], ["id", "circle-loader2", "cx", "50", "cy", "50", "r", "45"], ["class", "col-sm-12", 4, "ngIf"], [2, "max-width", "10px"], [2, "max-width", "25px"], ["modalDoc", ""], ["alt", "docu", 1, "form-control", 2, "width", "100%", "height", "100%", 3, "src"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [2, "align-items", "center"], ["placement", "right", "ngbTooltip", "Show Image", 1, "fa", "fa-fw", "fa-eye", "field-icon", 2, "font-size", "20px", "color", "#0f459b", "cursor", "pointer", 3, "click"], ["colspan", "3", 1, "no-data-available", 2, "text-align", "center"]], template: function AccountEnquiryComponent_Template(rf, ctx) { if (rf & 1) {
        const _r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AccountEnquiryComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Account Enquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ng-select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountEnquiryComponent_Template_ng_select_ngModelChange_27_listener($event) { return ctx.ngBranchCode = $event; })("change", function AccountEnquiryComponent_Template_ng_select_change_27_listener() { return ctx.getBranch(); })("focus", function AccountEnquiryComponent_Template_ng_select_focus_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx.onFocus(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AccountEnquiryComponent_ng_option_29_Template, 2, 2, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AccountEnquiryComponent_div_30_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ng-select", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountEnquiryComponent_Template_ng_select_ngModelChange_40_listener($event) { return ctx.ngscheme = $event; })("change", function AccountEnquiryComponent_Template_ng_select_change_40_listener($event) { return ctx.schemechange($event); })("focus", function AccountEnquiryComponent_Template_ng_select_focus_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); return ctx.onFocus(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AccountEnquiryComponent_ng_option_42_Template, 2, 3, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AccountEnquiryComponent_div_43_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ng-select", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountEnquiryComponent_Template_ng_select_ngModelChange_53_listener($event) { return ctx.accountedit = $event; })("change", function AccountEnquiryComponent_Template_ng_select_change_53_listener($event) { ctx.getAccountDetails($event); return ctx.getTransactionDetails(); })("focus", function AccountEnquiryComponent_Template_ng_select_focus_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54); return ctx.onFocus(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AccountEnquiryComponent_ng_option_55_Template, 3, 4, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AccountEnquiryComponent_div_56_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "sub", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountEnquiryComponent_Template_input_ngModelChange_65_listener($event) { return ctx.fromdate = $event; })("keydown.Tab", function AccountEnquiryComponent_Template_input_keydown_Tab_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66); return _r11.hide(); })("bsValueChange", function AccountEnquiryComponent_Template_input_bsValueChange_65_listener() { return ctx.getTransactionDetails(); })("keypress", function AccountEnquiryComponent_Template_input_keypress_65_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AccountEnquiryComponent_div_67_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_Template_button_click_69_listener() { return ctx.getTransactionDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AccountEnquiryComponent_div_72_Template, 4, 1, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, AccountEnquiryComponent_div_73_Template, 1, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AccountEnquiryComponent_div_74_Template, 1, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AccountEnquiryComponent_div_75_Template, 4, 1, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AccountEnquiryComponent_div_76_Template, 1, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, AccountEnquiryComponent_div_77_Template, 4, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, AccountEnquiryComponent_div_78_Template, 1, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, AccountEnquiryComponent_div_79_Template, 4, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, AccountEnquiryComponent_div_80_Template, 1, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, AccountEnquiryComponent_div_81_Template, 4, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, AccountEnquiryComponent_div_82_Template, 65, 50, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, AccountEnquiryComponent_div_83_Template, 113, 31, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, AccountEnquiryComponent_div_84_Template, 77, 8, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, AccountEnquiryComponent_div_85_Template, 118, 14, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, AccountEnquiryComponent_div_86_Template, 172, 33, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, AccountEnquiryComponent_div_87_Template, 169, 20, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Account Enquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_Template_a_click_100_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); _r61.show(); return ctx.viewView("ledgerView"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u00A0 Ledger View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, AccountEnquiryComponent_a_103_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, AccountEnquiryComponent_li_104_Template, 4, 0, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, AccountEnquiryComponent_li_105_Template, 4, 0, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, AccountEnquiryComponent_li_106_Template, 4, 0, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, AccountEnquiryComponent_li_107_Template, 4, 0, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, AccountEnquiryComponent_li_108_Template, 4, 0, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, AccountEnquiryComponent_li_109_Template, 4, 0, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, AccountEnquiryComponent_a_111_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, AccountEnquiryComponent_a_112_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, AccountEnquiryComponent_a_114_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, AccountEnquiryComponent_a_115_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, AccountEnquiryComponent_a_117_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, AccountEnquiryComponent_a_118_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, AccountEnquiryComponent_a_119_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, AccountEnquiryComponent_li_120_Template, 4, 0, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, AccountEnquiryComponent_a_122_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, AccountEnquiryComponent_a_123_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, AccountEnquiryComponent_a_125_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, AccountEnquiryComponent_a_127_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, AccountEnquiryComponent_a_129_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, AccountEnquiryComponent_a_130_Template, 3, 0, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, AccountEnquiryComponent_img_133_Template, 1, 1, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, AccountEnquiryComponent_img_136_Template, 1, 1, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h5", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, AccountEnquiryComponent_li_142_Template, 5, 0, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, AccountEnquiryComponent_li_143_Template, 5, 1, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, AccountEnquiryComponent_li_144_Template, 5, 1, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, AccountEnquiryComponent_li_145_Template, 5, 1, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, AccountEnquiryComponent_li_146_Template, 5, 1, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, AccountEnquiryComponent_li_147_Template, 5, 1, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, AccountEnquiryComponent_li_148_Template, 5, 1, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, AccountEnquiryComponent_li_149_Template, 5, 1, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, AccountEnquiryComponent_li_150_Template, 5, 1, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "app-modal-basic", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h4", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_Template_button_click_156_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); return _r61.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "perfect-scrollbar", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, AccountEnquiryComponent_div_161_Template, 4, 2, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](162, AccountEnquiryComponent_div_162_Template, 3, 1, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](163, AccountEnquiryComponent_div_163_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](164, AccountEnquiryComponent_div_164_Template, 8, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, AccountEnquiryComponent_div_165_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](166, AccountEnquiryComponent_div_166_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](167, AccountEnquiryComponent_div_167_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](168, AccountEnquiryComponent_div_168_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, AccountEnquiryComponent_div_169_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, AccountEnquiryComponent_div_170_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, AccountEnquiryComponent_div_171_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, AccountEnquiryComponent_div_172_Template, 6, 4, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, AccountEnquiryComponent_div_173_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](174, AccountEnquiryComponent_div_174_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](175, AccountEnquiryComponent_div_175_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](176, AccountEnquiryComponent_div_176_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](177, AccountEnquiryComponent_div_177_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](178, AccountEnquiryComponent_div_178_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, AccountEnquiryComponent_div_179_Template, 5, 3, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountEnquiryComponent_Template_button_click_181_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](152); return _r61.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PreviewDiv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngBranchCode)("virtualScroll", true)("selectOnTab", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](97, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["BRANCH_CODE"].invalid && (ctx.angForm.controls["BRANCH_CODE"].dirty || ctx.angForm.controls["BRANCH_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngscheme)("virtualScroll", true)("selectOnTab", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](99, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TYPE"].invalid && (ctx.angForm.controls["AC_TYPE"].dirty || ctx.angForm.controls["AC_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accountedit)("virtualScroll", true)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schemeACNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_NO"].invalid && (ctx.angForm.controls["AC_NO"].dirty || ctx.angForm.controls["AC_NO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fromdate)("bsValue", ctx.bsValue)("minDate", ctx.accountOpenDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](101, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](102, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["DATE"].invalid && (ctx.angForm.controls["DATE"].dirty || ctx.angForm.controls["DATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.angForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.freezeac);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.freezeac);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.REBATE_INTRATE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.REBATE_INTRATE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lienInfoArr.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lienInfoArr.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dormantac);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dormantac);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.acCloseDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.acCloseDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transactionData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.GLRecordShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ShareRecordShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loanSchemeShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loanSchemeShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attorneyView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.securityView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.interestReceivedHistoryView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.interestPaidHistoryView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.interestPostedHistoryView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.interestInstructionView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.payableInterestView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lienInformationView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tdsDetailsView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.securityDetailsView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gaurantorView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.oldDepositsView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coborrowerView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.npaView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jointHolderView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nomineeView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountInformationView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.receivableInterestView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documentsView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerIdView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getschemename != "GL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getschemename != "GL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.accountEvent == null ? null : ctx.accountEvent.AC_NAME, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getschemename != "GL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idmaster);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idmaster);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idmaster == null ? null : ctx.idmaster.AC_PANNO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idmaster == null ? null : ctx.idmaster.AC_ADHARNO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.idmaster == null ? null : ctx.idmaster.AC_MOBILENO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountEvent == null ? null : ctx.accountEvent.AC_GRDNAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jointHolderName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountEvent == null ? null : ctx.accountEvent.AC_RENEWAL_COUNT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsLedgerView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsInterestPaidHistoryView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsJointView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsNomineeView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsAttorneyView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsGuaranterView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsCoborrowerView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsOldDepositsView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsInterestInstructionView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsGoldSilverView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsLienInformationView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsCustomerIDView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsInterestPostedHistoryView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsInterestReceivedHistoryView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsPayableInterestView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsAccountInfoView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsTDSDetailsView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsDocumentView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsProductView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.modalClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _submit_directive__WEBPACK_IMPORTED_MODULE_13__["SubmitDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectComponent"], _theme_directive__WEBPACK_IMPORTED_MODULE_15__["ThemeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerInputDirective"], _button_directive__WEBPACK_IMPORTED_MODULE_17__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__["BsDatepickerDirective"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_18__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["ɵr"], _ledger_view_ledger_view_component__WEBPACK_IMPORTED_MODULE_20__["LedgerViewComponent"], _shares_ledger_view_shares_ledger_view_component__WEBPACK_IMPORTED_MODULE_21__["SharesLedgerViewComponent"], _other_view_interest_paid_history_interest_paid_history_component__WEBPACK_IMPORTED_MODULE_22__["InterestPaidHistoryComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["KeyValuePipe"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  overflow-x: auto;\n  padding-top: -46px;\n  margin: 0px;\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: ridge;\n  border-color: #817d7de3;\n  padding: 0.4%;\n  margin-bottom: 3px;\n  padding-right: 12px;\n}\n\n.main-body[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  padding-bottom: 4% !important;\n  transition: all ease-in 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #ff5252;\n  color: #ff5252;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 11px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 14px;\n  border-radius: 5px;\n  padding-bottom: 22px;\n  padding-top: 4px;\n  height: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px !important;\n  max-height: 18px !important;\n  align-items: center;\n  font-size: 11px !important;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 18px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 5px;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 5px;\n  padding-left: 15px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdmlldy9hY2NvdW50LWVucXVpcnkvYWNjb3VudC1lbnF1aXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUlBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFFSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUVJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFKSjs7QUFPQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUpKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3ZpZXcvYWNjb3VudC1lbnF1aXJ5L2FjY291bnQtZW5xdWlyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1aXJlZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vIGNvbG9yOiByZ2IoNDQsIDEzOSwgMjM0KTtcclxuICAgIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogLTQ2cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuZGl2LnNvbGlkIHtcclxuICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItc3R5bGU6IHJpZGdlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODE3ZDdkZTM7XHJcbiAgICBwYWRkaW5nOiAwLjQlO1xyXG4gICAgLy8gcGFkZGluZzogMC43JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5tYWluLWJvZHkgLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNCUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDAuM3M7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmNTI1MjtcclxuICAgIGNvbG9yOiAjZmY1MjUyO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAgIC8vIGZsb2F0OiBsZWZ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWluLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmJvcmRlci1sYWJsZS1mbHQgLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgcGFkZGluZzogMHJlbSAwLjdyZW07XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWJsb2NrIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jb2wtMSxcclxuLmNvbC0yLFxyXG4uY29sLTMsXHJcbi5jb2wtNCxcclxuLmNvbC01LFxyXG4uY29sLTYsXHJcbi5jb2wtNyxcclxuLmNvbC04LFxyXG4uY29sLTksXHJcbi5jb2wtMTAsXHJcbi5jb2wtMTEsXHJcbi5jb2wtMTIsXHJcbi5jb2wsXHJcbi5jb2wtYXV0byxcclxuLmNvbC1zbS0xLFxyXG4uY29sLXNtLTIsXHJcbi5jb2wtc20tMyxcclxuLmNvbC1zbS00LFxyXG4uY29sLXNtLTUsXHJcbi5jb2wtc20tNixcclxuLmNvbC1zbS03LFxyXG4uY29sLXNtLTgsXHJcbi5jb2wtc20tOSxcclxuLmNvbC1zbS0xMCxcclxuLmNvbC1zbS0xMSxcclxuLmNvbC1zbS0xMixcclxuLmNvbC1zbSxcclxuLmNvbC1zbS1hdXRvLFxyXG4uY29sLW1kLTEsXHJcbi5jb2wtbWQtMixcclxuLmNvbC1tZC0zLFxyXG4uY29sLW1kLTQsXHJcbi5jb2wtbWQtNSxcclxuLmNvbC1tZC02LFxyXG4uY29sLW1kLTcsXHJcbi5jb2wtbWQtOCxcclxuLmNvbC1tZC05LFxyXG4uY29sLW1kLTEwLFxyXG4uY29sLW1kLTExLFxyXG4uY29sLW1kLTEyLFxyXG4uY29sLW1kLFxyXG4uY29sLW1kLWF1dG8sXHJcbi5jb2wtbGctMSxcclxuLmNvbC1sZy0yLFxyXG4uY29sLWxnLTMsXHJcbi5jb2wtbGctNCxcclxuLmNvbC1sZy01LFxyXG4uY29sLWxnLTYsXHJcbi5jb2wtbGctNyxcclxuLmNvbC1sZy04LFxyXG4uY29sLWxnLTksXHJcbi5jb2wtbGctMTAsXHJcbi5jb2wtbGctMTEsXHJcbi5jb2wtbGctMTIsXHJcbi5jb2wtbGcsXHJcbi5jb2wtbGctYXV0byxcclxuLmNvbC14bC0xLFxyXG4uY29sLXhsLTIsXHJcbi5jb2wteGwtMyxcclxuLmNvbC14bC00LFxyXG4uY29sLXhsLTUsXHJcbi5jb2wteGwtNixcclxuLmNvbC14bC03LFxyXG4uY29sLXhsLTgsXHJcbi5jb2wteGwtOSxcclxuLmNvbC14bC0xMCxcclxuLmNvbC14bC0xMSxcclxuLmNvbC14bC0xMixcclxuLmNvbC14bCxcclxuLmNvbC14bC1hdXRvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountEnquiryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account-enquiry',
                templateUrl: './account-enquiry.component.html',
                styleUrls: ['./account-enquiry.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_7__["CustomerIdService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_9__["SystemMasterParametersService"] }, { type: src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["OwnbranchMasterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/view/account-enquiry/account-enquiry.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/view/account-enquiry/account-enquiry.module.ts ***!
  \**********************************************************************/
/*! exports provided: AccountEnquiryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEnquiryModule", function() { return AccountEnquiryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _account_enquiry_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-enquiry-routing.module */ "./src/app/theme/view/account-enquiry/account-enquiry-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _account_enquiry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-enquiry.component */ "./src/app/theme/view/account-enquiry/account-enquiry.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/dropdownService/ac-master-dropdown.service */ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _ledger_view_ledger_view_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ledger-view/ledger-view.module */ "./src/app/theme/view/ledger-view/ledger-view.module.ts");
/* harmony import */ var _shares_ledger_view_shares_ledger_view_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shares-ledger-view/shares-ledger-view.module */ "./src/app/theme/view/shares-ledger-view/shares-ledger-view.module.ts");
/* harmony import */ var _other_view_interest_paid_history_interest_paid_history_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../other-view/interest-paid-history/interest-paid-history.module */ "./src/app/theme/view/other-view/interest-paid-history/interest-paid-history.module.ts");
/* harmony import */ var _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../master/customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../theme.module */ "./src/app/theme/theme.module.ts");























class AccountEnquiryModule {
}
AccountEnquiryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountEnquiryModule });
AccountEnquiryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountEnquiryModule_Factory(t) { return new (t || AccountEnquiryModule)(); }, providers: [src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_19__["SystemMasterParametersService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__["SchemeAccountNoService"], _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_18__["CustomerIdService"], src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["ACMasterDropdownService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["OwnbranchMasterService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["DatepickerModule"].forRoot(),
            _account_enquiry_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountEnquiryRoutingModule"],
            _ledger_view_ledger_view_module__WEBPACK_IMPORTED_MODULE_15__["LedgerViewModule"],
            _shares_ledger_view_shares_ledger_view_module__WEBPACK_IMPORTED_MODULE_16__["SharesLedgerViewModule"],
            _other_view_interest_paid_history_interest_paid_history_module__WEBPACK_IMPORTED_MODULE_17__["InterestPaidHistoryModule"],
            _theme_module__WEBPACK_IMPORTED_MODULE_20__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountEnquiryModule, { declarations: [_account_enquiry_component__WEBPACK_IMPORTED_MODULE_6__["AccountEnquiryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["DatepickerModule"], _account_enquiry_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountEnquiryRoutingModule"],
        _ledger_view_ledger_view_module__WEBPACK_IMPORTED_MODULE_15__["LedgerViewModule"],
        _shares_ledger_view_shares_ledger_view_module__WEBPACK_IMPORTED_MODULE_16__["SharesLedgerViewModule"],
        _other_view_interest_paid_history_interest_paid_history_module__WEBPACK_IMPORTED_MODULE_17__["InterestPaidHistoryModule"],
        _theme_module__WEBPACK_IMPORTED_MODULE_20__["ThemeModule"]], exports: [_account_enquiry_component__WEBPACK_IMPORTED_MODULE_6__["AccountEnquiryComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountEnquiryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["DatepickerModule"].forRoot(),
                    _account_enquiry_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountEnquiryRoutingModule"],
                    _ledger_view_ledger_view_module__WEBPACK_IMPORTED_MODULE_15__["LedgerViewModule"],
                    _shares_ledger_view_shares_ledger_view_module__WEBPACK_IMPORTED_MODULE_16__["SharesLedgerViewModule"],
                    _other_view_interest_paid_history_interest_paid_history_module__WEBPACK_IMPORTED_MODULE_17__["InterestPaidHistoryModule"],
                    _theme_module__WEBPACK_IMPORTED_MODULE_20__["ThemeModule"]
                ],
                exports: [_account_enquiry_component__WEBPACK_IMPORTED_MODULE_6__["AccountEnquiryComponent"]],
                declarations: [_account_enquiry_component__WEBPACK_IMPORTED_MODULE_6__["AccountEnquiryComponent"]],
                providers: [src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_19__["SystemMasterParametersService"], src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_11__["SchemeAccountNoService"], _master_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_18__["CustomerIdService"], src_app_shared_dropdownService_ac_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["ACMasterDropdownService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["OwnbranchMasterService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~account-enquiry-account-enquiry-module~shortcutkey-accounts-accounts-module.js.map