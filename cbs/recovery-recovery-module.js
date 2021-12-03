(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recovery-recovery-module"],{

/***/ "./src/app/theme/transaction/recovery/recovery-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/transaction/recovery/recovery-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: RecoveryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryRoutingModule", function() { return RecoveryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Recovery',
            status: false
        },
        children: [
            {
                path: 'recoveryProcessing',
                loadChildren: () => Promise.all(/*! import() | recovery-processing-recovery-processing-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("recovery-processing-recovery-processing-module")]).then(__webpack_require__.bind(null, /*! ./recovery-processing/recovery-processing.module */ "./src/app/theme/transaction/recovery/recovery-processing/recovery-processing.module.ts")).then(m => m.RecoveryProcessingModule)
            },
            {
                path: 'recoveryModification',
                loadChildren: () => Promise.all(/*! import() | recovery-modification-recovery-modification-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("recovery-modification-recovery-modification-module")]).then(__webpack_require__.bind(null, /*! ./recovery-modification/recovery-modification.module */ "./src/app/theme/transaction/recovery/recovery-modification/recovery-modification.module.ts")).then(m => m.RecoveryModificationModule)
            },
            {
                path: 'recoveryPosting',
                loadChildren: () => Promise.all(/*! import() | recovery-posting-recovery-posting-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("recovery-posting-recovery-posting-module")]).then(__webpack_require__.bind(null, /*! ./recovery-posting/recovery-posting.module */ "./src/app/theme/transaction/recovery/recovery-posting/recovery-posting.module.ts")).then(m => m.RecoveryPostingModule)
            },
            {
                path: 'recoveryDataImportExport',
                loadChildren: () => Promise.all(/*! import() | recovery-data-import-export-recovery-data-import-export-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~all-reports-with-searching-allReportsWithSearching-module~anamat-gsm-anamat-gsm-module~batch~34724a2e"), __webpack_require__.e("recovery-data-import-export-recovery-data-import-export-module")]).then(__webpack_require__.bind(null, /*! ./recovery-data-import-export/recovery-data-import-export.module */ "./src/app/theme/transaction/recovery/recovery-data-import-export/recovery-data-import-export.module.ts")).then(m => m.RecoveryDataImportExportModule)
            },
        ]
    }
];
class RecoveryRoutingModule {
}
RecoveryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecoveryRoutingModule });
RecoveryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecoveryRoutingModule_Factory(t) { return new (t || RecoveryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecoveryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecoveryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/recovery/recovery.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/transaction/recovery/recovery.component.ts ***!
  \******************************************************************/
/*! exports provided: RecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryComponent", function() { return RecoveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RecoveryComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecoveryComponent.ɵfac = function RecoveryComponent_Factory(t) { return new (t || RecoveryComponent)(); };
RecoveryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecoveryComponent, selectors: [["app-recovery"]], decls: 2, vars: 0, template: function RecoveryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "recovery works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RyYW5zYWN0aW9uL3JlY292ZXJ5L3JlY292ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecoveryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recovery',
                templateUrl: './recovery.component.html',
                styleUrls: ['./recovery.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/recovery/recovery.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/transaction/recovery/recovery.module.ts ***!
  \***************************************************************/
/*! exports provided: RecoveryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryModule", function() { return RecoveryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _recovery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recovery.component */ "./src/app/theme/transaction/recovery/recovery.component.ts");
/* harmony import */ var _recovery_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recovery-routing.module */ "./src/app/theme/transaction/recovery/recovery-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class RecoveryModule {
}
RecoveryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RecoveryModule });
RecoveryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RecoveryModule_Factory(t) { return new (t || RecoveryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _recovery_routing_module__WEBPACK_IMPORTED_MODULE_3__["RecoveryRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecoveryModule, { declarations: [_recovery_component__WEBPACK_IMPORTED_MODULE_2__["RecoveryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _recovery_routing_module__WEBPACK_IMPORTED_MODULE_3__["RecoveryRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecoveryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _recovery_routing_module__WEBPACK_IMPORTED_MODULE_3__["RecoveryRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_recovery_component__WEBPACK_IMPORTED_MODULE_2__["RecoveryComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=recovery-recovery-module.js.map