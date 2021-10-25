(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["member-transfer-member-transfer-module"],{

/***/ "./src/app/theme/transaction/member-transfer/member-transfer-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/theme/transaction/member-transfer/member-transfer-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MemberTransferRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberTransferRoutingModule", function() { return MemberTransferRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        // component: DividendPayComponent,
        data: {
            title: 'Member Transfer',
            status: false
        },
        children: [
            {
                path: 'MemberTransferTransaction',
                loadChildren: () => Promise.all(/*! import() | member-transfer-transaction-member-transfer-transaction-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~43e8970d"), __webpack_require__.e("member-transfer-transaction-member-transfer-transaction-module")]).then(__webpack_require__.bind(null, /*! ./member-transfer-transaction/member-transfer-transaction.module */ "./src/app/theme/transaction/member-transfer/member-transfer-transaction/member-transfer-transaction.module.ts")).then(m => m.MemberTransferTransactionModule)
            },
            {
                path: 'BranchAndSalaryDC',
                loadChildren: () => Promise.all(/*! import() | branch-and-salary-dc-branch-and-salary-dc-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~43e8970d"), __webpack_require__.e("branch-and-salary-dc-branch-and-salary-dc-module")]).then(__webpack_require__.bind(null, /*! ./branch-and-salary-dc/branch-and-salary-dc.module */ "./src/app/theme/transaction/member-transfer/branch-and-salary-dc/branch-and-salary-dc.module.ts")).then(m => m.BranchAndSalaryDCModule)
            },
            {
                path: 'TrasferredMemberOB',
                loadChildren: () => Promise.all(/*! import() | trasferred-member-ob-trasferred-member-ob-module */[__webpack_require__.e("default~accept-d-accept-d-module~account-close-passing-account-close-passing-module~account-closing-~43e8970d"), __webpack_require__.e("trasferred-member-ob-trasferred-member-ob-module")]).then(__webpack_require__.bind(null, /*! ./trasferred-member-ob/trasferred-member-ob.module */ "./src/app/theme/transaction/member-transfer/trasferred-member-ob/trasferred-member-ob.module.ts")).then(m => m.TrasferredMemberOBModule)
            },
        ]
    }
];
class MemberTransferRoutingModule {
}
MemberTransferRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MemberTransferRoutingModule });
MemberTransferRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MemberTransferRoutingModule_Factory(t) { return new (t || MemberTransferRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MemberTransferRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberTransferRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/member-transfer/member-transfer.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/transaction/member-transfer/member-transfer.component.ts ***!
  \********************************************************************************/
/*! exports provided: MemberTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberTransferComponent", function() { return MemberTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MemberTransferComponent {
    constructor() { }
    ngOnInit() {
    }
}
MemberTransferComponent.ɵfac = function MemberTransferComponent_Factory(t) { return new (t || MemberTransferComponent)(); };
MemberTransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberTransferComponent, selectors: [["app-member-transfer"]], decls: 0, vars: 0, template: function MemberTransferComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RyYW5zYWN0aW9uL21lbWJlci10cmFuc2Zlci9tZW1iZXItdHJhbnNmZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberTransferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-member-transfer',
                templateUrl: './member-transfer.component.html',
                styleUrls: ['./member-transfer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/transaction/member-transfer/member-transfer.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/transaction/member-transfer/member-transfer.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MemberTransferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberTransferModule", function() { return MemberTransferModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _member_transfer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-transfer.component */ "./src/app/theme/transaction/member-transfer/member-transfer.component.ts");
/* harmony import */ var _member_transfer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member-transfer-routing.module */ "./src/app/theme/transaction/member-transfer/member-transfer-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class MemberTransferModule {
}
MemberTransferModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MemberTransferModule });
MemberTransferModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MemberTransferModule_Factory(t) { return new (t || MemberTransferModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _member_transfer_routing_module__WEBPACK_IMPORTED_MODULE_3__["MemberTransferRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MemberTransferModule, { declarations: [_member_transfer_component__WEBPACK_IMPORTED_MODULE_2__["MemberTransferComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _member_transfer_routing_module__WEBPACK_IMPORTED_MODULE_3__["MemberTransferRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberTransferModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _member_transfer_routing_module__WEBPACK_IMPORTED_MODULE_3__["MemberTransferRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_member_transfer_component__WEBPACK_IMPORTED_MODULE_2__["MemberTransferComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=member-transfer-member-transfer-module.js.map