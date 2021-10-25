(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["revoke-interest-instruction-revoke-interest-instruction-module"],{

/***/ "./src/app/theme/master/instruction/revoke-interest-instruction/revoke-interest-instruction-routing.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/theme/master/instruction/revoke-interest-instruction/revoke-interest-instruction-routing.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: RevokeInterestInstructionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevokeInterestInstructionRoutingModule", function() { return RevokeInterestInstructionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _revoke_interest_instruction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./revoke-interest-instruction.component */ "./src/app/theme/master/instruction/revoke-interest-instruction/revoke-interest-instruction.component.ts");





const routes = [
    {
        path: '',
        component: _revoke_interest_instruction_component__WEBPACK_IMPORTED_MODULE_2__["RevokeInterestInstructionComponent"],
        data: {
            title: 'Revoke Interest Instruction',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class RevokeInterestInstructionRoutingModule {
}
RevokeInterestInstructionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RevokeInterestInstructionRoutingModule });
RevokeInterestInstructionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RevokeInterestInstructionRoutingModule_Factory(t) { return new (t || RevokeInterestInstructionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RevokeInterestInstructionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevokeInterestInstructionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/instruction/revoke-interest-instruction/revoke-interest-instruction.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/theme/master/instruction/revoke-interest-instruction/revoke-interest-instruction.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: RevokeInterestInstructionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevokeInterestInstructionModule", function() { return RevokeInterestInstructionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _revoke_interest_instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./revoke-interest-instruction-routing.module */ "./src/app/theme/master/instruction/revoke-interest-instruction/revoke-interest-instruction-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _shared_elements_revoke_interest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/elements/revoke-interest.service */ "./src/app/shared/elements/revoke-interest.service.ts");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/elements/scheme1.service */ "./src/app/shared/elements/scheme1.service.ts");
/* harmony import */ var _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/elements/acountno.service */ "./src/app/shared/elements/acountno.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class RevokeInterestInstructionModule {
}
RevokeInterestInstructionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RevokeInterestInstructionModule });
RevokeInterestInstructionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RevokeInterestInstructionModule_Factory(t) { return new (t || RevokeInterestInstructionModule)(); }, providers: [_shared_elements_revoke_interest_service__WEBPACK_IMPORTED_MODULE_4__["revokeInterestService"], _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__["Scheme1Service"], _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_7__["AcountnoService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_5__["SelectModule"],
            _revoke_interest_instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__["RevokeInterestInstructionRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RevokeInterestInstructionModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_5__["SelectModule"],
        _revoke_interest_instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__["RevokeInterestInstructionRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevokeInterestInstructionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_5__["SelectModule"],
                    _revoke_interest_instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__["RevokeInterestInstructionRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                declarations: [],
                providers: [_shared_elements_revoke_interest_service__WEBPACK_IMPORTED_MODULE_4__["revokeInterestService"], _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__["Scheme1Service"], _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_7__["AcountnoService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=revoke-interest-instruction-revoke-interest-instruction-module.js.map