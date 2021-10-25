(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-defination-user-defination-module"],{

/***/ "./src/app/theme/utility/user-defination/user-defination-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/utility/user-defination/user-defination-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: UserDefinationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDefinationRoutingModule", function() { return UserDefinationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_defination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-defination.component */ "./src/app/theme/utility/user-defination/user-defination.component.ts");





const routes = [
    {
        path: '',
        component: _user_defination_component__WEBPACK_IMPORTED_MODULE_2__["UserDefinationComponent"],
        data: {
            title: 'User Defination',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class UserDefinationRoutingModule {
}
UserDefinationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserDefinationRoutingModule });
UserDefinationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserDefinationRoutingModule_Factory(t) { return new (t || UserDefinationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserDefinationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDefinationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utility/user-defination/user-defination.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/utility/user-defination/user-defination.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserDefinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDefinationComponent", function() { return UserDefinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UserDefinationComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserDefinationComponent.ɵfac = function UserDefinationComponent_Factory(t) { return new (t || UserDefinationComponent)(); };
UserDefinationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDefinationComponent, selectors: [["app-user-defination"]], decls: 2, vars: 0, template: function UserDefinationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-defination works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdXRpbGl0eS91c2VyLWRlZmluYXRpb24vdXNlci1kZWZpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdXRpbGl0eS91c2VyLWRlZmluYXRpb24vdXNlci1kZWZpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDefinationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-defination',
                templateUrl: './user-defination.component.html',
                styleUrls: ['./user-defination.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/user-defination/user-defination.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/utility/user-defination/user-defination.module.ts ***!
  \*************************************************************************/
/*! exports provided: UserDefinationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDefinationModule", function() { return UserDefinationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_defination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-defination.component */ "./src/app/theme/utility/user-defination/user-defination.component.ts");
/* harmony import */ var _user_defination_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-defination-routing.module */ "./src/app/theme/utility/user-defination/user-defination-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class UserDefinationModule {
}
UserDefinationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserDefinationModule });
UserDefinationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserDefinationModule_Factory(t) { return new (t || UserDefinationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _user_defination_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserDefinationRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserDefinationModule, { declarations: [_user_defination_component__WEBPACK_IMPORTED_MODULE_2__["UserDefinationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _user_defination_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserDefinationRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDefinationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _user_defination_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserDefinationRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_user_defination_component__WEBPACK_IMPORTED_MODULE_2__["UserDefinationComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=user-defination-user-defination-module.js.map