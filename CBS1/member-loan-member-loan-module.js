(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["member-loan-member-loan-module"],{

/***/ "./src/app/theme/transaction/member-loan/member-loan-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/transaction/member-loan/member-loan-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MemberLoanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberLoanRoutingModule", function() { return MemberLoanRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Memeber Loan',
            status: false
        },
        children: [
            {
                path: 'loanApplication',
                loadChildren: () => Promise.all(/*! import() | loan-application-loan-application-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("loan-application-loan-application-module")]).then(__webpack_require__.bind(null, /*! ./loan-application/loan-application.module */ "./src/app/theme/transaction/member-loan/loan-application/loan-application.module.ts")).then(m => m.LoanApplicationModule)
            },
            {
                path: 'loanSanction',
                loadChildren: () => Promise.all(/*! import() | loan-sanction-loan-sanction-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~d038ec0a"), __webpack_require__.e("loan-sanction-loan-sanction-module")]).then(__webpack_require__.bind(null, /*! ./loan-sanction/loan-sanction.module */ "./src/app/theme/transaction/member-loan/loan-sanction/loan-sanction.module.ts")).then(m => m.LoanSanctionnModule)
            },
        ]
    }
];
class MemberLoanRoutingModule {
}
MemberLoanRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MemberLoanRoutingModule });
MemberLoanRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MemberLoanRoutingModule_Factory(t) { return new (t || MemberLoanRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MemberLoanRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberLoanRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/member-loan/member-loan.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/transaction/member-loan/member-loan.component.ts ***!
  \************************************************************************/
/*! exports provided: MemberLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberLoanComponent", function() { return MemberLoanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MemberLoanComponent {
    constructor() { }
    ngOnInit() {
    }
}
MemberLoanComponent.ɵfac = function MemberLoanComponent_Factory(t) { return new (t || MemberLoanComponent)(); };
MemberLoanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberLoanComponent, selectors: [["app-member-loan"]], decls: 2, vars: 0, template: function MemberLoanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "member-loan works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RyYW5zYWN0aW9uL21lbWJlci1sb2FuL21lbWJlci1sb2FuLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberLoanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-member-loan',
                templateUrl: './member-loan.component.html',
                styleUrls: ['./member-loan.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/member-loan/member-loan.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/transaction/member-loan/member-loan.module.ts ***!
  \*********************************************************************/
/*! exports provided: MemberLoanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberLoanModule", function() { return MemberLoanModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _member_loan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-loan.component */ "./src/app/theme/transaction/member-loan/member-loan.component.ts");
/* harmony import */ var _member_loan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member-loan-routing.module */ "./src/app/theme/transaction/member-loan/member-loan-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");








class MemberLoanModule {
}
MemberLoanModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MemberLoanModule });
MemberLoanModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MemberLoanModule_Factory(t) { return new (t || MemberLoanModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _member_loan_routing_module__WEBPACK_IMPORTED_MODULE_3__["MemberLoanRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MemberLoanModule, { declarations: [_member_loan_component__WEBPACK_IMPORTED_MODULE_2__["MemberLoanComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _member_loan_routing_module__WEBPACK_IMPORTED_MODULE_3__["MemberLoanRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberLoanModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _member_loan_routing_module__WEBPACK_IMPORTED_MODULE_3__["MemberLoanRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_member_loan_component__WEBPACK_IMPORTED_MODULE_2__["MemberLoanComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=member-loan-member-loan-module.js.map