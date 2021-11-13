(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["revoke-special-instruction-revoke-special-instruction-module"],{

/***/ "./src/app/theme/master/instruction/revoke-special-instruction/revoke-special-instruction-routing.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/theme/master/instruction/revoke-special-instruction/revoke-special-instruction-routing.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: RevokeSpecialInstructionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevokeSpecialInstructionRoutingModule", function() { return RevokeSpecialInstructionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _revoke_special_instruction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./revoke-special-instruction.component */ "./src/app/theme/master/instruction/revoke-special-instruction/revoke-special-instruction.component.ts");





const routes = [
    {
        path: '',
        component: _revoke_special_instruction_component__WEBPACK_IMPORTED_MODULE_2__["RevokeSpecialInstructionComponent"],
        data: {
            title: 'Revoke Special Instruction',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class RevokeSpecialInstructionRoutingModule {
}
RevokeSpecialInstructionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RevokeSpecialInstructionRoutingModule });
RevokeSpecialInstructionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RevokeSpecialInstructionRoutingModule_Factory(t) { return new (t || RevokeSpecialInstructionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RevokeSpecialInstructionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevokeSpecialInstructionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/instruction/revoke-special-instruction/revoke-special-instruction.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/theme/master/instruction/revoke-special-instruction/revoke-special-instruction.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RevokeSpecialInstructionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevokeSpecialInstructionModule", function() { return RevokeSpecialInstructionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _revoke_special_instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./revoke-special-instruction-routing.module */ "./src/app/theme/master/instruction/revoke-special-instruction/revoke-special-instruction-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _shared_elements_revoke_special_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/elements/revoke-special.service */ "./src/app/shared/elements/revoke-special.service.ts");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/elements/scheme1.service */ "./src/app/shared/elements/scheme1.service.ts");
/* harmony import */ var _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/elements/acountno.service */ "./src/app/shared/elements/acountno.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class RevokeSpecialInstructionModule {
}
RevokeSpecialInstructionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RevokeSpecialInstructionModule });
RevokeSpecialInstructionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RevokeSpecialInstructionModule_Factory(t) { return new (t || RevokeSpecialInstructionModule)(); }, providers: [_shared_elements_revoke_special_service__WEBPACK_IMPORTED_MODULE_4__["revokeSpecialService"], _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__["Scheme1Service"], _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_7__["AcountnoService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_5__["SelectModule"],
            _revoke_special_instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__["RevokeSpecialInstructionRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RevokeSpecialInstructionModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_5__["SelectModule"],
        _revoke_special_instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__["RevokeSpecialInstructionRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevokeSpecialInstructionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_5__["SelectModule"],
                    _revoke_special_instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__["RevokeSpecialInstructionRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                declarations: [],
                providers: [_shared_elements_revoke_special_service__WEBPACK_IMPORTED_MODULE_4__["revokeSpecialService"], _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__["Scheme1Service"], _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_7__["AcountnoService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=revoke-special-instruction-revoke-special-instruction-module.js.map