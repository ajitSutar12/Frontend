(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interest-posting-interest-posting-module"],{

/***/ "./src/app/theme/utility/interest-posting/interest-posting-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/utility/interest-posting/interest-posting-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: InterestPostingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestPostingRoutingModule", function() { return InterestPostingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Interest Posting',
            status: false
        },
        children: [
            {
                path: 'interestCalculation',
                loadChildren: () => Promise.all(/*! import() | interest-calculation-interest-calculation-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("interest-calculation-interest-calculation-module")]).then(__webpack_require__.bind(null, /*! ./interest-calculation/interest-calculation.module */ "./src/app/theme/utility/interest-posting/interest-calculation/interest-calculation.module.ts")).then(m => m.InterestCalculationModule)
            },
            {
                path: 'interestList',
                loadChildren: () => Promise.all(/*! import() | interest-list-interest-list-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("interest-list-interest-list-module")]).then(__webpack_require__.bind(null, /*! ./interest-list/interest-list.module */ "./src/app/theme/utility/interest-posting/interest-list/interest-list.module.ts")).then(m => m.InterestListModule)
            },
            {
                path: 'interestPassing',
                loadChildren: () => Promise.all(/*! import() | interest-passing-interest-passing-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("interest-passing-interest-passing-module")]).then(__webpack_require__.bind(null, /*! ./interest-passing/interest-passing.module */ "./src/app/theme/utility/interest-posting/interest-passing/interest-passing.module.ts")).then(m => m.InterestPassingModule)
            },
        ]
    }
];
class InterestPostingRoutingModule {
}
InterestPostingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InterestPostingRoutingModule });
InterestPostingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InterestPostingRoutingModule_Factory(t) { return new (t || InterestPostingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InterestPostingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterestPostingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utility/interest-posting/interest-posting.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/utility/interest-posting/interest-posting.component.ts ***!
  \******************************************************************************/
/*! exports provided: InterestPostingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestPostingComponent", function() { return InterestPostingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InterestPostingComponent {
    constructor() { }
    ngOnInit() {
    }
}
InterestPostingComponent.ɵfac = function InterestPostingComponent_Factory(t) { return new (t || InterestPostingComponent)(); };
InterestPostingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterestPostingComponent, selectors: [["app-interest-posting"]], decls: 2, vars: 0, template: function InterestPostingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "interest-posting works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3V0aWxpdHkvaW50ZXJlc3QtcG9zdGluZy9pbnRlcmVzdC1wb3N0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterestPostingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interest-posting',
                templateUrl: './interest-posting.component.html',
                styleUrls: ['./interest-posting.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/interest-posting/interest-posting.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/utility/interest-posting/interest-posting.module.ts ***!
  \***************************************************************************/
/*! exports provided: InterestPostingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestPostingModule", function() { return InterestPostingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _interest_posting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interest-posting.component */ "./src/app/theme/utility/interest-posting/interest-posting.component.ts");
/* harmony import */ var _interest_posting_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interest-posting-routing.module */ "./src/app/theme/utility/interest-posting/interest-posting-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");









class InterestPostingModule {
}
InterestPostingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InterestPostingModule });
InterestPostingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InterestPostingModule_Factory(t) { return new (t || InterestPostingModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _interest_posting_routing_module__WEBPACK_IMPORTED_MODULE_4__["InterestPostingRoutingModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InterestPostingModule, { declarations: [_interest_posting_component__WEBPACK_IMPORTED_MODULE_3__["InterestPostingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _interest_posting_routing_module__WEBPACK_IMPORTED_MODULE_4__["InterestPostingRoutingModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterestPostingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _interest_posting_routing_module__WEBPACK_IMPORTED_MODULE_4__["InterestPostingRoutingModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ],
                declarations: [_interest_posting_component__WEBPACK_IMPORTED_MODULE_3__["InterestPostingComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=interest-posting-interest-posting-module.js.map