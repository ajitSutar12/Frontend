(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-widget-widget-module"],{

/***/ "./src/app/theme/widget/widget-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/widget/widget-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: WidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetRoutingModule", function() { return WidgetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Widget',
            status: false
        },
        children: [
            {
                path: 'statistic',
                loadChildren: () => __webpack_require__.e(/*! import() | statistic-statistic-module */ "statistic-statistic-module").then(__webpack_require__.bind(null, /*! ./statistic/statistic.module */ "./src/app/theme/widget/statistic/statistic.module.ts")).then(m => m.StatisticModule)
            },
            {
                path: 'data',
                loadChildren: () => Promise.all(/*! import() | data-widget-data-widget-module */[__webpack_require__.e("default~analytics-analytics-module~anamat-gsm-anamat-gsm-module~basic-login-basic-login-module~cash-~c4fa891c"), __webpack_require__.e("default~analytics-analytics-module~chart-js-chart-js-module~chart-widget-chart-widget-module~crm-das~590074bb"), __webpack_require__.e("default~advance-elements-advance-elements-module~crm-dashboard-crm-dashboard-module~data-widget-data~3d7ac973"), __webpack_require__.e("default~crm-dashboard-crm-dashboard-module~data-widget-data-widget-module~default-default-module~goo~78a206b6"), __webpack_require__.e("data-widget-data-widget-module")]).then(__webpack_require__.bind(null, /*! ./data-widget/data-widget.module */ "./src/app/theme/widget/data-widget/data-widget.module.ts")).then(m => m.DataWidgetModule)
            },
            {
                path: 'chart',
                loadChildren: () => Promise.all(/*! import() | chart-widget-chart-widget-module */[__webpack_require__.e("default~analytics-analytics-module~anamat-gsm-anamat-gsm-module~basic-login-basic-login-module~cash-~c4fa891c"), __webpack_require__.e("default~analytics-analytics-module~chart-js-chart-js-module~chart-widget-chart-widget-module~crm-das~590074bb"), __webpack_require__.e("default~analytics-analytics-module~chart-widget-chart-widget-module~crm-dashboard-crm-dashboard-modu~09265e44"), __webpack_require__.e("chart-widget-chart-widget-module")]).then(__webpack_require__.bind(null, /*! ./chart-widget/chart-widget.module */ "./src/app/theme/widget/chart-widget/chart-widget.module.ts")).then(m => m.ChartWidgetModule)
            },
            {
                path: 'advanced',
                loadChildren: () => __webpack_require__.e(/*! import() | advance-widget-advance-widget-module */ "advance-widget-advance-widget-module").then(__webpack_require__.bind(null, /*! ./advance-widget/advance-widget.module */ "./src/app/theme/widget/advance-widget/advance-widget.module.ts")).then(m => m.AdvanceWidgetModule)
            }
        ]
    }
];
class WidgetRoutingModule {
}
WidgetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WidgetRoutingModule });
WidgetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WidgetRoutingModule_Factory(t) { return new (t || WidgetRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/widget/widget.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/widget/widget.module.ts ***!
  \***********************************************/
/*! exports provided: WidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetModule", function() { return WidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _widget_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget-routing.module */ "./src/app/theme/widget/widget-routing.module.ts");





class WidgetModule {
}
WidgetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WidgetModule });
WidgetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WidgetModule_Factory(t) { return new (t || WidgetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _widget_routing_module__WEBPACK_IMPORTED_MODULE_3__["WidgetRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _widget_routing_module__WEBPACK_IMPORTED_MODULE_3__["WidgetRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _widget_routing_module__WEBPACK_IMPORTED_MODULE_3__["WidgetRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-widget-widget-module.js.map