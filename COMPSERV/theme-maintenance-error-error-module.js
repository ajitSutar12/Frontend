(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-maintenance-error-error-module"],{

/***/ "./src/app/theme/maintenance/error/error-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Error Pages',
            status: false
        },
        children: [
            {
                path: '400',
                loadChildren: () => __webpack_require__.e(/*! import() | error-400-error-400-module */ "error-400-error-400-module").then(__webpack_require__.bind(null, /*! ./error-400/error-400.module */ "./src/app/theme/maintenance/error/error-400/error-400.module.ts")).then(m => m.Error400Module)
            },
            {
                path: '403',
                loadChildren: () => __webpack_require__.e(/*! import() | error-403-error-403-module */ "error-403-error-403-module").then(__webpack_require__.bind(null, /*! ./error-403/error-403.module */ "./src/app/theme/maintenance/error/error-403/error-403.module.ts")).then(m => m.Error403Module)
            },
            {
                path: '404',
                loadChildren: () => __webpack_require__.e(/*! import() | error-404-error-404-module */ "error-404-error-404-module").then(__webpack_require__.bind(null, /*! ./error-404/error-404.module */ "./src/app/theme/maintenance/error/error-404/error-404.module.ts")).then(m => m.Error404Module)
            },
            {
                path: '500',
                loadChildren: () => __webpack_require__.e(/*! import() | error-500-error-500-module */ "error-500-error-500-module").then(__webpack_require__.bind(null, /*! ./error-500/error-500.module */ "./src/app/theme/maintenance/error/error-500/error-500.module.ts")).then(m => m.Error500Module)
            },
            {
                path: '503',
                loadChildren: () => __webpack_require__.e(/*! import() | error-503-error-503-module */ "error-503-error-503-module").then(__webpack_require__.bind(null, /*! ./error-503/error-503.module */ "./src/app/theme/maintenance/error/error-503/error-503.module.ts")).then(m => m.Error503Module)
            }
        ]
    }
];
class ErrorRoutingModule {
}
ErrorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErrorRoutingModule });
ErrorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ErrorRoutingModule_Factory(t) { return new (t || ErrorRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErrorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/maintenance/error/error.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/maintenance/error/error.module.ts ***!
  \*********************************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _error_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-routing.module */ "./src/app/theme/maintenance/error/error-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





class ErrorModule {
}
ErrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ErrorModule });
ErrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ErrorModule_Factory(t) { return new (t || ErrorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _error_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErrorRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ErrorModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _error_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErrorRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _error_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErrorRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-maintenance-error-error-module.js.map