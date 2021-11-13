(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/rxjs/add/observable/interval.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/add/observable/interval.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/observable/interval */ "./node_modules/rxjs-compat/add/observable/interval.js");
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/observable/of.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/add/observable/of.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/observable/of */ "./node_modules/rxjs-compat/add/observable/of.js");
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/catch.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/add/operator/catch.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/catch */ "./node_modules/rxjs-compat/add/operator/catch.js");
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/debounceTime.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/add/operator/debounceTime.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/debounceTime */ "./node_modules/rxjs-compat/add/operator/debounceTime.js");
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/distinctUntilChanged.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/add/operator/distinctUntilChanged.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/add/operator/distinctUntilChanged.js");
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/do.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/add/operator/do.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/do */ "./node_modules/rxjs-compat/add/operator/do.js");
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/first.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/add/operator/first.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/first */ "./node_modules/rxjs-compat/add/operator/first.js");
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/map.js":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/add/operator/map.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/add/operator/switchMap.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/add/operator/switchMap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! rxjs-compat/add/operator/switchMap */ "./node_modules/rxjs-compat/add/operator/switchMap.js");
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./src/app/shared/dropdownService/ac-master-dropdown.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/dropdownService/ac-master-dropdown.service.ts ***!
  \**********************************************************************/
/*! exports provided: ACMasterDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACMasterDropdownService", function() { return ACMasterDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ACMasterDropdownService {
    constructor(http) {
        this.http = http;
        // url = "http://localhost:4000/gl-account-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.acMasterObject = new Array();
    }
    getACMasterList() {
        this.acMasterObject = [];
        return this.http.get(this.url + '/gl-account-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NO + '(' + element.AC_NAME + ')', value: element.id };
                this.acMasterObject.push(obj);
            });
            return this.acMasterObject;
        }));
    }
}
ACMasterDropdownService.ɵfac = function ACMasterDropdownService_Factory(t) { return new (t || ACMasterDropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ACMasterDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ACMasterDropdownService, factory: ACMasterDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ACMasterDropdownService, [{
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
                let obj = { label: element.AC_NO, value: element.id };
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

/***/ "./src/app/shared/dropdownService/depriciation-category-master-dropdown.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/dropdownService/depriciation-category-master-dropdown.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: DepriciationCatDropdownMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepriciationCatDropdownMasterService", function() { return DepriciationCatDropdownMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DepriciationCatDropdownMasterService {
    constructor(http) {
        this.http = http;
        this.depriciationObject = new Array();
        // url = "http://localhost:4000/depriciation-category-master";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getDepriciationMasterList() {
        this.depriciationObject = [];
        return this.http.get(this.url + '/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.NAME, value: element.id };
                this.depriciationObject.push(obj);
            });
            return this.depriciationObject;
        }));
    }
}
DepriciationCatDropdownMasterService.ɵfac = function DepriciationCatDropdownMasterService_Factory(t) { return new (t || DepriciationCatDropdownMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DepriciationCatDropdownMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DepriciationCatDropdownMasterService, factory: DepriciationCatDropdownMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepriciationCatDropdownMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dropdownService/scheme-type-dropdown.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/dropdownService/scheme-type-dropdown.service.ts ***!
  \************************************************************************/
/*! exports provided: SchemeTypeDropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeTypeDropdownService", function() { return SchemeTypeDropdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class SchemeTypeDropdownService {
    getCharacters() {
        return this.cloneOptions(SchemeTypeDropdownService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(SchemeTypeDropdownService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(SchemeTypeDropdownService.PLAYER_ONE);
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
SchemeTypeDropdownService.PLAYER_ONE = [
    { value: 'AG', label: 'AG' },
    { value: 'LN', label: 'LN' },
    { value: 'CC', label: 'CC' },
    { value: 'GS', label: 'GS' },
    { value: 'CA', label: 'CA' },
    { value: 'DS', label: 'DS' },
    { value: 'GL', label: 'GL' },
    { value: 'IV', label: 'IV' },
    { value: 'LK', label: 'LK' },
    { value: 'PG', label: 'PG' },
    { value: 'SB', label: 'SB' },
    { value: 'SH', label: 'SH' },
    { value: 'TD', label: 'TD' },
];
SchemeTypeDropdownService.ɵfac = function SchemeTypeDropdownService_Factory(t) { return new (t || SchemeTypeDropdownService)(); };
SchemeTypeDropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchemeTypeDropdownService, factory: SchemeTypeDropdownService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeTypeDropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/elements/agent-code.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/elements/agent-code.service.ts ***!
  \*******************************************************/
/*! exports provided: AgentCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentCodeService", function() { return AgentCodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class AgentCodeService {
    getCharacters() {
        return this.cloneOptions(AgentCodeService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(AgentCodeService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(AgentCodeService.PLAYER_ONE);
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
AgentCodeService.PLAYER_ONE = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
];
AgentCodeService.ɵfac = function AgentCodeService_Factory(t) { return new (t || AgentCodeService)(); };
AgentCodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AgentCodeService, factory: AgentCodeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentCodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/elements/city3.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/elements/city3.service.ts ***!
  \**************************************************/
/*! exports provided: City3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City3Service", function() { return City3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class City3Service {
    getCharacters() {
        return this.cloneOptions(City3Service.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(City3Service.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(City3Service.PLAYER_ONE);
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
City3Service.PLAYER_ONE = [
    { value: '0', label: 'Pune' },
    { value: '1', label: 'Kolhapur' },
    { value: '2', label: 'Mumbai' }
];
City3Service.ɵfac = function City3Service_Factory(t) { return new (t || City3Service)(); };
City3Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: City3Service, factory: City3Service.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](City3Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/elements/gl-master.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/elements/gl-master.service.ts ***!
  \******************************************************/
/*! exports provided: glMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glMasterService", function() { return glMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class glMasterService {
    getCharacters() {
        return this.cloneOptions(glMasterService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(glMasterService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(glMasterService.PLAYER_ONE);
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
glMasterService.PLAYER_ONE = [
    { value: '0', label: 'a' },
    { value: '1', label: 'b' },
    { value: '2', label: 'c' },
    { value: '3', label: 'd' }
];
glMasterService.ɵfac = function glMasterService_Factory(t) { return new (t || glMasterService)(); };
glMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: glMasterService, factory: glMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](glMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/elements/repay-mode.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/elements/repay-mode.service.ts ***!
  \*******************************************************/
/*! exports provided: RepayModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepayModeService", function() { return RepayModeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class RepayModeService {
    getCharacters() {
        return this.cloneOptions(RepayModeService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(RepayModeService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(RepayModeService.PLAYER_ONE);
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
RepayModeService.PLAYER_ONE = [
    { value: '0', label: 'Monthly' },
    { value: '1', label: 'Quarterly' },
    { value: '2', label: 'half Yearly' },
    { value: '3', label: 'Yearly' },
    { value: '4', label: 'On Maturity' },
];
RepayModeService.ɵfac = function RepayModeService_Factory(t) { return new (t || RepayModeService)(); };
RepayModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RepayModeService, factory: RepayModeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepayModeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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

/***/ "./src/app/shared/elements/scheme1.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/elements/scheme1.service.ts ***!
  \****************************************************/
/*! exports provided: Scheme1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheme1Service", function() { return Scheme1Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class Scheme1Service {
    getCharacters() {
        return this.cloneOptions(Scheme1Service.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(Scheme1Service.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(Scheme1Service.PLAYER_ONE);
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
Scheme1Service.PLAYER_ONE = [
    { value: '0', label: '111' },
    { value: '1', label: '222' },
    { value: '2', label: '333' },
    { value: '3', label: 'NA' }
];
Scheme1Service.ɵfac = function Scheme1Service_Factory(t) { return new (t || Scheme1Service)(); };
Scheme1Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Scheme1Service, factory: Scheme1Service.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Scheme1Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/elements/statement-type.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/elements/statement-type.service.ts ***!
  \***********************************************************/
/*! exports provided: StatementTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementTypeService", function() { return StatementTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class StatementTypeService {
    getCharacters() {
        return this.cloneOptions(StatementTypeService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(StatementTypeService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(StatementTypeService.PLAYER_ONE);
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
StatementTypeService.PLAYER_ONE = [
    { value: '0', label: 'Income' },
    { value: '1', label: 'Expenditure' },
    { value: '2', label: 'Asset' },
    { value: '3', label: 'Liability' }
];
StatementTypeService.ɵfac = function StatementTypeService_Factory(t) { return new (t || StatementTypeService)(); };
StatementTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatementTypeService, factory: StatementTypeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatementTypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/elements/statment-type.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/elements/statment-type.service.ts ***!
  \**********************************************************/
/*! exports provided: StatementTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementTypeService", function() { return StatementTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);



class StatementTypeService {
    getCharacters() {
        return this.cloneOptions(StatementTypeService.PLAYER_ONE);
    }
    loadCharacters() {
        return this.loadOptions(StatementTypeService.PLAYER_ONE);
    }
    getCharactersWithDisabled() {
        const characters = this.cloneOptions(StatementTypeService.PLAYER_ONE);
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
StatementTypeService.PLAYER_ONE = [
    { value: '0', label: 'Shree' },
    { value: '1', label: 'Sou' },
    { value: '2', label: 'Miss' },
    { value: '3', label: 'M/s' }
];
StatementTypeService.ɵfac = function StatementTypeService_Factory(t) { return new (t || StatementTypeService)(); };
StatementTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatementTypeService, factory: StatementTypeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatementTypeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map