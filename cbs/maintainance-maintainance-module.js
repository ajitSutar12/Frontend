(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintainance-maintainance-module"],{

/***/ "./src/app/theme/master/maintainance/maintainance-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/master/maintainance/maintainance-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: MaintainanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintainanceRoutingModule", function() { return MaintainanceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        // component: MaintainanceComponent,
        data: {
            title: 'Maintainance',
            status: true
        },
        children: [
            {
                path: 'securityDetails',
                loadChildren: () => Promise.all(/*! import() | security-details-securityDetails-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~c85ad180"), __webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~cash-credit-master-cash-~34151e30"), __webpack_require__.e("default~definations-definations-module~demo-demo-module~form-picker-form-picker-module~pigmy-chart-e~5951f87c"), __webpack_require__.e("common"), __webpack_require__.e("security-details-securityDetails-module")]).then(__webpack_require__.bind(null, /*! ./security-details/securityDetails.module */ "./src/app/theme/master/maintainance/security-details/securityDetails.module.ts")).then(m => m.SecurityDetailsModule)
            },
            {
                path: 'loanAndCCInterestRateChanges',
                loadChildren: () => Promise.all(/*! import() | loan-and-ccinterest-rate-changes-loan-And-CC-Interest-Rate-Changes-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("common"), __webpack_require__.e("loan-and-ccinterest-rate-changes-loan-And-CC-Interest-Rate-Changes-module")]).then(__webpack_require__.bind(null, /*! ./loan-and-ccinterest-rate-changes/loan-And-CC-Interest-Rate-Changes.module */ "./src/app/theme/master/maintainance/loan-and-ccinterest-rate-changes/loan-And-CC-Interest-Rate-Changes.module.ts")).then(m => m.LoanAndCCInterestRateChangesModule)
            },
            {
                path: 'depositLoanInterestRateEditChange',
                loadChildren: () => Promise.all(/*! import() | deposit-loan-interest-rate-edit-change-deposit-Loan-Interest-Rate-Edit-Change-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("deposit-loan-interest-rate-edit-change-deposit-Loan-Interest-Rate-Edit-Change-module")]).then(__webpack_require__.bind(null, /*! ./deposit-loan-interest-rate-edit-change/deposit-Loan-Interest-Rate-Edit-Change.module */ "./src/app/theme/master/maintainance/deposit-loan-interest-rate-edit-change/deposit-Loan-Interest-Rate-Edit-Change.module.ts")).then(m => m.DepositLoanInterestRateEditChangeModule)
            },
            {
                path: 'npaOpeningDetailsEntry',
                loadChildren: () => Promise.all(/*! import() | npa-opening-details-entry-npa-opening-details-entry-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("common"), __webpack_require__.e("npa-opening-details-entry-npa-opening-details-entry-module")]).then(__webpack_require__.bind(null, /*! ./npa-opening-details-entry/npa-opening-details-entry.module */ "./src/app/theme/master/maintainance/npa-opening-details-entry/npa-opening-details-entry.module.ts")).then(m => m.NpaOpeningDetailsEntryModule)
            },
            {
                path: 'interestPostingFlagUpdation',
                loadChildren: () => Promise.all(/*! import() | interest-posting-flag-updation-interest-posting-flag-updation-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("interest-posting-flag-updation-interest-posting-flag-updation-module")]).then(__webpack_require__.bind(null, /*! ./interest-posting-flag-updation/interest-posting-flag-updation.module */ "./src/app/theme/master/maintainance/interest-posting-flag-updation/interest-posting-flag-updation.module.ts")).then(m => m.InterestPostingFlagUpdationModule)
            },
            {
                path: 'accountwiseDocumentAcceptance',
                loadChildren: () => Promise.all(/*! import() | accountwise-document-acceptance-accountwise-document-acceptance-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("accountwise-document-acceptance-accountwise-document-acceptance-module")]).then(__webpack_require__.bind(null, /*! ./accountwise-document-acceptance/accountwise-document-acceptance.module */ "./src/app/theme/master/maintainance/accountwise-document-acceptance/accountwise-document-acceptance.module.ts")).then(m => m.AccountwiseDocumentAcceptanceModule)
            },
            {
                path: 'notingCharges',
                loadChildren: () => Promise.all(/*! import() | noting-charges-notingCharges-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~60d487c1"), __webpack_require__.e("default~account-close-passing-account-close-passing-module~account-closing-account-closing-module~ac~1fdade7b"), __webpack_require__.e("noting-charges-notingCharges-module")]).then(__webpack_require__.bind(null, /*! ./noting-charges/notingCharges.module */ "./src/app/theme/master/maintainance/noting-charges/notingCharges.module.ts")).then(m => m.NotingChargesModule)
            },
        ]
    }
];
class MaintainanceRoutingModule {
}
MaintainanceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaintainanceRoutingModule });
MaintainanceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaintainanceRoutingModule_Factory(t) { return new (t || MaintainanceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaintainanceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaintainanceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/master/maintainance/maintainance.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/master/maintainance/maintainance.component.ts ***!
  \*********************************************************************/
/*! exports provided: MaintainanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintainanceComponent", function() { return MaintainanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MaintainanceComponent {
    constructor() { }
    ngOnInit() {
    }
}
MaintainanceComponent.ɵfac = function MaintainanceComponent_Factory(t) { return new (t || MaintainanceComponent)(); };
MaintainanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaintainanceComponent, selectors: [["app-maintainance"]], decls: 2, vars: 0, template: function MaintainanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "maintainance works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21hc3Rlci9tYWludGFpbmFuY2UvbWFpbnRhaW5hbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaintainanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-maintainance',
                templateUrl: './maintainance.component.html',
                styleUrls: ['./maintainance.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/master/maintainance/maintainance.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/master/maintainance/maintainance.module.ts ***!
  \******************************************************************/
/*! exports provided: MaintainanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintainanceModule", function() { return MaintainanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _maintainance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maintainance.component */ "./src/app/theme/master/maintainance/maintainance.component.ts");
/* harmony import */ var _maintainance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintainance-routing.module */ "./src/app/theme/master/maintainance/maintainance-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_elements_select_option_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/elements/select-option.service */ "./src/app/shared/elements/select-option.service.ts");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");





// import { NotingChargesComponent } from './noting-charges/noting-charges.component';
// import { AccountwiseDocumentAcceptanceComponent } from './accountwise-document-acceptance/accountwise-document-acceptance.component';
// import { InterestPostingFlagUpdationComponent } from './interest-posting-flag-updation/interest-posting-flag-updation.component';
// import { NpaOpeningDetailsEntryComponent } from './npa-opening-details-entry/npa-opening-details-entry.component';
// import { DepositLoanInterestRateEditChangeComponent } from './deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.component';
// import { LoanAndCCInterestRateChangesComponent } from './loan-and-ccinterest-rate-changes/loan-and-ccinterest-rate-changes.component';
// import { SecurityDetailsComponent } from './security-details/security-details.component';



// import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
class MaintainanceModule {
}
MaintainanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaintainanceModule });
MaintainanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaintainanceModule_Factory(t) { return new (t || MaintainanceModule)(); }, providers: [_shared_elements_select_option_service__WEBPACK_IMPORTED_MODULE_5__["SelectOptionService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _maintainance_routing_module__WEBPACK_IMPORTED_MODULE_3__["MaintainanceRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_6__["SelectModule"]
            // FormsModule,
            // ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaintainanceModule, { declarations: [_maintainance_component__WEBPACK_IMPORTED_MODULE_2__["MaintainanceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _maintainance_routing_module__WEBPACK_IMPORTED_MODULE_3__["MaintainanceRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_6__["SelectModule"]
        // FormsModule,
        // ReactiveFormsModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaintainanceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _maintainance_routing_module__WEBPACK_IMPORTED_MODULE_3__["MaintainanceRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_6__["SelectModule"]
                    // FormsModule,
                    // ReactiveFormsModule
                ],
                declarations: [_maintainance_component__WEBPACK_IMPORTED_MODULE_2__["MaintainanceComponent"]],
                providers: [_shared_elements_select_option_service__WEBPACK_IMPORTED_MODULE_5__["SelectOptionService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=maintainance-maintainance-module.js.map