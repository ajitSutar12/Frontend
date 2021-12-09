(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tile-horizontaily-tile-horizontaily-module"],{

/***/ "./src/app/theme/windows/tile-horizontaily/tile-horizontaily-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/windows/tile-horizontaily/tile-horizontaily-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: TileHorizontailyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileHorizontailyRoutingModule", function() { return TileHorizontailyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tile_horizontaily_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile-horizontaily.component */ "./src/app/theme/windows/tile-horizontaily/tile-horizontaily.component.ts");





const routes = [
    {
        path: '',
        component: _tile_horizontaily_component__WEBPACK_IMPORTED_MODULE_2__["TileHorizontailyComponent"],
        data: {
            title: 'Tile Horizontaily',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class TileHorizontailyRoutingModule {
}
TileHorizontailyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TileHorizontailyRoutingModule });
TileHorizontailyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TileHorizontailyRoutingModule_Factory(t) { return new (t || TileHorizontailyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TileHorizontailyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileHorizontailyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/windows/tile-horizontaily/tile-horizontaily.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/windows/tile-horizontaily/tile-horizontaily.component.ts ***!
  \********************************************************************************/
/*! exports provided: TileHorizontailyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileHorizontailyComponent", function() { return TileHorizontailyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TileHorizontailyComponent {
    constructor() { }
    ngOnInit() {
    }
}
TileHorizontailyComponent.ɵfac = function TileHorizontailyComponent_Factory(t) { return new (t || TileHorizontailyComponent)(); };
TileHorizontailyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TileHorizontailyComponent, selectors: [["app-tile-horizontaily"]], decls: 2, vars: 0, template: function TileHorizontailyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tile-horizontaily works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3dpbmRvd3MvdGlsZS1ob3Jpem9udGFpbHkvdGlsZS1ob3Jpem9udGFpbHkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileHorizontailyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tile-horizontaily',
                templateUrl: './tile-horizontaily.component.html',
                styleUrls: ['./tile-horizontaily.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/windows/tile-horizontaily/tile-horizontaily.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/windows/tile-horizontaily/tile-horizontaily.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TileHorizontailyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileHorizontailyModule", function() { return TileHorizontailyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tile_horizontaily_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile-horizontaily.component */ "./src/app/theme/windows/tile-horizontaily/tile-horizontaily.component.ts");
/* harmony import */ var _tile_horizontaily_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tile-horizontaily-routing.module */ "./src/app/theme/windows/tile-horizontaily/tile-horizontaily-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");








class TileHorizontailyModule {
}
TileHorizontailyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TileHorizontailyModule });
TileHorizontailyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TileHorizontailyModule_Factory(t) { return new (t || TileHorizontailyModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _tile_horizontaily_routing_module__WEBPACK_IMPORTED_MODULE_3__["TileHorizontailyRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TileHorizontailyModule, { declarations: [_tile_horizontaily_component__WEBPACK_IMPORTED_MODULE_2__["TileHorizontailyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _tile_horizontaily_routing_module__WEBPACK_IMPORTED_MODULE_3__["TileHorizontailyRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileHorizontailyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _tile_horizontaily_routing_module__WEBPACK_IMPORTED_MODULE_3__["TileHorizontailyRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_tile_horizontaily_component__WEBPACK_IMPORTED_MODULE_2__["TileHorizontailyComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=tile-horizontaily-tile-horizontaily-module.js.map