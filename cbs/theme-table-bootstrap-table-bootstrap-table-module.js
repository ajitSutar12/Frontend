(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-table-bootstrap-table-bootstrap-table-module"],{

/***/ "./src/app/theme/table/bootstrap-table/bootstrap-table-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/table/bootstrap-table/bootstrap-table-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BootstrapTableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapTableRoutingModule", function() { return BootstrapTableRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Bootstrap Table',
            status: false
        },
        children: [
            {
                path: 'basic',
                loadChildren: () => __webpack_require__.e(/*! import() | table-basic-table-basic-module */ "table-basic-table-basic-module").then(__webpack_require__.bind(null, /*! ./table-basic/table-basic.module */ "./src/app/theme/table/bootstrap-table/table-basic/table-basic.module.ts")).then(m => m.TableBasicModule)
            },
            {
                path: 'sizing',
                loadChildren: () => __webpack_require__.e(/*! import() | sizing-sizing-module */ "sizing-sizing-module").then(__webpack_require__.bind(null, /*! ./sizing/sizing.module */ "./src/app/theme/table/bootstrap-table/sizing/sizing.module.ts")).then(m => m.SizingModule)
            },
            {
                path: 'border',
                loadChildren: () => __webpack_require__.e(/*! import() | border-border-module */ "border-border-module").then(__webpack_require__.bind(null, /*! ./border/border.module */ "./src/app/theme/table/bootstrap-table/border/border.module.ts")).then(m => m.BorderModule)
            },
            {
                path: 'styling',
                loadChildren: () => __webpack_require__.e(/*! import() | styling-styling-module */ "styling-styling-module").then(__webpack_require__.bind(null, /*! ./styling/styling.module */ "./src/app/theme/table/bootstrap-table/styling/styling.module.ts")).then(m => m.StylingModule)
            }
        ]
    }
];
class BootstrapTableRoutingModule {
}
BootstrapTableRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BootstrapTableRoutingModule });
BootstrapTableRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BootstrapTableRoutingModule_Factory(t) { return new (t || BootstrapTableRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BootstrapTableRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapTableRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/bootstrap-table.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/table/bootstrap-table/bootstrap-table.module.ts ***!
  \***********************************************************************/
/*! exports provided: BootstrapTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapTableModule", function() { return BootstrapTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _bootstrap_table_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap-table-routing.module */ "./src/app/theme/table/bootstrap-table/bootstrap-table-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





class BootstrapTableModule {
}
BootstrapTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BootstrapTableModule });
BootstrapTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BootstrapTableModule_Factory(t) { return new (t || BootstrapTableModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _bootstrap_table_routing_module__WEBPACK_IMPORTED_MODULE_2__["BootstrapTableRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BootstrapTableModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _bootstrap_table_routing_module__WEBPACK_IMPORTED_MODULE_2__["BootstrapTableRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _bootstrap_table_routing_module__WEBPACK_IMPORTED_MODULE_2__["BootstrapTableRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-table-bootstrap-table-bootstrap-table-module.js.map