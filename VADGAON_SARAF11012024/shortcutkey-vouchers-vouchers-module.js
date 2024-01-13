(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shortcutkey-vouchers-vouchers-module"],{

/***/ "./src/shortcutkey/vouchers/vouchers-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/shortcutkey/vouchers/vouchers-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VouchersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VouchersRoutingModule", function() { return VouchersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vouchers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vouchers.component */ "./src/shortcutkey/vouchers/vouchers.component.ts");





const routes = [
    {
        path: '',
        component: _vouchers_component__WEBPACK_IMPORTED_MODULE_2__["VouchersComponent"],
        data: {
            title: 'Voucher View',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class VouchersRoutingModule {
}
VouchersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VouchersRoutingModule });
VouchersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VouchersRoutingModule_Factory(t) { return new (t || VouchersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VouchersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VouchersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/shortcutkey/vouchers/vouchers.component.ts":
/*!********************************************************!*\
  !*** ./src/shortcutkey/vouchers/vouchers.component.ts ***!
  \********************************************************/
/*! exports provided: VouchersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VouchersComponent", function() { return VouchersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_theme_view_voucher_view_voucher_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/theme/view/voucher-view/voucher-view.component */ "./src/app/theme/view/voucher-view/voucher-view.component.ts");



class VouchersComponent {
    constructor() { }
    ngOnInit() { }
}
VouchersComponent.ɵfac = function VouchersComponent_Factory(t) { return new (t || VouchersComponent)(); };
VouchersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VouchersComponent, selectors: [["app-vouchers"]], decls: 1, vars: 0, template: function VouchersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-voucher-view");
    } }, directives: [_app_theme_view_voucher_view_voucher_view_component__WEBPACK_IMPORTED_MODULE_1__["VoucherViewComponent"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: ridge;\n  border-color: #817d7de3;\n  padding: 0.4%;\n  margin-bottom: 3px;\n  padding-right: 12px;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  overflow-x: auto;\n  padding-top: -46px;\n  margin: 0px;\n  margin-right: -28px;\n}\n\n.main-body[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  padding-bottom: 4% !important;\n  transition: all ease-in 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #ff5252;\n  color: #ff5252;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 11px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 14px;\n  border-radius: 5px;\n  padding-bottom: 22px;\n  padding-top: 4px;\n  height: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px;\n  max-height: 18px;\n  align-items: center;\n  font-size: 11px;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 18px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 5px;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 5px;\n  padding-left: 15px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #fafad7 !important;\n}\n\n.fixTableHead[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: 350px;\n}\n\n.fixTableHead[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  position: sticky;\n  top: -1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaG9ydGN1dGtleS92b3VjaGVycy92b3VjaGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUVJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtBQURKOztBQUtBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBRUksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBc0VJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUE7RUFDSSxvQ0FBQTtBQUhKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBSko7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLFNBQUE7QUFKSiIsImZpbGUiOiJzcmMvc2hvcnRjdXRrZXkvdm91Y2hlcnMvdm91Y2hlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbmRpdi5zb2xpZCB7XG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItc3R5bGU6IHJpZGdlO1xuICAgIGJvcmRlci1jb2xvcjogIzgxN2Q3ZGUzO1xuICAgIHBhZGRpbmc6IDAuNCU7XG4gICAgLy8gcGFkZGluZzogMC43JTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLmNhcmQgLmNhcmQtYmxvY2sge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAtNDZweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yOHB4O1xufVxuXG4ubWFpbi1ib2R5IC5wYWdlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAuNHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNCUgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjNzO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgcGFkZGluZzogMC4ycmVtO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmNTI1MjtcbiAgICBjb2xvcjogI2ZmNTI1MjtcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gICAgLy8gZmxvYXQ6IGxlZnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBtaW4taGVpZ2h0OiAxOHB4O1xuICAgIG1heC1oZWlnaHQ6IDE4cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5pbnB1dC1ncm91cCAuYm9yZGVyLWxhYmxlLWZsdCAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDByZW0gMC43cmVtO1xufVxuXG4uY2FyZCAuY2FyZC1ibG9jayB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jb2wtMSxcbi5jb2wtMixcbi5jb2wtMyxcbi5jb2wtNCxcbi5jb2wtNSxcbi5jb2wtNixcbi5jb2wtNyxcbi5jb2wtOCxcbi5jb2wtOSxcbi5jb2wtMTAsXG4uY29sLTExLFxuLmNvbC0xMixcbi5jb2wsXG4uY29sLWF1dG8sXG4uY29sLXNtLTEsXG4uY29sLXNtLTIsXG4uY29sLXNtLTMsXG4uY29sLXNtLTQsXG4uY29sLXNtLTUsXG4uY29sLXNtLTYsXG4uY29sLXNtLTcsXG4uY29sLXNtLTgsXG4uY29sLXNtLTksXG4uY29sLXNtLTEwLFxuLmNvbC1zbS0xMSxcbi5jb2wtc20tMTIsXG4uY29sLXNtLFxuLmNvbC1zbS1hdXRvLFxuLmNvbC1tZC0xLFxuLmNvbC1tZC0yLFxuLmNvbC1tZC0zLFxuLmNvbC1tZC00LFxuLmNvbC1tZC01LFxuLmNvbC1tZC02LFxuLmNvbC1tZC03LFxuLmNvbC1tZC04LFxuLmNvbC1tZC05LFxuLmNvbC1tZC0xMCxcbi5jb2wtbWQtMTEsXG4uY29sLW1kLTEyLFxuLmNvbC1tZCxcbi5jb2wtbWQtYXV0byxcbi5jb2wtbGctMSxcbi5jb2wtbGctMixcbi5jb2wtbGctMyxcbi5jb2wtbGctNCxcbi5jb2wtbGctNSxcbi5jb2wtbGctNixcbi5jb2wtbGctNyxcbi5jb2wtbGctOCxcbi5jb2wtbGctOSxcbi5jb2wtbGctMTAsXG4uY29sLWxnLTExLFxuLmNvbC1sZy0xMixcbi5jb2wtbGcsXG4uY29sLWxnLWF1dG8sXG4uY29sLXhsLTEsXG4uY29sLXhsLTIsXG4uY29sLXhsLTMsXG4uY29sLXhsLTQsXG4uY29sLXhsLTUsXG4uY29sLXhsLTYsXG4uY29sLXhsLTcsXG4uY29sLXhsLTgsXG4uY29sLXhsLTksXG4uY29sLXhsLTEwLFxuLmNvbC14bC0xMSxcbi5jb2wteGwtMTIsXG4uY29sLXhsLFxuLmNvbC14bC1hdXRvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbn1cblxudHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZDcgIWltcG9ydGFudDtcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUlKTtcbn1cblxuLmZpeFRhYmxlSGVhZCB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBoZWlnaHQ6IDM1MHB4O1xufVxuXG4uZml4VGFibGVIZWFkIHRoZWFkIHRkIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogLTFweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VouchersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vouchers',
                templateUrl: './vouchers.component.html',
                styleUrls: ['./vouchers.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/shortcutkey/vouchers/vouchers.module.ts":
/*!*****************************************************!*\
  !*** ./src/shortcutkey/vouchers/vouchers.module.ts ***!
  \*****************************************************/
/*! exports provided: VouchersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VouchersModule", function() { return VouchersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _vouchers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vouchers.component */ "./src/shortcutkey/vouchers/vouchers.component.ts");
/* harmony import */ var _vouchers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vouchers-routing.module */ "./src/shortcutkey/vouchers/vouchers-routing.module.ts");
/* harmony import */ var _app_theme_view_voucher_view_voucher_view_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/theme/view/voucher-view/voucher-view.module */ "./src/app/theme/view/voucher-view/voucher-view.module.ts");






class VouchersModule {
}
VouchersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VouchersModule });
VouchersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VouchersModule_Factory(t) { return new (t || VouchersModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _vouchers_routing_module__WEBPACK_IMPORTED_MODULE_3__["VouchersRoutingModule"],
            _app_theme_view_voucher_view_voucher_view_module__WEBPACK_IMPORTED_MODULE_4__["VoucherViewModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VouchersModule, { declarations: [_vouchers_component__WEBPACK_IMPORTED_MODULE_2__["VouchersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _vouchers_routing_module__WEBPACK_IMPORTED_MODULE_3__["VouchersRoutingModule"],
        _app_theme_view_voucher_view_voucher_view_module__WEBPACK_IMPORTED_MODULE_4__["VoucherViewModule"]], exports: [_vouchers_component__WEBPACK_IMPORTED_MODULE_2__["VouchersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VouchersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _vouchers_routing_module__WEBPACK_IMPORTED_MODULE_3__["VouchersRoutingModule"],
                    _app_theme_view_voucher_view_voucher_view_module__WEBPACK_IMPORTED_MODULE_4__["VoucherViewModule"]
                ],
                exports: [_vouchers_component__WEBPACK_IMPORTED_MODULE_2__["VouchersComponent"]],
                declarations: [_vouchers_component__WEBPACK_IMPORTED_MODULE_2__["VouchersComponent"]],
                providers: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=shortcutkey-vouchers-vouchers-module.js.map