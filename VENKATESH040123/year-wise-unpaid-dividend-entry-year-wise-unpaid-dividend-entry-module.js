(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["year-wise-unpaid-dividend-entry-year-wise-unpaid-dividend-entry-module"],{

/***/ "./src/app/shared/dropdownService/salary-division-master-dropdown.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/dropdownService/salary-division-master-dropdown.service.ts ***!
  \***********************************************************************************/
/*! exports provided: SalaryDMasterdropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryDMasterdropdownService", function() { return SalaryDMasterdropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class SalaryDMasterdropdownService {
    constructor(http) {
        this.http = http;
        this.salaryObject = new Array();
        // // salary-division-master";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getSalaryMasterList() {
        this.salaryObject = [];
        return this.http.get(this.url + '/salary-division-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.NAME, value: element.id, name: element.CODE };
                this.salaryObject.push(obj);
            });
            return this.salaryObject;
        }));
    }
    getSalaryDMasterList(branch) {
        this.salaryObject = [];
        return this.http.get(this.url + '/salary-division-master/getBranch/' + branch)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.NAME, value: element.id, name: element.CODE };
                this.salaryObject.push(obj);
            });
            return this.salaryObject;
        }));
    }
}
SalaryDMasterdropdownService.ɵfac = function SalaryDMasterdropdownService_Factory(t) { return new (t || SalaryDMasterdropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SalaryDMasterdropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SalaryDMasterdropdownService, factory: SalaryDMasterdropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalaryDMasterdropdownService, [{
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

/***/ "./src/app/shared/dropdownService/share-master-dropdown.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/dropdownService/share-master-dropdown.service.ts ***!
  \*************************************************************************/
/*! exports provided: ShareMasterDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareMasterDropdownService", function() { return ShareMasterDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ShareMasterDropdownService {
    constructor(http) {
        this.http = http;
        this.sharecodeObject = new Array();
        // url = "http://localhost:4000/share-master";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getGLAccountMasterList() {
        this.sharecodeObject = [];
        return this.http.get(this.url + '/share-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO + ' ' + element.AC_NAME + ' ', value: element.id, name: element.AC_NAME };
                this.sharecodeObject.push(obj);
            });
            return this.sharecodeObject;
        }));
    }
    getGLAccountMasterNameList() {
        this.sharecodeObject = [];
        return this.http.get(this.url + '/share-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NAME + ' ' + element.AC_NAME + ' ', value: `${element.AC_NAME}`, name: element.AC_NAME };
                this.sharecodeObject.push(obj);
            });
            return this.sharecodeObject;
        }));
    }
    getShareAccountMasterNameList() {
        this.sharecodeObject = [];
        return this.http.get(this.url + '/share-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO, value: element.id, name: element.AC_NAME };
                this.sharecodeObject.push(obj);
            });
            return this.sharecodeObject;
        }));
    }
}
ShareMasterDropdownService.ɵfac = function ShareMasterDropdownService_Factory(t) { return new (t || ShareMasterDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ShareMasterDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShareMasterDropdownService, factory: ShareMasterDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareMasterDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dropdownService/share-scheme-dropdown.Service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/dropdownService/share-scheme-dropdown.Service.ts ***!
  \*************************************************************************/
/*! exports provided: ShareSchemeDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareSchemeDropdownService", function() { return ShareSchemeDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ShareSchemeDropdownService {
    constructor(http) {
        this.http = http;
        this.ShareSchemeObject = new Array();
        // url = "http://localhost:4000/shares-scheme";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getShareschemelist() {
        this.ShareSchemeObject = [];
        return this.http.get(this.url + '/shares-scheme')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_APPL + ' ', value: element.id };
                this.ShareSchemeObject.push(obj);
            });
            return this.ShareSchemeObject;
        }));
    }
}
ShareSchemeDropdownService.ɵfac = function ShareSchemeDropdownService_Factory(t) { return new (t || ShareSchemeDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ShareSchemeDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShareSchemeDropdownService, factory: ShareSchemeDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareSchemeDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/customer-id/customer-id.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/master/customer/customer-id/customer-id.service.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerIdService", function() { return CustomerIdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class CustomerIdService {
    constructor(http) {
        this.http = http;
        // API 
        // // customer-id";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/customer-id/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/customer-id/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getData() {
        return this.http.get(this.url + '/customer-id/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/customer-id/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/customer-id/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
CustomerIdService.ɵfac = function CustomerIdService_Factory(t) { return new (t || CustomerIdService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
CustomerIdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomerIdService, factory: CustomerIdService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerIdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/shares-master/shares-master.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/master/customer/shares-master/shares-master.service.ts ***!
  \******************************************************************************/
/*! exports provided: ShareMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareMasterService", function() { return ShareMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class ShareMasterService {
    constructor(http) {
        this.http = http;
        // API  
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/share-master/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    getData(obj) {
        return this.http.get(this.url + '/share-master/alldata' + obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/share-master/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/share-master/update', data);
    }
    updateDataPyatrans(data) {
        return this.http.put(this.url + '/share-master/payDivTrans', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/share-master/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //approve master
    approve(data) {
        return this.http.post(this.url + '/share-master/approve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //unapporve master
    unapporve(data) {
        return this.http.post(this.url + '/share-master/unapporve', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //reject master
    reject(data) {
        return this.http.post(this.url + '/share-master/reject', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
ShareMasterService.ɵfac = function ShareMasterService_Factory(t) { return new (t || ShareMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
ShareMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShareMasterService, factory: ShareMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry-routing.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: YearWiseUnpaidDividendEntryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearWiseUnpaidDividendEntryRoutingModule", function() { return YearWiseUnpaidDividendEntryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _year_wise_unpaid_dividend_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./year-wise-unpaid-dividend-entry.component */ "./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.component.ts");





const routes = [
    {
        path: '',
        component: _year_wise_unpaid_dividend_entry_component__WEBPACK_IMPORTED_MODULE_2__["YearWiseUnpaidDividendEntryComponent"],
        data: {
            title: 'Year Wise Unpaid Entry',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class YearWiseUnpaidDividendEntryRoutingModule {
}
YearWiseUnpaidDividendEntryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: YearWiseUnpaidDividendEntryRoutingModule });
YearWiseUnpaidDividendEntryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function YearWiseUnpaidDividendEntryRoutingModule_Factory(t) { return new (t || YearWiseUnpaidDividendEntryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](YearWiseUnpaidDividendEntryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearWiseUnpaidDividendEntryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: YearWiseUnpaidDividendEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearWiseUnpaidDividendEntryComponent", function() { return YearWiseUnpaidDividendEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _year_wise_unpaid_dividend_entry_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./year-wise-unpaid-dividend-entry.service */ "./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.service.ts");
/* harmony import */ var _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/salary-division-master-dropdown.service */ "./src/app/shared/dropdownService/salary-division-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var _submit_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../submit.directive */ "./src/app/theme/submit.directive.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../button.directive */ "./src/app/theme/button.directive.ts");


// Creating and maintaining form fields with validation

// Displaying Sweet Alert

// Angular Datatable Directive


















function YearWiseUnpaidDividendEntryComponent_ng_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r20.label, " ");
} }
function YearWiseUnpaidDividendEntryComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearWiseUnpaidDividendEntryComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearWiseUnpaidDividendEntryComponent_div_25_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["ACTYPE"].errors == null ? null : ctx_r3.angForm.controls["ACTYPE"].errors.required);
} }
function YearWiseUnpaidDividendEntryComponent_ng_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r22.label, " ");
} }
function YearWiseUnpaidDividendEntryComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearWiseUnpaidDividendEntryComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearWiseUnpaidDividendEntryComponent_div_36_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["AC_SALARYDIVISION_CODE"].errors == null ? null : ctx_r6.angForm.controls["AC_SALARYDIVISION_CODE"].errors.required);
} }
function YearWiseUnpaidDividendEntryComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearWiseUnpaidDividendEntryComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearWiseUnpaidDividendEntryComponent_div_48_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.angForm.controls["WARRENT_DATE"].errors == null ? null : ctx_r10.angForm.controls["WARRENT_DATE"].errors.required);
} }
function YearWiseUnpaidDividendEntryComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearWiseUnpaidDividendEntryComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearWiseUnpaidDividendEntryComponent_div_57_div_1_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r11.angForm.controls["DIV_FROM_YEAR"].errors == null ? null : ctx_r11.angForm.controls["DIV_FROM_YEAR"].errors.pattern) || (ctx_r11.angForm.controls["DIV_FROM_YEAR"].errors == null ? null : ctx_r11.angForm.controls["DIV_FROM_YEAR"].errors.required) || (ctx_r11.angForm.controls["DIV_FROM_YEAR"].errors == null ? null : ctx_r11.angForm.controls["DIV_FROM_YEAR"].errors.minlength) || (ctx_r11.angForm.controls["DIV_FROM_YEAR"].errors == null ? null : ctx_r11.angForm.controls["DIV_FROM_YEAR"].errors.maxlength));
} }
function YearWiseUnpaidDividendEntryComponent_ng_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r26.label, " ", values_r26.name, "");
} }
function YearWiseUnpaidDividendEntryComponent_ng_option_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", values_r27.label, " ", values_r27.name, "");
} }
function YearWiseUnpaidDividendEntryComponent_button_90_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearWiseUnpaidDividendEntryComponent_button_90_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.submit(); })("keydown.Tab", function YearWiseUnpaidDividendEntryComponent_button_90_Template_button_keydown_Tab_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r16.angForm.invalid);
} }
function YearWiseUnpaidDividendEntryComponent_button_91_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearWiseUnpaidDividendEntryComponent_button_91_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.addNewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearWiseUnpaidDividendEntryComponent_button_93_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearWiseUnpaidDividendEntryComponent_button_93_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r18.angForm.invalid);
} }
const _c0 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function YearWiseUnpaidDividendEntryComponent_ng_container_94_tbody_14_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function YearWiseUnpaidDividendEntryComponent_ng_container_94_tbody_14_tr_1_Template_input_focusout_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const data_r38 = ctx.$implicit; const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r42.getAmount(data_r38.id, data_r38.shareDividend.id, data_r38.AC_NO, _r40.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bsValueChange", function YearWiseUnpaidDividendEntryComponent_ng_container_94_tbody_14_tr_1_Template_input_bsValueChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const data_r38 = ctx.$implicit; const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r44.getCloseDate(data_r38.id, data_r38.shareDividend.id, data_r38.AC_NO, _r41.value); })("focusout", function YearWiseUnpaidDividendEntryComponent_ng_container_94_tbody_14_tr_1_Template_input_focusout_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const data_r38 = ctx.$implicit; const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r45.getAmount(data_r38.id, data_r38.shareDividend.id, data_r38.AC_NO, _r40.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r38.AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r38.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r38.shareDividend.DIVIDEND_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r38.shareDividend.MEMBER_CLOSE_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
} }
function YearWiseUnpaidDividendEntryComponent_ng_container_94_tbody_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearWiseUnpaidDividendEntryComponent_ng_container_94_tbody_14_tr_1_Template, 11, 6, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r35.multiShare);
} }
function YearWiseUnpaidDividendEntryComponent_ng_container_94_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearWiseUnpaidDividendEntryComponent_ng_container_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Member No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Member Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dividend Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, YearWiseUnpaidDividendEntryComponent_ng_container_94_tbody_14_Template, 2, 1, "tbody", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, YearWiseUnpaidDividendEntryComponent_ng_container_94_tbody_15_Template, 4, 0, "tbody", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r19.dtExportButtonOptions)("dtTrigger", ctx_r19.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r19.multiShare == null ? null : ctx_r19.multiShare.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r19.multiShare == null ? null : ctx_r19.multiShare.length) == 0);
} }
const _c1 = function (a0) { return { "form-submitted": a0 }; };
// Handling datatable data
class DataTableResponse {
}
class YearWiseUnpaidDividendEntryComponent {
    constructor(http, YearwiseunpaidService, fb, SalaryDMasterdropdownService, schemeCodeDropdownService, schemeAccountNoService) {
        this.http = http;
        this.YearwiseunpaidService = YearwiseunpaidService;
        this.fb = fb;
        this.SalaryDMasterdropdownService = SalaryDMasterdropdownService;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.schemeAccountNoService = schemeAccountNoService;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //Datatable variable
        this.dtExportButtonOptions = {};
        //datatable for values from shmaster
        this.dtexportshareOption = {};
        //variables for pagination
        this.page = 1;
        this.itemsPerPage = 10;
        this.currentJustify = "start";
        this.active = 1;
        this.activeKeep = 1;
        // Variables for hide/show add and update button
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        //variable to get Id to update
        this.updateID = 0;
        //  filter variable
        this.filterData = {};
        //Scheme type variable
        this.schemeType = "SH";
        this.formSubmitted = false;
        this.acType = null;
        this.ngSalary = null;
        this.ngAcnoFrom = null;
        this.ngAcnoTo = null;
        //todays date
        this.date = new Date();
        // year: Date;
        this.year = new Date().getFullYear();
        this.showTable = false;
        this.multiShare = [];
        this.multiDividend = [];
        this.totalAmt = 0;
    }
    ngOnInit() {
        this.createForm();
        this.shareDatatable();
        this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe((data) => {
            this.SchemeCodeObject = data;
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;
        if (result.RoleDefine[0].Role.id == 1) {
            this.SalaryDMasterdropdownService.getSalaryDMasterList(branchCode).subscribe((data) => {
                this.SalaryDMasterObject = data;
            });
        }
        else {
            this.SalaryDMasterdropdownService.getSalaryDMasterList(branchCode).subscribe((data) => {
                this.SalaryDMasterObject = data;
            });
        }
        // this.ShareMasterDropdownService.getShareAccountMasterNameList().subscribe((data) => {
        //   this.ShareMasterObject = data;
        //   this.ShareMasterObjectB = data;
        // });
    }
    // getCurrentYear():number{
    //   const currentYear = new Date().getFullYear();
    //   return currentYear;
    // }
    //formcontrols with validation
    createForm() {
        this.angForm = this.fb.group({
            ACNOTYPE: ["SH"],
            ACTYPE: [""],
            AC_SALARYDIVISION_CODE: [""],
            WARRENT_DATE: [""],
            DIV_FROM_YEAR: [""],
            DIV_TO_YEAR: [""],
            AC_NO: [""],
            TOTAL_SHARES: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            MEMBER_CLOSE_DATE: [""],
            DIVIDEND_AMOUNT: [""],
            AC_NOFrom: [""],
            AC_NOTo: [""],
        });
    }
    //get account no according scheme
    getShareAccounts(event) {
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.id;
        let obj = [this.acType, branchCode];
        this.ngAcnoFrom = null;
        this.ngAcnoTo = null;
        switch (event.id) {
            case 'SH':
                this.schemeAccountNoService.getShareSchemeList1(obj).subscribe(data => {
                    this.ShareMasterObject = data;
                    this.ShareMasterObjectB = data;
                });
                break;
        }
    }
    shareDatatable() {
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
        };
    }
    //get dividend year to value based on dividend year from
    getDivYearTo() {
        // alert("hello")
        let divYrFrom = Number(this.angForm.controls['DIV_FROM_YEAR'].value);
        if (this.angForm.controls['DIV_FROM_YEAR'].value < this.year) {
            this.angForm.patchValue({
                DIV_TO_YEAR: divYrFrom + 1
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Invalid Year', 'Please enter a valid year.', 'error');
            this.angForm.patchValue({
                DIV_TO_YEAR: ''
            });
        }
    }
    //load table as per dividend from to range
    getDividendTable() {
        var memFrom = this.angForm.controls['AC_NOFrom'].value;
        var memTo = this.angForm.controls['AC_NOTo'].value;
        if (this.angForm.controls['AC_NOFrom'].value <= this.angForm.controls['AC_NOTo'].value) {
            this.showTable = true;
            this.mem = [memFrom, memTo, this.acType];
            // this.shareDatatable()
            this.http.get(this.url + '/year-wise-unpaid-dividend-entry/' + this.mem).subscribe((data) => {
                this.multiShare = data;
                console.log(data);
                this.multiShare.forEach(element => {
                    if (element.shareDividend == null) {
                        element.shareDividend = 0;
                    }
                });
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Select Different Member", "error");
            this.angForm.patchValue({
                AC_NOTo: ''
            });
        }
    }
    //push close date in multiDividend array
    getCloseDate(shareID, shareDivId, acno, date) {
        debugger;
        if (date != '') {
            if (this.multiDividend.length != 0) {
                if (this.multiDividend.some(item => item.AC_NO === acno)) {
                    this.multiDividend.forEach((element) => {
                        if (element.AC_NO == acno) {
                            element['MEMBER_CLOSE_DATE'] = date;
                            // element['MEMBER_CLOSE_DATE'] = (date == '' || date == 'Invalid date') ? date = '' : date = moment(date).format('DD/MM/YYYY')
                        }
                    });
                }
                else {
                    var object = {
                        shareID: shareID,
                        id: shareDivId,
                        AC_NO: acno,
                        MEMBER_CLOSE_DATE: date,
                    };
                    this.multiDividend.push(object);
                }
            }
            else {
                var object = {
                    shareID: shareID,
                    id: shareDivId,
                    AC_NO: acno,
                    MEMBER_CLOSE_DATE: date,
                };
                this.multiDividend.push(object);
            }
        }
    }
    //push amount in multiDividend array
    getAmount(shareID, shareDivId, acno, amount) {
        debugger;
        if (amount != '') {
            if (this.multiDividend.length != 0) {
                if (this.multiDividend.some(item => item.AC_NO === acno)) {
                    this.multiDividend.forEach((element) => {
                        if (element.AC_NO == acno) {
                            this.totalAmt = Number(this.totalAmt) + Number(amount) - Number(element['DIVIDEND_AMOUNT']);
                            this.angForm.patchValue({
                                TOTAL_SHARES: Number(this.totalAmt)
                            });
                            element['DIVIDEND_AMOUNT'] = amount;
                        }
                    });
                }
                else {
                    var object = {
                        shareID: shareID,
                        id: shareDivId,
                        AC_NO: acno,
                        DIVIDEND_AMOUNT: amount,
                    };
                    this.multiDividend.push(object);
                    this.totalAmt = Number(this.totalAmt) + Number(amount);
                    this.angForm.patchValue({
                        TOTAL_SHARES: this.totalAmt
                    });
                }
            }
            else {
                var object = {
                    shareID: shareID,
                    id: shareDivId,
                    AC_NO: acno,
                    DIVIDEND_AMOUNT: amount,
                };
                this.multiDividend.push(object);
                this.totalAmt = Number(this.totalAmt) + Number(amount);
                this.angForm.patchValue({
                    TOTAL_SHARES: this.totalAmt
                });
            }
        }
    }
    // validateInput(event) {
    //   const inputValue = event.target.value;
    //   const currentYear = new Date().getFullYear();
    //   const validInput = Math.min(Math.max(parseInt(inputValue), 0), currentYear);
    //   event.target.value = validInput;
    // }
    // Method to insert data into database through NestJS
    submit() {
        debugger;
        let warrentDate;
        const formVal = this.angForm.value;
        const dataToSend = {
            'ACNOTYPE': formVal.ACNOTYPE,
            'ACTYPE': formVal.ACTYPE,
            'AC_SALARYDIVISION_CODE': formVal.AC_SALARYDIVISION_CODE,
            // 'WARRENT_DATE': formVal.WARRENT_DATE, 
            'WARRENT_DATE': (formVal.WARRENT_DATE == '' || formVal.WARRENT_DATE == 'Invalid date') ? warrentDate = '' : warrentDate = moment__WEBPACK_IMPORTED_MODULE_7__(formVal.WARRENT_DATE).format('DD/MM/YYYY'),
            'DIV_FROM_YEAR': formVal.DIV_FROM_YEAR,
            'DIV_TO_YEAR': formVal.DIV_TO_YEAR,
            'TOTAL_SHARES': formVal.TOTAL_SHARES,
            'ShareDividend': this.multiDividend,
        };
        console.log(this.angForm);
        console.log('TOTAL_SHARES');
        this.YearwiseunpaidService.postData(dataToSend).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Success!", "Data Added Successfully !", "success");
        }, (error) => {
            console.log(error);
        });
        //To clear form
        this.resetForm();
        this.totalAmt = 0;
        this.multiShare = [];
        this.multiDividend = [];
    }
    //Method for append data into fields
    editClickHandler(id) {
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = false;
        this.YearwiseunpaidService.getFormData(id).subscribe((data) => {
            this.updateID = data.id;
            //get nominee to edit
            this.angForm.setValue({
                ACNOTYPE: data.ACNOTYPE,
                ACTYPE: data.ACTYPE,
                AC_SALARYDIVISION_CODE: data.AC_SALARYDIVISION_CODE,
                WARRENT_DATE: data.WARRENT_DATE,
                DIV_FROM_YEAR: data.DIV_FROM_YEAR,
                DIV_TO_YEAR: data.DIV_TO_YEAR,
                AC_NO: data.AC_NO,
                TOTAL_SHARES: data.TOTAL_SHARES,
                MEMBER_CLOSE_DATE: data.MEMBER_CLOSE_DATE,
                DIVIDEND_AMOUNT: data.DIVIDEND_AMOUNT,
            });
        });
    }
    //Method for update data
    updateData() {
        let data = this.angForm.value;
        data["id"] = this.updateID;
        data['FieldData'] = this.sharemember;
        this.YearwiseunpaidService.updateData(data).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Success!", "Record Updated Successfully !", "success");
            this.showButton = true;
            this.updateShow = false;
            this.newbtnShow = false;
            this.resetForm();
        });
    }
    //reset function while update
    addNewData() {
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.resetForm();
    }
    //Method for delete data
    delClickHandler(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Are you sure?",
            text: "Do you want to delete narration data.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#229954",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                this.YearwiseunpaidService.deleteData(id).subscribe((data1) => {
                    this.yearwiseunpaid = data1;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Deleted!", "Your data has been deleted.", "success");
                }),
                    (error) => {
                        console.log(error);
                    };
                // to reload after delete of data
                this.rerender();
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Cancelled", "Your data is safe.", "error");
            }
        });
    }
    // newFunction(event:any){
    //   this.selectedyear = event.value
    // }
    ngAfterViewInit() {
        this.dtTrigger.next();
        // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //   dtInstance.columns().every(function () {
        //     const that = this;
        //     $("input", this.footer()).on("keyup change", function () {
        //       if (this["value"] != "") {
        //         that.search(this["value"]).draw();
        //       } else {
        //         that.search(this["value"]).draw();
        //       }
        //     });
        //   });
        // });
    }
    // Reset Function
    resetForm() {
        this.createForm();
        this.acType = null;
        this.ngSalary = null;
        this.ngAcnoFrom = null;
        this.ngAcnoTo = null;
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
    ;
    onFocus(ele) {
        ele.open();
    }
}
YearWiseUnpaidDividendEntryComponent.ɵfac = function YearWiseUnpaidDividendEntryComponent_Factory(t) { return new (t || YearWiseUnpaidDividendEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_year_wise_unpaid_dividend_entry_service__WEBPACK_IMPORTED_MODULE_9__["YearwiseunpaidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SalaryDMasterdropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__["SchemeAccountNoService"])); };
YearWiseUnpaidDividendEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YearWiseUnpaidDividendEntryComponent, selectors: [["app-year-wise-unpaid-dividend-entry"]], viewQuery: function YearWiseUnpaidDividendEntryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 95, vars: 45, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "appSubmit", "", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "card-block"], [1, "col-sm"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["appTheme", "", "bindValue", "value", "id", "ACTYPE", "bindLabel", "label", "formControlName", "ACTYPE", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme", "autofocus", "", 3, "ngModel", "ngClass", "selectOnTab", "virtualScroll", "ngModelChange", "focus", "change"], ["ACTYPE", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "ACTYPE"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["appTheme", "", "bindValue", "value", "id", "AC_SALARYDIVISION_CODE", "bindLabel", "label", "formControlName", "AC_SALARYDIVISION_CODE", "title", "Compulsory Selection", "required", "", "placeholder", "Salary Division", 3, "ngModel", "virtualScroll", "selectOnTab", "ngClass", "ngModelChange", "focus"], ["AC_SALARYDIVISION_CODE", ""], ["for", "AC_SALARYDIVISION_CODE"], [1, "form-group", "input-group"], ["appTheme", "", "appButton", "", "minlength", "10", "maxlength", "10", "type", "text", "placeholder", "dd/mm/yyyy", "name", "WARRENT_DATE", "id", "WARRENT_DATE", "required", "", "formControlName", "WARRENT_DATE", "minlength", "10", "maxlength", "10", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "ngClass", "keydown.Tab", "keypress"], ["date", "", "date", "", "WARRENT_DATE", "bsDatepicker"], ["for", "WARRENT_DATE"], ["appTheme", "", "type", "text", "name", "DIV_FROM_YEAR", "placeholder", " ", "id", "DIV_FROM_YEAR", "formControlName", "DIV_FROM_YEAR", "pattern", "^[0-9]+$", "minlength", "4", "maxlength", "4", "required", "", 1, "form-control", 3, "min", "keypress", "focusout"], ["for", "DIV_FROM_YEAR"], ["appTheme", "", "type", "text", "name", "DIV_TO_YEAR", "placeholder", " ", "id", "DIV_TO_YEAR", "formControlName", "DIV_TO_YEAR", "disabled", "", 1, "form-control"], ["for", "DIV_TO_YEAR"], [1, "col-sm-4"], ["appTheme", "", "id", "AC_NOFrom", "bindValue", "value", "bindLabel", "AC_NO", "formControlName", "AC_NOFrom", "title", "Compulsory Selection", "placeholder", "Member From", 3, "ngModel", "virtualScroll", "selectOnTab", "ngClass", "ngModelChange", "focus"], ["AC_NOFrom", ""], ["for", "AC_NOFrom"], ["appTheme", "", "id", "AC_NOTo", "bindValue", "value", "bindLabel", "AC_NO", "formControlName", "AC_NOTo", "title", "Compulsory Selection", "placeholder", "Member To", 3, "ngModel", "ngClass", "selectOnTab", "virtualScroll", "ngModelChange", "focus", "change"], ["AC_NOTo", ""], ["for", "AC_NOTo"], ["type", "text", "name", "TOTAL_SHARES", "placeholder", " ", "id", "TOTAL_SHARES", "formControlName", "TOTAL_SHARES", "disabled", "", 1, "form-control"], ["for", "TOTAL_SHARES"], [1, "col-sm", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm", "appTheme", "", 3, "disabled", "click", "keydown.Tab", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "disabled", "click", 4, "ngIf"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], ["type", "submit", "appTheme", "", 1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click", "keydown.Tab"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["type", "text", "name", "DIVIDEND_AMOUNT", "id", "DIVIDEND_AMOUNT", 3, "value", "focusout"], ["divAmt", ""], ["type", "text", "appButton", "", "minlength", "10", "maxlength", "10", "name", "DIVIDEND_AMOUNT", "id", "DIVIDEND_AMOUNT", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "value", "bsValueChange", "focusout"], ["closeDate", ""], ["colspan", "4", 1, "no-data-available"]], template: function YearWiseUnpaidDividendEntryComponent_Template(rf, ctx) { if (rf & 1) {
        const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Year Wise Unpaid Dividend Opening Entry");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ng-select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_ngModelChange_18_listener($event) { return ctx.acType = $event; })("focus", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_focus_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.onFocus(_r1); })("change", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_change_18_listener($event) { return ctx.getShareAccounts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, YearWiseUnpaidDividendEntryComponent_ng_option_20_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Scheme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, YearWiseUnpaidDividendEntryComponent_div_25_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ng-select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_ngModelChange_29_listener($event) { return ctx.ngSalary = $event; })("focus", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_focus_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx.onFocus(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, YearWiseUnpaidDividendEntryComponent_ng_option_31_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Salary Division");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, YearWiseUnpaidDividendEntryComponent_div_36_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.Tab", function YearWiseUnpaidDividendEntryComponent_Template_input_keydown_Tab_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43); return _r9.hide(); })("keypress", function YearWiseUnpaidDividendEntryComponent_Template_input_keypress_40_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Dividend Warrant Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, YearWiseUnpaidDividendEntryComponent_div_48_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function YearWiseUnpaidDividendEntryComponent_Template_input_keypress_52_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; })("focusout", function YearWiseUnpaidDividendEntryComponent_Template_input_focusout_52_listener() { return ctx.getDivYearTo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Dividend Year From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, YearWiseUnpaidDividendEntryComponent_div_57_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Dividend Year To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ng-select", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_ngModelChange_70_listener($event) { return ctx.ngAcnoFrom = $event; })("focus", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_focus_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71); return ctx.onFocus(_r12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, YearWiseUnpaidDividendEntryComponent_ng_option_72_Template, 2, 3, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Member From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ng-select", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_ngModelChange_78_listener($event) { return ctx.ngAcnoTo = $event; })("focus", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_focus_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](79); return ctx.onFocus(_r14); })("change", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_change_78_listener() { return ctx.getDividendTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, YearWiseUnpaidDividendEntryComponent_ng_option_80_Template, 2, 3, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Member To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, YearWiseUnpaidDividendEntryComponent_button_90_Template, 2, 1, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, YearWiseUnpaidDividendEntryComponent_button_91_Template, 2, 0, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, YearWiseUnpaidDividendEntryComponent_button_93_Template, 2, 1, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, YearWiseUnpaidDividendEntryComponent_ng_container_94_Template, 16, 4, "ng-container", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.acType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c1, ctx.formSubmitted))("selectOnTab", true)("virtualScroll", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SchemeCodeObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["ACTYPE"].invalid && (ctx.angForm.controls["ACTYPE"].dirty || ctx.angForm.controls["ACTYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngSalary)("virtualScroll", true)("selectOnTab", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SalaryDMasterObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_SALARYDIVISION_CODE"].invalid && (ctx.angForm.controls["AC_SALARYDIVISION_CODE"].dirty || ctx.angForm.controls["AC_SALARYDIVISION_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0))("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["WARRENT_DATE"].invalid && (ctx.angForm.controls["WARRENT_DATE"].dirty || ctx.angForm.controls["WARRENT_DATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["DIV_FROM_YEAR"].invalid && (ctx.angForm.controls["DIV_FROM_YEAR"].dirty || ctx.angForm.controls["DIV_FROM_YEAR"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngAcnoFrom)("virtualScroll", true)("selectOnTab", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ShareMasterObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngAcnoTo)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c1, ctx.formSubmitted))("selectOnTab", true)("virtualScroll", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ShareMasterObjectB);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newbtnShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _submit_directive__WEBPACK_IMPORTED_MODULE_13__["SubmitDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectComponent"], _theme_directive__WEBPACK_IMPORTED_MODULE_15__["ThemeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerInputDirective"], _button_directive__WEBPACK_IMPORTED_MODULE_18__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["ɵr"], angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9zaGFyZXMveWVhci13aXNlLXVucGFpZC1kaXZpZGVuZC1lbnRyeS95ZWFyLXdpc2UtdW5wYWlkLWRpdmlkZW5kLWVudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearWiseUnpaidDividendEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-year-wise-unpaid-dividend-entry",
                templateUrl: "./year-wise-unpaid-dividend-entry.component.html",
                styleUrls: ["./year-wise-unpaid-dividend-entry.component.scss"],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: _year_wise_unpaid_dividend_entry_service__WEBPACK_IMPORTED_MODULE_9__["YearwiseunpaidService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SalaryDMasterdropdownService"] }, { type: _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SchemeCodeDropdownService"] }, { type: _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_12__["SchemeAccountNoService"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: YearWiseUnpaidDividendEntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearWiseUnpaidDividendEntryModule", function() { return YearWiseUnpaidDividendEntryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _year_wise_unpaid_dividend_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./year-wise-unpaid-dividend-entry-routing.module */ "./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry-routing.module.ts");
/* harmony import */ var _year_wise_unpaid_dividend_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./year-wise-unpaid-dividend-entry.component */ "./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _year_wise_unpaid_dividend_entry_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./year-wise-unpaid-dividend-entry.service */ "./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/dropdownService/salary-division-master-dropdown.service */ "./src/app/shared/dropdownService/salary-division-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_share_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/share-master-dropdown.service */ "./src/app/shared/dropdownService/share-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_share_scheme_dropdown_Service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/dropdownService/share-scheme-dropdown.Service */ "./src/app/shared/dropdownService/share-scheme-dropdown.Service.ts");
/* harmony import */ var _customer_shares_master_shares_master_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../customer/shares-master/shares-master.service */ "./src/app/theme/master/customer/shares-master/shares-master.service.ts");
/* harmony import */ var _customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/dropdownService/schemeAccountNo.service */ "./src/app/shared/dropdownService/schemeAccountNo.service.ts");
/* harmony import */ var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/theme/theme.module */ "./src/app/theme/theme.module.ts");






// import { SelectModule } from 'ng-select';
















class YearWiseUnpaidDividendEntryModule {
}
YearWiseUnpaidDividendEntryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: YearWiseUnpaidDividendEntryModule });
YearWiseUnpaidDividendEntryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function YearWiseUnpaidDividendEntryModule_Factory(t) { return new (t || YearWiseUnpaidDividendEntryModule)(); }, providers: [_year_wise_unpaid_dividend_entry_service__WEBPACK_IMPORTED_MODULE_7__["YearwiseunpaidService"],
        _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeDropdownService"],
        _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["SalaryDMasterdropdownService"],
        _shared_dropdownService_share_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ShareMasterDropdownService"],
        _customer_shares_master_shares_master_service__WEBPACK_IMPORTED_MODULE_12__["ShareMasterService"],
        _shared_dropdownService_share_scheme_dropdown_Service__WEBPACK_IMPORTED_MODULE_11__["ShareSchemeDropdownService"],
        _customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIdService"],
        _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_18__["SchemeAccountNoService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["UserAuthInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _year_wise_unpaid_dividend_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["YearWiseUnpaidDividendEntryRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            // SelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["DatepickerModule"].forRoot(),
            src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_19__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](YearWiseUnpaidDividendEntryModule, { declarations: [_year_wise_unpaid_dividend_entry_component__WEBPACK_IMPORTED_MODULE_4__["YearWiseUnpaidDividendEntryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _year_wise_unpaid_dividend_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["YearWiseUnpaidDividendEntryRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        // SelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["DatepickerModule"], src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_19__["ThemeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearWiseUnpaidDividendEntryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _year_wise_unpaid_dividend_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["YearWiseUnpaidDividendEntryRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    // SelectModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["DatepickerModule"].forRoot(),
                    src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_19__["ThemeModule"]
                ],
                declarations: [_year_wise_unpaid_dividend_entry_component__WEBPACK_IMPORTED_MODULE_4__["YearWiseUnpaidDividendEntryComponent"]],
                providers: [_year_wise_unpaid_dividend_entry_service__WEBPACK_IMPORTED_MODULE_7__["YearwiseunpaidService"],
                    _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeDropdownService"],
                    _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["SalaryDMasterdropdownService"],
                    _shared_dropdownService_share_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ShareMasterDropdownService"],
                    _customer_shares_master_shares_master_service__WEBPACK_IMPORTED_MODULE_12__["ShareMasterService"],
                    _shared_dropdownService_share_scheme_dropdown_Service__WEBPACK_IMPORTED_MODULE_11__["ShareSchemeDropdownService"],
                    _customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIdService"],
                    _shared_dropdownService_schemeAccountNo_service__WEBPACK_IMPORTED_MODULE_18__["SchemeAccountNoService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["UserAuthInterceptor"],
                        multi: true
                    },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.service.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.service.ts ***!
  \****************************************************************************************************************/
/*! exports provided: YearwiseunpaidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearwiseunpaidService", function() { return YearwiseunpaidService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class YearwiseunpaidService {
    constructor(http) {
        this.http = http;
        // API 
        //url = "http://localhost:4000/year-wise-unpaid-dividend-entry";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
    }
    //Insertion Operation
    postData(data) {
        return this.http.post(this.url + '/year-wise-unpaid-dividend-entry/insert', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Please Input Proper Data !');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    // For append data
    getFormData(id) {
        return this.http.get(this.url + '/year-wise-unpaid-dividend-entry/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    //Updation Operation
    updateData(data) {
        return this.http.put(this.url + '/year-wise-unpaid-dividend-entry/update', data);
    }
    //Deletion Operation
    deleteData(id) {
        return this.http.delete(this.url + '/year-wise-unpaid-dividend-entry/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
YearwiseunpaidService.ɵfac = function YearwiseunpaidService_Factory(t) { return new (t || YearwiseunpaidService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
YearwiseunpaidService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: YearwiseunpaidService, factory: YearwiseunpaidService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearwiseunpaidService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=year-wise-unpaid-dividend-entry-year-wise-unpaid-dividend-entry-module.js.map