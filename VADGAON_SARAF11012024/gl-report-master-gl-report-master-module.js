(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gl-report-master-gl-report-master-module"],{

/***/ "./src/app/shared/elements/gl-type.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/elements/gl-type.service.ts ***!
  \****************************************************/
/*! exports provided: glTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glTypeService", function() { return glTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class glTypeService {
    getCharacters() {
        return this.cloneOptions(glTypeService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(glTypeService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(glTypeService.PLAYER_ONE);
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
glTypeService.PLAYER_ONE = [
    { value: '0', label: 'On Balance Sheet Item' },
    { value: '1', label: 'Off Balance Sheet Item' },
    { value: '2', label: 'Capital Funds and Risk Assets Ratio' },
    { value: '3', label: 'Other Amount' },
    { value: '4', label: 'Total Amount' },
    { value: '5', label: 'Display Amount' },
    { value: '6', label: 'Percentage' }
];
glTypeService.ɵfac = function glTypeService_Factory(t) { return new (t || glTypeService)(); };
glTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: glTypeService, factory: glTypeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](glTypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/general-ledger/gl-report-master/gl-report-master-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/theme/master/general-ledger/gl-report-master/gl-report-master-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: GlReportMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlReportMasterRoutingModule", function() { return GlReportMasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gl_report_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gl-report-master.component */ "./src/app/theme/master/general-ledger/gl-report-master/gl-report-master.component.ts");





const routes = [
    {
        path: '',
        component: _gl_report_master_component__WEBPACK_IMPORTED_MODULE_2__["GlReportMasterComponent"],
        data: {
            title: 'GL Report Master',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class GlReportMasterRoutingModule {
}
GlReportMasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlReportMasterRoutingModule });
GlReportMasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlReportMasterRoutingModule_Factory(t) { return new (t || GlReportMasterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlReportMasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlReportMasterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/general-ledger/gl-report-master/gl-report-master.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/master/general-ledger/gl-report-master/gl-report-master.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GlReportMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlReportMasterComponent", function() { return GlReportMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_dropdownService_report_type_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/dropdownService/report-type-master-dropdown.service */ "./src/app/shared/dropdownService/report-type-master-dropdown.service.ts");
/* harmony import */ var _gl_accounts_master_gl_accounts_master_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../gl-accounts-master/gl-accounts-master.service */ "./src/app/theme/master/general-ledger/gl-accounts-master/gl-accounts-master.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




// Angular Datatable Directive 












const _c0 = ["autofocus"];
function GlReportMasterComponent_ng_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r16.id, " ", values_r16.label, " ");
} }
function GlReportMasterComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlReportMasterComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlReportMasterComponent_div_25_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.ngForm.controls["REPORT_TYPE"].errors == null ? null : ctx_r2.ngForm.controls["REPORT_TYPE"].errors.required);
} }
function GlReportMasterComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlReportMasterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlReportMasterComponent_div_35_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.ngForm.controls["CODE"].errors == null ? null : ctx_r3.ngForm.controls["CODE"].errors.maxlength) || (ctx_r3.ngForm.controls["CODE"].errors == null ? null : ctx_r3.ngForm.controls["CODE"].errors.minlength) || (ctx_r3.ngForm.controls["CODE"].errors == null ? null : ctx_r3.ngForm.controls["CODE"].errors.required));
} }
function GlReportMasterComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlReportMasterComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlReportMasterComponent_div_45_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.ngForm.controls["NAME"].errors == null ? null : ctx_r4.ngForm.controls["NAME"].errors.maxlength) || (ctx_r4.ngForm.controls["NAME"].errors == null ? null : ctx_r4.ngForm.controls["NAME"].errors.minlength) || (ctx_r4.ngForm.controls["NAME"].errors == null ? null : ctx_r4.ngForm.controls["NAME"].errors.required));
} }
function GlReportMasterComponent_ng_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r20.id, " ", values_r20.name, " ");
} }
function GlReportMasterComponent_div_58_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlReportMasterComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlReportMasterComponent_div_58_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.ngForm.controls["CODE_TYPE"].errors == null ? null : ctx_r7.ngForm.controls["CODE_TYPE"].errors.required);
} }
function GlReportMasterComponent_div_77_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlReportMasterComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlReportMasterComponent_div_77_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r8.ngForm.controls["SERIAL_NO"].errors == null ? null : ctx_r8.ngForm.controls["SERIAL_NO"].errors.maxlength) || (ctx_r8.ngForm.controls["SERIAL_NO"].errors == null ? null : ctx_r8.ngForm.controls["SERIAL_NO"].errors.minlength) || (ctx_r8.ngForm.controls["SERIAL_NO"].errors == null ? null : ctx_r8.ngForm.controls["SERIAL_NO"].errors.required));
} }
function GlReportMasterComponent_div_87_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlReportMasterComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlReportMasterComponent_div_87_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.ngForm.controls["PERCENTAGE_OF_CODE"].errors == null ? null : ctx_r9.ngForm.controls["PERCENTAGE_OF_CODE"].errors.maxlength) || (ctx_r9.ngForm.controls["PERCENTAGE_OF_CODE"].errors == null ? null : ctx_r9.ngForm.controls["PERCENTAGE_OF_CODE"].errors.minlength) || (ctx_r9.ngForm.controls["PERCENTAGE_OF_CODE"].errors == null ? null : ctx_r9.ngForm.controls["PERCENTAGE_OF_CODE"].errors.required));
} }
function GlReportMasterComponent_div_104_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlReportMasterComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlReportMasterComponent_div_104_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r10.ngForm.controls["PERCENTAGE"].errors == null ? null : ctx_r10.ngForm.controls["PERCENTAGE"].errors.maxlength) || (ctx_r10.ngForm.controls["PERCENTAGE"].errors == null ? null : ctx_r10.ngForm.controls["PERCENTAGE"].errors.minlength) || (ctx_r10.ngForm.controls["PERCENTAGE"].errors == null ? null : ctx_r10.ngForm.controls["PERCENTAGE"].errors.required));
} }
function GlReportMasterComponent_div_114_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GlReportMasterComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlReportMasterComponent_div_114_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.ngForm.controls["PERCENTAGE_CONSIDARATION"].errors == null ? null : ctx_r11.ngForm.controls["PERCENTAGE_CONSIDARATION"].errors.maxlength) || (ctx_r11.ngForm.controls["PERCENTAGE_CONSIDARATION"].errors == null ? null : ctx_r11.ngForm.controls["PERCENTAGE_CONSIDARATION"].errors.minlength) || (ctx_r11.ngForm.controls["PERCENTAGE_CONSIDARATION"].errors == null ? null : ctx_r11.ngForm.controls["PERCENTAGE_CONSIDARATION"].errors.required));
} }
function GlReportMasterComponent_button_123_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlReportMasterComponent_button_123_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.addData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r12.ngForm.invalid);
} }
function GlReportMasterComponent_button_124_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlReportMasterComponent_button_124_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r13.ngForm.invalid);
} }
function GlReportMasterComponent_tbody_133_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlReportMasterComponent_tbody_133_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const data_r31 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.editClickHandler(data_r31.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r31.REPORT_TYPE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r31.REPORT_TYPE === "" ? "-" : data_r31.REPORT_TYPE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r31.CODE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r31.CODE === "" ? "-" : data_r31.CODE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r31.NAME === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r31.NAME === "" ? "-" : data_r31.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r31.CODE_TYPE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r31.CODE_TYPE === "" ? "-" : data_r31.CODE_TYPE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r31.SERIAL_NO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r31.SERIAL_NO === "" ? "-" : data_r31.SERIAL_NO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r31.PERCENTAGE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r31.PERCENTAGE === "" ? "-" : data_r31.PERCENTAGE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r31.PERCENTAGE_CONSIDARATION === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r31.PERCENTAGE_CONSIDARATION === "" ? "-" : data_r31.PERCENTAGE_CONSIDARATION, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r31.PERCENTAGE_OF_CODE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r31.PERCENTAGE_OF_CODE === "" ? "-" : data_r31.PERCENTAGE_OF_CODE, " ");
} }
function GlReportMasterComponent_tbody_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlReportMasterComponent_tbody_133_tr_1_Template, 19, 16, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.glreportMaster);
} }
function GlReportMasterComponent_tbody_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DataTableResponse {
}
class GlReportMasterComponent {
    constructor(http, fb, reportTypeDropdown, glReportMasterService) {
        this.http = http;
        this.fb = fb;
        this.reportTypeDropdown = reportTypeDropdown;
        this.glReportMasterService = glReportMasterService;
        this.dtOptions = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url;
        // multigrid = [];
        this.glreport = [];
        this.codetype = [
            { id: 'A', name: 'On Balance Sheet Item' },
            { id: 'B', name: 'Off Balance Sheet Item' },
            { id: 'C', name: 'Capital Funds and Risk Assets Ratio' },
        ];
        //button
        this.addButton = true;
        this.updateButton = false;
        this.updateID = 0;
        this.dtExportButtonOptions = {}; //Datatable variable
        //filter variable
        this.filterData = {};
        this.page = 1;
    }
    ngOnInit() {
        // Fetching Server side data
        this.dtExportButtonOptions = {
            pagingType: "full_numbers",
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
                dataTableParameters.columns.forEach((element) => {
                    if (element.search.value != "") {
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
                dataTableParameters["filterData"] = this.filterData;
                this.http
                    .post(this.url + "/gl-account-master/masterLoad", dataTableParameters)
                    .subscribe((resp) => {
                    this.glreportMaster = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsTotal,
                        data: [],
                    });
                });
            },
            columnDefs: [
                {
                    targets: "_all",
                    defaultContent: '',
                },
            ],
            columns: [
                {
                    title: "Action",
                },
                {
                    title: "Report Type",
                    data: "REPORT_TYPE",
                },
                {
                    title: "Code",
                    data: "CODE",
                },
                {
                    title: "Name",
                    data: "NAME",
                },
                {
                    title: "Code Type",
                    data: "CODE_TYPE",
                },
                {
                    title: "Serial Number",
                    data: "SERIAL_NO",
                },
                {
                    title: "Percentage",
                    data: "PERCENTAGE",
                },
                {
                    title: "Percentage Consideartion",
                    data: "PERCENTAGE_CONSIDARATION",
                },
                {
                    title: "Percentage of Code",
                    data: "PERCENTAGE_OF_CODE",
                },
            ],
            dom: "Blrtip",
        };
        this.createForm();
        this.reportTypeDropdown.getReportTMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe((data) => {
            this.glreport = data;
        });
    }
    createForm() {
        this.ngForm = this.fb.group({
            CODE: ["",],
            NAME: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            REPORT_TYPE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            CODE_TYPE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ADD_PL_AMOUNT: [''],
            SERIAL_NO: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            PERCENTAGE_OF_CODE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            INPUT_ALLOWED: [''],
            IS_PRINT_IN_REPORT: [''],
            PERCENTAGE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            PERCENTAGE_CONSIDARATION: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    addData() {
        const formVal = this.ngForm.value;
        var dataToSend = {
            REPORT_TYPE: formVal.REPORT_TYPE,
            CODE: formVal.CODE,
            NAME: formVal.NAME,
            CODE_TYPE: formVal.CODE_TYPE,
            SERIAL_NO: formVal.SERIAL_NO,
            PERCENTAGE_OF_CODE: formVal.PERCENTAGE_OF_CODE,
            ADD_PL_AMOUNT: (formVal.ADD_PL_AMOUNT == true ? '1' : '0'),
            INPUT_ALLOWED: (formVal.INPUT_ALLOWED == true ? '1' : '0'),
            IS_PRINT_IN_REPORT: (formVal.IS_PRINT_IN_REPORT == true ? '1' : '0'),
            PERCENTAGE: formVal.PERCENTAGE,
            PERCENTAGE_CONSIDARATION: formVal.PERCENTAGE_CONSIDARATION
        };
        this.glReportMasterService.postToData(dataToSend).subscribe(data1 => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Success!', 'Data Added Successfully !', 'success');
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.ajax.reload();
            });
        }, (error) => {
            console.log(error);
        });
        //To clear form
        this.resetForm();
    }
    //reset form
    resetForm() {
        this.createForm();
    }
    //function for edit button clicked
    editClickHandler(id) {
        this.addButton = false;
        this.updateButton = true;
        this.glReportMasterService.getFromData(id).subscribe(data => {
            this.updateID = data.id;
            this.ngForm.patchValue({
                REPORT_TYPE: data.REPORT_TYPE,
                CODE: data.CODE,
                NAME: data.NAME,
                CODE_TYPE: data.CODE_TYPE,
                SERIAL_NO: data.SERIAL_NO,
                PERCENTAGE: data.PERCENTAGE,
                PERCENTAGE_CONSIDARATION: data.PERCENTAGE_CONSIDARATION,
                PERCENTAGE_OF_CODE: data.PERCENTAGE_OF_CODE,
                ADD_PL_AMOUNT: (data.ADD_PL_AMOUNT == 1 ? true : false),
                INPUT_ALLOWED: (data.INPUT_ALLOWED == 1 ? true : false),
                IS_PRINT_IN_REPORT: (data.IS_PRINT_IN_REPORT == 1 ? true : false),
            });
        });
    }
    //function toggle update to add button
    updateData() {
        let data = this.ngForm.value;
        data['id'] = this.updateID;
        data['ADD_PL_AMOUNT'] = data['ADD_PL_AMOUNT'] == true ? 1 : 0;
        data['INPUT_ALLOWED'] = data['INPUT_ALLOWED'] == true ? 1 : 0;
        data['IS_PRINT_IN_REPORT'] = data['IS_PRINT_IN_REPORT'] == true ? 1 : 0;
        this.glReportMasterService.updateToData(data).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Success!', 'Record Updated Successfully !', 'success');
            this.addButton = true;
            this.updateButton = false;
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.ajax.reload();
            });
            this.resetForm();
        });
    }
    checkmargin(ele) {
        //check  if given value  is below 100
        if (ele.target.value <= 100) {
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Invalid Input", "Please Insert Values Below 100", "error");
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
    }
    onFocus(ele) {
        ele.open();
        console.log(ele);
    }
    onOpen(select) {
        //debugger
        select.open();
    }
    onClose(select) {
        select.close();
    }
}
GlReportMasterComponent.ɵfac = function GlReportMasterComponent_Factory(t) { return new (t || GlReportMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_report_type_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["ReportTMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_gl_accounts_master_gl_accounts_master_service__WEBPACK_IMPORTED_MODULE_9__["GlAccountsMasterService"])); };
GlReportMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlReportMasterComponent, selectors: [["app-gl-report-master"]], viewQuery: function GlReportMasterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myInputField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 135, vars: 20, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [2, "float", "right"], [1, "required"], [3, "formGroup"], [1, "card-block"], [1, "solid"], [1, "col-sm-12", "col-md-1"], ["for", "rtype"], [1, "col-sm-12", "col-md-4"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["bindValue", "label", "appTheme", "", "id", "REPORT_TYPE", "bindLabel", "label", "formControlName", "REPORT_TYPE", "title", "Compulsory Selection", "placeholder", "Report Type", 3, "ngModel", "selectOnTab", "ngModelChange", "focus"], ["REPOTYPE", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-md-1"], ["for", "code"], [1, "col-md-2"], [1, "form-group", "input-group"], ["type", "text", "name", "code", "placeholder", " ", "formControlName", "CODE", "disabled", "", 1, "form-control", 3, "keypress"], [1, "col-md-3"], ["type", "text", "name", "name", "placeholder", " ", "formControlName", "NAME", 1, "form-control", 3, "keypress"], ["for", "type"], ["bindValue", "id", "appTheme", "", "id", "CODE_TYPE", "bindLabel", "label", "formControlName", "CODE_TYPE", "title", "Compulsory Selection", "placeholder", "Code Type", 3, "ngModel", "selectOnTab", "ngModelChange", "focus"], ["CODETYPE", ""], [1, "col-sm-5"], [1, "checkbox", "checkbox-primary"], [1, "border-checkbox-group", "border-checkbox-group-primary"], ["type", "checkbox", "id", "ADD_PL_AMOUNT", "formControlName", "ADD_PL_AMOUNT", 1, "border-checkbox"], ["for", "ADD_PL_AMOUNT", 1, "border-checkbox-label"], ["for", "Serial No."], ["type", "text", "name", "serial", "placeholder", " ", "formControlName", "SERIAL_NO", 1, "form-control", 3, "keypress"], ["for", "poc"], ["type", "text", "name", "pocode", "placeholder", " ", "maxlength", "10", "formControlName", "PERCENTAGE_OF_CODE", 1, "form-control", 3, "keypress"], [1, "col-sm-4"], ["type", "checkbox", "id", "INPUT_ALLOWED", "formControlName", "INPUT_ALLOWED", 1, "border-checkbox"], ["for", "INPUT_ALLOWED", 1, "border-checkbox-label"], ["type", "text", "name", "pocode", "placeholder", " ", "formControlName", "PERCENTAGE", 1, "form-control", 3, "keyup", "focusout", "keypress"], ["type", "text", "name", "pocode", "placeholder", " ", "maxlength", "10", "formControlName", "PERCENTAGE_CONSIDARATION", 1, "form-control", 3, "keypress"], ["type", "checkbox", "id", "IS_PRINT_IN_REPORT", "formControlName", "IS_PRINT_IN_REPORT", 1, "border-checkbox"], ["for", "IS_PRINT_IN_REPORT", 1, "border-checkbox-label"], [1, "col-md"], ["type", "button", "class", "btn btn-outline-primary btn-sm", 3, "disabled", "click", 4, "ngIf"], [1, "col-sm"], [1, "table-responsive"], ["id", "glreportmaster", "datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 3, "dtOptions"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], [4, "ngFor", "ngForOf"], [1, "td_center"], ["id", "editbutton", "placement", "top", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [3, "ngClass"], ["colspan", "8", "Style", "text-align: center;", 1, "no-data-available"]], template: function GlReportMasterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "GL Report Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ": Required Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Report Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ng-select", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GlReportMasterComponent_Template_ng_select_ngModelChange_22_listener($event) { return ctx.reportType = $event; })("focus", function GlReportMasterComponent_Template_ng_select_focus_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.onFocus(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GlReportMasterComponent_ng_option_24_Template, 2, 3, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GlReportMasterComponent_div_25_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function GlReportMasterComponent_Template_input_keypress_34_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, GlReportMasterComponent_div_35_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function GlReportMasterComponent_Template_input_keypress_44_listener($event) { return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122 || $event.charCode <= 32; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, GlReportMasterComponent_div_45_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ng-select", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GlReportMasterComponent_Template_ng_select_ngModelChange_55_listener($event) { return ctx.selectedType = $event; })("focus", function GlReportMasterComponent_Template_ng_select_focus_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56); return ctx.onFocus(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, GlReportMasterComponent_ng_option_57_Template, 2, 3, "ng-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, GlReportMasterComponent_div_58_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Add Profit and Loss Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Serial No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function GlReportMasterComponent_Template_input_keypress_76_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, GlReportMasterComponent_div_77_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Percentage of Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function GlReportMasterComponent_Template_input_keypress_86_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, GlReportMasterComponent_div_87_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Linking Input Allowed ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Percentage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function GlReportMasterComponent_Template_input_keyup_103_listener($event) { ctx.checkmargin($event); return ctx.getDecimal($event); })("focusout", function GlReportMasterComponent_Template_input_focusout_103_listener($event) { return ctx.getDecimalPoint($event); })("keypress", function GlReportMasterComponent_Template_input_keypress_103_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, GlReportMasterComponent_div_104_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Percentage of Cosideration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function GlReportMasterComponent_Template_input_keypress_113_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, GlReportMasterComponent_div_114_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Is Print in GL Report ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, GlReportMasterComponent_button_123_Template, 2, 1, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, GlReportMasterComponent_button_124_Template, 2, 1, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "table", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, GlReportMasterComponent_tbody_133_Template, 2, 1, "tbody", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, GlReportMasterComponent_tbody_134_Template, 4, 0, "tbody", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reportType)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.glreport);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["REPORT_TYPE"].invalid && (ctx.ngForm.controls["REPORT_TYPE"].dirty || ctx.ngForm.controls["REPORT_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["CODE"].invalid && (ctx.ngForm.controls["CODE"].dirty || ctx.ngForm.controls["CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["NAME"].invalid && (ctx.ngForm.controls["NAME"].dirty || ctx.ngForm.controls["NAME"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedType)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.codetype);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["CODE_TYPE"].invalid && (ctx.ngForm.controls["CODE_TYPE"].dirty || ctx.ngForm.controls["CODE_TYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["SERIAL_NO"].invalid && (ctx.ngForm.controls["SERIAL_NO"].dirty || ctx.ngForm.controls["SERIAL_NO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["PERCENTAGE_OF_CODE"].invalid && (ctx.ngForm.controls["PERCENTAGE_OF_CODE"].dirty || ctx.ngForm.controls["PERCENTAGE_OF_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["PERCENTAGE"].invalid && (ctx.ngForm.controls["PERCENTAGE"].dirty || ctx.ngForm.controls["PERCENTAGE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["PERCENTAGE_CONSIDARATION"].invalid && (ctx.ngForm.controls["PERCENTAGE_CONSIDARATION"].dirty || ctx.ngForm.controls["PERCENTAGE_CONSIDARATION"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.glreportMaster.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.glreportMaster == null ? null : ctx.glreportMaster.length) == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵr"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]], styles: ["div.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbWFzdGVyL2dlbmVyYWwtbGVkZ2VyL2dsLXJlcG9ydC1tYXN0ZXIvZ2wtcmVwb3J0LW1hc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvbWFzdGVyL2dlbmVyYWwtbGVkZ2VyL2dsLXJlcG9ydC1tYXN0ZXIvZ2wtcmVwb3J0LW1hc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5zb2xpZCB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBwYWRkaW5nOiAyJVxuICB9Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fadeInOutTranslate", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translate(0)" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlReportMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-gl-report-master",
                templateUrl: "./gl-report-master.component.html",
                styleUrls: ["./gl-report-master.component.scss"],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fadeInOutTranslate", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translate(0)" }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                        ]),
                    ]),
                ],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_dropdownService_report_type_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["ReportTMasterDropdownService"] }, { type: _gl_accounts_master_gl_accounts_master_service__WEBPACK_IMPORTED_MODULE_9__["GlAccountsMasterService"] }]; }, { myInputField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["autofocus"]
        }], dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/master/general-ledger/gl-report-master/gl-report-master.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/master/general-ledger/gl-report-master/gl-report-master.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: GlReportMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlReportMasterModule", function() { return GlReportMasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _gl_report_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gl-report-master.component */ "./src/app/theme/master/general-ledger/gl-report-master/gl-report-master.component.ts");
/* harmony import */ var _gl_report_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gl-report-master-routing.module */ "./src/app/theme/master/general-ledger/gl-report-master/gl-report-master-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_elements_gl_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/elements/gl-type.service */ "./src/app/shared/elements/gl-type.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var src_app_shared_dropdownService_report_type_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dropdownService/report-type-master-dropdown.service */ "./src/app/shared/dropdownService/report-type-master-dropdown.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _gl_accounts_master_gl_accounts_master_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../gl-accounts-master/gl-accounts-master.service */ "./src/app/theme/master/general-ledger/gl-accounts-master/gl-accounts-master.service.ts");














class GlReportMasterModule {
}
GlReportMasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlReportMasterModule });
GlReportMasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlReportMasterModule_Factory(t) { return new (t || GlReportMasterModule)(); }, providers: [_shared_elements_gl_type_service__WEBPACK_IMPORTED_MODULE_7__["glTypeService"], src_app_shared_dropdownService_report_type_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ReportTMasterDropdownService"], _gl_accounts_master_gl_accounts_master_service__WEBPACK_IMPORTED_MODULE_12__["GlAccountsMasterService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _gl_report_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["GlReportMasterRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlReportMasterModule, { declarations: [_gl_report_master_component__WEBPACK_IMPORTED_MODULE_2__["GlReportMasterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _gl_report_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["GlReportMasterRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlReportMasterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _gl_report_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["GlReportMasterRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]
                ],
                declarations: [_gl_report_master_component__WEBPACK_IMPORTED_MODULE_2__["GlReportMasterComponent"]],
                providers: [_shared_elements_gl_type_service__WEBPACK_IMPORTED_MODULE_7__["glTypeService"], src_app_shared_dropdownService_report_type_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ReportTMasterDropdownService"], _gl_accounts_master_gl_accounts_master_service__WEBPACK_IMPORTED_MODULE_12__["GlAccountsMasterService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=gl-report-master-gl-report-master-module.js.map