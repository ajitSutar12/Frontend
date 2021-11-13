(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-simple-page-simple-page-module"],{

/***/ "./src/app/theme/simple-page/simple-page-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SimplePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageRoutingModule", function() { return SimplePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _simple_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-page.component */ "./src/app/theme/simple-page/simple-page.component.ts");





const routes = [
    {
        path: '',
        component: _simple_page_component__WEBPACK_IMPORTED_MODULE_2__["SimplePageComponent"],
        data: {
            title: 'Sample Page',
            icon: 'icon-layout-sidebar-left',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
            status: true
        }
    }
];
class SimplePageRoutingModule {
}
SimplePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SimplePageRoutingModule });
SimplePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SimplePageRoutingModule_Factory(t) { return new (t || SimplePageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimplePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimplePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page.component.ts ***!
  \************************************************************/
/*! exports provided: SimplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageComponent", function() { return SimplePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SimplePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SimplePageComponent.ɵfac = function SimplePageComponent_Factory(t) { return new (t || SimplePageComponent)(); };
SimplePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimplePageComponent, selectors: [["app-simple-page"]], decls: 0, vars: 0, template: function SimplePageComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NpbXBsZS1wYWdlL3NpbXBsZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimplePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simple-page',
                templateUrl: './simple-page.component.html',
                styleUrls: ['./simple-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page.module.ts ***!
  \*********************************************************/
/*! exports provided: SimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageModule", function() { return SimplePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _simple_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-page.component */ "./src/app/theme/simple-page/simple-page.component.ts");
/* harmony import */ var _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-page-routing.module */ "./src/app/theme/simple-page/simple-page-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class SimplePageModule {
}
SimplePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SimplePageModule });
SimplePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SimplePageModule_Factory(t) { return new (t || SimplePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["SimplePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimplePageModule, { declarations: [_simple_page_component__WEBPACK_IMPORTED_MODULE_2__["SimplePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["SimplePageRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimplePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["SimplePageRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_simple_page_component__WEBPACK_IMPORTED_MODULE_2__["SimplePageComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-simple-page-simple-page-module.js.map