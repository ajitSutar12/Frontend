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
ManagersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagersComponent, selectors: [["app-managers"]], decls: 0, vars: 0, template: function ManagersComponent_Template(rf, ctx) { }, styles: [".required[_ngcontent-%COMP%] {\n  color: red;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: solid;\n  padding: 2%;\n  margin-bottom: 5px;\n}\n\ndiv.solid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: -2%;\n  height: 20px;\n  line-height: 15px;\n  font-size: 17px;\n}\n\ndiv.solid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.accordion-heading[_ngcontent-%COMP%] {\n  padding: 6px;\n  cursor: pointer;\n  background-color: #b7ceed;\n  font-weight: 500;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  border-radius: 2px;\n  height: 30px;\n}\n\n.fa-chevron-up[_ngcontent-%COMP%]:before {\n  margin-left: 10px;\n}\n\n.up-icon[_ngcontent-%COMP%] {\n  transform: 0.2s ease-out;\n}\n\n.icon[_ngcontent-%COMP%] {\n  animation-name: icon;\n  transform: rotate(180deg);\n  transform: 0.2s ease-out;\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  transition: 1s ease-in-out;\n  padding: 10px;\n  background: #fcf3f3;\n  border: 1px solid #ffe1e1;\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n  animation-name: slideUp;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  animation-timing-function: ease;\n  -webkit-animation-timing-function: ease;\n}\n\n@keyframes slideUp {\n  0% {\n    transform: translateY(-15%);\n  }\n  50% {\n    transform: translateY(2%);\n  }\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #2c8bea;\n  text-decoration: underline;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  overflow-x: auto;\n  padding-top: -46px;\n  margin: 0px;\n  margin-right: 0px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\ndiv.solid[_ngcontent-%COMP%] {\n  border-style: ridge;\n  border-color: #817d7de3;\n  padding: 0.4%;\n  margin-bottom: 3px;\n  padding-right: 12px;\n}\n\n.main-body[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  padding-bottom: 4% !important;\n  transition: all ease-in 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 0.2rem;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.1rem;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.input-group[_ngcontent-%COMP%]   .border-lable-flt[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  height: 25px;\n  padding-bottom: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border-radius: 2px;\n  border: 1px solid #cccccc;\n  height: 14px;\n  padding: 0rem 0.7rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  padding: 28px;\n  padding-bottom: 0px;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n  margin-left: 35px;\n}\n\n.iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  width: auto;\n  height: 40px;\n  margin-bottom: 2px;\n  margin-left: 0px !important;\n  box-shadow: 5px 0px 10px;\n  border-top: none;\n  padding: 10px 25px;\n  border-radius: 5px 5px 0px 0px;\n}\n\n.text-c-black[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.text-c-purple[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.c1[_ngcontent-%COMP%] {\n  background-color: #e3e9eb;\n  box-shadow: 3px 4px 10px;\n  margin-left: 0px;\n  border-radius: 0px 0px 5px 5px;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.tabcontent[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.tabcontent[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n  \n}\n\n.solid[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 300px;\n  margin-top: 80px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 15px 0 !important;\n  color: #37474f;\n  font-size: 18px;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaG9ydGN1dGtleS9tYW5hZ2Vycy9tYW5hZ2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBU0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTko7O0FBU0E7RUFDSSx1QkFBQTtBQU5KOztBQVNBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0E7RUFDSSxpQkFBQTtBQU5KOztBQVNBO0VBQ0ksd0JBQUE7QUFOSjs7QUFTQTtFQUNJLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQU5KOztBQXlCQTtFQUdJLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1Q0FBQTtBQXhCSjs7QUEyQkE7RUFFSTtJQUVJLDJCQUFBO0VBMUJOO0VBNkJFO0lBRUkseUJBQUE7RUE1Qk47QUFDRjs7QUEyQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBekNKOztBQTRDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBekNKOztBQTZDQTtFQUVJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtBQTVDSjs7QUErQ0E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQTVDSjs7QUErQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUE1Q0o7O0FBZ0RBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTdDSjs7QUFnREE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTdDSjs7QUFnREE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQTdDSjs7QUFnREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUE3Q0o7O0FBaURBO0VBQ0ksOEJBQUE7RUFDQSxpQkFBQTtBQTlDSjs7QUFpREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQTlDSjs7QUFvREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQW5ESjs7QUF1REE7RUFDSSxlQUFBO0FBcERKOztBQXVEQTtFQUNJLGVBQUE7QUFwREo7O0FBdURBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7QUFyREo7O0FBeURBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUF0REo7O0FBeURBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFJQSxrQkFBQTtFQUNBLGtCQUFBO0FBekRKOztBQTREQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtFQUF5QiwrQkFBQTtBQXhEN0I7O0FBMERBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXZESjs7QUF5REE7RUFFSSxpQkFBQTtBQXZESjs7QUEwREM7RUFDRywwQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBdkRKOztBQTBEQTtFQUVJLGVBQUE7QUF4REoiLCJmaWxlIjoic3JjL3Nob3J0Y3V0a2V5L21hbmFnZXJzL21hbmFnZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVkIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG5kaXYuc29saWQge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgcGFkZGluZzogMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG59XG5cbi8vIC5jYXJkLWJvZHkge1xuLy8gICAgIGZsZXg6IDEgMSBhdXRvO1xuLy8gICAgIG1pbi1oZWlnaHQ6IDFweDtcbi8vICAgICBwYWRkaW5nOiAwLjJyZW07XG4vLyB9XG5cbmRpdi5zb2xpZCBoMSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAtMiU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuZGl2LnNvbGlkIGgxIHNwYW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYWNjb3JkaW9uLWhlYWRpbmcge1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I3Y2VlZDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLmZhLWNoZXZyb24tdXA6YmVmb3JlIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnVwLWljb24ge1xuICAgIHRyYW5zZm9ybTogMC4ycyBlYXNlLW91dDtcbn1cblxuLmljb24ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBpY29uO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiAwLjJzIGVhc2Utb3V0O1xufVxuXG4vLyAuYWNjb3JkaW9uLWhlYWRpbmcge1xuXG4vLyAgICAgcGFkZGluZzogMTBweDtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbi8vICAgICBiYWNrZ3JvdW5kOiByZ2IoMTkyLCAxNCwgMzgpO1xuXG4vLyAgICAgY29sb3I6ICNmZmY7XG5cbi8vICAgICBmb250LXdlaWdodDogNjAwO1xuXG4vLyAgICAgbWFyZ2luLXRvcDogNHB4O1xuXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuLy8gfVxuXG4uYWNjb3JkaW9uLWNvbnRlbnQge1xuXG5cbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTIsIDI0MywgMjQzKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyMjUsIDIyNSk7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlVXA7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVVcCB7XG5cbiAgICAwJSB7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNSUpO1xuICAgIH1cblxuICAgIDUwJSB7XG5cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIlKTtcbiAgICB9XG5cblxuICAgIC8vIDY1JSB7XG4gICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNCUpO1xuICAgIC8vIH1cblxuXG4gICAgLy8gODAlIHtcbiAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQlKTtcbiAgICAvLyB9XG5cbn1cblxuXG5hIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJnYig0NCwgMTM5LCAyMzQpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IC00NnB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXG59XG5cbmRpdi5zb2xpZCB7XG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItc3R5bGU6IHJpZGdlO1xuICAgIGJvcmRlci1jb2xvcjogIzgxN2Q3ZGUzO1xuICAgIHBhZGRpbmc6IDAuNCU7XG4gICAgLy8gcGFkZGluZzogMC43JTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLm1haW4tYm9keSAucGFnZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDQlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMC4zcztcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcbn1cblxuXG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmlucHV0LWdyb3VwIC5ib3JkZXItbGFibGUtZmx0IC5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgcGFkZGluZzogMHJlbSAwLjdyZW07XG59XG5cbi5jYXJkIC5jYXJkLWJsb2NrIHtcbiAgICBwYWRkaW5nOiAyOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuXG4uaWZyYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4vLy8vLy8vLy9cblxuXG4uY2FyZC1mb290ZXIge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogNDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDEwcHg7XG5cbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XG5cbn1cblxuLnRleHQtYy1ibGFjayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dC1jLXB1cnBsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYzEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2U5ZWI7XG4gICAgYm94LXNoYWRvdzogM3B4IDRweCAxMHB4O1xuICAgIC8vIGJveC1zaGFkb3c6IDBweCA0cHggI2NlZDNkNDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcblxufVxuXG5wIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRhYmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICAvLyBtYXJnaW46IC0xM3B4O1xuICAgIC8vIG92ZXJmbG93OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbn1cbi50YWJjb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgLyogbWFrZSBzY3JvbGxiYXIgdHJhbnNwYXJlbnQgKi9cbn0gIFxuLnNvbGlke1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbn1cbi5idG5cbntcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuIC5uYXYtaXRlbSBhIHtcbiAgICBwYWRkaW5nOiAxNXB4IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzM3NDc0ZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbmFcbntcbiAgICBmb250LXNpemU6IDE2cHg7XG59Il19 */"] });
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