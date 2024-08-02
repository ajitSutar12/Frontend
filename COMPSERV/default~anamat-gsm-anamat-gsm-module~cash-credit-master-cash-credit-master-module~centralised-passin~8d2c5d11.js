(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~centralised-passin~8d2c5d11"],{

/***/ "./src/app/shared/dropdownService/cast-master-dropdown.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/dropdownService/cast-master-dropdown.service.ts ***!
  \************************************************************************/
/*! exports provided: CastMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastMasterService", function() { return CastMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class CastMasterService {
    constructor(http) {
        this.http = http;
        this.castMasterObject = new Array();
        // API 
        //// cast-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getCharacters() {
        throw new Error('Method not implemented.');
    }
    getcastList() {
        this.castMasterObject = [];
        return this.http.get(this.url + '/cast-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.NAME, value: element.id };
                this.castMasterObject.push(obj);
            });
            return this.castMasterObject;
        }));
    }
}
CastMasterService.ɵfac = function CastMasterService_Factory(t) { return new (t || CastMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CastMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CastMasterService, factory: CastMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CastMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dropdownService/city-master-dropdown.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/dropdownService/city-master-dropdown.service.ts ***!
  \************************************************************************/
/*! exports provided: cityMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityMasterService", function() { return cityMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class cityMasterService {
    constructor(http) {
        this.http = http;
        this.cityMasterObject = new Array();
        // API 
        //// city-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
    }
    // public getcityList() {
    //     this.cityMasterObject = [];
    //     return this.http.get<any>(this.url + '/city-master')
    //         .pipe(map(ele => {
    //             ele.forEach(element => {
    //                 let obj = { label:element.CITY_NAME, value: element.id };
    //                 this.cityMasterObject.push(obj)
    //             });
    //             return this.cityMasterObject;
    //         }));
    // }
    getcityList() {
        return this.http.get(this.url + '/city-master').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getcityList1() {
        this.cityMasterObject = [];
        return this.http.get(this.url + '/city-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.CITY_NAME, value: element.id, name: element.name
                };
                this.cityMasterObject.push(obj);
            });
            return this.cityMasterObject;
        }));
    }
}
cityMasterService.ɵfac = function cityMasterService_Factory(t) { return new (t || cityMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
cityMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: cityMasterService, factory: cityMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](cityMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dropdownService/document-master-dropdown.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/dropdownService/document-master-dropdown.service.ts ***!
  \****************************************************************************/
/*! exports provided: DocumentMasterDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentMasterDropdownService", function() { return DocumentMasterDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DocumentMasterDropdownService {
    constructor(http) {
        this.http = http;
        this.documentObject = new Array();
        // // document-master";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getDocumentMasterList() {
        this.documentObject = [];
        return this.http.get(this.url + '/document-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.NAME, value: element.id };
                this.documentObject.push(obj);
            });
            return this.documentObject;
        }));
    }
}
DocumentMasterDropdownService.ɵfac = function DocumentMasterDropdownService_Factory(t) { return new (t || DocumentMasterDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DocumentMasterDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DocumentMasterDropdownService, factory: DocumentMasterDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentMasterDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dropdownService/occupation-master-dropdown.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/dropdownService/occupation-master-dropdown.service.ts ***!
  \******************************************************************************/
/*! exports provided: OccupationMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupationMasterService", function() { return OccupationMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class OccupationMasterService {
    constructor(http) {
        this.http = http;
        this.occupationMasterObject = new Array();
        // API 
        // // occupation-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getoccupationList() {
        this.occupationMasterObject = [];
        return this.http.get(this.url + '/occupation-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.NAME, value: element.id };
                this.occupationMasterObject.push(obj);
            });
            return this.occupationMasterObject;
        }));
    }
}
OccupationMasterService.ɵfac = function OccupationMasterService_Factory(t) { return new (t || OccupationMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
OccupationMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OccupationMasterService, factory: OccupationMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OccupationMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dropdownService/prefix-master-dropdown.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/dropdownService/prefix-master-dropdown.service.ts ***!
  \**************************************************************************/
/*! exports provided: PrefixMasterDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixMasterDropdownService", function() { return PrefixMasterDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class PrefixMasterDropdownService {
    constructor(http) {
        this.http = http;
        this.prefixMasterObject = new Array();
        this.regprefixMasterObject = new Array();
        // url = 'http://localhost:4000/prefix-master';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getPrefixMasterList() {
        this.prefixMasterObject = [];
        return this.http.get(this.url + '/prefix-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.PREFIX, value: `${element.PREFIX}`, regValue: element.PREFIX_REG };
                this.prefixMasterObject.push(obj);
            });
            return this.prefixMasterObject;
        }));
    }
    getRegionalPrefixMasterList() {
        this.regprefixMasterObject = [];
        return this.http.get(this.url + '/prefix-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                if (element.PREFIX_REG != null) {
                    let obj = { label: element.PREFIX, value: `${element.PREFIX}`, regValue: element.PREFIX_REG };
                    this.regprefixMasterObject.push(obj);
                }
            });
            return this.regprefixMasterObject;
        }));
    }
}
PrefixMasterDropdownService.ɵfac = function PrefixMasterDropdownService_Factory(t) { return new (t || PrefixMasterDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PrefixMasterDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrefixMasterDropdownService, factory: PrefixMasterDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrefixMasterDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dropdownService/risk-category-dropdown.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/dropdownService/risk-category-dropdown.service.ts ***!
  \**************************************************************************/
/*! exports provided: RiskCategoryDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskCategoryDropdownService", function() { return RiskCategoryDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class RiskCategoryDropdownService {
    constructor(http) {
        this.http = http;
        // // risk-catagory";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.riskCatObject = new Array();
    }
    getRiskCategoryList() {
        this.riskCatObject = [];
        return this.http.get(this.url + '/risk-catagory')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.NAME, value: element.id };
                this.riskCatObject.push(obj);
            });
            return this.riskCatObject;
        }));
    }
}
RiskCategoryDropdownService.ɵfac = function RiskCategoryDropdownService_Factory(t) { return new (t || RiskCategoryDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RiskCategoryDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RiskCategoryDropdownService, factory: RiskCategoryDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RiskCategoryDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

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

/***/ "./src/app/theme/master/customer/customer-id/customer-id-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/master/customer/customer-id/customer-id-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerIdRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerIdRoutingModule", function() { return CustomerIdRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _customer_id_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-id.component */ "./src/app/theme/master/customer/customer-id/customer-id.component.ts");





const routes = [
    {
        path: '',
        component: _customer_id_component__WEBPACK_IMPORTED_MODULE_2__["CustomerIdComponent"],
        data: {
            title: 'Customer Id',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class CustomerIdRoutingModule {
}
CustomerIdRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomerIdRoutingModule });
CustomerIdRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomerIdRoutingModule_Factory(t) { return new (t || CustomerIdRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerIdRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerIdRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/customer/customer-id/customer-id.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/master/customer/customer-id/customer-id.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerIdComponent", function() { return CustomerIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _customer_id_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_prefix_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/dropdownService/prefix-master-dropdown.service */ "./src/app/shared/dropdownService/prefix-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/cast-master-dropdown.service */ "./src/app/shared/dropdownService/cast-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_occupation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/dropdownService/occupation-master-dropdown.service */ "./src/app/shared/dropdownService/occupation-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/salary-division-master-dropdown.service */ "./src/app/shared/dropdownService/salary-division-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/dropdownService/city-master-dropdown.service */ "./src/app/shared/dropdownService/city-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_risk_category_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/dropdownService/risk-category-dropdown.service */ "./src/app/shared/dropdownService/risk-category-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_document_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/dropdownService/document-master-dropdown.service */ "./src/app/shared/dropdownService/document-master-dropdown.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _submit_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../submit.directive */ "./src/app/theme/submit.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _theme_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../theme.directive */ "./src/app/theme/theme.directive.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../button.directive */ "./src/app/theme/button.directive.ts");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



// Creating and maintaining form fields with validation

// Displaying Sweet Alert

// Angular Datatable Directive




























const _c0 = ["autofocus"];
const _c1 = ["ngSelect"];
const _c2 = ["modalLarge"];
const _c3 = ["triggerhide"];
function CustomerIdComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Fields marked with (");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "sub", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ") are mandatory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CustomerIdComponent_ng_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r49.label, " ");
} }
function CustomerIdComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This is required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_37_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.angForm.controls["AC_TITLE"].errors == null ? null : ctx_r4.angForm.controls["AC_TITLE"].errors.required);
} }
function CustomerIdComponent_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only A-Z ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_47_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r6.angForm.controls["L_NAME"].errors == null ? null : ctx_r6.angForm.controls["L_NAME"].errors.pattern) || (ctx_r6.angForm.controls["L_NAME"].errors == null ? null : ctx_r6.angForm.controls["L_NAME"].errors.required));
} }
function CustomerIdComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only A-Z ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_56_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r7.angForm.controls["F_NAME"].errors == null ? null : ctx_r7.angForm.controls["F_NAME"].errors.pattern) || (ctx_r7.angForm.controls["F_NAME"].errors == null ? null : ctx_r7.angForm.controls["F_NAME"].errors.required));
} }
function CustomerIdComponent_div_65_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only A-Z ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_65_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r8.angForm.controls["M_NAME"].errors == null ? null : ctx_r8.angForm.controls["M_NAME"].errors.pattern) || (ctx_r8.angForm.controls["M_NAME"].errors == null ? null : ctx_r8.angForm.controls["M_NAME"].errors.required));
} }
function CustomerIdComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_div_66_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.fullname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r9.isFullNameDisabled)("ngModel", ctx_r9.fullname)("value", ctx_r9.lname + " " + ctx_r9.fname + " " + ctx_r9.mname);
} }
function CustomerIdComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_div_67_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.fullname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r10.isFullNameDisabled)("ngModel", ctx_r10.fullname)("value", ctx_r10.lname + " " + ctx_r10.fname + " " + ctx_r10.mname + " " + ctx_r10.fullname + " ");
} }
const _c4 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
const _c5 = function (a0) { return { "form-submitted": a0 }; };
function CustomerIdComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Proprietor/Chairman Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_div_68_Template_input_keypress_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 48 && $event.charCode < 58 || $event.charCode >= 97 && $event.charCode <= 122; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Registration No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 115, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.Tab", function CustomerIdComponent_div_68_Template_input_keydown_Tab_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); return _r58.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Registration Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_div_68_Template_input_keypress_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 48 && $event.charCode < 58 || $event.charCode >= 97 && $event.charCode <= 122; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "GST Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_div_68_Template_input_keypress_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 48 && $event.charCode < 58 || $event.charCode >= 97 && $event.charCode <= 122; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "TAN Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_div_68_Template_input_keypress_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 48 && $event.charCode < 58 || $event.charCode >= 97 && $event.charCode <= 122; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Corporate Identity Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c4))("maxDate", ctx_r11.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c5, ctx_r11.formSubmitted))("bsValue", ctx_r11.bsValue);
} }
function CustomerIdComponent_ng_option_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r66.label, " ");
} }
function CustomerIdComponent_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_81_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.angForm.controls["AC_TITLE_REG"].errors == null ? null : ctx_r14.angForm.controls["AC_TITLE_REG"].errors.required);
} }
function CustomerIdComponent_div_91_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_91_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.angForm.controls["L_NAME_REG"].errors == null ? null : ctx_r16.angForm.controls["L_NAME_REG"].errors.required);
} }
function CustomerIdComponent_div_100_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_100_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.angForm.controls["F_NAME_REG"].errors == null ? null : ctx_r17.angForm.controls["F_NAME_REG"].errors.required);
} }
function CustomerIdComponent_div_109_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_109_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.angForm.controls["M_NAME_REG"].errors == null ? null : ctx_r18.angForm.controls["M_NAME_REG"].errors.required);
} }
function CustomerIdComponent_ng_option_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r71.label, " ");
} }
function CustomerIdComponent_ng_option_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r72.label, " ");
} }
function CustomerIdComponent_ng_option_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r73.label, " ");
} }
function CustomerIdComponent_div_150_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9( It should have 12 digits and It should not start with 0 and 1 ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_150_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r26.angForm.controls["AC_ADHARNO"].errors == null ? null : ctx_r26.angForm.controls["AC_ADHARNO"].errors.pattern) || (ctx_r26.angForm.controls["AC_ADHARNO"].errors == null ? null : ctx_r26.angForm.controls["AC_ADHARNO"].errors.maxlength) || (ctx_r26.angForm.controls["AC_ADHARNO"].errors == null ? null : ctx_r26.angForm.controls["AC_ADHARNO"].errors.minlength));
} }
function CustomerIdComponent_div_157_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter Uppercase letters and digits only(It should have 10 letters and digits) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_157_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r27.angForm.controls["AC_PANNO"].errors == null ? null : ctx_r27.angForm.controls["AC_PANNO"].errors.pattern) || (ctx_r27.angForm.controls["AC_PANNO"].errors == null ? null : ctx_r27.angForm.controls["AC_PANNO"].errors.minlength));
} }
function CustomerIdComponent_div_168_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter Valid Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_168_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.angForm.controls["AC_BIRTH_DT"].errors == null ? null : ctx_r30.angForm.controls["AC_BIRTH_DT"].errors.required);
} }
function CustomerIdComponent_div_176_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_176_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.angForm.controls["AC_HONO"].errors == null ? null : ctx_r31.angForm.controls["AC_HONO"].errors.pattern);
} }
function CustomerIdComponent_div_183_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_183_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r32.angForm.controls["AC_WARD"].errors == null ? null : ctx_r32.angForm.controls["AC_WARD"].errors.pattern);
} }
function CustomerIdComponent_div_190_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_190_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.angForm.controls["AC_ADDR"].errors == null ? null : ctx_r33.angForm.controls["AC_ADDR"].errors.pattern);
} }
function CustomerIdComponent_div_197_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_197_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r34.angForm.controls["AC_GALLI"].errors == null ? null : ctx_r34.angForm.controls["AC_GALLI"].errors.pattern);
} }
function CustomerIdComponent_div_204_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_204_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_204_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.angForm.controls["AC_AREA"].errors == null ? null : ctx_r35.angForm.controls["AC_AREA"].errors.pattern);
} }
function CustomerIdComponent_div_215_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_215_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_215_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r37.angForm.controls["AC_CTCODE"].errors == null ? null : ctx_r37.angForm.controls["AC_CTCODE"].errors.required);
} }
function CustomerIdComponent_div_222_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_222_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_222_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r38.angForm.controls["AC_PIN"].errors == null ? null : ctx_r38.angForm.controls["AC_PIN"].errors.pattern) || (ctx_r38.angForm.controls["AC_PIN"].errors == null ? null : ctx_r38.angForm.controls["AC_PIN"].errors.minlength) || (ctx_r38.angForm.controls["AC_PIN"].errors == null ? null : ctx_r38.angForm.controls["AC_PIN"].errors.maxlength));
} }
function CustomerIdComponent_div_236_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 and It starts by either for 7 or 8 or 9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_236_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_236_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r39.angForm.controls["AC_MOBILENO"].errors == null ? null : ctx_r39.angForm.controls["AC_MOBILENO"].errors.pattern) || (ctx_r39.angForm.controls["AC_MOBILENO"].errors == null ? null : ctx_r39.angForm.controls["AC_MOBILENO"].errors.maxlength) || (ctx_r39.angForm.controls["AC_MOBILENO"].errors == null ? null : ctx_r39.angForm.controls["AC_MOBILENO"].errors.minlength));
} }
function CustomerIdComponent_div_243_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 and It starts by 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_243_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r40.angForm.controls["AC_PHONE_RES"].errors == null ? null : ctx_r40.angForm.controls["AC_PHONE_RES"].errors.pattern) || (ctx_r40.angForm.controls["AC_PHONE_RES"].errors == null ? null : ctx_r40.angForm.controls["AC_PHONE_RES"].errors.maxlength) || (ctx_r40.angForm.controls["AC_PHONE_RES"].errors == null ? null : ctx_r40.angForm.controls["AC_PHONE_RES"].errors.minlength));
} }
function CustomerIdComponent_div_250_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_250_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_250_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r41.angForm.controls["AC_PHONE_OFFICE"].errors == null ? null : ctx_r41.angForm.controls["AC_PHONE_OFFICE"].errors.pattern) || (ctx_r41.angForm.controls["AC_PHONE_OFFICE"].errors == null ? null : ctx_r41.angForm.controls["AC_PHONE_OFFICE"].errors.maxlength) || (ctx_r41.angForm.controls["AC_PHONE_OFFICE"].errors == null ? null : ctx_r41.angForm.controls["AC_PHONE_OFFICE"].errors.minlength));
} }
function CustomerIdComponent_div_257_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter valid Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_257_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_257_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r42.angForm.controls["AC_EMAILID"].errors == null ? null : ctx_r42.angForm.controls["AC_EMAILID"].errors.pattern);
} }
function CustomerIdComponent_div_283_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This is required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_283_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_283_div_17_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r90.angForm.controls["SUBMIT_DATE"].errors == null ? null : ctx_r90.angForm.controls["SUBMIT_DATE"].errors.required);
} }
function CustomerIdComponent_div_283_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 125, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CustomerIdComponent_div_283_Template_input_keyup_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r92.addhyphen(_r88.value); })("keypress", function CustomerIdComponent_div_283_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); return $event.charCode >= 48 && $event.charCode < 58; })("ngModelChange", function CustomerIdComponent_div_283_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r95.ngfinyear = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Financial Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 128, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_div_283_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r96.ngSubmitDate = $event; })("keypress", function CustomerIdComponent_div_283_Template_input_keypress_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; })("keydown.Tab", function CustomerIdComponent_div_283_Template_input_keydown_Tab_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); return _r89.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Submission Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "sub", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CustomerIdComponent_div_283_div_17_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Form Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerIdComponent_div_283_Template_input_change_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r99.isForm15A(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Form - 15 A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerIdComponent_div_283_Template_input_change_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r100.isForm15A(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Form - 15 H ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerIdComponent_div_283_Template_input_change_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r101.isForm15A(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Form - 15 G ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerIdComponent_div_283_Template_input_change_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r102.isForm15A(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Form - 60 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r43.ngfinyear);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c4))("maxDate", ctx_r43.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c5, ctx_r43.formSubmitted))("ngModel", ctx_r43.ngSubmitDate)("bsValue", ctx_r43.bsValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r43.angForm.controls["SUBMIT_DATE"].invalid && (ctx_r43.angForm.controls["SUBMIT_DATE"].dirty || ctx_r43.angForm.controls["SUBMIT_DATE"].touched));
} }
function CustomerIdComponent_div_284_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_284_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_284_div_11_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r104.angForm.controls["TDS_RATE"].errors == null ? null : ctx_r104.angForm.controls["TDS_RATE"].errors.pattern);
} }
function CustomerIdComponent_div_284_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_284_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_284_div_18_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r105.angForm.controls["TDS_LIMIT"].errors == null ? null : ctx_r105.angForm.controls["TDS_LIMIT"].errors.pattern);
} }
function CustomerIdComponent_div_284_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Form - 15 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 139, 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CustomerIdComponent_div_284_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r108.checkmargin(_r103.value); })("keypress", function CustomerIdComponent_div_284_Template_input_keypress_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "TDS Rate %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CustomerIdComponent_div_284_div_11_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_div_284_Template_input_keypress_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "TDS Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CustomerIdComponent_div_284_div_18_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r44.angForm.controls["TDS_RATE"].invalid && (ctx_r44.angForm.controls["TDS_RATE"].dirty || ctx_r44.angForm.controls["TDS_RATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r44.angForm.controls["TDS_LIMIT"].invalid && (ctx_r44.angForm.controls["TDS_LIMIT"].dirty || ctx_r44.angForm.controls["TDS_LIMIT"].touched));
} }
function CustomerIdComponent_div_285_tbody_18_tr_1_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 166);
} }
function CustomerIdComponent_div_285_tbody_18_tr_1_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 167);
} }
function CustomerIdComponent_div_285_tbody_18_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModeChange", function CustomerIdComponent_div_285_tbody_18_tr_1_Template_input_ngModeChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r123.file = $event; })("change", function CustomerIdComponent_div_285_tbody_18_tr_1_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124); const indexOfelement_r120 = ctx.index; const data_r119 = ctx.$implicit; const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r125.fileChangeEvent($event, indexOfelement_r120, data_r119.DOCUMENT_CODE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_div_285_tbody_18_tr_1_Template_span_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124); const data_r119 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); _r114.show(); return ctx_r126.viewImagePreview($event, data_r119.DOCUMENT_CODE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CustomerIdComponent_div_285_tbody_18_tr_1_span_15_Template, 1, 0, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CustomerIdComponent_div_285_tbody_18_tr_1_span_17_Template, 1, 0, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r119 = ctx.$implicit;
    const indexOfelement_r120 = ctx.index;
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r119.schemeDocumentMaster == null ? null : data_r119.schemeDocumentMaster.NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "file" + indexOfelement_r120)("ngMode", ctx_r118.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r119.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !data_r119.status);
} }
function CustomerIdComponent_div_285_tbody_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_285_tbody_18_tr_1_Template, 18, 5, "tr", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r112.customerDoc);
} }
function CustomerIdComponent_div_285_tbody_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_285_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r115.selectedImagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CustomerIdComponent_div_285_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "iframe", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r116.urlMap, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
function CustomerIdComponent_div_285_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No File For Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_285_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Document Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Upload Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "View Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CustomerIdComponent_div_285_tbody_18_Template, 2, 1, "tbody", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CustomerIdComponent_div_285_tbody_19_Template, 4, 0, "tbody", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "app-modal-basic", 147, 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_div_285_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r128); const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return _r114.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CustomerIdComponent_div_285_div_30_Template, 2, 1, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CustomerIdComponent_div_285_div_31_Template, 2, 1, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CustomerIdComponent_div_285_p_32_Template, 2, 0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_div_285_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r128); const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return _r114.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r45.customerDoc == null ? null : ctx_r45.customerDoc.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r45.customerDoc == null ? null : ctx_r45.customerDoc.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dialogClass", "modal-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r45.isImgPreview && (ctx_r45.selectedImagePreview.startsWith("data:image") || ctx_r45.selectedImagePreview.toLowerCase().endsWith(".jpg") || ctx_r45.selectedImagePreview.toLowerCase().endsWith(".jpeg") || ctx_r45.selectedImagePreview.toLowerCase().endsWith(".png")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r45.isPdf || ctx_r45.isImgPreview && (ctx_r45.selectedImagePreview.startsWith("data:application/pdf") || ctx_r45.selectedImagePreview.toLowerCase().endsWith(".pdf")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r45.isImgPreview && !ctx_r45.isPdf);
} }
function CustomerIdComponent_ng_container_286_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_ng_container_286_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r134); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31); ctx_r133.submit($event); return _r2.focus(); })("keydown.Tab", function CustomerIdComponent_ng_container_286_button_4_Template_button_keydown_Tab_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r134); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r135.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_ng_container_286_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_ng_container_286_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r137); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31); ctx_r136.addNewData(); return _r2.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_ng_container_286_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_ng_container_286_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r139); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31); ctx_r138.updateData(); return _r2.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_ng_container_286_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomerIdComponent_ng_container_286_button_4_Template, 2, 0, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CustomerIdComponent_ng_container_286_button_5_Template, 2, 0, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CustomerIdComponent_ng_container_286_button_7_Template, 2, 0, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.showButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.newbtnShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r46.updateShow);
} }
function CustomerIdComponent_ng_container_287_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_ng_container_287_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r142); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r141.submit($event); return ctx_r141.onCloseModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add and close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r140.angForm.invalid);
} }
function CustomerIdComponent_ng_container_287_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomerIdComponent_ng_container_287_button_4_Template, 2, 1, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r47.showButton);
} }
function CustomerIdComponent_ng_container_288_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_ng_container_288_tbody_9_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r149); const data_r147 = ctx.$implicit; const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); ctx_r148.editClickHandler(data_r147.id); return ctx_r148.gotoTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r147 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r147.AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r147.AC_MEMBNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.AC_MEMBNO === "" ? "-" : data_r147.AC_MEMBNO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r147.AC_MEMBTYPE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.AC_MEMBTYPE === "" ? "-" : data_r147.AC_MEMBTYPE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r147.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (data_r147.castMaster == null ? null : data_r147.castMaster.NAME) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.AC_CAST === "" || data_r147.AC_CAST === null ? "-" : data_r147.castMaster == null ? null : data_r147.castMaster.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (data_r147.occupMaster == null ? null : data_r147.occupMaster.NAME) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.AC_OCODE === "" || data_r147.AC_OCODE === null ? "-" : data_r147.occupMaster == null ? null : data_r147.occupMaster.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (data_r147.riskCategory == null ? null : data_r147.riskCategory.NAME) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.AC_RISKCATG === "" || data_r147.AC_RISKCATG === null ? "-" : data_r147.riskCategory == null ? null : data_r147.riskCategory.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r147.AC_ADHARNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.AC_ADHARNO === "" ? "-" : data_r147.AC_ADHARNO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r147.AC_PANNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.AC_PANNO === "" ? "-" : data_r147.AC_PANNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r147.GST_NO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.GST_NO === "" ? "-" : data_r147.GST_NO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r147.TAN_NO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.TAN_NO === "" ? "-" : data_r147.TAN_NO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r147.REG_NO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.REG_NO === "" ? "-" : data_r147.REG_NO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r147.REG_DATE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.REG_DATE === "" ? "-" : data_r147.REG_DATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r147.PROP_NAME === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.PROP_NAME === "" ? "-" : data_r147.PROP_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r147.AC_BIRTH_DT === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.AC_BIRTH_DT === "" ? "-" : data_r147.AC_BIRTH_DT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r147.AC_MOBILENO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.AC_MOBILENO === "" ? "-" : data_r147.AC_MOBILENO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r147.AC_EMAILID === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r147.AC_EMAILID === "" ? "-" : data_r147.AC_EMAILID, "");
} }
function CustomerIdComponent_ng_container_288_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_ng_container_288_tbody_9_tr_1_Template, 37, 32, "tr", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r143.customerMaster);
} }
function CustomerIdComponent_ng_container_288_tbody_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_ng_container_288_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CustomerIdComponent_ng_container_288_tbody_9_Template, 2, 1, "tbody", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CustomerIdComponent_ng_container_288_tbody_10_Template, 4, 0, "tbody", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tfoot", 182, 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r48.dtExportButtonOptions)("dtTrigger", ctx_r48.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r48.customerMaster == null ? null : ctx_r48.customerMaster.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r48.customerMaster == null ? null : ctx_r48.customerMaster.length) == 0);
} }
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
// Handling datatable data
class DataTableResponse {
}
class CustomerIdComponent {
    constructor(http, customerIdService, fb, prefixMaster, castService, occupationMaster, salaryDMaster, cityMaster, riskCategoryDropdown, documentMasterService, router, sanitizer, systemParameter) {
        this.http = http;
        this.customerIdService = customerIdService;
        this.fb = fb;
        this.prefixMaster = prefixMaster;
        this.castService = castService;
        this.occupationMaster = occupationMaster;
        this.salaryDMaster = salaryDMaster;
        this.cityMaster = cityMaster;
        this.riskCategoryDropdown = riskCategoryDropdown;
        this.documentMasterService = documentMasterService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.systemParameter = systemParameter;
        this.formSubmitted = false;
        this.newCustomerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visible = false;
        this.visibleAnimate = false;
        this.closeModalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //api
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].base_url;
        this.imageObject = new Array();
        // status variables
        this.yes = false;
        this.no = true;
        this.fname = "";
        this.mname = "";
        this.lname = "";
        this.fullname = "";
        this.lnamereg = "";
        this.fnamereg = "";
        this.mnamereg = "";
        this.fullnamereg = "";
        this.acTitle = "";
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //Datatable variable
        this.dtExportButtonOptions = {};
        this.dtExportOptions = {};
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
        //variable to get ID to update
        this.updateID = 0;
        // Filter Variable
        this.filterData = {};
        this.isDocument = false;
        this.isTdsForm = false;
        this.isTdsFormA = false;
        this.SUBMIT_DATE = false;
        this.enablefields = true;
        this.hasFocus = false;
        this.ngselectbool = true;
        this.focus = true;
        this.selectedImgArrayDetails = [];
        this.isImgPreview = false;
        this.showImage = false;
        //dropdown ngModel variables
        this.ngCast = null;
        this.ngoccupation = null;
        this.ngRisk = null;
        this.ngCity = null;
        this.ngTitle = null;
        this.ngTitlereg = null;
        this.fileuploaded = false;
        this.filenotuploaded = true;
        this.FinYear = '';
        this.autofacus = false;
        //Method for append data into fields
        this.file = null;
        // viewImagePreview(ele, id) {
        //   if (this.selectedImgArrayDetails.length != 0) {
        //     for (const [key, value] of Object.entries(this.selectedImgArrayDetails)) {
        //       let jsonObj = value;
        //       Object.keys(jsonObj).forEach(key => {
        //         if (id == key) {
        //           this.isImgPreview = true
        //           this.selectedImagePreview = jsonObj[key];
        //           this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedImagePreview);
        //           throw 'Break';
        //         }
        //         else {
        //           this.isImgPreview = false
        //           this.selectedImagePreview = ''
        //         }
        //       });
        //     }
        //   }
        //   else {
        //     this.isImgPreview = false
        //     this.selectedImagePreview = ''
        //   }
        // }
        //new CODE
        this.isPdf = false;
        this.isapplicable = false;
        this.isable = true;
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate());
        this.systemParameter.getFormData(1).subscribe(data => {
            this.maxDate = moment__WEBPACK_IMPORTED_MODULE_8__(data.CURRENT_DATE, 'DD/MM/YYYY');
            this.maxDate = this.maxDate._d;
            // if (this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY'))
            // {
            //   this.el.nativeElement.className = "form-control ng-untouched ng-valid"
            // };
        });
    }
    addNewCustomer(value) {
        this.newCustomerEvent.emit(value);
    }
    ngOnInit() {
        this.createForm();
        let finYear;
        let dat = localStorage.getItem('user');
        let result1 = JSON.parse(dat);
        var sysDate;
        let ssysDate = moment__WEBPACK_IMPORTED_MODULE_8__(result1.branch.syspara.CURRENT_DATE, 'DD-MM-YYYY');
        sysDate = (ssysDate['_d']);
        var year = sysDate.getFullYear();
        var month = sysDate.getMonth();
        month > 2 ? finYear = year : finYear = year - 1;
        this.FinYear = finYear + '-' + Number(finYear + 1);
        // let use = JSON.parse(localStorage.getItem('use'));
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.CODE;
        // Fetching Server side data
        this.dtExportButtonOptions = {
            pagingType: "full_numbers",
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                dataTableParameters.columns.forEach((element) => {
                    if (element.search.value != "") {
                        let string = element.search.value;
                        this.filterData[element.data] = string;
                    }
                    else {
                        let getColumnName = element.data;
                        let columnValue = element.value;
                        if (this.filterData.hasOwnProperty(element.data)) {
                            let value = this.filterData[getColumnName];
                            if (columnValue != undefined || value != undefined) {
                                delete this.filterData[element.data];
                            }
                        }
                    }
                });
                dataTableParameters['branchCode'] = result.branchId;
                dataTableParameters["filterData"] = this.filterData;
                this.http
                    .post(this.url + "/customer-id", dataTableParameters)
                    .subscribe((resp) => {
                    this.customerMaster = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsTotal,
                        data: [],
                    });
                });
            },
            columns: [
                {
                    title: "Action",
                },
                {
                    title: " Customer ID",
                    data: "AC_NO",
                },
                {
                    title: "Member Number",
                    data: "AC_MEMBNO",
                },
                {
                    title: "Member Scheme",
                    data: "AC_MEMBTYPE",
                },
                {
                    title: "Full Name",
                    data: "AC_NAME",
                },
                {
                    title: "Cast",
                    data: "AC_CAST",
                },
                {
                    title: "Occupation",
                    data: "AC_OCODE",
                },
                {
                    title: "Risk Category",
                    data: "AC_RISKCATG",
                },
                {
                    title: "Adhar Card Number",
                    data: "AC_ADHARNO",
                },
                {
                    title: "PAN Number",
                    data: "AC_PANNO",
                },
                {
                    title: "GST Number",
                    data: "GST_NO",
                },
                {
                    title: "TAN Number",
                    data: "TAN_NO",
                },
                {
                    title: "Registration Number",
                    data: "REG_NO",
                },
                {
                    title: "Registration Date",
                    data: "REG_DATE",
                },
                {
                    title: "Proprietor Name",
                    data: "PROP_NAME",
                },
                {
                    title: "Birth Date",
                    data: "AC_BIRTH_DT",
                },
                {
                    title: "Mobile Number",
                    data: "AC_MOBILENO",
                },
                {
                    title: "Email ID",
                    data: "AC_EMAILID",
                },
            ],
            dom: "Blrtip",
        };
        this.dtExportOptions = {
            pagingType: "full_numbers",
            paging: true,
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTableParameters, callback) => {
                dataTableParameters.minNumber = dataTableParameters.start + 1;
                dataTableParameters.maxNumber =
                    dataTableParameters.start + dataTableParameters.length;
                let datatableRequestParam;
                this.page = dataTableParameters.start / dataTableParameters.length;
                this.http
                    .post(this.url + "/document-master", dataTableParameters)
                    .subscribe((resp) => {
                    this.documentMaster = resp.data;
                    callback({
                        recordsTotal: resp.recordsTotal,
                        recordsFiltered: resp.recordsTotal,
                        data: resp.data,
                    });
                });
            },
            columnDefs: [
                {
                    targets: "_all",
                    defaultContent: "",
                },
            ],
            columns: [
                {
                    title: "Action",
                    data: "NAME",
                },
            ],
        };
        this.prefixMaster.getPrefixMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe((data) => {
            this.prifix = data;
        });
        this.prefixMaster.getRegionalPrefixMasterList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe((data) => {
            this.regPrifix = data;
        });
        this.documentMasterService
            .getDocumentMasterList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe((data) => {
            this.documentMaster = data;
        });
        this.castService
            .getcastList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe((data) => {
            this.castMaster = data;
        });
        this.occupationMaster
            .getoccupationList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe((data) => {
            this.occupation = data;
        });
        if (result.RoleDefine[0].Role.id == 1) {
            this.salaryDMaster
                .getSalaryDMasterList(branchCode)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe((data) => {
                this.salaryDivision = data;
            });
        }
        else {
            this.salaryDMaster
                .getSalaryDMasterList(branchCode)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe((data) => {
                this.salaryDivision = data;
            });
        }
        this.cityMaster.getcityList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe((data) => {
            this.city = data;
        });
        this.riskCategoryDropdown
            .getRiskCategoryList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe((data) => {
            this.risk = data;
        });
    }
    createForm() {
        this.angForm = this.fb.group({
            AC_NO: [""],
            AC_MEMBTYPE: [""],
            AC_MEMBNO: [""],
            AC_TITLE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            F_NAME: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            M_NAME: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            L_NAME: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_TITLE_REG: [""],
            F_NAME_REG: [""],
            M_NAME_REG: [""],
            L_NAME_REG: [""],
            AC_ADD_REG: [''],
            AC_NAME_REG: [''],
            AC_NAME: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_CAST: [""],
            AC_OCODE: [""],
            AC_ADHARNO: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_RISKCATG: [""],
            AC_BIRTH_DT: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_HONO: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_WARD: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_ADDR: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_GALLI: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_AREA: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_CTCODE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            AC_PIN: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_SALARYDIVISION_CODE: [""],
            AC_PANNO: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_MOBILENO: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_PHONE_RES: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_PHONE_OFFICE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            AC_EMAILID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            TDSDOCUMNET: [""],
            AC_IS_RECOVERY: [],
            TDS_REQUIRED: [],
            SMS_REQUIRED: [],
            IS_KYC_RECEIVED: [],
            FIN_YEAR: [""],
            SUBMIT_DATE: [""],
            FORM_TYPE: [""],
            TDS_RATE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            TDS_LIMIT: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            BRANCH_CODE: [],
            PROP_NAME: [""],
            REG_NO: [""],
            REG_DATE: [""],
            GST_NO: [""],
            TAN_NO: [""],
            COP_NO: [""],
        });
        this.documentUpload();
    }
    // Method to insert data into database through NestJS
    submit(event) {
        var _a, _b, _c, _e, _f, _g, _h, _j;
        // debugger
        let birthdate;
        let submitdate;
        let regdate;
        event.preventDefault();
        this.formSubmitted = true;
        if (this.angForm.controls['TDSDOCUMNET'].value == true) {
            this.SUBMIT_DATE = true;
        }
        else {
            this.SUBMIT_DATE = false;
        }
        if (this.angForm.valid) {
            let data = localStorage.getItem('user');
            let result = JSON.parse(data);
            let branchCode = result.branchId;
            const formVal = this.angForm.value;
            const dataToSend = {
                'AC_NO': formVal.AC_NO,
                'AC_MEMBTYPE': formVal.AC_MEMBTYPE,
                'AC_MEMBNO': formVal.AC_MEMBNO,
                'AC_TITLE': formVal.AC_TITLE,
                'F_NAME': (_a = formVal.F_NAME) === null || _a === void 0 ? void 0 : _a.toUpperCase(),
                'M_NAME': (_b = formVal.M_NAME) === null || _b === void 0 ? void 0 : _b.toUpperCase(),
                'L_NAME': (_c = formVal.L_NAME) === null || _c === void 0 ? void 0 : _c.toUpperCase(),
                'AC_NAME': (_e = (formVal.L_NAME + ' ' + formVal.F_NAME + ' ' + formVal.M_NAME)) === null || _e === void 0 ? void 0 : _e.toUpperCase(),
                'AC_TITLE_REG': formVal.AC_TITLE_REG,
                'F_NAME_REG': (_f = formVal.F_NAME_REG) === null || _f === void 0 ? void 0 : _f.toUpperCase(),
                'M_NAME_REG': (_g = formVal.M_NAME_REG) === null || _g === void 0 ? void 0 : _g.toUpperCase(),
                'L_NAME_REG': (_h = formVal.L_NAME_REG) === null || _h === void 0 ? void 0 : _h.toUpperCase(),
                'AC_NAME_REG': (_j = (formVal.L_NAME_REG + ' ' + formVal.F_NAME_REG + ' ' + formVal.M_NAME_REG)) === null || _j === void 0 ? void 0 : _j.toUpperCase(),
                'AC_ADD_REG': formVal.AC_ADD_REG,
                'AC_CAST': parseInt(formVal.AC_CAST),
                'AC_OCODE': parseInt(formVal.AC_OCODE),
                'AC_ADHARNO': formVal.AC_ADHARNO,
                'AC_RISKCATG': parseInt(formVal.AC_RISKCATG),
                'AC_BIRTH_DT': (formVal.AC_BIRTH_DT == '' || formVal.AC_BIRTH_DT == 'Invalid date') ? birthdate = '' : birthdate = moment__WEBPACK_IMPORTED_MODULE_8__(formVal.AC_BIRTH_DT).format('DD/MM/YYYY'),
                'AC_SALARYDIVISION_CODE': formVal.AC_SALARYDIVISION_CODE,
                'AC_MOBILENO': formVal.AC_MOBILENO,
                'AC_PHONE_RES': formVal.AC_PHONE_RES,
                'AC_PANNO': formVal.AC_PANNO,
                'AC_PHONE_OFFICE': formVal.AC_PHONE_OFFICE,
                'AC_EMAILID': formVal.AC_EMAILID,
                'AC_IS_RECOVERY': formVal.AC_IS_RECOVERY,
                'TDS_REQUIRED': (formVal.TDS_REQUIRED == true ? '1' : '0'),
                'SMS_REQUIRED': (formVal.SMS_REQUIRED == true ? '1' : '0'),
                'IS_KYC_RECEIVED': (formVal.IS_KYC_RECEIVED == true ? '1' : '0'),
                'TDSDOCUMNET': (formVal.TDSDOCUMNET == true ? '1' : '0'),
                'AC_HONO': formVal.AC_HONO,
                'AC_WARD': formVal.AC_WARD,
                'AC_ADDR': formVal.AC_ADDR,
                'AC_GALLI': formVal.AC_GALLI,
                'AC_AREA': formVal.AC_AREA,
                'AC_CTCODE': formVal.AC_CTCODE,
                'AC_PIN': formVal.AC_PIN,
                'FIN_YEAR': this.ngfinyear,
                'SUBMIT_DATE': (formVal.SUBMIT_DATE == '' || formVal.SUBMIT_DATE == 'Invalid date') ? submitdate = '' : submitdate = moment__WEBPACK_IMPORTED_MODULE_8__(formVal.SUBMIT_DATE).format('DD/MM/YYYY'),
                'FORM_TYPE': formVal.FORM_TYPE,
                'TDS_RATE': formVal.TDS_RATE,
                'TDS_LIMIT': formVal.TDS_LIMIT,
                'Document': this.imageObject,
                'GST_NO': formVal.GST_NO,
                'TAN_NO': formVal.TAN_NO,
                'REG_NO': formVal.REG_NO,
                'REG_DATE': (formVal.REG_DATE == '' || formVal.REG_DATE == 'Invalid date') ? regdate = '' : regdate = moment__WEBPACK_IMPORTED_MODULE_8__(formVal.REG_DATE).format('DD/MM/YYYY'),
                'PROP_NAME': formVal.PROP_NAME,
                'COP_NO': formVal.COP_NO,
                BRANCH_CODE: branchCode
            };
            this.customerIdService.postData(dataToSend).subscribe((data) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'success',
                    title: 'Account Created successfully!',
                    html: '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
                        '<b>ACCOUNT NO : </b>' + data.AC_NO + '<br>'
                });
                this.formSubmitted = false;
                this.customerDoc = [];
                this.imageObject = [];
                this.selectedImgArrayDetails = [];
                this.selectedImagePreview = null;
                this.addNewCustomer(data.id);
                // to reload after insertion of data
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.ajax.reload();
                });
            }, (error) => {
                console.log(error);
            });
            this.ngRisk = null;
            this.ngCity = null;
            this.ngTitle = null;
            this.ngTitlereg = null;
            //To clear form
            this.resetForm();
            this.imageObject = [];
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
        }
    }
    //disabledate on keyup
    disabledate() {
        let data = document.getElementById("AC_BIRTH_DT").value;
        if (data != "") {
            let date = moment__WEBPACK_IMPORTED_MODULE_8__(this.datemax).format('DD/MM/YYYY');
            if (data < date) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Invalid Input", "Please insert valid date ", "warning");
                document.getElementById("AC_BIRTH_DT").value = "";
                this.myInputField.nativeElement.focus('AC_BIRTH_DT');
            }
        }
    }
    //disabledate on keyup
    disablesubdate(data) {
        if (data != "") {
            if (data > this.datemax) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Invalid Input", "Please insert valid date ", "warning");
                document.getElementById("SUBMIT_DATE").value = "";
            }
        }
    }
    //method for force only numbers input
    onlyNumberKey(evt) {
        // Only ASCII character in that range allowed
        let ASCIICode = (evt.which) ? evt.which : evt.keyCode;
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
            return true;
        }
        else {
            return false;
        }
    }
    // Reset Function
    resetForm() {
        this.isDocument = false;
        this.isTdsForm = false;
        this.isTdsFormA = false;
        this.ngCast = null;
        this.ngoccupation = null;
        this.ngRisk = null;
        this.ngCity = null;
        this.ngTitle = null;
        this.ngTitlereg = null;
        this.ngfinyear = null;
        this.ngSubmitDate = null;
        this.fullname = null;
        this.lname = '';
        this.fname = '';
        this.mname = '';
        this.createForm();
        this.documentMasterService
            .getDocumentMasterList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe((data) => {
            this.documentMaster = data;
        });
        this.selectedImagePreview = null;
        this.selectedImgArrayDetails = [];
        this.imageObject = [];
        this.isImgPreview = false;
    }
    addNewData() {
        this.showButton = true;
        this.updateShow = false;
        this.newbtnShow = false;
        this.fullname = null;
        this.lname = '';
        this.fname = '';
        this.mname = '';
        this.resetForm();
    }
    //enabling and disabling fields of photo and adhar card checkbox
    Enablefields(data, id, ele) {
        if (ele.target.checked) {
            document.getElementById("file" + id).disabled =
                false;
        }
        else {
            document.getElementById("file" + id).disabled = true;
            document.getElementById("file" + id).value = "";
        }
    }
    //check  if margin values are below 100
    checkmargin(ele) {
        //check  if given value  is below 100
        if (ele <= 50) {
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Invalid Input", "Please insert values below 50", "error");
            this.angForm.patchValue({
                TDS_RATE: 0
            });
        }
    }
    //method to add space
    addSpace(data) {
        let result = data
            .replace(/\D/g, "")
            .split(/(?:([\d]{4}))/g)
            .filter((s) => s.length > 0)
            .join(" ");
        document.getElementById("AC_ADHARNO").value = result;
    }
    //method for adding hyphen in date
    addhyphen(data) {
        let date = new Date().getFullYear() + 1;
        let result = Number(document.getElementById("FIN_YEAR").value);
        if (result > date) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Warning!", "please enter valid Year ", "warning");
            document.getElementById("FIN_YEAR").value = "";
        }
        else {
            if (data.length == 4) {
                result += 1;
                this.ngfinyear = data + "-" + result;
            }
        }
    }
    extractImageName(url) {
        let parts = url.split('/');
        return parts[parts.length - 1];
    }
    editClickHandler(id) {
        this.autofacus = false;
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        let birthdate;
        let submitdate;
        this.customerIdService.getFormData(id).subscribe((data) => {
            var _a, _b, _c, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
            this.updatecheckdata = data;
            this.updateID = data.id;
            this.ngRisk = data.AC_RISKCATG;
            this.ngoccupation = data.AC_OCODE;
            this.ngCast = data.AC_CAST;
            this.ngfinyear = (_a = data.tdsForm) === null || _a === void 0 ? void 0 : _a.FIN_YEAR;
            this.ngSubmitDate = (((_b = data.tdsForm) === null || _b === void 0 ? void 0 : _b.SUBMIT_DATE) == 'Invalid date' || ((_c = data.tdsForm) === null || _c === void 0 ? void 0 : _c.SUBMIT_DATE) == '' || ((_e = data.tdsForm) === null || _e === void 0 ? void 0 : _e.SUBMIT_DATE) == null) ? submitdate = '' : submitdate = (_f = data.tdsForm) === null || _f === void 0 ? void 0 : _f.SUBMIT_DATE,
                this.angForm.patchValue({
                    AC_NO: data.AC_NO,
                    AC_MEMBTYPE: data.AC_MEMBTYPE,
                    AC_MEMBNO: data.AC_MEMBNO,
                    AC_TITLE: data.AC_TITLE,
                    AC_TITLE_REG: data.AC_TITLE_REG,
                    F_NAME: data.F_NAME,
                    M_NAME: data.M_NAME,
                    L_NAME: data.L_NAME,
                    AC_NAME: data.AC_NAME,
                    PROP_NAME: data.PROP_NAME,
                    REG_NO: data.REG_NO,
                    REG_DATE: data.REG_DATE,
                    GST_NO: data.GST_NO,
                    TAN_NO: data.TAN_NO,
                    COP_NO: data.COP_NO,
                    F_NAME_REG: data.F_NAME_REG,
                    M_NAME_REG: data.M_NAME_REG,
                    L_NAME_REG: data.L_NAME_REG,
                    AC_NAME_REG: data.AC_NAME_REG,
                    AC_ADD_REG: data.AC_ADD_REG,
                    AC_ADHARNO: data.AC_ADHARNO,
                    AC_BIRTH_DT: (data.AC_BIRTH_DT == 'Invalid date' || data.AC_BIRTH_DT == '' || data.AC_BIRTH_DT == null) ? birthdate = '' : birthdate = data.AC_BIRTH_DT,
                    AC_HONO: (_g = data.custAddress[0]) === null || _g === void 0 ? void 0 : _g.AC_HONO,
                    AC_WARD: (_h = data.custAddress[0]) === null || _h === void 0 ? void 0 : _h.AC_WARD,
                    AC_ADDR: (_j = data.custAddress[0]) === null || _j === void 0 ? void 0 : _j.AC_ADDR,
                    AC_GALLI: (_k = data.custAddress[0]) === null || _k === void 0 ? void 0 : _k.AC_GALLI,
                    AC_AREA: (_l = data.custAddress[0]) === null || _l === void 0 ? void 0 : _l.AC_AREA,
                    AC_CTCODE: Number((_m = data.custAddress[0]) === null || _m === void 0 ? void 0 : _m.AC_CTCODE),
                    AC_PIN: (_o = data.custAddress[0]) === null || _o === void 0 ? void 0 : _o.AC_PIN,
                    AC_SALARYDIVISION_CODE: data.AC_SALARYDIVISION_CODE,
                    AC_PANNO: data.AC_PANNO,
                    AC_IS_RECOVERY: data.AC_IS_RECOVERY,
                    AC_MOBILENO: data.AC_MOBILENO,
                    AC_PHONE_RES: data.AC_PHONE_RES,
                    AC_PHONE_OFFICE: data.AC_PHONE_OFFICE,
                    AC_EMAILID: data.AC_EMAILID,
                    TDSDOCUMNET: (data.TDSDOCUMNET == '1' ? true : false),
                    TDS_REQUIRED: (data.TDS_REQUIRED == '1' ? true : false),
                    SMS_REQUIRED: (data.SMS_REQUIRED == '1' ? true : false),
                    IS_KYC_RECEIVED: (data.IS_KYC_RECEIVED == '1' ? true : false),
                    FORM_TYPE: (_p = data.tdsForm) === null || _p === void 0 ? void 0 : _p.FORM_TYPE,
                    TDS_RATE: (_q = data.tdsForm) === null || _q === void 0 ? void 0 : _q.TDS_RATE,
                    TDS_LIMIT: (_r = data.tdsForm) === null || _r === void 0 ? void 0 : _r.TDS_LIMIT,
                });
            if (data.TDSDOCUMNET == true) {
                this.isTdsForm = true;
                this.isTdsFormA = false;
                this.SUBMIT_DATE = true;
            }
            else {
                this.isTdsForm = false;
                this.isTdsFormA = false;
                this.SUBMIT_DATE = false;
            }
            if (((_s = data.tdsForm) === null || _s === void 0 ? void 0 : _s.FORM_TYPE) == "Form15A") {
                this.isForm15A(1);
            }
            if (data.IS_KYC_RECEIVED == true) {
                this.isDocument = true;
                this.imageObject = [];
                this.selectedImgArrayDetails = [];
                let obj = {
                    SCHEME_CODE: 'KYC'
                };
                this.http.post(this.url + '/scheme-linking-with-d/fetchLinkedDoc', obj).subscribe(resp => {
                    let DocArr = resp;
                    for (const [key, value] of Object.entries(data.custdocument)) {
                        DocArr.forEach(ele => {
                            if (data.custdocument.find(data => data['DocumentMaster']['id'] == ele['DOCUMENT_CODE'])) {
                                let path = (data.custdocument.find(data => data['DocumentMaster']['id'] == ele['DOCUMENT_CODE']));
                                ele['status'] = true;
                                ele['IS_ALLOWED'] = true;
                                ele['PATH'] = path['PATH'];
                            }
                            else {
                                ele['status'] = false;
                                ele['IS_ALLOWED'] = false;
                            }
                        });
                        let selectedObj = {};
                        let id = data.custdocument[key].DocumentMasterID;
                        selectedObj[id] = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].base_url + '/' + data.custdocument[key].PATH;
                        this.selectedImagePreview = selectedObj[id];
                        this.imageObject.push(selectedObj);
                        this.selectedImgArrayDetails.push(selectedObj);
                        let url = Object.values(selectedObj)[0];
                        this.file = this.extractImageName(url);
                        this.customerDoc.push({ 'name': this.file });
                    }
                    this.customerDoc = DocArr;
                    // this. viewImagePreview(id)
                });
            }
            else {
                this.isDocument = false;
                this.imageObject = [];
                this.selectedImgArrayDetails = [];
            }
        });
    }
    //Method for update data
    updateData() {
        var _a, _b, _c, _e, _f, _g, _h, _j;
        let date;
        let sudate;
        let data = this.angForm.value;
        let data1 = localStorage.getItem('user');
        let result = JSON.parse(data1);
        let branchCode = result.branchId;
        data["id"] = this.updateID;
        data['TDS_REQUIRED'] = (data.TDS_REQUIRED == true ? '1' : '0');
        data['SMS_REQUIRED'] = (data.SMS_REQUIRED == true ? '1' : '0');
        data['IS_KYC_RECEIVED'] = (data.IS_KYC_RECEIVED == true ? '1' : '0');
        data['TDSDOCUMNET'] = (data.TDSDOCUMNET == true ? '1' : '0');
        data['Document'] = this.imageObject;
        data['F_NAME'] = (_a = this.fname) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        data['L_NAME'] = (_b = this.lname) === null || _b === void 0 ? void 0 : _b.toUpperCase();
        data['M_NAME'] = (_c = this.mname) === null || _c === void 0 ? void 0 : _c.toUpperCase();
        data['AC_TITLE_REG'] = data.AC_TITLE_REG;
        data['F_NAME_REG'] = (_e = data.F_NAME_REG) === null || _e === void 0 ? void 0 : _e.toUpperCase();
        data['M_NAME_REG'] = (_f = data.M_NAME_REG) === null || _f === void 0 ? void 0 : _f.toUpperCase();
        data['L_NAME_REG'] = (_g = data.L_NAME_REG) === null || _g === void 0 ? void 0 : _g.toUpperCase();
        data['AC_NAME_REG'] = (_h = (data.L_NAME_REG + ' ' + data.F_NAME_REG + ' ' + data.M_NAME_REG)) === null || _h === void 0 ? void 0 : _h.toUpperCase();
        data['AC_ADD_REG'] = data.AC_ADD_REG;
        data['BRANCH_CODE'] = branchCode;
        data['AC_PANNO'] = data.AC_PANNO;
        data['COP_NO'] = data.COP_NO;
        data['TAN_NO'] = data.TAN_NO;
        data['GST_NO'] = data.GST_NO;
        data['REG_NO'] = data.REG_NO;
        data['REG_DATE'] = data.REG_DATE;
        data['PROP_NAME'] = data.PROP_NAME;
        if (this.updatecheckdata.AC_BIRTH_DT != data.AC_BIRTH_DT) {
            (data.AC_BIRTH_DT == 'Invalid date' || data.AC_BIRTH_DT == '' || data.AC_BIRTH_DT == null) ? (date = '', data['AC_BIRTH_DT'] = date) : (date = data.AC_BIRTH_DT, data['AC_BIRTH_DT'] = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('DD/MM/YYYY'));
        }
        if (((_j = this.updatecheckdata.tdsForm) === null || _j === void 0 ? void 0 : _j.SUBMIT_DATE) != data.SUBMIT_DATE) {
            (data.SUBMIT_DATE == 'Invalid date' || data.SUBMIT_DATE == '' || data.SUBMIT_DATE == null) ? (sudate = '', data['SUBMIT_DATE'] = sudate) : (sudate = data.SUBMIT_DATE, data['SUBMIT_DATE'] = moment__WEBPACK_IMPORTED_MODULE_8__(sudate).format('DD/MM/YYYY'));
        }
        this.customerIdService.getData().subscribe(data => {
            if ((data === null || data === void 0 ? void 0 : data.length) != 0) {
                if (this.angForm.controls['AC_ADHARNO'].value != '' && this.angForm.controls['AC_ADHARNO'].value != null) {
                    if (data.find(data => data['AC_ADHARNO'] != (this.angForm.controls['AC_ADHARNO'].value == ''))) {
                        if (data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value)) {
                            let id = data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value);
                            if (id.id != this.updateID) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                    icon: 'info',
                                    title: 'This Aadhar Number is Already Extists Having Customer ID ' + id.AC_NO,
                                });
                                // this.angForm.controls['AC_ADHARNO'].reset();
                            }
                        }
                    }
                }
                else {
                    // if (data.find(data => data['L_NAME'] == this.angForm.controls['L_NAME'].value?.toUpperCase())) {
                    //   if (data.find(data => data['F_NAME'] == this.angForm.controls['F_NAME'].value?.toUpperCase())) {
                    if (data.find(data => { var _a; return data['AC_NAME'] == ((_a = this.angForm.controls['AC_NAME'].value) === null || _a === void 0 ? void 0 : _a.toUpperCase()); })) {
                        if (data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value)) {
                            let id = data.find(data => { var _a; return data['AC_NAME'] == ((_a = this.angForm.controls['AC_NAME'].value) === null || _a === void 0 ? void 0 : _a.toUpperCase()); });
                            if (id.AC_NO != this.angForm.controls['AC_NO'].value) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                    icon: 'info',
                                    title: 'This Customer is Already Exists Having Customer ID ' + id.AC_NO
                                });
                                this.resetForm();
                            }
                        }
                        // }
                        // }
                    }
                }
            }
        });
        data['FIN_YEAR'] = this.ngfinyear;
        this.customerIdService.updateData(data).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Success!", "Record Updated Successfully !", "success");
            this.showButton = true;
            this.updateShow = false;
            this.newbtnShow = false;
            this.customerDoc = [];
            this.imageObject = [];
            this.selectedImgArrayDetails = [];
            this.selectedImagePreview = null;
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.ajax.reload();
            });
            this.resetForm();
        });
    }
    //Method for delete data
    delClickHandler(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Are you sure?",
            text: "Do you want to delete Authority master data.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#229954",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                this.customerIdService.deleteData(id).subscribe((data1) => {
                    this.customerMaster = data1;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", "Your data has been deleted.", "success");
                }),
                    (error) => {
                        console.log(error);
                    };
                // to reload after delete of data
                this.rerender();
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Cancelled", "Your data is safe.", "error");
            }
        });
    }
    ngAfterViewInit() {
        //  this.ngSelect.focus();
        this.dtTrigger.next();
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.columns().every(function () {
                const that = this;
                $('#customermastertable tfoot tr').appendTo('#customermastertable thead');
                $("input", this.footer()).on("keyup change", function () {
                    if (this["value"] != "") {
                        that.search(this["value"]).draw();
                    }
                    else {
                        that.search(this["value"]).draw();
                    }
                });
            });
        });
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
    ngfocus() {
        this.ngSelect.focus();
    }
    documentUpload() {
        let obj = {
            SCHEME_CODE: 'KYC'
        };
        this.imageObject = [];
        this.selectedImgArrayDetails = [];
        this.selectedImagePreview = null;
        this.http.post(this.url + '/scheme-linking-with-d/fetchLinkedDoc', obj).subscribe(resp => {
            let DocArr = resp;
            DocArr.forEach(ele => {
                ele['status'] = false;
                ele['IS_ALLOWED'] = false;
            });
            this.customerDoc = DocArr;
        });
    }
    isKYC($event) {
        if ($event.target.checked) {
            this.isDocument = true;
            this.imageObject = [];
            this.selectedImgArrayDetails = [];
            this.selectedImagePreview = null;
            this.documentUpload();
        }
        else {
            this.isDocument = false;
            this.imageObject = [];
            this.selectedImgArrayDetails = [];
            this.selectedImagePreview = null;
        }
    }
    isChecked($event) {
        if ($event.target.checked) {
            document.getElementById("{{data.value}}").removeAttribute("disabled");
        }
        else {
            document
                .getElementById("{{data.value}}")
                .setAttribute("disabled", "true");
        }
    }
    isReceivedTds($event) {
        if ($event.target.checked) {
            this.isTdsForm = true;
            this.isTdsFormA = false;
            this.SUBMIT_DATE = true;
        }
        else {
            this.isTdsForm = false;
            this.isTdsFormA = false;
            this.SUBMIT_DATE = false;
            this.angForm.controls['FIN_YEAR'].reset();
            this.angForm.controls['SUBMIT_DATE'].reset();
            this.angForm.controls['FORM_TYPE'].reset();
            this.angForm.controls['TDS_RATE'].reset();
            this.angForm.controls['TDS_LIMIT'].reset();
        }
    }
    isForm15A(value) {
        if (value == 1) {
            this.isTdsFormA = true;
        }
        if (value == 2) {
            this.isTdsFormA = false;
            this.angForm.controls['TDS_RATE'].reset();
            this.angForm.controls['TDS_LIMIT'].reset();
        }
        if (value == 3) {
            this.isTdsFormA = false;
            this.angForm.controls['TDS_RATE'].reset();
            this.angForm.controls['TDS_LIMIT'].reset();
        }
        if (value == 4) {
            this.isTdsFormA = false;
            this.angForm.controls['TDS_RATE'].reset();
            this.angForm.controls['TDS_LIMIT'].reset();
        }
    }
    fileChangeEvent(event, id, valueid) {
        let selectedFile = event.target.files[0];
        if (selectedFile) {
            const fileSize = selectedFile.size; // in bytes
            const maxSize = 2 * 1024 * 1024; // 2MB (adjust as needed)
            if (fileSize > maxSize) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Info', 'File size exceeds the maximum allowed size(2 MB).', 'info');
                // Clear the file input to prevent submission
                event.target.value = null;
            }
            else {
                if (this.customerDoc[id]['status'] == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        // title: 'Do You Want To Replace previous document?',
                        html: '<span style="text-justify: inter-word; font-weight:600; font-size:20px;">Do You Want To Replace previous document?</span>',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        cancelButtonText: 'No',
                        confirmButtonText: 'Yes'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            let result;
                            let obj = {};
                            let selectedObj = {};
                            let file = event.target.files[0];
                            this.customerDoc[id]['status'] = true;
                            let reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = function (ele) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    result = yield reader.result;
                                    let selecetedImg = ele.target.result;
                                    selectedObj[valueid] = selecetedImg;
                                    obj[valueid] = result;
                                });
                            };
                            reader.onerror = function (error) {
                                console.log('Error: ', error);
                            };
                            let isExist = false;
                            for (let element of this.imageObject) {
                                if (Number(Object.keys(element)[0]) == valueid) {
                                    isExist = true;
                                    reader.onload = function (ele) {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                            result = yield reader.result;
                                            let selecetedImg = ele.target.result;
                                            selectedObj[valueid] = selecetedImg;
                                            obj[valueid] = result;
                                            element[valueid] = selecetedImg;
                                        });
                                    };
                                    this.customerDoc[id]['status'] = true;
                                    break;
                                }
                            }
                            if (!isExist) {
                                reader.onload = function (ele) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                        result = yield reader.result;
                                        let selecetedImg = ele.target.result;
                                        selectedObj[valueid] = selecetedImg;
                                        obj[valueid] = result;
                                    });
                                };
                                this.imageObject.push(obj);
                                this.selectedImgArrayDetails.push(selectedObj);
                                this.customerDoc[id]['status'] = true;
                            }
                            else {
                                for (let element of this.selectedImgArrayDetails) {
                                    if (Number(Object.keys(element)) == valueid) {
                                        reader.onload = function (ele) {
                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                                result = yield reader.result;
                                                let selecetedImg = ele.target.result;
                                                selectedObj[valueid] = selecetedImg;
                                                element[valueid] = selecetedImg;
                                                obj[valueid] = result;
                                            });
                                        };
                                    }
                                }
                                this.customerDoc[id]['status'] = true;
                            }
                        }
                        else {
                            event.target.value = null;
                        }
                    });
                }
                else {
                    let result;
                    let arr = [];
                    let me = this;
                    let obj = {};
                    let selectedObj = {};
                    let file = event.target.files[0];
                    this.customerDoc[id]['status'] = true;
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function (ele) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            result = yield reader.result;
                            let selecetedImg = ele.target.result;
                            selectedObj[valueid] = selecetedImg;
                            obj[valueid] = result;
                        });
                    };
                    reader.onerror = function (error) {
                        console.log('Error: ', error);
                    };
                    let isExist = false;
                    for (let element of this.imageObject) {
                        if (Number(Object.keys(element)[0]) == valueid) {
                            isExist = true;
                            reader.onload = function (ele) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    result = yield reader.result;
                                    let selecetedImg = ele.target.result;
                                    selectedObj[valueid] = selecetedImg;
                                    obj[valueid] = result;
                                    element[valueid] = result;
                                });
                            };
                            this.customerDoc[id]['status'] = true;
                            break;
                        }
                    }
                    if (!isExist) {
                        reader.onload = function (ele) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                result = yield reader.result;
                                let selecetedImg = ele.target.result;
                                selectedObj[valueid] = selecetedImg;
                                obj[valueid] = result;
                            });
                        };
                        this.imageObject.push(obj);
                        this.selectedImgArrayDetails.push(selectedObj);
                        this.customerDoc[id]['status'] = true;
                    }
                    else {
                        for (let element of this.selectedImgArrayDetails) {
                            if (Number(Object.keys(element)) == valueid) {
                                reader.onload = function (ele) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                        result = yield reader.result;
                                        let selecetedImg = ele.target.result;
                                        selectedObj[valueid] = selecetedImg;
                                        element[valueid] = selecetedImg;
                                        obj[valueid] = result;
                                    });
                                };
                            }
                        }
                        this.customerDoc[id]['status'] = true;
                    }
                }
            }
        }
    }
    onCloseModal() {
        var closemodal = document.getElementById('triggerhide');
        closemodal.click();
    }
    viewImagePreview(ele, id) {
        if (this.selectedImgArrayDetails.length !== 0) {
            for (const [key, value] of Object.entries(this.selectedImgArrayDetails)) {
                let jsonObj = value;
                Object.keys(jsonObj).forEach(key => {
                    if (id == key) {
                        let selectedImage = jsonObj[key];
                        if (selectedImage.startsWith('data:image')) {
                            this.isImgPreview = true;
                            this.isPdf = false;
                            this.selectedImagePreview = selectedImage;
                            this.urlMap = '';
                        }
                        else if (selectedImage.startsWith('data:application/pdf')) {
                            this.isImgPreview = false;
                            this.isPdf = true;
                            this.selectedImagePreview = '';
                            this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(selectedImage);
                        }
                        else if (selectedImage.toLowerCase().endsWith('.jpg') || selectedImage.toLowerCase().endsWith('.png') || selectedImage.toLowerCase().endsWith('.jpeg')) {
                            this.isImgPreview = true;
                            this.isPdf = false;
                            this.selectedImagePreview = selectedImage;
                            this.urlMap = '';
                        }
                        else if (selectedImage.toLowerCase().endsWith('.pdf')) {
                            this.isImgPreview = false;
                            this.isPdf = true;
                            this.selectedImagePreview = '';
                            this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(selectedImage);
                        }
                        else {
                            this.isImgPreview = false;
                            this.isPdf = false;
                            this.selectedImagePreview = '';
                            this.urlMap = '';
                        }
                        throw 'Break';
                    }
                    else {
                        this.isImgPreview = false;
                        this.isPdf = false;
                        this.selectedImagePreview = '';
                        this.urlMap = '';
                    }
                });
            }
        }
        else {
            this.isImgPreview = false;
            this.isPdf = false;
            this.selectedImagePreview = '';
            this.urlMap = '';
        }
    }
    checkCustomer() {
        this.customerIdService.getData().subscribe(data => {
            if ((data === null || data === void 0 ? void 0 : data.length) != 0) {
                let ac_name = this.lname + ' ' + this.fname + ' ' + this.mname;
                // if (data.find(data => data['L_NAME'] == this.angForm.controls['L_NAME'].value?.toUpperCase())) {
                //   if (data.find(data => data['F_NAME'] == this.angForm.controls['F_NAME'].value?.toUpperCase())) {
                if (data.find(data => data['AC_NAME'] == (ac_name === null || ac_name === void 0 ? void 0 : ac_name.toUpperCase()))) {
                    let id = data.find(data => data['AC_NAME'] == (ac_name === null || ac_name === void 0 ? void 0 : ac_name.toUpperCase()));
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: "Are you sure?",
                        text: "This Customer is Already Exists Having Customer ID " + id.AC_NO,
                        //   html:
                        // '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
                        // '<b>ACCOUNT NO : </b>' + data.AC_NO + '<br>',
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#229954",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Continue",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Swal.fire("Your data is safe.");
                            // to reload after delete of data
                            // this.rerender();
                            this.dtElement.dtInstance.then((dtInstance) => {
                                dtInstance.ajax.reload();
                            });
                        }
                        else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                            this.angForm.controls['F_NAME'].reset();
                            this.angForm.controls['M_NAME'].reset();
                            this.angForm.controls['L_NAME'].reset();
                            this.angForm.controls['AC_NAME'].reset();
                            this.angForm.patchValue({
                                L_NAME: '',
                                F_NAME: '',
                                M_NAME: ''
                            });
                        }
                    });
                }
                //   }
                // }
            }
        });
    }
    checkAdhar() {
        let adhar;
        if (this.showButton) {
            this.customerIdService.getData().subscribe(data => {
                if ((data === null || data === void 0 ? void 0 : data.length) != 0) {
                    if (this.angForm.controls['AC_ADHARNO'].value != '' && this.angForm.controls['AC_ADHARNO'].value != null) {
                        if (data.find(data => data['AC_ADHARNO'] != (this.angForm.controls['AC_ADHARNO'].value == ''))) {
                            if (data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value)) {
                                let id = data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                    icon: 'info',
                                    title: 'This Aadhar Number is Already Extists Having Customer ID ' + id.AC_NO,
                                });
                                this.angForm.controls['AC_ADHARNO'].reset();
                            }
                        }
                    }
                    else {
                        // if (data.find(data => data['L_NAME'] == this.angForm.controls['L_NAME'].value?.toUpperCase())) {
                        //   if (data.find(data => data['F_NAME'] == this.angForm.controls['F_NAME'].value?.toUpperCase())) {
                        if (data.find(data => { var _a; return data['AC_NAME'] == ((_a = this.angForm.controls['AC_NAME'].value) === null || _a === void 0 ? void 0 : _a.toUpperCase()); })) {
                            if (data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value)) {
                                let id = data.find(data => { var _a; return data['AC_NAME'] == ((_a = this.angForm.controls['AC_NAME'].value) === null || _a === void 0 ? void 0 : _a.toUpperCase()); });
                                if (id.AC_NO != this.angForm.controls['AC_NO'].value) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                        icon: 'info',
                                        title: 'This Customer is Already Exists Having Customer ID ' + id.AC_NO
                                    });
                                    this.resetForm();
                                }
                            }
                        }
                        //   }
                        // }
                    }
                }
            });
        }
    }
    checkPancard() {
        this.customerIdService.getData().subscribe(data => {
            if ((data === null || data === void 0 ? void 0 : data.length) != 0) {
                if ((this.angForm.controls['AC_PANNO'].value != '')) {
                    if (data.find(data => data['AC_PANNO'] == this.angForm.controls['AC_PANNO'].value)) {
                        let id = data.find(data => data['AC_PANNO'] == this.angForm.controls['AC_PANNO'].value);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: "Are you sure?",
                            text: "This Pan Number is Already Exists Having Customer ID " + id.AC_NO,
                            //   html:
                            // '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
                            // '<b>ACCOUNT NO : </b>' + data.AC_NO + '<br>',
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#229954",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Continue",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                // Swal.fire("Your data is safe.");
                                // to reload after delete of data
                                // this.rerender();
                                this.dtElement.dtInstance.then((dtInstance) => {
                                    dtInstance.ajax.reload();
                                });
                            }
                            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                                this.angForm.controls['AC_PANNO'].reset();
                                this.angForm.patchValue({
                                    AC_PANNO: ''
                                });
                            }
                        });
                    }
                }
            }
        });
    }
    validation(event) {
        if (event != (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Warning!", "Please Insert Alphabets Only", "warning");
        }
    }
    numvalidation(event) {
        if (event == (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Warning!", "Please Insert Numbers Only", "warning");
        }
    }
    panvalidation(event) {
        if (event == (event.charCode >= 97 && event.charCode <= 122)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Warning!", "Please Insert Numbers and Captital Alphabets Only", "warning");
        }
    }
    getDecimalPoint(event) {
        if (event.target.value != '')
            event.target.value = parseFloat(event.target.value).toFixed(2);
    }
    getDecimal(event) {
        var t = event.target.value;
        event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    }
    selectAllContent($event) {
        $event.target.select();
    }
    onFocus(ele) {
        ele.open();
    }
    onOpen(select) {
        //debugger
        select.open();
    }
    onClose(select) {
        select.close();
    }
    gotoTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    notApplicable(event) {
        if (event.value == 'PROF.' || event.value == 'ADV.' || event.value == 'DR.' || event.value == 'MANDAL' || event.value == 'M/S') {
            this.isapplicable = true;
            this.isable = false;
        }
        else {
            this.isapplicable = false;
            this.isable = true;
            this.angForm.controls['AC_NAME'].reset();
        }
    }
}
CustomerIdComponent.ɵfac = function CustomerIdComponent_Factory(t) { return new (t || CustomerIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_customer_id_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_prefix_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["PrefixMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["CastMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_occupation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OccupationMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["SalaryDMasterdropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["cityMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_risk_category_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["RiskCategoryDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_document_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["DocumentMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_20__["SystemMasterParametersService"])); };
CustomerIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerIdComponent, selectors: [["app-customer-id"]], viewQuery: function CustomerIdComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myInputField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ngSelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalLarge = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.triggerhide = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, outputs: { newCustomerEvent: "newCustomerEvent", closeModalEvent: "closeModalEvent" }, decls: 289, vars: 102, consts: [[1, "row"], [1, "col-12"], [1, "card"], ["action", "javascript:", "appSubmit", "", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [4, "ngIf"], [1, "card-block"], [1, "col-sm-2"], [1, "form-group", "input-group"], [1, "border-lable-flt"], ["type", "text", "name", "AC_NO", "placeholder", " ", "id", "AC_NO", "pattern", "^[0-9]+$", "maxlength", "15", "formControlName", "AC_NO", "disabled", "", 1, "form-control"], ["for", "AC_NO"], ["type", "text", "name", "AC_MEMBNO", "placeholder", " ", "id", "AC_MEMBNO", "formControlName", "AC_MEMBNO", "disabled", "", 1, "form-control"], ["for", "AC_MEMBNO"], [1, "col-sm-4"], ["type", "text", "name", "AC_MEMBTYPE", "placeholder", " ", "id", "AC_MEMBTYPE", "formControlName", "AC_MEMBTYPE", "disabled", "", 1, "form-control"], ["for", "AC_MEMBTYPE"], [1, "form-group", "form-primary", "form-static-label"], ["appTheme", "", "bindValue", "value", "id", "AC_TITLE", "bindLabel", "label", "formControlName", "AC_TITLE", "title", "Compulsory Selection", "required", "", "placeholder", "", "autofocus", "", 1, "sticky-drpodown", 3, "ngModel", "virtualScroll", "ngClass", "selectOnTab", "ngModelChange", "change", "focus"], ["AC_TITLE", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "AC_TYPE"], [1, "required"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["appTheme", "", "type", "text", "name", "L_NAME", "placeholder", " ", "id", "L_NAME", "required", "", "pattern", "^[A-Za-z]+$", "maxlength", "15", "title", "Input allowed only A-Z", "formControlName", "L_NAME", "required", "", 1, "form-control", 2, "text-transform", "uppercase", 3, "ngClass", "ngModel", "keypress", "ngModelChange"], ["lastname", ""], ["for", "L_NAME"], ["appTheme", "", "type", "text", "name", "F_NAME", "placeholder", " ", "id", "F_NAME", "required", "", "pattern", "^[A-Za-z]+$", "maxlength", "15", "title", "Input allowed only A-Z", "formControlName", "F_NAME", 1, "form-control", 2, "text-transform", "uppercase", 3, "ngClass", "ngModel", "keypress", "ngModelChange"], ["for", "F_NAME"], ["appTheme", "", "type", "text", "name", "M_NAME", "placeholder", " ", "id", "M_NAME", "required", "", "pattern", "^[A-Za-z]+$", "maxlength", "15", "title", "Input allowed only A-Z", "formControlName", "M_NAME", 1, "form-control", 2, "text-transform", "uppercase", 3, "ngClass", "ngModel", "ngModelChange", "keypress", "focusout"], ["for", "M_NAME"], ["class", "col-sm-4", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "city"], ["appTheme", "", "id", "AC_TITLE_REG", "bindLabel", "label", "formControlName", "AC_TITLE_REG", "title", "Compulsory Selection", "required", "", "placeholder", "", 3, "ngModel", "virtualScroll", "ngClass", "selectOnTab", "ngModelChange", "focus"], ["AC_TITLE_REG", ""], [1, "col-sm-3"], ["appTheme", "", "type", "text", "name", "L_NAME_REG", "placeholder", " ", "id", "L_NAME_REG", "maxlength", "15", "formControlName", "L_NAME_REG", "required", "", 1, "form-control", 2, "text-transform", "uppercase", 3, "ngClass", "ngModel", "ngModelChange"], ["lastnamereg", ""], ["for", "L_NAME_REG"], ["appTheme", "", "type", "text", "name", "F_NAME_REG", "placeholder", " ", "id", "F_NAME_REG", "required", "", "maxlength", "15", "formControlName", "F_NAME_REG", 1, "form-control", 2, "text-transform", "uppercase", 3, "ngClass", "ngModel", "ngModelChange"], ["for", "F_NAME_REG"], ["appTheme", "", "type", "text", "name", "M_NAME_REG", "placeholder", " ", "id", "M_NAME_REG", "required", "", "maxlength", "15", "formControlName", "M_NAME_REG", 1, "form-control", 2, "text-transform", "uppercase", 3, "ngClass", "ngModel", "ngModelChange"], ["for", "M_NAME_REG"], ["type", "text", "name", "AC_NAME_REG", "placeholder", " ", "id", "AC_NAME_REG", "disabled", "", "formControlName", "AC_NAME_REG", 1, "form-control", 2, "text-transform", "uppercase", 3, "ngModel", "value", "ngModelChange"], ["for", "AC_NAME_REG"], ["autofocus", "", 1, "border-lable-flt"], ["appTheme", "", "bindValue", "value", "id", "AC_CAST", "bindLabel", "label", "formControlName", "AC_CAST", 3, "ngModel", "selectOnTab", "virtualScroll", "dropdownPosition", "ngModelChange", "focus"], ["cast", ""], ["for", "AC_CAST"], ["appTheme", "", "bindValue", "value", "id", "AC_OCODE", "bindLabel", "label", "formControlName", "AC_OCODE", "placeholder", "Occupation", 3, "ngModel", "selectOnTab", "virtualScroll", "dropdownPosition", "ngModelChange", "focus"], ["AC_OCODE", ""], ["for", "AC_OCODE"], ["appTheme", "", "bindValue", "value", "id", "AC_RISKCATG", "bindLabel", "label", "formControlName", "AC_RISKCATG", "placeholder", "Risk Category", 3, "ngModel", "selectOnTab", "virtualScroll", "ngModelChange", "focus"], ["AC_RISKCATG", ""], ["for", "AC_RISKCATG"], ["type", "text", "name", "AC_ADHARNO", "placeholder", " ", "pattern", "[2-9]{1}[0-9\\s]{13}", "title", "Input allowed only 0-9", "id", "AC_ADHARNO", "maxlength", "14", "minlength", "14", "formControlName", "AC_ADHARNO", 1, "form-control", 3, "keyup", "focusout", "keypress"], ["adhar", ""], ["for", " AC_ADHARNO"], ["type", "text", "name", "AC_PANNO", "placeholder", " ", "pattern", "^[A-Za-z0-9]+$", "title", "Enter Uppercase letters and digits only", "minlength", "10", "maxlength", "10", "id", "AC_PANNO", "formControlName", "AC_PANNO", 1, "form-control", 2, "text-transform", "uppercase", 3, "keypress", "focusout"], ["for", "AC_PANNO"], ["type", "text", "appTheme", "", "appButton", "", "placeholder", "dd/mm/yyyy", "name", "AC_BIRTH_DT", "id", "AC_BIRTH_DT", "minlength", "10", "maxlength", "10", "placement", "left", "formControlName", "AC_BIRTH_DT", "bsDatepicker", "", "required", "", 1, "form-control", 3, "bsConfig", "maxDate", "ngClass", "bsValue", "keydown.Tab"], ["AC_BIRTH_DT", "bsDatepicker", "AC_BIRTH", ""], ["for", "AC_BIRTH_DT"], ["type", "text", "formControlName", "AC_HONO", "name", "AC_HONO", "placeholder", " ", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_HONO", 1, "form-control"], ["for", "AC_HONO"], ["type", "text", "name", "AC_WARD", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_WARD", "formControlName", "AC_WARD", 1, "form-control"], ["for", "AC_WARD"], ["type", "text", "name", "AC_ADDR", "placeholder", " ", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_ADDR", "formControlName", "AC_ADDR", 1, "form-control"], ["for", "AC_ADDR"], ["type", "text", "name", "AC_GALLI", "placeholder", " ", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_GALLI", "formControlName", "AC_GALLI", 1, "form-control"], ["for", "AC_GALLI"], ["type", "text", "name", "AC_AREA", "placeholder", " ", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_AREA", "formControlName", "AC_AREA", 1, "form-control"], ["for", "AC_AREA"], ["appTheme", "", "id", "AC_CTCODE", "bindValue", "id", "bindLabel", "CITY_NAME", "formControlName", "AC_CTCODE", "title", "Compulsory Selection", "placeholder", "City", "required", "", 3, "items", "ngModel", "selectOnTab", "virtualScroll", "ngClass", "ngModelChange", "focus"], ["City", ""], ["for", "AC_CTCODE"], ["type", "text", "name", "AC_PIN", "placeholder", " ", "pattern", "^[1-9][0-9]{5}", "title", " Input allowed only  0-9", "maxlength", "6", "minlength", " 6", "id", "AC_PIN", "formControlName", "AC_PIN", "NumberOnly", "", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", "AC_PIN"], [1, "col-sm-6"], ["type", "text", "name", "AC_ADD_REG", "placeholder", " ", "id", "AC_ADD_REG", "formControlName", "AC_ADD_REG", 1, "form-control"], ["for", "AC_ADD_REG"], ["type", "text", "name", "AC_MOBILENO", "placeholder", " ", "pattern", "[7-9 0]{1}[0-9]{9,10}", "title", "Input allowed only  0-9", "id", "AC_MOBILENO", "maxlength", "11", "minlength", "10", "formControlName", "AC_MOBILENO", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", " AC_MOBILENO"], ["type", "text", "name", "AC_PHONE_RES", "placeholder", " ", "pattern", "[7-9 0]{1}[0-9]{9,10}", "title", "Input allowed only  0-9", "id", "AC_PHONE_RES", "maxlength", "11", "minlength", "10", "formControlName", "AC_PHONE_RES", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", " AC_PHONE_RES"], ["type", "text", "name", "AC_PHONE_OFFICE", "placeholder", " ", "pattern", "[7-9 0]{1}[0-9]{9,10}", "title", "Input allowed only  0-9", "id", "AC_PHONE_OFFICE", "maxlength", "11", "minlength", "10", "formControlName", "AC_PHONE_OFFICE", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", " AC_PHONE_OFFICE"], ["type", "email", "name", "AC_EMAILID", "placeholder", " ", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$", "title", "Enter valid Email", "id", "AC_EMAILID", "formControlName", "AC_EMAILID", 1, "form-control"], ["for", "AC_EMAILID"], [1, "col-sm"], [1, "checkbox", "checkbox-primary"], [1, "border-checkbox-group", "border-checkbox-group-primary"], ["type", "checkbox", "id", "TDS_REQUIRED", "formControlName", "TDS_REQUIRED", 1, "border-checkbox"], ["for", "TDS_REQUIRED", 1, "border-checkbox-label"], [1, "col-sm-5"], ["type", "checkbox", "id", "IRTDSDFY", "value", "IRTDSDFY", "formControlName", "TDSDOCUMNET", 1, "border-checkbox", 3, "change"], ["for", "IRTDSDFY", 1, "border-checkbox-label"], ["type", "checkbox", "id", "SMS_REQUIRED", "formControlName", "SMS_REQUIRED", 1, "border-checkbox"], ["for", "SMS_REQUIRED", 1, "border-checkbox-label"], ["type", "checkbox", "id", "IS_KYC_RECEIVED", "formControlName", "IS_KYC_RECEIVED", 1, "border-checkbox", 3, "change"], ["for", "IS_KYC_RECEIVED", 1, "border-checkbox-label"], ["class", "row", "id", "TDSFORM", 4, "ngIf"], ["class", "row", "id", "FORMA", 4, "ngIf"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [3, "value"], [1, "alert", "alert-danger"], ["type", "text", "name", "AC_NAME", "placeholder", " ", "id", "AC_NAME", "pattern", "^[A-Za-z\\./ -]+$", "formControlName", "AC_NAME", "disabled", "", 1, "form-control", 2, "text-transform", "uppercase", 3, "disabled", "ngModel", "value", "ngModelChange"], ["for", "AC_NAME"], ["type", "text", "name", "AC_NAME", "placeholder", " ", "id", "AC_NAME", "pattern", "^[A-Za-z\\./ -]+$", "formControlName", "AC_NAME", 1, "form-control", 2, "text-transform", "uppercase", 3, "disabled", "ngModel", "value", "ngModelChange"], ["type", "text", "name", "PROP_NAME", "placeholder", " ", "id", "PROP_NAME", "pattern", "^[A-Za-z\\./ -]+$", "formControlName", "PROP_NAME", 1, "form-control", 2, "text-transform", "uppercase"], ["for", "PROP_NAME"], ["type", "text", "name", "REG_NO", "pattern", "^[A-Za-z0-9]+$", "title", "Enter Uppercase letters and digits only", "placeholder", " ", "title", " Input allowed only  0-9", "maxlength", "22", "minlength", " 22", "id", "REG_NO", "formControlName", "REG_NO", 1, "form-control", 2, "text-transform", "uppercase", 3, "keypress"], ["for", "REG_NO"], ["type", "text", "appTheme", "", "appButton", "", "placeholder", "dd/mm/yyyy", "name", "REG_DATE", "id", "REG_DATE", "minlength", "10", "maxlength", "10", "placement", "left", "formControlName", "REG_DATE", "bsDatepicker", "", "required", "", 1, "form-control", 3, "bsConfig", "maxDate", "ngClass", "bsValue", "keydown.Tab"], ["REG_DATE", "bsDatepicker", "REG_DATE", ""], ["for", "REG_DATE"], ["type", "text", "name", "GST_NO", "placeholder", " ", "pattern", "^[A-Za-z0-9]+$", "title", "Enter Uppercase letters and digits only", "id", "GST_NO", "maxlength", "15", "minlength", "15", "formControlName", "GST_NO", 1, "form-control", 2, "text-transform", "uppercase", 3, "keypress"], ["for", " GST_NO"], ["type", "text", "name", "TAN_NO", "placeholder", " ", "pattern", "^[A-Za-z0-9]+$", "title", "Enter Uppercase letters and digits only", "id", "TAN_NO", "maxlength", "11", "minlength", "11", "formControlName", "TAN_NO", 1, "form-control", 2, "text-transform", "uppercase", 3, "keypress"], ["for", " TAN_NO"], ["type", "text", "name", "COP_NO", "placeholder", " ", "pattern", "^[A-Za-z0-9]+$", "title", "Enter Uppercase letters and digits only", "minlength", "22", "maxlength", "22", "id", "COP_NO", "formControlName", "COP_NO", 1, "form-control", 2, "text-transform", "uppercase", 3, "keypress"], ["for", " COP_NO"], ["id", "TDSFORM", 1, "row"], ["type", "text", "name", "FIN_YEAR", "placeholder", " ", "id", "FIN_YEAR", "maxlength", "9", "formControlName", "FIN_YEAR", 1, "form-control", 3, "ngModel", "keyup", "keypress", "ngModelChange"], ["finyear", ""], ["for", "FIN_YEAR"], ["appButton", "", "type", "text", "placeholder", "dd/mm/yyyy", "name", "SUBMIT_DATE", "id", "SUBMIT_DATE", "minlength", "10", "maxlength", "10", "placement", "top", "formControlName", "SUBMIT_DATE", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "maxDate", "ngClass", "ngModel", "bsValue", "ngModelChange", "keypress", "keydown.Tab"], ["SUBMIT_DATE", "bsDatepicker"], ["for", "SUBMIT_DATE"], [1, "form-radio"], [1, "radio", "radio-inline"], ["type", "radio", "formControlName", "FORM_TYPE", "name", "FORM_TYPE", "value", "Form15A", "id", "formA", 3, "change"], [1, "helper"], ["type", "radio", "value", "Form15H", "formControlName", "FORM_TYPE", "id", "formH", "name", "FORM_TYPE", 3, "change"], ["type", "radio", "value", "Form15G", "formControlName", "FORM_TYPE", "id", "formG", "name", "FORM_TYPE", 3, "change"], ["type", "radio", "value", "Form60", "formControlName", "FORM_TYPE", "id", "Form60", "name", "FORM_TYPE", 3, "change"], ["id", "FORMA", 1, "row"], ["type", "text", "name", "TDS_RATE", "placeholder", " ", "pattern", "\\d{1,2}(\\.\\d{2})?", "id", "TDS_RATE", "maxlength", "5", "title", "Input allowed only  0-9", "formControlName", "TDS_RATE", 1, "form-control", 2, "text-align", "right", 3, "keyup", "keypress"], ["margin", ""], ["for", " TDS_RATE"], ["type", "text", "name", "TDS_LIMIT", "placeholder", " ", "pattern", "\\d{1,20}(\\.\\d{2})?", "id", "TDS_LIMIT", "title", "Input allowed only  0-9", "maxlength", "10", "formControlName", "TDS_LIMIT", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", " TDS_LIMIT"], [1, "card", "shadow"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], ["class", "embed-responsive", "style", "padding-bottom:60%;", 4, "ngIf"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], [2, "align-items", "center"], [1, "input-group-prepend", "selfcss"], [1, "input-group-text"], ["aria-hidden", "true", 1, "fa", "fa-upload"], ["type", "file", "name", "file", "id", "file", "accept", "application/pdf,image/x-png,image/jpeg", 1, "form-control", 2, "height", "auto", 3, "id", "ngMode", "ngModeChange", "change"], ["placement", "right", "ngbTooltip", "Show Image", 1, "fa", "fa-fw", "fa-eye", "field-icon", 2, "font-size", "20px", "color", "#0f459b", "cursor", "pointer", 3, "click"], ["class", "fa fa-check-circle", "id", "editbutton", "style", "color: green;font-size: 20px;", "placement", "left", "ngbTooltip", "file uploaded", 4, "ngIf"], ["class", "fa fa-times-circle-o", "id", "editbutton", "style", "color: red;font-size: 20px;", "placement", "left", "ngbTooltip", "file not uploaded", 4, "ngIf"], ["id", "editbutton", "placement", "left", "ngbTooltip", "file uploaded", 1, "fa", "fa-check-circle", 2, "color", "green", "font-size", "20px"], ["id", "editbutton", "placement", "left", "ngbTooltip", "file not uploaded", 1, "fa", "fa-times-circle-o", 2, "color", "red", "font-size", "20px"], ["colspan", "3", 1, "no-data-available"], [1, "embed-responsive", 2, "padding-bottom", "60%"], [2, "width", "100%", "height", "100%", "object-fit", "contain", "position", "absolute", "top", "0", "left", "0", 3, "src"], [3, "src"], [1, "card-footer"], [1, "col-sm", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm btn-submit", "appTheme", "", 3, "click", "keydown.Tab", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["type", "submit", "appTheme", "", 1, "btn", "btn-outline-primary", "btn-sm", "btn-submit", 3, "click", "keydown.Tab"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "row", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], ["datatable", "", "id", "customermastertable", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions", "dtTrigger"], [1, "filters"], ["filters", ""], [1, "testing"], ["type", "text", "name", "AC_NO", 1, "form-control"], ["type", "text", "name", "AC_MEMBNO", 1, "form-control"], ["type", "text", "name", "AC_MEMBTYPE", 1, "form-control"], ["type", "text", "name", "AC_NAME", 1, "form-control"], ["type", "text", "name", "AC_CAST", 1, "form-control"], ["type", "text", "name", "AC_OCODE", 1, "form-control"], ["type", "text", "name", "AC_RISKCATG", 1, "form-control"], ["type", "text", "name", "AC_ADHARNO", 1, "form-control"], ["type", "text", "name", "AC_PANNO", 1, "form-control"], ["type", "text", "name", "GST_NO", 1, "form-control"], ["type", "text", "name", "TAN_NO", 1, "form-control"], ["type", "text", "name", "REG_NO", 1, "form-control"], ["type", "text", "name", "REG_DATE", 1, "form-control"], ["type", "text", "name", "PROP_NAME", 1, "form-control"], ["type", "text", "name", "AC_BIRTH_DT", 1, "form-control"], ["type", "text", "name", "AC_MOBILENO", 1, "form-control"], ["type", "text", "name", "AC_EMAILID", 1, "form-control"], ["id", "editbutton", "onclick", "this.blur()", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [1, "td_right"], [1, "td_right", 3, "ngClass"], [3, "ngClass"], [1, "td_center", 3, "ngClass"], ["colspan", "6", 1, "no-data-available"]], template: function CustomerIdComponent_Template(rf, ctx) { if (rf & 1) {
        const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CustomerIdComponent_ng_container_5_Template, 9, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Customer Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Member Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Member Scheme");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ng-select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_ng_select_ngModelChange_30_listener($event) { return ctx.ngTitle = $event; })("change", function CustomerIdComponent_Template_ng_select_change_30_listener($event) { return ctx.notApplicable($event); })("focus", function CustomerIdComponent_Template_ng_select_focus_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r150); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31); return ctx.onFocus(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CustomerIdComponent_ng_option_32_Template, 2, 2, "ng-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CustomerIdComponent_div_37_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_41_listener($event) { return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122; })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_41_listener($event) { return ctx.lname = $event == null ? null : $event.toUpperCase(); })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_41_listener($event) { return ctx.lname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, CustomerIdComponent_div_47_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_51_listener($event) { return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122; })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_51_listener($event) { return ctx.fname = $event == null ? null : $event.toUpperCase(); })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_51_listener($event) { return ctx.fname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, CustomerIdComponent_div_56_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_60_listener($event) { return ctx.mname = $event; })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_60_listener($event) { return ctx.mname = $event == null ? null : $event.toUpperCase(); })("keypress", function CustomerIdComponent_Template_input_keypress_60_listener($event) { return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122; })("focusout", function CustomerIdComponent_Template_input_focusout_60_listener() { return ctx.checkCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Middle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, CustomerIdComponent_div_65_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, CustomerIdComponent_div_66_Template, 6, 3, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, CustomerIdComponent_div_67_Template, 6, 3, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, CustomerIdComponent_div_68_Template, 39, 7, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ng-select", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_ng_select_ngModelChange_74_listener($event) { return ctx.ngTitlereg = $event; })("focus", function CustomerIdComponent_Template_ng_select_focus_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r150); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](75); return ctx.onFocus(_r12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, CustomerIdComponent_ng_option_76_Template, 2, 2, "ng-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Regional Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, CustomerIdComponent_div_81_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_85_listener($event) { return ctx.lnamereg = $event == null ? null : $event.toUpperCase(); })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_85_listener($event) { return ctx.lnamereg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Regional Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, CustomerIdComponent_div_91_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_95_listener($event) { return ctx.fnamereg = $event == null ? null : $event.toUpperCase(); })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_95_listener($event) { return ctx.fnamereg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Regional First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, CustomerIdComponent_div_100_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_104_listener($event) { return ctx.mnamereg = $event; })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_104_listener($event) { return ctx.mnamereg = $event == null ? null : $event.toUpperCase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Regional Middle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, CustomerIdComponent_div_109_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_114_listener($event) { return ctx.fullnamereg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Regional Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "ng-select", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_ng_select_ngModelChange_122_listener($event) { return ctx.ngCast = $event; })("focus", function CustomerIdComponent_Template_ng_select_focus_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r150); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](123); return ctx.onFocus(_r19); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, CustomerIdComponent_ng_option_124_Template, 2, 2, "ng-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "ng-select", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_ng_select_ngModelChange_130_listener($event) { return ctx.ngoccupation = $event; })("focus", function CustomerIdComponent_Template_ng_select_focus_130_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r150); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](131); return ctx.onFocus(_r21); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](132, CustomerIdComponent_ng_option_132_Template, 2, 2, "ng-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Occupation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "ng-select", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_ng_select_ngModelChange_138_listener($event) { return ctx.ngRisk = $event; })("focus", function CustomerIdComponent_Template_ng_select_focus_138_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r150); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](139); return ctx.onFocus(_r23); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](140, CustomerIdComponent_ng_option_140_Template, 2, 2, "ng-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Risk Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "input", 56, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CustomerIdComponent_Template_input_keyup_146_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r150); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](147); return ctx.addSpace(_r25.value); })("focusout", function CustomerIdComponent_Template_input_focusout_146_listener() { return ctx.checkAdhar(); })("keypress", function CustomerIdComponent_Template_input_keypress_146_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Aadhar Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](150, CustomerIdComponent_div_150_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_154_listener($event) { return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 48 && $event.charCode < 58 || $event.charCode >= 97 && $event.charCode <= 122; })("focusout", function CustomerIdComponent_Template_input_focusout_154_listener() { return ctx.checkPancard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Pan Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](157, CustomerIdComponent_div_157_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "input", 61, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.Tab", function CustomerIdComponent_Template_input_keydown_Tab_161_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r150); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](162); return _r28.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Birth Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](168, CustomerIdComponent_div_168_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "House");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](176, CustomerIdComponent_div_176_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Ward");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](183, CustomerIdComponent_div_183_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](190, CustomerIdComponent_div_190_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Galli");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](197, CustomerIdComponent_div_197_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](204, CustomerIdComponent_div_204_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "ng-select", 74, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_ng_select_ngModelChange_209_listener($event) { return ctx.ngCity = $event; })("focus", function CustomerIdComponent_Template_ng_select_focus_209_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r150); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](210); return ctx.onFocus(_r36); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](215, CustomerIdComponent_div_215_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_219_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Pin Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](222, CustomerIdComponent_div_222_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "label", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Regional Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_233_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "label", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](236, CustomerIdComponent_div_236_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "input", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_240_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "label", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Residential Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](243, CustomerIdComponent_div_243_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "input", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_247_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "label", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Office/Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](250, CustomerIdComponent_div_250_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](254, "input", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "label", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](257, CustomerIdComponent_div_257_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](262, "input", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "label", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "TDS Calculation Required?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerIdComponent_Template_input_change_268_listener($event) { return ctx.isReceivedTds($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "label", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "label", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "SMS Facility Required ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "input", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerIdComponent_Template_input_change_280_listener($event) { return ctx.isKYC($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "label", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "KYC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](283, CustomerIdComponent_div_283_Template, 42, 10, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](284, CustomerIdComponent_div_284_Template, 19, 2, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](285, CustomerIdComponent_div_285_Template, 36, 6, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](286, CustomerIdComponent_ng_container_286_Template, 8, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](287, CustomerIdComponent_ng_container_287_Template, 5, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](288, CustomerIdComponent_ng_container_288_Template, 49, 4, "ng-container", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.router.url === "/master/customer/customerId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ngTitle)("virtualScroll", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](81, _c5, ctx.formSubmitted))("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.prifix);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TITLE"].invalid && (ctx.angForm.controls["AC_TITLE"].dirty || ctx.angForm.controls["AC_TITLE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](83, _c5, ctx.formSubmitted))("ngModel", ctx.lname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["L_NAME"].invalid && (ctx.angForm.controls["L_NAME"].dirty || ctx.angForm.controls["L_NAME"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](85, _c5, ctx.formSubmitted))("ngModel", ctx.fname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["F_NAME"].invalid && (ctx.angForm.controls["F_NAME"].dirty || ctx.angForm.controls["F_NAME"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](87, _c5, ctx.formSubmitted))("ngModel", ctx.mname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["M_NAME"].invalid && (ctx.angForm.controls["M_NAME"].dirty || ctx.angForm.controls["M_NAME"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isapplicable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isapplicable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ngTitlereg)("virtualScroll", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](89, _c5, ctx.formSubmitted))("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.regPrifix);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TITLE_REG"].invalid && (ctx.angForm.controls["AC_TITLE_REG"].dirty || ctx.angForm.controls["AC_TITLE_REG"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](91, _c5, ctx.formSubmitted))("ngModel", ctx.lnamereg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["L_NAME_REG"].invalid && (ctx.angForm.controls["L_NAME_REG"].dirty || ctx.angForm.controls["L_NAME_REG"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](93, _c5, ctx.formSubmitted))("ngModel", ctx.fnamereg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["F_NAME_REG"].invalid && (ctx.angForm.controls["F_NAME_REG"].dirty || ctx.angForm.controls["F_NAME_REG"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](95, _c5, ctx.formSubmitted))("ngModel", ctx.mnamereg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["M_NAME_REG"].invalid && (ctx.angForm.controls["M_NAME_REG"].dirty || ctx.angForm.controls["M_NAME_REG"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.lnamereg + " " + ctx.fnamereg + " " + ctx.mnamereg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.fullnamereg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ngCast)("selectOnTab", true)("virtualScroll", true)("dropdownPosition", "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.castMaster);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ngoccupation)("selectOnTab", true)("virtualScroll", true)("dropdownPosition", "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.occupation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ngRisk)("selectOnTab", true)("virtualScroll", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.risk);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_ADHARNO"].invalid && (ctx.angForm.controls["AC_ADHARNO"].dirty || ctx.angForm.controls["AC_ADHARNO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_PANNO"].invalid && (ctx.angForm.controls["AC_PANNO"].dirty || ctx.angForm.controls["AC_PANNO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](97, _c4))("maxDate", ctx.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](98, _c5, ctx.formSubmitted))("bsValue", ctx.bsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_BIRTH_DT"].invalid && (ctx.angForm.controls["AC_BIRTH_DT"].dirty || ctx.angForm.controls["AC_BIRTH_DT"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_HONO"].invalid && (ctx.angForm.controls["AC_HONO"].dirty || ctx.angForm.controls["AC_HONO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_WARD"].invalid && (ctx.angForm.controls["AC_WARD"].dirty || ctx.angForm.controls["AC_WARD"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_ADDR"].invalid && (ctx.angForm.controls["AC_ADDR"].dirty || ctx.angForm.controls["AC_ADDR"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_GALLI"].invalid && (ctx.angForm.controls["AC_GALLI"].dirty || ctx.angForm.controls["AC_GALLI"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_AREA"].invalid && (ctx.angForm.controls["AC_AREA"].dirty || ctx.angForm.controls["AC_AREA"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.city)("ngModel", ctx.ngCity)("selectOnTab", true)("virtualScroll", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](100, _c5, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_CTCODE"].invalid && (ctx.angForm.controls["AC_CTCODE"].dirty || ctx.angForm.controls["AC_CTCODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_PIN"].invalid && (ctx.angForm.controls["AC_PIN"].dirty || ctx.angForm.controls["AC_PIN"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_MOBILENO"].invalid && (ctx.angForm.controls["AC_MOBILENO"].dirty || ctx.angForm.controls["AC_MOBILENO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_PHONE_RES"].invalid && (ctx.angForm.controls["AC_PHONE_RES"].dirty || ctx.angForm.controls["AC_PHONE_RES"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_PHONE_OFFICE"].invalid && (ctx.angForm.controls["AC_PHONE_OFFICE"].dirty || ctx.angForm.controls["AC_PHONE_OFFICE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_EMAILID"].invalid && (ctx.angForm.controls["AC_EMAILID"].dirty || ctx.angForm.controls["AC_EMAILID"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Is Received TDS Document for Year ", ctx.FinYear, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTdsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTdsFormA);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDocument);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.router.url === "/master/customer/customerId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.router.url != "/master/customer/customerId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.router.url === "/master/customer/customerId");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _submit_directive__WEBPACK_IMPORTED_MODULE_21__["SubmitDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__["NgSelectComponent"], _theme_directive__WEBPACK_IMPORTED_MODULE_24__["ThemeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__["BsDatepickerInputDirective"], _button_directive__WEBPACK_IMPORTED_MODULE_26__["ButtonDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_27__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_28__["PerfectScrollbarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbTooltip"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]], styles: ["@charset \"UTF-8\";\n.checkbox[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  padding-left: 5px;\n}\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 0;\n  margin-left: -20px;\n  border: 1px solid black;\n  background-color: #fff;\n  transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\n}\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 0;\n  top: 0;\n  margin-left: -20px;\n  padding-left: 3px;\n  font-size: 11px;\n  color: #555555;\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]::before {\n  outline: thin dotted;\n  outline: 2px auto green;\n  outline-offset: 2px;\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::after {\n  font-family: \"FontAwesome\";\n  content: \"\uF00C\";\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%]::before {\n  background-color: #eeeeee;\n  cursor: not-allowed;\n}\n.checkbox.checkbox-circle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  border-radius: 5%;\n}\n.checkbox.checkbox-inline[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.checkbox-primary[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\n  background-color: white;\n  border-color: black;\n}\n.checkbox-primary[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::after {\n  color: black;\n}\n#bkcolor[_ngcontent-%COMP%] {\n  background-color: grey;\n}\ninput[_ngcontent-%COMP%]:not([type=button]):not([type=submit]):not([type=reset]):hover, input[_ngcontent-%COMP%]:not([type=button]):not([type=submit]):not([type=reset]):focus, textarea[_ngcontent-%COMP%]:hover, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:hover, select[_ngcontent-%COMP%]:focus {\n  border-color: #81256f;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbWFzdGVyL2N1c3RvbWVyL2N1c3RvbWVyLWlkL2N1c3RvbWVyLWlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGtCQUFBO0FBRUo7QUFDRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFDRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBR0EsNkRBQUE7QUFFSjtBQUNFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLGNBQUE7QUFDSjtBQUVFO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFDSjtBQUVFO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0FBQ0o7QUFXQztFQUNHLHlCQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVdFO0VBQ0UsaUJBQUE7QUFSSjtBQVdFO0VBQ0UsYUFBQTtBQVJKO0FBV0U7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0FBUko7QUFXRTtFQUNFLFlBQUE7QUFSSjtBQWlCQTtFQUNFLHNCQUFBO0FBZEY7QUFpQkE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBZEYiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9tYXN0ZXIvY3VzdG9tZXIvY3VzdG9tZXItaWQvY3VzdG9tZXItaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2hlY2tib3gge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jaGVja2JveCBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmNoZWNrYm94IGxhYmVsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXIgMC4xNXMgZWFzZS1pbi1vdXQsIGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBib3JkZXIgMC4xNXMgZWFzZS1pbi1vdXQsIGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4xNXMgZWFzZS1pbi1vdXQsIGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2hlY2tib3ggbGFiZWw6OmFmdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzU1NTU1NTtcbn1cblxuLmNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmZvY3VzICsgbGFiZWw6OmJlZm9yZSB7XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xuICBvdXRsaW5lOiAycHggYXV0byBncmVlbjtcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbn1cblxuLmNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIu+AjFwiO1xufVxuXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQgKyBsYWJlbCB7XG4gIG9wYWNpdHk6IDAuNjU7XG59XG5cbi5jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpkaXNhYmxlZCArIGxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uY2hlY2tib3guY2hlY2tib3gtY2lyY2xlIGxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLmNoZWNrYm94LmNoZWNrYm94LWlubGluZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5jaGVja2JveC1wcmltYXJ5IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbi5jaGVja2JveC1wcmltYXJ5IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNia2NvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuaW5wdXQ6bm90KFt0eXBlPWJ1dHRvbl0pOm5vdChbdHlwZT1zdWJtaXRdKTpub3QoW3R5cGU9cmVzZXRdKTpob3ZlciwgaW5wdXQ6bm90KFt0eXBlPWJ1dHRvbl0pOm5vdChbdHlwZT1zdWJtaXRdKTpub3QoW3R5cGU9cmVzZXRdKTpmb2N1cywgdGV4dGFyZWE6aG92ZXIsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6aG92ZXIsIHNlbGVjdDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzgxMjU2ZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-customer-id",
                templateUrl: "./customer-id.component.html",
                styleUrls: ["./customer-id.component.scss"],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }, { type: _customer_id_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIdService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_dropdownService_prefix_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["PrefixMasterDropdownService"] }, { type: _shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["CastMasterService"] }, { type: _shared_dropdownService_occupation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OccupationMasterService"] }, { type: _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["SalaryDMasterdropdownService"] }, { type: _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["cityMasterService"] }, { type: _shared_dropdownService_risk_category_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["RiskCategoryDropdownService"] }, { type: _shared_dropdownService_document_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["DocumentMasterDropdownService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["DomSanitizer"] }, { type: _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_20__["SystemMasterParametersService"] }]; }, { newCustomerEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], myInputField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["autofocus"]
        }], ngSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['ngSelect']
        }], modalLarge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalLarge']
        }], triggerhide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['triggerhide']
        }], closeModalEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/master/customer/customer-id/customer-id.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/master/customer/customer-id/customer-id.module.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerIdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerIdModule", function() { return CustomerIdModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _customer_id_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-id-routing.module */ "./src/app/theme/master/customer/customer-id/customer-id-routing.module.ts");
/* harmony import */ var _customer_id_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-id.component */ "./src/app/theme/master/customer/customer-id/customer-id.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _customer_id_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-id.service */ "./src/app/theme/master/customer/customer-id/customer-id.service.ts");
/* harmony import */ var _shared_dropdownService_prefix_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/dropdownService/prefix-master-dropdown.service */ "./src/app/shared/dropdownService/prefix-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/dropdownService/cast-master-dropdown.service */ "./src/app/shared/dropdownService/cast-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_occupation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/dropdownService/occupation-master-dropdown.service */ "./src/app/shared/dropdownService/occupation-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/dropdownService/salary-division-master-dropdown.service */ "./src/app/shared/dropdownService/salary-division-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/dropdownService/city-master-dropdown.service */ "./src/app/shared/dropdownService/city-master-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_risk_category_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/dropdownService/risk-category-dropdown.service */ "./src/app/shared/dropdownService/risk-category-dropdown.service.ts");
/* harmony import */ var _shared_dropdownService_document_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/dropdownService/document-master-dropdown.service */ "./src/app/shared/dropdownService/document-master-dropdown.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../theme.module */ "./src/app/theme/theme.module.ts");
/* harmony import */ var _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");

























class CustomerIdModule {
}
CustomerIdModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomerIdModule });
CustomerIdModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomerIdModule_Factory(t) { return new (t || CustomerIdModule)(); }, providers: [_shared_dropdownService_prefix_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["PrefixMasterDropdownService"],
        _customer_id_service__WEBPACK_IMPORTED_MODULE_7__["CustomerIdService"],
        _shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["CastMasterService"],
        _shared_dropdownService_occupation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["OccupationMasterService"],
        _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SalaryDMasterdropdownService"],
        _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["cityMasterService"],
        _shared_dropdownService_risk_category_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["RiskCategoryDropdownService"],
        _shared_dropdownService_document_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["DocumentMasterDropdownService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["UserAuthInterceptor"],
            multi: true
        },
        _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_22__["SystemMasterParametersService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _customer_id_routing_module__WEBPACK_IMPORTED_MODULE_1__["CustomerIdRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["DatepickerModule"].forRoot(),
            _theme_module__WEBPACK_IMPORTED_MODULE_21__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerIdModule, { declarations: [_customer_id_component__WEBPACK_IMPORTED_MODULE_2__["CustomerIdComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _customer_id_routing_module__WEBPACK_IMPORTED_MODULE_1__["CustomerIdRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["DatepickerModule"], _theme_module__WEBPACK_IMPORTED_MODULE_21__["ThemeModule"]], exports: [_customer_id_component__WEBPACK_IMPORTED_MODULE_2__["CustomerIdComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerIdModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _customer_id_routing_module__WEBPACK_IMPORTED_MODULE_1__["CustomerIdRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["DatepickerModule"].forRoot(),
                    _theme_module__WEBPACK_IMPORTED_MODULE_21__["ThemeModule"]
                ],
                exports: [_customer_id_component__WEBPACK_IMPORTED_MODULE_2__["CustomerIdComponent"]],
                declarations: [_customer_id_component__WEBPACK_IMPORTED_MODULE_2__["CustomerIdComponent"]],
                providers: [_shared_dropdownService_prefix_master_dropdown_service__WEBPACK_IMPORTED_MODULE_8__["PrefixMasterDropdownService"],
                    _customer_id_service__WEBPACK_IMPORTED_MODULE_7__["CustomerIdService"],
                    _shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["CastMasterService"],
                    _shared_dropdownService_occupation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_10__["OccupationMasterService"],
                    _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["SalaryDMasterdropdownService"],
                    _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["cityMasterService"],
                    _shared_dropdownService_risk_category_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["RiskCategoryDropdownService"],
                    _shared_dropdownService_document_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["DocumentMasterDropdownService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["UserAuthInterceptor"],
                        multi: true
                    },
                    _utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_22__["SystemMasterParametersService"]
                ]
            }]
    }], null, null); })();


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
    getData() {
        return this.http.get(this.url + '/system-master-parameters/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
SystemMasterParametersService.ɵfac = function SystemMasterParametersService_Factory(t) { return new (t || SystemMasterParametersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
SystemMasterParametersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SystemMasterParametersService, factory: SystemMasterParametersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemMasterParametersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~centralised-passin~8d2c5d11.js.map