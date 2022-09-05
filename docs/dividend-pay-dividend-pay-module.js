(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dividend-pay-dividend-pay-module"],{

/***/ "./src/app/theme/transaction/dividend-pay/dividend-pay-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/transaction/dividend-pay/dividend-pay-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DividendPayRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividendPayRoutingModule", function() { return DividendPayRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        // component: DividendPayComponent,
        data: {
            title: 'Dividend Pay',
            status: false
        },
        children: [
            {
                path: 'dividendPaidMarkSD',
                loadChildren: () => __webpack_require__.e(/*! import() | dividend-paid-mark-sd-dividend-paid-mark-sd-module */ "dividend-paid-mark-sd-dividend-paid-mark-sd-module").then(__webpack_require__.bind(null, /*! ./dividend-paid-mark-sd/dividend-paid-mark-sd.module */ "./src/app/theme/transaction/dividend-pay/dividend-paid-mark-sd/dividend-paid-mark-sd.module.ts")).then(m => m.DividendPaidMarkSDModule)
            },
            {
                path: 'dividendPaidSD',
                loadChildren: () => __webpack_require__.e(/*! import() | dividend-paid-sd-dividend-paid-sd-module */ "dividend-paid-sd-dividend-paid-sd-module").then(__webpack_require__.bind(null, /*! ./dividend-paid-sd/dividend-paid-sd.module */ "./src/app/theme/transaction/dividend-pay/dividend-paid-sd/dividend-paid-sd.module.ts")).then(m => m.DividendPaidSDModule)
            },
        ]
    }
];
class DividendPayRoutingModule {
}
DividendPayRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DividendPayRoutingModule });
DividendPayRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DividendPayRoutingModule_Factory(t) { return new (t || DividendPayRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DividendPayRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividendPayRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/dividend-pay/dividend-pay.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/transaction/dividend-pay/dividend-pay.component.ts ***!
  \**************************************************************************/
/*! exports provided: DividendPayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividendPayComponent", function() { return DividendPayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DividendPayComponent {
    constructor() { }
    ngOnInit() {
    }
}
DividendPayComponent.ɵfac = function DividendPayComponent_Factory(t) { return new (t || DividendPayComponent)(); };
DividendPayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DividendPayComponent, selectors: [["app-dividend-pay"]], decls: 2, vars: 0, template: function DividendPayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dividend-pay works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RyYW5zYWN0aW9uL2RpdmlkZW5kLXBheS9kaXZpZGVuZC1wYXkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividendPayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dividend-pay',
                templateUrl: './dividend-pay.component.html',
                styleUrls: ['./dividend-pay.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/dividend-pay/dividend-pay.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/transaction/dividend-pay/dividend-pay.module.ts ***!
  \***********************************************************************/
/*! exports provided: DividendPayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividendPayModule", function() { return DividendPayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dividend_pay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dividend-pay.component */ "./src/app/theme/transaction/dividend-pay/dividend-pay.component.ts");
/* harmony import */ var _dividend_pay_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dividend-pay-routing.module */ "./src/app/theme/transaction/dividend-pay/dividend-pay-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");





//import { DividendPaidMarkSDComponent } from './dividend-paid-mark-sd/dividend-paid-mark-sd.component';
//import { DividendPaidSDComponent } from './dividend-paid-sd/dividend-paid-sd.component';



class DividendPayModule {
}
DividendPayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DividendPayModule });
DividendPayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DividendPayModule_Factory(t) { return new (t || DividendPayModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dividend_pay_routing_module__WEBPACK_IMPORTED_MODULE_3__["DividendPayRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DividendPayModule, { declarations: [_dividend_pay_component__WEBPACK_IMPORTED_MODULE_2__["DividendPayComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dividend_pay_routing_module__WEBPACK_IMPORTED_MODULE_3__["DividendPayRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividendPayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dividend_pay_routing_module__WEBPACK_IMPORTED_MODULE_3__["DividendPayRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_dividend_pay_component__WEBPACK_IMPORTED_MODULE_2__["DividendPayComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dividend-pay-dividend-pay-module.js.map