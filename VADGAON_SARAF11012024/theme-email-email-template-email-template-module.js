(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-email-email-template-email-template-module"],{

/***/ "./src/app/theme/email/email-template/email-template-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-template-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EmailTemplateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateRoutingModule", function() { return EmailTemplateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Email Template',
            status: false
        },
        children: [
            {
                path: 'email-welcome',
                loadChildren: () => __webpack_require__.e(/*! import() | email-welcome-email-welcome-module */ "email-welcome-email-welcome-module").then(__webpack_require__.bind(null, /*! ./email-welcome/email-welcome.module */ "./src/app/theme/email/email-template/email-welcome/email-welcome.module.ts")).then(m => m.EmailWelcomeModule)
            },
            {
                path: 'email-reset-password',
                loadChildren: () => __webpack_require__.e(/*! import() | email-reset-password-email-reset-password-module */ "email-reset-password-email-reset-password-module").then(__webpack_require__.bind(null, /*! ./email-reset-password/email-reset-password.module */ "./src/app/theme/email/email-template/email-reset-password/email-reset-password.module.ts")).then(m => m.EmailResetPasswordModule)
            },
            {
                path: 'email-newsletter',
                loadChildren: () => __webpack_require__.e(/*! import() | email-newsletter-email-newsletter-module */ "email-newsletter-email-newsletter-module").then(__webpack_require__.bind(null, /*! ./email-newsletter/email-newsletter.module */ "./src/app/theme/email/email-template/email-newsletter/email-newsletter.module.ts")).then(m => m.EmailNewsletterModule)
            },
            {
                path: 'app-launch',
                loadChildren: () => __webpack_require__.e(/*! import() | email-app-launch-email-app-launch-module */ "email-app-launch-email-app-launch-module").then(__webpack_require__.bind(null, /*! ./email-app-launch/email-app-launch.module */ "./src/app/theme/email/email-template/email-app-launch/email-app-launch.module.ts")).then(m => m.EmailAppLaunchModule)
            },
            {
                path: 'activation-code',
                loadChildren: () => __webpack_require__.e(/*! import() | email-active-code-email-active-code-module */ "email-active-code-email-active-code-module").then(__webpack_require__.bind(null, /*! ./email-active-code/email-active-code.module */ "./src/app/theme/email/email-template/email-active-code/email-active-code.module.ts")).then(m => m.EmailActiveCodeModule)
            }
        ]
    }
];
class EmailTemplateRoutingModule {
}
EmailTemplateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmailTemplateRoutingModule });
EmailTemplateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmailTemplateRoutingModule_Factory(t) { return new (t || EmailTemplateRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailTemplateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailTemplateRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/email/email-template/email-template.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/email/email-template/email-template.module.ts ***!
  \*********************************************************************/
/*! exports provided: EmailTemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateModule", function() { return EmailTemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _email_template_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-template-routing.module */ "./src/app/theme/email/email-template/email-template-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





class EmailTemplateModule {
}
EmailTemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmailTemplateModule });
EmailTemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmailTemplateModule_Factory(t) { return new (t || EmailTemplateModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _email_template_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmailTemplateRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailTemplateModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _email_template_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmailTemplateRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailTemplateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _email_template_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmailTemplateRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-email-email-template-email-template-module.js.map