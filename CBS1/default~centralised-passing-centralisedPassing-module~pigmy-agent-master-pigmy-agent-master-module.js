(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~centralised-passing-centralisedPassing-module~pigmy-agent-master-pigmy-agent-master-module"],{

/***/ "./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: PigmyAgentMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PigmyAgentMasterRoutingModule", function() { return PigmyAgentMasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pigmy_agent_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pigmy-agent-master.component */ "./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.component.ts");





const routes = [
    {
        path: '',
        component: _pigmy_agent_master_component__WEBPACK_IMPORTED_MODULE_2__["PigmyAgentMasterComponent"],
        data: {
            title: 'Pigmy Agent Master',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class PigmyAgentMasterRoutingModule {
}
PigmyAgentMasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PigmyAgentMasterRoutingModule });
PigmyAgentMasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PigmyAgentMasterRoutingModule_Factory(t) { return new (t || PigmyAgentMasterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PigmyAgentMasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PigmyAgentMasterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PigmyAgentMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PigmyAgentMasterComponent", function() { return PigmyAgentMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dropdownService/customer-id-master-dropdown.service */ "./src/app/shared/dropdownService/customer-id-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _pigmy_agent_master_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pigmy-agent-master.service */ "./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.service.ts");
/* harmony import */ var _shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/dropdownService/cast-master-dropdown.service */ "./src/app/shared/dropdownService/cast-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/dropdownService/city-master-dropdown.service */ "./src/app/shared/dropdownService/city-master-dropdown.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _customer_id_customer_id_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../customer-id/customer-id.component */ "./src/app/theme/master/customer/customer-id/customer-id.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");






























const _c0 = ["modalLarge"];
const _c1 = ["ctdTabset"];
function PigmyAgentMasterComponent_ng_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", values_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", values_r10.label, "");
} }
function PigmyAgentMasterComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_div_24_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["AC_TYPE"].errors == null ? null : ctx_r2.angForm.controls["AC_TYPE"].errors.required);
} }
function PigmyAgentMasterComponent_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", values_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", values_r12.label, "");
} }
function PigmyAgentMasterComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_div_35_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.angForm.controls["AC_CUSTID"].errors == null ? null : ctx_r4.angForm.controls["AC_CUSTID"].errors.required);
} }
function PigmyAgentMasterComponent_ng_template_73_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_73_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_73_div_12_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.angForm.controls["AC_OPDATE"].errors == null ? null : ctx_r14.angForm.controls["AC_OPDATE"].errors.required);
} }
function PigmyAgentMasterComponent_ng_template_73_ng_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", values_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", values_r19.label, " ");
} }
function PigmyAgentMasterComponent_ng_template_73_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_73_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_73_div_28_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.angForm.controls["PIGMY_ACTYPE"].errors == null ? null : ctx_r16.angForm.controls["PIGMY_ACTYPE"].errors.required);
} }
function PigmyAgentMasterComponent_ng_template_73_div_79_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_73_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_73_div_79_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.angForm.controls["AC_PIN"].errors == null ? null : ctx_r17.angForm.controls["AC_PIN"].errors.pattern);
} }
const _c2 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
const _c3 = function (a0) { return { "form-submitted": a0 }; };
function PigmyAgentMasterComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PigmyAgentMasterComponent_ng_template_73_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.openingDate = $event; })("keypress", function PigmyAgentMasterComponent_ng_template_73_Template_input_keypress_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Appontied On");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PigmyAgentMasterComponent_ng_template_73_div_12_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Cast");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ng-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PigmyAgentMasterComponent_ng_template_73_Template_ng_select_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.ngPigmy = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, PigmyAgentMasterComponent_ng_template_73_ng_option_23_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Pimgy Scheme ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, PigmyAgentMasterComponent_ng_template_73_div_28_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h6", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "--------- Permanent Address ---------");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, PigmyAgentMasterComponent_ng_template_73_div_79_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Residental Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Office");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_ng_template_73_Template_button_click_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.switchNgBTab("nominee"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r7.openingDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c3, ctx_r7.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_OPDATE"].invalid && (ctx_r7.angForm.controls["AC_OPDATE"].dirty || ctx_r7.angForm.controls["AC_OPDATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r7.ngPigmy)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx_r7.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.PGSchemeCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["PIGMY_ACTYPE"].invalid && (ctx_r7.angForm.controls["PIGMY_ACTYPE"].dirty || ctx_r7.angForm.controls["PIGMY_ACTYPE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.angForm.controls["AC_PIN"].invalid && (ctx_r7.angForm.controls["AC_PIN"].dirty || ctx_r7.angForm.controls["AC_PIN"].touched));
} }
function PigmyAgentMasterComponent_ng_template_75_ng_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", values_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", values_r38.label, "");
} }
function PigmyAgentMasterComponent_ng_template_75_ng_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", values_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", values_r39.label, "");
} }
function PigmyAgentMasterComponent_ng_template_75_ng_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", values_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", values_r40.label, " ", values_r40.name, "");
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_75_div_45_div_11_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r41.angForm.controls["AC_NNAME"].errors == null ? null : ctx_r41.angForm.controls["AC_NNAME"].errors.pattern) || (ctx_r41.angForm.controls["AC_NNAME"].errors == null ? null : ctx_r41.angForm.controls["AC_NNAME"].errors.maxlength));
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_75_div_45_div_20_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r42.angForm.controls["AC_NRELA"].errors == null ? null : ctx_r42.angForm.controls["AC_NRELA"].errors.pattern) || (ctx_r42.angForm.controls["AC_NRELA"].errors == null ? null : ctx_r42.angForm.controls["AC_NRELA"].errors.maxlength));
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This fiels is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_75_div_45_div_29_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r43.angForm.controls["AC_NDATE"].errors == null ? null : ctx_r43.angForm.controls["AC_NDATE"].errors.required);
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This fiels is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_75_div_45_div_36_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r44.angForm.controls["AGE"].errors == null ? null : ctx_r44.angForm.controls["AGE"].errors.pattern) || (ctx_r44.angForm.controls["AGE"].errors == null ? null : ctx_r44.angForm.controls["AGE"].errors.min) || (ctx_r44.angForm.controls["AGE"].errors == null ? null : ctx_r44.angForm.controls["AGE"].errors.max));
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_75_div_45_div_43_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r45.angForm.controls["AC_NHONO"].errors == null ? null : ctx_r45.angForm.controls["AC_NHONO"].errors.pattern);
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_75_div_45_div_50_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r46.angForm.controls["AC_NWARD"].errors == null ? null : ctx_r46.angForm.controls["AC_NWARD"].errors.pattern);
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_58_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_75_div_45_div_58_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r47.angForm.controls["AC_NGALLI"].errors == null ? null : ctx_r47.angForm.controls["AC_NGALLI"].errors.pattern);
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_65_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Input allowed only A-Z a-z - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_75_div_45_div_65_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r48.angForm.controls["AC_NAREA"].errors == null ? null : ctx_r48.angForm.controls["AC_NAREA"].errors.pattern);
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_75_div_45_div_72_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r49.angForm.controls["AC_NADDR"].errors == null ? null : ctx_r49.angForm.controls["AC_NADDR"].errors.pattern);
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_87_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_75_div_45_div_87_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r50.angForm.controls["AC_NPIN"].errors == null ? null : ctx_r50.angForm.controls["AC_NPIN"].errors.pattern) || (ctx_r50.angForm.controls["AC_NPIN"].errors == null ? null : ctx_r50.angForm.controls["AC_NPIN"].errors.minlength) || (ctx_r50.angForm.controls["AC_NPIN"].errors == null ? null : ctx_r50.angForm.controls["AC_NPIN"].errors.maxlength));
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_button_89_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_ng_template_75_div_45_button_89_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r63.addNominee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Add Nominee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_button_90_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_ng_template_75_div_45_button_90_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r65.updateNominee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Update Nominee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function PigmyAgentMasterComponent_ng_template_75_div_45_Template_input_keypress_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r68); return $event.charCode >= 65 && $event.charCode < 90 || $event.charCode >= 97 && $event.charCode < 122 || $event.charCode <= 32; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PigmyAgentMasterComponent_ng_template_75_div_45_div_11_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function PigmyAgentMasterComponent_ng_template_75_div_45_Template_input_keypress_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r68); return $event.charCode >= 65 && $event.charCode < 90 || $event.charCode >= 97 && $event.charCode < 122 || $event.charCode <= 32; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Relation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, PigmyAgentMasterComponent_ng_template_75_div_45_div_20_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PigmyAgentMasterComponent_ng_template_75_div_45_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r68); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r70.ngnomineedate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Nomination Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, PigmyAgentMasterComponent_ng_template_75_div_45_div_29_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusout", function PigmyAgentMasterComponent_ng_template_75_div_45_Template_input_focusout_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r68); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r71.age(); })("keypress", function PigmyAgentMasterComponent_ng_template_75_div_45_Template_input_keypress_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r68); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, PigmyAgentMasterComponent_ng_template_75_div_45_div_36_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, PigmyAgentMasterComponent_ng_template_75_div_45_div_43_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, PigmyAgentMasterComponent_ng_template_75_div_45_div_50_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, PigmyAgentMasterComponent_ng_template_75_div_45_div_58_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, PigmyAgentMasterComponent_ng_template_75_div_45_div_65_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, PigmyAgentMasterComponent_ng_template_75_div_45_div_72_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "ng-select", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PigmyAgentMasterComponent_ng_template_75_div_45_Template_ng_select_ngModelChange_76_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r68); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r73.ngNcity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "sub", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function PigmyAgentMasterComponent_ng_template_75_div_45_Template_input_keypress_84_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r68); return $event.charCode >= 48 && $event.charCode < 58; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, PigmyAgentMasterComponent_ng_template_75_div_45_div_87_Template, 2, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, PigmyAgentMasterComponent_ng_template_75_div_45_button_89_Template, 2, 0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, PigmyAgentMasterComponent_ng_template_75_div_45_button_90_Template, 2, 0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c3, ctx_r30.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_NNAME"].invalid && (ctx_r30.angForm.controls["AC_NNAME"].dirty || ctx_r30.angForm.controls["AC_NNAME"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c3, ctx_r30.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_NRELA"].invalid && (ctx_r30.angForm.controls["AC_NRELA"].dirty || ctx_r30.angForm.controls["AC_NRELA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r30.ngnomineedate)("minDate", ctx_r30.minDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_NDATE"].invalid && (ctx_r30.angForm.controls["AC_NDATE"].dirty || ctx_r30.angForm.controls["AC_NDATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AGE"].invalid && (ctx_r30.angForm.controls["AGE"].dirty || ctx_r30.angForm.controls["AGE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_NHONO"].invalid && (ctx_r30.angForm.controls["AC_NHONO"].dirty || ctx_r30.angForm.controls["AC_NHONO"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_NWARD"].invalid && (ctx_r30.angForm.controls["AC_NWARD"].dirty || ctx_r30.angForm.controls["AC_NWARD"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_NGALLI"].invalid && (ctx_r30.angForm.controls["AC_NGALLI"].dirty || ctx_r30.angForm.controls["AC_NGALLI"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_NAREA"].invalid && (ctx_r30.angForm.controls["AC_NAREA"].dirty || ctx_r30.angForm.controls["AC_NAREA"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_NADDR"].invalid && (ctx_r30.angForm.controls["AC_NADDR"].dirty || ctx_r30.angForm.controls["AC_NADDR"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r30.cityMasterServiceDropdown)("ngModel", ctx_r30.ngNcity)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c3, ctx_r30.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_NPIN"].invalid && (ctx_r30.angForm.controls["AC_NPIN"].dirty || ctx_r30.angForm.controls["AC_NPIN"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.nomineeShowButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.nomineeUpdateShow);
} }
function PigmyAgentMasterComponent_ng_template_75_tbody_75_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_ng_template_75_tbody_75_tr_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r79); const indexOfelement_r77 = ctx.index; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r78.editNominee(indexOfelement_r77); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_ng_template_75_tbody_75_tr_1_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r79); const indexOfelement_r77 = ctx.index; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r80.delNominee(indexOfelement_r77); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "td", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r76.AC_NNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r76.AC_NRELA);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r76.AGE === "" || data_r76.AGE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r76.AGE === "" || data_r76.AGE == null ? "-" : data_r76.AGE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r76.AC_NDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r76.AC_NDATE === "" ? "-" : data_r76.AC_NDATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r76.AC_NHONO === "" || data_r76.AC_NHONO == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r76.AC_NHONO === "" || data_r76.AC_NHONO == null ? "-" : data_r76.AC_NHONO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r76.AC_NWARD === "" || data_r76.AC_NWARD == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r76.AC_NWARD === "" || data_r76.AC_NWARD == null ? "-" : data_r76.AC_NWARD, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r76.AC_NADDR === "" || data_r76.AC_NADDR == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r76.AC_NADDR === "" || data_r76.AC_NADDR == null ? "-" : data_r76.AC_NADDR, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r76.AC_NGALLI === "" || data_r76.AC_NGALLI == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r76.AC_NGALLI === "" || data_r76.AC_NGALLI == null ? "-" : data_r76.AC_NGALLI, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r76.AC_NAREA === "" || data_r76.AC_NAREA == null ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r76.AC_NAREA === "" || data_r76.AC_NAREA == null ? "-" : data_r76.AC_NAREA, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r76.AC_NCTCODE === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r76.AC_NCTCODE === "" ? "-" : data_r76.AC_CITYNAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r76.AC_NPIN === "" || data_r76.AC_NPIN == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r76.AC_NPIN === "" || data_r76.AC_NPIN == null ? "-" : data_r76.AC_NPIN, " ");
} }
function PigmyAgentMasterComponent_ng_template_75_tbody_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_ng_template_75_tbody_75_tr_1_Template, 29, 20, "tr", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r31.multiNominee);
} }
function PigmyAgentMasterComponent_ng_template_75_tbody_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " No data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_button_79_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_ng_template_75_button_79_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r81.submit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_button_80_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_ng_template_75_button_80_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r83.addNewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_button_82_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_ng_template_75_button_82_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r85.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_button_84_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_ng_template_75_button_84_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r87.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_ng_template_75_button_86_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_ng_template_75_button_86_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r89.Approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c4 = function (a0) { return { isActive: a0 }; };
function PigmyAgentMasterComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "b", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "INTRODUCER");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Introducer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ng-select", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PigmyAgentMasterComponent_ng_template_75_Template_ng_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r91.ngBranch = $event; })("change", function PigmyAgentMasterComponent_ng_template_75_Template_ng_select_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r92); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r93.getBranch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PigmyAgentMasterComponent_ng_template_75_ng_option_18_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ng-select", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PigmyAgentMasterComponent_ng_template_75_Template_ng_select_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r92); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r94.acno = $event; })("change", function PigmyAgentMasterComponent_ng_template_75_Template_ng_select_change_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r92); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r95.getIntro($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, PigmyAgentMasterComponent_ng_template_75_ng_option_25_Template, 2, 2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Account Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ng-select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PigmyAgentMasterComponent_ng_template_75_Template_ng_select_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r92); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r96.ngIntroducer = $event; })("focus", function PigmyAgentMasterComponent_ng_template_75_Template_ng_select_focus_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r92); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r97.getIntroducer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, PigmyAgentMasterComponent_ng_template_75_ng_option_32_Template, 2, 3, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_ng_template_75_Template_input_click_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r92); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r98.nominee($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "b", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "NOMINEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, PigmyAgentMasterComponent_ng_template_75_div_45_Template, 91, 27, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "table", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Relation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Nomination Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "House");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Ward");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Galli");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Pin code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, PigmyAgentMasterComponent_ng_template_75_tbody_75_Template, 2, 1, "tbody", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, PigmyAgentMasterComponent_ng_template_75_tbody_76_Template, 4, 0, "tbody", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, PigmyAgentMasterComponent_ng_template_75_button_79_Template, 2, 0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, PigmyAgentMasterComponent_ng_template_75_button_80_Template, 2, 0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, PigmyAgentMasterComponent_ng_template_75_button_82_Template, 2, 0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, PigmyAgentMasterComponent_ng_template_75_button_84_Template, 2, 0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, PigmyAgentMasterComponent_ng_template_75_button_86_Template, 2, 0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r8.ngBranch)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c3, ctx_r8.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.OwnbranchMasterDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r8.acno)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c3, ctx_r8.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.SchemeCodeDropdownDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r8.ngIntroducer)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c3, ctx_r8.formSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.introducerACNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c4, ctx_r8.nomineeTrue));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.nomineeTrue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r8.multiNominee == null ? null : ctx_r8.multiNominee.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r8.multiNominee == null ? null : ctx_r8.multiNominee.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.showButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.newbtnShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.updateShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.rejectShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.approveShow);
} }
function PigmyAgentMasterComponent_div_76_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_div_76_tbody_8_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r105); const data_r103 = ctx.$implicit; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r104.editClickHandler(data_r103.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r103.AC_TYPE === "" || data_r103.AC_TYPE == null ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r103.AC_TYPE === "" || data_r103.AC_TYPE == null ? "-" : data_r103.DPMaster.S_APPL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r103.BANKACNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r103.BANKACNO === "" ? "-" : data_r103.BANKACNO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r103.AC_CUSTID === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r103.AC_CUSTID === "" ? "-" : data_r103.AC_CUSTID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r103.AC_NAME === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r103.AC_NAME === "" ? "-" : data_r103.AC_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r103.PIGMY_ACTYPE === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r103.PIGMY_ACTYPE === "" ? "-" : data_r103.PIGMY_ACTYPE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", data_r103.AC_OPDATE === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r103.AC_OPDATE === "" ? "-" : data_r103.AC_OPDATE, "");
} }
function PigmyAgentMasterComponent_div_76_tbody_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PigmyAgentMasterComponent_div_76_tbody_8_tr_1_Template, 15, 12, "tr", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r99.pigmyAgentMaster);
} }
function PigmyAgentMasterComponent_div_76_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PigmyAgentMasterComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "table", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PigmyAgentMasterComponent_div_76_tbody_8_Template, 2, 1, "tbody", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PigmyAgentMasterComponent_div_76_tbody_9_Template, 4, 0, "tbody", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tfoot", 133, 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tr", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx_r9.dtExportButtonOptions)("dtTrigger", ctx_r9.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r9.pigmyAgentMaster == null ? null : ctx_r9.pigmyAgentMaster.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r9.pigmyAgentMaster == null ? null : ctx_r9.pigmyAgentMaster.length) == 0);
} }
// Handling datatable data
class DataTableResponse {
}
class PigmyAgentMasterComponent {
    constructor(customerID, schemeCodeDropdownService, PigmyAgentMasterService, CastMasterService, OwnbranchMasterService, cityMasterService, datePipe, customerIdService, systemParameter, schemeAccountNoService, http, fb) {
        this.customerID = customerID;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.PigmyAgentMasterService = PigmyAgentMasterService;
        this.CastMasterService = CastMasterService;
        this.OwnbranchMasterService = OwnbranchMasterService;
        this.cityMasterService = cityMasterService;
        this.datePipe = datePipe;
        this.customerIdService = customerIdService;
        this.systemParameter = systemParameter;
        this.schemeAccountNoService = schemeAccountNoService;
        this.http = http;
        this.fb = fb;
        this.getUserData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.formSubmitted = false;
        //api 
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].base_url;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        //Scheme type variable
        this.schemeType = 'AG';
        this.pgScheme = 'PG';
        this.dtExportButtonOptions = {};
        this.dtExportOptions = {};
        this.newbtnShow = false;
        //Nominee variables
        this.multiNominee = [];
        this.nomineeShowButton = true;
        this.nomineeUpdateShow = false;
        //temp address flag variable
        this.tempAddress = true;
        this.recovery = false;
        this.nomineeTrue = false;
        this.isDisabled = true;
        this.selectedCharacter = '3';
        this.timeLeft = 5;
        this.dataSub = null;
        // Variables for hide/show add and update button
        this.showButton = true;
        this.updateShow = false;
        //variable to get ID to update
        this.updateID = 0;
        this.page = 1;
        //filter variable
        this.filterData = {};
        this.counter = 1;
        this.rowData = [];
        //for modal
        this.showModalStatus = false;
        this.showDialog = false;
        this.visible1 = false;
        this.visibleAnimate = false;
        this.selectedOption = '3';
        // id: string = '';
        this.NomineeTrue = false;
        this.AC_TYPE = false;
        this.code = null;
        this.id = null;
        this.ngPigmy = null;
        this.ngBranch = null;
        this.acno = null;
        this.ngIntroducer = null;
        this.ngNcity = null;
        this.DatatableHideShow = true;
        this.rejectShow = false;
        this.approveShow = false;
        this.cityName = false;
        if (this.childMessage != undefined) {
            this.editClickHandler(this.childMessage);
        }
        this.maxDate = new Date();
        this.minDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate());
        this.minDate.setDate(this.minDate.getDate());
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
                    .post(this.url + '/pigmy-agent-master', dataTableParameters).subscribe(resp => {
                    this.pigmyAgentMaster = resp.data;
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
                    title: 'Agent Number',
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
                    title: 'Pimgy Scheme',
                    data: 'PIGMY_ACTYPE'
                },
                {
                    title: 'Appontied On',
                    data: 'AC_OPDATE'
                },
            ],
            dom: 'Blrtip',
        };
        this.CastMasterService.getcastList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(data => {
            this.CastMasterDropdown = data;
        });
        this.OwnbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(data => {
            this.OwnbranchMasterDropdown = data;
        });
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(data => {
            this.SchemeCodeDropdownDropdown = data;
        });
        this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(data => {
            var filtered = data.filter(function (scheme) {
                return (scheme.id == 'AG');
            });
            this.scheme = filtered;
            this.code = this.scheme[0].value;
        });
        this.schemeCodeDropdownService.getSchemeCodeList(this.pgScheme).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(data => {
            var filtered = data.filter(function (scheme) {
                return (scheme.id == 'PG');
            });
            this.PGSchemeCode = filtered;
            // this.PGSchemeCode = data;
        });
        this.cityMasterService.getcityList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(data => {
            this.cityMasterServiceDropdown = data;
        });
        this.runTimer();
        this.customerID.getCustomerIDMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(data => {
            this.Cust_ID = data;
        });
    }
    getSystemParaDate() {
        this.systemParameter.getFormData(1).subscribe(data => {
            this.openingDate = data.CURRENT_DATE;
            this.tempopendate = data.CURRENT_DATE;
            if (data.ON_LINE === true) {
                this.angForm.controls['AC_OPDATE'].disable();
            }
            else {
                this.angForm.controls['AC_OPDATE'].enable();
            }
        });
    }
    addNewCustomer(newCustomer) {
        this.customerID.getCustomerIDMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(data => {
            this.Cust_ID = data;
            this.id = newCustomer;
            this.getCustomer(newCustomer);
        });
    }
    tempAsPermanent() {
        this.tempAddress = !this.tempAddress;
    }
    getCustomer(id) {
        this.getSystemParaDate(); //function to set date
        this.customerIdService.getFormData(id).subscribe(data => {
            var _a;
            this.id = data.id;
            if (data.castMaster == null) {
                data.castMaster = "";
            }
            if (data.occupMaster == null) {
                data.occupMaster = "";
            }
            this.angForm.patchValue({
                // AC_CUSTID: id.toString(),
                AC_TITLE: data.AC_TITLE,
                AC_NAME: data.AC_NAME,
                AC_MEMBTYPE: data.AC_MEMBTYPE,
                AC_MEMBNO: data.AC_MEMBNO,
                AC_CAST: data.castMaster.NAME,
                AC_OCODE: data.occupMaster.NAME,
                AC_MOBNO: data.AC_MOBILENO,
                AC_PHNO: data.AC_PHONE_RES,
                AC_EMAIL: data.AC_EMAILID,
                AC_PANNO: data.AC_PANNO,
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
                AC_CTCODE: (_a = permadd.city) === null || _a === void 0 ? void 0 : _a.CITY_NAME,
                AC_PIN: permadd === null || permadd === void 0 ? void 0 : permadd.AC_PIN,
            });
        });
        this.onCloseModal();
    }
    runTimer() {
        const timer = setInterval(() => {
            this.timeLeft -= 1;
            if (this.timeLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
    onCloseModal() {
        this.visibleAnimate = false;
        setTimeout(() => this.visible1 = false, 300);
    }
    OpenLink(val) {
        if (val == 1) {
            this.NomineeTrue = true;
        }
    }
    createForm() {
        this.angForm = this.fb.group({
            AC_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            AC_ACNOTYPE: ['AG'],
            AC_NO: ['',],
            AC_CUSTID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            AC_TITLE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            AC_NAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            AC_CAST: ['',],
            AC_OPDATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            PIGMY_ACTYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            AC_HONO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_WARD: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_GALLI: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_AREA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_PIN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_ADDR: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_PHONE_RES: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_PHONE_OFFICE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_MOBILENO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            // AC_INTRACNO: ['', [Validators.pattern]],
            BANKACNO: [''],
            AC_CTCODE: [''],
            AC_INTROBRANCH: ['', []],
            AC_INTROID: [''],
            AC_INTRACNO: [''],
            AC_INTRNAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            SIGNATURE_AUTHORITY: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            //nominee controls (NOMINEELINK table)
            AC_NNAME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_NRELA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_NDATE: ['',],
            AGE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
            AC_NHONO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_NWARD: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_NADDR: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_NGALLI: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_NAREA: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_NCTCODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            AC_NPIN: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
        });
        let sysdate = new Date();
        let sysDate = this.datePipe.transform(sysdate, "yyyy-MM-dd");
        this.angForm.patchValue({
            'AC_NDATE': sysDate,
        });
    }
    //get account no according scheme for introducer
    getIntroducer() {
        this.obj = [this.acno, this.ngBranch];
        switch (this.getschemename) {
            case 'SB':
                this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'SH':
                this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'CA':
                this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'LN':
                this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'TD':
                this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'DS':
                this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'CC':
                this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'GS':
                this.schemeAccountNoService.getAnamatSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'PG':
                this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'AG':
                this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
                });
                break;
            case 'IV':
                this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                    this.ngIntroducer = null;
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
    getScheme(value) {
        this.schemeCode = value.name;
    }
    // Method to insert data into database through NestJS
    submit(event) {
        event.preventDefault();
        this.formSubmitted = true;
        let opdate;
        let temdate;
        if (this.angForm.valid) {
            const formVal = this.angForm.value;
            let schecode;
            if (this.tempopendate != this.openingDate) {
                temdate = (formVal.AC_OPDATE == '' || formVal.AC_OPDATE == 'Invalid date') ? opdate = '' : opdate = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_OPDATE).format('DD/MM/YYYY');
            }
            else {
                temdate = this.openingDate;
            }
            this.scheme.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (element.value == this.code) {
                    schecode = element.name;
                }
            }));
            //get bank code and branch code from session
            let data = localStorage.getItem('user');
            let result = JSON.parse(data);
            let branchCode = result.branch.id;
            let bankCode = Number(result.branch.syspara.BANK_CODE);
            const dataToSend = {
                'branchCode': branchCode,
                'bankCode': bankCode,
                'schemeCode': schecode,
                'AC_TYPE': formVal.AC_TYPE,
                'AC_ACNOTYPE': formVal.AC_ACNOTYPE,
                'AC_NAME': formVal.AC_NAME,
                'AC_CUSTID': formVal.AC_CUSTID,
                'AC_OPDATE': this.openingDate,
                'PIGMY_ACTYPE': formVal.PIGMY_ACTYPE,
                'AC_INTROBRANCH': formVal.AC_INTROBRANCH,
                'AC_INTROID': formVal.AC_INTROID,
                'AC_INTRACNO': formVal.AC_INTRACNO,
                'AC_INTRNAME': formVal.AC_INTRNAME,
                'SIGNATURE_AUTHORITY': formVal.SIGNATURE_AUTHORITY,
                'NomineeData': this.multiNominee
            };
            this.PigmyAgentMasterService.postData(dataToSend).subscribe(data => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
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
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
        }
    }
    // Reset Function
    resetForm() {
        this.createForm();
        this.code = null;
        this.id = null;
        this.ngBranch = null;
        this.acno = null;
        this.ngIntroducer = null;
        this.openingDate = null;
        this.ngPigmy = null;
        this.ngNcity = null;
        this.resetNominee();
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
    //Method for append data into fields
    editClickHandler(id) {
        this.angForm.controls['AC_TYPE'].disable();
        this.PigmyAgentMasterService.getFormData(id).subscribe(data => {
            this.updatecheckdata = data;
            let opdate;
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
            this.updateID = data.id;
            this.ngPigmy = Number(data.PIGMY_ACTYPE);
            // this.id =data.AC_CUSTID
            this.getCustomer(data.AC_CUSTID);
            this.multiNominee = data.nomineeDetails;
            if ((data.AC_INTROBRANCH != null && data.AC_INTROID != null && data.AC_INTRACNO != null) || (data.AC_INTROBRANCH != "" && data.AC_INTROID != "" && data.AC_INTRACNO != "")) {
                this.ngBranch = data.AC_INTROBRANCH,
                    this.acno = Number(data.AC_INTROID),
                    this.obj = [this.acno, this.ngBranch];
                this.SchemeCodeDropdownDropdown.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (element.value == this.acno) {
                        this.getschemename = element.name;
                    }
                }));
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
                this.ngIntroducer = Number(data.AC_INTRACNO);
            }
            else {
                this.code = null;
                this.acno = null;
                this.obj = null;
            }
            this.angForm.patchValue({
                AC_TYPE: data.AC_TYPE,
                'AC_ACNOTYPE': data.AC_ACNOTYPE,
                'AC_NO': data.AC_NO,
                'AC_OPDATE': (data.AC_OPDATE == 'Invalid date' || data.AC_OPDATE == '' || data.AC_OPDATE == null) ? opdate = '' : opdate = data.AC_OPDATE,
                'BANKACNO': data.BANKACNO,
                'AC_INTRNAME': data.AC_INTRNAME,
                'SIGNATURE_AUTHORITY': data.SIGNATURE_AUTHORITY,
                //nominee controls (NOMINEELINK table)
                'AC_NNAME': data.AC_NNAME,
                'AC_NRELA': data.AC_NRELA,
                'AC_NDATE': data.AC_NDATE,
                'AGE': data.AGE,
                'ADDR1': data.ADDR1,
                'ADDR2': data.ADDR2,
                'ADDR3': data.ADDR3,
                'CTCODE': data.CTCODE,
                'PIN': data.PIN,
            });
        });
    }
    age() {
        if (this.angForm.controls['AGE'].value > 100) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cancelled', 'Please Input Proper Age', 'error');
            this.angForm.controls['AGE'].reset();
        }
    }
    //Method for update data 
    updateData() {
        let opdate;
        this.angForm.controls['AC_TYPE'].enable();
        let data = this.angForm.value;
        data['NomineeData'] = this.multiNominee;
        data['id'] = this.updateID;
        if (this.updatecheckdata.AC_OPDATE != this.openingDate) {
            (this.openingDate == 'Invalid date' || this.openingDate == '' || this.openingDate == null) ? (opdate = '', data['AC_OPDATE'] = opdate) : (opdate = this.openingDate, data['AC_OPDATE'] = moment__WEBPACK_IMPORTED_MODULE_9__(opdate).format('DD/MM/YYYY'));
        }
        else {
            data['AC_OPDATE'] = this.openingDate;
        }
        data['PIGMY_ACTYPE'] = this.ngPigmy;
        this.PigmyAgentMasterService.updateData(data).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success!', 'Record Updated Successfully !', 'success');
            this.showButton = true;
            this.updateShow = false;
            this.newbtnShow = false;
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.ajax.reload();
            });
            this.multiNominee = [];
            this.resetForm();
        });
    }
    addNewData() {
        this.angForm.controls['AC_TYPE'].enable();
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.code = null;
        this.resetForm();
    }
    //Method for delete data
    delClickHandler(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want to delete Share master data.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.PigmyAgentMasterService.deleteData(id).subscribe(data1 => {
                    this.pigmyAgentMaster = data1;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
                }), (error) => {
                    console.log(error);
                };
                // to reload after delete of data
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.ajax.reload();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cancelled', 'Your data is safe.', 'error');
            }
        });
    }
    //Nominee
    addNominee() {
        const formVal = this.angForm.value;
        let date1 = moment__WEBPACK_IMPORTED_MODULE_9__(formVal.AC_NDATE).format('DD/MM/YYYY');
        this.cityName = true;
        this.NbirthDate = date1;
        var object = {
            AC_NNAME: formVal.AC_NNAME,
            AC_NRELA: formVal.AC_NRELA,
            AC_NDATE: this.NbirthDate,
            AGE: formVal.AGE,
            AC_NHONO: formVal.AC_NHONO,
            AC_NWARD: formVal.AC_NWARD,
            AC_NADDR: formVal.AC_NADDR,
            AC_NGALLI: formVal.AC_NGALLI,
            AC_NAREA: formVal.AC_NAREA,
            AC_NCTCODE: formVal.AC_NCTCODE,
            AC_NPIN: formVal.AC_NPIN,
        };
        if (formVal.AC_NNAME == "" || formVal.AC_NNAME == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
        }
        else if (formVal.AC_NNAME != "") {
            if (formVal.AC_NRELA == "" || formVal.AC_NRELA == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
            }
            else if (formVal.AC_NRELA != "") {
                if (formVal.AC_NDATE == "" || formVal.AC_NDATE == null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
                }
                else if (formVal.AC_NCTCODE != "") {
                    if (formVal.AC_NCTCODE == "" || formVal.AC_NCTCODE == null) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
                    }
                    else {
                        if (this.multiNominee.find(ob => ob['AC_NNAME'].toUpperCase() === formVal.AC_NNAME.toUpperCase())) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'This Nominee is Already Exists!', 'error');
                        }
                        else {
                            object['AC_NCTCODE'] = formVal.AC_NCTCODE.id,
                                object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME;
                            this.multiNominee.push(object);
                        }
                    }
                }
            }
            else {
                object['AC_NCTCODE'] = formVal.AC_NCTCODE.id;
                object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME;
                this.multiNominee.push(object);
            }
        }
        else {
            object['AC_NCTCODE'] = formVal.AC_NCTCODE.id;
            object['AC_CITYNAME'] = formVal.AC_NCTCODE.CITY_NAME;
            this.multiNominee.push(object);
        }
        this.resetNominee();
    }
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Please Insert Mandatory Record For Nominee");
        }
        else if (formVal.AC_NNAME != "") {
            if (formVal.AC_NRELA == "" || formVal.AC_NRELA == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
            }
            else if (formVal.AC_NRELA != "") {
                if (formVal.AC_NDATE == "" || formVal.AC_NDATE == null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
                }
                else if (formVal.AC_NCTCODE != "") {
                    if (formVal.AC_NCTCODE == "" || formVal.AC_NCTCODE == null) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Please Insert Mandatory Record For Nominee!', 'warning');
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
        this.ngNcity = null;
        this.ngnomineedate = null;
    }
    getBranch() {
        this.getIntroducer();
    }
    getIntro(event) {
        this.getschemename = event.name;
        this.getIntroducer();
    }
    nominee($event) {
        if ($event.target.checked) {
            this.nomineeTrue = true;
        }
        else {
            this.nomineeTrue = false;
        }
    }
    switchNgBTab(id) {
        this.ctdTabset.select(id);
    }
    //approve account
    Approve() {
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = {
            id: this.updateID,
            user: user.id
        };
        this.PigmyAgentMasterService.approve(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Approved', 'Pigmy Agent Account approved successfully', 'success');
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
        this.PigmyAgentMasterService.reject(obj).subscribe(data => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Rejected', 'Pigmy Agent Account rejected successfully', 'success');
            var button = document.getElementById('triggerhide');
            button.click();
        }, err => {
            console.log('something is wrong');
        });
    }
}
PigmyAgentMasterComponent.ɵfac = function PigmyAgentMasterComponent_Factory(t) { return new (t || PigmyAgentMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIDMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_pigmy_agent_master_service__WEBPACK_IMPORTED_MODULE_12__["PigmyAgentMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["CastMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["cityMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_17__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_18__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_19__["SchemeAccountNoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
PigmyAgentMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PigmyAgentMasterComponent, selectors: [["app-pigmy-agent-master"]], viewQuery: function PigmyAgentMasterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.modalLarge = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ctdTabset = _t.first);
    } }, inputs: { childMessage: "childMessage", visible: "visible" }, outputs: { getUserData: "getUserData" }, decls: 77, vars: 16, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "white"], [1, "required"], [1, "card-block"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "col-sm-2"], [1, "form-group", "form-primary", "form-static-label"], ["autofocus", "", 1, "border-lable-flt"], ["bindValue", "value", "id", "AC_TYPE", "formControlName", "AC_TYPE", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme", 3, "ngModel", "disabled", "ngClass", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "AC_TYPE"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-3"], [1, "border-lable-flt"], ["id", "AC_CUSTID", "bindValue", "value", "formControlName", "AC_CUSTID", "title", "Compulsory Selection", "required", "", "placeholder", "Customer Id", 2, "width", "85%", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "AC_CUSTID"], ["id", "custicon", "placement", "bottom", "ngbTooltip", "Add New Customer", 1, "fa", "fa-fw", "fa-plus-circle", "field-icon", 3, "click"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [3, "newCustomerEvent"], [1, "app-modal-footer"], ["type", "button", "id", "triggerhide", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "col-sm-1"], [1, "form-group", "input-group"], ["type", "text", "name", "AC_TITLE", "placeholder", " ", "id", "AC_TITLE", "pattern", "^[A-Za-z\\./ -]+$", "formControlName", "AC_TITLE", "disabled", "", 1, "form-control"], ["for", "AC_TITLE"], [1, "col-sm-4"], ["type", "text", "name", "AC_NAME", "placeholder", " ", "id", "AC_NAME", "pattern", "^[A-Za-z\\./ -]+$", "disabled", "", "formControlName", "AC_NAME", 1, "form-control"], ["for", "AC_NAME"], ["type", "text", "name", "BANKACNO", "placeholder", " ", "id", "BANKACNO", "formControlName", "BANKACNO", "disabled", "", 1, "form-control"], ["for", "BANKACNO"], [1, "nav-pills", "tabFont"], ["ctdTabset", "ngbTabset"], ["title", "Details"], ["ngbTabContent", ""], ["title", "Introducer / Nominee", "id", "nominee"], ["class", "row", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "m-t-15"], [1, "card", "border-primary"], [1, "card-block", "highlight"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_OPDATE", "id", "AC_OPDATE", "required", "", "formControlName", "AC_OPDATE", "disabled", "", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngClass", "ngModelChange", "keypress"], ["for", "AC_OPDATE"], ["type", "text", "name", "AC_CAST", "placeholder", " ", "id", "AC_CAST", "formControlName", "AC_CAST", "disabled", "", 1, "form-control"], ["for", "AC_CAST"], ["bindValue", "value", "id", "PIGMY_ACTYPE", "bindLabel", "label", "formControlName", "PIGMY_ACTYPE", "title", "Compulsory Selection", "required", "", "placeholder", "Pimgy Scheme", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "PIGMY_ACTYPE"], [1, "col-sm"], [2, "text-align", "center", "font-size", "16px"], ["type", "text", "name", "AC_HONO", "placeholder", " ", "id", "AC_HONO", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "25", "formControlName", "AC_HONO", "disabled", "", 1, "form-control"], ["for", "AC_HONO"], ["type", "text", "name", "AC_WARD", "placeholder", " ", "id", "AC_WARD", "pattern", "^[A-Za-z\\./ -]+$", "formControlName", "AC_WARD", "disabled", "", 1, "form-control"], ["for", "AC_WARD"], ["type", "text", "name", "AC_GALLI", "placeholder", " ", "id", "AC_GALLI", "pattern", "^[A-Za-z0-9\\./ -]+$", "formControlName", "AC_GALLI", "disabled", "", 1, "form-control"], ["for", "AC_GALLI"], ["type", "text", "name", "AC_AREA", "placeholder", " ", "id", "AC_AREA", "pattern", "^[A-Za-z\\./ -]+$", "formControlName", "AC_AREA", "disabled", "", 1, "form-control"], ["for", "AC_AREA"], ["type", "text", "name", "AC_ADDR", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "id", "AC_ADDR", "formControlName", "AC_ADDR", "disabled", "", 1, "form-control"], ["for", "AC_ADDR"], ["type", "text", "name", "AC_CTCODE", "placeholder", " ", "id", "AC_CTCODE", "pattern", "^[A-Za-z\\./ -]+$", "formControlName", "AC_CTCODE", "disabled", "", 1, "form-control"], ["for", "AC_CTCODE"], ["type", "text", "name", "AC_PIN", "placeholder", " ", "id", "AC_PIN", "pattern", "^[0-9]+$", "disabled", "", "formControlName", "AC_PIN", 1, "form-control"], ["for", "AC_PIN"], ["type", "text", "name", "AC_PHONE_RES", "placeholder", " ", "id", "AC_PHONE_RES", "pattern", "^[0-9]+$", "disabled", "", "formControlName", "AC_PHONE_RES", 1, "form-control"], ["for", "AC_PHONE_RES"], ["type", "text", "name", "Pin", "placeholder", " ", "id", "AC_PHONE_OFFICE", "pattern", "^[0-9]+$", "disabled", "", "formControlName", "AC_PHONE_OFFICE", 1, "form-control"], ["for", "AC_PHONE_OFFICE"], ["type", "text", "name", "AC_MOBILENO", "placeholder", " ", "id", "AC_MOBILENO", "pattern", "^[0-9]+$", "disabled", "", "formControlName", "AC_MOBILENO", 1, "form-control"], ["for", "AC_MOBILENO"], [1, "col-sm-2", 2, "float", "right", "margin-top", "6px"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [2, "color", "dodgerblue"], ["id", "AC_INTROBRANCH", "bindValue", "value", "formControlName", "AC_INTROBRANCH", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "AC_INTROBRANCH"], ["id", "AC_INTROID", "bindValue", "value", "formControlName", "AC_INTROID", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Account Type", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "AC_INTROID"], ["id", "AC_INTRACNO", "bindValue", "value", "formControlName", "AC_INTRACNO", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Account Number", 3, "ngModel", "ngClass", "ngModelChange", "focus"], ["for", "AC_INTRACNO"], [1, "checkbox", "checkbox-primary"], [1, "border-checkbox-group", "border-checkbox-group-primary"], ["type", "checkbox", "id", "nomineeId", 1, "border-checkbox", 3, "click"], ["for", "nomineeId", 1, "border-checkbox-label", 3, "ngClass"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], [1, "col-sm", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["type", "text", "name", "AC_NNAME", "placeholder", " ", "id", "AC_NNAME", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_NNAME", "maxlength", "100", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "AC_NNAME"], ["class", "\n                      form-group\n                      form-primary\n                      form-static-label\n                    ", "class", "alert alert-danger", 4, "ngIf"], ["type", "text", "name", "AC_NRELA", "placeholder", " ", "id", "AC_NRELA", "pattern", "^[A-Za-z\\./ -]+$", "maxlength", "25", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_NRELA", 1, "form-control", 2, "text-transform", "capitalize", 3, "ngClass", "keypress"], ["for", "AC_NRELA"], ["type", "text", "placeholder", "Datepicker", "placeholder", "dd/mm/yyyy", "name", "AC_NDATE", "id", "AC_NDATE", "formControlName", "AC_NDATE", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "minDate", "bsConfig", "ngModelChange"], ["for", "AC_NDATE"], ["type", "text", "name", "AGE", "placeholder", " ", "pattern", "^[0-9]+$", "min", "1", "max", "100", "title", "Input allowed only 0-9", "id", "AGE", "formControlName", "AGE", 1, "form-control", 2, "text-align", "right", 3, "focusout", "keypress"], ["for", "AGE"], ["type", "text", "name", "AC_NHONO", "placeholder", " ", "id", "AC_NHONO", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "25", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "formControlName", "AC_NHONO", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_NHONO"], ["type", "text", "name", "AC_NWARD", "placeholder", " ", "id", "AC_NWARD", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "10", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_NWARD", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_NWARD"], ["type", "text", "name", "AC_NGALLI", "placeholder", " ", "id", "AC_NGALLI", "pattern", "^[A-Za-z0-9\\./ -]+$", "maxlength", "40", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "formControlName", "AC_NGALLI", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_NGALLI"], ["type", "text", "name", "AC_NAREA", "placeholder", " ", "id", "AC_NAREA", "pattern", "^[A-Za-z\\./ -]+$", "maxlength", "60", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "AC_NAREA", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_NAREA"], [1, "col-sm-5"], ["type", "text", "name", "AC_NADDR", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", "Input allowed only  A-Z a-z 0-9  - / . (Space)", "id", "AC_NADDR", "formControlName", "AC_NADDR", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "AC_NADDR"], ["id", "AC_NCTCODE", "bindLabel", "CITY_NAME", "formControlName", "AC_NCTCODE", "placeholder", "City", 3, "items", "ngModel", "ngClass", "ngModelChange"], ["for", "AC_NCTCODE"], ["type", "text", "name", "AC_NPIN", "placeholder", " ", "id", "AC_NPIN", "pattern", "^[0-9]+$", "minlength", "6", "maxlength", "6", "title", "Input allowed only  0-9", "formControlName", "AC_NPIN", 1, "form-control", 3, "keypress"], ["for", "AC_NPIN"], [1, "row", 2, "float", "right"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "editbutton", "placement", "top", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], ["id", "deletebutton", "placement", "right", "ngbTooltip", "Delete", 1, "fa", "fa-fw", "fa-trash-o", 3, "click"], [1, "td_right", 3, "ngClass"], [1, "td_center", 3, "ngClass"], [1, "td_left", 3, "ngClass"], ["colspan", "12", 1, "no-data-available", 2, "text-align", "center"], [1, "card", "shadow"], ["id", "mastertable", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions", "dtTrigger"], [1, "filters"], ["filters", ""], [1, "testing"], ["type", "text", "name", "AC_TYPE", 1, "form-control"], ["type", "text", "name", "AC_NO", 1, "form-control"], ["type", "text", "name", "AC_CUSTID", 1, "form-control"], ["type", "text", "name", "AC_NAME", 1, "form-control"], ["type", "text", "name", "PIGMY_ACTYPE", 1, "form-control"], ["type", "text", "name", "AC_OPDATE", 1, "form-control"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [3, "ngClass"], ["colspan", "7", 1, "no-data-available"]], template: function PigmyAgentMasterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Pigmy Agent Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PigmyAgentMasterComponent_Template_ng_select_ngModelChange_18_listener($event) { return ctx.code = $event; })("change", function PigmyAgentMasterComponent_Template_ng_select_change_18_listener($event) { return ctx.getScheme($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, PigmyAgentMasterComponent_ng_option_19_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Scheme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, PigmyAgentMasterComponent_div_24_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PigmyAgentMasterComponent_Template_ng_select_ngModelChange_28_listener($event) { return ctx.id = $event; })("change", function PigmyAgentMasterComponent_Template_ng_select_change_28_listener($event) { return ctx.getCustomer($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, PigmyAgentMasterComponent_ng_option_29_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Customer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_Template_span_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r106); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](37); return _r5.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, PigmyAgentMasterComponent_div_35_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "app-modal-basic", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Customer ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r106); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](37); return _r5.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "app-customer-id", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("newCustomerEvent", function PigmyAgentMasterComponent_Template_app_customer_id_newCustomerEvent_46_listener($event) { return ctx.addNewCustomer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PigmyAgentMasterComponent_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r106); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](37); _r5.hide(); return ctx.onCloseModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Agent Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "ngb-tabset", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "ngb-tab", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, PigmyAgentMasterComponent_ng_template_73_Template, 101, 15, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "ngb-tab", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, PigmyAgentMasterComponent_ng_template_75_Template, 87, 27, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, PigmyAgentMasterComponent_div_76_Template, 26, 4, "div", 45);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.code)("disabled", ctx.AC_TYPE)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c3, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TYPE"].invalid && (ctx.angForm.controls["AC_TYPE"].dirty || ctx.angForm.controls["AC_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c3, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.Cust_ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_CUSTID"].invalid && (ctx.angForm.controls["AC_CUSTID"].dirty || ctx.angForm.controls["AC_CUSTID"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dialogClass", "modal-xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.DatatableHideShow);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbTooltip"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_23__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__["PerfectScrollbarComponent"], _customer_id_customer_id_component__WEBPACK_IMPORTED_MODULE_25__["CustomerIdComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbTabContent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_21__["ɵr"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9jdXN0b21lci9waWdteS1hZ2VudC1tYXN0ZXIvcGlnbXktYWdlbnQtbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PigmyAgentMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-pigmy-agent-master',
                templateUrl: './pigmy-agent-master.component.html',
                styleUrls: ['./pigmy-agent-master.component.scss'],
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
    }], function () { return [{ type: src_app_shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIDMasterDropdownService"] }, { type: _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SchemeCodeDropdownService"] }, { type: _pigmy_agent_master_service__WEBPACK_IMPORTED_MODULE_12__["PigmyAgentMasterService"] }, { type: _shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["CastMasterService"] }, { type: _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["OwnbranchMasterService"] }, { type: _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["cityMasterService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"] }, { type: _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_17__["CustomerIdService"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_18__["SystemMasterParametersService"] }, { type: _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_19__["SchemeAccountNoService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { childMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], getUserData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], { static: false }]
        }], modalLarge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['modalLarge']
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], ctdTabset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['ctdTabset']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PigmyAgentMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PigmyAgentMasterModule", function() { return PigmyAgentMasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _pigmy_agent_master_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pigmy-agent-master-routing.module */ "./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master-routing.module.ts");
/* harmony import */ var _pigmy_agent_master_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pigmy-agent-master.component */ "./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_dropdownService_sign_type_dropdown_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/dropdownService/sign-type-dropdown.service */ "./src/app/shared/dropdownService/sign-type-dropdown.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../customer-id/customer-id.module */ "./src/app/theme/master/customer/customer-id/customer-id.module.ts");
/* harmony import */ var _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/customer-id-master-dropdown.service */ "./src/app/shared/dropdownService/customer-id-master-dropdown.service.ts");
/* harmony import */ var _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/category-master-dropdown.service */ "./src/app/shared/dropdownService/category-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_membership_type_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/dropdownService/membership-type-dropdown.service */ "./src/app/shared/dropdownService/membership-type-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/director-master-dropdown.service */ "./src/app/shared/dropdownService/director-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_subsalary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/dropdownService/subsalary-division-master-dropdown.service */ "./src/app/shared/dropdownService/subsalary-division-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/dropdownService/city-master-dropdown.service */ "./src/app/shared/dropdownService/city-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _pigmy_agent_master_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pigmy-agent-master.service */ "./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.service.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");





























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class PigmyAgentMasterModule {
}
PigmyAgentMasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PigmyAgentMasterModule });
PigmyAgentMasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PigmyAgentMasterModule_Factory(t) { return new (t || PigmyAgentMasterModule)(); }, providers: [_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["OwnbranchMasterService"],
        _shared_dropdownService_sign_type_dropdown_service__WEBPACK_IMPORTED_MODULE_7__["SignTypeDropdownService"], _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__["CustomerIdService"],
        ,
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIDMasterDropdownService"],
        _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["categoryMasterService"],
        _shared_dropdownService_membership_type_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["MembershipTypeDropdownService"],
        _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["DirectorMasterDropdownService"],
        _shared_dropdownService_subsalary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["SubSalaryDMasterdropdownService"],
        _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["cityMasterService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_21__["SystemMasterParametersService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_22__["SchemeAccountNoService"],
        _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["SchemeCodeDropdownService"],
        _pigmy_agent_master_service__WEBPACK_IMPORTED_MODULE_20__["PigmyAgentMasterService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pigmy_agent_master_routing_module__WEBPACK_IMPORTED_MODULE_4__["PigmyAgentMasterRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
            _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_9__["CustomerIdModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__["DatepickerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PigmyAgentMasterModule, { declarations: [_pigmy_agent_master_component__WEBPACK_IMPORTED_MODULE_5__["PigmyAgentMasterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pigmy_agent_master_routing_module__WEBPACK_IMPORTED_MODULE_4__["PigmyAgentMasterRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
        _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_9__["CustomerIdModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__["DatepickerModule"]], exports: [_pigmy_agent_master_component__WEBPACK_IMPORTED_MODULE_5__["PigmyAgentMasterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PigmyAgentMasterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pigmy_agent_master_routing_module__WEBPACK_IMPORTED_MODULE_4__["PigmyAgentMasterRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                    _customer_id_customer_id_module__WEBPACK_IMPORTED_MODULE_9__["CustomerIdModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__["DatepickerModule"].forRoot()
                ],
                declarations: [_pigmy_agent_master_component__WEBPACK_IMPORTED_MODULE_5__["PigmyAgentMasterComponent"]],
                exports: [_pigmy_agent_master_component__WEBPACK_IMPORTED_MODULE_5__["PigmyAgentMasterComponent"]],
                providers: [_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["OwnbranchMasterService"],
                    _shared_dropdownService_sign_type_dropdown_service__WEBPACK_IMPORTED_MODULE_7__["SignTypeDropdownService"], _customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_11__["CustomerIdService"],
                    ,
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },
                    _shared_dropdownService_customer_id_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIDMasterDropdownService"],
                    _shared_dropdownService_category_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["categoryMasterService"],
                    _shared_dropdownService_membership_type_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["MembershipTypeDropdownService"],
                    _shared_dropdownService_director_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["DirectorMasterDropdownService"],
                    _shared_dropdownService_subsalary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["SubSalaryDMasterdropdownService"],
                    _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["cityMasterService"], _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_21__["SystemMasterParametersService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_22__["SchemeAccountNoService"],
                    _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["SchemeCodeDropdownService"],
                    _pigmy_agent_master_service__WEBPACK_IMPORTED_MODULE_20__["PigmyAgentMasterService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/master/customer/pigmy-agent-master/pigmy-agent-master.service.ts ***!
  \****************************************************************************************/
/*! exports provided: PigmyAgentMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PigmyAgentMasterService", function() { return PigmyAgentMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class PigmyAgentMasterService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/pigmy-agent-master/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data !');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/pigmy-agent-master/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/pigmy-agent-master/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/pigmy-agent-master/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //approve master
    approve(data) {
        return this.http.post(this.url + '/pigmy-agent-master/approve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //reject master
    reject(data) {
        return this.http.post(this.url + '/pigmy-agent-master/reject', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
PigmyAgentMasterService.ɵfac = function PigmyAgentMasterService_Factory(t) { return new (t || PigmyAgentMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
PigmyAgentMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PigmyAgentMasterService, factory: PigmyAgentMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PigmyAgentMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~centralised-passing-centralisedPassing-module~pigmy-agent-master-pigmy-agent-master-module.js.map