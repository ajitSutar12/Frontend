(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locker-open-transaction-locker-open-transaction-module"],{

/***/ "./src/app/theme/transaction/locker/locker-open-transaction/locker-open-transaction-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/theme/transaction/locker/locker-open-transaction/locker-open-transaction-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: LockerOpenTransactionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockerOpenTransactionRoutingModule", function() { return LockerOpenTransactionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _locker_open_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locker-open-transaction.component */ "./src/app/theme/transaction/locker/locker-open-transaction/locker-open-transaction.component.ts");





const routes = [
    {
        path: '',
        component: _locker_open_transaction_component__WEBPACK_IMPORTED_MODULE_2__["LockerOpenTransactionComponent"],
        data: {
            title: 'Locker Open Transaction',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class LockerOpenTransactionRoutingModule {
}
LockerOpenTransactionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LockerOpenTransactionRoutingModule });
LockerOpenTransactionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LockerOpenTransactionRoutingModule_Factory(t) { return new (t || LockerOpenTransactionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LockerOpenTransactionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockerOpenTransactionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/locker/locker-open-transaction/locker-open-transaction.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/theme/transaction/locker/locker-open-transaction/locker-open-transaction.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LockerOpenTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockerOpenTransactionComponent", function() { return LockerOpenTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LockerOpenTransactionComponent {
    constructor() { }
    ngOnInit() {
    }
}
LockerOpenTransactionComponent.ɵfac = function LockerOpenTransactionComponent_Factory(t) { return new (t || LockerOpenTransactionComponent)(); };
LockerOpenTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LockerOpenTransactionComponent, selectors: [["app-locker-open-transaction"]], decls: 2, vars: 0, template: function LockerOpenTransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "locker-open-transaction works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RyYW5zYWN0aW9uL2xvY2tlci9sb2NrZXItb3Blbi10cmFuc2FjdGlvbi9sb2NrZXItb3Blbi10cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockerOpenTransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-locker-open-transaction',
                templateUrl: './locker-open-transaction.component.html',
                styleUrls: ['./locker-open-transaction.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/locker/locker-open-transaction/locker-open-transaction.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/transaction/locker/locker-open-transaction/locker-open-transaction.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: LockerOpenTransactionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockerOpenTransactionModule", function() { return LockerOpenTransactionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _locker_open_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locker-open-transaction.component */ "./src/app/theme/transaction/locker/locker-open-transaction/locker-open-transaction.component.ts");
/* harmony import */ var _locker_open_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locker-open-transaction-routing.module */ "./src/app/theme/transaction/locker/locker-open-transaction/locker-open-transaction-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class LockerOpenTransactionModule {
}
LockerOpenTransactionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LockerOpenTransactionModule });
LockerOpenTransactionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LockerOpenTransactionModule_Factory(t) { return new (t || LockerOpenTransactionModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _locker_open_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["LockerOpenTransactionRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LockerOpenTransactionModule, { declarations: [_locker_open_transaction_component__WEBPACK_IMPORTED_MODULE_2__["LockerOpenTransactionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _locker_open_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["LockerOpenTransactionRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockerOpenTransactionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _locker_open_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["LockerOpenTransactionRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                declarations: [_locker_open_transaction_component__WEBPACK_IMPORTED_MODULE_2__["LockerOpenTransactionComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=locker-open-transaction-locker-open-transaction-module.js.map