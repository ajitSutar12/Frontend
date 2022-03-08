(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-ui-elements-basic-basic-module"],{

/***/ "./src/app/theme/ui-elements/basic/basic-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: BasicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRoutingModule", function() { return BasicRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Basic Components',
            status: false
        },
        children: [
            {
                path: 'alert',
                loadChildren: () => __webpack_require__.e(/*! import() | alert-alert-module */ "alert-alert-module").then(__webpack_require__.bind(null, /*! ./alert/alert.module */ "./src/app/theme/ui-elements/basic/alert/alert.module.ts")).then(m => m.AlertModule)
            },
            {
                path: 'breadcrumb',
                loadChildren: () => __webpack_require__.e(/*! import() | breadcrumb-breadcrumb-module */ "breadcrumb-breadcrumb-module").then(__webpack_require__.bind(null, /*! ./breadcrumb/breadcrumb.module */ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.module.ts")).then(m => m.BreadcrumbModule)
            },
            {
                path: 'button',
                loadChildren: () => __webpack_require__.e(/*! import() | button-button-module */ "button-button-module").then(__webpack_require__.bind(null, /*! ./button/button.module */ "./src/app/theme/ui-elements/basic/button/button.module.ts")).then(m => m.ButtonModule)
            },
            {
                path: 'box-shadow',
                loadChildren: () => __webpack_require__.e(/*! import() | box-shadow-box-shadow-module */ "box-shadow-box-shadow-module").then(__webpack_require__.bind(null, /*! ./box-shadow/box-shadow.module */ "./src/app/theme/ui-elements/basic/box-shadow/box-shadow.module.ts")).then(m => m.BoxShadowModule)
            },
            {
                path: 'accordion',
                loadChildren: () => __webpack_require__.e(/*! import() | accordion-accordion-module */ "accordion-accordion-module").then(__webpack_require__.bind(null, /*! ./accordion/accordion.module */ "./src/app/theme/ui-elements/basic/accordion/accordion.module.ts")).then(m => m.AccordionModule)
            },
            {
                path: 'generic-class',
                loadChildren: () => __webpack_require__.e(/*! import() | generic-class-generic-class-module */ "generic-class-generic-class-module").then(__webpack_require__.bind(null, /*! ./generic-class/generic-class.module */ "./src/app/theme/ui-elements/basic/generic-class/generic-class.module.ts")).then(m => m.GenericClassModule)
            },
            {
                path: 'progressbar',
                loadChildren: () => __webpack_require__.e(/*! import() | progressbar-progressbar-module */ "progressbar-progressbar-module").then(__webpack_require__.bind(null, /*! ./progressbar/progressbar.module */ "./src/app/theme/ui-elements/basic/progressbar/progressbar.module.ts")).then(m => m.ProgressbarModule)
            },
            {
                path: 'pre-loader',
                loadChildren: () => __webpack_require__.e(/*! import() | pre-loader-pre-loader-module */ "pre-loader-pre-loader-module").then(__webpack_require__.bind(null, /*! ./pre-loader/pre-loader.module */ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.module.ts")).then(m => m.PreLoaderModule)
            },
            {
                path: 'list',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-list-basic-list-module */ "basic-list-basic-list-module").then(__webpack_require__.bind(null, /*! ./basic-list/basic-list.module */ "./src/app/theme/ui-elements/basic/basic-list/basic-list.module.ts")).then(m => m.BasicListModule)
            },
            {
                path: 'tooltip',
                loadChildren: () => __webpack_require__.e(/*! import() | tooltip-tooltip-module */ "tooltip-tooltip-module").then(__webpack_require__.bind(null, /*! ./tooltip/tooltip.module */ "./src/app/theme/ui-elements/basic/tooltip/tooltip.module.ts")).then(m => m.TooltipModule)
            },
            {
                path: 'tabs',
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "./src/app/theme/ui-elements/basic/tabs/tabs.module.ts")).then(m => m.TabsModule)
            },
            {
                path: 'color',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-color-basic-color-module */ "basic-color-basic-color-module").then(__webpack_require__.bind(null, /*! ./basic-color/basic-color.module */ "./src/app/theme/ui-elements/basic/basic-color/basic-color.module.ts")).then(m => m.BasicColorModule)
            },
            {
                path: 'label-badge',
                loadChildren: () => __webpack_require__.e(/*! import() | label-badge-label-badge-module */ "label-badge-label-badge-module").then(__webpack_require__.bind(null, /*! ./label-badge/label-badge.module */ "./src/app/theme/ui-elements/basic/label-badge/label-badge.module.ts")).then(m => m.LabelBadgeModule)
            },
            {
                path: 'typography',
                loadChildren: () => __webpack_require__.e(/*! import() | typography-typography-module */ "typography-typography-module").then(__webpack_require__.bind(null, /*! ./typography/typography.module */ "./src/app/theme/ui-elements/basic/typography/typography.module.ts")).then(m => m.TypographyModule)
            },
            {
                path: 'other',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-other-basic-other-module */ "basic-other-basic-other-module").then(__webpack_require__.bind(null, /*! ./basic-other/basic-other.module */ "./src/app/theme/ui-elements/basic/basic-other/basic-other.module.ts")).then(m => m.BasicOtherModule)
            }
        ]
    }
];
class BasicRoutingModule {
}
BasicRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BasicRoutingModule });
BasicRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BasicRoutingModule_Factory(t) { return new (t || BasicRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic.module.ts ***!
  \*********************************************************/
/*! exports provided: BasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicModule", function() { return BasicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-routing.module */ "./src/app/theme/ui-elements/basic/basic-routing.module.ts");




class BasicModule {
}
BasicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BasicModule });
BasicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BasicModule_Factory(t) { return new (t || BasicModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicRoutingModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-ui-elements-basic-basic-module.js.map