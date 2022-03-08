(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dividend-dividend-module"],{

/***/ "./src/app/theme/utility/dividend/dividend-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/utility/dividend/dividend-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DividendRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividendRoutingModule", function() { return DividendRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        //component: DividendComponent,
        data: {
            title: 'Dividend',
            status: false
        },
        children: [
            {
                path: 'dividendList',
                loadChildren: () => Promise.all(/*! import() | dividend-list-dividend-list-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("dividend-list-dividend-list-module")]).then(__webpack_require__.bind(null, /*! ./dividend-list/dividend-list.module */ "./src/app/theme/utility/dividend/dividend-list/dividend-list.module.ts")).then(m => m.DividendListModule)
            },
            {
                path: 'dividendPost',
                loadChildren: () => Promise.all(/*! import() | dividend-post-dividend-post-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("dividend-post-dividend-post-module")]).then(__webpack_require__.bind(null, /*! ./dividend-post/dividend-post.module */ "./src/app/theme/utility/dividend/dividend-post/dividend-post.module.ts")).then(m => m.DividendPostModule)
            },
        ]
    }
];
class DividendRoutingModule {
}
DividendRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DividendRoutingModule });
DividendRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DividendRoutingModule_Factory(t) { return new (t || DividendRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DividendRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividendRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utility/dividend/dividend.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/utility/dividend/dividend.component.ts ***!
  \**************************************************************/
/*! exports provided: DividendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividendComponent", function() { return DividendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DividendComponent {
    constructor() { }
    ngOnInit() {
    }
}
DividendComponent.ɵfac = function DividendComponent_Factory(t) { return new (t || DividendComponent)(); };
DividendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DividendComponent, selectors: [["app-dividend"]], decls: 2, vars: 0, template: function DividendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dividend works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3V0aWxpdHkvZGl2aWRlbmQvZGl2aWRlbmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dividend',
                templateUrl: './dividend.component.html',
                styleUrls: ['./dividend.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/dividend/dividend.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/utility/dividend/dividend.module.ts ***!
  \***********************************************************/
/*! exports provided: DividendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividendModule", function() { return DividendModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dividend_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dividend.component */ "./src/app/theme/utility/dividend/dividend.component.ts");
/* harmony import */ var _dividend_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dividend-routing.module */ "./src/app/theme/utility/dividend/dividend-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");








class DividendModule {
}
DividendModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DividendModule });
DividendModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DividendModule_Factory(t) { return new (t || DividendModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dividend_routing_module__WEBPACK_IMPORTED_MODULE_3__["DividendRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DividendModule, { declarations: [_dividend_component__WEBPACK_IMPORTED_MODULE_2__["DividendComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dividend_routing_module__WEBPACK_IMPORTED_MODULE_3__["DividendRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividendModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dividend_routing_module__WEBPACK_IMPORTED_MODULE_3__["DividendRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_dividend_component__WEBPACK_IMPORTED_MODULE_2__["DividendComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dividend-dividend-module.js.map