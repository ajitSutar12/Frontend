(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rtgs-neft-passing-rtgs-neft-passing-module"],{

/***/ "./src/app/theme/passing/rtgs-neft-passing/rtgs-neft-passing-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/passing/rtgs-neft-passing/rtgs-neft-passing-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: RtgsNeftPassingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtgsNeftPassingRoutingModule", function() { return RtgsNeftPassingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rtgs_neft_passing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rtgs-neft-passing.component */ "./src/app/theme/passing/rtgs-neft-passing/rtgs-neft-passing.component.ts");





const routes = [
    {
        path: '',
        component: _rtgs_neft_passing_component__WEBPACK_IMPORTED_MODULE_2__["RtgsNeftPassingComponent"],
        data: {
            title: 'neftPassing',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class RtgsNeftPassingRoutingModule {
}
RtgsNeftPassingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RtgsNeftPassingRoutingModule });
RtgsNeftPassingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RtgsNeftPassingRoutingModule_Factory(t) { return new (t || RtgsNeftPassingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RtgsNeftPassingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RtgsNeftPassingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/rtgs-neft-passing/rtgs-neft-passing.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/passing/rtgs-neft-passing/rtgs-neft-passing.component.ts ***!
  \********************************************************************************/
/*! exports provided: RtgsNeftPassingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtgsNeftPassingComponent", function() { return RtgsNeftPassingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RtgsNeftPassingComponent {
    constructor() { }
    ngOnInit() {
    }
}
RtgsNeftPassingComponent.ɵfac = function RtgsNeftPassingComponent_Factory(t) { return new (t || RtgsNeftPassingComponent)(); };
RtgsNeftPassingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RtgsNeftPassingComponent, selectors: [["app-rtgs-neft-passing"]], decls: 2, vars: 0, template: function RtgsNeftPassingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rtgs-neft-passing works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvcnRncy1uZWZ0LXBhc3NpbmcvcnRncy1uZWZ0LXBhc3NpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RtgsNeftPassingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rtgs-neft-passing',
                templateUrl: './rtgs-neft-passing.component.html',
                styleUrls: ['./rtgs-neft-passing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/passing/rtgs-neft-passing/rtgs-neft-passing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/passing/rtgs-neft-passing/rtgs-neft-passing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RtgsNeftPassingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtgsNeftPassingModule", function() { return RtgsNeftPassingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _rtgs_neft_passing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rtgs-neft-passing-routing.module */ "./src/app/theme/passing/rtgs-neft-passing/rtgs-neft-passing-routing.module.ts");




class RtgsNeftPassingModule {
}
RtgsNeftPassingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RtgsNeftPassingModule });
RtgsNeftPassingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RtgsNeftPassingModule_Factory(t) { return new (t || RtgsNeftPassingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _rtgs_neft_passing_routing_module__WEBPACK_IMPORTED_MODULE_2__["RtgsNeftPassingRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RtgsNeftPassingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _rtgs_neft_passing_routing_module__WEBPACK_IMPORTED_MODULE_2__["RtgsNeftPassingRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RtgsNeftPassingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _rtgs_neft_passing_routing_module__WEBPACK_IMPORTED_MODULE_2__["RtgsNeftPassingRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=rtgs-neft-passing-rtgs-neft-passing-module.js.map