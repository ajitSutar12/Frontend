(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multi-voucher-multi-voucher-module"],{

/***/ "./node_modules/rxjs-compat/Observable.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs-compat/Observable.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
exports.Observable = rxjs_1.Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/Observable.js":
/*!*****************************************!*\
  !*** ./node_modules/rxjs/Observable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! rxjs-compat/Observable */ "./node_modules/rxjs-compat/Observable.js"));
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./src/app/shared/elements/transaction-mode.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/elements/transaction-mode.service.ts ***!
  \*************************************************************/
/*! exports provided: TransactionModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionModeService", function() { return TransactionModeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class TransactionModeService {
    getCharacters() {
        return this.cloneOptions(TransactionModeService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(TransactionModeService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(TransactionModeService.PLAYER_ONE);
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
TransactionModeService.PLAYER_ONE = [
    { value: '0', label: 'Deposit/Receipts' },
    { value: '1', label: 'Deposit Closing' },
    { value: '2', label: 'Credit Transfer' },
    { value: '3', label: 'Credit Transfer for Closing' }
];
TransactionModeService.ɵfac = function TransactionModeService_Factory(t) { return new (t || TransactionModeService)(); };
TransactionModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransactionModeService, factory: TransactionModeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionModeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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
            title: 'CRM Dashboard',
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
/* harmony import */ var _shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/elements/scheme-code.service */ "./src/app/shared/elements/scheme-code.service.ts");
/* harmony import */ var _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/elements/scheme-type.service */ "./src/app/shared/elements/scheme-type.service.ts");
/* harmony import */ var _shared_elements_agent_code_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/elements/agent-code.service */ "./src/app/shared/elements/agent-code.service.ts");
/* harmony import */ var _shared_elements_transaction_mode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/elements/transaction-mode.service */ "./src/app/shared/elements/transaction-mode.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");











function MultiVoucherComponent_button_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultiVoucherComponent_button_137_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiVoucherComponent_button_137_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MultiVoucherComponent {
    constructor(SchemeCodeService, SchemeTypeService, AgentCodeService, TransactionModeService) {
        this.SchemeCodeService = SchemeCodeService;
        this.SchemeTypeService = SchemeTypeService;
        this.AgentCodeService = AgentCodeService;
        this.TransactionModeService = TransactionModeService;
        this.dtExportButtonOptions = {};
        this.SchemeTypeOption = this.SchemeTypeService.getCharacters();
        this.selectedOption = '3';
        this.isDisabled = true;
        this.selectedCharacter = '3';
        this.timeLeft = 5;
        this.dataSub = null;
        this.autocompleteItems = ['AG', 'CA', 'CC', 'DS', 'GS', 'GL', 'IV', 'LN', 'PG', 'SB', 'SH', 'TD'];
        this.autocompleteItemsAsObjects = [
            { value: 'AG', id: 'Pigmy Agent(AG)' },
            { value: 'CA', id: 'Current Deposit(CA)' },
            { value: 'CC', id: 'Cash Credit(CC)' },
            { value: 'DS', id: 'Dispute Loan(DS)' },
            { value: 'GS', id: 'Anamat Account(GS)' },
            { value: 'GL', id: 'General Ledger(GL)' },
            { value: 'IV', id: 'Investment Account(IV)' },
            { value: 'LN', id: 'Term Loan(LN)' },
            { value: 'PG', id: 'Pigmy Deposit(PG)' },
            { value: 'SB', id: 'Savings Deposit(SB)' },
            { value: 'SH', id: 'Shares(SH)' },
            { value: 'TD', id: 'Term Deposit(TD)' }
        ];
        this.SchemeCodeOption = this.SchemeCodeService.getCharacters();
        this.selectedOption1 = '3';
        this.isDisabled1 = true;
        this.selectedCharacter1 = '3';
        this.timeLeft1 = 5;
        this.dataSub1 = null;
        this.autocompleteItems1 = ['40100', '40200', '40300', '40400'];
        this.autocompleteItemsAsObjects1 = [
            { value: '40100', id: 0 },
            { value: '40200', id: 1 },
            { value: '40300', id: 2 },
            { value: '40400', id: 3 },
        ];
        this.AccNoOption = this.AgentCodeService.getCharacters();
        this.selectedOption3 = '3';
        this.isDisabled3 = true;
        this.selectedCharacter3 = '3';
        this.timeLeft3 = 5;
        this.dataSub3 = null;
        this.autocompleteItems3 = ['1', '2', '3', '4'];
        this.autocompleteItemsAsObjects3 = [
            { value: '1', id: 0 },
            { value: '2', id: 1 },
            { value: '3', id: 2 },
            { value: '4', id: 3 },
        ];
        this.TransactionModeOption = this.TransactionModeService.getCharacters();
        this.selectedOption4 = '3';
        this.isDisabled4 = true;
        this.selectedCharacter4 = '3';
        this.timeLeft4 = 5;
        this.dataSub4 = null;
        this.autocompleteItems4 = ['0', '1', '2', '3'];
        this.autocompleteItemsAsObjects4 = [
            { value: '0', id: 'Deposit/Receipts' },
            { value: '1', id: 'Deposit Closing' },
            { value: '2', id: 'Credit Transfer' },
            { value: '3', id: 'Credit Transfer for Closing' }
        ];
        //variables for  add and update button
        this.showButton = true;
        this.updateShow = false;
        //variable for checkbox and radio button 
        this.isCredit = true;
        //Transaction Mode
        this.titleForSchemeType = false;
        this.transactioncreditMode = true;
        this.transactiondebitMode = false;
        //Select option for Transaction mode, scheme type 
        //object created to get data when row is clicked
        this.message = {
            voucherno: "",
            voucherdate: "",
            branchcode: "",
            SchemeType: "",
            SchemeCode: "",
            AccountNumber: "",
            TransactionMode: "",
            voucheramount: "",
            credit: "",
            debit: "",
            chequeno: "",
            particulars: "",
            totaldebitamount: "",
            totalcreditamount: "",
            dayopeningbalance: "",
            passed: "",
            unpassed: "",
            clearedbalance: "",
            afterthisvoucher: ""
        };
        this.amountDetails = {};
        this.isToken = true;
        this.jointAc = true;
        this.dormantAc = true;
        this.isSanctionOverDraft = true;
        this.isTemparoryOverDraft = true;
        this.isDrawingPower = false;
        this.isOverdueAmount = false;
        this.isOtherExpenses = false;
        this.sanctionLimit = false;
        this.isCheque = false;
        this.voucherAmount = true;
        this.totalAmount = true;
        this.isAmountDetails = false;
        this.isPanNo = true;
        this.dividendYear = false;
        this.isBranch = false;
    }
    //function executes when edit button clicked
    editClickHandler(info) {
        this.message.voucherno = info.voucherno;
        this.message.voucherdate = info.voucherdate;
        this.message.branchcode = info.branchcode;
        this.message.SchemeType = info.SchemeType;
        this.message.SchemeCode = info.SchemeCode;
        this.message.AccountNumber = info.AccountNumber;
        this.message.TransactionMode = info.TransactionMode;
        this.message.voucheramount = info.voucheramount;
        this.message.credit = info.credit;
        this.message.debit = info.debit;
        this.message.chequeno = info.chequeno;
        this.message.particulars = info.particulars;
        this.message.totaldebitamount = info.totaldebitamount;
        this.message.totalcreditamount = info.totalcreditamount;
        this.message.dayopeningbalance = info.dayopeningbalance;
        this.message.passed = info.passed;
        this.message.unpassed = info.unpassed;
        ;
        this.message.clearedbalance = info.clearedbalance;
        this.message.afterthisvoucher = info.afterthisvoucher;
        //code for radio button
        if (this.message.credit == "Yes") {
            this.isCredit = true; //return boolean value and display checked radio button
        }
        else {
            this.isCredit = false; //return boolean value and display unchecked radio button
        }
        //return boolean value and toggle add to update button
        this.showButton = false;
        this.updateShow = true;
    }
    //function execute when delete button clicked
    delClickHandler(info) {
        this.message.voucherno = info.voucherno;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want to delete Voucher No." + this.message.voucherno + "  data",
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
    ngOnInit() {
        this.dtExportButtonOptions = {
            ajax: 'fake-data/multi-voucher-entry.json',
            columns: [
                {
                    title: 'Action',
                    render: function (data, type, full) {
                        return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
                    }
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
            buttons: [
                'copy',
                'print',
                'excel',
                'csv'
            ],
            //row click handler code
            rowCallback: (row, data, index) => {
                const self = this;
                $('td', row).off('click');
                $('td', row).on('click', '#editbtn', () => {
                    self.editClickHandler(data);
                });
                $('td', row).on('click', '#delbtn', () => {
                    self.delClickHandler(data);
                });
                return row;
            }
        };
        this.amountDetails = {
            ajax: 'fake-data/amount-details.json',
            columns: [
                {
                    title: 'Action',
                    render: function (data, type, full) {
                        return '<button class="btn btn-outline-primary btn-sm" id="editbtn">Edit</button>' + ' ' + '<button id="delbtn" class="btn btn-outline-primary btn-sm">Delete</button>';
                    }
                },
                {
                    title: 'Receipt / Payment Head',
                    data: 'ReceiptPaymentHead'
                },
                {
                    title: 'Interest Date',
                    data: 'InterestDate'
                },
                {
                    title: 'Amount',
                    data: 'Amount'
                },
                {
                    title: 'Balance',
                    data: 'Balance'
                },
                {
                    title: 'Type',
                    data: 'Type'
                }
            ],
            dom: 'Bfrtip',
            buttons: [
                'copy',
                'print',
                'excel',
                'csv'
            ],
            //row click handler code
            rowCallback: (row, data, index) => {
                const self = this;
                $('td', row).off('click');
                $('td', row).on('click', '#editbtn', () => {
                    self.editClickHandler(data);
                });
                $('td', row).on('click', '#delbtn', () => {
                    self.delClickHandler(data);
                });
                return row;
            }
        };
        this.runTimer();
        this.dataSub = this.SchemeCodeService.loadCharacters().subscribe((options) => {
            this.characters = options;
        });
        this.dataSub1 = this.SchemeTypeService.loadCharacters().subscribe((options) => {
            this.characters = options;
        });
        this.dataSub3 = this.AgentCodeService.loadCharacters().subscribe((options) => {
            this.characters = options;
        });
        this.dataSub4 = this.TransactionModeService.loadCharacters().subscribe((options) => {
            this.characters = options;
        });
    }
    runTimer() {
        const timer = setInterval(() => {
            this.timeLeft -= 1;
            if (this.timeLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);
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
    changeFn() {
        this.titleForSchemeType = true;
        if (this.schemeTypeSelected == 'AG' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'DT' || this.transactionModeSelected == 'WP' || this.transactionModeSelected == 'WC' || this.transactionModeSelected == 'DTC')) {
            this.isToken = false;
            this.jointAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
        }
        else if (this.schemeTypeSelected == 'SB' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'DC' || this.transactionModeSelected == 'CTC')) {
            this.isToken = false;
        }
        else if (this.schemeTypeSelected == 'CC' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'DC')) {
            this.jointAc = false;
            this.dormantAc = false;
            this.isToken = false;
            this.isDrawingPower = true;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
            this.sanctionLimit = true;
            this.isAmountDetails = true;
        }
        else if (this.schemeTypeSelected == 'CC' && (this.transactionModeSelected == 'WP' || this.transactionModeSelected == 'WC' || this.transactionModeSelected == 'DTC' || this.transactionModeSelected == 'DIA')) {
            this.jointAc = false;
            this.dormantAc = false;
            this.isToken = true;
            this.isDrawingPower = true;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
            this.sanctionLimit = true;
            this.isAmountDetails = true;
        }
        else if (this.schemeTypeSelected == 'CC' && (this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'CTC' || this.transactionModeSelected == 'DT')) {
            this.jointAc = false;
            this.dormantAc = false;
            this.isToken = false;
            this.isDrawingPower = true;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
            this.sanctionLimit = true;
            this.isAmountDetails = true;
            this.isCheque = true;
        }
        else if (this.schemeTypeSelected == 'DS' && this.transactionModeSelected == 'DR') {
            this.jointAc = false;
            this.dormantAc = false;
            this.isToken = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isAmountDetails = true;
            this.sanctionLimit = true;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
        }
        else if (this.schemeTypeSelected == 'DS' && this.transactionModeSelected == 'CTCBT') {
            this.jointAc = false;
            this.dormantAc = false;
            this.isToken = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isAmountDetails = true;
            this.sanctionLimit = true;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
            this.isBranch = true;
        }
        else if (this.schemeTypeSelected == 'DS' && (this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'CTC' || this.transactionModeSelected == 'DT')) {
            this.jointAc = false;
            this.dormantAc = false;
            this.isToken = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isAmountDetails = true;
            this.sanctionLimit = true;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
            this.isCheque = true;
        }
        else if (this.schemeTypeSelected == 'DS' && this.transactionModeSelected == 'DC') {
            this.jointAc = false;
            this.dormantAc = false;
            this.isToken = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isAmountDetails = true;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
        }
        else if (this.schemeTypeSelected == 'DS' && this.transactionModeSelected == 'WP') {
            this.jointAc = false;
            this.dormantAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isAmountDetails = true;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
            this.isCheque = true;
            this.sanctionLimit = true;
        }
        else if (this.schemeTypeSelected == 'DS' && this.transactionModeSelected == 'DIA') {
            this.jointAc = false;
            this.dormantAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isAmountDetails = true;
            this.isOverdueAmount = true;
            this.sanctionLimit = true;
            this.voucherAmount = false;
            this.totalAmount = false;
        }
        else if (this.schemeTypeSelected == 'LN' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'DC')) {
            this.jointAc = false;
            this.dormantAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isToken = false;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
            this.sanctionLimit = true;
            this.isAmountDetails = true;
        }
        else if (this.schemeTypeSelected == 'LN' && (this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'CTC' || this.transactionModeSelected == 'DT')) {
            this.jointAc = false;
            this.dormantAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isToken = false;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
            this.sanctionLimit = true;
            this.isAmountDetails = true;
            this.isCheque = true;
        }
        else if (this.schemeTypeSelected == 'LN' && this.transactionModeSelected == 'WP') {
            this.jointAc = false;
            this.dormantAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
            this.sanctionLimit = true;
            this.isAmountDetails = true;
            this.isCheque = true;
        }
        else if (this.schemeTypeSelected == 'LN' && this.transactionModeSelected == 'DIA') {
            this.jointAc = false;
            this.dormantAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
            this.sanctionLimit = true;
            this.isAmountDetails = true;
        }
        else if (this.schemeTypeSelected == 'LN' && this.transactionModeSelected == 'CTCBT') {
            this.jointAc = false;
            this.dormantAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isToken = false;
            this.isOverdueAmount = true;
            this.isOtherExpenses = true;
            this.sanctionLimit = true;
            this.isAmountDetails = true;
            this.isBranch = true;
        }
        else if (this.schemeTypeSelected == 'SH' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'CT')) {
            this.jointAc = false;
            this.dormantAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isToken = false;
            this.isPanNo = false;
        }
        else if (this.schemeTypeSelected == 'SH' && (this.transactionModeSelected == 'WP' || this.transactionModeSelected == 'DT')) {
            this.jointAc = false;
            this.dormantAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isPanNo = false;
        }
        else if (this.schemeTypeSelected == 'SH' && this.transactionModeSelected == 'WD') {
            this.jointAc = false;
            this.dormantAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isPanNo = false;
            this.dividendYear = true;
            this.isAmountDetails = true;
        }
        else if (this.schemeTypeSelected == 'SH' && this.transactionModeSelected == 'DTD') {
            this.jointAc = false;
            this.dormantAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isAmountDetails = true;
        }
        else if (this.schemeTypeSelected == 'GS' && (this.transactionModeSelected == 'DR' || this.transactionModeSelected == 'CT' || this.transactionModeSelected == 'WP' || this.transactionModeSelected == 'DT')) {
            this.jointAc = false;
            this.dormantAc = false;
            this.isSanctionOverDraft = false;
            this.isTemparoryOverDraft = false;
            this.isToken = false;
        }
        else {
            this.isToken = true;
            this.jointAc = true;
            this.dormantAc = true;
            this.isSanctionOverDraft = true;
            this.isTemparoryOverDraft = true;
            this.isDrawingPower = false;
            this.isOverdueAmount = false;
            this.isOtherExpenses = false;
            this.sanctionLimit = false;
            this.isAmountDetails = false;
            this.isCheque = false;
            this.voucherAmount = true;
            this.totalAmount = true;
            this.isPanNo = true;
            this.dividendYear = false;
            this.isBranch = false;
        }
    }
}
MultiVoucherComponent.ɵfac = function MultiVoucherComponent_Factory(t) { return new (t || MultiVoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_2__["SchemeCodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_3__["SchemeTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_agent_code_service__WEBPACK_IMPORTED_MODULE_4__["AgentCodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_mode_service__WEBPACK_IMPORTED_MODULE_5__["TransactionModeService"])); };
MultiVoucherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiVoucherComponent, selectors: [["app-multi-voucher"]], decls: 146, vars: 33, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [2, "float", "right"], [1, "required"], [1, "card-block"], [1, "form-material"], [1, "col-sm"], [1, "form-group", "form-primary", "form-static-label"], ["type", "text", "name", "voucherno", 1, "form-control", 3, "value"], [1, "form-bar"], [1, "float-label"], ["type", "text", "onfocus", "(this.type='date')", "id", "date", "name", "voucherdate", 1, "form-control", 3, "value"], ["type", "text", "name", "branchcode", "disabled", "", 1, "form-control", 3, "value"], ["name", "SchemeType", "placeholder", "Scheme Type *", "required", "", 3, "ngClass", "options", "multiple"], ["name", "SchemeCode", "placeholder", "Scheme Code *", "required", "", 3, "ngClass", "options", "multiple"], ["name", "AccountNumber", "placeholder", "Account No *", "required", "", 3, "ngClass", "options", "multiple"], ["name", "TransactionMode", "placeholder", "Transaction Mode *", "required", "", 3, "ngClass", "options", "multiple"], ["type", "text", "name", "voucheramount", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", "required", "", 1, "form-control", 3, "value"], [1, "form-radio"], [1, "radio", "radio-inline"], ["type", "radio", "name", "radio", 3, "checked"], [1, "helper"], [1, "col-sm-1"], ["type", "text", "name", "chequeno", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", 1, "form-control", 3, "value"], ["type", "text", "name", "", "pattern", "^[0-9]+$", "title", "Input allowed only  0-9", 1, "form-control"], [1, "form-group", "form-default", "form-static-label"], ["name", "AC_TADDR1", "pattern", "^[A-Za-z\\./ -]+$", "title", "Input allowed only  A-Z a-z  - / . (Space)", 1, "form-control"], ["type", "text", "name", "", "value", "", 1, "form-control", 3, "value"], ["type", "text", "name", "totaldebitamount", 1, "form-control", 3, "value"], ["type", "text", "name", "dayopeningbalance", 1, "form-control", 3, "value"], ["type", "text", "name", "passed", 1, "form-control", 3, "value"], ["type", "text", "name", "unpassed", 1, "form-control", 3, "value"], ["type", "text", "name", "clearedbalance", 1, "form-control", 3, "value"], ["type", "text", "name", "afterthisvoucher", 1, "form-control", 3, "value"], ["class", "btn btn-primary ripple light", 4, "ngIf"], ["class", "btn btn-primary ripple light", 3, "click", 4, "ngIf"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 2, "width", "100%", 3, "dtOptions"], [1, "btn", "btn-primary", "ripple", "light"], [1, "btn", "btn-primary", "ripple", "light", 3, "click"]], template: function MultiVoucherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Multi Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ": Required Fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Voucher No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Voucher Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Branch Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ng-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "ng-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Voucher Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Debit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Cheque No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Particulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Total Debit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Total Credit Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Day Opening Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Unpassed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Cleared Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "After this Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, MultiVoucherComponent_button_136_Template, 2, 0, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, MultiVoucherComponent_button_137_Template, 2, 0, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.voucherno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.voucherdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.branchcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx.SchemeTypeOption)("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.SchemeType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx.SchemeCodeOption)("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.SchemeCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx.AccNoOption)("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.AccountNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "ng-select")("options", ctx.TransactionModeOption)("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.TransactionMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.voucheramount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isCredit == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isCredit == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.chequeno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.totaldebitamount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.totalcreditamount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.dayopeningbalance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.passed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.unpassed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.clearedbalance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.message.afterthisvoucher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtExportButtonOptions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vbXVsdGktdm91Y2hlci9tdWx0aS12b3VjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vbXVsdGktdm91Y2hlci9tdWx0aS12b3VjaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiVoucherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multi-voucher',
                templateUrl: './multi-voucher.component.html',
                styleUrls: ['./multi-voucher.component.scss'],
            }]
    }], function () { return [{ type: _shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_2__["SchemeCodeService"] }, { type: _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_3__["SchemeTypeService"] }, { type: _shared_elements_agent_code_service__WEBPACK_IMPORTED_MODULE_4__["AgentCodeService"] }, { type: _shared_elements_transaction_mode_service__WEBPACK_IMPORTED_MODULE_5__["TransactionModeService"] }]; }, null); })();


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
/* harmony import */ var _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/elements/scheme-type.service */ "./src/app/shared/elements/scheme-type.service.ts");
/* harmony import */ var _shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/elements/scheme-code.service */ "./src/app/shared/elements/scheme-code.service.ts");
/* harmony import */ var _shared_elements_agent_code_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/elements/agent-code.service */ "./src/app/shared/elements/agent-code.service.ts");
/* harmony import */ var _shared_elements_transaction_mode_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/elements/transaction-mode.service */ "./src/app/shared/elements/transaction-mode.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");















class MultiVoucherModule {
}
MultiVoucherModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MultiVoucherModule });
MultiVoucherModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MultiVoucherModule_Factory(t) { return new (t || MultiVoucherModule)(); }, providers: [_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_6__["SchemeTypeService"], _shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_7__["SchemeCodeService"], _shared_elements_agent_code_service__WEBPACK_IMPORTED_MODULE_8__["AgentCodeService"], _shared_elements_transaction_mode_service__WEBPACK_IMPORTED_MODULE_9__["TransactionModeService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__["MultiVoucherRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_12__["SelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MultiVoucherModule, { declarations: [_multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__["MultiVoucherComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__["MultiVoucherRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_12__["SelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiVoucherModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _multi_voucher_routing_module__WEBPACK_IMPORTED_MODULE_4__["MultiVoucherRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_12__["SelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
                ],
                declarations: [_multi_voucher_component__WEBPACK_IMPORTED_MODULE_3__["MultiVoucherComponent"]],
                providers: [_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_6__["SchemeTypeService"], _shared_elements_scheme_code_service__WEBPACK_IMPORTED_MODULE_7__["SchemeCodeService"], _shared_elements_agent_code_service__WEBPACK_IMPORTED_MODULE_8__["AgentCodeService"], _shared_elements_transaction_mode_service__WEBPACK_IMPORTED_MODULE_9__["TransactionModeService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=multi-voucher-multi-voucher-module.js.map