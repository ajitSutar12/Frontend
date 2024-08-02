(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-exit-exit-module"],{

/***/ "./src/app/theme/exit/exit-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/theme/exit/exit-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ExitRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitRoutingModule", function() { return ExitRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _exit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exit.component */ "./src/app/theme/exit/exit.component.ts");





const routes = [
    {
        path: '',
        component: _exit_component__WEBPACK_IMPORTED_MODULE_2__["ExitComponent"]
        // children: [
        //   {
        //     path: '',
        //     redirectTo: '/auth/login/simple',
        //     pathMatch: 'full'
        //   },
        // ]
    }
];
class ExitRoutingModule {
}
ExitRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExitRoutingModule });
ExitRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExitRoutingModule_Factory(t) { return new (t || ExitRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExitRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExitRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/exit/exit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/theme/exit/exit.component.ts ***!
  \**********************************************/
/*! exports provided: ExitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitComponent", function() { return ExitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/auth/auth.service */ "./src/app/theme/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ExitComponent {
    constructor(_authService, router) {
        this._authService = _authService;
        this.router = router;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
        console.log('test');
    }
    ngOnInit() {
        this.router.navigate(['/auth/login/simple']);
        let user = JSON.parse(localStorage.getItem('user'));
        this._authService.logout(user.id).subscribe(data => {
        });
        let userData = localStorage.getItem('user');
        let result = JSON.parse(userData);
        let obj = {
            USERID: result.id,
            BRANCH_CODE: result.branchId,
            REMARK: null
        };
        this._authService.LOGOFFHISTORY(obj).subscribe(data => { });
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}
ExitComponent.ɵfac = function ExitComponent_Factory(t) { return new (t || ExitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ExitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExitComponent, selectors: [["app-exit"]], decls: 0, vars: 0, template: function ExitComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exit',
                template: ''
                // templateUrl: './exit.component.html',
                // styleUrls: ['./exit.component.scss']
            }]
    }], function () { return [{ type: _theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/exit/exit.module.ts":
/*!*******************************************!*\
  !*** ./src/app/theme/exit/exit.module.ts ***!
  \*******************************************/
/*! exports provided: ExitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitModule", function() { return ExitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _exit_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exit-routing.module */ "./src/app/theme/exit/exit-routing.module.ts");
/* harmony import */ var _exit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exit.component */ "./src/app/theme/exit/exit.component.ts");
/* harmony import */ var _theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/auth/auth.service */ "./src/app/theme/auth/auth.service.ts");






class ExitModule {
}
ExitModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExitModule });
ExitModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExitModule_Factory(t) { return new (t || ExitModule)(); }, providers: [_theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _exit_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExitRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExitModule, { declarations: [_exit_component__WEBPACK_IMPORTED_MODULE_3__["ExitComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _exit_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExitRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExitModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_exit_component__WEBPACK_IMPORTED_MODULE_3__["ExitComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _exit_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExitRoutingModule"]
                ],
                providers: [_theme_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-exit-exit-module.js.map