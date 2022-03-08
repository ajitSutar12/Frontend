(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voucher-entry-voucher-entry-module"],{

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

/***/ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/dropdownService/scheme-code-dropdown.service.ts ***!
  \************************************************************************/
/*! exports provided: SchemeCodeDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeCodeDropdownService", function() { return SchemeCodeDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class SchemeCodeDropdownService {
    constructor(http) {
        this.http = http;
        this.schemeCodeObject = new Array();
        this.schemeObject = new Array();
        // // scheme-parameters";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getSchemeCodeList(scheme) {
        this.schemeCodeObject = [];
        return this.http.get(this.url + '/scheme-parameters/' + scheme)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_APPL, id: element.S_ACNOTYPE };
                this.schemeCodeObject.push(obj);
            });
            return this.schemeCodeObject;
        }));
    }
    getAllSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getAllSchemeList1() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            console.log('in service', this.schemeObject);
            return this.schemeObject;
        }));
    }
    getTermDepositSchemeRD() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/term/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositeScheme() {
        return this.http.get(this.url + '/scheme-parameters/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_ACNOTYPE + ' ' + element.S_APPL, value: element.id };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTdReceiptScheme() {
        return this.http.get(this.url + '/scheme-parameters/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.RECEIPT_TYPE, value: element.id };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getAllSchemeListINT() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/interest')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
}
SchemeCodeDropdownService.ɵfac = function SchemeCodeDropdownService_Factory(t) { return new (t || SchemeCodeDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SchemeCodeDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchemeCodeDropdownService, factory: SchemeCodeDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeCodeDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/elements/scheme-type.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/elements/scheme-type.service.ts ***!
  \********************************************************/
/*! exports provided: SchemeTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeTypeService", function() { return SchemeTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class SchemeTypeService {
    getCharacters() {
        return this.cloneOptions(SchemeTypeService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(SchemeTypeService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(SchemeTypeService.PLAYER_ONE);
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
SchemeTypeService.PLAYER_ONE = [
    { value: 'AG', label: 'Pigmy Agent(AG)' },
    { value: 'CA', label: 'Current Deposit(CA)' },
    { value: 'CC', label: 'Cash Credit(CC)' },
    { value: 'DS', label: 'Dispute Loan(DS)' },
    { value: 'GS', label: 'Anamat Account(GS)' },
    { value: 'GL', label: 'General Ledger(GL)' },
    { value: 'IV', label: 'Investment Account(IV)' },
    { value: 'LN', label: 'Term Loan(LN)' },
    { value: 'PG', label: 'Pigmy Deposit(PG)' },
    { value: 'SB', label: 'Savings Deposit(SB)' },
    { value: 'SH', label: 'Shares(SH)' },
    { value: 'TD', label: 'Term Deposit(TD)' },
    { value: 'LK', label: 'Locker(LK)' }
];
SchemeTypeService.ɵfac = function SchemeTypeService_Factory(t) { return new (t || SchemeTypeService)(); };
SchemeTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchemeTypeService, factory: SchemeTypeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeTypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/elements/transaction-cash-mode.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/elements/transaction-cash-mode.service.ts ***!
  \******************************************************************/
/*! exports provided: TransactionCashModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionCashModeService", function() { return TransactionCashModeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class TransactionCashModeService {
    getCharacters() {
        return this.cloneOptions(TransactionCashModeService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(TransactionCashModeService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(TransactionCashModeService.PLAYER_ONE);
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
TransactionCashModeService.PLAYER_ONE = [
    { value: 'DR', label: 'Deposit/Receipts' },
    { value: 'DC', label: 'Deposit Closing' },
    { value: 'WP', label: 'Withdrawals / Payments' },
    { value: 'WC', label: 'Withdrawals for Closing' },
    { value: 'WD', label: 'Withdrawals Dividend' },
    { value: 'CIOA', label: 'Credit Interest On Account' },
    { value: 'WI', label: 'Withdrawals Interest' }
];
TransactionCashModeService.ɵfac = function TransactionCashModeService_Factory(t) { return new (t || TransactionCashModeService)(); };
TransactionCashModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransactionCashModeService, factory: TransactionCashModeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionCashModeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/elements/transaction-transfer-mode.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/elements/transaction-transfer-mode.service.ts ***!
  \**********************************************************************/
/*! exports provided: TransactionTransferModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionTransferModeService", function() { return TransactionTransferModeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class TransactionTransferModeService {
    getCharacters() {
        return this.cloneOptions(TransactionTransferModeService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(TransactionTransferModeService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(TransactionTransferModeService.PLAYER_ONE);
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
TransactionTransferModeService.PLAYER_ONE = [
    { value: 'CT', label: 'Credit Transfer' },
    { value: 'CTC', label: 'Credit Transfer for Closing' },
    { value: 'DT', label: 'Debit Transfer' },
    { value: 'DTC', label: 'Debit Transfer for Closing' },
    { value: 'DIA', label: 'Debit Interest on Account' },
    { value: 'CTCBT', label: ' Credit Transfer for Closing with Branch Transfer' },
    { value: 'DTD', label: 'Debit Transfer Dividend' },
    { value: 'CIOA', label: 'Credit Interest On Account' },
    { value: 'DTI', label: 'Debit Transfer Interest' },
];
TransactionTransferModeService.ɵfac = function TransactionTransferModeService_Factory(t) { return new (t || TransactionTransferModeService)(); };
TransactionTransferModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransactionTransferModeService, factory: TransactionTransferModeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionTransferModeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/saving-master/saving-master.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/master/customer/saving-master/saving-master.service.ts ***!
  \******************************************************************************/
/*! exports provided: SavingMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingMasterService", function() { return SavingMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class SavingMasterService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/saving-master/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/saving-master/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getData() {
        return this.http.get(this.url + '/saving-master/alldata').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getSchemeCodeList(scheme) {
        return this.http.get(this.url + '/scheme-parameters/' + scheme).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getCustomerIDMasterList() {
        return this.http.get(this.url + '/customer-id').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getcategoryList() {
        return this.http.get(this.url + '/category-master').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getOperationMasterList() {
        return this.http.get(this.url + '/operation-master').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getMinimumBalanceMasterList() {
        return this.http.get(this.url + '/minimum-balance-master').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getIntrestCategoaryMasterList() {
        return this.http.get(this.url + '/interest-category-master').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getcityList() {
        return this.http.get(this.url + '/city-master').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getOwnbranchList() {
        return this.http.get(this.url + '/own-branch-master').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getAllSchemeList() {
        return this.http.get(this.url + '/scheme-parameters/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getSavingSchemeList1(schemeid) {
        return this.http.get(this.url + '/saving-master/scheme/' + schemeid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getShareSchemeList1(schemeid) {
        return this.http.get(this.url + '/share-master/scheme/' + schemeid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getCurrentAccountSchemeList1(schemeid) {
        return this.http.get(this.url + '/current-account-master/scheme/' + schemeid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getTermLoanSchemeList1(schemeid) {
        return this.http.get(this.url + '/term-loan-master/scheme/' + schemeid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getTermDepositSchemeList1(schemeid) {
        return this.http.get(this.url + '/term-deposits-master/scheme/' + schemeid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getDisputeLoanSchemeList1(schemeid) {
        return this.http.get(this.url + '/dispute-loan-master/scheme/' + schemeid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getCashCreditSchemeList1(schemeid) {
        return this.http.get(this.url + '/cash-credit-master/scheme/' + schemeid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getAnamatSchemeList1(schemeid) {
        return this.http.get(this.url + '/anamat-gsm/scheme/' + schemeid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getPigmyAccountSchemeList1(schemeid) {
        return this.http.get(this.url + '/pigmy-account-master/scheme/' + schemeid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getPigmyAgentSchemeList1(schemeid) {
        return this.http.get(this.url + '/pigmy-agent-master/scheme/' + schemeid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getInvestmentSchemeList1(schemeid) {
        return this.http.get(this.url + '/pigmy-agent-master/scheme/' + schemeid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/saving-master/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/saving-master/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //approve master
    approve(data) {
        return this.http.post(this.url + '/saving-master/approve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //reject master
    reject(data) {
        return this.http.post(this.url + '/saving-master/reject', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
SavingMasterService.ɵfac = function SavingMasterService_Factory(t) { return new (t || SavingMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
SavingMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SavingMasterService, factory: SavingMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavingMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/voucher-entry/voucher-entry-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/transaction/voucher-entry/voucher-entry-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: VoucherEntryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherEntryRoutingModule", function() { return VoucherEntryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _voucher_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voucher-entry.component */ "./src/app/theme/transaction/voucher-entry/voucher-entry.component.ts");





const routes = [
    {
        path: '',
        component: _voucher_entry_component__WEBPACK_IMPORTED_MODULE_2__["VoucherEntryComponent"],
        data: {
            title: 'voucher-entry',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class VoucherEntryRoutingModule {
}
VoucherEntryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VoucherEntryRoutingModule });
VoucherEntryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VoucherEntryRoutingModule_Factory(t) { return new (t || VoucherEntryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VoucherEntryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoucherEntryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/voucher-entry/voucher-entry.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/transaction/voucher-entry/voucher-entry.component.ts ***!
  \****************************************************************************/
/*! exports provided: VoucherEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherEntryComponent", function() { return VoucherEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/elements/transaction-cash-mode.service */ "./src/app/shared/elements/transaction-cash-mode.service.ts");
/* harmony import */ var _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/elements/transaction-transfer-mode.service */ "./src/app/shared/elements/transaction-transfer-mode.service.ts");
/* harmony import */ var _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/elements/scheme-type.service */ "./src/app/shared/elements/scheme-type.service.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _voucher_entry_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./voucher-entry.service */ "./src/app/theme/transaction/voucher-entry/voucher-entry.service.ts");
/* harmony import */ var _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../master/customer/saving-master/saving-master.service */ "./src/app/theme/master/customer/saving-master/saving-master.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");



















const _c0 = ["triggerhide"];
function VoucherEntryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.previewImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VoucherEntryComponent_ng_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.label, "");
} }
function VoucherEntryComponent_ng_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r12.S_ACNOTYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.S_ACNOTYPE);
} }
function VoucherEntryComponent_ng_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r13.S_APPL, " ", item_r13.S_NAME, "");
} }
function VoucherEntryComponent_ng_option_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r14.AC_NO, " ", item_r14.AC_NAME, "");
} }
function VoucherEntryComponent_ng_option_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r15.id, " ", item_r15.value, "");
} }
const _c1 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function VoucherEntryComponent_div_85_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cheque No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cheque Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function VoucherEntryComponent_div_85_ng_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r18.name, "");
} }
function VoucherEntryComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoucherEntryComponent_div_85_div_1_Template, 15, 2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ng-select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VoucherEntryComponent_div_85_ng_option_10_Template, 2, 2, "ng-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.showChequeDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.bankName);
} }
function VoucherEntryComponent_div_102_tr_18_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_div_102_tr_18_td_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.IntersetHeadDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1))("ngModel", ctx_r22.IntersetHeadDate);
} }
function VoucherEntryComponent_div_102_tr_18_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function VoucherEntryComponent_div_102_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VoucherEntryComponent_div_102_tr_18_td_3_Template, 2, 3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VoucherEntryComponent_div_102_tr_18_td_4_Template, 1, 0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VoucherEntryComponent_div_102_tr_18_Template_input_keypress_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); return $event.charCode >= 48 && $event.charCode < 58; })("keyup", function VoucherEntryComponent_div_102_tr_18_Template_input_keyup_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r21 = ctx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.getInputHeadAmt($event, i_r21); })("focusout", function VoucherEntryComponent_div_102_tr_18_Template_input_focusout_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.decimalAllContent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r20.DESCRIPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r20.INTEREST_DATE_INPUT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r20.INTEREST_DATE_INPUT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r20.DRCR_APPLICABLE == "C" ? "Cr" : "Dr");
} }
function VoucherEntryComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Head");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Interset Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Interset Amt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VoucherEntryComponent_div_102_tr_18_Template, 12, 4, "tr", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.headData);
} }
function VoucherEntryComponent_tr_278_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_tr_278_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const item_r30 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.getNarration(item_r30.NARRATION); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r30.NARRATION, " ");
} }
class VoucherEntryComponent {
    constructor(TransactionCashModeService, TransactionTransferModeService, SchemeTypeService, ownbranchMasterService, _SchemeCodeDropdown, _service, savingMasterService, fb, router) {
        this.TransactionCashModeService = TransactionCashModeService;
        this.TransactionTransferModeService = TransactionTransferModeService;
        this.SchemeTypeService = SchemeTypeService;
        this.ownbranchMasterService = ownbranchMasterService;
        this._SchemeCodeDropdown = _SchemeCodeDropdown;
        this._service = _service;
        this.savingMasterService = savingMasterService;
        this.fb = fb;
        this.router = router;
        this.branchCode = null;
        this.branch_codeList = null;
        this.allScheme = new Array(); //from schme master
        this.Pass = 0;
        this.Unpass = 0;
        this.ClearBalance = 0;
        this.AfterVoucher = 0;
        this.InputHeadAmt = 0.00;
        //object created to get data when row is clicked
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
        //////////////////////////////////////////////////////
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
        this.bankName = [
            {
                name: 'Bank of India',
                id: 1
            },
            {
                name: 'State bank of India',
                id: 2
            }
        ];
        this.isture = true;
        this.showChequeDetails = false;
        this.headShow = false;
        this.customerImg = '../../../../assets/images/user-card/img-round4.jpg';
        this.signture = '../../../../assets/sign/signture.jpg';
        this.PreviewDiv = false;
    }
    ngOnInit() {
        this.angForm = this.fb.group({
            branch_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            temp_over_draft: [''],
            over_draft: [''],
            token: [''],
            particulars: [''],
            total_amt: [''],
            amt: [''],
            slip_no: [''],
            tran_mode: [''],
            account_no: [''],
            scheme: [''],
            scheme_type: [''],
            date: [''],
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('cash'),
            chequeDate: [''],
            chequeNo: [''],
            bank: [''],
            Intdate: ['']
        });
        //Day opening Amount
        this.DayOpBal = 1000;
        // get session branch data
        let user = JSON.parse(localStorage.getItem('user'));
        this.type = 'cash';
        this.tranModeList = this.TranModeCash;
        //get syspara details
        this._service.getSysParaData().subscribe(data => {
            debugger;
            // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
            this.date = data[0].CURRENT_DATE;
            console.log(this.date);
        });
        //branch List
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
    }
    selectedSchemeCode() {
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
                debugger;
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
    getIntroducer() {
        this.introducerACNo = [];
        this.obj = [this.selectedScheme.id, this.selectedBranch];
        switch (this.selectedCode) {
            case 'SB':
                this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'SH':
                this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'CA':
                this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'LN':
                this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'TD':
                this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'DS':
                this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'CC':
                this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'GS':
                this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'PG':
                this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'AG':
                this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
            case 'IV':
                this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
                    this.introducerACNo = data;
                });
                break;
        }
    }
    //Transaction mode select
    transactionMode(mode) {
        this.type = mode;
        let object = this.TranData.find(t => t.key === this.selectedCode);
        if (this.type == 'cash') {
            this.tranModeList = [];
            object.data.cash.forEach(ele => {
                debugger;
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
    }
    //get Narration Details 
    getNarration(ele) {
        this.particulars = ele;
        let el = this.triggerhide.nativeElement;
        el.click();
    }
    //submit Form
    submit() {
        debugger;
        let user = JSON.parse(localStorage.getItem('user'));
        let obj = this.angForm.value;
        obj['user'] = user;
        obj['InputHead'] = this.headData;
        console.log(obj);
        this._service.insertVoucher(obj).subscribe(data => {
            this.getVoucherData();
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Success!', 'Voucher update Successfully !', 'success');
            this.angForm.controls['temp_over_draft'].reset();
            this.angForm.controls['over_draft'].reset();
            this.angForm.controls['token'].reset();
            this.angForm.controls['particulars'].reset();
            this.angForm.controls['total_amt'].reset();
            this.angForm.controls['amt'].reset();
            this.angForm.controls['slip_no'].reset();
            this.angForm.controls['tran_mode'].reset();
            this.angForm.controls['account_no'].reset();
            this.angForm.controls['scheme'].reset();
            this.angForm.controls['scheme_type'].reset();
            this.angForm.controls['type'].reset();
            this.angForm.controls['chequeDate'].reset();
            this.angForm.controls['chequeDate'].reset();
            this.angForm.controls['chequeNo'].reset();
            this.angForm.controls['bank'].reset();
            this.headData = [];
            this.headShow = false;
        }, err => {
            console.log(err);
        });
    }
    //get Amount Details
    getAmt(ele) {
        this.totalAmt = ele.target.value + '.00';
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
    //get customer today voucher data
    getVoucherData() {
        debugger;
        let customer = this.angForm.controls['account_no'].value;
        let obj = {
            'customer': customer.BANKACNO,
            'date': this.date
        };
        //Check Account Close or not
        let Obj = {
            'customer_ACNO': customer.BANKACNO,
            'type': this.selectedCode
        };
        this._service.checkAccountCloseOrNot(Obj).subscribe(data => {
            if (data == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'Access dined Account Close Already!', 'error');
                return 0;
            }
        }, err => {
            console.log(err);
        });
        this._service.getVoucherPassAndUnpassData(obj).subscribe(data => {
            debugger;
            let passType = '';
            let unpassType = '';
            //DayOfOpening 
            this.ClearBalance = this.ClearBalance + this.DayOpBal;
            //Pass condition checked
            if (data.passObj.pass == undefined) {
                this.Pass = 0;
                passType = 'Cr';
            }
            else {
                this.Pass = data.passObj.pass;
                passType = data.passObj.type;
            }
            //Unpass condition checked
            if (data.unpassObj.UnPass == undefined) {
                this.Unpass = 0;
                let unpassType = 'Cr';
            }
            else {
                this.Unpass = data.unpassObj.UnPass;
                let unpassType = data.unpassObj.type;
            }
            if (passType == 'Cr') {
                this.ClearBalance = this.Pass + this.ClearBalance;
            }
            else {
                this.ClearBalance = this.Pass - this.ClearBalance;
            }
            if (unpassType == 'Cr') {
                this.ClearBalance = this.Unpass + this.ClearBalance;
            }
            else {
                this.ClearBalance = this.Unpass - this.ClearBalance;
            }
            // this.ClearBalance = this.DayOpBal + this.Pass + this.Unpass;
            this.AfterVoucher = this.ClearBalance;
        }, err => {
            console.log(err);
        });
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
}
VoucherEntryComponent.ɵfac = function VoucherEntryComponent_Factory(t) { return new (t || VoucherEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_4__["TransactionCashModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_5__["TransactionTransferModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_6__["SchemeTypeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_7__["OwnbranchMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_voucher_entry_service__WEBPACK_IMPORTED_MODULE_9__["VoucherEntryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_10__["SavingMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"])); };
VoucherEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoucherEntryComponent, selectors: [["app-voucher-entry"]], viewQuery: function VoucherEntryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.triggerhide = _t.first);
    } }, decls: 282, vars: 29, consts: [["style", "width: 270px;height: 335px;z-index: 1000;\n      position: absolute;margin-top: 14%;margin-left:51%", 4, "ngIf"], [1, "row"], [1, "col-md-9"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "solid"], [1, "col-sm-12", "col-md-2"], ["for", "AC_BRANCH"], [1, "required"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["formControlName", "branch_code", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-4"], [1, "form-radio"], [1, "radio", "radio-inline"], ["type", "radio", "name", "DEBIT", "value", "cash", "formControlName", "type", 3, "checked", "change"], [1, "helper"], ["type", "radio", "name", "DEBIT", "value", "transfer", "formControlName", "type", 3, "change"], [1, "col-md-1"], [1, "col-sm-12", "col-md-1"], ["for", "AC_EXPDT"], [1, "col-md-2"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "date", "disabled", "", 1, "form-control", 3, "bsConfig", "ngModel", "isDisabled", "ngModelChange"], [1, "col-sm-2"], ["formControlName", "scheme_type", 3, "ngModel", "ngModelChange", "change"], [1, "col-sm-12", "col-md-6"], ["formControlName", "scheme", 3, "ngModel", "ngModelChange", "change"], [1, "col-sm-6"], ["formControlName", "account_no", 3, "change"], ["formControlName", "tran_mode", 3, "ngModel", "ngModelChange", "change"], [4, "ngIf"], ["for", "AC_PARTICULAR"], ["type", "text", "name", "AC_PARTICULAR", "placeholder", " ", "id", "AC_PARTICULAR", "value", "", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "required", "", "formControlName", "amt", 1, "form-control", 2, "text-transform", "capitalize", 3, "keypress", "keyup"], ["type", "text", "name", "AC_PARTICULAR", "placeholder", " ", "id", "AC_PARTICULAR", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "required", "", "formControlName", "total_amt", "disabled", "", 1, "form-control", 2, "text-transform", "capitalize", "font-size", "15px", 3, "ngModel", "ngModelChange"], ["class", "row", 4, "ngIf"], [1, "col-md-5"], ["formControlName", "particulars", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-info-circle", "errspan", 3, "click"], ["type", "text", "formControlName", "token", 1, "form-control", 3, "keypress"], [1, "col-md-12", "text-center"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "col-md-3", "col-sm-12", "col-xm-12"], [1, "transaction-item"], [1, "d-flex"], [1, "avatar", "bg-light-primary", "rounded", "float-start"], [1, "avatar-content"], [1, "fa", "fa-google-wallet", "field-icon"], [1, "transaction-percentage"], [1, "transaction-title", 2, "font-size", "12px"], [1, "fw-bolder", "transaction-title", "text-primary", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], ["aria-hidden", "true", 1, "fa", "fa-inr"], [1, "avatar", "bg-light-success", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "avatar", "bg-light-danger", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-danger", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "avatar", "bg-light-info", "rounded", "float-start"], [1, "fw-bolder", "transaction-title", "text-info", 2, "margin-left", "auto", "order", "2", "font-size", "12px"], [1, "col-md"], [1, "transaction-title", 2, "font-size", "15px"], [1, "fw-bolder", "transaction-title", "text-success", 2, "margin-left", "auto", "order", "2", "font-size", "15px"], [1, "user-avatar-section"], [1, "d-flex", "align-items-center", "flex-column"], ["height", "110", "width", "110", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], [1, "user-info", "text-center"], ["height", "50", "width", "110", "alt", "User avatar", 1, "img-fluid", "rounded", "mt-3", "mb-2", 3, "src", "mouseover", "mouseout"], [1, "info-container"], [1, "list-unstyled"], [1, "mb-75"], [1, "fw-bolder", "me-25"], [1, "badge", "bg-light-success"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [2, "overflow-y", "auto"], [1, "table", "table-bordered"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 2, "display", "none", 3, "click"], ["triggerhide", ""], [2, "width", "270px", "height", "335px", "z-index", "1000", "position", "absolute", "margin-top", "14%", "margin-left", "51%"], ["width", "400", "height", "300", 3, "src"], [3, "value"], ["for", ""], [1, "col-md-6"], ["formControlName", "bank"], ["for", "ChequeNo"], ["type", "text", "name", "ChequeNo", "placeholder", " ", "id", "ChequeNo", "value", "", "title", "Input allowed only  A-Z a-z 0-9 - / . (Space)", "required", "", "formControlName", "chequeNo", 1, "form-control", 2, "text-transform", "capitalize"], ["for", "ChequeDate"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "chequeDate", 1, "form-control", 3, "bsConfig"], [1, "table", "table-bordered", "table-hover", "compact"], [2, "text-align", "right"], [4, "ngFor", "ngForOf"], ["type", "text", "value", "0.00", 2, "width", "100%", "border", "none", "text-align", "right", 3, "keypress", "keyup", "focusout"], [1, "bg-light-danger", "text-right"], [1, "text-danger"], ["type", "text", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", "formControlName", "Intdate", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelChange"], [3, "click"]], template: function VoucherEntryComponent_Template(rf, ctx) { if (rf & 1) {
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VoucherEntryComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Voucher Entry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Branch Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "sub", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_ng_select_ngModelChange_20_listener($event) { return ctx.selectedBranch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VoucherEntryComponent_ng_option_21_Template, 2, 2, "ng-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoucherEntryComponent_Template_input_change_26_listener() { return ctx.transactionMode("cash"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoucherEntryComponent_Template_input_change_31_listener() { return ctx.transactionMode("transfer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Transfer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_input_ngModelChange_41_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Scheme Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "sub", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ng-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_ng_select_ngModelChange_51_listener($event) { return ctx.selectedCode = $event; })("change", function VoucherEntryComponent_Template_ng_select_change_51_listener() { return ctx.selectedSchemeCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, VoucherEntryComponent_ng_option_52_Template, 2, 2, "ng-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "sub", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ng-select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_ng_select_ngModelChange_61_listener($event) { return ctx.selectedScheme = $event; })("change", function VoucherEntryComponent_Template_ng_select_change_61_listener() { return ctx.getIntroducer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, VoucherEntryComponent_ng_option_62_Template, 2, 3, "ng-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Account No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "sub", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ng-select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoucherEntryComponent_Template_ng_select_change_72_listener() { return ctx.getVoucherData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, VoucherEntryComponent_ng_option_73_Template, 2, 3, "ng-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Transaction Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "sub", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ng-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_ng_select_ngModelChange_83_listener($event) { return ctx.selectedMode = $event; })("change", function VoucherEntryComponent_Template_ng_select_change_83_listener() { return ctx.changeMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, VoucherEntryComponent_ng_option_84_Template, 2, 3, "ng-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, VoucherEntryComponent_div_85_Template, 11, 2, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VoucherEntryComponent_Template_input_keypress_93_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; })("keyup", function VoucherEntryComponent_Template_input_keyup_93_listener($event) { return ctx.getAmt($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_input_ngModelChange_101_listener($event) { return ctx.totalAmt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, VoucherEntryComponent_div_102_Template, 19, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Particulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "textarea", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoucherEntryComponent_Template_textarea_ngModelChange_113_listener($event) { return ctx.particulars = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_Template_i_click_114_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](262); return _r8.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Token No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VoucherEntryComponent_Template_input_keypress_121_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_Template_button_click_124_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Update");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Day Opening Bal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Unpassed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Uneffected Clearing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " 0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Sanctions Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " 0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Temp. overdraft Amt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " 0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Cleared Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "After this voucher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "= ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function VoucherEntryComponent_Template_img_mouseover_237_listener() { return ctx.showImage(ctx.customerImg); })("mouseout", function VoucherEntryComponent_Template_img_mouseout_237_listener() { return ctx.hideImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Ajit Sutar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function VoucherEntryComponent_Template_img_mouseover_243_listener() { return ctx.showImage(ctx.signture); })("mouseout", function VoucherEntryComponent_Template_img_mouseout_243_listener() { return ctx.hideImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "ul", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "PAN ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "ADFE2323D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Contact:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "+91 7636456273");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "app-modal-basic", 75, 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "h4", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Narration Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_Template_button_click_266_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](262); return _r8.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "perfect-scrollbar", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "table", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Paticulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](278, VoucherEntryComponent_tr_278_Template, 2, 1, "tr", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "button", 85, 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoucherEntryComponent_Template_button_click_279_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](262); return _r8.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Close");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branch_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1))("ngModel", ctx.date)("isDisabled", ctx.isture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allSchemeCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allScheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.introducerACNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tranModeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showChequeDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.totalAmt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.particulars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_15__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PerfectScrollbarComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["ɵr"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 20px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.transaction-item[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.bg-light-primary[_ngcontent-%COMP%] {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367F0 !important;\n}\n\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.357rem !important;\n}\n\n.float-start[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  margin-right: 1.2rem;\n}\n\n.avatar.bg-light-primary[_ngcontent-%COMP%] {\n  color: #7367F0 !important;\n}\n\n.avatar.bg-light-success[_ngcontent-%COMP%] {\n  color: #28C76F !important;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background-color: #C3C3C3;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n  color: #FFF;\n  display: inline-flex;\n  font-size: 1rem;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 600;\n}\n\n.card-transaction[_ngcontent-%COMP%]   .transaction-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n}\n\n.avatar[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  font-size: 0.857rem;\n}\n\n.bg-light-success[_ngcontent-%COMP%] {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28C76F !important;\n}\n\n.bg-light-danger[_ngcontent-%COMP%] {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #EA5455 !important;\n}\n\n.transaction-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.errspan[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 21px;\n  margin-top: -20px;\n  position: relative;\n  z-index: 2;\n  color: red;\n}\n\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: white !important;\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdHJhbnNhY3Rpb24vdm91Y2hlci1lbnRyeS92b3VjaGVyLWVudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0csVUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDRTtFQUNFLFdBQUE7QUFFSjs7QUFDRTtFQUFXLG1CQUFBO0VBQW9CLFdBQUE7QUFJakM7O0FBREU7RUFDRSxxQkFBQTtBQUlKOztBQUZBO0VBQ0Usd0JBQUE7QUFLRjs7QUFGQTtFQUNFLGFBQUE7RUFJQSxtQkFBQTtFQUlBLDhCQUFBO0FBS0Y7O0FBSEE7RUFFRSx3QkFBQTtBQUtGOztBQUhBO0VBQ0UsZ0RBQUE7RUFDQSx5QkFBQTtBQU1GOztBQUpBO0VBQ0Usa0NBQUE7QUFPRjs7QUFMQTtFQUNFLHNCQUFBO0FBUUY7O0FBTkE7RUFDRSxvQkFBQTtBQVNGOztBQU5BO0VBQ0UseUJBQUE7QUFTRjs7QUFQQTtFQUNFLHlCQUFBO0FBVUY7O0FBUkE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBSUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBV0Y7O0FBVEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVlGOztBQVZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFJQSxhQUFBO0VBSUEsdUJBQUE7RUFJQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFhRjs7QUFWQTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7QUFhRjs7QUFYQTtFQUNFLDhDQUFBO0VBQ0EseUJBQUE7QUFjRjs7QUFYQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWNGOztBQVZBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBYUY7O0FBVkE7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FBYUYiLCJmaWxlIjoic3JjL2FwcC90aGVtZS90cmFuc2FjdGlvbi92b3VjaGVyLWVudHJ5L3ZvdWNoZXItZW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICBtYXJnaW46IDNweDtcclxuICB9XHJcblxyXG4gIGRpdi5zb2xpZCB7Ym9yZGVyLXN0eWxlOiBzb2xpZDtwYWRkaW5nOjIlfVxyXG5cclxuXHJcbiAgLmNhcmQtdHJhbnNhY3Rpb24gLnRyYW5zYWN0aW9uLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuLnRyYW5zYWN0aW9uLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtdHJhbnNhY3Rpb24gLnRyYW5zYWN0aW9uLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmQtZmxleCB7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG59XHJcbi5iZy1saWdodC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDExNSwxMDMsMjQwLC4xMikhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNzM2N0YwIWltcG9ydGFudDtcclxufVxyXG4ucm91bmRlZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNTdyZW0haW1wb3J0YW50O1xyXG59XHJcbi5mbG9hdC1zdGFydCB7XHJcbiAgZmxvYXQ6IGxlZnQhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtIC5hdmF0YXIge1xyXG4gIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG59XHJcblxyXG4uYXZhdGFyLmJnLWxpZ2h0LXByaW1hcnkge1xyXG4gIGNvbG9yOiAjNzM2N0YwIWltcG9ydGFudDtcclxufVxyXG4uYXZhdGFyLmJnLWxpZ2h0LXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjMjhDNzZGIWltcG9ydGFudDtcclxufVxyXG4uYXZhdGFyIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDM0MzQzM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5jYXJkLXRyYW5zYWN0aW9uIC50cmFuc2FjdGlvbi1pdGVtIC5hdmF0YXIgLmF2YXRhci1jb250ZW50IHtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbn1cclxuLmF2YXRhciAuYXZhdGFyLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IC44NTdyZW07XHJcbn1cclxuXHJcbi5iZy1saWdodC1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLDE5OSwxMTEsLjEyKSFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMyOEM3NkYhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1saWdodC1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LDg0LDg1LC4xMikhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjRUE1NDU1IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLXRpdGxle1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG5cclxufVxyXG5cclxuLmVycnNwYW4ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDIxcHg7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY29sb3I6IHJlZDtcclxufSBcclxuXHJcbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoucherEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voucher-entry',
                templateUrl: './voucher-entry.component.html',
                styleUrls: ['./voucher-entry.component.scss']
            }]
    }], function () { return [{ type: _shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_4__["TransactionCashModeService"] }, { type: _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_5__["TransactionTransferModeService"] }, { type: _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_6__["SchemeTypeService"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_7__["OwnbranchMasterService"] }, { type: src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeDropdownService"] }, { type: _voucher_entry_service__WEBPACK_IMPORTED_MODULE_9__["VoucherEntryService"] }, { type: _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_10__["SavingMasterService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }]; }, { triggerhide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triggerhide']
        }] }); })();


/***/ }),

/***/ "./src/app/theme/transaction/voucher-entry/voucher-entry.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/transaction/voucher-entry/voucher-entry.module.ts ***!
  \*************************************************************************/
/*! exports provided: VoucherEntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherEntryModule", function() { return VoucherEntryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _voucher_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voucher-entry.component */ "./src/app/theme/transaction/voucher-entry/voucher-entry.component.ts");
/* harmony import */ var _voucher_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voucher-entry-routing.module */ "./src/app/theme/transaction/voucher-entry/voucher-entry-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/elements/transaction-cash-mode.service */ "./src/app/shared/elements/transaction-cash-mode.service.ts");
/* harmony import */ var _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/elements/transaction-transfer-mode.service */ "./src/app/shared/elements/transaction-transfer-mode.service.ts");
/* harmony import */ var _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/elements/scheme-type.service */ "./src/app/shared/elements/scheme-type.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../master/customer/saving-master/saving-master.service */ "./src/app/theme/master/customer/saving-master/saving-master.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");





















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class VoucherEntryModule {
}
VoucherEntryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VoucherEntryModule });
VoucherEntryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VoucherEntryModule_Factory(t) { return new (t || VoucherEntryModule)(); }, providers: [_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__["TransactionCashModeService"], _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__["TransactionTransferModeService"], _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__["SchemeTypeService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["SchemeCodeDropdownService"], _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_16__["SavingMasterService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _voucher_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["VoucherEntryRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["DatepickerModule"].forRoot(),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VoucherEntryModule, { declarations: [_voucher_entry_component__WEBPACK_IMPORTED_MODULE_2__["VoucherEntryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _voucher_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["VoucherEntryRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["DatepickerModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__["PerfectScrollbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoucherEntryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _voucher_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["VoucherEntryRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["DatepickerModule"].forRoot(),
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__["PerfectScrollbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
                ],
                declarations: [_voucher_entry_component__WEBPACK_IMPORTED_MODULE_2__["VoucherEntryComponent"]],
                providers: [_shared_elements_transaction_cash_mode_service__WEBPACK_IMPORTED_MODULE_6__["TransactionCashModeService"], _shared_elements_transaction_transfer_mode_service__WEBPACK_IMPORTED_MODULE_7__["TransactionTransferModeService"], _shared_elements_scheme_type_service__WEBPACK_IMPORTED_MODULE_8__["SchemeTypeService"], src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["OwnbranchMasterService"], src_app_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["SchemeCodeDropdownService"], _master_customer_saving_master_saving_master_service__WEBPACK_IMPORTED_MODULE_16__["SavingMasterService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=voucher-entry-voucher-entry-module.js.map