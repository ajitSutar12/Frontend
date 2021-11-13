(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["denomination-reports-denominationReports-module"],{

/***/ "./src/app/theme/reports/denomination-reports/denomination-reports.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/reports/denomination-reports/denomination-reports.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DenominationReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenominationReportsComponent", function() { return DenominationReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DenominationReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DenominationReportsComponent.ɵfac = function DenominationReportsComponent_Factory(t) { return new (t || DenominationReportsComponent)(); };
DenominationReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DenominationReportsComponent, selectors: [["app-denomination-reports"]], decls: 2, vars: 0, template: function DenominationReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "denomination-reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvZGVub21pbmF0aW9uLXJlcG9ydHMvZGVub21pbmF0aW9uLXJlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DenominationReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-denomination-reports',
                templateUrl: './denomination-reports.component.html',
                styleUrls: ['./denomination-reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/denomination-reports/denominationReports-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/reports/denomination-reports/denominationReports-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: DenominationReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenominationReportsRoutingModule", function() { return DenominationReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _denomination_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./denomination-reports.component */ "./src/app/theme/reports/denomination-reports/denomination-reports.component.ts");





const routes = [
    {
        path: '',
        component: _denomination_reports_component__WEBPACK_IMPORTED_MODULE_2__["DenominationReportsComponent"],
        data: {
            title: 'Denomination Reports',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class DenominationReportsRoutingModule {
}
DenominationReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DenominationReportsRoutingModule });
DenominationReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DenominationReportsRoutingModule_Factory(t) { return new (t || DenominationReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DenominationReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DenominationReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/denomination-reports/denominationReports.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/reports/denomination-reports/denominationReports.module.ts ***!
  \**********************************************************************************/
/*! exports provided: DenominationReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenominationReportsModule", function() { return DenominationReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _denomination_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./denomination-reports.component */ "./src/app/theme/reports/denomination-reports/denomination-reports.component.ts");
/* harmony import */ var _denominationReports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./denominationReports-routing.module */ "./src/app/theme/reports/denomination-reports/denominationReports-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






// import {ChartModule} from 'angular2-chartjs';
class DenominationReportsModule {
}
DenominationReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DenominationReportsModule });
DenominationReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DenominationReportsModule_Factory(t) { return new (t || DenominationReportsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _denominationReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["DenominationReportsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DenominationReportsModule, { declarations: [_denomination_reports_component__WEBPACK_IMPORTED_MODULE_2__["DenominationReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _denominationReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["DenominationReportsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DenominationReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _denominationReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["DenominationReportsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_denomination_reports_component__WEBPACK_IMPORTED_MODULE_2__["DenominationReportsComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=denomination-reports-denominationReports-module.js.map