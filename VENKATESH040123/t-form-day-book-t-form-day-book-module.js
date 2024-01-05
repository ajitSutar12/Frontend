(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["t-form-day-book-t-form-day-book-module"],{

/***/ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts ***!
  \******************************************************************************/
/*! exports provided: OwnbranchMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnbranchMasterService", function() { return OwnbranchMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class OwnbranchMasterService {
    constructor(http) {
        this.http = http;
        this.OwnbranchMasterObject = new Array();
        // API 
        //// own-branch-master"; 
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
    }
    getOwnbranchList() {
        this.OwnbranchMasterObject = [];
        return this.http.get(this.url + '/own-branch-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(ele => {
            ele.forEach(element => {
                let obj = { label: element.CODE + ' ' + element.NAME, value: element.id, name: element.CODE, branchName: element.NAME };
                this.OwnbranchMasterObject.push(obj);
            });
            return this.OwnbranchMasterObject;
        }));
    }
}
OwnbranchMasterService.ɵfac = function OwnbranchMasterService_Factory(t) { return new (t || OwnbranchMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
OwnbranchMasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OwnbranchMasterService, factory: OwnbranchMasterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnbranchMasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/iframe1/iframe1-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/iframe1/iframe1-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: Iframe1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe1RoutingModule", function() { return Iframe1RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iframe1/iframe1.component */ "./src/app/theme/reports/daily-reports/iframe1/iframe1/iframe1.component.ts");





const routes = [
    {
        path: '',
        component: _iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_2__["Iframe1Component"],
        data: {
            title: 'Iframe4',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class Iframe1RoutingModule {
}
Iframe1RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Iframe1RoutingModule });
Iframe1RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Iframe1RoutingModule_Factory(t) { return new (t || Iframe1RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Iframe1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Iframe1RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/iframe1/iframe1.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/iframe1/iframe1.module.ts ***!
  \***********************************************************************/
/*! exports provided: Iframe1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe1Module", function() { return Iframe1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _iframe1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iframe1-routing.module */ "./src/app/theme/reports/daily-reports/iframe1/iframe1-routing.module.ts");
/* harmony import */ var _iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iframe1/iframe1.component */ "./src/app/theme/reports/daily-reports/iframe1/iframe1/iframe1.component.ts");






class Iframe1Module {
}
Iframe1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Iframe1Module });
Iframe1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Iframe1Module_Factory(t) { return new (t || Iframe1Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _iframe1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Iframe1RoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Iframe1Module, { declarations: [_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_3__["Iframe1Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _iframe1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Iframe1RoutingModule"]], exports: [_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_3__["Iframe1Component"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Iframe1Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_3__["Iframe1Component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _iframe1_routing_module__WEBPACK_IMPORTED_MODULE_2__["Iframe1RoutingModule"]
                ],
                exports: [_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_3__["Iframe1Component"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/iframe1/iframe1/iframe1.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/iframe1/iframe1/iframe1.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Iframe1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe1Component", function() { return Iframe1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");







class Iframe1Component {
    constructor(fb, http, router, sanitizer) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.sanitizer = sanitizer;
        this.formSubmitted = false;
        // ng model variable
        this.ageCaldate = null;
        this.showRepo = false;
        //api
        this.url1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
    ngOnInit() {
    }
    view(event) { }
    close($event) {
        this.showRepo = true;
        let obj = this.angForm.value;
        this.resetForm();
        this.comp.pdf;
        this.comp.url;
        // const url="http://localhost:4200/reports";
        // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    //  close(){
    //   this.resetForm()
    // }
    // Reset Function
    resetForm() {
        this.showRepo = false;
    }
}
Iframe1Component.ɵfac = function Iframe1Component_Factory(t) { return new (t || Iframe1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
Iframe1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Iframe1Component, selectors: [["app-iframe1"]], inputs: { url: "url" }, decls: 9, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "card"], ["novalidate", ""], [1, "card-block"], [1, "embed-responsive", "embed-responsive-16by9"], [1, "loader"], ["src", "assets/Loading.gif"], [3, "src"]], template: function Iframe1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, styles: [".loader[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12;\n  top: 15;\n  margin-left: 43%;\n  margin-top: 5%;\n  background: url(/src/assets/loading.gif) 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvcmVwb3J0cy9kYWlseS1yZXBvcnRzL2lmcmFtZTEvaWZyYW1lMS9pZnJhbWUxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9yZXBvcnRzL2RhaWx5LXJlcG9ydHMvaWZyYW1lMS9pZnJhbWUxL2lmcmFtZTEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTI7XHJcbiAgICB0b3A6IDE1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQzJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9zcmMvYXNzZXRzL2xvYWRpbmcuZ2lmKSAwIDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Iframe1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iframe1',
                templateUrl: './iframe1.component.html',
                styleUrls: ['./iframe1.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/t-form-day-book/t-form-day-book-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/t-form-day-book/t-form-day-book-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: TFormDayBookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TFormDayBookRoutingModule", function() { return TFormDayBookRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _t_form_day_book_t_form_day_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t-form-day-book/t-form-day-book.component */ "./src/app/theme/reports/daily-reports/t-form-day-book/t-form-day-book/t-form-day-book.component.ts");





const routes = [
    {
        path: '',
        component: _t_form_day_book_t_form_day_book_component__WEBPACK_IMPORTED_MODULE_2__["TFormDayBookComponent"],
        data: {
            title: 'T Form Day Book',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
class TFormDayBookRoutingModule {
}
TFormDayBookRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TFormDayBookRoutingModule });
TFormDayBookRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TFormDayBookRoutingModule_Factory(t) { return new (t || TFormDayBookRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TFormDayBookRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TFormDayBookRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/t-form-day-book/t-form-day-book.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/t-form-day-book/t-form-day-book.module.ts ***!
  \***************************************************************************************/
/*! exports provided: TFormDayBookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TFormDayBookModule", function() { return TFormDayBookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _t_form_day_book_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t-form-day-book-routing.module */ "./src/app/theme/reports/daily-reports/t-form-day-book/t-form-day-book-routing.module.ts");
/* harmony import */ var _t_form_day_book_t_form_day_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t-form-day-book/t-form-day-book.component */ "./src/app/theme/reports/daily-reports/t-form-day-book/t-form-day-book/t-form-day-book.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _iframe1_iframe1_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../iframe1/iframe1.module */ "./src/app/theme/reports/daily-reports/iframe1/iframe1.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");












const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class TFormDayBookModule {
}
TFormDayBookModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TFormDayBookModule });
TFormDayBookModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TFormDayBookModule_Factory(t) { return new (t || TFormDayBookModule)(); }, providers: [{
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _t_form_day_book_routing_module__WEBPACK_IMPORTED_MODULE_2__["TFormDayBookRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
            _iframe1_iframe1_module__WEBPACK_IMPORTED_MODULE_8__["Iframe1Module"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TFormDayBookModule, { declarations: [_t_form_day_book_t_form_day_book_component__WEBPACK_IMPORTED_MODULE_3__["TFormDayBookComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _t_form_day_book_routing_module__WEBPACK_IMPORTED_MODULE_2__["TFormDayBookRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"], _iframe1_iframe1_module__WEBPACK_IMPORTED_MODULE_8__["Iframe1Module"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TFormDayBookModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_t_form_day_book_t_form_day_book_component__WEBPACK_IMPORTED_MODULE_3__["TFormDayBookComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _t_form_day_book_routing_module__WEBPACK_IMPORTED_MODULE_2__["TFormDayBookRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                    _iframe1_iframe1_module__WEBPACK_IMPORTED_MODULE_8__["Iframe1Module"]
                ], providers: [{
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                    },]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/theme/reports/daily-reports/t-form-day-book/t-form-day-book/t-form-day-book.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/theme/reports/daily-reports/t-form-day-book/t-form-day-book/t-form-day-book.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: TFormDayBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TFormDayBookComponent", function() { return TFormDayBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dropdownService/own-branch-master-dropdown.service */ "./src/app/shared/dropdownService/own-branch-master-dropdown.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service */ "./src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _iframe1_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../iframe1/iframe1/iframe1.component */ "./src/app/theme/reports/daily-reports/iframe1/iframe1/iframe1.component.ts");

















function TFormDayBookComponent_ng_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const values_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", values_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", values_r4.label, " ");
} }
function TFormDayBookComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TFormDayBookComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TFormDayBookComponent_div_25_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ngForm.controls["Branch"].errors == null ? null : ctx_r1.ngForm.controls["Branch"].errors.required);
} }
function TFormDayBookComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TFormDayBookComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TFormDayBookComponent_div_52_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.angForm.controls["date"].errors == null ? null : ctx_r2.angForm.controls["date"].errors.required);
} }
function TFormDayBookComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-iframe1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx_r3.iframe1url);
} }
const _c0 = function () { return { dateInputFormat: "DD/MM/YYYY" }; };
class TFormDayBookComponent {
    constructor(fb, sanitizer, systemParameter, config, router, _ownbranchmasterservice) {
        this.fb = fb;
        this.sanitizer = sanitizer;
        this.systemParameter = systemParameter;
        this.config = config;
        this.router = router;
        this._ownbranchmasterservice = _ownbranchmasterservice;
        this.iframe1url = '';
        this.formSubmitted = false;
        this.date = null;
        this.showRepo = false;
        this.clicked = false;
        this.bsValue = new Date();
        //ng model
        this.ngbranch = null;
        this.report_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].report_url;
        this.Types = [
            { id: 1, value: "Summary" },
            { id: 2, value: "Details" },
        ];
        this.date = moment__WEBPACK_IMPORTED_MODULE_5__().format('DD/MM/YYYY');
        this.maxDate = new Date();
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate());
    }
    ngOnInit() {
        this.createForm();
        this._ownbranchmasterservice.getOwnbranchList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.branchOption = data;
        });
        //get date from syspara current_date
        this.systemParameter.getFormData(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(data => {
            this.date = data.CURRENT_DATE;
        });
        let data = localStorage.getItem('user');
        let result = JSON.parse(data);
        if (result.RoleDefine[0].Role.id == 1) {
            this.ngbranch = result.branch.id;
            this.branchName = result.branch.NAME;
            this.ngForm.controls['BRANCH_CODE'].enable();
        }
        else {
            this.ngForm.controls['BRANCH_CODE'].disable();
            this.ngbranch = result.branch.id;
            this.branchName = result.branch.NAME;
        }
    }
    // validations for ngForm
    createForm() {
        this.ngForm = this.fb.group({
            Branch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Print_Code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Detail'),
            date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    view(event) {
        // debugger
        event.preventDefault();
        this.formSubmitted = true;
        let userData = JSON.parse(localStorage.getItem('user'));
        let bankName = userData.branch.syspara.BANK_NAME;
        let branchName = userData.branch.NAME;
        if (this.ngForm.controls['Print_Code'].value == "Detail" && this.ngForm.valid) {
            this.showRepo = true;
            let obj = this.ngForm.value;
            let type = obj.Print_Code;
            // check the conition of the default(syspara) date and date parameter and set the format
            let Date;
            if (this.date == obj.date) {
                Date = moment__WEBPACK_IMPORTED_MODULE_5__(this.date, 'DD/MM/YYYY').format('DD/MM/YYYY');
            }
            else {
                Date = moment__WEBPACK_IMPORTED_MODULE_5__(this.date, 'DD/MM/YYYY').format('DD/MM/YYYY');
            }
            ;
            // let Date = this.date;
            let Branch = obj.Branch;
            this.iframe1url = this.report_url + "examples/DayBookfinal1.php?Date=" + Date + "&Branch=" + Branch + "&branchName=" + branchName + "&type=" + type + "&bankName=" + bankName + " ";
            // console.log(this.iframe1url);
            this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
        }
        else if (this.ngForm.controls['Print_Code'].value == "Summary" && this.ngForm.valid) {
            this.showRepo = true;
            let obj = this.ngForm.value;
            let type = obj.Print_Code;
            // check the conition of the default(syspara) date and date parameter and set the format
            let Date;
            if (this.date == obj.date) {
                Date = moment__WEBPACK_IMPORTED_MODULE_5__(this.date, 'DD/MM/YYYY').format('DD/MM/YYYY');
            }
            else {
                Date = moment__WEBPACK_IMPORTED_MODULE_5__(this.date, 'DD/MM/YYYY').format('DD/MM/YYYY');
            }
            ;
            // let Date = this.date;
            let Branch = obj.Branch;
            this.iframe1url = this.report_url + "examples/DayBookSummary.php?Date=" + Date + "&Branch=" + Branch + "&branchName=" + this.branchName + "&type=" + type + "&bankName=" + bankName + " ";
            console.log(this.iframe1url);
            this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false; });
        }
    }
    close() {
        this.resetForm();
    }
    resetForm() {
        // this.createForm()
        // this.ngForm.controls. Print_Code.reset();
        this.showRepo = false;
        this.clicked = false;
    }
    getBranch(event) {
        this.ngbranch = event.value;
        this.branchName = event.branchName;
    }
}
TFormDayBookComponent.ɵfac = function TFormDayBookComponent_Factory(t) { return new (t || TFormDayBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_8__["SystemMasterParametersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_2__["OwnbranchMasterService"])); };
TFormDayBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TFormDayBookComponent, selectors: [["app-t-form-day-book"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_2__["OwnbranchMasterService"]])], decls: 65, vars: 12, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "requiredlable", 2, "float", "right", "font-size", "12px", "color", "black"], [1, "required"], [3, "formGroup"], [1, "card-block"], [1, "col-sm-12", "col-md-1"], ["for", "Scheme Code"], [1, "col-sm-12", "col-md-2"], [1, "form-group", "form-primary", "form-static-label"], [1, "border-lable-flt"], ["formControlName", "Branch", "bindValue", "value", "bindLabel", "label", "placeholder", "Branch", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group form-primary form-static-label", "class", "alert alert-danger", 4, "ngIf"], ["for", ""], [1, "col-sm-12", "col-md-3"], [1, "form-radio"], [1, "radio", "radio-inline"], ["type", "radio", "name", "Print_Code", "value", "Detail", "formControlName", "Print_Code", 3, "checked"], [1, "helper"], ["type", "radio", "name", "Print_Code", "value", "Summary", "formControlName", "Print_Code"], ["for", "Date"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "dd/mm/yyyy", "name", "date", "id", "date", "appButton", "", "minlength", "10", "maxlength", "10", "formControlName", "date", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsValue", "bsConfig", "ngModelChange", "keypress"], [1, "col-md"], ["value", "submit", 1, "btn", "btn-outline-primary", "btn-sm", 3, "disabled", "click"], [1, "col-md-1"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [3, "url"]], template: function TFormDayBookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "T Form Day Book With Details/Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fields marked with (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ") are mandatory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TFormDayBookComponent_Template_ng_select_ngModelChange_23_listener($event) { return ctx.ngbranch = $event; })("change", function TFormDayBookComponent_Template_ng_select_change_23_listener($event) { return ctx.getBranch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TFormDayBookComponent_ng_option_24_Template, 2, 2, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TFormDayBookComponent_div_25_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Detail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Summary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "sub", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TFormDayBookComponent_Template_input_ngModelChange_51_listener($event) { return ctx.date = $event; })("keypress", function TFormDayBookComponent_Template_input_keypress_51_listener($event) { return $event.charCode >= 48 && $event.charCode < 58 || $event.charCode == 47; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, TFormDayBookComponent_div_52_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TFormDayBookComponent_Template_button_click_54_listener($event) { ctx.view($event); return ctx.clicked = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TFormDayBookComponent_Template_button_click_57_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Report Frame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, TFormDayBookComponent_div_64_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ngForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ngbranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branchOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["Branch"].invalid && (ctx.ngForm.controls["Branch"].dirty || ctx.ngForm.controls["Branch"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date)("bsValue", ctx.bsValue)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm.controls["date"].invalid && (ctx.ngForm.controls["date"].dirty || ctx.ngForm.controls["date"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.clicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRepo);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵr"], _iframe1_iframe1_iframe1_component__WEBPACK_IMPORTED_MODULE_13__["Iframe1Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3JlcG9ydHMvZGFpbHktcmVwb3J0cy90LWZvcm0tZGF5LWJvb2svdC1mb3JtLWRheS1ib29rL3QtZm9ybS1kYXktYm9vay5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TFormDayBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-t-form-day-book',
                templateUrl: './t-form-day-book.component.html',
                styleUrls: ['./t-form-day-book.component.scss'],
                providers: [src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_2__["OwnbranchMasterService"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }, { type: src_app_theme_utility_scheme_parameters_system_master_parameters_system_master_parameters_service__WEBPACK_IMPORTED_MODULE_8__["SystemMasterParametersService"] }, { type: _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectConfig"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: src_app_shared_dropdownService_own_branch_master_dropdown_service__WEBPACK_IMPORTED_MODULE_2__["OwnbranchMasterService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=t-form-day-book-t-form-day-book-module.js.map