(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ext-tinymce-ext-tinymce-module"],{

/***/ "./src/app/theme/extension/editor/ext-tinymce/ext-tinymce-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/extension/editor/ext-tinymce/ext-tinymce-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ExtTinymceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtTinymceRoutingModule", function() { return ExtTinymceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ext_tinymce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ext-tinymce.component */ "./src/app/theme/extension/editor/ext-tinymce/ext-tinymce.component.ts");





const routes = [
    {
        path: '',
        component: _ext_tinymce_component__WEBPACK_IMPORTED_MODULE_2__["ExtTinymceComponent"],
        data: {
            title: 'TinyMca Editor',
            icon: 'icon-edit',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - tinymce editor',
            status: true
        }
    }
];
class ExtTinymceRoutingModule {
}
ExtTinymceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExtTinymceRoutingModule });
ExtTinymceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExtTinymceRoutingModule_Factory(t) { return new (t || ExtTinymceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExtTinymceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtTinymceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/extension/editor/ext-tinymce/ext-tinymce.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/extension/editor/ext-tinymce/ext-tinymce.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExtTinymceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtTinymceComponent", function() { return ExtTinymceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/tinymce/tinymce.min.js */ "./node_modules/tinymce/tinymce.min.js");
/* harmony import */ var _node_modules_tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var angular2_tinymce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-tinymce */ "./node_modules/angular2-tinymce/__ivy_ngcc__/fesm2015/angular2-tinymce.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class ExtTinymceComponent {
    constructor() { }
    ngOnInit() {
        this.basicContent = '<p>Hello...</p>';
    }
}
ExtTinymceComponent.ɵfac = function ExtTinymceComponent_Factory(t) { return new (t || ExtTinymceComponent)(); };
ExtTinymceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExtTinymceComponent, selectors: [["app-ext-tinymce"]], decls: 5, vars: 1, consts: [[1, "row"], [1, "col-sm-12"], ["title", "Tinymce Editor"], [3, "ngModel", "ngModelChange"], ["tinymce", "tinymce"]], template: function ExtTinymceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-tinymce", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExtTinymceComponent_Template_app_tinymce_ngModelChange_3_listener($event) { return ctx.basicContent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.basicContent);
    } }, directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], angular2_tinymce__WEBPACK_IMPORTED_MODULE_3__["TinymceComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2V4dGVuc2lvbi9lZGl0b3IvZXh0LXRpbnltY2UvZXh0LXRpbnltY2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtTinymceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ext-tinymce',
                templateUrl: './ext-tinymce.component.html',
                styleUrls: ['./ext-tinymce.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/extension/editor/ext-tinymce/ext-tinymce.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/extension/editor/ext-tinymce/ext-tinymce.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExtTinymceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtTinymceModule", function() { return ExtTinymceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ext_tinymce_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ext-tinymce-routing.module */ "./src/app/theme/extension/editor/ext-tinymce/ext-tinymce-routing.module.ts");
/* harmony import */ var _ext_tinymce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ext-tinymce.component */ "./src/app/theme/extension/editor/ext-tinymce/ext-tinymce.component.ts");
/* harmony import */ var angular2_tinymce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-tinymce */ "./node_modules/angular2-tinymce/__ivy_ngcc__/fesm2015/angular2-tinymce.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class ExtTinymceModule {
}
ExtTinymceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExtTinymceModule });
ExtTinymceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExtTinymceModule_Factory(t) { return new (t || ExtTinymceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ext_tinymce_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExtTinymceRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular2_tinymce__WEBPACK_IMPORTED_MODULE_4__["TinymceModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExtTinymceModule, { declarations: [_ext_tinymce_component__WEBPACK_IMPORTED_MODULE_3__["ExtTinymceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ext_tinymce_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExtTinymceRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        angular2_tinymce__WEBPACK_IMPORTED_MODULE_4__["TinymceModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtTinymceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ext_tinymce_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExtTinymceRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    angular2_tinymce__WEBPACK_IMPORTED_MODULE_4__["TinymceModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                ],
                declarations: [_ext_tinymce_component__WEBPACK_IMPORTED_MODULE_3__["ExtTinymceComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=ext-tinymce-ext-tinymce-module.js.map