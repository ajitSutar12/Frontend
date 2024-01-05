(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shortcutkey-ledgers-ledgers-module"],{

/***/ "./src/shortcutkey/ledgers/ledgers-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/shortcutkey/ledgers/ledgers-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LedgersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgersRoutingModule", function() { return LedgersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ledgers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ledgers.component */ "./src/shortcutkey/ledgers/ledgers.component.ts");


//import {GeneralLedgerComponent} from './general-ledger.component';



const routes = [
    {
        path: '',
        component: _ledgers_component__WEBPACK_IMPORTED_MODULE_2__["LedgersComponent"],
        data: {
            title: 'Ledger View',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class LedgersRoutingModule {
}
LedgersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LedgersRoutingModule });
LedgersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LedgersRoutingModule_Factory(t) { return new (t || LedgersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LedgersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LedgersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/shortcutkey/ledgers/ledgers.component.ts":
/*!******************************************************!*\
  !*** ./src/shortcutkey/ledgers/ledgers.component.ts ***!
  \******************************************************/
/*! exports provided: LedgersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgersComponent", function() { return LedgersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_theme_view_ledger_view_ledger_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/theme/view/ledger-view/ledger-view.component */ "./src/app/theme/view/ledger-view/ledger-view.component.ts");



class LedgersComponent {
    constructor() { }
    ngOnInit() {
    }
}
LedgersComponent.ɵfac = function LedgersComponent_Factory(t) { return new (t || LedgersComponent)(); };
LedgersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LedgersComponent, selectors: [["app-ledgers"]], decls: 1, vars: 0, template: function LedgersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ledger-view");
    } }, directives: [_app_theme_view_ledger_view_ledger_view_component__WEBPACK_IMPORTED_MODULE_1__["LedgerViewComponent"]], styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: ridge;\n  border-color: #817d7de3;\n  padding: 0.4%;\n  margin-bottom: 3px;\n  padding-right: 12px;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-body[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  padding-bottom: 4% !important;\n  transition: all ease-in 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #ff5252;\n  color: #ff5252;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 11px;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 14px;\n  border-radius: 5px;\n  padding-bottom: 22px;\n  padding-top: 4px;\n  height: 25px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 13px;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  min-height: 18px !important;\n  max-height: 18px !important;\n  align-items: center;\n  font-size: 11px !important;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 18px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 5px;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 5px;\n  padding-left: 15px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaG9ydGN1dGtleS9sZWRnZXJzL2xlZGdlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFFSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBSko7O0FBT0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKSjs7QUFPQTtFQUVJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVNBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBTko7O0FBU0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFOSjs7QUFTQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBc0VJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTko7O0FBU0E7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0FBTkoiLCJmaWxlIjoic3JjL3Nob3J0Y3V0a2V5L2xlZGdlcnMvbGVkZ2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1aXJlZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5kaXYuc29saWQge1xyXG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XHJcbiAgICBib3JkZXItY29sb3I6ICM4MTdkN2RlMztcclxuICAgIHBhZGRpbmc6IDAuNCU7XHJcbiAgICAvLyBwYWRkaW5nOiAwLjclO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxufVxyXG5cclxuXHJcbi5jYXJkIC5jYXJkLWJsb2NrIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcblxyXG4ubWFpbi1ib2R5IC5wYWdlLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjNzO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMC4ycmVtO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjUyNTI7XHJcbiAgICBjb2xvcjogI2ZmNTI1MjtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgICAvLyBmbG9hdDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjJweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1pbi1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5ib3JkZXItbGFibGUtZmx0IC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHBhZGRpbmc6IDByZW0gMC43cmVtO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY29sLTEsXHJcbi5jb2wtMixcclxuLmNvbC0zLFxyXG4uY29sLTQsXHJcbi5jb2wtNSxcclxuLmNvbC02LFxyXG4uY29sLTcsXHJcbi5jb2wtOCxcclxuLmNvbC05LFxyXG4uY29sLTEwLFxyXG4uY29sLTExLFxyXG4uY29sLTEyLFxyXG4uY29sLFxyXG4uY29sLWF1dG8sXHJcbi5jb2wtc20tMSxcclxuLmNvbC1zbS0yLFxyXG4uY29sLXNtLTMsXHJcbi5jb2wtc20tNCxcclxuLmNvbC1zbS01LFxyXG4uY29sLXNtLTYsXHJcbi5jb2wtc20tNyxcclxuLmNvbC1zbS04LFxyXG4uY29sLXNtLTksXHJcbi5jb2wtc20tMTAsXHJcbi5jb2wtc20tMTEsXHJcbi5jb2wtc20tMTIsXHJcbi5jb2wtc20sXHJcbi5jb2wtc20tYXV0byxcclxuLmNvbC1tZC0xLFxyXG4uY29sLW1kLTIsXHJcbi5jb2wtbWQtMyxcclxuLmNvbC1tZC00LFxyXG4uY29sLW1kLTUsXHJcbi5jb2wtbWQtNixcclxuLmNvbC1tZC03LFxyXG4uY29sLW1kLTgsXHJcbi5jb2wtbWQtOSxcclxuLmNvbC1tZC0xMCxcclxuLmNvbC1tZC0xMSxcclxuLmNvbC1tZC0xMixcclxuLmNvbC1tZCxcclxuLmNvbC1tZC1hdXRvLFxyXG4uY29sLWxnLTEsXHJcbi5jb2wtbGctMixcclxuLmNvbC1sZy0zLFxyXG4uY29sLWxnLTQsXHJcbi5jb2wtbGctNSxcclxuLmNvbC1sZy02LFxyXG4uY29sLWxnLTcsXHJcbi5jb2wtbGctOCxcclxuLmNvbC1sZy05LFxyXG4uY29sLWxnLTEwLFxyXG4uY29sLWxnLTExLFxyXG4uY29sLWxnLTEyLFxyXG4uY29sLWxnLFxyXG4uY29sLWxnLWF1dG8sXHJcbi5jb2wteGwtMSxcclxuLmNvbC14bC0yLFxyXG4uY29sLXhsLTMsXHJcbi5jb2wteGwtNCxcclxuLmNvbC14bC01LFxyXG4uY29sLXhsLTYsXHJcbi5jb2wteGwtNyxcclxuLmNvbC14bC04LFxyXG4uY29sLXhsLTksXHJcbi5jb2wteGwtMTAsXHJcbi5jb2wteGwtMTEsXHJcbi5jb2wteGwtMTIsXHJcbi5jb2wteGwsXHJcbi5jb2wteGwtYXV0byB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LedgersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ledgers',
                templateUrl: './ledgers.component.html',
                styleUrls: ['./ledgers.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/shortcutkey/ledgers/ledgers.module.ts":
/*!***************************************************!*\
  !*** ./src/shortcutkey/ledgers/ledgers.module.ts ***!
  \***************************************************/
/*! exports provided: LedgersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgersModule", function() { return LedgersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ledgers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ledgers-routing.module */ "./src/shortcutkey/ledgers/ledgers-routing.module.ts");
/* harmony import */ var _ledgers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ledgers.component */ "./src/shortcutkey/ledgers/ledgers.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _app_theme_view_ledger_view_ledger_view_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/theme/view/ledger-view/ledger-view.module */ "./src/app/theme/view/ledger-view/ledger-view.module.ts");








class LedgersModule {
}
LedgersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LedgersModule });
LedgersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LedgersModule_Factory(t) { return new (t || LedgersModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["UserAuthInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ledgers_routing_module__WEBPACK_IMPORTED_MODULE_2__["LedgersRoutingModule"],
            _app_theme_view_ledger_view_ledger_view_module__WEBPACK_IMPORTED_MODULE_6__["LedgerViewModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LedgersModule, { declarations: [_ledgers_component__WEBPACK_IMPORTED_MODULE_3__["LedgersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ledgers_routing_module__WEBPACK_IMPORTED_MODULE_2__["LedgersRoutingModule"],
        _app_theme_view_ledger_view_ledger_view_module__WEBPACK_IMPORTED_MODULE_6__["LedgerViewModule"]], exports: [_ledgers_component__WEBPACK_IMPORTED_MODULE_3__["LedgersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LedgersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ledgers_routing_module__WEBPACK_IMPORTED_MODULE_2__["LedgersRoutingModule"],
                    _app_theme_view_ledger_view_ledger_view_module__WEBPACK_IMPORTED_MODULE_6__["LedgerViewModule"]
                ],
                exports: [_ledgers_component__WEBPACK_IMPORTED_MODULE_3__["LedgersComponent"]],
                declarations: [_ledgers_component__WEBPACK_IMPORTED_MODULE_3__["LedgersComponent"]],
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
//# sourceMappingURL=shortcutkey-ledgers-ledgers-module.js.map