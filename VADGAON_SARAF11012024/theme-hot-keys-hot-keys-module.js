(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-hot-keys-hot-keys-module"],{

/***/ "./src/app/theme/hot-keys/hot-keys-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/hot-keys/hot-keys-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: HotKeysRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotKeysRoutingModule", function() { return HotKeysRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hot_keys_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hot-keys.component */ "./src/app/theme/hot-keys/hot-keys.component.ts");





const routes = [
    {
        path: '',
        component: _hot_keys_component__WEBPACK_IMPORTED_MODULE_2__["HotKeysComponent"],
        data: {
            title: 'Hot Key',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class HotKeysRoutingModule {
}
HotKeysRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HotKeysRoutingModule });
HotKeysRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HotKeysRoutingModule_Factory(t) { return new (t || HotKeysRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HotKeysRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotKeysRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/hot-keys/hot-keys.module.ts":
/*!***************************************************!*\
  !*** ./src/app/theme/hot-keys/hot-keys.module.ts ***!
  \***************************************************/
/*! exports provided: HotkeysModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotkeysModule", function() { return HotkeysModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _hot_keys_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hot-keys-routing.module */ "./src/app/theme/hot-keys/hot-keys-routing.module.ts");





class HotkeysModule {
}
HotkeysModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HotkeysModule });
HotkeysModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HotkeysModule_Factory(t) { return new (t || HotkeysModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _hot_keys_routing_module__WEBPACK_IMPORTED_MODULE_3__["HotKeysRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HotkeysModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _hot_keys_routing_module__WEBPACK_IMPORTED_MODULE_3__["HotKeysRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotkeysModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _hot_keys_routing_module__WEBPACK_IMPORTED_MODULE_3__["HotKeysRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTablesModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-hot-keys-hot-keys-module.js.map