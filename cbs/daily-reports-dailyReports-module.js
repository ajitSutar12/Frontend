(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["daily-reports-dailyReports-module"],{

/***/ "./src/app/theme/reports/daily-reports/daily-reports.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/daily-reports.component.ts ***!
  \************************************************************************/
/*! exports provided: DailyReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportsComponent", function() { return DailyReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DailyReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DailyReportsComponent.ɵfac = function DailyReportsComponent_Factory(t) { return new (t || DailyReportsComponent)(); };
DailyReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DailyReportsComponent, selectors: [["app-daily-reports"]], decls: 2, vars: 0, template: function DailyReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "daily-reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvZGFpbHktcmVwb3J0cy9kYWlseS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daily-reports',
                templateUrl: './daily-reports.component.html',
                styleUrls: ['./daily-reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/dailyReports-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/dailyReports-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: DailyReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportsRoutingModule", function() { return DailyReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _daily_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily-reports.component */ "./src/app/theme/reports/daily-reports/daily-reports.component.ts");





const routes = [
    {
        path: '',
        component: _daily_reports_component__WEBPACK_IMPORTED_MODULE_2__["DailyReportsComponent"],
        data: {
            title: 'Daily Reports',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class DailyReportsRoutingModule {
}
DailyReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DailyReportsRoutingModule });
DailyReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DailyReportsRoutingModule_Factory(t) { return new (t || DailyReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DailyReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/dailyReports.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/dailyReports.module.ts ***!
  \********************************************************************/
/*! exports provided: DailyReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyReportsModule", function() { return DailyReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _daily_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily-reports.component */ "./src/app/theme/reports/daily-reports/daily-reports.component.ts");
/* harmony import */ var _dailyReports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dailyReports-routing.module */ "./src/app/theme/reports/daily-reports/dailyReports-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






// import {ChartModule} from 'angular2-chartjs';
class DailyReportsModule {
}
DailyReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DailyReportsModule });
DailyReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DailyReportsModule_Factory(t) { return new (t || DailyReportsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dailyReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["DailyReportsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            // ChartModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DailyReportsModule, { declarations: [_daily_reports_component__WEBPACK_IMPORTED_MODULE_2__["DailyReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dailyReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["DailyReportsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        // ChartModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dailyReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["DailyReportsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                    // ChartModule
                ],
                declarations: [_daily_reports_component__WEBPACK_IMPORTED_MODULE_2__["DailyReportsComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=daily-reports-dailyReports-module.js.map