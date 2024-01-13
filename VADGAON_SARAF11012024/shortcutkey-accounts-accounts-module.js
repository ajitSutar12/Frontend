(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shortcutkey-accounts-accounts-module"],{

/***/ "./src/shortcutkey/accounts/accounts-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/shortcutkey/accounts/accounts-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AccountsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsRoutingModule", function() { return AccountsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts.component */ "./src/shortcutkey/accounts/accounts.component.ts");





const routes = [
    {
        path: '',
        component: _accounts_component__WEBPACK_IMPORTED_MODULE_2__["AccountsComponent"],
        data: {
            title: 'Account Enquiry',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class AccountsRoutingModule {
}
AccountsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountsRoutingModule });
AccountsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountsRoutingModule_Factory(t) { return new (t || AccountsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/shortcutkey/accounts/accounts.component.ts":
/*!********************************************************!*\
  !*** ./src/shortcutkey/accounts/accounts.component.ts ***!
  \********************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_theme_view_account_enquiry_account_enquiry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/theme/view/account-enquiry/account-enquiry.component */ "./src/app/theme/view/account-enquiry/account-enquiry.component.ts");



class AccountsComponent {
    constructor() { }
    ngOnInit() { }
}
AccountsComponent.ɵfac = function AccountsComponent_Factory(t) { return new (t || AccountsComponent)(); };
AccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountsComponent, selectors: [["app-accounts"]], decls: 1, vars: 0, template: function AccountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-account-enquiry");
    } }, directives: [_app_theme_view_account_enquiry_account_enquiry_component__WEBPACK_IMPORTED_MODULE_1__["AccountEnquiryComponent"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  overflow-x: auto;\n  padding-top: -46px;\n  margin: 0px;\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: ridge;\n  border-color: #817d7de3;\n  padding: 0.4%;\n  margin-bottom: 3px;\n  padding-right: 12px;\n}\n\n.main-body[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  padding-bottom: 4% !important;\n  transition: all ease-in 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #ff5252;\n  color: #ff5252;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 11px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 14px;\n  border-radius: 5px;\n  padding-bottom: 22px;\n  padding-top: 4px;\n  height: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px !important;\n  max-height: 18px !important;\n  align-items: center;\n  font-size: 11px !important;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 18px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 5px;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 5px;\n  padding-left: 15px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaG9ydGN1dGtleS9hY2NvdW50cy9hY2NvdW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBRUksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFFSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9BO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBSko7O0FBT0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBc0VJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0E7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0FBSkoiLCJmaWxlIjoic3JjL3Nob3J0Y3V0a2V5L2FjY291bnRzL2FjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG5hIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy8gY29sb3I6IHJnYig0NCwgMTM5LCAyMzQpO1xuICAgIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IC00NnB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmRpdi5zb2xpZCB7XG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItc3R5bGU6IHJpZGdlO1xuICAgIGJvcmRlci1jb2xvcjogIzgxN2Q3ZGUzO1xuICAgIHBhZGRpbmc6IDAuNCU7XG4gICAgLy8gcGFkZGluZzogMC43JTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLm1haW4tYm9keSAucGFnZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDQlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC4zcztcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNmZjUyNTI7XG4gICAgY29sb3I6ICNmZjUyNTI7XG4gICAgcGFkZGluZy10b3A6IDFweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICAgIC8vIGZsb2F0OiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjJweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxubGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgbWluLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtZ3JvdXAgLmJvcmRlci1sYWJsZS1mbHQgLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgIGhlaWdodDogMThweDtcbiAgICBwYWRkaW5nOiAwcmVtIDAuN3JlbTtcbn1cblxuLmNhcmQgLmNhcmQtYmxvY2sge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY29sLTEsXG4uY29sLTIsXG4uY29sLTMsXG4uY29sLTQsXG4uY29sLTUsXG4uY29sLTYsXG4uY29sLTcsXG4uY29sLTgsXG4uY29sLTksXG4uY29sLTEwLFxuLmNvbC0xMSxcbi5jb2wtMTIsXG4uY29sLFxuLmNvbC1hdXRvLFxuLmNvbC1zbS0xLFxuLmNvbC1zbS0yLFxuLmNvbC1zbS0zLFxuLmNvbC1zbS00LFxuLmNvbC1zbS01LFxuLmNvbC1zbS02LFxuLmNvbC1zbS03LFxuLmNvbC1zbS04LFxuLmNvbC1zbS05LFxuLmNvbC1zbS0xMCxcbi5jb2wtc20tMTEsXG4uY29sLXNtLTEyLFxuLmNvbC1zbSxcbi5jb2wtc20tYXV0byxcbi5jb2wtbWQtMSxcbi5jb2wtbWQtMixcbi5jb2wtbWQtMyxcbi5jb2wtbWQtNCxcbi5jb2wtbWQtNSxcbi5jb2wtbWQtNixcbi5jb2wtbWQtNyxcbi5jb2wtbWQtOCxcbi5jb2wtbWQtOSxcbi5jb2wtbWQtMTAsXG4uY29sLW1kLTExLFxuLmNvbC1tZC0xMixcbi5jb2wtbWQsXG4uY29sLW1kLWF1dG8sXG4uY29sLWxnLTEsXG4uY29sLWxnLTIsXG4uY29sLWxnLTMsXG4uY29sLWxnLTQsXG4uY29sLWxnLTUsXG4uY29sLWxnLTYsXG4uY29sLWxnLTcsXG4uY29sLWxnLTgsXG4uY29sLWxnLTksXG4uY29sLWxnLTEwLFxuLmNvbC1sZy0xMSxcbi5jb2wtbGctMTIsXG4uY29sLWxnLFxuLmNvbC1sZy1hdXRvLFxuLmNvbC14bC0xLFxuLmNvbC14bC0yLFxuLmNvbC14bC0zLFxuLmNvbC14bC00LFxuLmNvbC14bC01LFxuLmNvbC14bC02LFxuLmNvbC14bC03LFxuLmNvbC14bC04LFxuLmNvbC14bC05LFxuLmNvbC14bC0xMCxcbi5jb2wteGwtMTEsXG4uY29sLXhsLTEyLFxuLmNvbC14bCxcbi5jb2wteGwtYXV0byB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accounts',
                templateUrl: './accounts.component.html',
                styleUrls: ['./accounts.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/shortcutkey/accounts/accounts.module.ts":
/*!*****************************************************!*\
  !*** ./src/shortcutkey/accounts/accounts.module.ts ***!
  \*****************************************************/
/*! exports provided: AccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsModule", function() { return AccountsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts-routing.module */ "./src/shortcutkey/accounts/accounts-routing.module.ts");
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts.component */ "./src/shortcutkey/accounts/accounts.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _app_theme_view_account_enquiry_account_enquiry_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/theme/view/account-enquiry/account-enquiry.module */ "./src/app/theme/view/account-enquiry/account-enquiry.module.ts");








class AccountsModule {
}
AccountsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountsModule });
AccountsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountsModule_Factory(t) { return new (t || AccountsModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["UserAuthInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _accounts_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountsRoutingModule"],
            _app_theme_view_account_enquiry_account_enquiry_module__WEBPACK_IMPORTED_MODULE_6__["AccountEnquiryModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountsModule, { declarations: [_accounts_component__WEBPACK_IMPORTED_MODULE_3__["AccountsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _accounts_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountsRoutingModule"],
        _app_theme_view_account_enquiry_account_enquiry_module__WEBPACK_IMPORTED_MODULE_6__["AccountEnquiryModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _accounts_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountsRoutingModule"],
                    _app_theme_view_account_enquiry_account_enquiry_module__WEBPACK_IMPORTED_MODULE_6__["AccountEnquiryModule"],
                ],
                declarations: [_accounts_component__WEBPACK_IMPORTED_MODULE_3__["AccountsComponent"]],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["UserAuthInterceptor"],
                        multi: true
                    },
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=shortcutkey-accounts-accounts-module.js.map