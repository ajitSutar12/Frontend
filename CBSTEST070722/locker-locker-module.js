(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locker-locker-module"],{

/***/ "./src/app/theme/transaction/locker/locker-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/transaction/locker/locker-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: LockerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockerRoutingModule", function() { return LockerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Locker',
            status: false
        },
        children: [
            {
                path: 'lockerOpenTransaction',
                loadChildren: () => Promise.all(/*! import() | locker-open-transaction-locker-open-transaction-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~e0f20085"), __webpack_require__.e("locker-open-transaction-locker-open-transaction-module")]).then(__webpack_require__.bind(null, /*! ./locker-open-transaction/locker-open-transaction.module */ "./src/app/theme/transaction/locker/locker-open-transaction/locker-open-transaction.module.ts")).then(m => m.LockerOpenTransactionModule)
            },
            {
                path: 'lockerDepositAccountMaster',
                loadChildren: () => Promise.all(/*! import() | locker-deposit-account-master-locker-deposit-account-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~e0f20085"), __webpack_require__.e("locker-deposit-account-master-locker-deposit-account-master-module")]).then(__webpack_require__.bind(null, /*! ./locker-deposit-account-master/locker-deposit-account-master.module */ "./src/app/theme/transaction/locker/locker-deposit-account-master/locker-deposit-account-master.module.ts")).then(m => m.LockerDepositAccountMasterModule)
            },
            {
                path: 'lockerRentTransaction',
                loadChildren: () => Promise.all(/*! import() | locker-rent-transactions-locker-rent-transactions-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-enquiry-account-enquiry-module~account-opening-account-open~e0f20085"), __webpack_require__.e("locker-rent-transactions-locker-rent-transactions-module")]).then(__webpack_require__.bind(null, /*! ./locker-rent-transactions/locker-rent-transactions.module */ "./src/app/theme/transaction/locker/locker-rent-transactions/locker-rent-transactions.module.ts")).then(m => m.LockerRentTransactionModule)
            },
        ]
    }
];
class LockerRoutingModule {
}
LockerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LockerRoutingModule });
LockerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LockerRoutingModule_Factory(t) { return new (t || LockerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LockerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/locker/locker.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/transaction/locker/locker.component.ts ***!
  \**************************************************************/
/*! exports provided: LockerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockerComponent", function() { return LockerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LockerComponent {
    constructor() { }
    ngOnInit() {
    }
}
LockerComponent.ɵfac = function LockerComponent_Factory(t) { return new (t || LockerComponent)(); };
LockerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LockerComponent, selectors: [["app-locker"]], decls: 2, vars: 0, template: function LockerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "locker works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RyYW5zYWN0aW9uL2xvY2tlci9sb2NrZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-locker',
                templateUrl: './locker.component.html',
                styleUrls: ['./locker.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/locker/locker.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/transaction/locker/locker.module.ts ***!
  \***********************************************************/
/*! exports provided: LockerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockerModule", function() { return LockerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _locker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locker.component */ "./src/app/theme/transaction/locker/locker.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _locker_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locker-routing.module */ "./src/app/theme/transaction/locker/locker-routing.module.ts");








class LockerModule {
}
LockerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LockerModule });
LockerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LockerModule_Factory(t) { return new (t || LockerModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _locker_routing_module__WEBPACK_IMPORTED_MODULE_6__["LockerRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LockerModule, { declarations: [_locker_component__WEBPACK_IMPORTED_MODULE_2__["LockerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _locker_routing_module__WEBPACK_IMPORTED_MODULE_6__["LockerRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _locker_routing_module__WEBPACK_IMPORTED_MODULE_6__["LockerRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: [_locker_component__WEBPACK_IMPORTED_MODULE_2__["LockerComponent"],],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=locker-locker-module.js.map