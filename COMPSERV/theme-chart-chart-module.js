(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-chart-chart-module"],{

/***/ "./src/app/theme/chart/chart-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/chart/chart-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartRoutingModule", function() { return ChartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Charts',
            status: false
        },
        children: [
            {
                path: 'google',
                loadChildren: () => Promise.all(/*! import() | google-chart-google-chart-module */[__webpack_require__.e("default~advance-elements-advance-elements-module~crm-dashboard-crm-dashboard-module~data-widget-data~3d7ac973"), __webpack_require__.e("google-chart-google-chart-module")]).then(__webpack_require__.bind(null, /*! ./google-chart/google-chart.module */ "./src/app/theme/chart/google-chart/google-chart.module.ts")).then(m => m.GoogleChartModule)
            },
            {
                path: 'chart-js',
                loadChildren: () => Promise.all(/*! import() | chart-js-chart-js-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~analytics-analytics-module~chart-js-chart-js-module~chart-widget-chart-widget-module~crm-das~590074bb"), __webpack_require__.e("chart-js-chart-js-module")]).then(__webpack_require__.bind(null, /*! ./chart-js/chart-js.module */ "./src/app/theme/chart/chart-js/chart-js.module.ts")).then(m => m.ChartJsModule)
            },
            {
                path: 'radial',
                loadChildren: () => __webpack_require__.e(/*! import() | radial-radial-module */ "radial-radial-module").then(__webpack_require__.bind(null, /*! ./radial/radial.module */ "./src/app/theme/chart/radial/radial.module.ts")).then(m => m.RadialModule)
            },
            {
                path: 'c3-js',
                loadChildren: () => __webpack_require__.e(/*! import() | c3-js-c3-js-module */ "c3-js-c3-js-module").then(__webpack_require__.bind(null, /*! ./c3-js/c3-js.module */ "./src/app/theme/chart/c3-js/c3-js.module.ts")).then(m => m.C3JsModule)
            }
        ]
    }
];
class ChartRoutingModule {
}
ChartRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChartRoutingModule });
ChartRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChartRoutingModule_Factory(t) { return new (t || ChartRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/chart/chart.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/chart/chart.module.ts ***!
  \*********************************************/
/*! exports provided: ChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return ChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chart_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-routing.module */ "./src/app/theme/chart/chart-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");





class ChartModule {
}
ChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChartModule });
ChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChartModule_Factory(t) { return new (t || ChartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _chart_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChartRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _chart_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChartRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _chart_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChartRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-chart-chart-module.js.map