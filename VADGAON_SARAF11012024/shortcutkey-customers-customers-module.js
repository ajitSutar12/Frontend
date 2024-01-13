(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shortcutkey-customers-customers-module"],{

/***/ "./src/shortcutkey/customers/customers-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/shortcutkey/customers/customers-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers.component */ "./src/shortcutkey/customers/customers.component.ts");





const routes = [
    {
        path: '',
        component: _customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"],
        data: {
            title: 'Customer View',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class CustomersRoutingModule {
}
CustomersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomersRoutingModule });
CustomersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomersRoutingModule_Factory(t) { return new (t || CustomersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/shortcutkey/customers/customers.component.ts":
/*!**********************************************************!*\
  !*** ./src/shortcutkey/customers/customers.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_theme_view_customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/theme/view/customer-view/customer-view.component */ "./src/app/theme/view/customer-view/customer-view.component.ts");



class CustomersComponent {
    constructor() { }
    ngOnInit() { }
}
CustomersComponent.ɵfac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(); };
CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomersComponent, selectors: [["app-customers"]], decls: 1, vars: 0, template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-customer-view");
    } }, directives: [_app_theme_view_customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_1__["CustomerViewComponent"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: ridge;\n  border-color: #817d7de3;\n  padding: 0.4%;\n  margin-bottom: 3px;\n  padding-right: 12px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.5rem;\n}\n\n.table[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 0.75rem;\n  font-weight: 800;\n}\n\n.spanClass[_ngcontent-%COMP%] {\n  color: #3e8cd0;\n  text-align: left;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.1rem 0.5rem !important;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  font-family: \"Maven Pro\";\n  font-size: 12px;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  overflow-x: auto;\n  padding-top: -46px;\n  margin: 0px;\n  margin-right: 0px;\n  padding-right: 1.5rem;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px;\n  max-height: 18px;\n  align-items: center;\n  font-size: 11px;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaG9ydGN1dGtleS9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csVUFBQTtBQUNIOztBQVVBO0VBRUcsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0FBVEg7O0FBWUE7RUFDRyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFUSDs7QUFZQTtFQUNHLG1CQUFBO0FBVEg7O0FBWUE7RUFDRyxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVRIOztBQVlBO0VBQ0csY0FBQTtFQUNBLGdCQUFBO0FBVEg7O0FBWUE7O0VBRUcsaUNBQUE7QUFUSDs7QUFZQTs7RUFFRyx3QkFBQTtFQUNBLGVBQUE7QUFUSDs7QUFZQTtFQUNHLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQVRIOztBQVlBO0VBQ0csV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFUSDs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNFRyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVRIOztBQVlBO0VBQ0csOEJBQUE7RUFDQSxpQkFBQTtBQVRIIiwiZmlsZSI6InNyYy9zaG9ydGN1dGtleS9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcbiAgIGNvbG9yOiByZWQ7XG59XG5cbi8vIGRpdi5zb2xpZCB7XG4vLyAgICBmbG9hdDogcmlnaHQ7XG4vLyAgICB3aWR0aDogNTAwcHg7XG4vLyAgICBoZWlnaHQ6IDIwMHB4O1xuLy8gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbi8vICAgIHBhZGRpbmc6IDElO1xuLy8gfVxuXG5kaXYuc29saWQge1xuICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XG4gICBib3JkZXItY29sb3I6ICM4MTdkN2RlMztcbiAgIHBhZGRpbmc6IDAuNCU7XG4gICAvLyBwYWRkaW5nOiAwLjclO1xuICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gICBmbGV4OiAxIDEgYXV0bztcbiAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLnRhYmxlIHtcbiAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbmxhYmVsIHtcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcbiAgIGZvbnQtc2l6ZTogMC43NTByZW07XG4gICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc3BhbkNsYXNzIHtcbiAgIGNvbG9yOiAjM2U4Y2QwO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRhYmxlIHRkLFxuLnRhYmxlIHRoIHtcbiAgIHBhZGRpbmc6IDAuMXJlbSAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxudGQsXG50aCB7XG4gICBmb250LWZhbWlseTogXCJNYXZlbiBQcm9cIjtcbiAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgd2lkdGg6IDEwMCU7XG4gICBvdmVyZmxvdy14OiBhdXRvO1xuICAgcGFkZGluZy10b3A6IC00NnB4O1xuICAgbWFyZ2luOiAwcHg7XG4gICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbn1cblxuLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICBjb2xvcjogIzMzMztcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgbWluLWhlaWdodDogMThweDtcbiAgIG1heC1oZWlnaHQ6IDE4cHg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uY29sLTEsXG4uY29sLTIsXG4uY29sLTMsXG4uY29sLTQsXG4uY29sLTUsXG4uY29sLTYsXG4uY29sLTcsXG4uY29sLTgsXG4uY29sLTksXG4uY29sLTEwLFxuLmNvbC0xMSxcbi5jb2wtMTIsXG4uY29sLFxuLmNvbC1hdXRvLFxuLmNvbC1zbS0xLFxuLmNvbC1zbS0yLFxuLmNvbC1zbS0zLFxuLmNvbC1zbS00LFxuLmNvbC1zbS01LFxuLmNvbC1zbS02LFxuLmNvbC1zbS03LFxuLmNvbC1zbS04LFxuLmNvbC1zbS05LFxuLmNvbC1zbS0xMCxcbi5jb2wtc20tMTEsXG4uY29sLXNtLTEyLFxuLmNvbC1zbSxcbi5jb2wtc20tYXV0byxcbi5jb2wtbWQtMSxcbi5jb2wtbWQtMixcbi5jb2wtbWQtMyxcbi5jb2wtbWQtNCxcbi5jb2wtbWQtNSxcbi5jb2wtbWQtNixcbi5jb2wtbWQtNyxcbi5jb2wtbWQtOCxcbi5jb2wtbWQtOSxcbi5jb2wtbWQtMTAsXG4uY29sLW1kLTExLFxuLmNvbC1tZC0xMixcbi5jb2wtbWQsXG4uY29sLW1kLWF1dG8sXG4uY29sLWxnLTEsXG4uY29sLWxnLTIsXG4uY29sLWxnLTMsXG4uY29sLWxnLTQsXG4uY29sLWxnLTUsXG4uY29sLWxnLTYsXG4uY29sLWxnLTcsXG4uY29sLWxnLTgsXG4uY29sLWxnLTksXG4uY29sLWxnLTEwLFxuLmNvbC1sZy0xMSxcbi5jb2wtbGctMTIsXG4uY29sLWxnLFxuLmNvbC1sZy1hdXRvLFxuLmNvbC14bC0xLFxuLmNvbC14bC0yLFxuLmNvbC14bC0zLFxuLmNvbC14bC00LFxuLmNvbC14bC01LFxuLmNvbC14bC02LFxuLmNvbC14bC03LFxuLmNvbC14bC04LFxuLmNvbC14bC05LFxuLmNvbC14bC0xMCxcbi5jb2wteGwtMTEsXG4uY29sLXhsLTEyLFxuLmNvbC14bCxcbi5jb2wteGwtYXV0byB7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICB3aWR0aDogMTAwJTtcbiAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICBtYXJnaW4tbGVmdDogMzVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customers',
                templateUrl: './customers.component.html',
                styleUrls: ['./customers.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/shortcutkey/customers/customers.module.ts":
/*!*******************************************************!*\
  !*** ./src/shortcutkey/customers/customers.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers.component */ "./src/shortcutkey/customers/customers.component.ts");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-routing.module */ "./src/shortcutkey/customers/customers-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _app_theme_view_customer_view_customer_view_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/theme/view/customer-view/customer-view.module */ "./src/app/theme/view/customer-view/customer-view.module.ts");








class CustomersModule {
}
CustomersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomersModule });
CustomersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomersModule_Factory(t) { return new (t || CustomersModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomersRoutingModule"],
            _app_theme_view_customer_view_customer_view_module__WEBPACK_IMPORTED_MODULE_6__["CustomerViewModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomersModule, { declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomersRoutingModule"],
        _app_theme_view_customer_view_customer_view_module__WEBPACK_IMPORTED_MODULE_6__["CustomerViewModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomersRoutingModule"],
                    _app_theme_view_customer_view_customer_view_module__WEBPACK_IMPORTED_MODULE_6__["CustomerViewModule"]
                ],
                declarations: [_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=shortcutkey-customers-customers-module.js.map