(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~f8b8f8d0"],{

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
                let obj = { label: element.CODE + ' ' + element.NAME, value: element.id, name: element.CODE, branchName: element.NAME };
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
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_APPL, id: element.S_ACNOTYPE, dividend: element.DIVIDEND_PERCENTAGE, divMethod: element.INTEREST_RULE, isAddBonus: element.IS_ADD_BONUS_IN_DIVIDEND, INT_ROUND_OFF: element.INT_ROUND_OFF, IS_WEEKLY_REPAY: element.IS_WEEKLY_REPAY, IS_RECURRING_TYPE: element.IS_RECURRING_TYPE };
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
                let obj = {
                    label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL, glacno: element.S_GLACNO, intapp: element.S_INT_APPLICABLE, SVR_CHARGE_GLCODE: element.SVR_CHARGE_GLCODE, SVR_CHARGE_RATE: element.SVR_CHARGE_RATE, prematureRate: element.LESS_PREMATURE_INT_RATE, schemeMethod: element.INTEREST_RULE, monthDays: element.S_INTCALTP, Quarterly: element.COMPOUND_INT_BASIS, interestUptoCalDate: element.IS_INTUPTODATE, afterMatureIntRate: element.AFTER_MATURE_INT_RATE, rebateRate: element.REBATE_INTRATE, installmentType: element.S_INSTTYPE, IS_DEPO_LOAN: element.IS_DEPO_LOAN, IS_GOLD_LOAN: element.IS_GOLD_LOAN,
                    FIXED_MATURITY_AMT: element.FIXED_MATURITY_AMT, IS_WEEKLY_REPAY: element.IS_WEEKLY_REPAY
                };
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
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE, code: element.S_APPL };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositSchemeRD() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/term/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                // let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                let obj = { label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL, glacno: element.S_GLACNO, intapp: element.S_INT_APPLICABLE, SVR_CHARGE_GLCODE: element.SVR_CHARGE_GLCODE, SVR_CHARGE_RATE: element.SVR_CHARGE_RATE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositSchemePatD() {
        this.schemeObject = [];
        return this.http.get(this.url + '/scheme-parameters/pat/')
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

/***/ "./src/app/theme/transaction/voucher-entry/voucher-entry.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/transaction/voucher-entry/voucher-entry.service.ts ***!
  \**************************************************************************/
/*! exports provided: VoucherEntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherEntryService", function() { return VoucherEntryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class VoucherEntryService {
    constructor(http) {
        this.http = http;
        // API 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url;
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
    // For append data
    getFormData(id) {
        return this.http
            .get(this.url + "/voucher/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getTokenlist(id) {
        return this.http.get(this.url + "/voucher/getTokenlist/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    //check customer account close or not
    checkAccountCloseOrNot(data) {
        return this.http.post(this.url + '/voucher/checkAccountCloseDetails', data);
    }
    //approve master
    approve(data) {
        return this.http.post(this.url + '/voucher/approve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    //unapporveVoucher master
    unapporveVoucher(data) {
        return this.http.post(this.url + '/voucher/unapporveVoucher', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    //reject master
    reject(data) {
        return this.http.post(this.url + '/voucher/reject', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // ledger balance function
    getledgerbalance(data) {
        return this.http.post(this.url + '/voucher/getledgerbalance', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getOtheramountbal(data) {
        return this.http.post(this.url + '/voucher/getOtheramountbal', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // ledger balance function
    getpigmychartBalance(data) {
        return this.http.post(this.url + '/voucher/getpigmychartBalance', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // ledger balance function
    LedgerBal(data) {
        return this.http.post(this.url + '/voucher/LedgerBal', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getPassedUnpassedBalance(data) {
        return this.http.post(this.url + '/voucher/getPassedUnpassedBalance', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Check Zero Balance of account
    checkZeroBalance(data) {
        return this.http.post(this.url + '/voucher/ZeroBalanceAc', data);
    }
    clearWithdrawBal(data) {
        return this.http.post(this.url + '/voucher/clearWithdrawBal', data);
    }
    CheckAccountCloseFlagInDailytran(data) {
        return this.http.post(this.url + '/voucher/CheckAccountCloseFlagInDailytran', data);
    }
    CheckLoginFlagInDpmaster(data) {
        return this.http.post(this.url + '/voucher/CheckLoginFlagInDpmaster', data);
    }
    specialInstruction(data) {
        return this.http.post(this.url + '/voucher/specialInstruction', data);
    }
    CheckPanNoInIDMaster(data) {
        return this.http.post(this.url + '/voucher/CheckPanNoInIDMaster', data);
    }
    ClearVoucherSameBal(data) {
        return this.http.post(this.url + '/voucher/ClearVoucherSameBal', data);
    }
    checkDormantAccount(data) {
        return this.http.post(this.url + '/voucher/checkDormantAccount', data);
    }
    BalancePresentOrOverdraft(data) {
        return this.http.post(this.url + '/voucher/BalancePresentOrOverdraft', data);
    }
    ClearBalanceDebitAmt(data) {
        return this.http.post(this.url + '/voucher/ClearBalanceDebitAmt', data);
    }
    MinBalanceChecking(data) {
        return this.http.post(this.url + '/voucher/MinBalanceChecking', data);
    }
    CheckClearBalAndAmt(data) {
        return this.http.post(this.url + '/voucher/CheckClearBalAndAmt', data);
    }
    StandingOrInterestInstruction(data) {
        return this.http.post(this.url + '/voucher/StandingOrInterestInstruction', data);
    }
    InstructionFreezeAc(data) {
        return this.http.post(this.url + '/voucher/InstructionFreezeAc', data);
    }
    CashWithdraw(data) {
        return this.http.post(this.url + '/voucher/CashWithdraw', data);
    }
    ComInterestDateAndCurrentDate(data) {
        return this.http.post(this.url + '/voucher/ComInterestDateAndCurrentDate', data);
    }
    WithdrawAmtClosingEqualClearBal(data) {
        return this.http.post(this.url + '/voucher/WithdrawAmtClosingEqualClearBal', data);
    }
    withdrawClosingCondition(data) {
        return this.http.post(this.url + '/voucher/WithdrawClosingCondition', data);
    }
    RecurringTypeDeposite(data) {
        return this.http.post(this.url + '/voucher/RecurringTypeDeposite', data);
    }
    DepositeAmountAndIntallments(data) {
        return this.http.post(this.url + '/voucher/DepositeAmountAndIntallments', data);
    }
    ComInterestDateAndLastDMonth(data) {
        return this.http.post(this.url + '/voucher/ComInterestDateAndLastDMonth', data);
    }
    LienMarkChecking(data) {
        return this.http.post(this.url + '/voucher/LienMarkChecking', data);
    }
    DepositAndTotalInstallments(data) {
        return this.http.post(this.url + '/voucher/DepositAndTotalInstallments', data);
    }
    DepositAndDepositAmount(data) {
        return this.http.post(this.url + '/voucher/DepositAndDepositAmount', data);
    }
    PremcloseTdateTamtCom(data) {
        return this.http.post(this.url + '/voucher/PremcloseTdateTamtCom', data);
    }
    PrecloseTrDateTrAmtComCol(data) {
        return this.http.post(this.url + '/voucher/PrecloseTrDateTrAmtComCol', data);
    }
    CheckClearBalNotEqualAmt(data) {
        return this.http.post(this.url + '/voucher/CheckClearBalNotEqualAmt', data);
    }
    SysparaSetTokenAndCSTran(data) {
        return this.http.post(this.url + '/voucher/SysparaSetTokenAndCSTran', data);
    }
    ComVouamtClearbalAndStrs(data) {
        return this.http.post(this.url + '/voucher/ComVouamtClearbalAndStrs', data);
    }
    IsDirectEntryAllow(data) {
        return this.http.post(this.url + '/voucher/IsDirectEntryAllow', data);
    }
    DepositGreaterShareLimitAmt(data) {
        return this.http.post(this.url + '/voucher/DepositGreaterShareLimitAmt', data);
    }
    SysAndScheCheckTotalAmt(data) {
        return this.http.post(this.url + '/voucher/SysAndScheCheckTotalAmt', data);
    }
    calculateDividend(data) {
        return this.http.post(this.url + '/voucher/calculateDividend', data);
    }
    VoucherPassing(data) {
        return this.http.post(this.url + '/voucher/VoucherPassing', data);
    }
    ZeroBalance(data) {
        return this.http.post(this.url + '/voucher/ZeroBalance', data);
    }
    getInputHeadBal(data) {
        return this.http.post(this.url + '/voucher/getInputHeadBal', data);
    }
    printingNo(data) {
        return this.http.post(this.url + '/voucher/printingNo', data);
    }
}
VoucherEntryService.ɵfac = function VoucherEntryService_Factory(t) { return new (t || VoucherEntryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
VoucherEntryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VoucherEntryService, factory: VoucherEntryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoucherEntryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~bnk-glconsist-repo-bnk-glconsist-repo-module~cash-credit-master-cash-credit-master-module~ce~f8b8f8d0.js.map