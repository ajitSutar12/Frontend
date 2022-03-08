(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-list-basic-list-module"],{

/***/ "./src/app/theme/ui-elements/basic/basic-list/basic-list-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-list/basic-list-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: BasicListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicListRoutingModule", function() { return BasicListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _basic_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-list.component */ "./src/app/theme/ui-elements/basic/basic-list/basic-list.component.ts");





const routes = [
    {
        path: '',
        component: _basic_list_component__WEBPACK_IMPORTED_MODULE_2__["BasicListComponent"],
        data: {
            title: 'List',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - list',
            status: true
        }
    }
];
class BasicListRoutingModule {
}
BasicListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BasicListRoutingModule });
BasicListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BasicListRoutingModule_Factory(t) { return new (t || BasicListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-list/basic-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-list/basic-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: BasicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicListComponent", function() { return BasicListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BasicListComponent {
    constructor() { }
    ngOnInit() {
    }
}
BasicListComponent.ɵfac = function BasicListComponent_Factory(t) { return new (t || BasicListComponent)(); };
BasicListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicListComponent, selectors: [["app-basic-list"]], decls: 155, vars: 0, consts: [[1, "page-body"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "row", "card-block"], [1, "col-md-12"], [1, "list-view"], [1, "card", "list-view-media"], [1, "card-block"], [1, "media"], ["href", "javascript:", 1, "media-left", "ripple", "light"], ["src", "assets/images/avatar-1.jpg", "alt", "Generic placeholder image", 1, "media-object", "card-list-img"], [1, "media-body"], [1, "col-xs-12"], [1, "d-inline-block"], [1, "label", "label-info"], [1, "f-13", "text-muted", "m-b-15"], [1, "m-t-15"], ["type", "button", "data-toggle", "tooltip", "title", "Facebook", 1, "btn", "btn-facebook", "btn-mini", "ripple", "light"], [1, "icofont", "icofont-social-facebook"], ["type", "button", "data-toggle", "tooltip", "title", "Twitter", 1, "btn", "btn-twitter", "btn-mini", "ripple", "light"], [1, "icofont", "icofont-social-twitter"], ["type", "button", "data-toggle", "tooltip", "title", "Linkedin", 1, "btn", "btn-linkedin", "btn-mini", "ripple", "light"], [1, "icofont", "icofont-brand-linkedin"], ["type", "button", "data-toggle", "tooltip", "title", "Drible", 1, "btn", "btn-dribbble", "btn-mini", "ripple", "light"], [1, "icofont", "icofont-social-dribble"], [1, ""], ["src", "assets/images/avatar-2.jpg", "alt", "Generic placeholder image", 1, "media-object", "card-list-img"], ["src", "assets/images/avatar-3.jpg", "alt", "Generic placeholder image", 1, "media-object", "card-list-img"], [1, "col-md-12", "col-lg-4"], [1, "sub-title"], [1, "basic-list"], [1, "basic-list", "list-icons"], [1, "icofont", "icofont-speech-comments", "text-primary", "p-absolute", "text-center", "d-block", "f-30"], [1, "icofont", "icofont-warning", "text-primary", "p-absolute", "text-center", "d-block", "f-30"], [1, "icofont", "icofont-bell-alt", "text-primary", "p-absolute", "text-center", "d-block", "f-30"], [1, "basic-list", "list-icons-img"], ["src", "assets/images/avatar-1.jpg", "alt", "", 1, "img-fluid", "p-absolute", "d-block", "text-center"], ["src", "assets/images/avatar-2.jpg", "alt", "", 1, "img-fluid", "p-absolute", "d-block", "text-center"], ["src", "assets/images/avatar-3.jpg", "alt", "", 1, "img-fluid", "p-absolute", "d-block", "text-center"]], template: function BasicListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "List view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Software Engineer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hi, This is my short intro text. Lorem ipsum is a dummy content sit dollar. You can copy and paste this dummy content from anywhere and to anywhere. Its all free and must be a good to folllow in prectice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Accountant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Softwear Engineer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Hi, This is my short intro text. Lorem ipsum is a dummy content sit dollar. You can copy and paste this dummy content from anywhere and to anywhere. Its all free and must be a good to folllow in prectice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Accountant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Softwear Engineer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Hi, This is my short intro text. Lorem ipsum is a dummy content sit dollar. You can copy and paste this dummy content from anywhere and to anywhere. Its all free and must be a good to folllow in prectice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "List type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Text list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Laborum nihil aliquam nulla praesentium illo libero nihil at odio maxime.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Laborum nihil aliquam nulla praesentium illo libero nihil at odio maxime.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Laborum nihil aliquam nulla praesentium illo libero nihil at odio maxime.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Text with Icon Lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Laborum nihil aliquam nulla praesentium illo libero nihil at odio maxime.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Laborum nihil aliquam nulla praesentium illo libero nihil at odio maxime.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Laborum nihil aliquam nulla praesentium illo libero nihil at odio maxime.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Text with images Lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "ul", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Laborum nihil aliquam nulla praesentium illo libero nihil at odio maxime.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Laborum nihil aliquam nulla praesentium illo libero nihil at odio maxime.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Laborum nihil aliquam nulla praesentium illo libero nihil at odio maxime.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpLWVsZW1lbnRzL2Jhc2ljL2Jhc2ljLWxpc3QvYmFzaWMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basic-list',
                templateUrl: './basic-list.component.html',
                styleUrls: [
                    './basic-list.component.scss'
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-list/basic-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-list/basic-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: BasicListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicListModule", function() { return BasicListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _basic_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-list.component */ "./src/app/theme/ui-elements/basic/basic-list/basic-list.component.ts");
/* harmony import */ var _basic_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-list-routing.module */ "./src/app/theme/ui-elements/basic/basic-list/basic-list-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class BasicListModule {
}
BasicListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BasicListModule });
BasicListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BasicListModule_Factory(t) { return new (t || BasicListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _basic_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicListRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicListModule, { declarations: [_basic_list_component__WEBPACK_IMPORTED_MODULE_2__["BasicListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _basic_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicListRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _basic_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicListRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_basic_list_component__WEBPACK_IMPORTED_MODULE_2__["BasicListComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=basic-list-basic-list-module.js.map