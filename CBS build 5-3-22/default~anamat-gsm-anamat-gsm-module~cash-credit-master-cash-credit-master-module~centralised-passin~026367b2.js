(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~centralised-passin~026367b2"],{

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
        // url = 'http://localhost:4000/prefix-master';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getPrefixMasterList() {
        this.prefixMasterObject = [];
        return this.http.get(this.url + '/prefix-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.PREFIX, value: `${element.PREFIX}` };
                this.prefixMasterObject.push(obj);
            });
            return this.prefixMasterObject;
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



// Creating and maintaining form fields with validation

// Displaying Sweet Alert

// Angular Datatable Directive























const _c0 = ["autofocus"];
const _c1 = ["ngSelect"];
const _c2 = ["modalLarge"];
const _c3 = ["triggerhide"];
function CustomerIdComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Fields marked with (");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "sub", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ") are mandatory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CustomerIdComponent_ng_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r32.label, " ");
} }
function CustomerIdComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This is required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_36_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.angForm.controls["AC_TITLE"].errors == null ? null : ctx_r3.angForm.controls["AC_TITLE"].errors.required);
} }
function CustomerIdComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only A-Z ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_46_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r5.angForm.controls["L_NAME"].errors == null ? null : ctx_r5.angForm.controls["L_NAME"].errors.pattern) || (ctx_r5.angForm.controls["L_NAME"].errors == null ? null : ctx_r5.angForm.controls["L_NAME"].errors.required));
} }
function CustomerIdComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only A-Z ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_55_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r6.angForm.controls["F_NAME"].errors == null ? null : ctx_r6.angForm.controls["F_NAME"].errors.pattern) || (ctx_r6.angForm.controls["F_NAME"].errors == null ? null : ctx_r6.angForm.controls["F_NAME"].errors.required));
} }
function CustomerIdComponent_div_64_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required and Input allowed only A-Z ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_64_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r7.angForm.controls["M_NAME"].errors == null ? null : ctx_r7.angForm.controls["M_NAME"].errors.pattern) || (ctx_r7.angForm.controls["M_NAME"].errors == null ? null : ctx_r7.angForm.controls["M_NAME"].errors.required));
} }
function CustomerIdComponent_ng_option_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r37.label, " ");
} }
function CustomerIdComponent_ng_option_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r38.label, " ");
} }
function CustomerIdComponent_ng_option_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", values_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", values_r39.label, " ");
} }
function CustomerIdComponent_div_100_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9( It should have 12 digits and It should not start with 0 and 1) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_100_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r12.angForm.controls["AC_ADHARNO"].errors == null ? null : ctx_r12.angForm.controls["AC_ADHARNO"].errors.pattern) || (ctx_r12.angForm.controls["AC_ADHARNO"].errors == null ? null : ctx_r12.angForm.controls["AC_ADHARNO"].errors.maxlength) || (ctx_r12.angForm.controls["AC_ADHARNO"].errors == null ? null : ctx_r12.angForm.controls["AC_ADHARNO"].errors.minlength));
} }
function CustomerIdComponent_div_107_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter Uppercase letters and digits only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_107_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r13.angForm.controls["AC_PANNO"].errors == null ? null : ctx_r13.angForm.controls["AC_PANNO"].errors.pattern) || (ctx_r13.angForm.controls["AC_PANNO"].errors == null ? null : ctx_r13.angForm.controls["AC_PANNO"].errors.maxlength));
} }
function CustomerIdComponent_div_116_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter Uppercase letters and digits only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_116_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.angForm.controls["AC_PANNO"].errors == null ? null : ctx_r14.angForm.controls["AC_PANNO"].errors.required);
} }
function CustomerIdComponent_div_124_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_124_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.angForm.controls["AC_HONO"].errors == null ? null : ctx_r15.angForm.controls["AC_HONO"].errors.pattern);
} }
function CustomerIdComponent_div_131_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_131_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.angForm.controls["AC_WARD"].errors == null ? null : ctx_r16.angForm.controls["AC_WARD"].errors.pattern);
} }
function CustomerIdComponent_div_138_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_138_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.angForm.controls["AC_ADDR"].errors == null ? null : ctx_r17.angForm.controls["AC_ADDR"].errors.pattern);
} }
function CustomerIdComponent_div_145_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_145_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.angForm.controls["AC_GALLI"].errors == null ? null : ctx_r18.angForm.controls["AC_GALLI"].errors.pattern);
} }
function CustomerIdComponent_div_152_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only A-Z a-z 0-9 - / . (Space) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_152_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.angForm.controls["AC_AREA"].errors == null ? null : ctx_r19.angForm.controls["AC_AREA"].errors.pattern);
} }
function CustomerIdComponent_div_162_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_162_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r20.angForm.controls["AC_CTCODE"].errors == null ? null : ctx_r20.angForm.controls["AC_CTCODE"].errors.required);
} }
function CustomerIdComponent_div_169_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_169_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r21.angForm.controls["AC_PIN"].errors == null ? null : ctx_r21.angForm.controls["AC_PIN"].errors.pattern) || (ctx_r21.angForm.controls["AC_PIN"].errors == null ? null : ctx_r21.angForm.controls["AC_PIN"].errors.minlength) || (ctx_r21.angForm.controls["AC_PIN"].errors == null ? null : ctx_r21.angForm.controls["AC_PIN"].errors.maxlength));
} }
function CustomerIdComponent_div_176_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 and It starts by either for 7 or 8 or 9, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_176_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r22.angForm.controls["AC_MOBILENO"].errors == null ? null : ctx_r22.angForm.controls["AC_MOBILENO"].errors.pattern) || (ctx_r22.angForm.controls["AC_MOBILENO"].errors == null ? null : ctx_r22.angForm.controls["AC_MOBILENO"].errors.maxlength) || (ctx_r22.angForm.controls["AC_MOBILENO"].errors == null ? null : ctx_r22.angForm.controls["AC_MOBILENO"].errors.minlength));
} }
function CustomerIdComponent_div_183_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 and It starts by 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_183_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r23.angForm.controls["AC_PHONE_RES"].errors == null ? null : ctx_r23.angForm.controls["AC_PHONE_RES"].errors.pattern) || (ctx_r23.angForm.controls["AC_PHONE_RES"].errors == null ? null : ctx_r23.angForm.controls["AC_PHONE_RES"].errors.maxlength) || (ctx_r23.angForm.controls["AC_PHONE_RES"].errors == null ? null : ctx_r23.angForm.controls["AC_PHONE_RES"].errors.minlength));
} }
function CustomerIdComponent_div_190_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_190_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r24.angForm.controls["AC_PHONE_OFFICE"].errors == null ? null : ctx_r24.angForm.controls["AC_PHONE_OFFICE"].errors.pattern) || (ctx_r24.angForm.controls["AC_PHONE_OFFICE"].errors == null ? null : ctx_r24.angForm.controls["AC_PHONE_OFFICE"].errors.maxlength) || (ctx_r24.angForm.controls["AC_PHONE_OFFICE"].errors == null ? null : ctx_r24.angForm.controls["AC_PHONE_OFFICE"].errors.minlength));
} }
function CustomerIdComponent_div_197_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter valid Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_197_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r25.angForm.controls["AC_EMAILID"].errors == null ? null : ctx_r25.angForm.controls["AC_EMAILID"].errors.pattern);
} }
function CustomerIdComponent_div_223_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This is required field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_223_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_223_div_16_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r55.angForm.controls["SUBMIT_DATE"].errors == null ? null : ctx_r55.angForm.controls["SUBMIT_DATE"].errors.required);
} }
const _c4 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
const _c5 = function (a0) { return { "form-submitted": a0 }; };
function CustomerIdComponent_div_223_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 88, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CustomerIdComponent_div_223_Template_input_keyup_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r57.addhyphen(_r54.value); })("keypress", function CustomerIdComponent_div_223_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); return $event.charCode >= 48 && $event.charCode < 58; })("ngModelChange", function CustomerIdComponent_div_223_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r60.ngfinyear = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Financial Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_div_223_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r61.ngSubmitDate = $event; })("keypress", function CustomerIdComponent_div_223_Template_input_keypress_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Submission Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "sub", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CustomerIdComponent_div_223_div_16_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Form Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerIdComponent_div_223_Template_input_change_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r63.isForm15A(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Form - 15 A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerIdComponent_div_223_Template_input_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r64.isForm15A(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Form - 15 H ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerIdComponent_div_223_Template_input_change_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r65.isForm15A(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Letter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r26.ngfinyear);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c4))("maxDate", ctx_r26.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c5, ctx_r26.formSubmitted))("ngModel", ctx_r26.ngSubmitDate)("bsValue", ctx_r26.bsValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r26.angForm.controls["SUBMIT_DATE"].invalid && (ctx_r26.angForm.controls["SUBMIT_DATE"].dirty || ctx_r26.angForm.controls["SUBMIT_DATE"].touched));
} }
function CustomerIdComponent_div_224_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_224_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_224_div_11_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r67.angForm.controls["TDS_RATE"].errors == null ? null : ctx_r67.angForm.controls["TDS_RATE"].errors.pattern);
} }
function CustomerIdComponent_div_224_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Input allowed only 0-9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_224_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_224_div_18_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r68.angForm.controls["TDS_LIMIT"].errors == null ? null : ctx_r68.angForm.controls["TDS_LIMIT"].errors.pattern);
} }
function CustomerIdComponent_div_224_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Form - 15 A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 100, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CustomerIdComponent_div_224_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r71.checkmargin(_r66.value); })("keypress", function CustomerIdComponent_div_224_Template_input_keypress_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "TDS Rate %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CustomerIdComponent_div_224_div_11_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_div_224_Template_input_keypress_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 46; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "TDS Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CustomerIdComponent_div_224_div_18_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.angForm.controls["TDS_RATE"].invalid && (ctx_r27.angForm.controls["TDS_RATE"].dirty || ctx_r27.angForm.controls["TDS_RATE"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.angForm.controls["TDS_LIMIT"].invalid && (ctx_r27.angForm.controls["TDS_LIMIT"].dirty || ctx_r27.angForm.controls["TDS_LIMIT"].touched));
} }
function CustomerIdComponent_div_225_tbody_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerIdComponent_div_225_tbody_16_tr_1_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const indexOfelement_r82 = ctx.index; const data_r81 = ctx.$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r83.fileChangeEvent($event, indexOfelement_r82, data_r81.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_div_225_tbody_16_tr_1_Template_span_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const data_r81 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); _r77.show(); return ctx_r85.viewImagePreview($event, data_r81.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r81 = ctx.$implicit;
    const indexOfelement_r82 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", data_r81.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r81.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "file" + indexOfelement_r82);
} }
function CustomerIdComponent_div_225_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_div_225_tbody_16_tr_1_Template, 12, 3, "tr", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r75.documentMaster);
} }
function CustomerIdComponent_div_225_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_225_img_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 124);
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r78.selectedImagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CustomerIdComponent_div_225_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Image For Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_div_225_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 107);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CustomerIdComponent_div_225_tbody_16_Template, 2, 1, "tbody", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CustomerIdComponent_div_225_tbody_17_Template, 4, 0, "tbody", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "app-modal-basic", 108, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h4", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_div_225_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19); return _r77.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CustomerIdComponent_div_225_img_28_Template, 1, 1, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CustomerIdComponent_div_225_p_29_Template, 2, 0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_div_225_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19); return _r77.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Close");
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
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r28.documentMaster == null ? null : ctx_r28.documentMaster.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r28.documentMaster == null ? null : ctx_r28.documentMaster.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dialogClass", "modal-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r28.isImgPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r28.isImgPreview);
} }
function CustomerIdComponent_ng_container_226_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_ng_container_226_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r92.submit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_ng_container_226_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_ng_container_226_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r94.addNewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_ng_container_226_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_ng_container_226_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r96.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_ng_container_226_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomerIdComponent_ng_container_226_button_4_Template, 2, 0, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CustomerIdComponent_ng_container_226_button_5_Template, 2, 0, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CustomerIdComponent_ng_container_226_button_7_Template, 2, 0, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.showButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.newbtnShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.updateShow);
} }
function CustomerIdComponent_ng_container_227_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_ng_container_227_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r99.submit($event); return ctx_r99.onCloseModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add and close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r98.angForm.invalid);
} }
function CustomerIdComponent_ng_container_227_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomerIdComponent_ng_container_227_button_4_Template, 2, 1, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.showButton);
} }
function CustomerIdComponent_ng_container_228_tbody_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerIdComponent_ng_container_228_tbody_9_tr_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r106); const data_r104 = ctx.$implicit; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r105.editClickHandler(data_r104.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r104.AC_NO);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r104.AC_MEMBNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r104.AC_MEMBNO === "" ? "-" : data_r104.AC_MEMBNO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r104.AC_MEMBTYPE === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r104.AC_MEMBTYPE === "" ? "-" : data_r104.AC_MEMBTYPE, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r104.AC_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (data_r104.castMaster == null ? null : data_r104.castMaster.NAME) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r104.AC_CAST === "" || data_r104.AC_CAST === null ? "-" : data_r104.castMaster == null ? null : data_r104.castMaster.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (data_r104.occupMaster == null ? null : data_r104.occupMaster.NAME) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r104.AC_OCODE === "" || data_r104.AC_OCODE === null ? "-" : data_r104.occupMaster == null ? null : data_r104.occupMaster.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (data_r104.riskCategory == null ? null : data_r104.riskCategory.NAME) === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r104.AC_RISKCATG === "" || data_r104.AC_RISKCATG === null ? "-" : data_r104.riskCategory == null ? null : data_r104.riskCategory.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r104.AC_ADHARNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r104.AC_ADHARNO === "" ? "-" : data_r104.AC_ADHARNO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r104.AC_PANNO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r104.AC_PANNO === "" ? "-" : data_r104.AC_PANNO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r104.AC_BIRTH_DT === "" ? "td_center" : "td_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r104.AC_BIRTH_DT === "" ? "-" : data_r104.AC_BIRTH_DT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r104.AC_MOBILENO === "" ? "td_center" : "td_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r104.AC_MOBILENO === "" ? "-" : data_r104.AC_MOBILENO, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", data_r104.AC_EMAILID === "" ? "td_center" : "td_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r104.AC_EMAILID === "" ? "-" : data_r104.AC_EMAILID, "");
} }
function CustomerIdComponent_ng_container_228_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerIdComponent_ng_container_228_tbody_9_tr_1_Template, 27, 22, "tr", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r101.customerMaster);
} }
function CustomerIdComponent_ng_container_228_tbody_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerIdComponent_ng_container_228_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CustomerIdComponent_ng_container_228_tbody_9_Template, 2, 1, "tbody", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CustomerIdComponent_ng_container_228_tbody_10_Template, 4, 0, "tbody", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tfoot", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 147);
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
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx_r31.dtExportButtonOptions)("dtTrigger", ctx_r31.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r31.customerMaster == null ? null : ctx_r31.customerMaster.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r31.customerMaster == null ? null : ctx_r31.customerMaster.length) == 0);
} }
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
// Handling datatable data
class DataTableResponse {
}
class CustomerIdComponent {
    constructor(http, customerIdService, fb, prefixMaster, castService, occupationMaster, salaryDMaster, cityMaster, riskCategoryDropdown, documentMasterService, router) {
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
        this.formSubmitted = false;
        this.newCustomerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visible = false;
        this.visibleAnimate = false;
        this.closeModalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //api
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].base_url;
        this.imageObject = new Array();
        this.fname = "";
        this.mname = "";
        this.lname = "";
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
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate());
    }
    addNewCustomer(value) {
        this.newCustomerEvent.emit(value);
    }
    ngOnInit() {
        this.createForm();
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
                    title: "Member No",
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
                    title: "Adhar Card No.",
                    data: "AC_ADHARNO",
                },
                {
                    title: "PAN No.",
                    data: "AC_PANNO",
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
        this.prefixMaster
            .getPrefixMasterList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe((data) => {
            this.prifix = data;
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
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        let branchCode = result.branch.CODE;
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
            AC_IS_RECOVERY: [false],
            TDS_REQUIRED: [false],
            SMS_REQUIRED: [false],
            IS_KYC_RECEIVED: [false],
            FIN_YEAR: [""],
            SUBMIT_DATE: [""],
            FORM_TYPE: [""],
            TDS_RATE: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            TDS_LIMIT: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
        });
    }
    // Method to insert data into database through NestJS
    submit(event) {
        let birthdate;
        let submitdate;
        event.preventDefault();
        this.formSubmitted = true;
        if (this.angForm.controls['TDSDOCUMNET'].value == true) {
            this.SUBMIT_DATE = true;
        }
        else {
            this.SUBMIT_DATE = true;
        }
        if (this.angForm.valid) {
            const formVal = this.angForm.value;
            const dataToSend = {
                'AC_NO': formVal.AC_NO,
                'AC_MEMBTYPE': formVal.AC_MEMBTYPE,
                'AC_MEMBNO': formVal.AC_MEMBNO,
                'AC_TITLE': formVal.AC_TITLE,
                'F_NAME': formVal.F_NAME.toUpperCase(),
                'M_NAME': formVal.M_NAME.toUpperCase(),
                'L_NAME': formVal.L_NAME.toUpperCase(),
                'AC_NAME': (formVal.L_NAME + ' ' + formVal.F_NAME + ' ' + formVal.M_NAME).toUpperCase(),
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
                'TDS_REQUIRED': formVal.TDS_REQUIRED,
                'SMS_REQUIRED': formVal.SMS_REQUIRED,
                'IS_KYC_RECEIVED': formVal.IS_KYC_RECEIVED,
                'TDSDOCUMNET': formVal.TDSDOCUMNET,
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
                'Document': this.imageObject
            };
            this.customerIdService.postData(dataToSend).subscribe((data) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'success',
                    title: 'Account Created successfully!',
                    html: '<b>NAME : </b>' + data.AC_NAME + ',' + '<br>' +
                        '<b>ACCOUNT NO : </b>' + data.AC_NO + '<br>'
                });
                this.formSubmitted = false;
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
        this.ngfinyear = null;
        this.ngSubmitDate = null;
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
        if (ele <= 100) {
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Invalid Input", "Please insert values below 100", "error");
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
    //Method for append data into fields
    editClickHandler(id) {
        this.showButton = false;
        this.updateShow = true;
        this.newbtnShow = true;
        let birthdate;
        let submitdate;
        this.customerIdService.getFormData(id).subscribe((data) => {
            this.updatecheckdata = data;
            this.updateID = data.id;
            this.ngRisk = data.AC_RISKCATG;
            this.ngoccupation = data.AC_OCODE;
            this.ngCast = data.AC_CAST;
            this.ngfinyear = data.tdsForm.FIN_YEAR;
            this.ngSubmitDate = (data.tdsForm.SUBMIT_DATE == 'Invalid date' || data.tdsForm.SUBMIT_DATE == '' || data.tdsForm.SUBMIT_DATE == null) ? submitdate = '' : submitdate = data.tdsForm.SUBMIT_DATE,
                this.angForm.patchValue({
                    AC_NO: data.AC_NO,
                    AC_MEMBTYPE: data.AC_MEMBTYPE,
                    AC_MEMBNO: data.AC_MEMBNO,
                    AC_TITLE: data.AC_TITLE,
                    F_NAME: data.F_NAME,
                    M_NAME: data.M_NAME,
                    L_NAME: data.L_NAME,
                    AC_NAME: data.AC_NAME,
                    AC_ADHARNO: data.AC_ADHARNO,
                    AC_BIRTH_DT: (data.AC_BIRTH_DT == 'Invalid date' || data.AC_BIRTH_DT == '' || data.AC_BIRTH_DT == null) ? birthdate = '' : birthdate = data.AC_BIRTH_DT,
                    AC_HONO: data.custAddress[0].AC_HONO,
                    AC_WARD: data.custAddress[0].AC_WARD,
                    AC_ADDR: data.custAddress[0].AC_ADDR,
                    AC_GALLI: data.custAddress[0].AC_GALLI,
                    AC_AREA: data.custAddress[0].AC_AREA,
                    AC_CTCODE: data.custAddress[0].AC_CTCODE,
                    AC_PIN: data.custAddress[0].AC_PIN,
                    AC_SALARYDIVISION_CODE: data.AC_SALARYDIVISION_CODE,
                    AC_PANNO: data.AC_PANNO,
                    AC_IS_RECOVERY: data.AC_IS_RECOVERY,
                    AC_MOBILENO: data.AC_MOBILENO,
                    AC_PHONE_RES: data.AC_PHONE_RES,
                    AC_PHONE_OFFICE: data.AC_PHONE_OFFICE,
                    AC_EMAILID: data.AC_EMAILID,
                    TDSDOCUMNET: data.TDSDOCUMNET,
                    TDS_REQUIRED: data.TDS_REQUIRED,
                    SMS_REQUIRED: data.SMS_REQUIRED,
                    IS_KYC_RECEIVED: data.IS_KYC_RECEIVED,
                    FORM_TYPE: data.tdsForm.FORM_TYPE,
                    TDS_RATE: data.tdsForm.TDS_RATE,
                    TDS_LIMIT: data.tdsForm.TDS_LIMIT,
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
            if (data.tdsForm.FORM_TYPE == "Form15A") {
                this.isForm15A(1);
            }
            if (data.IS_KYC_RECEIVED == true) {
                this.isDocument = true;
                this.imageObject = [];
                this.selectedImgArrayDetails = [];
                for (const [key, value] of Object.entries(data.custdocument)) {
                    let selectedObj = {};
                    let id = data.custdocument[key].DocumentMasterID;
                    selectedObj[id] = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].base_url + '/' + data.custdocument[key].PATH;
                    this.selectedImagePreview = selectedObj[id];
                    this.imageObject.push(selectedObj);
                    this.selectedImgArrayDetails.push(selectedObj);
                }
            }
            else {
                this.isDocument = false;
            }
        });
    }
    //Method for update data
    updateData() {
        let date;
        let sudate;
        let data = this.angForm.value;
        data["id"] = this.updateID;
        data['Document'] = this.imageObject;
        if (this.updatecheckdata.AC_BIRTH_DT != data.AC_BIRTH_DT) {
            (data.AC_BIRTH_DT == 'Invalid date' || data.AC_BIRTH_DT == '' || data.AC_BIRTH_DT == null) ? (date = '', data['AC_BIRTH_DT'] = date) : (date = data.AC_BIRTH_DT, data['AC_BIRTH_DT'] = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('DD/MM/YYYY'));
        }
        if (this.updatecheckdata.tdsForm.SUBMIT_DATE != data.SUBMIT_DATE) {
            (data.SUBMIT_DATE == 'Invalid date' || data.SUBMIT_DATE == '' || data.SUBMIT_DATE == null) ? (sudate = '', data['SUBMIT_DATE'] = sudate) : (sudate = data.SUBMIT_DATE, data['SUBMIT_DATE'] = moment__WEBPACK_IMPORTED_MODULE_8__(sudate).format('DD/MM/YYYY'));
        }
        data['FIN_YEAR'] = this.ngfinyear;
        this.customerIdService.updateData(data).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Success!", "Record Updated Successfully !", "success");
            this.showButton = true;
            this.updateShow = false;
            this.newbtnShow = false;
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
    isKYC($event) {
        if ($event.target.checked) {
            this.isDocument = true;
        }
        else {
            this.isDocument = false;
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
    }
    fileChangeEvent(event, id, valueid) {
        let result;
        let arr = [];
        let me = this;
        let obj = {};
        let selectedObj = {};
        let file = event.target.files[0];
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
        }
    }
    // method for close modal on add and close click
    onCloseModal() {
        var closemodal = document.getElementById('triggerhide');
        closemodal.click();
    }
    viewImagePreview(ele, id) {
        for (const [key, value] of Object.entries(this.selectedImgArrayDetails)) {
            let jsonObj = value;
            Object.keys(jsonObj).forEach(key => {
                if (id == key) {
                    this.isImgPreview = true;
                    this.selectedImagePreview = jsonObj[key];
                    throw 'Break';
                }
                else {
                    this.isImgPreview = false;
                    this.selectedImagePreview = '';
                }
            });
        }
    }
    checkCustomer() {
        this.customerIdService.getData().subscribe(data => {
            if ((data === null || data === void 0 ? void 0 : data.length) != 0) {
                if (data.find(data => data['L_NAME'] == this.angForm.controls['L_NAME'].value)) {
                    if (data.find(data => data['F_NAME'] == this.angForm.controls['F_NAME'].value)) {
                        if (data.find(data => data['M_NAME'] == this.angForm.controls['M_NAME'].value)) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                title: "Are you sure?",
                                text: "This Customer is Already Exists.",
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
                    }
                }
            }
        });
    }
    checkAdhar() {
        let adhar;
        this.customerIdService.getData().subscribe(data => {
            if ((data === null || data === void 0 ? void 0 : data.length) != 0) {
                if (data.find(data => data['AC_ADHARNO'] != (this.angForm.controls['AC_ADHARNO'].value == ''))) {
                    if (data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value)) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            icon: 'info',
                            title: 'This Aadhar Number is Already Extsts',
                        });
                        this.angForm.controls['AC_ADHARNO'].reset();
                    }
                }
                else {
                    if (data.find(data => data['L_NAME'] == this.angForm.controls['L_NAME'].value)) {
                        if (data.find(data => data['F_NAME'] == this.angForm.controls['F_NAME'].value)) {
                            if (data.find(data => data['M_NAME'] == this.angForm.controls['M_NAME'].value)) {
                                if (data.find(data => data['AC_ADHARNO'] == this.angForm.controls['AC_ADHARNO'].value)) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                        icon: 'info',
                                        title: 'This Customer is Already Exists',
                                    });
                                    this.resetForm();
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    // checkPancard() {
    //   this.customerIdService.getData().subscribe(data => {
    //     if (data?.length != 0) {
    //       if (data.find(data => data['AC_PANNO'] == (this.angForm.controls['AC_PANNO'].value == ''))) {
    //         if (data.find(data => data['AC_PANNO'] == this.angForm.controls['AC_PANNO'].value)) {
    //           Swal.fire({
    //             icon: 'info',
    //             title: 'This Pan Number is Already Extsts',
    //           })
    //           this.angForm.controls['AC_PANNO'].reset();
    //         }
    //       }
    //     }
    //   })
    // }
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
}
CustomerIdComponent.ɵfac = function CustomerIdComponent_Factory(t) { return new (t || CustomerIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_customer_id_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_prefix_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["PrefixMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["CastMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_occupation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OccupationMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["SalaryDMasterdropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["cityMasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_risk_category_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["RiskCategoryDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_dropdownService_document_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["DocumentMasterDropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"])); };
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
    } }, outputs: { newCustomerEvent: "newCustomerEvent", closeModalEvent: "closeModalEvent" }, decls: 229, vars: 62, consts: [[1, "row"], [1, "col-12"], [1, "card"], ["action", "javascript:", "novalidate", "", 3, "formGroup"], ["myform", "ngForm"], [4, "ngIf"], [1, "card-block"], [1, "col-sm-2"], [1, "form-group", "input-group"], [1, "border-lable-flt"], ["type", "text", "name", "AC_NO", "placeholder", " ", "id", "AC_NO", "pattern", "^[0-9]+$", "maxlength", "15", "formControlName", "AC_NO", "disabled", "", 1, "form-control"], ["for", "AC_NO"], ["type", "text", "name", "AC_MEMBNO", "placeholder", " ", "id", "AC_MEMBNO", "formControlName", "AC_MEMBNO", "disabled", "", 1, "form-control"], ["for", "AC_MEMBNO"], [1, "col-sm-4"], ["type", "text", "name", "AC_MEMBTYPE", "placeholder", " ", "id", "AC_MEMBTYPE", "formControlName", "AC_MEMBTYPE", "disabled", "", 1, "form-control"], ["for", "AC_MEMBTYPE"], [1, "form-group", "form-primary", "form-static-label"], ["autofocus", "", 1, "border-lable-flt"], ["bindValue", "value", "id", "AC_TITLE", "bindLabel", "label", "formControlName", "AC_TITLE", "title", "Compulsory Selection", "required", "", "placeholder", "Title", "onload", "ngfocus()", 3, "ngModel", "ngClass", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "AC_TYPE"], [1, "required"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["type", "text", "name", "L_NAME", "placeholder", " ", "id", "L_NAME", "required", "", "pattern", "^[A-Za-z]+$", "maxlength", "15", "title", "Input allowed only A-Z", "formControlName", "L_NAME", "required", "", 1, "form-control", 2, "text-transform", "uppercase", 3, "ngClass", "ngModel", "keypress", "ngModelChange"], ["lastname", ""], ["for", "L_NAME"], ["type", "text", "name", "F_NAME", "placeholder", " ", "id", "F_NAME", "required", "", "pattern", "^[A-Za-z]+$", "maxlength", "15", "title", "Input allowed only A-Z", "formControlName", "F_NAME", 1, "form-control", 2, "text-transform", "uppercase", 3, "ngClass", "ngModel", "keypress", "ngModelChange"], ["for", "F_NAME"], ["type", "text", "name", "M_NAME", "placeholder", " ", "id", "M_NAME", "required", "", "pattern", "^[A-Za-z]+$", "maxlength", "15", "title", "Input allowed only A-Z", "formControlName", "M_NAME", 1, "form-control", 2, "text-transform", "uppercase", 3, "ngClass", "ngModel", "ngModelChange", "keypress", "focusout"], ["for", "M_NAME"], ["type", "text", "name", "AC_NAME", "placeholder", " ", "id", "AC_NAME", "pattern", "^[A-Za-z\\./ -]+$", "disabled", "", "formControlName", "AC_NAME", 1, "form-control", 2, "text-transform", "uppercase", 3, "value"], ["for", "AC_NAME"], ["bindValue", "value", "id", "AC_CAST", "bindLabel", "label", "formControlName", "AC_CAST", "placeholder", "Cast", 3, "ngModel", "ngModelChange"], ["for", "AC_CAST"], ["bindValue", "value", "id", "AC_OCODE", "bindLabel", "label", "formControlName", "AC_OCODE", "placeholder", "Occupation", 3, "ngModel", "ngModelChange"], ["for", "AC_OCODE"], ["bindValue", "value", "id", "AC_RISKCATG", "bindLabel", "label", "formControlName", "AC_RISKCATG", "placeholder", "Risk Category", 3, "ngModel", "ngModelChange"], ["for", "AC_RISKCATG"], ["type", "text", "name", "AC_ADHARNO", "placeholder", " ", "pattern", "[2-9]{1}[0-9\\s]{13}", "title", "Input allowed only 0-9", "id", "AC_ADHARNO", "maxlength", "14", "minlength", "14", "formControlName", "AC_ADHARNO", 1, "form-control", 3, "keyup", "focusout", "keypress"], ["adhar", ""], ["for", " AC_ADHARNO"], ["type", "text", "name", "AC_PANNO", "placeholder", " ", "pattern", "^[A-Z0-9]+$", "title", "Enter Uppercase letters and digits only", "maxlength", "10", "id", "AC_PANNO", "formControlName", "AC_PANNO", 1, "form-control", 3, "keypress"], ["for", "AC_PANNO"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "AC_BIRTH_DT", "id", "AC_BIRTH_DT", "formControlName", "AC_BIRTH_DT", "bsDatepicker", "", "required", "", 1, "form-control", 3, "bsConfig", "maxDate", "ngClass", "bsValue"], ["for", "AC_BIRTH_DT"], ["type", "text", "formControlName", "AC_HONO", "name", "AC_HONO", "placeholder", " ", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_HONO", 1, "form-control"], ["for", "AC_HONO"], ["type", "text", "name", "AC_WARD", "placeholder", " ", "pattern", "^[A-Za-z0-9\\./ -]+$", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_WARD", "formControlName", "AC_WARD", 1, "form-control"], ["for", "AC_WARD"], ["type", "text", "name", "AC_ADDR", "placeholder", " ", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_ADDR", "formControlName", "AC_ADDR", 1, "form-control"], ["for", "AC_ADDR"], ["type", "text", "name", "AC_GALLI", "placeholder", " ", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_GALLI", "formControlName", "AC_GALLI", 1, "form-control"], ["for", "AC_GALLI"], ["type", "text", "name", "AC_AREA", "placeholder", " ", "title", " Input allowed only A-Z a-z 0-9 - / . (Space)", "id", "AC_AREA", "formControlName", "AC_AREA", 1, "form-control"], ["for", "AC_AREA"], ["id", "AC_CTCODE", "bindValue", "id", "bindLabel", "CITY_NAME", "formControlName", "AC_CTCODE", "title", "Compulsory Selection", "placeholder", "City", "required", "", 3, "items", "ngModel", "ngClass", "ngModelChange"], ["for", "AC_CTCODE"], [1, "col-sm"], ["type", "text", "name", "AC_PIN", "placeholder", " ", "pattern", "^[1-9][0-9]{5}", "title", " Input allowed only  0-9", "maxlength", "6", "minlength", " 6", "id", "AC_PIN", "formControlName", "AC_PIN", "NumberOnly", "", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", "AC_PIN"], ["type", "text", "name", "AC_MOBILENO", "placeholder", " ", "pattern", "[7-9 0]{1}[0-9]{9,10}", "title", "Input allowed only  0-9", "id", "AC_MOBILENO", "maxlength", "11", "minlength", "10", "formControlName", "AC_MOBILENO", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", " AC_MOBILENO"], ["type", "text", "name", "AC_PHONE_RES", "placeholder", " ", "pattern", "[7-9 0]{1}[0-9]{9,10}", "title", "Input allowed only  0-9", "id", "AC_PHONE_RES", "maxlength", "11", "minlength", "10", "formControlName", "AC_PHONE_RES", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", " AC_PHONE_RES"], ["type", "text", "name", "AC_PHONE_OFFICE", "placeholder", " ", "pattern", "[7-9 0]{1}[0-9]{9,10}", "title", "Input allowed only  0-9", "id", "AC_PHONE_OFFICE", "maxlength", "11", "minlength", "10", "formControlName", "AC_PHONE_OFFICE", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", " AC_PHONE_OFFICE"], [1, "col-sm-3"], ["type", "email", "name", "AC_EMAILID", "placeholder", " ", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$", "title", "Enter valid Email", "id", "AC_EMAILID", "formControlName", "AC_EMAILID", 1, "form-control"], ["for", "AC_EMAILID"], [1, "checkbox", "checkbox-primary"], [1, "border-checkbox-group", "border-checkbox-group-primary"], ["type", "checkbox", "id", "TDS_REQUIRED", "formControlName", "TDS_REQUIRED", 1, "border-checkbox"], ["for", "TDS_REQUIRED", 1, "border-checkbox-label"], ["type", "checkbox", "id", "IRTDSDFY", "value", "IRTDSDFY", "formControlName", "TDSDOCUMNET", 1, "border-checkbox", 3, "change"], ["for", "IRTDSDFY", 1, "border-checkbox-label"], ["type", "checkbox", "id", "SMS_REQUIRED", "formControlName", "SMS_REQUIRED", 1, "border-checkbox"], ["for", "SMS_REQUIRED", 1, "border-checkbox-label"], ["type", "checkbox", "id", "IS_KYC_RECEIVED", "formControlName", "IS_KYC_RECEIVED", 1, "border-checkbox", 3, "change"], ["for", "IS_KYC_RECEIVED", 1, "border-checkbox-label"], ["class", "row", "id", "TDSFORM", 4, "ngIf"], ["class", "row", "id", "FORMA", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [3, "value"], [1, "alert", "alert-danger"], ["id", "TDSFORM", 1, "row"], ["type", "text", "name", "FIN_YEAR", "placeholder", " ", "id", "FIN_YEAR", "maxlength", "9", "formControlName", "FIN_YEAR", 1, "form-control", 3, "ngModel", "keyup", "keypress", "ngModelChange"], ["finyear", ""], ["for", "FIN_YEAR"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "SUBMIT_DATE", "id", "SUBMIT_DATE", "minlength", "10", "maxlength", "10", "formControlName", "SUBMIT_DATE", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "maxDate", "ngClass", "ngModel", "bsValue", "ngModelChange", "keypress"], ["for", "SUBMIT_DATE"], [1, "form-radio"], [1, "radio", "radio-inline"], ["type", "radio", "formControlName", "FORM_TYPE", "name", "FORM_TYPE", "value", "Form15A", "id", "formA", 3, "change"], [1, "helper"], ["type", "radio", "value", "Form15H", "formControlName", "FORM_TYPE", "id", "formH", "name", "FORM_TYPE", 3, "change"], ["type", "radio", "value", "Latter", "formControlName", "FORM_TYPE", "id", "latter", "name", "FORM_TYPE", 3, "change"], ["id", "FORMA", 1, "row"], ["type", "text", "name", "TDS_RATE", "placeholder", " ", "pattern", "\\d{1,20}(\\.\\d{2})?", "id", "TDS_RATE", "title", "Input allowed only  0-9", "formControlName", "TDS_RATE", 1, "form-control", 2, "text-align", "right", 3, "keyup", "keypress"], ["margin", ""], ["for", " TDS_RATE"], ["type", "text", "name", "TDS_LIMIT", "placeholder", " ", "pattern", "\\d{1,20}(\\.\\d{2})?", "id", "TDS_LIMIT", "title", "Input allowed only  0-9", "maxlength", "10", "formControlName", "TDS_LIMIT", 1, "form-control", 2, "text-align", "right", 3, "keypress"], ["for", " TDS_LIMIT"], [1, "card", "shadow"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", "table-hover", "compact"], [3, "dialogClass"], ["modalLarge", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], ["class", "form-control", "style", "width: 100%;height: 100%;", 3, "src", 4, "ngIf"], [1, "app-modal-footer"], ["type", "button", 1, "btn", "btn-primary", "ripple", "light", 3, "click"], [4, "ngFor", "ngForOf"], [2, "align-items", "center"], [1, "border-checkbox-label", 3, "for"], ["type", "file", "name", "file", 3, "id", "change"], ["placement", "right", "ngbTooltip", "Show Image", 1, "fa", "fa-fw", "fa-eye", "field-icon", 2, "font-size", "20px", "color", "#0f459b", "cursor", "pointer", 3, "click"], ["colspan", "3", 1, "no-data-available"], [1, "form-control", 2, "width", "100%", "height", "100%", 3, "src"], [1, "card-footer"], [1, "col-sm", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary btn-sm", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "row", 2, "float", "right"], ["type", "submit", "class", "btn btn-outline-primary btn-sm", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], ["datatable", "", "id", "customermastertable", 1, "table", "table-striped", "table-bordered", "table-hover", "compact", 3, "dtOptions", "dtTrigger"], ["id", "bkcolor"], ["type", "text", "name", "AC_NO", 1, "form-control"], ["type", "text", "name", "AC_MEMBNO", 1, "form-control"], ["type", "text", "name", "AC_MEMBTYPE", 1, "form-control"], ["type", "text", "name", "AC_NAME", 1, "form-control"], ["type", "text", "name", "AC_CAST", 1, "form-control"], ["type", "text", "name", "AC_OCODE", 1, "form-control"], ["type", "text", "name", "AC_RISKCATG", 1, "form-control"], ["type", "text", "name", "AC_ADHARNO", 1, "form-control"], ["type", "text", "name", "AC_PANNO", 1, "form-control"], ["type", "text", "name", "AC_BIRTH_DT", 1, "form-control"], ["type", "text", "name", "AC_MOBILENO", 1, "form-control"], ["type", "text", "name", "AC_EMAILID", 1, "form-control"], ["id", "editbutton", "placement", "bottom", "ngbTooltip", "Edit", 1, "fa", "fa-fw", "fa-edit", "field-icon", 3, "click"], [1, "td_right"], [1, "td_right", 3, "ngClass"], [3, "ngClass"], [1, "td_center", 3, "ngClass"], ["colspan", "6", 1, "no-data-available"]], template: function CustomerIdComponent_Template(rf, ctx) { if (rf & 1) {
        const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ng-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_ng_select_ngModelChange_30_listener($event) { return ctx.ngTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CustomerIdComponent_ng_option_31_Template, 2, 2, "ng-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, CustomerIdComponent_div_36_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_40_listener($event) { return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122; })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_40_listener($event) { return ctx.lname = $event.toUpperCase(); })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_40_listener($event) { return ctx.lname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, CustomerIdComponent_div_46_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_50_listener($event) { return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122; })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_50_listener($event) { return ctx.fname = $event.toUpperCase(); })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_50_listener($event) { return ctx.fname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, CustomerIdComponent_div_55_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_59_listener($event) { return ctx.mname = $event; })("ngModelChange", function CustomerIdComponent_Template_input_ngModelChange_59_listener($event) { return ctx.mname = $event.toUpperCase(); })("keypress", function CustomerIdComponent_Template_input_keypress_59_listener($event) { return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 97 && $event.charCode <= 122; })("focusout", function CustomerIdComponent_Template_input_focusout_59_listener() { return ctx.checkCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Middle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, CustomerIdComponent_div_64_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ng-select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_ng_select_ngModelChange_75_listener($event) { return ctx.ngCast = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, CustomerIdComponent_ng_option_76_Template, 2, 2, "ng-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "ng-select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_ng_select_ngModelChange_82_listener($event) { return ctx.ngoccupation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, CustomerIdComponent_ng_option_83_Template, 2, 2, "ng-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Occupation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "ng-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_ng_select_ngModelChange_89_listener($event) { return ctx.ngRisk = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, CustomerIdComponent_ng_option_90_Template, 2, 2, "ng-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Risk Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CustomerIdComponent_Template_input_keyup_96_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r107); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](97); return ctx.addSpace(_r11.value); })("focusout", function CustomerIdComponent_Template_input_focusout_96_listener() { return ctx.checkAdhar(); })("keypress", function CustomerIdComponent_Template_input_keypress_96_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Aadhar Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, CustomerIdComponent_div_100_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_104_listener($event) { return $event.charCode >= 65 && $event.charCode <= 90 || $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Pan Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, CustomerIdComponent_div_107_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Birth Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, CustomerIdComponent_div_116_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "House");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, CustomerIdComponent_div_124_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Ward");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, CustomerIdComponent_div_131_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, CustomerIdComponent_div_138_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Galli");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](145, CustomerIdComponent_div_145_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](152, CustomerIdComponent_div_152_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "ng-select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerIdComponent_Template_ng_select_ngModelChange_157_listener($event) { return ctx.ngCity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "sub", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](162, CustomerIdComponent_div_162_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_166_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Pin Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](169, CustomerIdComponent_div_169_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_173_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](176, CustomerIdComponent_div_176_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_180_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Residential/Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](183, CustomerIdComponent_div_183_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CustomerIdComponent_Template_input_keypress_187_listener($event) { return $event.charCode >= 48 && $event.charCode < 58; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Office/Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](190, CustomerIdComponent_div_190_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](197, CustomerIdComponent_div_197_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "TDS Calculation Required?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerIdComponent_Template_input_change_208_listener($event) { return ctx.isReceivedTds($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "label", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Is Received TDS Document for Year 2020-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "label", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "SMS Facility Required ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CustomerIdComponent_Template_input_change_220_listener($event) { return ctx.isKYC($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "label", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "KYC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](223, CustomerIdComponent_div_223_Template, 36, 10, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](224, CustomerIdComponent_div_224_Template, 19, 2, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](225, CustomerIdComponent_div_225_Template, 33, 5, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](226, CustomerIdComponent_ng_container_226_Template, 8, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](227, CustomerIdComponent_ng_container_227_Template, 5, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](228, CustomerIdComponent_ng_container_228_Template, 38, 4, "ng-container", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.angForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.router.url === "/master/customer/customerId");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ngTitle)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](49, _c5, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.prifix);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_TITLE"].invalid && (ctx.angForm.controls["AC_TITLE"].dirty || ctx.angForm.controls["AC_TITLE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](51, _c5, ctx.formSubmitted))("ngModel", ctx.lname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["L_NAME"].invalid && (ctx.angForm.controls["L_NAME"].dirty || ctx.angForm.controls["L_NAME"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](53, _c5, ctx.formSubmitted))("ngModel", ctx.fname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["F_NAME"].invalid && (ctx.angForm.controls["F_NAME"].dirty || ctx.angForm.controls["F_NAME"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](55, _c5, ctx.formSubmitted))("ngModel", ctx.mname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["M_NAME"].invalid && (ctx.angForm.controls["M_NAME"].dirty || ctx.angForm.controls["M_NAME"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.lname + " " + ctx.fname + " " + ctx.mname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ngCast);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.castMaster);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ngoccupation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.occupation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ngRisk);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.risk);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_ADHARNO"].invalid && (ctx.angForm.controls["AC_ADHARNO"].dirty || ctx.angForm.controls["AC_ADHARNO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_PANNO"].invalid && (ctx.angForm.controls["AC_PANNO"].dirty || ctx.angForm.controls["AC_PANNO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](57, _c4))("maxDate", ctx.maxDate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](58, _c5, ctx.formSubmitted))("bsValue", ctx.bsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_PANNO"].invalid && (ctx.angForm.controls["AC_PANNO"].dirty || ctx.angForm.controls["AC_PANNO"].touched));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.city)("ngModel", ctx.ngCity)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](60, _c5, ctx.formSubmitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_CTCODE"].invalid && (ctx.angForm.controls["AC_CTCODE"].dirty || ctx.angForm.controls["AC_CTCODE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_PIN"].invalid && (ctx.angForm.controls["AC_PIN"].dirty || ctx.angForm.controls["AC_PIN"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_MOBILENO"].invalid && (ctx.angForm.controls["AC_MOBILENO"].dirty || ctx.angForm.controls["AC_MOBILENO"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_PHONE_RES"].invalid && (ctx.angForm.controls["AC_PHONE_RES"].dirty || ctx.angForm.controls["AC_PHONE_RES"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_PHONE_OFFICE"].invalid && (ctx.angForm.controls["AC_PHONE_OFFICE"].dirty || ctx.angForm.controls["AC_PHONE_OFFICE"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.angForm.controls["AC_EMAILID"].invalid && (ctx.angForm.controls["AC_EMAILID"].dirty || ctx.angForm.controls["AC_EMAILID"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["ɵr"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_22__["ModalBasicComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__["PerfectScrollbarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbTooltip"], angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]], styles: ["@charset \"UTF-8\";\n.checkbox[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  padding-left: 5px;\n}\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 0;\n  margin-left: -20px;\n  border: 1px solid black;\n  background-color: #fff;\n  transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\n}\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 0;\n  top: 0;\n  margin-left: -20px;\n  padding-left: 3px;\n  font-size: 11px;\n  color: #555555;\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: 1;\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]::before {\n  outline: thin dotted;\n  outline: 2px auto green;\n  outline-offset: 2px;\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::after {\n  font-family: \"FontAwesome\";\n  content: \"\uF00C\";\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n.checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%]::before {\n  background-color: #eeeeee;\n  cursor: not-allowed;\n}\n.checkbox.checkbox-circle[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  border-radius: 5%;\n}\n.checkbox.checkbox-inline[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.checkbox-primary[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\n  background-color: white;\n  border-color: black;\n}\n.checkbox-primary[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::after {\n  color: black;\n}\n#bkcolor[_ngcontent-%COMP%] {\n  background-color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbWFzdGVyL2N1c3RvbWVyL2N1c3RvbWVyLWlkL2N1c3RvbWVyLWlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGtCQUFBO0FBRUo7QUFDRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFDRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBR0EsNkRBQUE7QUFFSjtBQUNFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLGNBQUE7QUFDSjtBQUVFO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFDSjtBQUVFO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0FBQ0o7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtBQUNKO0FBRUU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7QUFDSjtBQVFBO0VBQ0Usc0JBQUE7QUFMRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9jdXN0b21lci9jdXN0b21lci1pZC9jdXN0b21lci1pZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jaGVja2JveCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNoZWNrYm94IGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uY2hlY2tib3ggbGFiZWw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAwLjE1cyBlYXNlLWluLW91dCwgY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJvcmRlciAwLjE1cyBlYXNlLWluLW91dCwgY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjE1cyBlYXNlLWluLW91dCwgY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jaGVja2JveCBsYWJlbDo6YWZ0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xufVxuXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Zm9jdXMgKyBsYWJlbDo6YmVmb3JlIHtcbiAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XG4gIG91dGxpbmU6IDJweCBhdXRvIGdyZWVuO1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG4gIGNvbnRlbnQ6IFwi74CMXCI7XG59XG5cbi5jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpkaXNhYmxlZCArIGxhYmVsIHtcbiAgb3BhY2l0eTogMC42NTtcbn1cblxuLmNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkICsgbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5jaGVja2JveC5jaGVja2JveC1jaXJjbGUgbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4uY2hlY2tib3guY2hlY2tib3gtaW5saW5lIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmNoZWNrYm94LXByaW1hcnkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuLmNoZWNrYm94LXByaW1hcnkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2JrY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-customer-id",
                templateUrl: "./customer-id.component.html",
                styleUrls: ["./customer-id.component.scss"],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }, { type: _customer_id_service__WEBPACK_IMPORTED_MODULE_10__["CustomerIdService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_dropdownService_prefix_master_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["PrefixMasterDropdownService"] }, { type: _shared_dropdownService_cast_master_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["CastMasterService"] }, { type: _shared_dropdownService_occupation_master_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["OccupationMasterService"] }, { type: _shared_dropdownService_salary_division_master_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["SalaryDMasterdropdownService"] }, { type: _shared_dropdownService_city_master_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["cityMasterService"] }, { type: _shared_dropdownService_risk_category_dropdown_service__WEBPACK_IMPORTED_MODULE_16__["RiskCategoryDropdownService"] }, { type: _shared_dropdownService_document_master_dropdown_service__WEBPACK_IMPORTED_MODULE_17__["DocumentMasterDropdownService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"] }]; }, { newCustomerEvent: [{
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
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["DatepickerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerIdModule, { declarations: [_customer_id_component__WEBPACK_IMPORTED_MODULE_2__["CustomerIdComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _customer_id_routing_module__WEBPACK_IMPORTED_MODULE_1__["CustomerIdRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["DatepickerModule"]], exports: [_customer_id_component__WEBPACK_IMPORTED_MODULE_2__["CustomerIdComponent"]] }); })();
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
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_20__["DatepickerModule"].forRoot()
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


/***/ })

}]);
//# sourceMappingURL=default~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-credit-master-module~centralised-passin~026367b2.js.map