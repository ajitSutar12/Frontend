(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-socity-employee-socity-module"],{

/***/ "./src/app/theme/reports/employee-socity/employee-socity-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/reports/employee-socity/employee-socity-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EmployeeSocityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSocityRoutingModule", function() { return EmployeeSocityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [{
        path: '',
        data: {
            title: 'EmployeeSocity',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        },
        children: [
            // {
            //   path: 'SharesandRecovery',
            //   loadChildren: () => import('./sharesand-recovery/sharesand-recovery.module').then(m => m.SharesandRecoveryModule)
            // },
            {
                path: 'memberanddividendreports',
                loadChildren: () => Promise.all(/*! import() | memberanddividendreports-memberanddividendreports-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("common"), __webpack_require__.e("memberanddividendreports-memberanddividendreports-module")]).then(__webpack_require__.bind(null, /*! ./memberanddividendreports/memberanddividendreports.module */ "./src/app/theme/reports/employee-socity/memberanddividendreports/memberanddividendreports.module.ts")).then(m => m.MemberanddividendreportsModule)
            },
        ]
    }];
class EmployeeSocityRoutingModule {
}
EmployeeSocityRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeeSocityRoutingModule });
EmployeeSocityRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeeSocityRoutingModule_Factory(t) { return new (t || EmployeeSocityRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeSocityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeSocityRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/employee-socity/employee-socity.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/reports/employee-socity/employee-socity.component.ts ***!
  \****************************************************************************/
/*! exports provided: EmployeeSocityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSocityComponent", function() { return EmployeeSocityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EmployeeSocityComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmployeeSocityComponent.ɵfac = function EmployeeSocityComponent_Factory(t) { return new (t || EmployeeSocityComponent)(); };
EmployeeSocityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeSocityComponent, selectors: [["app-employee-socity"]], decls: 2, vars: 0, template: function EmployeeSocityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "employee-socity works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvZW1wbG95ZWUtc29jaXR5L2VtcGxveWVlLXNvY2l0eS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeSocityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee-socity',
                templateUrl: './employee-socity.component.html',
                styleUrls: ['./employee-socity.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/employee-socity/employee-socity.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/reports/employee-socity/employee-socity.module.ts ***!
  \*************************************************************************/
/*! exports provided: EmployeeSocityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSocityModule", function() { return EmployeeSocityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _employee_socity_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-socity-routing.module */ "./src/app/theme/reports/employee-socity/employee-socity-routing.module.ts");
/* harmony import */ var _employee_socity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-socity.component */ "./src/app/theme/reports/employee-socity/employee-socity.component.ts");





class EmployeeSocityModule {
}
EmployeeSocityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeeSocityModule });
EmployeeSocityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeeSocityModule_Factory(t) { return new (t || EmployeeSocityModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _employee_socity_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeSocityRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeSocityModule, { declarations: [_employee_socity_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeSocityComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _employee_socity_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeSocityRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeSocityModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_employee_socity_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeSocityComponent"],],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _employee_socity_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeSocityRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=employee-socity-employee-socity-module.js.map