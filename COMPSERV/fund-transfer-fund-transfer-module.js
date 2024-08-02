(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fund-transfer-fund-transfer-module"],{

/***/ "./src/app/theme/neft-rtgs/fund-transfer/fund-transfer-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/neft-rtgs/fund-transfer/fund-transfer-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FundTransferRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundTransferRoutingModule", function() { return FundTransferRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fund_transfer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fund-transfer.component */ "./src/app/theme/neft-rtgs/fund-transfer/fund-transfer.component.ts");





const routes = [
    {
        path: '',
        component: _fund_transfer_component__WEBPACK_IMPORTED_MODULE_2__["FundTransferComponent"],
        data: {
            title: 'Bill Payments',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class FundTransferRoutingModule {
}
FundTransferRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FundTransferRoutingModule });
FundTransferRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FundTransferRoutingModule_Factory(t) { return new (t || FundTransferRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FundTransferRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FundTransferRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/neft-rtgs/fund-transfer/fund-transfer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/neft-rtgs/fund-transfer/fund-transfer.component.ts ***!
  \**************************************************************************/
/*! exports provided: FundTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundTransferComponent", function() { return FundTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FundTransferComponent {
    constructor() { }
    ngOnInit() {
    }
}
FundTransferComponent.ɵfac = function FundTransferComponent_Factory(t) { return new (t || FundTransferComponent)(); };
FundTransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FundTransferComponent, selectors: [["app-fund-transfer"]], decls: 2, vars: 0, template: function FundTransferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fund-transfer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL25lZnQtcnRncy9mdW5kLXRyYW5zZmVyL2Z1bmQtdHJhbnNmZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FundTransferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fund-transfer',
                templateUrl: './fund-transfer.component.html',
                styleUrls: ['./fund-transfer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/neft-rtgs/fund-transfer/fund-transfer.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/neft-rtgs/fund-transfer/fund-transfer.module.ts ***!
  \***********************************************************************/
/*! exports provided: FundTransferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundTransferModule", function() { return FundTransferModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fund_transfer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fund-transfer-routing.module */ "./src/app/theme/neft-rtgs/fund-transfer/fund-transfer-routing.module.ts");




class FundTransferModule {
}
FundTransferModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FundTransferModule });
FundTransferModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FundTransferModule_Factory(t) { return new (t || FundTransferModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fund_transfer_routing_module__WEBPACK_IMPORTED_MODULE_2__["FundTransferRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FundTransferModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fund_transfer_routing_module__WEBPACK_IMPORTED_MODULE_2__["FundTransferRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FundTransferModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fund_transfer_routing_module__WEBPACK_IMPORTED_MODULE_2__["FundTransferRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=fund-transfer-fund-transfer-module.js.map