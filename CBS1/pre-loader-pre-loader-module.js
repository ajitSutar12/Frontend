(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pre-loader-pre-loader-module"],{

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/pre-loader/pre-loader-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PreLoaderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreLoaderRoutingModule", function() { return PreLoaderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pre_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pre-loader.component */ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.ts");





const routes = [
    {
        path: '',
        component: _pre_loader_component__WEBPACK_IMPORTED_MODULE_2__["PreLoaderComponent"],
        data: {
            title: 'Pre-Loader',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - pre-loader',
            status: true
        }
    }
];
class PreLoaderRoutingModule {
}
PreLoaderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PreLoaderRoutingModule });
PreLoaderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PreLoaderRoutingModule_Factory(t) { return new (t || PreLoaderRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PreLoaderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoaderRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.ts ***!
  \****************************************************************************/
/*! exports provided: PreLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreLoaderComponent", function() { return PreLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PreLoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PreLoaderComponent.ɵfac = function PreLoaderComponent_Factory(t) { return new (t || PreLoaderComponent)(); };
PreLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreLoaderComponent, selectors: [["app-pre-loader"]], decls: 203, vars: 0, consts: [[1, "page-body"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-block"], [1, "col-xl-2", "col-md-4", "col-sm-6"], [1, "sub-title"], [1, "preloader3", "loader-block"], [1, "circ1"], [1, "circ2"], [1, "circ3"], [1, "circ4"], [1, "loader-block"], ["id", "loader2", "viewBox", "0 0 100 100"], ["id", "circle-loader2", "cx", "50", "cy", "50", "r", "45"], [1, "text-center", "loader-block"], [1, "preloader4"], [1, "double-bounce1"], [1, "double-bounce2"], [1, "cell", "preloader5", "loader-block"], [1, "circle-5", "l"], [1, "circle-5", "m"], [1, "circle-5", "r"], [1, "loader", "animation-start"], [1, "circle", "delay-1", "size-2"], [1, "circle", "delay-2", "size-4"], [1, "circle", "delay-3", "size-6"], [1, "circle", "delay-4", "size-7"], [1, "circle", "delay-5", "size-7"], [1, "circle", "delay-6", "size-6"], [1, "circle", "delay-7", "size-4"], [1, "circle", "delay-8", "size-2"], [1, "preloader6"], [1, "circ1", "loader-default"], [1, "circ2", "loader-default"], [1, "circ3", "loader-default"], [1, "circ4", "loader-default"], [1, "circ1", "loader-primary"], [1, "circ2", "loader-primary"], [1, "circ3", "loader-primary"], [1, "circ4", "loader-primary"], [1, "circ1", "loader-success"], [1, "circ2", "loader-success"], [1, "circ3", "loader-success"], [1, "circ4", "loader-success"], [1, "circ1", "loader-info"], [1, "circ2", "loader-info"], [1, "circ3", "loader-info"], [1, "circ4", "loader-info"], [1, "circ1", "loader-warning"], [1, "circ2", "loader-warning"], [1, "circ3", "loader-warning"], [1, "circ4", "loader-warning"], [1, "circ1", "loader-danger"], [1, "circ2", "loader-danger"], [1, "circ3", "loader-danger"], [1, "circ4", "loader-danger"], [1, "circ1", "loader-primary", "loader-md"], [1, "circ2", "loader-primary", "loader-md"], [1, "circ3", "loader-primary", "loader-md"], [1, "circ4", "loader-primary", "loader-md"], [1, "circ1", "loader-primary", "loader-lg"], [1, "circ2", "loader-primary", "loader-lg"], [1, "circ3", "loader-primary", "loader-lg"], [1, "circ4", "loader-primary", "loader-lg"]], template: function PreLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Loader Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Loader Style 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " preloader3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Loader Style 2(Using SVG)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " loader2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Loader Style 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " preloader4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Loader Style 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " cell preloader5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "loader animation-start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " cell preloader5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Loader Style 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " preloader6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Loader color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Loader default Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " loader-default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Loader primary Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " loader-primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Loader success Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " loader-success ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Loader info Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " loader-info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Loader warning Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " loader-warning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Loader danger Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " loader-danger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Loader Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Loader primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " loader-primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Loader medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " loader-md ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Loader large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " loader-lg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpLWVsZW1lbnRzL2Jhc2ljL3ByZS1sb2FkZXIvcHJlLWxvYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pre-loader',
                templateUrl: './pre-loader.component.html',
                styleUrls: ['./pre-loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/pre-loader/pre-loader.module.ts ***!
  \*************************************************************************/
/*! exports provided: PreLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreLoaderModule", function() { return PreLoaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pre_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pre-loader.component */ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.ts");
/* harmony import */ var _pre_loader_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pre-loader-routing.module */ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader-routing.module.ts");





class PreLoaderModule {
}
PreLoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PreLoaderModule });
PreLoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PreLoaderModule_Factory(t) { return new (t || PreLoaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pre_loader_routing_module__WEBPACK_IMPORTED_MODULE_3__["PreLoaderRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PreLoaderModule, { declarations: [_pre_loader_component__WEBPACK_IMPORTED_MODULE_2__["PreLoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pre_loader_routing_module__WEBPACK_IMPORTED_MODULE_3__["PreLoaderRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pre_loader_routing_module__WEBPACK_IMPORTED_MODULE_3__["PreLoaderRoutingModule"]
                ],
                declarations: [_pre_loader_component__WEBPACK_IMPORTED_MODULE_2__["PreLoaderComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pre-loader-pre-loader-module.js.map