(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"],{

/***/ "./src/app/shared/dropdownService/schemeAccountNo.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/dropdownService/schemeAccountNo.service.ts ***!
  \*******************************************************************/
/*! exports provided: SchemeAccountNoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeAccountNoService", function() { return SchemeAccountNoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class SchemeAccountNoService {
    constructor(http) {
        this.http = http;
        // savingSchemeObject = new Array();
        this.schemeObject = new Array();
        // // scheme-parameters";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getSavingSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/saving-master/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getSavingSchemeList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/saving-master/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, customerId: element.idmasterID, dormant: element.IS_DORMANT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getSavingSchemeListforClosing(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/saving-master/closingscheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, customerId: element.idmasterID, dormant: element.IS_DORMANT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getSavingMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/saving-master/balUpdate/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT, guardian: element.AC_GRDNAME, jointAcHolders: element.jointAccounts, idmaster: element.idmaster };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getSavingMasterAcListForLedger(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/saving-master/ledgerviewAccList/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT, guardian: element.AC_GRDNAME, jointAcHolders: element.jointAccounts, idmaster: element.idmaster };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getShareSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/share-master/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getShareSchemeList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/share-master/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, branch: element.BRANCH_CODE, openDate: element.AC_OPDATE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getLokcerSchemeList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/locker-master/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, branch: element.BRANCH_CODE, openDate: element.AC_OPDATE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getShareMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/share-master/balUpdate/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getShareMasterAcListForLedger(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/share-master/ledgerviewAccList/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getShareSchemeList2(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/share-master/memno/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getShareSchemeListDT(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/share-master/getdata/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.DIV_TRANSFER_BRANCH, value: element.DIV_TRANSFER_ACTYPE, name: element.DIV_TRANSFER_ACNO };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
        // return this.http.get(this.url + '/share-master/getdata/' + schemeid);
        // return this.http.get(this.url + '/scheme-parameters/' + schemeid).pipe(catchError(this.handleError));
    }
    getCurrentAccountSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/current-account-master/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getCurrentAccountSchemeList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/current-account-master/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.BANKACNO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getCurrentMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/current-account-master/balUpdate/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.BANKACNO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT, jointAcHolders: element.jointAccounts };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getCurrentMasterAcListForLedger(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/current-account-master/ledgerviewAccList/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.BANKACNO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT, jointAcHolders: element.jointAccounts };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermLoanSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/term-loan-master/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermLoanSchemeList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/term-loan-master/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, customerId: element.idmasterID };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermLoanSchemeListGridData(id) {
        let data = { 'id': id };
        return this.http.post(this.url + '/term-loan-master/scheme/', data);
    }
    getTermLoanMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/term-loan-master/balUpdate/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermLoanMasterAcListForLedger(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/term-loan-master/ledgerviewAccList/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/term-deposits-master/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositSchemeList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/term-deposits-master/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, depositAmount: element.AC_SCHMAMT, id: element.idmasterID, dormant: element.IS_DORMANT, opendate: element.AC_OPDATE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/term-deposits-master/balUpdate/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getTermDepositMasterAcListForLedger(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/term-deposits-master/ledgerviewAccList/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getGeneralLedgerList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/gl-account-master/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.AC_NO, acnotype: element.AC_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getGeneralLedgerListForClosing() {
        this.schemeObject = [];
        return this.http.get(this.url + '/gl-account-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.AC_NO, acnotype: element.AC_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getGeneralLedgerMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/gl-account-master/balUpdate/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.AC_NO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getGeneralLedgerMasterAcListForLedger(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/gl-account-master/ledgerviewAccList/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.AC_NO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getDisputeLoanSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/dispute-loan-master/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getDisputeLoanSchemeList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/dispute-loan-master/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getDisputeLoanMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/dispute-loan-master/balUpdate/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getDisputeLoanMasterAcListForLedger(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/dispute-loan-master/ledgerviewAccList/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getCashCreditSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/cash-credit-master/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getCashCreditSchemeList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/cash-credit-master/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getCashCreditMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/cash-credit-master/balUpdate/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getCashCreditMasterAcListForLedger(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/cash-credit-master/ledgerviewAccList/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getAnamatSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/anamat-gsm/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getAnamatSchemeList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/anamat-gsm/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getAnamatMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/anamat-gsm/balUpdate/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getAnamatMasterAcListForLedger(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/anamat-gsm/ledgerviewAccList/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getPigmyAccountSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/pigmy-account-master/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getPigmyAccountSchemeList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/pigmy-account-master/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, customerId: element.idmasterID, dormant: element.IS_DORMANT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getPigmyAccountSchemeListforClosing(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/pigmy-account-master/closingscheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, customerId: element.idmasterID, dormant: element.IS_DORMANT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getPigmyAccountMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/pigmy-account-master/balUpdate/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getPigmyAccountMasterAcListForLedger(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/pigmy-account-master/ledgerviewAccList/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getPigmyAgentSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/pigmy-agent-master/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getPigmyAgentSchemeList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/pigmy-agent-master/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.BANKACNO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getPigmyAgentMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/pigmy-agent-master/balUpdate/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT, jointAcHolders: element.jointAccounts };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getPigmyAgentMasterAcListForLedger(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/pigmy-agent-master/ledgerviewAccList/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT, jointAcHolders: element.jointAccounts };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getpigmyChartAcno(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/pigmy-agent-master/chart/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id, bank: element.BANKACNO, glacno: element.DPMaster.S_GLACNO };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getPigmyAgentSchemeList2(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/pigmy-agent-master/pigmyscheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO + ' ' + element.AC_NAME, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getInvestmentSchemeList() {
        this.schemeObject = [];
        return this.http.get(this.url + '/investment/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getInvestmentSchemeList1(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/investment/scheme/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getInvestmentMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/investment/balUpdate/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getInvestmentMasterAcListForLedger(schemeid) {
        this.schemeObject = [];
        return this.http.get(this.url + '/investment/ledgerviewAccList/' + schemeid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, freez: element.AC_FREEZE_STATUS, dormant: element.IS_DORMANT, acClose: element.AC_CLOSEDT, opendate: element.AC_OPDATE, autoMaturedPayableAmt: element.AUTO_MATURED_PAYABLEAMT, autoMaturedIntrestAmt: element.AUTO_MATURED_INTERESTAMT, closeDate: element.AC_CLOSEDT };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
    getACMasterList2() {
        this.schemeObject = [];
        return this.http.get(this.url + '/gl-account-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { name: element.AC_NAME, value: element.id, label: element.AC_NO, bankacno: element.AC_NO };
                this.schemeObject.push(obj);
            });
            return this.schemeObject;
        }));
    }
}
SchemeAccountNoService.ɵfac = function SchemeAccountNoService_Factory(t) { return new (t || SchemeAccountNoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SchemeAccountNoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchemeAccountNoService, factory: SchemeAccountNoService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeAccountNoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24.js.map