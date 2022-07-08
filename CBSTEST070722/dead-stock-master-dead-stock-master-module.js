(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dead-stock-master-dead-stock-master-module"],{

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
        // // gl-account-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
        this.acMasterObject = new Array();
    }
    getACMasterList() {
        this.acMasterObject = [];
        return this.http.get(this.url + '/gl-account-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.AC_NAME, value: element.id, name: element.AC_NO };
                this.acMasterObject.push(obj);
            });
            return this.acMasterObject;
        }));
    }
    getACMasterList1() {
        this.acMasterObject = [];
        return this.http.get(this.url + '/gl-account-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { AC_NAME: element.AC_NAME, id: element.id, AC_NO: element.AC_NO };
                this.acMasterObject.push(obj);
            });
            return this.acMasterObject;
        }));
    }
    getACMasterbranch(branchid) {
        this.acMasterObject = [];
        return this.http.get(this.url + '/gl-account-master/branch/' + branchid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                // let obj = { label: element.AC_NAME, value: element.id, name: element.AC_NO };
                // let obj = { label: element.AC_NO + ' ' + element.AC_NAME + ' ', value: element.id };
                let obj = { label: element.AC_NO + ' ' + element.AC_NAME + ' ', value: element.id, name: element.AC_NO };
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


/***/ })

}]);
//# sourceMappingURL=dead-stock-master-dead-stock-master-module.js.map