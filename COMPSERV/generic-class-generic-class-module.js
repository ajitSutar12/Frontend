(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generic-class-generic-class-module"],{

/***/ "./src/app/theme/ui-elements/basic/generic-class/generic-class-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/generic-class/generic-class-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: GenericClassRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericClassRoutingModule", function() { return GenericClassRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _generic_class_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generic-class.component */ "./src/app/theme/ui-elements/basic/generic-class/generic-class.component.ts");





const routes = [
    {
        path: '',
        component: _generic_class_component__WEBPACK_IMPORTED_MODULE_2__["GenericClassComponent"],
        data: {
            title: 'Generic Class',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - generic class',
            status: true
        }
    }
];
class GenericClassRoutingModule {
}
GenericClassRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GenericClassRoutingModule });
GenericClassRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GenericClassRoutingModule_Factory(t) { return new (t || GenericClassRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GenericClassRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericClassRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/ui-elements/basic/generic-class/generic-class.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/generic-class/generic-class.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GenericClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericClassComponent", function() { return GenericClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





function GenericClassComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Margin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".m-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".m-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".m-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".m-15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".m-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".m-25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ".m-30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".m-40");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".m-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Margin Top ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ".m-t-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ".m-t-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ".m-t-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ".m-t-15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ".m-t-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ".m-t-25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ".m-t-30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ".m-t-40");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ".m-t-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Margin Bottom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ".m-b-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ".m-b-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ".m-b-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ".m-b-15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ".m-b-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ".m-b-25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ".m-b-30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ".m-b-40");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ".m-b-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Margin Left ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ".m-l-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ".m-l-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, ".m-l-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, ".m-l-15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ".m-l-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ".m-l-25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, ".m-l-30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, ".m-l-40");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ".m-l-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Margin right ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, ".m-r-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, ".m-r-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "code", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ".m-r-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, ".m-r-15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, ".m-r-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "code", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, ".m-r-25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, ".m-r-30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "code", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, ".m-r-40");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, ".m-r-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function GenericClassComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Padding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".p-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".p-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".p-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".p-15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".p-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".p-25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ".p-30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".p-40");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".p-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Padding Top ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ".p-t-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ".p-t-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ".p-t-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ".p-t-15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ".p-t-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ".p-t-25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ".p-t-30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ".p-t-40");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ".p-t-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Padding Bottom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ".p-b-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ".p-b-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ".p-b-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ".p-b-15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ".p-b-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ".p-b-25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ".p-b-30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ".p-b-40");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ".p-b-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Padding Left ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ".p-l-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ".p-l-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, ".p-l-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, ".p-l-15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ".p-l-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ".p-l-25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, ".p-l-30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, ".p-l-40");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ".p-l-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Padding right ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, ".p-r-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, ".p-r-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "code", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ".p-r-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, ".p-r-15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, ".p-r-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "code", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, ".p-r-25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, ".p-r-30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "code", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, ".p-r-40");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, ".p-r-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function GenericClassComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Font-size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".f-12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".f-14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".f-16");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".f-18");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".f-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".f-24");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ".f-26");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".f-28");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".f-30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ".f-35");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ".f-40");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ".f-45");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ".f-52");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ".f-64");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Font-Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ".f-w-100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ".f-w-300");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ".f-w-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ".f-w-600");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ".f-w-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ".f-w-900");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Font-Style ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ".f-s-normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ".f-s-italic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ".f-s-oblique");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ".f-s-intial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ".f-s-inherit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function GenericClassComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Text-align ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".text-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".text-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Text-transform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".text-uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ".text-lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".text-capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Text-decoration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ".text-overline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ".text-through");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ".text-underline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Vertical-align ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ".baseline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ".sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ".super");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ".top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ".text-top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ".middle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ".bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ".text-bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ".initial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ".inherit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function GenericClassComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".pos-static");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".pos-absolute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".pos-relative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".pos-fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".pos-intial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".pos-inherit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function GenericClassComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Float ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".f-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".f-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".f-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function GenericClassComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Overflow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".o-hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".o-auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".o-visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function GenericClassComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Background color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".color-default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".color-primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".color-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".color-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ".color-warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".color-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ".color-inverse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function GenericClassComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Text color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".text-default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".text-primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".text-muted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".text-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".text-warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ".text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".text-inverse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
function GenericClassComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Image Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".img-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".img-30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".img-40");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".img-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ".img-60");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ".img-70");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ".img-80");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ".img-90");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ".img-100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutTranslate", undefined);
} }
class GenericClassComponent {
    constructor() { }
    ngOnInit() {
    }
}
GenericClassComponent.ɵfac = function GenericClassComponent_Factory(t) { return new (t || GenericClassComponent)(); };
GenericClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenericClassComponent, selectors: [["app-generic-class"]], decls: 40, vars: 7, consts: [[1, "row"], [1, "col-md-12", "col-lg-6"], [3, "cardClass"], [1, "md-tabs"], ["title", "Margin"], ["ngbTabContent", ""], ["title", "Padding"], [3, "cardClass", "cardOptionBlock"], ["title", "Font"], ["title", "Alignment"], ["title", "Position"], ["title", "Float"], ["title", "Overflow"], [1, "col-sm-12"], ["title", "BackGround-color"], ["title", "Text-color"], [3, "cardClass", "blockClass"], ["title", "Image size"], [1, "m-t-15"], [1, "sub-title"], ["placement", "top", "ngbTooltip", "margin-0", "ngbTooltip", "margin-0"], ["placement", "top", "ngbTooltip", "margin-5"], ["placement", "top", "ngbTooltip", "margin-10"], ["placement", "top", "ngbTooltip", "margin-15"], ["placement", "top", "ngbTooltip", "margin-20"], ["placement", "top", "ngbTooltip", "margin-25"], ["placement", "top", "ngbTooltip", "margin-30"], ["placement", "top", "ngbTooltip", "margin-40"], ["placement", "top", "ngbTooltip", "margin-50"], ["placement", "top", "ngbTooltip", "margin-top-0"], ["placement", "top", "ngbTooltip", "margin-top-5"], ["placement", "top", "ngbTooltip", "margin-top-10"], ["placement", "top", "ngbTooltip", "margin-top-15"], ["placement", "top", "ngbTooltip", "margin-top-20"], ["placement", "top", "ngbTooltip", "margin-top-25"], ["placement", "top", "ngbTooltip", "margin-top-30"], ["placement", "top", "ngbTooltip", "margin-top-40"], ["placement", "top", "ngbTooltip", "margin-top-50"], ["placement", "top", "ngbTooltip", "margin-bottom-0"], ["placement", "top", "ngbTooltip", "margin-bottom-5"], ["placement", "top", "ngbTooltip", "margin-bottom-10"], ["placement", "top", "ngbTooltip", "margin-bottom-15"], ["placement", "top", "ngbTooltip", "margin-bottom-20"], ["placement", "top", "ngbTooltip", "margin-bottom-25"], ["placement", "top", "ngbTooltip", "margin-bottom-30"], ["placement", "top", "ngbTooltip", "margin-bottom-40"], ["placement", "top", "ngbTooltip", "margin-bottom-50"], ["placement", "top", "ngbTooltip", "margin-left-0"], ["placement", "top", "ngbTooltip", "margin-left-5"], ["placement", "top", "ngbTooltip", "margin-left-10"], ["placement", "top", "ngbTooltip", "margin-left-15"], ["placement", "top", "ngbTooltip", "margin-left-20"], ["placement", "top", "ngbTooltip", "margin-left-25"], ["placement", "top", "ngbTooltip", "margin-left-30"], ["placement", "top", "ngbTooltip", "margin-left-40"], ["placement", "top", "ngbTooltip", "margin-left-50"], ["placement", "top", "ngbTooltip", "margin-right-0"], ["placement", "top", "ngbTooltip", "margin-right-5"], ["placement", "top", "ngbTooltip", "margin-right-10"], ["placement", "top", "ngbTooltip", "margin-right-15"], ["placement", "top", "ngbTooltip", "margin-right-20"], ["placement", "top", "ngbTooltip", "margin-right-25"], ["placement", "top", "ngbTooltip", "margin-right-30"], ["placement", "top", "ngbTooltip", "margin-right-40"], ["placement", "top", "ngbTooltip", "margin-right-50"], ["placement", "top", "ngbTooltip", "padding-0"], ["placement", "top", "ngbTooltip", "padding-5"], ["placement", "top", "ngbTooltip", "padding-10"], ["placement", "top", "ngbTooltip", "padding-15"], ["placement", "top", "ngbTooltip", "padding-20"], ["placement", "top", "ngbTooltip", "padding-25"], ["placement", "top", "ngbTooltip", "padding-30"], ["placement", "top", "ngbTooltip", "padding-40"], ["placement", "top", "ngbTooltip", "padding-50"], ["placement", "top", "ngbTooltip", "padding-top-0"], ["placement", "top", "ngbTooltip", "padding-top-5"], ["placement", "top", "ngbTooltip", "padding-top-10"], ["placement", "top", "ngbTooltip", "padding-top-15"], ["placement", "top", "ngbTooltip", "padding-top-20"], ["placement", "top", "ngbTooltip", "padding-top-25"], ["placement", "top", "ngbTooltip", "padding-top-30"], ["placement", "top", "ngbTooltip", "padding-top-40"], ["placement", "top", "ngbTooltip", "padding-top-50"], ["placement", "top", "ngbTooltip", "padding-bottom-0"], ["placement", "top", "ngbTooltip", "padding-bottom-5"], ["placement", "top", "ngbTooltip", "padding-bottom-10"], ["placement", "top", "ngbTooltip", "padding-bottom-15"], ["placement", "top", "ngbTooltip", "padding-bottom-20"], ["placement", "top", "ngbTooltip", "padding-bottom-25"], ["placement", "top", "ngbTooltip", "padding-bottom-30"], ["placement", "top", "ngbTooltip", "padding-bottom-40"], ["placement", "top", "ngbTooltip", "padding-bottom-50"], ["placement", "top", "ngbTooltip", "padding-left-0"], ["placement", "top", "ngbTooltip", "padding-left-5"], ["placement", "top", "ngbTooltip", "padding-left-10"], ["placement", "top", "ngbTooltip", "padding-left-15"], ["placement", "top", "ngbTooltip", "padding-left-20"], ["placement", "top", "ngbTooltip", "padding-left-25"], ["placement", "top", "ngbTooltip", "padding-left-30"], ["placement", "top", "ngbTooltip", "padding-left-40"], ["placement", "top", "ngbTooltip", "padding-left-50"], ["placement", "top", "ngbTooltip", "padding-right-0"], ["placement", "top", "ngbTooltip", "padding-right-5"], ["placement", "top", "ngbTooltip", "padding-right-10"], ["placement", "top", "ngbTooltip", "padding-right-15"], ["placement", "top", "ngbTooltip", "padding-right-20"], ["placement", "top", "ngbTooltip", "padding-right-25"], ["placement", "top", "ngbTooltip", "padding-right-30"], ["placement", "top", "ngbTooltip", "padding-right-40"], ["placement", "top", "ngbTooltip", "padding-right-50"], ["placement", "top", "ngbTooltip", "font-size-12"], ["placement", "top", "ngbTooltip", "font-size-14"], ["placement", "top", "ngbTooltip", "font-size-16"], ["placement", "top", "ngbTooltip", "font-size-18"], ["placement", "top", "ngbTooltip", "font-size-20"], ["placement", "top", "ngbTooltip", "font-size-24"], ["placement", "top", "ngbTooltip", "font-size-26"], ["placement", "top", "ngbTooltip", "font-size-28"], ["placement", "top", "ngbTooltip", "font-size-30"], ["placement", "top", "ngbTooltip", "font-size-35"], ["placement", "top", "ngbTooltip", "font-size-40"], ["placement", "top", "ngbTooltip", "font-size-45"], ["placement", "top", "ngbTooltip", "font-size-52"], ["placement", "top", "ngbTooltip", "font-size-64"], ["placement", "top", "ngbTooltip", "font-weight-100"], ["placement", "top", "ngbTooltip", "font-weight-300"], ["placement", "top", "ngbTooltip", "font-weight-400"], ["placement", "top", "ngbTooltip", "font-weight-600"], ["placement", "top", "ngbTooltip", "font-weight-700"], ["placement", "top", "ngbTooltip", "font-weight-900"], ["placement", "top", "ngbTooltip", "font-normal"], ["placement", "top", "ngbTooltip", "font-italic"], ["placement", "top", "ngbTooltip", "font-oblique"], ["placement", "top", "ngbTooltip", "font-intial"], ["placement", "top", "ngbTooltip", "font-inherit"], ["placement", "top", "ngbTooltip", "Center-Text"], ["placement", "top", "ngbTooltip", "Left-Text"], ["placement", "top", "ngbTooltip", "Right-Text"], ["placement", "top", "ngbTooltip", "All Capital Text"], ["placement", "top", "ngbTooltip", "Lower case Text"], ["placement", "top", "ngbTooltip", "Capitalize Text"], ["placement", "top", "ngbTooltip", "Overline"], ["placement", "top", "ngbTooltip", "Line-Throught Text"], ["placement", "top", "ngbTooltip", "Underline"], ["placement", "top", "ngbTooltip", "Baseline"], ["placement", "top", "ngbTooltip", "Sub"], ["placement", "top", "ngbTooltip", "Super"], ["placement", "top", "ngbTooltip", "Top"], ["placement", "top", "ngbTooltip", "Text Top"], ["placement", "top", "ngbTooltip", "Middle"], ["placement", "top", "ngbTooltip", "Bottom"], ["placement", "top", "ngbTooltip", "Text Bottom"], ["placement", "top", "ngbTooltip", "Initial"], ["placement", "top", "ngbTooltip", "Inherit"], ["placement", "top", "ngbTooltip", "Static"], ["placement", "top", "ngbTooltip", "Absolute"], ["placement", "top", "ngbTooltip", "Relative"], ["placement", "top", "ngbTooltip", "Fixed"], ["placement", "top", "ngbTooltip", "Intial"], ["placement", "top", "ngbTooltip", "FLoat-left"], ["placement", "top", "ngbTooltip", "Float-right"], ["placement", "top", "ngbTooltip", "Float-none"], ["placement", "top", "ngbTooltip", "Overflow Hidden"], ["placement", "top", "ngbTooltip", "Overflow Auto"], ["placement", "top", "ngbTooltip", "Overflow Visible"], ["placement", "top", "ngbTooltip", "color-default", 1, "bg-color-box", "color-default", "waves-effect", "waves-light"], ["placement", "top", "ngbTooltip", "color-primary", 1, "bg-color-box", "color-primary", "waves-effect", "waves-light"], ["placement", "top", "ngbTooltip", "color-success", 1, "bg-color-box", "color-success", "waves-effect", "waves-light"], ["placement", "top", "ngbTooltip", "color-info", 1, "bg-color-box", "color-info", "waves-effect", "waves-light"], ["placement", "top", "ngbTooltip", "color-warning", 1, "bg-color-box", "color-warning", "waves-effect", "waves-light"], ["placement", "top", "ngbTooltip", "color-danger", 1, "bg-color-box", "color-danger", "waves-effect", "waves-light"], ["placement", "top", "ngbTooltip", "color-inverse", 1, "bg-color-box", "color-inverse", "waves-effect", "waves-light"], ["placement", "top", "ngbTooltip", "sub-title", 1, "sub-title"], ["placement", "top", "ngbTooltip", "text-default", 1, "text-default"], ["placement", "top", "ngbTooltip", "text-primary", 1, "text-primary"], ["placement", "top", "ngbTooltip", "text-muted", 1, "text-muted"], ["placement", "top", "ngbTooltip", "text-success", 1, "text-success"], ["placement", "top", "ngbTooltip", "text-info", 1, "text-info"], ["placement", "top", "ngbTooltip", "text-warning", 1, "text-warning"], ["placement", "top", "ngbTooltip", "text-danger", 1, "text-danger"], ["placement", "top", "ngbTooltip", "text-inverse", 1, "text-inverse"], ["placement", "top", "ngbTooltip", "img-20"], ["src", "assets/images/avatar-4.jpg", "alt", "avatar-4.jpg", 1, "img-20"], ["placement", "top", "ngbTooltip", "img-30"], ["src", "assets/images/avatar-4.jpg", "alt", "avatar-4.jpg", 1, "img-30"], ["placement", "top", "ngbTooltip", "img-40"], ["src", "assets/images/avatar-4.jpg", "alt", "avatar-4.jpg", 1, "img-40"], ["placement", "top", "ngbTooltip", "img-50"], ["src", "assets/images/avatar-4.jpg", "alt", "avatar-4.jpg", 1, "img-50"], ["placement", "top", "ngbTooltip", "img-60"], ["src", "assets/images/avatar-4.jpg", "alt", "avatar-4.jpg", 1, "img-60"], ["placement", "top", "ngbTooltip", "img-70"], ["src", "assets/images/avatar-4.jpg", "alt", "avatar-4.jpg", 1, "img-70"], ["placement", "top", "ngbTooltip", "img-80"], ["src", "assets/images/avatar-4.jpg", "alt", "avatar-4.jpg", 1, "img-80"], ["placement", "top", "ngbTooltip", "img-90"], ["src", "assets/images/avatar-4.jpg", "alt", "avatar-4.jpg", 1, "img-90"], ["placement", "top", "ngbTooltip", "img-100"], ["src", "assets/images/avatar-4.jpg", "alt", "avatar-4.jpg", 1, "img-100"]], template: function GenericClassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngb-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GenericClassComponent_ng_template_6_Template, 109, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngb-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GenericClassComponent_ng_template_8_Template, 109, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngb-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngb-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GenericClassComponent_ng_template_14_Template, 61, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngb-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GenericClassComponent_ng_template_16_Template, 53, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngb-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngb-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GenericClassComponent_ng_template_21_Template, 15, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngb-tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GenericClassComponent_ng_template_23_Template, 9, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngb-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GenericClassComponent_ng_template_25_Template, 9, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngb-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, GenericClassComponent_ng_template_31_Template, 24, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ngb-tab", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GenericClassComponent_ng_template_33_Template, 19, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "app-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ngb-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngb-tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, GenericClassComponent_ng_template_39_Template, 40, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardClass", "tab-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardClass", "tab-card")("cardOptionBlock", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardClass", "tab-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardClass", "tab-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardClass", "tab-card")("blockClass", "generic-image-body");
    } }, directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpLWVsZW1lbnRzL2Jhc2ljL2dlbmVyaWMtY2xhc3MvZ2VuZXJpYy1jbGFzcy5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOutTranslate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericClassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-generic-class',
                templateUrl: './generic-class.component.html',
                styleUrls: ['./generic-class.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOutTranslate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/ui-elements/basic/generic-class/generic-class.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/generic-class/generic-class.module.ts ***!
  \*******************************************************************************/
/*! exports provided: GenericClassModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericClassModule", function() { return GenericClassModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _generic_class_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generic-class.component */ "./src/app/theme/ui-elements/basic/generic-class/generic-class.component.ts");
/* harmony import */ var _generic_class_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic-class-routing.module */ "./src/app/theme/ui-elements/basic/generic-class/generic-class-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class GenericClassModule {
}
GenericClassModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GenericClassModule });
GenericClassModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GenericClassModule_Factory(t) { return new (t || GenericClassModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _generic_class_routing_module__WEBPACK_IMPORTED_MODULE_3__["GenericClassRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GenericClassModule, { declarations: [_generic_class_component__WEBPACK_IMPORTED_MODULE_2__["GenericClassComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _generic_class_routing_module__WEBPACK_IMPORTED_MODULE_3__["GenericClassRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericClassModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _generic_class_routing_module__WEBPACK_IMPORTED_MODULE_3__["GenericClassRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_generic_class_component__WEBPACK_IMPORTED_MODULE_2__["GenericClassComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=generic-class-generic-class-module.js.map