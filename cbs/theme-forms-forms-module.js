(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-forms-forms-module"],{

/***/ "./src/app/theme/forms/forms-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/forms/forms-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Forms Components',
            status: false
        },
        children: [
            {
                path: 'basic',
                loadChildren: () => __webpack_require__.e(/*! import() | basic-elements-basic-elements-module */ "basic-elements-basic-elements-module").then(__webpack_require__.bind(null, /*! ./basic-elements/basic-elements.module */ "./src/app/theme/forms/basic-elements/basic-elements.module.ts")).then(m => m.BasicElementsModule)
            },
            {
                path: 'add-on',
                loadChildren: () => __webpack_require__.e(/*! import() | add-on-add-on-module */ "add-on-add-on-module").then(__webpack_require__.bind(null, /*! ./add-on/add-on.module */ "./src/app/theme/forms/add-on/add-on.module.ts")).then(m => m.AddOnModule)
            },
            {
                path: 'advance',
                loadChildren: () => Promise.all(/*! import() | advance-elements-advance-elements-module */[__webpack_require__.e("default~advance-elements-advance-elements-module~crm-dashboard-crm-dashboard-module~data-widget-data~3d7ac973"), __webpack_require__.e("default~advance-elements-advance-elements-module~form-select-form-select-module"), __webpack_require__.e("advance-elements-advance-elements-module")]).then(__webpack_require__.bind(null, /*! ./advance-elements/advance-elements.module */ "./src/app/theme/forms/advance-elements/advance-elements.module.ts")).then(m => m.AdvanceElementsModule)
            },
            {
                path: 'frm-validation',
                loadChildren: () => Promise.all(/*! import() | frm-validation-frm-validation-module */[__webpack_require__.e("default~advance-elements-advance-elements-module~crm-dashboard-crm-dashboard-module~data-widget-data~3d7ac973"), __webpack_require__.e("frm-validation-frm-validation-module")]).then(__webpack_require__.bind(null, /*! ./frm-validation/frm-validation.module */ "./src/app/theme/forms/frm-validation/frm-validation.module.ts")).then(m => m.FrmValidationModule)
            },
            {
                path: 'picker',
                loadChildren: () => Promise.all(/*! import() | form-picker-form-picker-module */[__webpack_require__.e("default~definations-definations-module~demo-demo-module~form-picker-form-picker-module~pigmy-chart-e~5951f87c"), __webpack_require__.e("form-picker-form-picker-module")]).then(__webpack_require__.bind(null, /*! ./form-picker/form-picker.module */ "./src/app/theme/forms/form-picker/form-picker.module.ts")).then(m => m.FormPickerModule)
            },
            {
                path: 'mask',
                loadChildren: () => __webpack_require__.e(/*! import() | form-mask-form-mask-module */ "form-mask-form-mask-module").then(__webpack_require__.bind(null, /*! ./form-mask/form-mask.module */ "./src/app/theme/forms/form-mask/form-mask.module.ts")).then(m => m.FormMaskModule)
            },
            {
                path: 'select',
                loadChildren: () => Promise.all(/*! import() | form-select-form-select-module */[__webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3f7b7e67"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~4d4caf63"), __webpack_require__.e("default~day-book-ie-day-book-ie-module~dead-stock-transaction-dead-stock-transaction-module~demand-d~0b944824"), __webpack_require__.e("default~advance-elements-advance-elements-module~crm-dashboard-crm-dashboard-module~data-widget-data~3d7ac973"), __webpack_require__.e("default~advance-elements-advance-elements-module~form-select-form-select-module"), __webpack_require__.e("common"), __webpack_require__.e("form-select-form-select-module")]).then(__webpack_require__.bind(null, /*! ./form-select/form-select.module */ "./src/app/theme/forms/form-select/form-select.module.ts")).then(m => m.FormSelectModule)
            },
            {
                path: 'form-wizards',
                loadChildren: () => Promise.all(/*! import() | form-wizards-form-wizards-module */[__webpack_require__.e("default~advance-elements-advance-elements-module~crm-dashboard-crm-dashboard-module~data-widget-data~3d7ac973"), __webpack_require__.e("form-wizards-form-wizards-module")]).then(__webpack_require__.bind(null, /*! ./form-wizards/form-wizards.module */ "./src/app/theme/forms/form-wizards/form-wizards.module.ts")).then(m => m.FormWizardsModule)
            },
            {
                path: 'ngx',
                loadChildren: () => __webpack_require__.e(/*! import() | ngx-wizard-ngx-wizard-module */ "ngx-wizard-ngx-wizard-module").then(__webpack_require__.bind(null, /*! ./ngx-wizard/ngx-wizard.module */ "./src/app/theme/forms/ngx-wizard/ngx-wizard.module.ts")).then(m => m.NGXFormWizardModule)
            }
        ]
    }
];
class FormsRoutingModule {
}
FormsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormsRoutingModule });
FormsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormsRoutingModule_Factory(t) { return new (t || FormsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/forms/forms.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/forms/forms.module.ts ***!
  \*********************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/theme/forms/forms-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");





class FormsModule {
}
FormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormsModule });
FormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormsModule_Factory(t) { return new (t || FormsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-forms-forms-module.js.map