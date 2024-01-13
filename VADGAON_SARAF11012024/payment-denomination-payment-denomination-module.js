(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-denomination-payment-denomination-module"],{

/***/ "./src/app/theme/transaction/cash-denomination/payment-denomination/payment-denomination-routing.module.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/theme/transaction/cash-denomination/payment-denomination/payment-denomination-routing.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PaymentDenominationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDenominationRoutingModule", function() { return PaymentDenominationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_denomination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-denomination.component */ "./src/app/theme/transaction/cash-denomination/payment-denomination/payment-denomination.component.ts");





const routes = [
    {
        path: '',
        component: _payment_denomination_component__WEBPACK_IMPORTED_MODULE_2__["PaymentDenominationComponent"],
        data: {
            title: 'Payment Denomination',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class PaymentDenominationRoutingModule {
}
PaymentDenominationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaymentDenominationRoutingModule });
PaymentDenominationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaymentDenominationRoutingModule_Factory(t) { return new (t || PaymentDenominationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentDenominationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentDenominationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/cash-denomination/payment-denomination/payment-denomination.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/theme/transaction/cash-denomination/payment-denomination/payment-denomination.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: PaymentDenominationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDenominationComponent", function() { return PaymentDenominationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _cash_denomination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cash-denomination.service */ "./src/app/theme/transaction/cash-denomination/cash-denomination.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function PaymentDenominationComponent_ng_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", values_r6.TRAN_NO, "||", values_r6.TRAN_ACNOTYPE, "||", values_r6.TRAN_ACNO, "||", values_r6.TRAN_AMOUNT, " ");
} }
function PaymentDenominationComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentDenominationComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentDenominationComponent_div_25_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["TRANSACTION_NO"].errors == null ? null : ctx_r2.angForm.controls["TRANSACTION_NO"].errors.required);
} }
function PaymentDenominationComponent_div_73_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentDenominationComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentDenominationComponent_div_73_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.angForm.controls["TRANSACTION_AMT"].errors == null ? null : ctx_r3.angForm.controls["TRANSACTION_AMT"].errors.pattern) || (ctx_r3.angForm.controls["TRANSACTION_AMT"].errors == null ? null : ctx_r3.angForm.controls["TRANSACTION_AMT"].errors.required));
} }
function PaymentDenominationComponent_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required and Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentDenominationComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentDenominationComponent_div_81_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.angForm.controls["LEDGER_BAL"].errors == null ? null : ctx_r4.angForm.controls["LEDGER_BAL"].errors.pattern) || (ctx_r4.angForm.controls["LEDGER_BAL"].errors == null ? null : ctx_r4.angForm.controls["LEDGER_BAL"].errors.required));
} }
function PaymentDenominationComponent_div_109_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Coins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentDenominationComponent_div_109_tr_8_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r11.currency, " X");
} }
function PaymentDenominationComponent_div_109_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentDenominationComponent_div_109_tr_8_td_1_Template, 2, 0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaymentDenominationComponent_div_109_tr_8_td_2_Template, 2, 1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PaymentDenominationComponent_div_109_tr_8_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const data_r11 = ctx.$implicit; const indexOfelement_r12 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.calculation(data_r11, indexOfelement_r12, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r11.currency === "Coin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r11.currency !== "Coin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r11.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r11.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r11.available);
} }
function PaymentDenominationComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cash Denomination");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaymentDenominationComponent_div_109_tr_8_Template, 10, 5, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Total Cash : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentDenominationComponent_div_109_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentDenominationComponent_div_109_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.cancel(); });
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
const _c0 = function (a0) { return { "form-submitted": a0 }; };
class PaymentDenominationComponent {
    constructor(fb, http, config, _service) {
        this.fb = fb;
        this.http = http;
        this.config = config;
        this._service = _service;
        this.formSubmitted = false;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.showCash = false;
        this.totalCash = 0;
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
        this.sum = 0;
    }
    ngOnInit() {
        let user = JSON.parse(localStorage.getItem('user'));
        this.createForm();
        this._service.paymentVoucher(user).subscribe(data => {
            console.log(data);
            this.voucherData = data;
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire(err.error.error, err.error.message, 'warning');
            this.angForm.reset();
        });
    }
    createForm() {
        this.angForm = this.fb.group({
            TRANSACTION_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            TOKEN_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            SCHEME: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ACCOUNT_NO: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            NARRATION: ['',],
            DENOMINATION_AMT: ['',],
            TRANSACTION_AMT: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            LEDGER_BAL: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            TRANSACTION_TYPE: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
        });
    }
    //get voucher data
    getVoucherData(ele) {
        let user = JSON.parse(localStorage.getItem('user'));
        let obj1 = {
            ACNO: ele.TRAN_ACNO
        };
        this.http.post(this.url + '/voucher/denogetledgerbalance/', obj1).subscribe((data) => {
            this.glDetails = data;
            // console.log(this.glDetails);
            let ledgerBal = Math.abs(this.glDetails);
            console.log(ledgerBal);
            // console.log(ledgerBal);
            debugger;
            console.log(ele);
            this.angForm.patchValue({
                TOKEN_NO: ele.TOKEN_NO,
                SCHEME: ele.TRAN_ACNOTYPE,
                ACCOUNT_NO: ele.TRAN_ACNO,
                NARRATION: ele.NARRATION,
                TRANSACTION_AMT: ele.TRAN_AMOUNT,
                TRANSACTION_TYPE: 'Debit',
                LEDGER_BAL: ledgerBal,
            });
            this.cashierName = user.F_NAME + ' ' + user.L_NAME;
            //  Get Cashier List
            this._service.getList({ branch_id: user.branchId }).subscribe(data => {
                this.cashier_list = data;
                console.log(data);
                const result = this.cashier_list.find((CASHIER_CODE) => CASHIER_CODE.CASHIER_CODE == user.id);
                console.log(result);
                this.changeData(result);
            });
        });
    }
    showCashModule() {
        this.showCash = true;
    }
    calculation(data, index, element) {
        console.log(element.target.value);
        let currency = this.currencyData[index].currency;
        let qty = element.target.value;
        let total = (currency == 'Coin' ? Number(qty) : Number(currency) * Number(qty));
        this.currencyData[index].currency = currency;
        this.currencyData[index].qty = qty;
        this.currencyData[index].total = total;
        this.sum = this.currencyData.reduce((accumulator, object) => {
            return accumulator + object.total;
        }, 0);
    }
    submit() {
        const formVal = this.angForm.value;
        var object = {
            // data : this.angForm.value,
            TRANSACTION_NO: this.ngTransactionNo,
            currency: this.currencyData,
            user: JSON.parse(localStorage.getItem('user'))
        };
        if (formVal.DENOMINATION_AMT != this.sum) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Warning!', 'Please insert Correct Amount!', 'warning');
        }
        else if (Number(this.transactionAmt) != Number(this.denomination)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Oops...', 'Please Check Transaction Amount and Denomination Amount', 'warning');
        }
        else {
            this._service.paymentDinominationInsert(object).subscribe(data => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Success', 'Cash Payment Denomincation Successfully Done', 'success');
                this.angForm.reset();
                this.ngOnInit();
                this.showCash = false;
                for (let item of this.currencyData) {
                    item.available = 0;
                    item.qty = "";
                    item.total = 0;
                }
                this.sum = 0;
            }, err => {
                console.log(err);
            });
        }
    }
    cancel() {
        this.currencyData.forEach(entry => {
            entry.qty = '';
            entry.total = 0;
            this.sum = 0;
        });
    }
    refreshdata() {
        this.angForm.controls['TRANSACTION_NO'].reset();
        this.angForm.controls['TOKEN_NO'].reset();
        this.angForm.controls['SCHEME'].reset();
        this.angForm.controls['ACCOUNT_NO'].reset();
        this.angForm.controls['NARRATION'].reset();
        this.angForm.controls['DENOMINATION_AMT'].reset();
        this.angForm.controls['TRANSACTION_AMT'].reset();
        this.angForm.controls['LEDGER_BAL'].reset();
        this.angForm.controls['TRANSACTION_TYPE'].reset();
    }
    // submit(){
    //   // if(this.angForm.valid){
    //     debugger
    //     let object = this.angForm.value;
    //     let user   = JSON.parse(localStorage.getItem('user'));
    //     object['currency'] = this.currencyData;
    //     object['user']     = user;
    //     console.log(object);
    //     if(this.sum != this.denomination){
    //       Swal.fire('Oops...','Cash Denomination not matched please check once again','warning');
    //     }
    //     else{
    //       this._service.paymentDinominationInsert(object).subscribe(data=>{
    //         Swal.fire('Success','Cash Payment Denomincation Successfully Done','success');
    //         this.angForm.reset();
    //         this.showCash = false;
    //       },err=>{
    //         console.log(err);
    //       })
    //     }
    //   // }else{
    //   //   Swal.fire('Oops...','Please fill all required field','warning');
    //   // }
    // }
    getDecimalPoint(event) {
        if (event.target.value != '')
            event.target.value = parseFloat(event.target.value).toFixed(2);
        else
            event.target.value = 0;
    }
    changeData(user) {
        console.log(user);
        this.currencyData[0].available = user.DENO_2000;
        this.currencyData[1].available = user.DENO_1000;
        this.currencyData[2].available = user.DENO_500;
        this.currencyData[3].available = user.DENO_200;
        this.currencyData[4].available = user.DENO_100;
        this.currencyData[5].available = user.DENO_50;
        this.currencyData[6].available = user.DENO_20;
        this.currencyData[7].available = user.DENO_10;
        this.currencyData[8].available = user.DENO_5;
        this.currencyData[9].available = user.DENO_2;
        this.currencyData[10].available = user.DENO_1;
    }
}
PaymentDenominationComponent.ɵfac = function PaymentDenominationComponent_Factory(t) { return new (t || PaymentDenominationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cash_denomination_service__WEBPACK_IMPORTED_MODULE_6__["CashDenominationService"])); };
PaymentDenominationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentDenominationComponent, selectors: [["app-payment-denomination"]], decls: 110, vars: 23, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "card-block"], [1, "col-sm-12", "col-md-2"], ["for", "TRANSACTION_NO"], [1, "col-sm-12", "col-md-4"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["id", "TRANSACTION_NO", "formControlName", "TRANSACTION_NO", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "", 3, "ngModel", "ngClass", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], [1, "col-sm-12", "col-md-1"], ["for", "TOKEN_NO"], [1, "col-md-3"], [1, "form-group", "input-group"], ["type", "text", "maxlength", "12", "pattern", "^[0-9]+$", "formControlName", "TOKEN_NO", "readonly", "", 1, "form-control", 2, "text-align", "right", 3, "ngModel", "ngModelChange", "keypress"], ["for", "SCHEME"], ["type", "text", "maxlength", "12", "pattern", "^[0-9]+$", "formControlName", "SCHEME", "readonly", "", 1, "form-control", 2, "text-align", "right", 3, "ngModel", "ngModelChange", "keypress"], ["for", "ACCOUNT_NO"], ["type", "text", "maxlength", "12", "pattern", "^[0-9]+$", "formControlName", "ACCOUNT_NO", "readonly", "", 1, "form-control", 2, "text-align", "right", 3, "ngModel", "ngModelChange", "keypress"], ["for", "NARRATION"], [1, "col-sm-12", "col-md-3"], ["readonly", "", "formControlName", "NARRATION", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "TRANSACTION_AMT"], [1, "col-md-2"], ["type", "text", "name", "TRANSACTION_AMT", "placeholder", " ", "id", "TRANSACTION_AMT", "required", "", "pattern", "\\d{1,20}(\\.\\d{1,2})?", "title", "Input allowed only  0-9", "formControlName", "TRANSACTION_AMT", "readonly", "", 1, "form-control", 2, "text-align", "right", 3, "ngModel", "ngClass", "ngModelChange", "keypress", "focusout"], ["for", "LEDGER_BAL"], ["name", "TRANSACTION_AMT", "formControlName", "LEDGER_BAL", "pattern", "\\d{1,20}(\\.\\d{1,2})?", "title", "Input allowed only  0-9", "type", "text", 1, "form-control", 2, "text-align", "right", 3, "ngClass", "keypress", "focusout"], ["for", "TRANSACTION_TYPE"], ["type", "text", "name", "TRANSACTION_TYPE", "placeholder", " ", "id", "TRANSACTION_TYPE", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", "formControlName", "TRANSACTION_TYPE", 1, "form-control", 3, "keypress"], ["for", "DENOMINATION_AMT"], ["type", "text", "maxlength", "12", "pattern", "\\d{1,20}(\\.\\d{1,2})?", "formControlName", "DENOMINATION_AMT", 1, "form-control", 2, "text-align", "right", 3, "ngModel", "ngModelChange", "focusout", "keypress"], [1, "col-sm"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["class", "col-md-3", "id", "FORMA", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], ["id", "FORMA", 1, "col-md-3"], [1, "card", 2, "width", "450px"], [1, "solid"], [4, "ngFor", "ngForOf"], [1, "h", 2, "width", "350px"], ["align", "right"], ["type", "text", 1, "text-right", 2, "width", "100px", 3, "value"], [1, "card-footer"], ["class", "td_center", 4, "ngIf"], ["type", "text", "placeholder", "0", 2, "width", "100px", 3, "value", "keyup"], ["type", "text", "disabled", "", 1, "text-right", 2, "width", "100px", 3, "value"], ["type", "text", "disabled", "", 1, "text-right", 2, "width", "60px", 3, "value"], [1, "td_center"]], template: function PaymentDenominationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Payment cash Denomination");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Transaction No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentDenominationComponent_Template_ng_select_ngModelChange_23_listener($event) { return ctx.ngTransactionNo = $event; })("change", function PaymentDenominationComponent_Template_ng_select_change_23_listener($event) { return ctx.getVoucherData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PaymentDenominationComponent_ng_option_24_Template, 2, 5, "ng-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PaymentDenominationComponent_div_25_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Token No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentDenominationComponent_Template_input_ngModelChange_32_listener($event) { return ctx.token = $event; })("keypress", function PaymentDenominationComponent_Template_input_keypress_32_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentDenominationComponent_Template_input_ngModelChange_44_listener($event) { return ctx.Scheme = $event; })("keypress", function PaymentDenominationComponent_Template_input_keypress_44_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Account No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentDenominationComponent_Template_input_ngModelChange_55_listener($event) { return ctx.accountno = $event; })("keypress", function PaymentDenominationComponent_Template_input_keypress_55_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Particulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentDenominationComponent_Template_textarea_ngModelChange_62_listener($event) { return ctx.Particulars = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Transaction Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentDenominationComponent_Template_input_ngModelChange_72_listener($event) { return ctx.transactionAmt = $event; })("keypress", function PaymentDenominationComponent_Template_input_keypress_72_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; })("focusout", function PaymentDenominationComponent_Template_input_focusout_72_listener($event) { return ctx.getDecimalPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, PaymentDenominationComponent_div_73_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Ledger Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function PaymentDenominationComponent_Template_input_keypress_80_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; })("focusout", function PaymentDenominationComponent_Template_input_focusout_80_listener($event) { return ctx.getDecimalPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, PaymentDenominationComponent_div_81_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Transaction Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function PaymentDenominationComponent_Template_input_keypress_88_listener($event) { return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122 || $event.charCode <= 32 || $event.charCode == 46 || $event.charCode == 45 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Denomination Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaymentDenominationComponent_Template_input_ngModelChange_96_listener($event) { return ctx.denomination = $event; })("focusout", function PaymentDenominationComponent_Template_input_focusout_96_listener($event) { return ctx.getDecimalPoint($event); })("keypress", function PaymentDenominationComponent_Template_input_keypress_96_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Cashier:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentDenominationComponent_Template_button_click_105_listener() { return ctx.showCashModule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentDenominationComponent_Template_button_click_107_listener() { return ctx.refreshdata(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, PaymentDenominationComponent_div_109_Template, 25, 2, "div", 40);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngTransactionNo)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.voucherData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["TRANSACTION_NO"].invalid && (ctx.angForm.controls["TRANSACTION_NO"].dirty || ctx.angForm.controls["TRANSACTION_NO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Scheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accountno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Particulars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.transactionAmt)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["TRANSACTION_AMT"].invalid && (ctx.angForm.controls["TRANSACTION_AMT"].dirty || ctx.angForm.controls["TRANSACTION_AMT"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["LEDGER_BAL"].invalid && (ctx.angForm.controls["LEDGER_BAL"].dirty || ctx.angForm.controls["LEDGER_BAL"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.denomination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cashierName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCash);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["ɵr"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n  width: 400px;\n}\n\n.h1[_ngcontent-%COMP%] {\n  content: \"\";\n  width: 210px;\n  height: 2px;\n  display: block;\n  background: black;\n  position: absolute;\n}\n\ndiv.solid1[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n  width: 175px;\n}\n\n.h2[_ngcontent-%COMP%] {\n  content: \"\";\n  width: 150px;\n  height: 2px;\n  display: block;\n  background: black;\n  position: absolute;\n}\n\ndiv.solid1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.h[_ngcontent-%COMP%] {\n  content: \"\";\n  width: 310px;\n  height: 2px;\n  display: block;\n  background: black;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vY2FzaC1kZW5vbWluYXRpb24vcGF5bWVudC1kZW5vbWluYXRpb24vcGF5bWVudC1kZW5vbWluYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFFRTtFQUNFLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vY2FzaC1kZW5vbWluYXRpb24vcGF5bWVudC1kZW5vbWluYXRpb24vcGF5bWVudC1kZW5vbWluYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICBkaXYuc29saWQge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgcGFkZGluZzoyJTtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbiAgLmgxe1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBcbiAgfVxuXG4gIGRpdi5zb2xpZDEge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgcGFkZGluZzoyJTtcbiAgICB3aWR0aDogMTc1cHg7XG4gIH1cbiAgLmgye1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBcbiAgfVxuXG4gIGRpdi5zb2xpZDEgaDMgc3BhbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5oe1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMzEwcHg7XG4gIGhlaWdodDogMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentDenominationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-denomination',
                templateUrl: './payment-denomination.component.html',
                styleUrls: ['./payment-denomination.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectConfig"] }, { type: _cash_denomination_service__WEBPACK_IMPORTED_MODULE_6__["CashDenominationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/cash-denomination/payment-denomination/payment-denomination.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/theme/transaction/cash-denomination/payment-denomination/payment-denomination.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PaymentDenominationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDenominationModule", function() { return PaymentDenominationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _payment_denomination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-denomination.component */ "./src/app/theme/transaction/cash-denomination/payment-denomination/payment-denomination.component.ts");
/* harmony import */ var _payment_denomination_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-denomination-routing.module */ "./src/app/theme/transaction/cash-denomination/payment-denomination/payment-denomination-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











class PaymentDenominationModule {
}
PaymentDenominationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaymentDenominationModule });
PaymentDenominationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaymentDenominationModule_Factory(t) { return new (t || PaymentDenominationModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _payment_denomination_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentDenominationRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentDenominationModule, { declarations: [_payment_denomination_component__WEBPACK_IMPORTED_MODULE_2__["PaymentDenominationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _payment_denomination_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentDenominationRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentDenominationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _payment_denomination_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentDenominationRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                declarations: [_payment_denomination_component__WEBPACK_IMPORTED_MODULE_2__["PaymentDenominationComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=payment-denomination-payment-denomination-module.js.map