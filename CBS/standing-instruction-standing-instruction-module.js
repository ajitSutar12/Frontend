(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["standing-instruction-standing-instruction-module"],{

/***/ "./src/app/theme/master/instruction/standing-instruction/standing-instruction-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/theme/master/instruction/standing-instruction/standing-instruction-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: StandingInstructionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingInstructionRoutingModule", function() { return StandingInstructionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _standing_instruction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standing-instruction.component */ "./src/app/theme/master/instruction/standing-instruction/standing-instruction.component.ts");





const routes = [
    {
        path: '',
        component: _standing_instruction_component__WEBPACK_IMPORTED_MODULE_2__["StandingInstructionComponent"],
        data: {
            title: 'Standing Instruction',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class StandingInstructionRoutingModule {
}
StandingInstructionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StandingInstructionRoutingModule });
StandingInstructionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StandingInstructionRoutingModule_Factory(t) { return new (t || StandingInstructionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StandingInstructionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StandingInstructionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/instruction/standing-instruction/standing-instruction.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/master/instruction/standing-instruction/standing-instruction.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: StandingInstructionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingInstructionModule", function() { return StandingInstructionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _standing_instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standing-instruction-routing.module */ "./src/app/theme/master/instruction/standing-instruction/standing-instruction-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/elements/scheme1.service */ "./src/app/shared/elements/scheme1.service.ts");
/* harmony import */ var _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/elements/acountno.service */ "./src/app/shared/elements/acountno.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class StandingInstructionModule {
}
StandingInstructionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StandingInstructionModule });
StandingInstructionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StandingInstructionModule_Factory(t) { return new (t || StandingInstructionModule)(); }, providers: [_shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__["Scheme1Service"], _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_7__["AcountnoService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
            _standing_instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__["StandingInstructionRoutingModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_4__["SelectModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StandingInstructionModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
        _standing_instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__["StandingInstructionRoutingModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_4__["SelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StandingInstructionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                    _standing_instruction_routing_module__WEBPACK_IMPORTED_MODULE_2__["StandingInstructionRoutingModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_4__["SelectModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                declarations: [],
                providers: [_shared_elements_scheme1_service__WEBPACK_IMPORTED_MODULE_6__["Scheme1Service"], _shared_elements_acountno_service__WEBPACK_IMPORTED_MODULE_7__["AcountnoService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=standing-instruction-standing-instruction-module.js.map