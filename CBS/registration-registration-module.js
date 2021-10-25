(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "./src/app/theme/auth/registration/registration-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/auth/registration/registration-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Registration',
            status: false
        },
        children: [
            {
                path: 'simple',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-reg-basic-reg-module */ "basic-reg-basic-reg-module").then(__webpack_require__.bind(null, /*! ./basic-reg/basic-reg.module */ "./src/app/theme/auth/registration/basic-reg/basic-reg.module.ts")).then(m => m.BasicRegModule)
            },
            {
                path: 'header-footer',
                loadChildren: () => __webpack_require__.e(/*! import() | header-footer-reg-header-footer-reg-module */ "header-footer-reg-header-footer-reg-module").then(__webpack_require__.bind(null, /*! ./header-footer-reg/header-footer-reg.module */ "./src/app/theme/auth/registration/header-footer-reg/header-footer-reg.module.ts")).then(m => m.HeaderFooterRegModule)
            },
            {
                path: 'social',
                loadChildren: () => __webpack_require__.e(/*! import() | social-reg-social-reg-module */ "social-reg-social-reg-module").then(__webpack_require__.bind(null, /*! ./social-reg/social-reg.module */ "./src/app/theme/auth/registration/social-reg/social-reg.module.ts")).then(m => m.SocialRegModule)
            },
            {
                path: 'social-header-footer',
                loadChildren: () => __webpack_require__.e(/*! import() | social-header-footer-reg-social-header-footer-reg-module */ "social-header-footer-reg-social-header-footer-reg-module").then(__webpack_require__.bind(null, /*! ./social-header-footer-reg/social-header-footer-reg.module */ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.module.ts")).then(m => m.SocialHeaderFooterRegModule)
            }
        ]
    }
];
class RegistrationRoutingModule {
}
RegistrationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistrationRoutingModule });
RegistrationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistrationRoutingModule_Factory(t) { return new (t || RegistrationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/auth/registration/registration.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/auth/registration/registration.module.ts ***!
  \****************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/theme/auth/registration/registration-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");





class RegistrationModule {
}
RegistrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistrationModule });
RegistrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistrationModule_Factory(t) { return new (t || RegistrationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrationRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrationRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrationRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=registration-registration-module.js.map