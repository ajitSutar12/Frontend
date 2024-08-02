(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shortcutkey-managers-managers-module"],{

/***/ "./src/shortcutkey/managers/managers-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/shortcutkey/managers/managers-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ManagersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagersRoutingModule", function() { return ManagersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _managers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./managers.component */ "./src/shortcutkey/managers/managers.component.ts");





const routes = [
    {
        path: '',
        component: _managers_component__WEBPACK_IMPORTED_MODULE_2__["ManagersComponent"],
        data: {
            title: 'Manager View',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class ManagersRoutingModule {
}
ManagersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManagersRoutingModule });
ManagersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManagersRoutingModule_Factory(t) { return new (t || ManagersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManagersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/shortcutkey/managers/managers.component.ts":
/*!********************************************************!*\
  !*** ./src/shortcutkey/managers/managers.component.ts ***!
  \********************************************************/
/*! exports provided: ManagersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagersComponent", function() { return ManagersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ManagersComponent {
    constructor() { }
    ngOnInit() { }
}
ManagersComponent.ɵfac = function ManagersComponent_Factory(t) { return new (t || ManagersComponent)(); };
ManagersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagersComponent, selectors: [["app-managers"]], decls: 0, vars: 0, template: function ManagersComponent_Template(rf, ctx) { }, styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n  margin-bottom: 5px;\n}\n\ndiv.solid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: -2%;\n  height: 20px;\n  line-height: 15px;\n  font-size: 17px;\n}\n\ndiv.solid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.accordion-heading[_ngcontent-%COMP%] {\n  padding: 6px;\n  cursor: pointer;\n  background-color: #b7ceed;\n  font-weight: 500;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  border-radius: 2px;\n  height: 30px;\n}\n\n.fa-chevron-up[_ngcontent-%COMP%]:before {\n  margin-left: 10px;\n}\n\n.up-icon[_ngcontent-%COMP%] {\n  transform: 0.2s ease-out;\n}\n\n.icon[_ngcontent-%COMP%] {\n  animation-name: icon;\n  transform: rotate(180deg);\n  transform: 0.2s ease-out;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  transition: 1s ease-in-out;\n  padding: 10px;\n  background: #fcf3f3;\n  border: 1px solid #ffe1e1;\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n  animation-name: slideUp;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  animation-timing-function: ease;\n  -webkit-animation-timing-function: ease;\n}\n\n@keyframes slideUp {\n  0% {\n    transform: translateY(-15%);\n  }\n  50% {\n    transform: translateY(2%);\n  }\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #2c8bea;\n  text-decoration: underline;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  overflow-x: auto;\n  padding-top: -46px;\n  margin: 0px;\n  margin-right: 0px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: ridge;\n  border-color: #817d7de3;\n  padding: 0.4%;\n  margin-bottom: 3px;\n  padding-right: 12px;\n}\n\n.main-body[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  padding-bottom: 4% !important;\n  transition: all ease-in 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 14px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 28px;\n  padding-bottom: 0px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n\n.iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  width: auto;\n  height: 40px;\n  margin-bottom: 2px;\n  margin-left: 0px !important;\n  box-shadow: 5px 0px 10px;\n  border-top: none;\n  padding: 10px 25px;\n  border-radius: 5px 5px 0px 0px;\n}\n\n.text-c-black[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.text-c-purple[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.c1[_ngcontent-%COMP%] {\n  background-color: #e3e9eb;\n  box-shadow: 3px 4px 10px;\n  margin-left: 0px;\n  border-radius: 0px 0px 5px 5px;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.tabcontent[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.tabcontent[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n  \n}\n\n.solid[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 300px;\n  margin-top: 80px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 15px 0 !important;\n  color: #37474f;\n  font-size: 18px;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaG9ydGN1dGtleS9tYW5hZ2Vycy9tYW5hZ2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBU0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTko7O0FBU0E7RUFDSSx1QkFBQTtBQU5KOztBQVNBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0E7RUFDSSxpQkFBQTtBQU5KOztBQVNBO0VBQ0ksd0JBQUE7QUFOSjs7QUFTQTtFQUNJLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQU5KOztBQXlCQTtFQUdJLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1Q0FBQTtBQXhCSjs7QUEyQkE7RUFFSTtJQUVJLDJCQUFBO0VBMUJOO0VBNkJFO0lBRUkseUJBQUE7RUE1Qk47QUFDRjs7QUEyQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBekNKOztBQTRDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBekNKOztBQTZDQTtFQUVJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtBQTVDSjs7QUErQ0E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQTVDSjs7QUErQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUE1Q0o7O0FBZ0RBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTdDSjs7QUFnREE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTdDSjs7QUFnREE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQTdDSjs7QUFnREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUE3Q0o7O0FBaURBO0VBQ0ksOEJBQUE7RUFDQSxpQkFBQTtBQTlDSjs7QUFpREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQTlDSjs7QUFvREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQW5ESjs7QUF1REE7RUFDSSxlQUFBO0FBcERKOztBQXVEQTtFQUNJLGVBQUE7QUFwREo7O0FBdURBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7QUFyREo7O0FBeURBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUF0REo7O0FBeURBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFJQSxrQkFBQTtFQUNBLGtCQUFBO0FBekRKOztBQTREQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtFQUF5QiwrQkFBQTtBQXhEN0I7O0FBMERBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXZESjs7QUF5REE7RUFFSSxpQkFBQTtBQXZESjs7QUEwREM7RUFDRywwQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBdkRKOztBQTBEQTtFQUVJLGVBQUE7QUF4REoiLCJmaWxlIjoic3JjL3Nob3J0Y3V0a2V5L21hbmFnZXJzL21hbmFnZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmRpdi5zb2xpZCB7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG59XHJcblxyXG4vLyAuY2FyZC1ib2R5IHtcclxuLy8gICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4vLyAgICAgbWluLWhlaWdodDogMXB4O1xyXG4vLyAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4vLyB9XHJcblxyXG5kaXYuc29saWQgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IC0yJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5kaXYuc29saWQgaDEgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiN2NlZWQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZmEtY2hldnJvbi11cDpiZWZvcmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi51cC1pY29uIHtcclxuICAgIHRyYW5zZm9ybTogMC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGljb247XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiAwLjJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4vLyAuYWNjb3JkaW9uLWhlYWRpbmcge1xyXG5cclxuLy8gICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4vLyAgICAgYmFja2dyb3VuZDogcmdiKDE5MiwgMTQsIDM4KTtcclxuXHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuLy8gICAgIG1hcmdpbi10b3A6IDRweDtcclxuXHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbi8vIH1cclxuXHJcbi5hY2NvcmRpb24tY29udGVudCB7XHJcblxyXG5cclxuICAgIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTIsIDI0MywgMjQzKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDIyNSwgMjI1KTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVVcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xyXG5cclxuICAgIDAlIHtcclxuXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNSUpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcblxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyJSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIDY1JSB7XHJcbiAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00JSk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIDgwJSB7XHJcbiAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQlKTtcclxuICAgIC8vIH1cclxuXHJcbn1cclxuXHJcblxyXG5hIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoNDQsIDEzOSwgMjM0KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogLTQ2cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuXHJcbn1cclxuXHJcbmRpdi5zb2xpZCB7XHJcbiAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXN0eWxlOiByaWRnZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzgxN2Q3ZGUzO1xyXG4gICAgcGFkZGluZzogMC40JTtcclxuICAgIC8vIHBhZGRpbmc6IDAuNyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4ubWFpbi1ib2R5IC5wYWdlLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjNzO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMC4ycmVtO1xyXG59XHJcblxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5ib3JkZXItbGFibGUtZmx0IC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIHBhZGRpbmc6IDByZW0gMC43cmVtO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiAyOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbn1cclxuXHJcbi5pZnJhbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4vLy8vLy8vLy9cclxuXHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDEwcHg7XHJcblxyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcclxuXHJcbn1cclxuXHJcbi50ZXh0LWMtYmxhY2sge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udGV4dC1jLXB1cnBsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5jMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlOWViO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDRweCAxMHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDRweCAjY2VkM2Q0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxuXHJcbn1cclxuXHJcbnAge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRhYmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC8vIG1hcmdpbjogLTEzcHg7XHJcbiAgICAvLyBvdmVyZmxvdzogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHJcbn1cclxuLnRhYmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgLyogbWFrZSBzY3JvbGxiYXIgdHJhbnNwYXJlbnQgKi9cclxufSAgXHJcbi5zb2xpZHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuLmJ0blxyXG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuIC5uYXYtaXRlbSBhIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMzNzQ3NGY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmFcclxue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-managers',
                templateUrl: './managers.component.html',
                styleUrls: ['./managers.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/shortcutkey/managers/managers.module.ts":
/*!*****************************************************!*\
  !*** ./src/shortcutkey/managers/managers.module.ts ***!
  \*****************************************************/
/*! exports provided: ManagersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagersModule", function() { return ManagersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _managers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./managers.component */ "./src/shortcutkey/managers/managers.component.ts");
/* harmony import */ var _managers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managers-routing.module */ "./src/shortcutkey/managers/managers-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/user-auth.interceptor */ "./src/app/user-auth.interceptor.ts");
/* harmony import */ var _app_theme_view_manager_view_manager_view_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/theme/view/manager-view/manager-view.module */ "./src/app/theme/view/manager-view/manager-view.module.ts");








class ManagersModule {
}
ManagersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManagersModule });
ManagersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManagersModule_Factory(t) { return new (t || ManagersModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["UserAuthInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _managers_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagersRoutingModule"],
            _app_theme_view_manager_view_manager_view_module__WEBPACK_IMPORTED_MODULE_6__["ManagerViewModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManagersModule, { declarations: [_managers_component__WEBPACK_IMPORTED_MODULE_2__["ManagersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _managers_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagersRoutingModule"],
        _app_theme_view_manager_view_manager_view_module__WEBPACK_IMPORTED_MODULE_6__["ManagerViewModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _managers_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagersRoutingModule"],
                    _app_theme_view_manager_view_manager_view_module__WEBPACK_IMPORTED_MODULE_6__["ManagerViewModule"]
                ],
                declarations: [_managers_component__WEBPACK_IMPORTED_MODULE_2__["ManagersComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _app_user_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__["UserAuthInterceptor"],
                        multi: true
                    }
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=shortcutkey-managers-managers-module.js.map