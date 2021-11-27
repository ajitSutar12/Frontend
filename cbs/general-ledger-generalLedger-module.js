(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-ledger-generalLedger-module"],{

/***/ "./src/app/theme/master/general-ledger/general-ledger.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/master/general-ledger/general-ledger.component.ts ***!
  \*************************************************************************/
/*! exports provided: GeneralLedgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralLedgerComponent", function() { return GeneralLedgerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GeneralLedgerComponent {
    constructor() { }
    ngOnInit() {
    }
}
GeneralLedgerComponent.ɵfac = function GeneralLedgerComponent_Factory(t) { return new (t || GeneralLedgerComponent)(); };
GeneralLedgerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralLedgerComponent, selectors: [["app-general-ledger"]], decls: 2, vars: 0, template: function GeneralLedgerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "general-ledger works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9nZW5lcmFsLWxlZGdlci9nZW5lcmFsLWxlZGdlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralLedgerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general-ledger',
                templateUrl: './general-ledger.component.html',
                styleUrls: ['./general-ledger.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/general-ledger/generalLedger-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/master/general-ledger/generalLedger-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: GeneralLedgerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralLedgerRoutingModule", function() { return GeneralLedgerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'General Ledger',
            status: false
        },
        children: [
            {
                path: 'gl-statement-code',
                loadChildren: () => Promise.all(/*! import() | gl-statement-code-gl-statement-code-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~4d4caf63"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~afc58727"), __webpack_require__.e("gl-statement-code-gl-statement-code-module")]).then(__webpack_require__.bind(null, /*! ./gl-statement-code/gl-statement-code.module */ "./src/app/theme/master/general-ledger/gl-statement-code/gl-statement-code.module.ts")).then(m => m.GlStatementCodeModule)
            },
            {
                path: 'gl-accounts-master',
                loadChildren: () => Promise.all(/*! import() | gl-accounts-master-gl-account-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("common"), __webpack_require__.e("gl-accounts-master-gl-account-master-module")]).then(__webpack_require__.bind(null, /*! ./gl-accounts-master/gl-account-master.module */ "./src/app/theme/master/general-ledger/gl-accounts-master/gl-account-master.module.ts")).then(m => m.GlAccountsMasterModule)
            },
            {
                path: 'gl-report-master',
                loadChildren: () => Promise.all(/*! import() | gl-report-master-gl-report-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("gl-report-master-gl-report-master-module")]).then(__webpack_require__.bind(null, /*! ./gl-report-master/gl-report-master.module */ "./src/app/theme/master/general-ledger/gl-report-master/gl-report-master.module.ts")).then(m => m.GlReportMasterModule)
            },
            {
                path: 'gl-report-linking',
                loadChildren: () => Promise.all(/*! import() | gl-report-linking-gl-report-linking-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("gl-report-linking-gl-report-linking-module")]).then(__webpack_require__.bind(null, /*! ./gl-report-linking/gl-report-linking.module */ "./src/app/theme/master/general-ledger/gl-report-linking/gl-report-linking.module.ts")).then(m => m.GlReportLinkingModule)
            },
            {
                path: 'budget-master',
                loadChildren: () => Promise.all(/*! import() | budget-master-budgest-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("budget-master-budgest-master-module")]).then(__webpack_require__.bind(null, /*! ./budget-master/budgest-master.module */ "./src/app/theme/master/general-ledger/budget-master/budgest-master.module.ts")).then(m => m.BudgetMasterModule)
            },
        ]
    }
];
class GeneralLedgerRoutingModule {
}
GeneralLedgerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralLedgerRoutingModule });
GeneralLedgerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralLedgerRoutingModule_Factory(t) { return new (t || GeneralLedgerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralLedgerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralLedgerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/general-ledger/generalLedger.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/master/general-ledger/generalLedger.module.ts ***!
  \*********************************************************************/
/*! exports provided: GeneralLedgerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralLedgerModule", function() { return GeneralLedgerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _general_ledger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-ledger.component */ "./src/app/theme/master/general-ledger/general-ledger.component.ts");
/* harmony import */ var _generalLedger_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generalLedger-routing.module */ "./src/app/theme/master/general-ledger/generalLedger-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_elements_select_option_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/elements/select-option.service */ "./src/app/shared/elements/select-option.service.ts");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");








class GeneralLedgerModule {
}
GeneralLedgerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralLedgerModule });
GeneralLedgerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralLedgerModule_Factory(t) { return new (t || GeneralLedgerModule)(); }, providers: [_shared_elements_select_option_service__WEBPACK_IMPORTED_MODULE_5__["SelectOptionService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _generalLedger_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralLedgerRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_6__["SelectModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralLedgerModule, { declarations: [_general_ledger_component__WEBPACK_IMPORTED_MODULE_2__["GeneralLedgerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _generalLedger_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralLedgerRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_6__["SelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralLedgerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _generalLedger_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralLedgerRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_6__["SelectModule"]
                ],
                declarations: [_general_ledger_component__WEBPACK_IMPORTED_MODULE_2__["GeneralLedgerComponent"]],
                providers: [_shared_elements_select_option_service__WEBPACK_IMPORTED_MODULE_5__["SelectOptionService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=general-ledger-generalLedger-module.js.map