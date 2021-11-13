(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["freeze-account-freeze-account-module"],{

/***/ "./src/app/theme/master/instruction/freeze-account/freeze-account-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/master/instruction/freeze-account/freeze-account-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: FreezeAccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreezeAccountRoutingModule", function() { return FreezeAccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _freeze_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./freeze-account.component */ "./src/app/theme/master/instruction/freeze-account/freeze-account.component.ts");





const routes = [
    {
        path: '',
        component: _freeze_account_component__WEBPACK_IMPORTED_MODULE_2__["FreezeAccountComponent"],
        data: {
            title: 'Freeze Account',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class FreezeAccountRoutingModule {
}
FreezeAccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FreezeAccountRoutingModule });
FreezeAccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FreezeAccountRoutingModule_Factory(t) { return new (t || FreezeAccountRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FreezeAccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FreezeAccountRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/instruction/freeze-account/freeze-account.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/master/instruction/freeze-account/freeze-account.module.ts ***!
  \**********************************************************************************/
/*! exports provided: FreezeAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreezeAccountModule", function() { return FreezeAccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _freeze_account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./freeze-account-routing.module */ "./src/app/theme/master/instruction/freeze-account/freeze-account-routing.module.ts");
/* harmony import */ var _shared_elements_freeze_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/elements/freeze-account.service */ "./src/app/shared/elements/freeze-account.service.ts");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/elements/scheme1.service */ "./src/app/shared/elements/scheme1.service.ts");
/* harmony import */ var _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/elements/acountno.service */ "./src/app/shared/elements/acountno.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class FreezeAccountModule {
}
FreezeAccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FreezeAccountModule });
FreezeAccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FreezeAccountModule_Factory(t) { return new (t || FreezeAccountModule)(); }, providers: [_shared_elements_freeze_account_service__WEBPACK_IMPORTED_MODULE_3__["freezeAccountService"], _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__["Scheme1Service"], _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_7__["AcountnoService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_4__["SelectModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            _freeze_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["FreezeAccountRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FreezeAccountModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_4__["SelectModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        _freeze_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["FreezeAccountRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FreezeAccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_4__["SelectModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    _freeze_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["FreezeAccountRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                declarations: [],
                providers: [_shared_elements_freeze_account_service__WEBPACK_IMPORTED_MODULE_3__["freezeAccountService"], _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__["Scheme1Service"], _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_7__["AcountnoService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=freeze-account-freeze-account-module.js.map