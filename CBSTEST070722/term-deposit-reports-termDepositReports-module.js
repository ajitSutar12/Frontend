(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["term-deposit-reports-termDepositReports-module"],{

/***/ "./src/app/theme/reports/term-deposit-reports/term-deposit-reports.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/reports/term-deposit-reports/term-deposit-reports.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TermDepositReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositReportsComponent", function() { return TermDepositReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TermDepositReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TermDepositReportsComponent.ɵfac = function TermDepositReportsComponent_Factory(t) { return new (t || TermDepositReportsComponent)(); };
TermDepositReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermDepositReportsComponent, selectors: [["app-term-deposit-reports"]], decls: 2, vars: 0, template: function TermDepositReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "term-deposit-reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvdGVybS1kZXBvc2l0LXJlcG9ydHMvdGVybS1kZXBvc2l0LXJlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-term-deposit-reports',
                templateUrl: './term-deposit-reports.component.html',
                styleUrls: ['./term-deposit-reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/term-deposit-reports/termDepositReports-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/theme/reports/term-deposit-reports/termDepositReports-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TermDepositReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositReportsRoutingModule", function() { return TermDepositReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _term_deposit_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./term-deposit-reports.component */ "./src/app/theme/reports/term-deposit-reports/term-deposit-reports.component.ts");





const routes = [
    {
        path: '',
        component: _term_deposit_reports_component__WEBPACK_IMPORTED_MODULE_2__["TermDepositReportsComponent"],
        data: {
            title: 'Term Deposit Reports',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class TermDepositReportsRoutingModule {
}
TermDepositReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermDepositReportsRoutingModule });
TermDepositReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermDepositReportsRoutingModule_Factory(t) { return new (t || TermDepositReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermDepositReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/term-deposit-reports/termDepositReports.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/reports/term-deposit-reports/termDepositReports.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TermDepositReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermDepositReportsModule", function() { return TermDepositReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _term_deposit_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./term-deposit-reports.component */ "./src/app/theme/reports/term-deposit-reports/term-deposit-reports.component.ts");
/* harmony import */ var _termDepositReports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./termDepositReports-routing.module */ "./src/app/theme/reports/term-deposit-reports/termDepositReports-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






// import {ChartModule} from 'angular2-chartjs';
class TermDepositReportsModule {
}
TermDepositReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermDepositReportsModule });
TermDepositReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermDepositReportsModule_Factory(t) { return new (t || TermDepositReportsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _termDepositReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermDepositReportsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermDepositReportsModule, { declarations: [_term_deposit_reports_component__WEBPACK_IMPORTED_MODULE_2__["TermDepositReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _termDepositReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermDepositReportsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermDepositReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _termDepositReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermDepositReportsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_term_deposit_reports_component__WEBPACK_IMPORTED_MODULE_2__["TermDepositReportsComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=term-deposit-reports-termDepositReports-module.js.map