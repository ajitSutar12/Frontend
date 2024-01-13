(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~e2f6e169"],{

/***/ "./src/app/theme/master/customer/term-loan-master/term-loan-master-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/theme/master/customer/term-loan-master/term-loan-master-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TermLoanMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermLoanMasterRoutingModule", function() { return TermLoanMasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _term_loan_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./term-loan-master.component */ "./src/app/theme/master/customer/term-loan-master/term-loan-master.component.ts");





const routes = [
    {
        path: '',
        component: _term_loan_master_component__WEBPACK_IMPORTED_MODULE_2__["TermLoanMasterComponent"],
        data: {
            title: 'Term Loan Master',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class TermLoanMasterRoutingModule {
}
TermLoanMasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermLoanMasterRoutingModule });
TermLoanMasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermLoanMasterRoutingModule_Factory(t) { return new (t || TermLoanMasterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermLoanMasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermLoanMasterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/term-loan-master/term-loan-master.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/master/customer/term-loan-master/term-loan-master.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TermLoanMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermLoanMasterComponent", function() { return TermLoanMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _term_loan_master_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./term-loan-master.service */ "./src/app/theme/master/customer/term-loan-master/term-loan-master.service.ts");
/* harmony import */ var _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/customer-id-master-dropdown.service */ "./src/app/shared/dropdownService/customer-id-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/dropdownService/interest-category-master-dropdown.service */ "./src/app/shared/dropdownService/interest-category-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_repay_mode_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/dropdownService/repay-mode.service */ "./src/app/shared/dropdownService/repay-mode.service.ts");
/* harmony import */ var _shared_dropdownService_installment_method_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/dropdownService/installment-method.service */ "./src/app/shared/dropdownService/installment-method.service.ts");
/* harmony import */ var _shared_dropdownService_authority_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/dropdownService/authority-master-dropdown.service */ "./src/app/shared/dropdownService/authority-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/dropdownService/director-master-dropdown.service */ "./src/app/shared/dropdownService/director-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_recovery_cleark_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/dropdownService/recovery-cleark-master-dropdown.service */ "./src/app/shared/dropdownService/recovery-cleark-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_priority_sector_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/dropdownService/priority-sector-master-dropdown.service */ "./src/app/shared/dropdownService/priority-sector-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_weaker_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/dropdownService/weaker-master-dropdown.service */ "./src/app/shared/dropdownService/weaker-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_purpose_master_dropdown_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/dropdownService/purpose-master-dropdown.service */ "./src/app/shared/dropdownService/purpose-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_industry_master_dropdown_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/dropdownService/industry-master-dropdown.service */ "./src/app/shared/dropdownService/industry-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_health_master_dropdown_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/dropdownService/health-master-dropdown.service */ "./src/app/shared/dropdownService/health-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/dropdownService/city-master-dropdown.service */ "./src/app/shared/dropdownService/city-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_account_type_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/dropdownService/account-type.service */ "./src/app/shared/dropdownService/account-type.service.ts");
/* harmony import */ var _shared_dropdownService_security_master_dropdown_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../shared/dropdownService/security-master-dropdown.service */ "./src/app/shared/dropdownService/security-master-dropdown.service.ts");
/* harmony import */ var _policy_settings_definations_interest_rate_for_lacc_interest_rate_for_lacc_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service */ "./src/app/theme/master/policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service.ts");
/* harmony import */ var _policy_settings_information_priority_sector_master_priority_sector_master_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../policy-settings/information/priority-sector-master/priority-sector-master.service */ "./src/app/theme/master/policy-settings/information/priority-sector-master/priority-sector-master.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _utility_scheme_parameters_term_loan_scheme_term_loan_scheme_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../utility/scheme-parameters/term-loan-scheme/term-loan-scheme.service */ "./src/app/theme/utility/scheme-parameters/term-loan-scheme/term-loan-scheme.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _policy_settings_definations_security_code_security_code_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../policy-settings/definations/security-code/security-code.service */ "./src/app/theme/master/policy-settings/definations/security-code/security-code.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _customer_id_customer_id_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../customer-id/customer-id.component */ "./src/app/theme/master/customer/customer-id/customer-id.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../button.directive */ "./src/app/theme/button.directive.ts");
/* harmony import */ var _maintainance_security_details_book_debts_book_debts_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../maintainance/security-details/book-debts/book-debts.component */ "./src/app/theme/master/maintainance/security-details/book-debts/book-debts.component.ts");
/* harmony import */ var _maintainance_security_details_customer_insurance_customer_insurance_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../maintainance/security-details/customer-insurance/customer-insurance.component */ "./src/app/theme/master/maintainance/security-details/customer-insurance/customer-insurance.component.ts");
/* harmony import */ var _maintainance_security_details_fire_policy_fire_policy_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../maintainance/security-details/fire-policy/fire-policy.component */ "./src/app/theme/master/maintainance/security-details/fire-policy/fire-policy.component.ts");
/* harmony import */ var _maintainance_security_details_furniture_and_fixture_furniture_and_fixture_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../maintainance/security-details/furniture-and-fixture/furniture-and-fixture.component */ "./src/app/theme/master/maintainance/security-details/furniture-and-fixture/furniture-and-fixture.component.ts");
/* harmony import */ var _maintainance_security_details_gold_and_silver_gold_and_silver_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../maintainance/security-details/gold-and-silver/gold-and-silver.component */ "./src/app/theme/master/maintainance/security-details/gold-and-silver/gold-and-silver.component.ts");
/* harmony import */ var _maintainance_security_details_govt_security_and_lic_govt_security_and_lic_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../maintainance/security-details/govt-security-and-lic/govt-security-and-lic.component */ "./src/app/theme/master/maintainance/security-details/govt-security-and-lic/govt-security-and-lic.component.ts");
/* harmony import */ var _maintainance_security_details_land_and_buildings_land_and_buildings_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../maintainance/security-details/land-and-buildings/land-and-buildings.component */ "./src/app/theme/master/maintainance/security-details/land-and-buildings/land-and-buildings.component.ts");
/* harmony import */ var _maintainance_security_details_market_shares_market_shares_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../maintainance/security-details/market-shares/market-shares.component */ "./src/app/theme/master/maintainance/security-details/market-shares/market-shares.component.ts");
/* harmony import */ var _maintainance_security_details_other_security_other_security_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../maintainance/security-details/other-security/other-security.component */ "./src/app/theme/master/maintainance/security-details/other-security/other-security.component.ts");
/* harmony import */ var _maintainance_security_details_own_deposits_own_deposits_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../maintainance/security-details/own-deposits/own-deposits.component */ "./src/app/theme/master/maintainance/security-details/own-deposits/own-deposits.component.ts");
/* harmony import */ var _maintainance_security_details_plant_and_machinery_plant_and_machinery_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../../maintainance/security-details/plant-and-machinery/plant-and-machinery.component */ "./src/app/theme/master/maintainance/security-details/plant-and-machinery/plant-and-machinery.component.ts");
/* harmony import */ var _maintainance_security_details_pleadge_stock_pleadge_stock_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../maintainance/security-details/pleadge-stock/pleadge-stock.component */ "./src/app/theme/master/maintainance/security-details/pleadge-stock/pleadge-stock.component.ts");
/* harmony import */ var _maintainance_security_details_stock_statement_stock_statement_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../maintainance/security-details/stock-statement/stock-statement.component */ "./src/app/theme/master/maintainance/security-details/stock-statement/stock-statement.component.ts");
/* harmony import */ var _maintainance_security_details_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../maintainance/security-details/vehicle/vehicle.component */ "./src/app/theme/master/maintainance/security-details/vehicle/vehicle.component.ts");




// Creating and maintaining form fields with validation 

// Displaying Sweet Alert

// Angular Datatable Directive  

//animation























































const _c0 = ["ctdTabset"];
function TermLoanMasterComponent_ng_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r18.label, "");
} }
function TermLoanMasterComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_div_25_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r3.angForm.controls["AC_TYPE"].errors.required);
} }
function TermLoanMasterComponent_ng_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r20.label, "");
} }
function TermLoanMasterComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_div_37_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_CUSTID"].errors == null ? null : ctx_r6.angForm.controls["AC_CUSTID"].errors.required);
} }
function TermLoanMasterComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_div_60_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_TITLE"].errors == null ? null : ctx_r8.angForm.controls["AC_TITLE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_79_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_13_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.angForm.controls["AC_OPDATE"].errors == null ? null : ctx_r24.angForm.controls["AC_OPDATE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_79_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_46_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r26.angForm.controls["REF_ACNO"].errors == null ? null : ctx_r26.angForm.controls["REF_ACNO"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_79_ng_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r48.label, "");
} }
function TermLoanMasterComponent_ng_template_79_div_69_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_69_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.angForm.controls["AC_INTCATA"].errors == null ? null : ctx_r29.angForm.controls["AC_INTCATA"].errors.required);
} }
function TermLoanMasterComponent_ng_template_79_div_78_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_78_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r30.angForm.controls["AC_SANCTION_AMOUNT"].errors == null ? null : ctx_r30.angForm.controls["AC_SANCTION_AMOUNT"].errors.pattern) || (ctx_r30.angForm.controls["AC_SANCTION_AMOUNT"].errors == null ? null : ctx_r30.angForm.controls["AC_SANCTION_AMOUNT"].errors.required));
} }
function TermLoanMasterComponent_ng_template_79_div_89_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_89_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r32.angForm.controls["AC_SANCTION_DATE"].errors == null ? null : ctx_r32.angForm.controls["AC_SANCTION_DATE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_79_div_98_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_98_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r33.angForm.controls["AC_DRAWPOWER_AMT"].errors == null ? null : ctx_r33.angForm.controls["AC_DRAWPOWER_AMT"].errors.pattern) || (ctx_r33.angForm.controls["AC_DRAWPOWER_AMT"].errors == null ? null : ctx_r33.angForm.controls["AC_DRAWPOWER_AMT"].errors.required));
} }
function TermLoanMasterComponent_ng_template_79_div_107_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_107_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r34.angForm.controls["AC_MONTHS"].errors == null ? null : ctx_r34.angForm.controls["AC_MONTHS"].errors.pattern) || (ctx_r34.angForm.controls["AC_MONTHS"].errors == null ? null : ctx_r34.angForm.controls["AC_MONTHS"].errors.required) || (ctx_r34.angForm.controls["AC_MONTHS"].errors == null ? null : ctx_r34.angForm.controls["AC_MONTHS"].errors.maxlength));
} }
function TermLoanMasterComponent_ng_template_79_div_116_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_116_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r35.angForm.controls["AC_DAYS"].errors == null ? null : ctx_r35.angForm.controls["AC_DAYS"].errors.pattern) || (ctx_r35.angForm.controls["AC_DAYS"].errors == null ? null : ctx_r35.angForm.controls["AC_DAYS"].errors.required) || (ctx_r35.angForm.controls["AC_DAYS"].errors == null ? null : ctx_r35.angForm.controls["AC_DAYS"].errors.maxlength));
} }
function TermLoanMasterComponent_ng_template_79_div_125_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_125_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r36.angForm.controls["AC_EXPIRE_DATE"].errors == null ? null : ctx_r36.angForm.controls["AC_EXPIRE_DATE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_79_div_135_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_135_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r37.angForm.controls["AC_INTRATE"].errors == null ? null : ctx_r37.angForm.controls["AC_INTRATE"].errors.pattern) || (ctx_r37.angForm.controls["AC_INTRATE"].errors == null ? null : ctx_r37.angForm.controls["AC_INTRATE"].errors.required));
} }
function TermLoanMasterComponent_ng_template_79_ng_option_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r57.label, "");
} }
function TermLoanMasterComponent_ng_template_79_div_146_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_146_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r40.angForm.controls["AC_REPAYMODE"].errors == null ? null : ctx_r40.angForm.controls["AC_REPAYMODE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_79_ng_option_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r59.label, "");
} }
function TermLoanMasterComponent_ng_template_79_div_157_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_157_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r43.angForm.controls["INSTALLMENT_METHOD"].errors == null ? null : ctx_r43.angForm.controls["INSTALLMENT_METHOD"].errors.required);
} }
function TermLoanMasterComponent_ng_template_79_div_171_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_171_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r44.angForm.controls["AC_MORATORIUM_PERIOD"].errors == null ? null : ctx_r44.angForm.controls["AC_MORATORIUM_PERIOD"].errors.pattern) || (ctx_r44.angForm.controls["AC_MORATORIUM_PERIOD"].errors == null ? null : ctx_r44.angForm.controls["AC_MORATORIUM_PERIOD"].errors.maxlength));
} }
function TermLoanMasterComponent_ng_template_79_div_178_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_79_div_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_79_div_178_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r45.angForm.controls["AC_GRACE_PERIOD"].errors == null ? null : ctx_r45.angForm.controls["AC_GRACE_PERIOD"].errors.pattern) || (ctx_r45.angForm.controls["AC_GRACE_PERIOD"].errors == null ? null : ctx_r45.angForm.controls["AC_GRACE_PERIOD"].errors.maxlength));
} }
const _c1 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
const _c2 = function (a0) { return { "form-submitted": a0 }; };
function TermLoanMasterComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r63.openingDate = $event; })("keydown.Tab", function TermLoanMasterComponent_ng_template_79_Template_input_keydown_Tab_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return _r23.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Opening Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TermLoanMasterComponent_ng_template_79_div_13_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r66.renewDate = $event; })("bsValueChange", function TermLoanMasterComponent_ng_template_79_Template_input_bsValueChange_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r67.getExpiryDate(); })("keydown.Tab", function TermLoanMasterComponent_ng_template_79_Template_input_keydown_Tab_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); return _r25.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Renewal Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Birth Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Member Scheme ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Member Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function TermLoanMasterComponent_ng_template_79_Template_input_keypress_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122 || $event.charCode <= 32 || $event.charCode == 46 || $event.charCode == 45 || $event.charCode == 47 || $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Manual Reference Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, TermLoanMasterComponent_ng_template_79_div_46_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Cast");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Occupation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ng-select", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_ng_select_ngModelChange_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r70.int_category = $event; })("change", function TermLoanMasterComponent_ng_template_79_Template_ng_select_change_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r71.getInterest($event); })("focus", function TermLoanMasterComponent_ng_template_79_Template_ng_select_focus_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r72.onFocus(_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, TermLoanMasterComponent_ng_template_79_ng_option_64_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Interest Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, TermLoanMasterComponent_ng_template_79_div_69_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function TermLoanMasterComponent_ng_template_79_Template_input_keyup_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r73.getDecimal($event); })("focusout", function TermLoanMasterComponent_ng_template_79_Template_input_focusout_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r74.getDecimalPoint($event); })("keypress", function TermLoanMasterComponent_ng_template_79_Template_input_keypress_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; })("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_input_ngModelChange_73_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r76.sanctionAmt = $event; })("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_input_ngModelChange_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r77.changeAmt(); return ctx_r77.calculation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Sanction Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, TermLoanMasterComponent_ng_template_79_div_78_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "input", 84, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_input_ngModelChange_83_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r78.sanctionDate = $event; })("keydown.Tab", function TermLoanMasterComponent_ng_template_79_Template_input_keydown_Tab_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](84); return _r31.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Sanction Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, TermLoanMasterComponent_ng_template_79_div_89_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_input_ngModelChange_93_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r80.drawingPower = $event; })("focusout", function TermLoanMasterComponent_ng_template_79_Template_input_focusout_93_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r81.calculation(); ctx_r81.getDecimalPoint($event); return ctx_r81.compareamount(); })("keyup", function TermLoanMasterComponent_ng_template_79_Template_input_keyup_93_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r82.getDecimal($event); })("keypress", function TermLoanMasterComponent_ng_template_79_Template_input_keypress_93_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Drawing Power Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, TermLoanMasterComponent_ng_template_79_div_98_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function TermLoanMasterComponent_ng_template_79_Template_input_keypress_102_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); return $event.charCode >= 48 && $event.charCode < 58; })("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_input_ngModelChange_102_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r85.getExpiryDate(); return ctx_r85.calculation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Period(Months)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, TermLoanMasterComponent_ng_template_79_div_107_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function TermLoanMasterComponent_ng_template_79_Template_input_keypress_111_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); return $event.charCode >= 48 && $event.charCode < 58; })("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_input_ngModelChange_111_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r87.getExpiryDate(); return ctx_r87.calculation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Period(Days)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, TermLoanMasterComponent_ng_template_79_div_116_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_input_ngModelChange_120_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r88.ngexpiry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](125, TermLoanMasterComponent_ng_template_79_div_125_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_input_ngModelChange_130_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r89.intRate = $event; })("keyup", function TermLoanMasterComponent_ng_template_79_Template_input_keyup_130_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r90.getDecimal($event); })("keypress", function TermLoanMasterComponent_ng_template_79_Template_input_keypress_130_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; })("keyup", function TermLoanMasterComponent_ng_template_79_Template_input_keyup_130_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r92.checkmargin($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Interest Rate%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](135, TermLoanMasterComponent_ng_template_79_div_135_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "ng-select", 97, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_ng_select_ngModelChange_139_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r93.repay = $event; })("change", function TermLoanMasterComponent_ng_template_79_Template_ng_select_change_139_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r94.calculation(); })("focus", function TermLoanMasterComponent_ng_template_79_Template_ng_select_focus_139_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](140); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r95.onFocus(_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, TermLoanMasterComponent_ng_template_79_ng_option_141_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Repay Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](146, TermLoanMasterComponent_ng_template_79_div_146_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "ng-select", 100, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_79_Template_ng_select_ngModelChange_150_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r96.installmentType = $event; })("change", function TermLoanMasterComponent_ng_template_79_Template_ng_select_change_150_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r97.calculation(); })("focus", function TermLoanMasterComponent_ng_template_79_Template_ng_select_focus_150_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](151); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r98.onFocus(_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](152, TermLoanMasterComponent_ng_template_79_ng_option_152_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Installment Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](157, TermLoanMasterComponent_ng_template_79_div_157_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function TermLoanMasterComponent_ng_template_79_Template_input_focusout_161_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r99.getDecimalPoint($event); })("keypress", function TermLoanMasterComponent_ng_template_79_Template_input_keypress_161_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Installment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function TermLoanMasterComponent_ng_template_79_Template_input_keypress_168_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Moratorium Period(Months)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](171, TermLoanMasterComponent_ng_template_79_div_171_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function TermLoanMasterComponent_ng_template_79_Template_input_keypress_175_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Grace Period(Days)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](178, TermLoanMasterComponent_ng_template_79_div_178_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Is Agriculture Loan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_79_Template_button_click_188_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r103.switchNgBTab("otherDetails"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](53, _c1))("maxDate", ctx_r10.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](54, _c2, ctx_r10.formSubmitted))("ngModel", ctx_r10.openingDate)("bsValue", ctx_r10.bsValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_OPDATE"].invalid && (ctx_r10.angForm.controls["AC_OPDATE"].dirty || ctx_r10.angForm.controls["AC_OPDATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.renewDate)("minDate", ctx_r10.maxDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](56, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["REF_ACNO"].invalid && (ctx_r10.angForm.controls["REF_ACNO"].dirty || ctx_r10.angForm.controls["REF_ACNO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.int_category)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](57, _c2, ctx_r10.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.intCat);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_INTCATA"].invalid && (ctx_r10.angForm.controls["AC_INTCATA"].dirty || ctx_r10.angForm.controls["AC_INTCATA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.AC_SANCTION_AMOUNT != null ? ctx_r10.AC_SANCTION_AMOUNT : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.sanctionAmt)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](59, _c2, ctx_r10.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_SANCTION_AMOUNT"].invalid && (ctx_r10.angForm.controls["AC_SANCTION_AMOUNT"].dirty || ctx_r10.angForm.controls["AC_SANCTION_AMOUNT"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.sanctionDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](61, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](62, _c2, ctx_r10.formSubmitted))("maxDate", ctx_r10.maxDate)("bsValue", ctx_r10.bsValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_SANCTION_DATE"].invalid && (ctx_r10.angForm.controls["AC_SANCTION_DATE"].dirty || ctx_r10.angForm.controls["AC_SANCTION_DATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.AC_DRAWPOWER_AMT != null ? ctx_r10.AC_DRAWPOWER_AMT.toFixed(2) : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.drawingPower)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](64, _c2, ctx_r10.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_DRAWPOWER_AMT"].invalid && (ctx_r10.angForm.controls["AC_DRAWPOWER_AMT"].dirty || ctx_r10.angForm.controls["AC_DRAWPOWER_AMT"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](66, _c2, ctx_r10.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_MONTHS"].invalid && (ctx_r10.angForm.controls["AC_MONTHS"].dirty || ctx_r10.angForm.controls["AC_MONTHS"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](68, _c2, ctx_r10.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_DAYS"].invalid && (ctx_r10.angForm.controls["AC_DAYS"].dirty || ctx_r10.angForm.controls["AC_DAYS"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.ngexpiry)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](70, _c2, ctx_r10.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_EXPIRE_DATE"].invalid && (ctx_r10.angForm.controls["AC_EXPIRE_DATE"].dirty || ctx_r10.angForm.controls["AC_EXPIRE_DATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.intRate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](72, _c2, ctx_r10.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_INTRATE"].invalid && (ctx_r10.angForm.controls["AC_INTRATE"].dirty || ctx_r10.angForm.controls["AC_INTRATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.repay)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](74, _c2, ctx_r10.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.repayModeOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_REPAYMODE"].invalid && (ctx_r10.angForm.controls["AC_REPAYMODE"].dirty || ctx_r10.angForm.controls["AC_REPAYMODE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.installmentType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](76, _c2, ctx_r10.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.installment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["INSTALLMENT_METHOD"].invalid && (ctx_r10.angForm.controls["INSTALLMENT_METHOD"].dirty || ctx_r10.angForm.controls["INSTALLMENT_METHOD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.AC_INSTALLMENT != null ? ctx_r10.AC_INSTALLMENT.toFixed(2) : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_MORATORIUM_PERIOD"].invalid && (ctx_r10.angForm.controls["AC_MORATORIUM_PERIOD"].dirty || ctx_r10.angForm.controls["AC_MORATORIUM_PERIOD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["AC_GRACE_PERIOD"].invalid && (ctx_r10.angForm.controls["AC_GRACE_PERIOD"].dirty || ctx_r10.angForm.controls["AC_GRACE_PERIOD"].touched));
} }
function TermLoanMasterComponent_ng_template_81_ng_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r136 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r136.label, "");
} }
function TermLoanMasterComponent_ng_template_81_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_81_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_81_div_14_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r106.angForm.controls["AC_AUTHORITY"].errors == null ? null : ctx_r106.angForm.controls["AC_AUTHORITY"].errors.required);
} }
function TermLoanMasterComponent_ng_template_81_ng_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r138 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r138.label, "");
} }
function TermLoanMasterComponent_ng_template_81_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_81_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_81_div_25_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r109.angForm.controls["AC_RECOMMEND_BY"].errors == null ? null : ctx_r109.angForm.controls["AC_RECOMMEND_BY"].errors.required);
} }
function TermLoanMasterComponent_ng_template_81_ng_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r140 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r140.label, "");
} }
function TermLoanMasterComponent_ng_template_81_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_81_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_81_div_36_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r112.angForm.controls["AC_RECOVERY_CLERK"].errors == null ? null : ctx_r112.angForm.controls["AC_RECOVERY_CLERK"].errors.required);
} }
function TermLoanMasterComponent_ng_template_81_ng_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r142.label, "");
} }
function TermLoanMasterComponent_ng_template_81_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_81_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_81_div_47_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r115.angForm.controls["AC_PRIORITY"].errors == null ? null : ctx_r115.angForm.controls["AC_PRIORITY"].errors.required);
} }
function TermLoanMasterComponent_ng_template_81_ng_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r144 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r144.label, "");
} }
function TermLoanMasterComponent_ng_template_81_div_84_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_81_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_81_div_84_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r118.angForm.controls["AC_WEAKER"].errors == null ? null : ctx_r118.angForm.controls["AC_WEAKER"].errors.required);
} }
function TermLoanMasterComponent_ng_template_81_ng_option_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r146 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r146.label, "");
} }
function TermLoanMasterComponent_ng_template_81_div_95_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_81_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_81_div_95_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r121.angForm.controls["AC_PURPOSE"].errors == null ? null : ctx_r121.angForm.controls["AC_PURPOSE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_81_ng_option_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r148 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r148.label, "");
} }
function TermLoanMasterComponent_ng_template_81_div_106_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_81_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_81_div_106_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r124.angForm.controls["AC_INDUSTRY"].errors == null ? null : ctx_r124.angForm.controls["AC_INDUSTRY"].errors.required);
} }
function TermLoanMasterComponent_ng_template_81_ng_option_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r150 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r150.label, "");
} }
function TermLoanMasterComponent_ng_template_81_div_117_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_81_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_81_div_117_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r127.angForm.controls["AC_HEALTH"].errors == null ? null : ctx_r127.angForm.controls["AC_HEALTH"].errors.required);
} }
function TermLoanMasterComponent_ng_template_81_ng_option_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r152 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r152.label, "");
} }
function TermLoanMasterComponent_ng_template_81_div_129_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_81_div_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_81_div_129_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r130.angForm.controls["AC_RELATION_TYPE"].errors == null ? null : ctx_r130.angForm.controls["AC_RELATION_TYPE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_81_ng_option_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r154.label, "");
} }
function TermLoanMasterComponent_ng_template_81_div_154_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_81_div_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_81_div_154_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r133.angForm.controls["AC_COREG_NO"].errors == null ? null : ctx_r133.angForm.controls["AC_COREG_NO"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_81_div_168_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_81_div_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_81_div_168_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r135.angForm.controls["AC_COREG_AMT"].errors == null ? null : ctx_r135.angForm.controls["AC_COREG_AMT"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ng-select", 115, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_81_Template_ng_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r157.sanctionAutho = $event; })("focus", function TermLoanMasterComponent_ng_template_81_Template_ng_select_focus_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r159.onFocus(_r104); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TermLoanMasterComponent_ng_template_81_ng_option_9_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sanction Authority");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TermLoanMasterComponent_ng_template_81_div_14_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ng-select", 118, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_81_Template_ng_select_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r160.recomBy = $event; })("focus", function TermLoanMasterComponent_ng_template_81_Template_ng_select_focus_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r161.onFocus(_r107); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TermLoanMasterComponent_ng_template_81_ng_option_20_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Recommended By");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TermLoanMasterComponent_ng_template_81_div_25_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ng-select", 121, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_81_Template_ng_select_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r162.recovery = $event; })("focus", function TermLoanMasterComponent_ng_template_81_Template_ng_select_focus_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r163.onFocus(_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, TermLoanMasterComponent_ng_template_81_ng_option_31_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Recovery Cleark");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, TermLoanMasterComponent_ng_template_81_div_36_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ng-select", 124, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_81_Template_ng_select_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r164.idp = $event; })("change", function TermLoanMasterComponent_ng_template_81_Template_ng_select_change_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r165.getPriority(ctx_r165.idp); })("focus", function TermLoanMasterComponent_ng_template_81_Template_ng_select_focus_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41); const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r166.onFocus(_r113); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, TermLoanMasterComponent_ng_template_81_ng_option_42_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, TermLoanMasterComponent_ng_template_81_div_47_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Priority 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Priority 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Priority 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Is Weaker A/c ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ng-select", 135, 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_81_Template_ng_select_ngModelChange_77_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r167.weakerSec = $event; })("focus", function TermLoanMasterComponent_ng_template_81_Template_ng_select_focus_77_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](78); const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r168.onFocus(_r116); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, TermLoanMasterComponent_ng_template_81_ng_option_79_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Weaker Section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, TermLoanMasterComponent_ng_template_81_div_84_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "ng-select", 138, 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_81_Template_ng_select_ngModelChange_88_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r169.ngpurpose = $event; })("focus", function TermLoanMasterComponent_ng_template_81_Template_ng_select_focus_88_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](89); const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r170.onFocus(_r119); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, TermLoanMasterComponent_ng_template_81_ng_option_90_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, TermLoanMasterComponent_ng_template_81_div_95_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "ng-select", 141, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_81_Template_ng_select_ngModelChange_99_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r171.ngindustry = $event; })("focus", function TermLoanMasterComponent_ng_template_81_Template_ng_select_focus_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](100); const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r172.onFocus(_r122); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, TermLoanMasterComponent_ng_template_81_ng_option_101_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Industry");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, TermLoanMasterComponent_ng_template_81_div_106_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "ng-select", 144, 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_81_Template_ng_select_ngModelChange_110_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r173.nghealth = $event; })("focus", function TermLoanMasterComponent_ng_template_81_Template_ng_select_focus_110_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](111); const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r174.onFocus(_r125); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, TermLoanMasterComponent_ng_template_81_ng_option_112_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "label", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Health Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, TermLoanMasterComponent_ng_template_81_div_117_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "ng-select", 147, 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_81_Template_ng_select_ngModelChange_122_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r175.ngAccountType = $event; })("change", function TermLoanMasterComponent_ng_template_81_Template_ng_select_change_122_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r176.directorShow($event); })("focus", function TermLoanMasterComponent_ng_template_81_Template_ng_select_focus_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](123); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r177.onFocus(_r128); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, TermLoanMasterComponent_ng_template_81_ng_option_124_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "label", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Account Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, TermLoanMasterComponent_ng_template_81_div_129_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "ng-select", 150, 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_81_Template_ng_select_ngModelChange_133_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r178.ngdirectorType = $event; })("focus", function TermLoanMasterComponent_ng_template_81_Template_ng_select_focus_133_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](134); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r179.onFocus(_r131); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](135, TermLoanMasterComponent_ng_template_81_ng_option_135_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "label", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Director");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function TermLoanMasterComponent_ng_template_81_Template_input_keypress_141_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122 || $event.charCode <= 32 || $event.charCode == 46 || $event.charCode == 45 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Director Relation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "h6", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, " Registration:- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function TermLoanMasterComponent_ng_template_81_Template_input_keypress_151_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode >= 65 && $event.charCode <= 90; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](154, TermLoanMasterComponent_ng_template_81_div_154_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "input", 158, 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_81_Template_input_ngModelChange_158_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r182.ngredate = $event; })("keydown.Tab", function TermLoanMasterComponent_ng_template_81_Template_input_keydown_Tab_158_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](159); return _r134.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "label", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function TermLoanMasterComponent_ng_template_81_Template_input_keyup_165_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r184.getDecimal($event); })("focusout", function TermLoanMasterComponent_ng_template_81_Template_input_focusout_165_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r185.getDecimalPoint($event); })("keypress", function TermLoanMasterComponent_ng_template_81_Template_input_keypress_165_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); return $event.charCode >= 48 && $event.charCode < 58; })("focusout", function TermLoanMasterComponent_ng_template_81_Template_input_focusout_165_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r187.getDecimalPoint($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "label", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](168, TermLoanMasterComponent_ng_template_81_div_168_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "h6", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Resolution Details:- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_81_Template_input_ngModelChange_181_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r188.ngresodate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_81_Template_button_click_186_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r189.switchNgBTab("address"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](134);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.sanctionAutho)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](59, _c2, ctx_r11.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.sanction);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["AC_AUTHORITY"].invalid && (ctx_r11.angForm.controls["AC_AUTHORITY"].dirty || ctx_r11.angForm.controls["AC_AUTHORITY"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.recomBy)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](61, _c2, ctx_r11.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.Recommended);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["AC_RECOMMEND_BY"].invalid && (ctx_r11.angForm.controls["AC_RECOMMEND_BY"].dirty || ctx_r11.angForm.controls["AC_RECOMMEND_BY"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.recovery)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](63, _c2, ctx_r11.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.Recovery);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["AC_RECOVERY_CLERK"].invalid && (ctx_r11.angForm.controls["AC_RECOVERY_CLERK"].dirty || ctx_r11.angForm.controls["AC_RECOVERY_CLERK"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.idp)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](65, _c2, ctx_r11.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["AC_PRIORITY"].invalid && (ctx_r11.angForm.controls["AC_PRIORITY"].dirty || ctx_r11.angForm.controls["AC_PRIORITY"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.weakerSec)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](67, _c2, ctx_r11.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.weaker);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["AC_WEAKER"].invalid && (ctx_r11.angForm.controls["AC_WEAKER"].dirty || ctx_r11.angForm.controls["AC_WEAKER"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.ngpurpose)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](69, _c2, ctx_r11.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.purpose);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["AC_PURPOSE"].invalid && (ctx_r11.angForm.controls["AC_PURPOSE"].dirty || ctx_r11.angForm.controls["AC_PURPOSE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.ngindustry)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](71, _c2, ctx_r11.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["AC_INDUSTRY"].invalid && (ctx_r11.angForm.controls["AC_INDUSTRY"].dirty || ctx_r11.angForm.controls["AC_INDUSTRY"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.nghealth)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](73, _c2, ctx_r11.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.health);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["AC_HEALTH"].invalid && (ctx_r11.angForm.controls["AC_HEALTH"].dirty || ctx_r11.angForm.controls["AC_HEALTH"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.ngAccountType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](75, _c2, ctx_r11.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.account);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["AC_RELATION_TYPE"].invalid && (ctx_r11.angForm.controls["AC_RELATION_TYPE"].dirty || ctx_r11.angForm.controls["AC_RELATION_TYPE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.ngdirectorType)("disabled", _r131)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.director);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["AC_COREG_NO"].invalid && (ctx_r11.angForm.controls["AC_COREG_NO"].dirty || ctx_r11.angForm.controls["AC_COREG_NO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.ngredate)("maxDate", ctx_r11.maxDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](77, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r11.AC_COREG_AMT != null ? ctx_r11.AC_COREG_AMT.toFixed(2) : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.angForm.controls["AC_COREG_AMT"].invalid && (ctx_r11.angForm.controls["AC_COREG_AMT"].dirty || ctx_r11.angForm.controls["AC_COREG_AMT"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxDate", ctx_r11.maxDate)("ngModel", ctx_r11.ngresodate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](78, _c1));
} }
function TermLoanMasterComponent_ng_template_83_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_83_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_83_div_14_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r190.angForm.controls["AC_HONO"].errors == null ? null : ctx_r190.angForm.controls["AC_HONO"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_83_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_83_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_83_div_21_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r191.angForm.controls["AC_WARD"].errors == null ? null : ctx_r191.angForm.controls["AC_WARD"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_83_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_83_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_83_div_28_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r192.angForm.controls["AC_GALLI"].errors == null ? null : ctx_r192.angForm.controls["AC_GALLI"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_83_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_83_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_83_div_35_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r193.angForm.controls["AC_AREA"].errors == null ? null : ctx_r193.angForm.controls["AC_AREA"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_83_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_83_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_83_div_42_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r194.angForm.controls["AC_ADDR"].errors == null ? null : ctx_r194.angForm.controls["AC_ADDR"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_83_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_83_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_83_div_56_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r195.angForm.controls["AC_PIN"].errors == null ? null : ctx_r195.angForm.controls["AC_PIN"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_83_ng_container_86_div_8_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r203.angForm.controls["AC_THONO"].errors == null ? null : ctx_r203.angForm.controls["AC_THONO"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_83_ng_container_86_div_15_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r204.angForm.controls["AC_TWARD"].errors == null ? null : ctx_r204.angForm.controls["AC_TWARD"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_83_ng_container_86_div_22_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r205.angForm.controls["AC_TGALLI"].errors == null ? null : ctx_r205.angForm.controls["AC_TGALLI"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_83_ng_container_86_div_29_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r206.angForm.controls["AC_TAREA"].errors == null ? null : ctx_r206.angForm.controls["AC_TAREA"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_83_ng_container_86_div_36_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r207.angForm.controls["AC_TADDR"].errors == null ? null : ctx_r207.angForm.controls["AC_TADDR"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_ng_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r216 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r216);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r216.CITY_NAME, "");
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_83_ng_container_86_div_52_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r210.angForm.controls["AC_TPIN"].errors == null ? null : ctx_r210.angForm.controls["AC_TPIN"].errors.pattern) || (ctx_r210.angForm.controls["AC_TPIN"].errors == null ? null : ctx_r210.angForm.controls["AC_TPIN"].errors.minlength) || (ctx_r210.angForm.controls["AC_TPIN"].errors == null ? null : ctx_r210.angForm.controls["AC_TPIN"].errors.maxlength));
} }
function TermLoanMasterComponent_ng_template_83_ng_container_86_Template(rf, ctx) { if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TermLoanMasterComponent_ng_template_83_ng_container_86_div_8_Template, 2, 1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TermLoanMasterComponent_ng_template_83_ng_container_86_div_15_Template, 2, 1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, TermLoanMasterComponent_ng_template_83_ng_container_86_div_22_Template, 2, 1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, TermLoanMasterComponent_ng_template_83_ng_container_86_div_29_Template, 2, 1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, TermLoanMasterComponent_ng_template_83_ng_container_86_div_36_Template, 2, 1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ng-select", 201, 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_83_ng_container_86_Template_ng_select_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r219); const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r218.ngCity = $event; })("focus", function TermLoanMasterComponent_ng_template_83_ng_container_86_Template_ng_select_focus_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r219); const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42); const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r220.onFocus(_r208); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, TermLoanMasterComponent_ng_template_83_ng_container_86_ng_option_43_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function TermLoanMasterComponent_ng_template_83_ng_container_86_Template_input_keypress_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r219); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, TermLoanMasterComponent_ng_template_83_ng_container_86_div_52_Template, 2, 1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r196.angForm.controls["AC_THONO"].invalid && (ctx_r196.angForm.controls["AC_THONO"].dirty || ctx_r196.angForm.controls["AC_THONO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r196.angForm.controls["AC_TWARD"].invalid && (ctx_r196.angForm.controls["AC_TWARD"].dirty || ctx_r196.angForm.controls["AC_TWARD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r196.angForm.controls["AC_TGALLI"].invalid && (ctx_r196.angForm.controls["AC_TGALLI"].dirty || ctx_r196.angForm.controls["AC_TGALLI"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r196.angForm.controls["AC_TAREA"].invalid && (ctx_r196.angForm.controls["AC_TAREA"].dirty || ctx_r196.angForm.controls["AC_TAREA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r196.angForm.controls["AC_TADDR"].invalid && (ctx_r196.angForm.controls["AC_TADDR"].dirty || ctx_r196.angForm.controls["AC_TADDR"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r196.ngCity)("selectOnTab", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c2, ctx_r196.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r196.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r196.angForm.controls["AC_TPIN"].invalid && (ctx_r196.angForm.controls["AC_TPIN"].dirty || ctx_r196.angForm.controls["AC_TPIN"].touched));
} }
function TermLoanMasterComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " --------- Permanent Address --------- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TermLoanMasterComponent_ng_template_83_div_14_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TermLoanMasterComponent_ng_template_83_div_21_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, TermLoanMasterComponent_ng_template_83_div_28_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, TermLoanMasterComponent_ng_template_83_div_35_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, TermLoanMasterComponent_ng_template_83_div_42_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, TermLoanMasterComponent_ng_template_83_div_56_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Residential Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h6", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " --------- Temporory Address --------- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_83_Template_input_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r223); const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r222.tempAsPermanent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "label", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Is Temporory Address same as Permanent Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, TermLoanMasterComponent_ng_template_83_ng_container_86_Template, 53, 12, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_83_Template_button_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r223); const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r224.switchNgBTab("security"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.angForm.controls["AC_HONO"].invalid && (ctx_r12.angForm.controls["AC_HONO"].dirty || ctx_r12.angForm.controls["AC_HONO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.angForm.controls["AC_WARD"].invalid && (ctx_r12.angForm.controls["AC_WARD"].dirty || ctx_r12.angForm.controls["AC_WARD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.angForm.controls["AC_GALLI"].invalid && (ctx_r12.angForm.controls["AC_GALLI"].dirty || ctx_r12.angForm.controls["AC_GALLI"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.angForm.controls["AC_AREA"].invalid && (ctx_r12.angForm.controls["AC_AREA"].dirty || ctx_r12.angForm.controls["AC_AREA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.angForm.controls["AC_ADDR"].invalid && (ctx_r12.angForm.controls["AC_ADDR"].dirty || ctx_r12.angForm.controls["AC_ADDR"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.angForm.controls["AC_PIN"].invalid && (ctx_r12.angForm.controls["AC_PIN"].dirty || ctx_r12.angForm.controls["AC_PIN"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.tempAddress);
} }
function TermLoanMasterComponent_ng_template_85_ng_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r246 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r246);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r246.label, "");
} }
function TermLoanMasterComponent_ng_template_85_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_85_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r248); const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r247.addField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_85_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_85_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r250); const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r249.updateField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_85_tbody_35_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_85_tbody_35_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r255); const indexOfelement_r253 = ctx.index; const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r254.delField(indexOfelement_r253); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_85_tbody_35_tr_1_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r255); const data_r252 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38); const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); _r230.show(); return ctx_r256.showSecurity(data_r252.SECURITY_CODE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r252 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r252.SECURITY_CODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r252.SECU_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r252.SECURITY_VALUE);
} }
function TermLoanMasterComponent_ng_template_85_tbody_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_85_tbody_35_tr_1_Template, 11, 3, "tr", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r228.multiSecurity);
} }
function TermLoanMasterComponent_ng_template_85_tbody_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_85_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    const _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-book-debts", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newbookEvent", function TermLoanMasterComponent_ng_template_85_ng_container_47_Template_app_book_debts_newbookEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r258); const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r257.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r231.getschemename)("scheme", ctx_r231.code)("Accountno", ctx_r231.accountedit)("sec_code", ctx_r231.ngsecurityCode)("branchCode", ctx_r231.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    const _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-customer-insurance", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newcustomerInsuranceEvent", function TermLoanMasterComponent_ng_template_85_ng_container_48_Template_app_customer_insurance_newcustomerInsuranceEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r260); const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r259.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r232.getschemename)("scheme", ctx_r232.code)("Accountno", ctx_r232.accountedit)("sec_code", ctx_r232.ngsecurityCode)("branchCode", ctx_r232.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    const _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-fire-policy", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newfirePolicyEvent", function TermLoanMasterComponent_ng_template_85_ng_container_49_Template_app_fire_policy_newfirePolicyEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r262); const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r261.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r233.getschemename)("scheme", ctx_r233.code)("Accountno", ctx_r233.accountedit)("sec_code", ctx_r233.ngsecurityCode)("branchCode", ctx_r233.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-furniture-and-fixture", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newfurnitureFixEvent", function TermLoanMasterComponent_ng_template_85_ng_container_50_Template_app_furniture_and_fixture_newfurnitureFixEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r264); const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r263.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r234.getschemename)("scheme", ctx_r234.code)("Accountno", ctx_r234.accountedit)("sec_code", ctx_r234.ngsecurityCode)("branchCode", ctx_r234.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    const _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-gold-and-silver", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newGoldsilverEvent", function TermLoanMasterComponent_ng_template_85_ng_container_51_Template_app_gold_and_silver_newGoldsilverEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r266); const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r265.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r235.getschemename)("scheme", ctx_r235.code)("Accountno", ctx_r235.accountedit)("sec_code", ctx_r235.ngsecurityCode)("branchCode", ctx_r235.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    const _r268 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-govt-security-and-lic", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newgovtSecurityEvent", function TermLoanMasterComponent_ng_template_85_ng_container_52_Template_app_govt_security_and_lic_newgovtSecurityEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r268); const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r267.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r236.getschemename)("scheme", ctx_r236.code)("Accountno", ctx_r236.accountedit)("sec_code", ctx_r236.ngsecurityCode)("branchCode", ctx_r236.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    const _r270 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-land-and-buildings", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newLandBuldingEvent", function TermLoanMasterComponent_ng_template_85_ng_container_53_Template_app_land_and_buildings_newLandBuldingEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r270); const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r269.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r237.getschemename)("scheme", ctx_r237.code)("Accountno", ctx_r237.accountedit)("sec_code", ctx_r237.ngsecurityCode)("branchCode", ctx_r237.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    const _r272 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-market-shares", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newmarketShareEvent", function TermLoanMasterComponent_ng_template_85_ng_container_54_Template_app_market_shares_newmarketShareEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r272); const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r271.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r238.getschemename)("scheme", ctx_r238.code)("Accountno", ctx_r238.accountedit)("sec_code", ctx_r238.ngsecurityCode)("branchCode", ctx_r238.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    const _r274 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-other-security", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newOtherSecurityEvent", function TermLoanMasterComponent_ng_template_85_ng_container_55_Template_app_other_security_newOtherSecurityEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r274); const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r273.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r239.getschemename)("scheme", ctx_r239.code)("Accountno", ctx_r239.accountedit)("sec_code", ctx_r239.ngsecurityCode)("branchCode", ctx_r239.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    const _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-own-deposits", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newOwnDepositEvent", function TermLoanMasterComponent_ng_template_85_ng_container_56_Template_app_own_deposits_newOwnDepositEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r276); const ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r275.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r240.getschemename)("scheme", ctx_r240.code)("Accountno", ctx_r240.accountedit)("sec_code", ctx_r240.ngsecurityCode)("branchCode", ctx_r240.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-plant-and-machinery", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newPlantandMachiEvent", function TermLoanMasterComponent_ng_template_85_ng_container_57_Template_app_plant_and_machinery_newPlantandMachiEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r278); const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r277.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r241.getschemename)("scheme", ctx_r241.code)("Accountno", ctx_r241.accountedit)("sec_code", ctx_r241.ngsecurityCode)("branchCode", ctx_r241.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    const _r280 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-pleadge-stock", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newPleadgeEvent", function TermLoanMasterComponent_ng_template_85_ng_container_58_Template_app_pleadge_stock_newPleadgeEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r280); const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r279.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r242.getschemename)("scheme", ctx_r242.code)("Accountno", ctx_r242.accountedit)("sec_code", ctx_r242.ngsecurityCode)("branchCode", ctx_r242.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    const _r282 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-stock-statement", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newStockEvent", function TermLoanMasterComponent_ng_template_85_ng_container_59_Template_app_stock_statement_newStockEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r282); const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r281.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r243.getschemename)("scheme", ctx_r243.code)("Accountno", ctx_r243.accountedit)("sec_code", ctx_r243.ngsecurityCode)("branchCode", ctx_r243.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    const _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-vehicle", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newVehicalEvent", function TermLoanMasterComponent_ng_template_85_ng_container_60_Template_app_vehicle_newVehicalEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r284); const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r283.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("AC_ACNOTYPE", ctx_r244.getschemename)("scheme", ctx_r244.code)("Accountno", ctx_r244.accountedit)("sec_code", ctx_r244.ngsecurityCode)("branchCode", ctx_r244.ngBranchCode);
} }
function TermLoanMasterComponent_ng_template_85_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_85_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_85_div_71_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r245.angForm.controls["AC_REMARK"].errors == null ? null : ctx_r245.angForm.controls["AC_REMARK"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_85_Template(rf, ctx) { if (rf & 1) {
    const _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ng-select", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_85_Template_ng_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r287); const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r286.ngsecurityCode = $event; })("change", function TermLoanMasterComponent_ng_template_85_Template_ng_select_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r287); const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r288.securityDetails($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TermLoanMasterComponent_ng_template_85_ng_option_8_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Security Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function TermLoanMasterComponent_ng_template_85_Template_input_keyup_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r287); const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r289.getDecimal($event); })("focusout", function TermLoanMasterComponent_ng_template_85_Template_input_focusout_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r287); const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r290.getDecimalPoint($event); })("keypress", function TermLoanMasterComponent_ng_template_85_Template_input_keypress_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r287); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; })("focusout", function TermLoanMasterComponent_ng_template_85_Template_input_focusout_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r287); const ctx_r292 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r292.getDecimalPoint($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Total Security Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TermLoanMasterComponent_ng_template_85_button_18_Template, 2, 0, "button", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, TermLoanMasterComponent_ng_template_85_button_19_Template, 2, 0, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Security amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Add Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, TermLoanMasterComponent_ng_template_85_tbody_35_Template, 2, 1, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, TermLoanMasterComponent_ng_template_85_tbody_36_Template, 4, 0, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "app-modal-basic", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_85_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r287); const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38); return _r230.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "perfect-scrollbar", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, TermLoanMasterComponent_ng_template_85_ng_container_47_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, TermLoanMasterComponent_ng_template_85_ng_container_48_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, TermLoanMasterComponent_ng_template_85_ng_container_49_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, TermLoanMasterComponent_ng_template_85_ng_container_50_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, TermLoanMasterComponent_ng_template_85_ng_container_51_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, TermLoanMasterComponent_ng_template_85_ng_container_52_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, TermLoanMasterComponent_ng_template_85_ng_container_53_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, TermLoanMasterComponent_ng_template_85_ng_container_54_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, TermLoanMasterComponent_ng_template_85_ng_container_55_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, TermLoanMasterComponent_ng_template_85_ng_container_56_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, TermLoanMasterComponent_ng_template_85_ng_container_57_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, TermLoanMasterComponent_ng_template_85_ng_container_58_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, TermLoanMasterComponent_ng_template_85_ng_container_59_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, TermLoanMasterComponent_ng_template_85_ng_container_60_Template, 2, 5, "ng-container", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_85_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r287); const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38); return _r230.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Remark");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, TermLoanMasterComponent_ng_template_85_div_71_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_85_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r287); const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r295.switchNgBTab("guarantor"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r13.ngsecurityCode)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c2, ctx_r13.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.security);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r13.SECURITY_VALUE != null ? ctx_r13.SECURITY_VALUE.toFixed(2) : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.addShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.UpdateShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r13.multiSecurity == null ? null : ctx_r13.multiSecurity.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r13.multiSecurity == null ? null : ctx_r13.multiSecurity.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dialogClass", "modal-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.BOOK_DEBTS);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.CUST_INSURANCE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.FIRE_POLICY);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.FURNITURE_FIXTURE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.GOLD_SILVER);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.GOVT_SECU_LIC);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.LAND_BUILDING);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.MARKET_SHARE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.OTHER_SECURITY);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.OWN_DEPOSIT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.PLANT_MACHINARY);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.PLEDGE_STOCK);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.STOCK_STATEMENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.VEHICLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c2, ctx_r13.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.angForm.controls["AC_REMARK"].invalid && (ctx_r13.angForm.controls["AC_REMARK"].dirty || ctx_r13.angForm.controls["AC_REMARK"].touched));
} }
function TermLoanMasterComponent_ng_template_87_div_14_ng_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r305 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r305);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r305.label, "");
} }
function TermLoanMasterComponent_ng_template_87_div_14_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_87_div_14_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_87_div_14_div_12_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r301.angForm.controls["GAC_CUSTID"].errors == null ? null : ctx_r301.angForm.controls["GAC_CUSTID"].errors.required);
} }
function TermLoanMasterComponent_ng_template_87_div_14_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r308 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_87_div_14_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r308); const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r307.addGuarantor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Guarantor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_87_div_14_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r310 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_87_div_14_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r310); const ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r309.updateGuarantor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_87_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r312 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ng-select", 241, 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_87_div_14_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r312); const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r311.Gid = $event; })("change", function TermLoanMasterComponent_ng_template_87_div_14_Template_ng_select_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r312); const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r313.getgCustomer(ctx_r313.Gid); })("focus", function TermLoanMasterComponent_ng_template_87_div_14_Template_ng_select_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r312); const _r299 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r314.onFocus(_r299); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TermLoanMasterComponent_ng_template_87_div_14_ng_option_7_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TermLoanMasterComponent_ng_template_87_div_14_div_12_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Member Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Member Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 250, 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.Tab", function TermLoanMasterComponent_ng_template_87_div_14_Template_input_keydown_Tab_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r312); const _r302 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](36); return _r302.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, TermLoanMasterComponent_ng_template_87_div_14_button_40_Template, 2, 0, "button", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, TermLoanMasterComponent_ng_template_87_div_14_button_41_Template, 2, 0, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r296.Gid)("virtualScroll", true)("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r296.GCust_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r296.angForm.controls["GAC_CUSTID"].invalid && (ctx_r296.angForm.controls["GAC_CUSTID"].dirty || ctx_r296.angForm.controls["GAC_CUSTID"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1))("minDate", ctx_r296.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r296.GuarantorShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r296.GuarantorUpdateShow);
} }
function TermLoanMasterComponent_ng_template_87_tbody_32_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r320 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_87_tbody_32_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r320); const indexOfelement_r318 = ctx.index; const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r319.editGuarantor(indexOfelement_r318); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_87_tbody_32_tr_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r320); const indexOfelement_r318 = ctx.index; const ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r321.delGuarantor(indexOfelement_r318); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r317 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", data_r317.GAC_CUSTID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r317.AC_MEMBNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", data_r317.AC_MEMBTYPE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r317.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r317.EXP_DATE);
} }
function TermLoanMasterComponent_ng_template_87_tbody_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_87_tbody_32_tr_1_Template, 15, 5, "tr", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r297.multiGuarantor);
} }
function TermLoanMasterComponent_ng_template_87_tbody_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { isActive: a0 }; };
function TermLoanMasterComponent_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    const _r323 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_87_Template_input_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r323); const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r322.clickguarantor($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Guarantor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TermLoanMasterComponent_ng_template_87_div_14_Template, 42, 10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "table", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Customer Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Member Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Member Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, TermLoanMasterComponent_ng_template_87_tbody_32_Template, 2, 1, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, TermLoanMasterComponent_ng_template_87_tbody_33_Template, 4, 0, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_87_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r323); const ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r324.switchNgBTab("coborrower"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c3, ctx_r14.GuarantorTrue));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.GuarantorTrue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r14.multiGuarantor == null ? null : ctx_r14.multiGuarantor.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r14.multiGuarantor == null ? null : ctx_r14.multiGuarantor.length) == 0);
} }
function TermLoanMasterComponent_ng_template_89_div_14_ng_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r334 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r334);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r334.label, "");
} }
function TermLoanMasterComponent_ng_template_89_div_14_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_89_div_14_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_89_div_14_div_12_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r330.angForm.controls["CAC_CUSTID"].errors == null ? null : ctx_r330.angForm.controls["CAC_CUSTID"].errors.required);
} }
function TermLoanMasterComponent_ng_template_89_div_14_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_89_div_14_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_89_div_14_div_21_div_1_Template, 2, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r331.angForm.controls["CAC_NAME"].errors == null ? null : ctx_r331.angForm.controls["CAC_NAME"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_89_div_14_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_89_div_14_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r338); const ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r337.addCoBorrower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add CoBorrower ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_89_div_14_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r340 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_89_div_14_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r340); const ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r339.updateCoBorrower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_89_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ng-select", 256, 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_89_div_14_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r342); const ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r341.Cid = $event; })("change", function TermLoanMasterComponent_ng_template_89_div_14_Template_ng_select_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r342); const ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r343.getCCustomer(ctx_r343.Cid); })("focus", function TermLoanMasterComponent_ng_template_89_div_14_Template_ng_select_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r342); const _r328 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); const ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r344.onFocus(_r328); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TermLoanMasterComponent_ng_template_89_div_14_ng_option_7_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TermLoanMasterComponent_ng_template_89_div_14_div_12_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TermLoanMasterComponent_ng_template_89_div_14_div_21_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, TermLoanMasterComponent_ng_template_89_div_14_button_23_Template, 2, 0, "button", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, TermLoanMasterComponent_ng_template_89_div_14_button_24_Template, 2, 0, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r325.Cid)("virtualScroll", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c2, ctx_r325.formSubmitted))("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r325.CCust_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r325.angForm.controls["CAC_CUSTID"].invalid && (ctx_r325.angForm.controls["CAC_CUSTID"].dirty || ctx_r325.angForm.controls["CAC_CUSTID"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r325.angForm.controls["CAC_NAME"].invalid && (ctx_r325.angForm.controls["CAC_NAME"].dirty || ctx_r325.angForm.controls["CAC_NAME"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r325.CoBorrowerShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r325.CoBorrowerUpdateShow);
} }
function TermLoanMasterComponent_ng_template_89_tbody_26_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_89_tbody_26_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r349); const indexOfelement_r347 = ctx.index; const ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r348.editCoBorrower(indexOfelement_r347); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_89_tbody_26_tr_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r349); const indexOfelement_r347 = ctx.index; const ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r350.delCoBorrower(indexOfelement_r347); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r346 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", data_r346.CAC_CUSTID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r346.AC_NAME);
} }
function TermLoanMasterComponent_ng_template_89_tbody_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_89_tbody_26_tr_1_Template, 9, 2, "tr", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r326.multiCoBorrower);
} }
function TermLoanMasterComponent_ng_template_89_tbody_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_89_Template(rf, ctx) { if (rf & 1) {
    const _r352 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_89_Template_input_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r352); const ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r351.clickCoBorrower($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "CoBorrower");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TermLoanMasterComponent_ng_template_89_div_14_Template, 25, 11, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "table", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Customer Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, TermLoanMasterComponent_ng_template_89_tbody_26_Template, 2, 1, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, TermLoanMasterComponent_ng_template_89_tbody_27_Template, 4, 0, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_89_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r352); const ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r353.switchNgBTab("document"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c3, ctx_r15.CoBorrowerTrue));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.CoBorrowerTrue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r15.multiCoBorrower == null ? null : ctx_r15.multiCoBorrower.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r15.multiCoBorrower == null ? null : ctx_r15.multiCoBorrower.length) == 0);
} }
function TermLoanMasterComponent_ng_template_91_tbody_18_tr_1_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 272);
} }
function TermLoanMasterComponent_ng_template_91_tbody_18_tr_1_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 273);
} }
function TermLoanMasterComponent_ng_template_91_tbody_18_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r372 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TermLoanMasterComponent_ng_template_91_tbody_18_tr_1_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r372); const indexOfelement_r368 = ctx.index; const data_r367 = ctx.$implicit; const ctx_r371 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r371.fileChangeEvent($event, indexOfelement_r368, data_r367.DOCUMENT_CODE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_91_tbody_18_tr_1_Template_span_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r372); const data_r367 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r356 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); const ctx_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); _r356.show(); return ctx_r373.viewImagePreview($event, data_r367.DOCUMENT_CODE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TermLoanMasterComponent_ng_template_91_tbody_18_tr_1_span_17_Template, 1, 0, "span", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, TermLoanMasterComponent_ng_template_91_tbody_18_tr_1_span_19_Template, 1, 0, "span", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r367 = ctx.$implicit;
    const indexOfelement_r368 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](indexOfelement_r368 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r367.schemeDocumentMaster == null ? null : data_r367.schemeDocumentMaster.NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "file" + indexOfelement_r368);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r367.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !data_r367.status);
} }
function TermLoanMasterComponent_ng_template_91_tbody_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_91_tbody_18_tr_1_Template, 20, 5, "tr", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r354.customerDoc);
} }
function TermLoanMasterComponent_ng_template_91_tbody_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_91_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "embed", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r357.urlMap, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
function TermLoanMasterComponent_ng_template_91_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No File For Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_91_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r375 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_91_button_37_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r375); const ctx_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r374.submit($event); })("keydown.Tab", function TermLoanMasterComponent_ng_template_91_button_37_Template_button_keydown_Tab_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r375); const ctx_r376 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r376.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_91_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r378 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_91_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r378); const ctx_r377 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r377.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_91_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r380 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_91_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r380); const ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r379.addNewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_91_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r382 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_91_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r382); const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r381.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_91_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r384 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_91_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r384); const ctx_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r383.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_91_button_45_Template(rf, ctx) { if (rf & 1) {
    const _r386 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_91_button_45_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r386); const ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r385.Approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_91_button_46_Template(rf, ctx) { if (rf & 1) {
    const _r388 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_91_button_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r388); const ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r387.unApprove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Unapprove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_91_Template(rf, ctx) { if (rf & 1) {
    const _r390 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Upload Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "View Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Is Linked Document Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TermLoanMasterComponent_ng_template_91_tbody_18_Template, 2, 1, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, TermLoanMasterComponent_ng_template_91_tbody_19_Template, 4, 0, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "app-modal-basic", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_91_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r390); const _r356 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return _r356.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, TermLoanMasterComponent_ng_template_91_div_30_Template, 2, 1, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, TermLoanMasterComponent_ng_template_91_p_31_Template, 2, 0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_91_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r390); const _r356 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return _r356.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, TermLoanMasterComponent_ng_template_91_button_37_Template, 2, 0, "button", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, TermLoanMasterComponent_ng_template_91_button_38_Template, 2, 0, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, TermLoanMasterComponent_ng_template_91_button_39_Template, 2, 0, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, TermLoanMasterComponent_ng_template_91_button_41_Template, 2, 0, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, TermLoanMasterComponent_ng_template_91_button_43_Template, 2, 0, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, TermLoanMasterComponent_ng_template_91_button_45_Template, 2, 0, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, TermLoanMasterComponent_ng_template_91_button_46_Template, 2, 0, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r16.customerDoc == null ? null : ctx_r16.customerDoc.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r16.customerDoc == null ? null : ctx_r16.customerDoc.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dialogClass", "modal-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.isImgPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r16.isImgPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.showButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.approveShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.newbtnShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.updateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.rejectShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.approveShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.unapproveShow);
} }
function TermLoanMasterComponent_div_92_tbody_8_tr_1_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r401 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_div_92_tbody_8_tr_1_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r401); const data_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); ctx_r399.editClickHandler(data_r396.id, 0); return ctx_r399.gotoTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_div_92_tbody_8_tr_1_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r404 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_div_92_tbody_8_tr_1_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r404); const data_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); ctx_r402.disableForm(data_r396.id); return ctx_r402.gotoTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_div_92_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TermLoanMasterComponent_div_92_tbody_8_tr_1_span_2_Template, 1, 0, "span", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TermLoanMasterComponent_div_92_tbody_8_tr_1_span_3_Template, 1, 0, "span", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r396 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !data_r396.SYSCHNG_LOGIN);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r396.SYSCHNG_LOGIN);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.AC_TYPE === "" || data_r396.AC_TYPE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.AC_TYPE === "" || data_r396.AC_TYPE == null ? "-" : data_r396.LNCCMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.BANKACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.BANKACNO === "" ? "-" : data_r396.BANKACNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.AC_CUSTID === "" ? "-" : data_r396.AC_CUSTID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.AC_NAME === "" ? "-" : data_r396.AC_NAME, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.AC_OPDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.AC_OPDATE === "" ? "-" : data_r396.AC_OPDATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.AC_OPEN_OLD_DATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.AC_OPEN_OLD_DATE === "" ? "-" : data_r396.AC_OPEN_OLD_DATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.REF_ACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.REF_ACNO === "" ? "-" : data_r396.REF_ACNO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (data_r396.idmaster.custAddress[0] == null ? null : data_r396.idmaster.custAddress[0].AC_ADDR) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r396.idmaster.custAddress[0] == null ? null : data_r396.idmaster.custAddress[0].AC_ADDR) === "" ? "-" : data_r396.idmaster.custAddress[0] == null ? null : data_r396.idmaster.custAddress[0].AC_ADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (data_r396.idmaster.custAddress[0] == null ? null : data_r396.idmaster.custAddress[0].city == null ? null : data_r396.idmaster.custAddress[0].city.CITY_NAME) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r396.idmaster.custAddress[0] == null ? null : data_r396.idmaster.custAddress[0].city == null ? null : data_r396.idmaster.custAddress[0].city.CITY_NAME) === "" ? "-" : data_r396.idmaster.custAddress[0] == null ? null : data_r396.idmaster.custAddress[0].city == null ? null : data_r396.idmaster.custAddress[0].city.CITY_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.AC_SANCTION_DATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.AC_SANCTION_DATE === "" ? "-" : data_r396.AC_SANCTION_DATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.AC_MONTHS === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.AC_MONTHS === "" ? "-" : data_r396.AC_MONTHS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.AC_EXPIRE_DATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.AC_EXPIRE_DATE === "" ? "-" : data_r396.AC_EXPIRE_DATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.AC_SANCTION_AMOUNT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.AC_SANCTION_AMOUNT === "" ? "-" : data_r396.AC_SANCTION_AMOUNT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.AC_DRAWPOWER_AMT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.AC_DRAWPOWER_AMT === "" ? "-" : data_r396.AC_DRAWPOWER_AMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.AC_INTRATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.AC_INTRATE === "" ? "-" : data_r396.AC_INTRATE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r396.AC_INSTALLMENT === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r396.AC_INSTALLMENT === "" ? "-" : data_r396.AC_INSTALLMENT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (data_r396.authority == null ? null : data_r396.authority.NAME) === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r396.authority == null ? null : data_r396.authority.NAME) === "" ? "-" : data_r396.authority == null ? null : data_r396.authority.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (data_r396.purpose == null ? null : data_r396.purpose.NAME) === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r396.purpose == null ? null : data_r396.purpose.NAME) === "" ? "-" : data_r396.purpose == null ? null : data_r396.purpose.NAME, "");
} }
function TermLoanMasterComponent_div_92_tbody_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_div_92_tbody_8_tr_1_Template, 40, 38, "tr", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r392.termLoanMaster);
} }
function TermLoanMasterComponent_div_92_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TermLoanMasterComponent_div_92_tbody_8_Template, 2, 1, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TermLoanMasterComponent_div_92_tbody_9_Template, 4, 0, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tfoot", 280, 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 300);
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
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r17.dtExportButtonOptions)("dtTrigger", ctx_r17.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r17.termLoanMaster == null ? null : ctx_r17.termLoanMaster.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r17.termLoanMaster == null ? null : ctx_r17.termLoanMaster.length) == 0);
} }
// Handling datatable data
class DataTableResponse {
}
class TermLoanMasterComponent {
    constructor(http, termLoanService, customerIdService, fb, schemeCodeDropdownService, customerID, interstCate, repayModeService, installmentMethodService, authorityMasterDropdown, directorMasterDropdown, recoveryClearkMaster, prioritySector, weakerMaster, purposeMaster, industryMaster, healthMaster, cityMaster, accountType, securityMaster, InterestRateForLoanandCC, prioritySectorMaster, systemParameter, _TermLoanScheme, datePipe, _SecurityCode, el, router, config, sanitizer) {
        this.http = http;
        this.termLoanService = termLoanService;
        this.customerIdService = customerIdService;
        this.fb = fb;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.customerID = customerID;
        this.interstCate = interstCate;
        this.repayModeService = repayModeService;
        this.installmentMethodService = installmentMethodService;
        this.authorityMasterDropdown = authorityMasterDropdown;
        this.directorMasterDropdown = directorMasterDropdown;
        this.recoveryClearkMaster = recoveryClearkMaster;
        this.prioritySector = prioritySector;
        this.weakerMaster = weakerMaster;
        this.purposeMaster = purposeMaster;
        this.industryMaster = industryMaster;
        this.healthMaster = healthMaster;
        this.cityMaster = cityMaster;
        this.accountType = accountType;
        this.securityMaster = securityMaster;
        this.InterestRateForLoanandCC = InterestRateForLoanandCC;
        this.prioritySectorMaster = prioritySectorMaster;
        this.systemParameter = systemParameter;
        this._TermLoanScheme = _TermLoanScheme;
        this.datePipe = datePipe;
        this._SecurityCode = _SecurityCode;
        this.el = el;
        this.router = router;
        this.config = config;
        this.sanitizer = sanitizer;
        this.reloadTablePassing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formSubmitted = false;
        //api 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //Datatable variable
        this.dtExportButtonOptions = {};
        this.dtExportOptions = {};
        //variables for pagination
        this.page = 1;
        this.itemsPerPage = 10;
        this.currentJustify = 'start';
        this.active = 1;
        this.activeKeep = 1;
        // Variables for hide/show add and update button
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        //variable to get ID to update
        this.updateID = 0;
        //Scheme type variable
        this.schemeType = 'LN';
        //url to display document
        this.documentUrl = this.url + '/';
        //array of document of customer
        this.customerDoc = [];
        // Filter Variable
        this.filterData = {};
        // documentMaster: DocumentMaster[];
        this.id = '';
        this.Gid = null;
        this.Cid = null;
        this.idp = null;
        this.weakerSec = null;
        this.ngpurpose = null;
        this.ngindustry = null;
        this.nghealth = null;
        this.ngAccountType = null;
        this.ngdirectorType = null;
        this.visible = false;
        this.visibleAnimate = false;
        this.idi = '';
        this.code = '';
        this.columnShowButton = false;
        this.multiCoBorrower = [];
        this.CoBorrowerShowButton = true;
        this.CoBorrowerUpdateShow = false;
        this.multiGuarantor = [];
        this.GuarantorShowButton = true;
        this.GuarantorUpdateShow = false;
        this.tempAddress = true;
        this.GuarantorTrue = false;
        this.CoBorrowerTrue = false;
        this.addShowButton = true;
        this.UpdateShowButton = false;
        this.multiSecurity = [];
        this.AC_DIRECTOR = true;
        this.BOOK_DEBTS = false;
        this.CUST_INSURANCE = false;
        this.FIRE_POLICY = false;
        this.FURNITURE_FIXTURE = false;
        this.GOLD_SILVER = false;
        this.GOVT_SECU_LIC = false;
        this.LAND_BUILDING = false;
        this.MARKET_SHARE = false;
        this.OTHER_SECURITY = false;
        this.OWN_DEPOSIT = false;
        this.PLANT_MACHINARY = false;
        this.PLEDGE_STOCK = false;
        this.STOCK_STATEMENT = false;
        this.VEHICLE = false;
        this.bookid = [];
        this.insuranceid = [];
        this.firepolicyid = [];
        this.furnitureid = [];
        this.goldid = [];
        this.govtid = [];
        this.landid = [];
        this.marketid = [];
        this.otherid = [];
        this.ownid = [];
        this.plantid = [];
        this.pledgeid = [];
        this.stockid = [];
        this.vehicleid = [];
        this.AC_TYPE = false;
        this.sanctionAutho = null;
        this.recomBy = null;
        this.recovery = null;
        this.ngCity = null;
        this.ngsecurityCode = null;
        this.bsValue = new Date();
        this.DatatableHideShow = true;
        this.rejectShow = false;
        this.approveShow = false;
        this.unapproveShow = false;
        this.repayModeOption = this.repayModeService.getPLAYER_twoCharacters();
        this.installment = this.installmentMethodService.getPLAYER_TWOCharacters();
        this.account = this.accountType.getCharacters();
        this.selectedOption = 4;
        this.isDisabled = true;
        this.selectedCharacter = 4;
        this.timeLeft = 5;
        this.dataSub = null;
        this.imageObject = new Array();
        this.selectedImgArrayDetails = [];
        this.getschemename = 'LN';
        if (this.childMessage != undefined) {
            this.editClickHandler(this.childMessage, 1);
        }
        this.systemParameter.getFormData(1).subscribe(data => {
            this.maxDate = moment__WEBPACK_IMPORTED_MODULE_9__(data.CURRENT_DATE, 'DD/MM/YYYY');
            this.maxDate = this.maxDate._d;
            this.logDate = data.CURRENT_DATE;
        });
    }
    ngOnInit() {
        //Call CreateForm Function
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
                    .post(this.url + '/term-loan-master', dataTableParameters).subscribe(resp => {
                    this.termLoanMaster = resp.data;
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
                    title: 'Customer ID',
                    data: 'AC_CUSTID'
                },
                {
                    title: 'Name',
                    data: 'AC_NAME'
                },
                {
                    title: 'Opening Date',
                    data: 'AC_OPDATE'
                },
                {
                    title: 'Renewal Date',
                    data: 'AC_OPEN_OLD_DATE'
                },
                {
                    title: 'Manual Reference Number',
                    data: 'REF_ACNO'
                },
                {
                    title: 'Detail',
                    data: 'AC_ADDR'
                },
                {
                    title: 'City',
                    data: 'AC_CTCODE'
                },
                {
                    title: 'Sanction Date',
                    data: 'AC_SANCTION_DATE'
                },
                {
                    title: 'Period',
                    data: 'AC_MONTHS'
                },
                {
                    title: 'Expiry Date',
                    data: 'AC_EXPIRE_DATE'
                },
                {
                    title: 'Sanction Limit',
                    data: 'AC_SANCTION_AMOUNT'
                },
                {
                    title: 'Drawing Power',
                    data: 'AC_DRAWPOWER_AMT'
                },
                {
                    title: 'Interest Rate',
                    data: 'AC_INTRATE'
                },
                {
                    title: 'Installment',
                    data: 'AC_INSTALLMENT'
                },
                {
                    title: 'Sanction Authority',
                    data: 'AC_AUTHORITY'
                },
                {
                    title: 'Purpose',
                    data: 'AC_PURPOSE'
                }
            ],
            dom: 'Blrtip',
        };
        this.getSystemParaDate(); //function to set date
        this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.scheme = data;
            this.code = this.scheme[0].value;
            if (this.scheme[0].IS_WEEKLY_REPAY == '1') {
                this.angForm.controls['AC_MONTHS'].disable();
                this.repayModeOption.push({ value: 'W', label: 'Weekly' });
            }
        });
        this.customerID.getCustomerIDMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.Cust_ID = data;
            this.GCust_ID = data;
            this.CCust_ID = data;
        });
        this.interstCate.getIntrestCategoaryMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            // var allscheme = data.filter(function (schem) {
            //   return (schem.scheme == 'LN')
            // });
            this.intCat = data;
        });
        this.authorityMasterDropdown.getAuthorityMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.sanction = data;
        });
        this.directorMasterDropdown.getDirectorMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.Recommended = data;
        });
        this.directorMasterDropdown.getDirectorMastertrueList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.director = data;
        });
        this.recoveryClearkMaster.getRecoveryClearkMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.Recovery = data;
        });
        this.prioritySector.getPrioritySectorMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.priority = data;
        });
        this.weakerMaster.getWeakerMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.weaker = data;
        });
        this.purposeMaster.getPurposeMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.purpose = data;
        });
        this.industryMaster.getIndustaryMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.industry = data;
        });
        this.healthMaster.getHealthMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.health = data;
        });
        this.cityMaster.getcityList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.city = data;
        });
        this.securityMaster.getsecurityMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.security = data;
        });
        this.dataSub = this.repayModeService.loadCharacters().subscribe((options) => {
            this.characters = options;
        });
        this.dataSub = this.installmentMethodService.loadCharacters().subscribe((options) => {
            this.characters = options;
        });
        this.dataSub = this.accountType.loadCharacters().subscribe((options) => {
            this.characters = options;
        });
    }
    ;
    // Create form Method
    createForm() {
        this.angForm = this.fb.group({
            AC_CUSTID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            GAC_CUSTID: ['',],
            CAC_CUSTID: ['',],
            SECURITY_CODE: [''],
            SECURITY_VALUE: [''],
            IS_WEAKER: [''],
            AC_REMARK: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_ACNOTYPE: ['LN'],
            AC_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_NO: [''],
            AC_TITLE: [''],
            AC_NAME: [''],
            GAC_NAME: [''],
            CAC_NAME: [''],
            BANKACNO: [''],
            AC_OPDATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_OPEN_OLD_DATE: [''],
            AC_BIRTH_DT: [''],
            AC_IS_RECOVERY: [false],
            IS_AGGRI_LOAN: [false],
            AC_MEMBTYPE: [''],
            AC_MEMBNO: [''],
            REF_ACNO: [''],
            AC_CAST: [''],
            AC_OCODE: [''],
            AC_ADDFLAG: [true],
            AC_ADDTYPE: ['P'],
            AC_THONO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TWARD: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TADDR: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TGALLI: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TAREA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_TCTCODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_INTCATA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_SANCTION_AMOUNT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_SANCTION_DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_DRAWPOWER_AMT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_MONTHS: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_DAYS: [0],
            AC_EXPIRE_DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_INTRATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_REPAYMODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            INSTALLMENT_METHOD: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_INSTALLMENT: [''],
            AC_MORATORIUM_PERIOD: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_GRACE_PERIOD: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_AUTHORITY: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_RECOMMEND_BY: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_RECOVERY_CLERK: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_PRIORITY: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_PRIORITY_SUB1: [''],
            AC_PRIORITY_SUB2: [''],
            AC_PRIORITY_SUB3: [''],
            AC_WEAKER: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_PURPOSE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_INDUSTRY: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_HEALTH: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_RELATION_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_DIRECTOR: [''],
            AC_DIRECTOR_RELATION: [' '],
            AC_COREG_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_COREG_DATE: [''],
            AC_COREG_AMT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_RESO_NO: [''],
            AC_RESO_DATE: [''],
            AC_HONO: [''],
            AC_WARD: [''],
            AC_ADDR: [''],
            AC_GALLI: [''],
            AC_AREA: [''],
            AC_CTCODE: [''],
            AC_MOBNO: [''],
            AC_PHNO: [''],
            AC_EMAIL: [''],
            AC_PIN: [''],
            AC_TPIN: [''],
            EXP_DATE: [''],
            GAC_MEMBNO: [''],
            GAC_MEMBTYPE: [''],
        });
        this.angForm.enable();
    }
    getSchemeCode(value) {
        this.schemeCode = value.name;
    }
    // Method to insert data into database through NestJS
    submit(event) {
        this.formSubmitted = true;
        let formVal = this.angForm.value;
        if (this.angForm.valid) {
            let temdate;
            let opdate;
            let temredate;
            let date;
            let redate;
            let sanctiondate;
            let expirydate;
            let resodate;
            let schecode;
            if (formVal.AC_ADDFLAG == true) {
                this.addType = 'P';
            }
            else if (formVal.AC_ADDFLAG == false) {
                this.addType = 'T';
            }
            if (this.angForm.controls['AC_TCTCODE'].value == "") {
                formVal.AC_TCTCODE = 0;
            }
            if (this.tempopendate != this.openingDate) {
                temdate = (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == 'Invalid date' || formVal.AC_OPDATE == null || formVal.AC_OPDATE == undefined) ? opdate = '' : opdate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_OPDATE).format('DD/MM/YYYY');
            }
            else {
                temdate = this.openingDate;
            }
            if (this.tempopendate != this.ngredate) {
                temredate = (formVal.AC_COREG_DATE == '' || formVal.AC_COREG_DATE == 'Invalid date') ? date = '' : date = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_COREG_DATE).format('DD/MM/YYYY');
            }
            else {
                temredate = this.ngredate;
            }
            //get bank code and branch code from session
            let data = localStorage.getItem('user');
            let result = JSON.parse(data);
            let branchCode = result.branch.id;
            let bankCode = Number(result.branch.syspara.BANK_CODE);
            this.scheme.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (element.value == this.code) {
                    schecode = element.name;
                }
            }));
            var expiry;
            // if (this.tempexpiryDate != this.ngexpiry) {
            //   expiry = (this.ngexpiry == '' || this.ngexpiry == 'Invalid date') ? expiry = '' : expiry = moment(this.ngexpiry).format('DD/MM/YYYY')
            // } else {
            //   expiry = this.ngexpiry
            // }
            let toDate = moment__WEBPACK_IMPORTED_MODULE_9__(this.ngexpiry, 'DD/MM/YYYY');
            expiry = moment__WEBPACK_IMPORTED_MODULE_9__(toDate).format('DD/MM/YYYY');
            const dataToSend = {
                'branchCode': branchCode,
                'bankCode': bankCode,
                'schemeCode': schecode,
                'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
                'AC_TYPE': formVal.AC_TYPE,
                'AC_NO': formVal.AC_NO,
                'AC_NAME': formVal.AC_NAME,
                'AC_CUSTID': formVal.AC_CUSTID,
                'AC_OPDATE': temdate,
                'AC_OPEN_OLD_DATE': (formVal.AC_OPEN_OLD_DATE == '' || formVal.AC_OPEN_OLD_DATE == 'Invalid date' || formVal.AC_OPEN_OLD_DATE == null || formVal.AC_OPEN_OLD_DATE == undefined) ? redate = '' : redate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_OPEN_OLD_DATE).format('DD/MM/YYYY'),
                'REF_ACNO': formVal.REF_ACNO,
                'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
                'IS_AGGRI_LOAN': (formVal.IS_AGGRI_LOAN == true ? '1' : '0'),
                'AC_INTCATA': formVal.AC_INTCATA,
                'AC_SANCTION_AMOUNT': formVal.AC_SANCTION_AMOUNT,
                'AC_SANCTION_DATE': (formVal.AC_SANCTION_DATE == '' || formVal.AC_SANCTION_DATE == 'Invalid date') ? sanctiondate = '' : sanctiondate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_SANCTION_DATE).format('DD/MM/YYYY'),
                'AC_DRAWPOWER_AMT': formVal.AC_DRAWPOWER_AMT,
                'AC_MONTHS': formVal.AC_MONTHS,
                'AC_DAYS': formVal.AC_DAYS,
                'AC_EXPIRE_DATE': expiry,
                'AC_INTRATE': formVal.AC_INTRATE,
                'AC_REPAYMODE': formVal.AC_REPAYMODE,
                'INSTALLMENT_METHOD': formVal.INSTALLMENT_METHOD,
                'AC_INSTALLMENT': formVal.AC_INSTALLMENT,
                'AC_MORATORIUM_PERIOD': formVal.AC_MORATORIUM_PERIOD,
                'AC_GRACE_PERIOD': formVal.AC_GRACE_PERIOD,
                'AC_AUTHORITY': formVal.AC_AUTHORITY,
                'AC_RECOMMEND_BY': formVal.AC_RECOMMEND_BY,
                'AC_RECOVERY_CLERK': formVal.AC_RECOVERY_CLERK,
                'AC_PRIORITY': formVal.AC_PRIORITY,
                'AC_PRIORITY_SUB1': formVal.AC_PRIORITY_SUB1,
                'AC_PRIORITY_SUB2': formVal.AC_PRIORITY_SUB2,
                'AC_PRIORITY_SUB3': formVal.AC_PRIORITY_SUB3,
                'AC_WEAKER': formVal.AC_WEAKER,
                'AC_PURPOSE': formVal.AC_PURPOSE,
                'AC_INDUSTRY': formVal.AC_INDUSTRY,
                'AC_HEALTH': formVal.AC_HEALTH,
                'AC_RELATION_TYPE': formVal.AC_RELATION_TYPE,
                'AC_DIRECTOR': formVal.AC_DIRECTOR,
                'AC_DIRECTOR_RELATION': formVal.AC_DIRECTOR_RELATION,
                'AC_COREG_NO': formVal.AC_COREG_NO,
                'IS_WEAKER': formVal.IS_WEAKER,
                'AC_COREG_AMT': formVal.AC_COREG_AMT,
                'AC_RESO_NO': formVal.AC_RESO_NO,
                'AC_REMARK': formVal.AC_REMARK,
                'AC_RESO_DATE': (formVal.AC_RESO_DATE == '' || formVal.AC_RESO_DATE == 'Invalid date') ? resodate = '' : resodate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_RESO_DATE).format('DD/MM/YYYY'),
                AC_ADDFLAG: formVal.AC_ADDFLAG,
                AC_ADDTYPE: this.addType,
                AC_THONO: formVal.AC_THONO,
                AC_TWARD: formVal.AC_TWARD,
                AC_TADDR: formVal.AC_TADDR,
                AC_TGALLI: formVal.AC_TGALLI,
                AC_TAREA: formVal.AC_TAREA,
                AC_TCTCODE: formVal.AC_TCTCODE,
                AC_TPIN: formVal.AC_TPIN,
                'CoBorrowerData': this.multiCoBorrower,
                'GuarantorData': this.multiGuarantor,
                'SecurityData': this.multiSecurity,
                'BookDebts': this.bookid,
                'CustomerInsurance': this.insuranceid,
                'FirePolicy': this.firepolicyid,
                'Furniture': this.furnitureid,
                'GoldSilver': this.goldid,
                'Goverment': this.govtid,
                'LandBuilding': this.landid,
                'MarketShare': this.marketid,
                'OtherSecurity': this.otherid,
                'OwnDeposit': this.ownid,
                'PlantMachinary': this.plantid,
                'PleadgeStock': this.pledgeid,
                'StockStatement': this.stockid,
                'Vehicle': this.vehicleid,
                'Document': this.imageObject
            };
            this.termLoanService.postData(dataToSend).subscribe(data => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    icon: 'success',
                    title: 'Account Created successfully!',
                    html: '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
                        '<b>ACCOUNT NO : </b>' + data.BANKACNO + '<br>'
                });
                this.formSubmitted = false;
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.ajax.reload();
                    this.switchNgBTab('Basic');
                });
            }, (error) => {
                console.log(error);
            });
            //To clear form
            this.resetForm();
            this.customerDoc = [];
            this.multiCoBorrower = [];
            this.multiGuarantor = [];
            this.multiSecurity = [];
            this.bookid = [];
            this.insuranceid = [];
            this.firepolicyid = [];
            this.furnitureid = [];
            this.goldid = [];
            this.govtid = [];
            this.landid = [];
            this.marketid = [];
            this.otherid = [];
            this.ownid = [];
            this.plantid = [];
            this.pledgeid = [];
            this.stockid = [];
            this.vehicleid = [];
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
        }
    }
    // Reset Function
    resetForm() {
        this.switchNgBTab('Basic');
        this.createForm();
        this.resetGuarantor();
        this.resetCoBorrower();
        this.resetField();
        this.code = null;
        this.id = null;
        this.renewDate = null;
        this.int_category = null;
        this.sanctionAmt = null;
        this.drawingPower = null;
        this.ngexpiry = null;
        this.intRate = null;
        this.repay = null;
        this.installmentType = null;
        this.sanctionAutho = null;
        this.recomBy = null;
        this.recovery = null;
        this.idp = null;
        this.ngindustry = null;
        this.nghealth = null;
        this.ngAccountType = null;
        this.ngdirectorType = null;
        this.ngredate = null;
        this.weakerSec = null;
        this.ngpurpose = null;
        this.sanctionDate = null;
        this.accountedit = null;
        this.ngresodate = null;
        this.angForm.controls['AC_COREG_DATE'].reset();
        this.getSystemParaDate();
    }
    editClickHandler(id, status) {
        this.switchNgBTab('Basic');
        this.angForm.controls['AC_TYPE'].disable();
        let date;
        let opdate;
        let redate;
        let sanctiondate;
        let expirydate;
        let resodate;
        // let ngexpiry
        this.columnShowButton = true;
        this.termLoanService.getFormData(id).subscribe(data => {
            this.tempbankacno = data.BANKACNO;
            this.accountedit = data.BANKACNO;
            this.updatecheckdata = data;
            if (data.SYSCHNG_LOGIN != null && data.status == 0) {
                this.unapproveShow = true;
                this.showButton = false;
                this.updateShow = false;
                this.newbtnShow = true;
                this.approveShow = false;
                this.rejectShow = false;
            }
            else if (data.SYSCHNG_LOGIN == null && data.status == 0) {
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
            this.getCustomer(data.AC_CUSTID);
            this.multiSecurity = data.securityMaster;
            this.multiSecurity.forEach(ele => {
                let findSecurity = this.security.find(ob => ob['value'] === Number(ele.SECURITY_CODE));
                ele['SECU_NAME'] = findSecurity.name;
            });
            this.multiCoBorrower = data.CoborrowerMaster;
            this.multiGuarantor = data.guaranterMaster;
            this.int_category = Number(data.AC_INTCATA);
            this.sanctionAutho = Number(data.AC_AUTHORITY);
            this.recomBy = Number(data.AC_RECOMMEND_BY);
            this.recovery = Number(data.AC_RECOVERY_CLERK);
            this.idp = Number(data.AC_PRIORITY);
            this.weakerSec = Number(data.AC_WEAKER);
            this.ngpurpose = Number(data.AC_PURPOSE);
            this.ngindustry = Number(data.AC_INDUSTRY);
            this.nghealth = Number(data.AC_HEALTH);
            this.ngAccountType = data.AC_RELATION_TYPE;
            if (this.ngAccountType == 'Director') {
                this.angForm.controls['AC_DIRECTOR'].enable();
                this.ngdirectorType = Number(data.AC_DIRECTOR);
                this.angForm.controls['AC_DIRECTOR_RELATION'].disable();
                this.angForm.controls['AC_DIRECTOR_RELATION'].reset();
            }
            else if (this.ngAccountType == 'DirectorsRelative') {
                this.angForm.controls['AC_DIRECTOR'].enable();
                this.ngdirectorType = Number(data.AC_DIRECTOR);
                this.angForm.controls['AC_DIRECTOR_RELATION'].enable();
            }
            else {
                this.angForm.controls['AC_DIRECTOR'].disable();
                this.angForm.controls['AC_DIRECTOR_RELATION'].disable();
                this.angForm.controls['AC_DIRECTOR'].reset();
                this.angForm.controls['AC_DIRECTOR_RELATION'].reset();
            }
            this.sanctionAmt = Number(data.AC_SANCTION_AMOUNT).toFixed(2);
            this.sanctionDate = (data.AC_SANCTION_DATE == 'Invalid date' || data.AC_SANCTION_DATE == '' || data.AC_SANCTION_DATE == null) ? sanctiondate = '' : sanctiondate = data.AC_SANCTION_DATE,
                this.drawingPower = Number(data.AC_DRAWPOWER_AMT).toFixed(2);
            // this.ngexpiry = (data.AC_EXPIRE_DATE == 'Invalid date' || data.AC_EXPIRE_DATE == '' || data.AC_EXPIRE_DATE == null) ? expirydate = '' : expirydate = data.AC_EXPIRE_DATE,
            this.intRate = data.AC_INTRATE;
            this.repay = data.AC_REPAYMODE;
            this.installmentType = data.INSTALLMENT_METHOD;
            this.ngresodate = (data.AC_RESO_DATE == 'Invalid date' || data.AC_RESO_DATE == '' || data.AC_RESO_DATE == null) ? resodate = '' : resodate = data.AC_RESO_DATE,
                this.ngredate = (data.AC_COREG_DATE == 'Invalid date' || data.AC_COREG_DATE == '' || data.AC_COREG_DATE == null) ? date = '' : date = data.AC_COREG_DATE,
                this.renewDate = (data.AC_OPEN_OLD_DATE == 'Invalid date' || data.AC_OPEN_OLD_DATE == '' || data.AC_OPEN_OLD_DATE == null) ? redate = '' : redate = data.AC_OPEN_OLD_DATE,
                this.angForm.patchValue({
                    AC_TYPE: data.AC_TYPE,
                    'BANKACNO': data.BANKACNO,
                    AC_NO: data.AC_NO,
                    AC_OPDATE: (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? opdate = '' : opdate = data.AC_OPDATE,
                    AC_EXPIRE_DATE: data.AC_EXPIRE_DATE,
                    AC_IS_RECOVERY: data.AC_IS_RECOVERY,
                    IS_AGGRI_LOAN: (data.IS_AGGRI_LOAN == '1' ? true : false),
                    REF_ACNO: data.REF_ACNO,
                    AC_MONTHS: data.AC_MONTHS,
                    AC_DAYS: data.AC_DAYS,
                    AC_INSTALLMENT: data.AC_INSTALLMENT,
                    AC_MORATORIUM_PERIOD: data.AC_MORATORIUM_PERIOD,
                    AC_GRACE_PERIOD: data.AC_GRACE_PERIOD,
                    IS_WEAKER: data.IS_WEAKER,
                    AC_PRIORITY_SUB1: data.AC_PRIORITY_SUB1,
                    AC_PRIORITY_SUB2: data.AC_PRIORITY_SUB2,
                    AC_PRIORITY_SUB3: data.AC_PRIORITY_SUB3,
                    AC_DIRECTOR_RELATION: data.AC_DIRECTOR_RELATION,
                    AC_COREG_NO: data.AC_COREG_NO,
                    AC_REMARK: data.AC_REMARK,
                    AC_COREG_AMT: data.AC_COREG_AMT,
                    AC_RESO_NO: data.AC_RESO_NO,
                });
        });
    }
    // Method For New Button
    addNewData() {
        this.angForm.controls['AC_TYPE'].enable();
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.multiSecurity = [];
        this.multiCoBorrower = [];
        this.multiGuarantor = [];
        this.customerDoc = [];
        this.resetForm();
        this.id = null;
        this.getSystemParaDate();
    }
    //Method for update data  
    updateData() {
        this.angForm.controls['AC_TYPE'].enable();
        let data = this.angForm.value;
        if (data.AC_ADDFLAG == true) {
            this.addType = 'P';
        }
        else if (data.AC_ADDFLAG == false) {
            this.addType = 'T';
        }
        data['Document'] = this.imageObject;
        data['AC_ADDTYPE'] = this.addType;
        data['GuarantorData'] = this.multiGuarantor;
        data['CoBorrowerData'] = this.multiCoBorrower;
        data['SecurityData'] = this.multiSecurity;
        data['id'] = this.updateID;
        data['IS_AGGRI_LOAN'] = (data.IS_AGGRI_LOAN == true ? '1' : '0');
        let date;
        let opdate;
        let redate;
        let sanctiondate;
        let expirydate;
        let resodate;
        if (this.updatecheckdata.AC_COREG_DATE != this.ngredate) {
            (data.AC_COREG_DATE == 'Invalid date' || data.AC_COREG_DATE == '' || data.AC_COREG_DATE == null) ? (date = '', data['AC_COREG_DATE'] = date) : (date = data.AC_COREG_DATE, data['AC_COREG_DATE'] = moment__WEBPACK_IMPORTED_MODULE_9__(date).format('DD/MM/YYYY'));
        }
        else {
            data['AC_COREG_DATE'] = this.ngredate;
        }
        if (this.updatecheckdata.AC_OPDATE != this.openingDate) {
            (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = data.AC_OPDATE, data['AC_OPDATE'] = moment__WEBPACK_IMPORTED_MODULE_9__(opdate).format('DD/MM/YYYY'));
        }
        else {
            data['AC_OPDATE'] = this.openingDate;
        }
        if (this.updatecheckdata.AC_OPEN_OLD_DATE != this.renewDate) {
            (data.AC_OPEN_OLD_DATE == 'Invalid date' || data.AC_OPEN_OLD_DATE == '' || data.AC_OPEN_OLD_DATE == null) ? (redate = '', data['AC_OPEN_OLD_DATE'] = redate) : (redate = data.AC_OPEN_OLD_DATE, data['AC_OPEN_OLD_DATE'] = moment__WEBPACK_IMPORTED_MODULE_9__(redate).format('DD/MM/YYYY'));
        }
        else {
            data['AC_OPEN_OLD_DATE'] = this.renewDate;
        }
        if (this.updatecheckdata.AC_SANCTION_DATE != this.sanctionDate) {
            (data.AC_SANCTION_DATE == 'Invalid date' || data.AC_SANCTION_DATE == '' || data.AC_SANCTION_DATE == null) ? (sanctiondate = '', data['AC_SANCTION_DATE'] = sanctiondate) : (sanctiondate = data.AC_SANCTION_DATE, data['AC_SANCTION_DATE'] = moment__WEBPACK_IMPORTED_MODULE_9__(sanctiondate).format('DD/MM/YYYY'));
        }
        else {
            data['AC_SANCTION_DATE'] = this.sanctionDate;
        }
        if (this.updatecheckdata.AC_EXPIRE_DATE != this.ngexpiry) {
            // (data.AC_EXPIRE_DATE == 'Invalid date' || data.AC_EXPIRE_DATE == '' || data.AC_EXPIRE_DATE == null) ? (expirydate = '', data['AC_EXPIRE_DATE'] = expirydate) : (expirydate = data.AC_EXPIRE_DATE, data['AC_EXPIRE_DATE'] = moment(expirydate).format('DD/MM/YYYY'))
            let toDate = moment__WEBPACK_IMPORTED_MODULE_9__(this.ngexpiry, 'DD/MM/YYYY');
            data['AC_EXPIRE_DATE'] = moment__WEBPACK_IMPORTED_MODULE_9__(toDate).format('DD/MM/YYYY');
        }
        else {
            // data['AC_EXPIRE_DATE'] = this.ngexpiry
            let toDate = moment__WEBPACK_IMPORTED_MODULE_9__(this.ngexpiry, 'DD/MM/YYYY');
            data['AC_EXPIRE_DATE'] = moment__WEBPACK_IMPORTED_MODULE_9__(toDate).format('DD/MM/YYYY');
        }
        if (this.updatecheckdata.AC_RESO_DATE != this.ngresodate) {
            (data.AC_RESO_DATE == 'Invalid date' || data.AC_RESO_DATE == '' || data.AC_RESO_DATE == null) ? (resodate = '', data['AC_RESO_DATE'] = resodate) : (resodate = data.AC_RESO_DATE, data['AC_RESO_DATE'] = moment__WEBPACK_IMPORTED_MODULE_9__(resodate).format('DD/MM/YYYY'));
        }
        else {
            data['AC_RESO_DATE'] = this.ngresodate;
        }
        this.termLoanService.updateData(data).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Success!', 'Record Updated Successfully !', 'success');
            this.showButton = true;
            this.updateShow = false;
            this.newbtnShow = false;
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.ajax.reload();
            });
            this.switchNgBTab('Basic');
            this.multiSecurity = [];
            this.multiCoBorrower = [];
            this.multiSecurity = [];
            this.customerDoc = [];
            this.accountedit = null;
            this.ngsecurityCode = null;
            this.resetForm();
        });
    }
    //Method for delete data
    delClickHandler(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want to delete Term loan master data.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.termLoanService.deleteData(id).subscribe(data1 => {
                    this.termLoanMaster = data1;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
                }), (error) => {
                    console.log(error);
                };
                // to reload after delete of data
                this.rerender();
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'Your data is safe.', 'error');
            }
        });
    }
    //function to get new customer data
    // addNewCustomer(newCustomer) {
    //   this._TermLoanScheme.getCustomerIDMasterList().subscribe(data => {
    //     this.Cust_ID = data;
    //     let last = data.slice(-1)[0]
    //     this.id = newCustomer
    //     this.getCustomer(this.id); 
    //   })
    // }
    addNewCustomer(newCustomer) {
        this.customerID.getCustomerIDMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.Cust_ID = data;
            this.id = newCustomer;
            this.getCustomer(newCustomer);
        });
    }
    //function to get existing customer data according selection
    getCustomer(id) {
        this.customerIdService.getFormData(id).subscribe(data => {
            var _a, _b;
            this.customerDoc = data.custdocument;
            let obj = {
                SCHEME_CODE: 'LN'
            };
            this.imageObject = [];
            this.selectedImgArrayDetails = [];
            this.http.post(this.url + '/scheme-linking-with-d/fetchLinkedDoc', obj).subscribe(resp => {
                let DocArr = resp;
                for (const [key, value] of Object.entries(data.custdocument)) {
                    DocArr.forEach(ele => {
                        if (this.customerDoc.find(data => data['DocumentMaster']['id'] == ele['DOCUMENT_CODE'])) {
                            let path = (this.customerDoc.find(data => data['DocumentMaster']['id'] == ele['DOCUMENT_CODE']));
                            ele['status'] = true;
                            ele['IS_ALLOWED'] = true;
                            ele['PATH'] = path['PATH'];
                        }
                        else {
                            ele['status'] = false;
                            ele['IS_ALLOWED'] = false;
                        }
                    });
                    let selectedObj = {};
                    let id = data.custdocument[key].DocumentMasterID;
                    selectedObj[id] = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + '/' + data.custdocument[key].PATH;
                    this.selectedImagePreview = selectedObj[id];
                    this.imageObject.push(selectedObj);
                    this.selectedImgArrayDetails.push(selectedObj);
                }
                this.customerDoc = DocArr;
            });
            this.tempAddress = (_a = data.custAddress[0]) === null || _a === void 0 ? void 0 : _a.AC_ADDFLAG;
            if (data.castMaster == null) {
                data.castMaster = "";
            }
            if (data.occupMaster == null) {
                data.occupMaster = "";
            }
            this.id = data.id;
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
            });
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
                AC_CTCODE: (_b = permadd === null || permadd === void 0 ? void 0 : permadd.city) === null || _b === void 0 ? void 0 : _b.CITY_NAME,
                AC_PIN: permadd === null || permadd === void 0 ? void 0 : permadd.AC_PIN,
            });
            data.custAddress.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (element.AC_ADDTYPE == 'T') {
                    temp = element;
                }
            }));
            this.ngCity = temp === null || temp === void 0 ? void 0 : temp.city.id,
                this.angForm.patchValue({
                    AC_THONO: temp === null || temp === void 0 ? void 0 : temp.AC_HONO,
                    AC_TWARD: temp === null || temp === void 0 ? void 0 : temp.AC_WARD,
                    AC_TADDR: temp === null || temp === void 0 ? void 0 : temp.AC_ADDR,
                    AC_TGALLI: temp === null || temp === void 0 ? void 0 : temp.AC_GALLI,
                    AC_TAREA: temp === null || temp === void 0 ? void 0 : temp.AC_AREA,
                    AC_TPIN: temp === null || temp === void 0 ? void 0 : temp.AC_PIN,
                });
        });
        this.onCloseModal();
    }
    customer(event) {
        // this.termLoanService.getData().subscribe(data => {
        this.getCustomer(event.value);
        // })
    }
    onCloseModal() {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }
    tempAsPermanent() {
        this.tempAddress = !this.tempAddress;
    }
    //set open date, appointed date and expiry date
    getSystemParaDate() {
        this.systemParameter.getFormData(1).subscribe(data => {
            this.tempopendate = data.CURRENT_DATE;
            this.openingDate = data.CURRENT_DATE;
            // this.ngredate = data.CURRENT_DATE
            if (data.ON_LINE === '1') {
                this.angForm.controls['AC_OPDATE'].disable();
            }
            else {
                this.angForm.controls['AC_OPDATE'].enable();
            }
        });
    }
    //disabledate on keyup
    disabledate(data) {
        if (data != "") {
            if (data > this.datemax) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Invalid Input", "Please insert valid date ", "warning");
                document.getElementById("AC_OPDATE").value = "";
            }
        }
    }
    //Method for set value for repay mode and installment type
    getScheme(code) {
        this._TermLoanScheme.getData(code).subscribe(data => {
            if (data.S_INT_APPLICABLE === '1') {
                this.repay = 'M';
                this.installmentType = data.INSTALLMENT_METHOD;
            }
            else {
                this.repay = 'Q';
                this.installmentType = data.INSTALLMENT_METHOD;
            }
        });
        this.scheme1 = this.angForm.controls['AC_TYPE'].value;
    }
    // Method for set opeing date to expiry date and registration date
    changeDate() {
        this.getInterest(this.temp);
        this.angForm.patchValue({
            AC_EXPIRE_DATE: this.angForm.controls['AC_OPDATE'].value,
        });
    }
    // Method for set sanction amount to registration amount and registration date
    changeAmt() {
        this.angForm.patchValue({
            AC_COREG_AMT: this.angForm.controls['AC_SANCTION_AMOUNT'].value
        });
    }
    // Set Priorities
    getPriority(idp) {
        this.prioritySectorMaster.getFormData(idp).subscribe(data => {
            this.angForm.patchValue({
                AC_PRIORITY: idp,
                AC_PRIORITY_SUB1: data.SUB1_CODE,
                AC_PRIORITY_SUB2: data.SUB2_CODE,
                AC_PRIORITY_SUB3: data.SUB3_CODE,
            });
        });
    }
    // Method for Show and hide option wise field
    directorShow(event) {
        if (event.value == 'Director') {
            this.angForm.controls['AC_DIRECTOR'].enable();
            this.angForm.controls['AC_DIRECTOR_RELATION'].disable();
            this.angForm.controls['AC_DIRECTOR_RELATION'].reset();
        }
        else if (event.value == 'DirectorsRelative') {
            this.angForm.controls['AC_DIRECTOR'].enable();
            this.angForm.controls['AC_DIRECTOR_RELATION'].enable();
        }
        else {
            this.angForm.controls['AC_DIRECTOR'].disable();
            this.angForm.controls['AC_DIRECTOR_RELATION'].disable();
            this.angForm.controls['AC_DIRECTOR'].reset();
            this.angForm.controls['AC_DIRECTOR_RELATION'].reset();
        }
    }
    disableForm(id) {
        this.editClickHandler(id, 0);
    }
    // Method for Calculate Instllment
    calculation() {
        if (this.repay != undefined && this.repay != null) {
            if (this.repay == 'W') {
                this.installmentType = 'E';
                this.angForm.controls['INSTALLMENT_METHOD'].disable();
                let days = Number(this.angForm.controls['AC_DAYS'].value);
                // let calweek = Math.round(days / 7)
                let calweek = Number(days / 7).toFixed(2);
                let pricision = calweek.toString().split('.');
                if (Number(40) <= 0) {
                    calweek = Math.round(Number(calweek));
                }
                else if (Number(pricision[1]) >= Number(40)) {
                    calweek = Number(pricision[0]) + 1;
                }
                else {
                    calweek = Number(pricision[0]);
                }
                let intrate = Number(this.angForm.controls['AC_INTRATE'].value) / 52 / 100;
                this.result = (Number(this.drawingPower) * intrate * Math.pow(1 + intrate, calweek) / (Math.pow(1 + intrate, calweek) - 1)).toFixed(2);
                this.angForm.patchValue({
                    AC_INSTALLMENT: Math.round(this.result)
                });
            }
            else {
                this.months = this.angForm.controls['AC_MONTHS'].value;
                if (this.repay == 'M' && (this.installmentType == 'I' || this.installmentType == 'R')) {
                    this.result = Math.round(((Number(this.drawingPower) / Number(this.months)) * 1));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'Q' && (this.installmentType == 'I' || this.installmentType == 'R')) {
                    this.result = Math.round(((Number(this.drawingPower) / Number(this.months)) * 3));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'H' && (this.installmentType == 'I' || this.installmentType == 'R')) {
                    this.result = Math.round(((Math.floor(Number(this.drawingPower)) / Math.floor(this.months)) * 6));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'Y' && (this.installmentType == 'I' || this.installmentType == 'R')) {
                    this.result = Math.round(((Math.floor(Number(this.drawingPower)) / Math.floor(this.months)) * 12));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'O' && (this.installmentType == 'I' || this.installmentType == 'R')) {
                    this.result = Math.round(((Math.floor(Number(this.drawingPower)))));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'M' && (this.installmentType == 'E')) {
                    this.month = Math.floor(this.months) / 1;
                    this.result = Math.round(Math.floor(Number(this.drawingPower)) * ((Math.floor(this.intRate) / (1200 / 1)) / (1 - Math.pow(((1 + (Math.floor(this.intRate) / (1200 / 1)))), (Math.floor(this.month) * (-1))))));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'Q' && (this.installmentType == 'E')) {
                    this.month = Math.floor(this.months) / 3;
                    this.result = Math.round(Math.floor(Number(this.drawingPower)) * ((Math.floor(this.intRate) / (1200 / 3)) / (1 - Math.pow(((1 + (Math.floor(this.intRate) / (1200 / 3)))), (Math.floor(this.month) * (-1))))));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'H' && (this.installmentType == 'E')) {
                    this.month = Math.floor(this.months) / 6;
                    this.result = Math.round(Math.floor(Number(this.drawingPower)) * ((Math.floor(this.intRate) / (1200 / 6)) / (1 - Math.pow(((1 + (Math.floor(this.intRate) / (1200 / 6)))), ((this.month) * (-1))))));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'Y' && (this.installmentType == 'E')) {
                    this.month = Math.floor(this.months) / 12;
                    this.result = Math.round(Math.floor(Number(this.drawingPower)) * ((Math.floor(this.intRate) / (1200 / 12)) / (1 - Math.pow(((1 + (Math.floor(this.intRate) / (1200 / 12)))), (Math.floor(this.month) * (-1))))));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'O' && (this.installmentType == 'E')) {
                    this.angForm.patchValue({
                        AC_INSTALLMENT: 0
                    });
                }
                // else if (this.repay == 'M' && (this.installmentType == 'WithInterest')) {
                else if (this.repay == 'M' && (this.installmentType == 'Null')) {
                    this.intResult = (Math.floor(Number(this.drawingPower)) * Math.floor(this.intRate) / 1200).toFixed(2);
                    this.result = Math.round((((Math.floor(Number(this.drawingPower)) / Math.floor(this.months)) + Math.floor(this.intResult)) * 1));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'Q' && (this.installmentType == 'Null')) {
                    this.intResult = (Math.floor(Number(this.drawingPower)) * Math.floor(this.intRate) / 1200).toFixed(2);
                    this.result = Math.round((((Math.floor(Number(this.drawingPower)) / Math.floor(this.months)) + Math.floor(this.intResult)) * 3));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'H' && (this.installmentType == 'Null')) {
                    this.intResult = (Number(this.drawingPower) * this.intRate / 1200);
                    this.result = Math.round((((Number(this.drawingPower) / this.months) + this.intResult) * 6));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'Y' && (this.installmentType == 'Null')) {
                    this.intResult = (Number(this.drawingPower) * this.intRate / 1200);
                    this.result = Math.round((((Number(this.drawingPower) / this.months) + this.intResult) * 12));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
                else if (this.repay == 'O' && (this.installmentType == 'Null')) {
                    this.intResult = (Number(this.drawingPower) * this.intRate / 1200);
                    this.result = Math.round((((Number(this.drawingPower) / this.months) + this.intResult) * 0));
                    this.angForm.patchValue({
                        AC_INSTALLMENT: this.result
                    });
                }
            }
        }
    }
    // Start Security tab
    // Add Security
    addField() {
        const formVal = this.angForm.value;
        var object = {
            AC_ACNOTYPE: formVal.AC_ACNOTYPE,
            AC_TYPE: formVal.AC_TYPE,
            AC_NO: formVal.AC_NO,
            SECURITY_CODE: this.SECU_CODE,
            SECU_NAME: this.SECU_NAME,
            SECURITY_VALUE: formVal.SECURITY_VALUE,
        };
        if (formVal.AC_CUSTID != "") {
            if (object.SECURITY_CODE != undefined) {
                if (this.multiSecurity.length == 0) {
                    this.multiSecurity.push(object);
                }
                else {
                    if (this.multiSecurity.find(ob => ob['SECURITY_CODE'] === this.SECU_CODE)) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("This Security is Already Added", "error");
                    }
                    else {
                        this.multiSecurity.push(object);
                    }
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Security Code", "error");
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Customer Id", "error");
        }
        this.resetField();
    }
    // Delete Security
    delField(id) {
        this.multiSecurity.splice(id, 1);
    }
    // Reset Security
    resetField() {
        this.angForm.controls['SECURITY_CODE'].reset();
        this.angForm.controls['SECURITY_VALUE'].reset();
    }
    securityDetails(event) {
        this.SECU_CODE = event.id;
        this.SECU_NAME = event.name;
    }
    // Security Event
    newItemEvent(newvalue) {
        this.security_id = newvalue[0];
        if (newvalue[1] == "book") {
            this.bookid.push(this.security_id);
        }
        if (newvalue[1] == "customerInsurance") {
            this.insuranceid.push(this.security_id);
        }
        if (newvalue[1] == "firePolicy") {
            this.firepolicyid.push(this.security_id);
        }
        if (newvalue[1] == "furniture") {
            this.furnitureid.push(this.security_id);
        }
        if (newvalue[1] == "goldSilver") {
            this.goldid.push(this.security_id);
        }
        if (newvalue[1] == "govSecurity") {
            this.govtid.push(this.security_id);
        }
        if (newvalue[1] == "landBuilding") {
            this.landid.push(this.security_id);
        }
        if (newvalue[1] == "marketShare") {
            this.marketid.push(this.security_id);
        }
        if (newvalue[1] == "otherSecurity") {
            this.otherid.push(this.security_id);
        }
        if (newvalue[1] == "ownDeposit") {
            this.ownid.push(this.security_id);
        }
        if (newvalue[1] == "plantMachinary") {
            this.plantid.push(this.security_id);
        }
        if (newvalue[1] == "pleadge") {
            this.pledgeid.push(this.security_id);
        }
        if (newvalue[1] == "stockStatement") {
            this.stockid.push(this.security_id);
        }
        if (newvalue[1] == "vehicle") {
            this.vehicleid.push(this.security_id);
        }
    }
    getscode(event) {
        this.scode = event.name;
        if (event.IS_WEEKLY_REPAY == '1') {
            this.angForm.controls['AC_MONTHS'].disable();
            this.repayModeOption.push({ value: 'W', label: 'Weekly' });
        }
    }
    // Show security Detals Components
    showSecurity(code) {
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        this._SecurityCode.getFormData(code).subscribe(data => {
            this.getschemename = 'LN';
            this.schemeedit = this.scode;
            this.accountedit = (this.tempbankacno != undefined ? this.tempbankacno : '');
            this.ngsecurityCode = code;
            this.ngBranchCode = result.branchId;
            if (data.BOOK_DEBTS == '1') {
                this.BOOK_DEBTS = true;
            }
            else {
                this.BOOK_DEBTS = false;
            }
            if (data.CUST_INSURANCE == '1') {
                this.CUST_INSURANCE = true;
            }
            else {
                this.CUST_INSURANCE = false;
            }
            if (data.FIRE_POLICY == '1') {
                this.FIRE_POLICY = true;
            }
            else {
                this.FIRE_POLICY = false;
            }
            if (data.FURNITURE_FIXTURE == '1') {
                this.FURNITURE_FIXTURE = true;
            }
            else {
                this.FURNITURE_FIXTURE = false;
            }
            if (data.GOLD_SILVER == '1') {
                this.GOLD_SILVER = true;
            }
            else {
                this.GOLD_SILVER = false;
            }
            if (data.GOVT_SECU_LIC == '1') {
                this.GOVT_SECU_LIC = true;
            }
            else {
                this.GOVT_SECU_LIC = false;
            }
            if (data.LAND_BUILDING == '1') {
                this.LAND_BUILDING = true;
            }
            else {
                this.LAND_BUILDING = false;
            }
            if (data.MARKET_SHARE == '1') {
                this.MARKET_SHARE = true;
            }
            else {
                this.MARKET_SHARE = false;
            }
            if (data.OTHER_SECURITY == '1') {
                this.OTHER_SECURITY = true;
            }
            else {
                this.OTHER_SECURITY = false;
            }
            if (data.OWN_DEPOSIT == '1') {
                this.OWN_DEPOSIT = true;
            }
            else {
                this.OWN_DEPOSIT = false;
            }
            if (data.PLANT_MACHINARY == '1') {
                this.PLANT_MACHINARY = true;
            }
            else {
                this.PLANT_MACHINARY = false;
            }
            if (data.PLEDGE_STOCK == '1') {
                this.PLEDGE_STOCK = true;
            }
            else {
                this.PLEDGE_STOCK = false;
            }
            if (data.STOCK_STATEMENT == '1') {
                this.STOCK_STATEMENT = true;
            }
            else {
                this.STOCK_STATEMENT = false;
            }
            if (data.VEHICLE == '1') {
                this.VEHICLE = true;
            }
            else {
                this.VEHICLE = false;
            }
        });
    }
    // End Security tab
    // Start Guarantor tab
    // //Open Guarantor Form
    clickguarantor($event) {
        if ($event.target.checked) {
            this.GuarantorTrue = true;
        }
        else {
            this.GuarantorTrue = false;
        }
    }
    // Get Guarantor Customer Id 
    getgCustomer(Gid) {
        this.customerIdService.getFormData(Gid).subscribe(data => {
            this.angForm.patchValue({
                GAC_MEMBNO: data.AC_MEMBNO,
                GAC_MEMBTYPE: data.AC_MEMBTYPE,
                GAC_NAME: data.AC_NAME,
            });
        });
    }
    // Add Guarantor
    addGuarantor() {
        const formVal = this.angForm.value;
        let exdate;
        if (formVal.EXP_DATE != '' && formVal.EXP_DATE != null && formVal.EXP_DATE != 'Invalid date') {
            let toDate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.EXP_DATE, 'DD/MM/YYYY');
            exdate = moment__WEBPACK_IMPORTED_MODULE_9__(toDate).format('DD/MM/YYYY');
        }
        else {
            exdate = null;
        }
        var object = {
            GAC_CUSTID: formVal.GAC_CUSTID,
            AC_MEMBNO: formVal.GAC_MEMBNO,
            AC_MEMBTYPE: formVal.GAC_MEMBTYPE,
            AC_NAME: formVal.GAC_NAME,
            EXP_DATE: exdate
        };
        if (formVal.AC_CUSTID != "") {
            if (object.GAC_CUSTID != undefined) {
                if (this.id != this.Gid) {
                    if (this.multiGuarantor.length == 0) {
                        this.multiGuarantor.push(object);
                    }
                    else {
                        if (this.multiGuarantor.find(ob => ob['GAC_CUSTID'] === formVal.GAC_CUSTID)) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("This Customer is Already Guarantor", "error");
                        }
                        else {
                            this.multiGuarantor.push(object);
                        }
                    }
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Different Customer id", "error");
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Guarantor Customer Id", "error");
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Customer Id", "error");
        }
        this.resetGuarantor();
    }
    // Edit Guarantor
    editGuarantor(id) {
        let exdate;
        this.intIndex = id;
        this.intID = this.multiGuarantor[id].id;
        this.GuarantorShowButton = false;
        this.GuarantorUpdateShow = true;
        this.guarantoredit = this.multiGuarantor[id];
        this.guarantordate = this.multiGuarantor[id].AC_NDATE;
        this.Gid = Number(this.multiGuarantor[id].GAC_CUSTID);
        this.angForm.patchValue({
            GAC_MEMBNO: this.multiGuarantor[id].AC_MEMBNO,
            GAC_MEMBTYPE: this.multiGuarantor[id].AC_MEMBTYPE,
            GAC_NAME: this.multiGuarantor[id].AC_NAME,
            EXP_DATE: (this.multiGuarantor[id].EXP_DATE == 'Invalid date' || this.multiGuarantor[id].EXP_DATE == '' || this.multiGuarantor[id].EXP_DATE == null) ? exdate = '' : exdate = this.multiGuarantor[id].EXP_DATE,
        });
    }
    // Update Guarantor
    updateGuarantor() {
        let date1;
        let index = this.intIndex;
        this.GuarantorShowButton = true;
        this.GuarantorUpdateShow = false;
        const formVal = this.angForm.value;
        let exdate;
        if (formVal.EXP_DATE != '' && formVal.EXP_DATE != null && formVal.EXP_DATE != 'Invalid date') {
            let toDate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.EXP_DATE, 'DD/MM/YYYY');
            exdate = moment__WEBPACK_IMPORTED_MODULE_9__(toDate).format('DD/MM/YYYY');
        }
        else {
            exdate = null;
        }
        var object = {
            GAC_CUSTID: formVal.GAC_CUSTID,
            AC_MEMBNO: formVal.GAC_MEMBNO,
            AC_MEMBTYPE: formVal.GAC_MEMBTYPE,
            AC_NAME: formVal.GAC_NAME,
            EXP_DATE: exdate,
            id: this.intID
        };
        if (formVal.AC_CUSTID != "") {
            if (object.GAC_CUSTID != undefined) {
                if (this.id != this.Gid) {
                    if (this.multiGuarantor.length == 0) {
                        this.multiGuarantor[index] = object;
                    }
                    else {
                        this.multiGuarantor[index] = object;
                    }
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Different Customer id", "error");
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Guarantor Customer Id", "error");
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Customer Id", "error");
        }
        this.resetGuarantor();
    }
    // Delete Guarantor
    delGuarantor(id) {
        this.multiGuarantor.splice(id, 1);
    }
    // Reset Guarantor
    resetGuarantor() {
        this.angForm.controls['GAC_CUSTID'].reset();
        this.angForm.controls['GAC_MEMBNO'].reset();
        this.angForm.controls['GAC_MEMBTYPE'].reset();
        this.angForm.controls['GAC_NAME'].reset();
        this.angForm.controls['EXP_DATE'].reset();
    }
    // End Guarantor tab
    //  Start CoBorrower tab
    // //Open CoBorrower Form
    clickCoBorrower($event) {
        if ($event.target.checked) {
            this.CoBorrowerTrue = true;
        }
        else {
            this.CoBorrowerTrue = false;
        }
    }
    // Get CoBorrower Customer Id 
    getCCustomer(Cid) {
        this.customerIdService.getFormData(Cid).subscribe(data => {
            this.angForm.patchValue({
                CAC_NAME: data.AC_NAME,
            });
        });
    }
    // Add CoBorrower 
    addCoBorrower() {
        const formVal = this.angForm.value;
        var object = {
            CAC_CUSTID: formVal.CAC_CUSTID,
            AC_NAME: formVal.CAC_NAME,
        };
        if (formVal.AC_CUSTID != "") {
            if (object.CAC_CUSTID != undefined) {
                if (this.id != this.Cid) {
                    if (this.multiCoBorrower.length == 0) {
                        this.multiCoBorrower.push(object);
                    }
                    else {
                        if (this.multiCoBorrower.find(ob => ob['CAC_CUSTID'] === formVal.CAC_CUSTID)) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("This Customer is Already CoBorrower", "error");
                        }
                        else {
                            this.multiCoBorrower.push(object);
                        }
                    }
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Different Customer id", "error");
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select CoBorrower Customer Id", "error");
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Customer Id", "error");
        }
        this.resetCoBorrower();
    }
    // Edit CoBorrower 
    editCoBorrower(id) {
        this.coBorrowerIndex = id;
        this.CoBorrowerupdateid = id;
        this.CoBorrowerID = this.multiCoBorrower[id].id;
        this.CoBorrowerTrue = true;
        this.CoBorrowerShowButton = false;
        this.CoBorrowerUpdateShow = true;
        this.Cid = Number(this.multiCoBorrower[id].CAC_CUSTID);
        this.angForm.patchValue({
            CAC_NAME: this.multiCoBorrower[id].AC_NAME,
        });
    }
    // Update CoBorrower 
    updateCoBorrower() {
        let index = this.coBorrowerIndex;
        this.CoBorrowerShowButton = true;
        this.CoBorrowerUpdateShow = false;
        const formVal = this.angForm.value;
        var object = {
            CAC_CUSTID: formVal.CAC_CUSTID,
            AC_NAME: formVal.CAC_NAME,
            id: this.CoBorrowerID
        };
        if (formVal.AC_CUSTID != "") {
            if (object.CAC_CUSTID != undefined) {
                if (this.id != this.Cid) {
                    if (this.multiCoBorrower.length == 0) {
                        this.multiCoBorrower[index] = object;
                    }
                    else {
                        if (this.multiCoBorrower.find(ob => ob['CAC_CUSTID'] === formVal.CAC_CUSTID)) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("This Customer is Already CoBorrower", "error");
                        }
                        else {
                            this.multiCoBorrower[index] = object;
                        }
                    }
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Different Customer id", "error");
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select CoBorrower Customer Id", "error");
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Customer Id", "error");
        }
        this.resetCoBorrower();
    }
    // Delete CoBorrower 
    delCoBorrower(id) {
        this.multiCoBorrower.splice(id, 1);
    }
    // Reset CoBorrower 
    resetCoBorrower() {
        this.angForm.controls['CAC_CUSTID'].reset();
        this.angForm.controls['CAC_NAME'].reset();
    }
    // End CoBorrower tab
    setCategory(int_category) {
        this.InterestRateForLoanandCC.intData().subscribe(data => {
            this.date = this.angForm.controls['AC_OPDATE'].value;
            if (data != typeof (undefined)) {
                data.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (this.date == element.EFFECT_DATE) {
                        this.angForm.patchValue({
                            AC_INTCATA: element.INT_CATEGORY,
                            AC_INTRATE: element.rate[0].INT_RATE,
                        });
                    }
                    else if (element.EFFECT_DATE > this.date) {
                        this.angForm.patchValue({
                            AC_INTCATA: element.INT_CATEGORY,
                            AC_INTRATE: element.rate[0].INT_RATE,
                        });
                    }
                    else if (element.EFFECT_DATE > this.date || this.date < element.EFFECT_DATE) {
                        this.angForm.patchValue({
                            AC_INTCATA: element.INT_CATEGORY,
                            AC_INTRATE: element.rate[0].INT_RATE,
                        });
                    }
                }));
            }
            else {
                this.angForm.patchValue({
                    AC_INTRATE: 0,
                });
            }
        });
    }
    getInterest(event) {
        let temp;
        let date = this.angForm.controls['AC_OPDATE'].value;
        this.InterestRateForLoanandCC.intData().subscribe(data => {
            var _a;
            data.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (element.INT_CATEGORY == event.name) {
                    temp = element;
                }
            }));
            this.angForm.patchValue({
                AC_INTRATE: (_a = temp === null || temp === void 0 ? void 0 : temp.rate[0]) === null || _a === void 0 ? void 0 : _a.INT_RATE,
            });
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
    getExpiryDate() {
        if (Number(this.angForm.controls['AC_DAYS'].value) != 0 && this.angForm.controls['AC_DAYS'].value != '' && this.angForm.controls['AC_DAYS'].value != null) {
            let days = this.angForm.controls['AC_DAYS'].value;
            if (this.angForm.controls['AC_OPEN_OLD_DATE'].value != undefined && this.angForm.controls['AC_OPEN_OLD_DATE'].value != '') {
                var expiryDate = moment__WEBPACK_IMPORTED_MODULE_9__(this.angForm.controls['AC_OPEN_OLD_DATE'].value).add(days, 'd').format('DD/MM/YYYY');
                this.tempexpiryDate = expiryDate;
                this.angForm.patchValue({
                    AC_EXPIRE_DATE: expiryDate
                });
            }
            else {
                if (this.tempopendate != this.openingDate) {
                    var expiryDate = moment__WEBPACK_IMPORTED_MODULE_9__(this.openingDate).add(days, 'd').format('DD/MM/YYYY');
                    this.tempexpiryDate = expiryDate;
                    this.angForm.patchValue({
                        AC_EXPIRE_DATE: expiryDate
                    });
                }
                else if (this.openingDate != undefined) {
                    var full = [];
                    var fullDate = this.openingDate;
                    full = fullDate.split(' ');
                    var date = full[0].split(/\//);
                    var newDate = date[1] + '/' + date[0] + '/' + date[2];
                    var k = new Date(newDate);
                    var expiryDate = moment__WEBPACK_IMPORTED_MODULE_9__(k).add(days, 'd').format('DD/MM/YYYY');
                    this.tempexpiryDate = expiryDate;
                    this.angForm.patchValue({
                        AC_EXPIRE_DATE: expiryDate
                    });
                }
            }
        }
        else {
            let months = this.angForm.controls['AC_MONTHS'].value;
            if (this.angForm.controls['AC_OPEN_OLD_DATE'].value != undefined && this.angForm.controls['AC_OPEN_OLD_DATE'].value != '') {
                var expiryDate = moment__WEBPACK_IMPORTED_MODULE_9__(this.angForm.controls['AC_OPEN_OLD_DATE'].value).add(months, 'M').format('DD/MM/YYYY');
                this.tempexpiryDate = expiryDate;
                this.angForm.patchValue({
                    AC_EXPIRE_DATE: expiryDate
                });
            }
            else {
                if (this.tempopendate != this.openingDate) {
                    // var expiryDate = moment(this.openingDate).add(months, 'M').format('DD/MM/YYYY');
                    this.tempexpiryDate = expiryDate;
                    this.angForm.patchValue({
                        AC_EXPIRE_DATE: this.ngexpiry
                    });
                }
                else if (this.openingDate != undefined) {
                    var full = [];
                    var fullDate = this.openingDate;
                    full = fullDate.split(' ');
                    var date = full[0].split(/\//);
                    var newDate = date[1] + '/' + date[0] + '/' + date[2];
                    var k = new Date(newDate);
                    var expiryDate = moment__WEBPACK_IMPORTED_MODULE_9__(k).add(months, 'M').format('DD/MM/YYYY');
                    this.tempexpiryDate = expiryDate;
                    this.angForm.patchValue({
                        AC_EXPIRE_DATE: expiryDate
                    });
                }
            }
        }
    }
    switchNgBTab(id) {
        this.ctdTabset.select(id);
    }
    fileChangeEvent(event, id, valueid) {
        if (this.customerDoc[id]['status'] == true) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                // title: 'Do You Want To Replace previous document?',
                html: '<span style="text-justify: inter-word; font-weight:600; font-size:20px;">Do You Want To Replace previous document?</span>',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'No',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    let result;
                    let arr = [];
                    let me = this;
                    let obj = {};
                    let selectedObj = {};
                    let file = event.target.files[0];
                    this.customerDoc[id]['status'] = true;
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function (ele) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            result = yield reader.result;
                            let selecetedImg = ele.target.result;
                            selectedObj[valueid] = selecetedImg;
                            obj[valueid] = result;
                        });
                    };
                    reader.onerror = function (error) {
                        console.log('Error: ', error);
                    };
                    let isExist = false;
                    for (let element of this.imageObject) {
                        if (Number(Object.keys(element)[0]) == valueid) {
                            isExist = true;
                            reader.onload = function (ele) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    result = yield reader.result;
                                    let selecetedImg = ele.target.result;
                                    selectedObj[valueid] = selecetedImg;
                                    obj[valueid] = result;
                                    element[valueid] = result;
                                });
                            };
                            this.customerDoc[id]['status'] = true;
                            break;
                        }
                    }
                    if (!isExist) {
                        reader.onload = function (ele) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                result = yield reader.result;
                                let selecetedImg = ele.target.result;
                                selectedObj[valueid] = selecetedImg;
                                obj[valueid] = result;
                            });
                        };
                        this.imageObject.push(obj);
                        this.selectedImgArrayDetails.push(selectedObj);
                        this.customerDoc[id]['status'] = true;
                    }
                }
                else {
                    event.target.value = null;
                }
            });
        }
        else {
            let result;
            let arr = [];
            let me = this;
            let obj = {};
            let selectedObj = {};
            let file = event.target.files[0];
            this.customerDoc[id]['status'] = true;
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (ele) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    result = yield reader.result;
                    let selecetedImg = ele.target.result;
                    selectedObj[valueid] = selecetedImg;
                    obj[valueid] = result;
                });
            };
            // this.fileuploaded=true,
            // this.filenotuploaded=false
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
            let isExist = false;
            for (let element of this.imageObject) {
                if (Number(Object.keys(element)[0]) == valueid) {
                    isExist = true;
                    reader.onload = function (ele) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            result = yield reader.result;
                            let selecetedImg = ele.target.result;
                            selectedObj[valueid] = selecetedImg;
                            obj[valueid] = result;
                            element[valueid] = result;
                        });
                    };
                    this.customerDoc[id]['status'] = true;
                    break;
                }
            }
            if (!isExist) {
                reader.onload = function (ele) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        result = yield reader.result;
                        let selecetedImg = ele.target.result;
                        selectedObj[valueid] = selecetedImg;
                        obj[valueid] = result;
                    });
                };
                this.imageObject.push(obj);
                this.selectedImgArrayDetails.push(selectedObj);
                this.customerDoc[id]['status'] = true;
            }
        }
    }
    viewImagePreview(ele, id) {
        if (this.selectedImgArrayDetails.length != 0) {
            for (const [key, value] of Object.entries(this.selectedImgArrayDetails)) {
                let jsonObj = value;
                Object.keys(jsonObj).forEach(key => {
                    if (id == key) {
                        this.isImgPreview = true;
                        this.selectedImagePreview = jsonObj[key];
                        this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedImagePreview);
                        throw 'Break';
                    }
                    else {
                        this.isImgPreview = false;
                        this.selectedImagePreview = '';
                    }
                });
            }
        }
        else {
            this.isImgPreview = false;
            this.selectedImagePreview = '';
        }
    }
    //approve account
    Approve() {
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = {
            id: this.updateID,
            user: user.id
        };
        this.termLoanService.approve(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Approved', 'Term Loan Account approved successfully', 'success');
            var button = document.getElementById('trigger');
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
        this.termLoanService.reject(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Rejected', 'Term Loan Account rejected successfully', 'success');
            var button = document.getElementById('trigger');
            button.click();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    closeModal() {
        var button = document.getElementById('trigger');
        button.click();
        this.reloadTablePassing.emit();
    }
    //check  if percentage  is below 50
    checkmargin(ele) {
        //check  if given value  is below 50
        if (ele.target.value <= 50) {
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Invalid Input", "Please Insert Values Below 50", "error");
            ele.target.value = 0;
        }
    }
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
        this.termLoanService.unapporve(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Unapproved', 'Account unapproved successfully', 'success');
            var button = document.getElementById('trigger');
            button.click();
            this.reloadTablePassing.emit();
        }, err => {
            console.log('something is wrong');
        });
    }
    compareamount() {
        let from = Number(document.getElementById("AC_DRAWPOWER_AMT").value);
        let to = Number(document.getElementById("AC_SANCTION_AMOUNT").value);
        if (to != 0) {
            if (from > to) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Warning!', 'Drawing Power Should Be Less Than or Equal to Sanction Limit', 'warning');
                document.getElementById("AC_DRAWPOWER_AMT").value = "0";
            }
        }
    }
}
TermLoanMasterComponent.ɵfac = function TermLoanMasterComponent_Factory(t) { return new (t || TermLoanMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_term_loan_master_service__WEBPACK_IMPORTED_MODULE_11__["TermLoanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_12__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["CustomerIDMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["IntrestCategoryMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_repay_mode_service__WEBPACK_IMPORTED_MODULE_16__["RepayModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_installment_method_service__WEBPACK_IMPORTED_MODULE_17__["InstallmentMethodService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_authority_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["AuthorityMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["DirectorMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_recovery_cleark_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["RecoveryClearkMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_priority_sector_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["PrioritySectorMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_weaker_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__["WeakerMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_purpose_master_dropdown_service__WEBPACK_IMPORTED_MODULE_23__["PurposeMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_industry_master_dropdown_service__WEBPACK_IMPORTED_MODULE_24__["IndustryMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_health_master_dropdown_service__WEBPACK_IMPORTED_MODULE_25__["HealthMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_26__["cityMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_account_type_service__WEBPACK_IMPORTED_MODULE_27__["AccountTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_security_master_dropdown_service__WEBPACK_IMPORTED_MODULE_28__["SecurityMasterdropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_policy_settings_definations_interest_rate_for_lacc_interest_rate_for_lacc_service__WEBPACK_IMPORTED_MODULE_29__["InterestRateForLoanandCCService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_policy_settings_information_priority_sector_master_priority_sector_master_service__WEBPACK_IMPORTED_MODULE_30__["PrioritySectorMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_31__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utility_scheme_parameters_term_loan_scheme_term_loan_scheme_service__WEBPACK_IMPORTED_MODULE_32__["TermLoanSchemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_33__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_policy_settings_definations_security_code_security_code_service__WEBPACK_IMPORTED_MODULE_34__["SecurityCodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_35__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__["NgSelectConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__["DomSanitizer"])); };
TermLoanMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TermLoanMasterComponent, selectors: [["app-term-loan-master"]], viewQuery: function TermLoanMasterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ctdTabset = _t.first);
    } }, inputs: { childMessage: "childMessage" }, outputs: { reloadTablePassing: "reloadTablePassing" }, decls: 93, vars: 21, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [1, "card-block"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "col-sm-3"], [1, "form-group", "form-primary", "form-static-label"], ["autofocus", "", 1, "border-lable-flt"], ["appTheme", "", "bindValue", "value", "id", "AC_TYPE", "formControlName", "AC_TYPE", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme", "autofocus", "", 3, "ngModel", "disabled", "ngClass", "virtualScroll", "selectOnTab", "ngModelChange", "change", "focus"], ["ACTYPE", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "AC_TYPE"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-4"], [1, "border-lable-flt"], ["appTheme", "", "id", "AC_CUSTID", "bindValue", "value", "formControlName", "AC_CUSTID", "title", "Compulsory Selection", "required", "", "placeholder", "Customer Id", 2, "width", "85%", 3, "ngModel", "ngClass", "virtualScroll", "selectOnTab", "ngModelChange", "change", "focus"], ["AC_CUSTID", ""], ["for", "AC_CUSTID"], ["id", "custicon", "placement", "bottom", "ngbTooltip", "Add New Customer", 1, "fa", "fa-fw", "fa-plus-circle", "field-icon", 3, "click"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [3, "newCustomerEvent"], [1, "app-modal-footer"], ["type", "button", "id", "triggerhide", 1, "btn", "btn-primary", "ripple", "light", 3, "click"], [1, "col-sm-1"], [1, "form-group", "input-group"], ["type", "text", "name", "AC_TITLE", "placeholder", " ", "id", "AC_TITLE", "formControlName", "AC_TITLE", "disabled", "", 1, "form-control"], ["for", "AC_TITLE"], ["type", "text", "name", "AC_NAME", "placeholder", " ", "id", "AC_NAME", "formControlName", "AC_NAME", "disabled", "", 1, "form-control"], ["for", "AC_NAME"], [1, "col-sm-2"], ["type", "text", "name", "BANKACNO", "placeholder", " ", "id", "BANKACNO", "formControlName", "BANKACNO", "disabled", "", 1, "form-control"], ["for", "BANKACNO"], [1, "nav-pills", "tabFont"], ["ctdTabset", "ngbTabset"], ["title", "Basic Detail", "id", "Basic"], ["ngbTabContent", ""], ["title", "Other Detail", "role", "tab", "data-toggle", "tab", "id", "otherDetails"], ["title", "Address", "role", "tab", "data-toggle", "tab", "id", "address"], ["title", "Securities", "role", "tab", "data-toggle", "tab", "id", "security"], ["title", "Guarantor", "role", "tab", "data-toggle", "tab", "id", "guarantor"], ["title", "CoBorrower", "role", "tab", "data-toggle", "tab", "id", "coborrower"], ["title", "Documents", "role", "tab", "data-toggle", "tab", "id", "document"], ["class", "row", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "m-t-15"], [1, "card", "border-primary"], [1, "card-block", "highlight"], ["appTheme", "", "appButton", "", "minlength", "10", "maxlength", "10", "type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_OPDATE", "id", "AC_OPDATE", "required", "", "disabled", "", "formControlName", "AC_OPDATE", "bsDatepicker", "", "placement", "right", 1, "form-control", 3, "bsConfig", "maxDate", "ngClass", "ngModel", "bsValue", "ngModelChange", "keydown.Tab"], ["AC_OPDATE", "bsDatepicker"], ["for", "AC_OPDATE"], ["type", "text", "appButton", "", "minlength", "10", "maxlength", "10", "placeholder", "dd/mm/yyyy", "name", "AC_OPEN_OLD_DATE", "id", "AC_OPEN_OLD_DATE", "formControlName", "AC_OPEN_OLD_DATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "minDate", "bsConfig", "ngModelChange", "bsValueChange", "keydown.Tab"], ["OLD_DATE", "bsDatepicker"], ["for", "AC_OPEN_OLD_DATE"], ["type", "text", "name", "AC_BIRTH_DT", "placeholder", " ", "id", "AC_BIRTH_DT", "max", "9999-12-31", "formControlName", "AC_BIRTH_DT", "disabled", "", 1, "form-control"], ["for", "AC_BIRTH_DT"], [1, "col-sm"], ["type", "text", "name", "AC_MEMBTYPE", "placeholder", " ", "id", "AC_MEMBTYPE", "formControlName", "AC_MEMBTYPE", "disabled", "", 1, "form-control"], ["for", "AC_MEMBTYPE"], ["type", "text", "name", "AC_MEMBNO", "placeholder", " ", "id", "AC_MEMBNO", "formControlName", "AC_MEMBNO", "disabled", "", 1, "form-control"], ["for", "AC_MEMBNO"], ["type", "text", "name", "REF_ACNO", "placeholder", " ", "id", "REF_ACNO", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "formControlName", "REF_ACNO", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", "REF_ACNO"], ["type", "text", "name", "AC_CAST", "placeholder", " ", "id", "AC_CAST", "formControlName", "AC_CAST", "disabled", "", 1, "form-control"], ["for", "AC_CAST"], ["type", "text", "name", "AC_OCODE", "placeholder", " ", "id", "AC_OCODE", "formControlName", "AC_OCODE", "disabled", "", 1, "form-control"], ["for", "AC_OCODE"], ["appTheme", "", "id", "AC_INTCATA", "bindValue", "value", "formControlName", "AC_INTCATA", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Interest Category", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "change", "focus"], ["AC_INTCATA", ""], ["for", "AC_INTCATA"], ["appTheme", "", "type", "text", "name", "AC_SANCTION_AMOUNT", "placeholder", " ", "id", "AC_SANCTION_AMOUNT", "required", "", "title", "Input allowed only  0-9", "formControlName", "AC_SANCTION_AMOUNT", 1, "form-control", 2, "text-align", "right", 3, "value", "ngModel", "ngClass", "keyup", "focusout", "keypress", "ngModelChange"], ["for", "AC_SANCTION_AMOUNT"], ["appTheme", "", "appButton", "", "minlength", "10", "maxlength", "10", "type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_SANCTION_DATE", "id", "AC_SANCTION_DATE", "required", "", "formControlName", "AC_SANCTION_DATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngClass", "maxDate", "bsValue", "ngModelChange", "keydown.Tab"], ["SANCTION_DATE", "bsDatepicker"], ["for", "AC_SANCTION_DATE"], ["appTheme", "", "type", "text", "name", "AC_DRAWPOWER_AMT", "placeholder", " ", "id", "AC_DRAWPOWER_AMT", "required", "", "title", "Input allowed only  0-9", "formControlName", "AC_DRAWPOWER_AMT", 1, "form-control", 2, "text-align", "right", 3, "ngModel", "value", "ngClass", "ngModelChange", "focusout", "keyup", "keypress"], ["for", "AC_DRAWPOWER_AMT"], ["appTheme", "", "type", "text", "name", "AC_MONTHS", "placeholder", " ", "id", "AC_MONTHS", "required", "", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "AC_MONTHS", "maxlength", "3", 1, "form-control", 2, "text-align", "right", 3, "ngClass", "keypress", "ngModelChange"], ["for", "AC_MONTHS"], ["appTheme", "", "type", "text", "name", "AC_DAYS", "placeholder", " ", "id", "AC_DAYS", "required", "", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "AC_DAYS", "maxlength", "3", 1, "form-control", 2, "text-align", "right", 3, "ngClass", "keypress", "ngModelChange"], ["for", "AC_DAYS"], ["type", "text", "appButton", "", "minlength", "10", "maxlength", "10", "name", "AC_EXPIRE_DATE", "id", "AC_EXPIRE_DATE", "required", "", "placeholder", "dd/mm/yyyy", "formControlName", "AC_EXPIRE_DATE", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "AC_EXPIRE_DATE"], ["type", "text", "name", "AC_INTRATE", "placeholder", " ", "id", "AC_INTRATE", "required", "", "title", "Input allowed only  0-9", "formControlName", "AC_INTRATE", 1, "form-control", 2, "text-align", "right", 3, "ngModel", "ngClass", "ngModelChange", "keyup", "keypress"], ["for", "AC_INTRATE"], ["appTheme", "", "id", "AC_REPAYMODE", "bindValue", "value", "formControlName", "AC_REPAYMODE", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Repay Mode", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "change", "focus"], ["REPAYMODE", ""], ["for", "AC_REPAYMODE"], ["appTheme", "", "id", "INSTALLMENT_METHOD", "bindValue", "value", "formControlName", "INSTALLMENT_METHOD", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Installment Type", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "change", "focus"], ["INSTALLMENT_METHOD", ""], ["for", "INSTALLMENT_METHOD"], ["type", "text", "name", "AC_INSTALLMENT", "placeholder", " ", "id", "AC_INSTALLMENT", "title", "Input allowed only  0-9", "formControlName", "AC_INSTALLMENT", 1, "form-control", 2, "text-align", "right", 3, "value", "focusout", "keypress"], ["for", "AC_INSTALLMENT"], ["type", "text", "name", "AC_MORATORIUM_PERIOD", "placeholder", " ", "id", "AC_MORATORIUM_PERIOD", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "maxlength", "2", "formControlName", "AC_MORATORIUM_PERIOD", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", "AC_MORATORIUM_PERIOD"], ["type", "text", "name", "AC_GRACE_PERIOD", "placeholder", " ", "id", "AC_GRACE_PERIOD", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "maxlength", "3", "formControlName", "AC_GRACE_PERIOD", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", "AC_GRACE_PERIOD"], [1, "checkbox", "checkbox-primary"], [1, "border-checkbox-group", "border-checkbox-group-primary"], ["type", "checkbox", "id", "IS_AGGRI_LOAN", "formControlName", "IS_AGGRI_LOAN", 1, "border-checkbox"], ["for", "IS_AGGRI_LOAN", 1, "border-checkbox-label"], [1, "col-sm", 2, "float", "right", "margin-top", "6px"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["appTheme", "", "id", "AC_AUTHORITY", "bindValue", "value", "formControlName", "AC_AUTHORITY", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Sanction Authority", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "focus"], ["AC_AUTHORITY", ""], ["for", "AC_AUTHORITY"], ["appTheme", "", "id", "AC_RECOMMEND_BY", "bindValue", "value", "formControlName", "AC_RECOMMEND_BY", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Recommended By", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "focus"], ["RECOMMEND_BY", ""], ["for", "AC_RECOMMEND_BY"], ["appTheme", "", "id", "AC_RECOVERY_CLERK", "bindValue", "value", "formControlName", "AC_RECOVERY_CLERK", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Recovery Cleark", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "focus"], ["RECOVERY_CLERK", ""], ["for", "AC_RECOVERY_CLERK"], ["appTheme", "", "id", "AC_PRIORITY", "bindValue", "value", "formControlName", "AC_PRIORITY", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Priority", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "change", "focus"], ["AC_PRIORITY", ""], ["for", "AC_PRIORITY"], ["type", "text", "name", "AC_PRIORITY_SUB1", "placeholder", " ", "id", "AC_PRIORITY_SUB1", "disabled", "", "formControlName", "AC_PRIORITY_SUB1", 1, "form-control", 2, "text-align", "right"], ["for", "AC_PRIORITY_SUB1"], ["type", "text", "name", "AC_PRIORITY_SUB2", "placeholder", " ", "id", "AC_PRIORITY_SUB2", "disabled", "", "formControlName", "AC_PRIORITY_SUB2", 1, "form-control", 2, "text-align", "right"], ["for", "AC_PRIORITY_SUB2"], ["type", "text", "name", "AC_PRIORITY_SUB3", "placeholder", " ", "id", "AC_PRIORITY_SUB3", "disabled", "", "formControlName", "AC_PRIORITY_SUB3", 1, "form-control", 2, "text-align", "right"], ["for", "AC_PRIORITY_SUB3"], ["type", "checkbox", "id", "checkbox3", "name", "IS_WEAKER", "formControlName", "IS_WEAKER", 1, "border-checkbox"], ["for", "checkbox3", 1, "border-checkbox-label"], ["appTheme", "", "id", "AC_WEAKER", "bindValue", "value", "formControlName", "AC_WEAKER", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Weaker Section", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "focus"], ["AC_WEAKER", ""], ["for", "AC_WEAKER"], ["appTheme", "", "id", "AC_PURPOSE", "bindValue", "value", "formControlName", "AC_PURPOSE", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Purpose", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "focus"], ["AC_PURPOSE", ""], ["for", "AC_PURPOSE"], ["appTheme", "", "id", "AC_INDUSTRY", "bindValue", "value", "formControlName", "AC_INDUSTRY", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Industry", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "focus"], ["AC_INDUSTRY", ""], ["for", "AC_INDUSTRY"], ["appTheme", "", "id", "AC_HEALTH", "bindValue", "value", "formControlName", "AC_HEALTH", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Health Code", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "focus"], ["AC_HEALTH", ""], ["for", "AC_HEALTH"], ["appTheme", "", "id", "AC_RELATION_TYPE", "bindValue", "value", "formControlName", "AC_RELATION_TYPE", "bindLabel", "label", "title", "Compulsory Selection", "required", "", "placeholder", "Account Type", 3, "ngModel", "ngClass", "selectOnTab", "ngModelChange", "change", "focus"], ["RELATION_TYPE", ""], ["for", "AC_RELATION_TYPE"], ["id", "AC_DIRECTOR", "bindValue", "value", "formControlName", "AC_DIRECTOR", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Director", 3, "ngModel", "disabled", "selectOnTab", "ngModelChange", "focus"], ["AC_DIRECTOR", ""], ["for", "AC_DIRECTOR"], ["type", "text", "name", "AC_DIRECTOR_RELATION", "placeholder", " ", "id", "AC_DIRECTOR_RELATION", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_DIRECTOR_RELATION", "disabled", "", 1, "form-control", 3, "keypress"], ["for", "AC_DIRECTOR_RELATION"], [2, "text-align", "center", "font-size", "16px"], ["type", "text", "name", "AC_COREG_NO", "placeholder", " ", "id", "AC_COREG_NO", "pattern", "^[0-9-/. ]+$", "title", "Input allowed only  0-9", "formControlName", "AC_COREG_NO", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", "AC_COREG_NO"], ["appTheme", "", "appButton", "", "minlength", "10", "maxlength", "10", "type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_COREG_DATE", "id", "AC_COREG_DATE", "placement", "up", "formControlName", "AC_COREG_DATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "maxDate", "bsConfig", "ngModelChange", "keydown.Tab"], ["AC_COREG_DATE", "bsDatepicker"], ["for", "AC_COREG_DATE"], ["type", "text", "name", "AC_COREG_AMT", "placeholder", " ", "id", "AC_COREG_AMT", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "AC_COREG_AMT", 1, "form-control", 2, "text-align", "right", 3, "value", "keyup", "focusout", "keypress"], ["for", "AC_COREG_AMT"], ["type", "text", "name", "AC_RESO_NO", "placeholder", " ", "id", "AC_RESO_NO", "formControlName", "AC_RESO_NO", 1, "form-control", 2, "text-align", "right"], ["for", "AC_RESO_NO"], ["type", "text", "appButton", "", "minlength", "10", "maxlength", "10", "placeholder", "dd/mm/yyyy", "name", "AC_RESO_DATE", "id", "AC_RESO_DATE", "formControlName", "AC_RESO_DATE", "bsDatepicker", "", 1, "form-control", 3, "maxDate", "ngModel", "bsConfig", "ngModelChange"], ["for", "AC_RESO_DATE"], ["type", "text", "name", "AC_HONO", "placeholder", " ", "id", "AC_HONO", "formControlName", "AC_HONO", "disabled", "", 1, "form-control"], ["for", "AC_HONO"], ["type", "text", "name", "AC_WARD", "placeholder", " ", "id", "AC_WARD", "formControlName", "AC_WARD", "disabled", "", 1, "form-control"], ["for", "AC_WARD"], ["type", "text", "name", "AC_GALLI", "placeholder", " ", "id", "AC_GALLI", "formControlName", "AC_GALLI", "disabled", "", 1, "form-control"], ["for", "AC_GALLI"], ["type", "text", "name", "AC_AREA", "placeholder", " ", "id", "AC_AREA", "formControlName", "AC_AREA", "disabled", "", 1, "form-control"], ["for", "AC_AREA"], ["type", "text", "name", "AC_ADDR", "placeholder", " ", "id", "AC_ADDR", "formControlName", "AC_ADDR", "disabled", "", 1, "form-control"], ["for", "AC_ADDR"], ["type", "text", "name", "AC_CTCODE", "bindValue", "id", "placeholder", " ", "id", "AC_CTCODE", "formControlName", "AC_CTCODE", "disabled", "", 1, "form-control"], ["for", "AC_CTCODE"], ["type", "text", "name", "AC_PIN", "placeholder", " ", "id", "AC_PIN", "formControlName", "AC_PIN", "disabled", "", 1, "form-control", 2, "text-align", "right"], ["for", "AC_PIN"], ["type", "text", "name", "AC_PHNO", "placeholder", " ", "id", "AC_PHNO", "formControlName", "AC_PHNO", "disabled", "", 1, "form-control", 2, "text-align", "right"], ["for", "AC_PHNO"], ["type", "text", "name", "AC_MOBNO", "placeholder", " ", "id", "AC_MOBNO", "formControlName", "AC_MOBNO", "disabled", "", 1, "form-control", 2, "text-align", "right"], ["for", "AC_MOBNO"], ["type", "text", "name", "AC_EMAIL", "placeholder", " ", "id", "AC_EMAIL", "formControlName", "AC_EMAIL", "disabled", "", 1, "form-control"], ["for", "AC_EMAIL"], [1, "col-sm-5"], ["type", "checkbox", "id", "AC_ADDFLAG", "formControlName", "AC_ADDFLAG", 1, "border-checkbox", 3, "click"], ["for", "AC_ADDFLAG", 1, "border-checkbox-label"], ["type", "text", "name", "AC_THONO", "placeholder", " ", "id", "AC_THONO", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "25", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "formControlName", "AC_THONO", 1, "form-control"], ["for", "AC_THONO"], ["class", "\n                                                      form-group form-primary form-static-label\n                                                    ", "class", "alert alert-danger", 4, "ngIf"], ["type", "text", "name", "AC_TWARD", "placeholder", " ", "id", "AC_TWARD", "pattern", "^[A-Za-z\\./ -]+$", "maxlength", "10", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_TWARD", 1, "form-control"], ["for", "AC_TWARD"], ["type", "text", "name", "AC_TGALLI", "placeholder", " ", "id", "AC_TGALLI", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "formControlName", "AC_TGALLI", 1, "form-control"], ["for", "AC_TGALLI"], ["type", "text", "name", "AC_TAREA", "placeholder", " ", "id", "AC_TAREA", "pattern", "^[A-Za-z\\./ -]+$", "maxlength", "60", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_TAREA", 1, "form-control"], ["for", "AC_TAREA"], ["type", "text", "name", "AC_TADDR", "placeholder", " ", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "id", "AC_TADDR", "formControlName", "AC_TADDR", 1, "form-control"], ["for", "AC_TADDR"], ["id", "AC_TCTCODE", "bindValue", "id", "bindLabel", "CITY_NAME", "formControlName", "AC_TCTCODE", "title", "Compulsory Selection", "placeholder", "City", 3, "ngModel", "selectOnTab", "ngClass", "ngModelChange", "focus"], ["AC_TCTCODE", ""], ["for", "CITY_NAME"], ["type", "text", "name", "AC_TPIN", "placeholder", " ", "id", "AC_TPIN", "pattern", "^[0-9]+$", "minlength", "6", "maxlength", "6", "title", "Input allowed only  0-9", "formControlName", "AC_TPIN", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", "AC_TPIN"], ["id", "SECURITY_CODE", "bindValue", "value", "formControlName", "SECURITY_CODE", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Security Details", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "SECURITY_CODE"], ["type", "text", "name", "SECURITY_VALUE", "placeholder", " ", "id", "SECURITY_VALUE", "title", "Input allowed only  0-9", "formControlName", "SECURITY_VALUE", 1, "form-control", 2, "text-align", "right", 3, "value", "keyup", "focusout", "keypress"], ["for", "SECURITY_VALUE"], ["type", "button", "class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], [2, "max-width", "10px"], [2, "max-width", "1200px", "max-height", "500px"], ["type", "button", 1, "btn", "btn-primary", "ripple", "light", 3, "click"], ["type", "text", "name", "AC_REMARK", "placeholder", " ", "id", "AC_REMARK", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "pattern", "^[A-Za-z0-9\\./ -]+$", "formControlName", "AC_REMARK", 1, "form-control", 3, "ngClass"], ["for", "AC_REMARK"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "deletebutton", "placement", "right", "ngbTooltip", "Delete", 1, "fa", "fa-fw", "fa-trash-o", 3, "click"], ["placement", "bottom", "ngbTooltip", "View Security", 1, "fa", "fa-fw", "fa-plus-circle", "field-icon", 2, "text-align", "center", "font-size", "20px", "cursor", "pointer", "color", "#4680ff", 3, "click"], ["colspan", "6", 1, "no-data-available"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newbookEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newcustomerInsuranceEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newfirePolicyEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newfurnitureFixEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newGoldsilverEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newgovtSecurityEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newLandBuldingEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newmarketShareEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newOtherSecurityEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newOwnDepositEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newPlantandMachiEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newPleadgeEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newStockEvent"], [3, "AC_ACNOTYPE", "scheme", "Accountno", "sec_code", "branchCode", "newVehicalEvent"], ["type", "checkbox", "id", "Guarantorid", 1, "border-checkbox", 3, "click"], ["for", "Guarantorid", 1, "border-checkbox-label", 3, "ngClass"], [2, "color", "dodgerblue"], ["id", "GAC_CUSTID", "bindValue", "value", "formControlName", "GAC_CUSTID", "bindLabel", "label", "placeholder", "Customer ID", 3, "ngModel", "virtualScroll", "selectOnTab", "ngModelChange", "change", "focus"], ["GAC_CUSTID", ""], ["for", "GAC_CUSTID"], ["type", "text", "name", "GAC_MEMBNO", "placeholder", " ", "id", "GAC_MEMBNO", "disabled", "", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "GAC_MEMBNO", 1, "form-control"], ["for", "GAC_MEMBNO"], ["type", "text", "name", "GAC_MEMBTYPE", "placeholder", " ", "id", "GAC_MEMBTYPE", "disabled", "", "formControlName", "GAC_MEMBTYPE", 1, "form-control"], ["for", "GAC_MEMBTYPE"], ["type", "text", "name", "GAC_NAME", "placeholder", " ", "id", "GAC_NAME", "disabled", "", "formControlName", "GAC_NAME", 1, "form-control"], ["for", "GAC_NAME"], ["type", "text", "appButton", "", "minlength", "10", "maxlength", "10", "placeholder", "dd/mm/yyyy", "name", "EXP_DATE", "id", "EXP_DATE", "formControlName", "EXP_DATE", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "minDate", "keydown.Tab"], ["EXP_DATE", "bsDatepicker"], ["for", "EXP_DATE"], ["id", "editbutton", "placement", "top", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], ["type", "checkbox", "id", "CoBorrowerid", 1, "border-checkbox", 3, "click"], ["for", "CoBorrowerid", 1, "border-checkbox-label", 3, "ngClass"], ["id", "CAC_CUSTID", "bindValue", "value", "formControlName", "CAC_CUSTID", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Customer ID", 3, "ngModel", "virtualScroll", "ngClass", "selectOnTab", "ngModelChange", "change", "focus"], ["CAC_CUSTID", ""], ["for", "CAC_CUSTID"], ["type", "text", "name", "CAC_NAME", "placeholder", " ", "id", "CAC_NAME", "disabled", "", "formControlName", "CAC_NAME", 1, "form-control"], ["for", "CAC_NAME"], ["class", "embed-responsive", "style", "padding-bottom:60%", 4, "ngIf"], [1, "col-sm", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm btn-submit", "appTheme", "", 3, "click", "keydown.Tab", 4, "ngIf"], [2, "align-items", "center"], [1, "input-group-prepend", "selfcss"], [1, "input-group-text"], ["aria-hidden", "true", 1, "fa", "fa-upload"], ["type", "file", "name", "file", "id", "file", "accept", "application/pdf,image/x-png,image/jpeg", 1, "form-control", 2, "height", "auto", 3, "id", "change"], ["placement", "right", "ngbTooltip", "Show Image", 1, "fa", "fa-fw", "fa-eye", "field-icon", 2, "font-size", "20px", "color", "#0f459b", "cursor", "pointer", 3, "click"], ["class", "fa fa-check-circle", "id", "editbutton", "style", "color: green;font-size: 20px;", "placement", "left", "ngbTooltip", "file uploaded", 4, "ngIf"], ["class", "fa fa-times-circle-o", "id", "editbutton", "style", "color: red;font-size: 20px;", "placement", "left", "ngbTooltip", "file not uploaded", 4, "ngIf"], ["id", "editbutton", "placement", "left", "ngbTooltip", "file uploaded", 1, "fa", "fa-check-circle", 2, "color", "green", "font-size", "20px"], ["id", "editbutton", "placement", "left", "ngbTooltip", "file not uploaded", 1, "fa", "fa-times-circle-o", 2, "color", "red", "font-size", "20px"], ["colspan", "5", 1, "no-data-available", 2, "text-align", "center"], [1, "embed-responsive", 2, "padding-bottom", "60%"], ["width", "10px", "height", "50px", 3, "src"], ["type", "submit", "appTheme", "", 1, "btn", "btn-outline-primary", "btn-sm", "btn-submit", 3, "click", "keydown.Tab"], [1, "card", "shadow"], ["id", "mastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions", "dtTrigger"], [1, "filters"], ["filters", ""], [1, "testing"], ["type", "text", "name", "AC_TYPE", 1, "form-control"], ["type", "text", "name", "BANKACNO", 1, "form-control"], ["type", "text", "name", "AC_CUSTID", 1, "form-control"], ["type", "text", "name", "AC_NAME", 1, "form-control"], ["type", "text", "name", "AC_OPDATE", 1, "form-control"], ["type", "text", "name", "AC_OPEN_OLD_DATE", 1, "form-control"], ["type", "text", "name", "REF_ACNO", 1, "form-control"], ["type", "text", "name", "AC_ADDR", 1, "form-control"], ["type", "text", "name", "AC_CTCODE", 1, "form-control"], ["type", "text", "name", "AC_SANCTION_DATE", 1, "form-control"], ["type", "text", "name", "AC_MONTHS", 1, "form-control"], ["type", "text", "name", "AC_EXPIRE_DATE", 1, "form-control"], ["type", "text", "name", "AC_SANCTION_AMOUNT", 1, "form-control"], ["type", "text", "name", "AC_DRAWPOWER_AMT", 1, "form-control"], ["type", "text", "name", "AC_INTRATE", 1, "form-control"], ["type", "text", "name", "AC_INSTALLMENT", 1, "form-control"], ["type", "text", "name", "AC_AUTHORITY", 1, "form-control"], ["type", "text", "name", "AC_PURPOSE", 1, "form-control"], ["class", "fa fa-fw fa-edit field-icon", "style", "align-items: right;", "id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 3, "click", 4, "ngIf"], ["class", "fa fa-fw fa-eye field-icon", "id", "viewbutton", "style", "align-items: right;", "placement", "bottom", "ngbTooltip", "View", 3, "click", 4, "ngIf"], [3, "ngClass"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 2, "align-items", "right", 3, "click"], ["id", "viewbutton", "placement", "bottom", "ngbTooltip", "View", 1, "fa", "fa-fw", "fa-eye", "field-icon", 2, "align-items", "right", 3, "click"], ["colspan", "10", 1, "no-data-available"]], template: function TermLoanMasterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r405 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Term Loan Account Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ng-select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_Template_ng_select_ngModelChange_18_listener($event) { return ctx.code = $event; })("change", function TermLoanMasterComponent_Template_ng_select_change_18_listener($event) { return ctx.getscode($event); })("focus", function TermLoanMasterComponent_Template_ng_select_focus_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r405); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19); return ctx.onFocus(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TermLoanMasterComponent_ng_option_20_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Scheme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TermLoanMasterComponent_div_25_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ng-select", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_Template_ng_select_ngModelChange_29_listener($event) { return ctx.id = $event; })("change", function TermLoanMasterComponent_Template_ng_select_change_29_listener($event) { return ctx.customer($event); })("focus", function TermLoanMasterComponent_Template_ng_select_focus_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r405); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30); return ctx.onFocus(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, TermLoanMasterComponent_ng_option_31_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Customer Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_Template_span_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r405); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39); return _r7.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, TermLoanMasterComponent_div_37_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "app-modal-basic", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Customer ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r405); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39); return _r7.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "perfect-scrollbar", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "app-customer-id", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newCustomerEvent", function TermLoanMasterComponent_Template_app_customer_id_newCustomerEvent_48_listener($event) { return ctx.addNewCustomer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r405); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39); return _r7.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, TermLoanMasterComponent_div_60_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ngb-tabset", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "ngb-tab", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, TermLoanMasterComponent_ng_template_79_Template, 190, 78, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ngb-tab", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, TermLoanMasterComponent_ng_template_81_Template, 188, 79, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "ngb-tab", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, TermLoanMasterComponent_ng_template_83_Template, 91, 8, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "ngb-tab", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, TermLoanMasterComponent_ng_template_85_Template, 75, 30, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ngb-tab", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, TermLoanMasterComponent_ng_template_87_Template, 38, 7, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "ngb-tab", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, TermLoanMasterComponent_ng_template_89_Template, 32, 7, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "ngb-tab", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, TermLoanMasterComponent_ng_template_91_Template, 47, 13, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, TermLoanMasterComponent_div_92_Template, 50, 4, "div", 53);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.code)("disabled", ctx.AC_TYPE)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c2, ctx.formSubmitted))("virtualScroll", true)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TYPE"].invalid && (ctx.angForm.controls["AC_TYPE"].dirty || ctx.angForm.controls["AC_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c2, ctx.formSubmitted))("virtualScroll", true)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Cust_ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_CUSTID"].invalid && (ctx.angForm.controls["AC_CUSTID"].dirty || ctx.angForm.controls["AC_CUSTID"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TITLE"].invalid && (ctx.angForm.controls["AC_TITLE"].dirty || ctx.angForm.controls["AC_TITLE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.DatatableHideShow);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__["NgSelectComponent"], _theme_directive__WEBPACK_IMPORTED_MODULE_38__["ThemeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_33__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_33__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_33__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__["NgbTooltip"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_40__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_41__["PerfectScrollbarComponent"], _customer_id_customer_id_component__WEBPACK_IMPORTED_MODULE_42__["CustomerIdComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__["NgbTabContent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__["ɵr"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_43__["BsDatepickerInputDirective"], _button_directive__WEBPACK_IMPORTED_MODULE_44__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_43__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _maintainance_security_details_book_debts_book_debts_component__WEBPACK_IMPORTED_MODULE_45__["BookDebtsComponent"], _maintainance_security_details_customer_insurance_customer_insurance_component__WEBPACK_IMPORTED_MODULE_46__["CustomerInsuranceComponent"], _maintainance_security_details_fire_policy_fire_policy_component__WEBPACK_IMPORTED_MODULE_47__["FirePolicyComponent"], _maintainance_security_details_furniture_and_fixture_furniture_and_fixture_component__WEBPACK_IMPORTED_MODULE_48__["FurnitureAndFixtureComponent"], _maintainance_security_details_gold_and_silver_gold_and_silver_component__WEBPACK_IMPORTED_MODULE_49__["GoldAndSilverComponent"], _maintainance_security_details_govt_security_and_lic_govt_security_and_lic_component__WEBPACK_IMPORTED_MODULE_50__["GovtSecurityAndLicComponent"], _maintainance_security_details_land_and_buildings_land_and_buildings_component__WEBPACK_IMPORTED_MODULE_51__["LandAndBuildingsComponent"], _maintainance_security_details_market_shares_market_shares_component__WEBPACK_IMPORTED_MODULE_52__["MarketSharesComponent"], _maintainance_security_details_other_security_other_security_component__WEBPACK_IMPORTED_MODULE_53__["OtherSecurityComponent"], _maintainance_security_details_own_deposits_own_deposits_component__WEBPACK_IMPORTED_MODULE_54__["OwnDepositsComponent"], _maintainance_security_details_plant_and_machinery_plant_and_machinery_component__WEBPACK_IMPORTED_MODULE_55__["PlantAndMachineryComponent"], _maintainance_security_details_pleadge_stock_pleadge_stock_component__WEBPACK_IMPORTED_MODULE_56__["PleadgeStockComponent"], _maintainance_security_details_stock_statement_stock_statement_component__WEBPACK_IMPORTED_MODULE_57__["StockStatementComponent"], _maintainance_security_details_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_58__["VehicleComponent"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9jdXN0b21lci90ZXJtLWxvYW4tbWFzdGVyL3Rlcm0tbG9hbi1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fadeInOutTranslate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translate(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TermLoanMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-term-loan-master',
                templateUrl: './term-loan-master.component.html',
                styleUrls: ['./term-loan-master.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fadeInOutTranslate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translate(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }, { type: _term_loan_master_service__WEBPACK_IMPORTED_MODULE_11__["TermLoanService"] }, { type: _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_12__["CustomerIdService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["SchemeCodeDropdownService"] }, { type: _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["CustomerIDMasterDropdownService"] }, { type: _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["IntrestCategoryMasterDropdownService"] }, { type: _shared_dropdownService_repay_mode_service__WEBPACK_IMPORTED_MODULE_16__["RepayModeService"] }, { type: _shared_dropdownService_installment_method_service__WEBPACK_IMPORTED_MODULE_17__["InstallmentMethodService"] }, { type: _shared_dropdownService_authority_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["AuthorityMasterDropdownService"] }, { type: _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["DirectorMasterDropdownService"] }, { type: _shared_dropdownService_recovery_cleark_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["RecoveryClearkMasterDropdownService"] }, { type: _shared_dropdownService_priority_sector_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["PrioritySectorMasterDropdownService"] }, { type: _shared_dropdownService_weaker_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__["WeakerMasterDropdownService"] }, { type: _shared_dropdownService_purpose_master_dropdown_service__WEBPACK_IMPORTED_MODULE_23__["PurposeMasterDropdownService"] }, { type: _shared_dropdownService_industry_master_dropdown_service__WEBPACK_IMPORTED_MODULE_24__["IndustryMasterDropdownService"] }, { type: _shared_dropdownService_health_master_dropdown_service__WEBPACK_IMPORTED_MODULE_25__["HealthMasterDropdownService"] }, { type: _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_26__["cityMasterService"] }, { type: _shared_dropdownService_account_type_service__WEBPACK_IMPORTED_MODULE_27__["AccountTypeService"] }, { type: _shared_dropdownService_security_master_dropdown_service__WEBPACK_IMPORTED_MODULE_28__["SecurityMasterdropdownService"] }, { type: _policy_settings_definations_interest_rate_for_lacc_interest_rate_for_lacc_service__WEBPACK_IMPORTED_MODULE_29__["InterestRateForLoanandCCService"] }, { type: _policy_settings_information_priority_sector_master_priority_sector_master_service__WEBPACK_IMPORTED_MODULE_30__["PrioritySectorMasterService"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_31__["SystemMasterParametersService"] }, { type: _utility_scheme_parameters_term_loan_scheme_term_loan_scheme_service__WEBPACK_IMPORTED_MODULE_32__["TermLoanSchemeService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_33__["DatePipe"] }, { type: _policy_settings_definations_security_code_security_code_service__WEBPACK_IMPORTED_MODULE_34__["SecurityCodeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_35__["Router"] }, { type: _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__["NgSelectConfig"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__["DomSanitizer"] }]; }, { childMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], reloadTablePassing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: false }]
        }], ctdTabset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['ctdTabset']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/master/customer/term-loan-master/term-loan-master.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/master/customer/term-loan-master/term-loan-master.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TermLoanMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermLoanMasterModule", function() { return TermLoanMasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _term_loan_master_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./term-loan-master-routing.module */ "./src/app/theme/master/customer/term-loan-master/term-loan-master-routing.module.ts");
/* harmony import */ var _term_loan_master_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./term-loan-master.component */ "./src/app/theme/master/customer/term-loan-master/term-loan-master.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _term_loan_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./term-loan-master.service */ "./src/app/theme/master/customer/term-loan-master/term-loan-master.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/dropdownService/customer-id-master-dropdown.service */ "./src/app/shared/dropdownService/customer-id-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/interest-category-master-dropdown.service */ "./src/app/shared/dropdownService/interest-category-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_repay_mode_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/dropdownService/repay-mode.service */ "./src/app/shared/dropdownService/repay-mode.service.ts");
/* harmony import */ var _shared_dropdownService_installment_method_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/installment-method.service */ "./src/app/shared/dropdownService/installment-method.service.ts");
/* harmony import */ var _shared_dropdownService_authority_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/dropdownService/authority-master-dropdown.service */ "./src/app/shared/dropdownService/authority-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/dropdownService/director-master-dropdown.service */ "./src/app/shared/dropdownService/director-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_recovery_cleark_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/dropdownService/recovery-cleark-master-dropdown.service */ "./src/app/shared/dropdownService/recovery-cleark-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_priority_sector_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/dropdownService/priority-sector-master-dropdown.service */ "./src/app/shared/dropdownService/priority-sector-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_weaker_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/dropdownService/weaker-master-dropdown.service */ "./src/app/shared/dropdownService/weaker-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_purpose_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/dropdownService/purpose-master-dropdown.service */ "./src/app/shared/dropdownService/purpose-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_industry_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/dropdownService/industry-master-dropdown.service */ "./src/app/shared/dropdownService/industry-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_health_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/dropdownService/health-master-dropdown.service */ "./src/app/shared/dropdownService/health-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_account_type_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/dropdownService/account-type.service */ "./src/app/shared/dropdownService/account-type.service.ts");
/* harmony import */ var _shared_dropdownService_security_master_dropdown_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/dropdownService/security-master-dropdown.service */ "./src/app/shared/dropdownService/security-master-dropdown.service.ts");
/* harmony import */ var _policy_settings_definations_interest_rate_for_lacc_interest_rate_for_lacc_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service */ "./src/app/theme/master/policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service.ts");
/* harmony import */ var _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../customer-id/customer-id.module */ "./src/app/theme/master/customer/customer-id/customer-id.module.ts");
/* harmony import */ var _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/dropdownService/city-master-dropdown.service */ "./src/app/shared/dropdownService/city-master-dropdown.service.ts");
/* harmony import */ var _policy_settings_definations_security_code_security_code_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../policy-settings/definations/security-code/security-code.service */ "./src/app/theme/master/policy-settings/definations/security-code/security-code.service.ts");
/* harmony import */ var _policy_settings_information_priority_sector_master_priority_sector_master_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../policy-settings/information/priority-sector-master/priority-sector-master.service */ "./src/app/theme/master/policy-settings/information/priority-sector-master/priority-sector-master.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _utility_scheme_parameters_term_loan_scheme_term_loan_scheme_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../utility/scheme-parameters/term-loan-scheme/term-loan-scheme.service */ "./src/app/theme/utility/scheme-parameters/term-loan-scheme/term-loan-scheme.service.ts");
/* harmony import */ var _maintainance_security_details_securityDetails_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../maintainance/security-details/securityDetails.module */ "./src/app/theme/master/maintainance/security-details/securityDetails.module.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/theme/theme.module */ "./src/app/theme/theme.module.ts");







// import { SelectModule } from 'ng-select';


































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class TermLoanMasterModule {
}
TermLoanMasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermLoanMasterModule });
TermLoanMasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermLoanMasterModule_Factory(t) { return new (t || TermLoanMasterModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        _term_loan_master_service__WEBPACK_IMPORTED_MODULE_8__["TermLoanService"],
        _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["SchemeCodeDropdownService"],
        _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIdService"],
        _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["CustomerIDMasterDropdownService"],
        _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["IntrestCategoryMasterDropdownService"],
        _shared_dropdownService_repay_mode_service__WEBPACK_IMPORTED_MODULE_13__["RepayModeService"],
        _shared_dropdownService_installment_method_service__WEBPACK_IMPORTED_MODULE_14__["InstallmentMethodService"],
        _shared_dropdownService_authority_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["AuthorityMasterDropdownService"],
        _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["DirectorMasterDropdownService"],
        _shared_dropdownService_recovery_cleark_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["RecoveryClearkMasterDropdownService"],
        _shared_dropdownService_priority_sector_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["PrioritySectorMasterDropdownService"],
        _shared_dropdownService_weaker_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["WeakerMasterDropdownService"],
        _shared_dropdownService_purpose_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["PurposeMasterDropdownService"],
        _shared_dropdownService_industry_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["IndustryMasterDropdownService"],
        _shared_dropdownService_health_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__["HealthMasterDropdownService"],
        _shared_dropdownService_account_type_service__WEBPACK_IMPORTED_MODULE_23__["AccountTypeService"],
        _shared_dropdownService_security_master_dropdown_service__WEBPACK_IMPORTED_MODULE_24__["SecurityMasterdropdownService"],
        _policy_settings_definations_interest_rate_for_lacc_interest_rate_for_lacc_service__WEBPACK_IMPORTED_MODULE_25__["InterestRateForLoanandCCService"],
        _policy_settings_information_priority_sector_master_priority_sector_master_service__WEBPACK_IMPORTED_MODULE_29__["PrioritySectorMasterService"],
        _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_27__["cityMasterService"],
        _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_31__["SystemMasterParametersService"],
        _utility_scheme_parameters_term_loan_scheme_term_loan_scheme_service__WEBPACK_IMPORTED_MODULE_32__["TermLoanSchemeService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
        _policy_settings_definations_security_code_security_code_service__WEBPACK_IMPORTED_MODULE_28__["SecurityCodeService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _term_loan_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermLoanMasterRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            // SelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_26__["CustomerIdModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__["PerfectScrollbarModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _maintainance_security_details_securityDetails_module__WEBPACK_IMPORTED_MODULE_33__["SecurityDetailsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_35__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_34__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_34__["DatepickerModule"].forRoot(),
            src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_36__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermLoanMasterModule, { declarations: [_term_loan_master_component__WEBPACK_IMPORTED_MODULE_6__["TermLoanMasterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _term_loan_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermLoanMasterRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        // SelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_26__["CustomerIdModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__["PerfectScrollbarModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _maintainance_security_details_securityDetails_module__WEBPACK_IMPORTED_MODULE_33__["SecurityDetailsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_35__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_34__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_34__["DatepickerModule"], src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_36__["ThemeModule"]], exports: [_term_loan_master_component__WEBPACK_IMPORTED_MODULE_6__["TermLoanMasterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermLoanMasterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _term_loan_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermLoanMasterRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    // SelectModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_26__["CustomerIdModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__["PerfectScrollbarModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _maintainance_security_details_securityDetails_module__WEBPACK_IMPORTED_MODULE_33__["SecurityDetailsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_35__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_34__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_34__["DatepickerModule"].forRoot(),
                    src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_36__["ThemeModule"]
                ],
                declarations: [_term_loan_master_component__WEBPACK_IMPORTED_MODULE_6__["TermLoanMasterComponent"]],
                exports: [_term_loan_master_component__WEBPACK_IMPORTED_MODULE_6__["TermLoanMasterComponent"]],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                    _term_loan_master_service__WEBPACK_IMPORTED_MODULE_8__["TermLoanService"],
                    _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["SchemeCodeDropdownService"],
                    _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIdService"],
                    _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["CustomerIDMasterDropdownService"],
                    _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["IntrestCategoryMasterDropdownService"],
                    _shared_dropdownService_repay_mode_service__WEBPACK_IMPORTED_MODULE_13__["RepayModeService"],
                    _shared_dropdownService_installment_method_service__WEBPACK_IMPORTED_MODULE_14__["InstallmentMethodService"],
                    _shared_dropdownService_authority_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["AuthorityMasterDropdownService"],
                    _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["DirectorMasterDropdownService"],
                    _shared_dropdownService_recovery_cleark_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["RecoveryClearkMasterDropdownService"],
                    _shared_dropdownService_priority_sector_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["PrioritySectorMasterDropdownService"],
                    _shared_dropdownService_weaker_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["WeakerMasterDropdownService"],
                    _shared_dropdownService_purpose_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["PurposeMasterDropdownService"],
                    _shared_dropdownService_industry_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["IndustryMasterDropdownService"],
                    _shared_dropdownService_health_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__["HealthMasterDropdownService"],
                    _shared_dropdownService_account_type_service__WEBPACK_IMPORTED_MODULE_23__["AccountTypeService"],
                    _shared_dropdownService_security_master_dropdown_service__WEBPACK_IMPORTED_MODULE_24__["SecurityMasterdropdownService"],
                    _policy_settings_definations_interest_rate_for_lacc_interest_rate_for_lacc_service__WEBPACK_IMPORTED_MODULE_25__["InterestRateForLoanandCCService"],
                    _policy_settings_information_priority_sector_master_priority_sector_master_service__WEBPACK_IMPORTED_MODULE_29__["PrioritySectorMasterService"],
                    _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_27__["cityMasterService"],
                    _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_31__["SystemMasterParametersService"],
                    _utility_scheme_parameters_term_loan_scheme_term_loan_scheme_service__WEBPACK_IMPORTED_MODULE_32__["TermLoanSchemeService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
                    _policy_settings_definations_security_code_security_code_service__WEBPACK_IMPORTED_MODULE_28__["SecurityCodeService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/term-loan-master/term-loan-master.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/master/customer/term-loan-master/term-loan-master.service.ts ***!
  \************************************************************************************/
/*! exports provided: TermLoanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermLoanService", function() { return TermLoanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class TermLoanService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/term-loan-master/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/term-loan-master/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/term-loan-master/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/term-loan-master/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getData() {
        return this.http.get(this.url + '/term-loan-master/alldata').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //approve master
    approve(data) {
        return this.http.post(this.url + '/term-loan-master/approve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //unapporve master
    unapporve(data) {
        return this.http.post(this.url + '/term-loan-master/unapporve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //reject master
    reject(data) {
        return this.http.post(this.url + '/term-loan-master/reject', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
TermLoanService.ɵfac = function TermLoanService_Factory(t) { return new (t || TermLoanService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
TermLoanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TermLoanService, factory: TermLoanService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermLoanService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~shortcutkey-~e2f6e169.js.map