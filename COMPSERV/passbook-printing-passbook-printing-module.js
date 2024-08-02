(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["passbook-printing-passbook-printing-module"],{

/***/ "./src/app/theme/printing/passbook-printing/passbook-printing-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/printing/passbook-printing/passbook-printing-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: PassbookPrintingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassbookPrintingRoutingModule", function() { return PassbookPrintingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        // component: PassbookPrintingComponent,
        data: {
            title: 'Passbook Printing',
            // icon: 'icon-home',
            // caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        },
        children: [
            {
                path: 'passbookIssue',
                loadChildren: () => Promise.all(/*! import() | passbook-issue-passbook-issue-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("passbook-issue-passbook-issue-module")]).then(__webpack_require__.bind(null, /*! ./passbook-issue/passbook-issue.module */ "./src/app/theme/printing/passbook-printing/passbook-issue/passbook-issue.module.ts")).then(m => m.PassbookIssueModule)
            },
            {
                path: 'passbookEntryPrint',
                loadChildren: () => Promise.all(/*! import() | passbook-entry-print-passbook-entry-print-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("passbook-entry-print-passbook-entry-print-module")]).then(__webpack_require__.bind(null, /*! ./passbook-entry-print/passbook-entry-print.module */ "./src/app/theme/printing/passbook-printing/passbook-entry-print/passbook-entry-print.module.ts")).then(m => m.PassbookEntryPrintModule)
            },
        ]
    }
];
class PassbookPrintingRoutingModule {
}
PassbookPrintingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PassbookPrintingRoutingModule });
PassbookPrintingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PassbookPrintingRoutingModule_Factory(t) { return new (t || PassbookPrintingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PassbookPrintingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PassbookPrintingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/printing/passbook-printing/passbook-printing.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/printing/passbook-printing/passbook-printing.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PassbookPrintingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassbookPrintingComponent", function() { return PassbookPrintingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PassbookPrintingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PassbookPrintingComponent.ɵfac = function PassbookPrintingComponent_Factory(t) { return new (t || PassbookPrintingComponent)(); };
PassbookPrintingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PassbookPrintingComponent, selectors: [["app-passbook-printing"]], decls: 2, vars: 0, template: function PassbookPrintingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "passbook-printing works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3ByaW50aW5nL3Bhc3Nib29rLXByaW50aW5nL3Bhc3Nib29rLXByaW50aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PassbookPrintingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-passbook-printing',
                templateUrl: './passbook-printing.component.html',
                styleUrls: ['./passbook-printing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/printing/passbook-printing/passbook-printing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/printing/passbook-printing/passbook-printing.module.ts ***!
  \******************************************************************************/
/*! exports provided: PassbookPrintingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassbookPrintingModule", function() { return PassbookPrintingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _passbook_printing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passbook-printing.component */ "./src/app/theme/printing/passbook-printing/passbook-printing.component.ts");
/* harmony import */ var _passbook_printing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passbook-printing-routing.module */ "./src/app/theme/printing/passbook-printing/passbook-printing-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");





// import { PassbookEntryPrintComponent } from './passbook-entry-print/passbook-entry-print.component';
// import { PassbookIssueComponent } from './passbook-issue/passbook-issue.component';



class PassbookPrintingModule {
}
PassbookPrintingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PassbookPrintingModule });
PassbookPrintingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PassbookPrintingModule_Factory(t) { return new (t || PassbookPrintingModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _passbook_printing_routing_module__WEBPACK_IMPORTED_MODULE_3__["PassbookPrintingRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PassbookPrintingModule, { declarations: [_passbook_printing_component__WEBPACK_IMPORTED_MODULE_2__["PassbookPrintingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _passbook_printing_routing_module__WEBPACK_IMPORTED_MODULE_3__["PassbookPrintingRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PassbookPrintingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _passbook_printing_routing_module__WEBPACK_IMPORTED_MODULE_3__["PassbookPrintingRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_passbook_printing_component__WEBPACK_IMPORTED_MODULE_2__["PassbookPrintingComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=passbook-printing-passbook-printing-module.js.map