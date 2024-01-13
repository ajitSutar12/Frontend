(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cashier-maintanace-cashier-maintanace-module"],{

/***/ "./src/app/theme/utility/cashier-maintanace/cashier-maintanace-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/utility/cashier-maintanace/cashier-maintanace-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CashierMaintanaceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierMaintanaceRoutingModule", function() { return CashierMaintanaceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class CashierMaintanaceRoutingModule {
}
CashierMaintanaceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CashierMaintanaceRoutingModule });
CashierMaintanaceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CashierMaintanaceRoutingModule_Factory(t) { return new (t || CashierMaintanaceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CashierMaintanaceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashierMaintanaceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utility/cashier-maintanace/cashier-maintanace.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/utility/cashier-maintanace/cashier-maintanace.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CashierMaintanaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierMaintanaceComponent", function() { return CashierMaintanaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CashierMaintanaceComponent {
    constructor() { }
    ngOnInit() {
    }
}
CashierMaintanaceComponent.ɵfac = function CashierMaintanaceComponent_Factory(t) { return new (t || CashierMaintanaceComponent)(); };
CashierMaintanaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CashierMaintanaceComponent, selectors: [["app-cashier-maintanace"]], decls: 2, vars: 0, template: function CashierMaintanaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cashier-maintanace works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3V0aWxpdHkvY2FzaGllci1tYWludGFuYWNlL2Nhc2hpZXItbWFpbnRhbmFjZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashierMaintanaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cashier-maintanace',
                templateUrl: './cashier-maintanace.component.html',
                styleUrls: ['./cashier-maintanace.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/cashier-maintanace/cashier-maintanace.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/utility/cashier-maintanace/cashier-maintanace.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CashierMaintanaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierMaintanaceModule", function() { return CashierMaintanaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cashier_maintanace_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cashier-maintanace-routing.module */ "./src/app/theme/utility/cashier-maintanace/cashier-maintanace-routing.module.ts");
/* harmony import */ var _cashier_maintanace_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashier-maintanace.component */ "./src/app/theme/utility/cashier-maintanace/cashier-maintanace.component.ts");





class CashierMaintanaceModule {
}
CashierMaintanaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CashierMaintanaceModule });
CashierMaintanaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CashierMaintanaceModule_Factory(t) { return new (t || CashierMaintanaceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _cashier_maintanace_routing_module__WEBPACK_IMPORTED_MODULE_2__["CashierMaintanaceRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CashierMaintanaceModule, { declarations: [_cashier_maintanace_component__WEBPACK_IMPORTED_MODULE_3__["CashierMaintanaceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _cashier_maintanace_routing_module__WEBPACK_IMPORTED_MODULE_2__["CashierMaintanaceRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashierMaintanaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cashier_maintanace_component__WEBPACK_IMPORTED_MODULE_3__["CashierMaintanaceComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _cashier_maintanace_routing_module__WEBPACK_IMPORTED_MODULE_2__["CashierMaintanaceRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cashier-maintanace-cashier-maintanace-module.js.map