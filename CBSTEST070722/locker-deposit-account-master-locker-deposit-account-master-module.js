(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locker-deposit-account-master-locker-deposit-account-master-module"],{

/***/ "./src/app/theme/transaction/locker/locker-deposit-account-master/locker-deposit-account-master-routing.module.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/theme/transaction/locker/locker-deposit-account-master/locker-deposit-account-master-routing.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: LockerDepositAccountMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockerDepositAccountMasterRoutingModule", function() { return LockerDepositAccountMasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _locker_deposit_account_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locker-deposit-account-master.component */ "./src/app/theme/transaction/locker/locker-deposit-account-master/locker-deposit-account-master.component.ts");





const routes = [
    {
        path: '',
        component: _locker_deposit_account_master_component__WEBPACK_IMPORTED_MODULE_2__["LockerDepositAccountMasterComponent"],
        data: {
            title: 'Locker Deposit Account Master',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class LockerDepositAccountMasterRoutingModule {
}
LockerDepositAccountMasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LockerDepositAccountMasterRoutingModule });
LockerDepositAccountMasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LockerDepositAccountMasterRoutingModule_Factory(t) { return new (t || LockerDepositAccountMasterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LockerDepositAccountMasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockerDepositAccountMasterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/locker/locker-deposit-account-master/locker-deposit-account-master.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/theme/transaction/locker/locker-deposit-account-master/locker-deposit-account-master.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: LockerDepositAccountMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockerDepositAccountMasterComponent", function() { return LockerDepositAccountMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LockerDepositAccountMasterComponent {
    constructor() { }
    ngOnInit() {
    }
}
LockerDepositAccountMasterComponent.ɵfac = function LockerDepositAccountMasterComponent_Factory(t) { return new (t || LockerDepositAccountMasterComponent)(); };
LockerDepositAccountMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LockerDepositAccountMasterComponent, selectors: [["app-locker-deposit-account-master"]], decls: 2, vars: 0, template: function LockerDepositAccountMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "locker-deposit-account-master works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RyYW5zYWN0aW9uL2xvY2tlci9sb2NrZXItZGVwb3NpdC1hY2NvdW50LW1hc3Rlci9sb2NrZXItZGVwb3NpdC1hY2NvdW50LW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockerDepositAccountMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-locker-deposit-account-master',
                templateUrl: './locker-deposit-account-master.component.html',
                styleUrls: ['./locker-deposit-account-master.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/locker/locker-deposit-account-master/locker-deposit-account-master.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/theme/transaction/locker/locker-deposit-account-master/locker-deposit-account-master.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: LockerDepositAccountMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockerDepositAccountMasterModule", function() { return LockerDepositAccountMasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _locker_deposit_account_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locker-deposit-account-master.component */ "./src/app/theme/transaction/locker/locker-deposit-account-master/locker-deposit-account-master.component.ts");
/* harmony import */ var _locker_deposit_account_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locker-deposit-account-master-routing.module */ "./src/app/theme/transaction/locker/locker-deposit-account-master/locker-deposit-account-master-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class LockerDepositAccountMasterModule {
}
LockerDepositAccountMasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LockerDepositAccountMasterModule });
LockerDepositAccountMasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LockerDepositAccountMasterModule_Factory(t) { return new (t || LockerDepositAccountMasterModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _locker_deposit_account_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["LockerDepositAccountMasterRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LockerDepositAccountMasterModule, { declarations: [_locker_deposit_account_master_component__WEBPACK_IMPORTED_MODULE_2__["LockerDepositAccountMasterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _locker_deposit_account_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["LockerDepositAccountMasterRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockerDepositAccountMasterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _locker_deposit_account_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["LockerDepositAccountMasterRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                declarations: [_locker_deposit_account_master_component__WEBPACK_IMPORTED_MODULE_2__["LockerDepositAccountMasterComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=locker-deposit-account-master-locker-deposit-account-master-module.js.map