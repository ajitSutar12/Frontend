(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shares-arr-sharesARR-module"],{

/***/ "./src/app/theme/reports/shares-arr/shares-arr.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/reports/shares-arr/shares-arr.component.ts ***!
  \******************************************************************/
/*! exports provided: SharesARRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesARRComponent", function() { return SharesARRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SharesARRComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharesARRComponent.ɵfac = function SharesARRComponent_Factory(t) { return new (t || SharesARRComponent)(); };
SharesARRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharesARRComponent, selectors: [["app-shares-arr"]], decls: 2, vars: 0, template: function SharesARRComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shares-arr works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvc2hhcmVzLWFyci9zaGFyZXMtYXJyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesARRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shares-arr',
                templateUrl: './shares-arr.component.html',
                styleUrls: ['./shares-arr.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/shares-arr/sharesARR-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/reports/shares-arr/sharesARR-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SharesARRRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesARRRoutingModule", function() { return SharesARRRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shares_arr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shares-arr.component */ "./src/app/theme/reports/shares-arr/shares-arr.component.ts");





const routes = [
    {
        path: '',
        component: _shares_arr_component__WEBPACK_IMPORTED_MODULE_2__["SharesARRComponent"],
        data: {
            title: 'Shares And Recovery Reports',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class SharesARRRoutingModule {
}
SharesARRRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharesARRRoutingModule });
SharesARRRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharesARRRoutingModule_Factory(t) { return new (t || SharesARRRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharesARRRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesARRRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/shares-arr/sharesARR.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/reports/shares-arr/sharesARR.module.ts ***!
  \**************************************************************/
/*! exports provided: SharesARRModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharesARRModule", function() { return SharesARRModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shares_arr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shares-arr.component */ "./src/app/theme/reports/shares-arr/shares-arr.component.ts");
/* harmony import */ var _sharesARR_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sharesARR-routing.module */ "./src/app/theme/reports/shares-arr/sharesARR-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






// import {ChartModule} from 'angular2-chartjs';
class SharesARRModule {
}
SharesARRModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharesARRModule });
SharesARRModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharesARRModule_Factory(t) { return new (t || SharesARRModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sharesARR_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharesARRRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharesARRModule, { declarations: [_shares_arr_component__WEBPACK_IMPORTED_MODULE_2__["SharesARRComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sharesARR_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharesARRRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharesARRModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sharesARR_routing_module__WEBPACK_IMPORTED_MODULE_3__["SharesARRRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_shares_arr_component__WEBPACK_IMPORTED_MODULE_2__["SharesARRComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=shares-arr-sharesARR-module.js.map