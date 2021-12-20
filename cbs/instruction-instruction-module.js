(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["instruction-instruction-module"],{

/***/ "./src/app/theme/master/instruction/instruction-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/master/instruction/instruction-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: InstructionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionRoutingModule", function() { return InstructionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




// import {InstructionComponent} from './instruction.component';
const routes = [
    {
        path: '',
        // component: InstructionComponent,
        data: {
            title: 'Instruction',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        },
        children: [
            {
                path: 'overDraft',
                loadChildren: () => Promise.all(/*! import() | over-draft-over-draft-module */[__webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~2f043d06"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~1bb213db"), __webpack_require__.e("over-draft-over-draft-module")]).then(__webpack_require__.bind(null, /*! ./over-draft/over-draft.module */ "./src/app/theme/master/instruction/over-draft/over-draft.module.ts")).then(m => m.OverDraftModule)
            },
            {
                path: 'standingInstruction',
<<<<<<< Updated upstream
                loadChildren: () => __webpack_require__.e(/*! import() | standing-instruction-standing-instruction-module */ "standing-instruction-standing-instruction-module").then(__webpack_require__.bind(null, /*! ./standing-instruction/standing-instruction.module */ "./src/app/theme/master/instruction/standing-instruction/standing-instruction.module.ts")).then(m => m.StandingInstructionModule)
=======
                loadChildren: () => Promise.all(/*! import() | standing-instruction-standing-instruction-module */[__webpack_require__.e("common"), __webpack_require__.e("standing-instruction-standing-instruction-module")]).then(__webpack_require__.bind(null, /*! ./standing-instruction/standing-instruction.module */ "./src/app/theme/master/instruction/standing-instruction/standing-instruction.module.ts")).then(m => m.StandingInstructionModule)
>>>>>>> Stashed changes
            },
            {
                path: 'interestInstruction',
                loadChildren: () => Promise.all(/*! import() | interest-instruction-interest-instruction-module */[__webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~2f043d06"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~1bb213db"), __webpack_require__.e("default~interest-instruction-interest-instruction-module~term-deposits-master-term-deposits-master-module"), __webpack_require__.e("interest-instruction-interest-instruction-module")]).then(__webpack_require__.bind(null, /*! ./interest-instruction/interest-instruction.module */ "./src/app/theme/master/instruction/interest-instruction/interest-instruction.module.ts")).then(m => m.InterestInstructionModule)
            },
            {
                path: 'special',
                loadChildren: () => Promise.all(/*! import() | special-special-module */[__webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~2f043d06"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~1bb213db"), __webpack_require__.e("special-special-module")]).then(__webpack_require__.bind(null, /*! ./special/special.module */ "./src/app/theme/master/instruction/special/special.module.ts")).then(m => m.SpecialModule)
            },
            {
                path: 'freezeAccount',
                loadChildren: () => Promise.all(/*! import() | freeze-account-freeze-account-module */[__webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~2f043d06"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~1bb213db"), __webpack_require__.e("freeze-account-freeze-account-module")]).then(__webpack_require__.bind(null, /*! ./freeze-account/freeze-account.module */ "./src/app/theme/master/instruction/freeze-account/freeze-account.module.ts")).then(m => m.FreezeAccountModule)
            },
            {
                path: 'reminderInstruction',
                loadChildren: () => __webpack_require__.e(/*! import() | reminder-instruction-reminder-instruction-module */ "reminder-instruction-reminder-instruction-module").then(__webpack_require__.bind(null, /*! ./reminder-instruction/reminder-instruction.module */ "./src/app/theme/master/instruction/reminder-instruction/reminder-instruction.module.ts")).then(m => m.ReminderInstructionModule)
            },
            {
                path: 'revokeStandingInstructions',
<<<<<<< Updated upstream
                loadChildren: () => __webpack_require__.e(/*! import() | revoke-standing-instructions-revoke-standing-instructions-module */ "revoke-standing-instructions-revoke-standing-instructions-module").then(__webpack_require__.bind(null, /*! ./revoke-standing-instructions/revoke-standing-instructions.module */ "./src/app/theme/master/instruction/revoke-standing-instructions/revoke-standing-instructions.module.ts")).then(m => m.RevokeStandingInstructionsModule)
            },
            {
                path: 'revokeInterestInstruction',
                loadChildren: () => __webpack_require__.e(/*! import() | revoke-interest-instruction-revoke-interest-instruction-module */ "revoke-interest-instruction-revoke-interest-instruction-module").then(__webpack_require__.bind(null, /*! ./revoke-interest-instruction/revoke-interest-instruction.module */ "./src/app/theme/master/instruction/revoke-interest-instruction/revoke-interest-instruction.module.ts")).then(m => m.RevokeInterestInstructionModule)
            },
            {
                path: 'revokeSpecialInstruction',
                loadChildren: () => __webpack_require__.e(/*! import() | revoke-special-instruction-revoke-special-instruction-module */ "revoke-special-instruction-revoke-special-instruction-module").then(__webpack_require__.bind(null, /*! ./revoke-special-instruction/revoke-special-instruction.module */ "./src/app/theme/master/instruction/revoke-special-instruction/revoke-special-instruction.module.ts")).then(m => m.RevokeSpecialInstructionModule)
=======
                loadChildren: () => Promise.all(/*! import() | revoke-standing-instructions-revoke-standing-instructions-module */[__webpack_require__.e("common"), __webpack_require__.e("revoke-standing-instructions-revoke-standing-instructions-module")]).then(__webpack_require__.bind(null, /*! ./revoke-standing-instructions/revoke-standing-instructions.module */ "./src/app/theme/master/instruction/revoke-standing-instructions/revoke-standing-instructions.module.ts")).then(m => m.RevokeStandingInstructionsModule)
            },
            {
                path: 'revokeInterestInstruction',
                loadChildren: () => Promise.all(/*! import() | revoke-interest-instruction-revoke-interest-instruction-module */[__webpack_require__.e("common"), __webpack_require__.e("revoke-interest-instruction-revoke-interest-instruction-module")]).then(__webpack_require__.bind(null, /*! ./revoke-interest-instruction/revoke-interest-instruction.module */ "./src/app/theme/master/instruction/revoke-interest-instruction/revoke-interest-instruction.module.ts")).then(m => m.RevokeInterestInstructionModule)
            },
            {
                path: 'revokeSpecialInstruction',
                loadChildren: () => Promise.all(/*! import() | revoke-special-instruction-revoke-special-instruction-module */[__webpack_require__.e("common"), __webpack_require__.e("revoke-special-instruction-revoke-special-instruction-module")]).then(__webpack_require__.bind(null, /*! ./revoke-special-instruction/revoke-special-instruction.module */ "./src/app/theme/master/instruction/revoke-special-instruction/revoke-special-instruction.module.ts")).then(m => m.RevokeSpecialInstructionModule)
>>>>>>> Stashed changes
            },
            {
                path: 'lienMarkClear',
                loadChildren: () => Promise.all(/*! import() | lien-mark-clear-lien-mark-clear-module */[__webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~2f043d06"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~1bb213db"), __webpack_require__.e("lien-mark-clear-lien-mark-clear-module")]).then(__webpack_require__.bind(null, /*! ./lien-mark-clear/lien-mark-clear.module */ "./src/app/theme/master/instruction/lien-mark-clear/lien-mark-clear.module.ts")).then(m => m.LienMarkClearModule)
            },
        ]
    }
];
class InstructionRoutingModule {
}
InstructionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InstructionRoutingModule });
InstructionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InstructionRoutingModule_Factory(t) { return new (t || InstructionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InstructionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/instruction/instruction.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/master/instruction/instruction.component.ts ***!
  \*******************************************************************/
/*! exports provided: InstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionComponent", function() { return InstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InstructionComponent {
    constructor() { }
    ngOnInit() {
    }
}
InstructionComponent.ɵfac = function InstructionComponent_Factory(t) { return new (t || InstructionComponent)(); };
InstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructionComponent, selectors: [["app-instruction"]], decls: 2, vars: 0, template: function InstructionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "instruction works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9pbnN0cnVjdGlvbi9pbnN0cnVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instruction',
                templateUrl: './instruction.component.html',
                styleUrls: ['./instruction.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/instruction/instruction.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/master/instruction/instruction.module.ts ***!
  \****************************************************************/
/*! exports provided: InstructionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionModule", function() { return InstructionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _instruction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instruction.component */ "./src/app/theme/master/instruction/instruction.component.ts");
/* harmony import */ var _instruction_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instruction-routing.module */ "./src/app/theme/master/instruction/instruction-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_elements_select_option_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/elements/select-option.service */ "./src/app/shared/elements/select-option.service.ts");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");












class InstructionModule {
}
InstructionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InstructionModule });
InstructionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InstructionModule_Factory(t) { return new (t || InstructionModule)(); }, providers: [_shared_elements_select_option_service__WEBPACK_IMPORTED_MODULE_5__["SelectOptionService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["UserAuthInterceptor"],
            multi: true
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _instruction_routing_module__WEBPACK_IMPORTED_MODULE_3__["InstructionRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_6__["SelectModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InstructionModule, { declarations: [_instruction_component__WEBPACK_IMPORTED_MODULE_2__["InstructionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _instruction_routing_module__WEBPACK_IMPORTED_MODULE_3__["InstructionRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_6__["SelectModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _instruction_routing_module__WEBPACK_IMPORTED_MODULE_3__["InstructionRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_6__["SelectModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                declarations: [_instruction_component__WEBPACK_IMPORTED_MODULE_2__["InstructionComponent"]],
                providers: [_shared_elements_select_option_service__WEBPACK_IMPORTED_MODULE_5__["SelectOptionService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["UserAuthInterceptor"],
                        multi: true
                    },]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=instruction-instruction-module.js.map