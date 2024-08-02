(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-auth-auth-module"],{

/***/ "./src/app/theme/auth/auth-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/theme/auth/auth-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




// import { AuthGuard } from './auth.guard';
const routes = [
    {
        path: '',
        data: {
            title: 'Authentication',
            status: false
        },
        children: [
            {
                path: 'login',
                loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/theme/auth/login/login.module.ts")).then(m => m.LoginModule),
            },
            {
                path: 'registration',
                loadChildren: () => __webpack_require__.e(/*! import() | registration-registration-module */ "registration-registration-module").then(__webpack_require__.bind(null, /*! ./registration/registration.module */ "./src/app/theme/auth/registration/registration.module.ts")).then(m => m.RegistrationModule)
            },
            {
                path: 'resetpassword',
                loadChildren: () => __webpack_require__.e(/*! import() | resetpassword-resetpassword-module */ "resetpassword-resetpassword-module").then(__webpack_require__.bind(null, /*! ./resetpassword/resetpassword.module */ "./src/app/theme/auth/resetpassword/resetpassword.module.ts")).then(m => m.ResetpasswordModule)
            },
            {
                path: 'forgot',
                loadChildren: () => __webpack_require__.e(/*! import() | forgot-forgot-module */ "forgot-forgot-module").then(__webpack_require__.bind(null, /*! ./forgot/forgot.module */ "./src/app/theme/auth/forgot/forgot.module.ts")).then(m => m.ForgotModule)
            },
            {
                path: 'lock-screen',
                loadChildren: () => __webpack_require__.e(/*! import() | lock-screen-lock-screen-module */ "lock-screen-lock-screen-module").then(__webpack_require__.bind(null, /*! ./lock-screen/lock-screen.module */ "./src/app/theme/auth/lock-screen/lock-screen.module.ts")).then(m => m.LockScreenModule)
            },
        ]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/auth/auth.interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/auth/auth.interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: AuthInterceptorServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorServices", function() { return AuthInterceptorServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-connection-service */ "./node_modules/ng-connection-service/__ivy_ngcc__/fesm2015/ng-connection-service.js");





class AuthInterceptorServices {
    constructor(connectionService) {
        this.connectionService = connectionService;
        this.isConnected = true;
    }
    intercept(request, next) {
        this.connectionService.monitor().subscribe(isConnected => {
            this.isConnected = isConnected;
            if (this.isConnected) {
                this.noInternetConnection = false;
                const token = localStorage.getItem('token');
                if (token) {
                    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
                }
                if (!request.headers.has('Content-Type')) {
                    request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                }
                request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
                return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                        // console.log('event--->>>', event);
                    }
                    return event;
                }));
            }
            else {
                this.noInternetConnection = true;
                alert('please check internet conntion');
                return;
            }
        });
        return;
    }
}
AuthInterceptorServices.ɵfac = function AuthInterceptorServices_Factory(t) { return new (t || AuthInterceptorServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"])); };
AuthInterceptorServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptorServices, factory: AuthInterceptorServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ng_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/theme/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/theme/auth/auth-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.guard */ "./src/app/theme/auth/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.interceptor.service */ "./src/app/theme/auth/auth.interceptor.service.ts");




// import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';




class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["AuthInterceptorServices"],
            multi: true
        },
        // { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        // JwtHelperService,
        _auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: [],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["AuthInterceptorServices"],
                        multi: true
                    },
                    // { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
                    // JwtHelperService,
                    _auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-auth-auth-module.js.map