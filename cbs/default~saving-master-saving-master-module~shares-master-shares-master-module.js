(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~saving-master-saving-master-module~shares-master-shares-master-module"],{

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

/***/ "./src/app/shared/dropdownService/category-master-dropdown.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/dropdownService/category-master-dropdown.service.ts ***!
  \****************************************************************************/
/*! exports provided: categoryMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryMasterService", function() { return categoryMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class categoryMasterService {
    constructor(http) {
        this.http = http;
        this.categoryMasterObject = new Array();
        // API 
        // // category-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getcategoryList() {
        this.categoryMasterObject = [];
        return this.http.get(this.url + '/category-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.NAME, value: `${element.id}` };
                this.categoryMasterObject.push(obj);
            });
            return this.categoryMasterObject;
        }));
    }
}
categoryMasterService.ɵfac = function categoryMasterService_Factory(t) { return new (t || categoryMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
categoryMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: categoryMasterService, factory: categoryMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](categoryMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dropdownService/customer-id-master-dropdown.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/dropdownService/customer-id-master-dropdown.service.ts ***!
  \*******************************************************************************/
/*! exports provided: CustomerIDMasterDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerIDMasterDropdownService", function() { return CustomerIDMasterDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class CustomerIDMasterDropdownService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.customerIDMasterObject = new Array();
    }
    loadCharacters() {
        throw new Error('Method not implemented.');
    }
    getCustomerIDMasterList() {
        this.customerIDMasterObject = [];
        return this.http.get(this.url + '/customer-id')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO + ' ' + element.AC_NAME, value: `${element.id}` };
                this.customerIDMasterObject.push(obj);
            });
            return this.customerIDMasterObject;
        }));
    }
}
CustomerIDMasterDropdownService.ɵfac = function CustomerIDMasterDropdownService_Factory(t) { return new (t || CustomerIDMasterDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CustomerIDMasterDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomerIDMasterDropdownService, factory: CustomerIDMasterDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerIDMasterDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dropdownService/director-master-dropdown.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/dropdownService/director-master-dropdown.service.ts ***!
  \****************************************************************************/
/*! exports provided: DirectorMasterDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectorMasterDropdownService", function() { return DirectorMasterDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DirectorMasterDropdownService {
    constructor(http) {
        this.http = http;
        //  // director-master";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.directorMasterObject = new Array();
    }
    getDirectorMasterList() {
        this.directorMasterObject = [];
        return this.http.get(this.url + '/director-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.NAME, value: `${element.id}` };
                this.directorMasterObject.push(obj);
            });
            return this.directorMasterObject;
        }));
    }
}
DirectorMasterDropdownService.ɵfac = function DirectorMasterDropdownService_Factory(t) { return new (t || DirectorMasterDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DirectorMasterDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DirectorMasterDropdownService, factory: DirectorMasterDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectorMasterDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dropdownService/membership-type-dropdown.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/dropdownService/membership-type-dropdown.service.ts ***!
  \****************************************************************************/
/*! exports provided: MembershipTypeDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipTypeDropdownService", function() { return MembershipTypeDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class MembershipTypeDropdownService {
    getCharacters() {
        return this.cloneOptions(MembershipTypeDropdownService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(MembershipTypeDropdownService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(MembershipTypeDropdownService.PLAYER_ONE);
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
MembershipTypeDropdownService.PLAYER_ONE = [
    { value: 'Direct', label: 'Direct' },
    { value: 'Transfer', label: 'Transfer' },
];
MembershipTypeDropdownService.ɵfac = function MembershipTypeDropdownService_Factory(t) { return new (t || MembershipTypeDropdownService)(); };
MembershipTypeDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MembershipTypeDropdownService, factory: MembershipTypeDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembershipTypeDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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
                let obj = { label: element.NAME, value: `${element.id}` };
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
        // // scheme-parameters";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getSchemeCodeList() {
        this.schemeCodeObject = [];
        return this.http.get(this.url + '/scheme-parameters')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: `${element.id}` };
                this.schemeCodeObject.push(obj);
            });
            return this.schemeCodeObject;
        }));
    }
}
SchemeCodeDropdownService.ɵfac = function SchemeCodeDropdownService_Factory(t) { return new (t || SchemeCodeDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SchemeCodeDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchemeCodeDropdownService, factory: SchemeCodeDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeCodeDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dropdownService/sign-type-dropdown.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/dropdownService/sign-type-dropdown.service.ts ***!
  \**********************************************************************/
/*! exports provided: SignTypeDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignTypeDropdownService", function() { return SignTypeDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class SignTypeDropdownService {
    getCharacters() {
        return this.cloneOptions(SignTypeDropdownService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(SignTypeDropdownService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(SignTypeDropdownService.PLAYER_ONE);
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
SignTypeDropdownService.PLAYER_ONE = [
    { value: 'Thumb', label: 'Thumb' },
    { value: 'ShortEnglish', label: 'Short English' },
    { value: 'FullEnglish', label: 'Full English' },
    { value: 'ShortMarathi', label: 'Short Marathi' },
    { value: 'FullMarathi', label: 'Full Marathi' },
    { value: 'Kannada', label: 'Kannada' },
    { value: 'Others', label: 'Others' },
];
SignTypeDropdownService.ɵfac = function SignTypeDropdownService_Factory(t) { return new (t || SignTypeDropdownService)(); };
SignTypeDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignTypeDropdownService, factory: SignTypeDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignTypeDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/dropdownService/subsalary-division-master-dropdown.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/dropdownService/subsalary-division-master-dropdown.service.ts ***!
  \**************************************************************************************/
/*! exports provided: SubSalaryDMasterdropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubSalaryDMasterdropdownService", function() { return SubSalaryDMasterdropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class SubSalaryDMasterdropdownService {
    constructor(http) {
        this.http = http;
        this.subSalaryObject = new Array();
        // // salary-division-master";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getSubSalaryDMasterList() {
        this.subSalaryObject = [];
        return this.http.get(this.url + '/salary-division-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.NAME, value: `${element.id}` };
                this.subSalaryObject.push(obj);
            });
            return this.subSalaryObject;
        }));
    }
}
SubSalaryDMasterdropdownService.ɵfac = function SubSalaryDMasterdropdownService_Factory(t) { return new (t || SubSalaryDMasterdropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SubSalaryDMasterdropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubSalaryDMasterdropdownService, factory: SubSalaryDMasterdropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubSalaryDMasterdropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~saving-master-saving-master-module~shares-master-shares-master-module.js.map