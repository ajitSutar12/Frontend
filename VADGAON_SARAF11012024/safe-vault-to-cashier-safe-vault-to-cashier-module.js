(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["safe-vault-to-cashier-safe-vault-to-cashier-module"],{

/***/ "./src/app/theme/transaction/cash-denomination/safe-vault-to-cashier/safe-vault-to-cashier-routing.module.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/theme/transaction/cash-denomination/safe-vault-to-cashier/safe-vault-to-cashier-routing.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SafeValultToCashierRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeValultToCashierRoutingModule", function() { return SafeValultToCashierRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _safe_vault_to_cashier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe-vault-to-cashier.component */ "./src/app/theme/transaction/cash-denomination/safe-vault-to-cashier/safe-vault-to-cashier.component.ts");





const routes = [
    {
        path: '',
        component: _safe_vault_to_cashier_component__WEBPACK_IMPORTED_MODULE_2__["SafeVaultToCashierComponent"],
        data: {
            title: 'Safe Vault-Cashier',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class SafeValultToCashierRoutingModule {
}
SafeValultToCashierRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SafeValultToCashierRoutingModule });
SafeValultToCashierRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SafeValultToCashierRoutingModule_Factory(t) { return new (t || SafeValultToCashierRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SafeValultToCashierRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeValultToCashierRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/cash-denomination/safe-vault-to-cashier/safe-vault-to-cashier.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/theme/transaction/cash-denomination/safe-vault-to-cashier/safe-vault-to-cashier.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SafeVaultToCashierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeVaultToCashierComponent", function() { return SafeVaultToCashierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _cash_denomination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cash-denomination.service */ "./src/app/theme/transaction/cash-denomination/cash-denomination.service.ts");
/* harmony import */ var src_app_theme_utility_cashier_um_cashier_um_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/utility/cashier-um/cashier-um.service */ "./src/app/theme/utility/cashier-um/cashier-um.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function SafeVaultToCashierComponent_ng_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r6.label, "");
} }
function SafeVaultToCashierComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SafeVaultToCashierComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SafeVaultToCashierComponent_div_26_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.angForm.controls["Branch"].errors == null ? null : ctx_r1.angForm.controls["Branch"].errors.required);
} }
function SafeVaultToCashierComponent_ng_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r8)("disabled", values_r8.CASHIER_CODE == "SAFE VALUT" && values_r8.TOTAL_AMOUNT == 0 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", values_r8.id, " ", values_r8.name, "");
} }
function SafeVaultToCashierComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SafeVaultToCashierComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SafeVaultToCashierComponent_div_37_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["CASHIER"].errors == null ? null : ctx_r3.angForm.controls["CASHIER"].errors.required);
} }
function SafeVaultToCashierComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SafeVaultToCashierComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SafeVaultToCashierComponent_div_55_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.angForm.controls["TRAN_DATE"].errors == null ? null : ctx_r4.angForm.controls["TRAN_DATE"].errors.required);
} }
function SafeVaultToCashierComponent_div_56_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Coins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SafeVaultToCashierComponent_div_56_tr_8_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r12.currency, " X");
} }
function SafeVaultToCashierComponent_div_56_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SafeVaultToCashierComponent_div_56_tr_8_td_1_Template, 2, 0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SafeVaultToCashierComponent_div_56_tr_8_td_2_Template, 2, 1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SafeVaultToCashierComponent_div_56_tr_8_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const data_r12 = ctx.$implicit; const indexOfelement_r13 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.calculation(data_r12, indexOfelement_r13, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r12.currency === "Coin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r12.currency !== "Coin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r12.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r12.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r12.available);
} }
function SafeVaultToCashierComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Safe Vault to Cashier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SafeVaultToCashierComponent_div_56_tr_8_Template, 10, 5, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Total Cash : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SafeVaultToCashierComponent_div_56_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SafeVaultToCashierComponent_div_56_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.currencyData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r5.sum);
} }
class SafeVaultToCashierComponent {
    // available: number;
    constructor(fb, systemParameter, _service, _services) {
        this.fb = fb;
        this.systemParameter = systemParameter;
        this._service = _service;
        this._services = _services;
        this.values = [
            { id: 1, name: 'aaa' },
            { id: 2, name: 'bbb' },
            { id: 3, name: 'Supervisor' },
        ];
        this.currencyData = [
            { currency: 2000, qty: "", total: 0, available: 0 },
            { currency: 1000, qty: "", total: 0, available: 0 },
            { currency: 500, qty: "", total: 0, available: 0 },
            { currency: 200, qty: "", total: 0, available: 0 },
            { currency: 100, qty: "", total: 0, available: 0 },
            { currency: 50, qty: "", total: 0, available: 0 },
            { currency: 20, qty: "", total: 0, available: 0 },
            { currency: 10, qty: "", total: 0, available: 0 },
            { currency: 5, qty: "", total: 0, available: 0 },
            { currency: 2, qty: "", total: 0, available: 0 },
            { currency: 1, qty: "", total: 0, available: 0 },
            { currency: 'Coin', qty: "", total: 0, available: 0 },
        ];
        this.dtExportButtonOptions = {};
        // sum: number = 0
        // calculation(data, index, element) {
        //   console.log(element.target.value);
        //   let currency = this.currencyData[index].currency;
        //   let qty = element.target.value;
        //   let total = (currency == 'Coin' ? Number(qty) : Number(currency) * Number(qty));
        //   this.currencyData[index].currency = currency;
        //   this.currencyData[index].qty = qty;
        //   this.currencyData[index].total = total;
        //   this.sum = this.currencyData.reduce((accumulator, object) => {
        //     return accumulator + object.total;
        //   }, 0);
        // }
        this.sum = 0;
    }
    ngOnInit() {
        this.angForm = this.fb.group({
            CASHIER: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            TRAN_DATE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            DENOMINATION_AMT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Branch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.systemParameter.getFormData(1).subscribe(data => {
            this.angForm.patchValue({
                TRAN_DATE: data.CURRENT_DATE
            });
        });
        let user = JSON.parse(localStorage.getItem('user'));
        this._service.getOwnbranchList().subscribe(data => {
            this.branch_list = data;
            this.SelectedBranch = user.branchId;
            //Get Cashier List
            this._service.getList({ branch_id: this.SelectedBranch }).subscribe(data => {
                this.cashier_list = data;
                this.safeCashier = this.cashier_list.filter(el => el.CASHIER_CODE !== 'SAFE VAULT');
                this.safeCashier1 = this.cashier_list.filter(el => el.CASHIER_CODE == 'SAFE VAULT');
            });
        });
        this.reset();
    }
    decimalAllContent($event) {
        var t = $event.target.value;
        $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
        this.angForm.patchValue({
            DENOMINATION_AMT: $event.target.value
        });
    }
    isFormA(value) {
        if (Number(this.angForm.controls['DENOMINATION_AMT'].value) == 0) {
            this.DenominationChart = false;
        }
        else {
            this.DenominationChart = true;
        }
    }
    calculation(data, index, element) {
        let qty = element.target.value;
        if (Number(qty) > Number(this.currencyData[index].available)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Warning!', 'Please insert Correct Quantity', 'warning');
            element.target.value = 0;
            let currency = this.currencyData[index].currency;
            let available = element.target.value;
            let total = Number(currency) * 0;
            this.currencyData[index].currency = currency;
            this.currencyData[index].qty = "";
            this.currencyData[index].total = total;
            this.sum = this.currencyData.reduce((accumulator, object) => {
                return accumulator + object.total;
            }, 0);
        }
        else {
            let currency = this.currencyData[index].currency;
            let available = element.target.value;
            let total = (currency == 'Coin' ? Number(qty) : Number(currency) * Number(qty));
            this.currencyData[index].currency = currency;
            this.currencyData[index].qty = qty;
            this.currencyData[index].total = total;
            this.sum = this.currencyData.reduce((accumulator, object) => {
                return accumulator + object.total;
            }, 0);
        }
    }
    submit() {
        // let object = this.angForm.value;
        const formVal = this.angForm.value;
        var object = {
            data: this.angForm.value,
            currency: this.currencyData,
            user: JSON.parse(localStorage.getItem('user'))
        };
        if (formVal.DENOMINATION_AMT != this.sum) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Warning!', 'Please insert Correct Amount!', 'warning');
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Are you sure?',
                text: "You won't be transfer Safe Vault to Cashier!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, transfer it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this._service.safevaulttocashier(object).subscribe(data => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Transferd!', 'Your cash has been transfered.', 'success');
                        this.angForm.reset();
                        this.DenominationChart = false;
                    }, err => {
                        console.log(err);
                    });
                }
            });
        }
    }
    reset() {
        // this.angForm.sum.reset()
        this.currencyData.forEach(entry => {
            // this.available = 0;
        });
    }
    changeData(ele) {
        // console.log(ele);
        this.currencyData[0].available = this.safeCashier1[0].DENO_2000;
        this.currencyData[1].available = this.safeCashier1[0].DENO_1000;
        this.currencyData[2].available = this.safeCashier1[0].DENO_500;
        this.currencyData[3].available = this.safeCashier1[0].DENO_200;
        this.currencyData[4].available = this.safeCashier1[0].DENO_100;
        this.currencyData[5].available = this.safeCashier1[0].DENO_50;
        this.currencyData[6].available = this.safeCashier1[0].DENO_20;
        this.currencyData[7].available = this.safeCashier1[0].DENO_10;
        this.currencyData[8].available = this.safeCashier1[0].DENO_5;
        this.currencyData[9].available = this.safeCashier1[0].DENO_2;
        this.currencyData[10].available = this.safeCashier1[0].DENO_1;
        this.currencyData[11].available = this.safeCashier1[0].DENO_COINS_AMT;
        // // this.currencyData[0].qty
        // for (let item of this.currencyData) {
        //   // item.total = Number(item.currency) * Number(item.qty);
        //   let total = (Number(item.qty) == ele.DENO_COINS_AMT ? Number(item.qty) : Number(item.currency) * Number(item.qty));
        // }
        // this.sum = this.currencyData.reduce((accumulator, object) => {
        //   return accumulator + object.total;
        // }, 0);
    }
}
SafeVaultToCashierComponent.ɵfac = function SafeVaultToCashierComponent_Factory(t) { return new (t || SafeVaultToCashierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_3__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cash_denomination_service__WEBPACK_IMPORTED_MODULE_4__["CashDenominationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_utility_cashier_um_cashier_um_service__WEBPACK_IMPORTED_MODULE_5__["CashierUmService"])); };
SafeVaultToCashierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SafeVaultToCashierComponent, selectors: [["app-safe-vault-to-cashier"]], decls: 57, vars: 10, consts: [[1, "row"], [1, "col-md-8"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", 3, "formGroup"], [1, "card-block"], [1, "col-sm-12", "col-md-2"], ["for", "AC_PARTICULAR"], [1, "col-sm-4"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["id", "d/c", "formControlName", "Branch", "title", "Compulsory Selection", "placeholder", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["for", "CASHIER"], [1, "col-sm-12", "col-md-4"], ["id", "CASHIER", "formControlName", "CASHIER", "title", "Compulsory Selection", "placeholder", "", "autofocus", "", "tabindex", "0", 3, "ngModel", "ngModelChange", "change"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["for", "DENOMINATION_AMT"], [1, "col-md-4"], [1, "form-group", "input-group"], ["type", "text", "maxlength", "12", "pattern", "\\d{1,20}(\\.\\d{1,2})?", "formControlName", "DENOMINATION_AMT", "tabindex", "1", 1, "form-control", 2, "text-align", "right", 3, "ngModel", "ngModelChange", "keyup", "keypress"], [1, "col-sm-12", "col-md-3"], ["for", "TRAN_DATE"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "TRAN_DATE", "id", "TRAN_DATE", "formControlName", "TRAN_DATE", "tabindex", "2", "readonly", "", 1, "form-control", 3, "keypress"], ["class", "col-md-3", "id", "FORMA", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value", "disabled"], ["id", "FORMA", 1, "col-md-3"], [1, "card", 2, "width", "450px"], [1, "solid"], [4, "ngFor", "ngForOf"], [1, "h", 2, "width", "350px"], ["align", "right"], ["type", "text", 1, "text-right", 2, "width", "100px", 3, "value"], [1, "card-footer"], [1, "col-sm"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["class", "td_center", 4, "ngIf"], ["type", "text", 2, "width", "100px", 3, "value", "keyup"], ["type", "text", "disabled", "", 1, "text-right", 2, "width", "100px", 3, "value"], ["type", "text", "disabled", "", 1, "text-right", 2, "width", "60px", 3, "value"], [1, "td_center"]], template: function SafeVaultToCashierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Safe Vault to Cashier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "sub", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "sub", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SafeVaultToCashierComponent_Template_ng_select_ngModelChange_24_listener($event) { return ctx.SelectedBranch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SafeVaultToCashierComponent_ng_option_25_Template, 2, 2, "ng-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SafeVaultToCashierComponent_div_26_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cashier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "sub", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ng-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SafeVaultToCashierComponent_Template_ng_select_ngModelChange_35_listener($event) { return ctx.cashier = $event; })("change", function SafeVaultToCashierComponent_Template_ng_select_change_35_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SafeVaultToCashierComponent_ng_option_36_Template, 2, 4, "ng-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SafeVaultToCashierComponent_div_37_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Denomination Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SafeVaultToCashierComponent_Template_input_ngModelChange_45_listener($event) { return ctx.denoamt = $event; })("keyup", function SafeVaultToCashierComponent_Template_input_keyup_45_listener() { return ctx.isFormA(2); })("keypress", function SafeVaultToCashierComponent_Template_input_keypress_45_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Denomination Transaction Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "sub", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function SafeVaultToCashierComponent_Template_input_keypress_54_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, SafeVaultToCashierComponent_div_55_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, SafeVaultToCashierComponent_div_56_Template, 25, 2, "div", 28);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.SelectedBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["Branch"].invalid && (ctx.angForm.controls["Branch"].dirty || ctx.angForm.controls["Branch"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cashier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.safeCashier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["CASHIER"].invalid && (ctx.angForm.controls["CASHIER"].dirty || ctx.angForm.controls["CASHIER"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.denoamt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["TRAN_DATE"].invalid && (ctx.angForm.controls["TRAN_DATE"].dirty || ctx.angForm.controls["TRAN_DATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DenominationChart);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["ɵr"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n}\n\ndiv.solid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: -3%;\n  height: 20px;\n  line-height: 20px;\n  font-size: 17px;\n}\n\ndiv.solid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.h[_ngcontent-%COMP%] {\n  content: \"\";\n  width: 210px;\n  height: 2px;\n  display: block;\n  background: black;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vY2FzaC1kZW5vbWluYXRpb24vc2FmZS12YXVsdC10by1jYXNoaWVyL3NhZmUtdmF1bHQtdG8tY2FzaGllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFDQTtFQUFXLG1CQUFBO0VBQW9CLFdBQUE7QUFJL0I7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSx1QkFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFPRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RyYW5zYWN0aW9uL2Nhc2gtZGVub21pbmF0aW9uL3NhZmUtdmF1bHQtdG8tY2FzaGllci9zYWZlLXZhdWx0LXRvLWNhc2hpZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbmRpdi5zb2xpZCB7Ym9yZGVyLXN0eWxlOiBzb2xpZDtwYWRkaW5nOjIlfVxuXG5kaXYuc29saWQgaDF7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IC0zJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuZGl2LnNvbGlkIGgxIHNwYW57XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmh7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAyMTBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeVaultToCashierComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-safe-vault-to-cashier',
                templateUrl: './safe-vault-to-cashier.component.html',
                styleUrls: ['./safe-vault-to-cashier.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_3__["SystemMasterParametersService"] }, { type: _cash_denomination_service__WEBPACK_IMPORTED_MODULE_4__["CashDenominationService"] }, { type: src_app_theme_utility_cashier_um_cashier_um_service__WEBPACK_IMPORTED_MODULE_5__["CashierUmService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/cash-denomination/safe-vault-to-cashier/safe-vault-to-cashier.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/theme/transaction/cash-denomination/safe-vault-to-cashier/safe-vault-to-cashier.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SafeValultToCashierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeValultToCashierModule", function() { return SafeValultToCashierModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _safe_vault_to_cashier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe-vault-to-cashier.component */ "./src/app/theme/transaction/cash-denomination/safe-vault-to-cashier/safe-vault-to-cashier.component.ts");
/* harmony import */ var _safe_vault_to_cashier_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safe-vault-to-cashier-routing.module */ "./src/app/theme/transaction/cash-denomination/safe-vault-to-cashier/safe-vault-to-cashier-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");











class SafeValultToCashierModule {
}
SafeValultToCashierModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SafeValultToCashierModule });
SafeValultToCashierModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SafeValultToCashierModule_Factory(t) { return new (t || SafeValultToCashierModule)(); }, providers: [src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_7__["SystemMasterParametersService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _safe_vault_to_cashier_routing_module__WEBPACK_IMPORTED_MODULE_3__["SafeValultToCashierRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SafeValultToCashierModule, { declarations: [_safe_vault_to_cashier_component__WEBPACK_IMPORTED_MODULE_2__["SafeVaultToCashierComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _safe_vault_to_cashier_routing_module__WEBPACK_IMPORTED_MODULE_3__["SafeValultToCashierRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeValultToCashierModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _safe_vault_to_cashier_routing_module__WEBPACK_IMPORTED_MODULE_3__["SafeValultToCashierRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"]
                ],
                declarations: [_safe_vault_to_cashier_component__WEBPACK_IMPORTED_MODULE_2__["SafeVaultToCashierComponent"]],
                providers: [src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_7__["SystemMasterParametersService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=safe-vault-to-cashier-safe-vault-to-cashier-module.js.map