(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multi-voucher-multi-voucher-module"],{

/***/ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts ***!
  \******************************************************************************/
/*! exports provided: OwnbranchMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnbranchMasterService", function() { return OwnbranchMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class OwnbranchMasterService {
    constructor(http) {
        this.http = http;
        this.OwnbranchMasterObject = new Array();
        // API 
        //// own-branch-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getOwnbranchList() {
        this.OwnbranchMasterObject = [];
        return this.http.get(this.url + '/own-branch-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.CODE + ' ' + element.NAME, value: element.id, name: element.CODE };
                this.OwnbranchMasterObject.push(obj);
            });
            return this.OwnbranchMasterObject;
        }));
    }
}
OwnbranchMasterService.ɵfac = function OwnbranchMasterService_Factory(t) { return new (t || OwnbranchMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
OwnbranchMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OwnbranchMasterService, factory: OwnbranchMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnbranchMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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

/***/ "./src/app/theme/transaction/multi-voucher/multi-voucher.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/transaction/multi-voucher/multi-voucher.component.ts ***!
  \****************************************************************************/
/*! exports provided: MultiVoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiVoucherComponent", function() { return MultiVoucherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _multi_voucher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multi-voucher.service */ "./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");













const _c0 = ["triggerhide"];
function MultiVoucherComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.previewImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MultiVoucherComponent_ng_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r9.label, "");
} }
function MultiVoucherComponent_ng_option_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.S_ACNOTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.S_ACNOTYPE, "");
} }
function MultiVoucherComponent_ng_option_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r11.S_APPL, " ", item_r11.S_NAME, "");
} }
function MultiVoucherComponent_ng_option_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r12.label, " ", item_r12.name, "");
} }
function MultiVoucherComponent_ng_option_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r13.id, " ", item_r13.value, "");
} }
function MultiVoucherComponent_tr_319_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_tr_319_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const item_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.getNarration(item_r14.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.NARRATION, " ");
} }
// Handling datatable data
class DataTableResponse {
}
class MultiVoucherComponent {
    constructor(fb, systemParameter, ownbranchMasterService, _service, schemeAccountNoService) {
        this.fb = fb;
        this.systemParameter = systemParameter;
        this.ownbranchMasterService = ownbranchMasterService;
        this._service = _service;
        this.schemeAccountNoService = schemeAccountNoService;
        //Datatable variable
        this.dtExportButtonOptions = {};
        this.TranModeTransfer = [
            { id: 1, value: 'Credit Transfer', tran_drcr: 'C', tran_type: 'TR' },
            { id: 2, value: 'Credit Transfer for Closing', tran_drcr: 'C', tran_type: 'TR' },
            { id: 3, value: 'Credit Transfer for Penal Interest', tran_drcr: 'C', tran_type: 'TR' },
            { id: 4, value: 'Debit Transfer', tran_drcr: 'D', tran_type: 'TR' },
            { id: 5, value: 'Debit Transfer for Closing', tran_drcr: 'D', tran_type: 'TR' },
            { id: 6, value: 'Debit Transfer Interest', tran_drcr: 'D', tran_type: 'TR' },
            { id: 7, value: 'Debit Transfer Dividend', tran_drcr: 'D', tran_type: 'TR' },
            { id: 8, value: 'Debit Transfer for Demand Draft', tran_drcr: 'D', tran_type: 'TR' },
            { id: 9, value: 'Debit Interest on Account', tran_drcr: 'D', tran_type: 'TR' },
            { id: 10, value: 'Credit Interest on Account', tran_drcr: 'C', tran_type: 'TR' },
            { id: 11, value: 'Debit Transfer for Penal Interest', tran_drcr: 'D', tran_type: 'TR' },
            { id: 12, value: 'Debit Monthly Recovery', tran_drcr: 'D', tran_type: 'TR' },
            { id: 13, value: 'Debit for Pay Order', tran_drcr: 'D', tran_type: 'TR' },
            { id: 14, value: 'Credit Transfer for Rebit Interest', tran_drcr: 'C', tran_type: 'TR' },
            { id: 15, value: 'Credit Transfer for Closing With Branch Transfer', tran_drcr: 'C', tran_type: 'TR' }
        ];
        this.TranModeCash = [
            { id: 1, value: 'Deposit / Receipts', tran_drcr: 'C', tran_type: 'CS' },
            { id: 2, value: 'Deposit Closing', tran_drcr: 'C', tran_type: 'CS' },
            { id: 3, value: 'Deposit Penal Interest', tran_drcr: 'D', tran_type: 'CS' },
            { id: 4, value: 'Withdrawals / Payments', tran_drcr: 'D', tran_type: 'CS' },
            { id: 5, value: 'Withdrawals for Closing', tran_drcr: 'D', tran_type: 'CS' },
            { id: 6, value: 'Withdrawals Interest', tran_drcr: 'D', tran_type: 'CS' },
            { id: 7, value: 'Withdrawals Dividend', tran_drcr: 'D', tran_type: 'CS' },
            { id: 10, value: 'Credit Interest on Account', tran_drcr: 'C', tran_type: 'CS' },
            { id: 13, value: 'Deposit for Pay Order', tran_drcr: 'C', tran_type: 'CS' },
            { id: 14, value: 'Deposit for Rebit Interest', tran_drcr: 'C', tran_type: 'CS' },
        ];
        ////////////////////Scheme type wise tran mode //////
        this.TranData = [
            { key: 'AG', data: { cash: [1, 4, 5], transfer: [1, 4] } },
            { key: 'SB', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5] } },
            { key: 'CA', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5] } },
            { key: 'CC', data: { cash: [1, 2, 4, 5], transfer: [1, 2, 4, 5, 9] } },
            { key: 'DS', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9, 15] } },
            { key: 'LN', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9, 15] } },
            { key: 'GL', data: { cash: [1, 4], transfer: [1, 4] } },
            { key: 'GS', data: { cash: [1, 4], transfer: [1, 4] } },
            { key: 'SH', data: { cash: [1, 4, 5, 7], transfer: [1, 4, 5, 7] } },
            { key: 'IV', data: { cash: [1, 2, 4], transfer: [1, 2, 4, 9] } },
            { key: 'PG', data: { cash: [1, 4, 5, 10], transfer: [1, 4, 5, 10] } },
            { key: 'TD', data: { cash: [1, 4, 5, 6, 10], transfer: [1, 4, 5, 6, 9, 10] } },
        ];
        //variables for  add and update button
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        //variable for checkbox and radio button 
        this.isCredit = true;
        //Transaction Mode
        this.titleForSchemeType = false;
        this.transactioncreditMode = true;
        this.transactiondebitMode = false;
        this.selectedCode = null;
        this.isture = true;
        this.showChequeDetails = false;
        this.headShow = false;
        this.allScheme = new Array(); //from schme master
        this.customerImg = '../../../../assets/images/user-card/img-round4.jpg';
        this.signture = '../../../../assets/sign/signture.jpg';
        this.Pass = 0;
        this.Unpass = 0;
        this.ClearBalance = 0;
        this.AfterVoucher = 0;
        this.InputHeadAmt = 0.00;
        this.amountDetails = {};
        this.ngBranchCode = null;
        this.PreviewDiv = false;
    }
    ngOnInit() {
        this.createForm();
        this.getSystemParaDate();
        this.dtExportButtonOptions = {
            ajax: 'fake-data/multi-voucher-entry.json',
            columns: [
                {
                    title: 'Action'
                },
                {
                    title: 'Voucher No',
                    data: 'voucherno'
                },
                {
                    title: 'Voucher Date',
                    data: 'voucherdate'
                },
                {
                    title: 'Branch Code',
                    data: 'branchcode'
                },
                {
                    title: 'Scheme Type',
                    data: 'SchemeType'
                },
                {
                    title: 'Scheme Code',
                    data: 'SchemeCode'
                },
                {
                    title: 'Account No.',
                    data: 'AccountNumber'
                },
                {
                    title: 'Transaction Mode',
                    data: 'TransactionMode'
                },
                {
                    title: 'Voucher Amount',
                    data: 'voucheramount'
                },
                {
                    title: 'Credit',
                    data: 'credit'
                },
                {
                    title: 'Debit',
                    data: 'debit'
                },
                {
                    title: 'Cheque No.',
                    data: 'chequeno'
                },
                {
                    title: 'Particulars',
                    data: 'particulars'
                },
                {
                    title: 'Total Debit Amount',
                    data: 'totaldebitamount'
                },
                {
                    title: 'Total Credit Amount',
                    data: 'totalcreditamount'
                },
                {
                    title: 'Day Opening Balance',
                    data: 'dayopeningbalance'
                },
                {
                    title: 'Passed',
                    data: 'passed'
                },
                {
                    title: 'Unpassed',
                    data: 'unpassed'
                },
                {
                    title: 'Cleared Balance',
                    data: 'clearedbalance'
                },
                {
                    title: 'After This Voucher',
                    data: 'afterthisvoucher'
                }
            ],
            dom: 'Bfrtip',
        };
        let user = JSON.parse(localStorage.getItem('user'));
        this.type = 'transfer';
        this.tranModeList = this.TranModeCash;
        this.ownbranchMasterService.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(data => {
            this.branch_code = data;
            this.selectedBranch = user.branchId;
        });
        //Scheme Code
        this._service.getSchemeCodeList().subscribe(data => {
            console.log(data);
            this.master = data;
            this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()];
        });
        //Narration List
        this._service.getNarrationMaster().subscribe(data => {
            this.narrationList = data;
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;
        this.ngBranchCode = branchCode;
        this.angForm.controls['BRANCH'].disable();
    }
    //get Narration Details 
    getNarration(ele) {
        this.particulars = ele;
        let el = this.triggerhide.nativeElement;
        el.click();
    }
    //function toggle update to add button
    updateData() {
        this.showButton = true;
        this.updateShow = false;
    }
    creditMode() {
        this.transactioncreditMode = true;
        this.transactiondebitMode = false;
    }
    debitMode() {
        this.transactioncreditMode = false;
        this.transactiondebitMode = true;
    }
    createForm() {
        this.angForm = this.fb.group({
            voucherNo: [''],
            voucherDate: [''],
            BRANCH: [''],
            SchemeType: [''],
            SchemeCode: [''],
            AccountNumber: [''],
            TransactionMode: [''],
            voucheramount: [''],
            chequeno: [''],
            particulars: [''],
            totaldebitamount: [''],
            totalcreditamount: [''],
            creditRadio: [''],
            acnotype: [''],
            acnocode: [''],
            AccNo: [''],
            transCode: [''],
            narration: [''],
            Intdate: [''],
        });
    }
    getSystemParaDate() {
        this.systemParameter.getFormData(1).subscribe(data => {
            this.date = data.CURRENT_DATE;
            this.angForm.patchValue({
                voucherDate: data.CURRENT_DATE
            });
            if (data.ON_LINE === true) {
                this.angForm.controls['voucherDate'].disable();
            }
            else {
                this.angForm.controls['voucherDate'].enable();
            }
        });
    }
    selectedSchemeCode() {
        debugger;
        this.allScheme = [];
        this.master.forEach(element => {
            if (element.S_ACNOTYPE == this.selectedCode) {
                this.allScheme.push(element);
            }
        });
        let object = this.TranData.find(t => t.key === this.selectedCode);
        if (this.type == 'cash') {
            this.tranModeList = [];
            object.data.cash.forEach(ele => {
                let obj = this.TranModeCash.find(t => t.id === ele);
                this.tranModeList.push(obj);
            });
        }
        else {
            this.tranModeList = [];
            object.data.transfer.forEach(ele => {
                let obj = this.TranModeTransfer.find(t => t.id === ele);
                this.tranModeList.push(obj);
            });
        }
        //get Head details
        let obj = { 'code': this.selectedCode };
        let date = this.date;
        var rowData = date.split('/');
        let lastdate = Number(rowData[0]) - 1;
        // let result    = rowData[2]+'-'+rowData[1]+'-'+lastdate;
        this.IntersetHeadDate = lastdate + '/' + rowData[1] + '/' + rowData[2];
        console.log('IntrestDate', this.IntersetHeadDate);
        this._service.getHeadDetails(obj).subscribe(data => {
            if (data.length != 0) {
                this.headData = data;
                this.headShow = true;
                this.headData.forEach(element => {
                    element['date'] = this.IntersetHeadDate;
                    element['Amount'] = 0.00;
                });
                console.log(this.headData);
            }
            else {
                this.headShow = false;
            }
        }, err => {
            console.log(err);
        });
    }
    //get account no according scheme for introducer
    //get account no according scheme for introducer
    getIntroducer() {
        this.introducerACNo = [];
        this.obj = [this.selectedScheme.id, this.selectedBranch];
        switch (this.selectedCode) {
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
                    console.log(data);
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
    }
    //get customer today voucher data
    getVoucherData() {
        debugger;
        // let customer = this.angForm.controls['account_no'].value;
        // let obj = {
        //   'customer': customer.BANKACNO,
        //   'date': this.date
        // }
        // //Check Account Close or not
        // let Obj = {
        //   'customer_ACNO': customer.BANKACNO,
        //   'type': this.selectedCode
        // }
        // this._service.checkAccountCloseOrNot(Obj).subscribe(data => {
        //   if (data == true) {
        //     Swal.fire('Error!', 'Access dined Account Close Already!', 'error');
        //     return 0;
        //   }
        // }, err => {
        //   console.log(err);
        // })
        // this._service.getVoucherPassAndUnpassData(obj).subscribe(data => {
        //   debugger
        //   let passType = '';
        //   let unpassType = '';
        //   //DayOfOpening 
        //   this.ClearBalance = this.ClearBalance + this.DayOpBal;
        //   //Pass condition checked
        //   if (data.passObj.pass == undefined) {
        //     this.Pass = 0;
        //     passType = 'Cr';
        //   } else {
        //     this.Pass = data.passObj.pass;
        //     passType = data.passObj.type;
        //   }
        //   //Unpass condition checked
        //   if (data.unpassObj.UnPass == undefined) {
        //     this.Unpass = 0;
        //     let unpassType = 'Cr';
        //   } else {
        //     this.Unpass = data.unpassObj.UnPass;
        //     let unpassType = data.unpassObj.type;
        //   }
        //   if (passType == 'Cr') {
        //     this.ClearBalance = this.Pass + this.ClearBalance;
        //   } else {
        //     this.ClearBalance = this.Pass - this.ClearBalance;
        //   }
        //   if (unpassType == 'Cr') {
        //     this.ClearBalance = this.Unpass + this.ClearBalance;
        //   } else {
        //     this.ClearBalance = this.Unpass - this.ClearBalance;
        //   }
        //   // this.ClearBalance = this.DayOpBal + this.Pass + this.Unpass;
        //   this.AfterVoucher = this.ClearBalance;
        // }, err => {
        //   console.log(err);
        // })
    }
    //Mode data
    changeMode() {
        debugger;
        if (this.selectedMode.tran_drcr == 'D') {
            this.showChequeDetails = true;
        }
        else {
            this.showChequeDetails = false;
        }
        if (this.selectedCode == 'GL') {
            this.showChequeDetails = true;
        }
    }
    //get Input head Amount
    getInputHeadAmt(ele, i) {
        let value = ele.target.value;
        this.headData[i].Amount = value;
        console.log(this.headData);
    }
    //decimal content show purpose wrote below function
    decimalAllContent($event) {
        let value = Number($event.target.value);
        let data = value.toFixed(2);
        $event.target.value = data;
    }
    //get Amount Details
    getAmt(ele) {
        this.totalAmt = ele.target.value + '.00';
    }
    hideImage() {
        // document.getElementById("full").src = "";
        this.previewImg = '';
        this.PreviewDiv = false;
    }
    showImage(img) {
        var src = img;
        console.log(src);
        var largeSrc = src.replace('small', 'large');
        this.previewImg = src;
        this.PreviewDiv = true;
        // document.getElementById('full').src = largeSrc;
    }
    // Method to insert data into database through NestJS
    submit() {
    }
    addNewData() {
    }
    resetForm() {
    }
    //function executes when edit button clicked
    editClickHandler(info) {
        //return boolean value and toggle add to update button
        this.showButton = false;
        this.updateShow = true;
    }
    //function execute when delete button clicked
    delClickHandler(info) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want to delete Voucher No data",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#229954',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Cancelled', 'Your data is safe.', 'error');
            }
        });
    }
}
MultiVoucherComponent.ɵfac = function MultiVoucherComponent_Factory(t) { return new (t || MultiVoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_4__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_multi_voucher_service__WEBPACK_IMPORTED_MODULE_6__["MultiVoucherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_7__["SchemeAccountNoService"])); };
MultiVoucherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiVoucherComponent, selectors: [["app-multi-voucher"]], viewQuery: function MultiVoucherComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerhide = _t.first);
    } }, decls: 323, vars: 21, consts: [["style", "width: 270px;height: 335px;z-index: 1000;\nposition: absolute;margin-top: 14%;margin-left:51%", 4, "ngIf"], [1, "row"], [1, "col-md-9"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "solid"], [1, "col-sm-12", "col-md-2"], ["for", "voucherNo"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["type", "text", "name", "voucherNo", "placeholder", " ", "id", "voucherNo", "formControlName", "voucherNo", "disabled", "", 1, "form-control"], ["for", "voucherDate"], ["type", "text", "name", "voucherDate", "placeholder", " ", "id", "voucherDate", "formControlName", "voucherDate", "disabled", "", 1, "form-control"], ["for", "BRANCH"], [1, "required"], ["id", "BRANCH", "bindValue", "value", "formControlName", "BRANCH", "bindLabel", "label", "title", "Compulsory Selection", "placeholder", "Branch", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "SchemeType"], [1, "col-sm-2"], [1, "form-group", "input-group"], ["type", "text", "name", "SchemeType", "placeholder", " ", "id", "SchemeType", "formControlName", "SchemeType", "disabled", "", 1, "form-control"], ["for", "SchemeCode"], [1, "col-sm-12", "col-md-6"], ["type", "text", "name", "SchemeCode", "placeholder", " ", "id", "SchemeCode", "formControlName", "SchemeCode", "disabled", "", 1, "form-control"], ["for", "AccountNumber"], [1, "col-sm-6"], ["type", "text", "name", "AccountNumber", "placeholder", " ", "id", "AccountNumber", "formControlName", "AccountNumber", "disabled", "", 1, "form-control"], ["for", "TransactionMode"], ["type", "text", "name", "TransactionMode", "placeholder", " ", "id", "TransactionMode", "formControlName", "TransactionMode", "disabled", "", 1, "form-control"], ["for", "chequeno"], ["type", "text", "name", "chequeno", "placeholder", " ", "id", "chequeno", "formControlName", "chequeno", "disabled", "", 1, "form-control"], ["for", "voucheramount"], ["type", "text", "name", "voucheramount", "placeholder", " ", "id", "voucheramount", "formControlName", "voucheramount", "disabled", "", 1, "form-control"], [1, "col-sm-12", "col-md-4"], [1, "form-radio"], [1, "radio", "radio-inline"], ["type", "radio", "formControlName", "creditRadio", "name", "creditRadio"], [1, "helper"], ["for", "particulars"], ["type", "text", "name", "particulars", "placeholder", " ", "id", "particulars", "formControlName", "particulars", "disabled", "", 1, "form-control"], [1, "col-md-8"], ["for", "totaldebitamount"], [1, "col-md-2"], ["type", "text", "name", "totaldebitamount", "placeholder", " ", "id", "totaldebitamount", "formControlName", "totaldebitamount", "disabled", "", 1, "form-control"], ["for", "totalcreditamount"], ["type", "text", "name", "totalcreditamount", "placeholder", " ", "id", "totalcreditamount", "formControlName", "totalcreditamount", "disabled", "", 1, "form-control"], [1, "col-sm-12"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], [2, "width", "8%"], [1, "td_right"], ["formControlName", "acnotype", 3, "ngModel", "ngModelChange", "change"], ["formControlName", "acnocode", 3, "ngModel", "ngModelChange", "change"], [3, "change"], ["formControlName", "transCode", 3, "ngModel", "ngModelChange", "change"], ["type", "text", "name", "ChequeNo", "placeholder", " ", "id", "ChequeNo", "value", "", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", 1, "form-control", 2, "text-transform", "capitalize"], ["type", "text", "name", "fieldamount", "placeholder", " ", "id", "fieldamount", "value", "", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", 1, "form-control", 3, "keypress"], ["formControlName", "narration", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-info-circle", "errspan", 3, "click"], [1, "col-md-3", "col-sm-12", "col-xm-12"], [1, "transaction-item"], [1, "d-flex"], [1, "avatar", "bg-light-primary", "rounded", "float-start"], [1, "avatar-content"], [1, "fa", "fa-google-wallet", "field-icon"], [1, "transaction-percentage"], [1, "transaction-title", 2, "font-size", "12px"], [1, "fw-bolder", "transaction-title", "text-primary", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], ["aria-hidden", "true", 1, "fa", "fa-inr"], [1, "avatar", "bg-light-success", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "avatar", "bg-light-danger", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-danger", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "avatar", "bg-light-info", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-info", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "col-md"], [1, "transaction-title", 2, "font-size", "15px"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "15px"], [1, "user-avatar-section"], [1, "d-flex", "align-items-center", "flex-column"], ["height", "110", "width", "110", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], [1, "user-info", "text-center"], ["height", "50", "width", "110", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], [1, "info-container"], [1, "list-unstyled"], [1, "mb-75"], [1, "fw-bolder", "me-25"], [1, "badge", "bg-light-success"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [1, "table", "table-bordered"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 2, "display", "none", 3, "click"], ["triggerhide", ""], [2, "width", "270px", "height", "335px", "z-index", "1000", "position", "absolute", "margin-top", "14%", "margin-left", "51%"], ["width", "400", "height", "300", 3, "src"], [3, "value"], [3, "click"]], template: function MultiVoucherComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiVoucherComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Multi Voucher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Voucher Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Voucher Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Branch Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "sub", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_34_listener($event) { return ctx.ngBranchCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MultiVoucherComponent_ng_option_35_Template, 2, 2, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Scheme Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Scheme Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Transaction Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Cheque Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Voucher Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Debit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Particulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Total Debit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Total Credit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "table", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Scheme Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "A/C Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Transaction Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Cheque Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Paticulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "ng-select", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_149_listener($event) { return ctx.selectedCode = $event; })("change", function MultiVoucherComponent_Template_ng_select_change_149_listener() { return ctx.selectedSchemeCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, MultiVoucherComponent_ng_option_150_Template, 2, 2, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "ng-select", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_152_listener($event) { return ctx.selectedScheme = $event; })("change", function MultiVoucherComponent_Template_ng_select_change_152_listener() { return ctx.getIntroducer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, MultiVoucherComponent_ng_option_153_Template, 2, 3, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "ng-select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MultiVoucherComponent_Template_ng_select_change_155_listener() { return ctx.getVoucherData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, MultiVoucherComponent_ng_option_156_Template, 2, 3, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "ng-select", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_ng_select_ngModelChange_158_listener($event) { return ctx.selectedMode = $event; })("change", function MultiVoucherComponent_Template_ng_select_change_158_listener() { return ctx.changeMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, MultiVoucherComponent_ng_option_159_Template, 2, 3, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function MultiVoucherComponent_Template_input_keypress_163_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiVoucherComponent_Template_input_ngModelChange_165_listener($event) { return ctx.particulars = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_i_click_166_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](303); return _r6.show(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Day Opening Bal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Unpassed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Uneffected Clearing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " 0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Sanctions Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " 0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Temp. overdraft Amt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " 0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h6", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Cleared Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "After this voucher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "= ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MultiVoucherComponent_Template_img_mouseover_278_listener() { return ctx.showImage(ctx.customerImg); })("mouseout", function MultiVoucherComponent_Template_img_mouseout_278_listener() { return ctx.hideImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Ajit Sutar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MultiVoucherComponent_Template_img_mouseover_284_listener() { return ctx.showImage(ctx.signture); })("mouseout", function MultiVoucherComponent_Template_img_mouseout_284_listener() { return ctx.hideImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "ul", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "PAN ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "ADFE2323D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Contact:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "+91 7636456273");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "app-modal-basic", 91, 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "h4", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Narration Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_button_click_307_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](303); return _r6.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "perfect-scrollbar", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "table", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Paticulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](319, MultiVoucherComponent_tr_319_Template, 2, 1, "tr", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "button", 101, 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_Template_button_click_320_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](303); return _r6.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PreviewDiv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngBranchCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allSchemeCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.introducerACNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tranModeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.particulars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.DayOpBal, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Pass, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.Unpass, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ClearBalance, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.AfterVoucher, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.customerImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.signture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.narrationList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_10__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵr"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 20px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.transaction-item[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.bg-light-primary[_ngcontent-%COMP%] {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367F0 !important;\n}\n\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.357rem !important;\n}\n\n.float-start[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin-right: 1.2rem;\n}\n\n.avatar.bg-light-primary[_ngcontent-%COMP%] {\n  color: #7367F0 !important;\n}\n\n.avatar.bg-light-success[_ngcontent-%COMP%] {\n  color: #28C76F !important;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background-color: #C3C3C3;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n  color: #FFF;\n  display: inline-flex;\n  font-size: 1rem;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 600;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n}\n\n.avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 0.857rem;\n}\n\n.bg-light-success[_ngcontent-%COMP%] {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28C76F !important;\n}\n\n.bg-light-danger[_ngcontent-%COMP%] {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #EA5455 !important;\n}\n\n.transaction-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.errspan[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 21px;\n  margin-top: -20px;\n  position: relative;\n  z-index: 2;\n  color: red;\n}\n\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: white !important;\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vbXVsdGktdm91Y2hlci9tdWx0aS12b3VjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUNDO0VBQ0csVUFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBRTtFQUNFLFdBQUE7QUFHSjs7QUFBRTtFQUFXLG1CQUFBO0VBQW9CLFdBQUE7QUFLakM7O0FBRkU7RUFDRSxxQkFBQTtBQUtKOztBQUhBO0VBQ0Usd0JBQUE7QUFNRjs7QUFIQTtFQUNFLGFBQUE7RUFJQSxtQkFBQTtFQUlBLDhCQUFBO0FBTUY7O0FBSkE7RUFFRSx3QkFBQTtBQU1GOztBQUpBO0VBQ0UsZ0RBQUE7RUFDQSx5QkFBQTtBQU9GOztBQUxBO0VBQ0Usa0NBQUE7QUFRRjs7QUFOQTtFQUNFLHNCQUFBO0FBU0Y7O0FBUEE7RUFDRSxvQkFBQTtBQVVGOztBQVBBO0VBQ0UseUJBQUE7QUFVRjs7QUFSQTtFQUNFLHlCQUFBO0FBV0Y7O0FBVEE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBSUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBWUY7O0FBVkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWFGOztBQVhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFJQSxhQUFBO0VBSUEsdUJBQUE7RUFJQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFjRjs7QUFYQTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7QUFjRjs7QUFaQTtFQUNFLDhDQUFBO0VBQ0EseUJBQUE7QUFlRjs7QUFaQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWVGOztBQVhBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBY0Y7O0FBWEE7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FBY0YiLCJmaWxlIjoic3JjL2FwcC90aGVtZS90cmFuc2FjdGlvbi9tdWx0aS12b3VjaGVyL211bHRpLXZvdWNoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuIH1cclxuIC5yZXF1aXJlZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgfVxyXG5cclxuICBkaXYuc29saWQge2JvcmRlci1zdHlsZTogc29saWQ7cGFkZGluZzoyJX1cclxuXHJcblxyXG4gIC5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcbi50cmFuc2FjdGlvbi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5kLWZsZXgge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxufVxyXG4uYmctbGlnaHQtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMTUsMTAzLDI0MCwuMTIpIWltcG9ydGFudDtcclxuICBjb2xvcjogIzczNjdGMCFpbXBvcnRhbnQ7XHJcbn1cclxuLnJvdW5kZWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzU3cmVtIWltcG9ydGFudDtcclxufVxyXG4uZmxvYXQtc3RhcnQge1xyXG4gIGZsb2F0OiBsZWZ0IWltcG9ydGFudDtcclxufVxyXG4uY2FyZC10cmFuc2FjdGlvbiAudHJhbnNhY3Rpb24taXRlbSAuYXZhdGFyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcclxufVxyXG5cclxuLmF2YXRhci5iZy1saWdodC1wcmltYXJ5IHtcclxuICBjb2xvcjogIzczNjdGMCFpbXBvcnRhbnQ7XHJcbn1cclxuLmF2YXRhci5iZy1saWdodC1zdWNjZXNzIHtcclxuICBjb2xvcjogIzI4Qzc2RiFpbXBvcnRhbnQ7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzNDM0MzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uY2FyZC10cmFuc2FjdGlvbiAudHJhbnNhY3Rpb24taXRlbSAuYXZhdGFyIC5hdmF0YXItY29udGVudCB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG59XHJcbi5hdmF0YXIgLmF2YXRhci1jb250ZW50IHtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAuODU3cmVtO1xyXG59XHJcblxyXG4uYmctbGlnaHQtc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwxOTksMTExLC4xMikhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMjhDNzZGIWltcG9ydGFudDtcclxufVxyXG4uYmctbGlnaHQtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCw4NCw4NSwuMTIpIWltcG9ydGFudDtcclxuICBjb2xvcjogI0VBNTQ1NSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi10aXRsZXtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbn1cclxuXHJcbi5lcnJzcGFuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0gXHJcblxyXG4uZm9ybS1jb250cm9sOmRpc2FibGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiVoucherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multi-voucher',
                templateUrl: './multi-voucher.component.html',
                styleUrls: ['./multi-voucher.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_4__["SystemMasterParametersService"] }, { type: _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["OwnbranchMasterService"] }, { type: _multi_voucher_service__WEBPACK_IMPORTED_MODULE_6__["MultiVoucherService"] }, { type: _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_7__["SchemeAccountNoService"] }]; }, { triggerhide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


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

















class MultiVoucherModule {
}
MultiVoucherModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MultiVoucherModule });
MultiVoucherModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MultiVoucherModule_Factory(t) { return new (t || MultiVoucherModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["UserAuthInterceptor"],
            multi: true
        }, _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], _multi_voucher_service__WEBPACK_IMPORTED_MODULE_13__["MultiVoucherService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_14__["SchemeAccountNoService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__["MultiVoucherRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MultiVoucherModule, { declarations: [_multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__["MultiVoucherComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__["MultiVoucherRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatepickerModule"]] }); })();
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
                ],
                declarations: [_multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__["MultiVoucherComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["UserAuthInterceptor"],
                        multi: true
                    }, _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_11__["SystemMasterParametersService"], _shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], _multi_voucher_service__WEBPACK_IMPORTED_MODULE_13__["MultiVoucherService"], _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_14__["SchemeAccountNoService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/transaction/multi-voucher/multi-voucher.service.ts ***!
  \**************************************************************************/
/*! exports provided: MultiVoucherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiVoucherService", function() { return MultiVoucherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class MultiVoucherService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
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
    //insert voucher entyr
    insertVoucher(data) {
        return this.http.post(this.url + '/voucher', data);
    }
    //Get Head details using head
    getHeadDetails(data) {
        return this.http.post(this.url + '/voucher/intrestHead', data);
    }
    //get voucher pass and unpass data
    getVoucherPassAndUnpassData(data) {
        return this.http.post(this.url + '/voucher/PassUnpassData', data);
    }
    //check customer account close or not
    checkAccountCloseOrNot(data) {
        return this.http.post(this.url + '/voucher/checkAccountCloseDetails', data);
    }
}
MultiVoucherService.ɵfac = function MultiVoucherService_Factory(t) { return new (t || MultiVoucherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MultiVoucherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MultiVoucherService, factory: MultiVoucherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiVoucherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
}
SystemMasterParametersService.ɵfac = function SystemMasterParametersService_Factory(t) { return new (t || SystemMasterParametersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
SystemMasterParametersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SystemMasterParametersService, factory: SystemMasterParametersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemMasterParametersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=multi-voucher-multi-voucher-module.js.map