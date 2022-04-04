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
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_APPL, id: element.S_ACNOTYPE, dividend: element.DIVIDEND_PERCENTAGE, divMethod: element.INTEREST_RULE, isAddBonus: element.IS_ADD_BONUS_IN_DIVIDEND, INT_ROUND_OFF: element.INT_ROUND_OFF };
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
                let obj = { label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL, glacno: element.S_GLACNO, intapp: element.S_INT_APPLICABLE };
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
                let obj = { label: element.AC_NO, value: element.id };
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
            title: 'Year Wise Unpaid Dividend Entry',
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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _year_wise_unpaid_dividend_entry_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./year-wise-unpaid-dividend-entry.service */ "./src/app/theme/master/shares/year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/salary-division-master-dropdown.service */ "./src/app/shared/dropdownService/salary-division-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_share_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/dropdownService/share-master-dropdown.service */ "./src/app/shared/dropdownService/share-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/scheme-code-dropdown.service */ "./src/app/shared/dropdownService/scheme-code-dropdown.service.ts");
/* harmony import */ var _customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../customer/customer-id/customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_share_scheme_dropdown_Service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/share-scheme-dropdown.Service */ "./src/app/shared/dropdownService/share-scheme-dropdown.Service.ts");
/* harmony import */ var _customer_shares_master_shares_master_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../customer/shares-master/shares-master.service */ "./src/app/theme/master/customer/shares-master/shares-master.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");


// Displaying Sweet Alert

// Angular Datatable Directive


















function YearWiseUnpaidDividendEntryComponent_ng_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r14.label, " ");
} }
function YearWiseUnpaidDividendEntryComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearWiseUnpaidDividendEntryComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearWiseUnpaidDividendEntryComponent_div_24_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["ACTYPE"].errors == null ? null : ctx_r2.angForm.controls["ACTYPE"].errors.required);
} }
function YearWiseUnpaidDividendEntryComponent_ng_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r16.label, " ");
} }
function YearWiseUnpaidDividendEntryComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearWiseUnpaidDividendEntryComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearWiseUnpaidDividendEntryComponent_div_34_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.angForm.controls["AC_SALARYDIVISION_CODE"].errors == null ? null : ctx_r4.angForm.controls["AC_SALARYDIVISION_CODE"].errors.required);
} }
function YearWiseUnpaidDividendEntryComponent_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearWiseUnpaidDividendEntryComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearWiseUnpaidDividendEntryComponent_div_44_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.angForm.controls["WARRENT_DATE"].errors == null ? null : ctx_r6.angForm.controls["WARRENT_DATE"].errors.required);
} }
function YearWiseUnpaidDividendEntryComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearWiseUnpaidDividendEntryComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearWiseUnpaidDividendEntryComponent_div_53_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r7.angForm.controls["DIV_FROM_YEAR"].errors == null ? null : ctx_r7.angForm.controls["DIV_FROM_YEAR"].errors.pattern) || (ctx_r7.angForm.controls["DIV_FROM_YEAR"].errors == null ? null : ctx_r7.angForm.controls["DIV_FROM_YEAR"].errors.required) || (ctx_r7.angForm.controls["DIV_FROM_YEAR"].errors == null ? null : ctx_r7.angForm.controls["DIV_FROM_YEAR"].errors.minlength) || (ctx_r7.angForm.controls["DIV_FROM_YEAR"].errors == null ? null : ctx_r7.angForm.controls["DIV_FROM_YEAR"].errors.maxlength));
} }
function YearWiseUnpaidDividendEntryComponent_ng_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r20.label, "");
} }
function YearWiseUnpaidDividendEntryComponent_ng_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r21.label, "");
} }
function YearWiseUnpaidDividendEntryComponent_button_84_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearWiseUnpaidDividendEntryComponent_button_84_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.angForm.invalid);
} }
function YearWiseUnpaidDividendEntryComponent_button_85_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearWiseUnpaidDividendEntryComponent_button_85_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.addNewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearWiseUnpaidDividendEntryComponent_button_87_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YearWiseUnpaidDividendEntryComponent_button_87_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r12.angForm.invalid);
} }
const _c0 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
function YearWiseUnpaidDividendEntryComponent_ng_container_88_tbody_14_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function YearWiseUnpaidDividendEntryComponent_ng_container_88_tbody_14_tr_1_Template_input_focusout_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const data_r31 = ctx.$implicit; const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.getAmount(data_r31.id, data_r31.shareDividend.id, data_r31.AC_NO, _r33.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bsValueChange", function YearWiseUnpaidDividendEntryComponent_ng_container_88_tbody_14_tr_1_Template_input_bsValueChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const data_r31 = ctx.$implicit; const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r37.getCloseDate(data_r31.id, data_r31.shareDividend.id, data_r31.AC_NO, _r34.value); })("focusout", function YearWiseUnpaidDividendEntryComponent_ng_container_88_tbody_14_tr_1_Template_input_focusout_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const data_r31 = ctx.$implicit; const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r38.getAmount(data_r31.id, data_r31.shareDividend.id, data_r31.AC_NO, _r33.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r31.AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r31.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r31.shareDividend.DIVIDEND_AMOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", data_r31.shareDividend.MEMBER_CLOSE_DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
} }
function YearWiseUnpaidDividendEntryComponent_ng_container_88_tbody_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearWiseUnpaidDividendEntryComponent_ng_container_88_tbody_14_tr_1_Template, 11, 6, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.multiShare);
} }
function YearWiseUnpaidDividendEntryComponent_ng_container_88_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function YearWiseUnpaidDividendEntryComponent_ng_container_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 43);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, YearWiseUnpaidDividendEntryComponent_ng_container_88_tbody_14_Template, 2, 1, "tbody", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, YearWiseUnpaidDividendEntryComponent_ng_container_88_tbody_15_Template, 4, 0, "tbody", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r13.dtExportButtonOptions)("dtTrigger", ctx_r13.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r13.multiShare == null ? null : ctx_r13.multiShare.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r13.multiShare == null ? null : ctx_r13.multiShare.length) == 0);
} }
const _c1 = function (a0) { return { "form-submitted": a0 }; };
// Handling datatable data
class DataTableResponse {
}
class YearWiseUnpaidDividendEntryComponent {
    constructor(http, YearwiseunpaidService, fb, SalaryDMasterdropdownService, ShareMasterDropdownService, schemeCodeDropdownService, customerIdService, ShareSchemeDropdownService, ShareMasterService) {
        this.http = http;
        this.YearwiseunpaidService = YearwiseunpaidService;
        this.fb = fb;
        this.SalaryDMasterdropdownService = SalaryDMasterdropdownService;
        this.ShareMasterDropdownService = ShareMasterDropdownService;
        this.schemeCodeDropdownService = schemeCodeDropdownService;
        this.customerIdService = customerIdService;
        this.ShareSchemeDropdownService = ShareSchemeDropdownService;
        this.ShareMasterService = ShareMasterService;
        //api
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url;
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
        // this.dtExportButtonOptions = {
        //   pagingType: 'full_numbers',
        //   paging: true,
        //   pageLength: 10,
        //   serverSide: true,
        //   processing: true,
        //   ajax: (dataTableParameters: any, callback) => {
        //     dataTableParameters.minNumber = dataTableParameters.start + 1;
        //     dataTableParameters.maxNumber =
        //       dataTableParameters.start + dataTableParameters.length;
        //     let datatableRequestParam: any;
        //     this.page = dataTableParameters.start / dataTableParameters.length;
        //     dataTableParameters.columns.forEach(element => {
        //       console.log('element', element)
        //       if (element.value != '') {
        //         let string = element.search.value;
        //         this.filterData[element.data] = string;
        //       } else {
        //         let getColumnName = element.data;
        //         let columnValue = element.value;
        //         if (this.filterData.hasOwnProperty(element.data)) {
        //           let value = this.filterData[getColumnName];
        //           if (columnValue != undefined || value != undefined) {
        //             delete this.filterData[element.data];
        //           }
        //         }
        //       }
        //     });
        //     dataTableParameters['filterData'] = this.filterData;
        //     // this.http.post<DataTableResponse>(
        //     //   this.url + '/share-master/',
        //     //   dataTableParameters
        //     // ).subscribe(resp => {
        //     //   this.multiShare = resp.data;
        //     //   callback({
        //     //     recordsTotal: resp.recordsTotal,
        //     //     recordsFiltered: resp.recordsTotal,
        //     //     data: []
        //     //   });
        //     // });
        //     // this.http.get(this.url + '/year-wise-unpaid-dividend-entry/' + mem).subscribe((data) => {
        //     //   this.multiShare = data;
        //     //   console.log('data', data)
        //     //   console.log('in get multiShare', this.multiShare)
        //     // });
        //   },
        //   columnDefs: [{
        //     targets: '_all',
        //     defaultContent: ""
        //   }],
        //   // columns: [
        //   //   // {
        //   //   //   title: 'Action',
        //   //   // },
        //   //   {
        //   //     title: 'Member No',
        //   //     data: 'AC_NO'
        //   //   },
        //   //   {
        //   //     title: 'Member Name',
        //   //     data: 'AC_NAME'
        //   //   },
        //   //   {
        //   //     title: 'DIVIDEND_AMOUNT',
        //   //     data: 'DIVIDEND_AMOUNT'
        //   //   },
        //   //   {
        //   //     title: 'MEMBER_CLOSE_DATE',
        //   //     data: 'MEMBER_CLOSE_DATE'
        //   //   },
        //   // ],
        //   dom: 'Blrtip',
        // };
        this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe((data) => {
            this.SchemeCodeObject = data;
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.CODE;
        if (result.RoleDefine[0].Role.id == 1) {
            this.SalaryDMasterdropdownService.getSalaryDMasterList(branchCode)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe((data) => {
                this.SalaryDMasterObject = data;
            });
        }
        else {
            this.SalaryDMasterdropdownService.getSalaryDMasterList(branchCode)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe((data) => {
                this.SalaryDMasterObject = data;
            });
        }
        this.ShareMasterDropdownService.getShareAccountMasterNameList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe((data) => {
            this.ShareMasterObject = data;
            console.log(' this.ShareMasterObject', this.ShareMasterObject);
            this.ShareMasterObjectB = data;
            console.log(' this.ShareMasterObjectB', this.ShareMasterObjectB);
        });
        this.ShareMasterDropdownService.getGLAccountMasterList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe((data) => {
            this.shareNameObject = data;
        });
    }
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
            TOTAL_SHARES: [""],
            MEMBER_CLOSE_DATE: [""],
            DIVIDEND_AMOUNT: [""],
            AC_NOFrom: [""],
            AC_NOTo: [""],
        });
    }
    shareDatatable() {
        this.dtExportButtonOptions = {
            pagingType: 'full_numbers',
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
        };
        console.log('in share table');
    }
    //get dividend year to value based on dividend year from
    getDivYearTo() {
        let divYrFrom = Number(this.angForm.controls['DIV_FROM_YEAR'].value);
        if (this.angForm.controls['DIV_FROM_YEAR'].value != '') {
            this.angForm.patchValue({
                DIV_TO_YEAR: divYrFrom + 1
            });
        }
        else {
            this.angForm.patchValue({
                DIV_TO_YEAR: ''
            });
        }
    }
    //load table as per dividend from to range
    getDividendTable() {
        console.log('acType', this.acType);
        var memFrom = this.angForm.controls['AC_NOFrom'].value;
        var memTo = this.angForm.controls['AC_NOTo'].value;
        if (this.angForm.controls['AC_NOFrom'].value < this.angForm.controls['AC_NOTo'].value) {
            this.showTable = true;
            this.mem = [memFrom, memTo];
            // this.shareDatatable()
            this.http.get(this.url + '/year-wise-unpaid-dividend-entry/' + this.mem).subscribe((data) => {
                this.multiShare = data;
                console.log('multiShare', this.multiShare);
                this.multiShare.forEach(element => {
                    if (element.shareDividend == null) {
                        element.shareDividend = 0;
                    }
                });
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Select Different Member", "error");
            this.angForm.patchValue({
                AC_NOTo: ''
            });
        }
    }
    //push close date in multiDividend array
    getCloseDate(shareID, shareDivId, acno, date) {
        console.log('date', date);
        if (date != '') {
            debugger;
            if (this.multiDividend.length != 0) {
                if (this.multiDividend.some(item => item.AC_NO === acno)) {
                    this.multiDividend.forEach((element) => {
                        if (element.AC_NO == acno) {
                            element['MEMBER_CLOSE_DATE'] = date;
                            // element['MEMBER_CLOSE_DATE'] = (date == '' || date == 'Invalid date') ? date = '' : date = moment(date).format('DD/MM/YYYY')
                            console.log('ele date', element['MEMBER_CLOSE_DATE']);
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
                    console.log('object date', object['MEMBER_CLOSE_DATE']);
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
                console.log('object date', object['MEMBER_CLOSE_DATE']);
                this.multiDividend.push(object);
            }
        }
    }
    //push amount in multiDividend array
    getAmount(shareID, shareDivId, acno, amount) {
        if (amount != '') {
            if (this.multiDividend.length != 0) {
                if (this.multiDividend.some(item => item.AC_NO === acno)) {
                    this.multiDividend.forEach((element) => {
                        if (element.AC_NO == acno) {
                            this.totalAmt = this.totalAmt + Number(amount) - Number(element['DIVIDEND_AMOUNT']);
                            this.angForm.patchValue({
                                TOTAL_SHARES: this.totalAmt
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
                    this.totalAmt = this.totalAmt + Number(amount);
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
                this.totalAmt = this.totalAmt + Number(amount);
                this.angForm.patchValue({
                    TOTAL_SHARES: this.totalAmt
                });
            }
        }
    }
    // Method to insert data into database through NestJS
    submit() {
        let warrentDate;
        const formVal = this.angForm.value;
        const dataToSend = {
            'ACNOTYPE': formVal.ACNOTYPE,
            'ACTYPE': formVal.ACTYPE,
            'AC_SALARYDIVISION_CODE': formVal.AC_SALARYDIVISION_CODE,
            // 'WARRENT_DATE': formVal.WARRENT_DATE, 
            'WARRENT_DATE': (formVal.WARRENT_DATE == '' || formVal.WARRENT_DATE == 'Invalid date') ? warrentDate = '' : warrentDate = moment__WEBPACK_IMPORTED_MODULE_6__(formVal.WARRENT_DATE).format('DD/MM/YYYY'),
            'DIV_FROM_YEAR': formVal.DIV_FROM_YEAR,
            'DIV_TO_YEAR': formVal.DIV_TO_YEAR,
            'TOTAL_SHARES': formVal.TOTAL_SHARES,
            'ShareDividend': this.multiDividend
        };
        console.log('dataTosend', dataToSend);
        this.YearwiseunpaidService.postData(dataToSend).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Success!", "Data Added Successfully !", "success");
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Success!", "Record Updated Successfully !", "success");
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
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
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Deleted!", "Your data has been deleted.", "success");
                }),
                    (error) => {
                        console.log(error);
                    };
                // to reload after delete of data
                this.rerender();
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Cancelled", "Your data is safe.", "error");
            }
        });
    }
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
}
YearWiseUnpaidDividendEntryComponent.ɵfac = function YearWiseUnpaidDividendEntryComponent_Factory(t) { return new (t || YearWiseUnpaidDividendEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_year_wise_unpaid_dividend_entry_service__WEBPACK_IMPORTED_MODULE_8__["YearwiseunpaidService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SalaryDMasterdropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_share_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["ShareMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["SchemeCodeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dropdownService_share_scheme_dropdown_Service__WEBPACK_IMPORTED_MODULE_14__["ShareSchemeDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_customer_shares_master_shares_master_service__WEBPACK_IMPORTED_MODULE_15__["ShareMasterService"])); };
YearWiseUnpaidDividendEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YearWiseUnpaidDividendEntryComponent, selectors: [["app-year-wise-unpaid-dividend-entry"]], viewQuery: function YearWiseUnpaidDividendEntryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, decls: 89, vars: 34, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [1, "card-block"], [1, "col-sm"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["bindValue", "value", "id", "ACTYPE", "bindLabel", "label", "formControlName", "ACTYPE", "title", "Compulsory Selection", "required", "", "placeholder", "Scheme", 3, "ngModel", "ngClass", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "ACTYPE"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["bindValue", "value", "id", "AC_SALARYDIVISION_CODE", "bindLabel", "label", "formControlName", "AC_SALARYDIVISION_CODE", "title", "Compulsory Selection", "required", "", "placeholder", "Salary Division", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "AC_SALARYDIVISION_CODE"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "WARRENT_DATE", "id", "WARRENT_DATE", "required", "", "formControlName", "WARRENT_DATE", "minlength", "10", "maxlength", "10", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "ngClass", "keypress"], ["date", ""], ["for", "WARRENT_DATE"], ["type", "text", "name", "DIV_FROM_YEAR", "placeholder", " ", "id", "DIV_FROM_YEAR", "formControlName", "DIV_FROM_YEAR", "pattern", "^[0-9]+$", "minlength", "4", "maxlength", "4", "required", "", 1, "form-control", 3, "keypress", "focusout"], ["for", "DIV_FROM_YEAR"], ["type", "text", "name", "DIV_TO_YEAR", "placeholder", " ", "id", "DIV_TO_YEAR", "formControlName", "DIV_TO_YEAR", "disabled", "", 1, "form-control"], ["for", "DIV_TO_YEAR"], ["id", "AC_NOFrom", "bindValue", "value", "bindLabel", "AC_NO", "formControlName", "AC_NOFrom", "title", "Compulsory Selection", "placeholder", "Member From", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "AC_NOFrom"], ["id", "AC_NOTo", "bindValue", "value", "bindLabel", "AC_NO", "formControlName", "AC_NOTo", "title", "Compulsory Selection", "placeholder", "Member To", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["for", "AC_NOTo"], ["type", "text", "name", "TOTAL_SHARES", "placeholder", " ", "id", "TOTAL_SHARES", "formControlName", "TOTAL_SHARES", "disabled", "", 1, "form-control"], ["for", "TOTAL_SHARES"], [1, "col-sm", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "disabled", "click", 4, "ngIf"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "table-hover", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["type", "text", "name", "DIVIDEND_AMOUNT", "id", "DIVIDEND_AMOUNT", 3, "value", "focusout"], ["divAmt", ""], ["type", "text", "name", "DIVIDEND_AMOUNT", "id", "DIVIDEND_AMOUNT", "placeholder", "dd/mm/yyyy", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "value", "bsValueChange", "focusout"], ["closeDate", ""], [1, "no-data-available"]], template: function YearWiseUnpaidDividendEntryComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_ngModelChange_18_listener($event) { return ctx.acType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, YearWiseUnpaidDividendEntryComponent_ng_option_19_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Scheme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, YearWiseUnpaidDividendEntryComponent_div_24_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ng-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_ngModelChange_28_listener($event) { return ctx.ngSalary = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, YearWiseUnpaidDividendEntryComponent_ng_option_29_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Salary Division");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, YearWiseUnpaidDividendEntryComponent_div_34_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function YearWiseUnpaidDividendEntryComponent_Template_input_keypress_38_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Dividend Warrant Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, YearWiseUnpaidDividendEntryComponent_div_44_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function YearWiseUnpaidDividendEntryComponent_Template_input_keypress_48_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; })("focusout", function YearWiseUnpaidDividendEntryComponent_Template_input_focusout_48_listener() { return ctx.getDivYearTo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Dividend Year From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, YearWiseUnpaidDividendEntryComponent_div_53_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Dividend Year To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ng-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_ngModelChange_66_listener($event) { return ctx.ngAcnoFrom = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, YearWiseUnpaidDividendEntryComponent_ng_option_67_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Member From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ng-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_ngModelChange_73_listener($event) { return ctx.ngAcnoTo = $event; })("change", function YearWiseUnpaidDividendEntryComponent_Template_ng_select_change_73_listener() { return ctx.getDividendTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, YearWiseUnpaidDividendEntryComponent_ng_option_74_Template, 2, 2, "ng-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Member To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, YearWiseUnpaidDividendEntryComponent_button_84_Template, 2, 1, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, YearWiseUnpaidDividendEntryComponent_button_85_Template, 2, 0, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, YearWiseUnpaidDividendEntryComponent_button_87_Template, 2, 1, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, YearWiseUnpaidDividendEntryComponent_ng_container_88_Template, 16, 4, "ng-container", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.acType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SchemeCodeObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["ACTYPE"].invalid && (ctx.angForm.controls["ACTYPE"].dirty || ctx.angForm.controls["ACTYPE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngSalary)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SalaryDMasterObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_SALARYDIVISION_CODE"].invalid && (ctx.angForm.controls["AC_SALARYDIVISION_CODE"].dirty || ctx.angForm.controls["AC_SALARYDIVISION_CODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["WARRENT_DATE"].invalid && (ctx.angForm.controls["WARRENT_DATE"].dirty || ctx.angForm.controls["WARRENT_DATE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.angForm.controls["DIV_FROM_YEAR"].invalid && (ctx.angForm.controls["DIV_FROM_YEAR"].dirty || ctx.angForm.controls["DIV_FROM_YEAR"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngAcnoFrom)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ShareMasterObject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngAcnoTo)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c1, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ShareMasterObjectB);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newbtnShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["PatternValidator"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["ɵr"], angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9zaGFyZXMveWVhci13aXNlLXVucGFpZC1kaXZpZGVuZC1lbnRyeS95ZWFyLXdpc2UtdW5wYWlkLWRpdmlkZW5kLWVudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearWiseUnpaidDividendEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-year-wise-unpaid-dividend-entry",
                templateUrl: "./year-wise-unpaid-dividend-entry.component.html",
                styleUrls: ["./year-wise-unpaid-dividend-entry.component.scss"],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }, { type: _year_wise_unpaid_dividend_entry_service__WEBPACK_IMPORTED_MODULE_8__["YearwiseunpaidService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }, { type: _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["SalaryDMasterdropdownService"] }, { type: _shared_dropdownService_share_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["ShareMasterDropdownService"] }, { type: _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["SchemeCodeDropdownService"] }, { type: _customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIdService"] }, { type: _shared_dropdownService_share_scheme_dropdown_Service__WEBPACK_IMPORTED_MODULE_14__["ShareSchemeDropdownService"] }, { type: _customer_shares_master_shares_master_service__WEBPACK_IMPORTED_MODULE_15__["ShareMasterService"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: false }]
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
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["DatepickerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](YearWiseUnpaidDividendEntryModule, { declarations: [_year_wise_unpaid_dividend_entry_component__WEBPACK_IMPORTED_MODULE_4__["YearWiseUnpaidDividendEntryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _year_wise_unpaid_dividend_entry_routing_module__WEBPACK_IMPORTED_MODULE_3__["YearWiseUnpaidDividendEntryRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        // SelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["DatepickerModule"]] }); })();
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
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["DatepickerModule"].forRoot()
                ],
                declarations: [_year_wise_unpaid_dividend_entry_component__WEBPACK_IMPORTED_MODULE_4__["YearWiseUnpaidDividendEntryComponent"]],
                providers: [_year_wise_unpaid_dividend_entry_service__WEBPACK_IMPORTED_MODULE_7__["YearwiseunpaidService"],
                    _shared_dropdownService_scheme_code_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["SchemeCodeDropdownService"],
                    _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["SalaryDMasterdropdownService"],
                    _shared_dropdownService_share_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["ShareMasterDropdownService"],
                    _customer_shares_master_shares_master_service__WEBPACK_IMPORTED_MODULE_12__["ShareMasterService"],
                    _shared_dropdownService_share_scheme_dropdown_Service__WEBPACK_IMPORTED_MODULE_11__["ShareSchemeDropdownService"],
                    _customer_customer_id_customer_id_service__WEBPACK_IMPORTED_MODULE_13__["CustomerIdService"],
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