(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["role-defination-role-defination-module"],{

/***/ "./src/app/theme/utility/role-defination/role-defination-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/utility/role-defination/role-defination-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: RoleDefinatioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDefinatioRoutingModule", function() { return RoleDefinatioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _role_defination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-defination.component */ "./src/app/theme/utility/role-defination/role-defination.component.ts");





const routes = [
    {
        path: '',
        component: _role_defination_component__WEBPACK_IMPORTED_MODULE_2__["RoleDefinationComponent"],
        data: {
            title: 'Role Defination',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class RoleDefinatioRoutingModule {
}
RoleDefinatioRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoleDefinatioRoutingModule });
RoleDefinatioRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoleDefinatioRoutingModule_Factory(t) { return new (t || RoleDefinatioRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleDefinatioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleDefinatioRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/utility/role-defination/role-defination.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/utility/role-defination/role-defination.component.ts ***!
  \****************************************************************************/
/*! exports provided: RoleDefinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDefinationComponent", function() { return RoleDefinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RoleDefinationComponent {
    constructor() { }
    ngOnInit() {
    }
}
RoleDefinationComponent.ɵfac = function RoleDefinationComponent_Factory(t) { return new (t || RoleDefinationComponent)(); };
RoleDefinationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleDefinationComponent, selectors: [["app-role-defination"]], decls: 2, vars: 0, template: function RoleDefinationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "role-defination works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdXRpbGl0eS9yb2xlLWRlZmluYXRpb24vcm9sZS1kZWZpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvdXRpbGl0eS9yb2xlLWRlZmluYXRpb24vcm9sZS1kZWZpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleDefinationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-role-defination',
                templateUrl: './role-defination.component.html',
                styleUrls: ['./role-defination.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/utility/role-defination/role-defination.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/utility/role-defination/role-defination.module.ts ***!
  \*************************************************************************/
/*! exports provided: RoleDefinationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDefinationModule", function() { return RoleDefinationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _role_defination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-defination.component */ "./src/app/theme/utility/role-defination/role-defination.component.ts");
/* harmony import */ var _role_defination_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-defination-routing.module */ "./src/app/theme/utility/role-defination/role-defination-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class RoleDefinationModule {
}
RoleDefinationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoleDefinationModule });
RoleDefinationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoleDefinationModule_Factory(t) { return new (t || RoleDefinationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _role_defination_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoleDefinatioRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleDefinationModule, { declarations: [_role_defination_component__WEBPACK_IMPORTED_MODULE_2__["RoleDefinationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _role_defination_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoleDefinatioRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleDefinationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _role_defination_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoleDefinatioRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_role_defination_component__WEBPACK_IMPORTED_MODULE_2__["RoleDefinationComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=role-defination-role-defination-module.js.map