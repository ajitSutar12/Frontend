(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advance-widget-advance-widget-module"],{

/***/ "./src/app/theme/widget/advance-widget/advance-widget-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/widget/advance-widget/advance-widget-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AdvanceWidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceWidgetRoutingModule", function() { return AdvanceWidgetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _advance_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advance-widget.component */ "./src/app/theme/widget/advance-widget/advance-widget.component.ts");





const routes = [
    {
        path: '',
        component: _advance_widget_component__WEBPACK_IMPORTED_MODULE_2__["AdvanceWidgetComponent"],
        data: {
            title: 'Advance Widget',
            icon: 'icon-view-grid',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class AdvanceWidgetRoutingModule {
}
AdvanceWidgetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdvanceWidgetRoutingModule });
AdvanceWidgetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdvanceWidgetRoutingModule_Factory(t) { return new (t || AdvanceWidgetRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvanceWidgetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvanceWidgetRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/widget/advance-widget/advance-widget.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/widget/advance-widget/advance-widget.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdvanceWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceWidgetComponent", function() { return AdvanceWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/card/card.component */ "./src/app/shared/card/card.component.ts");



class AdvanceWidgetComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdvanceWidgetComponent.ɵfac = function AdvanceWidgetComponent_Factory(t) { return new (t || AdvanceWidgetComponent)(); };
AdvanceWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvanceWidgetComponent, selectors: [["app-advance-widget"]], decls: 6, vars: 1, consts: [[1, "page-body"], [1, "row"], [1, "col-sm-12"], [3, "title"]], template: function AdvanceWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Coming Soon");
    } }, directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3dpZGdldC9hZHZhbmNlLXdpZGdldC9hZHZhbmNlLXdpZGdldC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvanceWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-advance-widget',
                templateUrl: './advance-widget.component.html',
                styleUrls: ['./advance-widget.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/widget/advance-widget/advance-widget.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/widget/advance-widget/advance-widget.module.ts ***!
  \**********************************************************************/
/*! exports provided: AdvanceWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceWidgetModule", function() { return AdvanceWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _advance_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advance-widget.component */ "./src/app/theme/widget/advance-widget/advance-widget.component.ts");
/* harmony import */ var _advance_widget_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advance-widget-routing.module */ "./src/app/theme/widget/advance-widget/advance-widget-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class AdvanceWidgetModule {
}
AdvanceWidgetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdvanceWidgetModule });
AdvanceWidgetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdvanceWidgetModule_Factory(t) { return new (t || AdvanceWidgetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _advance_widget_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdvanceWidgetRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvanceWidgetModule, { declarations: [_advance_widget_component__WEBPACK_IMPORTED_MODULE_2__["AdvanceWidgetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _advance_widget_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdvanceWidgetRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvanceWidgetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _advance_widget_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdvanceWidgetRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_advance_widget_component__WEBPACK_IMPORTED_MODULE_2__["AdvanceWidgetComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=advance-widget-advance-widget-module.js.map