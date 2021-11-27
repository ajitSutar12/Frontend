(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lien-mark-clear-lien-mark-clear-module"],{

/***/ "./src/app/theme/master/instruction/lien-mark-clear/lien-mark-clear-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/master/instruction/lien-mark-clear/lien-mark-clear-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: LienMarkClearRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienMarkClearRoutingModule", function() { return LienMarkClearRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lien_mark_clear_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lien-mark-clear.component */ "./src/app/theme/master/instruction/lien-mark-clear/lien-mark-clear.component.ts");





const routes = [
    {
        path: '',
        component: _lien_mark_clear_component__WEBPACK_IMPORTED_MODULE_2__["LienMarkClearComponent"],
        data: {
            title: 'Lien Mark Clear',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class LienMarkClearRoutingModule {
}
LienMarkClearRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LienMarkClearRoutingModule });
LienMarkClearRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LienMarkClearRoutingModule_Factory(t) { return new (t || LienMarkClearRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LienMarkClearRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LienMarkClearRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/instruction/lien-mark-clear/lien-mark-clear.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/master/instruction/lien-mark-clear/lien-mark-clear.module.ts ***!
  \************************************************************************************/
/*! exports provided: LienMarkClearModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienMarkClearModule", function() { return LienMarkClearModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _lien_mark_clear_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lien-mark-clear-routing.module */ "./src/app/theme/master/instruction/lien-mark-clear/lien-mark-clear-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/elements/scheme1.service */ "./src/app/shared/elements/scheme1.service.ts");
/* harmony import */ var _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/elements/acountno.service */ "./src/app/shared/elements/acountno.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









class LienMarkClearModule {
}
LienMarkClearModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LienMarkClearModule });
LienMarkClearModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LienMarkClearModule_Factory(t) { return new (t || LienMarkClearModule)(); }, providers: [_shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_5__["Scheme1Service"], _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_6__["AcountnoService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _lien_mark_clear_routing_module__WEBPACK_IMPORTED_MODULE_3__["LienMarkClearRoutingModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_2__["SelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LienMarkClearModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _lien_mark_clear_routing_module__WEBPACK_IMPORTED_MODULE_3__["LienMarkClearRoutingModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_2__["SelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LienMarkClearModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _lien_mark_clear_routing_module__WEBPACK_IMPORTED_MODULE_3__["LienMarkClearRoutingModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_2__["SelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ],
                declarations: [],
                providers: [_shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_5__["Scheme1Service"], _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_6__["AcountnoService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=lien-mark-clear-lien-mark-clear-module.js.map