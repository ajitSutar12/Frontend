(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["receipt-printing-d-receipt-printing-d-module"],{

/***/ "./src/app/theme/utility/receipt-printing-d/receipt-printing-d-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/utility/receipt-printing-d/receipt-printing-d-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ReceiptPrintingDRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptPrintingDRoutingModule", function() { return ReceiptPrintingDRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _receipt_printing_d_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receipt-printing-d.component */ "./src/app/theme/utility/receipt-printing-d/receipt-printing-d.component.ts");





const routes = [
    {
        path: '',
        component: _receipt_printing_d_component__WEBPACK_IMPORTED_MODULE_2__["ReceiptPrintingDComponent"],
        data: {
            title: 'Receipt Printing Designing',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class ReceiptPrintingDRoutingModule {
}
ReceiptPrintingDRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReceiptPrintingDRoutingModule });
ReceiptPrintingDRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReceiptPrintingDRoutingModule_Factory(t) { return new (t || ReceiptPrintingDRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReceiptPrintingDRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReceiptPrintingDRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utility/receipt-printing-d/receipt-printing-d.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/utility/receipt-printing-d/receipt-printing-d.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ReceiptPrintingDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptPrintingDComponent", function() { return ReceiptPrintingDComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ReceiptPrintingDComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReceiptPrintingDComponent.ɵfac = function ReceiptPrintingDComponent_Factory(t) { return new (t || ReceiptPrintingDComponent)(); };
ReceiptPrintingDComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReceiptPrintingDComponent, selectors: [["app-receipt-printing-d"]], decls: 2, vars: 0, template: function ReceiptPrintingDComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "receipt-printing-d works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdXRpbGl0eS9yZWNlaXB0LXByaW50aW5nLWQvcmVjZWlwdC1wcmludGluZy1kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdXRpbGl0eS9yZWNlaXB0LXByaW50aW5nLWQvcmVjZWlwdC1wcmludGluZy1kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReceiptPrintingDComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-receipt-printing-d',
                templateUrl: './receipt-printing-d.component.html',
                styleUrls: ['./receipt-printing-d.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/receipt-printing-d/receipt-printing-d.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/utility/receipt-printing-d/receipt-printing-d.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ReceiptPrintingDModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptPrintingDModule", function() { return ReceiptPrintingDModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _receipt_printing_d_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receipt-printing-d.component */ "./src/app/theme/utility/receipt-printing-d/receipt-printing-d.component.ts");
/* harmony import */ var _receipt_printing_d_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receipt-printing-d-routing.module */ "./src/app/theme/utility/receipt-printing-d/receipt-printing-d-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");








class ReceiptPrintingDModule {
}
ReceiptPrintingDModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReceiptPrintingDModule });
ReceiptPrintingDModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReceiptPrintingDModule_Factory(t) { return new (t || ReceiptPrintingDModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _receipt_printing_d_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReceiptPrintingDRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReceiptPrintingDModule, { declarations: [_receipt_printing_d_component__WEBPACK_IMPORTED_MODULE_2__["ReceiptPrintingDComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _receipt_printing_d_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReceiptPrintingDRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReceiptPrintingDModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _receipt_printing_d_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReceiptPrintingDRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_receipt_printing_d_component__WEBPACK_IMPORTED_MODULE_2__["ReceiptPrintingDComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=receipt-printing-d-receipt-printing-d-module.js.map