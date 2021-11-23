(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-master-master-module"],{

/***/ "./src/app/theme/master/master-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/master/master-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterRoutingModule", function() { return MasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [{
        path: '',
        data: {
            title: 'Master',
            status: false
        },
        children: [
            {
                path: 'generalLedger',
                loadChildren: () => Promise.all(/*! import() | general-ledger-generalLedger-module */[__webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~4e4f68e3"), __webpack_require__.e("default~day-book-ie-day-book-ie-module~dead-stock-transaction-dead-stock-transaction-module~demand-d~0b944824"), __webpack_require__.e("general-ledger-generalLedger-module")]).then(__webpack_require__.bind(null, /*! ./general-ledger/generalLedger.module */ "./src/app/theme/master/general-ledger/generalLedger.module.ts")).then(m => m.GeneralLedgerModule)
            },
            {
                path: 'customer',
                loadChildren: () => __webpack_require__.e(/*! import() | customer-customer-module */ "customer-customer-module").then(__webpack_require__.bind(null, /*! ./customer/customer.module */ "./src/app/theme/master/customer/customer.module.ts")).then(m => m.CustomerModule)
            },
            {
                path: 'balanceEntry',
                loadChildren: () => __webpack_require__.e(/*! import() | balance-entry-balance-entry-module */ "balance-entry-balance-entry-module").then(__webpack_require__.bind(null, /*! ./balance-entry/balance-entry.module */ "./src/app/theme/master/balance-entry/balance-entry.module.ts")).then(m => m.BalanceEntryModule)
            },
            {
                path: 'PolicySettings',
                loadChildren: () => Promise.all(/*! import() | policy-settings-policy-settings-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~96429515"), __webpack_require__.e("policy-settings-policy-settings-module")]).then(__webpack_require__.bind(null, /*! ./policy-settings/policy-settings.module */ "./src/app/theme/master/policy-settings/policy-settings.module.ts")).then(m => m.PolicySettingsModule)
            },
            {
                path: 'Maintainance',
                loadChildren: () => Promise.all(/*! import() | maintainance-maintainance-module */[__webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~4e4f68e3"), __webpack_require__.e("default~day-book-ie-day-book-ie-module~dead-stock-transaction-dead-stock-transaction-module~demand-d~0b944824"), __webpack_require__.e("maintainance-maintainance-module")]).then(__webpack_require__.bind(null, /*! ./maintainance/maintainance.module */ "./src/app/theme/master/maintainance/maintainance.module.ts")).then(m => m.MaintainanceModule)
            },
            {
                path: 'Instruction',
                loadChildren: () => Promise.all(/*! import() | instruction-instruction-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~96429515"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~24a2a2a5"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~4e4f68e3"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~c7318be3"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~customer-id-customer-id-~83b9a215"), __webpack_require__.e("default~day-book-ie-day-book-ie-module~dead-stock-transaction-dead-stock-transaction-module~demand-d~0b944824"), __webpack_require__.e("common"), __webpack_require__.e("instruction-instruction-module")]).then(__webpack_require__.bind(null, /*! ./instruction/instruction.module */ "./src/app/theme/master/instruction/instruction.module.ts")).then(m => m.InstructionModule)
            },
            {
                path: 'Investment',
                loadChildren: () => __webpack_require__.e(/*! import() | investment-investment-module */ "investment-investment-module").then(__webpack_require__.bind(null, /*! ./investment/investment.module */ "./src/app/theme/master/investment/investment.module.ts")).then(m => m.InvestmentModule)
            },
            {
                path: 'Shares',
                loadChildren: () => __webpack_require__.e(/*! import() | shares-shares-module */ "shares-shares-module").then(__webpack_require__.bind(null, /*! ./shares/shares.module */ "./src/app/theme/master/shares/shares.module.ts")).then(m => m.SharesModule)
            },
            {
                path: 'SignatureScanning',
                loadChildren: () => Promise.all(/*! import() | signature-scanning-signature-scanning-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~96429515"), __webpack_require__.e("common"), __webpack_require__.e("signature-scanning-signature-scanning-module")]).then(__webpack_require__.bind(null, /*! ./signature-scanning/signature-scanning.module */ "./src/app/theme/master/signature-scanning/signature-scanning.module.ts")).then(m => m.SignatureScanningModule)
            },
            {
                path: 'DDBankCityMaster',
                loadChildren: () => Promise.all(/*! import() | dd-bank-city-master-dd-bank-city-master-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~96429515"), __webpack_require__.e("dd-bank-city-master-dd-bank-city-master-module")]).then(__webpack_require__.bind(null, /*! ./dd-bank-city-master/dd-bank-city-master.module */ "./src/app/theme/master/dd-bank-city-master/dd-bank-city-master.module.ts")).then(m => m.DDBankCityMasterModule)
            },
        ]
    }];
class MasterRoutingModule {
}
MasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterRoutingModule });
MasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterRoutingModule_Factory(t) { return new (t || MasterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/master.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/master/master.module.ts ***!
  \***********************************************/
/*! exports provided: MasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterModule", function() { return MasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./master-routing.module */ "./src/app/theme/master/master-routing.module.ts");




class MasterModule {
}
MasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterModule });
MasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterModule_Factory(t) { return new (t || MasterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _master_routing_module__WEBPACK_IMPORTED_MODULE_2__["MasterRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _master_routing_module__WEBPACK_IMPORTED_MODULE_2__["MasterRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _master_routing_module__WEBPACK_IMPORTED_MODULE_2__["MasterRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-master-master-module.js.map