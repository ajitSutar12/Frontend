(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policy-settings-policy-settings-module"],{

/***/ "./src/app/theme/master/policy-settings/policy-settings-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/master/policy-settings/policy-settings-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: PolicySettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicySettingsRoutingModule", function() { return PolicySettingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Policy Setting',
            status: false
        },
        children: [
            {
                path: 'information',
                loadChildren: () => Promise.all(/*! import() | information-information-module */[__webpack_require__.e("default~account-opening-account-opening-module~accountwise-document-acceptance-accountwise-document-~064a2fa6"), __webpack_require__.e("default~balance-updation-balance-updation-module~cash-credit-ac-renewal-cash-credit-ac-renewal-modul~3408869d"), __webpack_require__.e("default~definations-definations-module~information-information-module"), __webpack_require__.e("information-information-module")]).then(__webpack_require__.bind(null, /*! ./information/information.module */ "./src/app/theme/master/policy-settings/information/information.module.ts")).then(m => m.InformationModule)
            },
            {
                path: 'definations',
                loadChildren: () => Promise.all(/*! import() | definations-definations-module */[__webpack_require__.e("default~account-opening-account-opening-module~accountwise-document-acceptance-accountwise-document-~064a2fa6"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~balance-updation-balance~9cb2aacc"), __webpack_require__.e("default~analytics-analytics-module~anamat-gsm-anamat-gsm-module~balance-updation-balance-updation-mo~4cee4e79"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~b55a141a"), __webpack_require__.e("default~definations-definations-module~information-information-module"), __webpack_require__.e("common"), __webpack_require__.e("definations-definations-module")]).then(__webpack_require__.bind(null, /*! ./definations/definations.module */ "./src/app/theme/master/policy-settings/definations/definations.module.ts")).then(m => m.DefinationsModule)
            },
            {
                path: 'sizewiseBalanceModification',
                loadChildren: () => Promise.all(/*! import() | sizewise-balance-modification-sizewise-balance-modification-module */[__webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~3d3c692c"), __webpack_require__.e("default~cash-credit-master-cash-credit-master-module~centralised-passing-centralisedPassing-module~d~b55a141a"), __webpack_require__.e("sizewise-balance-modification-sizewise-balance-modification-module")]).then(__webpack_require__.bind(null, /*! ./sizewise-balance-modification/sizewise-balance-modification.module */ "./src/app/theme/master/policy-settings/sizewise-balance-modification/sizewise-balance-modification.module.ts")).then(m => m.SizewiseBalanceModificationModule)
            },
            {
                path: 'tDReceiptTypeMaster',
                loadChildren: () => Promise.all(/*! import() | t-dreceipt-type-master-t-dreceipt-type-master-module */[__webpack_require__.e("default~account-opening-account-opening-module~accountwise-document-acceptance-accountwise-document-~064a2fa6"), __webpack_require__.e("t-dreceipt-type-master-t-dreceipt-type-master-module")]).then(__webpack_require__.bind(null, /*! ./t-dreceipt-type-master/t-dreceipt-type-master.module */ "./src/app/theme/master/policy-settings/t-dreceipt-type-master/t-dreceipt-type-master.module.ts")).then(m => m.TDReceiptTypeMasterModule)
            },
            {
                path: 'nPAClassificationSlabMaster',
                loadChildren: () => Promise.all(/*! import() | n-paclassification-slab-master-n-paclassification-slab-master-module */[__webpack_require__.e("default~account-opening-account-opening-module~accountwise-document-acceptance-accountwise-document-~064a2fa6"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~balance-updation-balance~9cb2aacc"), __webpack_require__.e("default~analytics-analytics-module~anamat-gsm-anamat-gsm-module~balance-updation-balance-updation-mo~4cee4e79"), __webpack_require__.e("n-paclassification-slab-master-n-paclassification-slab-master-module")]).then(__webpack_require__.bind(null, /*! ./n-paclassification-slab-master/n-paclassification-slab-master.module */ "./src/app/theme/master/policy-settings/n-paclassification-slab-master/n-paclassification-slab-master.module.ts")).then(m => m.NPAClassificationSlabMasterModule)
            },
        ]
    }
];
class PolicySettingsRoutingModule {
}
PolicySettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PolicySettingsRoutingModule });
PolicySettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PolicySettingsRoutingModule_Factory(t) { return new (t || PolicySettingsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PolicySettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolicySettingsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/policy-settings/policy-settings.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/master/policy-settings/policy-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: PolicySettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicySettingsComponent", function() { return PolicySettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PolicySettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PolicySettingsComponent.ɵfac = function PolicySettingsComponent_Factory(t) { return new (t || PolicySettingsComponent)(); };
PolicySettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PolicySettingsComponent, selectors: [["app-policy-settings"]], decls: 2, vars: 0, template: function PolicySettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "policy-settings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9wb2xpY3ktc2V0dGluZ3MvcG9saWN5LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolicySettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-policy-settings',
                templateUrl: './policy-settings.component.html',
                styleUrls: ['./policy-settings.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/policy-settings/policy-settings.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/master/policy-settings/policy-settings.module.ts ***!
  \************************************************************************/
/*! exports provided: PolicySettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicySettingsModule", function() { return PolicySettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _policy_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy-settings.component */ "./src/app/theme/master/policy-settings/policy-settings.component.ts");
/* harmony import */ var _policy_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy-settings-routing.module */ "./src/app/theme/master/policy-settings/policy-settings-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");









class PolicySettingsModule {
}
PolicySettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PolicySettingsModule });
PolicySettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PolicySettingsModule_Factory(t) { return new (t || PolicySettingsModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["UserAuthInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _policy_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["PolicySettingsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PolicySettingsModule, { declarations: [_policy_settings_component__WEBPACK_IMPORTED_MODULE_2__["PolicySettingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _policy_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["PolicySettingsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolicySettingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _policy_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["PolicySettingsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]
                ],
                declarations: [_policy_settings_component__WEBPACK_IMPORTED_MODULE_2__["PolicySettingsComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: src_app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["UserAuthInterceptor"],
                        multi: true
                    },
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=policy-settings-policy-settings-module.js.map