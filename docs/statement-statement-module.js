(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statement-statement-module"],{

/***/ "./src/app/theme/reports/statement/statement-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/reports/statement/statement-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: StatementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementRoutingModule", function() { return StatementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        // component: StatementComponent,
        data: {
            title: 'Statement',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        },
        children: [
            {
                path: 'BnkGlAcStatement',
                loadChildren: () => Promise.all(/*! import() | bnk-gl-ac-statement-bnk-gl-ac-statement-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~all-reports-with-searching-allReportsWithSearching-mo~7b9e4e99"), __webpack_require__.e("common"), __webpack_require__.e("bnk-gl-ac-statement-bnk-gl-ac-statement-module")]).then(__webpack_require__.bind(null, /*! ./bnk-gl-ac-statement/bnk-gl-ac-statement.module */ "./src/app/theme/reports/statement/bnk-gl-ac-statement/bnk-gl-ac-statement.module.ts")).then(m => m.BnkGlAcStatementModule)
            },
            {
                path: 'BnkAcStatement',
                loadChildren: () => Promise.all(/*! import() | bnk-ac-statement-bnk-ac-statement-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~all-reports-with-searching-allReportsWithSearching-mo~7b9e4e99"), __webpack_require__.e("common"), __webpack_require__.e("bnk-ac-statement-bnk-ac-statement-module")]).then(__webpack_require__.bind(null, /*! ./bnk-ac-statement/bnk-ac-statement.module */ "./src/app/theme/reports/statement/bnk-ac-statement/bnk-ac-statement.module.ts")).then(m => m.BnkAcStatementModule)
            },
            {
                path: 'BnkLNamtStatement',
                loadChildren: () => Promise.all(/*! import() | bnk-lnamt-statement-bnk-lnamt-statement-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~all-reports-with-searching-allReportsWithSearching-mo~7b9e4e99"), __webpack_require__.e("common"), __webpack_require__.e("bnk-lnamt-statement-bnk-lnamt-statement-module")]).then(__webpack_require__.bind(null, /*! ./bnk-lnamt-statement/bnk-lnamt-statement.module */ "./src/app/theme/reports/statement/bnk-lnamt-statement/bnk-lnamt-statement.module.ts")).then(m => m.BnkLNamtStatementModule)
            },
            {
                path: 'BnkTDStatement',
                loadChildren: () => Promise.all(/*! import() | bnk-tdstatement-bnk-tdstatement-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~cdbe0cfb"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~all-reports-wi~65a2045d"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~account-opening-account-opening-module~analytics-anal~c26cab60"), __webpack_require__.e("default~account-enquiry-account-enquiry-module~all-reports-with-searching-allReportsWithSearching-mo~7b9e4e99"), __webpack_require__.e("common"), __webpack_require__.e("bnk-tdstatement-bnk-tdstatement-module")]).then(__webpack_require__.bind(null, /*! ./bnk-tdstatement/bnk-tdstatement.module */ "./src/app/theme/reports/statement/bnk-tdstatement/bnk-tdstatement.module.ts")).then(m => m.BnkTDStatementModule)
            },
            //  {
            //    path: 'BnkGlIntStatement',
            //    loadChildren: () => import('./bnk-gl-int-statement/bnk-gl-int-statement.module').then(m => m.BnkGlIntStatementModule)
            //  },
            //  {
            //    path: 'BnkMemStatement',
            //    loadChildren: () => import('./bnk-mem-statement/bnk-mem-statement.module').then(m => m.BnkMemStatementModule)
            //  },
            {
                path: 'iframe2',
                loadChildren: () => __webpack_require__.e(/*! import() | iframe2-iframe2-module */ "common").then(__webpack_require__.bind(null, /*! ./iframe2/iframe2.module */ "./src/app/theme/reports/statement/iframe2/iframe2.module.ts")).then(m => m.Iframe2Module)
            }
        ]
    }
];
class StatementRoutingModule {
}
StatementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StatementRoutingModule });
StatementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StatementRoutingModule_Factory(t) { return new (t || StatementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StatementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/statement/statement.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/reports/statement/statement.component.ts ***!
  \****************************************************************/
/*! exports provided: StatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementComponent", function() { return StatementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StatementComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatementComponent.ɵfac = function StatementComponent_Factory(t) { return new (t || StatementComponent)(); };
StatementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatementComponent, selectors: [["app-statement"]], decls: 1, vars: 0, template: function StatementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "manasi\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvc3RhdGVtZW50L3N0YXRlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statement',
                templateUrl: './statement.component.html',
                styleUrls: ['./statement.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/statement/statement.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/reports/statement/statement.module.ts ***!
  \*************************************************************/
/*! exports provided: StatementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementModule", function() { return StatementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _statement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statement.component */ "./src/app/theme/reports/statement/statement.component.ts");
/* harmony import */ var _statement_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statement-routing.module */ "./src/app/theme/reports/statement/statement-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");





// import {ChartModule} from 'angular2-chartjs';



// import { BnkGlIntStatementComponent } from './bnk-gl-int-statement/bnk-gl-int-statement.component';
// import { BnkMemStatementComponent } from './bnk-mem-statement/bnk-mem-statement.component';
class StatementModule {
}
StatementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StatementModule });
StatementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StatementModule_Factory(t) { return new (t || StatementModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _statement_routing_module__WEBPACK_IMPORTED_MODULE_3__["StatementRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StatementModule, { declarations: [_statement_component__WEBPACK_IMPORTED_MODULE_2__["StatementComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _statement_routing_module__WEBPACK_IMPORTED_MODULE_3__["StatementRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _statement_routing_module__WEBPACK_IMPORTED_MODULE_3__["StatementRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_statement_component__WEBPACK_IMPORTED_MODULE_2__["StatementComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=statement-statement-module.js.map