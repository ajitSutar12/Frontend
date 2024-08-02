(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-email-email-module"],{

/***/ "./src/app/theme/email/email-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/email/email-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EmailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailRoutingModule", function() { return EmailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Email',
            status: false
        },
        children: [
            {
                path: 'email-compose',
                loadChildren: () => Promise.all(/*! import() | email-compose-email-compose-module */[__webpack_require__.e("default~email-compose-email-compose-module~ext-tinymce-ext-tinymce-module~user-profile-user-profile-module"), __webpack_require__.e("email-compose-email-compose-module")]).then(__webpack_require__.bind(null, /*! ./email-compose/email-compose.module */ "./src/app/theme/email/email-compose/email-compose.module.ts")).then(m => m.EmailComposeModule)
            },
            {
                path: 'email-inbox',
                loadChildren: () => __webpack_require__.e(/*! import() | email-inbox-email-inbox-module */ "email-inbox-email-inbox-module").then(__webpack_require__.bind(null, /*! ./email-inbox/email-inbox.module */ "./src/app/theme/email/email-inbox/email-inbox.module.ts")).then(m => m.EmailInboxModule)
            },
            {
                path: 'email-read',
                loadChildren: () => __webpack_require__.e(/*! import() | email-read-email-read-module */ "email-read-email-read-module").then(__webpack_require__.bind(null, /*! ./email-read/email-read.module */ "./src/app/theme/email/email-read/email-read.module.ts")).then(m => m.EmailReadModule)
            }
        ]
    }
];
class EmailRoutingModule {
}
EmailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmailRoutingModule });
EmailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmailRoutingModule_Factory(t) { return new (t || EmailRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/email/email.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/email/email.module.ts ***!
  \*********************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-routing.module */ "./src/app/theme/email/email-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");





class EmailModule {
}
EmailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmailModule });
EmailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmailModule_Factory(t) { return new (t || EmailModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _email_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmailRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _email_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmailRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _email_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmailRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-email-email-module.js.map