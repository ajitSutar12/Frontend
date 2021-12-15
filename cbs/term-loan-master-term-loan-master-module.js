(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["term-loan-master-term-loan-master-module"],{

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _term_loan_master_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./term-loan-master.service */ "./src/app/theme/master/customer/term-loan-master/term-loan-master.service.ts");
/* harmony import */ var _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/dropdownService/customer-id-master-dropdown.service */ "./src/app/shared/dropdownService/customer-id-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/interest-category-master-dropdown.service */ "./src/app/shared/dropdownService/interest-category-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_repay_mode_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/dropdownService/repay-mode.service */ "./src/app/shared/dropdownService/repay-mode.service.ts");
/* harmony import */ var _shared_dropdownService_installment_method_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/dropdownService/installment-method.service */ "./src/app/shared/dropdownService/installment-method.service.ts");
/* harmony import */ var _shared_dropdownService_authority_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/dropdownService/authority-master-dropdown.service */ "./src/app/shared/dropdownService/authority-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/dropdownService/director-master-dropdown.service */ "./src/app/shared/dropdownService/director-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_recovery_cleark_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/dropdownService/recovery-cleark-master-dropdown.service */ "./src/app/shared/dropdownService/recovery-cleark-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_priority_sector_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/dropdownService/priority-sector-master-dropdown.service */ "./src/app/shared/dropdownService/priority-sector-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_weaker_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/dropdownService/weaker-master-dropdown.service */ "./src/app/shared/dropdownService/weaker-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_purpose_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/dropdownService/purpose-master-dropdown.service */ "./src/app/shared/dropdownService/purpose-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_industry_master_dropdown_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/dropdownService/industry-master-dropdown.service */ "./src/app/shared/dropdownService/industry-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_health_master_dropdown_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/dropdownService/health-master-dropdown.service */ "./src/app/shared/dropdownService/health-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/dropdownService/city-master-dropdown.service */ "./src/app/shared/dropdownService/city-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_account_type_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/dropdownService/account-type.service */ "./src/app/shared/dropdownService/account-type.service.ts");
/* harmony import */ var _shared_dropdownService_security_master_dropdown_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/dropdownService/security-master-dropdown.service */ "./src/app/shared/dropdownService/security-master-dropdown.service.ts");
/* harmony import */ var _policy_settings_definations_interest_rate_for_lacc_interest_rate_for_lacc_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service */ "./src/app/theme/master/policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service.ts");
/* harmony import */ var _policy_settings_information_priority_sector_master_priority_sector_master_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../policy-settings/information/priority-sector-master/priority-sector-master.service */ "./src/app/theme/master/policy-settings/information/priority-sector-master/priority-sector-master.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _utility_scheme_parameters_term_loan_scheme_term_loan_scheme_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../utility/scheme-parameters/term-loan-scheme/term-loan-scheme.service */ "./src/app/theme/utility/scheme-parameters/term-loan-scheme/term-loan-scheme.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _policy_settings_definations_security_code_security_code_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../policy-settings/definations/security-code/security-code.service */ "./src/app/theme/master/policy-settings/definations/security-code/security-code.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _customer_id_customer_id_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../customer-id/customer-id.component */ "./src/app/theme/master/customer/customer-id/customer-id.component.ts");
/* harmony import */ var _maintainance_security_details_book_debts_book_debts_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../maintainance/security-details/book-debts/book-debts.component */ "./src/app/theme/master/maintainance/security-details/book-debts/book-debts.component.ts");
/* harmony import */ var _maintainance_security_details_customer_insurance_customer_insurance_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../maintainance/security-details/customer-insurance/customer-insurance.component */ "./src/app/theme/master/maintainance/security-details/customer-insurance/customer-insurance.component.ts");
/* harmony import */ var _maintainance_security_details_fire_policy_fire_policy_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../maintainance/security-details/fire-policy/fire-policy.component */ "./src/app/theme/master/maintainance/security-details/fire-policy/fire-policy.component.ts");
/* harmony import */ var _maintainance_security_details_furniture_and_fixture_furniture_and_fixture_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../maintainance/security-details/furniture-and-fixture/furniture-and-fixture.component */ "./src/app/theme/master/maintainance/security-details/furniture-and-fixture/furniture-and-fixture.component.ts");
/* harmony import */ var _maintainance_security_details_gold_and_silver_gold_and_silver_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../maintainance/security-details/gold-and-silver/gold-and-silver.component */ "./src/app/theme/master/maintainance/security-details/gold-and-silver/gold-and-silver.component.ts");
/* harmony import */ var _maintainance_security_details_govt_security_and_lic_govt_security_and_lic_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../maintainance/security-details/govt-security-and-lic/govt-security-and-lic.component */ "./src/app/theme/master/maintainance/security-details/govt-security-and-lic/govt-security-and-lic.component.ts");
/* harmony import */ var _maintainance_security_details_land_and_buildings_land_and_buildings_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../maintainance/security-details/land-and-buildings/land-and-buildings.component */ "./src/app/theme/master/maintainance/security-details/land-and-buildings/land-and-buildings.component.ts");
/* harmony import */ var _maintainance_security_details_market_shares_market_shares_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../maintainance/security-details/market-shares/market-shares.component */ "./src/app/theme/master/maintainance/security-details/market-shares/market-shares.component.ts");
/* harmony import */ var _maintainance_security_details_other_security_other_security_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../maintainance/security-details/other-security/other-security.component */ "./src/app/theme/master/maintainance/security-details/other-security/other-security.component.ts");
/* harmony import */ var _maintainance_security_details_own_deposits_own_deposits_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../maintainance/security-details/own-deposits/own-deposits.component */ "./src/app/theme/master/maintainance/security-details/own-deposits/own-deposits.component.ts");
/* harmony import */ var _maintainance_security_details_plant_and_machinery_plant_and_machinery_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../maintainance/security-details/plant-and-machinery/plant-and-machinery.component */ "./src/app/theme/master/maintainance/security-details/plant-and-machinery/plant-and-machinery.component.ts");
/* harmony import */ var _maintainance_security_details_pleadge_stock_pleadge_stock_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../maintainance/security-details/pleadge-stock/pleadge-stock.component */ "./src/app/theme/master/maintainance/security-details/pleadge-stock/pleadge-stock.component.ts");
/* harmony import */ var _maintainance_security_details_stock_statement_stock_statement_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../maintainance/security-details/stock-statement/stock-statement.component */ "./src/app/theme/master/maintainance/security-details/stock-statement/stock-statement.component.ts");
/* harmony import */ var _maintainance_security_details_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../maintainance/security-details/vehicle/vehicle.component */ "./src/app/theme/master/maintainance/security-details/vehicle/vehicle.component.ts");




// Creating and maintaining form fields with validation 

// Displaying Sweet Alert

// Angular Datatable Directive  

//animation


















































function TermLoanMasterComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_div_18_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r2.angForm.controls["AC_TYPE"].errors.required);
} }
function TermLoanMasterComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_div_29_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["AC_CUSTID"].errors == null ? null : ctx_r3.angForm.controls["AC_CUSTID"].errors.required);
} }
function TermLoanMasterComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_div_52_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.angForm.controls["AC_TITLE"].errors == null ? null : ctx_r5.angForm.controls["AC_TITLE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_63_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_10_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.angForm.controls["AC_OPDATE"].errors == null ? null : ctx_r21.angForm.controls["AC_OPDATE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_63_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_42_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.angForm.controls["REF_ACNO"].errors == null ? null : ctx_r22.angForm.controls["REF_ACNO"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_63_div_58_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_58_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.angForm.controls["AC_INTCATA"].errors == null ? null : ctx_r23.angForm.controls["AC_INTCATA"].errors.required);
} }
function TermLoanMasterComponent_ng_template_63_div_67_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_67_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r24.angForm.controls["AC_SANCTION_AMOUNT"].errors == null ? null : ctx_r24.angForm.controls["AC_SANCTION_AMOUNT"].errors.pattern) || (ctx_r24.angForm.controls["AC_SANCTION_AMOUNT"].errors == null ? null : ctx_r24.angForm.controls["AC_SANCTION_AMOUNT"].errors.required));
} }
function TermLoanMasterComponent_ng_template_63_div_77_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_77_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r25.angForm.controls["AC_SANCTION_DATE"].errors == null ? null : ctx_r25.angForm.controls["AC_SANCTION_DATE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_63_div_86_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_86_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r26.angForm.controls["AC_DRAWPOWER_AMT"].errors == null ? null : ctx_r26.angForm.controls["AC_DRAWPOWER_AMT"].errors.pattern) || (ctx_r26.angForm.controls["AC_DRAWPOWER_AMT"].errors == null ? null : ctx_r26.angForm.controls["AC_DRAWPOWER_AMT"].errors.required));
} }
function TermLoanMasterComponent_ng_template_63_div_95_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_95_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r27.angForm.controls["AC_MONTHS"].errors == null ? null : ctx_r27.angForm.controls["AC_MONTHS"].errors.pattern) || (ctx_r27.angForm.controls["AC_MONTHS"].errors == null ? null : ctx_r27.angForm.controls["AC_MONTHS"].errors.required));
} }
function TermLoanMasterComponent_ng_template_63_div_104_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_104_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r28.angForm.controls["AC_EXPIRE_DATE"].errors == null ? null : ctx_r28.angForm.controls["AC_EXPIRE_DATE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_63_div_113_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_113_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r29.angForm.controls["AC_INTRATE"].errors == null ? null : ctx_r29.angForm.controls["AC_INTRATE"].errors.pattern) || (ctx_r29.angForm.controls["AC_INTRATE"].errors == null ? null : ctx_r29.angForm.controls["AC_INTRATE"].errors.required));
} }
function TermLoanMasterComponent_ng_template_63_div_118_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_118_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_REPAYMODE"].errors == null ? null : ctx_r30.angForm.controls["AC_REPAYMODE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_63_div_122_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_122_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.angForm.controls["INSTALLMENT_METHOD"].errors == null ? null : ctx_r31.angForm.controls["INSTALLMENT_METHOD"].errors.required);
} }
function TermLoanMasterComponent_ng_template_63_div_135_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_135_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r32.angForm.controls["AC_MORATORIUM_PERIOD"].errors == null ? null : ctx_r32.angForm.controls["AC_MORATORIUM_PERIOD"].errors.pattern) || (ctx_r32.angForm.controls["AC_MORATORIUM_PERIOD"].errors == null ? null : ctx_r32.angForm.controls["AC_MORATORIUM_PERIOD"].errors.maxlength));
} }
function TermLoanMasterComponent_ng_template_63_div_142_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_63_div_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_63_div_142_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r33.angForm.controls["AC_GRACE_PERIOD"].errors == null ? null : ctx_r33.angForm.controls["AC_GRACE_PERIOD"].errors.pattern) || (ctx_r33.angForm.controls["AC_GRACE_PERIOD"].errors == null ? null : ctx_r33.angForm.controls["AC_GRACE_PERIOD"].errors.maxlength));
} }
function TermLoanMasterComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_63_Template_input_ngModelChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r47.changeDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Opening Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TermLoanMasterComponent_ng_template_63_div_10_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_63_Template_input_ngModelChange_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.getExpiryDate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Renewal Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Birth Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Member Scheme ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Member No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Manual Ref.Member No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, TermLoanMasterComponent_ng_template_63_div_42_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Cast");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Occupation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ng-select", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_63_Template_ng_select_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.int_category = $event; })("selected", function TermLoanMasterComponent_ng_template_63_Template_ng_select_selected_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r51.getInterest(ctx_r51.int_category); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, TermLoanMasterComponent_ng_template_63_div_58_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_63_Template_input_ngModelChange_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.sanctionAmt = $event; })("ngModelChange", function TermLoanMasterComponent_ng_template_63_Template_input_ngModelChange_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r53.changeAmt(); return ctx_r53.calculation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Sanction Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, TermLoanMasterComponent_ng_template_63_div_67_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Sanction Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, TermLoanMasterComponent_ng_template_63_div_77_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_63_Template_input_ngModelChange_81_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.drawingPower = $event; })("focusout", function TermLoanMasterComponent_ng_template_63_Template_input_focusout_81_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r55.calculation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Drawing Power");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, TermLoanMasterComponent_ng_template_63_div_86_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_63_Template_input_ngModelChange_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r56.getExpiryDate(); return ctx_r56.calculation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Period(Months)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, TermLoanMasterComponent_ng_template_63_div_95_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, TermLoanMasterComponent_ng_template_63_div_104_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_63_Template_input_ngModelChange_108_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r57.intRate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Interest Rate%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, TermLoanMasterComponent_ng_template_63_div_113_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "ng-select", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function TermLoanMasterComponent_ng_template_63_Template_ng_select_selected_117_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r58.calculation(); })("ngModelChange", function TermLoanMasterComponent_ng_template_63_Template_ng_select_ngModelChange_117_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r59.repay = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, TermLoanMasterComponent_ng_template_63_div_118_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "ng-select", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_63_Template_ng_select_ngModelChange_121_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r60.installmentType = $event; })("selected", function TermLoanMasterComponent_ng_template_63_Template_ng_select_selected_121_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r61.calculation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](122, TermLoanMasterComponent_ng_template_63_div_122_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Installment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Moratorium Period(Months)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](135, TermLoanMasterComponent_ng_template_63_div_135_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Grace Period(Days)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](142, TermLoanMasterComponent_ng_template_63_div_142_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Recovery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_OPDATE"].invalid && (ctx_r6.angForm.controls["AC_OPDATE"].dirty || ctx_r6.angForm.controls["AC_OPDATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["REF_ACNO"].invalid && (ctx_r6.angForm.controls["REF_ACNO"].dirty || ctx_r6.angForm.controls["REF_ACNO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r6.intCat)("multiple", false)("ngModel", ctx_r6.int_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_INTCATA"].invalid && (ctx_r6.angForm.controls["AC_INTCATA"].dirty || ctx_r6.angForm.controls["AC_INTCATA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.sanctionAmt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_SANCTION_AMOUNT"].invalid && (ctx_r6.angForm.controls["AC_SANCTION_AMOUNT"].dirty || ctx_r6.angForm.controls["AC_SANCTION_AMOUNT"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_SANCTION_DATE"].invalid && (ctx_r6.angForm.controls["AC_SANCTION_DATE"].dirty || ctx_r6.angForm.controls["AC_SANCTION_AMOUNT"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.drawingPower);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_DRAWPOWER_AMT"].invalid && (ctx_r6.angForm.controls["AC_DRAWPOWER_AMT"].dirty || ctx_r6.angForm.controls["AC_DRAWPOWER_AMT"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_MONTHS"].invalid && (ctx_r6.angForm.controls["AC_MONTHS"].dirty || ctx_r6.angForm.controls["AC_MONTHS"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_EXPIRE_DATE"].invalid && (ctx_r6.angForm.controls["AC_EXPIRE_DATE"].dirty || ctx_r6.angForm.controls["AC_EXPIRE_DATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.intRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_INTRATE"].invalid && (ctx_r6.angForm.controls["AC_INTRATE"].dirty || ctx_r6.angForm.controls["AC_INTRATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r6.repayModeOption)("multiple", false)("ngModel", ctx_r6.repay);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_REPAYMODE"].invalid && (ctx_r6.angForm.controls["AC_REPAYMODE"].dirty || ctx_r6.angForm.controls["AC_REPAYMODE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r6.installment)("ngModel", ctx_r6.installmentType)("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["INSTALLMENT_METHOD"].invalid && (ctx_r6.angForm.controls["INSTALLMENT_METHOD"].dirty || ctx_r6.angForm.controls["INSTALLMENT_METHOD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_MORATORIUM_PERIOD"].invalid && (ctx_r6.angForm.controls["AC_MORATORIUM_PERIOD"].dirty || ctx_r6.angForm.controls["AC_MORATORIUM_PERIOD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_GRACE_PERIOD"].invalid && (ctx_r6.angForm.controls["AC_GRACE_PERIOD"].dirty || ctx_r6.angForm.controls["AC_GRACE_PERIOD"].touched));
} }
function TermLoanMasterComponent_ng_template_65_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_65_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_65_div_5_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r62.angForm.controls["AC_AUTHORITY"].errors == null ? null : ctx_r62.angForm.controls["AC_AUTHORITY"].errors.required);
} }
function TermLoanMasterComponent_ng_template_65_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_65_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_65_div_9_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.angForm.controls["AC_RECOMMEND_BY"].errors == null ? null : ctx_r63.angForm.controls["AC_RECOMMEND_BY"].errors.required);
} }
function TermLoanMasterComponent_ng_template_65_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_65_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_65_div_13_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r64.angForm.controls["AC_RECOVERY_CLERK"].errors == null ? null : ctx_r64.angForm.controls["AC_RECOVERY_CLERK"].errors.required);
} }
function TermLoanMasterComponent_ng_template_65_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_65_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_65_div_17_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r65.angForm.controls["AC_PRIORITY"].errors == null ? null : ctx_r65.angForm.controls["AC_PRIORITY"].errors.required);
} }
function TermLoanMasterComponent_ng_template_65_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_65_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_65_div_46_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r66.angForm.controls["AC_WEAKER"].errors == null ? null : ctx_r66.angForm.controls["AC_WEAKER"].errors.required);
} }
function TermLoanMasterComponent_ng_template_65_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_65_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_65_div_50_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r67.angForm.controls["AC_PURPOSE"].errors == null ? null : ctx_r67.angForm.controls["AC_PURPOSE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_65_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_65_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_65_div_55_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r68.angForm.controls["AC_INDUSTRY"].errors == null ? null : ctx_r68.angForm.controls["AC_INDUSTRY"].errors.required);
} }
function TermLoanMasterComponent_ng_template_65_div_59_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_65_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_65_div_59_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r69.angForm.controls["AC_HEALTH"].errors == null ? null : ctx_r69.angForm.controls["AC_HEALTH"].errors.required);
} }
function TermLoanMasterComponent_ng_template_65_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_65_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_65_div_63_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r70.angForm.controls["AC_RELATION_TYPE"].errors == null ? null : ctx_r70.angForm.controls["AC_RELATION_TYPE"].errors.required);
} }
function TermLoanMasterComponent_ng_template_65_div_83_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_65_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_65_div_83_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r71.angForm.controls["AC_COREG_NO"].errors == null ? null : ctx_r71.angForm.controls["AC_COREG_NO"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_65_div_96_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_65_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_65_div_96_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.angForm.controls["AC_COREG_AMT"].errors == null ? null : ctx_r72.angForm.controls["AC_COREG_AMT"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_65_div_106_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_65_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_65_div_106_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r73.angForm.controls["AC_RESO_NO"].errors == null ? null : ctx_r73.angForm.controls["AC_RESO_NO"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ng-select", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TermLoanMasterComponent_ng_template_65_div_5_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ng-select", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TermLoanMasterComponent_ng_template_65_div_9_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ng-select", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TermLoanMasterComponent_ng_template_65_div_13_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ng-select", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_65_Template_ng_select_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r86.idp = $event; })("selected", function TermLoanMasterComponent_ng_template_65_Template_ng_select_selected_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r88.getPriority(ctx_r88.idp); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TermLoanMasterComponent_ng_template_65_div_17_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Priority 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Priority 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Priority 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Is Weaker A/c ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "ng-select", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, TermLoanMasterComponent_ng_template_65_div_46_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "ng-select", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, TermLoanMasterComponent_ng_template_65_div_50_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "ng-select", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, TermLoanMasterComponent_ng_template_65_div_55_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "ng-select", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, TermLoanMasterComponent_ng_template_65_div_59_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ng-select", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function TermLoanMasterComponent_ng_template_65_Template_ng_select_selected_62_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r89.directorShow($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, TermLoanMasterComponent_ng_template_65_div_63_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "ng-select", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Director Relation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h6", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Registration:- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, TermLoanMasterComponent_ng_template_65_div_83_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "label", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, TermLoanMasterComponent_ng_template_65_div_96_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "h6", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Resolution Details:- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "label", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, TermLoanMasterComponent_ng_template_65_div_106_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "label", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r7.sanction)("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_AUTHORITY"].invalid && (ctx_r7.angForm.controls["AC_AUTHORITY"].dirty || ctx_r7.angForm.controls["AC_AUTHORITY"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r7.Recommended)("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_RECOMMEND_BY"].invalid && (ctx_r7.angForm.controls["AC_RECOMMEND_BY"].dirty || ctx_r7.angForm.controls["AC_RECOMMEND_BY"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r7.Recovery)("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_RECOVERY_CLERK"].invalid && (ctx_r7.angForm.controls["AC_RECOVERY_CLERK"].dirty || ctx_r7.angForm.controls["AC_RECOVERY_CLERK"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r7.priority)("multiple", false)("ngModel", ctx_r7.idp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_PRIORITY"].invalid && (ctx_r7.angForm.controls["AC_PRIORITY"].dirty || ctx_r7.angForm.controls["AC_PRIORITY"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r7.isWeaker == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r7.weaker)("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_WEAKER"].invalid && (ctx_r7.angForm.controls["AC_WEAKER"].dirty || ctx_r7.angForm.controls["AC_WEAKER"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r7.purpose)("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_PURPOSE"].invalid && (ctx_r7.angForm.controls["AC_PURPOSE"].dirty || ctx_r7.angForm.controls["AC_PURPOSE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r7.industry)("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_INDUSTRY"].invalid && (ctx_r7.angForm.controls["AC_INDUSTRY"].dirty || ctx_r7.angForm.controls["AC_INDUSTRY"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r7.health)("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_HEALTH"].invalid && (ctx_r7.angForm.controls["AC_HEALTH"].dirty || ctx_r7.angForm.controls["AC_HEALTH"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r7.account)("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_RELATION_TYPE"].invalid && (ctx_r7.angForm.controls["AC_RELATION_TYPE"].dirty || ctx_r7.angForm.controls["AC_RELATION_TYPE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r7.director)("multiple", false)("disabled", ctx_r7.AC_DIRECTOR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_COREG_NO"].invalid && (ctx_r7.angForm.controls["AC_COREG_NO"].dirty || ctx_r7.angForm.controls["AC_COREG_NO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_COREG_AMT"].invalid && (ctx_r7.angForm.controls["AC_COREG_AMT"].dirty || ctx_r7.angForm.controls["AC_COREG_AMT"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_RESO_NO"].invalid && (ctx_r7.angForm.controls["AC_RESO_NO"].dirty || ctx_r7.angForm.controls["AC_RESO_NO"].touched));
} }
function TermLoanMasterComponent_ng_template_67_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_div_8_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r90.angForm.controls["AC_HONO"].errors == null ? null : ctx_r90.angForm.controls["AC_HONO"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_67_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_div_15_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r91.angForm.controls["AC_WARD"].errors == null ? null : ctx_r91.angForm.controls["AC_WARD"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_67_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_div_22_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r92.angForm.controls["AC_ADDR"].errors == null ? null : ctx_r92.angForm.controls["AC_ADDR"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_67_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_div_30_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r93.angForm.controls["AC_GALLI"].errors == null ? null : ctx_r93.angForm.controls["AC_GALLI"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_67_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_div_37_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r94.angForm.controls["AC_AREA"].errors == null ? null : ctx_r94.angForm.controls["AC_AREA"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_67_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_div_50_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r95.angForm.controls["AC_PIN"].errors == null ? null : ctx_r95.angForm.controls["AC_PIN"].errors.pattern) || (ctx_r95.angForm.controls["AC_PIN"].errors == null ? null : ctx_r95.angForm.controls["AC_PIN"].errors.minlength) || (ctx_r95.angForm.controls["AC_PIN"].errors == null ? null : ctx_r95.angForm.controls["AC_PIN"].errors.maxlength));
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_ng_container_58_div_8_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r106.angForm.controls["AC_THONO"].errors == null ? null : ctx_r106.angForm.controls["AC_THONO"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_ng_container_58_div_15_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r107.angForm.controls["AC_TWARD"].errors == null ? null : ctx_r107.angForm.controls["AC_TWARD"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_ng_container_58_div_22_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r108.angForm.controls["AC_TADDR"].errors == null ? null : ctx_r108.angForm.controls["AC_TADDR"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_ng_container_58_div_30_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r109.angForm.controls["AC_TGALLI"].errors == null ? null : ctx_r109.angForm.controls["AC_TGALLI"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_ng_container_58_div_37_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r110.angForm.controls["AC_TAREA"].errors == null ? null : ctx_r110.angForm.controls["AC_TAREA"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_ng_container_58_div_48_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r111.angForm.controls["AC_TPIN"].errors == null ? null : ctx_r111.angForm.controls["AC_TPIN"].errors.pattern) || (ctx_r111.angForm.controls["AC_TPIN"].errors == null ? null : ctx_r111.angForm.controls["AC_TPIN"].errors.minlength) || (ctx_r111.angForm.controls["AC_TPIN"].errors == null ? null : ctx_r111.angForm.controls["AC_TPIN"].errors.maxlength));
} }
function TermLoanMasterComponent_ng_template_67_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TermLoanMasterComponent_ng_template_67_ng_container_58_div_8_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TermLoanMasterComponent_ng_template_67_ng_container_58_div_15_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, TermLoanMasterComponent_ng_template_67_ng_container_58_div_22_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, TermLoanMasterComponent_ng_template_67_ng_container_58_div_30_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, TermLoanMasterComponent_ng_template_67_ng_container_58_div_37_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "ng-select", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, TermLoanMasterComponent_ng_template_67_ng_container_58_div_48_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r96.angForm.controls["AC_THONO"].invalid && (ctx_r96.angForm.controls["AC_THONO"].dirty || ctx_r96.angForm.controls["AC_THONO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r96.angForm.controls["AC_TWARD"].invalid && (ctx_r96.angForm.controls["AC_TWARD"].dirty || ctx_r96.angForm.controls["AC_TWARD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r96.angForm.controls["AC_TADDR"].invalid && (ctx_r96.angForm.controls["AC_TADDR"].dirty || ctx_r96.angForm.controls["AC_TADDR"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r96.angForm.controls["AC_TGALLI"].invalid && (ctx_r96.angForm.controls["AC_TGALLI"].dirty || ctx_r96.angForm.controls["AC_TGALLI"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r96.angForm.controls["AC_TAREA"].invalid && (ctx_r96.angForm.controls["AC_TAREA"].dirty || ctx_r96.angForm.controls["AC_TAREA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r96.city)("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r96.angForm.controls["AC_TPIN"].invalid && (ctx_r96.angForm.controls["AC_TPIN"].dirty || ctx_r96.angForm.controls["AC_TPIN"].touched));
} }
function TermLoanMasterComponent_ng_template_67_div_66_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_div_66_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r97.angForm.controls["AC_MOBILENO"].errors == null ? null : ctx_r97.angForm.controls["AC_MOBILENO"].errors.pattern) || (ctx_r97.angForm.controls["AC_MOBILENO"].errors == null ? null : ctx_r97.angForm.controls["AC_MOBILENO"].errors.maxlength) || (ctx_r97.angForm.controls["AC_MOBILENO"].errors == null ? null : ctx_r97.angForm.controls["AC_MOBILENO"].errors.minlength));
} }
function TermLoanMasterComponent_ng_template_67_div_73_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_div_73_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r98.angForm.controls["AC_PHONE_RES"].errors == null ? null : ctx_r98.angForm.controls["AC_PHONE_RES"].errors.pattern) || (ctx_r98.angForm.controls["AC_PHONE_RES"].errors == null ? null : ctx_r98.angForm.controls["AC_PHONE_RES"].errors.maxlength) || (ctx_r98.angForm.controls["AC_PHONE_RES"].errors == null ? null : ctx_r98.angForm.controls["AC_PHONE_RES"].errors.minlength));
} }
function TermLoanMasterComponent_ng_template_67_div_80_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_67_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_67_div_80_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r99.angForm.controls["AC_PHONE_OFFICE"].errors == null ? null : ctx_r99.angForm.controls["AC_PHONE_OFFICE"].errors.pattern) || (ctx_r99.angForm.controls["AC_PHONE_OFFICE"].errors == null ? null : ctx_r99.angForm.controls["AC_PHONE_OFFICE"].errors.maxlength) || (ctx_r99.angForm.controls["AC_PHONE_OFFICE"].errors == null ? null : ctx_r99.angForm.controls["AC_PHONE_OFFICE"].errors.minlength));
} }
function TermLoanMasterComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TermLoanMasterComponent_ng_template_67_div_8_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TermLoanMasterComponent_ng_template_67_div_15_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, TermLoanMasterComponent_ng_template_67_div_22_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, TermLoanMasterComponent_ng_template_67_div_30_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, TermLoanMasterComponent_ng_template_67_div_37_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, TermLoanMasterComponent_ng_template_67_div_50_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_67_Template_label_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r121.tempAsPermanent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Is Temporory Address same as Permanent Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, TermLoanMasterComponent_ng_template_67_ng_container_58_Template, 49, 9, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, TermLoanMasterComponent_ng_template_67_div_66_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Residential(R)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, TermLoanMasterComponent_ng_template_67_div_73_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "label", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Office(O)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, TermLoanMasterComponent_ng_template_67_div_80_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_HONO"].invalid && (ctx_r8.angForm.controls["AC_HONO"].dirty || ctx_r8.angForm.controls["AC_HONO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_WARD"].invalid && (ctx_r8.angForm.controls["AC_WARD"].dirty || ctx_r8.angForm.controls["AC_WARD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_ADDR"].invalid && (ctx_r8.angForm.controls["AC_ADDR"].dirty || ctx_r8.angForm.controls["AC_ADDR"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_GALLI"].invalid && (ctx_r8.angForm.controls["AC_GALLI"].dirty || ctx_r8.angForm.controls["AC_GALLI"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_AREA"].invalid && (ctx_r8.angForm.controls["AC_AREA"].dirty || ctx_r8.angForm.controls["AC_AREA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_PIN"].invalid && (ctx_r8.angForm.controls["AC_PIN"].dirty || ctx_r8.angForm.controls["AC_PIN"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.tempAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_MOBILENO"].invalid && (ctx_r8.angForm.controls["AC_MOBILENO"].dirty || ctx_r8.angForm.controls["AC_MOBILENO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_PHONE_RES"].invalid && (ctx_r8.angForm.controls["AC_PHONE_RES"].dirty || ctx_r8.angForm.controls["AC_PHONE_RES"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.angForm.controls["AC_PHONE_OFFICE"].invalid && (ctx_r8.angForm.controls["AC_PHONE_OFFICE"].dirty || ctx_r8.angForm.controls["AC_PHONE_OFFICE"].touched));
} }
function TermLoanMasterComponent_ng_template_69_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_69_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r144); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r143.addField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_69_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_69_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r146); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r145.updateField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_69_tbody_18_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_69_tbody_18_tr_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151); const indexOfelement_r149 = ctx.index; const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r150.delField(indexOfelement_r149); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_69_tbody_18_tr_10_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151); const data_r148 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); _r127.show(); return ctx_r152.showSecurity(data_r148.SECURITY_CODE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r148 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r148.SECURITY_CODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r148.SECURITY_VALUE);
} }
function TermLoanMasterComponent_ng_template_69_tbody_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TermLoanMasterComponent_ng_template_69_tbody_18_tr_10_Template, 10, 2, "tr", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r125.multiSecurity);
} }
function TermLoanMasterComponent_ng_template_69_tbody_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_69_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-book-debts", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newbookEvent", function TermLoanMasterComponent_ng_template_69_ng_container_30_Template_app_book_debts_newbookEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r154); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r153.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-customer-insurance", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newcustomerInsuranceEvent", function TermLoanMasterComponent_ng_template_69_ng_container_31_Template_app_customer_insurance_newcustomerInsuranceEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r156); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r155.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-fire-policy", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newfirePolicyEvent", function TermLoanMasterComponent_ng_template_69_ng_container_32_Template_app_fire_policy_newfirePolicyEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r158); const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r157.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-furniture-and-fixture", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newfurnitureFixEvent", function TermLoanMasterComponent_ng_template_69_ng_container_33_Template_app_furniture_and_fixture_newfurnitureFixEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r160); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r159.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-gold-and-silver", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newGoldsilverEvent", function TermLoanMasterComponent_ng_template_69_ng_container_34_Template_app_gold_and_silver_newGoldsilverEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r162); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r161.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-govt-security-and-lic", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newgovtSecurityEvent", function TermLoanMasterComponent_ng_template_69_ng_container_35_Template_app_govt_security_and_lic_newgovtSecurityEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r164); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r163.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-land-and-buildings", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newLandBuldingEvent", function TermLoanMasterComponent_ng_template_69_ng_container_36_Template_app_land_and_buildings_newLandBuldingEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r166); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r165.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-market-shares", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newmarketShareEvent", function TermLoanMasterComponent_ng_template_69_ng_container_37_Template_app_market_shares_newmarketShareEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r168); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r167.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-other-security", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newOtherSecurityEvent", function TermLoanMasterComponent_ng_template_69_ng_container_38_Template_app_other_security_newOtherSecurityEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r170); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r169.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-own-deposits", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newOwnDepositEvent", function TermLoanMasterComponent_ng_template_69_ng_container_39_Template_app_own_deposits_newOwnDepositEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r172); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r171.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-plant-and-machinery", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newPlantandMachiEvent", function TermLoanMasterComponent_ng_template_69_ng_container_40_Template_app_plant_and_machinery_newPlantandMachiEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r174); const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r173.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-pleadge-stock", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newPleadgeEvent", function TermLoanMasterComponent_ng_template_69_ng_container_41_Template_app_pleadge_stock_newPleadgeEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r176); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r175.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-stock-statement", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newStockEvent", function TermLoanMasterComponent_ng_template_69_ng_container_42_Template_app_stock_statement_newStockEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r177.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-vehicle", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newVehicalEvent", function TermLoanMasterComponent_ng_template_69_ng_container_43_Template_app_vehicle_newVehicalEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r180); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r179.newItemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", _r1);
} }
function TermLoanMasterComponent_ng_template_69_div_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_69_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_69_div_54_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r142.angForm.controls["AC_REMARK"].errors == null ? null : ctx_r142.angForm.controls["AC_REMARK"].errors.pattern) || (ctx_r142.angForm.controls["AC_REMARK"].errors == null ? null : ctx_r142.angForm.controls["AC_REMARK"].errors.required));
} }
function TermLoanMasterComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ng-select", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function TermLoanMasterComponent_ng_template_69_Template_ng_select_selected_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r183); const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r182.securityDetails($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Total Security Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TermLoanMasterComponent_ng_template_69_button_12_Template, 2, 0, "button", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TermLoanMasterComponent_ng_template_69_button_13_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "table", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TermLoanMasterComponent_ng_template_69_tbody_18_Template, 11, 1, "tbody", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, TermLoanMasterComponent_ng_template_69_tbody_19_Template, 4, 0, "tbody", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "app-modal-basic", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_69_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r183); const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return _r127.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "perfect-scrollbar", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, TermLoanMasterComponent_ng_template_69_ng_container_30_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, TermLoanMasterComponent_ng_template_69_ng_container_31_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, TermLoanMasterComponent_ng_template_69_ng_container_32_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, TermLoanMasterComponent_ng_template_69_ng_container_33_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, TermLoanMasterComponent_ng_template_69_ng_container_34_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, TermLoanMasterComponent_ng_template_69_ng_container_35_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, TermLoanMasterComponent_ng_template_69_ng_container_36_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, TermLoanMasterComponent_ng_template_69_ng_container_37_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, TermLoanMasterComponent_ng_template_69_ng_container_38_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, TermLoanMasterComponent_ng_template_69_ng_container_39_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, TermLoanMasterComponent_ng_template_69_ng_container_40_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, TermLoanMasterComponent_ng_template_69_ng_container_41_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, TermLoanMasterComponent_ng_template_69_ng_container_42_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, TermLoanMasterComponent_ng_template_69_ng_container_43_Template, 2, 1, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_69_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r183); const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return _r127.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Remark");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, TermLoanMasterComponent_ng_template_69_div_54_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r9.security)("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.addShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.UpdateShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r9.multiSecurity == null ? null : ctx_r9.multiSecurity.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r9.multiSecurity == null ? null : ctx_r9.multiSecurity.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dialogClass", "modal-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.BOOK_DEBTS);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.CUST_INSURANCE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.FIRE_POLICY);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.FURNITURE_FIXTURE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.GOLD_SILVER);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.GOVT_SECU_LIC);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.LAND_BUILDING);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.MARKET_SHARE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.OTHER_SECURITY);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.OWN_DEPOSIT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.PLANT_MACHINARY);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.PLEDGE_STOCK);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.STOCK_STATEMENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.VEHICLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.angForm.controls["AC_REMARK"].invalid && (ctx_r9.angForm.controls["AC_REMARK"].dirty || ctx_r9.angForm.controls["AC_REMARK"].touched));
} }
function TermLoanMasterComponent_ng_template_71_div_12_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_71_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_71_div_12_div_5_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r187.angForm.controls["GAC_CUSTID"].errors == null ? null : ctx_r187.angForm.controls["GAC_CUSTID"].errors.required);
} }
function TermLoanMasterComponent_ng_template_71_div_12_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_71_div_12_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r194); const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r193.addGuarantor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Guarantor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_71_div_12_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_71_div_12_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r196); const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r195.updateGuarantor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_71_div_12_tbody_37_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_71_div_12_tbody_37_tr_14_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r201); const indexOfelement_r199 = ctx.index; const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r200.editGuarantor(indexOfelement_r199); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_71_div_12_tbody_37_tr_14_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r201); const indexOfelement_r199 = ctx.index; const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r202.delGuarantor(indexOfelement_r199); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r198 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r198.GAC_CUSTID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r198.AC_MEMBNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r198.AC_MEMBTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r198.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r198.EXP_DATE);
} }
function TermLoanMasterComponent_ng_template_71_div_12_tbody_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Customer Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Member no");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Member Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TermLoanMasterComponent_ng_template_71_div_12_tbody_37_tr_14_Template, 17, 5, "tr", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r190.multiGuarantor);
} }
function TermLoanMasterComponent_ng_template_71_div_12_tbody_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_71_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ng-select", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_71_div_12_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r204); const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r203.Gid = $event; })("selected", function TermLoanMasterComponent_ng_template_71_div_12_Template_ng_select_selected_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r204); const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r205.getgCustomer(ctx_r205.Gid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TermLoanMasterComponent_ng_template_71_div_12_div_5_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Member No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Member Scheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, TermLoanMasterComponent_ng_template_71_div_12_button_31_Template, 2, 0, "button", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, TermLoanMasterComponent_ng_template_71_div_12_button_32_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "table", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, TermLoanMasterComponent_ng_template_71_div_12_tbody_37_Template, 15, 1, "tbody", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, TermLoanMasterComponent_ng_template_71_div_12_tbody_38_Template, 4, 0, "tbody", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r186.GCust_ID)("multiple", false)("ngModel", ctx_r186.Gid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r186.angForm.controls["GAC_CUSTID"].invalid && (ctx_r186.angForm.controls["GAC_CUSTID"].dirty || ctx_r186.angForm.controls["GAC_CUSTID"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r186.GuarantorShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r186.GuarantorUpdateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r186.multiGuarantor == null ? null : ctx_r186.multiGuarantor.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r186.multiGuarantor == null ? null : ctx_r186.multiGuarantor.length) == 0);
} }
const _c0 = function (a0) { return { "isActive": a0 }; };
function TermLoanMasterComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Guarantor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_71_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r207); const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r206.OpenLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Click Here To Modify");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TermLoanMasterComponent_ng_template_71_div_12_Template, 39, 9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r10.GuarantorTrue));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.GuarantorTrue);
} }
function TermLoanMasterComponent_ng_template_73_div_12_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_73_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_73_div_12_div_5_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r209.angForm.controls["CAC_CUSTID"].errors == null ? null : ctx_r209.angForm.controls["CAC_CUSTID"].errors.required);
} }
function TermLoanMasterComponent_ng_template_73_div_12_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_73_div_12_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_ng_template_73_div_12_div_14_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r210.angForm.controls["CAC_NAME"].errors == null ? null : ctx_r210.angForm.controls["CAC_NAME"].errors.pattern);
} }
function TermLoanMasterComponent_ng_template_73_div_12_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_73_div_12_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r218); const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r217.addCoBorrower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add CoBorrower ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_73_div_12_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_73_div_12_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r220); const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r219.updateCoBorrower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_73_div_12_tbody_22_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_73_div_12_tbody_22_tr_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r225); const indexOfelement_r223 = ctx.index; const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r224.editCoBorrower(indexOfelement_r223); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_73_div_12_tbody_22_tr_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r225); const indexOfelement_r223 = ctx.index; const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r226.delCoBorrower(indexOfelement_r223); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r222 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r222.CAC_CUSTID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r222.AC_NAME);
} }
function TermLoanMasterComponent_ng_template_73_div_12_tbody_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Customer Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TermLoanMasterComponent_ng_template_73_div_12_tbody_22_tr_8_Template, 11, 2, "tr", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r213.multiCoBorrower);
} }
function TermLoanMasterComponent_ng_template_73_div_12_tbody_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_ng_template_73_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ng-select", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_ng_template_73_div_12_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r228); const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r227.Cid = $event; })("selected", function TermLoanMasterComponent_ng_template_73_div_12_Template_ng_select_selected_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r228); const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r229.getCCustomer(ctx_r229.Cid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TermLoanMasterComponent_ng_template_73_div_12_div_5_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TermLoanMasterComponent_ng_template_73_div_12_div_14_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TermLoanMasterComponent_ng_template_73_div_12_button_16_Template, 2, 0, "button", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TermLoanMasterComponent_ng_template_73_div_12_button_17_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "table", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, TermLoanMasterComponent_ng_template_73_div_12_tbody_22_Template, 9, 1, "tbody", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, TermLoanMasterComponent_ng_template_73_div_12_tbody_23_Template, 4, 0, "tbody", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx_r208.CCust_ID)("multiple", false)("ngModel", ctx_r208.Cid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r208.angForm.controls["CAC_CUSTID"].invalid && (ctx_r208.angForm.controls["CAC_CUSTID"].dirty || ctx_r208.angForm.controls["CAC_CUSTID"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r208.angForm.controls["CAC_NAME"].invalid && (ctx_r208.angForm.controls["CAC_NAME"].dirty || ctx_r208.angForm.controls["CAC_NAME"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r208.CoBorrowerShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r208.CoBorrowerUpdateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r208.multiCoBorrower == null ? null : ctx_r208.multiCoBorrower.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r208.multiCoBorrower == null ? null : ctx_r208.multiCoBorrower.length) == 0);
} }
function TermLoanMasterComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    const _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "CoBorrower");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_ng_template_73_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r231); const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r230.OpenCoBorr(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Click Here To Modify");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TermLoanMasterComponent_ng_template_73_div_12_Template, 24, 10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r11.CoBorrowerTrue));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.CoBorrowerTrue);
} }
function TermLoanMasterComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function TermLoanMasterComponent_button_78_Template(rf, ctx) { if (rf & 1) {
    const _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_button_78_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r233); const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r232.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_button_79_Template(rf, ctx) { if (rf & 1) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_button_79_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r235); const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r234.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_button_81_Template(rf, ctx) { if (rf & 1) {
    const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_button_81_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r237); const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r236.addNewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TermLoanMasterComponent_tbody_90_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_tbody_90_tr_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r241); const data_r239 = ctx.$implicit; const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r240.editClickHandler(data_r239.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r239 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_ACNOTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_TYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_CUSTID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_OPDATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_OPEN_OLD_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.REF_ACNO);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_INTCATA);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_SANCTION_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_SANCTION_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_DRAWPOWER_AMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_MONTHS);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_EXPIRE_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_INTRATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_REPAYMODE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.INSTALLMENT_METHOD);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_INSTALLMENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_MORATORIUM_PERIOD);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_GRACE_PERIOD);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_AUTHORITY);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_RECOMMEND_BY);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_RECOVERY_CLERK);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_PRIORITY);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_PRIORITY_SUB1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_PRIORITY_SUB2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_PRIORITY_SUB3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_WEAKER);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_PURPOSE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_INDUSTRY);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_HEALTH);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_RELATION_TYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_DIRECTOR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_DIRECTOR_RELATION);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_COREG_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_COREG_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_COREG_AMT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_RESO_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r239.AC_RESO_DATE);
} }
function TermLoanMasterComponent_tbody_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TermLoanMasterComponent_tbody_90_tr_1_Template, 82, 39, "tr", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.termLoanMaster);
} }
function TermLoanMasterComponent_tbody_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
// Handling datatable data
class DataTableResponse {
}
class TermLoanMasterComponent {
    constructor(http, termLoanService, customerIdService, fb, schemeCodeDropdownService, customerID, interstCate, repayModeService, installmentMethodService, authorityMasterDropdown, directorMasterDropdown, recoveryClearkMaster, prioritySector, weakerMaster, purposeMaster, industryMaster, healthMaster, cityMaster, accountType, securityMaster, InterestRateForLoanandCC, prioritySectorMaster, systemParameter, _TermLoanScheme, datePipe, _SecurityCode, el, router) {
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
        // Filter Variable
        this.filterData = {};
        // documentMaster: DocumentMaster[];
        this.id = '';
        this.Gid = '';
        this.Cid = '';
        this.idp = '';
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
        this.repayModeOption = this.repayModeService.getCharacters();
        this.installment = this.installmentMethodService.getCharacters();
        this.account = this.accountType.getCharacters();
        this.selectedOption = 4;
        this.isDisabled = true;
        this.selectedCharacter = 4;
        this.timeLeft = 5;
        this.dataSub = null;
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
                    title: 'Type',
                    data: 'AC_ACNOTYPE'
                },
                {
                    title: 'Scheme',
                    data: 'AC_TYPE'
                },
                {
                    title: 'Account No',
                    data: 'AC_NO'
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
                    title: 'Manual Reference Member No.',
                    data: 'REF_ACNO'
                },
                {
                    title: 'Interest Category',
                    data: 'AC_INTCATA'
                },
                {
                    title: 'Sanction Limit',
                    data: 'AC_SANCTION_AMOUNT'
                },
                {
                    title: 'Sanction Date',
                    data: 'AC_SANCTION_DATE'
                },
                {
                    title: 'Drawing Power',
                    data: 'AC_DRAWPOWER_AMT'
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
                    title: 'Interest Rate',
                    data: 'AC_INTRATE'
                },
                {
                    title: 'Repay Mode',
                    data: 'AC_REPAYMODE'
                },
                {
                    title: 'Installment Type',
                    data: 'INSTALLMENT_METHOD'
                },
                {
                    title: 'Installment',
                    data: 'AC_INSTALLMENT'
                },
                {
                    title: 'Moratorium Period(Months)',
                    data: 'AC_MORATORIUM_PERIOD'
                },
                {
                    title: 'Grace Period',
                    data: 'AC_GRACE_PERIOD'
                },
                {
                    title: 'Sanction Authority',
                    data: 'AC_AUTHORITY'
                },
                {
                    title: 'Recommended By',
                    data: 'AC_RECOMMEND_BY'
                },
                {
                    title: 'Recovery Cleark',
                    data: 'AC_RECOVERY_CLERK'
                },
                {
                    title: 'Priority',
                    data: 'AC_PRIORITY'
                },
                {
                    title: 'Priority 1',
                    data: 'AC_PRIORITY_SUB1'
                },
                {
                    title: 'Priority 2',
                    data: 'AC_PRIORITY_SUB2'
                },
                {
                    title: 'Priority 3',
                    data: 'AC_PRIORITY_SUB3'
                },
                {
                    title: 'Weaker Section',
                    data: 'AC_WEAKER'
                },
                {
                    title: 'Purpose',
                    data: 'AC_PURPOSE'
                },
                {
                    title: 'Industry',
                    data: 'AC_INDUSTRY'
                },
                {
                    title: 'Health Code',
                    data: 'AC_HEALTH'
                },
                {
                    title: 'Account Type',
                    data: 'AC_RELATION_TYPE'
                },
                {
                    title: 'Director',
                    data: 'AC_DIRECTOR'
                },
                {
                    title: 'Director Relation',
                    data: 'AC_DIRECTOR_RELATION'
                },
                {
                    title: 'Registration no.',
                    data: 'AC_COREG_NO'
                },
                {
                    title: 'Registration Date',
                    data: 'AC_COREG_DATE'
                },
                {
                    title: 'Amount',
                    data: 'AC_COREG_AMT'
                },
                {
                    title: 'Resolution Details No.',
                    data: 'AC_RESO_NO'
                },
                {
                    title: 'Resolution Details Dt.',
                    data: 'AC_RESO_DATE'
                },
            ],
            dom: 'Blrtip',
        };
        this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.scheme = data;
        });
        this.customerID.getCustomerIDMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.Cust_ID = data;
            this.GCust_ID = data;
            this.CCust_ID = data;
        });
        this.interstCate.getIntrestCategoaryMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
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
        this.runTimer();
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
    // runTimer function
    runTimer() {
        const timer = setInterval(() => {
            this.timeLeft -= 1;
            if (this.timeLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
    // Create form Method
    createForm() {
        this.angForm = this.fb.group({
            CoAC_CUSTID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_CUSTID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            GAC_CUSTID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            CAC_CUSTID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            SECURITY_CODE: [''],
            SECURITY_VALUE: [''],
            AC_REMARK: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_ACNOTYPE: ['LN'],
            AC_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_NO: [''],
            AC_TITLE: [''],
            AC_NAME: [''],
            GAC_NAME: [''],
            CAC_NAME: [''],
            AC_OPDATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            AC_OPEN_OLD_DATE: [''],
            AC_BIRTH_DT: [''],
            AC_IS_RECOVERY: [false],
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
            AC_MONTHS: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
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
            AC_DIRECTOR_RELATION: [''],
            AC_COREG_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_COREG_DATE: [''],
            AC_COREG_AMT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_RESO_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            AC_RESO_DATE: [''],
            AC_HONO: [''],
            AC_WARD: [''],
            AC_ADDR: [''],
            AC_GALLI: [''],
            AC_AREA: [''],
            AC_CTCODE: [''],
            AC_PIN: [''],
            AC_TPIN: [''],
            AC_MOBILENO: [''],
            AC_PHONE_RES: [''],
            AC_PHONE_OFFICE: [''],
            EXP_DATE: [''],
            GAC_MEMBNO: [''],
            GAC_MEMBTYPE: [''],
        });
    }
    // Method to insert data into database through NestJS
    submit() {
        const formVal = this.angForm.value;
        if (formVal.AC_ADDFLAG == true) {
            this.addType = 'P';
        }
        else if (formVal.AC_ADDFLAG == false) {
            this.addType = 'T';
        }
        const dataToSend = {
            'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
            'AC_TYPE': formVal.AC_TYPE,
            'AC_NO': formVal.AC_NO,
            'AC_NAME': formVal.AC_NAME,
            'AC_CUSTID': formVal.AC_CUSTID,
            'AC_OPDATE': formVal.AC_OPDATE,
            'AC_OPEN_OLD_DATE': formVal.AC_OPEN_OLD_DATE,
            'REF_ACNO': formVal.REF_ACNO,
            'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
            'AC_INTCATA': formVal.AC_INTCATA,
            'AC_SANCTION_AMOUNT': formVal.AC_SANCTION_AMOUNT,
            'AC_SANCTION_DATE': formVal.AC_SANCTION_DATE,
            'AC_DRAWPOWER_AMT': formVal.AC_DRAWPOWER_AMT,
            'AC_MONTHS': formVal.AC_MONTHS,
            'AC_EXPIRE_DATE': formVal.AC_EXPIRE_DATE,
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
            'AC_COREG_DATE': formVal.AC_COREG_DATE,
            'AC_COREG_AMT': formVal.AC_COREG_AMT,
            'AC_RESO_NO': formVal.AC_RESO_NO,
            'AC_RESO_DATE': formVal.AC_RESO_DATE,
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
        };
        this.termLoanService.postData(dataToSend).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Success!', 'Data Added Successfully !', 'success');
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.ajax.reload();
            });
        }, (error) => {
            console.log(error);
        });
        //To clear form
        this.resetForm();
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
    // Reset Function
    resetForm() {
        this.createForm();
        this.resetGuarantor();
        this.resetCoBorrower();
        this.resetField();
    }
    //Method for append data into fields
    editClickHandler(id) {
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        this.columnShowButton = true;
        this.termLoanService.getFormData(id).subscribe(data => {
            this.updateID = data.id;
            this.getCustomer(data.AC_CUSTID);
            this.multiSecurity = data.securityMaster;
            this.multiCoBorrower = data.CoborrowerMaster,
                this.multiGuarantor = data.guaranterMaster;
            this.angForm.patchValue({
                AC_TYPE: data.AC_TYPE,
                AC_NO: data.AC_NO,
                AC_OPDATE: data.AC_OPDATE,
                AC_OPEN_OLD_DATE: data.AC_OPEN_OLD_DATE,
                AC_IS_RECOVERY: data.AC_IS_RECOVERY,
                REF_ACNO: data.REF_ACNO,
                AC_INTCATA: data.AC_INTCATA,
                AC_SANCTION_AMOUNT: data.AC_SANCTION_AMOUNT,
                AC_SANCTION_DATE: data.AC_SANCTION_DATE,
                AC_DRAWPOWER_AMT: data.AC_DRAWPOWER_AMT,
                AC_MONTHS: data.AC_MONTHS,
                AC_EXPIRE_DATE: data.AC_EXPIRE_DATE,
                AC_INTRATE: data.AC_INTRATE,
                AC_REPAYMODE: data.AC_REPAYMODE,
                INSTALLMENT_METHOD: data.INSTALLMENT_METHOD,
                AC_INSTALLMENT: data.AC_INSTALLMENT,
                AC_MORATORIUM_PERIOD: data.AC_MORATORIUM_PERIOD,
                AC_GRACE_PERIOD: data.AC_GRACE_PERIOD,
                AC_AUTHORITY: data.AC_AUTHORITY,
                AC_RECOMMEND_BY: data.AC_RECOMMEND_BY,
                AC_RECOVERY_CLERK: data.AC_RECOVERY_CLERK,
                AC_PRIORITY: data.AC_PRIORITY,
                AC_PRIORITY_SUB1: data.AC_PRIORITY_SUB1,
                AC_PRIORITY_SUB2: data.AC_PRIORITY_SUB2,
                AC_PRIORITY_SUB3: data.AC_PRIORITY_SUB3,
                AC_WEAKER: data.AC_WEAKER,
                AC_PURPOSE: data.AC_PURPOSE,
                AC_INDUSTRY: data.AC_INDUSTRY,
                AC_HEALTH: data.AC_HEALTH,
                AC_RELATION_TYPE: data.AC_RELATION_TYPE,
                AC_DIRECTOR: data.AC_DIRECTOR,
                AC_DIRECTOR_RELATION: data.AC_DIRECTOR_RELATION,
                AC_COREG_NO: data.AC_COREG_NO,
                AC_COREG_DATE: data.AC_COREG_DATE,
                AC_COREG_AMT: data.AC_COREG_AMT,
                AC_RESO_NO: data.AC_RESO_NO,
                AC_RESO_DATE: data.AC_RESO_DATE,
            });
        });
    }
    // Method For New Button
    addNewData() {
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.multiSecurity = [];
        this.multiCoBorrower = [];
        this.multiGuarantor = [];
        this.resetForm();
    }
    //Method for update data 
    updateData() {
        let data = this.angForm.value;
        if (data.AC_ADDFLAG == true) {
            this.addType = 'P';
        }
        else if (data.AC_ADDFLAG == false) {
            this.addType = 'T';
        }
        data['AC_ADDTYPE'] = this.addType;
        data['GuarantorData'] = this.multiGuarantor;
        data['CoBorrowerData'] = this.multiCoBorrower;
        data['SecurityData'] = this.multiSecurity;
        data['id'] = this.updateID;
        this.termLoanService.updateData(data).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Success!', 'Record Updated Successfully !', 'success');
            this.showButton = true;
            this.updateShow = false;
            this.newbtnShow = false;
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.ajax.reload();
            });
            this.multiSecurity = [];
            this.multiCoBorrower = [];
            this.multiSecurity = [];
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
    // Method for Get Customer Data
    getCustomer(id) {
        this.calculation();
        this.getSystemParaDate(); //function to set date
        this.customerIdService.getFormData(id).subscribe(data => {
            this.tempAddress = data.custAddress[0].AC_ADDFLAG;
            this.angForm.patchValue({
                AC_CUSTID: id.toString(),
                AC_TITLE: data.AC_TITLE,
                AC_NAME: data.AC_NAME,
                AC_MEMBTYPE: data.AC_MEMBTYPE,
                AC_MEMBNO: data.AC_MEMBNO,
                AC_CAST: data.AC_CAST,
                AC_OCODE: data.AC_OCODE,
                AC_ADHARNO: data.AC_ADHARNO,
                AC_RISKCATG: data.AC_RISKCATG,
                AC_BIRTH_DT: data.AC_BIRTH_DT,
                AC_ADDFLAG: data.custAddress[0].AC_ADDFLAG,
                AC_HONO: data.custAddress[0].AC_HONO,
                AC_WARD: data.custAddress[0].AC_WARD,
                AC_ADDR: data.custAddress[0].AC_ADDR,
                AC_GALLI: data.custAddress[0].AC_GALLI,
                AC_AREA: data.custAddress[0].AC_AREA,
                AC_CTCODE: data.custAddress[0].AC_CTCODE,
                AC_PIN: data.custAddress[0].AC_PIN,
                AC_PANNO: data.AC_PANNO,
                AC_MOBILENO: data.AC_MOBILENO,
                AC_PHONE_RES: data.AC_PHONE_RES,
                AC_PHONE_OFFICE: data.AC_PHONE_OFFICE,
                AC_EMAILID: data.AC_EMAILID,
                TDS_REQUIRED: data.TDS_REQUIRED,
                SMS_REQUIRED: data.SMS_REQUIRED,
                IS_KYC_RECEIVED: data.IS_KYC_RECEIVED,
                FIN_YEAR: data.FIN_YEAR,
                SUBMIT_DATE: data.SUBMIT_DATE,
                FORM_TYPE: data.FORM_TYPE,
                TDS_RATE: data.TDS_RATE,
                TDS_LIMIT: data.TDS_LIMIT,
            });
            if (data.custAddress[0].AC_ADDFLAG == false && data.custAddress[0].AC_ADDTYPE == 'P') {
                this.angForm.patchValue({
                    AC_THONO: data.custAddress[1].AC_HONO,
                    AC_TWARD: data.custAddress[1].AC_WARD,
                    AC_TADDR: data.custAddress[1].AC_ADDR,
                    AC_TGALLI: data.custAddress[1].AC_GALLI,
                    AC_TAREA: data.custAddress[1].AC_AREA,
                    AC_TCTCODE: data.custAddress[1].AC_CTCODE,
                    AC_TPIN: data.custAddress[1].AC_PIN,
                });
            }
        });
    }
    // Event for Customer Module
    newCustomer(newCustomer) {
        this.customerID.getCustomerIDMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).subscribe(data => {
            this.Cust_ID = data;
            this.id = newCustomer;
            this.getCustomer(newCustomer);
        });
    }
    //temp address flag variable
    tempAsPermanent() {
        this.tempAddress = !this.tempAddress;
    }
    //set open date, appointed date and expiry date
    getSystemParaDate() {
        this.systemParameter.getFormData(1).subscribe(data => {
            this.angForm.patchValue({
                AC_OPDATE: data.CURRENT_DATE,
            });
        });
    }
    //Method for set value for repay mode and installment type
    getScheme(code) {
        this._TermLoanScheme.getData(code).subscribe(data => {
            if (data.S_INT_APPLICABLE === true) {
                this.repay = 'Monthly';
                this.installmentType = data.INSTALLMENT_METHOD;
            }
            else {
                this.repay = 'OnMaturity';
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
            AC_COREG_DATE: this.angForm.controls['AC_OPDATE'].value
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
                AC_PRIORITY: idp.toString(),
                AC_PRIORITY_SUB1: data.SUB1_CODE,
                AC_PRIORITY_SUB2: data.SUB2_CODE,
                AC_PRIORITY_SUB3: data.SUB3_CODE,
            });
        });
    }
    // Method for Show and hide option wise field
    directorShow(event) {
        if (event.value == 'Director') {
            this.AC_DIRECTOR = false;
        }
        else if (event.value == 'DirectorsRelative') {
            this.AC_DIRECTOR = false;
            this.angForm.controls['AC_DIRECTOR_RELATION'].enable();
        }
        else {
            this.AC_DIRECTOR = true;
            this.angForm.controls['AC_DIRECTOR_RELATION'].disable();
        }
    }
    // Method for Calculate Instllment
    calculation() {
        this.months = this.angForm.controls['AC_MONTHS'].value;
        console.log('this.months', this.months);
        if (this.repay == 'Monthly' && (this.installmentType == 'Plain' || this.installmentType == 'Reducing')) {
            this.result = Math.round((((this.drawingPower) / (this.months)) * 1)).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'Quarterly' && (this.installmentType == 'Plain' || this.installmentType == 'Reducing')) {
            this.result = Math.round((((this.drawingPower) / (this.months)) * 3)).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'HalfYearly' && (this.installmentType == 'Plain' || this.installmentType == 'Reducing')) {
            this.result = Math.round(((Math.floor(this.drawingPower) / Math.floor(this.months)) * 6)).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'Yearly' && (this.installmentType == 'Plain' || this.installmentType == 'Reducing')) {
            this.result = Math.round(((Math.floor(this.drawingPower) / Math.floor(this.months)) * 12)).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'OnMaturity' && (this.installmentType == 'Plain' || this.installmentType == 'Reducing')) {
            this.result = Math.round(((Math.floor(this.drawingPower)))).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'Monthly' && (this.installmentType == 'EMI')) {
            this.month = Math.floor(this.months) / 1;
            this.result = Math.round(Math.floor(this.drawingPower) * ((Math.floor(this.intRate) / (1200 / 1)) / (1 - Math.pow(((1 + (Math.floor(this.intRate) / (1200 / 1)))), (Math.floor(this.month) * (-1)))))).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'Quarterly' && (this.installmentType == 'EMI')) {
            this.month = Math.floor(this.months) / 3;
            this.result = Math.round(Math.floor(this.drawingPower) * ((Math.floor(this.intRate) / (1200 / 3)) / (1 - Math.pow(((1 + (Math.floor(this.intRate) / (1200 / 3)))), (Math.floor(this.month) * (-1)))))).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'HalfYearly' && (this.installmentType == 'EMI')) {
            this.month = Math.floor(this.months) / 6;
            this.result = Math.round(Math.floor(this.drawingPower) * ((Math.floor(this.intRate) / (1200 / 6)) / (1 - Math.pow(((1 + (Math.floor(this.intRate) / (1200 / 6)))), ((this.month) * (-1)))))).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'Yearly' && (this.installmentType == 'EMI')) {
            this.month = Math.floor(this.months) / 12;
            this.result = Math.round(Math.floor(this.drawingPower) * ((Math.floor(this.intRate) / (1200 / 12)) / (1 - Math.pow(((1 + (Math.floor(this.intRate) / (1200 / 12)))), (Math.floor(this.month) * (-1)))))).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'OnMaturity' && (this.installmentType == 'EMI')) {
            this.angForm.patchValue({
                AC_INSTALLMENT: 0
            });
        }
        else if (this.repay == 'Monthly' && (this.installmentType == 'WithInterest')) {
            this.intResult = (Math.floor(this.drawingPower) * Math.floor(this.intRate) / 1200).toFixed(2);
            this.result = Math.round((((Math.floor(this.drawingPower) / Math.floor(this.months)) + Math.floor(this.intResult)) * 1)).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'Quarterly' && (this.installmentType == 'WithInterest')) {
            this.intResult = (Math.floor(this.drawingPower) * Math.floor(this.intRate) / 1200).toFixed(2);
            this.result = Math.round((((Math.floor(this.drawingPower) / Math.floor(this.months)) + Math.floor(this.intResult)) * 3)).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'HalfYearly' && (this.installmentType == 'WithInterest')) {
            this.intResult = (this.drawingPower * this.intRate / 1200);
            this.result = Math.round((((this.drawingPower / this.months) + this.intResult) * 6)).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'Yearly' && (this.installmentType == 'WithInterest')) {
            this.intResult = (this.drawingPower * this.intRate / 1200);
            this.result = Math.round((((this.drawingPower / this.months) + this.intResult) * 12)).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
        }
        else if (this.repay == 'OnMaturity' && (this.installmentType == 'WithInterest')) {
            this.intResult = ((this.drawingPower) * (this.intRate) / 1200).toFixed(2);
            this.result = Math.round(((((this.drawingPower) / (this.months)) + (this.intResult)) * 0)).toFixed(2);
            this.angForm.patchValue({
                AC_INSTALLMENT: this.result
            });
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
            SECURITY_VALUE: this.SECU_NAME,
        };
        console.log("security", object.SECURITY_CODE);
        if (object.SECURITY_CODE != undefined) {
            if (this.multiSecurity.length == 0) {
                this.multiSecurity.push(object);
            }
            else {
                this.multiSecurity.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log("element", element);
                    if (object.SECURITY_CODE != element.SECURITY_CODE) {
                        this.multiSecurity.push(object);
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("This Security is Already Added", "error");
                    }
                }));
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Security Code", "error");
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
    // Show security Detals Components
    showSecurity(code) {
        this._SecurityCode.getFormData(code).subscribe(data => {
            if (data.BOOK_DEBTS == true) {
                this.BOOK_DEBTS = true;
            }
            else {
                this.BOOK_DEBTS = false;
            }
            if (data.CUST_INSURANCE == true) {
                this.CUST_INSURANCE = true;
            }
            else {
                this.CUST_INSURANCE = false;
            }
            if (data.FIRE_POLICY == true) {
                this.FIRE_POLICY = true;
            }
            else {
                this.FIRE_POLICY = false;
            }
            if (data.FURNITURE_FIXTURE == true) {
                this.FURNITURE_FIXTURE = true;
            }
            else {
                this.FURNITURE_FIXTURE = false;
            }
            if (data.GOLD_SILVER == true) {
                this.GOLD_SILVER = true;
            }
            else {
                this.GOLD_SILVER = false;
            }
            if (data.GOVT_SECU_LIC == true) {
                this.GOVT_SECU_LIC = true;
            }
            else {
                this.GOVT_SECU_LIC = false;
            }
            if (data.LAND_BUILDING == true) {
                this.LAND_BUILDING = true;
            }
            else {
                this.LAND_BUILDING = false;
            }
            if (data.MARKET_SHARE == true) {
                this.MARKET_SHARE = true;
            }
            else {
                this.MARKET_SHARE = false;
            }
            if (data.OTHER_SECURITY == true) {
                this.OTHER_SECURITY = true;
            }
            else {
                this.OTHER_SECURITY = false;
            }
            if (data.OWN_DEPOSIT == true) {
                this.OWN_DEPOSIT = true;
            }
            else {
                this.OWN_DEPOSIT = false;
            }
            if (data.PLANT_MACHINARY == true) {
                this.PLANT_MACHINARY = true;
            }
            else {
                this.PLANT_MACHINARY = false;
            }
            if (data.PLEDGE_STOCK == true) {
                this.PLEDGE_STOCK = true;
            }
            else {
                this.PLEDGE_STOCK = false;
            }
            if (data.STOCK_STATEMENT == true) {
                this.STOCK_STATEMENT = true;
            }
            else {
                this.STOCK_STATEMENT = false;
            }
            if (data.VEHICLE == true) {
                this.VEHICLE = true;
            }
            else {
                this.VEHICLE = false;
            }
        });
    }
    // End Security tab
    // Start Guarantor tab
    //Open Guarantor Form
    OpenLink() {
        this.GuarantorTrue = !this.GuarantorTrue;
    }
    // Get Guarantor Customer Id 
    getgCustomer(Gid) {
        this.customerIdService.getFormData(Gid).subscribe(data => {
            this.angForm.patchValue({
                GAC_CUSTID: Gid.toString(),
                GAC_MEMBNO: data.AC_MEMBNO,
                GAC_MEMBTYPE: data.AC_MEMBTYPE,
                GAC_NAME: data.AC_NAME,
            });
        });
    }
    // Add Guarantor
    addGuarantor() {
        const formVal = this.angForm.value;
        var object = {
            GAC_CUSTID: formVal.GAC_CUSTID,
            AC_MEMBNO: formVal.GAC_MEMBNO,
            AC_MEMBTYPE: formVal.GAC_MEMBTYPE,
            AC_NAME: formVal.GAC_NAME,
            EXP_DATE: formVal.EXP_DATE,
        };
        if (object.GAC_CUSTID != undefined) {
            if (this.id != this.Cid) {
                if (this.multiGuarantor.length == 0) {
                    this.multiGuarantor.push(object);
                }
                else {
                    this.multiGuarantor.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log("element", element);
                        if (object.GAC_CUSTID != element.GAC_CUSTID) {
                            this.multiGuarantor.push(object);
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("This Customer is Already Guarantor", "error");
                        }
                    }));
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Different Customer id", "error");
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Customer Id", "error");
        }
        this.resetGuarantor();
    }
    // Edit Guarantor
    editGuarantor(id) {
        this.intIndex = id;
        this.intID = this.multiGuarantor[id].id;
        this.GuarantorShowButton = false;
        this.GuarantorUpdateShow = true;
        this.angForm.patchValue({
            GAC_CUSTID: this.multiGuarantor[id].GAC_CUSTID,
            GAC_MEMBNO: this.multiGuarantor[id].AC_MEMBNO,
            GAC_MEMBTYPE: this.multiGuarantor[id].AC_MEMBTYPE,
            GAC_NAME: this.multiGuarantor[id].AC_NAME,
            EXP_DATE: this.multiGuarantor[id].EXP_DATE,
        });
    }
    // Update Guarantor
    updateGuarantor() {
        let index = this.intIndex;
        this.GuarantorShowButton = true;
        this.GuarantorUpdateShow = false;
        const formVal = this.angForm.value;
        var object = {
            GAC_CUSTID: formVal.GAC_CUSTID,
            AC_MEMBNO: formVal.GAC_MEMBNO,
            AC_MEMBTYPE: formVal.GAC_MEMBTYPE,
            AC_NAME: formVal.GAC_NAME,
            EXP_DATE: formVal.EXP_DATE,
            id: this.intID
        };
        this.multiGuarantor[index] = object;
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
    //Open CoBorrower Form
    OpenCoBorr() {
        this.CoBorrowerTrue = !this.CoBorrowerTrue;
    }
    // Get CoBorrower Customer Id 
    getCCustomer(Cid) {
        this.customerIdService.getFormData(Cid).subscribe(data => {
            this.angForm.patchValue({
                CAC_CUSTID: Cid.toString(),
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
        if (object.CAC_CUSTID != undefined) {
            if (this.id != this.Cid) {
                if (this.multiCoBorrower.length == 0) {
                    this.multiCoBorrower.push(object);
                }
                else {
                    this.multiCoBorrower.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log("element", element);
                        if (object.CAC_CUSTID != element.CAC_CUSTID) {
                            this.multiCoBorrower.push(object);
                        }
                        else {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("This Customer is Already CoBorrower", "error");
                        }
                    }));
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Please Select Different Customer id", "error");
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
        this.angForm.patchValue({
            CAC_CUSTID: this.multiCoBorrower[id].CAC_CUSTID,
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
        this.multiCoBorrower[index] = object;
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
    getInterest(int_category) {
        this.temp = int_category;
        this.InterestRateForLoanandCC.intData(int_category).subscribe(data => {
            this.date = this.angForm.controls['AC_OPDATE'].value;
            if (data != typeof (undefined)) {
                if (this.date == data[0].EFFECT_DATE) {
                    this.angForm.patchValue({
                        AC_INTCATA: data[0].INT_CATEGORY,
                        AC_INTRATE: data[0].rate[0].INT_RATE,
                    });
                }
                else {
                    this.angForm.patchValue({
                        AC_INTCATA: data[1].INT_CATEGORY,
                        AC_INTRATE: 0
                    });
                }
            }
            // if (data != typeof (undefined)) {
            //   data.forEach(async (element) => {
            //     if (this.date == element.EFFECT_DATE) {
            //       this.angForm.patchValue({
            //         AC_INTCATA: element.INT_CATEGORY,
            //         AC_INTRATE: element.rate.INT_RATE,
            //       })
            //     }
            //   })
            // if (this.date == data[0].EFFECT_DATE) {
            //   this.angForm.patchValue({
            //     AC_INTCATA: data[0].INT_CATEGORY,
            //     AC_INTRATE: data[0].rate[0].INT_RATE,
            //   })
            // } else {
            //   this.angForm.patchValue({
            //     AC_INTCATA: data[1].INT_CATEGORY,
            //     AC_INTRATE: 0
            //   })
            // }
            //   }
        });
    }
    ngAfterViewInit() {
        this.dtTrigger.next();
        this.dtElement.dtInstance.then((dtInstance) => {
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
        let months = this.angForm.controls['AC_MONTHS'].value;
        if (this.angForm.controls['AC_OPEN_OLD_DATE'].value != '') {
            var expiryDt = new Date(this.angForm.controls['AC_OPEN_OLD_DATE'].value);
            var year = expiryDt.getFullYear();
            var month = new Date(expiryDt).getMonth();
            var day = new Date(expiryDt).getDate();
            var expiry = month + Number(months);
            var date = new Date(year, expiry, day);
            var expiryDate = this.datePipe.transform(date, "dd-MM-yyyy");
            this.angForm.patchValue({
                AC_EXPIRE_DATE: expiryDate
            });
        }
        else {
            var expiryDt = new Date(this.angForm.controls['AC_OPDATE'].value);
            var year = expiryDt.getFullYear();
            var month = new Date(expiryDt).getMonth();
            var day = new Date(expiryDt).getDate();
            var expiry = month + Number(months);
            var date = new Date(year, expiry, day);
            var expiryDate = this.datePipe.transform(date, "dd-MM-yyyy");
            this.angForm.patchValue({
                AC_EXPIRE_DATE: expiryDate
            });
        }
    }
}
TermLoanMasterComponent.ɵfac = function TermLoanMasterComponent_Factory(t) { return new (t || TermLoanMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_term_loan_master_service__WEBPACK_IMPORTED_MODULE_10__["TermLoanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIDMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["IntrestCategoryMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_repay_mode_service__WEBPACK_IMPORTED_MODULE_15__["RepayModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_installment_method_service__WEBPACK_IMPORTED_MODULE_16__["InstallmentMethodService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_authority_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["AuthorityMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["DirectorMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_recovery_cleark_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["RecoveryClearkMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_priority_sector_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["PrioritySectorMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_weaker_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["WeakerMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_purpose_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__["PurposeMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_industry_master_dropdown_service__WEBPACK_IMPORTED_MODULE_23__["IndustryMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_health_master_dropdown_service__WEBPACK_IMPORTED_MODULE_24__["HealthMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_25__["cityMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_account_type_service__WEBPACK_IMPORTED_MODULE_26__["AccountTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_security_master_dropdown_service__WEBPACK_IMPORTED_MODULE_27__["SecurityMasterdropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_policy_settings_definations_interest_rate_for_lacc_interest_rate_for_lacc_service__WEBPACK_IMPORTED_MODULE_28__["InterestRateForLoanandCCService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_policy_settings_information_priority_sector_master_priority_sector_master_service__WEBPACK_IMPORTED_MODULE_29__["PrioritySectorMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_30__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utility_scheme_parameters_term_loan_scheme_term_loan_scheme_service__WEBPACK_IMPORTED_MODULE_31__["TermLoanSchemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_32__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_policy_settings_definations_security_code_security_code_service__WEBPACK_IMPORTED_MODULE_33__["SecurityCodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_34__["Router"])); };
TermLoanMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TermLoanMasterComponent, selectors: [["app-term-loan-master"]], viewQuery: function TermLoanMasterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 173, vars: 20, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [2, "float", "right"], [1, "required"], [1, "card-block"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "col-sm-3"], [1, "form-group", "form-primary", "form-static-label"], ["placeholder", "Scheme *", "required", "", "title", "Compulsory Selection", "formControlName", "AC_TYPE", 3, "ngClass", "options", "multiple", "ngModel", "ngModelChange", "selected"], ["scheme1", ""], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-2"], [1, "form-group", "input-group"], [1, "border-lable-flt"], ["type", "text", "name", "AC_NO", "placeholder", " ", "id", "AC_NO", "formControlName", "AC_NO", "disabled", "", 1, "form-control"], ["for", "AC_NO"], ["placeholder", "Customer ID *", "required", "", "title", "Compulsory Selection", "formControlName", "AC_CUSTID", 2, "width", "90%", 3, "ngClass", "options", "multiple", "ngModel", "ngModelChange", "selected"], ["id", "custicon", "placement", "bottom", "ngbTooltip", "Add New Customer", 1, "fa", "fa-fw", "fa-plus-circle", "field-icon", 3, "click"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "max-width", "800px", "max-height", "450px"], [3, "newCustomerEvent"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-primary", "ripple", "light", 3, "click"], [1, "col-sm-1"], ["type", "text", "name", "AC_TITLE", "placeholder", " ", "id", "AC_TITLE", "required", "", "pattern", "^[A-Za-z\\./ -]+$", "formControlName", "AC_TITLE", "disabled", "", 1, "form-control"], ["for", "AC_TITLE"], [1, "col-sm"], ["type", "text", "name", "AC_NAME", "placeholder", " ", "id", "AC_NAME", "required", "", "pattern", "^[A-Za-z\\./ -]+$", "formControlName", "AC_NAME", "title", "Input allowed only  A-Z a-z  - / . (Space)", "disabled", "", 1, "form-control"], ["for", "AC_NAME"], ["title", "1.Basic Detail"], ["ngbTabContent", ""], ["title", "2.Other Detail"], ["title", "3.Address"], ["title", "4.Securities"], ["title", "5.Guarantor"], ["title", "6.CoBorrower"], ["title", "7.Documents"], ["class", "btn btn-primary ripple light", 3, "click", 4, "ngIf"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 3, "dtOptions", "dtTrigger"], [4, "ngIf"], ["type", "text", "placeholder", "Search Type", "name", "AC_ACNOTYPE"], ["type", "text", "placeholder", "Search Scheme", "name", "AC_TYPE"], ["type", "text", "placeholder", "Search Account No", "name", "AC_NO"], ["type", "text", "placeholder", "Search Customer ID", "name", "AC_CUSTID"], ["type", "text", "placeholder", "Search Name", "name", "AC_NAME"], ["type", "text", "placeholder", "Search Opening Date", "name", "AC_OPDATE"], ["type", "text", "placeholder", "Search Renewal Date", "name", "AC_OPEN_OLD_DATE"], ["type", "text", "placeholder", "Search Manual Reference Member No.", "name", "REF_ACNO"], ["type", "text", "placeholder", "Search Interest Category", "name", "AC_INTCATA"], ["type", "text", "placeholder", "Search Sanction Limit", "name", "AC_SANCTION_AMOUNT"], ["type", "text", "placeholder", "Search Sanction Date", "name", "AC_SANCTION_DATE"], ["type", "text", "placeholder", "Search Drawing Power", "name", "AC_DRAWPOWER_AMT"], ["type", "text", "placeholder", "Search Period", "name", "AC_MONTHS"], ["type", "text", "placeholder", "Search Expiry Date", "name", "AC_EXPIRE_DATE"], ["type", "text", "placeholder", "Search Interest Rate", "name", "AC_INTRATE"], ["type", "text", "placeholder", "Search Repay Mode", "name", "AC_REPAYMODE"], ["type", "text", "placeholder", "Search Installment Method", "name", "INSTALLMENT_METHOD"], ["type", "text", "placeholder", "Search Installment", "name", "AC_INSTALLMENT"], ["type", "text", "placeholder", "Search Moratorium Period", "name", "AC_MORATORIUM_PERIOD"], ["type", "text", "placeholder", "Search Grace Period", "name", "AC_GRACE_PERIOD"], ["type", "text", "placeholder", "Search Sanction Authority", "name", "AC_AUTHORITY"], ["type", "text", "placeholder", "Search Recommended By", "name", "AC_RECOMMEND_BY"], ["type", "text", "placeholder", "Search Recovery Cleark", "name", "AC_RECOVERY_CLERK"], ["type", "text", "placeholder", "Search Priority", "name", "AC_PRIORITY"], ["type", "text", "placeholder", "Search Priority 1", "name", "AC_PRIORITY_SUB1"], ["type", "text", "placeholder", "Search Priority 2", "name", "AC_PRIORITY_SUB2"], ["type", "text", "placeholder", "Search Priority 3", "name", "AC_PRIORITY_SUB3"], ["type", "text", "placeholder", "Search Weaker Section", "name", "AC_WEAKER"], ["type", "text", "placeholder", "Search Purpose", "name", "AC_PURPOSE"], ["type", "text", "placeholder", "Search Industry", "name", "AC_INDUSTRY"], ["type", "text", "placeholder", "Search Health Code", "name", "AC_HEALTH"], ["type", "text", "placeholder", "Search Account Type", "name", "AC_RELATION_TYPE"], ["type", "text", "placeholder", "Search Director", "name", "AC_DIRECTOR"], ["type", "text", "placeholder", "Search Director Relation", "name", "AC_DIRECTOR_RELATION"], ["type", "text", "placeholder", "Search No", "name", "AC_COREG_NO"], ["type", "text", "placeholder", "Search Date", "name", "AC_COREG_DATE"], ["type", "text", "placeholder", "Search Amount", "name", "AC_COREG_AMT"], ["type", "text", "placeholder", "Search No", "name", "AC_RESO_NO"], ["type", "text", "placeholder", "Search Date", "name", "AC_RESO_DATE"], [1, "alert", "alert-danger"], [1, "m-t-15"], ["type", "text", "name", "AC_OPDATE", "placeholder", " ", "id", "AC_OPDATE", "required", "", "max", "9999-12-31", "onfocus", "(this.type='date')", "formControlName", "AC_OPDATE", 1, "form-control", 3, "ngModelChange"], ["for", "AC_OPDATE"], ["type", "text", "name", "AC_OPEN_OLD_DATE", "placeholder", " ", "id", "AC_OPEN_OLD_DATE", "max", "9999-12-31", "onfocus", "(this.type='date')", "formControlName", "AC_OPEN_OLD_DATE", 1, "form-control", 3, "ngModelChange"], ["for", "AC_OPEN_OLD_DATE"], ["type", "text", "name", "AC_BIRTH_DT", "placeholder", " ", "id", "AC_BIRTH_DT", "max", "9999-12-31", "onfocus", "(this.type='date')", "formControlName", "AC_BIRTH_DT", "disabled", "", 1, "form-control"], ["for", "AC_BIRTH_DT"], ["type", "text", "name", "AC_MEMBTYPE", "placeholder", " ", "id", "AC_MEMBTYPE", "formControlName", "AC_MEMBTYPE", "disabled", "", 1, "form-control"], ["for", "AC_MEMBTYPE"], ["type", "text", "name", "AC_MEMBNO", "placeholder", " ", "id", "AC_MEMBNO", "formControlName", "AC_MEMBNO", "disabled", "", 1, "form-control"], ["for", "AC_MEMBNO"], ["type", "text", "name", "REF_ACNO", "placeholder", " ", "id", "REF_ACNO", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "formControlName", "REF_ACNO", 1, "form-control"], ["for", "REF_ACNO"], ["type", "text", "name", "AC_CAST", "placeholder", " ", "id", "AC_CAST", "pattern", "^[A-Za-z\\./ -]+$", "formControlName", "AC_CAST", "title", "Input allowed only  A-Z a-z  - / . (Space)", "disabled", "", 1, "form-control"], ["for", "AC_CAST"], ["type", "text", "name", "AC_OCODE", "placeholder", " ", "id", "AC_OCODE", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_OCODE", "disabled", "", 1, "form-control"], ["for", "AC_OCODE"], ["placeholder", "Interest Category *", "required", "", "title", "Compulsory Selection", "formControlName", "AC_INTCATA", 3, "ngClass", "options", "multiple", "ngModel", "ngModelChange", "selected"], ["type", "text", "name", "AC_SANCTION_AMOUNT", "placeholder", " ", "id", "AC_SANCTION_AMOUNT", "required", "", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "AC_SANCTION_AMOUNT", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "AC_SANCTION_AMOUNT"], ["type", "text", "name", "AC_SANCTION_DATE", "placeholder", " ", "id", "AC_SANCTION_DATE", "required", "", "max", "9999-12-31", "onfocus", "(this.type='date')", "formControlName", "AC_SANCTION_DATE", 1, "form-control"], ["for", "AC_SANCTION_DATE"], ["type", "text", "name", "AC_DRAWPOWER_AMT", "placeholder", " ", "id", "AC_DRAWPOWER_AMT", "required", "", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "AC_DRAWPOWER_AMT", 1, "form-control", 3, "ngModel", "ngModelChange", "focusout"], ["for", "AC_DRAWPOWER_AMT"], ["type", "text", "name", "AC_MONTHS", "placeholder", " ", "id", "AC_MONTHS", "required", "", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "AC_MONTHS", 1, "form-control", 3, "ngModelChange"], ["for", "AC_MONTHS"], ["type", "text", "name", "AC_EXPIRE_DATE", "placeholder", " ", "id", "AC_EXPIRE_DATE", "required", "", "max", "9999-12-31", "onfocus", "(this.type='date')", "formControlName", "AC_EXPIRE_DATE", 1, "form-control"], ["for", "AC_EXPIRE_DATE"], ["type", "text", "name", "AC_INTRATE", "placeholder", " ", "id", "AC_INTRATE", "required", "", "pattern", "\\d{1,3}(\\.\\d{1,2})?", "title", "Input allowed only  0-9", "formControlName", "AC_INTRATE", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "AC_INTRATE"], ["placeholder", "Repay Mode*", "title", "Compulsory Selection", "formControlName", "AC_REPAYMODE", 3, "ngClass", "options", "multiple", "ngModel", "selected", "ngModelChange"], ["placeholder", "Installment Type *", "required", "", "title", "Compulsory Selection", "formControlName", "INSTALLMENT_METHOD", 3, "ngClass", "options", "ngModel", "multiple", "ngModelChange", "selected"], ["type", "text", "name", "AC_INSTALLMENT", "placeholder", " ", "id", "AC_INSTALLMENT", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "disabled", "", "formControlName", "AC_INSTALLMENT", 1, "form-control"], ["for", "AC_INSTALLMENT"], ["type", "text", "name", "AC_MORATORIUM_PERIOD", "placeholder", " ", "id", "AC_MORATORIUM_PERIOD", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "maxlength", "2", "formControlName", "AC_MORATORIUM_PERIOD", 1, "form-control"], ["for", "AC_MORATORIUM_PERIOD"], ["type", "text", "name", "AC_GRACE_PERIOD", "placeholder", " ", "id", "AC_GRACE_PERIOD", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "maxlength", "3", "formControlName", "AC_GRACE_PERIOD", 1, "form-control"], ["for", "AC_GRACE_PERIOD"], [1, "border-checkbox-section"], [1, "border-checkbox-group", "border-checkbox-group-primary"], ["type", "checkbox", "id", "IS_RECOVERY", "formControlName", "AC_IS_RECOVERY", 1, "border-checkbox"], ["for", "IS_RECOVERY", 1, "border-checkbox-label"], ["placeholder", "Sanction Authority*", "formControlName", "AC_AUTHORITY", 3, "ngClass", "options", "multiple"], ["placeholder", "Recommended By *", "formControlName", "AC_RECOMMEND_BY", 3, "ngClass", "options", "multiple"], ["placeholder", "Recovery Cleark*", "formControlName", "AC_RECOVERY_CLERK", 3, "ngClass", "options", "multiple"], ["placeholder", "Priority *", "formControlName", "AC_PRIORITY", 3, "ngClass", "options", "multiple", "ngModel", "ngModelChange", "selected"], ["type", "text", "name", "AC_PRIORITY_SUB1", "placeholder", " ", "id", "AC_PRIORITY_SUB1", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "disabled", "", "formControlName", "AC_PRIORITY_SUB1", 1, "form-control"], ["for", "AC_PRIORITY_SUB1"], ["type", "text", "name", "AC_PRIORITY_SUB2", "placeholder", " ", "id", "AC_PRIORITY_SUB2", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "disabled", "", "formControlName", "AC_PRIORITY_SUB2", 1, "form-control"], ["for", "AC_PRIORITY_SUB2"], ["type", "text", "name", "AC_PRIORITY_SUB3", "placeholder", " ", "id", "AC_PRIORITY_SUB3", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "disabled", "", "formControlName", "AC_PRIORITY_SUB3", 1, "form-control"], ["for", "AC_PRIORITY_SUB3"], ["type", "checkbox", "id", "checkbox3", "name", "AC_IS_RECOVERY", 1, "border-checkbox", 3, "checked"], ["for", "checkbox3", 1, "border-checkbox-label"], ["placeholder", "Weaker Section*", "formControlName", "AC_WEAKER", 3, "ngClass", "options", "multiple"], ["placeholder", "Purpose *", "formControlName", "AC_PURPOSE", 3, "ngClass", "options", "multiple"], ["placeholder", "Industry *", "formControlName", "AC_INDUSTRY", 3, "ngClass", "options", "multiple"], ["placeholder", "Health Code*", "formControlName", "AC_HEALTH", 3, "ngClass", "options", "multiple"], ["placeholder", "Account Type*", "required", "", "title", "Compulsory Selection", "formControlName", "AC_RELATION_TYPE", 3, "ngClass", "options", "multiple", "selected"], ["placeholder", "Director", "formControlName", "AC_DIRECTOR", 3, "ngClass", "options", "multiple", "disabled"], ["type", "text", "name", "AC_DIRECTOR_RELATION", "placeholder", " ", "id", "AC_DIRECTOR_RELATION", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_DIRECTOR_RELATION", "disabled", "", 1, "form-control"], ["for", "AC_DIRECTOR_RELATION"], [2, "text-align", "center", "font-size", "16px"], ["type", "text", "name", "AC_COREG_NO", "placeholder", " ", "id", "AC_COREG_NO", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "AC_COREG_NO", 1, "form-control"], ["for", "AC_COREG_NO"], ["type", "text", "name", "AC_COREG_DATE", "placeholder", " ", "id", "AC_COREG_DATE", "max", "9999-12-31", "onfocus", "(this.type='date')", "formControlName", "AC_COREG_DATE", 1, "form-control"], ["for", "AC_COREG_DATE"], ["type", "text", "name", "AC_COREG_AMT", "placeholder", " ", "id", "AC_COREG_AMT", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "AC_COREG_AMT", 1, "form-control"], ["for", "AC_COREG_AMT"], ["type", "text", "name", "AC_RESO_NO", "placeholder", " ", "id", "AC_RESO_NO", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "formControlName", "AC_RESO_NO", 1, "form-control"], ["for", "AC_RESO_NO"], ["type", "text", "name", "AC_RESO_DATE", "placeholder", " ", "id", "AC_RESO_DATE", "max", "9999-12-31", "onfocus", "(this.type='date')", "formControlName", "AC_RESO_DATE", 1, "form-control"], ["for", "AC_RESO_DATE"], ["type", "text", "formControlName", "AC_HONO", "name", "AC_HONO", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_HONO", "disabled", "", 1, "form-control"], ["for", "AC_HONO"], ["type", "text", "name", "AC_WARD", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_WARD", "formControlName", "AC_WARD", "disabled", "", 1, "form-control"], ["for", "AC_WARD"], [1, "col-sm-7"], ["type", "text", "name", "AC_ADDR", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_ADDR", "formControlName", "AC_ADDR", "disabled", "", 1, "form-control"], ["for", "AC_ADDR"], ["type", "text", "name", "AC_GALLI", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_GALLI", "formControlName", "AC_GALLI", "disabled", "", 1, "form-control"], ["for", "AC_GALLI"], ["type", "text", "name", "AC_AREA", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_AREA", "formControlName", "AC_AREA", "disabled", "", 1, "form-control"], ["for", "AC_AREA"], ["type", "text", "name", "AC_CTCODE", "placeholder", " ", "id", "AC_CTCODE", "pattern", "^[A-Za-z\\./ -]+$", "formControlName", "AC_CTCODE", "title", "Input allowed only  A-Z a-z  - / . (Space)", "disabled", "", 1, "form-control"], ["for", "AC_CTCODE"], ["type", "text", "name", "AC_PIN", "placeholder", " ", "pattern", "^[0-9]+$", "title", " Input allowed only  0-9", "maxlength", "6", "minlength", "6", "id", "AC_PIN", "formControlName", "AC_PIN", "disabled", "", 1, "form-control"], ["for", "AC_PIN"], [1, "col-sm-5"], ["type", "checkbox", "id", "AC_ADDFLAG", "formControlName", "AC_ADDFLAG", 1, "border-checkbox"], ["for", "AC_ADDFLAG", 1, "border-checkbox-label", 3, "click"], ["type", "text", "name", "AC_MOBILENO", "placeholder", " ", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "id", "AC_MOBILENO", "maxlength", "10", "minlength", "10", "formControlName", "AC_MOBILENO", "disabled", "", 1, "form-control"], ["for", "AC_MOBILENO"], ["type", "text", "name", "AC_PHONE_RES", "placeholder", " ", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "id", "AC_PHONE_RES", "maxlength", "10", "minlength", "10", "formControlName", "AC_PHONE_RES", "disabled", "", 1, "form-control"], ["for", "AC_PHONE_RES"], ["type", "text", "name", "AC_PHONE_OFFICE", "placeholder", " ", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "id", "AC_PHONE_OFFICE", "maxlength", "10", "minlength", "10", "formControlName", "AC_PHONE_OFFICE", "disabled", "", 1, "form-control"], ["for", "AC_PHONE_OFFICE"], ["type", "text", "formControlName", "AC_THONO", "name", "AC_THONO", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_THONO", 1, "form-control"], ["for", "AC_THONO"], ["type", "text", "name", "AC_TWARD", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_TWARD", "formControlName", "AC_TWARD", 1, "form-control"], ["for", "AC_TWARD"], ["type", "text", "name", "AC_TADDR", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_TADDR", "formControlName", "AC_TADDR", 1, "form-control"], ["for", "AC_TADDR"], ["type", "text", "name", "AC_TGALLI", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_TGALLI", "formControlName", "AC_TGALLI", 1, "form-control"], ["for", "AC_TGALLI"], ["type", "text", "name", "AC_TAREA", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_TAREA", "formControlName", "AC_TAREA", 1, "form-control"], ["for", "AC_TAREA"], ["placeholder", "City", "formControlName", "AC_TCTCODE", 3, "ngClass", "options", "multiple"], ["type", "text", "name", "AC_TPIN", "placeholder", " ", "pattern", "^[0-9]+$", "title", " Input allowed only  0-9", "maxlength", "6", "minlength", "6", "id", "AC_TPIN", "formControlName", "AC_TPIN", 1, "form-control"], ["for", "AC_TPIN"], ["placeholder", "Security Details", "formControlName", "SECURITY_CODE", 3, "ngClass", "options", "multiple", "selected"], ["type", "text", "name", "SECURITY_VALUE", "placeholder", " ", "id", "SECURITY_VALUE", "title", "Input allowed only  0-9", "formControlName", "SECURITY_VALUE", 1, "form-control"], ["for", "SECURITY_VALUE"], ["type", "button", "class", "btn btn-primary ripple light", 3, "click", 4, "ngIf"], [1, "table", "table-striped", "table-bordered", "table-hover"], ["type", "text", "name", "AC_REMARK", "placeholder", " ", "id", "AC_REMARK", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "pattern", "^[A-Za-z0-9\\./ -]+$", "formControlName", "AC_REMARK", 1, "form-control"], ["for", "AC_REMARK"], [1, "btn", "btn-primary", "ripple", "light", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "delbtn", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["id", "custicon", "placement", "bottom", "ngbTooltip", "View Security", 1, "fa", "fa-fw", "fa-plus-circle", "field-icon", 3, "click"], ["colspan", "6", 1, "no-data-available"], [3, "scheme", "newbookEvent"], [3, "scheme", "newcustomerInsuranceEvent"], [3, "scheme", "newfirePolicyEvent"], [3, "scheme", "newfurnitureFixEvent"], [3, "scheme", "newGoldsilverEvent"], [3, "scheme", "newgovtSecurityEvent"], [3, "scheme", "newLandBuldingEvent"], [3, "scheme", "newmarketShareEvent"], [3, "scheme", "newOtherSecurityEvent"], [3, "scheme", "newOwnDepositEvent"], [3, "scheme", "newPlantandMachiEvent"], [3, "scheme", "newPleadgeEvent"], [3, "scheme", "newStockEvent"], [3, "scheme", "newVehicalEvent"], [3, "ngClass"], ["routerLinkActive", "active", "id", "pointer", 1, "text-right", "f-w-600", 3, "click"], ["placeholder", "Customer ID *", "required", "", "title", "Compulsory Selection", "formControlName", "GAC_CUSTID", 3, "ngClass", "options", "multiple", "ngModel", "ngModelChange", "selected"], ["type", "text", "name", "GAC_MEMBNO", "placeholder", " ", "id", "GAC_MEMBNO", "pattern", "^[A-Za-z\\./ -]+$", "disabled", "", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "GAC_MEMBNO", 1, "form-control"], ["for", "GAC_MEMBNO"], ["type", "text", "name", "GAC_MEMBTYPE", "placeholder", " ", "id", "GAC_MEMBTYPE", "pattern", "^[A-Za-z\\./ -]+$", "disabled", "", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "GAC_MEMBTYPE", 1, "form-control"], ["for", "GAC_MEMBTYPE"], ["type", "text", "name", "GAC_NAME", "placeholder", " ", "id", "GAC_NAME", "pattern", "^[A-Za-z\\./ -]+$", "disabled", "", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "GAC_NAME", 1, "form-control"], ["for", "GAC_NAME"], ["type", "text", "name", "EXP_DATE", "placeholder", " ", "id", "EXP_DATE", "max", "9999-12-31", "onfocus", "(this.type='date')", "formControlName", "EXP_DATE", 1, "form-control"], ["for", "EXP_DATE"], ["id", "editbtn", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["placeholder", "Customer ID *", "required", "", "title", "Compulsory Selection", "formControlName", "CAC_CUSTID", 3, "ngClass", "options", "multiple", "ngModel", "ngModelChange", "selected"], ["type", "text", "name", "CAC_NAME", "placeholder", " ", "id", "CAC_NAME", "pattern", "^[A-Za-z\\./ -]+$", "disabled", "", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "CAC_NAME", 1, "form-control"], ["for", "CAC_NAME"]], template: function TermLoanMasterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Term Loan Account Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ": Required Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ng-select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_Template_ng_select_ngModelChange_16_listener($event) { return ctx.code = $event; })("selected", function TermLoanMasterComponent_Template_ng_select_selected_16_listener() { return ctx.getScheme(ctx.code); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TermLoanMasterComponent_div_18_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Account No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ng-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TermLoanMasterComponent_Template_ng_select_ngModelChange_27_listener($event) { return ctx.id = $event; })("selected", function TermLoanMasterComponent_Template_ng_select_selected_27_listener() { return ctx.getCustomer(ctx.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_Template_span_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r242); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31); return _r4.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, TermLoanMasterComponent_div_29_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "app-modal-basic", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Customer ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r242); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31); return _r4.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "perfect-scrollbar", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "app-customer-id", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newCustomerEvent", function TermLoanMasterComponent_Template_app_customer_id_newCustomerEvent_40_listener($event) { return ctx.newCustomer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermLoanMasterComponent_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r242); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31); return _r4.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, TermLoanMasterComponent_div_52_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ngb-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ngb-tab", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, TermLoanMasterComponent_ng_template_63_Template, 150, 29, "ng-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ngb-tab", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, TermLoanMasterComponent_ng_template_65_Template, 113, 46, "ng-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ngb-tab", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, TermLoanMasterComponent_ng_template_67_Template, 81, 11, "ng-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ngb-tab", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, TermLoanMasterComponent_ng_template_69_Template, 55, 24, "ng-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ngb-tab", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, TermLoanMasterComponent_ng_template_71_Template, 13, 5, "ng-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ngb-tab", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, TermLoanMasterComponent_ng_template_73_Template, 13, 5, "ng-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ngb-tab", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, TermLoanMasterComponent_ng_template_75_Template, 2, 1, "ng-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, TermLoanMasterComponent_button_78_Template, 2, 0, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, TermLoanMasterComponent_button_79_Template, 2, 0, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, TermLoanMasterComponent_button_81_Template, 2, 0, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "table", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, TermLoanMasterComponent_tbody_90_Template, 2, 1, "tbody", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, TermLoanMasterComponent_tbody_91_Template, 4, 0, "tbody", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "input", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "input", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "input", 88);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx.scheme)("multiple", false)("ngModel", ctx.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TYPE"].invalid && (ctx.angForm.controls["AC_TYPE"].dirty || ctx.angForm.controls["AC_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx.Cust_ID)("multiple", false)("ngModel", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_CUSTID"].invalid && (ctx.angForm.controls["AC_CUSTID"].dirty || ctx.angForm.controls["AC_CUSTID"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dialogClass", "modal-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TITLE"].invalid && (ctx.angForm.controls["AC_TITLE"].dirty || ctx.angForm.controls["AC_TITLE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.updateShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newbtnShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.termLoanMaster == null ? null : ctx.termLoanMaster.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.termLoanMaster == null ? null : ctx.termLoanMaster.length) == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], ng_select__WEBPACK_IMPORTED_MODULE_35__["SelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__["NgbTooltip"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_37__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_38__["PerfectScrollbarComponent"], _customer_id_customer_id_component__WEBPACK_IMPORTED_MODULE_39__["CustomerIdComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_36__["NgbTabContent"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgForOf"], _maintainance_security_details_book_debts_book_debts_component__WEBPACK_IMPORTED_MODULE_40__["BookDebtsComponent"], _maintainance_security_details_customer_insurance_customer_insurance_component__WEBPACK_IMPORTED_MODULE_41__["CustomerInsuranceComponent"], _maintainance_security_details_fire_policy_fire_policy_component__WEBPACK_IMPORTED_MODULE_42__["FirePolicyComponent"], _maintainance_security_details_furniture_and_fixture_furniture_and_fixture_component__WEBPACK_IMPORTED_MODULE_43__["FurnitureAndFixtureComponent"], _maintainance_security_details_gold_and_silver_gold_and_silver_component__WEBPACK_IMPORTED_MODULE_44__["GoldAndSilverComponent"], _maintainance_security_details_govt_security_and_lic_govt_security_and_lic_component__WEBPACK_IMPORTED_MODULE_45__["GovtSecurityAndLicComponent"], _maintainance_security_details_land_and_buildings_land_and_buildings_component__WEBPACK_IMPORTED_MODULE_46__["LandAndBuildingsComponent"], _maintainance_security_details_market_shares_market_shares_component__WEBPACK_IMPORTED_MODULE_47__["MarketSharesComponent"], _maintainance_security_details_other_security_other_security_component__WEBPACK_IMPORTED_MODULE_48__["OtherSecurityComponent"], _maintainance_security_details_own_deposits_own_deposits_component__WEBPACK_IMPORTED_MODULE_49__["OwnDepositsComponent"], _maintainance_security_details_plant_and_machinery_plant_and_machinery_component__WEBPACK_IMPORTED_MODULE_50__["PlantAndMachineryComponent"], _maintainance_security_details_pleadge_stock_pleadge_stock_component__WEBPACK_IMPORTED_MODULE_51__["PleadgeStockComponent"], _maintainance_security_details_stock_statement_stock_statement_component__WEBPACK_IMPORTED_MODULE_52__["StockStatementComponent"], _maintainance_security_details_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_53__["VehicleComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_34__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9jdXN0b21lci90ZXJtLWxvYW4tbWFzdGVyL3Rlcm0tbG9hbi1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
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
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }, { type: _term_loan_master_service__WEBPACK_IMPORTED_MODULE_10__["TermLoanService"] }, { type: _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__["CustomerIdService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["SchemeCodeDropdownService"] }, { type: _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIDMasterDropdownService"] }, { type: _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["IntrestCategoryMasterDropdownService"] }, { type: _shared_dropdownService_repay_mode_service__WEBPACK_IMPORTED_MODULE_15__["RepayModeService"] }, { type: _shared_dropdownService_installment_method_service__WEBPACK_IMPORTED_MODULE_16__["InstallmentMethodService"] }, { type: _shared_dropdownService_authority_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["AuthorityMasterDropdownService"] }, { type: _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["DirectorMasterDropdownService"] }, { type: _shared_dropdownService_recovery_cleark_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["RecoveryClearkMasterDropdownService"] }, { type: _shared_dropdownService_priority_sector_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["PrioritySectorMasterDropdownService"] }, { type: _shared_dropdownService_weaker_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["WeakerMasterDropdownService"] }, { type: _shared_dropdownService_purpose_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__["PurposeMasterDropdownService"] }, { type: _shared_dropdownService_industry_master_dropdown_service__WEBPACK_IMPORTED_MODULE_23__["IndustryMasterDropdownService"] }, { type: _shared_dropdownService_health_master_dropdown_service__WEBPACK_IMPORTED_MODULE_24__["HealthMasterDropdownService"] }, { type: _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_25__["cityMasterService"] }, { type: _shared_dropdownService_account_type_service__WEBPACK_IMPORTED_MODULE_26__["AccountTypeService"] }, { type: _shared_dropdownService_security_master_dropdown_service__WEBPACK_IMPORTED_MODULE_27__["SecurityMasterdropdownService"] }, { type: _policy_settings_definations_interest_rate_for_lacc_interest_rate_for_lacc_service__WEBPACK_IMPORTED_MODULE_28__["InterestRateForLoanandCCService"] }, { type: _policy_settings_information_priority_sector_master_priority_sector_master_service__WEBPACK_IMPORTED_MODULE_29__["PrioritySectorMasterService"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_30__["SystemMasterParametersService"] }, { type: _utility_scheme_parameters_term_loan_scheme_term_loan_scheme_service__WEBPACK_IMPORTED_MODULE_31__["TermLoanSchemeService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_32__["DatePipe"] }, { type: _policy_settings_definations_security_code_security_code_service__WEBPACK_IMPORTED_MODULE_33__["SecurityCodeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_34__["Router"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: false }]
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
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _term_loan_master_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./term-loan-master.service */ "./src/app/theme/master/customer/term-loan-master/term-loan-master.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/customer-id-master-dropdown.service */ "./src/app/shared/dropdownService/customer-id-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/dropdownService/interest-category-master-dropdown.service */ "./src/app/shared/dropdownService/interest-category-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_repay_mode_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/repay-mode.service */ "./src/app/shared/dropdownService/repay-mode.service.ts");
/* harmony import */ var _shared_dropdownService_installment_method_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/dropdownService/installment-method.service */ "./src/app/shared/dropdownService/installment-method.service.ts");
/* harmony import */ var _shared_dropdownService_authority_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/dropdownService/authority-master-dropdown.service */ "./src/app/shared/dropdownService/authority-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/dropdownService/director-master-dropdown.service */ "./src/app/shared/dropdownService/director-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_recovery_cleark_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/dropdownService/recovery-cleark-master-dropdown.service */ "./src/app/shared/dropdownService/recovery-cleark-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_priority_sector_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/dropdownService/priority-sector-master-dropdown.service */ "./src/app/shared/dropdownService/priority-sector-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_weaker_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/dropdownService/weaker-master-dropdown.service */ "./src/app/shared/dropdownService/weaker-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_purpose_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/dropdownService/purpose-master-dropdown.service */ "./src/app/shared/dropdownService/purpose-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_industry_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/dropdownService/industry-master-dropdown.service */ "./src/app/shared/dropdownService/industry-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_health_master_dropdown_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/dropdownService/health-master-dropdown.service */ "./src/app/shared/dropdownService/health-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_account_type_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/dropdownService/account-type.service */ "./src/app/shared/dropdownService/account-type.service.ts");
/* harmony import */ var _shared_dropdownService_security_master_dropdown_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/dropdownService/security-master-dropdown.service */ "./src/app/shared/dropdownService/security-master-dropdown.service.ts");
/* harmony import */ var _policy_settings_definations_interest_rate_for_lacc_interest_rate_for_lacc_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service */ "./src/app/theme/master/policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service.ts");
/* harmony import */ var _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../customer-id/customer-id.module */ "./src/app/theme/master/customer/customer-id/customer-id.module.ts");
/* harmony import */ var _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../shared/dropdownService/city-master-dropdown.service */ "./src/app/shared/dropdownService/city-master-dropdown.service.ts");
/* harmony import */ var _policy_settings_definations_security_code_security_code_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../policy-settings/definations/security-code/security-code.service */ "./src/app/theme/master/policy-settings/definations/security-code/security-code.service.ts");
/* harmony import */ var _policy_settings_information_priority_sector_master_priority_sector_master_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../policy-settings/information/priority-sector-master/priority-sector-master.service */ "./src/app/theme/master/policy-settings/information/priority-sector-master/priority-sector-master.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _utility_scheme_parameters_term_loan_scheme_term_loan_scheme_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../utility/scheme-parameters/term-loan-scheme/term-loan-scheme.service */ "./src/app/theme/utility/scheme-parameters/term-loan-scheme/term-loan-scheme.service.ts");
/* harmony import */ var _maintainance_security_details_securityDetails_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../maintainance/security-details/securityDetails.module */ "./src/app/theme/master/maintainance/security-details/securityDetails.module.ts");






































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class TermLoanMasterModule {
}
TermLoanMasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermLoanMasterModule });
TermLoanMasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermLoanMasterModule_Factory(t) { return new (t || TermLoanMasterModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        _term_loan_master_service__WEBPACK_IMPORTED_MODULE_9__["TermLoanService"],
        _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"],
        _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__["CustomerIdService"],
        _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["CustomerIDMasterDropdownService"],
        _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["IntrestCategoryMasterDropdownService"],
        _shared_dropdownService_repay_mode_service__WEBPACK_IMPORTED_MODULE_14__["RepayModeService"],
        _shared_dropdownService_installment_method_service__WEBPACK_IMPORTED_MODULE_15__["InstallmentMethodService"],
        _shared_dropdownService_authority_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["AuthorityMasterDropdownService"],
        _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["DirectorMasterDropdownService"],
        _shared_dropdownService_recovery_cleark_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["RecoveryClearkMasterDropdownService"],
        _shared_dropdownService_priority_sector_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["PrioritySectorMasterDropdownService"],
        _shared_dropdownService_weaker_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["WeakerMasterDropdownService"],
        _shared_dropdownService_purpose_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["PurposeMasterDropdownService"],
        _shared_dropdownService_industry_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__["IndustryMasterDropdownService"],
        _shared_dropdownService_health_master_dropdown_service__WEBPACK_IMPORTED_MODULE_23__["HealthMasterDropdownService"],
        _shared_dropdownService_account_type_service__WEBPACK_IMPORTED_MODULE_24__["AccountTypeService"],
        _shared_dropdownService_security_master_dropdown_service__WEBPACK_IMPORTED_MODULE_25__["SecurityMasterdropdownService"],
        _policy_settings_definations_interest_rate_for_lacc_interest_rate_for_lacc_service__WEBPACK_IMPORTED_MODULE_26__["InterestRateForLoanandCCService"],
        _policy_settings_information_priority_sector_master_priority_sector_master_service__WEBPACK_IMPORTED_MODULE_30__["PrioritySectorMasterService"],
        _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_28__["cityMasterService"],
        _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_32__["SystemMasterParametersService"],
        _utility_scheme_parameters_term_loan_scheme_term_loan_scheme_service__WEBPACK_IMPORTED_MODULE_33__["TermLoanSchemeService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
        _policy_settings_definations_security_code_security_code_service__WEBPACK_IMPORTED_MODULE_29__["SecurityCodeService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _term_loan_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermLoanMasterRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_27__["CustomerIdModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__["PerfectScrollbarModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _maintainance_security_details_securityDetails_module__WEBPACK_IMPORTED_MODULE_34__["SecurityDetailsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermLoanMasterModule, { declarations: [_term_loan_master_component__WEBPACK_IMPORTED_MODULE_6__["TermLoanMasterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _term_loan_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermLoanMasterRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_27__["CustomerIdModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__["PerfectScrollbarModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _maintainance_security_details_securityDetails_module__WEBPACK_IMPORTED_MODULE_34__["SecurityDetailsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermLoanMasterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _term_loan_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermLoanMasterRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_27__["CustomerIdModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__["PerfectScrollbarModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _maintainance_security_details_securityDetails_module__WEBPACK_IMPORTED_MODULE_34__["SecurityDetailsModule"]
                ],
                declarations: [_term_loan_master_component__WEBPACK_IMPORTED_MODULE_6__["TermLoanMasterComponent"],
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_31__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                    _term_loan_master_service__WEBPACK_IMPORTED_MODULE_9__["TermLoanService"],
                    _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SchemeCodeDropdownService"],
                    _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__["CustomerIdService"],
                    _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["CustomerIDMasterDropdownService"],
                    _shared_dropdownService_interest_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["IntrestCategoryMasterDropdownService"],
                    _shared_dropdownService_repay_mode_service__WEBPACK_IMPORTED_MODULE_14__["RepayModeService"],
                    _shared_dropdownService_installment_method_service__WEBPACK_IMPORTED_MODULE_15__["InstallmentMethodService"],
                    _shared_dropdownService_authority_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["AuthorityMasterDropdownService"],
                    _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["DirectorMasterDropdownService"],
                    _shared_dropdownService_recovery_cleark_master_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["RecoveryClearkMasterDropdownService"],
                    _shared_dropdownService_priority_sector_master_dropdown_service__WEBPACK_IMPORTED_MODULE_19__["PrioritySectorMasterDropdownService"],
                    _shared_dropdownService_weaker_master_dropdown_service__WEBPACK_IMPORTED_MODULE_20__["WeakerMasterDropdownService"],
                    _shared_dropdownService_purpose_master_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["PurposeMasterDropdownService"],
                    _shared_dropdownService_industry_master_dropdown_service__WEBPACK_IMPORTED_MODULE_22__["IndustryMasterDropdownService"],
                    _shared_dropdownService_health_master_dropdown_service__WEBPACK_IMPORTED_MODULE_23__["HealthMasterDropdownService"],
                    _shared_dropdownService_account_type_service__WEBPACK_IMPORTED_MODULE_24__["AccountTypeService"],
                    _shared_dropdownService_security_master_dropdown_service__WEBPACK_IMPORTED_MODULE_25__["SecurityMasterdropdownService"],
                    _policy_settings_definations_interest_rate_for_lacc_interest_rate_for_lacc_service__WEBPACK_IMPORTED_MODULE_26__["InterestRateForLoanandCCService"],
                    _policy_settings_information_priority_sector_master_priority_sector_master_service__WEBPACK_IMPORTED_MODULE_30__["PrioritySectorMasterService"],
                    _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_28__["cityMasterService"],
                    _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_32__["SystemMasterParametersService"],
                    _utility_scheme_parameters_term_loan_scheme_term_loan_scheme_service__WEBPACK_IMPORTED_MODULE_33__["TermLoanSchemeService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
                    _policy_settings_definations_security_code_security_code_service__WEBPACK_IMPORTED_MODULE_29__["SecurityCodeService"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=term-loan-master-term-loan-master-module.js.map