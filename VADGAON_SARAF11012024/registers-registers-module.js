(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registers-registers-module"],{

/***/ "./src/app/theme/reports/registers/registers-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/reports/registers/registers-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegistersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistersRoutingModule", function() { return RegistersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        // component: RegistersComponent,
        data: {
            title: 'Registers',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        },
        children: [
            {
                path: 'BnkRegAccount',
                loadChildren: () => Promise.all(/*! import() | bnk-reg-account-bnk-reg-account-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-reg-account-bnk-reg-account-module")]).then(__webpack_require__.bind(null, /*! ./bnk-reg-account/bnk-reg-account.module */ "./src/app/theme/reports/registers/bnk-reg-account/bnk-reg-account.module.ts")).then(m => m.BnkRegAccountModule)
            },
            {
                path: 'BnkRegStandingInstruction',
                loadChildren: () => Promise.all(/*! import() | bnk-reg-standing-instruction-bnk-reg-standing-instruction-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("common"), __webpack_require__.e("bnk-reg-standing-instruction-bnk-reg-standing-instruction-module")]).then(__webpack_require__.bind(null, /*! ./bnk-reg-standing-instruction/bnk-reg-standing-instruction.module */ "./src/app/theme/reports/registers/bnk-reg-standing-instruction/bnk-reg-standing-instruction.module.ts")).then(m => m.BnkRegStandingInstructionModule)
            },
            {
                path: 'BnkRegInterestInstruction',
                loadChildren: () => Promise.all(/*! import() | bnk-reg-interest-instruction-bnk-reg-interest-instruction-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("common"), __webpack_require__.e("bnk-reg-interest-instruction-bnk-reg-interest-instruction-module")]).then(__webpack_require__.bind(null, /*! ./bnk-reg-interest-instruction/bnk-reg-interest-instruction.module */ "./src/app/theme/reports/registers/bnk-reg-interest-instruction/bnk-reg-interest-instruction.module.ts")).then(m => m.BnkRegInterestInstructionModule)
            },
            {
                path: 'BnkRegSpecialInstruction',
                loadChildren: () => Promise.all(/*! import() | bnk-reg-special-instruction-bnk-reg-special-instruction-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("common"), __webpack_require__.e("bnk-reg-special-instruction-bnk-reg-special-instruction-module")]).then(__webpack_require__.bind(null, /*! ./bnk-reg-special-instruction/bnk-reg-special-instruction.module */ "./src/app/theme/reports/registers/bnk-reg-special-instruction/bnk-reg-special-instruction.module.ts")).then(m => m.BnkRegSpecialInstructionModule)
            },
            {
                path: 'BnkRegInsurence',
                loadChildren: () => Promise.all(/*! import() | bnk-reg-insurence-bnk-reg-insurence-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("common"), __webpack_require__.e("bnk-reg-insurence-bnk-reg-insurence-module")]).then(__webpack_require__.bind(null, /*! ./bnk-reg-insurence/bnk-reg-insurence.module */ "./src/app/theme/reports/registers/bnk-reg-insurence/bnk-reg-insurence.module.ts")).then(m => m.BnkRegInsurenceModule)
            },
            {
                path: 'BnkODRegister',
                loadChildren: () => Promise.all(/*! import() | bnk-odregister-bnk-odregister-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-odregister-bnk-odregister-module")]).then(__webpack_require__.bind(null, /*! ./bnk-odregister/bnk-odregister.module */ "./src/app/theme/reports/registers/bnk-odregister/bnk-odregister.module.ts")).then(m => m.BnkODRegisterModule)
            },
            {
                path: 'BnkRegDeadStock',
                loadChildren: () => Promise.all(/*! import() | bnk-reg-dead-stock-bnk-reg-dead-stock-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-reg-dead-stock-bnk-reg-dead-stock-module")]).then(__webpack_require__.bind(null, /*! ./bnk-reg-dead-stock/bnk-reg-dead-stock.module */ "./src/app/theme/reports/registers/bnk-reg-dead-stock/bnk-reg-dead-stock.module.ts")).then(m => m.BnkRegDeadStockModule)
            },
            {
                path: 'BnkIVOpenAndCloseReg',
                loadChildren: () => Promise.all(/*! import() | bnk-ivopen-and-close-reg-bnk-ivopen-and-close-reg-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("bnk-ivopen-and-close-reg-bnk-ivopen-and-close-reg-module")]).then(__webpack_require__.bind(null, /*! ./bnk-ivopen-and-close-reg/bnk-ivopen-and-close-reg.module */ "./src/app/theme/reports/registers/bnk-ivopen-and-close-reg/bnk-ivopen-and-close-reg.module.ts")).then(m => m.BnkIVOpenAndCloseRegModule)
            },
            {
                path: 'BnkRegGoldSilverSubReturn',
                loadChildren: () => Promise.all(/*! import() | bnk-reg-gold-silver-sub-return-bnk-reg-gold-silver-sub-return-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("common"), __webpack_require__.e("bnk-reg-gold-silver-sub-return-bnk-reg-gold-silver-sub-return-module")]).then(__webpack_require__.bind(null, /*! ./bnk-reg-gold-silver-sub-return/bnk-reg-gold-silver-sub-return.module */ "./src/app/theme/reports/registers/bnk-reg-gold-silver-sub-return/bnk-reg-gold-silver-sub-return.module.ts")).then(m => m.BnkRegGoldSilverSubReturnModule)
            },
            {
                path: 'iframe3',
                loadChildren: () => __webpack_require__.e(/*! import() | iframe3-iframe3-module */ "common").then(__webpack_require__.bind(null, /*! ./iframe3/iframe3.module */ "./src/app/theme/reports/registers/iframe3/iframe3.module.ts")).then(m => m.Iframe3Module)
            },
            {
                path: 'DepositReceiptRegister',
                loadChildren: () => Promise.all(/*! import() | deposit-receipt-register-deposit-receipt-register-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("deposit-receipt-register-deposit-receipt-register-module")]).then(__webpack_require__.bind(null, /*! ./deposit-receipt-register/deposit-receipt-register.module */ "./src/app/theme/reports/registers/deposit-receipt-register/deposit-receipt-register.module.ts")).then(m => m.DepositReceiptRegisterModule)
            },
            {
                path: 'lockerRentRegister',
                loadChildren: () => Promise.all(/*! import() | locker-rent-register-locker-rent-register-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("locker-rent-register-locker-rent-register-module")]).then(__webpack_require__.bind(null, /*! ./locker-rent-register/locker-rent-register.module */ "./src/app/theme/reports/registers/locker-rent-register/locker-rent-register.module.ts")).then(m => m.LockerRentRegisterModule)
            },
            {
                path: 'lockerRegister',
                loadChildren: () => Promise.all(/*! import() | locker-register-locker-register-module */[__webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~account-enquiry-accoun~da894787"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~e8b6ac50"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~account-~f2008b51"), __webpack_require__.e("default~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-enquiry-module~all-repo~4072ad24"), __webpack_require__.e("common"), __webpack_require__.e("locker-register-locker-register-module")]).then(__webpack_require__.bind(null, /*! ./locker-register/locker-register.module */ "./src/app/theme/reports/registers/locker-register/locker-register.module.ts")).then(m => m.LockerRegisterModule)
            },
        ]
    }
];
class RegistersRoutingModule {
}
RegistersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistersRoutingModule });
RegistersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistersRoutingModule_Factory(t) { return new (t || RegistersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/registers/registers.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/reports/registers/registers.component.ts ***!
  \****************************************************************/
/*! exports provided: RegistersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistersComponent", function() { return RegistersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RegistersComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegistersComponent.ɵfac = function RegistersComponent_Factory(t) { return new (t || RegistersComponent)(); };
RegistersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistersComponent, selectors: [["app-registers"]], decls: 2, vars: 0, template: function RegistersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registers works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvcmVnaXN0ZXJzL3JlZ2lzdGVycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registers',
                templateUrl: './registers.component.html',
                styleUrls: ['./registers.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/registers/registers.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/reports/registers/registers.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistersModule", function() { return RegistersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _registers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registers.component */ "./src/app/theme/reports/registers/registers.component.ts");
/* harmony import */ var _registers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registers-routing.module */ "./src/app/theme/reports/registers/registers-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");





// import {ChartModule} from 'angular2-chartjs';



class RegistersModule {
}
RegistersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistersModule });
RegistersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistersModule_Factory(t) { return new (t || RegistersModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _registers_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegistersRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistersModule, { declarations: [_registers_component__WEBPACK_IMPORTED_MODULE_2__["RegistersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _registers_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegistersRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _registers_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegistersRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_registers_component__WEBPACK_IMPORTED_MODULE_2__["RegistersComponent"],],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=registers-registers-module.js.map