(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-dashboard-dashboard-module"],{

/***/ "./src/app/theme/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Dashboard',
            status: false
        },
        children: [
            {
                path: 'default',
                loadChildren: () => Promise.all(/*! import() | default-default-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~analytics-analytics-module~chart-js-chart-js-module~chart-widget-chart-widget-module~crm-das~590074bb"), __webpack_require__.e("default~advance-elements-advance-elements-module~crm-dashboard-crm-dashboard-module~data-widget-data~3d7ac973"), __webpack_require__.e("default~analytics-analytics-module~chart-widget-chart-widget-module~crm-dashboard-crm-dashboard-modu~09265e44"), __webpack_require__.e("default~crm-dashboard-crm-dashboard-module~data-widget-data-widget-module~default-default-module~goo~78a206b6"), __webpack_require__.e("default-default-module")]).then(__webpack_require__.bind(null, /*! ./default/default.module */ "./src/app/theme/dashboard/default/default.module.ts")).then(m => m.DefaultModule)
            },
            {
                path: 'ecommerce',
                loadChildren: () => Promise.all(/*! import() | ecommerce-ecommerce-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~analytics-analytics-module~chart-js-chart-js-module~chart-widget-chart-widget-module~crm-das~590074bb"), __webpack_require__.e("default~analytics-analytics-module~chart-widget-chart-widget-module~crm-dashboard-crm-dashboard-modu~09265e44"), __webpack_require__.e("ecommerce-ecommerce-module")]).then(__webpack_require__.bind(null, /*! ./ecommerce/ecommerce.module */ "./src/app/theme/dashboard/ecommerce/ecommerce.module.ts")).then(m => m.EcommerceModule)
            },
            {
                path: 'crm-dashboard',
                loadChildren: () => Promise.all(/*! import() | crm-dashboard-crm-dashboard-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~analytics-analytics-module~chart-js-chart-js-module~chart-widget-chart-widget-module~crm-das~590074bb"), __webpack_require__.e("default~advance-elements-advance-elements-module~crm-dashboard-crm-dashboard-module~data-widget-data~3d7ac973"), __webpack_require__.e("default~analytics-analytics-module~chart-widget-chart-widget-module~crm-dashboard-crm-dashboard-modu~09265e44"), __webpack_require__.e("default~crm-dashboard-crm-dashboard-module~data-widget-data-widget-module~default-default-module~goo~78a206b6"), __webpack_require__.e("crm-dashboard-crm-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./crm-dashboard/crm-dashboard.module */ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.module.ts")).then(m => m.CrmDashboardModule)
            },
            {
                path: 'analytics',
                loadChildren: () => Promise.all(/*! import() | analytics-analytics-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~analytics-analytics-module~chart-js-chart-js-module~chart-widget-chart-widget-module~crm-das~590074bb"), __webpack_require__.e("default~analytics-analytics-module~chart-widget-chart-widget-module~crm-dashboard-crm-dashboard-modu~09265e44"), __webpack_require__.e("analytics-analytics-module")]).then(__webpack_require__.bind(null, /*! ./analytics/analytics.module */ "./src/app/theme/dashboard/analytics/analytics.module.ts")).then(m => m.AnalyticsModule)
            },
            {
                path: 'project',
                loadChildren: () => Promise.all(/*! import() | project-project-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~analytics-analytics-module~chart-js-chart-js-module~chart-widget-chart-widget-module~crm-das~590074bb"), __webpack_require__.e("default~analytics-analytics-module~chart-widget-chart-widget-module~crm-dashboard-crm-dashboard-modu~09265e44"), __webpack_require__.e("project-project-module")]).then(__webpack_require__.bind(null, /*! ./project/project.module */ "./src/app/theme/dashboard/project/project.module.ts")).then(m => m.ProjectModule)
            }
        ]
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/theme/dashboard/dashboard-routing.module.ts");




class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-dashboard-dashboard-module.js.map