(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-process-process-module"],{

/***/ "./src/app/theme/process/process-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/process/process-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProcessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessRoutingModule", function() { return ProcessRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Process',
            status: false
        },
        children: [
            {
                path: 'dayBegin',
                loadChildren: () => Promise.all(/*! import() | day-begin-day-begin-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("day-begin-day-begin-module")]).then(__webpack_require__.bind(null, /*! ./day-begin/day-begin.module */ "./src/app/theme/process/day-begin/day-begin.module.ts")).then(m => m.DayBeginModule)
            },
            {
                path: 'dayEnd',
                loadChildren: () => __webpack_require__.e(/*! import() | day-end-day-end-module */ "day-end-day-end-module").then(__webpack_require__.bind(null, /*! ./day-end/day-end.module */ "./src/app/theme/process/day-end/day-end.module.ts")).then(m => m.DayEndModule)
            },
            {
                path: 'pigmyAppProcess',
                loadChildren: () => Promise.all(/*! import() | pigmy-app-process-pigmy-app-process-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("pigmy-app-process-pigmy-app-process-module")]).then(__webpack_require__.bind(null, /*! ./pigmy-app-process/pigmy-app-process.module */ "./src/app/theme/process/pigmy-app-process/pigmy-app-process.module.ts")).then(m => m.PigmyAppProcessModule)
            },
            {
                path: 'holiday',
                loadChildren: () => Promise.all(/*! import() | holiday-holiday-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~holiday-holiday-module~theme-extension-full-event-calendar-full-event-calendar-module"), __webpack_require__.e("holiday-holiday-module")]).then(__webpack_require__.bind(null, /*! ./holiday/holiday.module */ "./src/app/theme/process/holiday/holiday.module.ts")).then(m => m.HolidayModule)
            },
            {
                path: 'dataBackup',
                loadChildren: () => __webpack_require__.e(/*! import() | backup-data-backup-data-module */ "backup-data-backup-data-module").then(__webpack_require__.bind(null, /*! ./backup-data/backup-data.module */ "./src/app/theme/process/backup-data/backup-data.module.ts")).then(m => m.BackupDataModule)
            },
            {
                path: 'deadStockP',
                loadChildren: () => __webpack_require__.e(/*! import() | dead-stock-p-dead-stock-p-module */ "dead-stock-p-dead-stock-p-module").then(__webpack_require__.bind(null, /*! ./dead-stock-p/dead-stock-p.module */ "./src/app/theme/process/dead-stock-p/dead-stock-p.module.ts")).then(m => m.DeadStockPModule)
            },
            {
                path: 'processACM',
                loadChildren: () => Promise.all(/*! import() | process-acm-process-acm-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("process-acm-process-acm-module")]).then(__webpack_require__.bind(null, /*! ./process-acm/process-acm.module */ "./src/app/theme/process/process-acm/process-acm.module.ts")).then(m => m.ProcessACMModule)
            },
            {
                path: 'monthly recovery process',
                loadChildren: () => Promise.all(/*! import() | recovery-processing-recovery-processing-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~ff90df50"), __webpack_require__.e("default~centralised-passing-centralisedPassing-module~master-unlock-masterUnlock-module~multi-vouche~03f63e01"), __webpack_require__.e("common"), __webpack_require__.e("recovery-processing-recovery-processing-module")]).then(__webpack_require__.bind(null, /*! ./recovery-processing/recovery-processing.module */ "./src/app/theme/process/recovery-processing/recovery-processing.module.ts")).then(m => m.RecoveryProcessingModule)
            },
            {
                path: 'yearEndBranchwise',
                loadChildren: () => Promise.all(/*! import() | year-end-branchwise-year-end-branchwise-module */[__webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~accept-d-accept-d-module~0a0ac926"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~28f99363"), __webpack_require__.e("default~abr-alr-abr-alr-module~abtypedeposit-list-abtypedeposit-list-module~account-enquiry-account-~5e332ada"), __webpack_require__.e("year-end-branchwise-year-end-branchwise-module")]).then(__webpack_require__.bind(null, /*! ./year-end-branchwise/year-end-branchwise.module */ "./src/app/theme/process/year-end-branchwise/year-end-branchwise.module.ts")).then(m => m.YearEndBranchwiseModule)
            },
        ]
    }
];
class ProcessRoutingModule {
}
ProcessRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProcessRoutingModule });
ProcessRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProcessRoutingModule_Factory(t) { return new (t || ProcessRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProcessRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/process/process.module.ts":
/*!*************************************************!*\
  !*** ./src/app/theme/process/process.module.ts ***!
  \*************************************************/
/*! exports provided: ProcessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessModule", function() { return ProcessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _process_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process-routing.module */ "./src/app/theme/process/process-routing.module.ts");




class ProcessModule {
}
ProcessModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProcessModule });
ProcessModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProcessModule_Factory(t) { return new (t || ProcessModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _process_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProcessRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProcessModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _process_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProcessRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _process_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProcessRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-process-process-module.js.map