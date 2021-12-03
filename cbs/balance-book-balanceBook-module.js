(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balance-book-balanceBook-module"],{

/***/ "./src/app/theme/reports/balance-book/balance-book.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/reports/balance-book/balance-book.component.ts ***!
  \**********************************************************************/
/*! exports provided: BalanceBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceBookComponent", function() { return BalanceBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BalanceBookComponent {
    constructor() {
        this.multiNominee = [];
        this.showButton = true;
    }
    ngOnInit() {
        // Method to insert data into database through NestJS
        // submit() {
        //   const formVal = this.angForm.value;
        //   const dataToSend = {
        //     // 'NomineeData': this.multiNominee,
        //   };
        // }
    }
}
BalanceBookComponent.ɵfac = function BalanceBookComponent_Factory(t) { return new (t || BalanceBookComponent)(); };
BalanceBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BalanceBookComponent, selectors: [["app-balance-book"]], decls: 2, vars: 0, template: function BalanceBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "balance books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvYmFsYW5jZS1ib29rL2JhbGFuY2UtYm9vay5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalanceBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-balance-book',
                templateUrl: './balance-book.component.html',
                styleUrls: ['./balance-book.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/balance-book/balanceBook-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/reports/balance-book/balanceBook-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: BalanceBookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceBookRoutingModule", function() { return BalanceBookRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _balance_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance-book.component */ "./src/app/theme/reports/balance-book/balance-book.component.ts");





const routes = [
    {
        path: '',
        component: _balance_book_component__WEBPACK_IMPORTED_MODULE_2__["BalanceBookComponent"],
        data: {
            title: 'Balance Book',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class BalanceBookRoutingModule {
}
BalanceBookRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BalanceBookRoutingModule });
BalanceBookRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BalanceBookRoutingModule_Factory(t) { return new (t || BalanceBookRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BalanceBookRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalanceBookRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/balance-book/balanceBook.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/reports/balance-book/balanceBook.module.ts ***!
  \******************************************************************/
/*! exports provided: BalanceBookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceBookModule", function() { return BalanceBookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _balance_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance-book.component */ "./src/app/theme/reports/balance-book/balance-book.component.ts");
/* harmony import */ var _balanceBook_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balanceBook-routing.module */ "./src/app/theme/reports/balance-book/balanceBook-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






// import {ChartModule} from 'angular2-chartjs';
class BalanceBookModule {
}
BalanceBookModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BalanceBookModule });
BalanceBookModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BalanceBookModule_Factory(t) { return new (t || BalanceBookModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _balanceBook_routing_module__WEBPACK_IMPORTED_MODULE_3__["BalanceBookRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BalanceBookModule, { declarations: [_balance_book_component__WEBPACK_IMPORTED_MODULE_2__["BalanceBookComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _balanceBook_routing_module__WEBPACK_IMPORTED_MODULE_3__["BalanceBookRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalanceBookModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _balanceBook_routing_module__WEBPACK_IMPORTED_MODULE_3__["BalanceBookRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_balance_book_component__WEBPACK_IMPORTED_MODULE_2__["BalanceBookComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=balance-book-balanceBook-module.js.map