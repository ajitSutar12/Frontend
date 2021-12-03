(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unapproval-unapproval-module"],{

/***/ "./src/app/theme/passing/unapproval/unapproval-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/passing/unapproval/unapproval-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: UnapprovalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnapprovalRoutingModule", function() { return UnapprovalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            title: 'Unapproval',
            status: false
        },
        children: [
            {
                path: 'unapprovalMultivoucher',
                loadChildren: () => __webpack_require__.e(/*! import() | unapproval-multivoucher-upproval-multivoucher-module */ "unapproval-multivoucher-upproval-multivoucher-module").then(__webpack_require__.bind(null, /*! ./unapproval-multivoucher/upproval-multivoucher.module */ "./src/app/theme/passing/unapproval/unapproval-multivoucher/upproval-multivoucher.module.ts")).then(m => m.UnapprovalMultivoucherrModule)
            },
            {
                path: 'unapprovalVoucher',
                loadChildren: () => Promise.all(/*! import() | unapproval-voucher-unapproval-voucher-module */[__webpack_require__.e("default~account-opening-account-opening-module~anamat-gsm-anamat-gsm-module~batch-voucher-batch-vouc~c85ad180"), __webpack_require__.e("common"), __webpack_require__.e("unapproval-voucher-unapproval-voucher-module")]).then(__webpack_require__.bind(null, /*! ./unapproval-voucher/unapproval-voucher.module */ "./src/app/theme/passing/unapproval/unapproval-voucher/unapproval-voucher.module.ts")).then(m => m.UnapprovalVoucheModule)
            },
            {
                path: 'unapprovalDepositClosing',
                loadChildren: () => __webpack_require__.e(/*! import() | unapproval-deposit-closing-unapproval-deposit-closing-module */ "unapproval-deposit-closing-unapproval-deposit-closing-module").then(__webpack_require__.bind(null, /*! ./unapproval-deposit-closing/unapproval-deposit-closing.module */ "./src/app/theme/passing/unapproval/unapproval-deposit-closing/unapproval-deposit-closing.module.ts")).then(m => m.UnapprovalDepositClosingModule)
            },
            {
                path: 'unapprovalDepositPosting',
                loadChildren: () => __webpack_require__.e(/*! import() | unapproval-deposit-posting-unapproval-deposit-module */ "unapproval-deposit-posting-unapproval-deposit-module").then(__webpack_require__.bind(null, /*! ./unapproval-deposit-posting/unapproval-deposit.module */ "./src/app/theme/passing/unapproval/unapproval-deposit-posting/unapproval-deposit.module.ts")).then(m => m.UnapprovalDepositPostingModule)
            },
        ]
    }
];
class UnapprovalRoutingModule {
}
UnapprovalRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnapprovalRoutingModule });
UnapprovalRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnapprovalRoutingModule_Factory(t) { return new (t || UnapprovalRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnapprovalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnapprovalRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/passing/unapproval/unapproval.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/passing/unapproval/unapproval.component.ts ***!
  \******************************************************************/
/*! exports provided: UnapprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnapprovalComponent", function() { return UnapprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UnapprovalComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnapprovalComponent.ɵfac = function UnapprovalComponent_Factory(t) { return new (t || UnapprovalComponent)(); };
UnapprovalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnapprovalComponent, selectors: [["app-unapproval"]], decls: 2, vars: 0, template: function UnapprovalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "unapproval works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3Bhc3NpbmcvdW5hcHByb3ZhbC91bmFwcHJvdmFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnapprovalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unapproval',
                templateUrl: './unapproval.component.html',
                styleUrls: ['./unapproval.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/passing/unapproval/unapproval.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/passing/unapproval/unapproval.module.ts ***!
  \***************************************************************/
/*! exports provided: UnapprovalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnapprovalModule", function() { return UnapprovalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _unapproval_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unapproval.component */ "./src/app/theme/passing/unapproval/unapproval.component.ts");
/* harmony import */ var _unapproval_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unapproval-routing.module */ "./src/app/theme/passing/unapproval/unapproval-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _shared_elements_select_option_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/elements/select-option.service */ "./src/app/shared/elements/select-option.service.ts");
/* harmony import */ var ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-select */ "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





//import { UnapprovalDepositPostingComponent } from './unapproval-deposit-posting/unapproval-deposit-posting.component';
//import { UnapprovalDepositClosingComponent } from './unapproval-deposit-closing/unapproval-deposit-closing.component';
//import { UnapprovalVoucherComponent } from './unapproval-voucher/unapproval-voucher.component';
//import { UnapprovalMultivoucherComponent } from './unapproval-multivoucher/unapproval-multivoucher.component';
// import {ChartModule} from 'angular2-chartjs';





class UnapprovalModule {
}
UnapprovalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UnapprovalModule });
UnapprovalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UnapprovalModule_Factory(t) { return new (t || UnapprovalModule)(); }, providers: [_shared_elements_select_option_service__WEBPACK_IMPORTED_MODULE_6__["SelectOptionService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _unapproval_routing_module__WEBPACK_IMPORTED_MODULE_3__["UnapprovalRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
            ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UnapprovalModule, { declarations: [_unapproval_component__WEBPACK_IMPORTED_MODULE_2__["UnapprovalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _unapproval_routing_module__WEBPACK_IMPORTED_MODULE_3__["UnapprovalRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
        ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnapprovalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _unapproval_routing_module__WEBPACK_IMPORTED_MODULE_3__["UnapprovalRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                    ng_select__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
                ],
                declarations: [_unapproval_component__WEBPACK_IMPORTED_MODULE_2__["UnapprovalComponent"]],
                providers: [_shared_elements_select_option_service__WEBPACK_IMPORTED_MODULE_6__["SelectOptionService"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=unapproval-unapproval-module.js.map