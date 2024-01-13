(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["non-npa-recovery-non-npa-recovery-module"],{

/***/ "./src/app/theme/reports/npa-reports/non-npa-recovery/non-npa-recovery-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/theme/reports/npa-reports/non-npa-recovery/non-npa-recovery-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: NonNpaRecoveryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonNpaRecoveryRoutingModule", function() { return NonNpaRecoveryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _non_npa_recovery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./non-npa-recovery.component */ "./src/app/theme/reports/npa-reports/non-npa-recovery/non-npa-recovery.component.ts");





const routes = [
    {
        path: '',
        component: _non_npa_recovery_component__WEBPACK_IMPORTED_MODULE_2__["NonNpaRecoveryComponent"],
        data: {
            title: 'Transaction Amount Movement',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class NonNpaRecoveryRoutingModule {
}
NonNpaRecoveryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NonNpaRecoveryRoutingModule });
NonNpaRecoveryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NonNpaRecoveryRoutingModule_Factory(t) { return new (t || NonNpaRecoveryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NonNpaRecoveryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonNpaRecoveryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/npa-reports/non-npa-recovery/non-npa-recovery.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/reports/npa-reports/non-npa-recovery/non-npa-recovery.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NonNpaRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonNpaRecoveryComponent", function() { return NonNpaRecoveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _report_frame_report_frame_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../report-frame/report-frame.component */ "./src/app/theme/reports/report-frame/report-frame.component.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _pigmy_report_iframe5_iframe5_iframe5_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pigmy-report/iframe5/iframe5/iframe5.component */ "./src/app/theme/reports/pigmy-report/iframe5/iframe5/iframe5.component.ts");


// Displaying Sweet Alert















function NonNpaRecoveryComponent_ng_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r6.label, "");
} }
function NonNpaRecoveryComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NonNpaRecoveryComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NonNpaRecoveryComponent_div_25_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ngForm.controls["BRANCH_CODE"].errors == null ? null : ctx_r1.ngForm.controls["BRANCH_CODE"].errors.required);
} }
function NonNpaRecoveryComponent_ng_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r8.id, " ", values_r8.label, " ");
} }
function NonNpaRecoveryComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NonNpaRecoveryComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NonNpaRecoveryComponent_div_36_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.ngForm.controls["Scheme_code"].errors == null ? null : ctx_r3.ngForm.controls["Scheme_code"].errors.required);
} }
function NonNpaRecoveryComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NonNpaRecoveryComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NonNpaRecoveryComponent_div_46_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.ngForm.controls["END_DATE"].errors == null ? null : ctx_r4.ngForm.controls["END_DATE"].errors.maxlength) || (ctx_r4.ngForm.controls["END_DATE"].errors == null ? null : ctx_r4.ngForm.controls["END_DATE"].errors.minlength) || (ctx_r4.ngForm.controls["END_DATE"].errors == null ? null : ctx_r4.ngForm.controls["END_DATE"].errors.required));
} }
function NonNpaRecoveryComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-iframe5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function NonNpaRecoveryComponent_div_68_Template_app_iframe5_load_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onLoad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx_r5.iframe5url);
} }
const _c0 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
class NonNpaRecoveryComponent {
    constructor(fb, _ownbranchmasterservice, systemParameter, schemeCodeDropdownService, sanitizer) {
        this.fb = fb;
        this._ownbranchmasterservice = _ownbranchmasterservice;
        this.systemParameter = systemParameter;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.sanitizer = sanitizer;
        this.iframe5url = '';
        this.formSubmitted = false;
        this.ngCity = null;
        this.selectcity = new Array();
        // for dropdown ng module
        this.fromdate = null;
        this.ngbranch = null;
        this.scode = null;
        this.clicked = false;
        this.showRepo = false;
        this.showLoading = false;
        //date
        this.todate = null;
        this.bsValue = new Date();
        this.report_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].report_url;
        this.todate = moment__WEBPACK_IMPORTED_MODULE_3__().format('DD/MM/YYYY');
        this.maxDate = new Date();
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate());
    }
    ngOnInit() {
        this.createForm();
        //branchlist
        this._ownbranchmasterservice.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(data => {
            this.branchOption = data;
            console.log(this.branchOption, "sjhjd");
            let data1 = localStorage.getItem('user');
            let result = JSON.parse(data1);
            if (result.branchId == 1) {
                this.branchOption.push({ value: '0', label: 'Consolidate' });
            }
        });
        // Scheme Code
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(data => {
            var filtered = data.filter(function (scheme) {
                return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
            });
            this.scheme = filtered;
            // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
            //   this.todate = data.CURRENT_DATE;
            // });
        });
        this.schemeCodeDropdownService.getAllSchemeList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(data1 => {
            console.log(data1);
            // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
            //   this.todate = data.CURRENT_DATE;
            // });
        });
        this.systemParameter.getFormData(1).subscribe(data => {
            let year = moment__WEBPACK_IMPORTED_MODULE_3__(data.CURRENT_DATE, "DD/MM/YYYY").year();
            this.todate = data.CURRENT_DATE;
            this.fromdate = moment__WEBPACK_IMPORTED_MODULE_3__(`01/04/${year + 1}`, "DD/MM/YYYY");
            this.fromdate = this.fromdate._d;
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.ngbranch = result.branch.id;
            this.ngForm.controls['BRANCH_CODE'].enable();
            this.branchName = result.branch.NAME;
        }
        else {
            this.ngForm.controls['BRANCH_CODE'].disable();
            this.ngbranch = result.branch.id;
            this.branchName = result.branch.NAME;
        }
    }
    getTransferAccountList(event) {
        this.transferSchemeDetails = event;
        this.tScheme = event.name;
    }
    createForm() {
        this.ngForm = this.fb.group({
            BRANCH_CODE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Scheme_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // START_DATE: ['', [Validators.required]],
            END_DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            npa_per: [''],
        });
    }
    view(event) {
        event.preventDefault();
        this.formSubmitted = true;
        let userData = JSON.parse(localStorage.getItem('user'));
        let bankName = userData.branch.syspara.BANK_NAME;
        let branchName = userData.branch.NAME;
        if (this.ngForm.valid) {
            this.showRepo = true;
            let obj = this.ngForm.value;
            let cityCode = obj.AC_CTCODE;
            let Date = moment__WEBPACK_IMPORTED_MODULE_3__(obj.date).format('DD/MM/YYYY');
            let tDate = moment__WEBPACK_IMPORTED_MODULE_3__(Date, 'DD/MM/YYYY');
            //for start date
            if (this.fromdate == userData.branch.syspara.CURRENT_DATE) {
                obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE;
            }
            else {
                let date = moment__WEBPACK_IMPORTED_MODULE_3__(this.fromdate).format('DD/MM/YYYY');
                let toDate = moment__WEBPACK_IMPORTED_MODULE_3__(date, 'DD/MM/YYYY');
                obj['START_DATE'] = date;
            }
            //for end date
            if (this.todate == userData.branch.syspara.CURRENT_DATE) {
                obj['END_DATE'] = userData.branch.syspara.CURRENT_DATE;
            }
            else {
                let date = moment__WEBPACK_IMPORTED_MODULE_3__(this.todate).format('DD/MM/YYYY');
                let tDate = moment__WEBPACK_IMPORTED_MODULE_3__(date, 'DD/MM/YYYY');
                obj['END_DATE'] = date;
            }
            let scheme = obj.Scheme_code;
            let flag = obj.npa_per;
            if (flag == true) {
                flag = '1';
            }
            else {
                flag = '0';
            }
            let branch = obj.BRANCH_CODE;
            let Dates = obj.END_DATE;
            // moment(this.Dates)
            let schemeName = this.tScheme;
            //  let startingcode= obj.Starting_Account;
            // let endingcode =obj.Ending_Account;
            //   this.iframe5url=this.report_url+ "examples/transactionless.php/?&bankname='"+ bankName +"'&Branch='"+ this.branchName +"'&sdate='"+ obj.START_DATE +"'&edate='"+ obj.END_DATE +"'&AC_TYPE='"+ scheme +"'&ACNOTYPE='"+ schemeName +"' &BRANCH_CODE='"+branch+"'"
            // console.log(this.iframe5url); 
            this.iframe5url = this.report_url + "examples/ToBeRecoveryforNonNPAReport.php?AC_TYPE=" + schemeName + "&BRANCH_CODE=" + this.ngbranch + "&FLAG=" + flag + "&BranchName='" + this.branchName + "'&dt='" + Dates + "'&schemeCode='" + scheme + "'&bankName='" + bankName + "'";
            this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false; });
        }
    }
    close() {
        this.resetForm();
    }
    onLoad() {
        this.showLoading = false;
    }
    resetForm() {
        this.ngForm.controls.Scheme_code.reset();
        this.showRepo = false;
        this.clicked = false;
    }
    onFocus(ele) {
        ele.open();
    }
    getBranch(event) {
        this.ngbranch = event.value;
        this.branchName = event.branchName;
    }
}
NonNpaRecoveryComponent.ɵfac = function NonNpaRecoveryComponent_Factory(t) { return new (t || NonNpaRecoveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_7__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_8__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"])); };
NonNpaRecoveryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NonNpaRecoveryComponent, selectors: [["app-non-npa-recovery"]], viewQuery: function NonNpaRecoveryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_report_frame_report_frame_component__WEBPACK_IMPORTED_MODULE_6__["ReportFrameComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
    } }, decls: 69, vars: 13, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [3, "formGroup"], [1, "card-block"], [1, "col-sm-12", "col-md-1"], ["for", "Branch"], [1, "col-sm-12", "col-md-2"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["id", "BRANCH_CODE", "bindValue", "value", "binfdlable", "lable", "formControlName", "BRANCH_CODE", "bindLabel", "label", "placeholder", "Branch", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["for", " Date"], [1, "col-sm-2", "col-md-2"], ["formControlName", "Scheme_code", "bindValue", "value", "bindLabel", "label", 3, "ngModel", "ngModelChange", "change"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "END_DATE", "id", "END_DATE", "formControlName", "END_DATE", "appButton", "", "minlength", "8", "maxlength", "10", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelChange", "keypress"], [1, "col-sm"], [1, "checkbox", "checkbox-primary"], [1, "border-checkbox-group", "border-checkbox-group-primary"], ["type", "checkbox", "id", "npa_per", "formControlName", "npa_per", 1, "border-checkbox"], ["for", "npa_per", 1, "border-checkbox-label"], [1, "col-md-9"], [1, "col-md-2"], ["value", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], [1, "col-md-1"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [3, "url", "load"]], template: function NonNpaRecoveryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TO be Recovery For NOn NPA Recovery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Branch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NonNpaRecoveryComponent_Template_ng_select_ngModelChange_23_listener($event) { return ctx.ngbranch = $event; })("change", function NonNpaRecoveryComponent_Template_ng_select_change_23_listener($event) { return ctx.getBranch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NonNpaRecoveryComponent_ng_option_24_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NonNpaRecoveryComponent_div_25_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Scheme Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NonNpaRecoveryComponent_Template_ng_select_ngModelChange_34_listener($event) { return ctx.scode = $event; })("change", function NonNpaRecoveryComponent_Template_ng_select_change_34_listener($event) { return ctx.getTransferAccountList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NonNpaRecoveryComponent_ng_option_35_Template, 2, 3, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, NonNpaRecoveryComponent_div_36_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NonNpaRecoveryComponent_Template_input_ngModelChange_45_listener($event) { return ctx.todate = $event; })("keypress", function NonNpaRecoveryComponent_Template_input_keypress_45_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, NonNpaRecoveryComponent_div_46_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "NPA Standard Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NonNpaRecoveryComponent_Template_button_click_57_listener($event) { return ctx.view($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NonNpaRecoveryComponent_Template_button_click_60_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Report Frame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, NonNpaRecoveryComponent_div_68_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngbranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branchOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["BRANCH_CODE"].invalid && (ctx.ngForm.controls["BRANCH_CODE"].dirty || ctx.ngForm.controls["BRANCH_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.scode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["Scheme_code"].invalid && (ctx.ngForm.controls["Scheme_code"].dirty || ctx.ngForm.controls["Scheme_code"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("ngModel", ctx.todate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["END_DATE"].invalid && (ctx.ngForm.controls["END_DATE"].dirty || ctx.ngForm.controls["END_DATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.clicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRepo);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵr"], _pigmy_report_iframe5_iframe5_iframe5_component__WEBPACK_IMPORTED_MODULE_14__["Iframe5Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvbnBhLXJlcG9ydHMvbm9uLW5wYS1yZWNvdmVyeS9ub24tbnBhLXJlY292ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonNpaRecoveryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-non-npa-recovery',
                templateUrl: './non-npa-recovery.component.html',
                styleUrls: ['./non-npa-recovery.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_7__["OwnbranchMasterService"] }, { type: src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_8__["SystemMasterParametersService"] }, { type: src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["SchemeCodeDropdownService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_report_frame_report_frame_component__WEBPACK_IMPORTED_MODULE_6__["ReportFrameComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/reports/npa-reports/non-npa-recovery/non-npa-recovery.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/reports/npa-reports/non-npa-recovery/non-npa-recovery.module.ts ***!
  \***************************************************************************************/
/*! exports provided: NonNpaRecoveryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonNpaRecoveryModule", function() { return NonNpaRecoveryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _non_npa_recovery_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./non-npa-recovery-routing.module */ "./src/app/theme/reports/npa-reports/non-npa-recovery/non-npa-recovery-routing.module.ts");
/* harmony import */ var _non_npa_recovery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./non-npa-recovery.component */ "./src/app/theme/reports/npa-reports/non-npa-recovery/non-npa-recovery.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _pigmy_report_iframe5_iframe5_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pigmy-report/iframe5/iframe5.module */ "./src/app/theme/reports/pigmy-report/iframe5/iframe5.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_type_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-type-dropdown.service */ "./src/app/shared/dropdownService/scheme-type-dropdown.service.ts");



















class NonNpaRecoveryModule {
}
NonNpaRecoveryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NonNpaRecoveryModule });
NonNpaRecoveryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NonNpaRecoveryModule_Factory(t) { return new (t || NonNpaRecoveryModule)(); }, providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
            multi: true
        },
        src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__["SystemMasterParametersService"],
        src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OwnbranchMasterService"],
        src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["SchemeCodeDropdownService"],
        src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_15__["SchemeAccountNoService"],
        src_app_shared_dropdownService_scheme_type_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["SchemeTypeDropdownService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _non_npa_recovery_routing_module__WEBPACK_IMPORTED_MODULE_2__["NonNpaRecoveryRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["DatepickerModule"].forRoot(),
            _pigmy_report_iframe5_iframe5_module__WEBPACK_IMPORTED_MODULE_9__["Iframe5Module"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NonNpaRecoveryModule, { declarations: [_non_npa_recovery_component__WEBPACK_IMPORTED_MODULE_3__["NonNpaRecoveryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _non_npa_recovery_routing_module__WEBPACK_IMPORTED_MODULE_2__["NonNpaRecoveryRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["DatepickerModule"], _pigmy_report_iframe5_iframe5_module__WEBPACK_IMPORTED_MODULE_9__["Iframe5Module"]], exports: [_non_npa_recovery_component__WEBPACK_IMPORTED_MODULE_3__["NonNpaRecoveryComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonNpaRecoveryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _non_npa_recovery_routing_module__WEBPACK_IMPORTED_MODULE_2__["NonNpaRecoveryRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["DatepickerModule"].forRoot(),
                    _pigmy_report_iframe5_iframe5_module__WEBPACK_IMPORTED_MODULE_9__["Iframe5Module"]
                ],
                declarations: [_non_npa_recovery_component__WEBPACK_IMPORTED_MODULE_3__["NonNpaRecoveryComponent"]],
                exports: [_non_npa_recovery_component__WEBPACK_IMPORTED_MODULE_3__["NonNpaRecoveryComponent"]],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
                        multi: true
                    },
                    src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_12__["SystemMasterParametersService"],
                    src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OwnbranchMasterService"],
                    src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["SchemeCodeDropdownService"],
                    src_app_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_15__["SchemeAccountNoService"],
                    src_app_shared_dropdownService_scheme_type_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["SchemeTypeDropdownService"]
                ],
            }]
    }], null, null); })();


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

/***/ "./src/app/theme/reports/pigmy-report/iframe5/iframe5/iframe5.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/reports/pigmy-report/iframe5/iframe5/iframe5.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Iframe5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe5Component", function() { return Iframe5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class Iframe5Component {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
    ngOnInit() {
    }
}
Iframe5Component.ɵfac = function Iframe5Component_Factory(t) { return new (t || Iframe5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
Iframe5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Iframe5Component, selectors: [["app-iframe5"]], inputs: { url: "url" }, decls: 9, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "card"], ["novalidate", ""], [1, "card-block"], [1, "embed-responsive", "embed-responsive-16by9"], [1, "loader"], ["src", "assets/Loading.gif"], [3, "src"]], template: function Iframe5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, styles: [".loader[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12;\n  top: 15;\n  margin-left: 43%;\n  margin-top: 5%;\n  background: url(/src/assets/loading.gif) 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvcmVwb3J0cy9waWdteS1yZXBvcnQvaWZyYW1lNS9pZnJhbWU1L2lmcmFtZTUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvcGlnbXktcmVwb3J0L2lmcmFtZTUvaWZyYW1lNS9pZnJhbWU1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEyO1xyXG4gICAgdG9wOiAxNTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MyU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvc3JjL2Fzc2V0cy9sb2FkaW5nLmdpZikgMCAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Iframe5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iframe5',
                templateUrl: './iframe5.component.html',
                styleUrls: ['./iframe5.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=non-npa-recovery-non-npa-recovery-module.js.map