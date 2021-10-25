(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-windows-windows-module"],{

/***/ "./src/app/theme/windows/windows-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/windows/windows-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WindowsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowsRoutingModule", function() { return WindowsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Windows',
            status: false
        },
        children: [
            {
                path: 'casecade',
                loadChildren: () => __webpack_require__.e(/*! import() | casecade-casecade-module */ "casecade-casecade-module").then(__webpack_require__.bind(null, /*! ./casecade/casecade.module */ "./src/app/theme/windows/casecade/casecade.module.ts")).then(m => m.CasecadeModule)
            },
            {
                path: 'tileHorizontaily',
                loadChildren: () => __webpack_require__.e(/*! import() | tile-horizontaily-tile-horizontaily-module */ "tile-horizontaily-tile-horizontaily-module").then(__webpack_require__.bind(null, /*! ./tile-horizontaily/tile-horizontaily.module */ "./src/app/theme/windows/tile-horizontaily/tile-horizontaily.module.ts")).then(m => m.TileHorizontailyModule)
            },
            {
                path: 'tileVertically',
                loadChildren: () => __webpack_require__.e(/*! import() | tile-vertically-tile-vertically-module */ "tile-vertically-tile-vertically-module").then(__webpack_require__.bind(null, /*! ./tile-vertically/tile-vertically.module */ "./src/app/theme/windows/tile-vertically/tile-vertically.module.ts")).then(m => m.TileVerticallyModule)
            },
        ]
    }
];
class WindowsRoutingModule {
}
WindowsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WindowsRoutingModule });
WindowsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WindowsRoutingModule_Factory(t) { return new (t || WindowsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WindowsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/windows/windows.module.ts":
/*!*************************************************!*\
  !*** ./src/app/theme/windows/windows.module.ts ***!
  \*************************************************/
/*! exports provided: WindowsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowsModule", function() { return WindowsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _windows_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./windows-routing.module */ "./src/app/theme/windows/windows-routing.module.ts");




class WindowsModule {
}
WindowsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WindowsModule });
WindowsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WindowsModule_Factory(t) { return new (t || WindowsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _windows_routing_module__WEBPACK_IMPORTED_MODULE_2__["WindowsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WindowsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _windows_routing_module__WEBPACK_IMPORTED_MODULE_2__["WindowsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _windows_routing_module__WEBPACK_IMPORTED_MODULE_2__["WindowsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-windows-windows-module.js.map