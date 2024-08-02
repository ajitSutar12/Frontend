(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recovery-reports-recovery-reports-module"],{

/***/ "./src/app/theme/reports/recovery-reports/recovery-reports-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/reports/recovery-reports/recovery-reports-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RecoveryReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryReportsRoutingModule", function() { return RecoveryReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [{
        path: '',
        data: {
            title: 'Recovery Reports',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        },
        children: [
            {
                path: 'memberAckReport',
                loadChildren: () => Promise.all(/*! import() | member-ack-report-member-ack-report-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("member-ack-report-member-ack-report-module")]).then(__webpack_require__.bind(null, /*! ./member-ack-report/member-ack-report.module */ "./src/app/theme/reports/recovery-reports/member-ack-report/member-ack-report.module.ts")).then(m => m.MemberAckReportModule)
            },
        ]
    }
];
class RecoveryReportsRoutingModule {
}
RecoveryReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecoveryReportsRoutingModule });
RecoveryReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecoveryReportsRoutingModule_Factory(t) { return new (t || RecoveryReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecoveryReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecoveryReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/recovery-reports/recovery-reports.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/reports/recovery-reports/recovery-reports.component.ts ***!
  \******************************************************************************/
/*! exports provided: RecoveryReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryReportsComponent", function() { return RecoveryReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RecoveryReportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecoveryReportsComponent.ɵfac = function RecoveryReportsComponent_Factory(t) { return new (t || RecoveryReportsComponent)(); };
RecoveryReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecoveryReportsComponent, selectors: [["app-recovery-reports"]], decls: 2, vars: 0, template: function RecoveryReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "recovery-reports works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvcmVjb3ZlcnktcmVwb3J0cy9yZWNvdmVyeS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecoveryReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recovery-reports',
                templateUrl: './recovery-reports.component.html',
                styleUrls: ['./recovery-reports.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/recovery-reports/recovery-reports.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/reports/recovery-reports/recovery-reports.module.ts ***!
  \***************************************************************************/
/*! exports provided: RecoveryReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryReportsModule", function() { return RecoveryReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _recovery_reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recovery-reports-routing.module */ "./src/app/theme/reports/recovery-reports/recovery-reports-routing.module.ts");
/* harmony import */ var _recovery_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recovery-reports.component */ "./src/app/theme/reports/recovery-reports/recovery-reports.component.ts");





class RecoveryReportsModule {
}
RecoveryReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecoveryReportsModule });
RecoveryReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecoveryReportsModule_Factory(t) { return new (t || RecoveryReportsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _recovery_reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecoveryReportsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecoveryReportsModule, { declarations: [_recovery_reports_component__WEBPACK_IMPORTED_MODULE_3__["RecoveryReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _recovery_reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecoveryReportsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecoveryReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_recovery_reports_component__WEBPACK_IMPORTED_MODULE_3__["RecoveryReportsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _recovery_reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecoveryReportsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=recovery-reports-recovery-reports-module.js.map