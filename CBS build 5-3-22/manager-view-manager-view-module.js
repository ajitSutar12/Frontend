(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manager-view-manager-view-module"],{

/***/ "./src/app/theme/view/manager-view/manager-view-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/view/manager-view/manager-view-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ManagerViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerViewRoutingModule", function() { return ManagerViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manager_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manager-view.component */ "./src/app/theme/view/manager-view/manager-view.component.ts");





const routes = [
    {
        path: '',
        component: _manager_view_component__WEBPACK_IMPORTED_MODULE_2__["ManagerViewComponent"],
        data: {
            title: 'Manager View',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class ManagerViewRoutingModule {
}
ManagerViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManagerViewRoutingModule });
ManagerViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManagerViewRoutingModule_Factory(t) { return new (t || ManagerViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManagerViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/view/manager-view/manager-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/view/manager-view/manager-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManagerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerViewComponent", function() { return ManagerViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ManagerViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManagerViewComponent.ɵfac = function ManagerViewComponent_Factory(t) { return new (t || ManagerViewComponent)(); };
ManagerViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagerViewComponent, selectors: [["app-manager-view"]], decls: 2, vars: 0, template: function ManagerViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "manager-view works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdmlldy9tYW5hZ2VyLXZpZXcvbWFuYWdlci12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdmlldy9tYW5hZ2VyLXZpZXcvbWFuYWdlci12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manager-view',
                templateUrl: './manager-view.component.html',
                styleUrls: ['./manager-view.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/view/manager-view/manager-view.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/view/manager-view/manager-view.module.ts ***!
  \****************************************************************/
/*! exports provided: ManagerViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerViewModule", function() { return ManagerViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _manager_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manager-view.component */ "./src/app/theme/view/manager-view/manager-view.component.ts");
/* harmony import */ var _manager_view_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager-view-routing.module */ "./src/app/theme/view/manager-view/manager-view-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");








class ManagerViewModule {
}
ManagerViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManagerViewModule });
ManagerViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManagerViewModule_Factory(t) { return new (t || ManagerViewModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _manager_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagerViewRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManagerViewModule, { declarations: [_manager_view_component__WEBPACK_IMPORTED_MODULE_2__["ManagerViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _manager_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagerViewRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _manager_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagerViewRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_manager_view_component__WEBPACK_IMPORTED_MODULE_2__["ManagerViewComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=manager-view-manager-view-module.js.map