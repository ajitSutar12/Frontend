(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loan-reports-loanReports-module"],{

/***/ "./src/app/theme/reports/loan-reports/loan-reports.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/reports/loan-reports/loan-reports.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoanReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanReportsComponent", function() { return LoanReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoanReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoanReportsComponent.ɵfac = function LoanReportsComponent_Factory(t) { return new (t || LoanReportsComponent)(); };
LoanReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoanReportsComponent, selectors: [["app-loan-reports"]], decls: 2, vars: 0, template: function LoanReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loan-reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvbG9hbi1yZXBvcnRzL2xvYW4tcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loan-reports',
                templateUrl: './loan-reports.component.html',
                styleUrls: ['./loan-reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/loan-reports/loanReports-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/reports/loan-reports/loanReports-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: LoanReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanReportsRoutingModule", function() { return LoanReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _loan_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-reports.component */ "./src/app/theme/reports/loan-reports/loan-reports.component.ts");





const routes = [
    {
        path: '',
        component: _loan_reports_component__WEBPACK_IMPORTED_MODULE_2__["LoanReportsComponent"],
        data: {
            title: 'Loan Reports',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class LoanReportsRoutingModule {
}
LoanReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoanReportsRoutingModule });
LoanReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoanReportsRoutingModule_Factory(t) { return new (t || LoanReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoanReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/loan-reports/loanReports.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/reports/loan-reports/loanReports.module.ts ***!
  \******************************************************************/
/*! exports provided: LoanReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanReportsModule", function() { return LoanReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loan_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-reports.component */ "./src/app/theme/reports/loan-reports/loan-reports.component.ts");
/* harmony import */ var _loanReports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loanReports-routing.module */ "./src/app/theme/reports/loan-reports/loanReports-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






// import {ChartModule} from 'angular2-chartjs';
class LoanReportsModule {
}
LoanReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoanReportsModule });
LoanReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoanReportsModule_Factory(t) { return new (t || LoanReportsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _loanReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoanReportsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoanReportsModule, { declarations: [_loan_reports_component__WEBPACK_IMPORTED_MODULE_2__["LoanReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _loanReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoanReportsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _loanReports_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoanReportsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_loan_reports_component__WEBPACK_IMPORTED_MODULE_2__["LoanReportsComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=loan-reports-loanReports-module.js.map