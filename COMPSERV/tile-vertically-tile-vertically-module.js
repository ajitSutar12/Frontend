(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tile-vertically-tile-vertically-module"],{

/***/ "./src/app/theme/windows/tile-vertically/tile-vertically-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/windows/tile-vertically/tile-vertically-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TileVerticallyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileVerticallyRoutingModule", function() { return TileVerticallyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tile_vertically_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile-vertically.component */ "./src/app/theme/windows/tile-vertically/tile-vertically.component.ts");





const routes = [
    {
        path: '',
        component: _tile_vertically_component__WEBPACK_IMPORTED_MODULE_2__["TileVerticallyComponent"],
        data: {
            title: 'Tile Vertically',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class TileVerticallyRoutingModule {
}
TileVerticallyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TileVerticallyRoutingModule });
TileVerticallyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TileVerticallyRoutingModule_Factory(t) { return new (t || TileVerticallyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TileVerticallyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileVerticallyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/windows/tile-vertically/tile-vertically.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/windows/tile-vertically/tile-vertically.component.ts ***!
  \****************************************************************************/
/*! exports provided: TileVerticallyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileVerticallyComponent", function() { return TileVerticallyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TileVerticallyComponent {
    constructor() { }
    ngOnInit() {
    }
}
TileVerticallyComponent.ɵfac = function TileVerticallyComponent_Factory(t) { return new (t || TileVerticallyComponent)(); };
TileVerticallyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TileVerticallyComponent, selectors: [["app-tile-vertically"]], decls: 2, vars: 0, template: function TileVerticallyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tile-vertically works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3dpbmRvd3MvdGlsZS12ZXJ0aWNhbGx5L3RpbGUtdmVydGljYWxseS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileVerticallyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tile-vertically',
                templateUrl: './tile-vertically.component.html',
                styleUrls: ['./tile-vertically.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/windows/tile-vertically/tile-vertically.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/windows/tile-vertically/tile-vertically.module.ts ***!
  \*************************************************************************/
/*! exports provided: TileVerticallyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileVerticallyModule", function() { return TileVerticallyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tile_vertically_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile-vertically.component */ "./src/app/theme/windows/tile-vertically/tile-vertically.component.ts");
/* harmony import */ var _tile_vertically_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tile-vertically-routing.module */ "./src/app/theme/windows/tile-vertically/tile-vertically-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class TileVerticallyModule {
}
TileVerticallyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TileVerticallyModule });
TileVerticallyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TileVerticallyModule_Factory(t) { return new (t || TileVerticallyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _tile_vertically_routing_module__WEBPACK_IMPORTED_MODULE_3__["TileVerticallyRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TileVerticallyModule, { declarations: [_tile_vertically_component__WEBPACK_IMPORTED_MODULE_2__["TileVerticallyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _tile_vertically_routing_module__WEBPACK_IMPORTED_MODULE_3__["TileVerticallyRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileVerticallyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _tile_vertically_routing_module__WEBPACK_IMPORTED_MODULE_3__["TileVerticallyRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_tile_vertically_component__WEBPACK_IMPORTED_MODULE_2__["TileVerticallyComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=tile-vertically-tile-vertically-module.js.map